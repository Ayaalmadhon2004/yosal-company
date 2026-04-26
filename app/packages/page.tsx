import PackagesHero from "@/components/sections/packages/PackagesHero";
import PricingCards from "@/components/sections/packages/PricingCards";
import FAQSection from "@/components/sections/packages/FAQSection";
import CustomPlanSection from "@/components/sections/packages/CustomPlanSection";
import ReadyResults from "@/components/sections/ReadyResults";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <PackagesHero />
      <PricingCards />
      <FAQSection />
      <CustomPlanSection />
      <ReadyResults variant="style2"/>
    </main>
  );
}