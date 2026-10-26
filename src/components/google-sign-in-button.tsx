"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { safeRedirectPath } from "@/lib/auth/redirects";
import type { Locale } from "@/lib/content/schema";
import { createClient } from "@/lib/supabase/client";
import { getSupabasePublicConfig } from "@/lib/supabase/config";

const copy = {
  ms: {
    action: "Teruskan dengan Google",
    pending: "Membuka Google…",
    unavailable:
      "Log masuk Google akan tersedia selepas konfigurasi Supabase disambungkan.",
    error: "Google tidak dapat dibuka. Sila cuba lagi.",
  },
  en: {
    action: "Continue with Google",
    pending: "Opening Google…",
    unavailable:
      "Google sign-in will be available after Supabase is connected.",
    error: "Google could not be opened. Please try again.",
  },
} as const;

export function GoogleSignInButton({
  locale,
  nextPath,
}: {
  locale: Locale;
  nextPath: string;
}) {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const text = copy[locale];
  const configured = Boolean(getSupabasePublicConfig());

  async function signIn() {
    const supabase = createClient();
    if (!supabase) {
      setMessage(text.unavailable);
      return;
    }

    setPending(true);
    setMessage("");
    const safeNext = safeRedirectPath(nextPath, locale);
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(safeNext)}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        scopes: "openid email profile",
      },
    });

    if (error) {
      setPending(false);
      setMessage(text.error);
    }
  }

  return (
    <div className="google-sign-in">
      <Button
        type="button"
        variant="secondary"
        size="lg"
        className="google-provider-button w-full"
        disabled={pending || !configured}
        onClick={signIn}
      >
        <GoogleIcon />
        {pending ? text.pending : text.action}
      </Button>
      {!configured ? <p>{text.unavailable}</p> : null}
      <p aria-live="polite">{message}</p>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.55h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.98-.9 6.64-2.35l-3.24-2.55c-.9.6-2.05.96-3.4.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.39 13.93A6.02 6.02 0 0 1 6.07 12c0-.67.11-1.32.32-1.93V7.45H3.04A10 10 0 0 0 2 12c0 1.62.39 3.15 1.04 4.55l3.35-2.62Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.94c1.47 0 2.79.5 3.82 1.5l2.88-2.88A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.96 5.45l3.35 2.62C7.18 7.7 9.39 5.94 12 5.94Z"
      />
    </svg>
  );
}
