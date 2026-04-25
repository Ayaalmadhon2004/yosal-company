"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "هل يمكنني تغيير باقتي لاحقاً؟",
    answer: "نعم، يمكنك ترقية باقتك أو تعديلها في أي وقت بما يتناسب مع احتياجات نمو مشروعك. فريقنا سيساعدك في عملية الانتقال بسلاسة."
  },
  {
    question: "هل تشمل الباقات ميزانية الإعلانات؟",
    answer: "لا، الباقات تشمل أتعاب الإدارة والتنفيذ الإبداعي. ميزانية الإعلانات (الممولة) يتم دفعها مباشرة للمنصات (مثل فيسبوك أو جوجل) حسب الميزانية التي تحددها."
  },
  {
    question: "ما هو مدة الالتزام بالباقة؟",
    answer: "نعمل بنظام شهري مرن، ومع ذلك ننصح دائماً بالاستمرار لمدة 3 أشهر على الأقل لرؤية نتائج ملموسة وتحليلات دقيقة لأداء الحملات."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0d1d]" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">الأسئلة الشائعة</h2>
          <div className="w-20 h-1.5 bg-[#F58220] mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index ? "bg-[#1A1C2E] border-[#F58220]/50" : "bg-[#12162b]/50"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                    openIndex === index ? "bg-[#F58220] text-white" : "bg-gray-800 text-gray-400"
                  )}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-lg font-bold transition-colors",
                    openIndex === index ? "text-white" : "text-gray-300"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-gray-500 transition-transform duration-300",
                  openIndex === index && "rotate-180 text-[#F58220]"
                )} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed mr-12">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}