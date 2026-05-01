"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppButton } from '../ui/AppButton';
import { cn } from '@/lib/utils';
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const WHATSAPP_CONSULTATION = "https://wa.link/4ddhsa";

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
        "fixed top-0 w-full z-[100] transition-all duration-500 border-b",
        scrolled 
          ? "/80 backdrop-blur-xl border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
          : "bg-background border-transparent py-6"
      )}
      dir="rtl"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="relative group">
            <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image 
              src="/assets/logo.png" 
              alt="Yoosel Logo" 
              width={140}
              height={50}
              className="h-10 md:h-12 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" 
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
                  className="px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-bold flex items-center gap-1.5 text-[14px] xl:text-[15px] relative"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="group-hover/item:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Enhanced Dropdown */}
                {link.dropdown && (
                      <div className="absolute top-[calc(100%+10px)] right-0 w-72 bg-[#1A1D2E] border border-white/20 rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 p-4 z-[100]">
                        <div className="grid grid-cols-1 gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 group/link"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/link:bg-primary transition-colors" />
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

        {/* Action Button */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-4">
          <AppButton 
            variant="orange" 
            className="rounded-full px-8 py-6 font-black text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2 group"
          >
            <a href={WHATSAPP_CONSULTATION} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              احجز استشارة مجانية
            </a>
          </AppButton>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-2xl bg-secondary/40 border border-white/5 text-primary active:scale-90 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden absolute top-[calc(100%+10px)] left-6 right-6 bg-secondary/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] transition-all duration-700 transform origin-top shadow-2xl",
        isOpen ? "scale-y-100 opacity-100 translate-y-0" : "scale-y-0 opacity-0 -translate-y-10 pointer-events-none"
      )}>
        <ul className="flex flex-col p-8 space-y-2 text-right max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2">
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block text-xl font-black transition-colors"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="grid grid-cols-1 gap-2 mt-4 mr-4 pr-4 border-r-2 border-primary/20">
                  {link.dropdown.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-primary text-base font-bold py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="pt-8 mt-4 border-t border-white/5">
            <AppButton variant="orange" className="w-full py-8 rounded-[1.5rem] font-black text-lg shadow-xl shadow-primary/20">
              <a href={WHATSAPP_CONSULTATION} target="_blank" rel="noopener noreferrer">
                ابدأ رحلتك الآن
              </a>
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}