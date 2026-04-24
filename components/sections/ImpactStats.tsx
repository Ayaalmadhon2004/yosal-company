import { ArrowLeft } from "lucide-react";

export default function ImpactStats() {
  return (
    <section className="py-20" dir="rtl">
      <div className="container mx-auto px-6 text-center">
        <button className="bg-[#1A1C2E] border border-gray-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 mx-auto mb-24 hover:bg-[#252841] transition-all">
          مشاهدة المزيد من الأعمال
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* شريط الإحصائيات الداكن */}
        <div className="bg-[#12162b] rounded-[2.5rem] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 border border-gray-800/50">
          <div className="text-center">
            <h4 className="text-4xl font-black text-white mb-2">+50M</h4>
            <p className="text-gray-400 font-bold">مشاهدات إعلانية</p>
          </div>
          <div className="text-center border-x border-gray-800">
            <h4 className="text-4xl font-black text-[#F58220] mb-2">85%</h4>
            <p className="text-gray-400 font-bold">زيادة في معدل التحويل</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-white mb-2">120+</h4>
            <p className="text-gray-400 font-bold">مشروع ناجح</p>
          </div>
        </div>
      </div>
    </section>
  );
}