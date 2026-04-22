import Image from "next/image";
// 💡 استخدمنا أيقونات بديلة مضمونة الوجود في كل إصدارات Lucide
import { Send, Globe, Share2, Mail, ExternalLink, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F112B] text-white py-16 border-t border-white/5" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* اللوغو والأيقونات البديلة */}
          <div className="md:col-span-4 text-right flex flex-col items-end">
            <div className="mb-6">
               <h2 className="text-4xl font-black text-white italic">يوصل</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              وكالة سعودية متخصصة في النمو الرقمي، نجمع بين الإبداع والبيانات لتحقيق نتائج استثنائية لعملائنا.
            </p>
            <div className="flex gap-4">
              {/* 💡 استخدام أيقونات آمنة تماماً لتجاوز خطأ Lucide */}
              {[Globe, Share2, Mail, ExternalLink, Info].map((Icon, idx) => (
                <div key={idx} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#F58220]/50 hover:text-[#F58220] transition-all cursor-pointer">
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
          {/* روابط سريعة */}
          <div className="md:col-span-2 text-right">
            <h4 className="text-[#F58220] font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">الرئيسية</li>
              <li className="hover:text-white cursor-pointer">خدماتنا</li>
              <li className="hover:text-white cursor-pointer">أعمالنا</li>
            </ul>
          </div>

          {/* قانوني */}
          <div className="md:col-span-2 text-right">
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">الخصوصية</li>
              <li className="hover:text-white cursor-pointer">الشروط</li>
            </ul>
          </div>

           <div className="md:col-span-4">
            <div className="bg-[#161839] p-8 rounded-3xl border border-[#F58220]/20 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4">كُن أول من يصله الإلهام</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                انضم إلى قائمتنا البريدية لتصلك أحدث استراتيجيات التسويق وفنون التصميم مباشرة إلى بريدك.
              </p>
              <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="bg-transparent flex-grow px-4 py-2 text-sm outline-none"
                />
                <button className="bg-[#F58220] p-3 rounded-lg hover:bg-[#ff933b] transition-all">
                  <Send className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-[10px]">
          <p>© 2026 يوصل - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}