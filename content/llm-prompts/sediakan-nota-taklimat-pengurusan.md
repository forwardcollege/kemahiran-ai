---
schema_version: 1
id: prompt-management-brief-001
type: llm_prompt
status: approved
slug:
  {
    ms: sediakan-nota-taklimat-pengurusan,
    en: prepare-a-management-briefing-note,
  }
title:
  {
    ms: Sediakan Nota Taklimat Pengurusan,
    en: Prepare a Management Briefing Note,
  }
summary:
  {
    ms: "Susun maklumat disahkan menjadi nota satu halaman dengan isu, implikasi, pilihan, syor dan keputusan diperlukan.",
    en: "Structure verified information into a one-page note covering issue, implications, options, recommendation and decisions required.",
  }
audiences: [education_officers_jpn, professionals]
use_cases: [writing_documents, administration, productivity]
sectors: [education, public_service, cross_sector]
categories: [management_briefings]
tags: [briefing_note, decision_support, recommendation]
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
intended_output: management_briefing_note
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
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [skill-policy-analysis-001, skill-management-report-001]
featured: false
search_aliases:
  {
    ms: [nota taklimat, nota keputusan, ringkasan eksekutif],
    en: [briefing note, decision note, executive brief],
  }
llm_prompt:
  variables:
    - {
        id: audience,
        token: "{{AUDIENS}}",
        token_en: "{{AUDIENCE}}",
        label: { ms: Audiens nota, en: Briefing audience },
        required: true,
      }
    - {
        id: decision,
        token: "{{KEPUTUSAN}}",
        token_en: "{{DECISION}}",
        label: { ms: Keputusan diperlukan, en: Decision required },
        required: true,
      }
    - {
        id: facts,
        token: "{{FAKTA}}",
        token_en: "{{FACTS}}",
        label: { ms: Fakta disahkan, en: Verified facts },
        required: true,
      }
    - {
        id: options,
        token: "{{PILIHAN}}",
        token_en: "{{OPTIONS}}",
        label: { ms: Pilihan yang dibenarkan, en: Permitted options },
        required: true,
      }
    - {
        id: constraints,
        token: "{{KEKANGAN}}",
        token_en: "{{CONSTRAINTS}}",
        label: { ms: Kekangan keputusan, en: Decision constraints },
        required: false,
      }
  expected_output:
    { ms: Nota taklimat satu halaman., en: One-page briefing note. }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms: [Syor memerlukan kuasa manusia.],
      en: [Recommendations require human authority.],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

### Pemboleh ubah

- `{{AUDIENS}}` — Audiens nota **(Wajib)**.
- `{{KEPUTUSAN}}` — Keputusan diperlukan **(Wajib)**.
- `{{FAKTA}}` — Fakta disahkan **(Wajib)**.
- `{{PILIHAN}}` — Pilihan yang dibenarkan **(Wajib)**.
- `{{KEKANGAN}}` — Kekangan keputusan **(Pilihan)**.

### Prompt lengkap

```text
Audiens: {{AUDIENS}}
Keputusan diperlukan: {{KEPUTUSAN}}
Fakta dan sumber disahkan: {{FAKTA}}
Pilihan yang dibenarkan: {{PILIHAN}}
Kekangan: {{KEKANGAN}}

Jika keputusan atau fakta utama tiada, tanya dan berhenti. Tulis nota satu halaman: tujuan; isu; konteks; fakta utama dengan sumber; implikasi; pilihan dengan manfaat, risiko dan prasyarat; syor beralasan; keputusan/tindakan diperlukan; dan jurang maklumat. Jangan cipta pilihan, kos, dasar, risiko atau kuasa. Bezakan fakta daripada pertimbangan dan gunakan [PERLU PENGESAHAN] bagi jurang.
```

### Hasil dijangka

Nota taklimat satu halaman.

### Contoh penggunaan

#### Contoh input

Keputusan diperlukan: pilih tarikh program antara 12 atau 19 November. Fakta: dewan tersedia pada kedua-dua tarikh; fasilitator hanya tersedia pada 19 November. Kekangan: notis minimum dua minggu.

#### Contoh hasil

Nota satu halaman menerangkan keputusan, fakta, pilihan, pertukaran dan syor bersyarat kepada kuasa pemilik keputusan.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Syor memerlukan kuasa manusia.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

### Variables

- `{{AUDIENCE}}` — Briefing audience **(Required)**.
- `{{DECISION}}` — Decision required **(Required)**.
- `{{FACTS}}` — Verified facts **(Required)**.
- `{{OPTIONS}}` — Permitted options **(Required)**.
- `{{CONSTRAINTS}}` — Decision constraints **(Optional)**.

### Complete prompt

```text
Audience: {{AUDIENCE}}
Decision required: {{DECISION}}
Verified facts and sources: {{FACTS}}
Permitted options: {{OPTIONS}}
Constraints: {{CONSTRAINTS}}

If the decision or core facts are missing, ask and stop. Write a one-page note: purpose; issue; context; key sourced facts; implications; options with benefits, risks and prerequisites; reasoned recommendation; decision/action required; and information gaps. Do not invent options, costs, policies, risks or authority. Separate fact from judgement and use [CONFIRMATION REQUIRED] for gaps.
```

### Expected output

One-page briefing note.

### Worked example

#### Sample input

Decision required: choose a programme date between 12 and 19 November. Facts: the hall is available on both dates; the facilitator is only available on 19 November. Constraint: two weeks’ minimum notice.

#### Sample output

The one-page brief explains the decision, facts, options, trade-offs and a recommendation that remains subject to the decision owner’s authority.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Recommendations require human authority.
