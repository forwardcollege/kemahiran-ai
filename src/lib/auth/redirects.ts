import type { Locale } from "@/lib/content/schema";

const redirectOrigin = "https://kemahiran.invalid";

export function safeRedirectPath(
  value: string | null | undefined,
  fallbackLocale: Locale = "ms",
) {
  const fallback = `/${fallbackLocale}`;
  if (!value) return fallback;

  try {
    const url = new URL(value, redirectOrigin);
    if (url.origin !== redirectOrigin) return fallback;
    if (!/^\/(ms|en)(?:\/|$)/.test(url.pathname)) return fallback;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}

export function localeFromRedirectPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "ms";
}
