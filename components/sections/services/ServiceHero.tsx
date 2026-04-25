"use client";
import Image from "next/image";
import { ServiceHeroProps } from "@/types/services"; // استيراد التايبس

export default function ServiceHero({ 
  badge, 
  title, 
  highlightText, 
  description, 
  mainImage, 
  stats 
}: ServiceHeroProps) {
  
  const isValidImage = typeof mainImage === "string" && mainImage.trim() !== "";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#1A1C2E]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 text-right" dir="rtl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] text-sm font-bold mb-6">
              {badge}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {title} <br />
              <span className="text-[#FF8A00]">{highlightText}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-square">
              {isValidImage ? (
                <Image 
                  src={mainImage} 
                  alt={title} 
                  fill
                  priority 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <div className="text-white/10">Image Placeholder</div>
                </div>
              )}

              {stats && (
                <div className="absolute bottom-8 right-8 bg-[#FF8A00] p-6 rounded-3xl shadow-xl z-10">
                  <div className="text-3xl font-black text-white">{stats.value}</div>
                  <div className="text-sm text-white/90 font-bold">{stats.label}</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}