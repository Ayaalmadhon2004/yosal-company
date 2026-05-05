import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { servicesData } from "@/constants/servicesData";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Skeleton Loader محسن لتقليل القفزات البصرية
 */
const SectionSkeleton = () => (
  <div className="container mx-auto px-6 py-24 animate-pulse">
    <div className="space-y-4">
      <div className="h-10 w-1/3 bg-white/5 rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 bg-white/5 rounded-[40px]" />
        <div className="h-80 bg-white/5 rounded-[40px]" />
      </div>
    </div>
  </div>
);

// استيراد المكونات ديناميكياً
const MarketComparison = dynamic(() => import("@/components/sections/services/MarketComparison"), { 
  ssr: true,
  loading: () => <SectionSkeleton /> 
});
const StrategyDeliverables = dynamic(() => import("@/components/sections/services/StrategyDeliverables"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});
const StrategySteps = dynamic(() => import("@/components/sections/services/StrategySteps"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});
const ReadyResults = dynamic(() => import("@/components/sections/ReadyResults"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});
const Testimonials = dynamic(() => import("@/components/sections/home/Testimonials"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});
const Faqs = dynamic(() => import("@/components/sections/home/Faqs"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { 
  ssr: true,
  loading: () => <SectionSkeleton />
});

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];
  
  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.hero.title} | يوصل للخدمات التسويقية`,
    description: data.hero.description,
    openGraph: {
      title: data.hero.title,
      description: data.hero.description,
      images: [data.hero.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  const isContentCreation = slug === "content-creation";
  const faqData = data.faqs || (data as any).FAQs;

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
      />

      <div className="space-y-0"> 
        
        {data.comparison && (
          <Suspense fallback={<SectionSkeleton />}>
            <MarketComparison />
          </Suspense>
        )}

        {data.deliverables && (
          <Suspense fallback={<SectionSkeleton />}>
            <StrategyDeliverables />
          </Suspense>
        )}

        {data.steps && (
          <Suspense fallback={<SectionSkeleton />}>
            <StrategySteps 
              sectionTitle={isContentCreation ? "رحلتنا نحو التميز" : "خطوات تنفيذ الخدمة"}
              steps={data.steps} 
            />
          </Suspense>
        )}

        {data.featuresSection && (
          <Suspense fallback={<SectionSkeleton />}>
            <WhyChooseUs data={data.featuresSection} />
          </Suspense>
        )}
        
        {data.testimonials && (
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials data={data.testimonials}/>
          </Suspense>
        )}

        {/* سكشن الأسئلة الشائعة مع معالجة احتمالية اختلاف المسمى */}
        {faqData && (
          <Suspense fallback={<SectionSkeleton />}>
            <Faqs data={faqData}/>
          </Suspense>
        )}

        {!isContentCreation && (
          <Suspense fallback={<SectionSkeleton />}>
            <ReadyResults variant="style2" />
          </Suspense>
        )}
      </div>
    </main>
  );
}