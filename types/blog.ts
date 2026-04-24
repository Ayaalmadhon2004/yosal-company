// types/blog.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content?: string; 
}