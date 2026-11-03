"use client";

import { useId, useState } from "react";
import toast from "react-hot-toast";
import { subscribeToNewsletter } from "@/lib/api";
import Honeypot from "./Honeypot";
import FieldError from "./FieldError";
import {
  FORM_MESSAGES,
  cooldownMessage,
  getCooldownRemaining,
  isHoneypotFilled,
  isValidEmail,
  markSubmitted,
} from "@/lib/formGuards";

const COOLDOWN_KEY = "blog-newsletter";

function validateEmail(value: string): string {
  if (!value) return FORM_MESSAGES.emailRequired;
  return isValidEmail(value) ? "" : FORM_MESSAGES.emailInvalid;
}

/** نموذج النشرة البريدية أسفل صفحة المدونة (نفس شكل النموذج السابق، مع معالج إرسال فعلي). */
export default function BlogNewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const emailId = useId();
  const errorId = `${emailId}-error`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    // فخ الروبوتات: نجاح صامت دون استدعاء الـ API
    if (isHoneypotFilled(new FormData(e.currentTarget))) {
      setEmail("");
      return;
    }

    const emailMsg = validateEmail(email.trim());
    setEmailError(emailMsg);
    if (emailMsg) {
      document.getElementById(emailId)?.focus();
      return;
    }

    const remaining = getCooldownRemaining(COOLDOWN_KEY);
    if (remaining > 0) {
      setFormError(cooldownMessage(remaining));
      return;
    }

    setLoading(true);
    const result = await subscribeToNewsletter(email.trim(), "body");
    if (result.ok) {
      toast.success("تم الاشتراك بنجاح! شكراً لانضمامك.");
      markSubmitted(COOLDOWN_KEY);
      setEmail("");
    } else {
      toast.error(result.message || "تعذر الاشتراك حالياً، يرجى المحاولة مرة أخرى.");
    }
    setLoading(false);
  };

  return (
    <form
      aria-label="الاشتراك في النشرة البريدية"
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
    >
      <Honeypot />
      <div className="flex-grow min-w-0 flex flex-col gap-2">
        <input
          id={emailId}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="البريد الإلكتروني"
          aria-required="true"
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? errorId : undefined}
          autoComplete="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="w-full min-w-0 bg-background border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-5 text-white outline-none focus:border-orange-500 transition-all"
        />
        <FieldError id={errorId} message={emailError} />
        {formError && (
          <p role="alert" className="text-red-300 text-sm font-bold pr-2">{formError}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="bg-orange-700 text-white font-bold px-12 py-5 rounded-2xl disabled:opacity-60"
      >
        {loading ? "جاري الاشتراك..." : "اشترك الآن"}
      </button>
    </form>
  );
}
