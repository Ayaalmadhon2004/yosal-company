"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// المكون يستقبل data كمصفوفة جاهزة
export default function Faqs({ data }: { data?: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // إذا لم توجد بيانات، لا يظهر المكون
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-transparent" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-center mb-12">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {data.map((faq, index) => (
            <div key={faq.id || index} className="border rounded-2xl p-6 bg-secondary/10">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center font-bold text-lg"
              >
                {faq.question}
                <ChevronDown className={cn("transition-transform", openIndex === index && "rotate-180")} />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}