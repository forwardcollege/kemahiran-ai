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

export const llmPromptBodySectionHeadings = {
  ms: [
    "Cara menggunakan prompt ini",
    "Pemboleh ubah",
    "Prompt lengkap",
    "Hasil dijangka",
    "Contoh penggunaan",
    "Semakan kualiti",
    "Batasan dan penggunaan bertanggungjawab",
  ],
  en: [
    "How to use this prompt",
    "Variables",
    "Complete prompt",
    "Expected output",
    "Worked example",
    "Quality check",
    "Limitations and responsible use",
  ],
} as const satisfies Record<Locale, readonly string[]>;

export const visualPromptBodySectionHeadings = {
  ms: [
    "Kegunaan koleksi",
    "Sebelum menjana",
    "Pemboleh ubah",
    "Prompt koleksi",
    "Cadangan penggunaan",
    "Semakan hasil",
    "Batasan dan penggunaan bertanggungjawab",
  ],
  en: [
    "What this collection is for",
    "Before generating",
    "Variables",
    "Collection prompts",
    "Suggested workflow",
    "Output checks",
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

function validateExactSectionHeadings(
  body: BilingualBody,
  expectedHeadings: Record<Locale, readonly string[]>,
  resourceLabel: string,
): void {
  for (const locale of ["ms", "en"] as const) {
    const actual = [...body[locale].matchAll(/^###\s+(.+)$/gm)].map((match) =>
      match[1].trim(),
    );
    const expected = [...expectedHeadings[locale]];

    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        `${resourceLabel} ${locale} sections must be exactly: ${expected.join(" | ")}. Found: ${actual.join(" | ") || "none"}`,
      );
    }
  }
}

export function validateSkillBodyStructure(body: BilingualBody): void {
  validateExactSectionHeadings(body, skillBodySectionHeadings, "Skill");
}

export function validateLlmPromptBodyStructure(body: BilingualBody): void {
  validateExactSectionHeadings(
    body,
    llmPromptBodySectionHeadings,
    "LLM Prompt",
  );

  for (const locale of ["ms", "en"] as const) {
    const heading = llmPromptBodySectionHeadings[locale][2];
    const section = extractLevelThreeSection(body[locale], heading);
    const blocks = section.match(/```[^\n]*\r?\n[\s\S]*?\r?\n```/g) ?? [];
    if (blocks.length !== 1) {
      throw new Error(
        `LLM Prompt ${locale} section ${heading} must contain exactly one fenced prompt block`,
      );
    }

    const exampleHeading = llmPromptBodySectionHeadings[locale][4];
    const exampleSection = extractLevelThreeSection(
      body[locale],
      exampleHeading,
    );
    const exampleSubheadings = [
      ...exampleSection.matchAll(/^####\s+(.+)$/gm),
    ].map((match) => match[1].trim());
    const expectedSubheadings =
      locale === "ms"
        ? ["Contoh input", "Contoh hasil"]
        : ["Sample input", "Sample output"];
    if (
      JSON.stringify(exampleSubheadings) !== JSON.stringify(expectedSubheadings)
    ) {
      throw new Error(
        `LLM Prompt ${locale} section ${exampleHeading} must contain: ${expectedSubheadings.join(" | ")}`,
      );
    }
  }
}

export function validateVisualPromptBodyStructure(body: BilingualBody): void {
  validateExactSectionHeadings(
    body,
    visualPromptBodySectionHeadings,
    "Visual Prompt",
  );

  for (const locale of ["ms", "en"] as const) {
    const heading = visualPromptBodySectionHeadings[locale][3];
    const section = extractLevelThreeSection(body[locale], heading);
    const variants = [...section.matchAll(/^####\s+(.+)$/gm)];
    const blocks = section.match(/```[^\n]*\r?\n[\s\S]*?\r?\n```/g) ?? [];
    if (variants.length === 0 || blocks.length !== variants.length) {
      throw new Error(
        `Visual Prompt ${locale} section ${heading} requires one fenced prompt block for every level-four prompt heading`,
      );
    }
  }
}

export function validatePromptVariableUsage(
  body: BilingualBody,
  variables: Array<{ token: string; token_en?: string }>,
  resourceLabel: string,
): void {
  for (const locale of ["ms", "en"] as const) {
    const declared = new Set(
      variables.map((variable) =>
        locale === "en" && variable.token_en
          ? variable.token_en
          : variable.token,
      ),
    );
    const fencedContent = [
      ...body[locale].matchAll(/```[^\n]*\r?\n([\s\S]*?)\r?\n```/g),
    ]
      .map((match) => match[1])
      .join("\n");
    const used = new Set(
      [...fencedContent.matchAll(/\{\{[A-Z0-9_]+\}\}/g)].map(
        (match) => match[0],
      ),
    );
    const undeclared = [...used].filter((token) => !declared.has(token));
    const unused = [...declared].filter((token) => !used.has(token));

    if (undeclared.length > 0 || unused.length > 0) {
      throw new Error(
        `${resourceLabel} ${locale} prompt variables must match frontmatter. Undeclared: ${undeclared.join(", ") || "none"}. Unused: ${unused.join(", ") || "none"}`,
      );
    }
  }
}

function extractLevelThreeSection(markdown: string, heading: string) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^###\\s+${escapedHeading}\\s*$`, "m").exec(
    markdown,
  );
  if (!match) return "";
  const remainder = markdown.slice(match.index + match[0].length);
  const nextHeading = remainder.search(/^###\s+/m);
  return nextHeading === -1 ? remainder : remainder.slice(0, nextHeading);
}
