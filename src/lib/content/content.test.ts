import { describe, expect, it } from "vitest";
import {
  skillBodySectionHeadings,
  splitBilingualBody,
  validateSkillBodyStructure,
} from "./languages";
import {
  extractFencedCodeBlockAfterHeading,
  extractFirstFencedCodeBlock,
  renderSafeMarkdown,
} from "./markdown";
import {
  loadResources,
  validateResourceCollection,
  type Resource,
} from "./repository";
import { resourceFrontmatterSchema } from "./schema";

describe("catalogue content", () => {
  it("loads and validates the complete approved catalogue", () => {
    const resources = loadResources();
    expect(resources).toHaveLength(36);
    expect(resources.filter((item) => item.data.type === "skill")).toHaveLength(
      12,
    );
    expect(
      resources.filter((item) => item.data.type === "llm_prompt"),
    ).toHaveLength(14);
    expect(
      resources.filter((item) => item.data.type === "visual_prompt"),
    ).toHaveLength(10);
    expect(resources.every((item) => item.data.status === "approved")).toBe(
      true,
    );
  });

  it("rejects a type without its required type-specific block", () => {
    const result = resourceFrontmatterSchema.safeParse({ type: "skill" });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(
        result.error.issues.some((issue) => issue.path.includes("skill")),
      ).toBe(true);
  });

  it("rejects duplicate IDs and broken related IDs", () => {
    const resources = loadResources();
    expect(() =>
      validateResourceCollection([
        ...resources,
        { ...resources[0], filePath: "duplicate-fixture.md" },
      ]),
    ).toThrow("duplicate resource ID");

    const duplicateSlug: Resource = {
      ...resources[0],
      filePath: "duplicate-slug-fixture.md",
      data: { ...resources[0].data, id: "fixture-unique-id" },
    };
    expect(() =>
      validateResourceCollection([...resources, duplicateSlug]),
    ).toThrow("duplicate ms slug");

    const broken: Resource = {
      ...resources[0],
      filePath: "broken-relation-fixture.md",
      data: { ...resources[0].data, related_ids: ["missing-resource-001"] },
    };
    expect(() =>
      validateResourceCollection([broken, ...resources.slice(1)]),
    ).toThrow("unknown related resource ID");
  });

  it("rejects tags without bilingual taxonomy labels", () => {
    const resources = loadResources();
    const unknownTag: Resource = {
      ...resources[0],
      filePath: "unknown-tag-fixture.md",
      data: {
        ...resources[0].data,
        tags: [...resources[0].data.tags, "missing_bilingual_tag"],
      },
    };

    expect(() =>
      validateResourceCollection([unknownTag, ...resources.slice(1)]),
    ).toThrow("unknown tags ID missing_bilingual_tag");
  });

  it("blocks publication while the licence is pending", () => {
    const resource = loadResources()[0].data;
    const result = resourceFrontmatterSchema.safeParse({
      ...resource,
      status: "published",
      license: {
        id: "pending",
        label: "Licence not confirmed",
        url: null,
      },
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(
        result.error.issues.some(
          (issue) => issue.path.join(".") === "license.id",
        ),
      ).toBe(true);
    }
  });

  it("requires exactly one ordered section for each language", () => {
    expect(() =>
      splitBilingualBody("## English\nHello\n## Bahasa Melayu\nHai"),
    ).toThrow();
    expect(() =>
      splitBilingualBody(
        "## Bahasa Melayu\nHai\n## English\nHello\n## Extra\nNo",
      ),
    ).toThrow();
  });

  it("does not render raw HTML or script elements", async () => {
    const html = await renderSafeMarkdown(
      "Hello <script>alert('x')</script><img src=x onerror=alert(1)>",
    );
    expect(html).not.toContain("<script");
    expect(html).not.toContain("onerror");
    expect(html).not.toContain("<img");
  });

  it("renders GFM tables as semantic, keyboard-scrollable tables", async () => {
    const html = await renderSafeMarkdown(
      ["| Item | Owner |", "| --- | --- |", "| Follow up | Aina |"].join("\n"),
    );

    expect(html).toContain('class="markdown-table-scroll"');
    expect(html).toContain('role="region"');
    expect(html).toContain('tabindex="0"');
    expect(html).toContain("<table>");
    expect(html).toContain('<th scope="col">Item</th>');
  });

  it("extracts the primary copyable instruction from Markdown", () => {
    const markdown = [
      "### Arahan untuk disalin",
      "",
      "```text",
      "Baris pertama",
      "Baris kedua: {{INPUT}}",
      "```",
      "",
      "```text",
      "Contoh lain",
      "```",
    ].join("\n");

    expect(extractFirstFencedCodeBlock(markdown)).toBe(
      "Baris pertama\nBaris kedua: {{INPUT}}",
    );
    expect(
      extractFencedCodeBlockAfterHeading(markdown, "Arahan untuk disalin"),
    ).toBe("Baris pertama\nBaris kedua: {{INPUT}}");
    expect(extractFirstFencedCodeBlock("Tiada blok kod")).toBeNull();
  });

  it("provides a copyable instruction for every approved Skill", () => {
    const skills = loadResources().filter(
      (resource) => resource.data.type === "skill",
    );

    for (const resource of skills) {
      expect(
        extractFencedCodeBlockAfterHeading(
          resource.body.ms,
          "Arahan untuk disalin",
        ),
        `${resource.data.id} is missing a Malay copyable instruction`,
      ).not.toBeNull();
      expect(
        extractFencedCodeBlockAfterHeading(
          resource.body.en,
          "Copyable instruction",
        ),
        `${resource.data.id} is missing an English copyable instruction`,
      ).not.toBeNull();
    }
  });

  it("keeps every Skill guide on the same bilingual section structure", () => {
    const skills = loadResources().filter(
      (resource) => resource.data.type === "skill",
    );

    for (const resource of skills) {
      expect(() => validateSkillBodyStructure(resource.body)).not.toThrow();
      for (const locale of ["ms", "en"] as const) {
        const headings = [
          ...resource.body[locale].matchAll(/^###\s+(.+)$/gm),
        ].map((match) => match[1].trim());
        expect(headings).toEqual([...skillBodySectionHeadings[locale]]);
      }
    }
  });
});
