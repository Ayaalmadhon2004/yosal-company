import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { servicesData } from "@/constants/servicesData";
import { API_ENDPOINTS, extractPosts, fetchJson } from "@/lib/api";
import { logError } from "@/lib/logger";
import type { ApiResponse, DashboardData, PostsResponse } from "@/types/api";

const PRIORITY = {
  home: 1,
  high: 0.9,
  main: 0.8,
  medium: 0.7,
  detail: 0.6,
  legal: 0.3,
} as const;

type SluggedItem = { slug?: string; updated_at?: string };

const staticRoutes = [
  { path: "", priority: PRIORITY.home },
  { path: "/about", priority: PRIORITY.main },
  { path: "/services", priority: PRIORITY.high },
  { path: "/portfolio", priority: PRIORITY.main },
  { path: "/blog", priority: PRIORITY.medium },
  { path: "/packages", priority: PRIORITY.main },
  { path: "/contact", priority: PRIORITY.medium },
  { path: "/terms", priority: PRIORITY.legal },
  { path: "/private", priority: PRIORITY.legal },
];

function toEntries(
  basePath: string,
  items: SluggedItem[],
  priority: number,
): MetadataRoute.Sitemap {
  return items
    .filter((item): item is SluggedItem & { slug: string } => Boolean(item?.slug))
    .map((item) => ({
      url: `${SITE_URL}${basePath}/${encodeURIComponent(item.slug)}`,
      lastModified: item.updated_at ? new Date(item.updated_at) : undefined,
      priority,
    }));
}

// The backend runs on Render's free tier and may be asleep when the sitemap is built.
// Each call gets a timeout and one retry; any failure only drops that dynamic section
// (static routes and local servicesData slugs are always listed) and never fails the build.
const SITEMAP_FETCH = { timeoutMs: 10_000, retries: 1 } as const;

async function safeFetch<T>(context: string, url: string, fallback: T): Promise<T> {
  try {
    return await fetchJson<T>(url, { next: { revalidate: 3600 } }, SITEMAP_FETCH);
  } catch (error) {
    logError(`sitemap:${context}`, error);
    return fallback;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [dashboardResponse, postsResponse] = await Promise.all([
    safeFetch<ApiResponse<DashboardData> | null>("dashboard", API_ENDPOINTS.DASHBOARD, null),
    safeFetch<PostsResponse | null>("posts", API_ENDPOINTS.POSTS, null),
  ]);

  const dashboard = dashboardResponse?.data;
  const posts: SluggedItem[] = extractPosts(postsResponse);
  const projects: SluggedItem[] = Array.isArray(dashboard?.portfolio)
    ? dashboard.portfolio
    : [];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      priority,
    })),
    ...Object.keys(servicesData).map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      priority: PRIORITY.main,
    })),
    ...toEntries("/portfolio", projects, PRIORITY.detail),
    ...toEntries("/blog", posts, PRIORITY.detail),
  ];
}
