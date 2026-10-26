"use server";

import { redirect } from "next/navigation";
import { localeSchema } from "@/lib/content/schema";
import { createClient } from "@/lib/supabase/server";

export async function signOut(formData: FormData) {
  const locale = localeSchema.catch("ms").parse(formData.get("locale"));
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect(`/${locale}`);
}
