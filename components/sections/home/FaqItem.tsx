"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-2xl p-6 bg-secondary/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-bold text-lg text-right"
      >
        {question}
        <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </div>
  );
}