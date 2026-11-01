const FALLBACK_SITE_URL = "https://yosal-company.vercel.app";

function stripTrailingSlashes(value: string): string {
  return value.endsWith("/") ? stripTrailingSlashes(value.slice(0, -1)) : value;
}

/** Absolute site origin without trailing slash. */
export const SITE_URL: string = stripTrailingSlashes(
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
);

export const SITE_NAME = "وكالة يوصل";

export const SITE_DESCRIPTION =
  "وكالة تسويق رقمي متخصصة للسوق السعودي، نقدم استراتيجيات نمو وحلول إبداعية لعلامتك التجارية.";

/** Public contact/social facts already present in the repo (Footer, privacy page). */
export const SITE_EMAIL = "yoosalmarket@gmail.com";
export const SITE_SOCIAL_LINKS: readonly string[] = [
  "https://www.instagram.com/yoosal.ag",
  "https://www.tiktok.com/@yoosal2",
  "https://www.linkedin.com/company/yoosal/",
  "https://www.snapchat.com/add/yoosal.ag",
  "https://www.facebook.com/share/1DeynDWeNh/",
  "https://x.com/Yoosal148837",
  "https://www.threads.com/@yoosal.ag",
];

/**
 * Indexing is allowed by default. It is blocked only when the deployment is
 * clearly non-production (Vercel preview/development) or explicitly disabled
 * with NEXT_PUBLIC_ALLOW_INDEXING=false. Unknown environments stay indexable.
 */
export function isIndexingAllowed(): boolean {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === "false") return false;
  const vercelEnv = process.env.VERCEL_ENV;
  return vercelEnv !== "preview" && vercelEnv !== "development";
}
