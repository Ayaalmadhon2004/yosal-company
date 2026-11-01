import { Suspense } from "react";
import { getDashboardData } from "@/lib/api";
import { servicesData } from "@/constants/siteData";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/home/Problems";
import Services from "@/components/sections/services/Services";
import Portfolio from "@/components/sections/portfolio/UnifiedPortfolio";
import WhyUs from "@/components/sections/home/WhyUs";
import Stats from "@/components/sections/home/Stats";
import Pricing from "@/components/sections/home/Pricing";
import Testimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";
import Faqs from "@/components/sections/home/Faqs";
import ReadySection from "@/components/sections/ReadySection";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

export default async function Home() {
  const data = (await getDashboardData()) || { packages: [] };

  return (
    <main className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Problems />

      <div className="flex flex-col relative">
        <Services data={servicesData} />
        <Portfolio isHomePage />
        <WhyUs />
        <Stats />
        <Pricing data={data.packages} />
        <Testimonials />
        <CTA />

        {/* Faqs is async (fetches on the server), so stream it behind a fallback */}
        <Suspense fallback={<SkeletonLoader />}>
          <Faqs />
        </Suspense>

        <ReadySection />
      </div>
    </main>
  );
}
