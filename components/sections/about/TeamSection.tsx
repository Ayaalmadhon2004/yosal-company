import Image from "next/image";
import { TEAM_MEMBERS } from "@/constants/teamData";
import { AppButton } from "../../ui/AppButton";

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#0a0d1d] text-right" dir="rtl">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">فريق العمل</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              عقول مبدعة، خبراء تقنيون، ومحللون استراتيجيون يجمعهم هدف واحد: تميزك.
            </p>
          </div>
          
          <AppButton variant="outline" className="rounded-full px-8 py-3 border-gray-700 text-sm">
            انضم إلينا
          </AppButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-gray-800/50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* التدرج اللوني السفلي للنص */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-transparent to-transparent opacity-90" />
                
                {/* بيانات العضو */}
                <div className="absolute bottom-8 right-8 left-8 text-right">
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}