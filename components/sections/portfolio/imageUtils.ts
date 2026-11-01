const BACKEND_ORIGIN = "https://yosaal-website-backend.onrender.com";

// Hosts allowed by `images.remotePatterns` in next.config.ts.
const OPTIMIZABLE_HOSTS = new Set([
  "yosaal-website-backend.onrender.com",
  "ui-avatars.com",
  "res.cloudinary.com",
]);

/** Turns relative API image paths into absolute backend URLs; falls back to a local placeholder. */
export function resolveImageUrl(url: string | undefined | null, fallback = "/assets/pic1.png"): string {
  if (!url) return fallback;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/assets/") || url.startsWith("/images/")) return url;
  return `${BACKEND_ORIGIN}${url.startsWith("/") ? url : `/${url}`}`;
}

/** True when next/image cannot optimize the source (host not configured). Local paths are optimizable. */
export function shouldSkipOptimization(src: string): boolean {
  if (!/^https?:\/\//i.test(src)) return false;
  try {
    return !OPTIMIZABLE_HOSTS.has(new URL(src).hostname);
  } catch {
    return true;
  }
}
