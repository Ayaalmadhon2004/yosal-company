import { RevealSection, Stagger, StaggerItem } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";
import { Share2, Video, Settings2, Palette, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Share2,
  Video,
  Settings2,
  Palette,
};

// تم تعديل المكون ليقبل data و title كـ props
interface DeliverableItem {
  title: string;
  desc: string;
  icon?: unknown;
}

export default function StrategyDeliverables({ data, title }: { data: DeliverableItem[], title: string }) {
  
  if (!data || !data.length) return null;

  const cardsConfig = data.slice(0, 4).map((item, index) => ({
    ...item,
    gridClass: "md:col-span-6",
    isOrange: index === 1, // منطق بسيط للألوان
  }));

  return (
    <RevealSection y={0} className="py-24 px-6 text-right bg-transparent" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col mb-16 justify-start group">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">{title}</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mt-4 transition-all duration-500 group-hover:w-32" />
          </div>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {cardsConfig.map((item, index) => {
            const IconComponent = (typeof item.icon === "string" ? ICON_MAP[item.icon] : undefined) || Settings2; 
            return (
              <StaggerItem key={`deliverable-${index}`} className={cn(
                  "rounded-[40px] p-10 relative overflow-hidden flex flex-col justify-center items-start border border-white/5 transition-all duration-500 hover:scale-[1.01] group",
                  item.gridClass,
                  item.isOrange ? "bg-brand-cta shadow-2xl shadow-primary/10" : "bg-brand-panel/80 backdrop-blur-md"
                )}>
                <div className="relative z-10 w-full">
                  <div className={cn("mb-6 p-4 rounded-2xl inline-block transition-colors duration-500", item.isOrange ? "bg-white/10 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white")}>
                    <IconComponent aria-hidden="true" className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white">{item.title}</h3>
                  <p className={cn("text-lg leading-relaxed max-w-[95%] transition-colors", item.isOrange ? "text-white" : "text-muted-foreground group-hover:text-white/90")}>
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </RevealSection>
  );
}
/******* */