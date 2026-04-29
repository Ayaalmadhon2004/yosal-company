"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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

  const isImageArray = Array.isArray(data.image);

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div dir="rtl" className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-12 leading-tight">
              {data.title.split(' ').map((word, i) => {
                const isHighlight = word === "يوصل" || word === "هوياتهم؟";
                return (
                  <span key={`word-${i}`} className={isHighlight ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </h2>
            
            <div className="space-y-8">
              {data.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={`feature-${index}`} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      {feature.description && (
                        <p className="text-muted-foreground leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl group bg-secondary/20 border border-white/5">
            {isImageArray ? (
              <div className="grid grid-cols-2 h-full gap-1">
                {(data.image as string[]).map((imgSrc, index) => (
                  <div key={`img-${index}`} className="relative h-full w-full overflow-hidden">
                    {imgSrc && (
                      <Image 
                        src={imgSrc} 
                        alt={`${data.title} gallery ${index}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        quality={75}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              data.image && (
                <Image 
                  src={data.image as string} 
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              )
            )}

            {data.stats && (
              <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-[2.5rem] shadow-2xl z-20 transition-transform group-hover:-translate-y-2">
                <div className="text-3xl font-black text-white leading-none">{data.stats.value}</div>
                <div className="text-xs text-white/90 font-bold mt-1 uppercase tracking-wider">{data.stats.label}</div>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}