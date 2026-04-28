"use client";

import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrivacyContactProps {
  whatsappLink?: string;
  className?: string;
}

export default function PrivacyContact({ 
  whatsappLink = "https://wa.me/qr/YDPUM4DFRP4NP1",
  className
}: PrivacyContactProps) {
  return (
    <section className={cn("mt-20 px-6 pb-12", className)} dir="rtl">
      <div className="max-w-6xl mx-auto border-2 border-primary/30 rounded-[3rem] p-8 md:p-14 flex flex-col lg:flex-row justify-between items-center gap-10 bg-secondary/20 backdrop-blur-md relative overflow-hidden group">
        
        {/* تأثير إضاءة خلفي عند التحويم */}
        <div className="absolute -inset-1 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="text-right relative z-10 flex-1">
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
            هل لديك <span className="text-primary">استفسار؟</span>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg font-medium max-w-md">
            فريقنا القانوني والتقني جاهز للرد على أسئلتك حول خصوصية بياناتك ومعالجتها.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto relative z-10">
          {/* رابط البريد الإلكتروني */}
          <a 
            href="mailto:privacy@yoosel.com" 
            className="flex items-center gap-4 /50 px-8 py-5 rounded-2xl border border-white/5 hover:border-primary/40 hover: transition-all duration-300 w-full sm:w-auto group/mail shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover/mail:bg-primary group-hover/mail:text-white transition-colors">
              <Mail className="text-primary w-5 h-5 group-hover/mail:text-white" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs text-muted-foreground font-bold">راسلنا عبر</span>
              <span className="text-foreground text-sm font-black tracking-wide">
                privacy@yoosel.com
              </span>
            </div>
          </a>

          {/* زر الواتساب */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-base hover:bg-primary/90 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-primary/20 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-3 group/btn"
          >
            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}