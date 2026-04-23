import { AppButton } from "../ui/AppButton" // تأكدي من المسار الصحيح حسب تنظيمك الجديد

export default function ReadySection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#1A1C2E]">
      {/* تأثير التوهج الخلفي الجانبي كما في التصميم */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#F58220]/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#F58220]/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* العنوان الرئيسي */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          جاهز لتحقيق <span className="text-[#F58220]">نتائج حقيقية؟</span>
        </h2>

        {/* النص الوصفي */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          لا تترك نمو مشروعك للصدفة. انضم لأكثر من 200 علامة تجارية تثق بنا في إدارة وجودها الرقمي.
        </p>

        {/* الأزرار التفاعلية */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <AppButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto min-w-[220px] shadow-[0_0_30px_rgba(245,130,32,0.3)]"
          >
            احجز استشارة مجانية
          </AppButton>
          
          <AppButton 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto min-w-[220px]"
          >
            شاهد أعمالنا
          </AppButton>
        </div>
      </div>
    </section>
  )
}