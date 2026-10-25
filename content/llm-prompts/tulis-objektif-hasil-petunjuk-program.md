---
schema_version: 1
id: prompt-programme-outcomes-001
type: llm_prompt
status: approved
slug:
  {
    ms: tulis-objektif-hasil-dan-petunjuk-program,
    en: write-programme-objectives-outcomes-and-indicators,
  }
title:
  {
    ms: "Tulis Objektif, Hasil dan Petunjuk Program",
    en: "Write Programme Objectives, Outcomes and Indicators",
  }
summary:
  {
    ms: "Bezakan aktiviti, output dan hasil lalu bina petunjuk yang realistik berdasarkan bukti yang benar-benar tersedia.",
    en: "Separate activities, outputs and outcomes, then create realistic indicators from evidence that is actually available.",
  }
audiences: [education_officers_jpn, public_sector, professionals]
use_cases: [administration, data_analysis]
sectors: [education, public_service, cross_sector]
categories: [programme_measurement]
tags: [programme_objectives, outcomes, indicators, measurement]
tools:
  [
    {
      id: gemini,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Prompt belum diuji dengan Gemini.,
          en: Prompt has not yet been tested with Gemini.,
        },
    },
  ]
difficulty: intermediate
intended_output: programme_results_framework
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: Kandungan asal Forward College.,
        en: Original Forward College content.,
      },
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
version: 0.1.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [skill-programme-paper-001, skill-activity-report-001]
featured: false
search_aliases:
  {
    ms: [objektif program, hasil program, petunjuk prestasi],
    en: [programme objectives, outcomes, indicators],
  }
llm_prompt:
  variables:
    - {
        id: idea,
        token: "{{IDEA_PROGRAM}}",
        token_en: "{{PROGRAMME_IDEA}}",
        label: { ms: Idea program, en: Programme idea },
        required: true,
      }
    - {
        id: target_group,
        token: "{{KUMPULAN_SASARAN}}",
        token_en: "{{TARGET_GROUP}}",
        label: { ms: Kumpulan sasaran, en: Target group },
        required: true,
      }
    - {
        id: activities,
        token: "{{AKTIVITI}}",
        token_en: "{{ACTIVITIES}}",
        label: { ms: Aktiviti dirancang, en: Planned activities },
        required: true,
      }
    - {
        id: evidence,
        token: "{{BUKTI_TERSEDIA}}",
        token_en: "{{AVAILABLE_EVIDENCE}}",
        label: { ms: Bukti tersedia, en: Available evidence },
        required: true,
      }
    - {
        id: period,
        token: "{{TEMPOH}}",
        token_en: "{{PERIOD}}",
        label: { ms: Tempoh program, en: Programme period },
        required: true,
      }
  expected_output:
    {
      ms: Rangka objektif-output-hasil-petunjuk.,
      en: Objective-output-outcome-indicator framework.,
    }
  recommended_capabilities: [reasoning]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms: [Petunjuk bukan bukti impak dengan sendirinya.],
      en: [Indicators alone do not prove impact.],
    }
---

## Bahasa Melayu

### Prompt lengkap

```text
Idea program: {{IDEA_PROGRAM}}
Kumpulan sasaran: {{KUMPULAN_SASARAN}}
Aktiviti dirancang: {{AKTIVITI}}
Bukti dan kapasiti pengukuran tersedia: {{BUKTI_TERSEDIA}}
Tempoh: {{TEMPOH}}

Jika matlamat, kumpulan sasaran atau bukti tersedia tiada, tanya dan berhenti. Bezakan objektif, aktiviti, output dan hasil; jangan melabel kehadiran sebagai impak. Bina jadual dengan pernyataan, petunjuk, definisi, sumber data, kekerapan, garis dasar, sasaran dan pemilik. Jangan cipta garis dasar atau sasaran. Tandakan petunjuk yang tidak boleh diukur dengan sumber sedia ada [TIDAK BOLEH DIUKUR SEKARANG] dan cadangkan soalan keputusan, bukan angka rekaan. Nyatakan had atribusi.
```

### Contoh dan batasan

Program latihan boleh mengukur kehadiran dan skor sebelum/selepas, tetapi tidak boleh mendakwa perubahan tempat kerja tanpa bukti susulan. Pegawai mesti meluluskan definisi, sasaran dan kaedah.

## English

### Complete prompt

```text
Programme idea: {{PROGRAMME_IDEA}}
Target group: {{TARGET_GROUP}}
Planned activities: {{ACTIVITIES}}
Available evidence and measurement capacity: {{AVAILABLE_EVIDENCE}}
Period: {{PERIOD}}

If the goal, target group or available evidence is missing, ask and stop. Separate objectives, activities, outputs and outcomes; do not label attendance as impact. Build a table with statement, indicator, definition, data source, frequency, baseline, target and owner. Do not invent baselines or targets. Mark indicators unsupported by current sources [NOT CURRENTLY MEASURABLE] and propose decision questions rather than fabricated numbers. State attribution limits.
```

### Example and limitations

A training programme may measure attendance and pre/post scores but cannot claim workplace change without follow-up evidence. An officer must approve definitions, targets and methods.
