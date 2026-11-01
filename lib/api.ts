import type {
    ApiResponse,
    DashboardData,
    Post,
    PostsResponse,
    ProjectRequestPayload,
} from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

const REVALIDATE_HOUR = 3600;
const REVALIDATE_POSTS = 600;

export const API_ENDPOINTS = {
    DASHBOARD: `${BASE_URL}/dashboard`,
    PROJECT_REQUEST: `${BASE_URL}/dashboard`, // المسار الصحيح حسب البوستمان والباك آند
    POSTS: `${BASE_URL}/posts`,
};

export async function getDashboardData(): Promise<DashboardData | null> {
    try {
        const res = await fetch(API_ENDPOINTS.DASHBOARD, {
            next: { revalidate: REVALIDATE_HOUR }
        });
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const json: ApiResponse<DashboardData> = await res.json();
        return json.data ?? null;
    } catch (error) {
        console.error("Dashboard Fetch Error:", error);
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
        console.error("API Error:", error instanceof Error ? error.message : error);
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
        console.error("Posts Fetch Error:", error);
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
        console.error("Post Detail Fetch Error:", error);
        return null;
    }
}

// الباك آند قد يعيد المقالات مباشرة أو داخل data.data (ترقيم الصفحات)
export function extractPosts(response: PostsResponse | null | undefined): Post[] {
    const data = response?.data;
    if (Array.isArray(data)) return data;
    return data?.data ?? [];
}
