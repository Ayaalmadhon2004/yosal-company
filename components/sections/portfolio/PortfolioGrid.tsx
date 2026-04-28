"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2, FolderOpen } from "lucide-react";

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
  // ... يمكنك إكمال المصفوفة
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("الكل");
  const [projects, setProjects] = useState<any[]>(mockProjects);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async (categorySlug: string) => {
    setLoading(true);
    try {
      // محاكاة تأخير بسيط لتجربة UI أفضل
      await new Promise(resolve => setTimeout(resolve, 400));
      
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
      setProjects(categorySlug === "الكل" ? mockProjects : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentCategory = categoryMapping.find(c => c.name === activeTab);
    fetchProjects(currentCategory?.slug || "الكل");
  }, [activeTab]);

  return (
    <section className="py-20 " dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* قائمة الفلاتر */}
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

        {/* حالة التحميل */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-muted-foreground animate-pulse font-medium">جاري استعراض الإبداع...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-secondary/10 rounded-[2.5rem] p-4 border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
              >
                {/* حاوية الصورة */}
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                  <Image 
                    src={project.image_url} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* محتوى الكرت */}
                <div className="px-3 pb-4 text-right flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      {project.category_name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description || "استراتيجية متكاملة تهدف إلى تعزيز الوجود الرقمي وتحقيق أفضل النتائج المرجوة."}
                  </p>
                  
                  {/* زر استعراض المشروع */}
                  <div className="mt-auto pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end">
                    <span className="text-primary text-xs font-black flex items-center gap-1 cursor-pointer">
                      تفاصيل المشروع
                      <span className="text-lg">←</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* حالة عدم وجود بيانات */}
        {!loading && projects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-secondary/10 rounded-[3rem] border border-dashed border-white/10">
            <FolderOpen className="w-12 h-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-medium">لا توجد مشاريع في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </section>
  );
}