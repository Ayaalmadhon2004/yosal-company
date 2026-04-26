import { AppButton } from "../ui/AppButton";

export default function CTA() {
  return (
    <section className="py-20 bg-brand-dark" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-brand-orange to-[#804411] p-12 md:p-20 text-center">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.2]">
              جاهز لتحقيق نتائج حقيقية؟
            </h2>
            
            <p className="text-white/90 text-body mb-10">
              لا تترك نمو مشروعك للصدفة. انضم لأكثر من 200 علامة تجارية تثق بنا في إدارة وجودها الرقمي.
            </p>
            
            <AppButton
              variant="primary" // يعطي خلفية #F3EADA مع نص برتقالي وظل متوهج
              size="lg"         // حجم كبير ليناسب أهمية حجز الاستشارة
              className="rounded-2xl px-10 py-4 shadow-xl hover:scale-105 transition-all"
            >
              احجز استشارة مجانية
            </AppButton>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
}