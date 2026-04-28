"use client";

import React from "react";
import { Handshake, Paintbrush, BarChart3, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "قرارات مبنية على البيانات",
    description: "لا نعتمد على التخمين. كل خطوة نخطوها مدعومة بتحليلات عميقة لسوق العمل وسلوك المستهلك لضمان أعلى عائد استثماري.",
    icon: BarChart3,
  },
  {
    title: "إبداع بلا حدود",
    description: "فريقنا الإبداعي يصمم تجارب بصرية ومحتوى يأسر الألباب، مما يجعل علامتك التجارية تبرز في زحام الفضاء الرقمي المنافس.",
    icon: Paintbrush,
  },
  {
    title: "شراكة حقيقية",
    description: "نحن لا نعمل كجهة خارجية، بل نعتبر أنفسنا شريكاً تقنياً لك. نجاح مشروعك هو نجاح شخصي لنا، ونلتزم بالشفافية المطلقة.",
    icon: Handshake,
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24  relative overflow-hidden" dir="rtl">
      {/* تأثيرات خلفية فنية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        
        {/* رأس القسم بتصميم عصري */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-white/5 text-primary mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 fill-primary" />
            <span className="font-black text-xs md:text-sm tracking-widest uppercase">ما يميزنا</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground">
            لماذا يختارنا <span className="text-primary italic">الرواد؟</span>
          </h2>
        </div>

        {/* شبكة الميزات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-secondary/10 p-10 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden shadow-2xl"
            >
              {/* أيقونة الميزة بتأثير بصري عميق */}
              <div className="relative w-20 h-20  rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:rotate-[10deg] transition-transform duration-500 border border-white/5">
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-10 h-10 text-primary relative z-10" />
              </div>

              {/* نصوص الميزة */}
              <h3 className="text-2xl font-black text-foreground mb-6 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium group-hover:text-foreground/80 transition-colors">
                {feature.description}
              </p>

              {/* لمعة خفيفة تظهر عند التحويم */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}