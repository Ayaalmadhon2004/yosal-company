import type { Metadata, Viewport } from "next";
import { Cairo } from 'next/font/google';
import "./globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import { Toaster } from "react-hot-toast";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import SiteJsonLd from "@/components/seo/SiteJsonLd";

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '900'],
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Tahoma', 'sans-serif'],
  adjustFontFallback: false,
  variable: '--font-cairo',
  display: 'swap',
});

const siteDescription =
  "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وحلول إبداعية لعلامتك التجارية.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F112B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "وكالة يوصل | نصيغ الفخامة الرقمية",
    template: "%s | وكالة يوصل",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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
      <body className={`${cairo.className} bg-[#0F112B] bg-background text-white antialiased min-h-screen relative overflow-x-hidden flex flex-col`}>
        
        <SiteJsonLd />
        <div className="bg-blobs" aria-hidden="true" />

        <a href="#main-content" className="skip-link">
          تخطي إلى المحتوى الرئيسي
        </a>

        <Navbar />
        
        <main id="main-content" tabIndex={-1} className="relative z-10 flex-grow outline-none">
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

        <CookieConsent />
      </body>
    </html>
  );
}