import type { Metadata } from "next";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import ImpactStats from "@/components/sections/portfolio/ImpactStats";
import ReadyResult from "@/components/sections/ReadyResults";
import Stats from "@/components/sections/home/Stats";
import { getDashboardData } from "@/lib/api";
import UnifiedPortfolio from "@/components/sections/portfolio/UnifiedPortfolio";

export const metadata: Metadata = {
  title: "أعمالنا",
  description:
    "شاهد مشاريع وقصص نجاح وكالة يوصل مع عملائها في السوق السعودي، ونتائج حقيقية في التسويق الرقمي والمتاجر الإلكترونية والمواقع.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "أعمالنا",
    description:
      "شاهد مشاريع وقصص نجاح وكالة يوصل مع عملائها في السوق السعودي، ونتائج حقيقية في التسويق الرقمي والمتاجر الإلكترونية والمواقع.",
    url: "/portfolio",
    type: "website",
    locale: "ar_SA",
    images: ["/assets/pic1.png"],
  },
};

export default async function PortfolioPage() {
  const dashboardData = await getDashboardData();

  // إذا لم توجد بيانات، نمرر مصفوفة فارغة لتجنب الانهيار
  const projects = dashboardData?.portfolio || [];

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHero />
      <UnifiedPortfolio isHomePage={false} initialProjects={projects} />
      <ImpactStats />
      <Stats />
      <ReadyResult variant="style2" />
    </div>
  );
}
