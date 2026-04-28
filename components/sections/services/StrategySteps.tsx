"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  desc: string;
}

interface StrategyStepsProps {
  steps: Step[];
  sectionTitle?: string;
}

export default function StrategySteps({ 
  steps = [], 
  sectionTitle = "رحلتنا نحو التميز" 
}: StrategyStepsProps) {
  
  if (!steps.length) return null;

  return (
    <section className="py-24 px-6  relative overflow-hidden">
      {/* لمسات خلفية لتعزيز العمق */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-y-1/2" />
      
      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-24">
          {sectionTitle}
        </h2>
        
        <div className="relative">
          {/* خط الوصل الخلفي المطور */}
          <div className="hidden md:block absolute top-[32px] left-0 w-full h-[2px] bg-white/5 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                
                {/* الدائرة المرقمة مع تأثير التوهج */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-black text-white mb-10 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50 relative">
                  {step.number}
                  {/* تأثير النبض الخفيف */}
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40" />
                </div>
                
                {/* محتوى الخطوة */}
                <div className="bg-secondary/30 p-8 rounded-[40px] border border-white/5 w-full min-h-[240px] flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:border-primary/30 group-hover:bg-secondary/40 backdrop-blur-sm relative overflow-hidden">
                  {/* تدرج لوني خفيف عند التحويم */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-2xl font-extrabold text-foreground mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm relative z-10 group-hover:text-foreground/90 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* سهم الوصل بين الخطوات (للموبايل) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden mt-8 text-primary/30 animate-bounce">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}