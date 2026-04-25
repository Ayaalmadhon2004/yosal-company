"use client";

import React from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/constants/servicesData";

export default function StrategyDeliverables() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentService = servicesData[slug];

  if (!currentService || !currentService.deliverables) return null;

  const layout = currentService.layoutType || "equal";

  // وظيفة ذكية لتحديد الـ Grid Styles بناءً على نوع التصميم
  const getGridStyles = (index: number) => {
    // 1. تصميم Big Right (مثل التخطيط وصناعة المحتوى)
    if (layout === "big-right") {
      switch (index) {
        case 0: return "md:col-span-8 bg-[#1A1C2E]"; 
        case 1: return "md:col-span-4 bg-[#1A1C2E]";
        case 2: return "md:col-span-5 bg-[#FF8A00]"; // الكرت البرتقالي
        case 3: return "md:col-span-7 bg-[#1A1C2E]";
        default: return "md:col-span-6 bg-[#1A1C2E]";
      }
    }
    // 2. تصميم Big Left (مثل SEO والبراندنج)
    if (layout === "big-left") {
      switch (index) {
        case 0: return "md:col-span-4 bg-[#1A1C2E]";
        case 1: return "md:col-span-8 bg-[#1A1C2E]";
        case 2: return "md:col-span-7 bg-[#1A1C2E]";
        case 3: return "md:col-span-5 bg-[#FF8A00]"; // الكرت البرتقالي صار هنا
        default: return "md:col-span-6 bg-[#1A1C2E]";
      }
    }
    // 3. تصميم Equal (مثل السوشيال ميديا وتطوير المواقع)
    return "md:col-span-6 bg-[#1A1C2E]";
  };

  return (
    <section className="py-24 px-6 bg-[#0F111A] text-right" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        
        {/* العنوان والوصف الدايناميك */}
        <div className="flex flex-col mb-16 justify-start">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {currentService.title} 
            </h2>
            <div className="h-1.5 w-20 bg-[#FF8A00] rounded-full mt-4" />
          </div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            نقدم حلولاً متكاملة تضمن لك الهيمنة على سوقك والظهور بأفضل صورة رقمية ممكنة.
          </p>
        </div>

        {/* شبكة الكروت الدايناميك */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[650px]">
          {currentService.deliverables.slice(0, 4).map((item, index) => {
            const Icon = item.icon;
            
            // تحديد الكرت البرتقالي بناءً على اللي اوت
            const isOrange = (layout === "big-right" && index === 2) || 
                             (layout === "big-left" && index === 3) ||
                             (layout === "equal" && index === 1); // اختياري للـ Equal

            return (
              <div 
                key={index}
                className={`${getGridStyles(index)} rounded-[40px] p-10 relative overflow-hidden flex flex-col justify-center items-start border border-white/5 transition-all duration-500 hover:scale-[1.01]`}
              >
                {/* الأيقونة الخلفية الكبيرة للكرت الملون */}
                {isOrange && (
                  <Icon size={180} className="absolute -top-10 -right-10 p-8 opacity-10 rotate-12 text-white pointer-events-none" />
                )}

                <div className="relative z-10 w-full">
                  {/* أيقونة الكرت الصغيرة */}
                  <div className={`mb-6 p-3 rounded-2xl inline-block ${isOrange ? "bg-white/10 text-white" : "bg-[#FF8A00]/10 text-[#FF8A00]"}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className={`text-lg leading-relaxed ${isOrange ? "text-white/90" : "text-gray-400"} max-w-[90%]`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}