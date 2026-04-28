import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { servicesData } from "@/constants/servicesData";
import ServiceHero from "@/components/sections/services/ServiceHero";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/2 bg-white/5 rounded-2xl mb-8" />
    <div className="h-64 w-full bg-white/5 rounded-[40px]" />
  </div>
);

const MarketComparison = dynamic(() => import("@/components/sections/services/MarketComparison"), { 
  ssr: true,
  loading: () => <SkeletonLoader /> 
});
const StrategyDeliverables = dynamic(() => import("@/components/sections/services/StrategyDeliverables"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const StrategySteps = dynamic(() => import("@/components/sections/services/StrategySteps"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const ReadyResults = dynamic(() => import("@/components/sections/ReadyResults"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const Testimonials = dynamic(() => import("@/components/sections/home/Testimonials"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const Faqs = dynamic(() => import("@/components/sections/home/Faqs"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  const isContentCreation = slug === "content-creation";

  return (
    <main className="min-h-screen bg-[#0F111A]">
      <ServiceHero 
        badge={data.hero.badge}
        title={data.hero.title}
        highlightText={data.hero.highlightText}
        description={data.hero.description}
        mainImage={data.hero.image}
        stats={data.hero.stats}
      />

      <div className="space-y-10">
        {data.comparison && (
          <Suspense fallback={<SkeletonLoader />}>
            <MarketComparison />
          </Suspense>
        )}

        {data.deliverables && (
          <Suspense fallback={<SkeletonLoader />}>
            <StrategyDeliverables />
          </Suspense>
        )}

        {data.steps && (
          <Suspense fallback={<SkeletonLoader />}>
            <StrategySteps 
              sectionTitle={isContentCreation ? "رحلتنا نحو التميز" : "خطوات تنفيذ الخدمة"}
              steps={data.steps} 
            />
          </Suspense>
        )}

        {data.featuresSection && (
          <Suspense fallback={<SkeletonLoader />}>
            <WhyChooseUs data={data.featuresSection} />
          </Suspense>
        )}
        
        {data.testimonials && (
          <Suspense fallback={<SkeletonLoader />}>
            <Testimonials data={data.testimonials}/>
          </Suspense>
        )}

        {data.faqs && (
          <Suspense fallback={<SkeletonLoader />}>
            <Faqs data={data.faqs}/>
          </Suspense>
        )}

        {!isContentCreation && (
          <Suspense fallback={<SkeletonLoader />}>
            <ReadyResults />
          </Suspense>
        )}
      </div>
    </main>
  );
}