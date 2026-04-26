"use client";
import Image from "next/image";

export default function ServiceHero({ 
  badge, 
  title, 
  highlightText, 
  description, 
  mainImage, 
  stats,
  subtitle,
  ctaButtons 
}: any) {
  
  const isValidImage = typeof mainImage === "string" && mainImage.trim() !== "";

  const getWhatsAppLink = () => {
    const b = badge.toUpperCase();
    if (b.includes("SOCIAL")) return "https://wa.link/1992gd";
    if (b.includes("WEB") || b.includes("DEVELOPMENT")) return "https://wa.link/e56rm6";
    if (b.includes("CONTENT")) return "https://wa.link/xct02j";
    if (b.includes("SEO")) return "https://wa.link/efvmlr";
    if (b.includes("BRANDING") || b.includes("IDENTITY")) return "https://wa.link/wliy6a";
    if (b.includes("STRATEGIC") || b.includes("PLANNING")) return "https://wa.link/9yy222";
    return "https://wa.me/970597204869"; // رابط افتراضي في حال لم يتطابق شيء
  };

  const whatsappUrl = getWhatsAppLink();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F111A]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF8A00]/10 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 text-right" dir="rtl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] text-sm font-bold mb-6 tracking-wide border border-[#FF8A00]/20">
              {badge}
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {title} <br />
              <span className="text-[#FF8A00]">{highlightText}</span>
            </h1>

            {subtitle && (
              <p className="text-[#FF8A00] text-lg font-bold mb-4">
                {subtitle}
              </p>
            )}

            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 justify-start">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#FF8A00] text-white font-bold flex items-center gap-2 hover:bg-[#FF8A00]/90 transition-all group shadow-lg shadow-[#FF8A00]/20"
              >
              ابدأ رحلتك الآن
              </a>
              
              {(badge.toUpperCase().includes("PLANNING") || badge.toUpperCase().includes("DEVELOPMENT")) && (
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  احجز استشارة مجانية
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-2xl aspect-square">
              {isValidImage ? (
                <>
                <Image 
                  src={mainImage} 
                  alt={title} 
                  fill
                  priority 
                  className="object-cover"
                />
                
                {stats && (
                  <div className="inline-flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-3xl font-black text-[#FF8A00]">{stats.value}</div>
                    <div className="text-sm text-gray-400 font-bold leading-tight">{stats.label}</div>
                  </div>
                )}
                
                </>
                
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <span className="text-white/10 font-black">IMAGE</span>
                </div>
              )}

              {badge.toUpperCase().includes("CONTENT") && (
                <div className="absolute top-8 left-8 bg-[#1A1C2E]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3 animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-white text-xs font-bold italic underline">4K PRODUCTION</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}