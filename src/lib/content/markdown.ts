import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function wrapTables(node: HastNode): void {
  if (!node.children) return;

  node.children = node.children.map((child) => {
    if (child.type === "element" && child.tagName === "table") {
      addColumnHeaderScopes(child);
      return {
        type: "element",
        tagName: "div",
        properties: {
          ariaLabel: "Jadual data / Data table",
          className: ["markdown-table-scroll"],
          role: "region",
          tabIndex: 0,
        },
        children: [child],
      };
    }

    wrapTables(child);
    return child;
  });
}

function addColumnHeaderScopes(node: HastNode): void {
  if (node.type === "element" && node.tagName === "th") {
    node.properties = { ...node.properties, scope: "col" };
  }

  node.children?.forEach(addColumnHeaderScopes);
}

function rehypeWrapTables() {
  return (tree: HastNode) => wrapTables(tree);
}

export function extractFirstFencedCodeBlock(markdown: string): string | null {
  const match = markdown.match(
    /(?:^|\n)```[^\n]*\r?\n([\s\S]*?)\r?\n```(?:\n|$)/,
  );

  return match?.[1].trim() || null;
}

export function extractFencedCodeBlockAfterHeading(
  markdown: string,
  heading: string,
): string | null {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headingMatch = new RegExp(`^###\\s+${escapedHeading}\\s*$`, "m").exec(
    markdown,
  );
  if (!headingMatch) return null;

  const sectionStart = headingMatch.index + headingMatch[0].length;
  const sectionRemainder = markdown.slice(sectionStart);
  const nextHeadingIndex = sectionRemainder.search(/^#{1,6}\s+/m);
  const section =
    nextHeadingIndex === -1
      ? sectionRemainder
      : sectionRemainder.slice(0, nextHeadingIndex);

  return extractFirstFencedCodeBlock(section);
}

export type ExtractedPromptBlock = {
  label: string;
  text: string;
};

export function extractPromptBlocksAfterHeading(
  markdown: string,
  heading: string,
): ExtractedPromptBlock[] {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headingMatch = new RegExp(`^###\\s+${escapedHeading}\\s*$`, "m").exec(
    markdown,
  );
  if (!headingMatch) return [];

  const sectionRemainder = markdown.slice(
    headingMatch.index + headingMatch[0].length,
  );
  const nextHeadingIndex = sectionRemainder.search(/^###\s+/m);
  const section =
    nextHeadingIndex === -1
      ? sectionRemainder
      : sectionRemainder.slice(0, nextHeadingIndex);
  const variants = [...section.matchAll(/^####\s+(.+)$/gm)];

  return variants.flatMap((variant, index) => {
    const start = (variant.index ?? 0) + variant[0].length;
    const end = variants[index + 1]?.index ?? section.length;
    const text = extractFirstFencedCodeBlock(section.slice(start, end));
    return text ? [{ label: variant[1].trim(), text }] : [];
  });
}

export function removeLevelThreeSection(
  markdown: string,
  heading: string,
): string {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headingMatch = new RegExp(`^###\\s+${escapedHeading}\\s*$`, "m").exec(
    markdown,
  );
  if (!headingMatch) return markdown;

  const sectionStart = headingMatch.index;
  const sectionContentStart = sectionStart + headingMatch[0].length;
  const sectionRemainder = markdown.slice(sectionContentStart);
  const nextHeadingIndex = sectionRemainder.search(/^###\s+/m);
  const sectionEnd =
    nextHeadingIndex === -1
      ? markdown.length
      : sectionContentStart + nextHeadingIndex;
  const before = markdown.slice(0, sectionStart).trimEnd();
  const after = markdown.slice(sectionEnd).trimStart();

  return [before, after].filter(Boolean).join("\n\n");
}

export async function renderSafeMarkdown(markdown: string): Promise<string> {
  const output = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeWrapTables)
    .use(rehypeStringify)
    .process(markdown);

  return String(output);
}
