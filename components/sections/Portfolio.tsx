import Image from "next/image";
import { portfolioData } from "@/constants/siteData";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark w-full text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* العناوين */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            معرض <span className="text-brand-orange">الأعمال</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            نتائج تتحدث وإبداع يتنفس، ملخص لمشاريعنا التي جمعت بين ذكاء الاستراتيجية وجمال التنفيذ
          </p>
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl aspect-square md:aspect-[4/5] bg-brand-navy border border-white/5"
            >
              {/* الصورة */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* التدرج اللوني - الطبقة الشفافة */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-90" />

              {/* نصوص المشروع */}
              <div className="absolute bottom-3 right-3 md:bottom-8 md:right-8 text-right z-10">
                <p className="text-brand-orange text-[10px] md:text-sm mb-1 font-bold tracking-wide uppercase">
                  {project.category}
                </p>
                <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}