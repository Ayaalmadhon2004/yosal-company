import PrivacyHero from "@/components/sections/privacy/PrivacyHero";
import PrivacyGrid from "@/components/sections/privacy/PrivacyGrid";
import PrivacyContact from "@/components/sections/privacy/PrivacyContact";
import PrivacySidebar from "@/components/sections/privacy/PrivacySidebar";
import PrivacyIntroduction from "@/components/sections/privacy/PrivacyIntroduction";
import DataCollectionSection from "@/components/sections/privacy/DataCollectionSection";
import Image from 'next/image';

export default function PrivatePage() {
  return (
    <main className="min-h-screen bg-background text-white" dir="rtl">
      <PrivacyHero />
      
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

          <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
            <PrivacyIntroduction />
            
            {/* قسم جمع واستخدام المعلومات الموضح في التصميم */}
            <DataCollectionSection />
          </div>

          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <PrivacySidebar />
            
            <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/assets/Coding.png" 
                alt="Security and Coding Illustration" 
                width={400}
                height={300}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </aside>

        </div>

        <div className="mb-16">
          <PrivacyGrid />
        </div>

        <PrivacyContact  /> 
      </div>
    </main>
  );
}