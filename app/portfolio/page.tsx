import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ImpactStats from "@/components/sections/ImpactStats";
import SuccessNumbers from "@/components/sections/SuccessNumbers";
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