import ReadyForm from "@/components/form/ReadyForm";
import { Link } from "lucide-react";

interface ReadySectionProps {
  variant?: "style1" | "style2";
  className?: string;
}

export default function ReadySection({ variant = "style1", className }: ReadySectionProps) {
  return (
    <section className=" py-24" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 w-full">
            <div className="glass-card p-2 border-none shadow-2xl shadow-primary/5">
              <ReadyForm />
            </div>
          </div>
          
          {/* الجانب الأيمن: المحتوى */}
          <div className="lg:w-1/2 text-right">
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-8">
              جاهز تنقل مشروعك <br />
              <span className="text-primary">للمرحلة التالية؟</span>
            </h2>
            
            <p className="text-body text-muted-foreground mb-12 max-w-xl leading-relaxed">
              النتائج تبدأ بالظهور خلال أول 30 يوم من العمل معنا. لا تضيع مزيداً من الوقت والفرص الضائعة، دعنا نبدأ رحلة النجاح الآن.
            </p>

            <div className="flex gap-12 mb-12 border-r-2 border-primary/20 pr-6">
              <div>
                <span className="text-primary text-3xl md:text-4xl font-black block">98%</span>
                <span className="text-tag-sm text-muted-foreground font-medium uppercase tracking-wider">رضا العملاء</span>
              </div>
              <div className="border-r border-white/10 pr-12">
                <span className="text-primary text-3xl md:text-4xl font-black block">24h</span>
                <span className="text-tag-sm text-muted-foreground font-medium uppercase tracking-wider">وقت الاستجابة</span>
              </div>
            </div>

            <a 
              href="https://wa.link/4ddhsa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl text-lg font-bold flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/20 active:scale-95 cursor-pointer">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-2.32 0-4.208 1.888-4.208 4.208 0 .8.232 1.544.624 2.176l-.664 2.432 2.496-.656c.544.304 1.152.488 1.792.488 2.32 0 4.208-1.888 4.208-4.208s-1.888-4.208-4.248-4.208zm3.08 5.728c-.088.24-.512.448-.712.48-.2.032-.448.056-1.256-.256-.632-.248-1.04-.888-1.072-.928-.032-.04-.264-.352-.264-.672 0-.32.168-.48.232-.544.064-.064.136-.08.184-.08h.136c.04 0 .096 0 .144.12.048.12.16.4.176.432.016.032.024.072.008.104-.016.032-.024.056-.056.096-.032.032-.072.072-.104.104-.032.032-.072.072-.032.144.04.072.184.304.392.488.272.24.504.312.576.352.072.04.112.032.152-.016s.176-.208.224-.312c.048-.104.096-.088.16-.064.064.024.408.192.48.224.072.032.12.048.136.08.016.032.016.184-.072.424zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.18L2 22l4.917-1.405A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                تواصل عبر واتساب سريعاً
              </button>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}