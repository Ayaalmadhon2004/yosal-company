import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { Check } from "lucide-react";

interface Feature {
  id: number;
  feature_text: string;
  is_available: number;
}

interface PackageItem {
  id: number;
  name: string;
  short_description: string;
  price: number;
  badge: string | null;
  is_featured: number;
  features: Feature[];
}

interface PricingProps {
  data: PackageItem[];
}

export default function Pricing({ data }: PricingProps) {
  const plans = Array.isArray(data) ? data : [];

  return (
    <section id="pricing" className="py-24 bg-brand-dark w-full" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            باقاتنا <span className="text-brand-orange">المرنة</span>
          </h2>
          <p className="text-body text-gray-400">اختر الباقة التي تناسب حجم طموحاتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className="relative group">
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-brand-orange text-white px-6 py-1 rounded-full text-tag-sm font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <AppCard 
                className={`h-full flex flex-col border-white/5 transition-all duration-500 ${
                  plan.is_featured === 1 ? "ring-2 ring-brand-orange scale-105 z-0 bg-[#1A1C2E]" : "hover:bg-white/[0.02]"
                }`}
              >
                <AppCardHeader className="text-right p-8">
                  <AppCardTitle className="text-sub-title mb-2 text-white">{plan.name}</AppCardTitle>
                  <AppCardDescription className="text-tag-lg text-gray-400">
                    {plan.short_description}
                  </AppCardDescription>
                  
                  <div className="mt-6 flex items-baseline justify-right gap-1">
                    <span className="text-4xl font-bold text-brand-orange">{plan.price}</span>
                    <span className="text-gray-400 text-tag-sm mr-1">ر.س</span>
                  </div>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li 
                        key={feature.id} 
                        className={`flex items-center gap-3 text-tag-lg ${
                          feature.is_available === 1 ? "text-gray-300" : "text-gray-600 line-through opacity-50"
                        }`}
                      >
                        <div className={`rounded-full p-1 ${
                          feature.is_available === 1 ? "bg-brand-orange/10" : "bg-gray-800"
                        }`}>
                          <Check className={`h-3 w-3 ${
                            feature.is_available === 1 ? "text-brand-orange" : "text-gray-600"
                          }`} />
                        </div>
                        {feature.feature_text}
                      </li>
                    ))}
                  </ul>

                  <AppButton 
                    variant={plan.is_featured === 1 ? "primary" : "outline"}
                    className={`w-full py-6 btn-text font-bold rounded-xl transition-all ${
                        plan.is_featured === 1 
                        ? "bg-brand-orange text-white hover:bg-orange-600" 
                        : "border-gray-700 text-white hover:border-brand-orange"
                    }`}
                  >
                    اشترك الآن
                  </AppButton>
                </AppCardContent>
              </AppCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}