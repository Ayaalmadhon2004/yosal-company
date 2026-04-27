"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categoryMapping = [
  { name: "الكل", slug: "الكل" },
  { name: "التسويق الإلكتروني", slug: "altsoyk-alalktrony" },
  { name: "التصوير", slug: "photography" },
  { name: "التقارير والبروفايلات", slug: "reports" },
  { name: "المتاجر الإلكترونية", slug: "e-commerce" },
  { name: "المواقع الإلكترونية", slug: "web-development" },
  { name: "الموشن جرافيكس", slug: "motion-graphics" },
  { name: "الهويات البصرية", slug: "graphic-design" },
];

const mockProjects = [
  { 
    id: 1, 
    title: "حملة نمو لمتجر أورا", 
    category_name: "التسويق الإلكتروني", 
    description: "استراتيجية متكاملة لزيادة مبيعات متجر أورا للأزياء بنسبة 150% خلال الربع الأول من العام.", 
    image_url: "/portfolio/p1.jpg" 
  },
  { 
    id: 2, 
    title: "هوية تطبيق نقد", 
    category_name: "تطبيق إلكتروني", 
    description: "تطوير هوية بصرية واستراتيجية تسويق لشركة تقنية مالية ناشئة تستهدف جيل الشباب.", 
    image_url: "/portfolio/p2.jpg" 
  },
  { 
    id: 3, 
    title: "عقارات الرفاه", 
    category_name: "موقع إلكتروني", 
    description: "تحويل الحضور الرقمي لمشروع سكني فاخر إلى وجهة جاذبة للمستثمرين بنسب تحويل عالية.", 
    image_url: "/portfolio/p3.jpg" 
  },
  { 
    id: 4, 
    title: "منصة سحاب للحلول", 
    category_name: "تحسين محركات البحث", 
    description: "تحسين محركات البحث SEO وإدارة حملات جوجل المدفوعة لمنصة رائدة في المنطقة B2B.", 
    image_url: "/portfolio/p4.jpg" 
  },
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("الكل");
  const [projects, setProjects] = useState<any[]>(mockProjects);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = categorySlug === "الكل" ? "" : `?category=${categorySlug}`;
      const response = await fetch(`http://localhost:8000/api/v1/projects${query}`);
      
      if (!response.ok) throw new Error("Server disconnected");
      
      const json = await response.json();

      if (json.status === "Success" && json.data.data.length > 0) {
        setProjects(json.data.data);
      } else {
        setProjects(categorySlug === "الكل" ? mockProjects : []);
      }
    } catch (error) {
      setProjects(mockProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentCategory = categoryMapping.find(c => c.name === activeTab);
    fetchProjects(currentCategory?.slug || "الكل");
  }, [activeTab]);

  return (
    <section className="py-20 bg-[#0a0d1d]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categoryMapping.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveTab(cat.name)}
              className={cn(
                "px-5 py-2 rounded-xl text-sm font-medium transition-all border",
                activeTab === cat.name 
                  ? "bg-[#EAE8D9] text-[#0a0d1d] border-[#EAE8D9]" 
                  : "bg-[#161a35] text-gray-400 border-white/5 hover:border-white/20"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-500 py-20">جاري تحميل الأعمال...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[#161a35]/40 rounded-[2.5rem] p-4 border border-white/5 hover:border-orange-500/20 transition-all group flex flex-col h-full"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                  <Image 
                    src={project.image_url} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d]/80 to-transparent opacity-60" />
                </div>

                <div className="px-2 pb-2 text-right flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description || "استراتيجية متكاملة تهدف إلى تعزيز الوجود الرقمي وتحقيق أفضل النتائج المرجوة."}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="text-orange-500 font-bold text-sm tracking-wide">
                      {project.category_name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="text-center text-gray-400 py-10 bg-[#161a35]/20 rounded-3xl border border-dashed border-white/10">
            لا توجد مشاريع في هذا القسم حالياً.
          </div>
        )}
      </div>
    </section>
  );
}