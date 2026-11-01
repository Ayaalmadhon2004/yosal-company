import PackagesHero from "@/components/sections/packages/PackagesHero";
import PricingCards from "@/components/sections/packages/PricingCards";
import FAQSection from "@/components/sections/packages/FAQSection";
import CustomPlanSection from "@/components/sections/packages/CustomPlanSection";
import ReadyResults from "@/components/sections/ReadyResults";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الباقات والأسعار",
  description:
    "اختر الباقة المناسبة لنمو علامتك التجارية من باقات وكالة يوصل التسويقية بأسعار واضحة، أو اطلب خطة مخصصة تناسب احتياجاتك.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "الباقات والأسعار",
    description:
      "اختر الباقة المناسبة لنمو علامتك التجارية من باقات وكالة يوصل التسويقية بأسعار واضحة، أو اطلب خطة مخصصة تناسب احتياجاتك.",
    url: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PackagesHero />
      <PricingCards />
      <FAQSection />
      <CustomPlanSection />
      <ReadyResults variant="style2"/>
    </main>
  );
}