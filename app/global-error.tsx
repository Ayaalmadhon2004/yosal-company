"use client";

import { useEffect } from "react";
import { AppButton } from "@/components/ui/AppButton";
import "./globals.css";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body
        style={{ margin: 0, background: "#0F112B", color: "#fff" }}
        className="min-h-screen flex items-center justify-center px-6 text-center"
      >
        <div className="max-w-xl">
          <p className="text-6xl font-black text-[#F58220] mb-6" aria-hidden="true">
            !
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            حدث خطأ غير متوقع
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            نعتذر عن هذا الخلل. يرجى إعادة المحاولة بعد قليل.
          </p>
          <AppButton size="lg" onClick={() => unstable_retry()}>
            إعادة المحاولة
          </AppButton>
        </div>
      </body>
    </html>
  );
}
