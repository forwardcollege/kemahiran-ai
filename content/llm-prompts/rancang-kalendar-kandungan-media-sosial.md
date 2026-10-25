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
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.1.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
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

### Contoh dan batasan

Pasukan satu orang yang mampu dua hantaran seminggu tidak patut menerima jadual harian. Pemilik jenama mesti meluluskan tuntutan, visual dan penerbitan.

## English

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

### Example and limitations

A one-person team able to publish twice weekly should not receive a daily schedule. The brand owner must approve claims, visuals and publication.
