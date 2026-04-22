import { AppCard } from "@/components/AppCard";
import { problemsData } from "@/lib/data";
import { Target, BarChart3, PenTool } from "lucide-react";

export default function Problems() {
  return (
    <section className="py-24 bg-brand-dark w-full text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            معظم الشركات تخسر <span className="text-[yellow] text-4xl mx-2 font-black">30% – 50%</span> من ميزانيتها <br/>
            الإعلانية بدون أن تعلم
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsData.map((prob) => (
            <AppCard key={prob.id} className="bg-brand-navy/30 border-none p-10 text-center flex flex-col items-center">
              <div className="mb-6">
                {prob.id === 1 && <Target className="h-10 w-10 text-brand-orange" />}
                {prob.id === 2 && <BarChart3 className="h-10 w-10 text-brand-orange" />}
                {prob.id === 3 && <PenTool className="h-10 w-10 text-brand-orange" />}
              </div>
              <h3 className="text-sub-title mb-4">{prob.title}</h3>
              <p className="text-body text-gray-400">
                {prob.description}
              </p>
            </AppCard>
          ))}
        </div>
      </div>
    </section>
  );
}