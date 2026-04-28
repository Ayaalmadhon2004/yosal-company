import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, Bookmark, ArrowRight } from "lucide-react";
import { getPostBySlug, getPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import ShareActions from "@/components/sections/blog/ShareActions";

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedResponse = await getPosts(undefined, post.category, 1);
  const relatedPosts = relatedResponse?.data?.data?.filter((p: any) => p.slug !== slug).slice(0, 4) || [];

  return (
    <main className="min-h-screen bg-[#0a0d1d] text-right" dir="rtl">
      
      <section className="relative h-[70vh] w-full flex items-end pb-20">
        <Image 
          src={post.image_url || "/images/blog-placeholder.jpg"} 
          alt={post.title} 
          fill 
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-[#0a0d1d]/60 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="bg-orange-500/20 text-orange-500 px-4 py-1.5 rounded-lg text-sm font-bold border border-orange-500/30">
              {post.category || "عام"}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-400 border-t border-gray-800 w-fit">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden border border-gray-700 relative">
                   <Image 
                    src={post.author_avatar || "/images/avatar-placeholder.png"} 
                    alt={post.author_name || "Author"} 
                    fill
                    className="object-cover"
                   />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{post.author_name || "فريق يوصل"}</p>
                  <p className="text-[10px]">كاتب محتوى متخصص</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" /> 
                {/* استخدام الحقل date مباشرة كما هو في الـ JSON */}
                {post.date} 
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" /> 5 دقائق قراءة
              </span>
              <div className="flex gap-4 mr-auto md:mr-10">
                <button className="p-2 bg-white/5 rounded-full hover:bg-orange-500/20 transition-all hover:text-orange-500"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 bg-white/5 rounded-full hover:bg-orange-500/20 transition-all hover:text-orange-500"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <article className="flex-1">
          <div 
            className="prose prose-invert prose-orange max-w-none 
            prose-p:text-gray-300 prose-p:leading-loose prose-p:text-lg
            prose-headings:text-white prose-headings:font-bold
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:border-r-4 prose-h3:border-orange-500 prose-h3:pr-4"
            dangerouslySetInnerHTML={{ __html: post.content || post.short_description || "" }} 
          />
          <ShareActions />
        </article>

        <aside className="w-full lg:w-80 space-y-10">
          <div className="bg-[#12162b] p-8 rounded-[2rem] border border-gray-800 sticky top-32">
            <h3 className="text-white font-bold mb-6 pb-4 border-b border-gray-800 text-lg text-orange-500">محتويات المقال</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition-colors pr-2 border-r border-orange-500">تحليل سلوك المستخدم</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors pr-2">تخصيص تجربة العميل</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors pr-2">أتمتة الحملات الإعلانية</li>
            </ul>
          </div>
          
          <div className="bg-orange-500 p-8 rounded-[2.5rem] text-[#0a0d1d] relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h4 className="font-black text-2xl mb-4 leading-tight">دليل التجارة الإلكترونية الشامل</h4>
              <p className="text-sm font-medium mb-6 opacity-90">احصل على نسختك المجانية الآن وتعلم أسرار البيع في 2026.</p>
              <button className="bg-[#0a0d1d] text-white w-full py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">تحميل الآن</button>
            </div>
          </div>
        </aside>
      </section>

      {/* سكشن المقالات المقترحة */}
      <section className="bg-[#0c1026] py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">مقالات قد تهمك</h2>
            <Link href="/blog" className="text-orange-500 flex items-center gap-2 hover:gap-4 transition-all font-bold">تصفح الكل <ArrowRight className="w-4 h-4 rotate-180" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((item: any) => (
               <Link href={`/blog/${item.slug}`} key={item.slug} className="group bg-[#12162b] rounded-3xl p-4 border border-gray-800 hover:border-orange-500/30 transition-all shadow-lg">
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                    <Image 
                      src={item.image_url || "/images/placeholder.jpg"} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      unoptimized
                    />
                  </div>
                  <h4 className="text-white font-bold text-sm line-clamp-2 leading-relaxed group-hover:text-orange-500 transition-colors">{item.title}</h4>
               </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}