import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { buildLocalizedMetadata } from "@/lib/seo";

const descriptions = {
  ms: "Prompt AI praktikal dengan pemboleh ubah yang jelas untuk Gemini, ChatGPT, Claude dan model bahasa lain.",
  en: "Practical AI prompts with clear variables for Gemini, ChatGPT, Claude and other language models.",
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
    title: locale === "ms" ? "Prompt LLM" : "LLM Prompts",
    description: descriptions[locale],
    msPath: "/ms/llm-prompts",
    enPath: "/en/llm-prompts",
  });
}

export default async function LlmPromptIndex({
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
        locale === "ms" ? "Salin, sesuaikan, gunakan" : "Copy, customise, use"
      }
      title={locale === "ms" ? "Prompt LLM" : "LLM Prompts"}
      summary={descriptions[locale]}
      resources={getVisibleResources().filter(
        (item) => item.data.type === "llm_prompt",
      )}
      query={query}
      tone="prompt"
    />
  );
}
