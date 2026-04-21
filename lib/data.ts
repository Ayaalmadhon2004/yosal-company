// lib/data.ts
import { Service, PortfolioProject, AgencyStat } from "@/types";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "استراتيجيات التسويق والخطط التسويقية",
    description: "نصمم خرائط طريق مخصصة لتحقيق أهدافك التجارية بأعلى كفاءة ممكنة.",
    iconName: "trending-up",
    features: ["تحليل السوق بدقة", "تحديد الفئات المستهدفة", "وضع ميزانيات ذكية"],
    isFeatured: false,
    ctaText: "اطلب الخدمة"
  },
  {
    id: 2,
    title: "بناء علامة تجارية وهوية بصرية تميزك في السوق",
    description: "نخلق هوية تعكس قيم علامتك التجارية وتترك انطباعاً لا ينسى لدى جمهورك.",
    iconName: "pen-tool",
    features: ["تصميم شعار احترافي", "أدلة استخدام الهوية", "تصاميم سوشيال ميديا"],
    isFeatured: false,
    ctaText: "اطلب الخدمة"
  },
  {
    id: 3,
    title: "تحسين محركات البحث",
    description: "تصدر نتائج البحث الأولى واجذب زيارات مستهدفة دون الحاجة لإعلانات مكلفة.",
    iconName: "search",
    features: ["ظهور في الصفحة الأولى", "زيادة الوصول العضوي", "تحسين تجربة المستخدم"],
    isFeatured: false,
    ctaText: "اطلب الخدمة"
  },
  {
    id: 4,
    title: "صناعة المحتوى والفيديو",
    description: "نحول قصصك إلى تجارب بصرية مبهرة تجذب الجمهور وتحقق الانتشار.",
    iconName: "video",
    features: ["فيديوهات موشن جرافيك", "كتابة محتوى إبداعي", "إنتاج وتصوير احترافي"],
    isFeatured: false,
    ctaText: "اطلب الخدمة"
  },
  {
    id: 5,
    title: "تطوير المواقع",
    description: "بناء مواقع سريعة ومتجاوبة تحول الزوار إلى عملاء دائمين لشركتك.",
    iconName: "layout",
    features: ["سرعة تحميل فائقة", "تحويل عالي (CRO)", "دعم فني متكامل"],
    isFeatured: true, // المميزة في التصميم
    ctaText: "اطلب الخدمة"
  },
  {
    id: 6,
    title: "إدارة منصات التواصل",
    description: "نبني مجتمعاً متفاعلاً حول علامتك التجارية عبر كافة المنصات الاجتماعية.",
    iconName: "message-square",
    features: ["تفاعل يومي مباشر", "حملات إعلانية ممولة", "تقارير أداء شهرية"],
    isFeatured: false,
    ctaText: "اطلب الخدمة"
  }
];

export const statsData: AgencyStat[] = [
  { 
    id: 1, 
    count: "745", 
    label: "استراتيجية", 
    subtext: "تكريمات وجوائز تم حصدها في مجالات الابتكار المعماري والتقني.", 
    iconName: "trending-up" 
  },
  { 
    id: 2, 
    count: "820", 
    label: "متجر إلكتروني", 
    subtext: "منصات تجارية متكاملة تم تطويرها لتعزيز تجربة التسوق الرقمي.", 
    iconName: "pen-tool" 
  },
  { 
    id: 3, 
    count: "643+", 
    label: "مشروع برمجي", 
    subtext: "حلول برمجية مخصصة ساهمت في أتمتة العمليات لشركات كبرى.", 
    iconName: "code" 
  },
  { 
    id: 4, 
    count: "597", 
    label: "مشروع صناعة محتوى فيديو", 
    subtext: "أنظمة برمجية معقدة تم تسليمها بدقة معمارية فائقة الجودة.", 
    iconName: "video" 
  }
];

export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "هوية متجر نون",
    category: "العلامة التجارية",
    image: "/assets/portfolio/noon.jpg",
    slug: "noon-branding"
  },
  {
    id: 2,
    title: "تطبيق نمو المالي",
    category: "تصميم واجهات",
    image: "/assets/portfolio/namu.jpg",
    slug: "namu-app"
  },
  {
    id: 3,
    title: "منصة زاد التعليمية",
    category: "استراتيجية رقمية",
    image: "/assets/portfolio/zad.jpg",
    slug: "zad-platform"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "أحمد المنصور",
    role: "مدير تسويق، ريتال",
    content: "كان التحدي الأكبر لدينا هو التفاعل، وبفضل يوصل استطعنا بناء مجتمع حقيقي يتفاعل مع كل منشور ننشره.",
    avatar: "أ",
    rating: 5
  },
  {
    id: 2,
    name: "سارة العتيبي",
    role: "مؤسسة متجر لافندر",
    content: "الاحترافية في التنفيذ والالتزام بالمواعيد جعلت من يوصل شريك النجاح الأول لنا في الفضاء الرقمي.",
    avatar: "س",
    rating: 5
  },
  {
    id: 3,
    name: "فهد الدوسري",
    role: "المدير التنفيذي، مروج",
    content: "فريق مبدع يفهم السوق السعودي جيداً، استطاعوا زيادة قاعدة عملائنا بشكل ملحوظ خلال أشهر بسيطة.",
    avatar: "ف",
    rating: 5
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "باقة الاستمرارية",
    description: "حلول تسويقية شاملة للمؤسسات الكبرى",
    price: "2000",
    features: ["تحسين وتحديث الموقع شهرياً", "تقارير أسبوعية", "النشر 7 مرات أسبوعياً", "تحليل الأداء"],
    isFeatured: false,
  },
  {
    id: 2,
    name: "باقة الصعود",
    description: "الخيار الأمثل للنمو السريع والتوسع",
    price: "1300",
    features: ["خطة تسويقية", "تطوير موقع", "تحسين محركات البحث SEO", "تصميم محتوى فيديو موشن جرافيك"],
    isFeatured: true,
  },
  {
    id: 3,
    name: "باقة الانطلاقة",
    description: "مثالية للشركات الناشئة والمشاريع الصغيرة",
    price: "500",
    features: ["تصميم الشعار", "إرشادات الهوية البصرية", "استراتيجية تسويقية", "تصميم منشور واحد"],
    isFeatured: false,
  },
];