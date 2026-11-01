"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ChatSystem = dynamic(() => import("@/components/layout/ChatSystem"), { ssr: false });

/** يحمّل الدردشة بعد انتهاء التحميل الأولي (idle) لتخفيف الـ main thread */
export default function ChatLoader() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (i: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setShowChat(true), { timeout: 4000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setShowChat(true), 3000);
    return () => window.clearTimeout(t);
  }, []);

  return showChat ? <ChatSystem /> : null;
}
