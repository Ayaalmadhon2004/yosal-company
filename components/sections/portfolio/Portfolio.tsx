"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface ProjectItem {
  title: string;
  slug: string;
  category_name: string;
  image_url: string;
}

interface PortfolioProps {
  data: ProjectItem[];
  className?: string;
}

export default function Portfolio({ data, className }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState("الكل");
  const projects = Array.isArray(data) ? data : [];

  // تحديد الأقسام (الأربعة المطلوبة)
  const categories = ["الكل", "هوية بصرية", "تصميم واجهات", "استراتيجية رقمية"];

  const filteredProjects = activeTab === "الكل" 
    ? projects 
    : projects.filter(p => p.category_name === activeTab);

  // عرض أول 6 مشاريع فقط كمثال، والباقي يظهر عند الضغط على زر عرض المزيد (أو الانتقال لصفحة المعرض)
  const displayedProjects = filteredProjects.slice(0, 6);

  return (
    <section 
      id="portfolio" 
      className={cn("py-24 w-full text-foreground bg-background", className)} 
      dir="rtl"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            معرض <span className="text-primary">الأعمال</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            نتائج تتحدث وإبداع يتنفس؛ ملخص لمشاريعنا التي جمعت بين ذكاء الاستراتيجية وجمال التنفيذ الرقمي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <Link 
              href={`/portfolio/${project.slug}`}
              key={index} 
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-secondary/10 border border-white/5 block"
            >
              <Image
                src={project.image_url && project.image_url !== "" ? project.image_url : "/assets/pic.png"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay التدرج اللوني */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 right-6 left-6 text-right z-10 transition-transform duration-500">
                <span className="text-primary text-xs font-bold mb-1 block">
                  {project.category_name}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* زر عرض المزيد */}
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-bold text-lg group"
          >
            عرض المزيد
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}