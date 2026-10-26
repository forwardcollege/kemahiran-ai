import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheckIcon } from "@phosphor-icons/react/ssr";
import { signOut } from "@/app/auth/actions";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { safeRedirectPath } from "@/lib/auth/redirects";
import { localeSchema } from "@/lib/content/schema";
import { privatePageMetadata } from "@/lib/seo";
import { getAuthenticatedUser } from "@/lib/supabase/server";

const copy = {
  ms: {
    eyebrow: "Akaun Kemahiran.AI",
    title: "Log masuk untuk ciri peribadi",
    body: "Semua sumber kekal terbuka. Akaun Google hanya diperlukan untuk menyimpan kegemaran dan mengakses ciri peribadi.",
    privacy:
      "Kami hanya meminta maklumat asas akaun Google anda—nama, alamat e-mel dan imej profil. Kami tidak meminta akses Gmail atau Google Drive.",
    signedIn: "Anda telah log masuk",
    continue: "Teruskan",
    signOut: "Log keluar",
    callbackError:
      "Log masuk tidak dapat diselesaikan. Sila cuba lagi atau gunakan akaun Google yang lain.",
    configurationError:
      "Log masuk Google belum dikonfigurasikan untuk persekitaran ini.",
  },
  en: {
    eyebrow: "Kemahiran.AI account",
    title: "Sign in for personal features",
    body: "Every resource remains open. A Google account is only required to save favourites and access personal features.",
    privacy:
      "We only request basic Google account information—your name, email address and profile image. We do not request access to Gmail or Google Drive.",
    signedIn: "You are signed in",
    continue: "Continue",
    signOut: "Sign out",
    callbackError:
      "Sign-in could not be completed. Please try again or use another Google account.",
    configurationError:
      "Google sign-in has not been configured for this environment.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) return {};
  const locale = parsed.data;
  return privatePageMetadata({
    locale,
    title: locale === "ms" ? "Log masuk" : "Sign in",
    description:
      locale === "ms"
        ? "Log masuk ke Kemahiran.AI untuk menyimpan kegemaran."
        : "Sign in to Kemahiran.AI to save favourites.",
    path: "/sign-in",
  });
}

export default async function SignInPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    next?: string | string[];
    error?: string | string[];
  }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const query = await searchParams;
  const nextPath = safeRedirectPath(first(query.next), locale);
  const error = first(query.error);
  const user = await getAuthenticatedUser();
  const text = copy[locale];

  return (
    <main id="main-content" className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <div className="auth-card-icon" aria-hidden="true">
          <ShieldCheckIcon weight="regular" />
        </div>
        <p className="auth-card-eyebrow">{text.eyebrow}</p>
        <h1 id="auth-title">{user ? text.signedIn : text.title}</h1>
        {user ? (
          <>
            <p>{user.email}</p>
            <div className="auth-card-actions">
              <Button asChild size="lg">
                <Link href={nextPath}>{text.continue}</Link>
              </Button>
              <form action={signOut}>
                <input type="hidden" name="locale" value={locale} />
                <Button type="submit" variant="secondary" size="lg">
                  {text.signOut}
                </Button>
              </form>
            </div>
          </>
        ) : (
          <>
            <p>{text.body}</p>
            {error ? (
              <p className="auth-error" role="alert">
                {error === "configuration"
                  ? text.configurationError
                  : text.callbackError}
              </p>
            ) : null}
            <GoogleSignInButton locale={locale} nextPath={nextPath} />
            <p className="auth-privacy">{text.privacy}</p>
          </>
        )}
      </section>
    </main>
  );
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}
