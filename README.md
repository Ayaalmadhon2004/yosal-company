# يوصل — Yosal Agency Website

موقع وكالة «يوصل» للتسويق والخدمات الرقمية: واجهة عربية بالكامل (RTL) تعرض الخدمات والباقات والأعمال والمدونة، مع نموذج تواصل وطلب مشروع مرتبط بالـ Backend.

*English:* Arabic-first (RTL) marketing site for the "Yosal" digital agency, built with the Next.js App Router.

## التقنيات

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`) + `tw-animate-css`
- framer-motion للحركة
- shadcn / Radix UI / class-variance-authority للمكوّنات
- lucide-react و react-icons للأيقونات
- react-hot-toast للإشعارات
- ESLint 9 (`eslint-config-next`)

> تنبيه: هذه النسخة من Next.js فيها تغييرات جذرية. راجع `AGENTS.md` والأدلة في `node_modules/next/dist/docs/` قبل كتابة الكود.

## هيكل المشروع

```
app/            المسارات (about, blog/[slug], contact, packages,
                portfolio/[slug], private, services/[slug], terms) + layout.tsx
components/
  layout/       Navbar, Footer, ChatSystem
  sections/     أقسام الصفحات (home, about, blog, packages, ...)
  form/         ContactForm, DataForm, ReadyForm, SubscriptionForm
  ui/           AppButton, AppCard
constants/      بيانات ثابتة (blogData, servicesData, siteData, teamData)
hooks/          useDashboardStore (حالة البيانات)
lib/            api.ts (استدعاءات الـ Backend), utils.ts
types/          تعريفات TypeScript
public/         الصور والملفات الثابتة
```

## التشغيل

المتطلبات: Node.js 20.9 أو أحدث (يُنصح بـ 22 LTS) و npm.

```bash
npm ci            # تثبيت الاعتماديات
cp .env.example .env.local
npm run dev       # تطوير: http://localhost:3000
npm run lint      # فحص ESLint
npm run build     # بناء الإنتاج
npm run start     # تشغيل نسخة الإنتاج (بعد build)
```

## متغيرات البيئة

انظر `.env.example`. ملفات `.env*` الحقيقية مُتجاهَلة في git.

| المتغير | الوصف |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | عنوان الـ Backend API. القيمة الافتراضية في `lib/api.ts` هي سيرفر الإنتاج. |
| `NEXT_PUBLIC_SITE_URL` | الرابط العام للموقع. |

## تدفّق البيانات

- **الـ Backend:** `lib/api.ts` يقرأ `NEXT_PUBLIC_API_URL` ويوفّر `getDashboardData()` (جلب بيانات لوحة الموقع مع `revalidate` كل ساعة) و`sendProjectRequest()` (إرسال طلب مشروع من نماذج التواصل). عند فشل الطلب تُرجَع `null` ويُسجَّل الخطأ.
- **البيانات الثابتة:** مجلد `constants/` يحوي محتوى لا يأتي من الـ API (مقالات المدونة التجريبية، آراء العملاء، الفريق، بيانات الموقع) ويُستورد مباشرة في المكوّنات.
- **الحالة:** `hooks/useDashboardStore.ts` يشارك بيانات الـ Backend بين المكوّنات.

## آلية المساهمة

1. ميزة واحدة = فرع واحد = Pull Request واحد، يُفرَّع من أحدث `main` (مثل `feat/...`, `fix/...`, `chore/...`).
2. رسائل commit بصيغة Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:` ...).
3. تُنسب الـ commits إلى اسم صاحب المستودع، ولا تُضاف أسطر نسب لأدوات الذكاء الاصطناعي (مثل `Co-Authored-By`).
4. قبل فتح الـ PR شغّل `npm run lint` و`npm run build`، واستخدم قالب الـ PR (What / Why / How verified / Checklist) وأرفق لقطات شاشة لتغييرات الواجهة.
5. الـ CI (`.github/workflows/ci.yml`) يشغّل lint وbuild على كل PR وعلى كل push إلى `main`.
