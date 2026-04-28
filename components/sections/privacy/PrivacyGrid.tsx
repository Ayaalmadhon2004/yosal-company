"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Info, Cookie, ShieldCheck, Scale } from "lucide-react";

export default function PrivacyGrid() {
  const userRights = [
    { title: "حق الوصول", desc: "طلب نسخة من البيانات الشخصية التي نحتفظ بها في أي وقت." },
    { title: "حق الحذف", desc: "المطالبة بحذف معلوماتك من سجلاتنا بشكل نهائي وآمن." },
    { title: "حق التصحيح", desc: "تحديث أي معلومات غير دقيقة أو غير كاملة فوراً." },
    { title: "حق الاعتراض", desc: "رفض معالجة بياناتك لأغراض تسويقية محددة بطلب بسيط." }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12" dir="rtl">
      
      {/* سكشن استخدام المعلومات */}
      <div className="bg-secondary/30 p-8 md:p-10 rounded-[2.5rem] border border-white/5 transition-all duration-300 hover:border-primary/20 group">
        <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
            <Info className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          استخدام المعلومات
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          نستخدم بياناتك لتقديم خدماتنا وتحسين تجربتك التسويقية، يشمل ذلك تخصيص المحتوى، تحليل الأداء الإعلاني، وإرسال تحديثات حول استراتيجيات النمو الرقمي التي تخدم أهداف عملك.
        </p>
        <div className="/50 p-5 rounded-2xl border-r-4 border-primary shadow-sm italic">
          <p className="text-xs text-muted-foreground font-medium leading-relaxed">
            "نحن نلتزم التزاماً تاماً بعدم بيع بياناتك لأي أطراف ثالثة لأغراض ترويجية تحت أي ظرف من الظروف."
          </p>
        </div>
      </div>

      {/* سكشن ملفات تعريف الارتباط */}
      <div className="bg-secondary/30 p-8 md:p-10 rounded-[2.5rem] border border-white/5 transition-all duration-300 hover:border-primary/20 group">
        <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
            <Cookie className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          ملفات تعريف الارتباط
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          نستخدم الكوكيز لتحسين سرعة الموقع وحفظ تفضيلاتك وتوفير تجربة تصفح مخصصة. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك، مع العلم أن تعطيلها قد يؤثر على بعض الوظائف التفاعلية للموقع.
        </p>
      </div>

      {/* حقوق المستخدم - تمتد على عرض الشبكة */}
      <div className="lg:col-span-2 bg-secondary/30 p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        
        <h3 className="text-xl font-black text-foreground mb-10 flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <Scale className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          حقوقك كمستخدم
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {userRights.map((item, idx) => (
            <div key={idx} className="space-y-3 p-4 rounded-2xl transition-colors hover:/40 group/item">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary opacity-50 group-hover/item:opacity-100 transition-opacity" />
                <h4 className="text-foreground font-black text-sm">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-[12px] leading-relaxed group-hover/item:text-foreground/80 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}