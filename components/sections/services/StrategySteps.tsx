"use client";
import { RevealSection, Stagger, StaggerItem } from "@/components/ui/Motion";

import React from "react";

interface Step {
  number: string;
  title: string;
  desc: string;
}

interface StrategyStepsProps {
  steps: Step[];
  sectionTitle?: string;
}

export default function StrategySteps({ steps = [], sectionTitle = "رحلتنا نحو التميز" }: StrategyStepsProps) {
  if (!steps || !steps.length) return null;

  return (
    <RevealSection y={0} className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-16 md:mb-24">{sectionTitle}</h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[2px] bg-white/5 -z-10" />
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={`step-${index}`} className="flex flex-col items-center group relative">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-black text-white mb-10 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110 relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow pointer-events-none" />
                </div>
                <div className="bg-secondary/30 p-8 rounded-[40px] border border-white/5 w-full min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-primary/20 group-hover:bg-secondary/40 backdrop-blur-sm relative overflow-hidden">
                  <h3 className="text-2xl font-extrabold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </RevealSection>
  );
}