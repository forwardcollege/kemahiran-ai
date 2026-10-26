import type { Metadata } from "next";
import type { Resource } from "@/lib/content/repository";
import type { Locale } from "@/lib/content/schema";

export const siteName = "Kemahiran.AI";
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kemahiran.ai",
);

const localeCodes = {
  ms: "ms-MY",
  en: "en-MY",
} as const;

const openGraphLocales = {
  ms: "ms_MY",
  en: "en_MY",
} as const;

export const libraryPaths = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
} as const;

const brandImage = {
  url: "/media/brand/kemahiran-ai-social.png",
  width: 1200,
  height: 630,
  alt: "Kemahiran.AI magic-wand brand mark",
};

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function isSearchIndexingEnabled() {
  const isProductionDeployment =
    !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
  return process.env.SITE_INDEXABLE === "true" && isProductionDeployment;
}

export function localizedPaths(ms: string, en: string) {
  return {
    "ms-MY": ms,
    "en-MY": en,
    "x-default": ms,
  };
}

export function buildLocalizedMetadata({
  locale,
  title,
  description,
  msPath,
  enPath,
  image = brandImage,
}: {
  locale: Locale;
  title: string;
  description: string;
  msPath: string;
  enPath: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const canonical = locale === "ms" ? msPath : enPath;
  const alternateLocale = locale === "ms" ? "en_MY" : "ms_MY";
  const documentTitle = `${title} | ${siteName}`;

  return {
    title: { absolute: documentTitle },
    description,
    alternates: {
      canonical,
      languages: localizedPaths(msPath, enPath),
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: documentTitle,
      description,
      siteName,
      locale: openGraphLocales[locale],
      alternateLocale,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [image.url],
    },
  };
}

export function resourcePaths(resource: Resource) {
  const libraryPath = libraryPaths[resource.data.type];
  return {
    ms: `/ms/${libraryPath}/${resource.data.slug.ms}`,
    en: `/en/${libraryPath}/${resource.data.slug.en}`,
  };
}

export function buildResourceMetadata(resource: Resource, locale: Locale) {
  const paths = resourcePaths(resource);
  const data = resource.data;
  const visualImage =
    data.type === "visual_prompt"
      ? {
          url: data.visual_prompt.preview.src,
          width: data.visual_prompt.preview.width,
          height: data.visual_prompt.preview.height,
          alt: data.visual_prompt.preview.alt[locale],
        }
      : brandImage;
  const metadata = buildLocalizedMetadata({
    locale,
    title: data.title[locale],
    description: data.summary[locale],
    msPath: paths.ms,
    enPath: paths.en,
    image: visualImage,
  });

  return {
    ...metadata,
    authors: [{ name: data.author.name, url: data.author.url ?? undefined }],
    creator: data.author.name,
    publisher: "Forward College",
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: data.created_at,
      modifiedTime: data.updated_at,
      authors: [data.author.name],
    },
  } satisfies Metadata;
}

export function privatePageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const metadata = buildLocalizedMetadata({
    locale,
    title,
    description,
    msPath: `/ms${path}`,
    enPath: `/en${path}`,
  });

  return {
    ...metadata,
    robots: { index: false, follow: false, noarchive: true },
  };
}

export function siteJsonLd(locale: Locale) {
  const description =
    locale === "ms"
      ? "Pustaka sumber AI praktikal dwibahasa untuk Malaysia."
      : "A bilingual library of practical AI resources for Malaysia.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: siteName,
        alternateName: "Kemahiran AI",
        description,
        inLanguage: ["ms-MY", "en-MY"],
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: "Forward College",
        sameAs: "https://forward.edu.my",
        url: absoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/media/brand/kemahiran-ai-profile.png"),
          width: 1024,
          height: 1024,
        },
      },
    ],
  };
}

export function aboutPageJsonLd(locale: Locale) {
  const path = locale === "ms" ? "/ms/about" : "/en/about";
  const name =
    locale === "ms"
      ? "Mengapa kami membina Kemahiran.AI"
      : "Why we built Kemahiran.AI";
  const description =
    locale === "ms"
      ? "Kisah Kemahiran.AI, sebuah inisiatif Forward College untuk membantu rakyat Malaysia menggunakan AI dengan yakin, bertanggungjawab dan berkesan."
      : "The story of Kemahiran.AI, a Forward College initiative helping Malaysians use AI confidently, responsibly and effectively.";

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl(`${path}#about`),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: localeCodes[locale],
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
  };
}

export function resourceJsonLd(resource: Resource, locale: Locale) {
  const data = resource.data;
  const paths = resourcePaths(resource);
  const canonical = locale === "ms" ? paths.ms : paths.en;
  const libraryName = {
    skill: { ms: "Kemahiran AI", en: "AI Skills" },
    llm_prompt: { ms: "Prompt LLM", en: "LLM Prompts" },
    visual_prompt: {
      ms: "Prompt Imej & Video",
      en: "Image & Video Prompts",
    },
  }[data.type][locale];
  const learningResourceType = {
    skill: "AI Skill",
    llm_prompt: "LLM Prompt",
    visual_prompt:
      data.type === "visual_prompt" && data.visual_prompt.media_type === "video"
        ? "Video Prompt"
        : "Image Prompt",
  }[data.type];

  const creativeWork = {
    "@type": "LearningResource",
    "@id": absoluteUrl(`${canonical}#resource`),
    url: absoluteUrl(canonical),
    name: data.title[locale],
    description: data.summary[locale],
    inLanguage: localeCodes[locale],
    learningResourceType,
    isAccessibleForFree: true,
    dateCreated: data.created_at,
    dateModified: data.updated_at,
    version: data.version,
    author: {
      "@type": "Organization",
      name: data.author.name,
      ...(data.author.url ? { url: data.author.url } : {}),
    },
    publisher: { "@id": absoluteUrl("/#organization") },
    isPartOf: { "@id": absoluteUrl("/#website") },
    ...(data.license.url ? { license: data.license.url } : {}),
    ...(data.type === "visual_prompt"
      ? { image: absoluteUrl(data.visual_prompt.preview.src) }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      creativeWork,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "ms" ? "Semua Sumber" : "All Resources",
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: libraryName,
            item: absoluteUrl(`/${locale}/${libraryPaths[data.type]}`),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title[locale],
            item: absoluteUrl(canonical),
          },
        ],
      },
    ],
  };
}
