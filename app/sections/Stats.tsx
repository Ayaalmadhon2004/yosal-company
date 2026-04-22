import { statsData } from "@/lib/data";
import { Video, Code2, ShoppingBag, Lightbulb } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-20 bg-[#0F112B] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <p className="text-[#F58220] text-sm font-bold mb-4">مسيرة من الإبداع</p>
        <h2 className="text-4xl font-bold mb-16">أرقام تتحدث عن نجاحاتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="bg-[#161839]/40 p-10 rounded-[40px] border border-white/5 flex flex-col items-center group hover:border-[#F58220]/30 transition-all">
              <div className="bg-[#F58220] p-4 rounded-2xl mb-6 shadow-[0_0_20px_rgba(245,130,32,0.3)]">
                {stat.id === 1 && <Video className="h-8 w-8 text-white" />}
                {stat.id === 2 && <Code2 className="h-8 w-8 text-white" />}
                {stat.id === 3 && <ShoppingBag className="h-8 w-8 text-white" />}
                {stat.id === 4 && <Lightbulb className="h-8 w-8 text-white" />}
              </div>
              <span className="text-5xl font-black mb-4 text-[#F58220]">{stat.count}</span>
              <h3 className="text-xl font-bold mb-4">{stat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}