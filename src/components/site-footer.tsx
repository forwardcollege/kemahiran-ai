import Link from "next/link";
import { MagicWandIcon } from "@phosphor-icons/react/ssr";
import type { Locale } from "@/lib/content/schema";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xl font-black tracking-tight"
            aria-label="Kemahiran.AI"
          >
            <MagicWandIcon
              className="size-6 text-primary"
              aria-hidden="true"
              weight="bold"
            />
            <span>
              Kemahiran<span className="text-primary">.AI</span>
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-footer-foreground/70">
            {locale === "ms"
              ? "Pustaka sumber AI praktikal untuk Malaysia. Dibina oleh Forward Labs dan dikuasakan oleh Forward College."
              : "A practical AI resource library for Malaysia. Built by Forward Labs and powered by Forward College."}
          </p>
        </div>
        <div>
          <p className="text-xs font-black tracking-[0.16em] text-footer-foreground/55 uppercase">
            {locale === "ms" ? "Pustaka" : "Library"}
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href={`/${locale}`}>
              {locale === "ms" ? "Semua Sumber" : "All Resources"}
            </Link>
            <Link href={`/${locale}/skills`}>
              {locale === "ms" ? "Kemahiran AI" : "AI Skills"}
            </Link>
            <Link href={`/${locale}/llm-prompts`}>
              {locale === "ms" ? "Prompt LLM" : "LLM Prompts"}
            </Link>
            <Link href={`/${locale}/visual-prompts`}>
              {locale === "ms"
                ? "Prompt Imej & Video"
                : "Image & Video Prompts"}
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-black tracking-[0.16em] text-footer-foreground/55 uppercase">
            {locale === "ms" ? "Ketahui lanjut" : "Learn more"}
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <span aria-disabled="true" className="text-footer-foreground/45">
              {locale === "ms"
                ? "Tentang — akan datang"
                : "About — coming soon"}
            </span>
            <span aria-disabled="true" className="text-footer-foreground/45">
              {locale === "ms"
                ? "Mohon sumber — akan datang"
                : "Request a resource — coming soon"}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/15 px-5 py-5 text-center text-xs text-footer-foreground/55 sm:px-8">
        © 2026 Forward Labs · Powered by Forward College
      </div>
    </footer>
  );
}
