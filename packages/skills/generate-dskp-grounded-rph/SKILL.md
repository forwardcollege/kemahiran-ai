---
name: generate-dskp-grounded-rph
description: Creates a Malaysian Rancangan Pengajaran Harian grounded in a user-supplied official DSKP source. Use when a teacher requests an RPH or lesson plan aligned to a specific subject and year or form; require source confirmation and never invent curriculum standards.
---

# Generate a DSKP-grounded RPH

Create a practical Rancangan Pengajaran Harian while keeping curriculum requirements traceable to the teacher's source.

## Required source

Require an official DSKP PDF or an identifiable teacher-supplied extract for the selected subject, year or form and curriculum edition.

- Inspect available reference files before planning.
- Confirm the document title, issuing authority, subject, level and edition or publication date with the teacher.
- Locate the relevant Standard Kandungan and Standard Pembelajaran.
- When the teacher names an exact target standard, do not add an adjacent standard as a target or supporting standard unless the teacher asks for it.
- Verify that each identifier, wording and supporting note belongs to the same table row; do not merge neighbouring standards or notes when the PDF extraction order is unclear.
- State their exact identifiers and wording, with a document section and source location when identifiable. When the printed page number differs from the PDF viewer page, report both, for example `printed p. 41; PDF page 53`.
- Ask the teacher to confirm the selected standards before generating the RPH.

Never treat `references/example-dskp-extract.md` as an official source. It demonstrates the workflow only.

If a matching source is absent, unreadable or ambiguous, stop and ask for the correct PDF or extract. Offer a clearly labelled non-DSKP-aligned provisional lesson outline only when the teacher explicitly requests one.

For first-time package setup or source replacement, read [references/knowledge-setup.md](references/knowledge-setup.md). A source owner may optionally complete [references/source-manifest.template.yml](references/source-manifest.template.yml).

## Inputs to confirm

Treat these as blocking inputs and confirm them before drafting:

- subject and year or form;
- topic and intended standards;
- lesson duration;
- general learner context without identifying information;
- available facilities and materials; and
- language of output.

The required school RPH format is optional. Use the default output structure below only when the teacher confirms that no required format applies.

Do not infer a duration, class size, learner context, facility or material from examples, common practice or an earlier unrelated request. If any blocking input is missing, stop and ask for it before drafting. A label such as `[PERLU SEMAKAN GURU]` does not make an invented value acceptable.

Ask no more than five concise clarification questions at a time. Never request student names, individual records or unnecessary personal information.

## Workflow

1. Validate that the curriculum source title, issuing authority, subject, level and edition match the request.
2. Extract and present the proposed Standard Kandungan and Standard Pembelajaran for teacher confirmation.
3. Check that all blocking inputs are present. Ask for missing values; do not supply defaults.
4. Check that the learning objective can be observed within the available time.
5. Build lesson stages whose activities and formative assessment align with the confirmed standard and objective.
6. Treat the teacher's confirmed facilities and materials as a closed allowlist across the entire response, including activities, differentiation, assessment, preparation and reflection. Every physical or digital item named or implied must appear on that list. Do not silently add cards, worksheets, notebooks, paper, pens, whiteboards, phones, lights, apps or other common classroom items.
7. If an additional item would materially improve the lesson, list it under `Cadangan bahan tambahan — belum diluluskan` / `Proposed additional material — not approved` and wait for approval; do not use it in the current plan.
8. Add practical differentiation as optional supports or extensions tied to the task. Do not divide learners into fixed high, medium or weak groups.
9. Separate source-grounded curriculum requirements from teaching suggestions created for the draft.
10. Mark professional decisions `[PERLU SEMAKAN GURU]` or `[TEACHER REVIEW REQUIRED]` according to the output language. Do not use the marker to conceal a missing required input.
11. Before responding, audit every section against the closed allowlist. Verbs such as `write`, `record`, `mark`, `draw`, `complete a worksheet` or `arrange cards` imply materials and are prohibited unless the necessary item is confirmed. Replace them with an oral response, pointing to a confirmed printed diagram, projected whole-class work or another activity using only the allowlist.
12. Do not mention an unapproved item inside the current lesson or differentiation plan even if it also appears in a separate proposal section.
13. Finish with an unchecked verification checklist for the teacher.

## Output

Use the teacher's required format when supplied. Otherwise include:

1. source record: document title, issuing authority, edition, Standard Kandungan, Standard Pembelajaran and source location, including both printed and PDF page numbers when they differ;
2. subject, level, topic, duration and learner context;
3. observable learning objective and success criteria;
4. a table of timing, teacher actions, learner actions, resources and assessment evidence;
5. differentiation and support;
6. preparation and safety notes;
7. teacher reflection space; and
8. final verification checklist.

Write in Bahasa Melayu by default. Use English when requested. Keep official Malay curriculum wording unchanged when an English RPH is requested, followed by a clearly labelled working translation only if useful.

## Quality and safety boundaries

- Do not invent, silently paraphrase or combine curriculum standards.
- Do not reproduce substantial portions of the source document. Use only the standard identifiers, necessary wording and brief supporting context required for the lesson plan.
- Do not claim DSKP alignment without an identified source.
- Do not infer learner diagnoses, abilities or personal circumstances.
- Do not include identifiable student information.
- Do not introduce equipment, apps or materials that the teacher did not confirm.
- Do not label learners as `lemah`, `sederhana` or `tinggi`, or their English equivalents. Describe optional scaffolds, core support and extensions without assigning learners to a category.
- Do not instruct learners to shine a light into another person's eyes or conduct a pupil-response activity unless the teacher supplies an approved safety protocol. Prefer a diagram, video or teacher-led non-contact alternative.
- Treat timing, safety, cultural suitability and differentiation as matters for teacher review.
- If the PDF text appears corrupted or incomplete, report the problem instead of filling gaps from memory.
- Do not pre-check the final verification checklist or claim that teacher review has occurred.
