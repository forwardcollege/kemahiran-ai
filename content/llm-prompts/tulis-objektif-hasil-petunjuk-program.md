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
audiences: [education_officers_jpn, professionals]
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
curator: { name: Forward College }
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
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
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

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

### Pemboleh ubah

- `{{IDEA_PROGRAM}}` — Idea program **(Wajib)**.
- `{{KUMPULAN_SASARAN}}` — Kumpulan sasaran **(Wajib)**.
- `{{AKTIVITI}}` — Aktiviti dirancang **(Wajib)**.
- `{{BUKTI_TERSEDIA}}` — Bukti tersedia **(Wajib)**.
- `{{TEMPOH}}` — Tempoh program **(Wajib)**.

### Prompt lengkap

```text
Idea program: {{IDEA_PROGRAM}}
Kumpulan sasaran: {{KUMPULAN_SASARAN}}
Aktiviti dirancang: {{AKTIVITI}}
Bukti dan kapasiti pengukuran tersedia: {{BUKTI_TERSEDIA}}
Tempoh: {{TEMPOH}}

Jika matlamat, kumpulan sasaran atau bukti tersedia tiada, tanya dan berhenti. Bezakan objektif, aktiviti, output dan hasil; jangan melabel kehadiran sebagai impak. Bina jadual dengan pernyataan, petunjuk, definisi, sumber data, kekerapan, garis dasar, sasaran dan pemilik. Jangan cipta garis dasar atau sasaran. Tandakan petunjuk yang tidak boleh diukur dengan sumber sedia ada [TIDAK BOLEH DIUKUR SEKARANG] dan cadangkan soalan keputusan, bukan angka rekaan. Nyatakan had atribusi.
```

### Hasil dijangka

Rangka objektif-output-hasil-petunjuk.

### Contoh penggunaan

#### Contoh input

Idea: bengkel literasi digital untuk 40 guru selama satu hari. Aktiviti: demonstrasi dan latihan amali. Bukti tersedia: kehadiran, hasil tugasan dan soal selidik sebelum/selepas.

#### Contoh hasil

**Objektif program**
Meningkatkan keupayaan 40 guru menggunakan amalan asas literasi digital untuk menghasilkan satu bahan pengajaran yang sesuai digunakan dalam konteks kelas masing-masing.

| Aras                           | Pernyataan                                                                                                       | Petunjuk                                                                            | Sumber bukti                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Output                         | Bengkel sehari dengan demonstrasi dan latihan amali disampaikan kepada kumpulan sasaran.                         | Bilangan peserta hadir; bilangan peserta yang menyiapkan tugasan amali.             | Rekod kehadiran; fail tugasan.                                                |
| Hasil segera                   | Peserta dapat menerangkan prinsip asas dan menghasilkan bahan yang memenuhi kriteria minimum pada akhir bengkel. | Perubahan skor soal selidik pra/pasca; peratus tugasan yang memenuhi senarai semak. | Soal selidik pra/pasca; semakan tugasan menggunakan kriteria yang diluluskan. |
| Hasil susulan yang dicadangkan | Peserta mencuba bahan tersebut dalam pengajaran selepas bengkel.                                                 | Peratus peserta yang melaporkan percubaan dalam tempoh yang ditetapkan.             | Soal selidik susulan atau log penggunaan **jika kutipan susulan diluluskan**. |

**Batas tuntutan:** Kehadiran dan tugasan akhir tidak membuktikan perubahan amalan tempat kerja atau impak terhadap murid. Hasil susulan hanya boleh dilaporkan jika data susulan benar-benar dikumpulkan.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Petunjuk bukan bukti impak dengan sendirinya.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

### Variables

- `{{PROGRAMME_IDEA}}` — Programme idea **(Required)**.
- `{{TARGET_GROUP}}` — Target group **(Required)**.
- `{{ACTIVITIES}}` — Planned activities **(Required)**.
- `{{AVAILABLE_EVIDENCE}}` — Available evidence **(Required)**.
- `{{PERIOD}}` — Programme period **(Required)**.

### Complete prompt

```text
Programme idea: {{PROGRAMME_IDEA}}
Target group: {{TARGET_GROUP}}
Planned activities: {{ACTIVITIES}}
Available evidence and measurement capacity: {{AVAILABLE_EVIDENCE}}
Period: {{PERIOD}}

If the goal, target group or available evidence is missing, ask and stop. Separate objectives, activities, outputs and outcomes; do not label attendance as impact. Build a table with statement, indicator, definition, data source, frequency, baseline, target and owner. Do not invent baselines or targets. Mark indicators unsupported by current sources [NOT CURRENTLY MEASURABLE] and propose decision questions rather than fabricated numbers. State attribution limits.
```

### Expected output

Objective-output-outcome-indicator framework.

### Worked example

#### Sample input

Idea: a one-day digital-literacy workshop for 40 teachers. Activities: demonstration and hands-on practice. Available evidence: attendance, task output and pre/post survey.

#### Sample output

**Programme objective**
Build the capacity of 40 teachers to apply foundational digital-literacy practices by producing one teaching resource suitable for their own classroom context.

| Level                      | Statement                                                                                                                   | Indicator                                                                   | Evidence source                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Output                     | A one-day workshop with demonstration and hands-on practice is delivered to the target group.                               | Number attending; number completing the practical task.                     | Attendance record; task files.                                         |
| Immediate outcome          | Participants can explain the core principles and produce a resource that meets minimum criteria by the end of the workshop. | Change in pre/post survey score; percentage of tasks meeting the checklist. | Pre/post survey; task review using approved criteria.                  |
| Proposed follow-up outcome | Participants try the resource in their teaching after the workshop.                                                         | Percentage reporting a trial within the defined period.                     | Follow-up survey or usage log **if follow-up collection is approved**. |

**Claim boundary:** Attendance and end-of-workshop tasks do not prove workplace-practice change or learner impact. The follow-up outcome may be reported only if follow-up data is actually collected.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Indicators alone do not prove impact.
