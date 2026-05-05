"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StorySection() {
  return (
    <section className="py-24 overflow-hidden text-right relative" dir="rtl">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
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

          <div className="lg:w-1/2 relative order-1 lg:order-2 group w-full isolate flex justify-center items-center">
            <div 
              className={cn(
                "relative z-10 w-full max-w-[500px] h-[400px] md:h-[550px] transition-all duration-700",
                "group-hover:scale-[1.03]"
              )}
              style={{
                // هذا الجزء هو السر في تنعيم الحواف وجعلها غير منتظمة بشكل فني
                maskImage: 'radial-gradient(circle, black 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 60%, rgba(0,0,0,0) 100%)',
              }}
            >
              <Image 
                src="/assets/about (2).png" 
                alt="فريق عمل وكالة يوصل"
                fill
                priority
                className="object-cover rounded-[3rem]" // تدوير الزوايا داخلياً
              />
              {/* طبقة تظليل خفيفة فوق الصورة لدمجها مع ألوان البراند */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            {/* العناصر العائمة الملونة خلف الصورة لتعطي عمق */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}