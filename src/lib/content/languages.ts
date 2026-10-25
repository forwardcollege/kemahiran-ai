import type { Locale } from "./schema";

const headings = {
  ms: "## Bahasa Melayu",
  en: "## English",
} as const;

export type BilingualBody = Record<Locale, string>;

export const skillBodySectionHeadings = {
  ms: [
    "Hasil yang anda akan peroleh",
    "Sebelum bermula",
    "Langkah penggunaan",
    "Arahan untuk disalin",
    "Contoh penggunaan",
    "Semakan kualiti",
    "Batasan dan penggunaan bertanggungjawab",
  ],
  en: [
    "What you will get",
    "Before you begin",
    "How to use it",
    "Copyable instruction",
    "Worked example",
    "Quality check",
    "Limitations and responsible use",
  ],
} as const satisfies Record<Locale, readonly string[]>;

export function splitBilingualBody(markdown: string): BilingualBody {
  const msIndex = markdown.indexOf(headings.ms);
  const enIndex = markdown.indexOf(headings.en);
  const levelTwoHeadings = markdown.match(/^##\s+.+$/gm) ?? [];

  if (msIndex === -1 || enIndex === -1 || msIndex > enIndex) {
    throw new Error(
      "Expected one Bahasa Melayu section followed by one English section",
    );
  }

  if (
    levelTwoHeadings.length !== 2 ||
    levelTwoHeadings[0] !== headings.ms ||
    levelTwoHeadings[1] !== headings.en
  ) {
    throw new Error(
      "The body must contain exactly the headings ## Bahasa Melayu and ## English",
    );
  }

  const ms = markdown.slice(msIndex + headings.ms.length, enIndex).trim();
  const en = markdown.slice(enIndex + headings.en.length).trim();

  if (!ms || !en)
    throw new Error("Both language sections must contain content");
  return { ms, en };
}

export function validateSkillBodyStructure(body: BilingualBody): void {
  for (const locale of ["ms", "en"] as const) {
    const actual = [...body[locale].matchAll(/^###\s+(.+)$/gm)].map((match) =>
      match[1].trim(),
    );
    const expected = [...skillBodySectionHeadings[locale]];

    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        `Skill ${locale} sections must be exactly: ${expected.join(" | ")}. Found: ${actual.join(" | ") || "none"}`,
      );
    }
  }
}
