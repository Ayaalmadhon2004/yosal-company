"use client";

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioHero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden text-center" dir="rtl">
      {/* خلفية فنية: تأثير التوهج الإبداعي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* شارة علوية بتصميم عصري */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/30 border border-white/5 text-primary mb-8 backdrop-blur-sm shadow-xl">
          <Star className="w-4 h-4 fill-primary" />
          <span className="font-black text-xs md:text-sm tracking-wider uppercase">قصص النجاح والأثر</span>
        </div>

        {/* العنوان الرئيسي مع التركيز البصري */}
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-10 leading-[1.1] tracking-tight">
          معرض <span className="text-primary relative inline-block">
            أعمالنا
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>

        {/* الوصف مع تحسين القابلية للقراءة */}
        <div className="max-w-3xl mx-auto relative">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
            نحن لا نبني حملات فحسب، بل نحول الرؤى الطموحة إلى <span className="text-foreground">واقع رقمي ملموس</span>. اكتشف كيف ساعدنا شركاءنا في تحقيق نمو استثنائي من خلال مزيج بين الفن والبيانات.
          </p>
        </div>

        {/* فاصل بصري أنيق */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-gradient-to-l from-primary to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}