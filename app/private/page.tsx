import PrivacyHero from "@/components/sections/privacy/PrivacyHero";
import PrivacyGrid from "@/components/sections/privacy/PrivacyGrid";
import PrivacyContact from "@/components/sections/privacy/PrivacyContact";
import PrivacySidebar from "@/components/sections/privacy/PrivacySidebar";
import PrivacyIntroduction from "@/components/sections/privacy/PrivacyIntroduction";
import DataCollectionSection from "@/components/sections/privacy/DataCollectionSection";
import Image from 'next/image';

export default function PrivatePage() {
  return (
    <main className="min-h-screen bg-[#0a0d1d] text-white" dir="rtl">
      {/* قسم الهيرو العلوي - سياسة الخصوصية */}
      <PrivacyHero />
      
      <div className="container mx-auto px-6 pb-20">
        {/* شبكة المحتوى الرئيسي المكونة من 12 عموداً */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* الجانب الأيمن (السيادبار + الصورة التقنية) - يأخذ 4 أعمدة */}
          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <PrivacySidebar />
            
            {/* الصورة التقنية التي تظهر تحت الفهرس مباشرة في التصميم */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-800/50 shadow-2xl">
              <Image 
                src="/assets/Coding.png" 
                alt="Security and Coding Illustration" 
                width={400}
                height={300}
                className="w-full h-auto object-cover" 
              />
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
            <PrivacyIntroduction />
            
            <DataCollectionSection />
          </div>

        </div>

        <div className="mb-16">
          <PrivacyGrid />
        </div>

        <PrivacyContact />
      </div>
    </main>
  );
}