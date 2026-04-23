import React from "react";
import Image from "next/image";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  mainImage: string;
  stats?: {
    value: string;
    label: string;
  };
}

export default function ServiceHero({ 
  badge, 
  title, 
  highlightText, 
  description, 
  mainImage, 
  stats 
}: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#1A1C2E]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* النصوص - الجهة اليمنى */}
        <div className="order-2 lg:order-1 text-right" dir="rtl">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F58220]/10 text-[#F58220] text-xs font-bold mb-6 tracking-widest uppercase">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {title} <span className="text-[#F58220]">{highlightText}</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 justify-start">
            <button className="bg-[#F58220] text-white px-8 py-4 rounded-full font-bold hover:bg-[#d9731b] transition-all">
              ابدأ رحلتك الآن
            </button>
            <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              احجز استشارة مجانية
            </button>
          </div>
        </div>

        {/* الصورة والإحصائيات - الجهة اليسرى */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src={mainImage} 
              alt={title} 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* كرت الإحصائيات العائم */}
          {stats && (
            <div className="absolute -bottom-10 -right-10 bg-[#F58220] p-8 rounded-[30px] shadow-2xl max-w-[220px] text-right" dir="rtl">
              <div className="text-4xl font-black text-white mb-2">{stats.value}</div>
              <p className="text-white/80 text-sm leading-tight">{stats.label}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}