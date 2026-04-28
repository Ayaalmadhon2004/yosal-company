"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StorySection() {
  return (
    <section className="py-24  overflow-hidden text-right relative" dir="rtl">
      {/* عناصر خلفية زخرفية */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* المحتوى النصي */}
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-white/5 text-primary mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="font-black text-xs md:text-sm tracking-widest uppercase">رحلة الإبداع</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight">
                نحن لا نصنع حملات، <br />
                <span className="text-primary italic relative">
                  نحن نبني جسوراً.
                  <svg className="absolute -bottom-2 right-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl font-medium">
              بدأت <span className="text-foreground font-bold">"يوصل"</span> من رؤية طموحة: كيف يمكن للتسويق الرقمي أن يكون محركاً حقيقياً للنمو وليس مجرد أرقام عابرة؟ انطلقنا لنغير مفهوم الوصول، حيث نضمن وصول رسالتك للجمهور الصحيح في اللحظة الحاسمة.
            </p>

            {/* الإحصائيات بتصميم عصري */}
            <div className="flex flex-wrap gap-10 pt-10 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-4xl font-black text-foreground block">+500</span>
                  <p className="text-muted-foreground font-bold text-sm uppercase tracking-wider">مشروع ناجح</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/40 flex items-center justify-center text-primary border border-white/5">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-4xl font-black text-foreground block">98%</span>
                  <p className="text-muted-foreground font-bold text-sm uppercase tracking-wider">رضا الشركاء</p>
                </div>
              </div>
            </div>
          </div>

          {/* الصورة مع تأثيرات الإمالة */}
          <div className="lg:w-1/2 relative order-1 lg:order-2 group">
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-8 border-secondary shadow-2xl transition-all duration-700 group-hover:rotate-0 -rotate-3 hover:scale-[1.02] aspect-square lg:aspect-auto lg:h-[600px]">
              <Image 
                src="/assets/about (2).png" 
                alt="فريق عمل وكالة يوصل في نقاش إبداعي"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* تدرج لوني خفيف فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
            
            {/* عناصر عائمة خلف الصورة */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full -z-10 group-hover:bg-primary/30 transition-colors" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/40 blur-[80px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}