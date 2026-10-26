import {
  CatalogueBrowser,
  type CatalogueItem,
} from "@/components/catalogue-browser";
import { getTaxonomyLabels, type Resource } from "@/lib/content/repository";
import type { Locale } from "@/lib/content/schema";
import { getAuthenticatedUser, getFavouriteIds } from "@/lib/supabase/server";

export async function LibraryLanding({
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
  tone: "all" | "skill" | "prompt" | "visual";
}) {
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
    <CatalogueBrowser
      locale={locale}
      items={items}
      tagLabels={tagLabels}
      title={title}
      summary={summary}
      eyebrow={eyebrow}
      initialQuery={query}
      tone={tone}
      userId={user?.id ?? null}
      initialSavedIds={favouriteIds}
    />
  );
}
