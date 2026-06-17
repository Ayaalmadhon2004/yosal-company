import { notFound } from "next/navigation";
import Image from "next/image";

// تعريف الواجهات بدقة لضمان الأمان
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface ProjectData {
  title: string;
  full_description: string;
  image_url: string;
  stats: { label: string; number: string }[];
  challenges: string[];
  strategic_solutions: { title: string; description: string }[];
  gallery: string[];
  testimonial?: Testimonial;
}

const getFullImageUrl = (url: string | undefined): string => {
  if (!url) return "/placeholder.jpg";
  
  // إذا كان الرابط يبدأ بـ http، فهو جاهز
  if (url.startsWith("http")) return url;

  // إزالة السلاش الزائدة لضمان سلامة المسار
  const path = url.startsWith("/") ? url : `/${url}`;
  return `https://yosaal-website-backend.onrender.com${path}`;
};


async function getProjectDetails(slug: string) {
  try {
    const res = await fetch(`https://yosaal-website-backend.onrender.com/api/v1/projects/${slug}`, {
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    return null;
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project: ProjectData | null = await getProjectDetails(slug);
  
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0F0F1E] text-white pt-24 pb-32" dir="rtl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* الجزء العلوي */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">{project.full_description}</p>
          </div>

          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src={getFullImageUrl(project.image_url)} 
              alt={project.title} 
              fill 
              className="object-cover" 
              unoptimized 
            />
            {project.stats?.[0] && (
              <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-primary mb-1">{project.stats[0].number}</div>
                <div className="text-sm text-gray-300">{project.stats[0].label}</div>
              </div>
            )}
          </div>
        </div>

        {/* التحديات والحلول */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
            <h2 className="text-3xl font-black mb-8 text-white">المشكلة (التحدي)</h2>
            <ul className="space-y-6">
              {project.challenges?.map((challenge, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <span className="text-red-500 font-bold text-xl mt-0.5">×</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black mb-8 text-white">الحلول الاستراتيجية</h2>
            {project.strategic_solutions?.map((sol, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-lg mb-3 text-primary">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
           {/* معرض الصور - النسخة النهائية التي ستعمل حتماً */}
<section className="mb-24">
  <h2 className="text-3xl font-black mb-10">صور تفصيلية للمشروع</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {project.gallery?.map((imgUrl, i) => (
      <div key={i} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
        <Image 
          // نستخدم الدالة التي عرفناها مسبقاً للحصول على رابط سليم
          src={getFullImageUrl(imgUrl)} 
          alt={`Gallery ${i}`} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
          unoptimized 
        />
      </div>
    ))}
  </div>
</section>

        {/* قسم النتائج */}
        <section className="py-20 my-20 bg-white/5 rounded-[3rem] border border-white/5">
          <div className="text-center mb-16"><h2 className="text-3xl font-black text-white">نتائج ملموسة</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            {project.stats?.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-primary mb-3">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* شهادة العميل */}
        {project.testimonial && (
          <section className="py-16 text-center">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto italic mb-10">
              "{project.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <Image src={getFullImageUrl(project.testimonial.avatar)} alt={project.testimonial.name} width={64} height={64} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{project.testimonial.name}</h4>
                <p className="text-primary text-sm">{project.testimonial.role}</p>
              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}