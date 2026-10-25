"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowSquareOutIcon,
  CheckCircleIcon,
  ClockIcon,
  CopyIcon,
  DownloadSimpleIcon,
  FileZipIcon,
  SparkleIcon,
  UploadSimpleIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/content/schema";

type CopyStatus = "idle" | "copied" | "error";

type SkillActionsProps = {
  locale: Locale;
  instruction: string | null;
  copyAvailable: boolean;
  packagePath?: string | null;
  packageAvailable: boolean;
  packageFiles?: string[];
  estimatedMinutes: number;
  prerequisites: string[];
};

const copyWithFallback = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
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
};

export function SkillActions({
  locale,
  instruction,
  copyAvailable,
  packagePath,
  packageAvailable,
  packageFiles = [],
  estimatedMinutes,
  prerequisites,
}: SkillActionsProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMalay = locale === "ms";
  const canCopy = copyAvailable && Boolean(instruction);
  const canDownload = packageAvailable && Boolean(packagePath);
  const visiblePackageFiles = packageFiles.slice(0, 3);
  const additionalPackageFileCount = Math.max(packageFiles.length - 3, 0);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const handleCopy = async () => {
    if (!instruction) return;

    if (resetTimer.current) clearTimeout(resetTimer.current);

    try {
      await copyWithFallback(instruction);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 3500);
  };

  const copyLabel =
    copyStatus === "copied"
      ? isMalay
        ? "Arahan disalin"
        : "Instructions copied"
      : isMalay
        ? "Salin arahan"
        : "Copy instructions";

  const statusMessage =
    copyStatus === "copied"
      ? isMalay
        ? "Arahan telah disalin. Tampalkan dalam perbualan Gemini."
        : "Instructions copied. Paste them into a Gemini conversation."
      : copyStatus === "error"
        ? isMalay
          ? "Arahan tidak dapat disalin secara automatik. Pilih teks dalam bahagian arahan di bawah dan salin secara manual."
          : "The instructions could not be copied automatically. Select the text in the instruction section below and copy it manually."
        : "";

  return (
    <section
      aria-labelledby="skill-actions-title"
      className="mb-12 overflow-hidden rounded-xl border bg-card"
    >
      <div className="border-b bg-skill-soft px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-skill/30 bg-card text-skill-foreground">
            <SparkleIcon aria-hidden="true" size={21} weight="bold" />
          </span>
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.12em] text-skill-foreground uppercase">
              {isMalay ? "Mula di sini" : "Start here"}
            </p>
            <h2
              id="skill-actions-title"
              className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
            >
              {isMalay
                ? "Dua cara menggunakan kemahiran ini"
                : "Two ways to use this skill"}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {isMalay
                ? "Gunakan terus tanpa pemasangan, atau muat naik pakej untuk menyimpannya sebagai Gemini Skill yang boleh digunakan semula."
                : "Use it immediately without installation, or upload the package to save it as a reusable Gemini Skill."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <article className="flex flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2 text-primary">
            <CopyIcon aria-hidden="true" size={20} weight="bold" />
            <p className="font-mono text-xs font-bold tracking-[0.1em] uppercase">
              {isMalay ? "Cara pantas" : "Quick use"}
            </p>
          </div>
          <h3 className="mt-3 text-lg font-semibold">
            {isMalay ? "Gunakan terus dalam Gemini" : "Use directly in Gemini"}
          </h3>
          <ol className="mt-3 flex-1 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
            <li>
              {isMalay
                ? "Salin arahan lengkap dengan satu klik."
                : "Copy the complete instructions in one click."}
            </li>
            <li>
              {isMalay
                ? "Tampalkan dalam perbualan Gemini baharu."
                : "Paste them into a new Gemini conversation."}
            </li>
            <li>
              {isMalay
                ? "Gantikan pemboleh ubah dan lampirkan bahan yang diperlukan."
                : "Replace the variables and attach the required materials."}
            </li>
          </ol>
          <Button
            type="button"
            variant="secondary"
            className="mt-5 w-full sm:w-fit"
            onClick={handleCopy}
            disabled={!canCopy}
          >
            {copyStatus === "copied" ? (
              <CheckCircleIcon aria-hidden="true" size={19} weight="bold" />
            ) : (
              <CopyIcon aria-hidden="true" size={19} weight="bold" />
            )}
            {copyLabel}
          </Button>
          <p
            className={
              copyStatus === "idle"
                ? "sr-only"
                : copyStatus === "error"
                  ? "mt-2 text-xs leading-5 text-red-700"
                  : "mt-2 text-xs leading-5 text-skill-foreground"
            }
            aria-live="polite"
            role="status"
          >
            {statusMessage}
          </p>
        </article>

        <article className="flex flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2 text-skill-foreground">
            <UploadSimpleIcon aria-hidden="true" size={20} weight="bold" />
            <p className="font-mono text-xs font-bold tracking-[0.1em] uppercase">
              {isMalay ? "Guna semula" : "Reusable setup"}
            </p>
          </div>
          <h3 className="mt-3 text-lg font-semibold">
            {isMalay ? "Tambah kepada Gemini Skills" : "Add to Gemini Skills"}
          </h3>
          <ol className="mt-3 flex-1 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
            <li>
              {isMalay
                ? "Muat turun pakej ZIP di bawah—jangan nyahmampatkannya."
                : "Download the ZIP package below—do not unzip it."}
            </li>
            <li>
              {isMalay
                ? "Dalam Gemini, buka Customize → Skills → Create → Upload."
                : "In Gemini, open Customize → Skills → Create → Upload."}
            </li>
            <li>
              {isMalay
                ? "Pilih fail ZIP, semak butirannya, kemudian cipta Skill."
                : "Select the ZIP, review its details, then create the Skill."}
            </li>
          </ol>
          {canDownload ? (
            <Button
              asChild
              className="mt-5 w-full bg-skill text-foreground hover:bg-skill/85 sm:w-fit"
            >
              <a href={packagePath ?? undefined} download>
                <DownloadSimpleIcon
                  aria-hidden="true"
                  size={19}
                  weight="bold"
                />
                {isMalay
                  ? "Muat turun untuk Gemini Skills"
                  : "Download for Gemini Skills"}
              </a>
            </Button>
          ) : null}
        </article>
      </div>

      <div className="grid gap-5 border-t bg-secondary/35 px-5 py-5 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:px-6">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <ClockIcon aria-hidden="true" size={18} weight="bold" />
            <span>
              {isMalay ? "Anggaran masa" : "Estimated time"}: {estimatedMinutes}{" "}
              {isMalay ? "minit" : "minutes"}
            </span>
          </div>
          {visiblePackageFiles.length > 0 ? (
            <div className="mt-3 flex items-start gap-2 text-muted-foreground">
              <FileZipIcon
                aria-hidden="true"
                className="mt-0.5 shrink-0"
                size={18}
                weight="bold"
              />
              <p>
                {isMalay ? "Pakej merangkumi" : "Package includes"}:{" "}
                {visiblePackageFiles.join(", ")}
                {additionalPackageFileCount > 0
                  ? isMalay
                    ? ` + ${additionalPackageFileCount} fail sokongan`
                    : ` + ${additionalPackageFileCount} supporting files`
                  : null}
              </p>
            </div>
          ) : null}
        </div>
        <div>
          <p className="font-semibold">
            {isMalay ? "Sediakan sebelum bermula" : "Prepare before starting"}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            {prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-6">
        <p>
          {isMalay
            ? "Jika menu Skills belum tersedia pada akaun anda, gunakan pilihan Salin arahan. Ketersediaan Gemini Skills masih boleh berbeza mengikut jenis akaun dan pelancaran berperingkat."
            : "If the Skills menu is not yet available on your account, use Copy instructions. Gemini Skills availability may still vary by account type and staged rollout."}{" "}
          <a
            href="https://support.google.com/gemini/answer/17094296?hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-foreground underline decoration-border underline-offset-4 hover:text-primary"
          >
            {isMalay
              ? "Panduan rasmi Gemini Skills"
              : "Official Gemini Skills guide"}
            <ArrowSquareOutIcon aria-hidden="true" size={15} weight="bold" />
            <span className="sr-only">
              {isMalay ? "(dibuka dalam tab baharu)" : "(opens in a new tab)"}
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
