import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

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
      summary={
        locale === "ms"
          ? "Terokai gaya, komposisi dan kegunaan melalui pratonton sebelum menyalin prompt yang boleh disesuaikan."
          : "Explore styles, compositions and applications through previews before copying an adaptable prompt."
      }
      resources={getVisibleResources().filter(
        (item) => item.data.type === "visual_prompt",
      )}
      query={query}
      tone="visual"
    />
  );
}
