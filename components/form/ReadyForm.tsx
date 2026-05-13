"use client";

import { useState } from "react";
import { AppButton } from "../ui/AppButton";
import { sendProjectRequest } from "@/lib/api";
import toast from "react-hot-toast";
import { Send, Globe, Mail, Phone, User, CheckCircle } from "lucide-react";

export default function ReadyForm() {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const formData = new FormData(e.currentTarget);
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
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "حدث خطأ في معالجة البيانات");
      }
    } catch (err: any) {
      toast.error(err.message || "عذراً، فشل الإرسال. يرجى المحاولة لاحقاً.", {
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
    <div className="bg-secondary/40 backdrop-blur-xl border border-white/5 p-8 lg:p-12 rounded-[3rem] shadow-2xl w-full max-w-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-[80px] -z-10 rounded-full group-hover:bg-primary/10 transition-colors" />
      
      <div className="flex items-center justify-left mb-12">
         <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Send className="w-6 h-6 rotate-180" />
         </div>
         <h3 className="text-3xl font-black text-foreground text-left italic mr-4">ابدأ اليوم</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* الاسم */}
          <div className="space-y-3 text-right">
            <label htmlFor="full_name" className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
              <User size={14} className="text-primary" />
              الاسم
            </label>
            <input 
              id="full_name"
              name="name" 
              type="text" 
              placeholder="الاسم الكامل"
              required
              className="w-full bg-[#12162b] border border-white/10 rounded-[1.2rem] p-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/30 font-bold"
            />
          </div>

          <div className="space-y-3 text-right">
            <label htmlFor="user_email" className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              البريد الإلكتروني
            </label>
            <input 
              id="user_email"
              name="email"
              type="email" 
              placeholder="example@mail.com"
              required
              className="w-full bg-[#12162b] border border-white/10 rounded-[1.2rem] p-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/30 font-bold"
            />
          </div>
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor="user_phone" className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            رقم الجوال
          </label>
          <input 
            id="user_phone"
            name="phone"
            type="tel" 
            placeholder="05xxxxxxxx"
            required
            className="w-full bg-[#12162b] border border-white/10 rounded-[1.2rem] p-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/30 font-bold tracking-widest"
          />
        </div>

        <div className="space-y-3 text-right">
          <label htmlFor="project_link" className="text-foreground text-sm pr-2 font-black flex items-center gap-2">
            <Globe size={14} className="text-primary" />
            رابط المشروع / الموقع
          </label>
          <input 
            id="project_link"
            name="project_url" 
            type="text" 
            placeholder="https://yourwebsite.com"
            className="w-full bg-[#12162b] border border-white/10 rounded-[1.2rem] p-4 text-foreground outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-muted-foreground/30 font-bold"
          />
        </div>

        <AppButton 
          type="submit"
          variant="orange"
          size="lg"
          disabled={loading}
          className="w-full font-black py-8 rounded-[1.5rem] text-xl shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all group/btn overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {loading ? "جاري الإرسال..." : "أحصل على التقييم"}
            {!loading && <Send size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />}
          </span>
        </AppButton>
      </form>
    </div>
  );
}