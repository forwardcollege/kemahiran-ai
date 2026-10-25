import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/resource-card";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const resources = getVisibleResources();
  const other = locale === "ms" ? "en" : "ms";

  return (
    <main id="main-content">
      <section className="border-b bg-[radial-gradient(circle_at_top_left,var(--secondary),transparent_55%)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8 flex justify-between gap-4">
            <p className="font-semibold tracking-tight">Kemahiran.AI</p>
            <Link
              href={`/${other}`}
              className="rounded-lg border bg-card px-3 py-2 text-sm font-semibold hover:bg-secondary"
            >
              {other === "ms" ? "Bahasa Melayu" : "English"}
            </Link>
          </div>
          <BadgeLine locale={locale} />
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {locale === "ms"
              ? "Sumber AI praktikal, dibina untuk cara Malaysia bekerja dan belajar."
              : "Practical AI resources, built for how Malaysia works and learns."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {locale === "ms"
              ? "Terokai kemahiran, prompt bahasa dan koleksi visual dwibahasa yang disusun oleh manusia."
              : "Explore human-curated bilingual Skills, language prompts and visual collections."}
          </p>
        </div>
      </section>
      <section
        className="mx-auto max-w-6xl px-5 py-12 sm:px-8"
        aria-labelledby="catalogue-heading"
      >
        <h2 id="catalogue-heading" className="text-2xl font-semibold">
          {locale === "ms" ? "Pratonton katalog" : "Catalogue preview"}
        </h2>
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
          <p className="mt-5 rounded-xl border bg-card p-6 text-muted-foreground">
            {locale === "ms"
              ? "Belum ada sumber yang diterbitkan secara umum."
              : "No resources have been publicly published yet."}
          </p>
        )}
      </section>
    </main>
  );
}

function BadgeLine({ locale }: { locale: "ms" | "en" }) {
  return (
    <p className="inline-flex rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
      {locale === "ms"
        ? "Oleh Forward Labs · Dikuasakan oleh Forward College"
        : "By Forward Labs · Powered by Forward College"}
    </p>
  );
}
