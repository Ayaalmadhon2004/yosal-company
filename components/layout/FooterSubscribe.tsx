"use client";

import React, { useId, useState } from "react";
import { IoMailOutline, IoSendSharp } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import { toast } from "react-hot-toast";
import Honeypot from "@/components/form/Honeypot";
import FieldError from "@/components/form/FieldError";
import {
  FORM_MESSAGES,
  cooldownMessage,
  getCooldownRemaining,
  isHoneypotFilled,
  isValidEmail,
  markSubmitted,
} from "@/lib/formGuards";

const COOLDOWN_KEY = "footer-subscribe";

/** نموذج الاشتراك في النشرة (جزيرة عميل داخل الـ Footer) */
export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const emailId = useId();
  const errorId = `${emailId}-error`;

  // الرابط الأساسي للباك إند (Render)
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const formEl = e.currentTarget as HTMLFormElement;
    setFormError("");
    if (isHoneypotFilled(new FormData(formEl))) {
      setEmail("");
      return;
    }
    const emailMsg = !email.trim()
      ? FORM_MESSAGES.emailRequired
      : isValidEmail(email) ? "" : FORM_MESSAGES.emailInvalid;
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

    setIsLoading(true);

    try {
      // بناء الرابط مع الـ Query Params كما يتوقع الباك إند
      const url = `${BASE_URL}/subscribe?email=${encodeURIComponent(email)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("تم الاشتراك بنجاح! شكراً لك.");
        markSubmitted(COOLDOWN_KEY);
        setEmail(""); // تفريغ الحقل بعد النجاح
      } else {
        // عرض رسالة الخطأ القادمة من الباك إند إن وجدت
        toast.error(result.message || "حدث خطأ أثناء الاشتراك");
      }
    } catch (error) {
      // تنبيه المستخدم في حال كان السيرفر في وضع الخمول (Sleep Mode)
      toast.error("يبدو أن الخادم يستغرق وقتاً للاستجابة، يرجى المحاولة مرة أخرى");
      console.error("Subscription Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:col-span-6 lg:col-span-4">
      <div className="bg-[#252841] p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
        <div className="absolute -top-2 -left-2 bg-orange-500/10 p-4 rounded-full" aria-hidden="true"></div>
        <HiOutlineMap aria-hidden="true" className="text-orange-500 mb-4 h-6 w-6" />
        
        <h2 className="text-lg font-black mb-4 text-white">كُن أول من يصله الإلهام</h2>
        
        <form onSubmit={handleSubscribe} noValidate className="flex items-center gap-2 bg-[#1A1C2E] p-1.5 rounded-2xl border border-white/10 group focus-within:border-orange-500/50 transition-all">
          <div className="pr-4">
             <IoMailOutline aria-hidden="true" className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
          </div>
          <Honeypot />
          <label htmlFor={emailId} className="sr-only">البريد الإلكتروني (مطلوب)</label>
          <input 
            id={emailId}
            name="email"
            type="email" 
            required
            aria-required="true"
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError || formError ? errorId : undefined}
            autoComplete="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني" 
            className="bg-transparent flex-grow min-w-0 py-3 text-sm outline-none text-white placeholder:text-gray-400"
            disabled={isLoading}
          />
          <button 
            type="submit"
            aria-label="اشتراك في النشرة البريدية"
            disabled={isLoading}
            className="bg-orange-500 p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 flex items-center justify-center min-w-[44px]"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <IoSendSharp aria-hidden="true" className="h-5 w-5 rotate-180 text-white" />
            )}
          </button>
        </form>
        <div className="mt-2"><FieldError id={errorId} message={emailError || formError} /></div>
        <p className="text-xs text-gray-400 mt-4 text-center">بشراكتك معنا، أنت توافق على سياسة الخصوصية الخاصة بنا.</p>
      </div>
    </div>
  );
}
