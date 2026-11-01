"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AppButton } from "../ui/AppButton";
import { cn } from "@/lib/utils";

export interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

interface NavMobileMenuProps {
  links: NavLinkItem[];
  consultationHref: string;
}

/** جزيرة العميل الوحيدة في الـ Navbar: زر القائمة + طبقة قائمة الموبايل */
export default function NavMobileMenu({ links, consultationHref }: NavMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // قفل التمرير أثناء فتح القائمة + إغلاقها بـ Esc أو عند التكبير لعرض سطح المكتب
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onChange);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="xl:hidden flex items-center z-[10000]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="p-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all active:scale-95"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "xl:hidden fixed inset-0 top-0 left-0 w-full h-dvh bg-background transition-all duration-500 z-[9998]",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
        )}
      >
        <div className="flex flex-col h-full pt-24 pb-[max(1.25rem,env(safe-area-inset-bottom))] px-6 sm:px-8">
          <ul className="flex flex-col flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-2 pb-4">
            {links.map((link) => (
              <li key={link.name} className="border-b border-white/5 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl sm:text-2xl font-black min-h-11 flex items-center"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="grid grid-cols-1 mr-4 pr-4 mb-1 border-r-2 border-primary/20">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-primary text-base sm:text-lg font-bold min-h-11 flex items-center"
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
          <div className="shrink-0 pt-4">
            <AppButton
              variant="beige"
              asChild
              className="!w-full !h-14 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center"
              style={{ boxShadow: "0 0 15px 0 rgba(230, 116, 15, 0.3)" }}
            >
              <a
                href={consultationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center gap-2"
              >
                احجز استشارة مجانية
              </a>
            </AppButton>
          </div>
        </div>
      </div>
    </>
  );
}
