"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessageSquare, Calendar } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  mainImage?: string;
  stats?: { value: string; label: string };
  subtitle?: string;
}

export default function ServiceHero({ 
  badge, 
  title, 
  highlightText, 
  description, 
  mainImage, 
  stats,
  subtitle 
}: ServiceHeroProps) {
  
  const isValidImage = typeof mainImage === "string" && mainImage.trim() !== "";

  // منطق روابط الواتساب المخصصة
  const getWhatsAppLink = () => {
    const b = badge?.toUpperCase() || "";
    if (b.includes("SOCIAL")) return "https://wa.link/1992gd";
    if (b.includes("WEB") || b.includes("DEVELOPMENT")) return "https://wa.link/e56rm6";
    if (b.includes("CONTENT")) return "https://wa.link/xct02j";
    if (b.includes("SEO")) return "https://wa.link/efvmlr";
    if (b.includes("BRANDING") || b.includes("IDENTITY")) return "https://wa.link/wliy6a";
    if (b.includes("STRATEGIC") || b.includes("PLANNING")) return "https://wa.link/9yy222";
    return "https://wa.me/970597204869";
  };

  const whatsappUrl = getWhatsAppLink();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden ">
      {/* تأثير الإضاءة الخلفي الموحد */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-right" dir="rtl">
          
          {/* محتوى النصوص */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wide border border-primary/20">
              {badge}
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              {title} <br />
              <span className="text-primary">{highlightText}</span>
            </h1>

            {subtitle && (
              <p className="text-primary text-lg font-bold mb-4 italic">
                {subtitle}
              </p>
            )}

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* الأزرار التفاعلية */}
            <div className="flex flex-wrap gap-4 mb-12 justify-start">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl bg-primary text-white font-extrabold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 group"
              >
                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                ابدأ رحلتك الآن
              </a>
              
              {(badge?.toUpperCase().includes("PLANNING") || badge?.toUpperCase().includes("DEVELOPMENT")) && (
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-2xl bg-white/5 text-foreground font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-3 group"
                >
                  <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  احجز استشارة مجانية
                </a>
              )}
            </div>
          </div>

          {/* الجانب البصري: الصورة والإحصائيات */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative overflow-visible">
              
              {stats && (
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-30 bg-secondary/90 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-5 transition-transform group-hover:-translate-y-2 duration-500">
                  <div className="text-4xl md:text-5xl font-black text-primary drop-shadow-lg">
                    {stats.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-bold leading-tight max-w-[100px]">
                    {stats.label}
                  </div>
                </div>
              )}

              <div className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-2xl aspect-square z-10 bg-secondary/50">
                {isValidImage ? (
                  <>
                    <Image 
                      src={mainImage} 
                      alt={`تصميم يمثل خدمة ${title}`}
                      fill
                      priority 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/5 font-black text-6xl tracking-tighter uppercase italic">Yoosil</span>
                  </div>
                )}
              </div>
            </div>
            {/* توهج خلف الصورة */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
          </div>

        </div>
      </div>
    </section>
  );
}