/** رسالة خطأ لحقل: تُعلن لقارئ الشاشة عند ظهورها وترتبط بالحقل عبر aria-describedby. */
export default function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-red-300 text-sm font-bold pr-2">
      {message}
    </p>
  );
}

/** علامة الحقل المطلوب: نجمة مرئية + نص لقارئ الشاشة (لا تعتمد على اللون). */
export function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="text-primary">*</span>
      <span className="sr-only">(مطلوب)</span>
    </>
  );
}
