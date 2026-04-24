import ReadyForm from "@/components/form/ReadyForm";

interface ReadySectionProps {
  variant?: "style1" | "style2";
  className?: string;
}

export default function ReadySection({ variant = "style1", className }: ReadySectionProps) {
  return (
    <section className="bg-brand-dark py-24" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          <div className="lg:w-1/2 w-full">
            <ReadyForm />
          </div>
          
          <div className="lg:w-1/2 text-right">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              جاهز تنقل مشروعك <br />
              <span className="text-white/90">للمرحلة التالية؟</span>
            </h2>
            
            <p className="text-body text-gray-400 mb-12 max-w-xl">
              النتائج تبدأ بالظهور خلال أول 30 يوم من العمل معنا. لا تضيع مزيداً من الوقت والفرص الضائعة.
            </p>

            <div className="flex gap-12 mb-12 border-r border-white/10 pr-6">
              <div>
                <span className="text-brand-orange text-3xl font-black block">98%</span>
                <span className="text-tag-sm text-gray-500">رضا العملاء</span>
              </div>
              <div className="border-r border-white/10 pr-12">
                <span className="text-brand-orange text-3xl font-black block">24h</span>
                <span className="text-tag-sm text-gray-500">وقت الاستجابة</span>
              </div>
            </div>

            <button className="bg-[#22C55E] hover:bg-[#1eb053] text-white px-8 py-4 rounded-2xl btn-text flex items-center gap-3 transition-all shadow-lg shadow-green-500/20">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.18L2 22l4.917-1.405A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              تواصل عبر واتساب سريعاً
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}