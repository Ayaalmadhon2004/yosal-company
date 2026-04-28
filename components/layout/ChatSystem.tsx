"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Headset, X, Send, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatSystem() {
  const [activeView, setActiveView] = useState<"none" | "chat" | "whatsapp">("none");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const WHATSAPP_LINK = "https://wa.me/qr/YDPUM4DFRP4NP1";

  const handleWhatsAppClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = WHATSAPP_LINK;
    } else {
      setActiveView(activeView === "whatsapp" ? "none" : "whatsapp");
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* الأزرار الثابتة - Floating Actions */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-[999]" dir="ltr">
        {/* زر الواتساب */}
        <button 
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-[#22C55E] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-[#22C55E]/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="h-8 w-8 text-white group-hover:rotate-[15deg] transition-transform" />
        </button>

        {/* زر الدعم المباشر */}
        <button 
          onClick={() => setActiveView(activeView === "chat" ? "none" : "chat")}
          className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="الدعم المباشر"
        >
          {activeView === "chat" ? (
            <X className="h-8 w-8 text-white transition-all" />
          ) : (
            <Headset className="h-8 w-8 text-white group-hover:-rotate-[15deg] transition-transform" />
          )}
        </button>
      </div>

      {/* نافذة الدردشة - Live Support */}
      <div className={cn(
        "fixed bottom-28 left-8 w-[350px] md:w-[400px] bg-secondary/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-[1000] overflow-hidden flex flex-col border border-white/10 transition-all duration-500 origin-bottom-left",
        activeView === "chat" ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )} dir="rtl">
        
        {/* Header */}
        <div className="bg-primary p-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <Sparkles className="w-20 h-20 text-white -rotate-12 translate-x-[-20%] translate-y-[20%]" />
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20">
              <Image src="/assets/support-avatar.png" fill alt="Support" className="object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-primary rounded-full" />
            </div>
            <div className="text-right text-white">
              <p className="font-black text-lg leading-tight">سارة</p>
              <p className="text-white/70 text-xs font-bold tracking-wide">خبيرة نمو رقمي</p>
            </div>
          </div>
          <button onClick={() => setActiveView("none")} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="h-[350px] /50 p-6 overflow-y-auto space-y-4 custom-scrollbar">
          <div className="bg-secondary p-5 rounded-3xl rounded-tr-none text-muted-foreground text-sm font-medium border border-white/5 leading-relaxed">
            مرحباً بك في <span className="text-primary font-bold">يوصل</span>! ✨ <br /> 
            أنا هنا لمساعدتك في بناء استراتيجية نمو تخطف الأنظار. ما الذي يدور في ذهنك اليوم؟
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-secondary/50 border-t border-white/5 flex gap-3">
          <input 
            type="text" 
            placeholder="اكتب استفسارك هنا..." 
            className="flex-grow text-sm p-4 /80 rounded-2xl text-foreground outline-none border border-white/5 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50" 
          />
          <button className="bg-primary w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all group">
            <Send size={22} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* كارد الواتساب (Desktop) */}
      <div className={cn(
        "fixed inset-0 /80 backdrop-blur-md z-[1100] flex items-center justify-center p-6 transition-all duration-500",
        activeView === "whatsapp" ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="bg-secondary p-10 rounded-[3.5rem] border border-white/10 text-center max-w-md shadow-2xl relative">
          <button 
            onClick={() => setActiveView("none")}
            className="absolute top-6 left-6 text-muted-foreground hover:text-primary transition-colors"
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
            className="bg-[#22C55E] text-white block py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#22C55E]/30 hover:bg-[#1eb353] hover:-translate-y-1 transition-all"
          >
            فتح الواتساب الآن
          </Link>
          
          <button onClick={() => setActiveView("none")} className="mt-8 text-muted-foreground hover:text-foreground text-sm font-bold flex items-center gap-2 mx-auto transition-colors group">
            <ArrowLeft size={16} className="group-hover:translate-x-1 transition-transform" /> 
            العودة للموقع
          </button>
        </div>
      </div>
    </>
  );
}