"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/constants/servicesData";
import { cn } from "@/lib/utils";

export default function StrategyDeliverables() {
  const params = useParams();
  const slug = params?.slug as string;
  const currentService = servicesData[slug as keyof typeof servicesData];

  const layout = currentService?.layoutType || "equal";

  const cardsConfig = useMemo(() => {
    if (!currentService?.deliverables) return [];
    
    return currentService.deliverables.slice(0, 4).map((item: any, index: number) => {
      let gridClass = "md:col-span-6";
      let isOrange = false;

      if (layout === "big-right") {
        const config = [
          { grid: "md:col-span-8", orange: false },
          { grid: "md:col-span-4", orange: false },
          { grid: "md:col-span-5", orange: true },
          { grid: "md:col-span-7", orange: false },
        ];
        gridClass = config[index]?.grid || "md:col-span-6";
        isOrange = config[index]?.orange || false;
      } else if (layout === "big-left") {
        const config = [
          { grid: "md:col-span-4", orange: false },
          { grid: "md:col-span-8", orange: false },
          { grid: "md:col-span-7", orange: false },
          { grid: "md:col-span-5", orange: true },
        ];
        gridClass = config[index]?.grid || "md:col-span-6";
        isOrange = config[index]?.orange || false;
      } else {
        isOrange = index === 1;
      }

      return { ...item, gridClass, isOrange };
    });
  }, [currentService, layout]);

  if (!currentService || !currentService.deliverables) return null;

  return (
    <section className="py-24 px-6 text-right bg-transparent" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col mb-16 justify-start group">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              {currentService.title} 
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mt-4 transition-all duration-500 group-hover:w-32" />
          </div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl leading-relaxed">
            نقدم حلولاً متكاملة تضمن لك الهيمنة على سوقك والظهور بأفضل صورة رقمية ممكنة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {cardsConfig.map((item: any, index: number) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={`${slug}-deliverable-${index}`} 
                className={cn(
                  "rounded-[40px] p-10 relative overflow-hidden flex flex-col justify-center items-start border border-white/5 transition-all duration-500 hover:scale-[1.01] group",
                  item.gridClass,
                  item.isOrange ? "bg-primary shadow-2xl shadow-primary/10" : "bg-secondary/30"
                )}
              >
                {item.isOrange && (
                  <Icon 
                    size={200} 
                    className="absolute -top-12 -right-12 p-8 opacity-10 rotate-12 text-white pointer-events-none transition-transform group-hover:rotate-0 duration-700" 
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 w-full">
                  <div className={cn(
                    "mb-6 p-4 rounded-2xl inline-block transition-colors duration-500",
                    item.isOrange ? "bg-white/10 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                  )}>
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  
                  <h3 className={cn(
                    "text-2xl font-black mb-4",
                    item.isOrange ? "text-white" : "text-foreground"
                  )}>
                    {item.title}
                  </h3>
                  
                  <p className={cn(
                    "text-lg leading-relaxed max-w-[95%] transition-colors",
                    item.isOrange ? "text-white/90" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}