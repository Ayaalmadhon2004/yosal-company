import Image from "next/image";
import { Feature } from "@/constants/servicesData";

interface WhyChooseUsProps {
  data: {
    title: string;
    features: Feature[];
    image: string;
  };
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section className="py-24 bg-[#1A1C2E] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأيمن: الصورة مع العناصر الثابتة (Static Elements) */}
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src={data.image} 
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* البطاقة البرتقالية الثابتة (Static) */}
            <div className="absolute bottom-6 right-6 bg-[#FF8A00] p-5 rounded-2xl shadow-xl z-10 text-center min-w-[140px]">
              <span className="block text-4xl font-black text-white">+99%</span>
              <span className="text-xs font-bold text-white/90 mt-1 block">نسبة رضا العملاء</span>
            </div>
          </div>

          {/* الجانب الأيسر: النصوص الديناميكية */}
          <div className="text-right">
            <h2 className="text-4xl lg:text-5xl font-black mb-12 leading-tight">
              {/* تلوين كلمة "يوصل" تلقائياً إذا وجدت في العنوان */}
              {data.title.includes("يوصل") ? (
                <>
                  {data.title.split("يوصل")[0]}
                  <span className="text-[#FF8A00]">يوصل</span>
                  {data.title.split("يوصل")[1]}
                </>
              ) : data.title}
            </h2>

            <div className="space-y-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  {/* أيقونة ثابتة التصميم، متغيرة الشكل */}
                  <div className="flex-shrink-0 w-14 h-14 bg-[#252841] border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-[#FF8A00] transition-all duration-300 transform group-hover:-rotate-6">
                    <feature.icon className="w-7 h-7 text-[#FF8A00]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF8A00] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md italic font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}