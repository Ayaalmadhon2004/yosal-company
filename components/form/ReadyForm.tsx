"use client";

export default function ReadyForm() {
  return (
    <div className="bg-brand-navy border border-white/5 p-8 lg:p-10 rounded-[45px] shadow-2xl w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-white mb-10 text-right">ابدأ اليوم</h3>
      
      <form className="space-y-8" dir="rtl">
        {/* السطر الأول: الاسم والبريد الإلكتروني */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-right">
            <label className="text-gray-300 text-sm pr-2 font-medium">الاسم</label>
            <input 
              type="text" 
              placeholder="أدخل اسمك"
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
            />
          </div>
          <div className="space-y-3 text-right">
            <label className="text-gray-300 text-sm pr-2 font-medium">البريد الإلكتروني</label>
            <input 
              type="email" 
              placeholder="example@mail.com"
              className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* حقل رقم الجوال */}
        <div className="space-y-3 text-right">
          <label className="text-gray-300 text-sm pr-2 font-medium">رقم الجوال</label>
          <input 
            type="tel" 
            placeholder="05xxxxxxxx"
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
          />
        </div>

        {/* حقل الرابط */}
        <div className="space-y-3 text-right">
          <label className="text-gray-300 text-sm pr-2 font-medium">رابط المشروع / الموقع</label>
          <input 
            type="url" 
            placeholder="https://..."
            className="w-full bg-brand-dark border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-orange/50 transition-all placeholder:text-gray-600"
          />
        </div>

        {/* الزر البرتقالي الرئيسي */}
        <button 
          type="submit"
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-black py-5 rounded-2xl text-lg shadow-[0_10px_25px_rgba(245,130,32,0.3)] transition-all active:scale-95"
        >
          أحصل على التقييم
        </button>

        <p className="text-[11px] text-gray-500 text-center leading-relaxed">
          لن نشارك بياناتك مع أي طرف خارجي. أمانك أولويتنا.
        </p>
      </form>
    </div>
  );
}