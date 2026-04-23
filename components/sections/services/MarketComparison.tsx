import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

// تعريف الـ Props لضمان أمان البيانات (TypeScript)
interface MarketComparisonProps {
  challenges?: string[]; // علامة الاستفهام تضمن عدم الانهيار إذا كانت المصفوفة غائبة
  solutions?: string[];
  challengeTitle?: string;
  solutionTitle?: string;
}

export default function MarketComparison({ 
  challenges = [], // قيم افتراضية لمنع خطأ .map of undefined
  solutions = [], 
  challengeTitle = "تحديات السوق الحالية", 
  solutionTitle = 'حلول "يوصل" المبتكرة' 
}: MarketComparisonProps) {

  // حماية إضافية: إذا لم توجد بيانات، لا يظهر السكشن
  if (!challenges.length && !solutions.length) return null;

  return (
    <section className="py-24 px-6 bg-[#1A1C2E]">
      <div className="max-w-[1200px] mx-auto overflow-hidden rounded-[40px] border border-white/5 shadow-2xl flex flex-col md:flex-row">
        
        {/* قسم التحديات - الخلفية الداكنة */}
        <div className="flex-1 p-10 md:p-16 bg-[#1F2136]">
          <div className="flex items-center gap-4 mb-10 justify-end md:justify-start flex-row-reverse md:flex-row">
            <h3 className="text-2xl font-bold text-white tracking-tight">{challengeTitle}</h3>
            <AlertTriangle className="text-red-400/80 w-8 h-8" />
          </div>
          
          <ul className="space-y-8" dir="rtl">
            {challenges.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-400 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold group-hover:border-[#F58220]/50 transition-colors">
                  {index + 1}
                </span>
                <p className="text-lg leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* قسم الحلول - الخلفية المشرقة مع تأثير الإضاءة */}
        <div className="flex-1 p-10 md:p-16 bg-[#161829] relative overflow-hidden">
          {/* Glow Effect المقتبس من التصميم */}
          <div className="absolute top-0 right-0 w-full h-full bg-[#F58220]/10 blur-[100px]" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10 justify-end md:justify-start flex-row-reverse md:flex-row">
              <h3 className="text-2xl font-bold text-white tracking-tight">{solutionTitle}</h3>
              <CheckCircle2 className="text-[#F58220] w-8 h-8" />
            </div>

            <ul className="space-y-8" dir="rtl">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-white group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-transform group-hover:scale-110">
                    <CheckCircle2 size={16} className="text-[#161829] stroke-[3px]" />
                  </span>
                  <p className="text-lg font-medium leading-relaxed pt-0.5">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}