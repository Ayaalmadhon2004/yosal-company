import TermsHero from "@/components/sections/terms/TermsHero";
import TermsContent from "@/components/sections/terms/TermsContent";
import LegalCards from "@/components/sections/terms/LegalCards";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "شروط الخدمة | يوصل",
  description: "اطلع على شروط وأحكام استخدام خدمات وكالة يوصل للتسويق الرقمي، وحدود المسؤولية والملكية الفكرية.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "شروط الخدمة | يوصل",
    description: "شروط وأحكام استخدام خدمات وكالة يوصل للتسويق الرقمي.",
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
