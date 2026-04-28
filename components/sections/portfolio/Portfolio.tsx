"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpLeft } from "lucide-react";
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
  const projects = Array.isArray(data) ? data : [];

  return (
    <section 
      id="portfolio" 
      className={cn("py-24  w-full text-foreground", className)} 
      dir="rtl"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* رأس القسم */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            معرض <span className="text-primary">الأعمال</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            نتائج تتحدث وإبداع يتنفس؛ ملخص لمشاريعنا التي جمعت بين ذكاء الاستراتيجية وجمال التنفيذ الرقمي.
          </p>
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link 
              href={`/portfolio/${project.slug}`}
              key={index} 
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-secondary/20 border border-white/5 block"
            >
              {/* الصورة مع تأثير الزوم */}
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />

              {/* طبقة التدرج اللوني المحسنة */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* أيقونة الانتقال تظهر عند التحويم */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-primary/40">
                <ArrowUpLeft className="w-6 h-6" />
              </div>

              {/* نصوص المشروع */}
              <div className="absolute bottom-8 right-8 left-8 text-right z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-xs font-bold mb-3 backdrop-blur-md uppercase tracking-wider">
                  {project.category_name}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
              </div>

              {/* لمعة خفيفة عند التحويم */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}