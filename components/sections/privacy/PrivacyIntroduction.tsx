import { ShieldCheck } from "lucide-react";

export default function PrivacyIntroduction() {
  return (
    <div className="bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800" dir="rtl">
      <div className="flex items-center gap-4 mb-6">
        <ShieldCheck className="text-[#F58220] w-8 h-8" />
        <h3 className="text-2xl font-black text-white">مقدمة</h3>
      </div>
      <p className="text-gray-400 leading-loose text-lg">
        نحن في "يوصل" ندرك تماماً أهمية البيانات في العصر الرقمي. تهدف هذه السياسة إلى إطلاعك على ممارساتنا المتعلقة بجمع واستخدام ومشاركة معلوماتك الشخصية عند استخدامك لموقعنا أو خدماتنا التسويقية.
      </p>
      <p className="text-gray-400 leading-loose text-lg mt-4 font-medium">
        باستخدامك لمنصتنا، فإنك توافق على الممارسات الموضحة في هذه الوثيقة، والتي تم تصميمها لتتوافق مع معايير حماية البيانات العالمية.
      </p>
    </div>
  );
}