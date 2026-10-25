---
schema_version: 1
id: skill-assessment-set-001
type: skill
status: approved
slug:
  {
    ms: pembina-kuiz-lembaran-kerja-dan-skema-jawapan,
    en: quiz-worksheet-and-answer-scheme-builder,
  }
title:
  {
    ms: "Pembina Kuiz, Lembaran Kerja dan Skema Jawapan",
    en: "Quiz, Worksheet and Answer-Scheme Builder",
  }
summary:
  ms: Bina set pentaksiran daripada kandungan yang dibekalkan, kemudian semak liputan, aras kesukaran, jawapan dan kekaburan sebelum menghasilkan versi murid serta skema.
  en: Build an assessment set from supplied content, then check coverage, difficulty, answers and ambiguity before producing learner and answer-scheme versions.
audiences: [teachers_educators]
use_cases: [teaching_learning, writing_documents]
sectors: [education]
categories: [assessment_materials]
tags: [quiz, worksheet, answer_scheme, assessment]
tools:
  - id: gemini
    compatibility: limited
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto v0.2.0 lulus sempadan sumber, versi murid tanpa label kesukaran dan berhenti bagi spesifikasi tidak lengkap. Keserasian kekal terhad kerana sumber ujian yang sangat pendek menghasilkan pengalih perhatian yang lemah; kesahan, keadilan dan masa belum disahkan oleh guru.",
        en: "A Gemini Auto v0.2.0 test passed source boundaries, a learner version without difficulty labels and stopping on an incomplete specification. Compatibility remains limited because the very short test source produced weak distractors; validity, fairness and timing have not been teacher-validated.",
      }
difficulty: intermediate
intended_output: assessment_set
languages: [ms, en]
author: { name: Forward Academy, url: null }
curator: { name: Forward Labs }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Kandungan asal Forward Academy.,
      en: Original Forward Academy content.,
    }
license:
  { id: pending, label: Licence to be confirmed before publication, url: null }
review:
  {
    status: internal_approved,
    organisation: Forward College,
    editorial_reviewer: Howie Chang,
    specialist_review_status: not_obtained,
    specialist_reviewer: null,
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [prompt-kbat-questions-001, skill-rubric-001, skill-rph-001]
featured: false
search_aliases:
  ms: [bina kuiz, jana lembaran kerja, skema jawapan]
  en: [quiz builder, worksheet generator, answer key]
skill:
  estimated_minutes: 20
  outcome:
    ms: Set soalan murid, skema jawapan dan audit kualiti yang boleh disemak guru.
    en: A learner question set, answer scheme and quality audit for teacher review.
  prerequisites:
    ms:
      [
        Kandungan sumber yang dibenarkan,
        Hasil pembelajaran dan tahap,
        Format serta masa pentaksiran,
      ]
    en:
      [
        Authorised source content,
        Learning outcomes and level,
        Assessment format and time,
      ]
  required_inputs:
    - id: source_content
      label: { ms: Kandungan sumber, en: Source content }
      required: true
    - id: learning_target
      label: { ms: Hasil pembelajaran dan tahap, en: Learning target and level }
      required: true
    - id: assessment_specification
      label:
        {
          ms: "Bilangan, format dan aras kesukaran",
          en: "Quantity, format and difficulty",
        }
      required: true
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-assessment-set-001/0.2.0/build-assessment-materials.zip,
      format: skill_md_zip,
      included_files: [SKILL.md, LICENSES.md],
    }
  knowledge:
    requirement: required
    persistent_references:
      - id: curriculum_reference
        type: official_document
        supplied_by: user
        required: false
        sensitive: false
        description:
          {
            ms: DSKP atau spesifikasi pentaksiran apabila penjajaran rasmi dituntut.,
            en: DSKP or assessment specification when official alignment is claimed.,
          }
    runtime_inputs:
      - { id: source_content, type: teaching_material, sensitive: false }
      - {
          id: assessment_specification,
          type: structured_input,
          sensitive: false,
        }
    missing_reference_behavior: stop_and_request_source
  limitations:
    ms:
      [
        Guru mesti menyemak ketepatan dan keadilan.,
        Jangan gunakan data murid sebenar.,
        Jangan tuntut penjajaran DSKP tanpa sumber.,
      ]
    en:
      [
        A teacher must review accuracy and fairness.,
        Do not use real student data.,
        Do not claim DSKP alignment without a source.,
      ]
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Versi murid tanpa jawapan, skema jawapan berasingan, pemetaan soalan kepada hasil pembelajaran dan audit kekaburan, liputan serta aras kesukaran.

### Sebelum bermula

Sediakan kandungan yang dibenarkan, hasil pembelajaran, tahap murid, masa, bilangan dan jenis soalan, agihan kesukaran, bahasa serta bentuk pemarkahan. Jika penjajaran DSKP diperlukan, berikan sumber rasmi yang boleh dikenal pasti.

### Arahan untuk disalin

```text
Anda ialah pembantu pembinaan bahan pentaksiran untuk guru. Gunakan hanya kandungan sumber dan spesifikasi yang saya berikan.

Input:
- Kandungan sumber: {{KANDUNGAN_SUMBER}}
- Hasil pembelajaran/tahap: {{HASIL_DAN_TAHAP}}
- Format, bilangan dan masa: {{SPESIFIKASI}}
- Agihan kesukaran: {{AGIHAN_KESUKARAN}}
- Keperluan bahasa/aksesibiliti: {{KEPERLUAN}}
- Kaedah pemarkahan: {{PEMARKAHAN}}

Jika kandungan, hasil, tahap, bilangan, format atau kaedah pemarkahan penting tiada, tanya maksimum lima soalan dan berhenti. Jangan cipta fakta, jawapan atau rujukan kurikulum daripada ingatan. Jika penjajaran DSKP diminta, kenal pasti sumber dan minta pengesahan standard dahulu.

Proses:
1. Cadangkan pelan liputan yang memetakan setiap soalan kepada hasil dan aras pemikiran.
2. Hasilkan versi murid tanpa jawapan atau petunjuk tersembunyi.
3. Hasilkan skema berasingan dengan jawapan, alasan ringkas, markah dan jawapan alternatif yang sah jika ada.
4. Audit setiap item untuk satu jawapan terbaik atau kriteria terbuka yang jelas, bahasa sesuai tahap, petunjuk tidak sengaja, pendua, bias, fakta di luar sumber dan masa menjawab.
5. Senaraikan pembetulan yang dibuat dan perkara `[PERLU SEMAKAN GURU]`.

Jangan menilai murid sebenar, meramal kebolehan atau menggunakan nama dan respons sebenar. Jangan mendakwa set telah disahkan, adil atau bebas ralat. Akhiri dengan senarai semak guru yang tidak ditanda.

Semua istilah fakta dalam soalan, pilihan jawapan dan skema mesti datang daripada sumber. Jika sumber tidak menyediakan pengalih perhatian objektif yang sah, gunakan format lain atau minta kandungan tambahan; jangan cipta istilah mata pelajaran. Jangan paparkan label `mudah/sederhana/mencabar` pada versi murid kecuali diminta. Dalam audit, gunakan bahasa terhad seperti `tiada isu jelas dikesan dalam draf ini — perlu semakan guru`; jangan nyatakan `tiada kekaburan`, `tiada bias` atau `masa sesuai` sebagai kepastian.
```

### Contoh ringkas

Input sintetik: petikan 500 patah perkataan tentang kitaran air, Tahun 5, 20 minit, enam soalan objektif dan dua soalan respons pendek. Hasil mesti menggunakan hanya petikan itu dan memisahkan kertas murid daripada skema.

### Batasan dan penggunaan bertanggungjawab

Soalan janaan boleh kabur, tersalah aras atau mempunyai lebih daripada satu jawapan munasabah. Guru perlu menyemak semua fakta, bahasa, pemarkahan, aksesibiliti dan kesesuaian sebelum digunakan.

### Pakej kemahiran

Pakej draf menyediakan aliran kerja generik dan contoh sintetik sahaja. Ia tidak mengandungi bahan berhak cipta, soalan peperiksaan sebenar atau data murid.

## English

### What you will get

A learner version without answers, a separate answer scheme, question-to-outcome mapping and an audit of ambiguity, coverage and difficulty.

### Before you begin

Prepare authorised source content, learning outcomes, learner level, time, question count and types, difficulty distribution, language and marking approach. Supply an identifiable official source when DSKP alignment is required.

### Copyable instruction

```text
You are an assessment-material assistant for a teacher. Use only the source content and specification I provide.

Inputs:
- Source content: {{SOURCE_CONTENT}}
- Learning outcomes/level: {{OUTCOMES_AND_LEVEL}}
- Format, quantity and time: {{SPECIFICATION}}
- Difficulty distribution: {{DIFFICULTY}}
- Language/accessibility needs: {{NEEDS}}
- Marking approach: {{MARKING}}

If essential content, outcomes, level, quantity, format or marking information is missing, ask no more than five questions and stop. Do not invent facts, answers or curriculum references from memory. If DSKP alignment is requested, identify the source and obtain confirmation of the standard first.

Process:
1. Propose a coverage plan mapping every item to an outcome and thinking demand.
2. Produce a learner version without answers or accidental clues.
3. Produce a separate scheme with answers, brief rationale, marks and valid alternatives when applicable.
4. Audit each item for one best answer or clear open criteria, level-appropriate language, accidental clues, duplication, bias, facts outside the source and completion time.
5. List corrections made and items marked `[TEACHER REVIEW REQUIRED]`.

Do not assess real learners, predict ability or use real names and responses. Do not claim the set is validated, fair or error-free. Finish with an unchecked teacher checklist.

Every factual term in questions, answer options and the scheme must come from the source. If the source cannot support valid objective distractors, use another format or request more content; do not invent subject terms. Do not display `easy/medium/challenging` labels in the learner version unless requested. In the audit use calibrated wording such as `no obvious issue detected in this draft — teacher review required`; never state `no ambiguity`, `no bias` or `time is suitable` as certainty.
```

### Short example

Synthetic input: a 500-word passage about the water cycle, Year 5, 20 minutes, six objective questions and two short responses. The result must use only that passage and separate the learner paper from the scheme.

### Limitations and responsible use

Generated questions may be ambiguous, mis-levelled or permit multiple reasonable answers. The teacher must review all facts, wording, marking, accessibility and suitability before use.

### Skill package

The draft package provides a generic workflow and synthetic example only. It contains no copyrighted teaching material, real examination questions or learner data.
