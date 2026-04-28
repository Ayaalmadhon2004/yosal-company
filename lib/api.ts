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
        const formData = new FormData();
        formData.append('project_name', data.name); 
        formData.append('service_type', 'خدمة عامة'); 
        formData.append('budget', '0'); 
        formData.append('description', data.project_url || 'طلب تقييم من الموقع');
        formData.append('main_goals', 'تقييم المشروع'); 
        const fullDescription = `الإيميل: ${data.email} | الهاتف: ${data.phone} | الرابط: ${data.project_url}`;
        formData.set('description', fullDescription);

        const res = await fetch(API_ENDPOINTS.PROJECT_REQUEST, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData
        });

        const result = await res.json();
        return result;
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