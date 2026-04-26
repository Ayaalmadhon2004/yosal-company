import TermsHero from "@/components/sections/terms/TermsHero";
import TermsContent from "@/components/sections/terms/TermsContent";
import LegalCards from "@/components/sections/terms/LegalCards";
import ReadyResults from "@/components/sections/ReadyResults";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <TermsHero />
      <TermsContent />
      <LegalCards />
      <ReadyResults variant="style1"/>
    </main>
  );
}