import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

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
      summary={
        locale === "ms"
          ? "Prompt praktikal dengan pemboleh ubah yang jelas untuk Gemini, ChatGPT, Claude dan model bahasa lain."
          : "Practical prompts with clear variables for Gemini, ChatGPT, Claude and other language models."
      }
      resources={getVisibleResources().filter(
        (item) => item.data.type === "llm_prompt",
      )}
      query={query}
      tone="prompt"
    />
  );
}
