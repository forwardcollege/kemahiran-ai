import Link from "next/link";
import { Heart, Menu, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/content/schema";

const labels = {
  ms: {
    home: "Utama",
    skills: "Kemahiran AI",
    prompts: "Prompt LLM",
    visual: "Imej & Video",
    explore: "Teroka",
    favourites: "Kegemaran",
    signIn: "Log masuk",
    menu: "Buka menu",
  },
  en: {
    home: "Home",
    skills: "AI Skills",
    prompts: "LLM Prompts",
    visual: "Image & Video",
    explore: "Explore",
    favourites: "Favourites",
    signIn: "Sign in",
    menu: "Open menu",
  },
} as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const other = locale === "ms" ? "en" : "ms";
  const links = [
    [copy.home, `/${locale}`],
    [copy.skills, `/${locale}/skills`],
    [copy.prompts, `/${locale}/llm-prompts`],
    [copy.visual, `/${locale}/visual-prompts`],
    [copy.explore, `/${locale}/explore`],
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/88">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-5 px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-label="Kemahiran.AI"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-foreground text-sm font-black text-background">
            K.
          </span>
          <span className="text-[1.05rem] font-black tracking-[-0.025em]">
            Kemahiran<span className="text-primary">.AI</span>
          </span>
        </Link>

        <nav
          className="ml-3 hidden items-center gap-1 lg:flex"
          aria-label={locale === "ms" ? "Navigasi utama" : "Primary navigation"}
        >
          {links.slice(1).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href={`/${locale}/favourites`}>
              <Heart aria-hidden="true" className="size-4" />
              {copy.favourites}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href={`/${locale}/sign-in`}>
              <UserRound aria-hidden="true" className="size-4" />
              {copy.signIn}
            </Link>
          </Button>
          <Link
            href={`/${other}`}
            hrefLang={other === "ms" ? "ms-MY" : "en-MY"}
            className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-black tracking-wide hover:border-primary/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            {other === "ms" ? "BM" : "EN"}
          </Link>
        </div>

        <details className="group relative ml-auto lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-border bg-card marker:hidden hover:border-primary/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only">{copy.menu}</span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 border border-border bg-card p-3 shadow-xl">
            <nav
              className="grid"
              aria-label={
                locale === "ms" ? "Navigasi mudah alih" : "Mobile navigation"
              }
            >
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-3 text-sm font-bold hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  {label}
                </Link>
              ))}
              <Link
                href={`/${locale}/favourites`}
                className="rounded-lg px-3 py-3 text-sm font-bold hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                {copy.favourites}
              </Link>
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t pt-3">
              <Button asChild variant="secondary" size="sm">
                <Link href={`/${locale}/sign-in`}>{copy.signIn}</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href={`/${other}`}>{other === "ms" ? "BM" : "EN"}</Link>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
