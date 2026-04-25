import React from "react";
import { AlertTriangle, Sparkles } from "lucide-react";

interface MarketComparisonProps {
  challenges?: string[];
  solutions?: string[];
  challengeTitle?: string;
  solutionTitle?: string;
}

export default function MarketComparison({ 
  challenges = [], 
  solutions = [], 
  challengeTitle = "محتوى ممل؟", 
  solutionTitle = "رواية قصصية ملهمة" 
}: MarketComparisonProps) {

  if (!challenges.length && !solutions.length) return null;

  return (
    <section className="py-24 px-6 bg-[#0F111A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* كرت التحديات (المشكلة) */}
          <div className="group relative p-10 md:p-16 rounded-[40px] bg-[#1A1C2E] border border-white/5 transition-all duration-500 hover:border-red-500/20 flex flex-col justify-center text-right" dir="rtl">
            <div className="mb-8 flex justify-start">
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="text-red-400 w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-6 leading-tight">
              {challengeTitle}
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              أغلب العلامات التجارية تغرق في بحر التقليد. فيديوهات مكررة، نصوص ضعيفة، وتصميمات لا تعبر عن الروح الحقيقية للبراند، مما يؤدي لضياع ميزانيات التسويق دون عائد حقيقي.
            </p>

            {/* عرض التحديات بشكل نصي مدمج أو نقاط مخفية */}
            <div className="mt-8 flex flex-wrap gap-3 justify-start">
              {challenges.map((item, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-white/5 text-gray-500 text-sm border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* كرت الحلول (القوة) */}
          <div className="group relative p-10 md:p-16 rounded-[40px] bg-[#1A1C2E] border border-[#FF8A00]/20 shadow-[0_20px_50px_rgba(255,138,0,0.1)] transition-all duration-500 hover:scale-[1.02] flex flex-col justify-center text-right" dir="rtl">
            {/* تأثير الإضاءة (Glow) المقتبس من التصميم */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF8A00]/10 blur-[100px] rounded-full" />
            
            <div className="mb-8 flex justify-start relative z-10">
              <div className="p-4 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20">
                <Sparkles className="text-[#FF8A00] w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-6 leading-tight relative z-10">
              {solutionTitle}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed font-medium relative z-10">
              في <span className="text-[#FF8A00]">"يوصل"</span>، نكسر القالب. ندمج بين استراتيجيات التسويق الحديثة وفنون الإنتاج السينمائي لنخلق محتوى لا يُشاهد فقط، بل يُشارك ويُخلد في ذاكرة المنصات الرقمية.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-start relative z-10">
              {solutions.map((item, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] text-sm border border-[#FF8A00]/20 font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}