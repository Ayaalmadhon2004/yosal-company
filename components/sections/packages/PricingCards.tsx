import Link from "next/link";
import { Check, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealSection, Stagger, StaggerItem } from "@/components/ui/Motion";

interface PackageFeature {
  id: number | string;
  feature_text: string;
  is_available: boolean;
}

interface PricingPackage {
  id: number | string;
  name: string;
  badge?: string;
  short_description?: string;
  price: string | number;
  is_featured?: boolean;
  features?: PackageFeature[];
}

const API_URL = "https://yosaal-website-backend.onrender.com/api/v1/packages";

async function getPackages(): Promise<PricingPackage[] | null> {
  try {
    const response = await fetch(API_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const json = await response.json();
    if (json && json.status === "Success") {
      const data = json.data?.data || json.data || [];
      return Array.isArray(data) ? data : [];
    }
    return [];
  } catch {
    return null;
  }
}

export default async function PricingCards() {
  const packages = await getPackages();

  if (packages === null) {
    return (
      <div role="alert" className="py-32 text-center">
        <p className="text-red-300">حدث خطأ أثناء تحميل الباقات. يرجى المحاولة لاحقاً.</p>
      </div>
    );
  }

  return (
    <RevealSection y={0} className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

      <Stagger className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {packages.map((pkg) => (
          <StaggerItem 
            key={pkg.id}
            className={cn(
              "relative p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] border transition-all duration-700 flex flex-col group",
              pkg.is_featured 
                ? "bg-secondary/40 border-primary lg:scale-105 shadow-[0_0_50px_-12px_rgba(245,130,32,0.2)] z-10" 
                : "bg-secondary/10 border-white/5 hover:border-primary/30"
            )}
          >
            {pkg.badge && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 sm:px-8 py-2 rounded-full text-xs font-black shadow-xl shadow-primary/20 flex items-center gap-2 whitespace-nowrap">
                <Zap aria-hidden="true" className="w-3 h-3 fill-current" />
                {pkg.badge}
              </div>
            )}

            <div className="text-right mb-10">
              <h2 className="text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                {pkg.name}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed min-h-14 italic">
                {pkg.short_description}
              </p>
            </div>

            <div className="text-right mb-12 bg-white/5 p-6 rounded-[2rem] border border-white/5">
              <div className="flex items-baseline gap-2 justify-end">
                {/* عرض "ر.س" بعد السعر وبخط أصغر قليلاً */}
                <span className="text-muted-foreground text-xl font-bold">ر.س</span>
                <span className="text-5xl sm:text-6xl font-black text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest mr-2">/ شهرياً</span>
              </div>
            </div>

            <div className="space-y-5 mb-12 flex-grow text-right" dir="rtl">
              <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">ما تتضمنه الباقة:</p>
              {pkg.features?.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4 group/item">
                  <div className={cn(
                    "shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300",
                    feature.is_available 
                      ? "bg-primary/10 text-primary group-hover/item:scale-110" 
                      : "bg-red-500/5 text-red-500/30"
                  )}>
                    {feature.is_available ? (
                      <Check aria-hidden="true" className="w-4 h-4 stroke-[3px]" />
                    ) : (
                      <X aria-hidden="true" className="w-4 h-4" />
                    )}
                  </div>
                  <span className={cn(
                    "text-base transition-colors",
                    feature.is_available 
                      ? "text-muted-foreground group-hover/item:text-foreground" 
                      : "text-muted-foreground line-through decoration-red-500/40"
                  )}>
                    {feature.feature_text}
                    {!feature.is_available && <span className="sr-only"> (غير متضمن)</span>}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact#form"
              className={cn(
                "inline-flex items-center justify-center w-full rounded-2xl py-5 font-black text-lg transition-all duration-500 active:scale-95",
                pkg.is_featured
                  ? "bg-brand-cta hover:bg-brand-cta-hover text-white shadow-lg shadow-primary/20"
                  : "border border-primary text-white hover:bg-primary/10"
              )}
            >
              اختيار باقة {pkg.name}
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </RevealSection>
  );
}