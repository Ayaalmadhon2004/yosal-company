import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { getDashboardData } from "@/lib/api";
import { faqsData } from "@/constants/siteData";
import Hero from "../components/sections/Hero";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[40px]" />
  </div>
);

const Problems = dynamic(() => import("../components/sections/Problems"), { ssr: true });
const Services = dynamic(() => import("../components/sections/services/Services"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const Portfolio = dynamic(() => import("../components/sections/portfolio/Portfolio"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const WhyUs = dynamic(() => import("../components/sections/WhyUs"), { ssr: true });
const Stats = dynamic(() => import("../components/sections/Stats"), { ssr: true });
const Pricing = dynamic(() => import("../components/sections/Pricing"), { ssr: true });
const Testimonials = dynamic(() => import("../components/sections/Testimonials"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});
const CTA = dynamic(() => import("../components/sections/CTA"), { ssr: true });
const Faqs = dynamic(() => import("../components/sections/Faqs"), { ssr: true });
const ReadySection = dynamic(() => import("../components/sections/ReadySection"), { ssr: true });

export default async function Home() {
  const dashboardData = await getDashboardData();

  const data = dashboardData || {
    services: [],
    projects: [],
    statistics: [],
    packages: [],
    testimonials: []
  };

  return (
    <main className="block w-full bg-[#0a0d1d] font-sans">
      <Hero />
      
      <div className="space-y-4">
        <Suspense fallback={<SkeletonLoader />}>
          <Problems />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Services data={data.services} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Portfolio data={data.projects} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <WhyUs />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Stats data={data.statistics} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Pricing data={data.packages} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials data={data.testimonials} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <CTA />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Faqs data={faqsData} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <ReadySection />
        </Suspense>
      </div>
    </main>
  );
}