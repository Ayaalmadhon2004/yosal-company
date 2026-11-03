"use client";

import { useId, useState } from "react";
import { AppButton } from "../ui/AppButton";
import { sendProjectRequest } from "@/lib/api";
import toast from "react-hot-toast";
import { Send, Globe, Mail, Phone, User, CheckCircle } from "lucide-react";
import Honeypot from "./Honeypot";
import FieldError, { RequiredMark } from "./FieldError";
import {
  FORM_MESSAGES,
  cooldownMessage,
  getCooldownRemaining,
  isHoneypotFilled,
  isValidEmail,
  isValidHttpUrl,
  isValidPhone,
  markSubmitted,
} from "@/lib/formGuards";

const COOLDOWN_KEY = "ready-form";
type FieldName = "name" | "email" | "phone" | "project_url";
type FieldErrors = Partial<Record<FieldName, string>>;

export default function ReadyForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    phone: `${uid}-phone`,
    project_url: `${uid}-url`,
  };
  const errId = (f: FieldName) => `${ids[f]}-error`;

  const formatURL = (url: string) => {
  if (!url) return "";
  const trimmedUrl = url.trim().toLowerCase();
  const hasProtocol = /^https?:\/\//i.test(trimmedUrl);
  if (hasProtocol) {
    return trimmedUrl; 
  } else {
    return `https://${trimmedUrl}`;
  }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setFormError("");

    // فخ الروبوتات: نُظهر نجاحاً صامتاً دون استدعاء الـ API
    if (isHoneypotFilled(formData)) {
      form.reset();
      return;
    }

    const nextErrors: FieldErrors = {};
    const nameValue = ((formData.get("name") as string) || "").trim();
    const emailValue = (formData.get("email") as string) || "";
    const phoneValue = (formData.get("phone") as string) || "";
    const urlValue = ((formData.get("project_url") as string) || "").trim();
    if (!nameValue) nextErrors.name = FORM_MESSAGES.nameRequired;
    if (!emailValue.trim()) nextErrors.email = FORM_MESSAGES.emailRequired;
    else if (!isValidEmail(emailValue)) nextErrors.email = FORM_MESSAGES.emailInvalid;
    if (!phoneValue.trim()) nextErrors.phone = FORM_MESSAGES.phoneRequired;
    else if (!isValidPhone(phoneValue)) nextErrors.phone = FORM_MESSAGES.phoneInvalid;
    if (urlValue && !isValidHttpUrl(formatURL(urlValue))) nextErrors.project_url = FORM_MESSAGES.urlInvalid;
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(ids) as FieldName[]).find((f) => nextErrors[f]);
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus();
      return;
    }

    const remaining = getCooldownRemaining(COOLDOWN_KEY);
    if (remaining > 0) {
      setFormError(cooldownMessage(remaining));
      return;
    }

    setLoading(true);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      project_url: formatURL(formData.get("project_url") as string) || "لا يوجد رابط",
      service_type: "طلب تقييم أولي",
      description: "تم إرسال الطلب عبر نموذج 'ابدأ اليوم' في الصفحة الرئيسية.",
    };

    try {
      const result = await sendProjectRequest(data);

      if (result.status === "Success" || result.success) {
        toast.success("تم إرسال طلبك بنجاح! فريقنا سيتواصل معك قريباً.", {
          icon: <CheckCircle className="text-emerald-500" />,
          style: {
            background: 'var(--secondary)',
            color: 'var(--foreground)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: '1rem',
            fontWeight: 'bold',
          },
        });
        markSubmitted(COOLDOWN_KEY);
        form.reset();
      } else {
        throw new Error(result.message || "حدث خطأ في معالجة البيانات");
      }
    } catch (err: unknown) {
      toast.error((err instanceof Error ? err.message : "") || "عذراً، فشل الإرسال. يرجى المحاولة لاحقاً.", {
        style: {
          background: 'var(--secondary)',
          color: 'var(--foreground)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '1rem',
          fontWeight: 'bold',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary/40 backdrop-blur-xl border border-white/5 p-5 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl w-full max-w-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-[80px] -z-10 rounded-full group-hover:bg-primary/10 transition-colors" />
      
      <div className="flex items-center justify-start mb-8 sm:mb-12">
         <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Send className="w-6 h-6 rotate-180" aria-hidden="true" />
         </div>
         <h3 className="text-3xl font-black text-foreground text-left italic mr-4">ابدأ اليوم</h3>
      </div>
      
      <form onSubmit={handleSubmit} noValidate className="space-y-8" dir="rtl">
        <Honeypot />
        <p className="text-muted-foreground text-xs font-bold">الحقول المميزة بعلامة <span aria-hidden="true">*</span> مطلوبة.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* الاسم */}
          <div className="space-y-3 text-right">
            <label htmlFor={ids.name} className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
              <User aria-hidden="true" size={14} className="text-primary" />
              الاسم <RequiredMark />
            </label>
            <input 
              id={ids.name}
              name="name"
              autoComplete="name"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? errId("name") : undefined}
              aria-required="true" 
              type="text" 
              placeholder="الاسم الكامل"
              required
              className="w-full bg-brand-surface border border-white/10 rounded-[1.2rem] p-4 min-h-12 text-base text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/60 font-bold"
            />
            <FieldError id={errId("name")} message={errors.name} />
          </div>

          <div className="space-y-3 text-right">
            <label htmlFor={ids.email} className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
              <Mail aria-hidden="true" size={14} className="text-primary" />
              البريد الإلكتروني <RequiredMark />
            </label>
            <input 
              id={ids.email}
              name="email"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? errId("email") : undefined}
              aria-required="true"
              type="email" 
              placeholder="example@mail.com"
              required
              className="w-full bg-brand-surface border border-white/10 rounded-[1.2rem] p-4 min-h-12 text-base text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/60 font-bold"
            />
            <FieldError id={errId("email")} message={errors.email} />
          </div>
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor={ids.phone} className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
            <Phone aria-hidden="true" size={14} className="text-primary" />
            رقم الجوال <RequiredMark />
          </label>
          <input 
            id={ids.phone}
            name="phone"
              autoComplete="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? errId("phone") : undefined}
              aria-required="true"
            type="tel" 
            placeholder="05xxxxxxxx"
            required
            className="w-full bg-brand-surface border border-white/10 rounded-[1.2rem] p-4 min-h-12 text-base text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/60 font-bold tracking-widest"
          />
            <FieldError id={errId("phone")} message={errors.phone} />
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor={ids.project_url} className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
            <Globe aria-hidden="true" size={14} className="text-primary" />
            رابط المشروع / الموقع
          </label>
          <input 
            id={ids.project_url}
            name="project_url"
              autoComplete="url"
              aria-invalid={errors.project_url ? true : undefined}
              aria-describedby={errors.project_url ? errId("project_url") : undefined} 
            type="url" 
            inputMode="url"
            placeholder="https://yourwebsite.com"
            className="w-full bg-brand-surface border border-white/10 rounded-[1.2rem] p-4 min-h-12 text-base text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/60 font-bold"
          />
            <FieldError id={errId("project_url")} message={errors.project_url} />
        </div>

        {formError && (
          <p role="alert" className="text-red-300 text-sm font-bold">{formError}</p>
        )}

        <AppButton 
          type="submit"
          variant="orange"
          size="lg"
          disabled={loading}
          className="w-full font-black py-6 sm:py-8 rounded-[1.5rem] text-lg sm:text-xl bg-brand-cta-alt hover:bg-brand-cta-alt-hover shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all group/btn overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {loading ? "جاري الإرسال..." : "أحصل على التقييم"}
            {!loading && <Send aria-hidden="true" size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />}
          </span>
        </AppButton>
      </form>
    </div>
  );
}