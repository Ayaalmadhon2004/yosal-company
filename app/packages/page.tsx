import PackagesHero from "@/components/sections/PackagesHero";
import PricingCards from "@/components/sections/PricingCards";
import FAQSection from "@/components/sections/FAQSection";
import CustomPlanSection from "@/components/sections/CustomPlanSection";
import ReadyResults from "@/components/sections/ReadyResults";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <PackagesHero />
      <PricingCards />
      <FAQSection />
      <CustomPlanSection />
      <ReadyResults/>
    </main>
  );
}