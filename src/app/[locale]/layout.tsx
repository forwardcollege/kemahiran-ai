import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { localeSchema } from "@/lib/content/schema";
import "../globals.css";

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
  return (
    <html lang={parsed.data === "ms" ? "ms-MY" : "en-MY"}>
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
        >
          {parsed.data === "ms"
            ? "Langkau ke kandungan utama"
            : "Skip to main content"}
        </a>
        {children}
      </body>
    </html>
  );
}
