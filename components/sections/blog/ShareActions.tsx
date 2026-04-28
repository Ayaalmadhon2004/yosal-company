"use client";

import React from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export default function ShareActions() {
  const handleCopyLink = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success("تم نسخ الرابط.. شاركه الآن!", {
          duration: 3000,
          position: "bottom-center",
          style: {
            border: "1px solid rgba(245, 130, 32, 0.2)",
            padding: "12px 24px",
            color: "#fff",
            background: "#12162b",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          },
          icon: <Check className="w-4 h-4 text-primary" />,
        });
      })
      .catch(() => {
        toast.error("عذراً، تعذر نسخ الرابط");
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 border-y border-white/5 mt-20 gap-6" dir="rtl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Share2 className="w-5 h-5 text-primary" />
        </div>
        <span className="text-foreground font-black text-lg">أعجبك المقال؟ شاركه مع مجتمعك</span>
      </div>

      <div className="flex gap-4 w-full md:w-auto">
        <button
          onClick={handleCopyLink}
          className="w-full md:w-auto group bg-secondary/20 px-8 py-3 rounded-2xl text-sm font-bold text-muted-foreground border border-white/5 hover:border-primary/40 hover:text-primary transition-all duration-500 active:scale-95 flex items-center justify-center gap-3"
        >
          <LinkIcon className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>نسخ رابط المقال</span>
        </button>
      </div>
    </div>
  );
}