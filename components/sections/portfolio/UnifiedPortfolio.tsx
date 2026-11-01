"use client";
import { Reveal } from "@/components/ui/Motion";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number | string;
  slug: string;
  title: string;
  image_url?: string;
  category_name?: string;
}

const categoryMapping = [
  { name: "الكل", slug: "الكل" },
  { name: "التسويق الإلكتروني", slug: "altsoyk-alalktrony" },
  { name: "التصوير", slug: "photography" },
  { name: "المتاجر الإلكترونية", slug: "e-commerce" },
  { name: "المواقع الإلكترونية", slug: "web-development" },
  { name: "الموشن جرافيكس", slug: "motion-graphics" },
  { name: "الهويات البصرية", slug: "graphic-design" },
];

interface PortfolioProps {
  isHomePage?: boolean; 
  className?: string;
  initialProjects?: Project[]; // البيانات القادمة من الباك إند عبر الصفحة
}

export default function UnifiedPortfolio({ isHomePage = false, className, initialProjects }: PortfolioProps) {
  // نستخدم البيانات القادمة من props (إن وجدت)، وإلا نبدأ بمصفوفة فارغة
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const [loading, setLoading] = useState(!initialProjects); // تحميل فقط إذا لم تصل بيانات
  const [activeTab, setActiveTab] = useState("الكل");

  // جلب بيانات جديدة من الباك إند عند تغيير التبويب (أو عند غياب البيانات الأولية)
  useEffect(() => {
    if (initialProjects && activeTab === "الكل") return;

    let cancelled = false;
    const categorySlug = categoryMapping.find((c) => c.name === activeTab)?.slug || "الكل";

    const fetchProjects = async () => {
      try {
        const query = categorySlug === "الكل" ? "" : `?category=${categorySlug}`;
        const response = await fetch(`https://yosaal-website-backend.onrender.com/api/v1/projects${query}`);
        if (!response.ok) throw new Error("Connection failed");

        const json = await response.json();
        const projectsData = json.data?.data || json.data || json || [];
        const finalData = isHomePage ? projectsData.slice(0, 6) : projectsData;
        if (!cancelled) setProjects(Array.isArray(finalData) ? finalData : []);
      } catch (error) {
        console.error("Fetch Error:", error);
        if (!cancelled) setProjects([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProjects();
    return () => {
      cancelled = true;
    };
  }, [activeTab, initialProjects, isHomePage]);

  const handleTabChange = (name: string) => {
    setActiveTab(name);
    setLoading(!(initialProjects && name === "الكل"));
  };

  return (
    <section className={cn("py-24 w-full bg-background", className)} dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            معرض <span className="text-primary">الأعمال</span>
          </h2>
          {isHomePage && (
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              نتائج تتحدث وإبداع يتنفس؛ ملخص لمشاريعنا الرقمية.
            </p>
          )}
        </div>

        {!isHomePage && (
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categoryMapping.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleTabChange(cat.name)}
                className={cn(
                  "px-5 sm:px-6 min-h-11 rounded-full text-sm font-bold transition-all duration-300 border",
                  activeTab === cat.name 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-secondary/20 text-muted-foreground border-white/5 hover:border-primary/40 hover:text-primary"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* شبكة المشاريع */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          // كل بطاقة تظهر بشكل مستقل: حاوية Stagger الطويلة لا تصل أبداً لنسبة الظهور المطلوبة على الموبايل فتبقى الشبكة مخفية
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.id} className="h-full" delay={(index % 3) * 0.08}><Link 
                href={`/portfolio/${project.slug}`}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-secondary/10 border border-white/5 block hover:-translate-y-2 transition-all duration-500"
              >
                {project.image_url && (
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 right-6 left-6 sm:bottom-8 sm:right-8 sm:left-8 text-right z-10">
                  <span className="text-primary text-xs font-black mb-2 block uppercase line-clamp-1">
                    {project.category_name}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </Link></Reveal>
            ))}
          </div>
        )}

        {isHomePage && !loading && projects.length > 0 && (
          <div className="mt-16 text-center">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-bold text-lg group"
            >
              عرض المزيد من الأعمال
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}