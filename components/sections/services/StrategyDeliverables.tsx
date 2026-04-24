import React from "react";

interface DeliverableItem {
  title: string;
  desc: string;
  icon: any; 
}

interface StrategyDeliverablesProps {
  items?: DeliverableItem[]; 
}

export default function StrategyDeliverables({ items = [] }: StrategyDeliverablesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[#1A1C2E]">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ما الذي ستحصل عليه؟
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            نحن نضمن لك مخرجات ملموسة تساهم في نمو عملك وتطوير حضورك الرقمي باحترافية.
          </p>
        </div>

        {/* شبكة عرض المخرجات - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#242741] p-8 rounded-[30px] border border-white/5 hover:border-[#F58220]/30 transition-all duration-300 group text-right"
              dir="rtl"
            >
              {/* حاوية الأيقونة مع تأثير التحويم */}
              <div className="bg-[#1A1C2E] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                {/* رندر الأيقونة الممررة ديناميكياً */}
                <item.icon className="w-7 h-7 text-[#F58220]" />
              </div>
              
              {/* العنوان والوصف */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F58220] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}