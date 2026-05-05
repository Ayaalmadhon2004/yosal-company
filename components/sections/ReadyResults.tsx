"use client";

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
    <section className="relative py-24 px-6 bg-background" dir="rtl">
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
                دعنا نناقش كيف يمكن لـ <span className="text-brand-orange font-bold">"يوصل"</span> أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            
            {/* زر "ابدأ مشروعك الآن" - برتقالي */}
            <AppButton 
              className="p-0 overflow-hidden w-full sm:w-auto min-w-[220px] h-14 rounded-2xl bg-brand-orange shadow-lg shadow-brand-orange/20 hover:scale-105 transition-all border-none"
            >
              <a 
                href={LINKS.FREE_CONSULTATION} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center px-8 text-lg font-bold text-white"
              >
                {isStyle1 ? "إبدأ رحلتك الآن" : "ابدأ مشروعك الآن"}
              </a>
            </AppButton>
            
            {/* زر "احجز استشارة" - أبيض بنص برتقالي (مطابق للصورة) */}
            <AppButton 
              className="p-0 overflow-hidden w-full sm:w-auto min-w-[220px] h-14 rounded-2xl bg-white hover:bg-white/90 transition-all border-none"
            >
              <Link 
                href={isStyle1 ? LINKS.PORTFOLIO : LINKS.FREE_CONSULTATION}
                className="w-full h-full flex items-center justify-center px-8 text-lg font-bold text-brand-orange"
              >
                {isStyle1 ? "شاهد أعمالنا" : "احجز استشارة مجانية"}
              </Link>
            </AppButton>

          </div>
        </div>
      </div>
    </section>
  );
}