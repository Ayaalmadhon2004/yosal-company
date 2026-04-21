import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Yoosel Agency | وكالة يوصل",
  description: "وكالة تسويق رقمي متخصصة للسوق السعودي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-[#0F112B] font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}