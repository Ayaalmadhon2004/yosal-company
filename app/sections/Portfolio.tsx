import Image from "next/image";
import { portfolioData } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0F112B] w-full text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* العناوين */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">معرض <span className="text-[#F58220]">الأعمال</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نتائج تتحدث وإبداع يتنفس، ملخص لمشاريعنا التي جمعت بين ذكاء الاستراتيجية وجمال التنفيذ
          </p>
        </div>

]        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-[#161839]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F112B] via-transparent to-transparent opacity-80" />


              <div className="absolute bottom-8 right-8 text-right z-10">
                <p className="text-[#F58220] text-sm mb-1 font-bold tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-[#F58220] transition-colors">
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