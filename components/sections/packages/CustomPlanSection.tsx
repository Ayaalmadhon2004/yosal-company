import Link from "next/link";
import { RevealSection } from "@/components/ui/Motion";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function CustomPlanSection() {
  return (
    <RevealSection className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-gradient-to-br from-brand-cta to-brand-cta-hover rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-20 text-center overflow-hidden group shadow-2xl shadow-primary/20">
          
          {/* لمسات ضوئية متحركة في الخلفية */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-white/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

          <div className="relative z-10">
            {/* أيقونة تميز علوية */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-8 border border-white/20 animate-bounce-slow">
              <Sparkles aria-hidden="true" className="text-white w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              هل تبحث عن <span className="underline decoration-white/30 underline-offset-8">خطة مخصصة؟</span>
            </h2>
            
            <p className="text-white text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              نحن نؤمن أن كل عمل تجاري هو قصة فريدة. إذا كانت احتياجاتك تتجاوز الباقات التقليدية، دعنا نصمم لك استراتيجية نمو تفصيلية تحقق طموحاتك الخاصة.
            </p>
            
            <Link href="/contact#form" className="group/btn bg-white text-brand-cta px-6 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-gray-50 transition-all duration-300 flex w-fit items-center gap-4 mx-auto shadow-xl hover:shadow-2xl active:scale-95">
              اطلب استشارتك المخصصة
              <ArrowLeft aria-hidden="true" className="w-6 h-6 transition-transform group-hover/btn:-translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}