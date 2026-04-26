"use client";

import React from "react";
import { AlertTriangle, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { servicesData } from "@/constants/servicesData";

export default function MarketComparison() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentService = servicesData[slug as keyof typeof servicesData];
  if (!currentService || !currentService.comparison) return null;

  const { comparison, comparisonStyle = "side-by-side" } = currentService;

  return (
    <section className="py-24 px-6 bg-[#0F111A]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className={`grid gap-8 items-stretch ${
          comparisonStyle === "separated" ? "md:grid-cols-1" : "md:grid-cols-2"
        }`}>
          
          <div 
            className="group relative p-10 md:p-14 rounded-[40px] bg-[#1A1C2E] border border-white/5 transition-all duration-500 hover:border-red-500/20 flex flex-col justify-center text-right" 
            dir="rtl"
          >
            <div className="mb-6 flex justify-start">
              <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="text-red-400 w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              {comparison.challengeTitle || "التحديات الحالية"}
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {comparison.challengeDescription}
            </p>

            <div className="space-y-4">
              {comparison.challenges.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-500 justify-start">
                  <XCircle className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                  <span className="text-md font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* كرت الحلول (قوة يوصل) */}
          <div 
            className="group relative p-10 md:p-14 rounded-[40px] bg-[#1A1C2E] border border-[#FF8A00]/20 shadow-[0_20px_50px_rgba(255,138,0,0.05)] transition-all duration-500 hover:scale-[1.01] flex flex-col justify-center text-right" 
            dir="rtl"
          >
            {/* تأثير الإضاءة (Glow) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF8A00]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mb-6 flex justify-start relative z-10">
              <div className="p-3 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20">
                <Sparkles className="text-[#FF8A00] w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-4 leading-tight relative z-10">
              {comparison.solutionTitle || "حلول يوصل الذكية"}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
              {comparison.solutionDescription}
            </p>

            <div className="space-y-4 relative z-10">
              {comparison.solutions.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white justify-start">
                  <CheckCircle2 className="w-5 h-5 text-[#FF8A00] flex-shrink-0" />
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