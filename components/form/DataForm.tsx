"use client";
import { useState } from "react";
import { sendProjectRequest } from "@/lib/api";
import toast from "react-hot-toast";
import { AppButton } from "../ui/AppButton";

export default function ProjectAuditForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("full_name") as string,
      phone: formData.get("phone") as string,
      // بما أن التصميم الجديد يركز على حقلين فقط، نرسل قيم افتراضية للباقي لمنع 422
      email: "audit-request@user.com", 
      project_url: "طلب تقييم داخلي",
    };

    try {
      const result = await sendProjectRequest(data);

      if (result.status === "Success") {
        toast.success("تم إرسال طلبك بنجاح! فريقنا سيتواصل معك.");
        form.reset();
      } else {
        throw new Error(result.message || "حدث خطأ في البيانات");
      }
    } catch (err: any) {
      toast.error(err.message || "فشل الإرسال، حاول مجدداً");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#1e233d]/50 border border-orange-500/30 rounded-[30px] p-6 shadow-xl" dir="rtl">
      {/* البوكس العلوي - عرض خاص */}
      <div className="bg-[#2d345a] rounded-2xl p-5 mb-8 text-center border border-white/5">
        <span className="text-orange-400 font-bold text-sm block mb-2">عرض خاص</span>
        <h3 className="text-white font-bold text-lg mb-2">احصل على تقييم مجاني لمتجرك/مشروعك</h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          سنقوم بإعطائك المعلومات الكافية لمعرفة خطوتك القادمة في التسويق الإلكتروني عن طريق تحليل سريع لنقاط الضعف والقوة.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* حقل الاسم */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium mr-1">الاسم الكامل</label>
          <input
            name="full_name"
            required
            placeholder="أدخل اسمك هنا ...."
            className="w-full bg-[#12162b] border border-orange-500/20 rounded-xl p-4 text-white placeholder:text-gray-600 outline-none focus:border-orange-500 transition-all text-right"
          />
        </div>

        {/* حقل الهاتف */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium mr-1">رقم الهاتف</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="أدخل رقم الهاتف 05xxxxxxxx"
            className="w-full bg-[#12162b] border border-orange-500/20 rounded-xl p-4 text-white placeholder:text-gray-600 outline-none focus:border-orange-500 transition-all text-right"
          />
        </div>

        {/* زر التقييم */}
        <AppButton
          type="submit"
          variant="orange"
          disabled={loading}
          className="w-full py-4 rounded-xl text-lg font-bold shadow-lg shadow-orange-600/20"
        >
          {loading ? "جاري المعالجة..." : "أحصل على التقييم"}
        </AppButton>

        <p className="text-center text-gray-500 text-[10px] mt-4">
          نحن نحترم خصوصيتك. بياناتك آمنة معنا.
        </p>
      </form>
    </div>
  );
}