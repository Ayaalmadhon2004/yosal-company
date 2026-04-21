import { AppCard } from "@/components/AppCard";
import { problemsData } from "@/lib/data";
import { Target, BarChart3, PenTool } from "lucide-react";

export default function Problems() {
  return (
    <section className="py-24 bg-[#0F112B] w-full text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            معظم الشركات تخسر <span className="text-[#F58220] text-4xl mx-2">30% – 50%</span> من ميزانيتها <br/>
            الإعلانية بدون أن تعلم
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsData.map((prob) => (
            <AppCard key={prob.id} className="bg-[#161839]/30 border-none p-10 text-center flex flex-col items-center">
              <div className="mb-6">
                {prob.id === 1 && <Target className="h-10 w-10 text-[#F58220]" />}
                {prob.id === 2 && <BarChart3 className="h-10 w-10 text-[#F58220]" />}
                {prob.id === 3 && <PenTool className="h-10 w-10 text-[#F58220]" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {prob.description}
              </p>
            </AppCard>
          ))}
        </div>
      </div>
    </section>
  );
}