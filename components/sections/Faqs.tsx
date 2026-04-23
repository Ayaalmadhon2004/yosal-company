"use client";
import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { FAQ } from "@/constants/servicesData";

interface FaqsProps {
  data?: FAQ[]; // جعلها اختيارية لتجنب الكراش
}

// إضافة قيمة افتراضية [] للـ data
export default function Faqs({ data = [] }: FaqsProps) {
  // استخدام التقييم الآمن هنا
  const [openId, setOpenId] = useState<number | null>(
    data && data.length > 0 ? data[0].id : null
  );

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // الآن التحقق هنا سيمنع عرض المكون إذا كانت المصفوفة فارغة
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-brand-dark text-white" dir="rtl">
      {/* باقي الكود كما هو... */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 text-right">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">الأسئلة الشائعة</h2>
            <p className="text-lg text-gray-400 mb-12">
              إليك بعض الإجابات التي قد تدور في ذهنك حول خدماتنا.
            </p>

            <div className="bg-brand-navy/40 p-8 rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold mb-4 text-white">لديك سؤال آخر؟</h4>
              <button className="flex items-center gap-2 text-brand-orange hover:gap-4 transition-all font-bold">
                <span>تحدث معنا</span>
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {data.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-brand-navy/30 rounded-2xl border transition-all duration-300 ${
                  openId === faq.id ? "border-brand-orange/30" : "border-white/5"
                }`}
              >
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-right flex items-center justify-between group"
                >
                  <span className={`text-xl font-bold transition-colors ${
                    openId === faq.id ? "text-brand-orange" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-brand-orange transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="p-6 pt-0 text-lg text-gray-400 border-t border-white/5 leading-relaxed">
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