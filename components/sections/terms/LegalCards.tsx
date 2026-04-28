import { Landmark, ShieldAlert, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LegalCards() {
  return (
    <section className="py-16 px-6" dir="rtl" aria-labelledby="legal-heading">
      <h2 id="legal-heading" className="sr-only">معلومات قانونية إضافية</h2>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* كرت حدود المسؤولية - Dark Theme */}
        <div className="lg:col-span-3 bg-secondary/30 p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
          {/* لمسة جمالية خلفية */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-black text-foreground">حدود المسؤولية</h3>
            <ShieldAlert className="text-primary w-8 h-8 transition-transform group-hover:scale-110" aria-hidden="true" />
          </div>
          
          <p className="text-muted-foreground leading-loose mb-8 font-medium text-lg">
            لا تتحمل <span className="text-foreground font-bold">يوصل</span> المسؤولية عن أي خسائر تجارية غير مباشرة، أو فقدان بيانات، أو تعطل في الخدمات ناتج عن منصات الطرف الثالث (مثل فيسبوك، جوجل، أو خدمات الاستضافة).
          </p>
          
          <div className="/50 p-6 rounded-2xl border border-white/5 flex gap-4 items-start backdrop-blur-sm">
            <Info className="text-blue-400 w-6 h-6 shrink-0 mt-1" aria-hidden="true" />
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              نحن نضمن بذل أقصى جهد مهني لتحقيق النتائج، ولكننا لا نضمن نتائج تسويقية محددة نظراً لتقلبات الخوارزميات وظروف السوق.
            </p>
          </div>
        </div>

        {/* كرت القانون الحاكم - Brand Theme */}
        <div className="lg:col-span-2 bg-primary p-10 rounded-[2.5rem] text-primary-foreground text-center flex flex-col justify-center items-center shadow-2xl shadow-primary/20 group transition-all duration-500 hover:-translate-y-1">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:rotate-12">
             <Landmark className="w-10 h-10 opacity-90" aria-hidden="true" />
          </div>
          
          <h3 className="text-2xl font-black mb-4">القانون الحاكم</h3>
          <p className="font-bold leading-loose opacity-90">
            تخضع هذه الاتفاقية وتفسر وفقاً للقوانين والأنظمة المعمول بها في المملكة العربية السعودية، وأي نزاع ينشأ عنها يتم حله ودياً أو من خلال الجهات القضائية المختصة.
          </p>
        </div>

      </div>
    </section>
  );
}