import { Database } from "lucide-react";

export default function DataCollectionSection() {
  const points = [
    { id: "01", title: "المعلومات الشخصية", desc: "مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند التواصل معنا." },
    { id: "02", title: "بيانات الاستخدام التلقائية", desc: "بما في ذلك عنوان IP ونوع المتصفح وسلوك التصفح." },
    { id: "03", title: "المعلومات المهنية", desc: "المقدمة أثناء طلب استشارات التسويق الرقمي." },
  ];

  return (
    <div className="bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800" dir="rtl">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-[#F58220]/20 rounded-lg flex items-center justify-center">
          <Database className="text-[#F58220]" />
        </div>
        <h3 className="text-2xl font-black text-white">جمع البيانات</h3>
      </div>
      <div className="space-y-4">
        {points.map((p) => (
          <div key={p.id} className="bg-[#0a0d1d] p-6 rounded-2xl border border-gray-800/50 flex gap-6 items-center text-right">
            <span className="text-[#F58220] font-black text-xl">{p.id}</span>
            <div>
              <h4 className="font-bold text-white mb-1">{p.title}</h4>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}