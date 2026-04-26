import { AppButton } from "../ui/AppButton" 

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
      className={`relative py-24 px-6 overflow-hidden ${isStyle1 ? 'bg-[#1A1C2E]' : 'bg-[#0a0d1d]'}`}
      dir="rtl" 
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#F58220]/15 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#F58220]/15 blur-[150px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight font-cairo">
          {isStyle1 ? (
            <>جاهز تضاعف مبيعاتك؟</>
          ) : (
            <> جاهز لنصنع النجاح سوياً؟ </> 
          )}
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          {isStyle1 ? (
            <>
              لا تترك نمو مشروعك للصدفة. احصل على <span className="text-white font-bold">استشارة مجانية</span> اليوم واكتشف كيف يمكننا تحويل مشروعك لقصة نجاح جديدة.
            </>
          ) : (
            <>
              دعنا نناقش كيف يمكن لـ <span className="text-brand-orange font-black text-2xl mx-1 inline-block">"يوصل"</span> أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <AppButton 
            variant="orange" 
            size="lg" 
            className="w-full sm:w-auto min-w-[240px] rounded-full text-lg shadow-[0_10px_30px_rgba(245,130,32,0.3)] hover:scale-105"
            asChild
          >
            <a href={LINKS.FREE_CONSULTATION} target="_blank" rel="noopener noreferrer">
              {isStyle1 ? "إبدأ رحلتك الآن" : "ابدأ مشروعك الأن"}
            </a>
          </AppButton>
          
          <AppButton 
            variant="outline" 
            size="lg" 
            className="w-full bg-white text-black sm:w-auto min-w-[240px] rounded-full text-lg border-white/10 hover:border-brand-orange hover:text-brand-orange"
            asChild
          >
            <a href={LINKS.PORTFOLIO}>
             {isStyle1 ?"شاهد أعمالنا" :"احجز استشارة مجانية "}
            </a>
          </AppButton>
        </div>
      </div>
    </section>
  )
}