"use client";
import { useState } from "react";
import { AppButton } from "../ui/AppButton";
import { sendProjectRequest } from "@/lib/api"; // استخدم الدالة المركزية التي أنشأناها

export default function ReadyForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    // تحويل FormData إلى Object بسيط لإرساله كـ Params
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
      
      <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-right">
            <label className="text-gray-300 text-sm pr-2 font-medium">الاسم</label>
            <input 
              name="name" // تم التعديل ليطابق الـ API
              type="text" 
              placeholder="أدخل اسمك"
              required
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
            />
          </div>
          <div className="space-y-3 text-right">
            <label className="text-gray-300 text-sm pr-2 font-medium">البريد الإلكتروني</label>
            <input 
              name="email"
              type="email" 
              placeholder="example@mail.com"
              required
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="space-y-3 text-right">
          <label className="text-gray-300 text-sm pr-2 font-medium">رقم الجوال</label>
          <input 
            name="phone"
            type="tel" 
            placeholder="05xxxxxxxx"
            required
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
          />
        </div>

        <div className="space-y-3 text-right">
          <label className="text-gray-300 text-sm pr-2 font-medium">رابط المشروع / الموقع</label>
          <input 
            name="project_url" // تم التعديل ليطابق الـ API
            type="url" 
            placeholder="https://..."
            required
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
          />
        </div>

        <AppButton 
          type="submit"
          variant="orange"
          size="lg"
          disabled={loading}
          className="w-full font-black py-7 rounded-3xl text-xl shadow-[0_10px_25px_rgba(245,130,32,0.3)] transition-all"
        >
          {loading ? "جاري الإرسال..." : "أحصل على التقييم"}
        </AppButton>

        {status === "success" && <p className="text-green-500 text-center text-sm font-bold">تم الإرسال بنجاح! فريقنا سيتواصل معك.</p>}
        {status === "error" && <p className="text-red-500 text-center text-sm font-bold">حدث خطأ، يرجى المحاولة لاحقاً.</p>}
      </form>
    </div>
  );
}