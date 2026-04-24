import Image from "next/image";
import { contactHeroData, contactMethods } from "@/constants/siteData";
import ContactForm from "@/components/form/ContactForm";
import { MessageSquare, Calendar, Mail } from "lucide-react";

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
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold">ابدأ رحلتك الآن</button>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image src={contactHeroData.image} alt="Contact" fill className="object-contain rounded-2xl" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {contactMethods.map((method) => {
          const IconComponent = icons[method.icon];
          return (
            <div key={method.id} className="bg-[#161a35] p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all text-right">
              <div className={`${method.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 ml-auto`}>
                <IconComponent className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{method.desc}</p>
              <a href={method.link} className="block text-center border border-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
                {method.action}
              </a>
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