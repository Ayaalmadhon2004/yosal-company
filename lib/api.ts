import type {
    ApiResponse,
    DashboardData,
    Post,
    PostsResponse,
    ProjectRequestPayload,
} from "@/types/api";
import { logError } from "@/lib/logger";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

const REVALIDATE_HOUR = 3600;
const REVALIDATE_POSTS = 600;

export const API_ENDPOINTS = {
    DASHBOARD: `${BASE_URL}/dashboard`,
    PROJECT_REQUEST: `${BASE_URL}/dashboard`, // المسار الصحيح حسب البوستمان والباك آند
    POSTS: `${BASE_URL}/posts`,
    SERVICES: `${BASE_URL}/services`,
    PROJECTS: `${BASE_URL}/projects`,
    PACKAGES: `${BASE_URL}/packages`,
    TESTIMONIALS: `${BASE_URL}/testimonials`,
    FAQS: `${BASE_URL}/faqs`,
    SUBSCRIBE: `${BASE_URL}/subscribe`,
};

const REQUEST_TIMEOUT_MS = 8000;

interface ResilientOptions {
    /** Per-attempt timeout. */
    timeoutMs?: number;
    /** Extra attempts after the first failure (0 = no retry). */
    retries?: number;
}

/**
 * GET JSON with a timeout and optional retry (useful when the Render free tier is waking up).
 * Throws on network error / non-2xx so callers decide the fallback; callers must log it.
 */
export async function fetchJson<T>(
    url: string,
    init: RequestInit & { next?: { revalidate?: number | false } } = {},
    { timeoutMs = REQUEST_TIMEOUT_MS, retries = 0 }: ResilientOptions = {},
): Promise<T> {
    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url, {
                ...init,
                headers: { Accept: "application/json", ...init.headers },
                signal: AbortSignal.timeout(timeoutMs),
            });
            if (!res.ok) throw new Error(`Request to ${url} failed with ${res.status}`);
            return (await res.json()) as T;
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError;
}

// قائمة قابلة للتغليف: الباك آند يعيد المصفوفة مباشرة أو داخل data.data (ترقيم الصفحات)
function unwrapList<T>(json: { data?: unknown } | null | undefined): T[] {
    const data = json?.data as unknown;
    if (Array.isArray(data)) return data as T[];
    const nested = (data as { data?: unknown } | undefined)?.data;
    return Array.isArray(nested) ? (nested as T[]) : [];
}

/** Services list. `null` means the request failed (UI shows an error state). */
export async function getServices<T = unknown>(): Promise<T[] | null> {
    try {
        const json = await fetchJson<ApiResponse<T[]>>(API_ENDPOINTS.SERVICES, {
            next: { revalidate: REVALIDATE_HOUR },
        });
        return json.status === "Success" && Array.isArray(json.data) ? json.data : null;
    } catch (error) {
        logError("getServices", error);
        return null;
    }
}

/** Packages list. `null` means the request failed. */
export async function getPackages<T = unknown>(): Promise<T[] | null> {
    try {
        const json = await fetchJson<ApiResponse<T[]>>(API_ENDPOINTS.PACKAGES, {
            next: { revalidate: REVALIDATE_HOUR },
        });
        return json.status === "Success" ? unwrapList<T>(json) : [];
    } catch (error) {
        logError("getPackages", error);
        return null;
    }
}

/** Projects, optionally filtered by category slug. Safe to call server- or client-side. */
export async function getProjects<T = unknown>(category?: string): Promise<T[]> {
    try {
        const url = new URL(API_ENDPOINTS.PROJECTS);
        if (category) url.searchParams.append("category", category);
        const json = await fetchJson<{ data?: unknown } | T[]>(url.toString(), {
            next: { revalidate: REVALIDATE_HOUR },
        });
        if (Array.isArray(json)) return json;
        return unwrapList<T>(json);
    } catch (error) {
        logError("getProjects", error);
        return [];
    }
}

/** Single project by slug, or null when missing / on failure. */
export async function getProjectBySlug<T = unknown>(slug: string): Promise<T | null> {
    try {
        const json = await fetchJson<ApiResponse<T>>(`${API_ENDPOINTS.PROJECTS}/${slug}`, {
            next: { revalidate: REVALIDATE_HOUR },
        });
        return json.data ?? null;
    } catch (error) {
        logError("getProjectBySlug", error);
        return null;
    }
}

export async function getTestimonials<T = unknown>(): Promise<T[]> {
    try {
        const json = await fetchJson<ApiResponse<T[]>>(API_ENDPOINTS.TESTIMONIALS, {
            next: { revalidate: REVALIDATE_HOUR },
        });
        return json.status === "Success" && Array.isArray(json.data) ? json.data : [];
    } catch (error) {
        logError("getTestimonials", error);
        return [];
    }
}

export async function getFaqs<T = unknown>(): Promise<T[]> {
    try {
        const json = await fetchJson<ApiResponse<T[]>>(API_ENDPOINTS.FAQS, {
            next: { revalidate: REVALIDATE_HOUR },
        });
        return Array.isArray(json.data) ? json.data : [];
    } catch (error) {
        logError("getFaqs", error);
        return [];
    }
}

/**
 * Newsletter subscription. The two forms historically send the email differently,
 * so both shapes are kept: "body" = JSON body, "query" = ?email= query param.
 * Returns the backend message on failure; network errors are logged and thrown as `network`.
 */
export async function subscribeToNewsletter(
    email: string,
    mode: "body" | "query",
): Promise<{ ok: boolean; message?: string; network?: boolean }> {
    try {
        const res =
            mode === "body"
                ? await fetch(API_ENDPOINTS.SUBSCRIBE, {
                      method: "POST",
                      body: JSON.stringify({ email }),
                      headers: { "Content-Type": "application/json", Accept: "application/json" },
                  })
                : await fetch(`${API_ENDPOINTS.SUBSCRIBE}?email=${encodeURIComponent(email)}`, {
                      method: "POST",
                      headers: { Accept: "application/json", "Content-Type": "application/json" },
                  });
        const json: ApiResponse | null = await res.json().catch(() => null);
        return { ok: res.ok, message: json?.message };
    } catch (error) {
        logError("subscribeToNewsletter", error);
        return { ok: false, network: true };
    }
}

export async function getDashboardData(): Promise<DashboardData | null> {
    try {
        const res = await fetch(API_ENDPOINTS.DASHBOARD, {
            next: { revalidate: REVALIDATE_HOUR }
        });
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const json: ApiResponse<DashboardData> = await res.json();
        return json.data ?? null;
    } catch (error) {
        logError("getDashboardData", error);
        return null;
    }
}

// دالة موحدة لإرسال طلب المشروع (تستخدمها النماذج و useDashboardStore).
// السيرفر يتوقع البيانات في الرابط (Query Params)، والملف المرفق فقط يُرسل في الـ Body.
export async function submitProjectRequest(
    payload: ProjectRequestPayload
): Promise<ApiResponse> {
    try {
        const url = new URL(API_ENDPOINTS.PROJECT_REQUEST);
        const { attachment, ...fields } = payload;
        (Object.entries(fields) as [string, string | undefined][]).forEach(([key, value]) => {
            if (value) url.searchParams.append(key, value);
        });

        let body: FormData | undefined;
        if (attachment) {
            body = new FormData();
            body.append('attachment', attachment);
        }

        const res = await fetch(url.toString(), {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body,
        });

        const json: ApiResponse | null = await res.json().catch(() => null);

        if (!res.ok) {
            return {
                status: "Error",
                message: json?.message || `Server responded with ${res.status}`,
            };
        }

        return json ?? { status: "Success" };
    } catch (error: unknown) {
        logError("submitProjectRequest", error);
        return { status: "Error", message: "حدث خطأ في الاتصال بالسيرفر" };
    }
}

// للتوافق مع الاستدعاءات الحالية
export const sendProjectRequest = submitProjectRequest;

// جلب المقالات
export async function getPosts(search?: string, category?: string, page: number = 1): Promise<PostsResponse> {
    try {
        const url = new URL(API_ENDPOINTS.POSTS);
        if (search) url.searchParams.append('search', search);
        if (category) url.searchParams.append('category', category);
        url.searchParams.append('page', page.toString());

        const res = await fetch(url.toString(), {
            next: { revalidate: REVALIDATE_POSTS }
        });

        if (!res.ok) throw new Error("Failed to fetch posts");
        return (await res.json()) as PostsResponse;
    } catch (error) {
        logError("getPosts", error);
        return { data: [], meta: {} };
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const res = await fetch(`${API_ENDPOINTS.POSTS}/${slug}`, {
            next: { revalidate: REVALIDATE_HOUR }
        });
        if (!res.ok) throw new Error("Post not found");
        const json: ApiResponse<Post> = await res.json();
        return json.data ?? null;
    } catch (error) {
        logError("getPostBySlug", error);
        return null;
    }
}

// الباك آند قد يعيد المقالات مباشرة أو داخل data.data (ترقيم الصفحات)
export function extractPosts(response: PostsResponse | null | undefined): Post[] {
    const data = response?.data;
    if (Array.isArray(data)) return data;
    return data?.data ?? [];
}
