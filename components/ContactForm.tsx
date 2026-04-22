"use client";

export default function ContactForm() {
  return (
    <div className="bg-brand-navy border border-brand-orange/20 p-8 rounded-[40px] shadow-2xl w-full border-primary">
      <div className="bg-blue p-6 rounded-3xl mb-8 border border-white/5">
        <h4 className="text-brand-orange font-bold text-center mb-2">عرض خاص</h4>
        <p className="text-white text-sm font-bold text-center mb-2">احصل على تقييم مجاني لمتجرك/مشروعك</p>
        <p className="text-gray-400 text-[11px] text-center leading-relaxed">
          سنقوم بإعطائك المعلومات الكافية لمعرفة خطوتك القادمة في التسويق الإلكتروني عن طريق تحليل سريع لنقاط الضعف والقوة.
        </p>
      </div>

      <form className="space-y-6" dir="rtl">
        <div className="space-y-2">
          <label className="text-white text-sm block pr-2">الاسم الكامل</label>
          <input 
            type="text" 
            placeholder="أدخل اسمك هنا ...." 
            className="w-full bg-brand-dark border rounded-xl border-primary px-4 py-4 text-sm outline-none focus:border-brand-orange/50 transition-all text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm block pr-2">رقم الهاتف</label>
          <input 
            type="tel" 
            placeholder="أدخل رقم الهاتف 05xxxxxxxxx" 
            className="w-full bg-brand-dark border border-primary rounded-xl px-4 py-4 text-sm outline-none focus:border-brand-orange/50 transition-all text-white text-end"
          />
        </div>

        <button className="w-full bg-brand-orange text-white font-bold py-5 rounded-xl shadow-[0_10px_20px_rgba(245,130,32,0.25)] hover:scale-[1.02] active:scale-95 transition-all">
          أحصل على التقييم
        </button>

        <p className="text-[10px] text-gray-500 text-center">نحن نحترم خصوصيتك، بياناتك آمنة معنا.</p>
      </form>
    </div>
  );
}