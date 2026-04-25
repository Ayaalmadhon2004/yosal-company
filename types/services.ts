export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ServiceHeroData {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  image: string;
  stats?: {
    value: string;
    label: string;
  };
}

export interface ServiceHeroProps {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  mainImage: string;
  stats?: { value: string; label: string };
}