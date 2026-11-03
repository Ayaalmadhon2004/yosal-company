/** Payload accepted by the dashboard "project request" endpoint. */
export interface ProjectRequestPayload {
  phone: string;
  name?: string;
  email?: string;
  project_url?: string;
  /** Free-text project description (also sent by ReadyForm; backend support to be confirmed). */
  description?: string;
  service_type?: string;
  budget?: string;
  main_goals?: string;
  /** Optional file sent as multipart body (the other fields travel as query params). */
  attachment?: File;
}

/** Generic envelope returned by the backend (and by our own error fallback). */
export interface ApiResponse<T = unknown> {
  status: "Success" | "Error";
  message?: string;
  success?: boolean;
  data?: T;
}

export interface PortfolioProject {
  id: number | string;
  slug: string;
  title: string;
  image_url?: string;
  category_name?: string;
  [key: string]: unknown;
}

export interface DashboardStatistic {
  [key: string]: unknown;
}

export interface PackageFeature {
  id: number;
  feature_text: string;
  is_available: number;
}

export interface PackageItem {
  id: number;
  name: string;
  short_description: string;
  price: number;
  badge: string | null;
  is_featured: number;
  features: PackageFeature[];
}

export interface DashboardData {
  services: unknown[];
  projects: unknown[];
  statistics: DashboardStatistic[];
  packages: PackageItem[];
  testimonials: unknown[];
  portfolio?: PortfolioProject[];
}

export interface Post {
  id: number | string;
  slug: string;
  title: string;
  category?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  image_url?: string;
  author_name?: string;
  author_avatar?: string;
  date?: string;
  short_description?: string;
  [key: string]: unknown;
}

export interface PaginationMeta {
  [key: string]: unknown;
}

export interface PostsResponse {
  data: Post[] | { data: Post[]; [key: string]: unknown };
  meta?: PaginationMeta;
}
