/**
 * أدوات التحقق وحماية النماذج من الإزعاج (بدون كابتشا).
 * دوال نقية قدر الإمكان لتسهيل اختبارها لاحقاً.
 */

/** الحد الأدنى بين عمليتي إرسال ناجحتين لنفس النموذج (بالميلي ثانية). */
export const DEFAULT_COOLDOWN_MS = 30_000;

/** اسم حقل الـ Honeypot (يجب ألا يتطابق مع أي حقل حقيقي). */
export const HONEYPOT_FIELD = "company_website";

const ARABIC_INDIC_ZERO = 0x0660;
const EXTENDED_ARABIC_INDIC_ZERO = 0x06f0;
const MAX_EMAIL_LENGTH = 254;
const MS_PER_SECOND = 1000;

/** تحويل الأرقام العربية/الهندية إلى لاتينية. */
function toLatinDigits(value: string): string {
  // يقبل "٥" (هندية) ويرفض "5" (لاتينية)
  const arabicIndic = /[\u0660-\u0669]/g;
  // يقبل "۵" (فارسية) ويرفض "5" (لاتينية)
  const extendedArabicIndic = /[\u06F0-\u06F9]/g;
  return value
    .replace(arabicIndic, (d) => String(d.charCodeAt(0) - ARABIC_INDIC_ZERO))
    .replace(extendedArabicIndic, (d) => String(d.charCodeAt(0) - EXTENDED_ARABIC_INDIC_ZERO));
}

/** تحقق متساهل: نص@نطاق.امتداد بدون مسافات. */
export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (email.length === 0 || email.length > MAX_EMAIL_LENGTH) return false;
  // يقبل "a@b.co" ويرفض "a@b" أو "a b@c.com"
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * جوال سعودي: 05xxxxxxxx / 5xxxxxxxx / +9665xxxxxxxx / 009665xxxxxxxx
 * أو رقم دولي بصيغة E.164 (+ ثم 8 إلى 15 رقماً).
 */
export function isValidPhone(value: string): boolean {
  // يزيل المسافات والشرطات والأقواس: "05 5-123" يصبح "0551 23"
  const separators = /[\s\-().]/g;
  const phone = toLatinDigits(value).replace(separators, "");
  // سعودي: يقبل "0551234567" و"+966551234567" ويرفض "0451234567"
  const saudiMobile = /^(?:\+966|00966|0)?5\d{8}$/;
  if (saudiMobile.test(phone)) return true;
  // دولي E.164: يقبل "+447911123456" ويرفض "447911123456" (بدون +)
  const e164 = /^\+[1-9]\d{7,14}$/;
  return e164.test(phone);
}

/** رابط http(s) صالح له اسم نطاق. */
export function isValidHttpUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.includes(".")
    );
  } catch {
    return false;
  }
}

/** الـ Honeypot معبأ = روبوت غالباً. */
export function isHoneypotFilled(formData: FormData): boolean {
  const v = formData.get(HONEYPOT_FIELD);
  return typeof v === "string" && v.trim().length > 0;
}

// ---------- Cooldown (بعد إرسال ناجح فقط) ----------

const memoryStore = new Map<string, number>();
const storageKey = (key: string) => `form-cooldown:${key}`;

function readLast(key: string): number {
  let last = memoryStore.get(key) ?? 0;
  try {
    const stored = Number(window.sessionStorage.getItem(storageKey(key)));
    if (Number.isFinite(stored) && stored > last) last = stored;
  } catch {
    /* sessionStorage غير متاح */
  }
  return last;
}

/** عدد الثواني المتبقية قبل السماح بإرسال جديد (0 = مسموح). */
export function getCooldownRemaining(
  key: string,
  cooldownMs: number = DEFAULT_COOLDOWN_MS,
  now: number = Date.now()
): number {
  const remaining = readLast(key) + cooldownMs - now;
  return remaining > 0 ? Math.ceil(remaining / MS_PER_SECOND) : 0;
}

/** تسجيل إرسال ناجح. */
export function markSubmitted(key: string, now: number = Date.now()): void {
  memoryStore.set(key, now);
  try {
    window.sessionStorage.setItem(storageKey(key), String(now));
  } catch {
    /* تجاهل */
  }
}

export function cooldownMessage(seconds: number): string {
  return `تم إرسال طلبك للتو. يرجى الانتظار ${seconds} ثانية قبل إرسال طلب جديد.`;
}

// ---------- رسائل موحدة (محايدة جندرياً) ----------

export const FORM_MESSAGES = {
  emailRequired: "يرجى إدخال البريد الإلكتروني.",
  emailInvalid: "يرجى إدخال بريد إلكتروني صحيح، مثل example@mail.com.",
  nameRequired: "يرجى إدخال الاسم.",
  phoneRequired: "يرجى إدخال رقم الجوال.",
  phoneInvalid: "يرجى إدخال رقم جوال صحيح، مثل 05xxxxxxxx أو +9665xxxxxxxx.",
  urlInvalid: "يرجى إدخال رابط صحيح، مثل https://example.com.",
} as const;
