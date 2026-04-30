"use client";

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden text-center" dir="rtl">
      
      {/* خلفية فنية: تأثير التوهج الإبداعي - تم تحسين الأبعاد للموبايل */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-12 md:-top-24 -right-12 md:-right-24 w-48 md:w-64 h-48 md:h-64 bg-primary/10 blur-[60px] md:blur-[80px] rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* شارة علوية بتصميم عصري - متجاوبة */}
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-secondary/30 border border-white/5 text-primary mb-6 md:mb-8 backdrop-blur-sm shadow-xl">
          <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary" />
          <span className="font-black text-[10px] md:text-sm tracking-wider uppercase">قصص النجاح والأثر</span>
        </div>

        {/* العنوان الرئيسي - تم تصغير حجم الخط للموبايل لتجنب التكسر */}
        <h1 className="text-4xl md:text-7xl font-black text-foreground mb-8 md:mb-10 leading-[1.2] md:leading-[1.1] tracking-tight">
          معرض <span className="text-primary relative inline-block">
            أعمالنا
            <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>

        {/* الوصف - تم تعديل العرض والخط ليناسب الموبايل */}
        <div className="max-w-3xl mx-auto relative px-2">
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-medium">
            نحن لا نبني حملات فحسب، بل نحول الرؤى الطموحة إلى <span className="text-foreground">واقع رقمي ملموس</span>. اكتشف كيف ساعدنا شركاءنا في تحقيق نمو استثنائي من خلال مزيج بين الفن والبيانات.
          </p>
        </div>

        {/* فاصل بصري أنيق - مضاف إليه خاصية isolate لضمان الظهور */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-3 isolate">
          <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-primary to-transparent" />
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary/40" />
          <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}