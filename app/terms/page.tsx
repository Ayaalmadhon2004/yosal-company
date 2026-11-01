import TermsHero from "@/components/sections/terms/TermsHero";
import TermsContent from "@/components/sections/terms/TermsContent";
import LegalCards from "@/components/sections/terms/LegalCards";
import type { Metadata } from "next";

const DESCRIPTION =
  "اطلع على شروط وأحكام استخدام موقع وكالة يوصل وخدماتها، والتزامات الأطراف والسياسات القانونية المنظمة للتعاون.";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "الشروط والأحكام",
    description: DESCRIPTION,
    url: "/terms",
    type: "website",
    locale: "ar_SA",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <TermsHero />
      <div className="space-y-4">
        <TermsContent />
        <LegalCards />
      </div>
    </div>
  );
}
