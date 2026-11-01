import { RevealSection } from "@/components/ui/Motion";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import Services, { type ServiceItem } from "@/components/sections/services/Services";
import { getServices } from "@/lib/api";
import ReadyResults from "@/components/sections/ReadyResults";

export const revalidate = 3600;

// Metadata for /services lives in app/services/layout.tsx.

export default async function ServicesPage() {
  const services = await getServices<ServiceItem>();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <RevealSection className="py-24 px-6 overflow-hidden" dir="rtl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-right order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="text-primary text-sm font-bold tracking-wider">خدماتنا الاحترافية</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.2]">
                حلول رقمية <span className="text-primary">متكاملة</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                نحول الأفكار المعقدة إلى واقع ملموس من خلال خدماتنا المتنوعة التي تغطي كافة جوانب التواجد الرقمي.
              </p>
            </div>

            <div className="flex-1 relative order-1 lg:order-2 w-full">
              <div className="relative z-10 w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/assets/moon.png"
                  alt="رائد فضاء على سطح القمر يرمز إلى خدمات وكالة يوصل الرقمية"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <div className="mt-10 min-h-[400px] px-6">
        {services ? (
          <Services data={services} />
        ) : (
          <div role="alert" className="flex flex-col items-center justify-center py-20 text-red-300 gap-3">
            <AlertCircle size={40} aria-hidden="true" />
            <p className="font-bold">عذراً، فشل جلب البيانات من السيرفر.</p>
          </div>
        )}
      </div>

      <ReadyResults variant="style1" />
    </div>
  );
}
