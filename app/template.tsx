/** حركة دخول خفيفة لكل صفحة: إزاحة فقط بدون opacity حتى لا تتأخر الرسمة الأولى (LCP) */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
