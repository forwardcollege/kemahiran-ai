import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CatalogueBrowser,
  type CatalogueItem,
} from "@/components/catalogue-browser";
import { JsonLd } from "@/components/json-ld";
import {
  getTaxonomyLabels,
  getVisibleResources,
} from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { buildLocalizedMetadata, siteJsonLd } from "@/lib/seo";
import { getAuthenticatedUser, getFavouriteIds } from "@/lib/supabase/server";

const copy = {
  ms: {
    eyebrow: "Pustaka",
    title: "Semua Sumber",
    summary:
      "Terokai semua kemahiran dan prompt AI praktikal yang disusun untuk konteks Malaysia.",
  },
  en: {
    eyebrow: "Library",
    title: "All Resources",
    summary:
      "Explore every practical AI skill and prompt curated for Malaysian contexts.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) return {};
  const locale = parsed.data;
  const text = copy[locale];

  return buildLocalizedMetadata({
    locale,
    title:
      locale === "ms"
        ? "Semua Sumber AI Praktikal"
        : "All Practical AI Resources",
    description: text.summary,
    msPath: "/ms",
    enPath: "/en",
  });
}

export default async function LocaleHome({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const text = copy[locale];
  const query = (await searchParams).q ?? "";
  const resources = getVisibleResources();
  const tagTaxonomy = getTaxonomyLabels("tags");
  const tagLabels = Object.fromEntries(
    Object.entries(tagTaxonomy).map(([id, label]) => [id, label[locale]]),
  );
  const items: CatalogueItem[] = resources.map(({ data }) => ({
    id: data.id,
    type: data.type,
    slug: data.slug[locale],
    title: data.title[locale],
    summary: data.summary[locale],
    titleSearch: [
      data.title.ms,
      data.title.en,
      data.summary.ms,
      data.summary.en,
      ...data.search_aliases.ms,
      ...data.search_aliases.en,
      ...data.tags,
      ...data.tags.flatMap((tag) => [tagTaxonomy[tag].ms, tagTaxonomy[tag].en]),
    ]
      .join(" ")
      .toLocaleLowerCase(),
    audiences: data.audiences,
    tags: data.tags,
    tools: data.tools.map((tool) => tool.id),
    difficulty: data.difficulty,
    lastReviewed: data.review.last_reviewed,
  }));
  const user = await getAuthenticatedUser();
  const favouriteIds = await getFavouriteIds(user?.id ?? null);

  return (
    <>
      <JsonLd data={siteJsonLd(locale)} />
      <CatalogueBrowser
        locale={locale}
        items={items}
        tagLabels={tagLabels}
        title={text.title}
        summary={text.summary}
        eyebrow={text.eyebrow}
        initialQuery={query}
        tone="all"
        userId={user?.id ?? null}
        initialSavedIds={favouriteIds}
      />
    </>
  );
}
