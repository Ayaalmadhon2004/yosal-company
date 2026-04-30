"use client";

import { AppButton } from "../ui/AppButton";
import { cn } from "@/lib/utils";

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
    <section 
      className={cn(
        "relative py-24 px-6 overflow-hidden bg-background",
        isStyle1 ? "bg-background" : "bg-background"
      )}
      dir="rtl" 
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none " />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
          {isStyle1 ? "جاهز تضاعف مبيعاتك؟" : "جاهز لنصنع النجاح سوياً؟"}
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          {isStyle1 ? (
            <>
              لا تترك نمو مشروعك للصدفة. احصل على <span className="text-white font-bold">استشارة مجانية</span> اليوم واكتشف كيف يمكننا تحويل مشروعك لقصة نجاح جديدة.
            </>
          ) : (
            <>
              دعنا نناقش كيف يمكن لـ <span className="text-primary font-black text-2xl mx-1 inline-block">"يوصل"</span> أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <AppButton 
            variant="orange" 
            size="lg" 
            className="w-full sm:w-auto min-w-[240px] rounded-full text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            <a href={LINKS.FREE_CONSULTATION} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
              {isStyle1 ? "إبدأ رحلتك الآن" : "ابدأ مشروعك الأن"}
            </a>
          </AppButton>
          
          <AppButton 
            variant="outline" 
            size="lg" 
            className="w-full bg-white text-black sm:w-auto min-w-[240px] rounded-full text-lg border-transparent hover:bg-primary hover:text-white transition-all"
          >
            <a href={isStyle1 ? LINKS.PORTFOLIO : LINKS.FREE_CONSULTATION} className="w-full h-full block">
              {isStyle1 ? "شاهد أعمالنا" : "احجز استشارة مجانية"}
            </a>
          </AppButton>
        </div>
      </div>
    </section>
  );
}