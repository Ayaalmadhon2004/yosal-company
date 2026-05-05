"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { 
  FaInstagram, 
  FaTiktok, 
  FaLinkedinIn, 
  FaSnapchat, 
  FaFacebookF, 
  FaXTwitter, 
  FaThreads 
} from "react-icons/fa6";
import { IoMailOutline, IoSendSharp } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import ChatSystem from "@/components/layout/ChatSystem"; 
import { toast } from "react-hot-toast";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // الرابط الأساسي للباك إند (Render)
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("يرجى إدخال البريد الإلكتروني");
      return;
    }

    setIsLoading(true);
    
    try {
      // بناء الرابط مع الـ Query Params كما يتوقع الباك إند
      const url = `${BASE_URL}/subscribe?email=${encodeURIComponent(email)}`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("تم الاشتراك بنجاح! شكراً لك.");
        setEmail(""); // تفريغ الحقل بعد النجاح
      } else {
        // عرض رسالة الخطأ القادمة من الباك إند إن وجدت
        toast.error(result.message || "حدث خطأ أثناء الاشتراك");
      }
    } catch (error) {
      // تنبيه المستخدم في حال كان السيرفر في وضع الخمول (Sleep Mode)
      toast.error("يبدو أن السيرفر يستغرق وقتاً للاستيقاظ، يرجى المحاولة مرة أخرى");
      console.error("Subscription Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const socialIcons = [
    { Icon: FaInstagram, link: "https://www.instagram.com/yoosal.agency?igsh=aGlrNXBsdDZmbXZ1" },
    { Icon: FaTiktok, link: "https://www.tiktok.com/@yoosal2" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/yoosal/" },
    { Icon: FaSnapchat, link: "https://www.snapchat.com/add/yoosal.ag" },
    { Icon: FaFacebookF, link: "https://www.facebook.com/share/1DeynDWeNh/" },
    { Icon: FaXTwitter, link: "https://x.com/Yoosal148837" },
    { Icon: FaThreads, link: "https://www.threads.com/@yoosal.ag" }
  ];

  if (!mounted) return null;

  return (
    <footer className="bg-background text-white py-16 border-t border-white/5 relative w-full" dir="rtl">
      
      <ChatSystem />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* معلومات الوكالة */}
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
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all shadow-sm"
                >
                  <item.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">خدماتنا</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-500 transition-colors">أعمالنا</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">من نحن</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">المدونة</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 font-bold transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/private" className="hover:text-orange-500 transition-colors">الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="bg-[#252841] p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 bg-orange-500/10 p-4 rounded-full blur-xl"></div>
              <HiOutlineMap className="text-orange-500 mb-4 h-6 w-6" />
              
              <h3 className="text-lg font-black mb-4 text-white">كُن أول من يصله الإلهام</h3>
              
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-[#1A1C2E] p-1.5 rounded-2xl border border-white/10 group focus-within:border-orange-500/50 transition-all">
                <div className="pr-4">
                   <IoMailOutline className="h-5 w-5 text-gray-500 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الإلكتروني" 
                  className="bg-transparent flex-grow py-2 text-sm outline-none text-white placeholder:text-gray-600"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-orange-500 p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 flex items-center justify-center min-w-[44px]"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <IoSendSharp className="h-5 w-5 rotate-180 text-white" />
                  )}
                </button>
              </form>
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