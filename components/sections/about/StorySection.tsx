import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-24 bg-[#0a0d1d] overflow-hidden text-right" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#F58220] font-bold tracking-widest text-sm mb-4 block">
                قصتنا
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                نحن لا نصنع حملات، <span className="text-[#F58220]">نحن نبني جسوراً.</span>
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-loose max-w-2xl">
              بدأت "يوصل" من فكرة بسيطة: كيف يمكن للتسويق الرقمي أن يكون محركاً حقيقياً للنمو وليس مجرد تكلفة إضافية؟ انطلقنا لنغير مفهوم الوصول، حيث لا نكتفي بزيادة الأرقام، بل نضمن وصول رسالتك للجمهور الصحيح في الوقت المثالي.
            </p>

            <div className="flex gap-12 pt-8">
              <div className="text-right">
                <span className="text-4xl md:text-5xl font-black text-white mb-2 block">+500</span>
                <p className="text-gray-400 font-bold">مشروع ناجح</p>
              </div>
              <div className="text-right">
                <span className="text-4xl md:text-5xl font-black text-white mb-2 block">98%</span>
                <p className="text-gray-400 font-bold">رضا العملاء</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-gray-800 -rotate-3 transition-transform hover:rotate-0 duration-700 aspect-square">
              <Image 
                src="/assets/about (2).png" 
                alt="فريق عمل وكالة يوصل في نقاش إبداعي"
                width={600}
                height={600}
                priority
                fetchPriority="high"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -inset-4 bg-[#F58220]/20 blur-[80px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}