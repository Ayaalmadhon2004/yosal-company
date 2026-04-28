import { Suspense } from "react";
import dynamic from 'next/dynamic';
import StorySection from "@/components/sections/about/StorySection";

// Loader احترافي متناسق مع زوايا فيجما (40px) وألوان البراند
const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-10 w-1/4 bg-brand-accent/20 rounded-xl mb-6" />
    <div className="h-64 w-full bg-brand-accent/10 rounded-[40px]" />
  </div>
);

// استيراد المكونات ديناميكياً لتحسين أداء الصفحة (LCP)
const VisionMissionSection = dynamic(() => import("@/components/sections/about/VisionMissionSection"), { 
  ssr: true,
  loading: () => <SkeletonLoader /> 
});
const WhyUsSection = dynamic(() => import("@/components/sections/about/WhyUsSection"), { 
  ssr: true,
  loading: () => <SkeletonLoader /> 
});
const TeamSection = dynamic(() => import("@/components/sections/about/TeamSection"), { 
  ssr: true,
  loading: () => <SkeletonLoader /> 
});
const ReadyResults = dynamic(() => import("@/components/sections/ReadyResults"), { 
  ssr: true,
  loading: () => <SkeletonLoader /> 
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      
      <section className="relative z-10">
        <StorySection />
      </section>
      
      <div className="space-y-20 pb-20">
        
        <Suspense fallback={<SkeletonLoader />}>
          <VisionMissionSection />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <WhyUsSection />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <TeamSection />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <ReadyResults variant="style2"/>
        </Suspense>
        
      </div>
    </main>
  );
}