import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع فريق وكالة يوصل لبدء مشروعك الرقمي القادم. احجز استشارة أو أرسل لنا طلبك وسنعاود الاتصال بك بأسرع وقت.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "تواصل معنا",
    description:
      "تواصل مع فريق وكالة يوصل لبدء مشروعك الرقمي القادم. احجز استشارة أو أرسل لنا طلبك وسنعاود الاتصال بك بأسرع وقت.",
    url: "/contact",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
