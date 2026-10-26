import { NextResponse } from "next/server";
import { localeFromRedirectPath, safeRedirectPath } from "@/lib/auth/redirects";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const nextPath = safeRedirectPath(searchParams.get("next"));
  const locale = localeFromRedirectPath(nextPath);
  const code = searchParams.get("code");
  const supabase = await createClient();

  if (code && supabase) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(`${origin}${nextPath}`);
  }

  const errorUrl = new URL(`/${locale}/sign-in`, origin);
  errorUrl.searchParams.set("error", supabase ? "callback" : "configuration");
  errorUrl.searchParams.set("next", nextPath);
  return NextResponse.redirect(errorUrl);
}
