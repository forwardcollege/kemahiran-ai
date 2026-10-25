import Image from "next/image";
import Link from "next/link";
import { CaretRightIcon } from "@phosphor-icons/react/ssr";
import { SkillActions } from "@/components/skill-actions";
import type { Resource } from "@/lib/content/repository";
import {
  extractFencedCodeBlockAfterHeading,
  renderSafeMarkdown,
} from "@/lib/content/markdown";
import type { Locale } from "@/lib/content/schema";

const paths = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
} as const;

const libraryLabels = {
  skill: { ms: "Kemahiran AI", en: "AI Skills" },
  llm_prompt: { ms: "Prompt LLM", en: "LLM Prompts" },
  visual_prompt: { ms: "Imej & Video", en: "Image & Video" },
} as const;

export async function ResourceDetail({
  resource,
  locale,
}: {
  resource: Resource;
  locale: Locale;
}) {
  const { data } = resource;
  const counterpart: Locale = locale === "ms" ? "en" : "ms";
  const html = await renderSafeMarkdown(resource.body[locale]);
  const copyableInstruction =
    data.type === "skill"
      ? extractFencedCodeBlockAfterHeading(
          resource.body[locale],
          locale === "ms" ? "Arahan untuk disalin" : "Copyable instruction",
        )
      : null;
  const licenseLabel =
    data.license.id === "pending"
      ? locale === "ms"
        ? "Lesen belum disahkan"
        : "Licence not confirmed"
      : data.license.label;

  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8"
    >
      <nav
        aria-label={locale === "ms" ? "Jejak navigasi" : "Breadcrumb"}
        className="mb-8 flex items-center justify-between gap-4 text-sm"
      >
        <ol className="flex min-w-0 flex-1 items-center gap-1.5 text-muted-foreground">
          <li className="shrink-0">
            <Link
              href={`/${locale}`}
              className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:text-primary"
            >
              {locale === "ms" ? "Semua Sumber" : "All Resources"}
            </Link>
          </li>
          <li className="flex shrink-0 items-center gap-1.5">
            <CaretRightIcon aria-hidden="true" size={14} weight="bold" />
            <Link
              href={`/${locale}/${paths[data.type]}`}
              className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:text-primary"
            >
              {libraryLabels[data.type][locale]}
            </Link>
          </li>
          <li className="hidden min-w-0 items-center gap-1.5 sm:flex">
            <CaretRightIcon aria-hidden="true" size={14} weight="bold" />
            <span aria-current="page" className="truncate">
              {data.title[locale]}
            </span>
          </li>
        </ol>
        <Link
          href={`/${counterpart}/${paths[data.type]}/${data.slug[counterpart]}`}
          hrefLang={counterpart === "ms" ? "ms-MY" : "en-MY"}
          className="rounded-lg border px-3 py-2 font-medium hover:bg-secondary"
        >
          {counterpart === "ms" ? "Bahasa Melayu" : "English"}
        </Link>
      </nav>

      <header className="mb-10 space-y-5">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {data.title[locale]}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          {data.summary[locale]}
        </p>
      </header>

      {data.type === "skill" ? (
        <SkillActions
          locale={locale}
          instruction={copyableInstruction}
          copyAvailable={data.skill.instruction_copy_available}
          packagePath={data.skill.package.path}
          packageAvailable={data.skill.package.available}
          packageFiles={data.skill.package.included_files}
          estimatedMinutes={data.skill.estimated_minutes}
          prerequisites={data.skill.prerequisites[locale]}
        />
      ) : null}

      {data.type === "visual_prompt" ? (
        <figure className="relative isolate mb-10 aspect-video overflow-hidden rounded-2xl border bg-secondary">
          <Image
            src={data.visual_prompt.preview.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="pointer-events-none scale-110 object-cover opacity-60 blur-2xl saturate-75"
            aria-hidden="true"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-background/20"
          />
          <Image
            src={data.visual_prompt.preview.src}
            alt={data.visual_prompt.preview.alt[locale]}
            width={data.visual_prompt.preview.width}
            height={data.visual_prompt.preview.height}
            sizes="(max-width: 1024px) 100vw, 896px"
            className="relative z-10 h-full w-full object-contain"
            preload
          />
        </figure>
      ) : null}

      {data.type === "skill" ? (
        <section aria-labelledby="skill-guide-title">
          <h2
            id="skill-guide-title"
            className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {locale === "ms" ? "Panduan lengkap" : "Complete guide"}
          </h2>
          <article
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      ) : (
        <article
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      <aside
        className="mt-12 rounded-2xl border bg-secondary/60 p-6"
        aria-label={locale === "ms" ? "Metadata sumber" : "Resource metadata"}
      >
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">
              {locale === "ms" ? "Penyemak" : "Reviewer"}
            </dt>
            <dd>{data.review.editorial_reviewer}</dd>
          </div>
          <div>
            <dt className="font-semibold">
              {locale === "ms" ? "Tarikh semakan" : "Review date"}
            </dt>
            <dd>{data.review.last_reviewed}</dd>
          </div>
          <div>
            <dt className="font-semibold">
              {locale === "ms" ? "Versi" : "Version"}
            </dt>
            <dd>{data.version}</dd>
          </div>
          <div>
            <dt className="font-semibold">
              {locale === "ms" ? "Lesen" : "Licence"}
            </dt>
            <dd>
              {data.license.url ? (
                <a
                  href={data.license.url}
                  className="underline decoration-border underline-offset-4 hover:text-primary"
                  rel="license"
                >
                  {licenseLabel}
                </a>
              ) : (
                licenseLabel
              )}
            </dd>
          </div>
          <div>
            <dt className="font-semibold">
              {locale === "ms" ? "Asal-usul" : "Provenance"}
            </dt>
            <dd>{data.provenance.notes[locale]}</dd>
          </div>
        </dl>
      </aside>
    </main>
  );
}
