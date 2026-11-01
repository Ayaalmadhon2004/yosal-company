import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { resolveImageUrl, shouldSkipOptimization } from "@/components/sections/portfolio/imageUtils";
import { Cloud,  ShieldCheck, LucideIcon } from "lucide-react";

// دالة ربط أيقونات الـ API بمكتبة الأيقونات
const getIcon = (iconName: string): LucideIcon => {
  const icons: { [key: string]: LucideIcon } = {
    "heroicon-o-cloud": Cloud,
    "heroicon-o-presentation-chart-line":Cloud,
    "heroicon-o-shield-check": ShieldCheck,
  };
  return icons[iconName] || Cloud;
};

// تعريف الواجهات
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface ProjectData {
  title: string;
  full_description: string;
  image_url: string;
  stats: { label: string; number: string }[];
  challenges: string[];
  strategic_solutions: { title: string; description: string; icon: string }[];
  gallery: string[];
  testimonial?: Testimonial;
}

async function getProjectDetails(slug: string) {
  try {
    const res = await fetch(`https://yosaal-website-backend.onrender.com/api/v1/projects/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project: ProjectData | null = await getProjectDetails(slug);
  if (!project) return { title: "المشروع غير موجود | يوصل", robots: { index: false } };

  const description = (project.full_description || "").replace(/\s+/g, " ").trim().slice(0, 160);
  const image = resolveImageUrl(project.image_url);
  return {
    title: `${project.title} | معرض أعمال يوصل`,
    description,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: project.title,
      description,
      url: `/portfolio/${slug}`,
      type: "article",
      locale: "ar_SA",
      images: [{ url: image, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description, images: [image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project: ProjectData | null = await getProjectDetails(slug);
  
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-32" dir="rtl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* الجزء العلوي */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">{project.full_description}</p>
          </div>

          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src={resolveImageUrl(project.image_url)}
              alt={`صورة مشروع ${project.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 576px"
              className="object-cover"
              unoptimized={shouldSkipOptimization(resolveImageUrl(project.image_url))}
            />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-black mb-8 text-white">المشكلة (التحدي)</h2>
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
            <ul className="space-y-6">
              {project.challenges?.map((challenge, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <span aria-hidden="true" className="text-red-500 font-bold text-xl mt-0.5">×</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* قسم الحل الاستراتيجي (مدمج ديناميكياً) */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">الحل الاستراتيجي</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {project.strategic_solutions?.map((sol, index) => {
              const IconComponent = getIcon(sol.icon);
              return (
                <div key={index} className="bg-[#1A1A2E] p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary transition-colors">
                    <IconComponent aria-hidden="true" className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{sol.description}</p>
                </div>
              );
            })}
          </div>
        </section>


        {/* معرض الصور */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">صور تفصيلية للمشروع</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery?.map((imgUrl, i) => (
              <div key={i} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <Image
                  src={resolveImageUrl(imgUrl)}
                  alt={`${project.title} - صورة تفصيلية ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized={shouldSkipOptimization(resolveImageUrl(imgUrl))}
                />
              </div>
            ))}
          </div>
        </section>

        {/* قسم النتائج */}
        <section className="py-20 my-20 bg-white/5 rounded-[3rem] border border-white/5">
          <div className="text-center mb-16"><h2 className="text-3xl font-black text-white">نتائج ملموسة</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            {project.stats?.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-primary mb-3">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-gradient-to-l from-[#B8570B] to-background rounded-4xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* النص */}
          <div className="text-white space-y-4 text-center md:text-right">
            <h2 className="text-h1">هل تريد تحقيق نتائج مماثلة؟</h2>
            <p className="text-body opacity-90">
              دعنا نتحدث عن كيف يمكننا نقل مشروعك إلى المستوى التالي.
            </p>
          </div>

          {/* الزر */}
          <Link href="/contact" className="bg-white text-[#B8570B] px-10 py-5 rounded-xl btn-text hover:bg-opacity-90 transition-all duration-300 shadow-lg whitespace-nowrap">
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}

