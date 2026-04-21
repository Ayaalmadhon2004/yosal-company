// app/components/Navbar.tsx
"use client"
import Link from 'next/link'
import AppButton from './AppButton'
import { cn } from '@/lib/utils'

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
  return (
    <nav className="bg-[#0F112B] text-white sticky top-0 z-50 border-b border-white/5 shadow-2xl">
      {/* max-w-[1384px] هو المقاس الدقيق من Figma لضمان نفس التوزيع */}
      <div className="max-w-[1384px] mx-auto px-6 h-[76px] flex items-center justify-between">
        
        {/* 1. اليمين: الشعار */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <img 
              src="/assets/logo.png" 
              alt="Yoosel Logo" 
              // تصغير حجم الشعار ليكون متناسقاً مع الارتفاع الجديد
              className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* 2. المركز: الروابط (ليست متساوية مع الأطراف لتعطي راحة بصرية) */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center space-x-6 xl:space-x-10 space-x-reverse">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-gray-300 hover:text-[#F58220] transition-all duration-300 font-medium relative group pb-1 text-[15px]",
                    index === 0 && "text-[#F58220]" 
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 right-0 h-[2px] bg-[#F58220] transition-all group-hover:w-full",
                    index === 0 ? "w-full" : "w-0" 
                  )}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. اليسار: الزر */}
        <div className="flex-1 flex justify-end">
          <AppButton 
            variant="primary" 
            className="text-sm font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,130,32,0.3)] transition-shadow"
          >
            احجز استشارة مجانية
          </AppButton>
        </div>

      </div>
    </nav>
  )
}