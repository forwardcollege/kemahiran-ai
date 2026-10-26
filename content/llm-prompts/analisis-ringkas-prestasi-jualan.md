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

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Wajib:** Data jualan yang dibenarkan untuk dianalisis.

### Pemboleh ubah

- `{{SOALAN}}` — Soalan analisis **(Wajib)**.
- `{{DATA_JUALAN}}` — Jadual jualan **(Wajib)**.
- `{{DEFINISI}}` — Definisi medan **(Wajib)**.
- `{{PERBANDINGAN}}` — Perbandingan yang sah **(Wajib)**.

### Prompt lengkap

```text
Soalan analisis: {{SOALAN}}
Data jualan dinyahkenal pasti: {{DATA_JUALAN}}
Definisi medan, unit, mata wang dan tempoh: {{DEFINISI}}
Perbandingan yang sah: {{PERBANDINGAN}}

Jika data atau definisi utama tiada, tanya dan berhenti. Semak dahulu nilai hilang, pendua, unit bercampur dan jumlah kawalan. Tunjukkan formula bagi jumlah, perubahan mutlak, perubahan peratus dan bahagian segmen yang digunakan. Kenal pasti perbandingan disokong, segmen dan anomali. Jangan mengisi nilai hilang atau menyimpulkan sebab. Pisahkan Dapatan, Hipotesis untuk disiasat dan Soalan susulan. Jangan dedahkan data pelanggan atau membuat ramalan tanpa kaedah yang diluluskan.
```

### Hasil dijangka

Analisis jualan dengan pengiraan dan soalan susulan.

### Contoh penggunaan

#### Contoh input

Soalan: Bandingkan jualan suku pertama mengikut wilayah. Data sintetik menunjukkan Utara RM120,000, Tengah RM150,000 dan Selatan RM105,000, dengan definisi hasil bersih yang sama bagi semua wilayah.

#### Contoh hasil

**Ringkasan eksekutif:** Jualan bersih suku pertama berjumlah **RM375,000**. Wilayah Tengah merekodkan nilai tertinggi, manakala Selatan merekodkan nilai terendah. Data ini menunjukkan perbezaan prestasi, tetapi tidak menerangkan puncanya.

| Wilayah | Jualan bersih | Bahagian jumlah | Perbezaan berbanding Tengah |
| ------- | ------------: | --------------: | --------------------------: |
| Tengah  |     RM150,000 |           40.0% |                           — |
| Utara   |     RM120,000 |           32.0% |          -RM30,000 (-20.0%) |
| Selatan |     RM105,000 |           28.0% |          -RM45,000 (-30.0%) |

**Pemerhatian yang disokong data:** Tengah menyumbang dua perlima daripada jumlah jualan. Jurang Tengah–Selatan ialah RM45,000. Tiada kesimpulan boleh dibuat tentang faktor seperti bilangan pelanggan, harga, musim atau prestasi pasukan kerana pemboleh ubah tersebut tidak diberikan.

**Maklumat susulan yang diperlukan:** sasaran setiap wilayah, data tempoh perbandingan, bilangan transaksi dan status data hilang atau pulangan jualan.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Nyahkenal pasti pelanggan dan semak formula.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Required:** Sales data authorised for analysis.

### Variables

- `{{QUESTION}}` — Analysis question **(Required)**.
- `{{SALES_DATA}}` — Sales table **(Required)**.
- `{{DEFINITIONS}}` — Field definitions **(Required)**.
- `{{COMPARATORS}}` — Valid comparators **(Required)**.

### Complete prompt

```text
Analysis question: {{QUESTION}}
De-identified sales data: {{SALES_DATA}}
Field definitions, units, currency and period: {{DEFINITIONS}}
Valid comparators: {{COMPARATORS}}

If the data or core definitions are absent, ask and stop. First check missing values, duplicates, mixed units and control totals. Show formulas used for totals, absolute change, percentage change and segment share. Identify supported comparisons, segments and anomalies. Do not fill gaps or infer causes. Separate Findings, Hypotheses to investigate and Follow-up questions. Do not expose customer data or forecast without an approved method.
```

### Expected output

Sales analysis with calculations and follow-up questions.

### Worked example

#### Sample input

Question: Compare first-quarter sales by region. Synthetic data shows North RM120,000, Central RM150,000 and South RM105,000, using the same net-revenue definition for every region.

#### Sample output

**Executive summary:** First-quarter net sales total **RM375,000**. Central records the highest value and South the lowest. These figures show a performance difference, but they do not explain its cause.

| Region  | Net sales | Share of total | Difference from Central |
| ------- | --------: | -------------: | ----------------------: |
| Central | RM150,000 |          40.0% |                       — |
| North   | RM120,000 |          32.0% |      -RM30,000 (-20.0%) |
| South   | RM105,000 |          28.0% |      -RM45,000 (-30.0%) |

**Evidence-supported observations:** Central contributes two-fifths of total sales. The Central–South gap is RM45,000. No conclusion can be drawn about customer volume, pricing, seasonality or team performance because those variables were not supplied.

**Follow-up information needed:** regional targets, a comparison period, transaction counts, and confirmation of missing data or sales returns.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- De-identify customers and verify formulas.
