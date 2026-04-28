"use client";

import React, { useEffect, useState } from "react";
import { Check, X, Loader2, Zap } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { cn } from "@/lib/utils";

// الرابط الصحيح للـ API
const API_URL = "https://yosaal-website-backend.onrender.com/api/v1/packages";

export default function PricingCards() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        
        if (json && json.status === "Success") {
          setPackages(json.data.data || json.data);
        }
      } catch (error) {
        console.error("Fetch error, ensure the backend is live:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="py-32 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-medium">جاري تجهيز أفضل العروض لنمو عملك...</p>
      </div>
    );
  }

  return (
    <section className="py-24 px-6  relative overflow-hidden" dir="rtl">
      {/* توهج خلفي للقسم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg: any) => (
          <div 
            key={pkg.id}
            className={cn(
              "relative p-8 md:p-10 rounded-[3rem] border transition-all duration-700 flex flex-col group",
              pkg.is_featured 
                ? "bg-secondary/40 border-primary scale-105 shadow-[0_0_50px_-12px_rgba(245,130,32,0.2)] z-10" 
                : "bg-secondary/10 border-white/5 hover:border-primary/30"
            )}
          >
            {/* الشارة المميزة */}
            {pkg.badge && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-full text-xs font-black shadow-xl shadow-primary/20 flex items-center gap-2">
                <Zap className="w-3 h-3 fill-current" />
                {pkg.badge}
              </div>
            )}

            <div className="text-right mb-10">
              <h3 className="text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed h-14 italic">
                {pkg.short_description}
              </p>
            </div>

            <div className="text-right mb-12 /40 p-6 rounded-[2rem] border border-white/5">
              <div className="flex items-baseline gap-2 justify-end flex-row-reverse">
                <span className="text-6xl font-black text-foreground">${pkg.price}</span>
                <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest">/ شهرياً</span>
              </div>
            </div>

            <div className="space-y-5 mb-12 flex-grow text-right" dir="rtl">
              <p className="text-xs font-black text-primary/60 uppercase tracking-[0.2em] mb-6">ما تتضمنه الباقة:</p>
              {pkg.features.map((feature: any) => (
                <div key={feature.id} className="flex items-start gap-4 group/item">
                  <div className={cn(
                    "shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300",
                    feature.is_available 
                      ? "bg-primary/10 text-primary group-hover/item:scale-110" 
                      : "bg-red-500/5 text-red-500/30"
                  )}>
                    {feature.is_available ? (
                      <Check className="w-4 h-4 stroke-[3px]" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                  </div>
                  <span className={cn(
                    "text-base transition-colors",
                    feature.is_available 
                      ? "text-muted-foreground group-hover/item:text-foreground" 
                      : "text-muted-foreground/40 line-through decoration-red-500/20"
                  )}>
                    {feature.feature_text}
                  </span>
                </div>
              ))}
            </div>

            <AppButton 
              variant={pkg.is_featured ? "orange" : "outline"} 
              className={cn(
                "w-full rounded-2xl py-8 font-black text-lg transition-all duration-500",
                pkg.is_featured ? "shadow-lg shadow-primary/20" : "hover:bg-primary/5"
              )}
            >
              اختيار باقة {pkg.name}
            </AppButton>
          </div>
        ))}
      </div>
    </section>
  );
}