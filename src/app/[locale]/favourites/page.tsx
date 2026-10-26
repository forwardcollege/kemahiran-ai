import { notFound, redirect } from "next/navigation";
import { LibraryLanding } from "@/components/library-landing";
import { getVisibleResources } from "@/lib/content/repository";
import { localeSchema } from "@/lib/content/schema";
import { getAuthenticatedUser, getFavouriteIds } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function FavouritesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const parsed = localeSchema.safeParse((await params).locale);
  if (!parsed.success) notFound();
  const locale = parsed.data;
  const user = await getAuthenticatedUser();
  if (!user) {
    const next = encodeURIComponent(`/${locale}/favourites`);
    redirect(`/${locale}/sign-in?next=${next}`);
  }

  const favouriteIds = new Set(await getFavouriteIds(user.id));
  const resources = getVisibleResources().filter(({ data }) =>
    favouriteIds.has(data.id),
  );

  return (
    <LibraryLanding
      locale={locale}
      eyebrow={locale === "ms" ? "Koleksi peribadi" : "Personal collection"}
      title={locale === "ms" ? "Kegemaran" : "Favourites"}
      summary={
        locale === "ms"
          ? "Sumber yang anda simpan tersedia di sini pada setiap peranti selepas log masuk."
          : "Resources you save are available here on every device after you sign in."
      }
      resources={resources}
      query=""
      tone="all"
    />
  );
}
