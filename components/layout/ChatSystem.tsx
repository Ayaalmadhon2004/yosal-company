"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Headset, X, Send, ArrowLeft } from "lucide-react";

export default function ChatSystem() {
  const [activeView, setActiveView] = useState<"none" | "chat" | "whatsapp">("none");
  const [mounted, setMounted] = useState(false);

  // تأمين المكون للعمل فقط في المتصفح لضمان عدم ظهور أخطاء Object أو Panic
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[999]">
        <button 
          onClick={() => setActiveView(activeView === "whatsapp" ? "none" : "whatsapp")}
          className="w-14 h-14 bg-[#22C55E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </button>

        <button 
          onClick={() => setActiveView(activeView === "chat" ? "none" : "chat")}
          className="w-14 h-14 bg-[#FF8A33] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Headset className="h-7 w-7 text-white" />
        </button>
      </div>

      {activeView === "chat" && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl z-[1000] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#FF8A33] p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 relative">
                <Image src="/assets/support-avatar.png" fill alt="Support" className="rounded-full object-cover" />
              </div>
              <div className="text-right text-white">
                <p className="font-bold text-sm">سارة - دعم العملاء</p>
                <p className="text-white/80 text-[10px]">متصلة الآن</p>
              </div>
            </div>
            <button onClick={() => setActiveView("none")} className="text-white hover:opacity-70">
              <X size={20} />
            </button>
          </div>
          <div className="h-[300px] bg-[#F4F4F0] p-5 text-right overflow-y-auto">
            <div className="bg-[#EAE6D6] p-3 rounded-2xl rounded-tr-none text-[#4A4A4A] text-xs inline-block max-w-[85%]">
              مرحباً بك في يوصل! كيف يمكنني مساعدتك في مشروعك الجديد اليوم؟
            </div>
          </div>
          <div className="p-4 bg-white border-t flex gap-2">
            <input type="text" placeholder="اكتب رسالتك..." className="flex-grow text-xs p-3 bg-gray-50 rounded-xl text-black outline-none border-none focus:ring-1 focus:ring-[#FF8A33]" />
            <button className="bg-[#FF8A33] p-3 rounded-xl text-white">
              <Send size={18} className="rotate-180" />
            </button>
          </div>
        </div>
      )}

      {activeView === "whatsapp" && (
        <div className="fixed inset-0 bg-white z-[1100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="text-center max-w-sm">
            <div className="w-20 h-20 bg-[#22C55E]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#22C55E]">
              <MessageCircle size={40} />
            </div>
            <h2 className="text-2xl font-black text-[#1A1C2E] mb-3">تواصل معنا مباشرة</h2>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed px-4">
              نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الخدمة الأنسب لنمو مشروعك.
            </p>
            <Link 
              href="https://wa.me/qr/YDPUM4DFRP4NP1" 
              className="bg-[#22C55E] text-white block py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#1eb353] transition-colors"
            >
              فتح محادثة واتساب
            </Link>
            <button onClick={() => setActiveView("none")} className="mt-8 text-gray-400 text-xs flex items-center gap-2 mx-auto hover:text-black">
              <ArrowLeft size={14} /> العودة للموقع
            </button>
          </div>
        </div>
      )}
    </>
  );
}