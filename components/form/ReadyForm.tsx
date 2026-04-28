"use client";
import { useState } from "react";
import { AppButton } from "../ui/AppButton";
import { sendProjectRequest } from "@/lib/api";
import toast from "react-hot-toast";

export default function ReadyForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      project_url: formData.get("project_url") as string,
    };

    try {
      const result = await sendProjectRequest(data);

      // الفحص بناءً على رد السيرفر "Success"
      if (result.status === "Success") {
        toast.success("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.", {
          style: {
            background: '#12162b',
            color: '#fff',
            border: '1px solid #22c55e',
          },
        });
        (e.target as HTMLFormElement).reset(); // تفريغ الحقول
      } else {
        // في حال وجود خطأ 422 أو خطأ في البيانات المرسلة
        throw new Error(result.message || "حدث خطأ في البيانات المرسلة");
      }
    } catch (err: any) {
      toast.error(err.message || "عذراً، فشل الإرسال. يرجى المحاولة لاحقاً.", {
        style: {
          background: '#12162b',
          color: '#fff',
          border: '1px solid #ef4444',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0d1d] border border-white/5 p-8 lg:p-10 rounded-[45px] shadow-2xl w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-white mb-10 text-right">ابدأ اليوم</h3>
      
      <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-right">
            <label htmlFor="full_name" className="text-gray-200 text-sm pr-2 font-bold block">الاسم</label>
            <input 
              id="full_name"
              name="name" 
              type="text" 
              placeholder="أدخل اسمك"
              required
              className="w-full bg-[#12162b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-500"
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
              className="w-full bg-[#12162b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-500"
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
            className="w-full bg-[#12162b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor="project_link" className="text-gray-200 text-sm pr-2 font-bold block">رابط المشروع / الموقع</label>
          <input 
            id="project_link"
            name="project_url" 
            type="url" 
            placeholder="https://..."
            className="w-full bg-[#12162b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-500"
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
      </form>
    </div>
  );
}