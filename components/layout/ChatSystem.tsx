"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Headset, X, Send, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const MD_BREAKPOINT = 768;

export default function ChatSystem() {
  const [activeView, setActiveView] = useState<"none" | "chat" | "whatsapp">("none");

  const WHATSAPP_LINK = "https://wa.me/qr/YDPUM4DFRP4NP1";

  const handleWhatsAppClick = () => {
    if (window.innerWidth < MD_BREAKPOINT) {
      window.location.href = WHATSAPP_LINK;
    } else {
      setActiveView(activeView === "whatsapp" ? "none" : "whatsapp");
    }
  };

  return (
    <>
      {/* الأزرار العائمة: أصغر قليلاً على الموبايل + مراعاة safe-area */}
      <div
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] md:bottom-8 md:left-8 flex flex-col gap-3 md:gap-4 z-[999]"
        dir="ltr"
      >
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#15803D] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-[#22C55E]/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="تواصل عبر واتساب"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white group-hover:rotate-[15deg] transition-transform" />
        </button>

        {/* زر الدعم المباشر */}
        <button
          onClick={() => setActiveView(activeView === "chat" ? "none" : "chat")}
          className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="الدعم المباشر"
          aria-label={activeView === "chat" ? "إغلاق الدعم المباشر" : "الدعم المباشر"}
          aria-expanded={activeView === "chat"}
        >
          {activeView === "chat" ? (
            <X className="h-7 w-7 md:h-8 md:w-8 text-white transition-all" />
          ) : (
            <Headset className="h-7 w-7 md:h-8 md:w-8 text-white group-hover:-rotate-[15deg] transition-transform" />
          )}
        </button>
      </div>

      {/* نافذة الدردشة - Live Support: تعلو الأزرار ولا تتجاوز عرض/ارتفاع الشاشة */}
      <div aria-hidden={activeView !== "chat"} inert={activeView !== "chat"} className={cn(
        "fixed left-[max(1rem,env(safe-area-inset-left))] md:left-8 bottom-[calc(max(1rem,env(safe-area-inset-bottom))+8.75rem)] md:bottom-[11.5rem]",
        "w-[calc(100vw-2rem)] max-w-[400px] h-[min(32rem,calc(100dvh-14.5rem))] md:h-[min(32rem,calc(100dvh-16.5rem))]",
        "bg-secondary/90 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-[1000] overflow-hidden flex flex-col border border-white/10 transition-all duration-500 origin-bottom-left",
        activeView === "chat" ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none invisible"
      )} dir="rtl">

        {/* Header */}
        <div className="bg-primary p-4 sm:p-6 shrink-0 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Sparkles className="w-20 h-20 text-white -rotate-12 translate-x-[-20%] translate-y-[20%]" />
          </div>
          <div className="flex items-center gap-3 sm:gap-4 relative z-10 min-w-0">
            <div className="relative w-12 h-12 shrink-0 rounded-2xl overflow-hidden border-2 border-white/20">
              <Image src="/assets/logo.png" fill sizes="48px" alt="Support" className="object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-primary rounded-full" />
            </div>
            <div className="text-right text-white">
              <p className="font-black text-lg leading-tight">سارة</p>
              <p className="text-white/90 text-xs font-bold tracking-wide">خبيرة نمو رقمي</p>
            </div>
          </div>
          <button
            onClick={() => setActiveView("none")}
            aria-label="إغلاق"
            className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors relative z-10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 min-h-0 /50 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar">
          <div className="bg-secondary p-4 sm:p-5 rounded-3xl rounded-tr-none text-muted-foreground text-sm font-medium border border-white/5 leading-relaxed">
            مرحباً بك في <span className="text-primary font-bold">يوصل</span>! ✨ <br />
            أنا هنا لمساعدتك في بناء استراتيجية نمو تخطف الأنظار. ما الذي يدور في ذهنك اليوم؟
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 shrink-0 bg-secondary/50 border-t border-white/5 flex gap-3">
          <input
            type="text"
            aria-label="اكتب استفسارك"
            placeholder="اكتب استفسارك هنا..."
            className="flex-grow min-w-0 text-sm p-3 sm:p-4 /80 rounded-2xl text-foreground outline-none border border-white/5 focus:border-primary/50 transition-all placeholder:text-muted-foreground/80"
          />
          <button
            aria-label="إرسال"
            className="bg-primary w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
          >
            <Send size={22} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* كارد الواتساب (Desktop) */}
      <div aria-hidden={activeView !== "whatsapp"} inert={activeView !== "whatsapp"} className={cn(
        "fixed inset-0 /80 backdrop-blur-md z-[1100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto transition-all duration-500",
        activeView === "whatsapp" ? "opacity-100" : "opacity-0 pointer-events-none invisible"
      )}>
        <div className="bg-secondary p-8 sm:p-10 rounded-[3.5rem] border border-white/10 text-center max-w-md shadow-2xl relative my-auto">
          <button
            onClick={() => setActiveView("none")}
            aria-label="إغلاق"
            className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>

          <div className="w-24 h-24 bg-[#22C55E]/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-[#22C55E] animate-bounce">
            <MessageCircle size={48} />
          </div>

          <h2 className="text-3xl font-black text-foreground mb-4">لنبدأ المحادثة</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
            فريقنا جاهز لمناقشة مشروعك وتقديم استشارة تقنية وفنية تضعك في المقدمة.
          </p>

          <Link
            href={WHATSAPP_LINK}
            className="bg-[#15803D] text-white block py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#22C55E]/30 hover:bg-[#166534] hover:-translate-y-1 transition-all"
          >
            فتح الواتساب الآن
          </Link>

          <button
            onClick={() => setActiveView("none")}
            className="mt-4 min-h-11 px-4 text-muted-foreground hover:text-foreground text-sm font-bold flex items-center gap-2 mx-auto transition-colors group"
          >
            {/* الأيقونة داخل span لتطبيق الحجم عليها مباشرة دون تدخل الـ button */}
            <span className="w-3 h-3 flex items-center justify-center">
              <ArrowLeft className="w-full h-full !stroke-[4]" />
            </span>
            العودة للموقع
          </button>

        </div>
      </div>
    </>
  );
}
