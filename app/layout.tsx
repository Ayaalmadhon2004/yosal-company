import type { Metadata } from "next"; 
import { Cairo } from 'next/font/google';
import "./globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script"; // استيراد مكون Script
import { MotionProvider } from "@/components/ui/Motion";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const siteDescription =
  "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وحلول إبداعية لعلامتك التجارية.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "وكالة يوصل | نصيغ الفخامة الرقمية",
    template: "%s | وكالة يوصل",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: SITE_NAME,
    title: "وكالة يوصل | نصيغ الفخامة الرقمية",
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "وكالة يوصل | نصيغ الفخامة الرقمية",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QBZ07DT6PS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QBZ07DT6PS');
          `}
        </Script>
      </head>
      <body className={`${cairo.className} bg-[#0F112B] bg-background text-white antialiased min-h-screen relative overflow-x-hidden flex flex-col`}>
        
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#3C3F73]/30 rounded-full blur-[140px] animate-float-slow" />
          <div className="absolute top-[25%] -right-[5%] w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[120px] animate-float-slower" />
          <div className="absolute bottom-[0%] left-[20%] w-[700px] h-[700px] bg-[#1A1C2E]/50 rounded-full blur-[160px]" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <MotionProvider>
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
        </MotionProvider>
      </body>
    </html>
  );
}