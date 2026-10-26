import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { buildLocalizedMetadata } from "@/lib/seo";

const descriptions = {
  ms: "Terokai prompt imej dan video dengan pratonton, gaya, komposisi dan pemboleh ubah yang boleh disesuaikan.",
  en: "Explore image and video prompts with previews, styles, compositions and adaptable variables.",
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
    title: locale === "ms" ? "Prompt Imej & Video" : "Image & Video Prompts",
    description: descriptions[locale],
    msPath: "/ms/visual-prompts",
    enPath: "/en/visual-prompts",
  });
}

export default async function VisualPromptIndex({
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
      eyebrow={
        locale === "ms"
          ? "Temui melalui contoh visual"
          : "Discover through visual examples"
      }
      title={locale === "ms" ? "Prompt Imej & Video" : "Image & Video Prompts"}
      summary={descriptions[locale]}
      resources={getVisibleResources().filter(
        (item) => item.data.type === "visual_prompt",
      )}
      query={query}
      tone="visual"
    />
  );
}
