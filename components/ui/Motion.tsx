import * as React from "react";

export { CountUp } from "./CountUp";

/**
 * أنيميشن الظهور هنا CSS خالص (انظر .reveal في globals.css):
 * - لا JavaScript ولا framer-motion، فالمحتوى يصل من السيرفر ظاهراً ويدعم LCP.
 * - المتصفحات التي لا تدعم animation-timeline تعرض المحتوى مباشرة بدون حركة.
 * - يحترم prefers-reduced-motion.
 */

/** احتفظنا به لتوافق الاستيراد؛ لم يعد يحتاج مزوّداً */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** تأخير قبل بدء الحركة (ثانية) — يُستخدم فقط مع الحركة الفورية */
  delay?: number;
  /** إزاحة عمودية بالبكسل (موجبة = يصعد من الأسفل) */
  y?: number;
  /** إزاحة أفقية بالبكسل؛ إذا حُددت تُستخدم بدل الإزاحة العمودية */
  x?: number;
}

function revealStyle(y: number, x?: number): React.CSSProperties {
  return {
    "--reveal-x": `${x ?? 0}px`,
    "--reveal-y": `${x !== undefined ? 0 : y}px`,
  } as React.CSSProperties;
}

/** يُظهر العنصر بنعومة (fade + إزاحة خفيفة) عند دخوله الشاشة */
export function Reveal({ children, className, y = 24, x }: RevealProps) {
  return (
    <div className={`reveal${className ? ` ${className}` : ""}`} style={revealStyle(y, x)}>
      {children}
    </div>
  );
}

type SectionAttrs = Pick<React.HTMLAttributes<HTMLElement>, "id" | "dir" | "aria-labelledby">;

/** نفس Reveal لكن بوسم <section> الدلالي */
export function RevealSection({
  children,
  className,
  y = 24,
  ...attrs
}: Omit<RevealProps, "x" | "delay"> & SectionAttrs) {
  return (
    <section
      {...attrs}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={revealStyle(y)}
    >
      {children}
    </section>
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
  stagger = 0.1,
  delay = 0,
  immediate = false,
}: StaggerProps) {
  return (
    <div
      className={`${immediate ? "stagger-now" : "stagger-view"}${className ? ` ${className}` : ""}`}
      style={{ "--stagger": `${stagger}s`, "--stagger-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <div className={`stagger-item${className ? ` ${className}` : ""}`} style={revealStyle(y)}>
      {children}
    </div>
  );
}
