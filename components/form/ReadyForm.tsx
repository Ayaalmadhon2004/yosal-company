"use client";
import { useState } from "react";
import { AppButton } from "../ui/AppButton";
import { sendProjectRequest } from "@/lib/api";

export default function ReadyForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project_url: formData.get("project_url"),
    };
    
    try {
      const result = await sendProjectRequest(data);
      if (result.status === "Success" || result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-navy border border-white/5 p-8 lg:p-10 rounded-[45px] shadow-2xl w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-white mb-10 text-right">ابدأ اليوم</h3>
      
      <form onSubmit={handleSubmit} className="space-y-8" dir="rtl" aria-label="نموذج البدء السريع">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-right">
            <label htmlFor="full_name" className="text-gray-200 text-sm pr-2 font-bold block">الاسم</label>
            <input 
              id="full_name"
              name="name" 
              type="text" 
              placeholder="أدخل اسمك"
              required
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-3 text-right">
            <label htmlFor="user_email" className="text-gray-200 text-sm pr-2 font-bold block">البريد الإلكتروني</label>
            <input 
              id="user_email"
              name="email"
              type="email" 
              placeholder="example@mail.com"
              required
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor="user_phone" className="text-gray-200 text-sm pr-2 font-bold block">رقم الجوال</label>
          <input 
            id="user_phone"
            name="phone"
            type="tel" 
            placeholder="05xxxxxxxx"
            required
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor="project_link" className="text-gray-200 text-sm pr-2 font-bold block">رابط المشروع / الموقع</label>
          <input 
            id="project_link"
            name="project_url" 
            type="url" 
            placeholder="https://..."
            required
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-500"
          />
        </div>

        <AppButton 
          type="submit"
          variant="orange"
          size="lg"
          disabled={loading}
          aria-busy={loading}
          className="w-full font-black py-7 rounded-3xl text-xl shadow-[0_10px_25px_rgba(245,130,32,0.3)] transition-all"
        >
          {loading ? "جاري الإرسال..." : "أحصل على التقييم"}
        </AppButton>

        {status === "success" && (
          <div role="alert" className="text-green-400 text-center text-sm font-bold p-3 bg-green-500/10 rounded-xl border border-green-500/20">
            تم الإرسال بنجاح! فريقنا سيتواصل معك.
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="text-red-400 text-center text-sm font-bold p-3 bg-red-500/10 rounded-xl border border-red-500/20">
            حدث خطأ، يرجى المحاولة لاحقاً.
          </div>
        )}
      </form>
    </div>
  );
}