# Anchor Batch Review — 2026-10-25

Status: Approved by product owner for pattern expansion  
Scope: 10 approved anchor-batch concepts  
Publication status: Not approved for publication

## What has been completed

- Ten bilingual Markdown records have been drafted.
- Bahasa Melayu is the primary editorial version in every record.
- Each record has one stable ID and linked English content.
- Taxonomy, tool, variable and relationship references pass a local structural check.
- Eight records now contain at least one `tested` compatibility claim: the meeting-minutes and business-proposal Skills, three LLM Prompts and three Image collections. The RPH Skill remains `limited`; its v0.4.0 Gemini Auto behavioural retest passed after remediation, while minor editorial issues and Forward College internal approval remain. The Video collection retains `expected` Veo compatibility because no actual video was generated.
- Draft source-only packages exist for all three anchor Skills. Original synthetic preview assets exist for the three Image collections, while the Video collection has still-image planning previews only.
- Reference requirements now distinguish persistent knowledge, task-specific inputs and visual source assets.
- A source-only generic RPH Skill package has been drafted for review; it contains no official DSKP PDF and is not approved for distribution.
- A user-supplied DSKP KSSM Sains Tingkatan 3 PDF passed local identity, extraction, curriculum-row inspection and a private Gemini pilot without being copied into the repository; accountable internal approval remains pending and specialist review was not obtained.
- A source-only meeting-minutes Skill package and synthetic test fixture have been drafted. The package is not approved for public download while its licence and editorial review remain pending.
- A source-only business-proposal Skill package passed complete and incomplete synthetic Gemini fixtures after unsupported delivery-mode, benefit and value claims were removed.
- All three LLM Prompt records passed normal, missing-information and sensitive/escalation Gemini fixtures after remediation; detailed evidence is recorded in `llm-prompts-pilot.md`.
- The three Image collections each produced two original ChatGPT Image variants. The product collection additionally used a synthetic reference fixture to test feature preservation. The Video collection produced a storyboard and key frame only; detailed evidence is recorded in `visual-prompts-pilot.md`.

## Test evidence and editorial status

Testing is complete for the available tools, except actual video generation. The remaining decision for each record is accountable Forward College editorial approval, revision or hold. No row below records approval merely because a test passed.

On 25 October 2026, Howie Chang authorised the project to proceed beyond the anchor batch. This clears the catalogue-production pattern gate only. It does not change any resource's `draft` status, approve a licence, convert limited or expected compatibility into tested compatibility, or authorise public release.

| ID                           | Resource                                      | Primary review focus                                                   | Current evidence and editorial status                                                      |
| ---------------------------- | --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| skill-rph-001                | Penjana Rancangan Pengajaran Harian           | DSKP boundary, teacher workload, classroom practicality                | Gemini v0.4.0 behavioural pass; Forward College internal approval pending                  |
| skill-meeting-minutes-001    | Pembantu Penyediaan Minit Mesyuarat Formal    | Malaysian administrative tone, decision traceability, privacy          | Gemini v0.2.0 behavioural pass; Forward College editorial approval pending                 |
| skill-business-proposal-001  | Pembina Cadangan Perniagaan                   | Commercial usefulness, scope-price consistency, unsupported claims     | Gemini v0.2.0 behavioural pass; Forward College editorial approval pending                 |
| prompt-parent-message-001    | Draf Mesej kepada Ibu Bapa atau Penjaga       | Tone, safeguarding, minimum necessary student information              | Gemini v0.2.0 behavioural pass; Forward College editorial approval pending                 |
| prompt-official-letter-001   | Draf Surat Rasmi                              | Formal Bahasa Melayu, organisational authority, missing-detail markers | Gemini v0.2.0 behavioural pass; Forward College editorial approval pending                 |
| prompt-customer-response-001 | Balas Pertanyaan atau Aduan Pelanggan         | Empathy, policy adherence, escalation triggers                         | Gemini v0.2.0 behavioural pass; Forward College editorial approval pending                 |
| visual-education-001         | Ilustrasi Pendidikan dalam Konteks Malaysia   | Curriculum accuracy, age suitability, cultural representation          | Two ChatGPT Image variants generated; educator/representation approval pending             |
| visual-event-poster-001      | Poster Program dan Acara                      | Practical copy space, branding workflow, representation                | Two ChatGPT Image variants generated; communications/representation approval pending       |
| visual-product-photo-001     | Fotografi Produk untuk SME                    | Product fidelity, misleading claims, commercial usefulness             | Synthetic-reference ChatGPT Image test passed; real-product and editorial approval pending |
| visual-event-video-001       | Video Promosi Ringkas untuk Program dan Acara | Shot continuity, factual claims, captions and mobile legibility        | Still storyboard/key frame only; actual video and editorial review pending                 |

## Proposed test matrix

Testing was authorised for this draft batch. A test result does not constitute publication approval.

| Resource group          | Minimum test                                                                              | Evidence to record                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Three AI Skills         | Run each Malay instruction in Gemini with one complete and one incomplete synthetic input | Model/date, input fixture, output, clarification behaviour, factual errors, reviewer verdict            |
| Three LLM Prompts       | Run one normal, one missing-information and one sensitive-data scenario per prompt        | Whether variables, boundaries, refusal/escalation and output format work as intended                    |
| Three Image collections | Generate at least two variants from each principal prompt                                 | Generator/date, settings, prompt, output file, product/cultural/anatomy review and provenance           |
| One Video collection    | Generate both the montage and one-shot prompt where tool access permits                   | Generator/date, output file, continuity, motion, representation, factual-claim and accessibility review |

## Internal review and specialist status

- Every resource requires Howie Chang's accountable Forward College approval before publication.
- `skill-rph-001`, `skill-meeting-minutes-001`, `prompt-official-letter-001` and `prompt-parent-message-001` currently record specialist review as `not_obtained`.
- For those higher-risk resources, publication must display the standard internal-review-only disclosure and require users to verify against current official sources.
- Specialist input may be added later when available, without blocking the MVP.
- `visual-education-001` still requires an internal curriculum/representation check; `visual-product-photo-001` and `prompt-customer-response-001` require an internal commercial-claims check.

Howie Chang's review date and decision must be recorded before any record moves to `approved` or `published`. His presence in metadata identifies responsibility but does not approve a record automatically.

## Approval boundary

Approval of this review sheet or of a draft permits testing. It does not approve public release. Publication additionally requires completed testing, accountable Forward College internal approval, recorded specialist-review status, a confirmed licence, resolved preview/package metadata and a visible last-reviewed date.
