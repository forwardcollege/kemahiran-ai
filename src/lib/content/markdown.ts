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
