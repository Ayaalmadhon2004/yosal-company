import Pricing from "./sections/Pricing";
import Problems from "./sections/Problems";
import Services from "./sections/Services";

export default function Home() {
  return (
    // استبدلنا flex-col بـ block لضمان عدم تداخل التنسيقات
    <div className="block w-full bg-zinc-50 font-sans dark:bg-black">
      <Problems/>
      <Services/>
      <Pricing/>
    </div>
  );
}