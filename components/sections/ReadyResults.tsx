import { AppButton } from "../ui/AppButton" 

interface ReadySectionProps {
  variant?: "style1" | "style2";
}

export default function ReadySection({ variant = "style1" }: ReadySectionProps) {
  const isStyle1 = variant === "style1";
  return (
    <section className={`relative py-20 px-6 overflow-hidden ${isStyle1 ? 'bg-[#1A1C2E]' : 'bg-[#0a0d1d]'}`}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#F58220]/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#F58220]/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          {isStyle1 ? (
            <>جاهز لنصنع <span className="text-[#F58220]">النجاح سوياً؟</span></> //
          ) : (
            <>جاهز تضاعف <span className="text-[#F58220]">مبيعاتك؟</span></> //
          )}
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          {isStyle1 
            ? "دعنا نناقش كيف يمكن لـ \"يوصل\" أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء." //
            : "لا تترك نمو مشروعك للصدفة، احصل على استشارة مجانية اليوم واكتشف كيف يمكننا تحويل مشروعك لقصة نجاح جديدة." //
          }
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <AppButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto min-w-[220px] shadow-[0_0_30px_rgba(245,130,32,0.3)]"
          >
            {isStyle1 ? "ابدأ مشروعك الآن" : "ابدأ رحلتك الآن"} {/* */}
          </AppButton>
          
          <AppButton 
            variant={isStyle1 ? "white" : "outline"} 
            size="lg" 
            className="w-full sm:w-auto min-w-[220px]"
          >
            {isStyle1 ? "احجز استشارة مجانية" : "شاهد أعمالنا"} {/* */}
          </AppButton>
        </div>
      </div>
    </section>
  )
}