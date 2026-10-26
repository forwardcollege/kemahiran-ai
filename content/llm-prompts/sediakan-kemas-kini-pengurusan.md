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

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

### Pemboleh ubah

- `{{TEMPOH}}` — Tempoh laporan **(Wajib)**.
- `{{AUDIENS}}` — Audiens kemas kini **(Wajib)**.
- `{{NOTA_METRIK}}` — Nota dan metrik **(Wajib)**.
- `{{KOMITMEN}}` — Komitmen terdahulu **(Pilihan)**.

### Prompt lengkap

```text
Tempoh dan tarikh potong: {{TEMPOH}}
Audiens: {{AUDIENS}}
Nota pasukan dan metrik disahkan: {{NOTA_METRIK}}
Komitmen terdahulu: {{KOMITMEN}}

Jika tempoh atau bahan sumber tiada, tanya dan berhenti. Hasilkan kemas kini ringkas: ringkasan status; pencapaian dengan bukti; metrik dan perbandingan yang sah; kerja sedang berjalan; risiko/isu dengan kesan dan mitigasi yang dinyatakan; keputusan diperlukan; langkah seterusnya dengan pemilik dan tarikh; serta jurang maklumat. Jangan menukar rancangan kepada pencapaian, mencipta status, pemilik, tarikh, angka atau sebab. Gunakan [PERLU PENGESAHAN] untuk jurang dan kekalkan format konsisten.
```

### Hasil dijangka

Kemas kini pengurusan ringkas.

### Contoh penggunaan

#### Contoh input

Tempoh: minggu berakhir 25 Oktober. Nota sintetik: latihan siap; vendor menjangka integrasi pada Jumaat; dua isu masih terbuka; angka penggunaan belum disahkan.

#### Contoh hasil

**Kemas kini mingguan — minggu berakhir 25 Oktober**

**Status keseluruhan: Kuning — kemajuan dibuat, tetapi dua isu terbuka memerlukan pemantauan.**

- **Selesai:** Sesi latihan yang dirancang telah disempurnakan. Bukti penyelesaian: rekod kehadiran dan bahan latihan `[RUJUKAN PERLU DILAMPIRKAN]`.
- **Sedang berjalan:** Vendor menjangka kerja integrasi pada hari Jumaat. Tarikh ini ialah jangkaan vendor dan belum disahkan sebagai komitmen penghantaran.
- **Risiko/isu:** Dua isu masih terbuka. Nota yang diberikan tidak menyatakan keterukan, pemilik atau tarikh sasaran; maklumat ini perlu diperoleh sebelum status risiko boleh dinilai dengan yakin.
- **Metrik:** Angka penggunaan belum disahkan dan tidak dimasukkan sebagai pencapaian. Sumber, definisi dan tempoh ukuran perlu disahkan dahulu.

**Keputusan atau bantuan diperlukan:** Tetapkan pemilik dan tarikh penyelesaian bagi dua isu terbuka; sahkan sama ada jangkaan integrasi hari Jumaat boleh digunakan dalam perancangan operasi.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Sahkan status
- pemilik dan metrik.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

### Variables

- `{{PERIOD}}` — Reporting period **(Required)**.
- `{{AUDIENCE}}` — Update audience **(Required)**.
- `{{NOTES_METRICS}}` — Notes and metrics **(Required)**.
- `{{COMMITMENTS}}` — Prior commitments **(Optional)**.

### Complete prompt

```text
Period and cut-off date: {{PERIOD}}
Audience: {{AUDIENCE}}
Verified team notes and metrics: {{NOTES_METRICS}}
Prior commitments: {{COMMITMENTS}}

If the period or source material is absent, ask and stop. Produce a concise update: status summary; evidence-backed achievements; metrics and valid comparisons; work in progress; risks/issues with stated impact and mitigation; decisions required; next steps with owners and dates; and information gaps. Do not turn plans into achievements or invent status, owners, dates, numbers or causes. Use [CONFIRMATION REQUIRED] for gaps and keep the format consistent.
```

### Expected output

Concise management update.

### Worked example

#### Sample input

Period: week ending 25 October. Synthetic notes: training completed; vendor expects integration on Friday; two issues remain open; usage figure is unverified.

#### Sample output

**Weekly update — week ending 25 October**

**Overall status: Amber — progress has been made, but two open issues require monitoring.**

- **Completed:** The planned training session has been delivered. Completion evidence: attendance record and training materials `[REFERENCE TO BE ATTACHED]`.
- **In progress:** The vendor expects integration work on Friday. This is a vendor expectation and has not been confirmed as a delivery commitment.
- **Risks/issues:** Two issues remain open. The supplied notes do not state severity, ownership or target dates; these details are needed before risk status can be assessed confidently.
- **Metric:** The usage figure is unverified and is not reported as an achievement. Its source, definition and measurement period must first be confirmed.

**Decision or support required:** Assign owners and resolution dates for both open issues; confirm whether the Friday integration expectation may be used for operational planning.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Verify status
- owners and metrics.
