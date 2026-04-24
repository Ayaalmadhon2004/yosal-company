import React from "react";

export default function PackagesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" dir="rtl">
      {/* تأثير الإضاءة الخلفية (Glow effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#F58220]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          لنمو <span className="text-[#F58220]">أعمالك</span>
        </h1>
        
        {/* الوصف */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          اختر الباقة التي تناسب تطلعاتك. نحن هنا لنحول رؤيتك إلى واقع رقمي ملموس من خلال استراتيجيات مدروسة وأدوات احترافية.
        </p>

        {/* الخطوط الجمالية التي تظهر في التصميم */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-700" />
          <span className="text-[#F58220] font-bold text-sm tracking-widest">استثمر في مستقبلك</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-700" />
        </div>
      </div>
    </section>
  );
}