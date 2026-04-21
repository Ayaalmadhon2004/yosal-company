// types/index.ts
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string | number;
  title: string;
  description: string;
  iconName: string; 
  features: string[];
  isFeatured: boolean;
  ctaText?: string;
}

export interface PortfolioProject {
  id: string | number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export interface AgencyStat {
  id: string | number;
  count: string;
  label: string;
  subtext: string;
  iconName: string;
}