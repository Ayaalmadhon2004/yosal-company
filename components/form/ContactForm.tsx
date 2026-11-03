"use client";

import React, { useState, useRef } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, Loader2, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitProjectRequest } from "@/lib/api";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// جوال سعودي (05xxxxxxxx / 5xxxxxxxx / +9665xxxxxxxx) أو رقم دولي بصيغة E.164
const PHONE_REGEX = /^(?:(?:\+|00)?966|0)?5\d{8}$|^\+[1-9]\d{7,14}$/;

function isValidUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setStatus({ type: "error", msg: "حجم الملف كبير جداً (الحد الأقصى 10MB)" });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const formData = new FormData(form);

    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const rawUrl = String(formData.get("project_url") ?? "").trim();

    if (!EMAIL_REGEX.test(email)) {
      setStatus({ type: "error", msg: "يرجى إدخال بريد إلكتروني صحيح." });
      setLoading(false);
      return;
    }
    if (!PHONE_REGEX.test(phone.replace(/[\s-]/g, ""))) {
      setStatus({ type: "error", msg: "يرجى إدخال رقم جوال صحيح، مثل 05xxxxxxxx أو +9665xxxxxxxx." });
      setLoading(false);
      return;
    }
    const projectUrl = rawUrl && !/^https?:\/\//i.test(rawUrl) ? `https://${rawUrl}` : rawUrl;
    if (projectUrl && !isValidUrl(projectUrl)) {
      setStatus({ type: "error", msg: "يرجى إدخال رابط صحيح للمشروع أو تركه فارغاً." });
      setLoading(false);
      return;
    }

    try {
      const result = await submitProjectRequest({
        name: String(formData.get("project_name") ?? ""),
        phone,
        email,
        // نفس قيمة النموذج الآخر (ReadyForm) عند عدم وجود رابط
        project_url: projectUrl || "لا يوجد رابط",
        service_type: String(formData.get("service_type") ?? ""),
        budget: String(formData.get("budget") ?? ""),
        main_goals: String(formData.get("main_goals") ?? ""),
        description: String(formData.get("description") ?? ""),
        attachment: selectedFile ?? undefined,
      });

      if (result.status === "Success" || result.success) {
        setStatus({ type: "success", msg: "تم إرسال طلبك بنجاح! فريقنا سيقوم بمراجعة التفاصيل والملفات." });
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error(result.message || "حدث خطأ في استقبال البيانات.");
      }
    } catch (error: unknown) {
      console.error("Submission Error:", error);
      setStatus({ type: "error", msg: "عذراً، فشل الإرسال. يرجى التأكد من الاتصال بالإنترنت والمحاولة مرة أخرى." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      
      <form onSubmit={handleSubmit} className="relative bg-secondary/40 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl max-w-4xl mx-auto text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label htmlFor="cf-project_name" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> اسم المشروع
            </label>
            <input id="cf-project_name" name="project_name" type="text" autoComplete="off" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60" required placeholder="ماذا نطلق على حلمك؟" />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="cf-service_type" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> الخدمة المطلوبة
            </label>
            <select autoComplete="off" id="cf-service_type" name="service_type" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60 cursor-pointer appearance-none">
              <option value="تطوير المواقع" className="bg-slate-900">تطوير المواقع</option>
              <option value="التخطيط الاستراتيجي" className="bg-slate-900">التخطيط الاستراتيجي</option>
              <option value="الهوية البصرية" className="bg-slate-900">الهوية البصرية</option>
              <option value="إدارة التواصل الاجتماعي" className="bg-slate-900">إدارة التواصل الاجتماعي</option>
            </select>
          </div>

          <div className="space-y-3">
            <label htmlFor="cf-budget" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> الميزانية المتوقعة ($)
            </label>
            <input id="cf-budget" name="budget" type="number" min="0" autoComplete="off" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60" placeholder="مثلاً: 5000" required />
          </div>

          <div className="space-y-3">
            <label htmlFor="cf-main_goals" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> الهدف الأساسي
            </label>
            <input id="cf-main_goals" name="main_goals" type="text" autoComplete="off" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60" placeholder="مثلاً: التوسع في السوق السعودي" required />
          </div>

          <div className="space-y-3">
            <label htmlFor="cf-phone" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> رقم الجوال
            </label>
            <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60 text-right" required placeholder="05xxxxxxxx" />
          </div>

          <div className="space-y-3">
            <label htmlFor="cf-email" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> البريد الإلكتروني
            </label>
            <input id="cf-email" name="email" type="email" autoComplete="email" dir="ltr" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60 text-right" required placeholder="example@mail.com" />
          </div>

          <div className="space-y-3">
            <label htmlFor="cf-project_url" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> رابط المشروع أو الموقع (اختياري)
            </label>
            <input id="cf-project_url" name="project_url" type="url" inputMode="url" autoComplete="url" dir="ltr" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-12 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60 text-right" placeholder="https://yourwebsite.com" />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <label htmlFor="cf-description" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> وصف المشروع بالتفصيل
          </label>
          <textarea id="cf-description" name="description" rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-5 text-base text-foreground focus:border-primary/50 outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold placeholder:text-white/60 resize-none" placeholder="أخبرنا المزيد عن رؤيتك..." required></textarea>
        </div>

        <div className="mt-8">
          <label htmlFor="cf-attachment" className="text-foreground text-sm font-black pr-2 mb-3 flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" /> إرفاق ملفات (اختياري)
          </label>
          <div
            className={cn(
              "relative border-2 border-dashed rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer focus-within:ring-2 focus-within:ring-primary",
              selectedFile ? "border-primary bg-primary/5" : "border-white/10 hover:border-primary/50 bg-white/5"
            )}
          >
            <input id="cf-attachment" type="file" ref={fileInputRef} onChange={handleFileChange} className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0" />
            {selectedFile ? (
              <div className="flex flex-col items-center gap-2">
                <FileText aria-hidden="true" className="text-primary w-10 h-10" />
                <span className="text-foreground font-bold text-sm break-all text-center">{selectedFile.name}</span>
                <button type="button" onClick={() => { setSelectedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="relative z-10 text-red-300 hover:text-red-200 text-sm flex items-center gap-1 mt-2 min-h-11 px-4">
                  <X size={14} aria-hidden="true" /> إزالة الملف
                </button>
              </div>
            ) : (
              <>
                <div aria-hidden="true" className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Upload size={24} /></div>
                <p className="text-muted-foreground text-sm font-bold text-center">اسحب الملف هنا أو اضغط للاختيار</p>
                <p className="text-xs text-muted-foreground text-center font-bold">PDF, PNG, JPG (بحد أقصى 10MB)</p>
              </>
            )}
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full mt-10 bg-brand-cta hover:bg-brand-cta-hover text-white font-black min-h-14 py-4 sm:py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/20">
          {loading ? <><Loader2 aria-hidden="true" className="w-6 h-6 animate-spin" /><span className="sr-only">جاري الإرسال</span></> : <><span className="text-lg">إرسال طلبك الآن</span><Send aria-hidden="true" className="w-5 h-5 rotate-180" /></>}
        </button>

        {status.type && (
          <div role={status.type === "error" ? "alert" : "status"} className={cn("mt-8 p-5 rounded-2xl flex items-start gap-3 sm:gap-4 break-words animate-in fade-in slide-in-from-top-2", status.type === "success" ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" : "bg-red-500/10 text-red-300 border border-red-500/20")}>
            {status.type === "success" ? <CheckCircle2 size={24} aria-hidden="true" className="shrink-0" /> : <AlertCircle size={24} aria-hidden="true" className="shrink-0" />}
            <span className="font-bold text-sm min-w-0 leading-relaxed">{status.msg}</span>
          </div>
        )}
      </form>
    </div>
  );
}