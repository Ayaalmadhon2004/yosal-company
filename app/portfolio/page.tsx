import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import ImpactStats from "@/components/sections/portfolio/ImpactStats";
import ReadyResult from "@/components/sections/ReadyResults";
import Stats from "@/components/sections/home/Stats";
import { getDashboardData } from "@/lib/api";
import UnifiedPortfolio from "@/components/sections/portfolio/UnifiedPortfolio";

export default async function PortfolioPage() {
  const dashboardData = await getDashboardData();
  
  // إذا لم توجد بيانات، نمرر مصفوفات فارغة لتجنب الانهيار
  const projects = dashboardData?.portfolio || [];
  const stats = dashboardData?.statistics || [];

  return (
    <main className="min-h-screen bg-background">
      <PortfolioHero />
      
      {/* تمرير البيانات للمكونات */}
      <UnifiedPortfolio 
        isHomePage={false} 
        initialProjects={projects} 
      />
      
      <ImpactStats data={stats} />
      
      <Stats/>
      <ReadyResult variant="style2"/>
    </main>
  );
}