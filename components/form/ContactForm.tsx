"use client";

import React, { useState, useRef } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, Loader2, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

    try {
      // استخدام المسار المستقر الذي جربناه ونجح (dashboard)
      const url = new URL('https://yosaal-website-backend.onrender.com/api/v1/dashboard');
      
      // تجهيز بيانات المشروع كـ Params لضمان القبول من جهة السيرفر
      url.searchParams.append('name', formData.get("project_name") as string);
      url.searchParams.append('phone', "0500000000"); // قيمة افتراضية للباك آند
      url.searchParams.append('email', `request_${Date.now()}@yosaal.com`);
      
      const fullDetails = `
        الخدمة: ${formData.get("service_type")}
        الميزانية: ${formData.get("budget")}$
        الأهداف: ${formData.get("main_goals")}
        الوصف: ${formData.get("description")}
        ${selectedFile ? `المرفقات: يوجد ملف مرفق باسم (${selectedFile.name})` : 'المرفقات: لا يوجد'}
      `.trim();
      
      url.searchParams.append('project_url', fullDetails);

      // إذا وجد ملف، نرسل الطلب كـ FormData، وإذا لم يوجد نرسله كـ طلب عادي بالرابط
      let response;
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append('attachment', selectedFile);
        // نرسل الملف للمسار، مع بقاء التفاصيل في الرابط كما يفضل السيرفر حالياً
        response = await fetch(url.toString(), {
          method: 'POST',
          body: uploadData,
          headers: { 'Accept': 'application/json' }
        });
      } else {
        response = await fetch(url.toString(), {
          method: 'POST',
          headers: { 'Accept': 'application/json' }
        });
      }

      const result = await response.json();

      if (response.ok && (result.status === "Success" || result.success)) {
        setStatus({ type: "success", msg: "تم إرسال طلبك بنجاح! فريقنا سيقوم بمراجعة التفاصيل والملفات." });
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error(result.message || "حدث خطأ في استقبال البيانات.");
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      setStatus({ type: "error", msg: "عذراً، فشل الإرسال. تأكدي من اتصالك بالإنترنت وحاولي مجدداً." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      
      <form onSubmit={handleSubmit} className="relative bg-secondary/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl max-w-4xl mx-auto text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> اسم المشروع
            </label>
            <input name="project_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none font-bold" required placeholder="ماذا نطلق على حلمك؟" />
          </div>
          
          <div className="space-y-3">
            <label className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> الخدمة المطلوبة
            </label>
            <select name="service_type" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none font-bold cursor-pointer appearance-none">
              <option value="تطوير المواقع" className="bg-slate-900">تطوير المواقع</option>
              <option value="التخطيط الاستراتيجي" className="bg-slate-900">التخطيط الاستراتيجي</option>
              <option value="الهوية البصرية" className="bg-slate-900">الهوية البصرية</option>
              <option value="إدارة التواصل الاجتماعي" className="bg-slate-900">إدارة التواصل الاجتماعي</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> الميزانية المتوقعة ($)
            </label>
            <input name="budget" type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none font-bold" placeholder="مثلاً: 5000" required />
          </div>

          <div className="space-y-3">
            <label className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> الهدف الأساسي
            </label>
            <input name="main_goals" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-foreground focus:border-primary/50 outline-none font-bold" placeholder="مثلاً: التوسع في السوق السعودي" required />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <label className="text-foreground text-sm font-black pr-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> وصف المشروع بالتفصيل
          </label>
          <textarea name="description" rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 text-foreground focus:border-primary/50 outline-none font-bold resize-none" placeholder="أخبرنا المزيد عن رؤيتك..." required></textarea>
        </div>

        {/* حقل رفع الملفات - عاد بقوة */}
        <div className="mt-8">
          <label className="text-foreground text-sm font-black pr-2 mb-3 block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> إرفاق ملفات (اختياري)
          </label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "relative border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer",
              selectedFile ? "border-primary bg-primary/5" : "border-white/10 hover:border-primary/50 bg-white/5"
            )}
          >
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            {selectedFile ? (
              <div className="flex flex-col items-center gap-2">
                <FileText className="text-primary w-10 h-10" />
                <span className="text-foreground font-bold text-sm">{selectedFile.name}</span>
                <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }} className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 mt-2">
                  <X size={14} /> إزالة الملف
                </button>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Upload size={24} /></div>
                <p className="text-muted-foreground text-sm font-bold">اسحب الملف هنا أو اضغط للاختيار</p>
                <p className="text-[10px] text-muted-foreground/50 italic font-bold">PDF, PNG, JPG (بحد أقصى 10MB)</p>
              </>
            )}
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full mt-10 bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/20">
          {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><span className="text-lg">إرسال طلبك الآن</span><Send className="w-5 h-5 rotate-180" /></>}
        </button>

        {status.type && (
          <div className={cn("mt-8 p-5 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2", status.type === "success" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20")}>
            {status.type === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            <span className="font-bold text-sm">{status.msg}</span>
          </div>
        )}
      </form>
    </div>
  );
}