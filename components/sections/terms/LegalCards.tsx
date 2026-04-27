import { Landmark, ShieldAlert, Info } from "lucide-react";

export default function LegalCards() {
  return (
    <section className="py-16 px-6" dir="rtl" aria-labelledby="legal-heading">
      <h2 id="legal-heading" className="sr-only">معلومات قانونية إضافية</h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        <div className="lg:col-span-3 bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800 relative">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-black text-white">حدود المسؤولية</h3>
            <ShieldAlert className="text-[#F58220] w-8 h-8" aria-hidden="true" />
          </div>
          <p className="text-gray-300 leading-loose mb-8 font-medium text-lg">
            لا تتحمل يوصل المسؤولية عن أي خسائر تجارية غير مباشرة، أو فقدان بيانات، أو تعطل في الخدمات ناتج عن منصات الطرف الثالث (مثل فيسبوك، جوجل، أو خدمات الاستضافة).
          </p>
          
          <div className="bg-[#1A1C2E] p-6 rounded-2xl border border-gray-800 flex gap-4 items-start">
            <Info className="text-blue-400 w-6 h-6 shrink-0 mt-1" aria-hidden="true" />
            <p className="text-sm text-gray-300 italic">
              نحن نضمن بذل أقصى جهد مهني لتحقيق النتائج، ولكننا لا نضمن نتائج تسويقية محددة نظراً لتقلبات الخوارزميات وظروف السوق.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#F58220] p-10 rounded-[2.5rem] text-[#0a0d1d] text-center flex flex-col justify-center items-center">
          <Landmark className="w-16 h-16 mb-6 opacity-90" aria-hidden="true" />
          <h3 className="text-2xl font-black mb-4">القانون الحاكم</h3>
          <p className="font-bold leading-loose text-[#0a0d1d]">
            تخضع هذه الاتفاقية وتفسر وفقاً للقوانين والأنظمة المعمول بها في المملكة العربية السعودية، وأي نزاع ينشأ عنها يتم حله ودياً أو من خلال الجهات القضائية المختصة.
          </p>
        </div>

      </div>
    </section>
  );
}