import Pricing from "./sections/Pricing";
import Services from "./sections/Services";

export default function Home() {
  return (
    // استبدلنا flex-col بـ block لضمان عدم تداخل التنسيقات
    <div className="block w-full bg-zinc-50 font-sans dark:bg-black">
      <Services/>
      <Pricing/>
    </div>
  );
}