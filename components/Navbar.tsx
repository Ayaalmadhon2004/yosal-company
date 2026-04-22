"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AppButton } from './ui/AppButton'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '#about' },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'الباقات', href: '#packages' },
  { name: 'المدونة', href: '#blog' },
  { name: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير عند التمرير لتغيير شفافية الخلفية
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 border-b",
        scrolled 
          ? "bg-brand-dark/95 backdrop-blur-md border-white/10 py-2 shadow-2xl" 
          : "bg-brand-dark border-transparent py-4"
      )}
      dir="rtl"
    >
      <div className="max-w-[1384px] mx-auto px-6 flex items-center justify-between">
        
        {/* الشعار - Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <img 
              src="/assets/logo.png" 
              alt="Yoosel Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* القائمة لسطح المكتب - Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center space-x-6 xl:space-x-10 space-x-reverse">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-gray-300 hover:text-brand-orange transition-all duration-300 font-medium relative group pb-1 text-[15px]",
                    index === 0 && "text-brand-orange" 
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 right-0 h-[2px] bg-brand-orange transition-all group-hover:w-full",
                    index === 0 ? "w-full" : "w-0" 
                  )}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* أزرار الأكشن - Actions */}
        <div className="flex-1 hidden lg:flex justify-end">
          <AppButton 
            variant="primary" 
            className="text-sm font-bold px-8 py-3 rounded-full bg-brand-orange hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all"
          >
            احجز استشارة مجانية
          </AppButton>
        </div>

        {/* زر البرجر للهواتف - Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* القائمة المنبثقة للهواتف - Mobile Navigation Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 transition-all duration-500 overflow-hidden shadow-2xl",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <ul className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-orange block py-2 text-lg font-medium transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-white/5">
            <AppButton 
              variant="primary" 
              className="w-full py-4 bg-brand-orange rounded-xl font-bold"
            >
              احجز استشارة مجانية
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
  )
}