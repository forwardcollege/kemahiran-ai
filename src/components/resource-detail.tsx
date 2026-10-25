import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Resource } from "@/lib/content/repository";
import { renderSafeMarkdown } from "@/lib/content/markdown";
import type { Locale } from "@/lib/content/schema";

const paths = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
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

  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8"
    >
      <nav
        aria-label={locale === "ms" ? "Jejak navigasi" : "Breadcrumb"}
        className="mb-8 flex items-center justify-between gap-4 text-sm"
      >
        <Link
          href={`/${locale}`}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {locale === "ms" ? "Kembali ke pustaka" : "Back to library"}
        </Link>
        <Link
          href={`/${counterpart}/${paths[data.type]}/${data.slug[counterpart]}`}
          hrefLang={counterpart === "ms" ? "ms-MY" : "en-MY"}
          className="rounded-lg border px-3 py-2 font-medium hover:bg-secondary"
        >
          {counterpart === "ms" ? "Bahasa Melayu" : "English"}
        </Link>
      </nav>

      <header className="mb-10 space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{data.type.replace("_", " ")}</Badge>
          <Badge variant="outline">v{data.version}</Badge>
          <Badge variant="secondary">{data.review.status}</Badge>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {data.title[locale]}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          {data.summary[locale]}
        </p>
      </header>

      {data.type === "visual_prompt" ? (
        <figure className="mb-10 overflow-hidden rounded-2xl border bg-secondary">
          <Image
            src={data.visual_prompt.preview.src}
            alt={data.visual_prompt.preview.alt[locale]}
            width={data.visual_prompt.preview.width}
            height={data.visual_prompt.preview.height}
            className="h-auto w-full"
            priority
          />
        </figure>
      ) : null}

      <article
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

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
              {locale === "ms" ? "Lesen" : "Licence"}
            </dt>
            <dd>{data.license.label}</dd>
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
