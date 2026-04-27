"use client";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0F111A] relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF8A00]/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 text-right space-y-8">
            <div className="h-9 w-32 bg-white/5 border border-white/10 rounded-full animate-pulse" />

            <div className="space-y-4">
              <div className="h-16 w-full bg-white/5 rounded-2xl animate-pulse" />
              <div className="h-16 w-2/3 bg-white/5 rounded-2xl animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-white/5 rounded-full animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded-full animate-pulse" />
              <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse" />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-16 w-44 bg-[#FF8A00]/10 rounded-2xl animate-pulse" />
              <div className="h-16 w-44 bg-white/5 rounded-2xl animate-pulse" />
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="relative overflow-visible">
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-30 bg-[#1A1C2E]/50 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] w-48 h-28 animate-pulse shadow-2xl" />
              <div className="relative rounded-[50px] overflow-hidden border border-white/10 aspect-square z-10 bg-white/5 animate-pulse shadow-2xl flex items-center justify-center">
                <div className="text-white/5 font-black text-6xl tracking-tighter">YOOSIL</div>
              </div>
              <div className="absolute inset-0 bg-[#FF8A00]/5 blur-[80px] rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 opacity-20">
         <div className="h-64 w-full bg-white/5 rounded-[40px] animate-pulse" />
      </div>
    </main>
  );
}