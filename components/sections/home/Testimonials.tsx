"use client";

import React from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  job_title: string; 
  comment: string;    
  rating: number;     
  avatar_url: string; 
}

interface TestimonialsProps {
  data: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 text-foreground bg-transparent" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-black mb-4">ماذا يقول عملاؤنا</h2>
        <p className="text-muted-foreground mb-16">ثقة شركائنا هي سر نجاحنا المستمر</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            /* الحل: دمج الـ ID مع الـ Index لضمان فرادة الـ Key تماماً */
            <div 
              key={`testimonial-${item.id}-${index}`} 
              className="glass-card p-8 rounded-4xl text-right flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border-none"
            >
              <div>
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={`star-${item.id}-${i}`} // إضافة Key فريد للنجوم أيضاً
                      className={`h-4 w-4 ${i < item.rating ? "fill-primary text-primary" : "text-muted/30"}`} 
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-gray-300 mb-8 italic font-medium">
                  {`"${item.comment}"`}
                </p>
              </div>
              
              <div className="flex items-center justify-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-brand-navy flex items-center justify-center">
                  {item.avatar_url && item.avatar_url.trim() !== "" ? (
                    <Image 
                      src={item.avatar_url} 
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized 
                    />
                  ) : (
                    <span className="text-primary font-bold text-lg uppercase">
                      {item.name ? item.name.charAt(0) : "A"}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.job_title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل - تأكدي أن الأيقونات لها Keys إذا لزم الأمر في بعض النسخ */}
        <div className="flex justify-center gap-4">
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group">
            <ChevronRight className="h-5 w-5 group-hover:text-white text-muted-foreground" />
          </button>
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group">
            <ChevronLeft className="h-5 w-5 group-hover:text-white text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}