const CARD_KEYS = ["a", "b", "c"] as const;
const LINE_KEYS = ["a", "b", "c", "d"] as const;

interface PageSkeletonProps {
  /** شبكة بطاقات (قوائم) أو مقال/تفاصيل */
  variant?: "grid" | "detail";
}

/** هيكل تحميل موحّد لمسارات الصفحات (نفس أسلوب services/[slug]/loading.tsx) */
export function PageSkeleton({ variant = "grid" }: PageSkeletonProps): React.JSX.Element {
  return (
    <main
      dir="rtl"
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="min-h-screen bg-[#0F111A] relative overflow-hidden"
    >
      <span className="sr-only">جارٍ التحميل</span>
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF8A00]/5 blur-[150px] rounded-full -z-10"
      />
      <div aria-hidden="true" className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="space-y-6 mb-16 text-right">
          <div className="h-9 w-32 bg-white/5 border border-white/10 rounded-full animate-pulse" />
          <div className="h-14 w-full max-w-2xl bg-white/5 rounded-2xl animate-pulse" />
          <div className="space-y-3 max-w-xl">
            <div className="h-4 w-full bg-white/5 rounded-full animate-pulse" />
            <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse" />
          </div>
        </div>
        {variant === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARD_KEYS.map((i) => (
              <div key={i} className="h-80 bg-white/5 border border-white/10 rounded-[2.5rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl">
            <div className="h-80 w-full bg-white/5 rounded-[3rem] animate-pulse" />
            {LINE_KEYS.map((i) => (
              <div key={i} className="h-4 w-full bg-white/5 rounded-full animate-pulse" />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
