import type { Transition, Variants } from "framer-motion";

/** منحنى حركة ناعم (ease-out قوي) يعطي إحساساً "مريحاً" بدون ارتداد مبالغ فيه */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

/** مسافة الإزاحة الافتراضية بالبكسل — صغيرة عمداً حتى لا تكون الحركة ثقيلة */
export const OFFSET = 24;

/** الفاصل الزمني بين عناصر المجموعة الواحدة (ثانية) */
export const STAGGER = 0.1;

/**
 * شرط بدء حركة الظهور عند التمرير.
 * نستخدم "some" (أي جزء مرئي) مع هامش سفلي صغير بدل نسبة مئوية من ارتفاع العنصر:
 * النسبة (مثل 0.2) لا تتحقق أبداً للعناصر الطويلة على الشاشات الصغيرة
 * (عنصر أطول من 5 أضعاف ارتفاع الشاشة)، فيبقى محتواها مخفياً للأبد.
 */
export const VIEWPORT = { once: true, amount: "some", margin: "0px 0px -10% 0px" } as const;

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE,
};

export const fadeUp = (offset: number = OFFSET): Variants => ({
  hidden: { opacity: 0, y: offset },
  visible: { opacity: 1, y: 0, transition: baseTransition },
});

export const fadeSide = (offset: number): Variants => ({
  hidden: { opacity: 0, x: offset },
  visible: { opacity: 1, x: 0, transition: baseTransition },
});

export const staggerContainer = (stagger: number = STAGGER, delay: number = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
