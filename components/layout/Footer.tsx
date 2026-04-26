"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { 
  Send, Globe, Share2, Camera, User, X, Mail, 
  Zap
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
      
      <ChatSystem />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

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

          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FF8A33] transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF8A33] transition-colors">خدماتنا</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FF8A33] transition-colors">أعمالنا</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF8A33] transition-colors">من نحن</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#FF8A33] transition-colors">الباقات</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FF8A33] transition-colors">المدونة</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF8A33] font-bold text-[#FF8A33] transition-colors">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-gray-400 text-sm">

              <li>
              <Link href="/private" className="text-gray-400 hover:text-[#F58220] transition-colors text-sm">الخصوصية</Link>
              </li>

              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#F58220] transition-colors text-sm">
                  الشروط والأحكام
                </Link>
              </li>

            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="bg-[#252841] p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
              {/* أيقونة الزينة (البرق) */}
              <div className="absolute -top-2 -left-2 bg-[#FF8A33]/10 p-4 rounded-full blur-xl"></div>
              <Zap className="text-[#FF8A33] mb-4 h-6 w-6" />
              
              <h3 className="text-lg font-black mb-4">كُن أول من يصله الإلهام</h3>
              
              <div className="flex items-center gap-2 bg-[#1A1C2E] p-1.5 rounded-2xl border border-white/10 group focus-within:border-[#FF8A33]/50 transition-all">
                <div className="pr-4">
                   <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-[#FF8A33] transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="bg-transparent flex-grow py-2 text-sm outline-none text-white placeholder:text-gray-600"
                />
                <button className="bg-[#FF8A33] p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FF8A33]/20">
                  <Send className="h-5 w-5 rotate-180" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-4 text-center">بشراكتك معنا، أنت توافق على سياسة الخصوصية الخاصة بنا.</p>
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