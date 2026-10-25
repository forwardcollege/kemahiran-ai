# Education Planning and Assessment Batch Review

Status: Tool testing complete; editorial and publication review pending  
Date: 2026-10-25  
Scope: First six resources produced after the anchor-pattern gate

## Included resources

| ID                                 | Resource                                          | Primary review focus                                                                           | Current status                  |
| ---------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------- |
| skill-dskp-activity-001            | Pereka Aktiviti Pembelajaran Berasaskan DSKP      | Source fidelity, classroom feasibility, closed resource list and non-labelling differentiation | Draft; Gemini `tested`; v0.2.0  |
| skill-assessment-set-001           | Pembina Kuiz, Lembaran Kerja dan Skema Jawapan    | Source fidelity, ambiguity, answer quality, marking and fairness                               | Draft; Gemini `limited`; v0.2.0 |
| prompt-learning-objectives-001     | Tulis Objektif Pembelajaran dan Kriteria Kejayaan | Observable evidence, source boundary and realistic scope                                       | Draft; Gemini `limited`; v0.4.0 |
| prompt-kbat-questions-001          | Jana Soalan KBAT dengan Panduan Jawapan           | Thinking demand, source grounding, acceptable variation and ambiguity                          | Draft; Gemini `tested`; v0.3.0  |
| prompt-differentiated-activity-001 | Pelbagaikan Aktiviti Mengikut Keperluan Murid     | Objective preservation, equivalent evidence, accessibility and non-labelling language          | Draft; Gemini `limited`; v0.5.0 |
| prompt-post-lesson-reflection-001  | Refleksi Selepas Pengajaran                       | Evidence–interpretation separation, privacy, neutral language and realistic next action        | Draft; Gemini `limited`; v0.5.0 |

## Design decisions carried forward

- Bahasa Melayu is the primary version and English remains in the same record.
- A claimed DSKP alignment requires a user-supplied identifiable official source.
- Missing blocking inputs cause the workflow to ask concise questions and stop rather than invent defaults.
- Confirmed time, materials and facilities are treated as constraints rather than suggestions.
- Differentiation uses flexible support and extension choices without fixed ability labels or diagnoses.
- Assessment resources separate the learner version from the answer scheme and do not claim validation or fairness.
- All examples are synthetic and contain no learner identity, record, mark or diagnosis.
- Specialist review is recorded as `not_obtained` for curriculum or assessment resources and must not be presented as endorsement.

## Draft Skill packages

- `packages/skills/design-dskp-aligned-activities/`
- `packages/skills/build-assessment-materials/`

Both packages contain only original generic instructions and a licence manifest. Neither bundles DSKP files, teaching material, examination questions or learner data. Public licence and distribution approval remain pending.

## Gemini test record

Testing used Gemini Auto on 2026-10-25 with synthetic Malay-language fixtures only. No learner data, official documents or private organisational information was transmitted. Each resource received a complete fixture and an incomplete, privacy or source-boundary fixture. Where a first run failed, the instruction was revised and the same scenario was retested.

| Resource                   | Complete fixture                                                                            | Incomplete or boundary fixture                      | Result and remediation                                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DSKP activity Skill        | Confirmed synthetic extract, standard, time, class context and closed material list         | Missing source, time, context and materials         | Initial run invented worksheets, cards and impossible concurrent stations. v0.2.0 imposed a closed material list and equipment-capacity check; retest passed and stopped correctly on the incomplete case.                                                                                                                 |
| Assessment-set Skill       | Synthetic water-cycle passage plus complete assessment specification                        | Missing count, format, time, difficulty and marking | Initial run used outside-source distractors, exposed difficulty labels and overstated audit certainty. v0.2.0 corrected these behaviours; retest respected source terms and stop behaviour, but the deliberately short source still produced weak distractors.                                                             |
| Learning-objectives prompt | Topic-only changes-of-state case with specified evidence                                    | Claimed DSKP alignment without source               | Initial runs invented conditions, processes and activity context. v0.4.0 added explicit unset-condition markers and grouped two-to-four criteria per objective. Source and count gates passed across retests, but combined-response completeness varied.                                                                   |
| KBAT prompt                | Synthetic food-waste passage whose cause was explicitly unknown                             | Missing source                                      | Initial run asked about outside-source factors and overclaimed audit certainty. v0.3.0 produced separate source-grounded items, allowed direct calculation without causal inference, used calibrated audit wording and stopped when the source was absent.                                                                 |
| Differentiation prompt     | Existing reading/comparison activity with closed materials and an unspecified response mode | Named diagnosis or missing objective/activity       | Initial runs added a checklist, writing mode, grouping and extra analytical content. v0.5.0 uses explicit unset markers and keeps the same source and objective; the final three-option output was still not consistently complete, so compatibility remains limited.                                                      |
| Reflection prompt          | De-identified observations, oral evidence and a five-minute constraint                      | Blaming statement with no objective or evidence     | Initial runs invented resources, methods and a single causal explanation. v0.5.0 constrained hypotheses to supplied evidence and uses a teacher-choice marker when no method is provided. Missing input was detected, but strict stop behaviour and combined-output completeness varied, so compatibility remains limited. |

`tested` means the recorded fixtures passed the defined behavioural checks in this model session. `limited` means Gemini can execute the resource but at least one output-quality or instruction-consistency risk remains. Neither label proves curriculum validity, assessment fairness or performance across all Gemini versions. Passing a model test does not constitute Forward College approval or publication permission.

## Remaining human review

- Howie Chang must review the Malay primary copy, English variant, intended outcome and limitations for each record.
- A teacher should review activity feasibility, objective quality, age appropriateness and actual KBAT demand.
- The assessment-set Skill requires particular review of distractor quality, ambiguity, fairness, marking and realistic completion time.
- The differentiation and reflection prompts should remain `limited` unless a later test demonstrates stable complete output or the product presentation clearly communicates the limitation.
- Licence policy and distribution approval remain unresolved; no record or package is publishable yet.

## Publication boundary

All six records remain `status: draft`, with pending licence and accountable editorial approval. Gemini compatibility metadata now reflects the recorded test evidence above. Production may continue in small batches under the approved anchor patterns, but no resource may be presented as published, curriculum-validated, assessment-validated or specialist-reviewed.
