import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import ImpactStats from "@/components/sections/portfolio/ImpactStats";
import ReadyResult from "@/components/sections/ReadyResults";
import Stats from "@/components/sections/home/Stats";
import { getDashboardData } from "@/lib/api";
import UnifiedPortfolio from "@/components/sections/portfolio/UnifiedPortfolio";

export default async function PortfolioPage() {
  const dashboardData = await getDashboardData();
  
    const data = dashboardData || {
      statistics: [],
    };
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHero />
      <UnifiedPortfolio isHomePage={false} />
      <ImpactStats />
      <Stats/>
      <ReadyResult variant="style2"/>
    </main>
  );
}