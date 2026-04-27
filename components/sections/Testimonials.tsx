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
    <section className="py-24 bg-[#0a0d1d] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-black mb-4">ماذا يقول عملاؤنا</h2>
        <p className="text-gray-400 mb-16">ثقة شركائنا هي سر نجاحنا المستمر</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#12162b] p-8 rounded-[32px] border border-white/5 text-right flex flex-col justify-between transition-all hover:border-[#F58220]/20"
            >
              <div>
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < item.rating ? "fill-[#F58220] text-[#F58220]" : "text-gray-600"}`} 
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-gray-300 mb-8 italic font-medium">
                  "{item.comment}"
                </p>
              </div>
              
              <div className="flex items-center justify-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F58220]/20 bg-[#1A1C2E] flex items-center justify-center">
                  {item.avatar_url && item.avatar_url.trim() !== "" ? (
                    <Image 
                      src={item.avatar_url} 
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized // مفيد جداً إذا كانت روابط الصور من localhost أو سيرفر خارجي لم يتم ضبطه في Config
                    />
                  ) : (
                    <span className="text-[#F58220] font-bold text-lg uppercase">
                      {item.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.job_title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التحكم (يمكنكِ ربطها بمكتبة Swiper لاحقاً إذا أردتِ تحريك الكروت) */}
        <div className="flex justify-center gap-4">
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F58220] transition-all group">
            <ChevronRight className="h-5 w-5 group-hover:text-white" />
          </button>
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F58220] transition-all group">
            <ChevronLeft className="h-5 w-5 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}