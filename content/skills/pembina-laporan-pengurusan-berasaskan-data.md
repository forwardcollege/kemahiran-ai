---
schema_version: 1
id: skill-management-report-001
type: skill
status: approved
slug:
  {
    ms: pembina-laporan-pengurusan-berasaskan-data,
    en: data-informed-management-report-builder,
  }
title:
  {
    ms: Pembina Laporan Pengurusan Berasaskan Data,
    en: Data-Informed Management Report Builder,
  }
summary:
  {
    ms: "Tukar jadual disahkan dan nota operasi kepada laporan pengurusan dengan metrik, perbandingan, batas dan tindakan.",
    en: "Turn verified tables and operating notes into a management report with metrics, comparisons, caveats and actions.",
  }
audiences: [sme_entrepreneurs, professionals]
use_cases: [data_analysis, writing_documents, productivity]
sectors: [sme_business, cross_sector]
categories: [management_reporting]
tags: [management_report, metrics, data_quality, decisions]
tools:
  [
    {
      id: gemini,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Ujian pengiraan dan semakan pengurus diperlukan.,
          en: Calculation testing and manager review are required.,
        },
    },
  ]
difficulty: advanced
intended_output: data_informed_management_report
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
related_ids: [prompt-sales-analysis-001, prompt-management-update-001]
featured: false
search_aliases:
  {
    ms: [laporan data pengurusan, analisis metrik, laporan prestasi],
    en: [data management report, metric analysis, performance report],
  }
skill:
  estimated_minutes: 30
  outcome:
    {
      ms: Laporan pengurusan berjejak dengan pengiraan dan batas data.,
      en: A traceable management report with calculations and data limitations.,
    }
  prerequisites:
    {
      ms: [Jadual disahkan, Definisi metrik, Tempoh perbandingan],
      en: [Verified table, Metric definitions, Comparison period],
    }
  required_inputs:
    - {
        id: data,
        label: { ms: Data berstruktur, en: Structured data },
        required: true,
      }
    - {
        id: metric_definitions,
        label: { ms: Definisi metrik, en: Metric definitions },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-management-report-001/0.2.0/build-data-informed-management-report.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    {
      requirement: optional,
      persistent_references:
        [
          {
            id: metric_dictionary,
            type: metric_definition,
            supplied_by: organisation,
            required: false,
            sensitive: false,
            description:
              {
                ms: Definisi metrik organisasi.,
                en: Organisational metric definitions.,
              },
          },
        ],
      runtime_inputs:
        [{ id: management_data, type: structured_data, sensitive: true }],
      missing_reference_behavior: stop_and_request_source,
    }
  limitations:
    {
      ms: [Tidak membuktikan sebab., Semak formula dan sensitiviti data.],
      en: [Does not prove causation., Verify formulas and data sensitivity.],
    }
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf laporan pengurusan dengan definisi metrik, pengiraan boleh diaudit, perbandingan, pergerakan utama, anomali, batas data dan tindakan yang sepadan dengan bukti.

### Sebelum bermula

Sediakan soalan pengurusan, jadual data, definisi metrik, sasaran atau tempoh perbandingan dan nota operasi yang telah disahkan. Nyahkenal pasti data serta sahkan unit, mata wang dan tempoh.

### Langkah penggunaan

1. Tentukan keputusan yang perlu disokong oleh laporan.
2. Semak struktur data, definisi, nilai hilang, pendua dan jumlah kawalan.
3. Salin arahan di bawah dan berikan data bersama konteks yang disahkan.
4. Semak semula setiap pengiraan dan bezakan fakta daripada hipotesis.
5. Dapatkan pengesahan pengurus terhadap konteks operasi dan tindakan.

### Arahan untuk disalin

```text
Sediakan laporan pengurusan daripada jadual dan nota yang dibekalkan sahaja. Mula dengan audit ringkas: tempoh, unit, mata wang, definisi metrik, nilai hilang, pendua dan jumlah kawalan. Jika definisi atau tempoh perbandingan tiada, tanya dan berhenti.

Soalan pengurusan: {{SOALAN}}
Data: {{DATA}}
Definisi metrik: {{DEFINISI}}
Sasaran/perbandingan: {{SASARAN}}
Nota operasi disahkan: {{NOTA}}

Paparkan ringkasan eksekutif, definisi, pengiraan yang boleh diaudit, perbandingan, pergerakan utama, segmen, anomali, batas data, hipotesis berlabel dan tindakan yang sepadan dengan bukti. Jangan mereka sebab, sasaran, ramalan atau nilai hilang. Bezakan fakta, pengiraan dan hipotesis. Tandakan keputusan yang memerlukan semakan pengurus.
```

### Contoh penggunaan

#### Contoh input

Data jualan sintetik (RM'000): Utara — Jan 120, Feb 126, Mac 132; Selatan — Jan 110, Feb tiada data, Mac 128. Kempen pemasaran bermula pada awal Mac. Tiada sasaran, kos kempen atau bilangan transaksi diberikan.

#### Contoh hasil

**Ringkasan pengurusan**
Jualan Utara meningkat secara konsisten daripada RM120,000 kepada RM132,000 (**+10.0% Jan–Mac**). Jualan Selatan meningkat daripada RM110,000 kepada RM128,000 (**+16.4% Jan–Mac**), tetapi data Februari tiada; oleh itu trend bulanan Selatan dan jumlah suku keseluruhan tidak boleh dikira dengan lengkap.

| Pemerhatian                                  | Pengiraan yang sah                                           | Batas tafsiran                                                                             |
| -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Utara meningkat setiap bulan                 | Jan–Feb +5.0%; Feb–Mac +4.8%                                 | Tiada sasaran untuk menilai sama ada prestasi memenuhi jangkaan.                           |
| Selatan lebih tinggi pada Mac berbanding Jan | +RM18,000; +16.4%                                            | Data Februari hilang, jadi corak pertumbuhan tidak diketahui.                              |
| Kedua-dua wilayah meningkat pada Mac         | Utara +RM6,000 dari Feb; perbandingan Selatan tidak tersedia | Kempen bermula pada Mac, tetapi data ini tidak membuktikan kempen menyebabkan peningkatan. |

**Keputusan yang dicadangkan:** Jangan buat keputusan pelaburan kempen berdasarkan set ini sahaja. Dapatkan data Selatan Februari, sasaran wilayah, kos kempen dan bilangan transaksi; kemudian bandingkan perubahan dengan tempoh atau kumpulan yang munasabah.

### Semakan kualiti

- Tempoh, unit, mata wang dan definisi metrik dinyatakan.
- Pengiraan boleh dijejak kepada data sumber.
- Nilai hilang dan anomali tidak disembunyikan atau direka.
- Fakta, pengiraan, hipotesis dan tindakan dibezakan.

### Batasan dan penggunaan bertanggungjawab

Analisis deskriptif tidak membuktikan sebab atau menjamin ramalan. Pengurus mesti mengesahkan formula, konteks operasi, kerahsiaan, hipotesis dan tindakan sebelum membuat keputusan.

## English

### What you will get

A management-report draft with metric definitions, auditable calculations, comparisons, major movements, anomalies, data limits and evidence-proportionate actions.

### Before you begin

Prepare the management question, data table, metric definitions, targets or comparison periods and verified operating notes. De-identify the data and confirm units, currency and period.

### How to use it

1. Define the decision the report should support.
2. Check data structure, definitions, missing values, duplicates and control totals.
3. Copy the instruction below and supply the data with verified context.
4. Recheck every calculation and separate facts from hypotheses.
5. Obtain manager confirmation of operating context and actions.

### Copyable instruction

```text
Prepare a management report from the supplied table and notes only. Start with a short audit of period, units, currency, metric definitions, missing values, duplicates and control totals. If definitions or comparison period are absent, ask and stop.

Management question: {{QUESTION}}
Data: {{DATA}}
Metric definitions: {{DEFINITIONS}}
Targets/comparators: {{TARGETS}}
Verified operating notes: {{NOTES}}

Provide an executive summary, definitions, auditable calculations, comparisons, major movements, segments, anomalies, data limits, labelled hypotheses and evidence-proportionate actions. Do not invent causes, targets, forecasts or missing values. Separate facts, calculations and hypotheses. Mark decisions requiring manager review.
```

### Worked example

#### Sample input

Synthetic sales data (RM'000): North — Jan 120, Feb 126, Mar 132; South — Jan 110, Feb missing, Mar 128. A marketing campaign began at the start of March. No targets, campaign costs or transaction counts are supplied.

#### Sample output

**Management summary**
North sales rose consistently from RM120,000 to RM132,000 (**+10.0% Jan–Mar**). South sales rose from RM110,000 to RM128,000 (**+16.4% Jan–Mar**), but February is missing; therefore South’s monthly trend and the complete quarterly total cannot be calculated.

| Observation                           | Valid calculation                                          | Interpretation limit                                                                     |
| ------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| North increased each month            | Jan–Feb +5.0%; Feb–Mar +4.8%                               | No target is supplied, so performance against expectation cannot be assessed.            |
| South is higher in March than January | +RM18,000; +16.4%                                          | February is missing, so the growth pattern is unknown.                                   |
| Both regions are higher in March      | North +RM6,000 from February; South comparison unavailable | The campaign began in March, but these figures do not prove that it caused the increase. |

**Recommended decision:** Do not make a campaign-investment decision from this dataset alone. Obtain South’s February data, regional targets, campaign cost and transaction counts, then compare change against a reasonable period or group.

### Quality check

- Periods, units, currency and metric definitions are stated.
- Calculations can be traced to the source data.
- Missing values and anomalies are not hidden or invented.
- Facts, calculations, hypotheses and actions are separated.

### Limitations and responsible use

Descriptive analysis does not establish causation or guarantee forecasts. A manager must verify formulas, operating context, confidentiality, hypotheses and actions before making decisions.
