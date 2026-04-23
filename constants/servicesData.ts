import { 
  TrendingUp, Layout, BrainCircuit, Target, 
  Search, Share2, Palette, Globe, Video, ShieldCheck 
} from "lucide-react";

// --- الواجهات (Interfaces) ---
// تأكدي من وجود export هنا لحل مشكلة الصورة الأخيرة
export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarLetter: string;
}

export interface ServiceData {
  hero: {
    badge: string;
    title: string;
    highlightText: string;
    description: string;
    image: string;
    stats?: { value: string; label: string };
  };
  testimonials: Testimonial[];
  faqs: FAQ[];
  comparison: {
    challenges: string[];
    solutions: string[];
  };
  featuresSection?: {
    title: string;
    features: Feature[];
    image: string;
  };
  deliverables: {
    title: string;
    desc: string;
    icon: any; 
  }[];
  steps: {
    number: string;
    title: string;
    desc: string;
  }[];
}

// --- البيانات المشتركة ---

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "anonymous",
    role: "مالكة مطعم",
    content: "متجري لم يكن لينجح لولا اني قابلت وكالة يوصل افضل قرار قمت به هو انني اهتممت بالحضور الرقمي و استمعت لنصيحة المسوقة ندى رئيسة فريق التسويق لدى وكالة يوصل",
    avatarLetter: "R"
  },
  {
    id: 2,
    name: "anonymous",
    role: "المدير التنفيذي لشركة حلول برمجية",
    content: "تعجبت من سرعة الاداء و قياساتهم الدقيقة، خطة المحتوى كانت جديدة بالنسبة لي ولم اقتنع بها اولا، لكنني وثقت برشا كاتبة خطة المحتوى و كان هذا قرار لا أندم عليه",
    avatarLetter: "T"
  },
  {
    id: 3,
    name: "anonymous",
    role: "مؤسسة منتج تجميل",
    content: "عجبني تقسيم الفرق و بنية الوكالة كأنها شركة كبيرة بامكانيات عادية و لكن النتائج كانت لا مثيل لها، اخترنا يوصل بسبب السعر المنافس و ابهرتنا بنتيجة تنافس وكالات اسعارها باهضة",
    avatarLetter: "S"
  },
  {
    id: 4,
    name: "anonymous",
    role: "مدير متجر إلكتروني",
    content: "فريق التصوير جدا لطيفين و مبدعين حبيت تعاملهم معنا و سرعتهم بالانجاز كانت الفكرة غريبة اننا نصور قدام الزباين لكن النتائج اثبتت انه يستحق العناء، شكرا لوكالة يوصل",
    avatarLetter: "A"
  }
];

// --- تصدير البيانات الرئيسية ---

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
      { title: "مؤشرات الأداء", desc: "تحديد معايير واضحة للنجاح.", icon: TrendingUp },
      { title: "خارطة الطريق", desc: "جدول زمني مفصل للمهام.", icon: Target }
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
      stats: { value: "100%", label: "توافق مع المعايير" }
    },
    testimonials: allTestimonials,
    faqs: [
      { id: 1, question: "كم يستغرق بناء موقع إلكتروني؟", answer: "تعتمد المدة على حجم المشروع، المواقع التعريفية تستغرق 2-4 أسابيع، والمتاجر الكبيرة 6-10 أسابيع." },
      { id: 2, question: "هل تقدمون خدمات الدعم الفني بعد الإطلاق؟", answer: "نعم، نوفر باقات صيانة ودعم فني لضمان استقرار الموقع وتحديثه." },
      { id: 3, question: "هل موقعي سيكون متوافقاً مع محركات البحث؟", answer: "بالتأكيد، نلتزم بكود نظيف ومعايير SEO التقنية الأساسية." }
    ],
    comparison: {
      challenges: ["بطء التحميل", "تصميم قديم", "صعوبة الإدارة"],
      solutions: ["منصات فائقة السرعة", "تصاميم عصرية", "لوحة تحكم كاملة"]
    },
    featuresSection: {
      title: "لماذا تختار يوصل لتطوير منصتك؟",
      image: "/assets/Web Development.png",
      features: [
        { title: "أداء فائق", description: "مواقع سريعة جداً تضمن بقاء الزائر.", icon: Globe },
        { title: "أمان مطلق", description: "حماية بياناتك وعملائك هي أولويتنا.", icon: ShieldCheck },
        { title: "تجربة مستخدم", description: "واجهات سهلة تزيد من معدل التحويل.", icon: Layout }
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
      title: "اصنع لنفسك",
      highlightText: "هوية لا تُنسى",
      description: "نصمم هويات بصرية تعبر عن قيم مشروعك وتخلق انطباعاً دائماً لدى جمهورك.",
      image: "/assets/identity branding work.png",
      stats: { value: "+50", label: "هوية بصرية" }
    },
    testimonials: allTestimonials,
    faqs: [
        { id: 1, question: "كم تستغرق رؤية النتائج الأولى؟", answer: "تظهر النماذج الأولية خلال 7-10 أيام عمل." },
        { id: 2, question: "هل تشمل الخدمة التصوير الفوتوغرافي؟", answer: "نعم، نوفر جلسات تصوير احترافية للمنتجات كجزء من بناء الهوية." },
        { id: 3, question: "ما هي المنصات التي تديرونها؟", answer: "ندير الهوية عبر كافة منصات التواصل الاجتماعي والمطبوعات." }
    ],
    comparison: {
      challenges: ["هوية مشتتة", "عدم وضوح الرسالة", "شعار غير احترافي"],
      solutions: ["نظام بصري متكامل", "تموضع استراتيجي", "تصميم عصري"]
    },
    featuresSection: {
      title: "لماذا يوصل هي الأفضل لبناء علامتك؟",
      image: "/assets/identity branding work.png",
      features: [
        { title: "فهم عميق", description: "نترجم قيمك إلى ألوان وخطوط تحكي قصتك.", icon: Palette },
        { title: "دليل شامل", description: "نسلمك Brand Book يضمن ثبات هويتك مستقبلاً.", icon: Layout },
        { title: "تميز بصري", description: "نصمم ما يجعلك تبرز وسط المنافسين.", icon: BrainCircuit }
      ]
    },
    deliverables: [
      { title: "تصميم الشعار", desc: "ابتكار رمز يعبر عن جوهرك.", icon: Palette },
      { title: "الهوية البصرية", desc: "الألوان والخطوط والمطبوعات.", icon: Layout }
    ],
    steps: [
      { number: "1", title: "الابتكار", desc: "رسم المفاهيم الأولية للهوية." },
      { number: "2", title: "التطوير", desc: "تحويل الفكرة لنظام بصري متكامل." }
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