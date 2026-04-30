import { Suspense } from "react";
import { getPosts } from "@/lib/api";
import BlogContent from "@/components/sections/blog/BlogContent"; 

export const metadata = {
  title: "مدونة يوصل | أحدث استراتيجيات التسويق والنمو الرقمي",
  description: "اكتشف مقالات حصرية حول تطوير الأنظمة، الـ SaaS، وأسرار النمو التجاري.",
};

const BlogSkeleton = () => (
  <div className="max-w-6xl mx-auto px-6 py-20 animate-pulse bg-background">
    <div className="h-96 bg-white/5 rounded-[3rem] mb-12" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-80 bg-white/5 rounded-[2.5rem]" />
      ))}
    </div>
  </div>
);

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const search = params.search;
  const category = params.category === "الكل" || !params.category ? undefined : params.category;
  const page = parseInt(params.page || "1");

  // جلب البيانات في السيرفر
  const response = await getPosts(search, category, page);
  const posts = response?.data?.data || response?.data || (Array.isArray(response) ? response : []);

  return (
    <main className="min-h-screen bg-background pt-32 pb-0 text-right font-sans selection:bg-orange-500/30" dir="rtl">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent posts={posts} params={params} />
      </Suspense>
    </main>
  );
}