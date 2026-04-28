"use client";

import React from "react";
import { Database, ShieldCheck, UserCircle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DataCollectionSection() {
  const points = [
    { 
      id: "01", 
      title: "المعلومات الشخصية", 
      desc: "مثل الاسم، البريد الإلكتروني، ورقم الهاتف التي تقدمها طواعية عند التواصل معنا.",
      icon: UserCircle
    },
    { 
      id: "02", 
      title: "بيانات الاستخدام التلقائية", 
      desc: "تشمل عنوان IP، نوع المتصفح، وسلوك التصفح لتحسين جودة تجربتك الرقمية.",
      icon: Globe
    },
    { 
      id: "03", 
      title: "المعلومات المهنية", 
      desc: "البيانات المتعلقة بنشاطك التجاري المقدمة أثناء طلب استشارات التسويق الرقمي.",
      icon: ShieldCheck
    },
  ];

  return (
    <div className="bg-secondary/30 p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden" dir="rtl">
      {/* تأثير ضوئي جانبي */}
      <div className="absolute top-0 left-0 w-32 h-full bg-primary/5 blur-3xl -translate-x-1/2" />

      <div className="flex items-center gap-4 mb-10 relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
          <Database className="text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-foreground">جمع البيانات</h3>
          <p className="text-muted-foreground text-sm mt-1">كيف نتعامل مع معلوماتك بأمان</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.id} 
              className="group /50 p-6 rounded-2xl border border-white/5 flex gap-6 items-center text-right transition-all duration-300 hover:border-primary/30 hover:"
            >
              <div className="flex flex-col items-center gap-1">
                 <span className="text-primary font-black text-xl tabular-nums">{p.id}</span>
                 <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div className="flex-1 border-r border-white/5 pr-6">
                <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}