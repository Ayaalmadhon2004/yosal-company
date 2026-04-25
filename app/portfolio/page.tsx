import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import ImpactStats from "@/components/sections/portfolio/ImpactStats";
import SuccessNumbers from "@/components/sections/portfolio/SuccessNumbers";
import ReadyResult from "@/components/sections/ReadyResults";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <PortfolioHero />
      <PortfolioGrid />
      <ImpactStats />
      <SuccessNumbers />
      <ReadyResult />
    </main>
  );
}