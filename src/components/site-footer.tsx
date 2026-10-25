import Link from "next/link";
import type { Locale } from "@/lib/content/schema";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-foreground/10 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black tracking-tight">
            Kemahiran<span className="text-accent">.AI</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-background/70">
            {locale === "ms"
              ? "Pustaka sumber AI praktikal untuk Malaysia. Dibina oleh Forward Labs dan dikuasakan oleh Forward College."
              : "A practical AI resource library for Malaysia. Built by Forward Labs and powered by Forward College."}
          </p>
        </div>
        <div>
          <p className="text-xs font-black tracking-[0.16em] text-background/55 uppercase">
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
          <p className="text-xs font-black tracking-[0.16em] text-background/55 uppercase">
            {locale === "ms" ? "Ketahui lanjut" : "Learn more"}
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <span aria-disabled="true" className="text-background/45">
              {locale === "ms"
                ? "Tentang — akan datang"
                : "About — coming soon"}
            </span>
            <span aria-disabled="true" className="text-background/45">
              {locale === "ms"
                ? "Mohon sumber — akan datang"
                : "Request a resource — coming soon"}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/15 px-5 py-5 text-center text-xs text-background/55 sm:px-8">
        © 2026 Forward Labs · Powered by Forward College
      </div>
    </footer>
  );
}
