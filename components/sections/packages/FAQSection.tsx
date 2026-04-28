"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // نصيحة: استخدمي framer-motion للسلاسة

const faqs = [
  {
    question: "هل يمكنني تغيير باقتي لاحقاً؟",
    answer: "نعم، يمكنك ترقية باقتك أو تعديلها في أي وقت بما يتناسب مع احتياجات نمو مشروعك. فريقنا سيساعدك في عملية الانتقال بسلاسة دون انقطاع في خدماتك."
  },
  {
    question: "هل تشمل الباقات ميزانية الإعلانات؟",
    answer: "لا، الباقات تشمل أتعاب الإدارة والتنفيذ الإبداعي والاستراتيجي. ميزانية الإعلانات (الممولة) يتم دفعها مباشرة للمنصات (مثل فيسبوك أو جوجل) حسب الميزانية التي نحددها سوياً بناءً على أهدافك."
  },
  {
    question: "ما هي مدة الالتزام بالباقة؟",
    answer: "نعمل بنظام شهري مرن يمنحك كامل الحرية. ومع ذلك، ننصح دائماً بالاستمرار لمدة 3 أشهر على الأقل؛ فهذه المدة كفيلة ببناء قاعدة بيانات قوية وتحقيق نتائج ملموسة وقابلة للقياس."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24  relative overflow-hidden" dir="rtl">
      {/* لمسة خلفية هادئة */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold mb-4">
            <Sparkles className="w-3 h-3" />
            <span>لديك تساؤلات؟</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">الأسئلة الشائعة</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-50" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={cn(
                  "group border rounded-[2rem] overflow-hidden transition-all duration-500",
                  isOpen 
                    ? "bg-secondary/30 border-primary/40 shadow-xl shadow-primary/5" 
                    : "bg-secondary/10 border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-right outline-none"
                >
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-primary text-white rotate-[15deg]" : "bg-secondary/50 text-muted-foreground group-hover:text-primary"
                    )}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className={cn(
                      "text-lg md:text-xl font-black transition-colors",
                      isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-muted-foreground transition-all duration-500",
                    isOpen && "rotate-180 text-primary"
                  )} />
                </button>
                
                {/* الجزء الخاص بالإجابة مع أنيميشن سلس */}
                <div 
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-8 pt-0 text-muted-foreground leading-relaxed text-base md:text-lg mr-14 border-r-2 border-primary/20 ml-6 mb-4">
                      {faq.answer}
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