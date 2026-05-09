"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Services from "@/components/sections/services/Services";
import ReadyResults from "@/components/sections/ReadyResults";
import { Loader2, AlertCircle } from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://yosaal-website-backend.onrender.com/api/v1/services');
        const result = await response.json();
        
        if (result.status === "Success" && result.data) {
          setServices(result.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 overflow-hidden" dir="rtl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-right order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="text-primary text-sm font-bold tracking-wider">خدماتنا الاحترافية</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.2]">
                حلول رقمية <span className="text-primary">متكاملة</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                نحول الأفكار المعقدة إلى واقع ملموس من خلال خدماتنا المتنوعة التي تغطي كافة جوانب التواجد الرقمي.
              </p>
            </div>

            <div className="flex-1 relative order-1 lg:order-2 w-full">
              <div className="relative z-10 w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/assets/moon.png" 
                  alt="Yoosel Services"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 min-h-[400px] px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <p className="text-muted-foreground font-bold">جاري تحميل الخدمات الإبداعية...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-red-400 gap-3">
            <AlertCircle size={40} />
            <p className="font-bold">عذراً، فشل جلب البيانات من السيرفر.</p>
          </div>
        ) : (
          <Services data={services} />
        )}
      </div>
      
      <ReadyResults variant="style1" />
    </main>
  );
}