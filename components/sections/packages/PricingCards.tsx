"use client";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

const mockPackages = [
  {
    id: 1,
    name: "اقتصادية",
    short_description: "مثالية للشركات الناشئة و المشاريع الصغيرة",
    price: 999,
    badge: null,
    is_featured: 0,
    features: [
      { id: 1, feature_text: "إدارة منصتين للتواصل الاجتماعي", is_available: 1 },
      { id: 2, feature_text: "8 منشورات شهرياً", is_available: 1 },
      { id: 3, feature_text: "رد على التعليقات و الرسائل", is_available: 1 },
      { id: 4, feature_text: "إعلانات ممولة", is_available: 0 },
    ]
  },
  {
    id: 2,
    name: "احترافية",
    short_description: "الخيار الأمثل لنمو السريع و التوسع",
    price: 2499,
    badge: "الأكثر طلباً",
    is_featured: 1,
    features: [
      { id: 5, feature_text: "إدارة 4 منصات للتواصل الاجتماعي", is_available: 1 },
      { id: 6, feature_text: "16 منشوراً + 4 فيديوهات Reel", is_available: 1 },
      { id: 7, feature_text: "تقرير أداء شهري مفصل", is_available: 1 },
      { id: 8, feature_text: "إدارة حملات إعلانية ممولة", is_available: 1 },
    ]
  },
  {
    id: 3,
    name: "متكاملة",
    short_description: "حلول تسويقية شاملة للمؤسسات الكبرى",
    price: 4999,
    badge: null,
    is_featured: 0,
    features: [
      { id: 9, feature_text: "إدارة جميع المنصات الرقمية", is_available: 1 },
      { id: 10, feature_text: "محتوى يومي + إنتاج فيديو احترافي", is_available: 1 },
      { id: 11, feature_text: "تحسين محركات SEO", is_available: 1 },
      { id: 12, feature_text: "مدير حساب مخصص 24/7", is_available: 1 },
    ]
  }
];

export default function PricingCards() {
  const [packages, setPackages] = useState(mockPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // ليش هنا بعمل فتش من اللوكال , مفروض من https://yosaal-website-backend.onrender.com/api/v1/packages صح ولا كيف 
        const response = await fetch("http://localhost:8000/api/v1/packages");
        const json = await response.json();
        if (json && json.status === "Success") {
          setPackages(json.data);
        }
      } catch (error) {
        console.warn("Using mock data as fallback");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <section className="py-20 px-4 bg-[#0a0d1d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg: any) => (
          <div 
            key={pkg.id}
            className={`relative p-8 rounded-[40px] border transition-all duration-500 flex flex-col ${
              pkg.is_featured 
                ? "bg-[#161a35] border-orange-500 scale-105 shadow-2xl z-10" 
                : "bg-[#0f1225] border-white/5 hover:border-orange-500/30"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                {pkg.badge}
              </div>
            )}

            <div className="text-right mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
              <p className="text-gray-400 text-sm h-12 leading-relaxed">{pkg.short_description}</p>
            </div>

            <div className="text-right mb-8">
              <div className="flex items-baseline gap-1 justify-end flex-row-reverse">
                <span className="text-5xl font-black text-white">${pkg.price}</span>
                <span className="text-gray-500 text-lg">/شهرياً</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow text-right" dir="rtl">
              {pkg.features.map((feature: any) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    feature.is_available ? "bg-green-500/10" : "bg-red-500/10"
                  }`}>
                    {feature.is_available ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <X className="w-3 h-3 text-red-500" />
                    )}
                  </div>
                  <span className={`text-sm ${feature.is_available ? "text-gray-300" : "text-gray-500 line-through"}`}>
                    {feature.feature_text}
                  </span>
                </div>
              ))}
            </div>

            <AppButton 
              variant={pkg.is_featured ? "orange" : "outline"} 
              className="w-full rounded-2xl py-6 font-bold"
            >
              ابدأ مع الباقة {pkg.name}
            </AppButton>
          </div>
        ))}
      </div>
    </section>
  );
}