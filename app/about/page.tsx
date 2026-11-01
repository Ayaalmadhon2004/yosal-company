import type { Metadata } from "next";
import StorySection from "@/components/sections/about/StorySection";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import WhyUsSection from "@/components/sections/about/WhyUsSection";
import TeamSection from "@/components/sections/about/TeamSection";
import ReadyResults from "@/components/sections/ReadyResults";

const TITLE = "من نحن";
const DESCRIPTION =
  "تعرف على قصة وكالة يوصل ورؤيتنا ورسالتنا وفريقنا المتخصص في التسويق الرقمي وصناعة النمو للعلامات التجارية في السوق السعودي.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    type: "website",
    locale: "ar_SA",
  },
};

// The root layout already renders <main>, so this page only returns sections.
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <StorySection />

      <div className="space-y-20 pb-20">
        <VisionMissionSection />
        <WhyUsSection />
        <TeamSection />
        <ReadyResults variant="style2" />
      </div>
    </div>
  );
}
