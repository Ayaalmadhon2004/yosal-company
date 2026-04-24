import TermsHero from "@/components/sections/TermsHero";
import TermsContent from "@/components/sections/TermsContent";
import LegalCards from "@/components/sections/LegalCards";
import ReadyResults from "@/components/sections/ReadyResults";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <TermsHero />
      <TermsContent />
      <LegalCards />
      <ReadyResults/>
    </main>
  );
}