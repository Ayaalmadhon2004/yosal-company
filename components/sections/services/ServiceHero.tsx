"use client";
import Image from "next/image";

export default function ServiceHero({ 
  badge, 
  title, 
  highlightText, 
  description, 
  mainImage, 
  stats,
  subtitle 
}: any) {
  
  const isValidImage = typeof mainImage === "string" && mainImage.trim() !== "";

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
    <section className="relative pt-32 pb-20 overflow-visible bg-[#0F111A]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF8A00]/10 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-right" dir="rtl">
          
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] text-sm font-bold mb-6 tracking-wide border border-[#FF8A00]/20">
              {badge}
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight font-cairo">
              {title} <br />
              <span className="text-[#FF8A00]">{highlightText}</span>
            </h1>

            {subtitle && (
              <p className="text-[#FF8A00] text-lg font-bold mb-4 italic">
                {subtitle}
              </p>
            )}

            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 justify-start">
              {/* تعديل الـ Accessibility: إضافة aria-label ووصف واضح */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب لبدء مشروعك"
                className="px-10 py-5 rounded-2xl bg-[#FF8A00] text-white font-extrabold flex items-center gap-2 hover:bg-[#FF8A00]/90 transition-all shadow-lg shadow-[#FF8A00]/20 hover:scale-105 active:scale-95"
              >
                ابدأ رحلتك الآن
              </a>
              
              {(badge?.toUpperCase().includes("PLANNING") || badge?.toUpperCase().includes("DEVELOPMENT")) && (
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="احجز استشارة مجانية مع فريقنا"
                  className="px-10 py-5 rounded-2xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  احجز استشارة مجانية
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="relative overflow-visible">
              
              {stats && (
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-30 bg-[#1A1C2E]/90 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-5 transition-transform group-hover:-translate-y-2 duration-500">
                  <div className="text-4xl md:text-5xl font-black text-[#FF8A00] drop-shadow-lg">
                    {stats.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 font-bold leading-tight max-w-[100px]">
                    {stats.label}
                  </div>
                </div>
              )}

              <div className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-2xl aspect-square z-10 bg-[#1A1C2E]">
                {isValidImage ? (
                  <>
                    <Image 
                      src={mainImage} 
                      alt={`تصميم يعبر عن ${title}`} // تحسين الـ SEO والـ Alt text
                      fill
                      priority // هذا يحل مشكلة LCP (أولوية التحميل)
                      sizes="(max-width: 768px) 100vw, 50vw" // يخبر المتصفح بحجم الصورة مسبقاً
                      quality={85} // تقليل الحجم دون التأثير على الجودة
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/60 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/10 font-black text-4xl">YOOSIL</span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#FF8A00]/20 blur-[100px] rounded-full -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}