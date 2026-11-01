import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { servicesData } from "@/constants/servicesData";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ScrollToTop from "@/components/ScrollToTop";

const getNormalizedSlug = (slug: string) => {
  const s = slug?.toLowerCase().trim();
  
  const mapping: Record<string, string> = {
  "seo": "seo-services",
  "marketing-strategies": "strategic-planning",
  "social-media-management": "social-media",
  "content-creation": "content-production",
  "ads-management": "social-media",
  "branding": "visual-identity"
};

  return mapping[s] || s;
};

// --- المكونات (تم الإبقاء عليها كما هي) ---
const SectionSkeleton = () => <div className="container mx-auto px-6 py-24 animate-pulse"><div className="h-80 bg-white/5 rounded-[40px]" /></div>;
const MarketComparison = dynamic(() => import("@/components/sections/services/MarketComparison"), { ssr: true, loading: () => <SectionSkeleton /> });
const StrategyDeliverables = dynamic(() => import("@/components/sections/services/StrategyDeliverables"), { ssr: true, loading: () => <SectionSkeleton /> });
const StrategySteps = dynamic(() => import("@/components/sections/services/StrategySteps"), { ssr: true, loading: () => <SectionSkeleton /> });
const ReadyResults = dynamic(() => import("@/components/sections/ReadyResults"), { ssr: true, loading: () => <SectionSkeleton /> });
const Testimonials = dynamic(() => import("@/components/sections/home/Testimonials"), { ssr: true, loading: () => <SectionSkeleton /> });
const Faqs = dynamic(() => import("@/components/sections/home/Faqs"), { ssr: true, loading: () => <SectionSkeleton /> });
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { ssr: true, loading: () => <SectionSkeleton /> });

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = getNormalizedSlug(slug);
  const data = servicesData[normalizedSlug as keyof typeof servicesData];

  if (!data) return { title: "الخدمة غير موجودة", robots: { index: false } };

  const title = `${data.hero.title} ${data.hero.highlightText ?? ""}`.trim();
  return {
    title,
    description: data.hero.description,
    alternates: { canonical: `/services/${normalizedSlug}` },
    openGraph: {
      title,
      description: data.hero.description,
      url: `/services/${normalizedSlug}`,
      images: data.hero.image ? [data.hero.image] : undefined,
    },
    twitter: {
      title,
      description: data.hero.description,
      images: data.hero.image ? [data.hero.image] : undefined,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // استخدام الدالة الموحدة
  const normalizedSlug = getNormalizedSlug(slug);
  const data = servicesData[normalizedSlug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  const isContentProduction = normalizedSlug === "content-production";

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <ScrollToTop />
      
      <ServiceHero 
        badge={data.hero.badge}
        title={data.hero.title}
        highlightText={data.hero.highlightText}
        description={data.hero.description}
        mainImage={data.hero.image}
        stats={data.hero.stats}
        subtitle={data.hero.subtitle}
      />

          <div className="space-y-0"> 
            {/*@ts-ignore */}
            {data.comparison && <Suspense fallback={<SectionSkeleton />}><MarketComparison data={data.comparison} /></Suspense>}
            {/*@ts-ignore */}
            {data.deliverables && (
          <StrategyDeliverables 
            data={data.deliverables} 
            title={data.title} 
          />
        )}

        {data.steps && (
          <StrategySteps 
            steps={data.steps} 
            sectionTitle={isContentProduction ? "رحلتنا نحو التميز" : "خطوات تنفيذ الخدمة"} 
          />
        )}
        {data.featuresSection && <Suspense fallback={<SectionSkeleton />}><WhyChooseUs data={data.featuresSection} /></Suspense>}
        {data.testimonials && <Suspense fallback={<SectionSkeleton />}><Testimonials /></Suspense>}
        <Faqs serviceId={data.service_id} />
        {!isContentProduction && <Suspense fallback={<SectionSkeleton />}><ReadyResults variant="style1" /></Suspense>}
      </div>
    </main>
  );
}