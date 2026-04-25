import { notFound } from "next/navigation";
import { servicesData } from "@/constants/servicesData";
import ServiceHero from "@/components/sections/services/ServiceHero";
import MarketComparison from "@/components/sections/services/MarketComparison";
import StrategyDeliverables from "@/components/sections/services/StrategyDeliverables";
import StrategySteps from "@/components/sections/services/StrategySteps";
import ReadyResults from "@/components/sections/ReadyResults";
import Testimonials from "@/components/sections/Testimonials";
import Faqs from "@/components/sections/Faqs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  const isContentCreation = slug === "content-creation";

  // المصفوفة التي تسمح بظهور قسم "لماذا يوصل" فقط لخدمات معينة
  const showWhyChooseUs = ["strategic-planning", "seo", "social-media"].includes(slug);

  return (
    <main className="min-h-screen bg-[#0F111A]">
      <ServiceHero 
        badge={data.hero.badge}
        title={data.hero.title}
        highlightText={data.hero.highlightText}
        description={data.hero.description}
        mainImage={data.hero.image}
        stats={data.hero.stats}
      />

      {data.comparison && (
        <MarketComparison 
          challenges={data.comparison.challenges || []} 
          solutions={data.comparison.solutions || []} 
        />
      )}

      {data.deliverables && (
        <StrategyDeliverables />
      )}

      {data.steps && (
        <StrategySteps 
          sectionTitle={isContentCreation ? "رحلتنا نحو التميز" : "خطوات تنفيذ الخدمة"}
          steps={data.steps} 
        />
      )}

      {/* التعديل الجوهري هنا: يظهر فقط إذا كان الـ slug ضمن القائمة المسموحة */}
      {showWhyChooseUs && data.featuresSection && (
        <WhyChooseUs data={data.featuresSection} />
      )}
      
      {data.testimonials && <Testimonials data={data.testimonials}/>}
      {data.faqs && <Faqs data={data.faqs}/>}
      {!isContentCreation && <ReadyResults />}
    </main>
  );
}