// types/index.ts
import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

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

export interface ServiceData {
  hero: {
    badge: string;
    title: string;
    highlightText: string;
    description: string;
    image: string | string[]; // يدعم صورة واحدة أو مصفوفة صور
    stats?: { value: string; label: string };
  };
  testimonials: Testimonial[];
  faqs: FAQ[];
  comparison: {
    challenges: string[];
    solutions: string[];
  };
  featuresSection?: {
    title: string;
    features: Feature[];
    image: string | string[]; 
  };
  deliverables: {
    title: string;
    desc: string;
    icon: any;
    featured?: boolean;
  }[];
  steps: {
    number: string;
    title: string;
    desc: string;
  }[];
}

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