import { blogPosts } from "@/constants/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReadyResults from "@/components/sections/ReadyResults";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#1A1C2E] pt-32 pb-20" dir="rtl">
      <article className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <span className="text-[#FF8A00] font-bold mb-4 block">{post.category}</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>وقت القراءة: {post.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-white/5">
          <Image src={post.mainImage} alt={post.title} fill className="object-cover" />
        </div>

        {/* Content Section */}
        <div 
          className="prose prose-invert prose-orange max-w-none text-right text-gray-300 text-lg leading-loose
                     prose-h2:text-3xl prose-h2:font-bold prose-h2:text-white prose-h2:mt-12
                     prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <div className="mt-32">
        <ReadyResults />
      </div>
    </main>
  );
}