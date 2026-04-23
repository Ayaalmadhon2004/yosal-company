import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/constants/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block" dir="rtl">
      <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-lg">
        {/* الصورة الرئيسية للمقال */}
        <Image 
          src={post.mainImage} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge التصنيف الثابت */}
        <div className="absolute top-4 right-4 bg-[#FF8A00] text-white px-3 py-1 rounded-full text-xs font-bold">
          {post.category}
        </div>
      </div>

      <div className="text-right">
        {/* تاريخ المقال ووقت القراءة */}
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>

        {/* عنوان المقال */}
        <h3 className="text-xl font-black text-white mb-3 leading-snug group-hover:text-[#FF8A00] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* مقتطف من النص */}
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}