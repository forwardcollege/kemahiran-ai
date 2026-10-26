import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { cache } from "react";
import { getSupabasePublicConfig } from "@/lib/supabase/config";

export type AuthenticatedUser = {
  id: string;
  email: string | null;
};

export async function createClient() {
  const config = getSupabasePublicConfig();
  if (!config) return null;

  const cookieStore = await cookies();

  return createServerClient(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Server Components cannot write cookies. The proxy refreshes them.
        }
      },
    },
  });
}

export const getAuthenticatedUser = cache(
  async (): Promise<AuthenticatedUser | null> => {
    const supabase = await createClient();
    if (!supabase) return null;

    const { data, error } = await supabase.auth.getClaims();
    const claims = data?.claims;
    const subject = claims?.sub;
    if (error || !claims || typeof subject !== "string") return null;

    return {
      id: subject,
      email: typeof claims.email === "string" ? claims.email : null,
    };
  },
);

export async function getFavouriteIds(userId: string | null) {
  if (!userId) return [];
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("favourites")
    .select("resource_id")
    .eq("user_id", userId);

  if (error) return [];
  return data.map(({ resource_id }) => resource_id as string);
}
