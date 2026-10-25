import { z } from "zod";

export const localeSchema = z.enum(["ms", "en"]);
export type Locale = z.infer<typeof localeSchema>;

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "must use YYYY-MM-DD");
const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be a lowercase kebab-case slug");
const identifier = z
  .string()
  .regex(/^[a-z0-9_]+$/, "must be a lowercase identifier");
const localizedText = z
  .object({ ms: z.string().min(1), en: z.string().min(1) })
  .strict();
const localizedList = z
  .object({ ms: z.array(z.string()).min(1), en: z.array(z.string()).min(1) })
  .strict();

const toolClaim = z
  .object({
    id: identifier,
    compatibility: z.enum(["tested", "limited", "expected"]),
    tested_on: date.nullable(),
    notes: localizedText.optional(),
  })
  .passthrough()
  .superRefine((claim, context) => {
    if (claim.compatibility !== "expected" && claim.tested_on === null) {
      context.addIssue({
        code: "custom",
        message: "tested and limited claims require tested_on",
      });
    }
  });

const baseShape = {
  schema_version: z.literal(1),
  id: z.string().regex(/^[a-z0-9-]+$/),
  status: z.enum([
    "draft",
    "editorial_review",
    "tool_test",
    "specialist_review",
    "approved",
    "published",
    "deprecated",
  ]),
  slug: z.object({ ms: slug, en: slug }).strict(),
  title: localizedText,
  summary: localizedText,
  audiences: z.array(identifier).min(1),
  use_cases: z.array(identifier).min(1),
  sectors: z.array(identifier).min(1),
  categories: z.array(identifier).min(1),
  tags: z.array(identifier),
  tools: z.array(toolClaim).min(1),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  intended_output: identifier,
  languages: z.tuple([z.literal("ms"), z.literal("en")]),
  author: z
    .object({ name: z.string().min(1), url: z.string().url().nullable() })
    .passthrough(),
  curator: z.object({ name: z.string().min(1) }).passthrough(),
  provenance: z
    .object({
      kind: z.enum([
        "original",
        "adapted_open_source",
        "community_contributed",
        "externally_referenced",
      ]),
      source_urls: z.array(z.string().url()),
      notes: localizedText,
    })
    .passthrough(),
  license: z
    .object({
      id: z.string().min(1),
      label: z.string().min(1),
      url: z.string().url().nullable(),
    })
    .passthrough(),
  review: z
    .object({
      status: z.enum(["pending", "internal_approved"]),
      organisation: z.string().min(1),
      editorial_reviewer: z.string().min(1).nullable(),
      specialist_review_status: z.enum([
        "not_required",
        "not_obtained",
        "completed",
      ]),
      specialist_reviewer: z.string().min(1).nullable(),
      last_reviewed: date.nullable(),
      next_review_due: date.nullable(),
    })
    .passthrough(),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  created_at: date,
  updated_at: date,
  related_ids: z.array(z.string()),
  featured: z.boolean(),
  search_aliases: z
    .object({ ms: z.array(z.string()), en: z.array(z.string()) })
    .strict(),
};

const skillBlock = z
  .object({
    estimated_minutes: z.number().int().positive(),
    outcome: localizedText,
    prerequisites: localizedList,
    required_inputs: z
      .array(
        z
          .object({
            id: identifier,
            label: localizedText,
            required: z.boolean(),
          })
          .passthrough(),
      )
      .min(1),
    instruction_copy_available: z.boolean(),
    package: z
      .object({
        available: z.boolean(),
        path: z.string().startsWith("/downloads/skills/").nullable().optional(),
        format: z.string().optional(),
        included_files: z.array(z.string()).optional(),
      })
      .passthrough(),
    limitations: localizedList,
  })
  .passthrough();

const llmPromptBlock = z
  .object({
    variables: z.array(
      z
        .object({
          id: identifier,
          token: z.string().min(3),
          label: localizedText,
          required: z.boolean(),
        })
        .passthrough(),
    ),
    expected_output: localizedText,
    recommended_capabilities: z.array(identifier),
    sample_included: z.boolean(),
    limitations: localizedList,
  })
  .passthrough();

const visualPromptBlock = z
  .object({
    media_type: z.enum(["image", "video"]),
    intended_applications: z.array(identifier).min(1),
    generators: z.array(toolClaim).min(1),
    preview: z
      .object({
        src: z.string().startsWith("/media/resources/"),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        alt: localizedText,
      })
      .passthrough(),
    styles: z.array(identifier).min(1),
    subjects: z.array(identifier).min(1),
    aspect_ratios: z.array(z.string()).min(1),
    output_formats: z.array(identifier).min(1),
    variables: z.array(
      z
        .object({
          id: identifier,
          token: z.string().min(3),
          label: localizedText,
          required: z.boolean(),
        })
        .passthrough(),
    ),
  })
  .passthrough();

const skillSchema = z
  .object({
    ...baseShape,
    type: z.literal("skill"),
    skill: skillBlock,
    llm_prompt: z.never().optional(),
    visual_prompt: z.never().optional(),
  })
  .passthrough();
const llmPromptSchema = z
  .object({
    ...baseShape,
    type: z.literal("llm_prompt"),
    llm_prompt: llmPromptBlock,
    skill: z.never().optional(),
    visual_prompt: z.never().optional(),
  })
  .passthrough();
const visualPromptSchema = z
  .object({
    ...baseShape,
    type: z.literal("visual_prompt"),
    visual_prompt: visualPromptBlock,
    skill: z.never().optional(),
    llm_prompt: z.never().optional(),
  })
  .passthrough();

export const resourceFrontmatterSchema = z
  .discriminatedUnion("type", [
    skillSchema,
    llmPromptSchema,
    visualPromptSchema,
  ])
  .superRefine((resource, context) => {
    if (resource.status !== "published") return;
    if (resource.license.id === "pending") {
      context.addIssue({
        code: "custom",
        path: ["license", "id"],
        message: "published resources require a confirmed licence",
      });
    }
    if (
      resource.review.status !== "internal_approved" ||
      resource.review.last_reviewed === null
    ) {
      context.addIssue({
        code: "custom",
        path: ["review"],
        message: "published resources require dated internal approval",
      });
    }
    if (!resource.tools.some((tool) => tool.compatibility !== "expected")) {
      context.addIssue({
        code: "custom",
        path: ["tools"],
        message:
          "published resources require at least one tested or limited tool claim",
      });
    }
  });
export type ResourceFrontmatter = z.infer<typeof resourceFrontmatterSchema>;

export const taxonomySchema = z.object({
  schema_version: z.literal(1),
  items: z.array(z.object({ id: identifier }).passthrough()),
});

export const bilingualTaxonomySchema = z.object({
  schema_version: z.literal(1),
  items: z.array(
    z
      .object({
        id: identifier,
        label: localizedText,
      })
      .passthrough(),
  ),
});
