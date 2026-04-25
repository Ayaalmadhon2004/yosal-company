import { LucideIcon } from "lucide-react";

// --- المشترك (Common) ---
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarLetter: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon; // تم استبدال any بـ LucideIcon لضمان النوع
}

// --- الخدمات (Services) ---
export interface Deliverable {
  title: string;
  desc: string;
  icon: LucideIcon; // تم استبدال any بـ LucideIcon
  featured?: boolean;
}

export interface ServiceData {
  title: string; 
  // النوع الجديد للتحكم في شكل الشبكة (Grid)
  layoutType: "big-right" | "big-left" | "equal"; 
  hero: {
    badge: string;
    title: string;
    highlightText: string;
    description: string;
    image: string | string[]; 
    stats?: { value: string; label: string };
  };
  deliverables: Deliverable[];
  steps: {
    number: string;
    title: string;
    desc: string;
  }[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  comparison?: { // جعلناه اختيارياً لأنه لا يظهر في كل الخدمات
    challenges: string[];
    solutions: string[];
  };
  featuresSection?: { // خاص بـ "لماذا يوصل" للخدمات الـ 3 المحددة
    title: string;
    features: Feature[];
    image: string | string[]; 
  };
}

// --- المدونة (Blog) ---
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  readTime: string;
  mainImage: string;
  content: string;
}