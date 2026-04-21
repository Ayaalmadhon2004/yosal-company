import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/AppCard";
import { AppButton } from "@/components/ui/AppButton"; 
import { servicesData } from "@/lib/data";
import { 
  Monitor, Search, Layout, Share2, Rocket, 
  PenTool, Video, MessageSquare, TrendingUp, Check 
} from "lucide-react";

// دالة الأيقونات
const getIcon = (name: string) => {
  const icons: Record<string, any> = {
    "layout": Layout, "search": Search, "monitor": Monitor, "share": Share2,
    "rocket": Rocket, "pen-tool": PenTool, "video": Video, 
    "message-square": MessageSquare, "trending-up": TrendingUp
  };
  const IconComponent = icons[name] || Monitor;
  return <IconComponent className="h-6 w-6 text-[#F58220]" />;
};

export default function Services() {
  const services = Array.isArray(servicesData) ? servicesData : [];

  return (
    <section id="services" className="py-24 bg-[#0F112B] w-full" dir="rtl">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            خدمات تركز على <span className="text-[#F58220]">النتائج</span>
          </h2>
          <p className="text-gray-400 text-lg">نستخدم أحدث التقنيات والبيانات لدفع مبيعاتك للأمام</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service) => {
    const isFeatured = service.isFeatured;

    return (
      <AppCard 
        key={service.id}
        variant={isFeatured ? "featured" : "default"}
        className={`w-full flex flex-col transition-all duration-300 hover:-translate-y-2 border-white/5 ${
          isFeatured 
            ? "ring-2 ring-[#F58220] shadow-xl shadow-[#F58220]/20 scale-105" 
            : ""
        }`}
      >
        <AppCardHeader className="p-8 pb-0 text-right">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              {getIcon(service.iconName)}
            </div>

            {isFeatured && (
              <span className="bg-[#F58220] text-white text-[10px] px-3 py-1 rounded-full font-bold">
                الأكثر طلباً
              </span>
            )}
          </div>

          <AppCardTitle className="text-xl font-bold text-white mb-3">
            {service.title}
          </AppCardTitle>

          <AppCardDescription className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </AppCardDescription>
        </AppCardHeader>

        <AppCardContent className="p-8 pt-6 flex flex-col flex-grow text-right">
          <ul className="space-y-3 mb-8 flex-grow">
            {service.features?.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                <Check className="h-4 w-4 text-[#F58220]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4">
            <a className="text-[#F58220] text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
              عرض المزيد ←
            </a>

            <AppButton
              variant={isFeatured ? "primary" : "outline"}
              className={`w-full py-3 rounded-xl font-bold ${
                isFeatured
                  ? "bg-[#F58220] text-white hover:bg-[#ff933b]"
                  : "text-[#F58220] border-[#F58220] hover:bg-[#F58220] hover:text-white"
              }`}
            >
              {service.ctaText || "اطلب الخدمة"}
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