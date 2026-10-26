"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChatTextIcon,
  CheckCircleIcon,
  CopyIcon,
  ImageSquareIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import type { ExtractedPromptBlock } from "@/lib/content/markdown";
import type { Locale } from "@/lib/content/schema";

type CopyStatus = "idle" | "copied" | "error";

type PromptActionsProps = {
  locale: Locale;
  prompts: ExtractedPromptBlock[];
  resourceType: "llm_prompt" | "visual_prompt";
  variableCount: number;
  mediaType?: "image" | "video";
  aspectRatios?: string[];
};

async function copyWithFallback(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for browsers or embedded previews that expose Clipboard API
      // but deny writes outside their preferred permission context.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy command failed");
}

export function PromptActions({
  locale,
  prompts,
  resourceType,
  variableCount,
  mediaType,
  aspectRatios = [],
}: PromptActionsProps) {
  const [activeCopy, setActiveCopy] = useState<{
    index: number;
    status: CopyStatus;
  } | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMalay = locale === "ms";
  const isVisual = resourceType === "visual_prompt";
  const titleId = `prompt-actions-${resourceType}`;

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const handleCopy = async (prompt: ExtractedPromptBlock, index: number) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await copyWithFallback(prompt.text);
      setActiveCopy({ index, status: "copied" });
    } catch {
      setActiveCopy({ index, status: "error" });
    }
    resetTimer.current = setTimeout(() => setActiveCopy(null), 3500);
  };

  const statusMessage =
    activeCopy?.status === "copied"
      ? isMalay
        ? `${prompts[activeCopy.index]?.label ?? "Prompt"} telah disalin. Gantikan pemboleh ubah sebelum digunakan.`
        : `${prompts[activeCopy.index]?.label ?? "Prompt"} copied. Replace the variables before use.`
      : activeCopy?.status === "error"
        ? isMalay
          ? "Prompt tidak dapat disalin secara automatik. Pilih teks dalam bahagian prompt di bawah dan salin secara manual."
          : "The prompt could not be copied automatically. Select the text in the prompt section below and copy it manually."
        : "";

  return (
    <section
      aria-labelledby={titleId}
      className="mb-10 overflow-hidden rounded-xl border bg-card"
    >
      <div
        className={`border-b px-5 py-5 sm:px-6 ${isVisual ? "bg-visual-soft" : "bg-prompt-soft"}`}
      >
        <div className="flex items-start gap-3">
          <span
            className={`mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border bg-card ${isVisual ? "border-visual/30 text-visual" : "border-prompt/30 text-prompt"}`}
          >
            {!isVisual ? (
              <ChatTextIcon aria-hidden="true" size={21} weight="bold" />
            ) : mediaType === "video" ? (
              <VideoCameraIcon aria-hidden="true" size={21} weight="bold" />
            ) : (
              <ImageSquareIcon aria-hidden="true" size={21} weight="bold" />
            )}
          </span>
          <div>
            <p
              className={`font-mono text-xs font-bold tracking-[0.12em] uppercase ${isVisual ? "text-visual" : "text-prompt"}`}
            >
              {isVisual
                ? mediaType === "video"
                  ? isMalay
                    ? "Prompt video"
                    : "Video prompt"
                  : isMalay
                    ? "Prompt imej"
                    : "Image prompt"
                : isMalay
                  ? "Prompt LLM"
                  : "LLM prompt"}
            </p>
            <h2
              id={titleId}
              className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
            >
              {isVisual
                ? isMalay
                  ? "Pilih dan salin prompt"
                  : "Choose and copy a prompt"
                : isMalay
                  ? "Salin dan gunakan prompt ini"
                  : "Copy and use this prompt"}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {isMalay
                ? `Semak teks penuh di bawah dan gantikan ${variableCount} pemboleh ubah yang diterangkan dalam panduan sebelum digunakan.`
                : `Review the complete text below and replace the ${variableCount} variables described in the guide before use.`}
              {isVisual && aspectRatios.length > 0
                ? ` ${isMalay ? "Nisbah disokong" : "Supported ratios"}: ${aspectRatios.join(", ")}.`
                : null}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-6">
        {prompts.map((prompt, index) => {
          const copied =
            activeCopy?.index === index && activeCopy.status === "copied";
          const promptTitleId = `${titleId}-prompt-${index}`;
          return (
            <article
              key={`${prompt.label}-${index}`}
              aria-labelledby={promptTitleId}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <header className="flex flex-col gap-3 border-b bg-secondary/25 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 id={promptTitleId} className="font-semibold">
                    {prompt.label}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {isMalay
                      ? "Teks di bawah ialah kandungan penuh yang akan disalin."
                      : "The text below is the complete content that will be copied."}
                  </p>
                </div>
                <Button
                  type="button"
                  variant={isVisual ? "secondary" : "default"}
                  className={`w-full shrink-0 sm:w-auto ${isVisual ? "bg-card hover:border-visual/45" : "bg-prompt text-white hover:bg-prompt/88"}`}
                  onClick={() => handleCopy(prompt, index)}
                  aria-label={`${copied ? (isMalay ? "Prompt disalin" : "Prompt copied") : isMalay ? "Salin prompt" : "Copy prompt"}: ${prompt.label}`}
                >
                  {copied ? (
                    <CheckCircleIcon
                      aria-hidden="true"
                      size={19}
                      weight="bold"
                    />
                  ) : (
                    <CopyIcon aria-hidden="true" size={19} weight="bold" />
                  )}
                  {copied
                    ? isMalay
                      ? "Prompt disalin"
                      : "Prompt copied"
                    : isMalay
                      ? "Salin prompt"
                      : "Copy prompt"}
                </Button>
              </header>
              <pre
                className="max-h-96 overflow-y-auto bg-[var(--sidebar)] p-4 font-mono text-sm leading-6 whitespace-pre-wrap text-white select-text focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-ring sm:max-h-[32rem] sm:p-5"
                tabIndex={0}
                role="region"
                aria-label={`${isMalay ? "Teks penuh" : "Complete text"}: ${prompt.label}`}
              >
                <code>{prompt.text}</code>
              </pre>
            </article>
          );
        })}
        <p
          className={
            !activeCopy
              ? "sr-only"
              : activeCopy.status === "error"
                ? "text-sm leading-6 text-red-700"
                : "text-sm leading-6 text-muted-foreground"
          }
          aria-live="polite"
          role="status"
        >
          {statusMessage}
        </p>
      </div>
    </section>
  );
}
