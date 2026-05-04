import { Video, Code2, Palette, BarChart3 } from "lucide-react";

// تعريف البيانات يدوياً بناءً على الصورة المرفقة
const statsData = [
  {
    id: 1,
    title: "مشروع صناعة محتوى فيديو",
    count: "597+",
    icon: "video",
    description: "أنظمة برمجية معقدة تم تسليمها بدقة معمارية فائقة الجودة."
  },
  {
    id: 2,
    title: "مشروع برمجي",
    count: "643+",
    icon: "code",
    description: "حلول برمجية مخصصة ساهمت في أتمتة العمليات لشركات كبرى."
  },
  {
    id: 3,
    title: "متجر إلكتروني",
    count: "820+",
    icon: "ecommerce",
    description: "منصات تجارية متكاملة تم تطويرها لتعزيز تجربة التسوق الرقمي."
  },
  {
    id: 4,
    title: "استراتيجية",
    count: "745+",
    icon: "strategy",
    description: "تكريمات وجوائز تم حصدها في مجالات الابتكار المعماري والتقني."
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <p className="text-primary text-sm font-bold mb-4 tracking-[0.2em] uppercase">
          مسيرة من الإبداع
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-white">
          أرقام تتحدث عن نجاحاتنا
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative bg-[#1a1f35]/40 p-8 md:p-10 rounded-[2rem] border border-white/5 transition-all duration-500 hover:bg-[#1a1f35]/60 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-[0_8px_20px_rgba(245,130,32,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {stat.icon === "video" && <Video className="h-7 w-7 text-white" />}
                {stat.icon === "code" && <Code2 className="h-7 w-7 text-white" />}
                {stat.icon === "ecommerce" && <Palette className="h-7 w-7 text-white" />}
                {stat.icon === "strategy" && <BarChart3 className="h-7 w-7 text-white" />}
              </div>
              
              {/* الرقم */}
              <div className="text-5xl md:text-6xl font-black mb-4 text-primary tracking-tight">
                {stat.count}
              </div>
              
              {/* العنوان */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {stat.title}
              </h3>
              
              {/* الوصف */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                {stat.description}
              </p>

              {/* تأثير الإضاءة عند الـ Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/0 group-hover:bg-primary/50 blur-sm transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}