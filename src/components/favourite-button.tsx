"use client";

import { useCallback, useEffect, useState } from "react";
import { HeartIcon } from "@phosphor-icons/react/ssr";
import { AuthPromptDialog } from "@/components/auth-prompt-dialog";
import type { Locale } from "@/lib/content/schema";
import { createClient } from "@/lib/supabase/client";

const copy = {
  ms: {
    save: "Simpan ke kegemaran",
    remove: "Buang daripada kegemaran",
    saved: "Sumber disimpan ke kegemaran.",
    removed: "Sumber dibuang daripada kegemaran.",
    error: "Perubahan tidak dapat disimpan. Sila cuba lagi.",
  },
  en: {
    save: "Save to favourites",
    remove: "Remove from favourites",
    saved: "Resource saved to favourites.",
    removed: "Resource removed from favourites.",
    error: "The change could not be saved. Please try again.",
  },
} as const;

export function FavouriteButton({
  locale,
  resourceId,
  resourceTitle,
  userId,
  initialSaved = false,
  className = "save-resource",
}: {
  locale: Locale;
  resourceId: string;
  resourceTitle: string;
  userId: string | null;
  initialSaved?: boolean;
  className?: string;
}) {
  const [saved, setSaved] = useState(initialSaved);
  const [pending, setPending] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [nextPath, setNextPath] = useState(`/${locale}`);
  const [message, setMessage] = useState("");
  const text = copy[locale];

  const persist = useCallback(
    async (shouldSave: boolean) => {
      const supabase = createClient();
      if (!supabase || !userId) return false;

      setPending(true);
      setMessage("");
      const result = shouldSave
        ? await supabase
            .from("favourites")
            .insert({ user_id: userId, resource_id: resourceId })
        : await supabase
            .from("favourites")
            .delete()
            .eq("user_id", userId)
            .eq("resource_id", resourceId);

      const duplicate = result.error?.code === "23505";
      if (result.error && !duplicate) {
        setMessage(text.error);
        setPending(false);
        return false;
      }

      setSaved(shouldSave);
      setMessage(shouldSave ? text.saved : text.removed);
      setPending(false);
      return true;
    },
    [resourceId, text.error, text.removed, text.saved, userId],
  );

  useEffect(() => {
    if (!userId) return;
    const url = new URL(window.location.href);
    if (
      url.searchParams.get("authAction") !== "favourite" ||
      url.searchParams.get("resourceId") !== resourceId
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      void persist(true).finally(() => {
        url.searchParams.delete("authAction");
        url.searchParams.delete("resourceId");
        window.history.replaceState(
          {},
          "",
          `${url.pathname}${url.search}${url.hash}`,
        );
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [persist, resourceId, userId]);

  function requestChange() {
    if (!userId) {
      const url = new URL(window.location.href);
      url.searchParams.set("authAction", "favourite");
      url.searchParams.set("resourceId", resourceId);
      setNextPath(`${url.pathname}${url.search}${url.hash}`);
      setDialogOpen(true);
      return;
    }

    void persist(!saved);
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-pressed={saved}
        aria-label={saved ? text.remove : text.save}
        disabled={pending}
        onClick={requestChange}
      >
        <HeartIcon aria-hidden="true" weight={saved ? "fill" : "regular"} />
      </button>
      <span className="sr-only" aria-live="polite">
        {message}
      </span>
      <AuthPromptDialog
        locale={locale}
        resourceTitle={resourceTitle}
        nextPath={nextPath}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
