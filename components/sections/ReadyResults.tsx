"use client";
import { RevealSection } from "@/components/ui/Motion";

import { AppButton } from "../ui/AppButton";
import Link from "next/link";

interface ReadySectionProps {
  variant?: "style1" | "style2";
}

const LINKS = {
  FREE_CONSULTATION: "https://wa.link/4ddhsa",
  PORTFOLIO: "/portfolio"
};

export default function ReadySection({ variant = "style1" }: ReadySectionProps) {
  const isStyle1 = variant === "style1";

  return (
    <RevealSection className="relative py-24 px-6 bg-background" dir="rtl">
      {/* الكرت الأساسي */}
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] md:rounded-[60px] bg-[#161839] border border-white/5 py-20 px-8 shadow-2xl">
        
        {/* الدائرة المتوهجة العلوية (يمين) - كما في الصورة */}
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: 'var(--color-brand-orange)' }}
        />
        
        {/* الدائرة المتوهجة السفلية (يسار) */}
        <div 
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
          style={{ backgroundColor: 'var(--color-brand-orange)' }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight font-cairo">
            {isStyle1 ? "جاهز تضاعف مبيعاتك؟" : "جاهز لنصنع النجاح سوياً؟"}
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto">
            {isStyle1 ? (
              <>
                لا تترك نمو مشروعك للصدفة. احصل على <span className="text-white font-bold">استشارة مجانية</span> اليوم واكتشف كيف يمكننا تحويل مشروعك لقصة نجاح جديدة.
              </>
            ) : (
              <>
                دعنا نناقش كيف يمكن لـ <span className="text-brand-orange font-bold">&quot;يوصل&quot;</span> أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء.
              </>
            )}
          </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            
            {/* الزر الأول (احجز استشارة مجانية) - معبأ باللون البرتقالي الباهت/البيج */}
            <AppButton className="p-0 overflow-hidden w-full sm:w-auto min-w-[220px] h-14 rounded-full bg-[#F5E6CA] hover:bg-[#ebdcc0] transition-all border-none">
              <a 
                href={LINKS.FREE_CONSULTATION} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center px-8 text-lg font-bold text-[#E6740F]"
              >
                {isStyle1 ? "احجز استشارة مجانية" : "ابدأ مشروعك الآن"}
              </a>
            </AppButton>
            
            {/* الزر الثاني (شاهد أعمالنا) - شفاف مع إطار برتقالي */}
            <AppButton className="p-0 overflow-hidden w-full sm:w-auto min-w-[220px] h-14 rounded-full bg-transparent border-2 border-[#FF7F11] hover:bg-[#FF7F11]/10 transition-all">
              <Link 
                href={isStyle1 ? LINKS.PORTFOLIO : LINKS.FREE_CONSULTATION}
                className="w-full h-full flex items-center justify-center px-8 text-lg font-bold text-[#FF7F11]"
              >
                {isStyle1 ? "شاهد أعمالنا" : "احجز استشارة مجانية"}
              </Link>
            </AppButton>

          </div>
        </div>
      </div>
    </RevealSection>
  );
}