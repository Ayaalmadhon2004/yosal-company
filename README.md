<div align="center">

<img src="docs/images/banner.png" alt="يوصل — Yosal Agency" width="100%" />

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-0F112B?style=for-the-badge&logo=nextdotjs&logoColor=EDE7D1)
![React](https://img.shields.io/badge/React-19-161839?style=for-the-badge&logo=react&logoColor=E6740F)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3C3F73?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-E6740F?style=for-the-badge&logo=tailwindcss&logoColor=white)
![RTL](https://img.shields.io/badge/RTL-عربي_أولاً-EDE7D1?style=for-the-badge&labelColor=0F112B&color=EDE7D1&logoColor=0F112B)

**موقع وكالة «يوصل» للتسويق والخدمات الرقمية**
واجهة عربية بالكامل (RTL) تعرض الخدمات والباقات والأعمال والمدونة، مع نموذج تواصل وطلب مشروع مرتبط بالـ Backend.

*Arabic-first (RTL) marketing site for the "Yosal" digital agency, built with the Next.js App Router.*

[المميزات](#-المميزات) •
[لقطات الشاشة](#-لقطات-الشاشة) •
[التقنيات](#-التقنيات) •
[التشغيل](#-التشغيل-السريع) •
[هيكل المشروع](#-هيكل-المشروع) •
[المساهمة](#-آلية-المساهمة)

</div>

<br />

## ✨ المميزات

<div dir="rtl">

| | الميزة | الوصف |
| :-: | :-- | :-- |
| 🌐 | **واجهة عربية RTL** | تصميم كامل من اليمين لليسار بخط Cairo، متجاوب مع الجوال والتابلت والديسكتوب. |
| 🛠️ | **صفحات الخدمات** | صفحة لكل خدمة (`/services/[slug]`) بمخرجات وخطوات عمل وأسئلة شائعة. |
| 💼 | **معرض الأعمال** | مشاريع قابلة للتصفية حسب التصنيف، وصفحة تفصيلية لكل مشروع. |
| 📦 | **الباقات** | عرض الباقات والأسعار مباشرة من الـ Backend. |
| 📝 | **المدونة** | مقالات مع صفحة تفصيلية لكل مقال (`/blog/[slug]`). |
| 📨 | **طلب مشروع وتواصل** | نماذج تواصل وتقييم مجاني ترسل البيانات إلى الـ Backend، مع إشعارات فورية. |
| 💬 | **تواصل سريع** | أزرار واتساب ودعم عائمة في كل الصفحات. |
| 🎞️ | **حركة متوازنة** | ظهور تدريجي عند التمرير، انتقالات بين الصفحات وتفاعلات دقيقة عبر framer-motion. |
| 🔍 | **SEO** | `sitemap.xml` و`robots.txt` تلقائيان وصفحات خطأ مخصّصة (404 / error). |

</div>

## 🖼️ لقطات الشاشة

<div align="center">

<img src="docs/screenshots/home.png" alt="الصفحة الرئيسية" width="100%" />

**الصفحة الرئيسية**

<br />

<table>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshots/about.png" alt="من نحن" />
      <br /><b>من نحن</b>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshots/portfolio.png" alt="معرض الأعمال" />
      <br /><b>معرض الأعمال</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshots/contact.png" alt="تواصل معنا" />
      <br /><b>تواصل معنا</b>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshots/mobile.png" alt="نسخة الجوال" width="220" />
      <br /><b>نسخة الجوال</b>
    </td>
  </tr>
</table>

</div>

## 🎨 هوية البراند

الألوان معرّفة في `tailwind.config.ts` و`app/globals.css`، والشعار في `public/assets/logo.png`.

<img src="docs/images/palette.png" alt="ألوان البراند" width="100%" />

<div dir="rtl">

| الاسم | القيمة | الاستخدام |
| :-- | :-: | :-- |
| 🟦 **Dark** | `#0F112B` | الخلفية الأساسية العميقة |
| 🟦 **Navy** | `#161839` | الكروت والصناديق |
| 🟪 **Accent** | `#3C3F73` | الحقول والتدرجات |
| 🟧 **Orange** | `#E6740F` | لون العلامة والأزرار والتمييز |
| 🟨 **Beige** | `#EDE7D1` | الشعار والنصوص الفاتحة |

الخط: **Cairo** (عبر `next/font`).

</div>

## 🧰 التقنيات

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js_16-0F112B?style=flat-square&logo=nextdotjs&logoColor=EDE7D1)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-161839?style=flat-square&logo=react&logoColor=E6740F)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3C3F73?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-E6740F?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0F112B?style=flat-square&logo=framer&logoColor=EDE7D1)](https://www.framer.com/motion/)
[![Radix UI](https://img.shields.io/badge/shadcn%2FRadix_UI-161839?style=flat-square&logo=radixui&logoColor=E6740F)](https://ui.shadcn.com)
[![ESLint](https://img.shields.io/badge/ESLint_9-3C3F73?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)

</div>

<div dir="rtl">

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) + `tw-animate-css`
- **framer-motion** للحركة
- **shadcn / Radix UI / class-variance-authority** للمكوّنات
- **lucide-react** و**react-icons** للأيقونات
- **react-hot-toast** للإشعارات

</div>

> [!WARNING]
> هذه النسخة من Next.js فيها تغييرات جذرية. راجع `AGENTS.md` والأدلة في `node_modules/next/dist/docs/` قبل كتابة الكود.

## 🚀 التشغيل السريع

المتطلبات: **Node.js 20.9** أو أحدث (يُنصح بـ 22 LTS) و**npm**.

```bash
npm ci                      # تثبيت الاعتماديات
cp .env.example .env.local  # إعداد متغيرات البيئة
npm run dev                 # تطوير: http://localhost:3000
```

| الأمر | الوظيفة |
| :-- | :-- |
| `npm run dev` | تشغيل نسخة التطوير |
| `npm run lint` | فحص ESLint |
| `npm run build` | بناء نسخة الإنتاج |
| `npm run start` | تشغيل نسخة الإنتاج (بعد `build`) |

### 🔐 متغيرات البيئة

انظر `.env.example`. ملفات `.env*` الحقيقية مُتجاهَلة في git.

| المتغير | الوصف |
| :-- | :-- |
| `NEXT_PUBLIC_API_URL` | عنوان الـ Backend API. القيمة الافتراضية في `lib/api.ts` هي سيرفر الإنتاج. |
| `NEXT_PUBLIC_SITE_URL` | الرابط العام للموقع. |

## 🗂️ هيكل المشروع

```text
yosal-company/
├── app/                  المسارات (about, blog/[slug], contact, packages,
│                         portfolio/[slug], private, services/[slug], terms) + layout.tsx
├── components/
│   ├── layout/           Navbar, Footer, ChatSystem
│   ├── sections/         أقسام الصفحات (home, about, blog, packages, ...)
│   ├── form/             ContactForm, DataForm, ReadyForm, SubscriptionForm
│   └── ui/               AppButton, AppCard
├── constants/            بيانات ثابتة (blogData, servicesData, siteData, teamData)
├── hooks/                useDashboardStore (حالة البيانات)
├── lib/                  api.ts (استدعاءات الـ Backend), utils.ts
├── types/                تعريفات TypeScript
├── public/               الصور والملفات الثابتة (assets/logo.png ...)
└── docs/                 صور وقوالب الـ README
```

## 🔄 تدفّق البيانات

```mermaid
flowchart LR
    A[المتصفح] --> B[Next.js App Router]
    B -->|getDashboardData<br/>revalidate كل ساعة| C[(Backend API)]
    B -->|sendProjectRequest| C
    B --> D[constants/<br/>بيانات ثابتة]
    B --> E[useDashboardStore<br/>حالة مشتركة]
```

- **الـ Backend:** `lib/api.ts` يقرأ `NEXT_PUBLIC_API_URL` ويوفّر `getDashboardData()` (جلب بيانات لوحة الموقع مع `revalidate` كل ساعة) و`sendProjectRequest()` (إرسال طلب مشروع من نماذج التواصل). عند فشل الطلب تُرجَع `null` ويُسجَّل الخطأ.
- **البيانات الثابتة:** مجلد `constants/` يحوي محتوى لا يأتي من الـ API (مقالات المدونة التجريبية، آراء العملاء، الفريق، بيانات الموقع) ويُستورد مباشرة في المكوّنات.
- **الحالة:** `hooks/useDashboardStore.ts` يشارك بيانات الـ Backend بين المكوّنات.

## 🤝 آلية المساهمة

1. **ميزة واحدة = فرع واحد = Pull Request واحد**، يُفرَّع من أحدث `main` بأسماء واضحة (`feat/...`, `fix/...`, `chore/...`, `docs/...`).
2. رسائل commit بصيغة **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:` ...).
3. تُنسب الـ commits إلى اسم صاحب المستودع، ولا تُضاف أسطر نسب لأدوات الذكاء الاصطناعي (مثل `Co-Authored-By`).
4. قبل فتح الـ PR شغّل `npm run lint` و`npm run build`، واستخدم قالب الـ PR (What / Why / How verified / Checklist) وأرفق لقطات شاشة لتغييرات الواجهة.
5. الـ CI (`.github/workflows/ci.yml`) يشغّل lint وbuild على كل PR وعلى كل push إلى `main`.

<br />

<div align="center">

**يوصل** — نصيغ الفخامة الرقمية لتقود علامتك لمكانتها المستحقة

</div>
