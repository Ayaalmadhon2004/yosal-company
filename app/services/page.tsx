import Image from "next/image";
import { AppButton } from "@/components/ui/AppButton";
import Services from "@/components/sections/Services";
import ReadyResults from "@/components/sections/ReadyResults";

export default function ServicesHero() {
  return (
    <section className="bg-[#1A1C2E] py-24 px-6 overflow-hidden" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 text-right">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="text-[#F58220] text-sm font-bold tracking-wider">خدماتنا</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.2]">
              خدماتنا <span className="text-[#F58220]">الإبداعية</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              نحن لا نقدم مجرد خدمات، بل نصمم تجارب رقمية متكاملة تهدف لنقل علامتك التجارية إلى آفاق جديدة من التميز والابتكار.
            </p>

            <div className="flex flex-wrap gap-4">
              <AppButton size="lg" className="px-10">
                ابدأ مشروعك الآن
              </AppButton>
              <div className="h-[2px] w-24 bg-[#F58220] self-center opacity-50" />
            </div>
          </div>

           <div className="flex-1 relative group">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F58220]/20 to-transparent blur-3xl rounded-full" />
              
              <div className="relative z-10 w-full h-full rounded-[40px] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="/assets/moon.png" 
                  alt="Creative Services"
                  fill
                  className="object-cover"
                />
                {/* طبقة تظليل خفيفة */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C2E]/60 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Services/>
      <ReadyResults/>
    </section>
  );
}