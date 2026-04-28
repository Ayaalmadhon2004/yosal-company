"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqsProps {
  data: FAQItem[]; 
}

export default function FAQSection({ data = [] }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 " dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">الأسئلة الشائعة</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {data.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index 
                  ? "bg-brand-navy border-primary/30 shadow-lg shadow-primary/5" 
                  : "bg-card/30 border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                    openIndex === index ? "bg-primary text-white scale-110" : "bg-muted/20 text-muted-foreground"
                  )}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-lg font-bold transition-colors",
                    openIndex === index ? "text-primary" : "text-foreground"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-500",
                  openIndex === index && "rotate-180 text-primary"
                )} />
              </button>
              
              <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed mr-12 border-t border-white/5 mt-2">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}