---
schema_version: 1
id: prompt-management-update-001
type: llm_prompt
status: approved
slug:
  {
    ms: sediakan-kemas-kini-pengurusan-mingguan-atau-bulanan,
    en: prepare-a-weekly-or-monthly-management-update,
  }
title:
  {
    ms: Sediakan Kemas Kini Pengurusan Mingguan atau Bulanan,
    en: Prepare a Weekly or Monthly Management Update,
  }
summary:
  {
    ms: "Tukar nota pasukan dan metrik disahkan kepada kemas kini konsisten tentang kemajuan, risiko, keputusan dan langkah seterusnya.",
    en: "Turn team notes and verified metrics into a consistent update on progress, risks, decisions and next steps.",
  }
audiences: [professionals, sme_entrepreneurs]
use_cases: [productivity, writing_documents, administration]
sectors: [sme_business, cross_sector]
categories: [management_updates]
tags: [weekly_update, monthly_update, risks, decisions]
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
intended_output: recurring_management_update
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
related_ids: [skill-management-report-001, prompt-sales-analysis-001]
featured: false
search_aliases:
  {
    ms: [laporan mingguan, laporan bulanan, kemas kini pasukan],
    en: [weekly report, monthly report, team update],
  }
llm_prompt:
  variables:
    - {
        id: period,
        token: "{{TEMPOH}}",
        token_en: "{{PERIOD}}",
        label: { ms: Tempoh laporan, en: Reporting period },
        required: true,
      }
    - {
        id: audience,
        token: "{{AUDIENS}}",
        token_en: "{{AUDIENCE}}",
        label: { ms: Audiens kemas kini, en: Update audience },
        required: true,
      }
    - {
        id: notes,
        token: "{{NOTA_METRIK}}",
        token_en: "{{NOTES_METRICS}}",
        label: { ms: Nota dan metrik, en: Notes and metrics },
        required: true,
      }
    - {
        id: commitments,
        token: "{{KOMITMEN}}",
        token_en: "{{COMMITMENTS}}",
        label: { ms: Komitmen terdahulu, en: Prior commitments },
        required: false,
      }
  expected_output:
    { ms: Kemas kini pengurusan ringkas., en: Concise management update. }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms: [Sahkan status, pemilik dan metrik.],
      en: [Verify status, owners and metrics.],
    }
---

## Bahasa Melayu

### Prompt lengkap

```text
Tempoh dan tarikh potong: {{TEMPOH}}
Audiens: {{AUDIENS}}
Nota pasukan dan metrik disahkan: {{NOTA_METRIK}}
Komitmen terdahulu: {{KOMITMEN}}

Jika tempoh atau bahan sumber tiada, tanya dan berhenti. Hasilkan kemas kini ringkas: ringkasan status; pencapaian dengan bukti; metrik dan perbandingan yang sah; kerja sedang berjalan; risiko/isu dengan kesan dan mitigasi yang dinyatakan; keputusan diperlukan; langkah seterusnya dengan pemilik dan tarikh; serta jurang maklumat. Jangan menukar rancangan kepada pencapaian, mencipta status, pemilik, tarikh, angka atau sebab. Gunakan [PERLU PENGESAHAN] untuk jurang dan kekalkan format konsisten.
```

### Contoh dan batasan

Nota sintetik “vendor dijangka siap Jumaat” kekal jangkaan, bukan selesai. Pengurus mesti mengesahkan status, data sensitif dan keputusan.

## English

### Complete prompt

```text
Period and cut-off date: {{PERIOD}}
Audience: {{AUDIENCE}}
Verified team notes and metrics: {{NOTES_METRICS}}
Prior commitments: {{COMMITMENTS}}

If the period or source material is absent, ask and stop. Produce a concise update: status summary; evidence-backed achievements; metrics and valid comparisons; work in progress; risks/issues with stated impact and mitigation; decisions required; next steps with owners and dates; and information gaps. Do not turn plans into achievements or invent status, owners, dates, numbers or causes. Use [CONFIRMATION REQUIRED] for gaps and keep the format consistent.
```

### Example and limitations

The synthetic note “vendor expected to finish Friday” remains an expectation, not completion. A manager must verify status, sensitive data and decisions.
