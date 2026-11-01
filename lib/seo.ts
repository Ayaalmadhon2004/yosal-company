const FALLBACK_SITE_URL = "https://yosal-company.vercel.app";

function stripTrailingSlashes(value: string): string {
  return value.endsWith("/") ? stripTrailingSlashes(value.slice(0, -1)) : value;
}

/** Absolute site origin without trailing slash. */
export const SITE_URL: string = stripTrailingSlashes(
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
);

export const SITE_NAME = "وكالة يوصل";
