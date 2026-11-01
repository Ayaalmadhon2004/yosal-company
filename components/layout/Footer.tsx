import Image from "next/image";
import Link from 'next/link';
import { 
  FaInstagram, 
  FaTiktok, 
  FaLinkedinIn, 
  FaSnapchat, 
  FaFacebookF, 
  FaXTwitter, 
  FaThreads 
} from "react-icons/fa6";
import FooterSubscribe from "./FooterSubscribe";
import ChatLoader from "./ChatLoader";

export default function Footer() {
  const socialIcons = [
    { Icon: FaInstagram, label: "انستقرام", link: "https://www.Instagram.com/yoosal.ag" },
    { Icon: FaTiktok, label: "تيك توك", link: "https://www.tiktok.com/@yoosal2" },
    { Icon: FaLinkedinIn, label: "لينكدإن", link: "https://www.linkedin.com/company/yoosal/" },
    { Icon: FaSnapchat, label: "سناب شات", link: "https://www.snapchat.com/add/yoosal.ag" },
    { Icon: FaFacebookF, label: "فيسبوك", link: "https://www.facebook.com/share/1DeynDWeNh/" },
    { Icon: FaXTwitter, label: "إكس (تويتر)", link: "https://x.com/Yoosal148837" },
    { Icon: FaThreads, label: "ثريدز", link: "https://www.threads.com/@yoosal.ag" }
  ];

  return (
    <footer className="bg-background text-white pt-16 pb-36 md:pb-16 border-t border-white/5 relative w-full" dir="rtl">
      
      <ChatLoader />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-12">

          {/* معلومات الوكالة */}
          <div className="md:col-span-6 lg:col-span-4 text-right flex flex-col items-start">
            <div className="mb-6">
              <Link href="/" aria-label="يوصل - الصفحة الرئيسية" className="inline-flex items-center min-h-11">
                <Image
                  width={180}
                  height={60}
                  src="/assets/logo.png" 
                  alt="Yoosel Logo" 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              وكالة سعودية متخصصة في النمو الرقمي، نجمع بين الإبداع والبيانات لتحقيق نتائج استثنائية لعملائنا.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all shadow-sm"
                >
                  <item.Icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="md:col-span-3 lg:col-span-2 text-right">
            <h2 className="text-white font-bold mb-6">روابط سريعة</h2>
            <ul className="text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">خدماتنا</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">أعمالنا</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">من نحن</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">المدونة</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 font-bold transition-colors inline-flex items-center min-h-11">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2 text-right">
            <h2 className="text-white font-bold mb-6">قانوني</h2>
            <ul className="text-gray-400 text-sm">
              <li><Link href="/private" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11">الشروط والأحكام</Link></li>
            </ul>
          </div>

          <FooterSubscribe />

        </div>

        {/* الحقوق */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-400 text-xs">
          <p>© 2026 يوصل - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}