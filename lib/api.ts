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

export async function sendProjectRequest(data: any) {
    try {
        const formData = new FormData();
        formData.append('project_name', data.name); 
        formData.append('service_type', 'تقييم مشروع'); 
        formData.append('budget', '0'); 
        formData.append('main_goals', 'طلب تقييم للموقع من نموذج تواصل معنا'); 
        
        const fullDescription = `
            إيميل العميل: ${data.email}
            رقم الهاتف: ${data.phone}
            رابط المشروع: ${data.project_url || 'لا يوجد'}
        `;
        formData.append('description', fullDescription);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project-request`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData 
        });

        const result = await res.json();
        return result;
        
    } catch (error) {
        console.error("API Error:", error);
        return { status: "Error", message: "حدث خطأ في الاتصال بالسيرفر" };
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