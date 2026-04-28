"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // استبدلي هذا الرابط برابط الباك إيند الحقيقي الخاص بكِ
      const res = await fetch("https://your-api-endpoint.com/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.success("تم الاشتراك بنجاح! تفقد بريدك.");
        setEmail("");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("حدث خطأ، يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="بريدك الإلكتروني" 
        className="flex-grow bg-[#0a0d1d] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-orange-500 transition-all text-sm"
        required
      />
      <button 
        type="submit"
        disabled={loading}
        className="bg-[#ffb38a] hover:bg-orange-500 text-[#0a0d1d] hover:text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
      >
        {loading ? "جاري الإرسال..." : "اشترك الآن"}
      </button>
    </form>
  );
}