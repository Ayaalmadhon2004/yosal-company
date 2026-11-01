"use client";

import * as React from "react";
import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  DURATION,
  EASE,
  OFFSET,
  STAGGER,
  VIEW_AMOUNT,
  fadeSide,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

/** يحترم إعداد "تقليل الحركة" في نظام المستخدم لكل الأنيميشن داخل الموقع */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** تأخير قبل بدء الحركة (ثانية) */
  delay?: number;
  /** إزاحة عمودية بالبكسل (موجبة = يصعد من الأسفل) */
  y?: number;
  /** إزاحة أفقية بالبكسل؛ إذا حُددت تُستخدم بدل الإزاحة العمودية */
  x?: number;
}

/** يُظهر العنصر بنعومة (fade + إزاحة خفيفة) عند دخوله الشاشة، مرة واحدة فقط */
export function Reveal({ children, className, delay = 0, y = OFFSET, x }: RevealProps) {
  const variants = x !== undefined ? fadeSide(x) : fadeUp(y);
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: VIEW_AMOUNT }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type SectionAttrs = Pick<React.HTMLAttributes<HTMLElement>, "id" | "dir" | "aria-labelledby">;

/** نفس Reveal لكن بوسم <section> الدلالي؛ y={0} يعطي ظهوراً بالشفافية فقط */
export function RevealSection({
  children,
  className,
  delay = 0,
  y = OFFSET,
  ...attrs
}: Omit<RevealProps, "x"> & SectionAttrs) {
  return (
    <motion.section
      {...attrs}
      className={className}
      variants={fadeUp(y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: VIEW_AMOUNT }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  /** true = تبدأ الحركة فور التحميل (للـ Hero)، false = عند الدخول للشاشة */
  immediate?: boolean;
}

/** حاوية تُظهر أبناءها (StaggerItem) واحداً تلو الآخر */
export function Stagger({
  children,
  className,
  stagger = STAGGER,
  delay = 0,
  immediate = false,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: VIEW_AMOUNT } })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = OFFSET,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={className} variants={fadeUp(y)}>
      {children}
    </motion.div>
  );
}

/** عدّاد أرقام يتصاعد عند ظهور الإحصائية؛ يحافظ على اللاحقة مثل "+" */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const el = ref.current;
    if (!match || !el || !inView || reduce) return;
    // نكتب الرقم مباشرة على العنصر أثناء الحركة (بدون state) حتى لا يحدث re-render،
    // ويبقى ناتج السيرفر هو الرقم النهائي الصحيح لمحركات البحث ولمن يعطّل الحركة.
    const controls = animate(0, target, {
      duration: DURATION.slow * 2,
      ease: EASE,
      onUpdate: (latest) => {
        el.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, target, suffix, match]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
