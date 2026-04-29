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
    <section className="py-24 bg-transparent" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">الأسئلة الشائعة</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {data.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={`faq-${index}`}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "bg-secondary/40 border-primary/30 shadow-lg shadow-primary/5" 
                    : "bg-secondary/10 border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-right outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0",
                      isOpen ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    )}>
                      <HelpCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className={cn(
                      "text-lg font-bold transition-colors",
                      isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    )}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-500 flex-shrink-0",
                    isOpen && "rotate-180 text-primary"
                  )} aria-hidden="true" />
                </button>
                
                <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}