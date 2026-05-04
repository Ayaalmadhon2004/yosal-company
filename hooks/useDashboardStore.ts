import { useState } from "react";
import { toast } from "react-hot-toast";

interface StoreData {
  phone: string;
  name?: string;
  email?: string;
  project_url?: string;
}

export const useDashboardStore = () => {
  const [isLoading, setIsLoading] = useState(false);

  const storeRequest = async (formData: StoreData) => {
    // رقم الجوال إلزامي بناءً على تعليمات الـ API
    if (!formData.phone) {
      toast.error("رقم الجوال مطلوب بشكل أساسي");
      return;
    }

    setIsLoading(true);

    try {
      // بناء الرابط باستخدام Query Parameters كما هو مطلوب
      const queryParams = new URLSearchParams({
        phone: formData.phone,
        ...(formData.name && { name: formData.name }),
        ...(formData.email && { email: formData.email }),
        ...(formData.project_url && { project_url: formData.project_url }),
      });

      const url = `http://localhost:8000/api/v1/dashboard?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "تم إرسال طلبك بنجاح");
        return { success: true, data: result.data };
      } else {
        toast.error(result.message || "حدث خطأ أثناء إرسال البيانات");
        return { success: false };
      }
    } catch (error) {
      toast.error("فشل الاتصال بالسيرفر، تأكد من تشغيل الـ API");
      console.error("Dashboard Store Error:", error);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { storeRequest, isLoading };
};