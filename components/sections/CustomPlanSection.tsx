import { ArrowRight } from "lucide-react";

export default function CustomPlanSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#F58220] to-[#d46d1a] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden group">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              هل تحتاج لباقة مخصصة؟
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              إذا كانت احتياجاتك تتجاوز الباقات المطروحة، نحن هنا لتصميم خطة عمل تناسب أهدافك الفريدة وميزانيتك الخاصة.
            </p>
            
            <button className="bg-white text-[#F58220] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto group-hover:scale-105">
              تواصل معنا
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-[-5px]" />
            </button>
          </div>

          {/* دوائر خلفية جمالية */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        </div>
      </div>
    </section>
  );
}