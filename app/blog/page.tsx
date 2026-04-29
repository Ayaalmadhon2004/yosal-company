import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowLeft } from "lucide-react";
import ReadyResults from "@/components/sections/ReadyResults";
import { getPosts } from "@/lib/api";
import { Suspense } from "react";

export const metadata = {
  title: "مدونة يوصل | أحدث استراتيجيات التسويق والنمو الرقمي",
  description: "اكتشف مقالات حصرية حول تطوير الأنظمة، الـ SaaS، وأسرار النمو التجاري.",
};

// مكون الهيكل المؤقت لتقليل الـ Layout Shift
const BlogSkeleton = () => (
  <div className="max-w-6xl mx-auto px-6 py-20 animate-pulse">
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

  return (
    <main className="min-h-screen bg-[#0a0d1d] pt-32 pb-20 text-right font-sans" dir="rtl">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent params={params} />
      </Suspense>
      <ReadyResults variant="style2" />
    </main>
  );
}

async function BlogContent({ params }: { params: any }) {
  const search = params.search;
  const category = params.category === "الكل" || !params.category ? undefined : params.category;
  const page = parseInt(params.page || "1");
  
  // جلب البيانات من السيرفر مباشرة
  const response = await getPosts(search, category, page);
  const posts = response?.data?.data || [];

  return (
    <>
      {/* قسم الـ Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <span className="text-orange-500 font-bold text-sm bg-orange-500/10 px-4 py-1 rounded-full border border-orange-500/20">
            أفكار وإلهام
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            مدونة <span className="text-orange-500">يوصل</span> الرقمية
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            نشارككم أحدث استراتيجيات النمو، تطوير الأنظمة، والاتجاهات العالمية في عالم الـ SaaS والتسويق الرقمي.
          </p>
        </div>

        {posts.length > 0 && (
          <div className="flex-1 relative w-full h-[350px] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-[#12162b]">
            <Image
              src={posts[0].image_url || "/images/blog-placeholder.jpg"}
              alt={posts[0].title}
              fill
              priority // يعطي الأولوية القصوى للصورة لتحسين LCP
              className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 left-8 space-y-3">
              <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-lg font-bold">آخر المقالات</span>
              <h2 className="text-white text-2xl font-bold line-clamp-2">{posts[0].title}</h2>
            </div>
          </div>
        )}
      </section>

      {/* قسم الفلترة والبحث */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-[#12162b]/80 backdrop-blur-md p-4 rounded-[2rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <nav className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto" aria-label="تصنيفات المدونة">
            {["الكل", "تسويق", "SEO", "محتوى", "تجارة", "إعلانات"].map((cat) => (
              <Link
                key={cat}
                href={`/blog?${cat === "الكل" ? "" : `category=${cat}`}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  (params.category === cat || (!params.category && cat === "الكل"))
                    ? 'bg-orange-500 text-white shadow-orange-500/40 shadow-lg'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
          <form action="/blog" className="relative w-full md:w-72">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" aria-hidden="true" />
            <input
              name="search"
              type="text"
              defaultValue={search}
              placeholder="ابحث عن مقال..."
              className="w-full bg-[#0a0d1d] border border-white/10 rounded-full py-3 pr-12 pl-6 text-white text-xs outline-none focus:border-orange-500 transition-all"
            />
          </form>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              aria-label={`اقرأ مقال: ${post.title}`}
              className="group bg-[#12162b] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-orange-500/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 w-full bg-white/5">
                <Image
                  src={post.image_url || "/images/placeholder.jpg"}
                  alt="" // Alt فارغ هنا لأن العنوان مكتوب تحت (Accessibility best practice)
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-gray-500 text-[10px] mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date || "اليوم"}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 دقائق</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3 mb-6 opacity-80 leading-relaxed">
                  {post.short_description}
                </p>
                <div className="mt-auto text-white font-bold text-xs flex items-center gap-2">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-4 h-4 text-orange-500 group-hover:translate-x-[-4px] transition-transform" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">لا توجد نتائج بحث.</div>
        )}
      </section>

      {/* النشرة البريدية */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-[#12162b] to-[#0a0d1d] rounded-[3rem] p-12 text-center border border-white/5 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            انضم إلى مجتمع <span className="text-orange-500">يوصل</span>
          </h2>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              aria-label="البريد الإلكتروني"
              className="flex-grow bg-[#0a0d1d] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-orange-500"
              required
            />
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-500/20"
            >
              اشترك الآن
            </button>
          </form>
        </div>
      </section>
    </>
  );
}