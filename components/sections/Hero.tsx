import { MessageCircle } from "lucide-react";
import { AppButton } from "../ui/AppButton";
import DataForm from "../form/DataForm";
import Link from "next/link";

export default function Hero() {
  const WHATSAPP_LINK = "https://wa.link/4ddhsa";

  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden pt-20 pb-12" dir="rtl">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 text-right">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
              <span className="text-primary text-tag-sm font-bold">
                وكالة تسويق رقمي متخصصة للسوق السعودي
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-8">
              نصيغ الفخامة <br />
               الرقمية لتقود علامتك <br />
              <span className="text-primary">لمكانتها المستحقة</span>
            </h1>
            
            <p className="text-muted-foreground text-body mb-12 max-w-xl leading-relaxed">
              استراتيجيات تسويقية تُرسم بدقة، وهويات بصرية تفيض بالجمال؛ 
              لنمنح اسمك حضوراً ذكياً يتحدث عنك في كل مكان.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-start items-center">
              <AppButton
                variant="outline"
                size="lg"
                className="px-12 py-7 flex items-center gap-3 transition-all"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <span className="order-1">واتساب</span>
                </a>
              </AppButton>

              <AppButton
                asChild
                variant="primary"
                size="lg"
                className="px-12 py-7 transition-all duration-300"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  ابدأ رحلتك الآن
                </a>
              </AppButton>
            </div>

          </div>

          {/* الجانب الأيسر: الفورم */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md relative group">
              {/* تأثير إضاءة خلف الفورم */}
              <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-700" />
              <div className="glass-card p-1 rounded-[40px] border-none">
                 <DataForm />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}