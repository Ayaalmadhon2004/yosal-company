"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // هان بنحط الـ Fetch للـ API اللي رح تعمله زميلتك (Back)
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1f3d] p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* الاسم */}
        <div className="space-y-2">
          <label className="text-white text-sm">الاسم بالكامل</label>
          <input type="text" className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" required />
        </div>
        
        {/* الخدمة المطلوبة - Dropdown */}
        <div className="space-y-2">
          <label className="text-white text-sm">الخدمة المطلوبة</label>
          <select className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none">
            <option>التخطيط الاستراتيجي</option>
            <option>تطوير المواقع</option>
            <option>الهوية البصرية</option>
          </select>
        </div>

        {/* الميزانية المتوقعة */}
        <div className="space-y-2">
          <label className="text-white text-sm">الميزانية المتوقعة ($)</label>
          <input type="number" className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" placeholder="2000" />
        </div>

        {/* رقم الجوال */}
        <div className="space-y-2">
          <label className="text-white text-sm">رقم الجوال</label>
          <input type="tel" className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" placeholder="+966" />
        </div>
      </div>

      {/* تفاصيل المشروع */}
      <div className="mt-6 space-y-2">
        <label className="text-white text-sm">وصف المشروع بالتفصيل</label>
        <textarea rows={4} className="w-full bg-[#0f1225] border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 outline-none" placeholder="اشرح لنا فكرتك..."></textarea>
      </div>

      <button disabled={loading} className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
        {loading ? "جاري الإرسال..." : "إرسال طلبك الآن +"}
      </button>
    </form>
  );
}