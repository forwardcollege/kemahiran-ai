import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { buildLocalizedMetadata } from "@/lib/seo";

const descriptions = {
  ms: "Ikuti langkah yang jelas untuk tugasan AI yang kompleks, daripada menyediakan RPH hingga menghasilkan laporan pengurusan.",
  en: "Follow clear AI workflows for complex tasks, from preparing lesson plans to producing management reports.",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) return {};
  const locale = parsed.data;
  return buildLocalizedMetadata({
    locale,
    title: locale === "ms" ? "Kemahiran AI" : "AI Skills",
    description: descriptions[locale],
    msPath: "/ms/skills",
    enPath: "/en/skills",
  });
}

export default async function SkillsIndex({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const query = ((await searchParams).q ?? "").trim();
  return (
    <LibraryLanding
      locale={locale}
      eyebrow={locale === "ms" ? "Aliran kerja berpandu" : "Guided workflows"}
      title={locale === "ms" ? "Kemahiran AI" : "AI Skills"}
      summary={descriptions[locale]}
      resources={getVisibleResources().filter(
        (item) => item.data.type === "skill",
      )}
      query={query}
      tone="skill"
    />
  );
}
