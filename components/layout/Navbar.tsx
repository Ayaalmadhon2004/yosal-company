"use client";

import { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppButton } from '../ui/AppButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { DURATION, EASE } from '@/lib/motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/about' },
  { 
    name: 'خدماتنا', 
    href: '/services',
    dropdown: [
      { name: 'تحسين محركات SEO', href: '/services/seo' },
      { name: 'صناعة المحتوى والفيديو', href: '/services/content-creation' },
      { name: 'إنشاء هوية بصرية', href: '/services/branding' },
      { name: 'تطوير مواقع إلكترونية', href: '/services/web-development' },
      { name: 'التخطيط الاستراتيجي', href: '/services/strategic-planning' },
      { name: 'إدارة منصات التواصل', href: '/services/social-media' },
    ]
  },
  { name: 'أعمالنا', href: '/portfolio' },
  { name: 'الباقات', href: '/packages' },
  { name: 'المدونة', href: '/blog' },
  { name: 'تواصل معنا', href: '/contact' },
];

// true على العميل فقط (يتجنب عدم تطابق الـ hydration)
const subscribeNoop = () => () => {};
const useIsMounted = () => useSyncExternalStore(subscribeNoop, () => true, () => false);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useIsMounted();

  const WHATSAPP_CONSULTATION = "https://wa.link/4ddhsa";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.base, ease: EASE }}
        className={cn(
          "fixed top-0 w-full z-[9999] transition-all duration-500 mb-4", 
          "bg-background backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl" 
        )}
        dir="rtl"
      >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="relative group">
            <Image 
              src="/assets/logo.png" 
              alt="Yoosel Logo" 
              width={140}
              height={50}
              className="h-10 md:h-12 w-auto object-contain relative z-10" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center space-x-2 xl:space-x-4 space-x-reverse bg-secondary/20 backdrop-blur-md border border-white/5 px-6 py-2 rounded-full">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group/item">
                <Link 
                  href={link.href} 
                  className="px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-bold flex items-center gap-1.5 text-[14px] xl:text-[15px]"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="group-hover/item:rotate-180 transition-transform duration-300" />}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-[calc(100%+15px)] right-0 w-72 bg-[#1A1D2E] border border-white/10 rounded-[1.5rem] shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 p-4 z-[100]">
                    <div className="grid grid-cols-1 gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
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

        {/* Action Button Desktop */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-4">
          <AppButton 
            variant="beige" 
            asChild
            className="rounded-full px-8 py-3 font-black text-sm transition-all duration-300"
            style={{ boxShadow: '0 0 15px 0 rgba(230, 116, 15, 0.3)' }}
          >
            <a href={WHATSAPP_CONSULTATION} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              احجز استشارة مجانية
            </a>
          </AppButton>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center z-[10000]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-background transition-all duration-500 z-[9998]",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
      )}>
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <ul className="flex flex-col space-y-4 overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/5 pb-4">
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl font-black mb-3 block"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="grid grid-cols-1 gap-3 mr-4 pr-4 border-r-2 border-primary/20">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-primary text-lg font-bold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          {/* زر الموبايل الثابت والمضمون ضد الاختفاء */}
          <div className="mt-auto pt-8">
            <AppButton 
              variant="beige"
              asChild
              className="!w-full !h-16 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center"
              style={{ boxShadow: '0 0 15px 0 rgba(230, 116, 15, 0.3)' }}
            >
              <a href={WHATSAPP_CONSULTATION} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center gap-2">
                احجز استشارة مجانية
              </a>
            </AppButton>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}