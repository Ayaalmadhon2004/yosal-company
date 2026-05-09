const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

export const API_ENDPOINTS = {
    DASHBOARD: `${BASE_URL}/dashboard`,
    PROJECT_REQUEST: `${BASE_URL}/dashboard`, // المسار الصحيح حسب البوستمان والباك آند
    POSTS: `${BASE_URL}/posts`,
};

// جلب بيانات الداشبورد (Testimonials, Services, etc.)
export async function getDashboardData() {
    try {
        const res = await fetch(API_ENDPOINTS.DASHBOARD, {
            next: { revalidate: 3600 }
        });
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Dashboard Fetch Error:", error);
        return null;
    }
}

// إرسال طلب المشروع (تواصل معنا) - مطابقة تامة للبوستمان
export async function sendProjectRequest(data: any) {
    try {
        // بناء الرابط مع الـ Params كما يظهر في توثيق البوستمان الخاص بكِ
        const url = new URL(API_ENDPOINTS.PROJECT_REQUEST);
        url.searchParams.append('name', data.name);
        url.searchParams.append('phone', data.phone);
        url.searchParams.append('email', data.email);
        url.searchParams.append('project_url', data.project_url || '');

        const res = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            // السيرفر يتوقع البيانات في الرابط (Params)، لذا الجسم (Body) يبقى فارغاً
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || `Server responded with ${res.status}`);
        }

        const result = await res.json();
        console.log("✅ Success Response:", result);
        return result; // سيعيد Object يحتوي على status: "Success"
        
    } catch (error: any) {
        console.error("❌ API Error:", error.message);
        return { status: "Error", message: error.message || "حدث خطأ في الاتصال بالسيرفر" };
    }
}

// جلب المقالات
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
        return await res.json();
    } catch (error) {
        console.error("Posts Fetch Error:", error);
        return { data: [], meta: {} }; 
    }
}

// جلب مقال واحد
export async function getPostBySlug(slug: string) {
    try {
        const res = await fetch(`${BASE_URL}/posts/${slug}`, {
            next: { revalidate: 3600 }
        });
        if (!res.ok) throw new Error("Post not found");
        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Post Detail Fetch Error:", error);
        return null;
    }
}