"use client"; // ضروري لاستخدام الـ State
import { useState } from "react";
import { faqsData } from "@/lib/data";
import { ChevronDown, ArrowLeft } from "lucide-react";

export default function Faqs() {
  // تحديد السؤال الأول مفتوحاً افتراضياً كما في الصورة
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0F112B] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* الجانب الأيمن: العنوان */}
          <div className="lg:col-span-4 text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h2>
            <p className="text-gray-400 mb-12">
              إليك بعض الإجابات على الأسئلة التي قد تدور في ذهنك حول خدماتنا وكيفية العمل معنا.
            </p>

            <div className="bg-[#161839]/40 p-8 rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold mb-4">هل لديك سؤال آخر؟</h4>
              <button className="flex items-center gap-2 text-[#F58220] font-bold hover:gap-4 transition-all">
                <span>تحدث معنا مباشرة</span>
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* الجانب الأيسر: الـ Dropdowns */}
          <div className="lg:col-span-8 space-y-4">
            {faqsData.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-[#161839]/30 rounded-2xl border transition-all duration-300 ${
                  openId === faq.id ? "border-[#F58220]/30" : "border-white/5"
                }`}
              >
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-right flex items-center justify-between group"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    openId === faq.id ? "text-[#F58220]" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-[#F58220] transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`} />
                </button>

                {/* محتوى الـ Dropdown مع تأثير بسيط */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}