import type { Metadata } from "next"; 
import { Cairo } from 'next/font/google';
import "./globals.css"; 
import Navbar from "@/components/Navbar";

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: "وكالة يوصل | نصيغ الفخامة الرقمية",
  description: "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وحلول إبداعية لعلامتك التجارية.",
  keywords: ["تسويق رقمي", "السعودية", "نمو الأعمال", "تصميم هويات", "وكالة يوصل"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} bg-background text-white antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}