import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { getAuthenticatedUser } from "@/lib/supabase/server";
import { isSearchIndexingEnabled, siteName, siteUrl } from "@/lib/seo";
import "../globals.css";

const libraryPaths = {
  skill: "skills",
  llm_prompt: "llm-prompts",
  visual_prompt: "visual-prompts",
} as const;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export function generateStaticParams() {
  return [{ locale: "ms" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) return {};
  const locale = parsed.data;
  const indexable = isSearchIndexingEnabled();
  const description =
    locale === "ms"
      ? "Pustaka sumber AI praktikal dwibahasa untuk Malaysia."
      : "A bilingual library of practical AI resources for Malaysia.";

  return {
    metadataBase: siteUrl,
    applicationName: siteName,
    title: {
      default:
        locale === "ms"
          ? "Kemahiran.AI — Sumber AI praktikal untuk Malaysia"
          : "Kemahiran.AI — Practical AI resources for Malaysia",
      template: `%s | ${siteName}`,
    },
    description,
    authors: [{ name: "Forward College" }],
    creator: "Forward College",
    publisher: "Forward College",
    category: "Artificial intelligence resources",
    referrer: "origin-when-cross-origin",
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false, noarchive: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const parsed = localeSchema.safeParse(locale);
  if (!parsed.success) notFound();
  const resources = getVisibleResources();
  const user = await getAuthenticatedUser();
  const counts = {
    skills: resources.filter((resource) => resource.data.type === "skill")
      .length,
    prompts: resources.filter((resource) => resource.data.type === "llm_prompt")
      .length,
    visual: resources.filter(
      (resource) => resource.data.type === "visual_prompt",
    ).length,
  };
  const localizedRoutes = resources.map(({ data }) => ({
    ms: `/ms/${libraryPaths[data.type]}/${data.slug.ms}`,
    en: `/en/${libraryPaths[data.type]}/${data.slug.en}`,
  }));
  return (
    <html
      lang={parsed.data === "ms" ? "ms-MY" : "en-MY"}
      className={`${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
        >
          {parsed.data === "ms"
            ? "Langkau ke kandungan utama"
            : "Skip to main content"}
        </a>
        <div className="app-shell">
          <SiteHeader
            locale={parsed.data}
            counts={counts}
            user={user}
            localizedRoutes={localizedRoutes}
          />
          <div className="app-content">
            {children}
            <SiteFooter locale={parsed.data} />
          </div>
        </div>
      </body>
    </html>
  );
}
