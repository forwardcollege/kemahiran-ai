import type { MetadataRoute } from "next";
import { getPublishedResources } from "@/lib/content/repository";
import {
  absoluteUrl,
  isSearchIndexingEnabled,
  localizedPaths,
  resourcePaths,
} from "@/lib/seo";

const indexRoutes = ["", "/skills", "/llm-prompts", "/visual-prompts"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSearchIndexingEnabled()) return [];

  const indexEntries = indexRoutes.flatMap((route) => {
    const ms = `/ms${route}`;
    const en = `/en${route}`;
    const languages = Object.fromEntries(
      Object.entries(localizedPaths(ms, en)).map(([locale, pathname]) => [
        locale,
        absoluteUrl(pathname),
      ]),
    );

    return ([ms, en] as const).map((pathname) => ({
      url: absoluteUrl(pathname),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });

  const resourceEntries = getPublishedResources().flatMap((resource) => {
    const paths = resourcePaths(resource);
    const languages = Object.fromEntries(
      Object.entries(localizedPaths(paths.ms, paths.en)).map(
        ([locale, pathname]) => [locale, absoluteUrl(pathname)],
      ),
    );
    const images =
      resource.data.type === "visual_prompt"
        ? [absoluteUrl(resource.data.visual_prompt.preview.src)]
        : undefined;

    return ([paths.ms, paths.en] as const).map((pathname) => ({
      url: absoluteUrl(pathname),
      lastModified: resource.data.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
      ...(images ? { images } : {}),
    }));
  });

  return [...indexEntries, ...resourceEntries];
}
