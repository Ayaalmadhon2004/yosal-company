"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppButton } from "@/components/ui/AppButton";

interface RouteErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

/** واجهة الخطأ المشتركة لمسارات جلب البيانات (نفس شكل app/error.tsx) */
export function RouteError({ error, unstable_retry }: RouteErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      dir="rtl"
      role="alert"
      className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center"
    >
      <div className="max-w-xl">
        <p className="text-6xl font-black text-[#F58220] mb-6" aria-hidden="true">
          !
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          تعذّر تحميل المحتوى
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          حدثت مشكلة أثناء جلب البيانات. يمكنك إعادة المحاولة، وإن استمرت
          المشكلة يرجى التواصل معنا.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppButton size="lg" onClick={() => unstable_retry()}>
            إعادة المحاولة
          </AppButton>
          <AppButton asChild variant="outline" size="lg">
            <Link href="/">العودة للرئيسية</Link>
          </AppButton>
        </div>
      </div>
    </section>
  );
}
