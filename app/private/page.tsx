import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyGrid from "@/components/sections/PrivacyGrid";
import PrivacyContact from "@/components/sections/PrivacyContact";
import PrivacySidebar from "@/components/sections/PrivacySidebar";
import PrivacyIntroduction from "@/components/sections/PrivacyIntroduction";
import DataCollectionSection from "@/components/sections/DataCollectionSection";

export default function PrivatePage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d] text-white" dir="rtl">
      <PrivacyHero />
      
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <PrivacySidebar />
            <div className="rounded-[2rem] overflow-hidden border border-gray-800">
               <img src="/privacy-shield.png" alt="Privacy" className="w-full h-auto" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <PrivacyIntroduction />
            <DataCollectionSection />
          </div>
        </div>
        <PrivacyGrid />
        <PrivacyContact />
      </div>
    </main>
  );
}