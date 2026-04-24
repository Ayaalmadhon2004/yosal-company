import { ServiceData } from "@/types";
import { allTestimonials } from "./siteData";
import { BrainCircuit, Target, TrendingUp, Search, Layout, Palette ,Code2,BarChart3 ,Globe,Share2,Video ,} from "lucide-react";

export const servicesData: Record<string, ServiceData> = {
"strategic-planning": {
    hero: {
      badge: "STRATEGIC PLANNING",
      title: "حول رؤيتك إلى",
      highlightText: "واقع ملموس",
      description: "نحن لا نصمم خططاً فقط، بل نبني مسارات نمو مستدامة تعتمد على البيانات الدقيقة والتحليل العميق للسوق.",
      image: "/assets/futurePlan.png",
      stats: { value: "92%", label: "معدل تحقيق الأهداف" }
    },
    testimonials: allTestimonials,
    faqs: [
      { id: 1, question: "كم تستغرق عملية بناء الخطة الاستراتيجية؟", answer: "تستغرق عادة من 4 إلى 6 أسابيع حسب حجم الشركة وتعقيد السوق." },
      { id: 2, question: "هل تكتفون بصياغة الخطة أم تشرفون على التنفيذ؟", answer: "نقدم خيار الإشراف الكامل لضمان تطبيق الاستراتيجية بدقة وتحقيق النتائج." },
      { id: 3, question: "ماذا لو تغيرت ظروف السوق أثناء التنفيذ؟", answer: "خططنا مرنة (Agile) وقابلة للتعديل لمواكبة أي متغيرات مفاجئة." }
    ],
    comparison: {
      challenges: ["قرارات مبنية على الحدس", "تشتت الموارد", "عدم مواكبة التغيرات"],
      solutions: ["نماذج معتمدة على AI", "خارطة طريق دقيقة", "مرونة مؤسسية"]
    },
    featuresSection: {
      title: "لماذا \"يوصل\" هي خيارك الأمثل للتخطيط؟",
      image: "/assets/people.png",
      features: [
        { title: "خبرة ممتدة", description: "أكثر من 10 سنوات في صناعة الاستراتيجيات للشركات الكبرى.", icon: BrainCircuit },
        { title: "التركيز على العائد (ROI)", description: "كل قراراتنا تهدف أولاً وأخيراً لزيادة ربحية عملك.", icon: Target },
        { title: "منهجية رشيقة", description: "نضمن سرعة الاستجابة لمتغيرات السوق.", icon: TrendingUp }
      ]
    },
    deliverables: [
      { title: "تحليل السوق العميق", desc: "دراسة المنافسين، اتجاهات المستهلكين، وفجوات السوق.", icon: Search },
      { title: "مؤشرات الأداء (KPIs)", desc: "تحديد معايير واضحة للنجاح تمكنك من قياس كل خطوة.", icon: TrendingUp },
      { title: "التدريب والتمكين", desc: "تدريب فريقك على تنفيذ الاستراتيجية بفعالية.", icon: BrainCircuit },
      { title: "خارطة الطريق الاستراتيجية", desc: "جدول زمني مفصل يحدد المهام والميزانيات.", icon: Map }
    ],
    steps: [
      { number: "1", title: "الاكتشاف", desc: "فهم أهدافك الحالية وتحدياتك." },
      { number: "2", title: "البحث", desc: "تحليل السوق والمنافسين بعمق." },
      { number: "3", title: "التنفيذ", desc: "دعم مباشر خلال مرحلة الإطلاق." }
    ]
  },

  "web-development": {
    hero: {
      badge: "WEB DEVELOPMENT",
      title: "نحول رؤيتك إلى",
      highlightText: "منصة رقمية",
      description: "بناء مواقع وتطبيقات ويب سريعة وآمنة تعزز حضورك الرقمي وتجربة عملائك.",
      image: "/assets/Web Development.png",
      stats: { value: "+99%", label: "نسبة رضا العملاء" }
    },
    testimonials: allTestimonials,
    faqs: [
      { id: 1, question: "كم يستغرق بناء موقع إلكتروني؟", answer: "تعتمد المدة على حجم المشروع، عادة من 4 إلى 8 أسابيع." },
      { id: 2, question: "هل الموقع متوافق مع محركات البحث؟", answer: "نعم، نلتزم بكود نظيف ومعايير SEO التقنية الأساسية." }
    ],
    comparison: {
      challenges: ["بطء التحميل", "تصميم قديم", "صعوبة الإدارة"],
      solutions: ["منصات فائقة السرعة", "تصاميم عصرية", "لوحة تحكم كاملة"]
    },
    featuresSection: {
      title: "لماذا يختار المحترفون يوصل؟",
      image: "/assets/Coding.png",
      features: [
        { 
          title: "أكواد نظيفة وقابلة للتوسع", 
          description: "نكتب أكواد برمجية تتبع أفضل الممارسات، مما يسهل عملية تطوير الموقع في المستقبل.", 
          icon: Code2 
        },
        { 
          title: "تركيز كامل على الأداء", 
          description: "نحن لا نصمم مواقع جميلة فحسب، بل نصمم أدوات عمل فعالة تزيد من أرباحك.", 
          icon: BarChart3 
        }
      ]
    },
    deliverables: [
      { title: "تصميم متجاوب", desc: "ظهور مذهل على كل الأجهزة.", icon: Globe },
      { title: "سرعة فائقة", desc: "تحميل الموقع في أقل من ثانيتين.", icon: TrendingUp }
    ],
    steps: [
      { number: "1", title: "التخطيط", desc: "رسم الهيكل العام للمنصة." },
      { number: "2", title: "التطوير", desc: "كود نظيف وسريع بأعلى المعايير." }
    ]
  },

  "seo": {
    hero: {
      badge: "SEO OPTIMIZATION",
      title: "اجعل موقعك",
      highlightText: "مغناطيساً للعملاء",
      description: "نركز على جودة الزيارات التي تتحول إلى عائد استثماري حقيقي لعملك.",
      image: "/assets/analysis.png",
      stats: { value: "+245%", label: "زيادة الظهور" }
    },
    testimonials: allTestimonials,
    faqs: [
      { id: 1, question: "هل الـ SEO مناسب لكل أنواع المواقع؟", answer: "نعم، أي نشاط يبحث عنه الناس في جوجل يحتاج إلى استراتيجية SEO قوية." },
      { id: 2, question: "ما الذي يجعل يوصل مختلفة في الـ SEO؟", answer: "نعتمد على تحليل البيانات وبناء محتوى يخدم نية المستخدم وليس مجرد كلمات دلالية." },
      { id: 3, question: "كيف نضمن استمرار النتائج؟", answer: "من خلال المراقبة المستمرة وتحديث المحتوى بما يتوافق مع خوارزميات جوجل." }
    ],
    comparison: {
      challenges: ["محتوى غير مستهدف", "مشاكل تقنية", "غياب الموثوقية"],
      solutions: ["هندسة محتوى ذكية", "تدقيق تقني شامل", "بناء سلطة النطاق"]
    },
    featuresSection: {
      title: "لماذا يوصل هي شريكك في تصدر النتائج؟",
      image: "/assets/analysis.png",
      features: [
        { title: "تحليل ذكي", description: "نكتشف الكلمات الدلالية التي تجلب المبيعات فعلاً.", icon: Search },
        { title: "روابط قوية", description: "بناء سمعة موقعك من خلال روابط خارجية موثوقة.", icon: Share2 },
        { title: "تقارير شفافة", description: "نطلعك على كل تحديث في ترتيب موقعك.", icon: Layout }
      ]
    },
    deliverables: [
      { title: "بحث الكلمات", desc: "استهداف الكلمات المربحة.", icon: Search },
      { title: "SEO تقني", desc: "تحسين هيكلة البيانات والسرعة.", icon: Layout }
    ],
    steps: [
      { number: "1", title: "التدقيق", desc: "كشف العوائق التقنية للموقع." },
      { number: "2", title: "بناء السلطة", desc: "تعزيز موثوقية النطاق بروابط قوية." }
    ]
  },

  "branding": {
    hero: {
      badge: "BRANDING",
      title: "نبني هويتك",
      highlightText: "لتترك أثراً لا يُنسى",
      description: "نصمم هويات بصرية تعبر عن قيم مشروعك وتخلق انطباعاً دائماً لدى جمهورك.",
      image: "/assets/identity-branding-work.png",
      stats: { value: "+50", label: "هوية بصرية" }
    },
    testimonials: allTestimonials,
    faqs: [],
    comparison: { challenges: [], solutions: [] },
    featuresSection: {
      title: "لماذا يختارنا الرواد لتطوير هوياتهم؟",
      // تمرير الصورتين (المصممة والحقيبة) ليتطابق مع التصميم
      image: ["/assets/brand-bag.png", "/assets/designer-sketching.png"], 
      features: [
        { title: "إبداع بلا حدود", description: "فريقنا يضم نخبة من المصممين الذين يمزجون الفن بالاستراتيجية.", icon: Palette },
        { title: "ثبات وتناغم بصري", description: "نضمن لك نظاماً يعمل بسلاسة من البطاقة وحتى اللوحات الإعلانية.", icon: Share2 }
      ]
    },
    deliverables: [
      { title: "تصميم الهوية", desc: "ابتكار نظام بصري متكامل.", icon: Palette },
      { title: "دليل البراند", desc: "كتيب إرشادات استخدام الهوية.", icon: Layout }
    ],
    steps: [
      { number: "1", title: "الاستشارة", desc: "فهم فلسفة العلامة التجارية." },
      { number: "2", title: "التصميم", desc: "تحويل الأفكار إلى هوية بصرية ملموسة." }
    ]
  },

  "content-creation": {
    hero: {
      badge: "CONTENT CREATION",
      title: "اجذب جمهورك بـ",
      highlightText: "محتوى إبداعي",
      description: "نحن نحول الأفكار إلى فيديوهات وتصاميم يتفاعل معها جمهورك.",
      image: "/assets/professional film production studio.png",
      stats: { value: "+1M", label: "تفاعل" }
    },
    testimonials: allTestimonials,
    faqs: [
        { id: 1, question: "ما هي المدة المستغرقة لإنتاج فيديو إعلاني؟", answer: "تستغرق عملية الإنتاج من أسبوع إلى أسبوعين حسب حجم العمل." },
        { id: 2, question: "هل تشمل الخدمة توفير الممثلين ومواقع التصوير؟", answer: "نعم، نتكفل بكافة تفاصيل الإنتاج من الألف إلى الياء." },
        { id: 3, question: "بأي جودة يتم تسليم الفيديوهات النهائية؟", answer: "يتم التسليم بجودة 4K وبأحجام تتناسب مع مختلف المنصات." }
    ],
    comparison: {
      challenges: ["تفاعل منخفض", "محتوى ممل", "غياب الاستمرارية"],
      solutions: ["صناعة محتوى ترند", "جودة إنتاج سينمائية", "خطة نشر مدروسة"]
    },
    featuresSection: {
      title: "لماذا يوصل هي خيارك للإبداع المرئي؟",
      image: "/assets/professional film production studio.png",
      features: [
        { title: "إنتاج احترافي", description: "نستخدم أحدث المعدات السينمائية.", icon: Video },
        { title: "أفكار خارج الصندوق", description: "نصوص وسيناريوهات تجذب الاهتمام.", icon: Share2 },
        { title: "سرعة الإنجاز", description: "تسليم المحتوى بجودة عالية وفي وقت قياسي.", icon: TrendingUp }
      ]
    },
    deliverables: [
      { title: "إنتاج الفيديو", desc: "فيديوهات إعلانية وتوعوية.", icon: Video },
      { title: "كتابة السيناريو", desc: "نصوص قوية تحول المشاهد لعميل.", icon: Share2 }
    ],
    steps: [
      { number: "1", title: "العصف الذهني", desc: "توليد أفكار تتماشى مع هويتك." },
      { number: "2", title: "الإنتاج", desc: "التصوير والكتابة والمونتاج." }
    ]
  }
};