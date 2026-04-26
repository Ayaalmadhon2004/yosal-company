"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "متكاملة (الاستمرارية)",
    price: "4999",
    description: "حلول تسويقية شاملة للمؤسسات الكبرى",
    whatsappUrl: "https://wa.link/g0xols", // رابط باقة الاستمرارية
    features: [
      { text: "إدارة جميع المنصات الرقمية", included: true },
      { text: "محتوى يومي + إنتاج فيديو احترافي", included: true },
      { text: "تحسين محركات البحث (SEO)", included: true },
      { text: "مدير حساب مخصص 24/7", included: true },
    ],
    isPopular: false,
  },
  {
    name: "احترافية (الصعود)",
    price: "2499",
    description: "الخيار الأمثل للنمو السريع والتوسع",
    whatsappUrl: "https://wa.link/9my46r", // رابط باقة الصعود
    features: [
      { text: "إدارة 4 منصات للتواصل الاجتماعي", included: true },
      { text: "16 منشوراً + 4 فيديوهات Reel", included: true },
      { text: "إدارة حملات إعلانية ممولة", included: true },
      { text: "تقرير أداء شهري مفصل", included: true },
    ],
    isPopular: true,
  },
  {
    name: "اقتصادية (الإنطلاق)",
    price: "999",
    description: "مثالية للشركات الناشئة والمشاريع الصغيرة",
    whatsappUrl: "https://wa.link/3tvfov", // رابط باقة الإنطلاق
    features: [
      { text: "إدارة منصتين للتواصل الاجتماعي", included: true },
      { text: "8 منشورات شهرياً", included: true },
      { text: "رد على التعليقات والرسائل", included: true },
      { text: "إعلانات ممولة", included: false },
    ],
    isPopular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="py-20 bg-[#0a0d1d]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:translate-y-[-10px] flex flex-col",
                plan.isPopular
                  ? "bg-[#1A1C2E] border-[#F58220] ring-1 ring-[#F58220] shadow-[0_0_40px_rgba(245,130,32,0.15)]"
                  : "bg-[#12162b] border-gray-800 hover:border-gray-700"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F58220] text-white px-6 py-1 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">ر.س / شهر</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-[#F58220]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#F58220]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                        <X className="w-3 h-3 text-gray-500" />
                      </div>
                    )}
                    <span className={cn(
                      "text-sm font-medium",
                      feature.included ? "text-gray-300" : "text-gray-600 line-through"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* تحويل الزر إلى رابط واتساب خارجي */}
              <a
                href={plan.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all text-center block",
                  plan.isPopular
                    ? "bg-[#F58220] text-white hover:bg-[#d46d1a]"
                    : "bg-transparent border border-gray-700 text-white hover:border-[#F58220] hover:text-[#F58220]"
                )}
              >
                اشترك الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}