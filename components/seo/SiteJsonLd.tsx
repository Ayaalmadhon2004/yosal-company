import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_SOCIAL_LINKS,
  SITE_URL,
} from "@/lib/seo";

/** Site-wide Organization + WebSite structured data (facts from the repo only). */
export default function SiteJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/assets/logo.png`,
          description: SITE_DESCRIPTION,
          email: SITE_EMAIL,
          sameAs: SITE_SOCIAL_LINKS,
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: "ar",
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      ]}
    />
  );
}
