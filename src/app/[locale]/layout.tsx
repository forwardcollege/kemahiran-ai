import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import "../globals.css";

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

export const metadata: Metadata = {
  title: { default: "Kemahiran.AI", template: "%s | Kemahiran.AI" },
  description: "Pustaka kemahiran dan prompt AI dwibahasa untuk Malaysia.",
  robots:
    process.env.NODE_ENV === "production"
      ? { index: false, follow: false }
      : undefined,
};

export function generateStaticParams() {
  return [{ locale: "ms" }, { locale: "en" }];
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
  const counts = {
    skills: resources.filter((resource) => resource.data.type === "skill")
      .length,
    prompts: resources.filter((resource) => resource.data.type === "llm_prompt")
      .length,
    visual: resources.filter(
      (resource) => resource.data.type === "visual_prompt",
    ).length,
  };
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
          <SiteHeader locale={parsed.data} counts={counts} />
          <div className="app-content">
            {children}
            <SiteFooter locale={parsed.data} />
          </div>
        </div>
      </body>
    </html>
  );
}
