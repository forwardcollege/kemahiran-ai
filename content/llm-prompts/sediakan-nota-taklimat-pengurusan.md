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
audiences: [education_officers_jpn, public_sector, professionals]
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

### Prompt lengkap

```text
Audiens: {{AUDIENS}}
Keputusan diperlukan: {{KEPUTUSAN}}
Fakta dan sumber disahkan: {{FAKTA}}
Pilihan yang dibenarkan: {{PILIHAN}}
Kekangan: {{KEKANGAN}}

Jika keputusan atau fakta utama tiada, tanya dan berhenti. Tulis nota satu halaman: tujuan; isu; konteks; fakta utama dengan sumber; implikasi; pilihan dengan manfaat, risiko dan prasyarat; syor beralasan; keputusan/tindakan diperlukan; dan jurang maklumat. Jangan cipta pilihan, kos, dasar, risiko atau kuasa. Bezakan fakta daripada pertimbangan dan gunakan [PERLU PENGESAHAN] bagi jurang.
```

### Contoh dan batasan

Dalam kes sintetik pemilihan tarikh program, syor hanya menggunakan tarikh dan kekangan yang diberi. Pemilik keputusan mesti mengesahkan fakta, kuasa dan risiko.

## English

### Complete prompt

```text
Audience: {{AUDIENCE}}
Decision required: {{DECISION}}
Verified facts and sources: {{FACTS}}
Permitted options: {{OPTIONS}}
Constraints: {{CONSTRAINTS}}

If the decision or core facts are missing, ask and stop. Write a one-page note: purpose; issue; context; key sourced facts; implications; options with benefits, risks and prerequisites; reasoned recommendation; decision/action required; and information gaps. Do not invent options, costs, policies, risks or authority. Separate fact from judgement and use [CONFIRMATION REQUIRED] for gaps.
```

### Example and limitations

In a synthetic programme-date decision, the recommendation uses only supplied dates and constraints. The decision owner must verify facts, authority and risks.
