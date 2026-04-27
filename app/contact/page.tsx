import Image from "next/image";
import { contactHeroData, contactMethods } from "@/constants/siteData";
import ContactForm from "@/components/form/ContactForm";
import { MessageSquare, Calendar, Mail } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

export default function ContactPage() {
  const icons: any = { MessageSquare, Calendar, Mail };

  return (
    <main className="min-h-screen bg-[#0a0d1d] py-20 px-4">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2 text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {contactHeroData.title} <span className="text-orange-500">{contactHeroData.highlightText}</span> 🚀
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{contactHeroData.description}</p>
          <AppButton
              variant="orange" 
              size="lg" 
              className="rounded-full font-bold px-8 py-3" 
            >
              ابدأ رحلتك الآن
          </AppButton>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image src={contactHeroData.image} alt="Contact" fill className="object-contain rounded-2xl" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 px-6">
        {contactMethods.map((method) => {
          const IconComponent = icons[method.icon] || MessageSquare;
          
          return (
            <div 
              key={method.id} 
              className={`${method.color} p-8 rounded-[2rem] border ${method.accent || 'border-white/5'} transition-all duration-300 text-right flex flex-col h-full`}
            >
              {/* أيقونة القسم */}
              <div className="bg-[#252a46] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ml-auto shadow-lg">
                <IconComponent className="text-[#F58220] w-7 h-7" />
              </div>

              {/* النصوص */}
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {method.desc}
              </p>

              {/* الأزرار - مع معالجة خاصة للواتساب الأخضر */}
              {method.isSpecial ? (
                <a 
                  href={method.link}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb956] text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/20 group"
                >
                  <span>{method.action}</span>
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
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

      <section className="max-w-4xl mx-auto text-center">
        <p className="text-orange-500 font-bold mb-2">نموذج التواصل المباشر</p>
        <h2 className="text-3xl font-bold text-white mb-10">أخبرنا عن طموحك</h2>
        <ContactForm />
      </section>
    </main>
  );
}