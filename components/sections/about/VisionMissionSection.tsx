"use client";

import React from "react";
import { Rocket, Eye, TrendingUp, Zap, UserCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// المكون الفرعي للإحصائيات/المميزات السريعة
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
    <div className="flex items-center gap-4 justify-center group cursor-default">
      <span className="text-muted-foreground font-bold text-lg group-hover:text-foreground transition-colors">
        {label}
      </span>
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg]", 
        color
      )}>
        {icon}
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <section className="py-24  relative overflow-hidden" dir="rtl">
      {/* تأثير إضاءة خلفي */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        
        {/* قسم الرؤية والرسالة */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">

          {/* الرؤية - الصندوق الأكبر */}
          <div className="lg:w-2/3 bg-secondary/10 p-10 md:p-14 rounded-[3rem] border-r-8 border-primary flex flex-col justify-center relative group transition-all duration-500 hover:bg-secondary/20 border border-white/5">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8 justify-start">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-black text-foreground tracking-tight">رؤيتنا</h3>
              </div>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed text-right font-medium">
                أن نكون الشريك الاستراتيجي الأول للشركات الطموحة في العالم العربي، ممهدين الطريق نحو <span className="text-foreground">تحول رقمي ذكي</span> يضع العميل دائماً في قلب التجربة. نسعى لإعادة تعريف معايير النجاح من خلال الابتكار.
              </p>
            </div>
            <Sparkles className="absolute top-10 left-10 w-8 h-8 text-primary/20 animate-pulse" />
          </div>
          
          {/* الرسالة - الصندوق الملون */}
          <div className="lg:w-1/3 bg-primary p-10 md:p-14 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-12 shadow-inner">
                <Rocket className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-4xl font-black text-background mb-8 tracking-tight">رسالتنا</h3>
              <p className="text-background text-xl font-black leading-relaxed opacity-95">
                تمكين العلامات التجارية من الوصول إلى أهدافها عبر حلول مبنية على البيانات، تجمع بين <span className="underline decoration-background/30 underline-offset-4">الإبداع الفني</span> والدقة التقنية.
              </p>
            </div>
            {/* أيقونة خلفية جمالية */}
            <Rocket className="absolute -bottom-10 -left-10 w-48 h-48 text-background/10 -rotate-12 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-110" />
          </div>

        </div>

        {/* شريط المميزات السريعة */}
        <div className="bg-secondary/5 py-12 px-8 rounded-[2.5rem] border border-white/5 backdrop-blur-sm relative group">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <StatItem 
              icon={<TrendingUp className="w-6 h-6 text-blue-500" />} 
              label="نتائج حقيقية" 
              color="bg-blue-500/10" 
            />
            <StatItem 
              icon={<Eye className="w-6 h-6 text-purple-500" />} 
              label="شفافية كاملة" 
              color="bg-purple-500/10" 
            />
            <StatItem 
              icon={<Zap className="w-6 h-6 text-amber-500" />} 
              label="سرعة التنفيذ" 
              color="bg-amber-500/10" 
            />
            <StatItem 
              icon={<UserCheck className="w-6 h-6 text-emerald-500" />} 
              label="مدير حساب مخصص" 
              color="bg-emerald-500/10" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}