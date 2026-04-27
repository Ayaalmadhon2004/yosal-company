import { getDashboardData } from "@/lib/api";
import CTA from "../components/sections/CTA";
import Faqs from "../components/sections/Faqs";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/portfolio/Portfolio";
import Pricing from "../components/sections/Pricing";
import Problems from "../components/sections/Problems";
import ReadySection from "../components/sections/ReadySection";
import Services from "../components/sections/services/Services";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import WhyUs from "../components/sections/WhyUs";
import { faqsData } from "@/constants/siteData";

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
    <div className="block w-full bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Problems />
      <Services data={data.services} />
      <Portfolio data={data.projects} />
      <WhyUs />
      <Stats data={data.statistics} />
      <Pricing data={data.packages} />
      <Testimonials data={data.testimonials} />
      <CTA />
      <Faqs data={faqsData} />
      <ReadySection />
    </div>
  );
}