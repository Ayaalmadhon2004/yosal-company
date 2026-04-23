"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { 
  Send, Globe, Share2, Camera, User, X, Mail 
} from "lucide-react";
import ChatSystem from "@/components/layout/ChatSystem"; 

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialIcons = [
    { Icon: X, link: "#" },
    { Icon: Camera, link: "#" },
    { Icon: User, link: "#" }, 
    { Icon: Globe, link: "#" },
    { Icon: Share2, link: "#" }
  ];

  if (!mounted) return null;

  return (
    <footer className="bg-[#1A1C2E] text-white py-16 border-t border-white/5 relative w-full" dir="rtl">
      
      {/* استدعاء نظام الدردشة المنفصل الذي يحتوي على الأزرار العائمة */}
      <ChatSystem />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* القسم الأول: اللوجو والوصف */}
          <div className="md:col-span-4 text-right flex flex-col items-start">
            <div className="mb-6">
              <Link href="/">
                <Image
                  width={180}
                  height={60}
                  src="/assets/logo.png" 
                  alt="Yoosel Logo" 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              وكالة سعودية متخصصة في النمو الرقمي، نجمع بين الإبداع والبيانات لتحقيق نتائج استثنائية لعملائنا.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link}
                  className="p-2.5 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF8A33]/50 hover:text-[#FF8A33] transition-all"
                >
                  <item.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-[#FF8A33] cursor-pointer">الرئيسية</li>
              <li className="hover:text-[#FF8A33] cursor-pointer">خدماتنا</li>
              <li className="hover:text-[#FF8A33] cursor-pointer font-bold text-[#FF8A33]">تواصل معنا</li>
            </ul>
          </div>

          {/* القسم الثالث: قانوني */}
          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">الخصوصية</li>
              <li className="hover:text-white cursor-pointer">الشروط</li>
            </ul>
          </div>

          {/* القسم الرابع: النشرة البريدية */}
          <div className="md:col-span-4">
            <div className="bg-[#252841] p-8 rounded-[32px] border border-white/5 relative">
              <h3 className="text-lg font-black mb-3">كُن أول من يصله الإلهام</h3>
              <div className="flex gap-2 bg-[#1A1C2E] p-1.5 rounded-2xl border border-white/10">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="bg-transparent flex-grow px-4 py-2 text-sm outline-none text-white"
                />
                <button className="bg-[#FF8A33] p-3 rounded-xl hover:bg-opacity-90 transition-all">
                  <Send className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© 2026 يوصل - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}