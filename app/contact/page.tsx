"use client";
import { RevealSection, Stagger, StaggerItem } from "@/components/ui/Motion";

import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { contactHeroData, contactMethods } from "@/constants/siteData";
import { MessageSquare, Calendar, Mail, type LucideIcon } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

const ContactForm = dynamic(() => import("@/components/form/ContactForm"), {
  ssr: false,
  loading: () => <div className="h-96 w-full bg-white/5 animate-pulse rounded-3xl" />
});

export default function ContactPage() {
  const icons: Record<string, LucideIcon> = { MessageSquare, Calendar, Mail };

  return (
    <main className="min-h-screen bg-background py-16 md:py-20 px-4">
      
      <RevealSection className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 text-right" dir="rtl">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {contactHeroData.title} <span className="text-orange-500">{contactHeroData.highlightText}</span> 🚀
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {contactHeroData.description}
          </p>
          <AppButton
            variant="orange" 
            size="lg" 
            className="rounded-full font-bold px-8 py-3" 
            aria-label="ابدأ رحلتك معنا الآن واحصل على استشارة"
          >
            ابدأ رحلتك الآن
          </AppButton>
        </div>
        <div className="relative w-full md:w-1/2 h-[260px] sm:h-[340px] md:h-[400px]">
          <Image 
            src={contactHeroData.image} 
            alt="تواصل مع فريق وكالة يوصل" 
            fill 
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-2xl" 
          />
        </div>
      </RevealSection>

      <Stagger className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24 px-2 sm:px-6">
        {contactMethods.map((method) => {
          const IconComponent = icons[method.icon] || MessageSquare;
          
          return (
            <StaggerItem 
              key={method.id} 
              className={`${method.color} p-6 sm:p-8 rounded-[2rem] border ${method.accent || 'border-white/5'} transition-all duration-300 text-right flex flex-col h-full`}
            >
              <div className="bg-[#252a46] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ml-auto shadow-lg" aria-hidden="true">
                <IconComponent className="text-[#F58220] w-7 h-7" />
              </div>

              <h2 className="text-xl font-black text-white mb-3 tracking-tight">
                {method.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                {method.desc}
              </p>

              {method.isSpecial ? (
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`تواصل معنا عبر ${method.title}`}
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb956] text-white py-4 rounded-2xl font-bold transition-all shadow-lg group"
                >
                  <span>{method.action}</span>
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ) : (
                <a 
                  href={method.link}
                  aria-label={`${method.action} عبر ${method.title}`}
                  className="block text-center border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/5 transition-all"
                >
                  {method.action}
                </a>
              )}
            </StaggerItem>
          );
        })}
      </Stagger>

      <RevealSection className="max-w-4xl mx-auto text-center" dir="rtl">
        <p className="text-orange-500 font-bold mb-2">نموذج التواصل المباشر</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">أخبرنا عن طموحك</h2>
        <Suspense fallback={<div className="h-96 w-full bg-white/5 animate-pulse rounded-3xl" />}>
          <ContactForm />
        </Suspense>
      </RevealSection>
    </main>
  );
}