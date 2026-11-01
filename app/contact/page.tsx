import type { Metadata } from "next";
import Image from "next/image";
import { contactHeroData, contactMethods } from "@/constants/siteData";
import { MessageSquare, Calendar, Mail, FileText, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/form/ContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا | وكالة يوصل",
  description:
    "تواصل مع فريق وكالة يوصل عبر واتساب أو احجز استشارة مجانية أو أرسل تفاصيل مشروعك وسنرد عليك بأسرع وقت ممكن.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "تواصل معنا | وكالة يوصل",
    description: "اختر الطريقة المناسبة للتواصل وسنرد عليك بأسرع وقت ممكن.",
    url: "/contact",
    type: "website",
    locale: "ar_SA",
    images: ["/assets/contactUs.png"],
  },
};

export default function ContactPage() {
  const icons: Record<string, LucideIcon> = { MessageSquare, Calendar, Mail, FileText };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24 text-right" dir="rtl">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {contactHeroData.title} <span className="text-primary">{contactHeroData.highlightText}</span> <span aria-hidden="true">🚀</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {contactHeroData.description}
          </p>
          <a
            href="#form"
            className="inline-flex items-center justify-center h-14 rounded-full bg-[#B34F00] hover:bg-[#9A4400] text-white text-lg font-bold px-10 py-3 transition-colors"
          >
            ابدأ رحلتك الآن
          </a>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image 
            src={contactHeroData.image} 
            alt="تواصل مع فريق وكالة يوصل" 
            fill 
            priority
            fetchPriority="high"
            quality={50}
            sizes="(max-width: 640px) 640px, 576px"
            className="object-contain rounded-2xl" 
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 px-6" dir="rtl">
        {contactMethods.map((method) => {
          const IconComponent = icons[method.icon] || MessageSquare;
          
          return (
            <div 
              key={method.id} 
              className={`${method.color} p-8 rounded-[2rem] border ${method.accent || 'border-white/5'} transition-all duration-300 text-right flex flex-col h-full`}
            >
              <div className="bg-[#252a46] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ml-auto shadow-lg" aria-hidden="true">
                <IconComponent className="text-[#F58220] w-7 h-7" />
              </div>

              <h2 className="text-xl font-black text-white mb-3 tracking-tight">
                {method.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {method.desc}
              </p>

              {method.isSpecial ? (
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#0B6B35] hover:bg-[#095a2c] text-white py-4 rounded-2xl font-bold transition-all shadow-lg group"
                >
                  <span>{method.action}</span>
                  <span className="sr-only">(يفتح في نافذة جديدة)</span>
                  <IconComponent aria-hidden="true" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ) : (
                <a 
                  href={method.link}
                  className="block text-center border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/5 transition-all"
                >
                  {method.action}
                </a>
              )}
            </div>
          );
        })}
      </section>

      <section id="form" className="max-w-4xl mx-auto text-center scroll-mt-28" dir="rtl">
        <p className="text-primary font-bold mb-2">نموذج التواصل المباشر</p>
        <h2 className="text-3xl font-bold text-white mb-10">أخبرنا عن طموحك</h2>
        <ContactForm />
      </section>
    </div>
  );
}