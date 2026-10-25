import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { ResourceCard } from "@/components/resource-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Resource } from "@/lib/content/repository";
import type { Locale } from "@/lib/content/schema";

export function LibraryLanding({
  locale,
  eyebrow,
  title,
  summary,
  resources,
  query,
  tone,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  summary: string;
  resources: Resource[];
  query: string;
  tone: "skill" | "prompt" | "visual";
}) {
  const toneClass = {
    skill: "bg-secondary text-secondary-foreground",
    prompt: "bg-prompt-soft text-accent-foreground",
    visual: "bg-visual-soft text-foreground",
  }[tone];
  const filtered = query
    ? resources.filter((resource) =>
        searchable(resource).includes(query.toLowerCase()),
      )
    : resources;

  return (
    <main id="main-content">
      <section className={`border-b border-foreground/10 ${toneClass}`}>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-black tracking-[0.15em] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 opacity-75">
            {summary}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <form
          className="flex max-w-2xl flex-col gap-3 sm:flex-row"
          role="search"
        >
          <label htmlFor="library-search" className="sr-only">
            {locale === "ms" ? "Cari dalam pustaka ini" : "Search this library"}
          </label>
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="library-search"
              name="q"
              defaultValue={query}
              className="pl-12"
              placeholder={
                locale === "ms"
                  ? "Cari hasil yang anda perlukan"
                  : "Search for the outcome you need"
              }
            />
          </div>
          <Button type="submit">{locale === "ms" ? "Cari" : "Search"}</Button>
        </form>

        <div className="mt-10 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              {query
                ? locale === "ms"
                  ? `Hasil untuk “${query}”`
                  : `Results for “${query}”`
                : locale === "ms"
                  ? "Semua sumber"
                  : "All resources"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {filtered.length}{" "}
              {locale === "ms" ? "sumber ditemui" : "resources found"}
            </p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/${locale}/explore`}>
              {locale === "ms" ? "Gunakan semua penapis" : "Use all filters"}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>

        {filtered.length ? (
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <ResourceCard
                key={resource.data.id}
                resource={resource}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="mt-7 border border-border bg-card p-8">
            <h2 className="text-xl font-black">
              {locale === "ms" ? "Tiada padanan ditemui" : "No matches found"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {locale === "ms"
                ? "Cuba istilah yang lebih ringkas atau teroka semua sumber."
                : "Try a shorter search term or explore all resources."}
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link href={`/${locale}/explore`}>
                {locale === "ms" ? "Teroka pustaka" : "Explore the library"}
              </Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

function searchable(resource: Resource) {
  return [
    resource.data.title.ms,
    resource.data.title.en,
    resource.data.summary.ms,
    resource.data.summary.en,
    ...resource.data.search_aliases.ms,
    ...resource.data.search_aliases.en,
    ...resource.data.tags,
  ]
    .join(" ")
    .toLowerCase();
}
