import { Video, Code2, ShoppingBag, Lightbulb } from "lucide-react";

interface StatItem {
  id: number;
  title: string;
  count: string;
  icon: string;
  description: string;
}

interface StatsProps {
  data: StatItem[];
}

export default function Stats({ data }: StatsProps) {
  const stats = Array.isArray(data) ? data : [];

  return (
    <section className="py-20  text-foreground" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <p className="text-primary text-tag-sm font-bold mb-4">مسيرة من الإبداع</p>
        <h2 className="text-4xl font-black mb-16">أرقام تتحدث عن نجاحاتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="glass-card p-10 border-none flex flex-col items-center group transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-primary p-4 rounded-2xl mb-6 shadow-[0_10px_30px_rgba(245,130,32,0.3)] group-hover:scale-110 transition-transform">
                {stat.icon === "chart-line" && <Lightbulb className="h-8 w-8 text-white" />}
                {stat.icon === "shopping-cart" && <ShoppingBag className="h-8 w-8 text-white" />}
                {stat.icon === "code" && <Code2 className="h-8 w-8 text-white" />}
                {stat.icon === "video" && <Video className="h-8 w-8 text-white" />}
              </div>
              
              <span className="text-5xl font-black mb-4 text-primary tracking-tighter">
                {stat.count}
              </span>
              
              <h3 className="text-sub-title mb-4 font-bold">
                {stat.title}
              </h3>
              
              <p className="text-muted-foreground text-tag-lg leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}