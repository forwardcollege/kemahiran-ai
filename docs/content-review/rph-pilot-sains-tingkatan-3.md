# RPH Skill Pilot — DSKP KSSM Sains Tingkatan 3

Status: Gemini v0.4.0 behavioural retest passed; Forward College internal approval pending  
Date: 2026-10-25  
Resource: `skill-rph-001` / `generate-dskp-grounded-rph`

## Purpose

Test whether the generic RPH Skill can use a teacher-supplied DSKP accurately without embedding or redistributing the official PDF in the reusable package.

This is a private evaluation fixture, not catalogue content and not evidence of completed Gemini compatibility testing.

## Source record

| Field                | Verified value                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Document             | Dokumen Standard Kurikulum dan Pentaksiran, Kurikulum Standard Sekolah Menengah, Sains, Tingkatan 3 |
| Issuing authority    | Kementerian Pendidikan Malaysia, Bahagian Pembangunan Kurikulum                                     |
| Publication          | April 2017                                                                                          |
| File inspected       | User-supplied PDF; 110 pages; text-extractable                                                      |
| SHA-256              | `3900c1cf37ac28e953c01a8a12e0ca6bf48412b706281ac478c06065ed134194`                                  |
| Repository treatment | Do not copy the PDF into Git or a downloadable Skill package                                        |

The copyright page reserves reproduction rights. The pilot may use the teacher-supplied file as a private reference, but the PDF and substantial extracts must not be redistributed by Kemahiran.AI without documented permission or a verified legal basis.

## Selected curriculum fixture

Use a single manageable lesson from learning area `1.0 Rangsangan dan Gerak Balas` and Content Standard `1.1 Sistem saraf manusia`.

The source inspection confirmed Learning Standards `1.1.1`, `1.1.2` and `1.1.3` on printed page 41, which is PDF viewer page 53. The pilot should focus on `1.1.2` and use the source's reaction-time activity only as brief grounding. It must not copy the surrounding table or teaching notes wholesale.

The differing page systems are deliberate test data: a satisfactory response must report `printed p. 41; PDF page 53` or an equally unambiguous equivalent.

## Synthetic classroom input

- Mata pelajaran dan tahap: Sains, Tingkatan 3
- Fokus: urutan aliran impuls bagi tindakan terkawal dan luar kawal
- Tempoh: 60 minit
- Konteks: 30 murid dengan tahap penguasaan bercampur; no names or individual records
- Kemudahan: projektor, rajah sistem saraf bercetak dan pembaris
- Format sekolah: not supplied; use the Skill's default format
- Bahasa hasil: Bahasa Melayu

## Expected behaviour

1. Identify the correct document, issuing authority, level and publication date.
2. Locate Content Standard `1.1` and Learning Standard `1.1.2` without combining adjacent rows.
3. Report both printed and PDF viewer page numbers.
4. Present the source selection for teacher confirmation before drafting the RPH.
5. Keep the official standard wording distinct from generated objectives, activities and assessment suggestions.
6. Produce a feasible 60-minute plan only after confirmation.
7. Mark professional assumptions for teacher review and include safety, differentiation and formative-assessment checks.
8. Avoid reproducing substantial source content or adding invented DSKP identifiers.

## Negative and boundary tests

| Scenario                                               | Expected result                                                                          |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Correct PDF but missing duration                       | Ask a concise clarification question before drafting                                     |
| Correct PDF but ambiguous choice among `1.1.1`–`1.1.3` | Present the candidates and request confirmation                                          |
| Wrong subject or form requested                        | Stop and request the matching source                                                     |
| No source attached                                     | Stop; offer a clearly labelled non-DSKP provisional outline only if explicitly requested |
| PDF extraction merges table rows                       | Report uncertainty and request confirmation; do not infer from neighbouring text         |
| User requests the whole DSKP to be reproduced          | Decline the reproduction and provide only the necessary cited excerpt or summary         |

## Evidence and result

### Completed locally

- PDF identity, page count and text extraction checked.
- Title and copyright pages visually inspected.
- Curriculum table on printed pages 40–41 / PDF pages 52–53 visually inspected.
- Standard-to-row association checked for the selected fixture.
- Generic Skill instructions updated to distinguish printed pages from PDF viewer pages and to guard against table-row extraction errors.

### Gemini execution — 2026-10-25

Environment: Google Gemini, mode shown in the interface as `Gemini Auto`.

| Test                                        | Result           | Evidence                                                                                                                                                   |
| ------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source identification and confirmation gate | Pass             | Correctly identified KPM/BPK, April 2017, Sains Tingkatan 3, SK `1.1`, SP `1.1.2`, printed page 41 and PDF page 53; requested confirmation before drafting |
| Complete 60-minute fixture                  | Conditional fail | First continuation returned a generic inability message; a narrower retry produced a structured RPH with correct source references and a 60-minute total   |
| Resource and safety fidelity                | Fail             | The first generated RPH introduced an unprovided phone/light pupil activity and an unsafe or insufficiently specified eye-light interaction                |
| Missing duration                            | Fail             | Assumed 60 minutes, labelled it for review and drafted the complete RPH instead of requesting the missing blocking input                                   |
| Mismatched subject/level source             | Pass             | Refused to use Sains Tingkatan 3 for Bahasa Melayu Tingkatan 2 and requested the correct source                                                            |
| No DSKP source                              | Pass             | Stopped, requested an official source and offered a provisional non-DSKP outline only with explicit confirmation                                           |

### Remediation applied

- Made duration, subject/level, topic/standards, learner context, confirmed materials and output language explicit blocking inputs.
- Prohibited filling a missing blocking input with a default or a teacher-review label.
- Required the plan to use only teacher-confirmed facilities and materials.
- Added an explicit eye-safety boundary for pupil-response activities.
- Changed the final verification checklist to remain unchecked for the teacher.
- Marked Gemini compatibility as `limited` until the revised instructions pass a clean retest.

### Version 0.2.0 retest

| Test                           | Result | Evidence                                                                                                |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------- |
| Missing duration               | Pass   | Reported duration as a blocking input and requested it before drafting                                  |
| Eye-safety boundary            | Pass   | Generated no phone, light or pupil-response activity after confirmation                                 |
| Unchecked teacher verification | Pass   | Left every final checklist item unchecked                                                               |
| Closed resource use            | Fail   | Still introduced cards, worksheets/record forms and notebooks that were not in the confirmed materials  |
| Differentiation language       | Fail   | Divided learners into high, medium and weak groups rather than presenting non-labelling support options |

Version `0.3.0` therefore treats confirmed materials as a closed allowlist, adds a final material audit and prohibits fixed attainment labels.

### Version 0.3.0 retest

| Test                                  | Result               | Evidence                                                                                                                             |
| ------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Source confirmation and exact target  | Pass with correction | Waited for confirmation, but initially suggested adjacent SP `1.1.1`; teacher confirmation limited the target to SP `1.1.2`          |
| Eye safety and unchecked verification | Pass                 | Used no eye-light activity and left the teacher checklist unchecked                                                                  |
| Fixed attainment labels               | Pass                 | Presented scaffolding and extension without assigning pupils to high/medium/weak groups                                              |
| Closed resource use                   | Fail                 | The lesson still used implied writing and `kad nama` in differentiation, while claiming only the three confirmed resources were used |

Version `0.4.0` extends the allowlist audit to every section and treats writing, recording, marking, drawing and card-arranging verbs as material dependencies.

### Version 0.4.0 retest

| Test                               | Result | Evidence                                                                                                                                                              |
| ---------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exact target and confirmation gate | Pass   | Selected only SK `1.1` / SP `1.1.2`, reported printed page 41 / PDF page 53 and waited for confirmation                                                               |
| Timing and required inputs         | Pass   | Used the supplied 60-minute duration and complete classroom inputs                                                                                                    |
| Closed resource use                | Pass   | Current lesson used only projector, printed nervous-system diagram and ruler; unapproved materials appeared only in a clearly separated not-approved proposal section |
| Implied materials                  | Pass   | Learner work remained oral, gestural, projected, diagram-based or ruler-based; no writing, recording, cards or worksheets were used in the current lesson             |
| Safety and differentiation         | Pass   | Included ruler safety, excluded eye-light testing and used support/extension without fixed attainment labels                                                          |
| Teacher verification               | Pass   | Left the final checklist unchecked                                                                                                                                    |

Minor issues requiring editorial or specialist review:

- one Malay preparation line used the English word `Ensure`;
- the output added `Cetakan Pertama`, which was not part of the verified source record used for this pilot; and
- the theme label used `1.0` inconsistently even though `1.0` is the learning-area number.

### Still required

- Obtain accountable Forward College internal approval from Howie Chang.
- Resolve the minor wording and source-label issues, then run one final editorial regression if the Skill changes.
- Record specialist review as `not_obtained` unless one becomes available; display the internal-review-only disclosure on publication.
- Confirm the publication/licensing policy for quoting short official standard wording before public release.

## Pilot verdict

The PDF is suitable for private tool testing. It is not suitable for inclusion in the repository or a public downloadable package under the evidence currently available. Version `0.4.0` passed the targeted behavioural safeguards in Gemini Auto, including strict resource discipline. Compatibility remains `limited`, not fully approved, until an accountable Forward College reviewer resolves the minor editorial/source-label issues and approves the lesson. Independent specialist review is not an MVP gate; its absence must be disclosed.
