import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { getDashboardData } from "@/lib/api";
import { faqsData } from "@/constants/siteData";
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/home/Problems"; 

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

const Services = dynamic(() => import("../components/sections/services/Services"), { 
  loading: () => <SkeletonLoader />
});

const Portfolio = dynamic(() => import("../components/sections/portfolio/Portfolio"), { 
  loading: () => <SkeletonLoader />
});

const Testimonials = dynamic(() => import("../components/sections/home/Testimonials"), { 
  loading: () => <SkeletonLoader />
});

const Pricing = dynamic(() => import("../components/sections/home/Pricing"), {
  loading: () => <SkeletonLoader />
});

const Faqs = dynamic(() => import("../components/sections/home/Faqs"), {
  loading: () => <SkeletonLoader />
});

export default async function Home() {
  const data = await getDashboardData() || {
    services: [], projects: [], statistics: [], packages: [], testimonials: []
  };

  return (
    <main className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Problems /> 
      
      <div className="flex flex-col relative">
        <Suspense fallback={<SkeletonLoader />}>
          <Services data={data.services} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Portfolio data={data.projects} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials data={data.testimonials} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Pricing data={data.packages} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Faqs data={faqsData} />
        </Suspense>
      </div>
    </main>
  );
}