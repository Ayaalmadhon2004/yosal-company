import CTA from "./sections/CTA";
import Faqs from "./sections/Faqs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import Problems from "./sections/Problems";
import ReadySection from "./sections/ReadySection";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    // استبدلنا flex-col بـ block لضمان عدم تداخل التنسيقات
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
      <ReadySection/>
      <Footer/>
    </div>
  );
}