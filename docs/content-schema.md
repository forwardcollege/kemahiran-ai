# Markdown Content Model

Status: Approved for implementation  
Last updated: 2026-10-25

This document defines how Kemahiran.AI catalogue content is stored and maintained. Phase 1 implements this contract with Zod validation, bilingual-section parsing and collection-level relationship, taxonomy, asset and download checks.

## 1. Design goals

- A non-developer can add or revise a resource through Markdown and a GitHub pull request.
- One resource has one identity, one version history and shared relationships.
- Malay and English content remain paired without duplicating entire records.
- Cards, filters, search, detail pages and SEO can be generated from structured fields.
- Type-specific data remains appropriate to Skills, LLM Prompts and visual prompts.
- Invalid or incomplete published content fails before deployment.

## 2. Proposed repository layout

```text
content/
├── skills/
│   └── penjana-rph.md
├── llm-prompts/
│   └── minit-mesyuarat-formal.md
├── visual-prompts/
│   └── poster-program-komuniti.md
└── taxonomies/
    ├── audiences.yml
    ├── categories.yml
    ├── sectors.yml
    ├── tools.yml
    ├── use-cases.yml
    └── search-synonyms.yml

public/
├── media/resources/{resource-id}/...
└── downloads/skills/{resource-id}/{version}/...
```

The user-editable catalogue entries are `.md` files. Small taxonomy files are YAML because they define controlled identifiers rather than prose resources.

## 3. One-file bilingual convention

Each resource is one Markdown file containing:

1. YAML frontmatter with shared and type-specific structured fields;
2. exactly one `## Bahasa Melayu` section;
3. exactly one `## English` section; and
4. subsections at heading level 3 or deeper.

The build selects the required language section and renders the title from frontmatter. Do not place another level-two heading inside a language section.

```markdown
---
# validated metadata
---

## Bahasa Melayu

### Cara menggunakan sumber ini

...

## English

### How to use this resource

...
```

This keeps identity, dates, taxonomy, provenance and relationships in one place. The language-specific prose is clearly separated but travels in the same commit and version history.

## 4. Shared frontmatter contract

The following shape applies to every type. Field names and enum values are English identifiers for implementation stability; user-facing labels are translated through the taxonomy.

```yaml
schema_version: 1
id: skill-rph-001
type: skill # skill | llm_prompt | visual_prompt
status: draft # draft | editorial_review | tool_test | specialist_review | approved | published | deprecated

slug:
  ms: penjana-rancangan-pengajaran-harian
  en: daily-lesson-plan-generator

title:
  ms: Penjana Rancangan Pengajaran Harian
  en: Daily Lesson Plan Generator

summary:
  ms: Hasilkan draf RPH yang tersusun berdasarkan objektif, tahap murid dan tempoh pengajaran.
  en: Produce a structured lesson-plan draft based on objectives, learner level and lesson duration.

audiences:
  - teachers_educators
use_cases:
  - teaching_learning
sectors:
  - education
categories:
  - lesson_planning
tags:
  - rph
  - dskp

tools:
  - id: chatgpt
    compatibility: tested # tested | expected | limited
    tested_on: "2026-10-15"
    notes:
      ms: Diuji menggunakan model yang tersedia pada tarikh semakan.
      en: Tested with the model available on the review date.

difficulty: beginner # beginner | intermediate | advanced
intended_output: structured_document
languages:
  - ms
  - en

author:
  name: Forward Academy
  url: https://forward.edu.my
curator:
  name: Forward Labs

provenance:
  kind: original # original | adapted_open_source | community_contributed | externally_referenced
  source_urls: []
  notes:
    ms: Kandungan asal Forward Academy.
    en: Original Forward Academy content.

license:
  id: pending
  label: Licence to be confirmed before publication
  url: null

review:
  status: pending
  organisation: Forward College
  editorial_reviewer: Howie Chang
  specialist_review_status: not_obtained
  specialist_reviewer: null
  last_reviewed: null
  next_review_due: null

version: 0.1.0
created_at: "2026-10-21"
updated_at: "2026-10-21"

related_ids: []
featured: false

search_aliases:
  ms:
    - rancangan mengajar
  en:
    - lesson planning
```

### Shared-field rules

- `id` is globally unique, stable and never localised.
- `type` must agree with the containing directory.
- `status: published` activates all publication-level validation.
- Slugs are unique within locale and content type. A published slug change requires a redirect.
- Taxonomy arrays contain controlled IDs only.
- `tools[].compatibility: tested` requires `tested_on` and review evidence.
- `review.organisation` defaults to `Forward College` for the MVP, but a published record also requires an accountable person or role in `editorial_reviewer`.
- `review.status` is `pending`, `changes_requested` or `internal_approved`. Do not use `internal_approved` until the accountable reviewer has consciously approved that resource.
- `specialist_review_status` is `not_required`, `not_obtained` or `completed`. `completed` requires `specialist_reviewer`; `not_obtained` must never be presented as specialist approval.
- Published higher-risk resources with `specialist_review_status: not_obtained` display the standard bilingual internal-review disclosure and a reminder to verify against the current official source.
- `languages` must include `ms`; the bilingual MVP additionally requires `en` for published records.
- `provenance.kind` and licence data are mandatory for publication.
- `last_reviewed` cannot precede `updated_at` when content changed materially.
- `related_ids` use immutable resource IDs, not URLs or slugs.
- Search aliases improve discovery but must not be used for keyword stuffing.

## 5. Skill-specific fields

```yaml
skill:
  estimated_minutes: 20
  outcome:
    ms: Draf RPH yang boleh disemak dan disesuaikan oleh guru.
    en: A lesson-plan draft the teacher can review and adapt.
  prerequisites:
    ms:
      - Objektif pembelajaran atau petikan DSKP yang berkaitan
    en:
      - Relevant learning objectives or DSKP extract
  required_inputs:
    - id: subject
      label:
        ms: Mata pelajaran
        en: Subject
      required: true
  instruction_copy_available: true
  package:
    available: true
    path: /downloads/skills/skill-rph-001/1.0.0/penjana-rph.zip
    format: skill_md_zip
    included_files:
      - SKILL.md
      - references/contoh-rph.md
  knowledge:
    requirement: required # required | optional | none
    persistent_references:
      - id: curriculum_source
        type: official_document
        supplied_by: user # user | organisation | bundled
        required: true
        sensitive: false
        description:
          ms: PDF DSKP rasmi bagi mata pelajaran dan tahap yang dipilih.
          en: Official DSKP PDF for the selected subject and level.
    runtime_inputs:
      - id: class_context
        type: structured_input
        sensitive: false
    missing_reference_behavior: stop_and_request_source
  limitations:
    ms:
      - Semua cadangan perlu disemak oleh guru sebelum digunakan.
    en:
      - All suggestions require teacher review before use.
```

The body should contain, in each language:

- who it is for;
- prerequisites;
- step-by-step usage;
- copyable instruction version;
- example input and output;
- limitations/responsible-use guidance; and
- package explanation where applicable.

### Skill knowledge rules

- `knowledge.requirement` states whether the workflow needs persistent reference knowledge to make its advertised claims.
- `persistent_references` are stable documents such as a curriculum source, organisational style guide, policy, approved service catalogue or KPI definition.
- `runtime_inputs` are supplied for one task, such as meeting notes, student work, a client brief or current-period data. Sensitive runtime inputs must never be bundled into a public package.
- `supplied_by: bundled` is permitted only when redistribution rights and provenance are documented.
- `missing_reference_behavior` must be one of `stop_and_request_source`, `continue_with_explicit_warning` or `not_applicable`.
- A placeholder or synthetic example must never satisfy a required knowledge source.

## 6. LLM Prompt-specific fields

```yaml
llm_prompt:
  variables:
    - id: meeting_title
      token: "{{TAJUK_MESYUARAT}}"
      token_en: "{{MEETING_TITLE}}"
      label:
        ms: Tajuk mesyuarat
        en: Meeting title
      required: true
      example:
        ms: Mesyuarat Jawatankuasa Program STEM
        en: STEM Programme Committee Meeting
  expected_output:
    ms: Minit mesyuarat formal dengan keputusan dan tindakan susulan.
    en: Formal minutes with decisions and follow-up actions.
  recommended_capabilities:
    - long_context
    - instruction_following
  sample_included: true
  reference_inputs:
    - id: organisation_policy
      type: policy
      required: false
      supply_mode: runtime # runtime | persistent
      sensitive: false
      description:
        ms: Dasar organisasi yang berkaitan, jika ada.
        en: Relevant organisational policy, when available.
  limitations:
    ms:
      - Jangan masukkan maklumat sulit ke dalam alat AI yang tidak diluluskan organisasi.
    en:
      - Do not enter confidential information into an AI tool not approved by the organisation.
```

The body should contain, in each language:

- how to use the prompt;
- variables and preparation;
- the complete copyable prompt;
- expected output;
- optional sample input/output; and
- limitations and appropriate-use guidance.

`reference_inputs` identifies source material that should accompany a prompt. Prompts normally use `supply_mode: runtime`; when persistent organisational knowledge is essential, consider a full Skill instead of making the prompt silently depend on unavailable context.

`variables[].token` is the Bahasa Melayu placeholder. Add `token_en` when the English prompt uses a different placeholder. Both placeholders represent the same semantic variable and must be rendered with the same bilingual label and required/optional state.

## 7. Visual Prompt-specific fields

```yaml
visual_prompt:
  media_type: image # image | video
  intended_applications:
    - event_poster
    - social_media
  generators:
    - id: chatgpt_image
      compatibility: tested
      tested_on: "2026-10-15"
  preview:
    src: /media/resources/visual-poster-001/preview.webp
    width: 1600
    height: 900
    alt:
      ms: Contoh poster program komuniti dengan ruang tajuk yang jelas.
      en: Example community programme poster with clear title space.
    provenance:
      kind: original_generated
      creator: Forward Academy
      tool: ChatGPT Image
      generated_on: "2026-10-15"
  styles:
    - modern_editorial
  subjects:
    - malaysian_community
  aspect_ratios:
    - "4:5"
    - "1:1"
  output_formats:
    - social_post
  variables:
    - id: programme_name
      token: "{{NAMA_PROGRAM}}"
      token_en: "{{PROGRAMME_NAME}}"
      label:
        ms: Nama program
        en: Programme name
      required: true
  reference_assets:
    - id: brand_guide
      type: brand_guide
      required: false
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Gunakan untuk warna dan gaya; tambah logo sebenar selepas penjanaan.
        en: Use for colours and style; add the genuine logo after generation.
  image_metadata:
    composition: centred_subject_with_text_space
    lighting: soft_daylight
    palette:
      - warm_neutral
      - forward_accent
    exclusions:
      - illegible_text
      - distorted_hands
  video_metadata: null
```

For a Video collection, `video_metadata` can contain:

```yaml
video_metadata:
  duration_seconds: 15
  shot_type: medium_wide
  camera_movement: slow_dolly_in
  pacing: confident
  transitions: clean_cuts
  audio_cues:
    - light_ambient_room_tone
  emotional_tone: optimistic
```

Set `image_metadata: null` only when the record is Video and image-only fields are irrelevant. Common composition/style data may still be used for both types if the final schema makes those fields shared.

The body should contain, in each language:

- intended use;
- how to adapt variables;
- one or more individually copyable prompts;
- format/generator notes;
- exclusions or negative instructions where supported;
- responsible representation guidance; and
- preview/provenance notes.

`reference_assets` covers source images, verified event briefs, brand guides and factual materials needed to constrain generation. It must record whether an asset is required, how it is supplied and whether it may contain sensitive material. Reference assets are not automatically licensed for redistribution.

Visual-prompt variables use the same bilingual placeholder convention as LLM Prompt variables: `token` for Malay and `token_en` when the English prompt uses a different placeholder.

## 8. Adding a resource

This is the intended non-developer workflow after implementation:

1. In GitHub, duplicate the closest file from `docs/content-examples/` into the correct `content/` directory.
2. Assign a new ID from the documented sequence; never reuse an old ID.
3. Fill in shared frontmatter and the correct type-specific block.
4. Write the Malay section first, using Malaysian terminology and context.
5. Write or commission the reviewed English variant in the same file.
6. Add preview assets under `public/media/resources/{resource-id}/` if required.
7. Add any Skill package under `public/downloads/skills/{resource-id}/{version}/`.
8. Run the future `pnpm content:validate` command or rely on the pull-request check.
9. Preview the generated page in both languages.
10. Move the record through editorial review, tool testing and accountable Forward College internal approval. Record specialist review separately when it is available.
11. Set `status: published` only when all required evidence is complete.
12. Merge the content pull request; deployment then publishes the change.

No TypeScript or React file should need editing for a normal resource addition.

## 9. Updating a resource

1. Edit the existing Markdown file; do not create a replacement record.
2. Update both language variants when meaning changes.
3. Increment `version`:
   - patch for wording, metadata or minor prompt improvements;
   - minor for meaningful new steps, examples or prompt behaviour;
   - major for a breaking change to expected inputs, output or package use.
4. Update `updated_at` and repeat the required tool and internal review. Repeat specialist review only when one was previously completed or the product owner specifically requires it.
5. Update `last_reviewed` only after review is actually complete.
6. If a slug changes, add an explicit redirect from the old URL.
7. If a downloadable package changes, publish it under the new version path.
8. Keep deprecated records available with a replacement link when external links may exist.

## 10. Review evidence

The first implementation should decide whether detailed review evidence lives:

- in additional frontmatter fields;
- in a nearby non-public review file; or
- in the pull-request template and issue history.

Public content needs the accountable reviewer name/role, reviewing organisation, last-reviewed date and tested tool. Sensitive internal notes and test transcripts should not be embedded in public pages.

For the MVP, Forward College is the default reviewing organisation and Howie Chang is the default accountable internal reviewer. This does not auto-approve a record. Howie must still consciously review it and set `review.status: internal_approved`.

Specialist review is optional. When `specialist_review_status: not_obtained` is used for curriculum, official-document, assessment, safeguarding or similarly higher-risk content, the public page must display:

> Disemak secara dalaman oleh Forward College. Belum disemak oleh pakar bebas. Sahkan dengan sumber rasmi terkini sebelum digunakan.
>
> Internally reviewed by Forward College. Not reviewed by an independent specialist. Verify against the latest official source before use.

## 11. Example records

- [AI Skill example](content-examples/skill-rph.md)
- [LLM Prompt example](content-examples/llm-prompt-minit-mesyuarat.md)
- [Visual Prompt example](content-examples/visual-prompt-poster-program.md)

These examples are schema demonstrations, not publication-ready resources. They intentionally use `status: draft`, pending licences and abbreviated sample content.
