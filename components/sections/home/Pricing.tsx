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
    <section id="pricing" className="py-24  w-full" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            باقاتنا <span className="text-primary">المرنة</span>
          </h2>
          <p className="text-body text-muted-foreground">اختر الباقة التي تناسب حجم طموحاتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className="relative group">
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-6 py-1 rounded-full text-tag-sm font-bold shadow-lg shadow-primary/20">
                    {plan.badge}
                  </span>
                </div>
              )}

              <AppCard 
                className={`h-full flex flex-col transition-all duration-500 border-none rounded-4xl ${
                  plan.is_featured === 1 
                  ? "ring-2 ring-primary scale-105 z-0 bg-brand-navy shadow-2xl shadow-primary/10" 
                  : "glass-card hover:bg-white/[0.04]"
                }`}
              >
                <AppCardHeader className="text-right p-8">
                  <AppCardTitle className="text-sub-title mb-2 text-foreground">{plan.name}</AppCardTitle>
                  <AppCardDescription className="text-tag-lg text-muted-foreground">
                    {plan.short_description}
                  </AppCardDescription>
                  
                  <div className="mt-6 flex items-baseline justify-start gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-tag-sm mr-1">ر.س</span>
                  </div>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li 
                        key={feature.id} 
                        className={`flex items-center gap-3 text-tag-lg transition-opacity ${
                          feature.is_available === 1 ? "text-gray-200" : "text-muted-foreground/40 line-through"
                        }`}
                      >
                        <div className={`rounded-full p-1 shrink-0 ${
                          feature.is_available === 1 ? "bg-primary/10" : "bg-muted/20"
                        }`}>
                          <Check className={`h-3 w-3 ${
                            feature.is_available === 1 ? "text-primary" : "text-muted-foreground/40"
                          }`} />
                        </div>
                        {feature.feature_text}
                      </li>
                    ))}
                  </ul>

                  <AppButton 
                    className={`w-full py-6 btn-text font-bold rounded-2xl transition-all ${
                        plan.is_featured === 1 
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" 
                        : "bg-transparent border border-white/10 text-white hover:border-primary hover:text-primary"
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