import { AppButton } from "../../ui/AppButton";
import { MessageCircle } from "lucide-react"; // استيراد أيقونة واتساب

export default function CTA() {
  return (
    <section className="py-20" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#B84F08] via-[#A94707] to-[#6E3A0E] px-6 py-12 sm:p-12 md:p-20 text-center shadow-2xl shadow-primary/20">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 leading-[1.2]">
              جاهز لتحقيق نتائج حقيقية؟
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              لا تترك نمو مشروعك للصدفة. انضم لأكثر من 200 علامة تجارية تثق بنا في إدارة وجودها الرقمي وتحويل أهدافها إلى واقع ملموس.
            </p>
            
            <AppButton
              asChild
              size="lg"
              className="bg-white text-[#B84F08] hover:bg-gray-100 rounded-2xl h-auto min-h-14 whitespace-normal px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <a 
                href="https://wa.link/4ddhsa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" aria-hidden="true" /> {/* إضافة الأيقونة */}
                احجز استشارة مجانية الآن
              </a>
            </AppButton>
          </div>

          {/* تأثيرات خلفية للكارد */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}