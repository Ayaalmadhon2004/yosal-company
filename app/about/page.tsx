import type { Metadata } from "next";
import StorySection from "@/components/sections/about/StorySection";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import WhyUsSection from "@/components/sections/about/WhyUsSection";
import TeamSection from "@/components/sections/about/TeamSection";
import ReadyResults from "@/components/sections/ReadyResults";

const TITLE = "من نحن | وكالة يوصل للتسويق الرقمي";
const DESCRIPTION =
  "تعرّف على وكالة يوصل: رؤيتنا ورسالتنا وفريقنا المتخصص في التسويق الرقمي وبناء العلامات التجارية للسوق السعودي.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    siteName: "وكالة يوصل",
    locale: "ar_SA",
    type: "website",
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
