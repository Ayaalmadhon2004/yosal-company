import { notFound } from "next/navigation";
import { servicesData } from "@/constants/servicesData";
import ServiceHero from "@/components/sections/services/ServiceHero";
import MarketComparison from "@/components/sections/services/MarketComparison";
import StrategyDeliverables from "@/components/sections/services/StrategyDeliverables";
import StrategySteps from "@/components/sections/services/StrategySteps";

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params; 
  
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#1A1C2E]">
      <ServiceHero 
        badge={data.hero.badge}
        title={data.hero.title}
        highlightText={data.hero.highlightText}
        description={data.hero.description}
        mainImage={data.hero.image}
      />

      <MarketComparison 
        challenges={data.comparison.challenges} 
        solutions={data.comparison.solutions} 
      />

      <StrategyDeliverables items={data.deliverables} />

      <StrategySteps 
        sectionTitle={slug === "strategic-planning" ? "رحلة بناء استراتيجيتك" : "خطوات تنفيذ الخدمة"}
        steps={data.steps} 
      />
    </main>
  );
}