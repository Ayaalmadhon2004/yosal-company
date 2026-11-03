import Link from 'next/link';
import Image from 'next/image';
import { AppButton } from '../ui/AppButton';
import { cn } from '@/lib/utils';
import { ChevronDown, Sparkles } from 'lucide-react';
import NavMobileMenu from './NavMobileMenu';

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
  const WHATSAPP_CONSULTATION = "https://wa.link/4ddhsa";

  return (
      <nav
        aria-label="التنقل الرئيسي"
        className={cn(
          "nav-enter fixed top-0 w-full z-[9999] transition-colors duration-500", 
          "bg-background border-b border-white/5 py-3 shadow-2xl" 
        )}
        dir="rtl"
      >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="relative group inline-flex items-center min-h-11" aria-label="يوصل - الصفحة الرئيسية">
            <Image 
              src="/assets/logo.png" 
              alt="شعار يوصل" 
              width={140}
              height={50}
              priority
              className="h-10 md:h-12 w-auto object-contain relative z-10" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-center">
          <ul className="flex items-center space-x-2 xl:space-x-4 space-x-reverse bg-secondary/20 border border-white/5 px-6 py-2 rounded-full">
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
                  <div className="absolute top-[calc(100%+15px)] right-0 w-72 bg-brand-panel border border-white/10 rounded-[1.5rem] shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-focus-within/item:opacity-100 group-focus-within/item:visible transition-all duration-300 p-4 z-[100]">
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
        <div className="flex-1 hidden xl:flex justify-end items-center gap-4">
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

        <NavMobileMenu links={navLinks} consultationHref={WHATSAPP_CONSULTATION} />
      </div>
    </nav>
  );
}