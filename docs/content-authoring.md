# Kemahiran.AI Content Authoring Guide

Status: Approved workflow for the MVP catalogue  
Last updated: 2026-10-25

This guide is for contributors adding or revising catalogue resources without changing application code. The Git repository is the source of truth. Supabase is not a catalogue CMS.

## Choose the correct resource type

- Use an **AI Skill** for a reusable multi-step workflow with preparation, decisions, quality checks and optional supporting files.
- Use an **LLM Prompt** for a focused task normally completed by copying one prompt and replacing clearly marked variables.
- Use a **Visual Prompt** for an Image or Video collection discovered through a representative preview, intended application and generator-specific guidance.

Do not split one bilingual resource into separate Malay and English files.

## Add a resource

1. Duplicate the closest record from `docs/content-examples/` or a similar approved record into the correct `content/` directory.
2. Assign a globally unique immutable `id`. Never reuse an ID from a deleted or deprecated record.
3. Add unique Malay and English slugs to the same frontmatter record.
4. Use only identifiers already defined under `content/taxonomies/`. Propose a taxonomy change separately when no existing value fits.
5. Write the Bahasa Melayu section first. Localise the workflow for Malaysian use rather than translating a generic foreign example.
6. Write and review the English section in the same file. Meaning, safety boundaries and required inputs must remain equivalent.
7. Use synthetic or redacted examples. Never commit real student, government, employee, customer, meeting or commercial data.
8. Record tool compatibility conservatively. `tested` and `limited` require a test date and review evidence; use `expected` when testing has not occurred.
9. Record provenance, licence, reviewer, version, dates, limitations and related immutable IDs.
10. Add preview media under `public/media/resources/{resource-id}/` for a visual collection.
11. Add a portable source package under `packages/skills/{package-name}/` when a Skill is downloadable. Include `SKILL.md` and `LICENSES.md`; include only necessary original or licensed support files.
12. Publish the versioned archive under `public/downloads/skills/{resource-id}/{version}/` only after its manifest and distribution rights are confirmed.

The complete field contract and status lifecycle are defined in `docs/content-schema.md`.

## Review and testing sequence

Move a record through these states without skipping evidence:

```text
draft → editorial_review → tool_test → internal approval → approved → published
```

For every resource:

- check the Malay version for clarity, Malaysian terminology and outcome focus;
- check the English version against the Malay meaning rather than as a standalone rewrite;
- run a complete synthetic fixture and at least one missing-input or safety-boundary fixture;
- record the actual tool, date, outcome, corrections and residual limitations;
- confirm relationships, asset paths and download paths;
- confirm provenance and redistribution rights; and
- obtain conscious internal approval from Howie Chang on behalf of Forward College.

Specialist review is optional for the MVP. When it was not obtained for curriculum, assessment, official-document, safeguarding or similarly higher-risk content, retain `specialist_review_status: not_obtained` and display the standard internal-review-only disclosure.

## Update an existing resource

Edit the existing record; do not replace it with a new identity.

- Update both languages when meaning changes.
- Increment the patch version for wording or metadata corrections.
- Increment the minor version for meaningful new steps, variables, examples or behaviour.
- Increment the major version when required inputs, expected output or package use changes incompatibly.
- Update `updated_at` for material changes.
- Repeat affected tool tests and internal review.
- Set `last_reviewed` only after review has actually completed.
- Publish a matching versioned package archive when package contents change.
- Add a redirect before changing a published slug.

## Skill-package boundaries

A public package may contain generic instructions, synthetic examples, blank manifests and original templates. It must not contain:

- official DSKP PDFs, circulars or government documents without recorded redistribution permission;
- organisational templates supplied only for a user's task;
- meeting notes, learner work, customer messages or current business data;
- credentials, tokens, personal data or hidden executable files; or
- third-party assets without a compatible licence and attribution.

The readable web instructions must remain useful even when a user does not download the package.

## Publication gate

Do not set `status: published` unless all required schema, editorial, testing, approval, licence, provenance, privacy and asset checks are complete. A record may be rendered in an authenticated or local editorial preview while still in `draft` or `editorial_review`, but it must not enter the public catalogue index.
