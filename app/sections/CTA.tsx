export default function CTA() {
  return (
    <section className="py-20 bg-[#0F112B]" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#F58220] to-[#804411] p-12 md:p-20 text-center">
          
          {/* محتوى الـ CTA */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              جاهز لتحقيق نتائج حقيقية؟
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              لا تترك نمو مشروعك للصدفة. انضم لأكثر من 200 علامة تجارية تثق بنا في إدارة وجودها الرقمي.
            </p>
            
            <button className="bg-white text-[#F58220] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              احجز استشارة مجانية
            </button>
          </div>

          {/* دوائر تزيينية خلفية */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
}