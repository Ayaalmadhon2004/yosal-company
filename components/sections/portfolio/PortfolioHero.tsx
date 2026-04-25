import React from "react";

export default function PortfolioHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden text-center" dir="rtl">
      <div className="container mx-auto px-6 relative z-10">
        <span className="text-[#F58220] font-bold tracking-widest text-sm mb-4 block">قصص النجاح</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          معرض <span className="text-[#F58220]">أعمالنا</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          نحول الرؤى إلى واقع رقمي ملموس. اكتشف كيف ساعدنا شركاءنا في تحقيق نمو استثنائي من خلال استراتيجيات تسويقية مبتكرة وأداء دقيق.
        </p>
      </div>
    </section>
  );
}