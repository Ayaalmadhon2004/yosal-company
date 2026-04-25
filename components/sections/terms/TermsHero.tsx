export default function TermsHero() {
  return (
    <section className="pt-32 pb-12 px-6" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <span className="text-[#F58220] font-bold text-sm mb-4 block">السياسات القانونية</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">شروط <span className="text-[#F58220]">الخدمة</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed">في "يوصل"، نلتزم بالشفافية والوضوح في كافة تعاملاتنا الرقمية. هذه الاتفاقية تنظم العلاقة القانونية بين الوكالة وعملائها لضمان أفضل تجربة تسويقية.</p>
        </div>
        <div className="bg-[#1A1C2E] p-8 rounded-[2rem] border border-gray-800 text-center flex flex-col justify-center">
          <span className="text-gray-400 block mb-2 font-bold">آخر تحديث</span>
          <span className="text-[#F58220] text-2xl font-black block">15 أكتوبر</span>
          <span className="text-gray-500">2024</span>
        </div>
      </div>
    </section>
  );
}