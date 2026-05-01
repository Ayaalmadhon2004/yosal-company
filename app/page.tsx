import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { getDashboardData } from "@/lib/api";
import { faqsData } from "@/constants/siteData"; // تأكدي أن faqsData عبارة عن Object يحتوي على الأقسام
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/home/Problems"; 
import WhyUs from "@/components/sections/home/WhyUs";
import Stats from "@/components/sections/home/Stats";
import CTA from "@/components/sections/home/CTA";
import ReadySection from "@/components/sections/ReadySection";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

const Services = dynamic(() => import("../components/sections/services/Services"), { 
  loading: () => <SkeletonLoader />
});

const Portfolio = dynamic(() => import("../components/sections/portfolio/Portfolio"), { 
  loading: () => <SkeletonLoader />
});

const Testimonials = dynamic(() => import("../components/sections/home/Testimonials"), { 
  loading: () => <SkeletonLoader />
});

const Pricing = dynamic(() => import("../components/sections/home/Pricing"), {
  loading: () => <SkeletonLoader />
});

const Faqs = dynamic(() => import("../components/sections/home/Faqs"), {
  loading: () => <SkeletonLoader />
});

export default async function Home() {
  // جلب البيانات من الـ API مع توفير قيم افتراضية لمنع الأخطاء
  const data = await getDashboardData() || {
    services: [], projects: [], statistics: [], packages: [], testimonials: []
  };

  /**
   * تحويل كائن الأسئلة الشائعة المقسم إلى مصفوفة واحدة للعرض في الصفحة الرئيسية
   * يتم استخدام flat() لدمج المصفوفات الفرعية دون تكرار الهيكلية
   */
  const allFaqs = Object.values(faqsData).flat();

  return (
    <main className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      {/* القسم العلوي الثابت */}
      <Hero />
      <Problems /> 
      
      <div className="flex flex-col relative">
        {/* عرض الخدمات */}
        <Suspense fallback={<SkeletonLoader />}>
          <Services data={data.services} />
        </Suspense>

        {/* عرض معرض الأعمال */}
        <Suspense fallback={<SkeletonLoader />}>
          <Portfolio data={data.projects} />
        </Suspense>

        {/* مميزات الوكالة والإحصائيات */}
        <WhyUs />
        <Stats />

        {/* العروض والأسعار */}
        <Suspense fallback={<SkeletonLoader />}>
          <Pricing data={data.packages} />
        </Suspense>

        {/* آراء العملاء */}
        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials data={data.testimonials} />
        </Suspense>

        {/* دعوة لاتخاذ إجراء */}
        <CTA />

        {/* قسم الأسئلة الشائعة - يتم تمرير كل الأسئلة مدمجة هنا */}
        <Suspense fallback={<SkeletonLoader />}>
          <Faqs data={allFaqs} />
        </Suspense>

        <ReadySection />
      </div>
    </main>
  );
}