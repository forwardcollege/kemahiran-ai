---
schema_version: 1
id: prompt-circular-actions-001
type: llm_prompt
status: approved
slug:
  {
    ms: ringkaskan-pekeliling-kepada-tindakan-utama,
    en: summarise-a-circular-into-key-actions,
  }
title:
  {
    ms: Ringkaskan Pekeliling kepada Tindakan Utama,
    en: Summarise a Circular into Key Actions,
  }
summary:
  {
    ms: "Tukar petikan pekeliling kepada tujuan, pihak terlibat, tindakan, tarikh dan soalan penjelasan dengan rujukan sumber.",
    en: "Turn a circular extract into purpose, affected parties, actions, dates and clarification questions with source references.",
  }
audiences: [education_officers_jpn, professionals]
use_cases: [administration, writing_documents]
sectors: [education, public_service]
categories: [circular_summaries]
tags: [circular, key_actions, deadlines, source_reference]
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
difficulty: beginner
intended_output: circular_action_summary
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
related_ids: [skill-policy-analysis-001]
featured: false
search_aliases:
  {
    ms: [ringkasan pekeliling, tindakan utama dasar],
    en: [circular summary, policy key actions],
  }
llm_prompt:
  variables:
    - {
        id: source,
        token: "{{PEKELILING}}",
        token_en: "{{CIRCULAR}}",
        label: { ms: Petikan atau dokumen, en: Extract or document },
        required: true,
      }
    - {
        id: audience,
        token: "{{UNIT_SASARAN}}",
        token_en: "{{TARGET_UNIT}}",
        label: { ms: Unit sasaran, en: Target unit },
        required: true,
      }
  expected_output:
    {
      ms: Ringkasan tindakan dengan lokasi sumber.,
      en: Action summary with source locations.,
    }
  recommended_capabilities: [long_context, instruction_following]
  sample_included: true
  reference_inputs:
    [
      {
        id: circular,
        type: official_document,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        description:
          {
            ms: Pekeliling rasmi yang diringkaskan.,
            en: Official circular being summarised.,
          },
      },
    ]
  limitations:
    {
      ms: [Sahkan terhadap dokumen rasmi terkini.],
      en: [Verify against the current official document.],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Wajib:** Pekeliling rasmi yang diringkaskan.

### Pemboleh ubah

- `{{PEKELILING}}` — Petikan atau dokumen **(Wajib)**.
- `{{UNIT_SASARAN}}` — Unit sasaran **(Wajib)**.

### Prompt lengkap

```text
Gunakan hanya pekeliling berikut: {{PEKELILING}}
Unit/kumpulan sasaran: {{UNIT_SASARAN}}

Jika sumber tiada, tidak boleh dibaca atau tarikh/versi tidak jelas, minta sumber yang betul dan berhenti. Ringkaskan: tujuan; pihak yang dinyatakan; tindakan wajib; tarikh/tempoh; dokumen atau bukti yang perlu disediakan; dan soalan yang memerlukan penjelasan. Sertakan halaman/seksyen bagi setiap perkara. Jangan mereka maksud, skop, pengecualian atau tarikh. Bezakan petikan sumber daripada tafsiran dan tandakan tafsiran [SAHKAN DENGAN PEMILIK DASAR]. Akhiri dengan senarai semak tindakan ringkas.
```

### Hasil dijangka

Ringkasan tindakan dengan lokasi sumber.

### Contoh penggunaan

#### Contoh input

Petikan pekeliling sintetik menyatakan laporan perlu dihantar sebelum 15 November oleh semua unit. Unit sasaran ialah Pentadbiran. Nombor halaman disertakan.

#### Contoh hasil

Ringkasan menghasilkan tindakan, pemilik, tarikh akhir dan lokasi sumber, serta menandakan perkara yang perlu disemak terhadap dokumen penuh dan pindaan terkini.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Sahkan terhadap dokumen rasmi terkini.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Required:** Official circular being summarised.

### Variables

- `{{CIRCULAR}}` — Extract or document **(Required)**.
- `{{TARGET_UNIT}}` — Target unit **(Required)**.

### Complete prompt

```text
Use only this circular: {{CIRCULAR}}
Target unit/group: {{TARGET_UNIT}}

If the source is absent, unreadable or its date/version is unclear, request the correct source and stop. Summarise: purpose; named parties; required actions; dates/periods; required documents or evidence; and questions needing clarification. Give a page/section for every point. Do not invent meaning, scope, exceptions or dates. Separate source statements from interpretation and mark interpretation [VERIFY WITH POLICY OWNER]. Finish with a concise action checklist.
```

### Expected output

Action summary with source locations.

### Worked example

#### Sample input

A synthetic circular extract states that every unit must submit a report by 15 November. The target unit is Administration and page numbers are supplied.

#### Sample output

The summary produces the action, owner, deadline and source location, and flags items that must be verified against the full document and latest amendments.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Verify against the current official document.
