---
schema_version: 1
id: skill-rubric-001
type: skill
status: approved
slug:
  {
    ms: pembantu-pembinaan-dan-penyelarasan-rubrik,
    en: rubric-design-and-moderation-assistant,
  }
title:
  {
    ms: Pembantu Pembinaan dan Penyelarasan Rubrik,
    en: Rubric Design and Moderation Assistant,
  }
summary:
  {
    ms: Bina rubrik yang boleh digunakan dan uji kejelasan deskriptornya pada respons contoh tanpa mengautomasikan gred akhir.,
    en: Build a usable rubric and test descriptor clarity against sample responses without automating final grades.,
  }
audiences: [teachers_educators]
use_cases: [teaching_learning, writing_documents]
sectors: [education]
categories: [rubric_design]
tags: [rubric, moderation, assessment, fairness]
tools:
  - id: gemini
    compatibility: expected
    tested_on: null
    notes:
      {
        ms: Ujian tingkah laku dan semakan guru diperlukan.,
        en: Behavioural testing and teacher review are required.,
      }
difficulty: intermediate
intended_output: moderated_rubric
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: Kandungan asal Forward College (Malaysia).,
        en: Original Forward College (Malaysia) content.,
      },
  }
license:
  {
    id: cc-by-4.0,
    label: Creative Commons Attribution 4.0 International (CC BY 4.0),
    url: "https://creativecommons.org/licenses/by/4.0/",
  }
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
version: 0.1.1
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [skill-assessment-set-001, skill-student-feedback-001]
featured: false
search_aliases:
  {
    ms: [bina rubrik, deskriptor prestasi, penyelarasan pemarkahan],
    en: [build rubric, performance descriptors, marking moderation],
  }
skill:
  estimated_minutes: 30
  outcome:
    {
      ms: "Rubrik draf, catatan ujian dan isu penyelarasan untuk keputusan guru.",
      en: "A draft rubric, test notes and moderation issues for teacher decisions.",
    }
  prerequisites:
    ms:
      [
        Hasil pembelajaran dan tugasan,
        Dasar pemarkahan yang diluluskan,
        Respons contoh dinyahkenal pasti jika tersedia,
      ]
    en:
      [
        Learning outcomes and task,
        Approved marking policy,
        De-identified sample responses when available,
      ]
  required_inputs:
    - {
        id: learning_outcomes,
        label: { ms: Hasil pembelajaran, en: Learning outcomes },
        required: true,
      }
    - {
        id: task,
        label: { ms: Tugasan yang dinilai, en: Assessed task },
        required: true,
      }
    - {
        id: rubric_structure,
        label: { ms: Struktur rubrik, en: Rubric structure },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-rubric-001/0.1.1/design-moderate-rubrics.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    requirement: optional
    persistent_references:
      - {
          id: assessment_policy,
          type: policy,
          supplied_by: organisation,
          required: false,
          sensitive: false,
          description:
            {
              ms: Dasar atau panduan pentaksiran yang diluluskan.,
              en: Approved assessment policy or guidance.,
            },
        }
    runtime_inputs:
      - {
          id: sample_responses,
          type: deidentified_student_work,
          sensitive: true,
        }
    missing_reference_behavior: continue_with_explicit_warning
  limitations:
    ms:
      [
        Guru membuat keputusan pemarkahan akhir.,
        Gunakan respons contoh yang dinyahkenal pasti sahaja.,
      ]
    en:
      [
        The teacher makes final marking decisions.,
        Use de-identified sample responses only.,
      ]
---

## Bahasa Melayu

### Kegunaan

Gunakan aliran ini untuk membina atau memperkemas rubrik analitik. Ia membantu penyelarasan, bukan menggantikan pertimbangan guru.

### Langkah

1. Berikan hasil pembelajaran, arahan tugasan, tahap murid dan dasar pemarkahan.
2. Tentukan kriteria yang benar-benar dapat dilihat dalam hasil kerja.
3. Pilih bilangan aras prestasi dan markah hanya jika telah diluluskan.
4. Jana deskriptor yang membezakan kualiti, bukan sifat murid.
5. Uji rubrik pada sekurang-kurangnya dua respons contoh tanpa identiti.
6. Catat deskriptor bertindih, bukti yang tidak boleh dinilai dan keputusan guru yang diperlukan.

### Arahan untuk disalin

```text
Anda membantu seorang guru membina dan menyelaras rubrik. Gunakan hanya hasil pembelajaran, tugasan, dasar dan respons contoh yang saya berikan. Jika hasil pembelajaran, tugasan atau struktur rubrik tiada, tanya dan berhenti.

Hasil pembelajaran: {{HASIL_PEMBELAJARAN}}
Tugasan: {{TUGASAN}}
Tahap murid: {{TAHAP}}
Struktur dan markah yang diluluskan: {{STRUKTUR_RUBRIK}}
Dasar/panduan: {{DASAR}}
Respons contoh dinyahkenal pasti: {{RESPONS_CONTOH}}

Bina jadual kriteria dan aras prestasi menggunakan bukti yang boleh diperhatikan. Elakkan kata kabur seperti “baik” tanpa penerangan. Jangan menambah hasil pembelajaran, wajaran atau penalti. Jika respons contoh ada, gunakan rubrik secara tentatif pada setiap respons, jelaskan bukti dan tandakan perbezaan tafsiran. Akhiri dengan isu keadilan, aksesibiliti, pertindihan deskriptor dan keputusan yang mesti dibuat guru. Jangan beri gred akhir kepada murid sebenar.
```

### Contoh dan semakan

Contoh sintetik: rubrik empat aras untuk pembentangan sains berdasarkan ketepatan fakta, penggunaan bukti dan kejelasan penerangan. Semak bahawa setiap aras berbeza secara bermakna, boleh dibuktikan dan tidak menghukum gaya bahasa yang tidak berkaitan dengan hasil.

### Batasan

Rubrik janaan belum disahkan adil atau konsisten. Guru perlu menyemak penjajaran, bahasa, aksesibiliti dan keputusan pemarkahan.

## English

### Intended use

Use this workflow to create or refine an analytic rubric. It supports moderation rather than replacing teacher judgement.

### Steps

1. Supply the learning outcomes, task instructions, learner level and marking policy.
2. Define criteria observable in the work.
3. Use performance levels and marks only when approved.
4. Draft descriptors that distinguish work quality rather than learner traits.
5. Trial the rubric on at least two de-identified sample responses.
6. Record overlaps, unassessable evidence and teacher decisions.

### Copyable instruction

```text
You help a teacher design and moderate a rubric. Use only the learning outcomes, task, policy and sample responses I supply. If the outcomes, task or rubric structure is missing, ask and stop.

Learning outcomes: {{LEARNING_OUTCOMES}}
Task: {{TASK}}
Learner level: {{LEVEL}}
Approved structure and marks: {{RUBRIC_STRUCTURE}}
Policy/guidance: {{POLICY}}
De-identified sample responses: {{SAMPLE_RESPONSES}}

Create a criteria-by-performance-level table using observable evidence. Avoid vague words such as “good” without explanation. Do not add outcomes, weights or penalties. If samples are available, apply the rubric tentatively, cite evidence and flag interpretation differences. Finish with fairness, accessibility, descriptor-overlap and teacher-decision checks. Do not issue final grades for real learners.
```

### Example and checks

Synthetic example: a four-level science-presentation rubric for factual accuracy, evidence and explanatory clarity. Check that levels are meaningfully distinct, evidence-based and do not penalise language style unrelated to the outcome.

### Limitations

An AI-generated rubric is not validated for fairness or reliability. A teacher must verify alignment, language, accessibility and marking decisions.
