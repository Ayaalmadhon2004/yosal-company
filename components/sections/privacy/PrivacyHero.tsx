"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrivacyHero() {
  return (
    <section className="relative pt-32 pb-20 text-center overflow-hidden" dir="rtl">
      {/* عناصر خلفية جمالية (توهج رقمي) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* شارة علوية مع أيقونة */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-bold text-xs md:text-sm tracking-wide">الخصوصية والأمان الرقمي</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
          سياسة <span className="text-primary">الخصوصية</span>
        </h1>

        <div className="relative max-w-3xl mx-auto">
          {/* خط زخرفي جانبي للاقتباس أو الوصف */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
            في وكالة <span className="text-foreground font-bold">يوصل</span>، نضع حماية بياناتك في قلب استراتيجياتنا. نحن نلتزم بأعلى معايير الأمان لضمان رحلة نمو رقمي آمنة وشفافة لعملك.
          </p>
        </div>

        {/* مؤشر بصري بسيط للنزول لأسفل */}
        <div className="mt-12 flex justify-center opacity-20">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}