import StorySection from "@/components/sections/StorySection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection"; 
import TeamSection from "@/components/sections/TeamSection";
import ReadyResults from "@/components/sections/ReadyResults";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d]">
      <StorySection />
      <WhyUsSection />
      <VisionMissionSection />
      <TeamSection />
      <ReadyResults />
    </main>
  );
}