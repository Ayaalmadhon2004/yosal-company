export default function PrivacySidebar() {
  const links = [
    "جمع البيانات",
    "استخدام المعلومات",
    "ملفات تعريف الارتباط",
    "حقوق المستخدم"
  ];

  return (
    <div className="bg-[#12162b] p-8 rounded-[2rem] border border-gray-800" dir="rtl">
      <h4 className="text-white font-bold mb-6 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-[#F58220] rounded-full"></div>
        فهرس الصفحة
      </h4>
      <ul className="space-y-4">
        {links.map((link, i) => (
          <li key={i} className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer transition-colors group">
            <span className="text-sm">{link}</span>
            <span className="text-[#F58220] opacity-0 group-hover:opacity-100">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
}