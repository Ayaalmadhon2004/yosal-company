"use client";

import React from "react";
import { CheckCircle2, Copyright, Box, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TermsContent() {
  return (
    <section className="py-12 px-6 " dir="rtl">
      <div className="container mx-auto space-y-12 max-w-7xl">
        
        {/* القسم الأول: شروط الاستخدام */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-secondary/30 p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
             {/* تأثير ضوئي خلفي */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-foreground">شروط الاستخدام</h3>
              <Box className="text-primary w-7 h-7 transition-transform group-hover:rotate-12" />
            </div>
            <p className="text-muted-foreground leading-loose text-lg">
              باستخدامك لموقع <span className="text-foreground font-bold">يوصل</span> أو خدماتنا، فإنك توافق صراحة على الالتزام بهذه الشروط. نحن نحتفظ بالحق في تحديث هذه البنود في أي وقت، وسيتم إخطار المستخدمين النشطين بأي تغييرات جوهرية.
            </p>
            <p className="text-muted-foreground leading-loose text-lg mt-4">
              يجب ألا يتم استخدام خدماتنا لأي غرض غير قانوني أو غير مصرح به. يلتزم المستخدم بتقديم معلومات دقيقة ومحدثة عند طلب أي استشارة أو خدمة تسويقية.
            </p>
          </div>

          {/* عنصر بصري (Placeholder for Illustration/Image) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="h-full bg-secondary/20 rounded-[2.5rem] overflow-hidden border border-white/5 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 transition-opacity group-hover:opacity-80" />
                <div className="flex items-center justify-center h-full">
                    <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <Box className="w-20 h-20 text-primary/40 relative z-10" />
                </div>
            </div>
          </div>
        </div>

        {/* القسم الثاني: اتفاقية الخدمة والملكية الفكرية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* كرت اتفاقية الخدمة */}
          <div className="lg:col-span-5 bg-secondary/30 p-10 rounded-[2.5rem] border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <UserCheck className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-foreground">اتفاقية الخدمة</h3>
            </div>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              تعتبر العروض الفنية والمالية المقدمة من <span className="text-primary font-bold">يوصل</span> جزءاً لا يتجزأ من هذه الاتفاقية عند قبولها.
            </p>

            <ul className="space-y-5">
              {[
                "نطاق العمل المحدد في العرض",
                "الجدول الزمني للتسليمات",
                "سياسة الدفع والتحصيل"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-muted-foreground font-medium group">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* كرت الملكية الفكرية */}
          <div className="lg:col-span-7  p-10 rounded-[2.5rem] border border-white/10 shadow-inner relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Copyright className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-foreground">الملكية الفكرية</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              جميع المحتويات، التصاميم، والأكواد البرمجية التي تطورها يوصل تظل ملكية فكرية للوكالة حتى يتم سداد كامل المستحقات، وبعد ذلك تنتقل ملكية المخرجات النهائية للعميل.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/40 p-6 rounded-2xl border border-white/5 text-center group hover:border-primary/30 transition-colors">
                <span className="text-primary font-black block mb-2 text-lg">للوكالة</span>
                <span className="text-muted-foreground text-sm leading-relaxed">حق عرض العمل في معرض أعمالها المعتمد</span>
              </div>
              <div className="bg-secondary/40 p-6 rounded-2xl border border-white/5 text-center group hover:border-primary/30 transition-colors">
                <span className="text-primary font-black block mb-2 text-lg">للعميل</span>
                <span className="text-muted-foreground text-sm leading-relaxed">الملكية الكاملة والحصرية للمخرجات النهائية</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}