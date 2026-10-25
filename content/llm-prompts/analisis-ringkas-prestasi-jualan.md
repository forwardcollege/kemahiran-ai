---
schema_version: 1
id: prompt-sales-analysis-001
type: llm_prompt
status: approved
slug: { ms: analisis-ringkas-prestasi-jualan, en: analyse-sales-performance }
title: { ms: Analisis Ringkas Prestasi Jualan, en: Analyse Sales Performance }
summary:
  {
    ms: "Analisis jadual jualan untuk perbandingan, segmen dan anomali sambil memisahkan bukti daripada hipotesis.",
    en: "Analyse a sales table for comparisons, segments and anomalies while separating evidence from hypotheses.",
  }
audiences: [sme_entrepreneurs, professionals]
use_cases: [data_analysis, productivity]
sectors: [sme_business]
categories: [sales_analysis]
tags: [sales, analysis, metrics, anomalies]
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
intended_output: sales_performance_analysis
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
related_ids: [skill-management-report-001, prompt-management-update-001]
featured: false
search_aliases:
  {
    ms: [prestasi jualan, trend jualan, analisis hasil],
    en: [sales performance, sales trend, revenue analysis],
  }
llm_prompt:
  variables:
    - {
        id: question,
        token: "{{SOALAN}}",
        token_en: "{{QUESTION}}",
        label: { ms: Soalan analisis, en: Analysis question },
        required: true,
      }
    - {
        id: data,
        token: "{{DATA_JUALAN}}",
        token_en: "{{SALES_DATA}}",
        label: { ms: Jadual jualan, en: Sales table },
        required: true,
      }
    - {
        id: definitions,
        token: "{{DEFINISI}}",
        token_en: "{{DEFINITIONS}}",
        label: { ms: Definisi medan, en: Field definitions },
        required: true,
      }
    - {
        id: comparators,
        token: "{{PERBANDINGAN}}",
        token_en: "{{COMPARATORS}}",
        label: { ms: Perbandingan yang sah, en: Valid comparators },
        required: true,
      }
  expected_output:
    {
      ms: Analisis jualan dengan pengiraan dan soalan susulan.,
      en: Sales analysis with calculations and follow-up questions.,
    }
  recommended_capabilities: [data_analysis]
  sample_included: true
  reference_inputs:
    [
      {
        id: sales_table,
        type: structured_data,
        required: true,
        supply_mode: runtime,
        sensitive: true,
        description:
          {
            ms: Data jualan yang dibenarkan untuk dianalisis.,
            en: Sales data authorised for analysis.,
          },
      },
    ]
  limitations:
    {
      ms: [Nyahkenal pasti pelanggan dan semak formula.],
      en: [De-identify customers and verify formulas.],
    }
---

## Bahasa Melayu

### Prompt lengkap

```text
Soalan analisis: {{SOALAN}}
Data jualan dinyahkenal pasti: {{DATA_JUALAN}}
Definisi medan, unit, mata wang dan tempoh: {{DEFINISI}}
Perbandingan yang sah: {{PERBANDINGAN}}

Jika data atau definisi utama tiada, tanya dan berhenti. Semak dahulu nilai hilang, pendua, unit bercampur dan jumlah kawalan. Tunjukkan formula bagi jumlah, perubahan mutlak, perubahan peratus dan bahagian segmen yang digunakan. Kenal pasti perbandingan disokong, segmen dan anomali. Jangan mengisi nilai hilang atau menyimpulkan sebab. Pisahkan Dapatan, Hipotesis untuk disiasat dan Soalan susulan. Jangan dedahkan data pelanggan atau membuat ramalan tanpa kaedah yang diluluskan.
```

### Contoh dan batasan

Jadual sintetik enam bulan boleh menunjukkan penurunan wilayah, tetapi bukan sebabnya. Pemilik data mesti menyemak grain, formula, kerahsiaan dan konteks perniagaan.

## English

### Complete prompt

```text
Analysis question: {{QUESTION}}
De-identified sales data: {{SALES_DATA}}
Field definitions, units, currency and period: {{DEFINITIONS}}
Valid comparators: {{COMPARATORS}}

If the data or core definitions are absent, ask and stop. First check missing values, duplicates, mixed units and control totals. Show formulas used for totals, absolute change, percentage change and segment share. Identify supported comparisons, segments and anomalies. Do not fill gaps or infer causes. Separate Findings, Hypotheses to investigate and Follow-up questions. Do not expose customer data or forecast without an approved method.
```

### Example and limitations

A synthetic six-month table may show a regional decline but not its cause. The data owner must verify grain, formulas, confidentiality and business context.
