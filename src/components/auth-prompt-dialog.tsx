"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@phosphor-icons/react/ssr";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import type { Locale } from "@/lib/content/schema";

const copy = {
  ms: {
    title: "Simpan sumber ini",
    description:
      "Log masuk dengan Google untuk menyimpan sumber dan membukanya semula pada mana-mana peranti.",
    close: "Bukan sekarang",
    closeLabel: "Tutup dialog log masuk",
    context: "Sumber yang ingin disimpan",
  },
  en: {
    title: "Save this resource",
    description:
      "Sign in with Google to save resources and open them again on any device.",
    close: "Not now",
    closeLabel: "Close sign-in dialog",
    context: "Resource to save",
  },
} as const;

export function AuthPromptDialog({
  locale,
  resourceTitle,
  nextPath,
  open,
  onOpenChange,
}: {
  locale: Locale;
  resourceTitle: string;
  nextPath: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const text = copy[locale];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="auth-dialog-overlay" />
        <Dialog.Content className="auth-dialog-content">
          <Dialog.Close
            className="auth-dialog-close"
            aria-label={text.closeLabel}
          >
            <XIcon aria-hidden="true" weight="bold" />
          </Dialog.Close>
          <p className="auth-dialog-eyebrow">Kemahiran.AI</p>
          <Dialog.Title>{text.title}</Dialog.Title>
          <Dialog.Description>{text.description}</Dialog.Description>
          <div className="auth-dialog-resource">
            <span>{text.context}</span>
            <strong>{resourceTitle}</strong>
          </div>
          <GoogleSignInButton locale={locale} nextPath={nextPath} />
          <Dialog.Close className="auth-dialog-cancel">
            {text.close}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
