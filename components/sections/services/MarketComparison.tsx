"use client";

import React from "react";
import { AlertTriangle, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { servicesData } from "@/constants/servicesData";
import { cn } from "@/lib/utils";

export default function MarketComparison() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentService = servicesData[slug as keyof typeof servicesData];

  if (!currentService || !currentService.comparison) return null;

  const { comparison, comparisonStyle = "side-by-side" } = currentService;

  return (
    <section className="py-24 px-6 ">
      <div className="max-w-[1200px] mx-auto">
        
        <div className={cn(
          "grid gap-8 items-stretch",
          comparisonStyle === "separated" ? "md:grid-cols-1" : "md:grid-cols-2"
        )}>
          
          {/* كرت التحديات (الوضع الحالي في السوق) */}
          <div 
            className="group relative p-10 md:p-14 rounded-[40px] bg-secondary/20 border border-white/5 transition-all duration-500 hover:border-destructive/20 flex flex-col justify-center text-right" 
            dir="rtl"
          >
            <div className="mb-6 flex justify-start">
              <div className="p-3 rounded-2xl bg-destructive/10 border border-destructive/20">
                <AlertTriangle className="text-destructive w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-foreground mb-4 leading-tight">
              {comparison.challengeTitle || "التحديات الحالية"}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {comparison.challengeDescription}
            </p>

            <div className="space-y-4">
              {comparison.challenges.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground/80 justify-start group/item">
                  <XCircle className="w-5 h-5 text-destructive/40 flex-shrink-0 group-hover/item:text-destructive transition-colors" />
                  <span className="text-md font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* كرت الحلول (قوة يوصل) */}
          <div 
            className="group relative p-10 md:p-14 rounded-[40px] bg-secondary/30 border border-primary/20 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.05)] transition-all duration-500 hover:scale-[1.01] flex flex-col justify-center text-right overflow-hidden" 
            dir="rtl"
          >
            {/* تأثير الإضاءة (Glow) الموحد */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mb-6 flex justify-start relative z-10">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <Sparkles className="text-primary w-6 h-6 animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-foreground mb-4 leading-tight relative z-10">
              {comparison.solutionTitle || "حلول يوصل الذكية"}
            </h3>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8 relative z-10">
              {comparison.solutionDescription}
            </p>

            <div className="space-y-4 relative z-10">
              {comparison.solutions.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3 text-foreground justify-start group/sol">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover/sol:scale-110 transition-transform" />
                  <span className="text-md font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}