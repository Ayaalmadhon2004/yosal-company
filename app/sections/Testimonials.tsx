import { testimonialsData } from "@/lib/data";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0F112B] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
        <p className="text-gray-400 mb-16">ثقة شركائنا هي سر نجاحنا المستمر</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonialsData.map((item) => (
            <div key={item.id} className="bg-[#161839]/30 p-8 rounded-[32px] border border-white/5 text-right flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F58220] text-[#F58220]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mb-8 italic">
                  "{item.content}"
                </p>
              </div>
              
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-[10px] text-gray-500">{item.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2A2D5A] flex items-center justify-center text-sm font-bold">
                  {item.avatarLetter}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل */}
        <div className="flex justify-center gap-4">
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F58220] transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F58220] transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}