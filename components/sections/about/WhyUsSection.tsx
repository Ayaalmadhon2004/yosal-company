import { Handshake, Paintbrush, BarChart3 } from "lucide-react"; // استخدام أيقونات مشابهة للتصميم

const FEATURES = [
   {
    title: "قرارات مبنية على البيانات",
    description: "لا نعتمد على التخمين. كل خطوة نخطوها مدعومة بتحليلات عميقة لسوق العمل وسلوك المستهلك لضمان أعلى عائد استثماري.",
    icon: BarChart3,
  },
  {
    title: "إبداع بلا حدود",
    description: "فريقنا الإبداعي يصمم تجارب بصرية ومحتوى يأسر الألباب، مما يجعل علامتك التجارية تبرز في زحام الفضاء الرقمي.",
    icon: Paintbrush,
  },
  {
    title: "شراكة حقيقية",
    description: "نحن لا نعمل \"لك\"، بل نعمل \"معك\". نجاح مشروعك هو نجاح شخصي لنا، ونحن ملتزمون بالشفافية الكاملة في كل مرحلة.",
    icon: Handshake,
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#0a0d1d] text-right" dir="rtl">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white relative inline-block">
            لماذا يختارنا الرواد؟
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-orange-500 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800/50 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500/10 transition-colors">
                <feature.icon className="w-8 h-8 text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}