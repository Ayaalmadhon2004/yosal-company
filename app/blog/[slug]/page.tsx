import { RevealSection } from "@/components/ui/Motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, Bookmark, ArrowRight } from "lucide-react";
import { getPostBySlug, getPosts, extractPosts } from "@/lib/api";
import type { Post } from "@/types/api";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShareActions from "@/components/sections/blog/ShareActions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "المقال غير موجود", robots: { index: false } };

  const raw: string = post.short_description || post.excerpt || post.content || "";
  const description =
    raw.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160) ||
    "مقال من مدونة وكالة يوصل.";
  const image: string | undefined = post.image || post.image_url || undefined;
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/blog/${slug}`,
      images: image ? [image] : undefined,
    },
    twitter: { title: post.title, description, images: image ? [image] : undefined },
  };
}

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
  const relatedPosts = extractPosts(relatedResponse).filter((p: Post) => p.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <RevealSection className="relative bg-background min-h-[70vh] w-full flex items-end pt-32 pb-12 md:pb-20 overflow-hidden">
        {(post.image || post.image_url) && (
        <Image 
          src={(post.image || post.image_url) as string} 
          alt={post.title} 
          fill 
          className="object-cover opacity-40"
          priority
          unoptimized 
        />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-[#0a0d1d]/60 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block max-w-full break-words bg-orange-500/20 text-orange-500 px-4 py-1.5 rounded-lg text-sm font-bold border border-orange-500/30">
              {post.category || "عام"}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-gray-400 border-t border-gray-800 max-w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden border border-gray-700 relative">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center border border-gray-700 relative overflow-hidden">
                      {post.author_avatar ? (
                        <Image 
                          src={post.author_avatar} 
                          alt={post.author_name ?? ""} 
                          fill 
                          className="object-cover"
                          unoptimized 
                        />
                      ) : (
                        <span className="text-white text-xs font-bold">
                          {post.author_name?.charAt(0) || "Y"}
                        </span>
                      )}
                    </div>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{post.author_name || "فريق يوصل"}</p>
                  <p className="text-xs">كاتب محتوى متخصص</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" /> 
                {post.date} 
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" /> 5 دقائق قراءة
              </span>
              <div className="flex gap-2 mr-auto md:mr-10">
                <button aria-label="مشاركة" className="w-11 h-11 inline-flex items-center justify-center bg-white/5 rounded-full hover:bg-orange-500/20 transition-all hover:text-orange-500"><Share2 className="w-4 h-4" /></button>
                <button aria-label="حفظ" className="w-11 h-11 inline-flex items-center justify-center bg-white/5 rounded-full hover:bg-orange-500/20 transition-all hover:text-orange-500"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
            
          </div>
        </div>
      </RevealSection>

      {/* قسم عادي بدون RevealSection: المقال الطويل أطول من الشاشة بأضعاف فلا يصل أبداً لنسبة الظهور المطلوبة ويبقى مخفياً */}
      <section className="container mx-auto bg-background px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <aside className="order-2 lg:order-1 w-full lg:w-80 shrink-0 space-y-10">
          <div className="bg-[#12162b] p-8 rounded-[2rem] border border-gray-800 lg:sticky lg:top-32">
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
        <article className="order-1 lg:order-2 flex-1 min-w-0">
          <div 
            className="prose prose-invert prose-orange max-w-none break-words [overflow-wrap:anywhere] [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_iframe]:max-w-full [&_video]:max-w-full [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:font-bold [&_h3]:text-white md:[&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-xl md:[&_h3]:text-2xl [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pr-6 [&_ol]:pr-6 [&_li]:text-gray-300 [&_li]:my-2 [&_blockquote]:border-r-4 [&_blockquote]:border-orange-500 [&_blockquote]:pr-4 [&_blockquote]:text-gray-300 [&_a]:text-orange-500 [&_a]:underline [&_th]:border [&_td]:border [&_th]:border-white/10 [&_td]:border-white/10 [&_th]:p-3 [&_td]:p-3 [&_th]:text-right [&_pre]:bg-black/30 [&_pre]:p-4 [&_pre]:rounded-xl 
            prose-p:text-gray-300 prose-p:leading-loose prose-p:text-lg
            prose-headings:text-white prose-headings:font-bold
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:border-r-4 prose-h3:border-orange-500 prose-h3:pr-4"
            dangerouslySetInnerHTML={{ __html: post.content || post.short_description || "" }} 
          />
          <ShareActions />
        </article>
      </section>

      <RevealSection className="bg-background py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">مقالات قد تهمك</h2>
            <Link href="/blog" className="text-orange-500 flex items-center gap-2 hover:gap-4 transition-all font-bold min-h-11">تصفح الكل <ArrowRight className="w-4 h-4 rotate-180" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((item: Post) => (
                <Link href={`/blog/${item.slug}`} key={item.slug} className="group bg-[#12162b] rounded-3xl p-4 border border-gray-800 hover:border-orange-500/30 transition-all shadow-lg">
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-white/5">
                    {(item.image || item.image_url) && (
                    <Image 
                      src={(item.image || item.image_url) as string} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      unoptimized 
                    />
                    )}
                  </div>
                  <h4 className="text-white font-bold text-sm line-clamp-2 leading-relaxed group-hover:text-orange-500 transition-colors">{item.title}</h4>
                </Link>
            ))}
          </div>
        </div>
      </RevealSection>
    </main>
  );
}