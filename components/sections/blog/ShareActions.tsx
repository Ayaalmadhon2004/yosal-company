"use client";

import { Share2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ShareActions() {
  const handleCopyLink = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success("تم نسخ الرابط بنجاح!", {
          duration: 3000,
          position: "bottom-center",
          style: {
            border: "1px solid #f97316",
            padding: "16px",
            color: "#fff",
            background: "#12162b",
            fontSize: "14px",
            borderRadius: "15px",
          },
          iconTheme: {
            primary: "#f97316",
            secondary: "#fff",
          },
        });
      })
      .catch(() => {
        toast.error("فشل في نسخ الرابط");
      });
  };

  return (
    <div className="flex items-center justify-between py-8 border-y border-gray-800 mt-16">
      <span className="text-white font-bold">أعجبك المقال؟ شاركه مع زملائك</span>
      <div className="flex gap-4">
        <button
          onClick={handleCopyLink}
          className="bg-[#12162b] px-6 py-2 rounded-full text-xs text-gray-400 border border-gray-800 hover:border-orange-500/50 transition-all active:scale-95 flex items-center gap-2"
        >
          <span>نسخ الرابط</span>
        </button>
      </div>
    </div>
  );
}