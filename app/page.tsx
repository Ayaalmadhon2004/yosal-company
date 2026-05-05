// app/page.tsx (أو مسار الصفحة الرئيسية لديكِ)
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { getDashboardData } from "@/lib/api";
import { faqsData, servicesData } from "@/constants/siteData"; // تأكدي أن المسار صحيح كما في ملفاتك
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/home/Problems"; 
import WhyUs from "@/components/sections/home/WhyUs";
import Stats from "@/components/sections/home/Stats";
import CTA from "@/components/sections/home/CTA";
import ReadySection from "@/components/sections/ReadySection";

// مكون التحميل الجمالي
const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20">
    <div className="h-12 w-1/3 bg-white/5 rounded-2xl mb-8" />
    <div className="h-96 w-full bg-white/5 rounded-[2.5rem]" />
  </div>
);

// استيراد المكونات بشكل ديناميكي لتحسين سرعة تحميل الصفحة الأولى
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
  // جلب البيانات من الـ API
  const data = await getDashboardData() || {
    services: [], projects: [], statistics: [], packages: [], testimonials: []
  };

  // 1. تجميع كل الأسئلة من كافة الأقسام (marketing, strategy, web, etc.) في مصفوفة واحدة
  const allFaqs = Object.values(faqsData).flat();

  // 2. اختيار 4 أسئلة عشوائية في كل مرة يتم فيها رندر الصفحة (Server-side)
  const randomFaqs = [...allFaqs]
    .sort(() => Math.random() - 0.5) // خلط المصفوفة عشوائياً
    .slice(0, 4); // قص أول 4 أسئلة بعد الخلط

  return (
    <main className="block w-full font-sans overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Problems /> 
      
      <div className="flex flex-col relative">
        <Suspense fallback={<SkeletonLoader />}>
          <Services data={servicesData} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Portfolio data={data.projects} />
        </Suspense>

        <WhyUs />
        <Stats />

        <Suspense fallback={<SkeletonLoader />}>
          <Pricing data={data.packages} />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <Testimonials data={data.testimonials} />
        </Suspense>

        <CTA />

        <Suspense fallback={<SkeletonLoader />}>
          <Faqs data={randomFaqs} />
        </Suspense>

        <ReadySection />
      </div>
    </main>
  );
}