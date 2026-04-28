import { AppButton } from "../../ui/AppButton";

export default function CTA() {
  return (
    <section className="py-20 " dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary via-primary/90 to-[#804411] p-12 md:p-20 text-center shadow-2xl shadow-primary/20">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.2]">
              جاهز لتحقيق نتائج حقيقية؟
            </h2>
            
            <p className="text-white/90 text-body mb-10 max-w-2xl mx-auto">
              لا تترك نمو مشروعك للصدفة. انضم لأكثر من 200 علامة تجارية تثق بنا في إدارة وجودها الرقمي وتحويل أهدافها إلى واقع ملموس.
            </p>
            
            <AppButton
              variant="primary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-2xl px-10 py-7 text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              احجز استشارة مجانية الآن
            </AppButton>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full -ml-48 -mb-48 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}