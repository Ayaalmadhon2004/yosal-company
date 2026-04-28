import Image from "next/image";
import { whyUsData } from "@/constants/siteData";
import { BarChart3, MapPin, FileText, UserCheck } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-24  text-foreground overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black mb-12">
              لماذا يختارنا <span className="text-primary">عمالقة السوق؟</span>
            </h2>

            <div className="space-y-8">
              {whyUsData.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    {item.id === 1 && <BarChart3 className="text-primary" />}
                    {item.id === 2 && <MapPin className="text-primary" />}
                    {item.id === 3 && <FileText className="text-primary" />}
                    {item.id === 4 && <UserCheck className="text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-sub-title font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-tag-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative aspect-square rounded-4xl overflow-hidden border border-white/10">
            <Image 
              src="/assets/dashboard.png"
              alt="لماذا يختارنا عمالقة السوق"
              fill
              className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}