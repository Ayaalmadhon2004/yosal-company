"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://yosaal-website-backend.onrender.com/api/v1/project-request', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && (result.status === "Success" || result.success)) {
        setStatusMsg(result.message || "تم استلام طلبك بنجاح");
        e.currentTarget.reset();
      } else {
        setStatusMsg(result.message || "حدث خطأ، يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setStatusMsg("فشل الاتصال بالسيرفر، قد يستغرق السيرفر بعض الوقت للاستيقاظ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-[#1a1f3d] p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-700 text-right" 
      dir="rtl"
      aria-label="نموذج طلب مشروع جديد"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-2">
          <label htmlFor="project_name" className="text-white text-sm font-bold block mb-1">
            اسم المشروع
          </label>
          <input 
            id="project_name"
            name="project_name" 
            type="text" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" 
            required 
            placeholder="أدخل اسم المشروع"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="service_type" className="text-white text-sm font-bold block mb-1">
            الخدمة المطلوبة
          </label>
          <select 
            id="service_type"
            name="service_type" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors appearance-none"
          >
            <option value="خدمة تخطيط استراتيجي">التخطيط الاستراتيجي</option>
            <option value="تطوير المواقع">تطوير المواقع</option>
            <option value="الهوية البصرية">الهوية البصرية</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-white text-sm font-bold block mb-1">
            الميزانية المتوقعة ($)
          </label>
          <input 
            id="budget"
            name="budget" 
            type="number" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" 
            placeholder="مثلاً: 2000" 
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="main_goals" className="text-white text-sm font-bold block mb-1">
            الأهداف الرئيسية
          </label>
          <input 
            id="main_goals"
            name="main_goals" 
            type="text" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" 
            placeholder="مثلاً: زيادة المبيعات" 
            required
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="description" className="text-white text-sm font-bold block mb-1">
          وصف المشروع بالتفصيل
        </label>
        <textarea 
          id="description"
          name="description" 
          rows={4} 
          className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" 
          placeholder="اشرح لنا فكرتك بوضوح..."
          required
        ></textarea>
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor="attachment" className="text-white text-sm font-bold block mb-1">
          إرفاق ملف (اختياري)
        </label>
        <input 
          id="attachment"
          name="attachment" 
          type="file" 
          className="w-full text-gray-300 text-sm file:ml-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition-all cursor-pointer" 
          aria-describedby="file-info"
        />
        <p id="file-info" className="text-[10px] text-gray-400 mt-1">
          يمكنك إرفاق ملفات بصيغة PDF أو صور توضيحية.
        </p>
      </div>

      <button 
        type="submit"
        disabled={loading} 
        aria-busy={loading}
        className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 shadow-lg"
      >
        <span>{loading ? "جاري الإرسال..." : "إرسال طلبك الآن +"}</span>
      </button>

      {statusMsg && (
        <div 
          role="alert" 
          className={`mt-6 p-4 rounded-lg text-center font-bold text-sm ${
            statusMsg.includes("بنجاح") 
              ? "bg-green-500/10 text-green-400 border border-green-500/20" 
              : "bg-red-500/10 text-red-400 border border-red-500/20"
          }`}
        >
          {statusMsg}
        </div>
      )}
    </form>
  );
}