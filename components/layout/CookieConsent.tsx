"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AppButton } from "@/components/ui/AppButton";

const STORAGE_KEY = "yosal-cookie-consent";
const ROOT_DOMAIN_PARTS = 2;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-QBZ07DT6PS";

type Choice = "accepted" | "rejected" | "undecided";

// حالة بسيطة خارج React (نفس نمط useSyncExternalStore المستخدم في ChatSystem)
const listeners = new Set<() => void>();
let memoryChoice: Choice = "undecided"; // احتياطي إذا تعذّر localStorage
let settingsOpen = false;

function emit(): void {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
    return memoryChoice;
  } catch {
    return memoryChoice;
  }
}

function setGaDisabled(disabled: boolean): void {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = disabled;
}

function clearGaCookies(): void {
  try {
    setGaDisabled(true);
    const host = window.location.hostname;
    const parts = host.split(".");
    const domains = [host, `.${host}`];
    if (parts.length > ROOT_DOMAIN_PARTS) domains.push(`.${parts.slice(-ROOT_DOMAIN_PARTS).join(".")}`);
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
        const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = expired;
        domains.forEach((d) => {
          document.cookie = `${expired}; domain=${d}`;
        });
      }
    });
  } catch {
    /* تجاهل */
  }
}

function setChoice(choice: "accepted" | "rejected"): void {
  memoryChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* التخزين غير متاح: نكتفي بالذاكرة لهذه الجلسة */
  }
  if (choice === "rejected") clearGaCookies();
  else setGaDisabled(false);
  settingsOpen = false;
  emit();
}

function openSettings(): void {
  settingsOpen = true;
  emit();
}

export default function CookieConsent() {
  const choice = useSyncExternalStore<Choice | "server">(subscribe, readChoice, () => "server");
  const reopened = useSyncExternalStore(
    subscribe,
    () => settingsOpen,
    () => false
  );

  if (choice === "server") return null;
  const showBanner = choice === "undecided" || reopened;

  return (
    <>
      {choice === "accepted" && <GoogleAnalytics gaId={GA_ID} />}
      {showBanner && (
        <div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          dir="rtl"
          className="fixed z-[998] bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] w-[calc(100%-6.5rem)] md:bottom-8 md:right-8 md:w-[26rem] md:max-w-[calc(100%-6rem)] rounded-2xl border border-white/10 bg-brand-navy/95 backdrop-blur-xl p-4 md:p-5 text-right shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <h2 id="cookie-consent-title" className="font-bold text-white mb-1.5">
            نحترم خصوصيتك
          </h2>
          <p id="cookie-consent-desc" className="text-xs md:text-sm leading-relaxed text-gray-300 mb-4">
            نستخدم ملفات تعريف الارتباط التحليلية (Google Analytics) لفهم كيفية استخدام الموقع وتحسينه. لن يتم تفعيلها إلا بموافقتك.{" "}
            <Link href="/privacy" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
              سياسة الخصوصية
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-2">
            <AppButton variant="outline" size="sm" onClick={() => setChoice("accepted")}>
              قبول
            </AppButton>
            <AppButton variant="outline" size="sm" onClick={() => setChoice("rejected")}>
              رفض
            </AppButton>
          </div>
        </div>
      )}
    </>
  );
}

/** زر في الفوتر لإعادة فتح خيارات الكوكيز */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openSettings}
      className="hover:text-orange-500 transition-colors inline-flex items-center min-h-11"
    >
      إعدادات الكوكيز
    </button>
  );
}
