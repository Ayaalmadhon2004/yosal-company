"use client";

import React, { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // 1. احفظي المرجع للفورم هنا قبل أي await
  const form = e.currentTarget; 
  
  setLoading(true);
  setStatus({ type: null, msg: "" });

  const formData = new FormData(form); // استخدمي المتغير الجديد

  try {
    const response = await fetch('https://yosaal-website-backend.onrender.com/api/v1/project-request', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok && (result.status === "Success" || result.success)) {
      setStatus({ 
        type: "success", 
        msg: result.message || "تم استلام طلبك بنجاح!" 
      });
      
      // 2. استخدمي المتغير 'form' بدلاً من 'e.currentTarget'
      form.reset(); 
      
    } else {
      setStatus({ 
        type: "error", 
        msg: result.message || "عذراً، حدث خطأ أثناء الإرسال." 
      });
    }
  } catch (error) {
    setStatus({ 
      type: "error", 
      msg: "يبدو أن السيرفر في استراحة قصيرة، يرجى المحاولة بعد لحظات." 
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative group">
      {/* تأثير إضاءة خلفي */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      
      <form 
        onSubmit={handleSubmit} 
        className="relative bg-secondary/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl max-w-4xl mx-auto text-right" 
        dir="rtl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* اسم المشروع */}
          <div className="space-y-3">
            <label htmlFor="project_name" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              اسم المشروع
            </label>
            <input 
              id="project_name"
              name="project_name" 
              type="text" 
              className="w-full /50 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/30 font-bold" 
              required 
              placeholder="ماذا نطلق على حلمك؟"
            />
          </div>
          
          {/* الخدمة المطلوبة */}
          <div className="space-y-3">
            <label htmlFor="service_type" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              الخدمة المطلوبة
            </label>
            <div className="relative">
              <select 
                id="service_type"
                name="service_type" 
                className="w-full /50 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none transition-all appearance-none font-bold cursor-pointer"
              >
                <option value="التخطيط الاستراتيجي">التخطيط الاستراتيجي</option>
                <option value="تطوير المواقع">تطوير المواقع</option>
                <option value="الهوية البصرية">الهوية البصرية</option>
                <option value="إدارة التواصل الاجتماعي">إدارة التواصل الاجتماعي</option>
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <Send size={14} className="rotate-[135deg]" />
              </div>
            </div>
          </div>

          {/* الميزانية */}
          <div className="space-y-3">
            <label htmlFor="budget" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              الميزانية المتوقعة ($)
            </label>
            <input 
              id="budget"
              name="budget" 
              type="number" 
              className="w-full /50 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none transition-all font-bold" 
              placeholder="مثلاً: 5000" 
              required
            />
          </div>

          {/* الأهداف */}
          <div className="space-y-3">
            <label htmlFor="main_goals" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              الهدف الأساسي
            </label>
            <input 
              id="main_goals"
              name="main_goals" 
              type="text" 
              className="w-full /50 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none transition-all font-bold" 
              placeholder="مثلاً: التوسع في السوق السعودي" 
              required
            />
          </div>
        </div>

        {/* الوصف */}
        <div className="mt-8 space-y-3">
          <label htmlFor="description" className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            وصف المشروع بالتفصيل
          </label>
          <textarea 
            id="description"
            name="description" 
            rows={4} 
            className="w-full /50 border border-white/10 rounded-3xl p-5 text-foreground focus:border-primary/50 outline-none transition-all font-bold resize-none" 
            placeholder="أخبرنا المزيد عن رؤيتك..."
            required
          ></textarea>
        </div>

        {/* المرفقات */}
        <div className="mt-8">
          <label className="text-foreground text-sm font-black pr-2 mb-3 block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            إرفاق ملفات (اختياري)
          </label>
          <div className="relative group/file">
            <input 
              id="attachment"
              name="attachment" 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-full border-2 border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-3 group-hover/file:border-primary/50 transition-colors /20">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Upload size={24} />
              </div>
              <p className="text-muted-foreground text-sm font-bold">اسحب الملف هنا أو اضغط للاختيار</p>
              <p className="text-[10px] text-muted-foreground/50 italic">PDF, PNG, JPG (الحد الأقصى 10MB)</p>
            </div>
          </div>
        </div>

        {/* زر الإرسال */}
        <button 
          type="submit"
          disabled={loading} 
          className="w-full mt-10 bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98] shadow-xl shadow-primary/20 group/btn"
        >
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <span className="text-lg">إرسال طلبك الآن</span>
              <Send className="w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" />
            </>
          )}
        </button>

        {/* الرسائل التوضيحية */}
        {status.type && (
          <div 
            role="alert" 
            className={cn(
              "mt-8 p-5 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500",
              status.type === "success" 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            )}
          >
            {status.type === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            <span className="font-bold text-sm">{status.msg}</span>
          </div>
        )}
      </form>
    </div>
  );
}