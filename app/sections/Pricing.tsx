import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-dark w-full" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">باقاتنا <span className="text-brand-orange">المرنة</span></h2>
          <p className="text-body text-gray-400">اختر الباقة التي تناسب حجم طموحاتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="relative group">
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-brand-orange text-white px-6 py-1 rounded-full text-tag-sm font-bold shadow-lg">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <AppCard 
                className={`h-full flex flex-col border-white/5 transition-all duration-500 ${
                  plan.isFeatured ? "ring-2 ring-brand-orange scale-105 z-0" : "hover:bg-white/[0.02]"
                }`}
              >
                <AppCardHeader className="text-right p-8">
                  <AppCardTitle className="text-sub-title mb-2">{plan.name}</AppCardTitle>
                  <AppCardDescription className="text-tag-lg">{plan.description}</AppCardDescription>
                  
                  <div className="mt-6 flex items-baseline justify-right gap-1">
                    <span className="text-4xl font-bold text-brand-orange">{plan.price}</span>
                    <span className="text-gray-400 text-tag-sm">ر.س </span>
                  </div>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-tag-lg">
                        <div className="rounded-full bg-brand-orange/10 p-1">
                          <Check className="h-3 w-3 text-brand-orange" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <AppButton 
                    variant={plan.isFeatured ? "primary" : "outline"}
                    className="w-full py-6 btn-text"
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