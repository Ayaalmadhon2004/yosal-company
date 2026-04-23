import Image from "next/image";
import { BlogPost } from "@/constants/blogData";

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  if (!post) return null;

  return (
    <section className="relative pt-32 pb-20 bg-[#1A1C2E] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-[#252841]">
          {/* خلفية الصورة مع تدرج ظلي */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <Image 
              src={post.mainImage} 
              alt={post.title} 
              fill 
              className="object-cover opacity-60 transition-transform duration-1000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C2E] via-[#1A1C2E]/40 to-transparent" />
          </div>

          {/* محتوى المقال المميز (Featured Post Content) */}
          <div className="absolute bottom-0 right-0 p-8 lg:p-16 max-w-4xl text-right z-10">
            <span className="bg-[#FF8A00] text-white px-5 py-1.5 rounded-full text-sm font-bold mb-6 inline-block shadow-lg">
              {post.category}
            </span>
            
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            
            <p className="text-gray-300 text-lg lg:text-xl mb-8 line-clamp-2 max-w-2xl font-light italic">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-gray-400 text-sm border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">{post.author.name}</span>
              </div>
              <span className="w-1.5 h-1.5 bg-[#FF8A00] rounded-full" />
              <span>{post.date}</span>
              <span className="hidden md:inline w-1.5 h-1.5 bg-gray-600 rounded-full" />
              <span className="hidden md:inline">وقت القراءة: {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}