import { Suspense } from "react";
import dynamic from 'next/dynamic';
import TermsHero from "@/components/sections/terms/TermsHero";

const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-12">
    <div className="h-8 w-1/3 bg-white/5 rounded-lg mb-6 ml-auto" />
    <div className="space-y-4">
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-3/4 bg-white/5 rounded" />
    </div>
  </div>
);

const TermsContent = dynamic(() => import("@/components/sections/terms/TermsContent"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});

const LegalCards = dynamic(() => import("@/components/sections/terms/LegalCards"), { 
  ssr: true,
  loading: () => <SkeletonLoader />
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TermsHero />
      
      <div className="space-y-4">
        <Suspense fallback={<SkeletonLoader />}>
          <TermsContent />
        </Suspense>

        <Suspense fallback={<SkeletonLoader />}>
          <LegalCards />
        </Suspense>
      </div>
    </main>
  );
}