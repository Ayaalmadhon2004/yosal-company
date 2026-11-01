import { RevealSection, Stagger, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/constants/teamData";
import { AppButton } from "../../ui/AppButton";
import { Plus, Users } from "lucide-react";

export default function TeamSection() {
  return (
    <RevealSection y={0} className="py-24  relative overflow-hidden" dir="rtl">
      {/* لمسات خلفية فنية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        
        {/* رأس القسم بتصميم تفاعلي */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-white/5 text-primary">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span className="font-black text-xs md:text-sm tracking-widest uppercase">شركاء النجاح</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground tracking-tight">
              العقول التي تقود <span className="text-primary italic">التغيير</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg md:text-xl leading-relaxed">
              خبراء تقنيون ومحللون استراتيجيون يجمعهم هدف واحد: تحويل طموحاتك الرقمية إلى نتائج ملموسة.
            </p>
          </div>
          
          <AppButton
            asChild
            variant="outline"
            className="rounded-2xl px-10 py-7 border-white/10 hover:border-primary hover:text-primary transition-all duration-500 font-bold group"
          >
            <Link href="/contact">
              <span>انضم لرحلتنا</span>
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" aria-hidden="true" />
            </Link>
          </AppButton>
        </div>

        {/* شبكة أعضاء الفريق */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <StaggerItem key={index} className="group relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary/10">
                
                {/* الصورة مع الفلتر */}
                <Image
                  src={member.image}
                  alt={`${member.name}، ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* التدرج اللوني السفلي المحسن */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                
                {/* بيانات العضو بتصميم طافي */}
                <div className="absolute bottom-6 right-5 left-5 sm:bottom-10 sm:right-8 sm:left-8 text-right translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-background/70 backdrop-blur-md p-6 rounded-3xl border border-white/5">
                    <h3 className="text-foreground text-2xl font-black mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-bold text-sm tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* زر تواصل سريع (أيقونة) يظهر عند التحويم */}
                <div aria-hidden="true" className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-20px] group-hover:translate-y-0">
                   <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <Plus className="w-6 h-6" />
                   </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </RevealSection>
  );
}