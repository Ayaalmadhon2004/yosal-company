"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["الكل", "التسويق الإلكتروني", "التصوير", "التقارير والبروفايلات", "المتاجر الإلكترونية", "المواقع الإلكترونية", "الموشن جرافيكس", "الهويات البصرية"];

const projects = [
  { title: "حملة نمو لمتجر أورا", category: "التسويق الإلكتروني", image: "/portfolio/p1.jpg" },
  { title: "هوية تطبيق نقد", category: "الهويات البصرية", image: "/portfolio/p2.jpg" },
  { title: "عقارات الرفاه", category: "المواقع الإلكترونية", image: "/portfolio/p3.jpg" },
  { title: "منصة سحاب للحلول", category: "تحسين محركات البحث", image: "/portfolio/p4.jpg" },
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("الكل");

  return (
    <section className="py-12" dir="rtl">
      <div className="container mx-auto px-6">
        {/* شريط الفلاتر */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                activeTab === cat 
                  ? "bg-[#EAE8D9] text-[#0a0d1d] border-[#EAE8D9]" 
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-[#1A1C2E]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] to-transparent opacity-60" />
                {/* هنا تضعين الصورة الفعلية */}
              </div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#F58220] transition-colors">{project.title}</h3>
              <span className="text-[#F58220] text-sm font-bold">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}