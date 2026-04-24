import React from "react";

interface StepItem {
  number?: string; 
  title: string;
  description: string;
}

interface ServiceStepsProps {
  sectionTitle: string;
  steps: StepItem[];
}

export default function ServiceSteps({ sectionTitle, steps }: ServiceStepsProps) {
  return (
    <section className="py-24 px-6 bg-[#1A1C2E] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-20">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" dir="rtl">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-white/10 -z-0" />

          {steps?.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="w-16 h-16 rounded-full bg-[#F58220] text-white text-xl font-bold flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,130,32,0.6)]">
                {step.number || index + 1}
              </div>

              <div className="bg-[#1F2136] p-8 rounded-[24px] border border-white/5 h-full transition-all duration-300 group-hover:border-[#F58220]/30 group-hover:bg-[#1F2136]/80">
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}