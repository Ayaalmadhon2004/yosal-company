"use client";

import React from "react";
import { TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PackagesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden text-center" dir="rtl">
      {/* خلفية فنية: تأثير التوهج للنمو */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-10 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* شارة علوية تعكس الهدف */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-white/5 text-primary mb-8 backdrop-blur-md shadow-lg">
          <TrendingUp className="w-4 h-4" />
          <span className="font-black text-xs md:text-sm tracking-wide uppercase">حلول نمو متكاملة</span>
        </div>

        {/* العنوان الرئيسي بتصميم جريء */}
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1.1] tracking-tight">
          باقات مصممة <br className="hidden md:block" />
          لـ <span className="text-primary relative inline-block">
            نمو أعمالك
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>
        
        {/* الوصف الاستراتيجي */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          سواء كنت تبحث عن التأسيس أو الانطلاق نحو القمة، باقاتنا صُممت لتغطي كافة احتياجاتك التسويقية بذكاء استراتيجي وأدوات تضمن لك <span className="text-foreground">أعلى عائد على الاستثمار</span>.
        </p>

        {/* فاصل بصري مطور */}
        <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary opacity-60" />
            <span className="text-primary font-black text-xs md:text-sm tracking-[0.2em] uppercase">
              استثمر في مستقبلك
            </span>
            <Sparkles className="w-4 h-4 text-primary opacity-60" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}