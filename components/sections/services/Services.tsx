"use client";

import React from "react";
import Link from "next/link";
import { 
  Layout, Search, TrendingUp, Video, Share2, 
  PenTool, Check, Monitor, ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent 
} from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";

export interface ServiceItem {
  id: number | string;
  title: string;
  slug: string;
  brief?: string;
  description?: string;
  icon?: string;
  iconName?: string;
  features?: any[];
}

const getWhatsAppLink = (slug: string) => {
  const s = slug?.toLowerCase() || "";
  
  const links: Record<string, string> = {
    "social-media": "https://wa.link/1992gd",
    "web-development": "https://wa.link/e56rm6",
    "content-creation": "https://wa.link/xct02j",
    "content-production": "https://wa.link/xct02j", // Fallback
    "seo": "https://wa.link/efvmlr",
    "search-engine-optimization": "https://wa.link/efvmlr", // Fallback
    "branding": "https://wa.link/wliy6a",
    "visual-identity": "https://wa.link/wliy6a", // Fallback
    "strategic-planning": "https://wa.link/9yy222",
  };

  return links[s] || "https://wa.link/1992gd"; // رابط افتراضي في حال عدم المطابقة
};

const getCorrectSlug = (apiSlug: string) => {
  const s = apiSlug?.toLowerCase() || "";
  if (s === "visual-identity" || s === "branding") return "branding";
  if (s === "content-production" || s === "content-creation") return "content-creation";
  if (s === "search-engine-optimization" || s === "seo") return "seo";
  return s;
};

const getIcon = (name: string, slug: string) => {
  const icons: Record<string, React.ElementType> = {
    "web-icon": Layout,
    "branding-icon": PenTool,
    "seo-icon": Search,
    "strategy-icon": TrendingUp,
    "video-icon": Video,
    "social-icon": Share2,
  };
  const s = slug?.toLowerCase() || "";
  if (s.includes("visual") || s.includes("branding")) return <PenTool className="h-6 w-6" />;
  if (s.includes("content") || s.includes("video")) return <Video className="h-6 w-6" />;
  const IconComponent = icons[name] || Monitor;
  return <IconComponent className="h-6 w-6" />;
};

export default function Services({ data, className }: { data: ServiceItem[], className?: string }) {
  const services = Array.isArray(data) ? data : [];

  return (
    <section id="services" className={cn("py-24 w-full bg-background", className)} dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const displayDescription = service.brief || service.description;
            const displayIcon = service.icon || service.iconName || "";
            const finalSlug = getCorrectSlug(service.slug);
            const waLink = getWhatsAppLink(service.slug);

            return (
              <AppCard key={`${service.id}-${index}`} className="glass-card flex flex-col group border-white/5 p-2 transition-all duration-500 hover:-translate-y-3 relative">
                <AppCardHeader className="p-8 pb-0 text-right relative z-10">
                  <div className="p-4 w-fit bg-primary/10 rounded-2xl mb-6 border border-primary/20 group-hover:bg-primary transition-all duration-500">
                    <div className="text-primary group-hover:text-white transition-colors">
                      {getIcon(displayIcon, service.slug)}
                    </div>
                  </div>
                  <AppCardTitle className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </AppCardTitle>
                  <AppCardDescription className="text-muted-foreground text-base leading-relaxed h-20 line-clamp-3">
                    {displayDescription}
                  </AppCardDescription>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-6 flex flex-col flex-grow relative z-10">
                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.features?.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="group-hover:text-foreground transition-colors">
                          {typeof feature === 'string' ? feature : feature.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto space-y-4">
                    {/* رابط التفاصيل للموقع الداخلي */}
                    <Link 
                      href={`/services/${finalSlug}`} 
                      className="text-primary text-sm font-bold inline-flex items-center gap-2 group/link hover:underline decoration-2 underline-offset-4"
                    >
                      تفاصيل الخدمة <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* زر الواتساب المباشر بالرابط الذي زودتني به */}
                    <AppButton asChild className="w-full py-7 rounded-2xl font-black text-lg bg-secondary/20 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-lg">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        اطلب الخدمة الآن
                      </a>
                    </AppButton>
                  </div>
                </AppCardContent>
              </AppCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}