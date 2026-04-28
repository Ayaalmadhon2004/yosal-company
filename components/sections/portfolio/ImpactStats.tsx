"use client";

import React from "react";
import { ArrowLeft, TrendingUp, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImpactStats() {
  const stats = [
    { 
      id: 1, 
      value: "+50M", 
      label: "مشاهدات إعلانية", 
      icon: Users,
      color: "text-foreground" 
    },
    { 
      id: 2, 
      value: "85%", 
      label: "زيادة في معدل التحويل", 
      icon: TrendingUp,
      color: "text-primary" 
    },
    { 
      id: 3, 
      value: "120+", 
      label: "مشروع ناجح", 
      icon: Target,
      color: "text-foreground" 
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" dir="rtl">
      {/* لمسة خلفية فنية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10 opacity-50" />

      <div className="container mx-auto px-6 text-center">
        {/* زر عرض الأعمال المطور */}
        <button className="group bg-secondary/40 border border-white/5 text-foreground px-10 py-5 rounded-2xl font-black flex items-center gap-4 mx-auto mb-28 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-xl shadow-black/10">
          مشاهدة المزيد من الأعمال
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
        </button>

        {/* شبكة الإحصائيات */}
        <div className="bg-secondary/20 backdrop-blur-md rounded-[3rem] p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 border border-white/5 relative">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={cn(
                  "relative flex flex-col items-center group",
                  index !== stats.length - 1 && "md:border-l md:border-white/5"
                )}
              >
                {/* أيقونة صغيرة فوق الرقم */}
                <div className="mb-4 p-2 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h4 className={cn(
                  "text-5xl lg:text-6xl font-black mb-4 tracking-tighter transition-transform duration-500 group-hover:scale-110",
                  stat.color
                )}>
                  {stat.value}
                </h4>
                
                <p className="text-muted-foreground font-bold text-lg">
                  {stat.label}
                </p>

                {/* توهج سفلي لكل رقم عند التحويم */}
                <div className="absolute bottom-0 w-12 h-1 bg-primary/0 group-hover:bg-primary/40 rounded-full transition-all duration-500 blur-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}