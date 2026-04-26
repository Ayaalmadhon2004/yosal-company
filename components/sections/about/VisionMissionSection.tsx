"use client";

import React from "react";
import { Rocket, Eye, TrendingUp, Zap, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// المكون الفرعي (داخلي فقط ولا يتم تصديره لمنع تعارض الـ Imports)
function StatItem({ 
  icon, 
  label, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  color: string; 
}) {
  return (
    <div className="flex items-center gap-4 justify-center group">
      <span className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">
        {label}
      </span>
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", 
        color
      )}>
        {icon}
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-[#0a0d1d] text-right" dir="rtl">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 mb-20">

           <div className="lg:w-2/3 bg-[#1A1C2E] p-8 md:p-10 rounded-[2.5rem] border-r-8 border-[#F58220] flex flex-col justify-center relative group transition-all hover:bg-[#1E2136]">
            <div className="max-w-2xl lg:mr-auto">
              <div className="flex items-center gap-4 mb-8 justify-start lg:justify-end">
                <h3 className="text-3xl font-black text-white">رؤيتنا</h3>
                <Eye className="w-10 h-10 text-[#F58220]" />
              </div>
              <p className="text-gray-300 text-lg md:text-xl leading-loose lg:text-left">
                أن نكون الشريك الاستراتيجي الأول للشركات الطموحة في العالم العربي، ممهدين الطريق نحو تحول رقمي ذكي يضع العميل دائماً في قلب التجربة التسويقية. نسعى لإعادة تعريف معايير النجاح الرقمي من خلال الابتكار المستمر.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3 bg-[#F58220] p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group transition-transform hover:scale-[1.01] duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-10 md:mb-12">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#0a0d1d] mb-6">رسالتنا</h3>
              <p className="text-[#0a0d1d] text-lg font-bold leading-relaxed opacity-90">
                تمكين العلامات التجارية من الوصول إلى أهدافها عبر حلول تسويقية مبنية على البيانات، تجمع بين الإبداع الفني والدقة التقنية لتحقيق نتائج ملموسة وقابلة للقياس.
              </p>
            </div>
            <Rocket className="absolute -bottom-10 -left-10 w-40 h-40 text-black/5 -rotate-12 transition-transform group-hover:rotate-0 duration-700" />
          </div>

        </div>

        <div className="bg-[#12162b]/50 py-10 px-8 rounded-[2rem] border border-gray-800/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            <StatItem 
              icon={<TrendingUp className="w-5 h-5 text-blue-500" />} 
              label="نتائج حقيقية" 
              color="bg-blue-500/10" 
            />
            <StatItem 
              icon={<Eye className="w-5 h-5 text-purple-500" />} 
              label="شفافية كاملة" 
              color="bg-purple-500/10" 
            />
            <StatItem 
              icon={<Zap className="w-5 h-5 text-orange-500" />} 
              label="سرعة التنفيذ" 
              color="bg-orange-500/10" 
            />
            <StatItem 
              icon={<UserCheck className="w-5 h-5 text-indigo-500" />} 
              label="مدير حساب مخصص" 
              color="bg-indigo-500/10" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}