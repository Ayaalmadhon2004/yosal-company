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
    <section className="py-20 bg-brand-dark text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <p className="text-brand-orange text-tag-sm font-bold mb-4">مسيرة من الإبداع</p>
        <h2 className="text-4xl font-black mb-16">أرقام تتحدث عن نجاحاتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-brand-navy/40 p-10 rounded-[40px] border border-white/5 flex flex-col items-center group hover:border-brand-orange/30 transition-all">
              <div className="bg-brand-orange p-4 rounded-2xl mb-6 shadow-[0_0_20px_rgba(245,130,32,0.3)]">
                {stat.icon === "chart-line" && <Lightbulb className="h-8 w-8 text-white" />}
                {stat.icon === "shopping-cart" && <ShoppingBag className="h-8 w-8 text-white" />}
                {stat.icon === "code" && <Code2 className="h-8 w-8 text-white" />}
                {stat.icon === "video" && <Video className="h-8 w-8 text-white" />}
              </div>
              <span className="text-5xl font-black mb-4 text-brand-orange">{stat.count}</span>
              <h3 className="text-sub-title mb-4">{stat.title}</h3>
              <p className="text-gray-400 text-tag-lg leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}