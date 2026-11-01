import type { Metadata } from "next";
import PackagesHero from "@/components/sections/packages/PackagesHero";
import PricingCards from "@/components/sections/packages/PricingCards";
import FAQSection from "@/components/sections/packages/FAQSection";
import CustomPlanSection from "@/components/sections/packages/CustomPlanSection";
import ReadyResults from "@/components/sections/ReadyResults";

export const metadata: Metadata = {
  title: "الباقات والأسعار | وكالة يوصل",
  description:
    "باقات تسويق رقمي مرنة من وكالة يوصل مصممة لنمو أعمالك، بأسعار واضحة وخدمات متكاملة تناسب كافة احتياجاتك.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "الباقات والأسعار | وكالة يوصل",
    description: "باقات مصممة لنمو أعمالك بأسعار واضحة ومرنة.",
    url: "/packages",
    type: "website",
    locale: "ar_SA",
  },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PackagesHero />
      <PricingCards />
      <FAQSection />
      <CustomPlanSection />
      <ReadyResults variant="style2"/>
    </div>
  );
}