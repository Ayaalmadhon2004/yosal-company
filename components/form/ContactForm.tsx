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
    <form onSubmit={handleSubmit} className="bg-[#1a1f3d] p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-700 text-right" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-white text-sm">اسم المشروع</label>
          <input 
            name="project_name" 
            type="text" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm">الخدمة المطلوبة</label>
          <select 
            name="service_type" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none"
          >
            <option value="خدمة تخطيط استراتيجي">التخطيط الاستراتيجي</option>
            <option value="تطوير المواقع">تطوير المواقع</option>
            <option value="الهوية البصرية">الهوية البصرية</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm">الميزانية المتوقعة ($)</label>
          <input 
            name="budget" 
            type="number" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" 
            placeholder="2000" 
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm">الأهداف الرئيسية</label>
          <input 
            name="main_goals" 
            type="text" 
            className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" 
            placeholder="مثلاً: زيادة المبيعات" 
            required
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label className="text-white text-sm">وصف المشروع بالتفصيل</label>
        <textarea 
          name="description" 
          rows={4} 
          className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" 
          placeholder="اشرح لنا فكرتك..."
          required
        ></textarea>
      </div>

      <div className="mt-4 space-y-2">
        <label className="text-white text-sm">إرفاق ملف (اختياري)</label>
        <input 
          name="attachment" 
          type="file" 
          className="w-full text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600" 
        />
      </div>

      <button 
        type="submit"
        disabled={loading} 
        className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? "جاري الإرسال..." : "إرسال طلبك الآن +"}
      </button>

      {statusMsg && (
        <p className={`mt-4 text-center font-medium ${statusMsg.includes("بنجاح") ? "text-green-400" : "text-red-400"}`}>
          {statusMsg}
        </p>
      )}
    </form>
  );
}