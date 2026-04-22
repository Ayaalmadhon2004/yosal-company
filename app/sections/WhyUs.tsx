import Image from "next/image";
import { whyUsData } from "@/lib/data";
import { BarChart3, MapPin, FileText, UserCheck } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0F112B] text-white overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              لماذا يختارنا <span className="text-[#F58220]">عمالقة السوق؟</span>
            </h2>

            <div className="space-y-8">
              {whyUsData.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#F58220]/50 transition-colors">
                    {item.id === 1 && <BarChart3 className="text-[#F58220]" />}
                    {item.id === 2 && <MapPin className="text-[#F58220]" />}
                    {item.id === 3 && <FileText className="text-[#F58220]" />}
                    {item.id === 4 && <UserCheck className="text-[#F58220]" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#F58220] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="w-full lg:w-1/2 relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="/assets/dashboard.png" // تأكدي من وجود صورة في public
              alt="لماذا يختارنا عمالقة السوق"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0F112B] via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}