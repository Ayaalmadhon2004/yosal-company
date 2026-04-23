"use client"; // إضافة التوجيه لتمكين الـ Hooks

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppButton } from '../ui/AppButton';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '#about' },
  { 
    name: 'خدماتنا', 
    href: '/services',
    dropdown: [
      // تحديث الروابط لتطابق الـ Slugs في ملف servicesData.ts
      { name: 'تحسين محركات البحث', href: '/services/seo' },
      { name: 'صناعة المحتوى والفيديو', href: '/services/content-creation' },
      { name: 'إنشاء هوية بصرية', href: '/services/branding' },
      { name: 'تطوير مواقع إلكترونية', href: '/services/web-development' },
      { name: 'التخطيط الاستراتيجي', href: '/services/strategic-planning' },
      { name: 'إدارة منصات التواصل', href: '/services/social-media' },
    ]
  },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'الباقات', href: '#packages' },
  { name: 'المدونة', href: '#blog' },
  { name: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // التأكد من أن المكون تم تحميله في المتصفح لتجنب أخطاء الـ Hydration
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 border-b",
        scrolled 
          ? "bg-[#1A1C2E]/95 backdrop-blur-md border-white/10 py-2 shadow-2xl" 
          : "bg-transparent border-transparent py-4"
      )}
      dir="rtl"
    >
      <div className="max-w-[1384px] mx-auto px-6 flex items-center justify-between">
        
        {/* الشعار - Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/assets/logo.png" 
              alt="Yoosel Logo" 
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* القائمة لسطح المكتب - Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center space-x-6 xl:space-x-10 space-x-reverse">
            {navLinks.map((link, index) => (
              <li key={link.name} className="relative group/item">
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-gray-300 hover:text-[#F58220] transition-all duration-300 font-medium flex items-center gap-1 pb-1 text-[15px]"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="group-hover/item:rotate-180 transition-transform" />}
                  <span className={cn(
                    "absolute -bottom-1 right-0 h-[2px] bg-[#F58220] transition-all group-hover/item:w-full w-0"
                  )}></span>
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-[#1A1C2E] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#F58220] border-b border-white/5 last:border-0 transition-colors text-right"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* أزرار الأكشن */}
        <div className="flex-1 hidden lg:flex justify-end">
          <AppButton 
            variant="primary" 
            size="md"
            className="text-sm px-8 shadow-[0_0_20px_rgba(245,130,32,0.4)]"
          >
            احجز استشارة مجانية
          </AppButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-[#1A1C2E] border-b border-white/10 transition-all duration-500 overflow-hidden shadow-2xl",
        isOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
      )}>
        <ul className="flex flex-col p-6 space-y-4 text-right">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-[#F58220] block py-2 text-lg font-medium"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <ul className="pr-4 mt-2 border-r border-white/10 space-y-2">
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-[#F58220] text-sm block py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-4 border-t border-white/5">
            <AppButton variant="primary" size="lg" className="w-full">
              احجز استشارة مجانية
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}