import { notFound } from "next/navigation";
import { ResourceDetail } from "@/components/resource-detail";
import { getResourceBySlug } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";

export default async function VisualPromptPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const route = await params;
  const locale = localeSchema.safeParse(route.locale);
  if (!locale.success) notFound();
  const resource = getResourceBySlug(locale.data, route.slug, "visual_prompt");
  if (!resource) notFound();
  return <ResourceDetail resource={resource} locale={locale.data} />;
}
