"use client";

import React from "react";
import Image from "next/image";
import Services from "@/components/sections/services/Services";
import ReadyResults from "@/components/sections/ReadyResults";

// تعريف الـ Interface لضمان مطابقة الأنواع وتجنب أخطاء الـ Build
import { ServiceItem } from "@/components/sections/services/Services";

export default function ServicesPage() {
  // البيانات الأصلية المستخرجة من قسم التخطيط الاستراتيجي
  const strategicPlanningData = {
    deliverables: [
      { 
        title: "تحليل السوق العميق", 
        desc: "دراسة شاملة للمنافسين واتجاهات المستهلكين وفجوات السوق المتاحة حالياً.", 
        icon: "search-zoom" 
      },
      { 
        title: "مؤشرات الأداء KPIs", 
        desc: "تحديد معايير واضحة للنجاح تمكنك من قياس كل خطوة في مشروعك بدقة.", 
        icon: "trending-up" 
      },
      { 
        title: "خارطة الطريق الاستراتيجية", 
        desc: "جدول زمني مفصل يحدد المهام والميزانيات والمسؤوليات بشكل دقيق وعملي.", 
        icon: "layout" 
      },
      { 
        title: "التدريب والتمكين", 
        desc: "تأهيل فريقك وتزويده بالأدوات اللازمة لتنفيذ الاستراتيجية بفعالية واستدامة.", 
        icon: "rocket" 
      }
    ]
  };

  // عملية الـ Mapping: تحويل البيانات لتناسب متطلبات المكون Services
  // هذا الجزء يحل خطأ: Type 'Service' is missing properties: brief, icon
  const formattedServices: ServiceItem[] = strategicPlanningData.deliverables.map((item, index) => ({
    id: index + 1,
    title: item.title,
    slug: "strategic-planning", 
    brief: item.desc,           // تحويل desc إلى brief برمجياً
    icon: item.icon,            
    features: [],               // إضافة مصفوفة فارغة لتجنب خطأ الـ missing property
    ctaText: "اطلب الخدمة الآن"
  }));

  return (
    <section className="py-24 px-6 overflow-hidden bg-background" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="text-primary text-sm font-bold tracking-wider">خدماتنا</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.2]">
              خدماتنا <span className="text-primary">الإبداعية</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              نحن لا نقدم مجرد خدمات، بل نصمم تجارب رقمية متكاملة تهدف لنقل علامتك التجارية إلى آفاق جديدة من التميز والابتكار.
            </p>
          </div>

          {/* الجانب الأيسر: الصورة التوضيحية */}
          <div className="flex-1 relative group order-1 lg:order-2 w-full isolate">
            <div className="relative z-10 w-full h-[350px] sm:h-[450px] lg:h-[500px] lg:aspect-square max-w-[500px] mx-auto rounded-[2.5rem] md:rounded-4xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
              
              {/* توهج خلفي (Glow Effect) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-3xl rounded-full animate-pulse -z-10" />
              
              <Image 
                src="/assets/moon.png" 
                alt="Creative Services at Yoosel"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      {/* المكونات الإضافية مع البيانات المنسقة */}
      <div className="mt-20">
        <Services data={formattedServices}/>
      </div>
      
      {/* مكون النتائج الجاهزة (Variant Style 1) */}
      <ReadyResults variant="style1"/>
    </section>
  );
}