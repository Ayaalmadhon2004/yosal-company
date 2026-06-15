// app/page.tsx (أو مسار الصفحة الرئيسية لديكِ)
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { getDashboardData } from "@/lib/api";
import { faqsData, servicesData } from "@/constants/siteData"; // تأكدي أن المسار صحيح كما في ملفاتك
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/home/Problems"; 
import WhyUs from "@/components/sections/home/WhyUs";
import Stats from "@/components/sections/home/Stats";
import CTA from "@/components/sections/home/CTA";
import ReadySection from "@/components/sections/ReadySection";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

const Services = dynamic(() => import("../components/sections/services/Services"), { 
  loading: () => <SkeletonLoader />
});

const Portfolio = dynamic(() => import("../components/sections/portfolio/UnifiedPortfolio"), { 
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

  const allFaqs = Object.values(faqsData).flat();

  const randomFaqs = [...allFaqs]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

   console.log("faqData value:", randomFaqs); 

  return (
    <main className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Problems /> 
      
      <div className="flex flex-col relative">
        <Suspense fallback={<SkeletonLoader />}>
          <Services data={servicesData} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Portfolio isHomePage={true} />
        </Suspense>

        <WhyUs />
        <Stats />

        <Suspense fallback={<SkeletonLoader />}>
          <Pricing data={data.packages} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials />
        </Suspense>

        <CTA />

        <Suspense fallback={<SkeletonLoader />}>
          <Faqs  />
        </Suspense>
        

        <ReadySection  />
      </div>
    </main>
  );
}