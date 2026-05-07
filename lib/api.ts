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
        // تحويل البيانات لـ JSON بدلاً من FormData لضمان التوافق مع السيرفر
        const payload = {
            project_name: data.name,
            service_type: 'تقييم مشروع',
            budget: '0',
            main_goals: 'طلب تقييم للموقع من نموذج تواصل معنا',
            description: `إيميل العميل: ${data.email} | رقم الهاتف: ${data.phone} | رابط المشروع: ${data.project_url || 'لا يوجد'}`
        };

        const res = await fetch(API_ENDPOINTS.PROJECT_REQUEST, { // استخدم المتغير المعرف بالأعلى
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', // إخبار السيرفر أننا نرسل JSON
            },
            body: JSON.stringify(payload) 
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