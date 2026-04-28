import type { Metadata } from "next"; 
import { Cairo } from 'next/font/google';
import "./globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

// إعداد خط Cairo ليتناسب مع هوية وكالة يوصل
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "وكالة يوصل | نصيغ الفخامة الرقمية",
  description: "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وحلول إبداعية لعلامتك التجارية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth`}>
      <body className={`${cairo.className} bg-[#0F112B]  bg-background text-white antialiased min-h-screen relative overflow-x-hidden flex flex-col`}>
        
        {/* تأثير الخلفية المقطعة بالألوان (Background Blobs) */}
        {/* تم ضبط الشفافية (Opacity) والتمويه (Blur) ليتطابق مع صور الأسئلة الشائعة وعملاء يوصل */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          
          {/* بقعة إضاءة كحلية (Indigo/Navy) في الزاوية العلوية اليسرى */}
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#3C3F73]/30 rounded-full blur-[140px]" />
          
          {/* بقعة إضاءة برتقالية (Brand Orange) خافتة جداً في المنتصف جهة اليمين */}
          <div className="absolute top-[25%] -right-[5%] w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[120px]" />
          
          {/* بقعة إضاءة كحلية عميقة في الأسفل لتعزيز التباين */}
          <div className="absolute bottom-[0%] left-[20%] w-[700px] h-[700px] bg-[#1A1C2E]/50 rounded-full blur-[160px]" />
          
          {/* طبقة Noise خفيفة اختيارية لزيادة الفخامة (يمكنك حذفها) */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* محتوى الموقع */}
        <Navbar />
        
        <main className="relative z-10 flex-grow">
          {children}
        </main>
        
        <Toaster 
          position="bottom-left" 
          toastOptions={{
            style: {
              background: '#161839',
              color: '#fff',
              border: '1px solid #F58220',
              fontFamily: 'var(--font-cairo)',
            },
          }}
        />
        
        <Footer />
      </body>
    </html>
  );
}