"use client";
import { useState } from "react";
import Image from "next/image";
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
  
  const getImageUrl = (url?: string) => {
  if (!url || url.trim() === "") return null;
  if (url.startsWith('http')) return url;
  if (url.startsWith('/assets') || url.startsWith('assets')) {
    return url.startsWith('/') ? url : `/${url}`;
  }
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  return `https://yosaal-website-backend.onrender.com${encodeURI(cleanUrl)}`;
  };

  const [imgFailed, setImgFailed] = useState(false);
  const imageUrl = imgFailed ? null : getImageUrl(mainImage);

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

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(230,116,15,0.12)_0%,transparent_65%)] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-right" dir="rtl">
          
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-orange-300 text-sm font-bold mb-6 tracking-wide border border-primary/20">
              {badge}
            </span>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-foreground mb-6 leading-tight">
              {title} <br />
              <span className="text-primary">{highlightText}</span>
            </h1>

            {subtitle && (
              <p className="text-primary text-lg font-bold mb-4 italic">
                {subtitle}
              </p>
            )}

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 justify-start">
              
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-4 rounded-2xl bg-brand-cta text-white font-black flex items-center gap-3 hover:bg-brand-cta-hover transition-all hover:scale-105 active:scale-95 group shadow-lg"
              >
                <MessageSquare aria-hidden="true" className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                ابدأ رحلتك الآن
                <span className="sr-only">(يفتح في نافذة جديدة)</span>
              </a>
              
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-4 rounded-2xl bg-brand-beige text-brand-rust font-black transition-all flex items-center gap-3 hover:opacity-90 hover:scale-105 active:scale-95 group"
                style={{ boxShadow: '0 0 20px 0 rgba(230, 116, 15, 0.45)' }}
              >
                <Calendar aria-hidden="true" className="w-5 h-5 text-brand-rust group-hover:scale-110 transition-transform" />
                احجز استشارة مجانية
                <span className="sr-only">(يفتح في نافذة جديدة)</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative">
              {/* الإحصائيات - Stats */}
              {stats && (
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:-bottom-6 lg:-right-6 max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2.5rem)] lg:max-w-none z-30 bg-secondary/90 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex items-center gap-3 sm:gap-5">
                  <div className="text-3xl sm:text-4xl font-black text-primary shrink-0">
                    {stats.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-bold leading-snug sm:leading-tight sm:max-w-[160px] lg:max-w-[100px]">
                    {stats.label}
                  </div>
                </div>
              )}

              {/* غلاف الصورة */}
              <div className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-2xl aspect-square z-10 bg-brand-surface">
                {imageUrl ? (
                  <>
                    <Image
                        src={imageUrl}
                        alt={`${title} ${highlightText}`.trim()}
                        fill
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 1024px) calc(100vw - 48px), 576px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        onError={() => setImgFailed(true)}
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span aria-hidden="true" className="text-white/5 font-black text-6xl italic">Yoosil</span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}