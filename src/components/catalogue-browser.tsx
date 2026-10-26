"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRightIcon,
  BookmarkSimpleIcon,
  BookOpenIcon,
  BooksIcon,
  BuildingsIcon,
  ChartBarIcon,
  ChatTextIcon,
  FileTextIcon,
  GraduationCapIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  SparkleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { FavouriteButton } from "@/components/favourite-button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { Locale, ResourceFrontmatter } from "@/lib/content/schema";

export type CatalogueItem = {
  id: string;
  type: ResourceFrontmatter["type"];
  slug: string;
  title: string;
  summary: string;
  titleSearch: string;
  audiences: string[];
  tags: string[];
  tools: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  lastReviewed: string | null;
};

const audienceLabels = {
  ms: {
    all: "Semua",
    teachers_educators: "Guru & Pendidik",
    education_officers_jpn: "Pegawai Pendidikan & JPN",
    sme_entrepreneurs: "SME & Usahawan",
    professionals: "Profesional",
    students: "Pelajar",
  },
  en: {
    all: "All",
    teachers_educators: "Teachers & Educators",
    education_officers_jpn: "Education Officers & JPN",
    sme_entrepreneurs: "SMEs & Entrepreneurs",
    professionals: "Professionals",
    students: "Students",
  },
} as const;

const difficultyLabels = {
  ms: {
    all: "Semua tahap",
    beginner: "Mudah",
    intermediate: "Sederhana",
    advanced: "Lanjutan",
  },
  en: {
    all: "All levels",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  },
} as const;

const toolLabels: Record<string, string> = {
  gemini: "Gemini",
  chatgpt: "ChatGPT",
  claude: "Claude",
  copilot: "Copilot",
  canva: "Canva",
  midjourney: "Midjourney",
  veo: "Veo",
};

const libraryPaths = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
} as const;

export function CatalogueBrowser({
  locale,
  items,
  tagLabels,
  title,
  summary,
  eyebrow,
  initialQuery = "",
  tone,
  userId,
  initialSavedIds = [],
}: {
  locale: Locale;
  items: CatalogueItem[];
  tagLabels: Record<string, string>;
  title: string;
  summary: string;
  eyebrow: string;
  initialQuery?: string;
  tone: "all" | "skill" | "prompt" | "visual";
  userId: string | null;
  initialSavedIds?: string[];
}) {
  const [query, setQuery] = useState(initialQuery);
  const [audience, setAudience] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [sort, setSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [audienceHasMore, setAudienceHasMore] = useState(true);
  const audienceScrollRef = useRef<HTMLDivElement>(null);
  const labels =
    locale === "ms"
      ? {
          search: "Cari dalam perpustakaan...",
          searchLabel: "Cari kemahiran dan prompt",
          sort: "Terbaharu",
          titleSort: "A–Z",
          filter: "Tapis",
          all: tone === "all" ? "Semua sumber" : `Semua ${title.toLowerCase()}`,
          found: "sumber ditemui",
          empty: "Tiada sumber sepadan",
          emptyBody: "Cuba kata carian atau penapis yang berbeza.",
          audience: "Untuk siapa",
          level: "Tahap",
          reviewed: "Disemak",
          for: "Untuk",
          tools: "Alat",
          save: "Simpan ke kegemaran",
          remove: "Buang daripada kegemaran",
        }
      : {
          search: "Search the library...",
          searchLabel: "Search Skills and prompts",
          sort: "Newest",
          titleSort: "A–Z",
          filter: "Filters",
          all: tone === "all" ? "All resources" : `All ${title.toLowerCase()}`,
          found: "resources found",
          empty: "No matching resources",
          emptyBody: "Try a different search term or filter.",
          audience: "For whom",
          level: "Level",
          reviewed: "Reviewed",
          for: "For",
          tools: "Tools",
          save: "Save to favourites",
          remove: "Remove from favourites",
        };

  const availableAudiences = useMemo(
    () => Array.from(new Set(items.flatMap((item) => item.audiences))),
    [items],
  );

  useEffect(() => {
    const scroller = audienceScrollRef.current;
    if (!scroller) return;

    const updateOverflowCue = () => {
      setAudienceHasMore(
        scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2,
      );
    };

    updateOverflowCue();
    const animationFrame = requestAnimationFrame(updateOverflowCue);
    scroller.addEventListener("scroll", updateOverflowCue, { passive: true });
    window.addEventListener("resize", updateOverflowCue);
    const resizeObserver = new ResizeObserver(updateOverflowCue);
    resizeObserver.observe(scroller);
    void document.fonts.ready.then(updateOverflowCue);

    return () => {
      cancelAnimationFrame(animationFrame);
      scroller.removeEventListener("scroll", updateOverflowCue);
      window.removeEventListener("resize", updateOverflowCue);
      resizeObserver.disconnect();
    };
  }, [availableAudiences.length]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return items
      .filter((item) =>
        normalizedQuery ? item.titleSearch.includes(normalizedQuery) : true,
      )
      .filter((item) =>
        audience === "all" ? true : item.audiences.includes(audience),
      )
      .filter((item) =>
        difficulty === "all" ? true : item.difficulty === difficulty,
      )
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title, locale);
        const reviewed = (b.lastReviewed ?? "").localeCompare(
          a.lastReviewed ?? "",
        );
        return reviewed || a.title.localeCompare(b.title, locale);
      });
  }, [audience, difficulty, items, locale, query, sort]);

  const TypeIcon =
    tone === "all"
      ? BooksIcon
      : tone === "skill"
        ? BookOpenIcon
        : tone === "prompt"
          ? ChatTextIcon
          : ImageIcon;

  return (
    <main id="main-content" className="catalogue-page">
      <section className="catalogue-intro" aria-labelledby="catalogue-title">
        <div>
          <p className="catalogue-eyebrow">
            <span aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 id="catalogue-title">{title}</h1>
          <p className="catalogue-summary">{summary}</p>
        </div>
        <div
          className={`catalogue-count catalogue-count-${tone}`}
          aria-label={`${items.length} ${labels.found}`}
        >
          <strong>{items.length}</strong>
          <span>{labels.found}</span>
          <TypeIcon aria-hidden="true" weight="regular" />
        </div>
      </section>

      <section className="catalogue-controls" aria-label={labels.searchLabel}>
        <div className="catalogue-search">
          <MagnifyingGlassIcon aria-hidden="true" weight="regular" />
          <label htmlFor="catalogue-search" className="sr-only">
            {labels.searchLabel}
          </label>
          <Input
            id="catalogue-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            autoComplete="off"
          />
          <Button
            type="button"
            onClick={() =>
              document.getElementById("catalogue-results")?.focus()
            }
          >
            {locale === "ms" ? "Cari" : "Search"}
            <ArrowRightIcon aria-hidden="true" weight="bold" />
          </Button>
        </div>

        <div className="catalogue-toolbar">
          <div
            className={`audience-scroll${audienceHasMore ? " has-more" : ""}`}
          >
            <div
              ref={audienceScrollRef}
              className="audience-chips"
              aria-label={labels.audience}
            >
              {["all", ...availableAudiences].map((id) => (
                <button
                  key={id}
                  type="button"
                  className={audience === id ? "is-active" : ""}
                  aria-pressed={audience === id}
                  onClick={() => setAudience(id)}
                >
                  {audienceIcon(id)}
                  {audienceLabels[locale][
                    id as keyof (typeof audienceLabels)[typeof locale]
                  ] ?? id}
                </button>
              ))}
            </div>
          </div>
          <div className="catalogue-actions">
            <Select
              className="catalogue-sort"
              value={sort}
              onValueChange={setSort}
              label={locale === "ms" ? "Susunan" : "Sort order"}
              leadingIcon={<ChartBarIcon aria-hidden="true" weight="regular" />}
              options={[
                { value: "newest", label: labels.sort },
                { value: "title", label: labels.titleSort },
              ]}
            />
            <Button
              type="button"
              variant="secondary"
              aria-expanded={showFilters}
              aria-controls="catalogue-extra-filters"
              onClick={() => setShowFilters((current) => !current)}
            >
              <SlidersHorizontalIcon aria-hidden="true" weight="regular" />
              {labels.filter}
            </Button>
          </div>
        </div>

        {showFilters ? (
          <div id="catalogue-extra-filters" className="extra-filters">
            <span>{labels.level}</span>
            {(["all", "beginner", "intermediate", "advanced"] as const).map(
              (level) => (
                <button
                  key={level}
                  type="button"
                  className={difficulty === level ? "is-active" : ""}
                  aria-pressed={difficulty === level}
                  onClick={() => setDifficulty(level)}
                >
                  {difficultyLabels[locale][level]}
                </button>
              ),
            )}
          </div>
        ) : null}
      </section>

      <section
        className="catalogue-results"
        aria-labelledby="catalogue-results"
      >
        <h2 id="catalogue-results" tabIndex={-1} className="sr-only">
          {labels.all}
        </h2>
        <p className="sr-only" aria-live="polite">
          {filtered.length} {labels.found}
        </p>

        {filtered.length ? (
          <ol className="resource-list">
            {filtered.map((item, index) => {
              const isSaved = initialSavedIds.includes(item.id);
              return (
                <li
                  key={item.id}
                  className={`resource-row resource-row-${item.type}`}
                >
                  <span className="resource-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="resource-icon" aria-hidden="true">
                    {resourceIcon(item)}
                  </span>
                  <div className="resource-main">
                    <p className="resource-type">
                      {resourceType(locale, item.type)}
                    </p>
                    <Link
                      href={`/${locale}/${libraryPaths[item.type]}/${item.slug}`}
                    >
                      <h3>{item.title}</h3>
                    </Link>
                    <p className="resource-summary">{item.summary}</p>
                    <div
                      className="resource-tags"
                      aria-label={locale === "ms" ? "Tag" : "Tags"}
                    >
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tagLabels[tag]}</span>
                      ))}
                    </div>
                  </div>
                  <dl className="resource-meta">
                    <div>
                      <dt>{labels.for}</dt>
                      <dd>
                        {audienceLabels[locale][
                          item
                            .audiences[0] as keyof (typeof audienceLabels)[typeof locale]
                        ] ?? humanise(item.audiences[0])}
                      </dd>
                    </div>
                    <div>
                      <dt>{labels.tools}</dt>
                      <dd>
                        {item.tools
                          .slice(0, 2)
                          .map((tool) => toolLabels[tool] ?? humanise(tool))
                          .join(", ")}
                      </dd>
                    </div>
                    <div>
                      <dt>{labels.level}</dt>
                      <dd
                        className={`difficulty difficulty-${item.difficulty}`}
                      >
                        <span aria-hidden="true" />
                        {difficultyLabels[locale][item.difficulty]}
                      </dd>
                    </div>
                    <div>
                      <dt>{labels.reviewed}</dt>
                      <dd>{formatDate(item.lastReviewed, locale)}</dd>
                    </div>
                  </dl>
                  <FavouriteButton
                    locale={locale}
                    resourceId={item.id}
                    resourceTitle={item.title}
                    userId={userId}
                    initialSaved={isSaved}
                  />
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="empty-state">
            <MagnifyingGlassIcon aria-hidden="true" weight="regular" />
            <h3>{labels.empty}</h3>
            <p>{labels.emptyBody}</p>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setQuery("");
                setAudience("all");
                setDifficulty("all");
              }}
            >
              {locale === "ms" ? "Kosongkan penapis" : "Clear filters"}
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

function resourceIcon(item: CatalogueItem) {
  if (item.type === "llm_prompt") return <ChatTextIcon weight="regular" />;
  if (item.type === "visual_prompt") return <ImageIcon weight="regular" />;
  if (item.tags.includes("dskp") || item.tags.includes("rph"))
    return <BookOpenIcon weight="regular" />;
  if (
    item.tags.some((tag) => tag.includes("report") || tag.includes("laporan"))
  )
    return <ChartBarIcon weight="regular" />;
  if (item.audiences.includes("teachers_educators"))
    return <GraduationCapIcon weight="regular" />;
  return <FileTextIcon weight="regular" />;
}

function audienceIcon(id: string) {
  if (id === "teachers_educators")
    return <GraduationCapIcon aria-hidden="true" weight="regular" />;
  if (id === "education_officers_jpn")
    return <BuildingsIcon aria-hidden="true" weight="regular" />;
  if (id === "sme_entrepreneurs" || id === "professionals")
    return <UsersThreeIcon aria-hidden="true" weight="regular" />;
  if (id === "students")
    return <BookmarkSimpleIcon aria-hidden="true" weight="regular" />;
  return <SparkleIcon aria-hidden="true" weight="regular" />;
}

function resourceType(locale: Locale, type: CatalogueItem["type"]) {
  if (locale === "ms")
    return type === "skill"
      ? "Kemahiran AI"
      : type === "llm_prompt"
        ? "Prompt LLM"
        : "Prompt Visual";
  return type === "skill"
    ? "AI Skill"
    : type === "llm_prompt"
      ? "LLM Prompt"
      : "Visual Prompt";
}

function formatDate(value: string | null, locale: Locale) {
  if (!value) return "—";
  return new Intl.DateTimeFormat(locale === "ms" ? "ms-MY" : "en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function humanise(value: string) {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
