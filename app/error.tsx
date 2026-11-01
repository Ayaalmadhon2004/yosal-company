"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppButton } from "@/components/ui/AppButton";

export default function Error({
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
    <section
      dir="rtl"
      className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center"
    >
      <div className="max-w-xl">
        <p className="text-6xl font-black text-[#F58220] mb-6" aria-hidden="true">
          !
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          حدث خطأ غير متوقع
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          نعتذر عن هذا الخلل. يمكنك إعادة المحاولة، وإن استمرت المشكلة يرجى
          التواصل معنا.
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
