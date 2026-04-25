import StorySection from "@/components/sections/about/StorySection";
import WhyUsSection from "@/components/sections/about/WhyUsSection";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection"; 
import TeamSection from "@/components/sections/about/TeamSection";
import ReadyResults from "@/components/sections/ReadyResults";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <StorySection />
      <VisionMissionSection />
      <WhyUsSection />
      <TeamSection />
      <ReadyResults />
    </main>
  );
}