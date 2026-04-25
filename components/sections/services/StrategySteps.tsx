import React from "react";

interface Step {
  number: string;
  title: string;
  desc: string;
}

export default function StrategySteps({ steps = [], sectionTitle = "رحلتنا نحو التميز" }: { steps: Step[], sectionTitle?: string }) {
  if (!steps.length) return null;

  return (
    <section className="py-24 px-6 bg-[#0F111A]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20">{sectionTitle}</h2>
        
        <div className="relative">
          {/* خط الوصل الخلفي */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* الدائرة المرقمة */}
                <div className="w-16 h-16 rounded-full bg-[#FF8A00] flex items-center justify-center text-2xl font-black text-[#0F111A] mb-8 shadow-[0_0_30px_rgba(255,138,0,0.3)] group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                
                {/* محتوى الكرت */}
                <div className="bg-[#1A1C2E] p-8 rounded-[30px] border border-white/5 w-full min-h-[220px] flex flex-col items-center justify-center text-center group-hover:border-[#FF8A00]/30 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}