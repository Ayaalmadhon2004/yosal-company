"use client";

import React from "react";
import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="pricing" className="py-24 w-full bg-background" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#F58220] mb-6">
            باقاتنا المرنة
          </h2>
          <p className="text-lg text-gray-300 opacity-90 font-medium">اختر الباقة التي تناسب حجم طموحاتك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isSubscription = plan.name.includes("الاستمرارية");
            const isFeatured = plan.is_featured === 1;

            return (
              <div key={plan.id} className="relative group">
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-[#F58220] text-white px-8 py-1.5 rounded-full text-sm font-black shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <AppCard 
                  className={cn(
                    "h-full flex flex-col transition-all duration-500 border-none rounded-[32px] p-2",
                    isFeatured 
                      ? "bg-[#1E213A] ring-2 ring-[#F58220] shadow-2xl z-10 scale-105" 
                      : "bg-[#252841]/40"
                  )}
                >
                  <AppCardHeader className="text-right p-8 pb-2">
                    <AppCardTitle className="text-2xl font-black mb-3 text-white">
                      {plan.name}
                    </AppCardTitle>
                    <AppCardDescription className="text-gray-400 text-sm leading-relaxed mb-6">
                      {plan.short_description}
                    </AppCardDescription>
                    
                    <div className="flex items-baseline justify-end gap-2 flex-row-reverse mt-4">
                      <span className="text-gray-300 text-lg font-bold">
                        ر.س {isSubscription && <span className="text-base font-normal"> / شهر</span>}
                      </span>
                      <span className="text-5xl font-black text-[#F58220] leading-none">
                        {plan.price}
                      </span>
                    </div>
                  </AppCardHeader>

                  <AppCardContent className="p-8 pt-8 flex flex-col flex-grow">
                    <ul className="space-y-5 mb-12 flex-grow">
                      {plan.features.map((feature) => (
                        <li 
                          key={feature.id} 
                          className={cn(
                            "flex items-start justify-start gap-3 text-[15px] font-medium transition-all",
                            feature.is_available === 1 ? "text-white" : "text-white/20"
                          )}
                        >
                          <div className={cn(
                            "shrink-0 mt-1 flex items-center justify-center w-5 h-5 rounded-full border transition-colors",
                            feature.is_available === 1 
                              ? "bg-[#F58220] border-[#F58220]" 
                              : "border-white/10 bg-transparent"
                          )}>
                            {feature.is_available === 1 && (
                              <Check className="h-3 w-3 text-[#1A1C2E] stroke-[4px]" />
                            )}
                          </div>
                          <span className="text-right leading-tight flex-1">{feature.feature_text}</span>
                        </li>
                      ))}
                    </ul>

                    <AppButton 
                      asChild
                      variant={isFeatured ? "primary" : "outline"}
                      className={cn(
                        "w-full py-7 text-lg font-black rounded-2xl transition-all",
                        !isFeatured && "border-[#F58220] text-[#F58220] hover:bg-[#F58220]/10"
                      )}
                    >
                      <button>اشترك الآن</button>
                    </AppButton>
                  </AppCardContent>
                </AppCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}