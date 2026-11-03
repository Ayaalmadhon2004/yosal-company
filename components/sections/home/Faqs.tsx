import { getFaqs } from "@/lib/api";
import FaqItem from "./FaqItem";

interface ApiFaq {
  id: number | string;
  question: string;
  answer: string;
  service_id?: number;
}

// ترتيب عشوائي لأسئلة الصفحة الرئيسية (دالة نقية خارج المكون)
function pickRandomFaqs(faqs: ApiFaq[], count: number): ApiFaq[] {
  return [...faqs].sort(() => Math.random() - 0.5).slice(0, count);
}

interface FaqsProps {
  serviceId?: number; // نمرر رقم الخدمة هنا
}

export default async function Faqs({ serviceId }: FaqsProps) {
  const allData = await getFaqs<ApiFaq>();

  let displayData: ApiFaq[];

  if (serviceId) {
    // 1. تصفية الأسئلة الخاصة بالخدمة المحددة فقط
    // 2. قمنا بعمل slice(0, 3) لضمان عرض 3 أسئلة فقط كما طلبتِ
    displayData = allData
      .filter((faq) => faq.service_id === serviceId)
      .slice(0, 3); 
  } else {
    // إذا لم نمرر serviceId، يمكنك اختيار عرض 3 أسئلة عشوائية من الكل
    displayData = pickRandomFaqs(allData, 3);
  }

  if (displayData.length === 0) return null;

  return (
    <section className="py-24 bg-transparent" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-center mb-12">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {displayData.map((faq) => (
            <FaqItem 
              key={faq.id} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}