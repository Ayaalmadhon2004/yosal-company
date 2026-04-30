"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowLeft } from "lucide-react";
import ReadyResults from "@/components/sections/ReadyResults";

export default function BlogContent({ posts, params }: { posts: any[]; params: any }) {
  const search = params.search;

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-40 text-center bg-background">
        <h2 className="text-white text-2xl font-bold mb-4">لا توجد مقالات حالياً</h2>
        <p className="text-gray-400 mb-8">جرب تغيير الفلترة أو ابحث بكلمات أخرى.</p>
        <Link href="/blog" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all">
          عرض كل المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-background">
      {/* قسم الهيرو */}
      <section className="max-w-6xl mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="inline-block text-orange-500 font-bold text-sm bg-orange-500/10 px-4 py-1 rounded-full border border-orange-500/20">
            أفكار وإلهام
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            مدونة <span className="text-orange-500">يوصل</span> الرقمية
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            نشارككم أحدث استراتيجيات النمو، تطوير الأنظمة، والاتجاهات العالمية في عالم الـ SaaS والتسويق الرقمي.
          </p>
        </div>

        {posts[0] && (
          <Link href={`/blog/${posts[0].slug}`} className="flex-1 relative w-full h-[300px] md:h-[400px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-white/5 group isolate">
            <Image
              src={posts[0].image_url || "/images/blog-placeholder.jpg"}
              alt={posts[0].title}
              fill
              priority
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 md:bottom-10 md:right-10 md:left-10">
              <h2 className="text-white text-xl md:text-2xl font-bold line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
                {posts[0].title}
              </h2>
            </div>
          </Link>
        )}
      </section>

      {/* البحث والفلترة */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white/5 p-4 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <nav className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0" aria-label="تصنيفات المدونة">
            {["الكل", "تسويق", "SEO", "محتوى", "تجارة", "إعلانات"].map((cat) => (
              <Link
                key={cat}
                href={`/blog?${cat === "الكل" ? "" : `category=${cat}`}`}
                className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  (params.category === cat || (!params.category && cat === "الكل"))
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
          
          <form action="/blog" className="relative w-full md:w-80">
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              name="search"
              type="text"
              defaultValue={search}
              placeholder="ابحث عن مقال..."
              className="w-full bg-background border border-white/10 rounded-full py-4 pr-14 pl-6 text-white text-xs outline-none focus:border-orange-500 transition-all placeholder:text-gray-600"
            />
          </form>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post: any) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group bg-white/5 rounded-[2.5rem] md:rounded-[2.8rem] overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500 flex flex-col shadow-lg isolate"
          >
            <div className="relative h-56 md:h-60 w-full overflow-hidden">
              <Image
                src={post.image_url || "/images/placeholder.jpg"}
                alt={post.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-gray-500 text-[10px] mb-4 font-medium">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-orange-500" /> {post.date || "2024/04/30"}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-orange-500" /> 5 دقائق</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm line-clamp-3 mb-8 opacity-70 leading-relaxed font-light">
                {post.short_description}
              </p>
              <div className="mt-auto text-white font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                <span>اقرأ المزيد</span>
                <ArrowLeft className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="bg-gradient-to-br from-white/5 to-background rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-center border border-white/5 shadow-2xl relative overflow-hidden isolate">
          <h2 className="text-2xl md:text-5xl font-black text-white mb-8">
            انضم إلى مجتمع <span className="text-orange-500">يوصل</span>
          </h2>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-grow bg-background border border-white/10 rounded-xl md:rounded-2xl px-8 py-5 text-white outline-none focus:border-orange-500 transition-all"
            />
            <button className="bg-orange-500 text-white font-bold px-12 py-5 rounded-2xl">اشترك الآن</button>
          </form>
        </div>
      </section>

      <ReadyResults variant="style2" />
    </div>
  );
}