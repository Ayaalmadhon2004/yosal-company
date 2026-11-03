import { SITE_URL } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function absoluteUrl(urlOrPath: string): string {
  const lower = urlOrPath.toLowerCase();
  return lower.startsWith("http://") || lower.startsWith("https://")
    ? urlOrPath
    : `${SITE_URL}${urlOrPath.startsWith("/") ? "" : "/"}${urlOrPath}`;
}

export function breadcrumbJsonLd(crumbs: Crumb[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export const organizationRef = { "@id": `${SITE_URL}/#organization` };
