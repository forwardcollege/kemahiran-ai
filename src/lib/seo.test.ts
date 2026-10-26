import { afterEach, describe, expect, it } from "vitest";
import {
  buildLocalizedMetadata,
  isSearchIndexingEnabled,
  localizedPaths,
} from "./seo";

const originalIndexable = process.env.SITE_INDEXABLE;
const originalVercelEnvironment = process.env.VERCEL_ENV;

afterEach(() => {
  if (originalIndexable === undefined) delete process.env.SITE_INDEXABLE;
  else process.env.SITE_INDEXABLE = originalIndexable;
  if (originalVercelEnvironment === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = originalVercelEnvironment;
});

describe("SEO metadata", () => {
  it("builds branded canonical and reciprocal bilingual metadata", () => {
    const metadata = buildLocalizedMetadata({
      locale: "ms",
      title: "Kemahiran AI",
      description: "Aliran kerja AI praktikal.",
      msPath: "/ms/skills",
      enPath: "/en/skills",
    });

    expect(metadata.title).toEqual({
      absolute: "Kemahiran AI | Kemahiran.AI",
    });
    expect(metadata.alternates).toEqual({
      canonical: "/ms/skills",
      languages: localizedPaths("/ms/skills", "/en/skills"),
    });
    expect(metadata.openGraph).toMatchObject({
      url: "/ms/skills",
      locale: "ms_MY",
      alternateLocale: "en_MY",
    });
  });

  it("requires an explicit flag and a production Vercel environment", () => {
    process.env.SITE_INDEXABLE = "true";
    process.env.VERCEL_ENV = "preview";
    expect(isSearchIndexingEnabled()).toBe(false);

    process.env.VERCEL_ENV = "production";
    expect(isSearchIndexingEnabled()).toBe(true);
  });
});
