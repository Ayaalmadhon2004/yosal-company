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

export default function Home() {
  return (
    <div className="block w-full bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Problems/>
      <Services/>
      <Portfolio />
      <WhyUs/>
      <Stats/>
      <Pricing/>
      <Testimonials/>
      <CTA/>
      <Faqs/>
      <ReadySection />
    </div>
  );
}