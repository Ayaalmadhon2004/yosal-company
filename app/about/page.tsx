import { Suspense } from "react";
import dynamic from 'next/dynamic';
import StorySection from "@/components/sections/about/StorySection";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-10 w-1/4 bg-white/5 rounded-xl mb-6" />
    <div className="h-64 w-full bg-white/5 rounded-[40px]" />
  </div>
);

const VisionMissionSection = dynamic(() => import("@/components/sections/about/VisionMissionSection"), { ssr: true });
const WhyUsSection = dynamic(() => import("@/components/sections/about/WhyUsSection"), { ssr: true });
const TeamSection = dynamic(() => import("@/components/sections/about/TeamSection"), { ssr: true });
const ReadyResults = dynamic(() => import("@/components/sections/ReadyResults"), { ssr: true });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <StorySection />
      
      <div className="space-y-10">
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