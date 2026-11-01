import { HONEYPOT_FIELD } from "@/lib/formGuards";

/** حقل فخ للروبوتات: مخفي بصرياً وعن قارئات الشاشة ولوحة المفاتيح ومدراء كلمات المرور. */
export default function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        data-lpignore="true"
        data-1p-ignore="true"
        data-form-type="other"
      />
    </div>
  );
}
