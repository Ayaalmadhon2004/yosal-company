export default function PrivacyGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12" dir="rtl">
      {/* استخدام المعلومات */}
      <div className="bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45"></div>
          </div>
          استخدام المعلومات
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          نستخدم بياناتك لتقديم خدماتنا وتحسين تجربتك التسويقية، يشمل ذلك تخصيص المحتوى، تحليل الأداء الإعلاني، وإرسال تحديثات حول استراتيجيات النمو الرقمي التي قد تهم عملك.
        </p>
        <div className="bg-[#0a0d1d] p-4 rounded-xl border-r-4 border-[#F58220]">
          <p className="text-xs text-gray-500 italic font-medium">
            "نحن لا نقوم ببيع بياناتك لأطراف ثالثة لأغراض ترويجية تحت أي ظرف من الظروف."
          </p>
        </div>
      </div>

      {/* ملفات تعريف الارتباط */}
      <div className="bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-orange-500 rounded-full"></div>
          </div>
          ملفات تعريف الارتباط
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          نستخدم الكوكيز لتحسين سرعة الموقع وحفظ تفضيلاتك. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك، ولكن قد يؤثر تعطيلها على وظائف معينة في الموقع.
        </p>
      </div>

      {/* حقوق المستخدم - تمتد على عرض الشبكة */}
      <div className="lg:col-span-2 bg-[#12162b] p-10 rounded-[2.5rem] border border-gray-800">
        <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
           حقوق المستخدم
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "حق الوصول", desc: "طلب نسخة من البيانات الشخصية التي نحتفظ بها." },
            { title: "حق الحذف", desc: "المطالبة بحذف معلوماتك من سجلاتنا بشكل نهائي." },
            { title: "التصحيح", desc: "تحديث أي معلومات غير دقيقة أو غير كاملة فوراً." },
            { title: "الاعتراض", desc: "رفض معالجة بياناتك لأغراض تسويقية محددة." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-white font-bold text-sm">{item.title}</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}