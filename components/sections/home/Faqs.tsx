import FaqItem from "./FaqItem";

async function getFaqsFromApi() {
  try {
    const res = await fetch('https://yosaal-website-backend.onrender.com/api/v1/faqs', {
      cache: 'no-store'
    });
    const result = await res.json();
    return result.data || [];
  } catch (error) {
    return [];
  }
}

// أضفنا serviceId كـ prop اختياري
export default async function Faqs({ serviceId }: { serviceId?: number }) {
  const allData = await getFaqsFromApi();

  let displayData = [];

  if (serviceId) {
    // 1. إذا مررنا serviceId (في صفحة الخدمة)، نظهر أسئلة هذه الخدمة فقط
    displayData = allData.filter((faq: any) => faq.service_id === serviceId);
  } else {
    // 2. إذا لم نمرر شيئاً (في الصفحة الرئيسية)، نظهر 4 أسئلة عشوائية من الكل
    displayData = [...allData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }

  if (!displayData || displayData.length === 0) return null;

  return (
    <section className="py-24 bg-transparent" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-center mb-12">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {displayData.map((faq: any) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}