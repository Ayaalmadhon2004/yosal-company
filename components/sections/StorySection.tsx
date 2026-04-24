import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-24 bg-[#0a0d1d] overflow-hidden text-right" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-gray-800 -rotate-3 transition-transform hover:rotate-0 duration-700">
              <Image 
                src="/assets/about (2).png" 
                alt="قصة يوصل"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            {/* تأثير الإضاءة خلف الصورة */}
            <div className="absolute -inset-4 bg-[#F58220]/20 blur-[80px] rounded-full -z-10" />
          </div>

          {/* 2. المحتوى النصي والإحصائيات */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#F58220] font-bold tracking-widest text-sm mb-4 block">قصتنا</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                نحن لا نصنع حملات، <span className="text-[#F58220]">نحن نبني جسوراً.</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-loose max-w-2xl">
              بدأت "يوصل" من فكرة بسيطة: كيف يمكن للتسويق الرقمي أن يكون محركاً حقيقياً للنمو وليس مجرد تكلفة إضافية؟ انطلقنا لنغير مفهوم الوصول، حيث لا نكتفي بزيادة الأرقام، بل نضمن وصول رسالتك للجمهور الصحيح في الوقت المثالي.
            </p>

            {/* الإحصائيات */}
            <div className="flex gap-12 pt-8">
              <div className="text-right">
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">+500</h4>
                <p className="text-gray-500 font-bold">مشروع ناجح</p>
              </div>
              <div className="text-right">
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">98%</h4>
                <p className="text-gray-500 font-bold">رضا العملاء</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}