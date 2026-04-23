import React from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
// استيراد النوع (Interface) لضمان توافق البيانات
import { Testimonial } from "@/constants/servicesData";

interface TestimonialsProps {
  data: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  // إذا لم تكن هناك شهادات لهذه الخدمة، لا نعرض القسم
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-brand-dark text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-black mb-4">ماذا يقول عملاؤنا</h2>
        <p className="text-body text-gray-400 mb-16">ثقة شركائنا هي سر نجاحنا المستمر</p>

        {/* عرض الشهادات الممررة ديناميكياً */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="bg-brand-navy/30 p-8 rounded-[32px] border border-white/5 text-right flex flex-col justify-between transition-all hover:border-brand-orange/20"
            >
              <div>
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-body leading-relaxed text-gray-300 mb-8 italic">
                  "{item.content}"
                </p>
              </div>
              
              <div className="flex items-center justify-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-tag-lg font-bold text-brand-orange">
                  {item.avatarLetter}
                </div>
                <div className="text-right">
                  <p className="font-bold text-tag-lg">{item.name}</p>
                  <p className="text-tag-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل (يمكنك تفعيلها لاحقاً باستخدام Swiper أو Slider) */}
        <div className="flex justify-center gap-4">
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}