import { notFound } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

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
      summary={
        locale === "ms"
          ? "Ikuti langkah yang jelas untuk menyiapkan tugasan yang lebih kompleks—daripada menyediakan RPH hingga menghasilkan laporan pengurusan."
          : "Follow clear steps for more complex work—from preparing a lesson plan to producing a management report."
      }
      resources={getVisibleResources().filter(
        (item) => item.data.type === "skill",
      )}
      query={query}
      tone="skill"
    />
  );
}
