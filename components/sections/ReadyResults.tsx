"use client";

import { AppButton } from "../ui/AppButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ReadySectionProps {
  variant?: "style1" | "style2";
}

const LINKS = {
  FREE_CONSULTATION: "https://wa.link/4ddhsa",
  PORTFOLIO: "/portfolio"
};

export default function ReadySection({ variant = "style1" }: ReadySectionProps) {
  const isStyle1 = variant === "style1";

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden bg-[#0F1121]"
      dir="rtl" 
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.3]">
          {isStyle1 ? "جاهز تضاعف مبيعاتك؟" : "جاهز لنصنع النجاح سوياً؟"}
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          {isStyle1 ? (
            <>
              لا تترك نمو مشروعك للصدفة. احصل على <span className="text-white font-bold">استشارة مجانية</span> اليوم واكتشف كيف يمكننا تحويل مشروعك لقصة نجاح جديدة.
            </>
          ) : (
            <>
              دعنا نناقش كيف يمكن لـ <span className="text-primary font-black text-2xl mx-1 inline-block">"يوصل"</span> أن تضاعف من وصول علامتك التجارية وتحقق أهدافك التسويقية بذكاء.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* الزر البرتقالي - تم إلغاء الـ Padding الداخلي للزر ونقله للرابط */}
          <AppButton 
            variant="orange" 
            size="lg" 
            className="p-0 overflow-hidden w-full sm:w-auto min-w-[240px] h-14 rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
          >
            <a 
              href={LINKS.FREE_CONSULTATION} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center px-8 text-xl font-bold"
            >
              {isStyle1 ? "إبدأ رحلتك الآن" : "ابدأ مشروعك الآن"}
            </a>
          </AppButton>
          
          {/* الزر الأبيض - بنفس التكتيك لضمان التماثل تماماً */}
          <AppButton 
            variant="outline" 
            size="lg" 
            className="p-0 overflow-hidden w-full sm:w-auto min-w-[240px] h-14 rounded-full bg-white text-black border-none hover:bg-gray-100 transition-all"
          >
            <Link 
              href={isStyle1 ? LINKS.PORTFOLIO : LINKS.FREE_CONSULTATION}
              className="w-full h-full flex items-center justify-center px-8 text-xl font-bold"
            >
              {isStyle1 ? "شاهد أعمالنا" : "احجز استشارة مجانية"}
            </Link>
          </AppButton>

        </div>
      </div>
    </section>
  );
}