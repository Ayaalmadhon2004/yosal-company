import type { Metadata } from "next";
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

const TITLE = "وكالة يوصل | نصيغ الفخامة الرقمية";
const DESCRIPTION =
  "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وهويات بصرية وحلولاً إبداعية تمنح علامتك التجارية حضوراً ذكياً.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "وكالة يوصل",
    locale: "ar_SA",
    type: "website",
  },
};

// Fixed-height placeholder so streamed sections do not shift the layout.
const SkeletonLoader = ({ height = "min-h-[480px]" }: { height?: string }) => (
  <div className={`container mx-auto px-6 py-20 ${height}`} aria-hidden="true">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-72 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

export default async function Home() {
  const data = (await getDashboardData()) || { packages: [] };

  return (
    <div className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Problems />

      <div className="flex flex-col relative">
        <Services data={servicesData} />
        <Portfolio isHomePage />
        <WhyUs />
        <Stats />
        <Pricing data={data.packages} />
        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials />
        </Suspense>
        <CTA />

        {/* Faqs is async (fetches on the server), so stream it behind a fallback */}
        <Suspense fallback={<SkeletonLoader />}>
          <Faqs />
        </Suspense>

        <ReadySection />
      </div>
    </div>
  );
}
