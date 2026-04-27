"use client";

import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton"; 
import Link from "next/link";
import { 
  Monitor, Search, Layout, Share2, Rocket, 
  PenTool, Video, MessageSquare, TrendingUp, Check 
} from "lucide-react";

interface ServiceItem {
  title: string;
  slug: string;
  brief: string;
  icon: string;
  features: string[];
}

interface ServicesProps {
  data: ServiceItem[];
}

const getIcon = (name: string) => {
  const icons: Record<string, any> = {
    "layout": Layout, "search-zoom": Search, "monitor": Monitor, "share": Share2,
    "rocket": Rocket, "pen-tool": PenTool, "video": Video, "code-laptop": Monitor,
    "message-square": MessageSquare, "trending-up": TrendingUp
  };
  const IconComponent = icons[name] || Monitor;
  return <IconComponent className="h-6 w-6 text-[#F58220]" />;
};

export default function Services({ data }: ServicesProps) {
  const services = Array.isArray(data) ? data : [];

  return (
    <section id="services" className="py-24 bg-[#0a0d1d] w-full" dir="rtl">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            خدمات تركز على <span className="text-[#F58220]">النتائج</span>
          </h2>
          <p className="text-gray-400 text-lg">نستخدم أحدث التقنيات والبيانات لدفع مبيعاتك للأمام</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <AppCard 
                key={index}
                className="w-full flex flex-col transition-all duration-500 hover:-translate-y-3 border-white/5 rounded-[2.5rem] p-4 bg-[#12162b]"
              >
                <AppCardHeader className="p-8 pb-0 text-right">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  <AppCardTitle className="text-2xl font-black text-white mb-4">
                    {service.title}
                  </AppCardTitle>

                  <AppCardDescription className="text-gray-400 text-base leading-relaxed h-20">
                    {service.brief}
                  </AppCardDescription>
                </AppCardHeader>

                <AppCardContent className="p-8 pt-6 flex flex-col flex-grow text-right">
                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.features?.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                        <Check className="h-4 w-4 text-[#F58220]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-5">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-[#F58220] text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group"
                    >
                      عرض المزيد <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                    </Link>

                    <AppButton
                      className="w-full py-6 rounded-2xl font-bold transition-all bg-transparent border border-gray-700 text-white hover:border-[#F58220] hover:text-[#F58220]"
                    >
                      <Link href={`/services/${service.slug}`}>طلب الخدمة</Link>
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