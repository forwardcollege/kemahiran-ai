import Link from "next/link";
import { notFound } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ResourceCard } from "@/components/resource-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getVisibleResources, type Resource } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

const audienceLabels = {
  teachers_educators: { ms: "Guru dan Pendidik", en: "Teachers and Educators" },
  education_officers_jpn: {
    ms: "Pegawai Pendidikan dan JPN",
    en: "Education Officers and JPN",
  },
  public_sector: { ms: "Sektor Awam", en: "Public Sector" },
  sme_entrepreneurs: { ms: "SME dan Usahawan", en: "SMEs and Entrepreneurs" },
  professionals: { ms: "Profesional", en: "Professionals" },
  students: { ms: "Pelajar", en: "Students" },
} as const;

const typeLabels = {
  skill: { ms: "Kemahiran AI", en: "AI Skills" },
  llm_prompt: { ms: "Prompt LLM", en: "LLM Prompts" },
  visual_prompt: { ms: "Prompt Imej & Video", en: "Image & Video Prompts" },
} as const;

export default async function ExplorePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    q?: string | string[];
    type?: string | string[];
    audience?: string | string[];
  }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const raw = await searchParams;
  const query = first(raw.q).trim();
  const type = first(raw.type);
  const audience = first(raw.audience);
  const resources = getVisibleResources().filter((resource) => {
    if (type && resource.data.type !== type) return false;
    if (audience && !resource.data.audiences.includes(audience)) return false;
    return !query || searchable(resource).includes(query.toLowerCase());
  });
  const hasFilters = Boolean(query || type || audience);

  return (
    <main id="main-content">
      <section className="border-b border-foreground/10 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-sm font-black tracking-[0.15em] text-primary uppercase">
            {locale === "ms"
              ? "Semua pustaka, satu carian"
              : "Every library, one search"}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            {locale === "ms" ? "Teroka sumber" : "Explore resources"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            {locale === "ms"
              ? "Cari dalam Bahasa Melayu atau Inggeris, kemudian tapis mengikut jenis sumber dan pengguna."
              : "Search in Malay or English, then filter by resource type and audience."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <form
          className="border border-foreground/12 bg-card p-4 shadow-sm sm:p-5"
          role="search"
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(18rem,1fr)_14rem_16rem_auto] lg:items-end">
            <div>
              <label
                htmlFor="explore-search"
                className="mb-2 block text-sm font-bold"
              >
                {locale === "ms"
                  ? "Apa yang anda mahu hasilkan?"
                  : "What do you want to produce?"}
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="explore-search"
                  name="q"
                  defaultValue={query}
                  className="pl-12"
                  placeholder={
                    locale === "ms"
                      ? "Contoh: minit mesyuarat"
                      : "Example: meeting minutes"
                  }
                />
              </div>
            </div>
            <FilterSelect
              id="type"
              name="type"
              label={locale === "ms" ? "Jenis sumber" : "Resource type"}
              defaultValue={type}
            >
              <option value="">
                {locale === "ms" ? "Semua jenis" : "All types"}
              </option>
              {Object.entries(typeLabels).map(([id, labels]) => (
                <option value={id} key={id}>
                  {labels[locale]}
                </option>
              ))}
            </FilterSelect>
            <FilterSelect
              id="audience"
              name="audience"
              label={locale === "ms" ? "Pengguna" : "Audience"}
              defaultValue={audience}
            >
              <option value="">
                {locale === "ms" ? "Semua pengguna" : "All audiences"}
              </option>
              {Object.entries(audienceLabels).map(([id, labels]) => (
                <option value={id} key={id}>
                  {labels[locale]}
                </option>
              ))}
            </FilterSelect>
            <Button type="submit" className="lg:min-w-28">
              <SlidersHorizontal aria-hidden="true" className="size-4" />
              {locale === "ms" ? "Tapis" : "Filter"}
            </Button>
          </div>
        </form>

        <div className="mt-9 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              {locale === "ms" ? "Hasil carian" : "Search results"}
            </h2>
            <p
              className="mt-1 text-sm text-muted-foreground"
              aria-live="polite"
            >
              {resources.length}{" "}
              {locale === "ms" ? "sumber ditemui" : "resources found"}
            </p>
          </div>
          {hasFilters ? (
            <Button asChild variant="ghost" size="sm">
              <Link href={`/${locale}/explore`}>
                <X aria-hidden="true" className="size-4" />
                {locale === "ms" ? "Kosongkan penapis" : "Clear filters"}
              </Link>
            </Button>
          ) : null}
        </div>

        {resources.length ? (
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.data.id}
                resource={resource}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="mt-7 border border-border bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-black">
              {locale === "ms"
                ? "Tiada sumber yang sepadan"
                : "No matching resources"}
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              {locale === "ms"
                ? "Cuba istilah lain, kurangkan penapis atau kosongkan carian untuk melihat semua sumber."
                : "Try another term, remove a filter or clear the search to see every resource."}
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link href={`/${locale}/explore`}>
                {locale === "ms" ? "Lihat semua sumber" : "View all resources"}
              </Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

function FilterSelect({
  id,
  name,
  label,
  defaultValue,
  children,
}: {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className="h-12 w-full rounded-xl border border-border bg-card px-3 text-sm font-semibold outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/25"
      >
        {children}
      </select>
    </div>
  );
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
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
