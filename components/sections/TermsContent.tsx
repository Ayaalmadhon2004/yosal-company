import React from "react";
import { CheckCircle2, Copyright, Box, UserCheck } from "lucide-react";

export default function TermsContent() {
  return (
    <section className="py-12 px-6" dir="rtl">
      <div className="container mx-auto space-y-12">
        
        {/* سطر شروط الاستخدام والملكية الفكرية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. كرت شروط الاستخدام الطويل */}
          <div className="lg:col-span-8 bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-white">شروط الاستخدام</h3>
              <Box className="text-[#F58220] w-6 h-6" />
            </div>
            <p className="text-gray-400 leading-loose text-lg">
              باستخدامك لموقع يوصل أو خدماتنا، فإنك توافق صراحة على الالتزام بهذه الشروط. نحن نحتفظ بالحق في تحديث هذه البنود في أي وقت، وسيتم إخطار المستخدمين النشطين بأي تغييرات جوهرية.
            </p>
            <p className="text-gray-400 leading-loose text-lg mt-4">
              يجب ألا يتم استخدام خدماتنا لأي غرض غير قانوني أو غير مصرح به. يلتزم المستخدم بتقديم معلومات دقيقة ومحدثة عند طلب أي استشارة أو خدمة تسويقية.
            </p>
          </div>

          {/* 2. سكشن الملكية الفكرية مع الصورة التقنية */}
          <div className="lg:col-span-4 space-y-6">
             {/* هنا تضعين الصورة التقنية التي تظهر في التصميم */}
            <div className="aspect-square bg-[#1A1C2E] rounded-[2rem] overflow-hidden border border-gray-800 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/10 to-transparent opacity-50" />
                <div className="flex items-center justify-center h-full">
                    {/* استبدلي هذا بـ <img src="/legal-tech.png" /> */}
                    <div className="w-32 h-32 bg-[#F58220]/20 rounded-full blur-3xl animate-pulse" />
                </div>
            </div>
          </div>
        </div>

        {/* سطر اتفاقية الخدمة والملكية الفكرية التفصيلية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* الملكية الفكرية */}
          <div className="lg:col-span-7 bg-[#0d1021] p-10 rounded-[2.5rem] border border-gray-800/50">
            <div className="flex items-center gap-4 mb-8">
              <Copyright className="text-[#F58220] w-8 h-8" />
              <h3 className="text-2xl font-black text-white">الملكية الفكرية</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              جميع المحتويات، التصاميم، الأكواد البرمجية، والاستراتيجيات التي تطورها يوصل تظل ملكية فكرية للوكالة حتى يتم سداد كامل المستحقات المالية المتفق عليها، وبعد ذلك تنتقل ملكية المخرجات النهائية للعميل.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1A1C2E] p-6 rounded-2xl border border-gray-800 text-center">
                <span className="text-[#F58220] font-black block mb-1">للوكالة</span>
                <span className="text-gray-500 text-xs leading-relaxed">حق عرض العمل في معرض أعمالها</span>
              </div>
              <div className="bg-[#1A1C2E] p-6 rounded-2xl border border-gray-800 text-center">
                <span className="text-[#F58220] font-black block mb-1">للعميل</span>
                <span className="text-gray-500 text-xs leading-relaxed">الملكية الكاملة للمخرجات النهائية</span>
              </div>
            </div>
          </div>

          {/* اتفاقية الخدمة */}
          <div className="lg:col-span-5 bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800">
            <div className="flex items-center gap-4 mb-8">
              <UserCheck className="text-[#F58220] w-8 h-8" />
              <h3 className="text-2xl font-black text-white">اتفاقية الخدمة</h3>
            </div>
            <ul className="space-y-6">
              {[
                "نطاق العمل المحدد في العرض",
                "الجدول الزمني للتسليمات",
                "سياسة الدفع والتحصيل"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-300 font-medium">
                  <CheckCircle2 className="text-[#F58220] w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}