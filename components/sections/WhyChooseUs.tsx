import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: any;
}

interface WhyChooseUsProps {
  data: {
    title: string;
    image: string | string[];
    features: Feature[];
    stats?: { value: string; label: string };
  };
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  if (!data) return null;

  return (
    <section className="py-24 bg-[#1A1C2E] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأيمن: النصوص والمميزات */}
          <div dir="rtl">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-12 leading-tight">
              {data.title.split(' ').map((word, i) => 
                word === "يوصل" || word === "هوياتهم؟" ? 
                <span key={i} className="text-[#FF8A00]"> {word}</span> : ` ${word}`
              )}
            </h2>
            
            <div className="space-y-8">
              {data.features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FF8A00]/20 transition-colors shrink-0">
                    <feature.icon className="w-7 h-7 text-[#FF8A00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-gray-400 leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيسر: الصور (مفردة أو مزدوجة) */}
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            {Array.isArray(data.image) ? (
              /* عرض مصفوفة الصور (كما في تصميم البراندنج) */
              <div className="grid grid-cols-2 h-full gap-2 bg-[#1A1C2E]">
                {data.image.map((imgSrc, index) => (
                  <div key={index} className="relative h-full w-full">
                    {imgSrc && (
                      <Image 
                        src={imgSrc} 
                        alt={`${data.title} - ${index}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* عرض صورة واحدة (كما في تصميم البرمجة) */
              data.image && (
                <Image 
                  src={data.image} 
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )
            )}

            {/* بطاقة الإحصائيات البرتقالية */}
            {data.stats && (
              <div className="absolute bottom-8 right-8 bg-[#FF8A00] p-6 rounded-3xl shadow-xl z-20 animate-pulse-slow">
                <div className="text-3xl font-black text-white">{data.stats.value}</div>
                <div className="text-sm text-white/90 font-bold">{data.stats.label}</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}