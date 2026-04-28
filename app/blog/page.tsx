import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowLeft } from "lucide-react";
import ReadyResults from "@/components/sections/ReadyResults";
import { getPosts } from "@/lib/api";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const search = params.search;
  
  // تأكدي من التعامل مع فئة "الكل" بشكل صحيح لإرسال undefined للسيرفر
  const category = params.category === "الكل" || !params.category ? undefined : params.category;
  const page = parseInt(params.page || "1");

  // جلب البيانات من السيرفر
  const response = await getPosts(search, category, page);
  
  // الوصول الصحيح للمقالات بناءً على الـ JSON المرسل (data.data)
  const posts = response?.data?.data || [];

  return (
    <main className="min-h-screen bg-[#0a0d1d] pt-32 pb-20 text-right font-sans" dir="rtl">
      
      {/* 1. سكشن الهيرو - يعرض المقال الأول من المصفوفة */}
      <section className="max-w-6xl mx-auto px-6 mb-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <span className="text-orange-500 font-bold text-sm bg-orange-500/10 px-4 py-1 rounded-full border border-orange-500/20">أفكار وإلهام</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            مدونة <span className="text-orange-500">يوصل</span> الرقمية
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            نشارككم أحدث استراتيجيات النمو، تطوير الأنظمة، والاتجاهات العالمية في عالم الـ SaaS والتسويق الرقمي.
          </p>
        </div>
        
        {posts.length > 0 && (
          <div className="flex-1 relative w-full h-[350px] rounded-[2.5rem] overflow-hidden border border-gray-800 group shadow-2xl">
            <Image 
              src={posts[0].image_url || "/images/blog-placeholder.jpg"} 
              alt={posts[0].title} 
              fill 
              priority
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-transparent to-transparent"></div>
            <div className="absolute bottom-8 right-8 left-8 space-y-3">
              <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-lg font-bold uppercase tracking-wider">آخر المقالات</span>
              <h3 className="text-white text-2xl font-bold line-clamp-2 leading-snug">{posts[0].title}</h3>
            </div>
          </div>
        )}
      </section>

      {/* 2. شريط البحث والفلترة */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-[#12162b] p-4 rounded-[2rem] border border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {/* ملاحظة: تأكدي أن الأسماء هنا تطابق الفئات في قاعدة البيانات */}
            {["الكل", "تسويق", "SEO", "محتوى", "تجارة", "إعلانات"].map((cat) => (
              <Link 
                key={cat} 
                href={`/blog?${cat === "الكل" ? "" : `category=${cat}`}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  (params.category === cat || (!params.category && cat === "الكل")) 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
          <form action="/blog" className="relative w-full md:w-72">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input 
              name="search"
              type="text" 
              defaultValue={search}
              placeholder="ابحث عن مقال..." 
              className="w-full bg-[#0a0d1d] border border-gray-800 rounded-full py-3 pr-12 pl-6 text-white text-xs outline-none focus:border-orange-500 transition-all placeholder:text-gray-600"
            />
          </form>
        </div>
      </section>

      {/* 3. شبكة المقالات - تعرض جميع المقالات الموجودة في المصفوفة */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="group bg-[#161a35] rounded-[2.5rem] overflow-hidden border border-gray-800 hover:border-orange-500/40 transition-all duration-500 flex flex-col shadow-xl hover:shadow-orange-500/5"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image 
                  src={post.image_url || "/images/placeholder.jpg"} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-gray-500 text-[10px] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 5 دقائق
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-xs line-clamp-3 mb-6 leading-relaxed">
                  {post.short_description}
                </p>
                <div className="mt-auto text-white font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-4 h-4 text-orange-500" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            {search || category ? "لا توجد نتائج لمجال بحثك." : "لا توجد مقالات منشورة حالياً."}
          </div>
        )}
      </section>

      {/* 4. سكشن الاشتراك */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-[#161a35] to-[#0a0d1d] rounded-[3rem] p-12 text-center border border-gray-800 relative shadow-2xl overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] group-hover:bg-orange-500/10 transition-all duration-700"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              انضم إلى مجتمع <span className="text-orange-500">يوصل</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              احصل على أفضل استراتيجيات التسويق والنمو مباشرة في بريدك الإلكتروني أسبوعياً.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex-grow bg-[#0a0d1d] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-orange-500 transition-all text-sm"
                required
              />
              <button className="bg-[#ffb38a] hover:bg-orange-500 text-[#0a0d1d] hover:text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg active:scale-95">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </section>

      <ReadyResults variant="style2"/>
    </main>
  );
}