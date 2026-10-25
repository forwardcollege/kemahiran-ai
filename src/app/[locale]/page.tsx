import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Images,
  MessageSquareText,
  Search,
  Sparkles,
} from "lucide-react";
import { ResourceCard } from "@/components/resource-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema, type Locale } from "@/lib/content/schema";

const copy = {
  ms: {
    eyebrow: "Dibina untuk Malaysia",
    title: "Buat kerja lebih baik dengan AI—tanpa perlu jadi pakar teknologi.",
    summary:
      "Temui kemahiran, prompt dan idea visual yang praktikal, dwibahasa dan disusun untuk kerja sebenar.",
    searchLabel: "Cari seluruh pustaka",
    searchPlaceholder: "Cuba “minit mesyuarat” atau “rancangan pengajaran”",
    searchButton: "Cari sumber",
    trust:
      "Disusun oleh manusia · Bahasa Melayu didahulukan · Konteks Malaysia",
    chooseTitle: "Pilih cara anda mahu bermula",
    chooseSummary:
      "Tiga jenis sumber, setiap satu direka untuk tahap bantuan yang berbeza.",
    featuredTitle: "Pilihan untuk anda cuba dahulu",
    featuredSummary:
      "Sumber pilihan merentas pendidikan, sektor awam dan perniagaan.",
    viewAll: "Teroka semua sumber",
    audienceTitle: "Cari mengikut keperluan anda",
    audienceSummary:
      "Mulakan dengan konteks kerja anda, kemudian pilih hasil yang diperlukan.",
    difference: "Apa bezanya Kemahiran dengan Prompt?",
    differenceBody:
      "Kemahiran membimbing anda melalui aliran kerja berbilang langkah. Prompt lebih ringkas—salin, isi pemboleh ubah dan gunakan terus.",
  },
  en: {
    eyebrow: "Built for Malaysia",
    title: "Do better work with AI—without becoming a technology expert.",
    summary:
      "Discover practical bilingual Skills, prompts and visual ideas curated for real work.",
    searchLabel: "Search the entire library",
    searchPlaceholder: "Try “meeting minutes” or “lesson plan”",
    searchButton: "Find resources",
    trust: "Human-curated · Malay-first · Malaysian context",
    chooseTitle: "Choose how you want to begin",
    chooseSummary:
      "Three resource types, each designed for a different level of guidance.",
    featuredTitle: "A useful place to start",
    featuredSummary:
      "Selected resources across education, public service and business.",
    viewAll: "Explore all resources",
    audienceTitle: "Find resources for your work",
    audienceSummary:
      "Start with your context, then choose the outcome you need.",
    difference: "What is the difference between a Skill and a Prompt?",
    differenceBody:
      "A Skill guides you through a multi-step workflow. A Prompt is narrower—copy it, replace the variables and use it immediately.",
  },
} as const;

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const text = copy[locale];
  const resources = getVisibleResources();
  const featured = resources.filter((item) => item.data.featured).slice(0, 6);

  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] bg-secondary lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[12%] top-16 hidden size-28 rotate-6 border-[14px] border-accent/80 lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-14 right-[27%] hidden h-3 w-32 bg-visual lg:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black tracking-[0.14em] text-primary uppercase">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {text.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.04] font-black tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.6rem]">
              {text.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {text.summary}
            </p>

            <form
              action={`/${locale}/explore`}
              className="mt-9 max-w-3xl"
              role="search"
            >
              <label htmlFor="home-search" className="sr-only">
                {text.searchLabel}
              </label>
              <div className="flex flex-col gap-3 border border-foreground/15 bg-card p-2 shadow-[0_20px_50px_rgba(20,44,55,0.11)] sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="home-search"
                    name="q"
                    className="h-13 border-0 pl-12 shadow-none focus-visible:ring-0"
                    placeholder={text.searchPlaceholder}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-lg sm:min-w-40"
                >
                  {text.searchButton}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </form>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              {text.trust}
            </p>
          </div>

          <div className="relative hidden min-h-96 lg:block" aria-hidden="true">
            <div className="absolute right-8 top-10 w-72 rotate-2 border border-foreground/15 bg-card p-6 shadow-[0_22px_55px_rgba(20,44,55,0.14)]">
              <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </span>
              <p className="mt-8 text-xs font-black tracking-[0.15em] text-primary uppercase">
                AI Skill
              </p>
              <p className="mt-2 text-xl font-black">
                Penjana Rancangan Pengajaran Harian
              </p>
              <div className="mt-6 space-y-2">
                <span className="block h-2 w-full bg-secondary" />
                <span className="block h-2 w-5/6 bg-secondary" />
                <span className="block h-2 w-2/3 bg-secondary" />
              </div>
            </div>
            <div className="absolute bottom-12 left-2 w-64 -rotate-3 border border-foreground/15 bg-foreground p-5 text-background shadow-[0_22px_55px_rgba(20,44,55,0.18)]">
              <p className="text-xs font-black tracking-[0.15em] text-accent uppercase">
                Prompt LLM
              </p>
              <p className="mt-2 text-lg font-black">
                Minit mesyuarat yang jelas dan formal
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-background/65">
                <span className="size-2 bg-accent" />
                Siap untuk disalin
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="libraries-heading"
      >
        <SectionIntro
          id="libraries-heading"
          title={text.chooseTitle}
          summary={text.chooseSummary}
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          <LibraryCard
            href={`/${locale}/skills`}
            icon={<Sparkles className="size-6" />}
            count={
              resources.filter((item) => item.data.type === "skill").length
            }
            title={locale === "ms" ? "Kemahiran AI" : "AI Skills"}
            description={
              locale === "ms"
                ? "Aliran kerja lengkap, langkah demi langkah, dengan input dan semakan kualiti yang jelas."
                : "Complete step-by-step workflows with clear inputs and quality checks."
            }
            action={locale === "ms" ? "Lihat kemahiran" : "View Skills"}
            tone="skill"
          />
          <LibraryCard
            href={`/${locale}/llm-prompts`}
            icon={<MessageSquareText className="size-6" />}
            count={
              resources.filter((item) => item.data.type === "llm_prompt").length
            }
            title={locale === "ms" ? "Prompt LLM" : "LLM Prompts"}
            description={
              locale === "ms"
                ? "Prompt fokus yang boleh disalin, disesuaikan dan digunakan dalam Gemini atau model pilihan anda."
                : "Focused prompts to copy, customise and use in Gemini or your preferred model."
            }
            action={locale === "ms" ? "Lihat prompt" : "View prompts"}
            tone="prompt"
          />
          <LibraryCard
            href={`/${locale}/visual-prompts`}
            icon={<Images className="size-6" />}
            count={
              resources.filter((item) => item.data.type === "visual_prompt")
                .length
            }
            title={
              locale === "ms" ? "Prompt Imej & Video" : "Image & Video Prompts"
            }
            description={
              locale === "ms"
                ? "Koleksi visual dengan contoh hasil, gaya, format dan pemboleh ubah yang boleh diedit."
                : "Visual collections with example outputs, styles, formats and editable variables."
            }
            action={locale === "ms" ? "Lihat koleksi" : "View collections"}
            tone="visual"
          />
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
          <SectionIntro
            id="audience-heading"
            title={text.audienceTitle}
            summary={text.audienceSummary}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <AudienceLink
              locale={locale}
              id="teachers_educators"
              icon={<GraduationCap />}
              label={
                locale === "ms" ? "Guru & Pendidik" : "Teachers & Educators"
              }
            />
            <AudienceLink
              locale={locale}
              id="education_officers_jpn"
              icon={<BookOpenCheck />}
              label={
                locale === "ms"
                  ? "Pegawai Pendidikan & JPN"
                  : "Education Officers & JPN"
              }
            />
            <AudienceLink
              locale={locale}
              id="public_sector"
              icon={<Building2 />}
              label={locale === "ms" ? "Sektor Awam" : "Public Sector"}
            />
            <AudienceLink
              locale={locale}
              id="sme_entrepreneurs"
              icon={<BriefcaseBusiness />}
              label={
                locale === "ms"
                  ? "SME, Usahawan & Profesional"
                  : "SMEs, Entrepreneurs & Professionals"
              }
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="featured-heading"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionIntro
            id="featured-heading"
            title={text.featuredTitle}
            summary={text.featuredSummary}
          />
          <Button asChild variant="secondary">
            <Link href={`/${locale}/explore`}>
              {text.viewAll}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>
        {featured.length ? (
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((resource) => (
              <ResourceCard
                key={resource.data.id}
                resource={resource}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 border border-border bg-card p-6 text-muted-foreground">
            {locale === "ms"
              ? "Sumber pilihan akan dipaparkan selepas penerbitan."
              : "Featured resources will appear after publication."}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="grid overflow-hidden border border-foreground/15 bg-foreground text-background lg:grid-cols-[1fr_1.3fr]">
          <div className="bg-accent p-8 text-accent-foreground sm:p-10">
            <p className="text-sm font-black tracking-[0.14em] uppercase">
              Skill ≠ Prompt
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              {text.difference}
            </h2>
          </div>
          <div className="p-8 sm:p-10">
            <p className="max-w-2xl text-lg leading-8 text-background/78">
              {text.differenceBody}
            </p>
            <Link
              href={`/${locale}/about`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-accent hover:underline"
            >
              {locale === "ms"
                ? "Fahami jenis sumber"
                : "Understand the resource types"}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  id,
  title,
  summary,
}: {
  id: string;
  title: string;
  summary: string;
}) {
  return (
    <div>
      <h2
        id={id}
        className="text-3xl font-black tracking-[-0.03em] text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
        {summary}
      </p>
    </div>
  );
}

function LibraryCard({
  href,
  icon,
  count,
  title,
  description,
  action,
  tone,
}: {
  href: string;
  icon: React.ReactNode;
  count: number;
  title: string;
  description: string;
  action: string;
  tone: "skill" | "prompt" | "visual";
}) {
  const toneClass = {
    skill: "border-primary/35 bg-secondary",
    prompt: "border-prompt/50 bg-prompt-soft",
    visual: "border-visual/40 bg-visual-soft",
  }[tone];
  return (
    <Link
      href={href}
      className={`group border p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,44,55,0.11)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35 ${toneClass}`}
    >
      <div className="flex items-start justify-between gap-5">
        <span
          className="grid size-12 place-items-center bg-card text-foreground shadow-sm"
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="text-sm font-black">{count || "—"}</span>
      </div>
      <h3 className="mt-10 text-2xl font-black tracking-tight">{title}</h3>
      <p className="mt-3 min-h-21 leading-7 text-muted-foreground">
        {description}
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-black">
        {action}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

function AudienceLink({
  locale,
  id,
  icon,
  label,
}: {
  locale: Locale;
  id: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={`/${locale}/explore?audience=${id}`}
      className="group flex items-center gap-4 border border-foreground/12 bg-background p-4 transition hover:border-primary/45 hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
    >
      <span
        className="grid size-10 shrink-0 place-items-center text-primary [&_svg]:size-5"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="font-bold">{label}</span>
      <ArrowRight
        aria-hidden="true"
        className="ml-auto size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
      />
    </Link>
  );
}
