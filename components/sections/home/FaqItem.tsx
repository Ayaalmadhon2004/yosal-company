"use client";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useId();
  const buttonId = `faq-btn-${uid}`;
  const panelId = `faq-panel-${uid}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
      {/* تأثير اللمعة */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex justify-between items-center p-5 sm:p-6 gap-4 font-bold text-base sm:text-lg text-right min-h-14"
        >
          {question}
          <ChevronDown aria-hidden="true" className={cn("transition-transform duration-300 flex-shrink-0", isOpen && "rotate-180")} />
        </button>
        
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!isOpen}
          className={cn(
          "grid transition-all duration-300 ease-in-out px-6",
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}>
          <p className="text-muted-foreground leading-relaxed overflow-hidden">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}