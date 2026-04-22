import Image from "next/image";
import { Send, Globe, Share2, Mail, ExternalLink, Info } from "lucide-react";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16 border-t border-white/5" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          <div className="md:col-span-4 text-right flex flex-col items-start">
            <div className="mb-6">
              <Link href="/" className="flex items-center group">
                <Image
                  width="200"
                  height="200"
                  src="/assets/logo.png" 
                  alt="Yoosel Logo" 
                  className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </Link>
            </div>
            <p className="text-gray-400 text-body leading-relaxed mb-8 max-w-sm">
              وكالة سعودية متخصصة في النمو الرقمي، نجمع بين الإبداع والبيانات لتحقيق نتائج استثنائية لعملائنا.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail, ExternalLink, Info].map((Icon, idx) => (
                <div key={idx} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-brand-orange/50 hover:text-brand-orange transition-all cursor-pointer">
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 text-right">
            <h4 className="text-brand-orange text-sub-title mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-body">
              <li className="hover:text-white cursor-pointer transition-colors">الرئيسية</li>
              <li className="hover:text-white cursor-pointer transition-colors">خدماتنا</li>
              <li className="hover:text-white cursor-pointer transition-colors">أعمالنا</li>
              <li className="hover:text-white cursor-pointer transition-colors">من نحن</li>
              <li className="hover:text-white cursor-pointer transition-colors">الباقات</li>
              <li className="hover:text-white cursor-pointer transition-colors">المدونة</li>
              <li className="hover:text-white cursor-pointer transition-colors">تواصل معنا </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-right">
            <h4 className="text-white text-sub-title mb-6">قانوني</h4>
            <ul className="space-y-4 text-gray-400 text-body">
              <li className="hover:text-white cursor-pointer transition-colors">الخصوصية</li>
              <li className="hover:text-white cursor-pointer transition-colors">الشروط</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="bg-brand-navy p-8 rounded-3xl border border-brand-orange/20 relative overflow-hidden">
              <h3 className="text-sub-title font-black mb-4">كُن أول من يصله الإلهام</h3>
              <p className="text-gray-400 text-tag-lg mb-6 leading-relaxed">
                انضم إلى قائمتنا البريدية لتصلك أحدث استراتيجيات التسويق وفنون التصميم مباشرة إلى بريدك.
              </p>
              <div className="flex gap-2 bg-brand-dark/50 p-1 rounded-xl border border-white/10 focus-within:border-brand-orange/50 transition-all">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="bg-transparent flex-grow px-4 py-2 text-tag-lg outline-none text-white placeholder:text-gray-600"
                />
                <button className="bg-brand-orange p-3 rounded-lg hover:bg-brand-orange/80 transition-all shadow-lg shadow-brand-orange/10">
                  <Send className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-tag-sm">
          <p>© 2026 يوصل - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}