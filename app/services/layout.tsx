import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "استكشف خدمات وكالة يوصل المتكاملة: التخطيط الاستراتيجي، تطوير المواقع، تحسين محركات البحث، إدارة السوشيال ميديا، الهوية البصرية وصناعة المحتوى.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "خدماتنا",
    description:
      "استكشف خدمات وكالة يوصل المتكاملة: التخطيط الاستراتيجي، تطوير المواقع، تحسين محركات البحث، إدارة السوشيال ميديا، الهوية البصرية وصناعة المحتوى.",
    url: "/services",
    type: "website",
    locale: "ar_SA",
    images: ["/assets/moon.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
