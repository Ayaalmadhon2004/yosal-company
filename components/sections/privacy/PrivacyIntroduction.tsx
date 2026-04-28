"use client";

import React from "react";
import { ShieldCheck, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrivacyIntroduction() {
  return (
    <div className="bg-secondary/30 p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group" dir="rtl">
      {/* تأثير ضوئي خفيف في الزاوية يعطي طابع الحماية */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="flex items-center gap-5 mb-8 relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform duration-500">
          <LockKeyhole className="text-primary w-7 h-7" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-foreground">مقدمة السياسة</h3>
          <div className="h-1 w-12 bg-primary/40 rounded-full mt-1" />
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
          نحن في <span className="text-foreground font-bold">"يوصل"</span> ندرك تماماً أن البيانات هي المحرك الأساسي للعصر الرقمي، ولذلك نضع حمايتها في مقدمة أولوياتنا. تهدف هذه السياسة إلى إطلاعك بشفافية تامة على ممارساتنا المتعلقة بجمع، استخدام، وحماية معلوماتك الشخصية.
        </p>
        
        <div className="p-6 /40 rounded-2xl border-r-4 border-primary/60">
          <p className="text-muted-foreground leading-relaxed text-lg font-medium italic">
            "بمجرد استخدامك لمنصتنا أو الاستفادة من خدماتنا، فإنك تضع ثقتك في كيفية معالجتنا للبيانات؛ ونحن نلتزم بأن نكون عند مستوى هذه الثقة وفق أعلى معايير الخصوصية العالمية."
          </p>
        </div>
      </div>
    </div>
  );
}