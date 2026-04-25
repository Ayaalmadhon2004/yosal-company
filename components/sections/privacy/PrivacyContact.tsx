import React from "react";
import { Mail } from "lucide-react";

export default function PrivacyContact() {
  return (
    <section className="mt-20 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto border-2 border-[#F58220] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#0a0d1d]">
        <div className="text-right">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            هل لديك استفسار؟
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-medium">
            فريقنا القانوني والتقني جاهز للرد على أسئلتك حول الخصوصية.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="bg-[#1A1C2E] px-6 py-4 rounded-xl border border-gray-800 flex items-center gap-3 w-full md:w-auto">
            <Mail className="text-[#F58220] w-5 h-5" />
            <span className="text-white text-sm font-bold tracking-wide">
              privacy@yoosel.com
            </span>
          </div>
          <button className="bg-[#F58220] text-white px-10 py-4 rounded-xl font-black text-sm hover:bg-[#d46d1a] transition-all whitespace-nowrap w-full md:w-auto">
            تواصل معنا الآن
          </button>
        </div>

      </div>
    </section>
  );
}