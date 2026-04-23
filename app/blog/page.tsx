import { blogPosts } from "@/constants/blogData";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogCard from "@/components/sections/blog/BlogCard"; // مكون صغير لعرض الكروت
import ReadyResults from "@/components/sections/ReadyResults";

export default function BlogPage() {
  const featuredPost = blogPosts[0]; // المقال الأول هو المميز

  return (
    <main className="min-h-screen bg-[#1A1C2E]">
      <BlogHero post={featuredPost} />
      
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10 text-right">أحدث المقالات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <ReadyResults />
    </main>
  );
}