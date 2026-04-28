import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. الألوان الدقيقة مستخرجة يدوياً من لقطات شاشة فيجما (DNA الوكالة)
      colors: {
        brand: {
          dark: '#0F112B',    // الخلفية الأساسية العميقة
          navy: '#161839',    // لون الكروت والصناديق الأساسي
          orange: '#E6740F',  // اللون البرتقالي الأصلي (المستخرج من صورة الزر)
          accent: '#3C3F73',  // الكحلي الفاتح (المستخدم في الحقول والحدود)
        },
        // ربط متغيرات CSS الخاصة بـ Shadcn مع ألوان يوصل
        background: "#0F112B",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#E6740F",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#161839",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#3C3F73",
          foreground: "#E0E0FC",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },

      // 2. دمج خط Cairo ليكون هو الخط الأساسي للموقع
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        sans: ['var(--font-cairo)', 'ui-sans-serif', 'system-ui'],
      },

      // 3. أحجام الخطوط القياسية بناءً على الـ Typography في فيجما
      fontSize: {
        'hero-title': ['40px', { lineHeight: '40px', fontWeight: '900' }], // كما ظهر في Inspect فيجما
        'section-title': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'sub-title': ['20px', { lineHeight: 'snug', fontWeight: '700' }],
        'body-text': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'tag-sm': ['12px', { fontWeight: '500' }],
      },

      // 4. الزوايا الدائرية الكبيرة (Border Radius) كما في التصميم
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem', // للنماذج الكبيرة (45px تقريباً)
      },

      // 5. تأثيرات الظل المخصصة للبراند
      boxShadow: {
        'brand-orange': '0 10px 25px -5px rgba(230, 116, 15, 0.3)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), // لدعم الحركات اللي أضفناها في الفورم
  ],
};

export default config;