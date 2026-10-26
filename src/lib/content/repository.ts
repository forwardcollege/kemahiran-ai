import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { parse as parseYaml } from "yaml";
import {
  splitBilingualBody,
  validateLlmPromptBodyStructure,
  validatePromptVariableUsage,
  validateSkillBodyStructure,
  validateVisualPromptBodyStructure,
  type BilingualBody,
} from "./languages";
import {
  bilingualTaxonomySchema,
  resourceFrontmatterSchema,
  taxonomySchema,
  type Locale,
  type ResourceFrontmatter,
} from "./schema";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const resourceDirectories = [
  "skills",
  "llm-prompts",
  "visual-prompts",
] as const;
export type TaxonomyName =
  "audiences" | "categories" | "sectors" | "tags" | "tools" | "use-cases";

export type Resource = {
  filePath: string;
  data: ResourceFrontmatter;
  body: BilingualBody;
};

function issue(pathname: string, message: string): never {
  throw new Error(`${path.relative(root, pathname)}: ${message}`);
}

function readTaxonomy(name: TaxonomyName) {
  const filePath = path.join(contentRoot, "taxonomies", `${name}.yml`);
  const result = taxonomySchema.safeParse(
    parseYaml(readFileSync(filePath, "utf8")),
  );
  if (!result.success)
    issue(filePath, result.error.issues.map((item) => item.message).join("; "));
  return result.data;
}

function readTaxonomyIds(name: TaxonomyName) {
  return new Set(readTaxonomy(name).items.map((item) => item.id));
}

export function getTaxonomyLabels(name: "tags") {
  const filePath = path.join(contentRoot, "taxonomies", `${name}.yml`);
  const result = bilingualTaxonomySchema.safeParse(
    parseYaml(readFileSync(filePath, "utf8")),
  );
  if (!result.success)
    issue(filePath, result.error.issues.map((item) => item.message).join("; "));
  return Object.fromEntries(
    result.data.items.map((item) => [item.id, item.label]),
  );
}

export function loadResources(): Resource[] {
  const resources = resourceDirectories.flatMap((directory) => {
    const directoryPath = path.join(contentRoot, directory);
    return readdirSync(directoryPath)
      .filter((filename) => filename.endsWith(".md"))
      .sort()
      .map((filename) => {
        const filePath = path.join(directoryPath, filename);
        const parsed = matter(readFileSync(filePath, "utf8"));
        const result = resourceFrontmatterSchema.safeParse(parsed.data);
        if (!result.success) {
          issue(
            filePath,
            result.error.issues
              .map((item) => `${item.path.join(".")}: ${item.message}`)
              .join("; "),
          );
        }
        let body: BilingualBody;
        try {
          body = splitBilingualBody(parsed.content);
          if (result.data.type === "skill") validateSkillBodyStructure(body);
          if (result.data.type === "llm_prompt")
            validateLlmPromptBodyStructure(body);
          if (result.data.type === "visual_prompt")
            validateVisualPromptBodyStructure(body);
          if (result.data.type === "llm_prompt")
            validatePromptVariableUsage(
              body,
              result.data.llm_prompt.variables,
              "LLM Prompt",
            );
          if (result.data.type === "visual_prompt")
            validatePromptVariableUsage(
              body,
              result.data.visual_prompt.variables,
              "Visual Prompt",
            );
        } catch (error) {
          issue(
            filePath,
            error instanceof Error ? error.message : String(error),
          );
        }
        return { filePath, data: result.data, body };
      });
  });

  validateResourceCollection(resources);
  return resources;
}

export function validateResourceCollection(resources: Resource[]) {
  const ids = new Set<string>();
  const slugs = { ms: new Set<string>(), en: new Set<string>() };
  const taxonomy = {
    audiences: readTaxonomyIds("audiences"),
    categories: readTaxonomyIds("categories"),
    sectors: readTaxonomyIds("sectors"),
    tags: readTaxonomyIds("tags"),
    tools: readTaxonomyIds("tools"),
    use_cases: readTaxonomyIds("use-cases"),
  };

  for (const resource of resources) {
    const { data, filePath } = resource;
    if (ids.has(data.id)) issue(filePath, `duplicate resource ID ${data.id}`);
    ids.add(data.id);
    for (const locale of ["ms", "en"] as const) {
      if (slugs[locale].has(data.slug[locale]))
        issue(filePath, `duplicate ${locale} slug ${data.slug[locale]}`);
      slugs[locale].add(data.slug[locale]);
    }
    for (const [field, values] of [
      ["audiences", data.audiences],
      ["categories", data.categories],
      ["sectors", data.sectors],
      ["tags", data.tags],
      ["use_cases", data.use_cases],
    ] as const) {
      for (const value of values)
        if (!taxonomy[field].has(value))
          issue(filePath, `unknown ${field} ID ${value}`);
    }
    for (const tool of data.tools)
      if (!taxonomy.tools.has(tool.id))
        issue(filePath, `unknown tool ID ${tool.id}`);

    if (data.type === "skill" && data.skill.package.available) {
      if (!data.skill.package.path)
        issue(filePath, "downloadable Skill requires a package path");
      const downloadPath = path.join(
        root,
        "public",
        data.skill.package.path.replace(/^\//, ""),
      );
      if (!existsSync(downloadPath))
        issue(filePath, `missing package ${data.skill.package.path}`);
    }
    if (data.type === "visual_prompt") {
      const previewPath = path.join(
        root,
        "public",
        data.visual_prompt.preview.src.replace(/^\//, ""),
      );
      if (!existsSync(previewPath))
        issue(filePath, `missing preview ${data.visual_prompt.preview.src}`);
    }
  }

  for (const resource of resources) {
    for (const relatedId of resource.data.related_ids) {
      if (!ids.has(relatedId))
        issue(resource.filePath, `unknown related resource ID ${relatedId}`);
    }
  }
}

export function getResourceBySlug(
  locale: Locale,
  slug: string,
  type: ResourceFrontmatter["type"],
) {
  return getVisibleResources().find(
    (resource) =>
      resource.data.type === type && resource.data.slug[locale] === slug,
  );
}

export function getPreviewResources() {
  return loadResources().filter((resource) =>
    ["approved", "published"].includes(resource.data.status),
  );
}

export function getPublishedResources() {
  return loadResources().filter(
    (resource) => resource.data.status === "published",
  );
}

export function getVisibleResources() {
  return process.env.NODE_ENV === "production" &&
    process.env.CONTENT_PREVIEW !== "true"
    ? getPublishedResources()
    : getPreviewResources();
}
