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
      // 1. الألوان الاحترافية التي اخترتها
      colors: {
        brand: {
          dark: '#0F112B',    // الخلفية الأساسية
          navy: '#161839',    // الصناديق (Cards)
          orange: '#F58220',  // لون التمييز والأزرار
          accent: '#2A2D5A',  // للعناصر التفاعلية
        }
      },
      // 2. دمج خط Cairo
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
      // 3. أحجام خطوط قياسية لتناسق التصميم
      fontSize: {
        'hero-title': ['3.5rem', { lineHeight: '1.2', fontWeight: '900' }], // للعناوين الضخمة
        'section-title': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-text': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      }
    },
  },
  plugins: [],
};

export default config;