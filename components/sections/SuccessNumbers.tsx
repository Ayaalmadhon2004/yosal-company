"use client";

import React from "react";
// السطر الذي كان ناقصاً ويسبب الخطأ
import { cn } from "@/lib/utils"; 
import { Layout, Users, Code, Share2 } from "lucide-react";

const stats = [
  { icon: <Share2 className="w-6 h-6" />, value: "745", label: "استراتيجية", color: "bg-orange-500" },
  { icon: <Users className="w-6 h-6" />, value: "820", label: "مشروع إلكتروني", color: "bg-blue-500" },
  { icon: <Code className="w-6 h-6" />, value: "643+", label: "مشروع تقني", color: "bg-orange-600" },
  { icon: <Layout className="w-6 h-6" />, value: "597", label: "منشورات فيديوهات", color: "bg-orange-500" },
];

export default function SuccessNumbers() {
  return (
    <section className="py-24 bg-[#0a0d1d]" dir="rtl">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-black text-white text-center mb-16">أرقام تحدثت عن نجاحنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#1A1C2E] p-8 rounded-[2rem] text-center border border-gray-800">
              {/* الآن cn ستعمل بشكل صحيح لدمج لون الخلفية الديناميكي */}
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white", stat.color)}>
                {stat.icon}
              </div>
              <h4 className="text-4xl font-black text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}