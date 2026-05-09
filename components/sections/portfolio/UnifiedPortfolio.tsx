"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2, FolderOpen, ChevronLeft, Send } from "lucide-react";
import Link from "next/link";

// 1. تعريف الفئات الثابتة (من التوثيق الخاص بكِ)
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
  isHomePage?: boolean; // هل نحن في الصفحة الرئيسية؟
  className?: string;
}

export default function UnifiedPortfolio({ isHomePage = false, className }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState("الكل");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. دالة جلب البيانات من الـ API
  const fetchProjects = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = categorySlug === "الكل" ? "" : `?category=${categorySlug}`;
      const response = await fetch(`https://yosaal-website-backend.onrender.com/api/v1/projects${query}`);
      
      if (!response.ok) throw new Error("Connection failed");
      
      const json = await response.json();
      if (json.status === "Success") {
        // إذا كنا في الصفحة الرئيسية نعرض 6 فقط، وإلا نعرض الكل
        const data = isHomePage ? json.data.data.slice(0, 6) : json.data.data;
        setProjects(data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentCategory = categoryMapping.find(c => c.name === activeTab);
    fetchProjects(currentCategory?.slug || "الكل");
  }, [activeTab]);

  return (
    <section className={cn("py-24 w-full bg-background", className)} dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* العناوين (تظهر في الصفحة الرئيسية فقط أو حسب الرغبة) */}
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

        {/* قائمة الفلاتر - تظهر فقط في صفحة المعرض الكامل وليس الرئيسية */}
        {!isHomePage && (
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categoryMapping.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.name)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                href={`/portfolio/${project.slug}`}
                key={project.id} 
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-secondary/10 border border-white/5 block hover:-translate-y-2 transition-all duration-500"
              >
                <Image
                  src={project.image_url || "/assets/pic.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 right-8 left-8 text-right z-10">
                  <span className="text-primary text-xs font-black mb-2 block uppercase">
                    {project.category_name}
                  </span>
                  <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* زر "عرض المزيد" يظهر فقط في الصفحة الرئيسية */}
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