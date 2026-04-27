const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

export const API_ENDPOINTS = {
    DASHBOARD: `${BASE_URL}/dashboard`,
    PROJECT_REQUEST: `${BASE_URL}/project-request`,
    POSTS: `${BASE_URL}/posts`,
};

export async function getDashboardData() {
    try {
        const res = await fetch(API_ENDPOINTS.DASHBOARD, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) throw new Error("Failed to fetch dashboard data");

        const json = await res.json();
        return json.data;
    } catch (error) {
        return null;
    }
}

export async function getPosts(search?: string, category?: string, page: number = 1) {
    try {
        const url = new URL(API_ENDPOINTS.POSTS);

        if (search) url.searchParams.append('search', search);
        if (category) url.searchParams.append('category', category);
        url.searchParams.append('page', page.toString());

        const res = await fetch(url.toString(), {
            next: { revalidate: 600 }
        });

        if (!res.ok) throw new Error("Failed to fetch posts");

        const json = await res.json();
        return json;
    } catch (error) {
        return { data: [], meta: {} };
    }
}

export async function sendProjectRequest(data: any) {
    try {
        const url = new URL(API_ENDPOINTS.PROJECT_REQUEST);
        
        Object.keys(data).forEach(key => {
            if (data[key]) url.searchParams.append(key, data[key]);
        });

        const res = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });

        return await res.json();
    } catch (error) {
        return { success: false, message: "Connection error" };
    }
}

export async function getTestimonials() {
    try {
        const data = await getDashboardData();
        return data?.testimonials || [];
    } catch (error) {
        return [];
    }
}

export async function getPostBySlug(slug: string) {
    try {
        const res = await fetch(`${BASE_URL}/posts/${slug}`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) throw new Error("Post not found");

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}