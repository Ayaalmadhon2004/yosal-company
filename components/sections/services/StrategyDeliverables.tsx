"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Share2, Video, Settings2, Palette } from "lucide-react";

const ICON_MAP: any = {
  Share2,
  Video,
  Settings2,
  Palette,
};

// تم تعديل المكون ليقبل data و title كـ props
export default function StrategyDeliverables({ data, title }: { data: any[], title: string }) {
  
  const cardsConfig = useMemo(() => {
    if (!data) return [];
    
    return data.slice(0, 4).map((item: any, index: number) => {
      let gridClass = "md:col-span-6";
      let isOrange = index === 1; // منطق بسيط للألوان
      return { ...item, gridClass, isOrange };
    });
  }, [data]);

  if (!data || !data.length) return null;

  return (
    <section className="py-24 px-6 text-right bg-transparent" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col mb-16 justify-start group">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">{title}</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mt-4 transition-all duration-500 group-hover:w-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {cardsConfig.map((item: any, index: number) => {
            const IconComponent = ICON_MAP[item.icon] || Settings2; 
            return (
              <div key={`deliverable-${index}`} className={cn(
                  "rounded-[40px] p-10 relative overflow-hidden flex flex-col justify-center items-start border border-white/5 transition-all duration-500 hover:scale-[1.01] group",
                  item.gridClass,
                  item.isOrange ? "bg-primary shadow-2xl shadow-primary/10" : "bg-[#1A1D2E]/80 backdrop-blur-md"
                )}>
                <div className="relative z-10 w-full">
                  <div className={cn("mb-6 p-4 rounded-2xl inline-block transition-colors duration-500", item.isOrange ? "bg-white/10 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white")}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white">{item.title}</h3>
                  <p className={cn("text-lg leading-relaxed max-w-[95%] transition-colors", item.isOrange ? "text-white/90" : "text-muted-foreground group-hover:text-white/90")}>
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