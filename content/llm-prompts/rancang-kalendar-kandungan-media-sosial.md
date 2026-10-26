---
schema_version: 1
id: prompt-social-calendar-001
type: llm_prompt
status: approved
slug:
  {
    ms: rancang-kalendar-kandungan-media-sosial,
    en: plan-a-social-media-content-calendar,
  }
title:
  {
    ms: Rancang Kalendar Kandungan Media Sosial,
    en: Plan a Social-Media Content Calendar,
  }
summary:
  {
    ms: "Bina kalendar kandungan berbilang minggu daripada matlamat, audiens, saluran, kapasiti dan tuntutan yang diluluskan.",
    en: "Build a multi-week calendar from goals, audience, channels, capacity and approved claims.",
  }
audiences: [sme_entrepreneurs, professionals]
use_cases: [marketing, communication, productivity]
sectors: [sme_business, cross_sector]
categories: [social_media_planning]
tags: [content_calendar, social_media, campaign, capacity]
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
intended_output: social_media_content_calendar
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
related_ids: [visual-social-campaign-001]
featured: false
search_aliases:
  {
    ms: [kalendar kandungan, jadual media sosial, pelan kempen],
    en: [content calendar, social schedule, campaign plan],
  }
llm_prompt:
  variables:
    - {
        id: goal,
        token: "{{MATLAMAT}}",
        token_en: "{{GOAL}}",
        label: { ms: Matlamat kempen, en: Campaign goal },
        required: true,
      }
    - {
        id: audience,
        token: "{{AUDIENS}}",
        token_en: "{{AUDIENCE}}",
        label: { ms: Audiens sasaran, en: Target audience },
        required: true,
      }
    - {
        id: channels,
        token: "{{SALURAN}}",
        token_en: "{{CHANNELS}}",
        label: { ms: Saluran, en: Channels },
        required: true,
      }
    - {
        id: period,
        token: "{{TEMPOH}}",
        token_en: "{{PERIOD}}",
        label: { ms: Tempoh dan kekerapan, en: Period and frequency },
        required: true,
      }
    - {
        id: capacity,
        token: "{{KAPASITI}}",
        token_en: "{{CAPACITY}}",
        label: { ms: Kapasiti pengeluaran, en: Production capacity },
        required: true,
      }
    - {
        id: approved_material,
        token: "{{BAHAN_DILULUSKAN}}",
        token_en: "{{APPROVED_MATERIAL}}",
        label:
          { ms: Tema dan tuntutan diluluskan, en: Approved themes and claims },
        required: true,
      }
  expected_output:
    { ms: Kalendar kandungan realistik., en: Realistic content calendar. }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms: [Semak tuntutan, hak cipta dan garis panduan platform.],
      en: [Review claims, copyright and platform rules.],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

### Pemboleh ubah

- `{{MATLAMAT}}` — Matlamat kempen **(Wajib)**.
- `{{AUDIENS}}` — Audiens sasaran **(Wajib)**.
- `{{SALURAN}}` — Saluran **(Wajib)**.
- `{{TEMPOH}}` — Tempoh dan kekerapan **(Wajib)**.
- `{{KAPASITI}}` — Kapasiti pengeluaran **(Wajib)**.
- `{{BAHAN_DILULUSKAN}}` — Tema dan tuntutan diluluskan **(Wajib)**.

### Prompt lengkap

```text
Matlamat: {{MATLAMAT}}
Audiens: {{AUDIENS}}
Saluran: {{SALURAN}}
Tempoh/kekerapan: {{TEMPOH}}
Kapasiti pasukan: {{KAPASITI}}
Tema, tawaran dan tuntutan diluluskan: {{BAHAN_DILULUSKAN}}

Jika matlamat, audiens, saluran atau kapasiti tiada, tanya dan berhenti. Bina kalendar realistik dengan tarikh/minggu, objektif kandungan, tema, format, mesej utama, CTA, aset diperlukan, pemilik, status kelulusan dan metrik yang sesuai. Gunakan hanya tuntutan yang diluluskan. Jangan cipta testimoni, harga, promosi, hasil dijamin, trend atau statistik. Seimbangkan pendidikan, bukti, interaksi dan tindakan; nyatakan penggunaan semula aset untuk mengurangkan beban.
```

### Hasil dijangka

Kalendar kandungan realistik.

### Contoh penggunaan

#### Contoh input

Matlamat: mempromosikan bengkel perniagaan empat minggu. Audiens: pemilik SME baharu. Saluran: Instagram dan Facebook. Kapasiti: satu orang, maksimum dua hantaran seminggu. Bahan diluluskan: tarikh, hasil bengkel dan testimoni sintetik.

#### Contoh hasil

Kalendar empat minggu mengehadkan penerbitan kepada dua hantaran seminggu, memadankan format dengan saluran dan menandakan tuntutan serta visual untuk kelulusan manusia.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Semak tuntutan
- hak cipta dan garis panduan platform.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

### Variables

- `{{GOAL}}` — Campaign goal **(Required)**.
- `{{AUDIENCE}}` — Target audience **(Required)**.
- `{{CHANNELS}}` — Channels **(Required)**.
- `{{PERIOD}}` — Period and frequency **(Required)**.
- `{{CAPACITY}}` — Production capacity **(Required)**.
- `{{APPROVED_MATERIAL}}` — Approved themes and claims **(Required)**.

### Complete prompt

```text
Goal: {{GOAL}}
Audience: {{AUDIENCE}}
Channels: {{CHANNELS}}
Period/frequency: {{PERIOD}}
Team capacity: {{CAPACITY}}
Approved themes, offer and claims: {{APPROVED_MATERIAL}}

If the goal, audience, channels or capacity is absent, ask and stop. Build a realistic calendar with date/week, content objective, theme, format, key message, CTA, needed assets, owner, approval status and suitable metric. Use approved claims only. Do not invent testimonials, prices, promotions, guaranteed outcomes, trends or statistics. Balance education, evidence, interaction and action; identify asset reuse to reduce workload.
```

### Expected output

Realistic content calendar.

### Worked example

#### Sample input

Goal: promote a four-week business workshop. Audience: new SME owners. Channels: Instagram and Facebook. Capacity: one person, no more than two posts weekly. Approved material: dates, workshop outcomes and a synthetic testimonial.

#### Sample output

The four-week calendar limits publishing to two posts per week, matches formats to channels and flags claims and visuals for human approval.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Review claims
- copyright and platform rules.
