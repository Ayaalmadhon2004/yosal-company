const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://yosaal-website-backend.onrender.com/api/v1";

export const API_ENDPOINTS = {
    DASHBOARD: `${BASE_URL}/dashboard`,
    PROJECT_REQUEST: `${BASE_URL}/project-request`,
    POSTS: `${BASE_URL}/posts`,
};

// 1. جلب بيانات الداشبورد (Testimonials وغيرها)
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

// 2. إرسال طلب مشروع (تواصل معنا) - تم التعديل ليتوافق مع Postman
export async function sendProjectRequest(data: any) {
    try {
        // إنشاء FormData بدلاً من JSON بناءً على توثيق API (Postman)
        const formData = new FormData();
        
        // مطابقة الحقول مع ما يتوقعه الباك آند في Postman
        formData.append('project_name', data.name);
        formData.append('service_type', data.service_type || 'طلب تقييم أولي');
        formData.append('budget', data.budget || '0');
        formData.append('main_goals', data.main_goals || 'تقييم الموقع من الصفحة الرئيسية');
        
        // دمج معلومات التواصل الإضافية في الوصف لضمان وصولها
        const fullDescription = `${data.description} | إيميل: ${data.email} | هاتف: ${data.phone} | الرابط: ${data.project_url || 'لا يوجد'}`;
        formData.append('description', fullDescription);

        const res = await fetch(API_ENDPOINTS.PROJECT_REQUEST, {
            method: 'POST',
            headers: {
                // ملاحظة: لا تضعي Content-Type يدوياً عند استخدام FormData
                'Accept': 'application/json',
            },
            body: formData 
        });

        // التحقق من استجابة السيرفر
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || `Server responded with ${res.status}`);
        }

        const result = await res.json();
        console.log("✅ Success Response:", result);
        return result;
        
    } catch (error: any) {
        console.error("❌ API Error:", error.message);
        return { status: "Error", message: error.message || "حدث خطأ في الاتصال بالسيرفر" };
    }
}

// 3. جلب المقالات مع البحث والفلترة
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

// 4. جلب مقال واحد بواسطة الـ Slug
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

// 5. جلب آراء العملاء
export async function getTestimonials() {
    try {
        const data = await getDashboardData();
        return data?.testimonials || [];
    } catch (error) {
        return [];
    }
}