"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // تم تحديث الرابط ليتوافق مع هيكلية الـ API الخاص بكِ إذا توفر للنشرة
      const res = await fetch("https://yosaal-website-backend.onrender.com/api/v1/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });

      if (res.ok) {
        toast.success("أهلاً بك في عائلة يوصل! سيصلك الإلهام قريباً.", {
          icon: <Sparkles className="text-primary" />,
          style: {
            background: 'var(--secondary)',
            color: 'var(--foreground)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 138, 51, 0.2)',
          }
        });
        setEmail("");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("حدث خطأ بسيط، حاول مجدداً بعد ثوانٍ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto group">
      <form 
        onSubmit={handleSubmit} 
        className="relative flex flex-col sm:flex-row gap-3 p-2 bg-secondary/30 backdrop-blur-md rounded-[2rem] border border-white/5 focus-within:border-primary/30 transition-all duration-500 shadow-2xl"
        dir="rtl"
      >
        {/* حقل الإدخال */}
        <div className="relative flex-grow flex items-center">
          <div className="absolute right-5 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Mail size={18} />
          </div>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="بريدك الإلكتروني للحصول على الإلهام..." 
            className="w-full bg-transparent pr-12 pl-4 py-4 text-foreground outline-none placeholder:text-muted-foreground/30 font-bold text-sm"
            required
          />
        </div>

        {/* زر الاشتراك */}
        <button 
          type="submit"
          disabled={loading}
          className={cn(
            "relative overflow-hidden px-8 py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]",
            "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 disabled:opacity-70"
          )}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>اشترك الآن</span>
              <CheckCircle2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
          
          {/* تأثير ضوئي عند التحويم */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </form>
      
      {/* نص طمأنة أسفل الفورم */}
      <p className="text-[10px] text-muted-foreground/50 mt-4 text-center font-medium italic">
        * انضم لـ +2000 مشترك، يمكنك إلغاء الاشتراك في أي وقت (لكنك لن ترغب في ذلك 😉).
      </p>
    </div>
  );
}