"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ListFilter } from "lucide-react";

export default function PrivacySidebar() {
  const links = [
    { name: "جمع البيانات", target: "data-collection" },
    { name: "استخدام المعلومات", target: "data-usage" },
    { name: "ملفات تعريف الارتباط", target: "cookies" },
    { name: "حقوق المستخدم", target: "user-rights" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // لضمان عدم اختفاء العنوان تحت الهيدر
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-secondary/30 p-8 rounded-[2.5rem] border border-white/5 sticky top-32 transition-all duration-500 hover:border-primary/20" dir="rtl">
      <h4 className="text-foreground font-black mb-8 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <ListFilter className="w-4 h-4 text-primary" />
        </div>
        فهرس السياسة
      </h4>
      
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <button
              onClick={() => scrollToSection(link.target)}
              className="w-full flex items-center justify-between text-muted-foreground hover:text-primary p-3 rounded-xl hover:bg-primary/5 transition-all group"
            >
              <span className="text-sm font-bold transition-transform group-hover:translate-x-[-4px]">
                {link.name}
              </span>
              <ChevronLeft className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </button>
          </li>
        ))}
      </ul>

      {/* لمسة جمالية في الأسفل */}
      <div className="mt-8 pt-6 border-t border-white/5">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          Yoosil Privacy Framework v2.0
        </p>
      </div>
    </div>
  );
}