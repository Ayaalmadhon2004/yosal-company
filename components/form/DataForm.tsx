"use client";
import { useId, useState } from "react";
import { sendProjectRequest } from "@/lib/api";
import toast from "react-hot-toast";
import { AppButton } from "../ui/AppButton";
import Honeypot from "./Honeypot";
import FieldError, { RequiredMark } from "./FieldError";
import {
  FORM_MESSAGES,
  cooldownMessage,
  getCooldownRemaining,
  isHoneypotFilled,
  isValidEmail,
  isValidPhone,
  markSubmitted,
} from "@/lib/formGuards";

const COOLDOWN_KEY = "audit-form";

function validatePhone(value: string): string {
  if (!value.trim()) return FORM_MESSAGES.phoneRequired;
  return isValidPhone(value) ? "" : FORM_MESSAGES.phoneInvalid;
}

function validateEmail(value: string): string {
  if (!value) return FORM_MESSAGES.emailRequired;
  return isValidEmail(value) ? "" : FORM_MESSAGES.emailInvalid;
}

export default function ProjectAuditForm() {
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const uid = useId();
  const nameId = `${uid}-name`;
  const phoneId = `${uid}-phone`;
  const emailId = `${uid}-email`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setFormError("");

    // فخ الروبوتات: نجاح صامت دون استدعاء الـ API
    if (isHoneypotFilled(formData)) {
      form.reset();
      return;
    }

    const nameValue = ((formData.get("full_name") as string) || "").trim();
    const phoneValue = (formData.get("phone") as string) || "";
    const emailValue = ((formData.get("email") as string) || "").trim();
    const nameMsg = nameValue ? "" : FORM_MESSAGES.nameRequired;
    const phoneMsg = validatePhone(phoneValue);
    const emailMsg = validateEmail(emailValue);
    setNameError(nameMsg);
    setPhoneError(phoneMsg);
    setEmailError(emailMsg);
    const firstInvalidId = [
      { message: nameMsg, id: nameId },
      { message: phoneMsg, id: phoneId },
      { message: emailMsg, id: emailId },
    ].find((field) => field.message)?.id;
    if (firstInvalidId) {
      document.getElementById(firstInvalidId)?.focus();
      return;
    }

    const remaining = getCooldownRemaining(COOLDOWN_KEY);
    if (remaining > 0) {
      setFormError(cooldownMessage(remaining));
      return;
    }

    setLoading(true);
    
      const data = {
        name: formData.get("full_name") as string,
        phone: formData.get("phone") as string,
        email: emailValue,
        project_url: "طلب تقييم داخلي",
      };

    try {
      const result = await sendProjectRequest(data);

      if (result.status === "Success") {
        toast.success("تم إرسال طلبك بنجاح! فريقنا سيتواصل معك.");
        markSubmitted(COOLDOWN_KEY);
        form.reset();
      } else {
        throw new Error(result.message || "حدث خطأ في البيانات");
      }
    } catch (err: unknown) {
      toast.error((err instanceof Error ? err.message : "") || "تعذر الإرسال، يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#1e233d]/50 border border-orange-500/30 rounded-[30px] p-6 shadow-xl" dir="rtl">
      {/* البوكس العلوي - عرض خاص */}
      <div className="bg-[#2d345a] rounded-2xl p-5 mb-8 text-center border border-white/5">
        <span className="text-orange-300 font-bold text-sm block mb-2">عرض خاص</span>
        <h2 className="text-white font-bold text-lg mb-2">احصل على تقييم مجاني لمتجرك/مشروعك</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          سنقوم بإعطائك المعلومات الكافية لمعرفة خطوتك القادمة في التسويق الإلكتروني عن طريق تحليل سريع لنقاط الضعف والقوة.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <Honeypot />
        <p className="text-gray-300 text-xs">الحقول المميزة بعلامة <span aria-hidden="true">*</span> مطلوبة.</p>
        {/* حقل الاسم */}
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-white text-sm font-medium mr-1">الاسم الكامل <RequiredMark /></label>
          <input
            id={nameId} name="full_name" autoComplete="name"
            required
            aria-required="true"
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? `${nameId}-error` : undefined}
            placeholder="الاسم الكامل"
            className="w-full bg-brand-surface border border-orange-500/20 rounded-xl p-4 text-white placeholder:text-gray-400 outline-none focus:border-orange-500 transition-all text-right"
          />
          <FieldError id={`${nameId}-error`} message={nameError} />
        </div>

        {/* حقل الهاتف */}
        <div className="space-y-2">
          <label htmlFor={phoneId} className="text-white text-sm font-medium mr-1">رقم الهاتف <RequiredMark /></label>
          <input
            id={phoneId} name="phone" autoComplete="tel"
            type="tel"
            inputMode="tel"
            required
            aria-required="true"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? `${phoneId}-error` : undefined}
            placeholder="رقم الهاتف 05xxxxxxxx"
            className="w-full bg-brand-surface border border-orange-500/20 rounded-xl p-4 text-white placeholder:text-gray-400 outline-none focus:border-orange-500 transition-all text-right"
          />
          <FieldError id={`${phoneId}-error`} message={phoneError} />
        </div>

        {/* حقل البريد الإلكتروني */}
        <div className="space-y-2">
          <label htmlFor={emailId} className="text-white text-sm font-medium mr-1">البريد الإلكتروني <RequiredMark /></label>
          <input
            id={emailId} name="email" autoComplete="email"
            type="email"
            inputMode="email"
            dir="ltr"
            required
            aria-required="true"
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? `${emailId}-error` : undefined}
            placeholder="example@mail.com"
            className="w-full bg-brand-surface border border-orange-500/20 rounded-xl p-4 text-white placeholder:text-gray-400 outline-none focus:border-orange-500 transition-all text-right"
          />
          <FieldError id={`${emailId}-error`} message={emailError} />
        </div>

        {formError && (
          <p role="alert" className="text-red-300 text-sm font-bold">{formError}</p>
        )}

        {/* زر التقييم */}
        <AppButton
          type="submit"
          variant="orange"
          disabled={loading}
          className="w-full py-4 rounded-xl text-lg font-bold shadow-lg shadow-orange-600/20 bg-brand-cta hover:bg-brand-cta-hover"
        >
          {loading ? "جاري المعالجة..." : "أحصل على التقييم"}
        </AppButton>

        <p className="text-center text-gray-300 text-xs mt-4">
          نحن نحترم خصوصيتك. بياناتك آمنة معنا.
        </p>
      </form>
    </div>
  );
}