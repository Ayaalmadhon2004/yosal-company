import type { Metadata } from "next";
import Link from "next/link";
import { AppButton } from "@/components/ui/AppButton";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section
      dir="rtl"
      className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center"
    >
      <div className="max-w-xl">
        <p className="text-8xl md:text-9xl font-black text-brand-orange-light mb-6" aria-hidden="true">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          عذراً، الصفحة غير موجودة
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          الصفحة التي تبحث عنها غير متوفرة أو تم نقلها. يمكنك العودة إلى الصفحة
          الرئيسية أو التواصل معنا لمساعدتك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppButton asChild size="lg">
            <Link href="/">العودة للرئيسية</Link>
          </AppButton>
          <AppButton asChild variant="outline" size="lg">
            <Link href="/contact">تواصل معنا</Link>
          </AppButton>
        </div>
      </div>
    </section>
  );
}
