import { useState } from "react";
import { toast } from "react-hot-toast";
import { submitProjectRequest } from "@/lib/api";
import type { ProjectRequestPayload } from "@/types/api";

export const useDashboardStore = () => {
  const [isLoading, setIsLoading] = useState(false);

  const storeRequest = async (formData: ProjectRequestPayload) => {
    // رقم الجوال إلزامي بناءً على تعليمات الـ API
    if (!formData.phone) {
      toast.error("رقم الجوال مطلوب بشكل أساسي");
      return { success: false };
    }

    setIsLoading(true);
    try {
      const result = await submitProjectRequest(formData);

      if (result.status === "Success" || result.success) {
        toast.success(result.message || "تم إرسال طلبك بنجاح");
        return { success: true, data: result.data };
      }
      toast.error(result.message || "حدث خطأ أثناء إرسال البيانات");
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { storeRequest, isLoading };
};
