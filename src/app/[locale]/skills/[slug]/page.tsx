import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ResourceDetail } from "@/components/resource-detail";
import { getResourceBySlug } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { buildResourceMetadata, resourceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await params;
  const locale = localeSchema.safeParse(route.locale);
  if (!locale.success) return {};
  const resource = getResourceBySlug(locale.data, route.slug, "skill");
  return resource ? buildResourceMetadata(resource, locale.data) : {};
}

export default async function SkillPage({ params }: Props) {
  const route = await params;
  const locale = localeSchema.safeParse(route.locale);
  if (!locale.success) notFound();
  const resource = getResourceBySlug(locale.data, route.slug, "skill");
  if (!resource) notFound();
  return (
    <>
      <JsonLd data={resourceJsonLd(resource, locale.data)} />
      <ResourceDetail resource={resource} locale={locale.data} />
    </>
  );
}
