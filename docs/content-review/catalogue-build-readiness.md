# Catalogue Build Readiness

Status: Ready for application integration; publication gates remain open
Date: 2026-10-26
Scope: All 36 MVP resources

## Outcome

The full catalogue can now be used to build and test the website content pipeline:

| Content type      | Records | Current state                                                     |
| ----------------- | ------: | ----------------------------------------------------------------- |
| AI Skills         |      12 | Bilingual Markdown and portable source package available          |
| LLM Prompts       |      14 | Bilingual Markdown available                                      |
| Image collections |       7 | Bilingual Markdown and original preview assets available          |
| Video collections |       3 | Bilingual Markdown and representative still storyboards available |
| **Total**         |  **36** | **Structurally ready for site integration**                       |

Every record has one shared identity, Malay and English content, controlled taxonomies, provenance, limitations, review ownership, relationships and conservative compatibility metadata. Howie Chang approved all 36 records on behalf of Forward College on 2026-10-25, and they now carry `status: approved` with `review.status: internal_approved`. Production indexing remains limited to `published` records, so approval alone cannot accidentally expose them publicly.

## Skill downloads

All 12 Skills now have a versioned ZIP at the exact public path declared in the resource record. Each archive contains `SKILL.md` at its root for Gemini Skills upload compatibility, together with a Malay-first bilingual `README.md`, `LICENSES.md` and only the supporting reference files declared by that package. One package serves both language variants; there are no duplicated Malay and English archives.

| Resource ID                           | Version | Archive                                     |
| ------------------------------------- | ------- | ------------------------------------------- |
| `skill-rph-001`                       | 0.5.0   | `generate-dskp-grounded-rph.zip`            |
| `skill-dskp-activity-001`             | 0.3.0   | `design-dskp-aligned-activities.zip`        |
| `skill-assessment-set-001`            | 0.3.0   | `build-assessment-materials.zip`            |
| `skill-rubric-001`                    | 0.2.0   | `design-moderate-rubrics.zip`               |
| `skill-student-feedback-001`          | 0.2.0   | `draft-constructive-student-feedback.zip`   |
| `skill-meeting-minutes-001`           | 0.3.0   | `draft-formal-meeting-minutes.zip`          |
| `skill-policy-analysis-001`           | 0.2.0   | `analyse-circular-policy-document.zip`      |
| `skill-programme-paper-001`           | 0.2.0   | `draft-programme-paper.zip`                 |
| `skill-activity-report-001`           | 0.2.0   | `build-activity-outcome-report.zip`         |
| `skill-business-proposal-001`         | 0.3.0   | `draft-business-proposal.zip`               |
| `skill-management-report-001`         | 0.2.0   | `build-data-informed-management-report.zip` |
| `skill-customer-service-playbook-001` | 0.2.0   | `build-customer-service-playbook.zip`       |

The archives use the approved CC BY 4.0 resource licence and retain their `LICENSES.md` manifests. Public availability still follows each resource's publication status and release gates.

## Compatibility evidence

Current text-resource compatibility is deliberately conservative:

- 7 records have Gemini `tested` evidence dated 2026-10-25;
- 5 records have Gemini `limited` evidence dated 2026-10-25;
- 14 later text records remain Gemini `expected` after testing was blocked before fixture submission by Google's unusual-traffic CAPTCHA; and
- no CAPTCHA was completed or bypassed.

For visual resources:

- all 7 Image collections have original ChatGPT Image previews and generator-specific test dates;
- Gemini Image remains `expected`; and
- all 3 Video collections remain Veo `expected`. Their still storyboards are preview and shot-planning evidence, not video-generator test evidence.

The website may display `tested`, `limited` and `expected` distinctly. It must not collapse them into a generic “compatible” badge.

## Checks completed

- 36 records found: 12 Skills, 14 LLM Prompts and 10 visual collections.
- IDs and locale slugs are unique.
- Directory and content type agree.
- Every record contains exactly one Malay section and one English section.
- Taxonomy IDs and explicit related-resource IDs resolve.
- Bilingual scalar fields parse cleanly as exactly `ms` and `en`; comma-containing YAML values are quoted so text is not misread as extra keys.
- Every placeholder used by an LLM or visual prompt is declared in frontmatter, including its English token when the languages use different placeholders.
- Every `tested` or `limited` tool claim has a date.
- Every visual preview path resolves to an image with recorded bilingual alternative text and provenance.
- All 12 declared Skill download paths resolve to readable ZIP files.
- Every Skill source package contains `README.md`, `SKILL.md` and `LICENSES.md`.
- Package names match their `SKILL.md` frontmatter names.
- Archives contain no executable files, official source documents, real user data or unexpected hidden metadata.
- Repository scans found no embedded credentials, private keys, passwords or personal Gmail addresses.
- Synthetic examples do not contain identifiable real student, employee, customer or government data.
- `docs/content-authoring.md` documents the content-only contribution workflow.

The bundled Python Skill validator could not run because its local Python environment lacks PyYAML. Equivalent frontmatter, naming and package checks were completed with the repository's available Ruby YAML parser; the future application validator remains responsible for enforcing the complete Zod contract.

## Publication gates still requiring human or external evidence

These do not block building the site, previewing every resource or implementing validation. They do block setting records to `published`:

1. Forward College must choose the default licence for original catalogue content and downloadable packages. The current planning recommendation requires conscious owner/legal acceptance because an open licence may be irrevocable after publication.
2. The 14 new text resources require Gemini behavioural fixtures when normal access is restored.
3. The 3 Video collections require actual Veo tests before any `tested` claim.
4. Higher-risk resources must retain the internal-review-only disclosure whenever specialist review remains `not_obtained`.

## Build boundary

The site implementation can safely begin with all 36 approved records in editorial-preview mode. Public catalogue generation must filter out non-published records by default. A preview-only override may render approved records locally or in protected review deployments, but it must never make them indexable or discoverable on the production public site.
