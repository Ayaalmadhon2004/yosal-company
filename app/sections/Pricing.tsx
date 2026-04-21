import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0F112B] w-full" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">باقاتنا <span className="text-[#F58220]">المرنة</span></h2>
          <p className="text-gray-400">اختر الباقة التي تناسب حجم طموحاتك</p>
        </div>

        {/* ✅ Grid الأساسي - 3 أعمدة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="relative group">
              {/* شارة "الأكثر طلباً" */}
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#F58220] text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <AppCard 
                className={`h-full flex flex-col border-white/5 transition-all duration-500 ${
                  plan.isFeatured ? "ring-2 ring-[#F58220] scale-105 z-0" : "hover:bg-white/[0.02]"
                }`}
              >
                <AppCardHeader className="text-center p-8">
                  <AppCardTitle className="text-xl mb-2">{plan.name}</AppCardTitle>
                  <AppCardDescription>{plan.description}</AppCardDescription>
                  
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#F58220]">{plan.price}</span>
                    <span className="text-gray-400 text-sm">ر.س / شهر</span>
                  </div>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="rounded-full bg-[#F58220]/10 p-1">
                          <Check className="h-3 w-3 text-[#F58220]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <AppButton 
                    variant={plan.isFeatured ? "primary" : "outline"}
                    className="w-full py-6 text-lg"
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