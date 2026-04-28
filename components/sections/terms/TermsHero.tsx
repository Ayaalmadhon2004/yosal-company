"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

export default function TermsHero() {
  return (
    <section className="pt-32 pb-12 px-6 " dir="rtl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl">
        
        {/* الجانب الأيمن: العنوان والوصف */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="text-primary font-bold text-sm uppercase tracking-widest">السياسات القانونية</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1.1]">
            شروط <span className="text-primary">الخدمة</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            في <span className="text-foreground font-bold">"يوصل"</span>، نلتزم بالشفافية والوضوح في كافة تعاملاتنا الرقمية. هذه الاتفاقية تنظم العلاقة القانونية بين الوكالة وعملائها لضمان أفضل تجربة تسويقية.
          </p>
        </div>

        {/* الجانب الأيسر: بطاقة آخر تحديث */}
        <div className="relative group">
          {/* تأثير توهج خلف البطاقة */}
          <div className="absolute -inset-1 bg-primary/20 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          
          <div className="relative bg-secondary/20 p-10 rounded-[2.5rem] border border-white/5 text-center flex flex-col justify-center items-center backdrop-blur-md">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <CalendarDays className="text-primary w-7 h-7" />
            </div>
            
            <span className="text-muted-foreground block mb-1 font-bold">آخر تحديث</span>
            <div className="flex items-baseline gap-2 mb-4">
               <span className="text-primary text-4xl font-black">15</span>
               <span className="text-foreground text-2xl font-bold">أكتوبر</span>
            </div>
            <span className="text-muted-foreground/60 font-medium mb-6">2024</span>
            
            <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-6">
              نهدف في يوصل إلى بناء جسور الثقة من خلال وضوح القواعد والالتزامات المتبادلة.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}