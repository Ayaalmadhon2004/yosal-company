"use client";

import React from "react";
import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton"; 
import Link from "next/link";
import { 
  Monitor, Search, Layout, Share2, Rocket, 
  PenTool, Video, MessageSquare, TrendingUp, Check,
  ArrowLeft 
} from "lucide-react";
import { cn } from "@/lib/utils";

// تحديث الـ Interface ليتطابق تماماً مع بياناتك
export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  description: string; // مطابقة لبياناتك
  iconName: string;    // مطابقة لبياناتك
  features: string[];  // مصفوفة نصوص كما في بياناتك
  ctaText?: string;
  isFeatured?: boolean;
}

interface ServicesProps {
  data: ServiceItem[];
  className?: string;
}

const getIcon = (name: string) => {
  const icons: Record<string, React.ElementType> = {
    "layout": Layout,
    "search-zoom": Search,
    "monitor": Monitor,
    "share": Share2,
    "rocket": Rocket,
    "pen-tool": PenTool,
    "video": Video,
    "message-square": MessageSquare,
    "trending-up": TrendingUp,
  };
  const IconComponent = icons[name] || Monitor;
  return <IconComponent className="h-6 w-6 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-white" />;
};

export default function Services({ data, className }: ServicesProps) {
  const services = Array.isArray(data) ? data : [];

  return (
    <section id="services" className={cn("py-24 w-full", className)} dir="rtl">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            خدمات تركز على <span className="text-primary">النتائج</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نستخدم أحدث التقنيات والبيانات لدفع مبيعاتك للأمام وتحويل علامتك التجارية إلى واقع ملموس.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AppCard 
              key={`${service.id}-${index}`} 
              className={cn(
                "glass-card flex flex-col transition-all duration-500 hover:-translate-y-3 border-white/5 p-2 group overflow-hidden relative",
                service.isFeatured && "ring-2 ring-primary/20 bg-primary/5" // تمييز الخدمات المميزة
              )}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <AppCardHeader className="p-8 pb-0 text-right relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <AppCardTitle className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </AppCardTitle>

                <AppCardDescription className="text-muted-foreground text-base leading-relaxed h-20 line-clamp-3">
                  {service.description}
                </AppCardDescription>
              </AppCardHeader>

              <AppCardContent className="p-8 pt-6 flex flex-col flex-grow text-right relative z-10">
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.features?.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span className="group-hover:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-5">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-primary text-sm font-bold inline-flex items-center gap-2 hover:gap-4 transition-all group/link"
                  >
                    عرض المزيد 
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:-translate-x-1" />
                  </Link>

                  <AppButton
                    asChild
                    className="w-full py-6 rounded-2xl font-bold transition-all bg-secondary/20 border border-white/10 text-foreground hover:border-primary hover:text-white hover:bg-primary shadow-sm active:scale-95"
                  >
                    <Link href={`/services/${service.slug}#contact-form`}>
                      {service.ctaText || "طلب الخدمة الآن"}
                    </Link>
                  </AppButton>
                </div>
              </AppCardContent>
            </AppCard>
          ))}
        </div>
      </div>
    </section>
  );
}