import ContactForm from "@/components/form/ContactForm";
import { MessageCircle } from "lucide-react";
import { AppButton } from "../ui/AppButton";

export default function Hero() {
  // الروابط المباشرة بناءً على بياناتك
  const WHATSAPP_LINK = "https://wa.link/4ddhsa"; // رابط استشارة مجانية

  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden pt-20 pb-12" dir="rtl">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 text-right">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_#F58220]" />
              <span className="text-brand-orange text-tag-sm font-bold">
                وكالة تسويق رقمي متخصصة للسوق السعودي
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 font-cairo">
              نصيغ الفخامة <br />
               الرقمية لتقود علامتك <br />
              <span className="text-brand-orange">لمكانتها المستحقة</span>
            </h1>
            
            <p className="text-gray-400 text-body mb-12 max-w-xl">
              استراتيجيات تسويقية تُرسم بدقة، وهويات بصرية تفيض بالجمال؛ 
              لنمنح اسمك حضوراً ذكياً يتحدث عنك في كل مكان.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-start">
              {/* زر واتساب - مرتبط برابط الاستشارة */}
              <AppButton
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-7 flex items-center gap-3 border-white/10"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <span>واتساب</span>
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </a>
              </AppButton>

              {/* زر ابدأ رحلتك الآن - مرتبط برابط الاستشارة */}
              <AppButton
                variant="orange"
                size="lg"
                className="rounded-full px-10 py-7 shadow-[0_10px_30px_rgba(245,130,32,0.3)] hover:scale-105"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  ابدأ رحلتك الآن
                </a>
              </AppButton>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md relative">
              <div className="absolute inset-0 bg-brand-orange/10 blur-[100px] -z-10" />
              <ContactForm />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}