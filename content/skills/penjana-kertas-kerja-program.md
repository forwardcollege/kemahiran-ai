---
schema_version: 1
id: skill-programme-paper-001
type: skill
status: approved
slug: { ms: penjana-kertas-kerja-program, en: programme-paper-generator }
title: { ms: Penjana Kertas Kerja Program, en: Programme Paper Generator }
summary:
  {
    ms: "Susun maklumat program yang disahkan menjadi draf kertas kerja dengan tadbir urus, jadual, bajet, risiko dan gerbang kelulusan.",
    en: "Structure verified programme information into a paper covering governance, schedule, budget, risks and approval gates.",
  }
audiences: [education_officers_jpn, professionals]
use_cases: [administration, writing_documents]
sectors: [education, public_service, cross_sector]
categories: [programme_planning]
tags: [programme_paper, kertas_kerja, budget, governance]
tools:
  [
    {
      id: gemini,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Ujian format dan semakan pegawai diperlukan.,
          en: Format testing and officer review are required.,
        },
    },
  ]
difficulty: intermediate
intended_output: programme_paper
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
related_ids: [prompt-programme-outcomes-001, skill-activity-report-001]
featured: false
search_aliases:
  {
    ms: [kertas kerja, cadangan program, bajet program],
    en: [programme paper, programme proposal, programme budget],
  }
skill:
  estimated_minutes: 30
  outcome:
    {
      ms: Draf kertas kerja yang lengkap dengan jurang ditanda untuk keputusan pegawai.,
      en: A complete programme-paper draft with gaps marked for officer decisions.,
    }
  prerequisites:
    {
      ms:
        [
          Matlamat dan penerima manfaat,
          Jadual dan sumber,
          Format organisasi jika ada,
        ],
      en:
        [
          Goal and beneficiaries,
          Schedule and resources,
          Organisational format when available,
        ],
    }
  required_inputs:
    - {
        id: programme_brief,
        label: { ms: Ringkasan program, en: Programme brief },
        required: true,
      }
    - {
        id: constraints,
        label: { ms: Kekangan dan kelulusan, en: Constraints and approvals },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-programme-paper-001/0.2.0/draft-programme-paper.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    {
      requirement: optional,
      persistent_references:
        [
          {
            id: organisation_template,
            type: template,
            supplied_by: organisation,
            required: false,
            sensitive: false,
            description:
              {
                ms: Templat kertas kerja organisasi.,
                en: Organisational programme-paper template.,
              },
          },
        ],
      runtime_inputs:
        [{ id: programme_brief, type: structured_input, sensitive: false }],
      missing_reference_behavior: continue_with_explicit_warning,
    }
  limitations:
    {
      ms: [Bajet dan kelulusan mesti disahkan manusia.],
      en: [Budget and approvals require human confirmation.],
    }
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf kertas kerja yang menyusun rasional, objektif, hasil, pelaksanaan, jadual, tanggungjawab, anggaran kewangan, risiko, pemantauan dan kelulusan yang diperlukan.

### Sebelum bermula

Sediakan tujuan, masalah, peserta sasaran, hasil, tarikh, lokasi, aktiviti, pasukan, bajet diluluskan dan risiko. Jika format organisasi diberi, gunakan strukturnya sahaja—templat bukan bukti fakta program.

### Langkah penggunaan

1. Lengkapkan brief program dan kenal pasti pihak pelulus.
2. Bezakan fakta yang disahkan, had yang diluluskan dan jurang maklumat.
3. Salin arahan di bawah dan jawab soalan penjelasan sebelum draf dijana.
4. Semak keselarasan objektif, aktiviti, jadual, tanggungjawab dan bajet.
5. Dapatkan semakan kewangan, keselamatan, perolehan dan dasar yang berkenaan.

### Arahan untuk disalin

```text
Sediakan draf kertas kerja program daripada fakta yang saya berikan. Jika tujuan, kumpulan sasaran, aktiviti utama, jadual atau pihak pelulus tidak jelas, tanya maksimum lima soalan dan berhenti.

Ringkasan: {{RINGKASAN}}
Peserta dan hasil: {{PESERTA_HASIL}}
Jadual/lokasi: {{JADUAL_LOKASI}}
Pasukan/tadbir urus: {{TADBIR_URUS}}
Bajet diluluskan atau had: {{BAJET}}
Risiko/kekangan: {{RISIKO}}
Format organisasi: {{FORMAT}}

Susun latar belakang, rasional, objektif, hasil, skop, pelaksanaan, jadual, tanggungjawab, anggaran kewangan, risiko, pemantauan dan kelulusan diperlukan. Jangan cipta harga, nombor akaun, penaja, kelulusan, petunjuk atau dasar. Gunakan [PERLU PENGESAHAN] bagi jurang dan asingkan andaian daripada fakta.
```

### Contoh penggunaan

#### Contoh input

Program sintetik: bengkel literasi AI sehari untuk 40 peserta. Had perbelanjaan diluluskan: RM8,000. Tempat, fasilitator dan makan minum memerlukan sebut harga; tiada sebut harga diterima. Tujuan: membina penggunaan AI yang praktikal dan bertanggungjawab.

#### Contoh hasil

**1. Tujuan**
Kertas kerja ini memohon pertimbangan untuk melaksanakan bengkel literasi AI sehari bagi 40 peserta, dengan fokus pada penggunaan praktikal, semakan hasil dan pengendalian maklumat secara bertanggungjawab.

**2. Objektif**

1. Membolehkan peserta menerangkan sekurang-kurangnya tiga prinsip penggunaan AI yang bertanggungjawab.
2. Membolehkan peserta menyiapkan satu latihan aliran kerja menggunakan data sintetik atau dinyahkenal pasti.
3. Menghasilkan pelan tindakan individu yang boleh disemak selepas program.

**3. Cadangan pelaksanaan**

- Tarikh/tempat: `[PERLU DISAHKAN]`
- Peserta: 40 orang
- Tempoh: satu hari
- Kaedah: demonstrasi, latihan berpandu, tugasan aplikasi dan refleksi tindakan

**4. Anggaran kewangan**

| Item                 |                    Anggaran | Asas/status                              |
| -------------------- | --------------------------: | ---------------------------------------- |
| Tempat dan peralatan |  `[SEBUT HARGA DIPERLUKAN]` | Pemilik: Urus Setia                      |
| Fasilitator          |  `[SEBUT HARGA DIPERLUKAN]` | Pemilik: Penyelaras Program              |
| Makan minum          |  `[SEBUT HARGA DIPERLUKAN]` | Pemilik: Urus Setia                      |
| Bahan peserta        | `[ANGGARAN PERLU DISAHKAN]` | Berdasarkan 40 peserta                   |
| **Jumlah maksimum**  |  **Tidak melebihi RM8,000** | Had diluluskan; bukan anggaran kos akhir |

**5. Kelulusan diperlukan**
Kelulusan konsep program dan kebenaran mendapatkan sebut harga. Komitmen perbelanjaan hanya dibuat selepas sebut harga, pemilihan pembekal dan kuasa kewangan disahkan.

### Semakan kualiti

- Rasional, objektif, aktiviti dan hasil saling berkait.
- Jadual, tanggungjawab dan keperluan sumber konsisten.
- Angka yang belum disahkan kekal sebagai tempat letak dan jumlah dikira semula.
- Risiko, tindakan kawalan, pemilik dan kelulusan dinyatakan.

### Batasan dan penggunaan bertanggungjawab

Draf bukan kelulusan rasmi, komitmen kewangan atau nasihat perolehan. Pegawai mesti menyemak format, kewangan, keselamatan dan dasar.

## English

### What you will get

A programme-paper draft covering rationale, objectives, outcomes, delivery, schedule, responsibilities, financial estimate, risks, monitoring and required approvals.

### Before you begin

Prepare the purpose, problem, audience, outcomes, dates, venue, activities, team, approved budget and risks. An organisational template supplies structure only; it is not evidence of programme facts.

### How to use it

1. Complete the programme brief and identify the approving authority.
2. Separate verified facts, approved limits and information gaps.
3. Copy the instruction below and answer clarification questions before drafting.
4. Check alignment across objectives, activities, schedule, responsibilities and budget.
5. Obtain relevant finance, safety, procurement and policy review.

### Copyable instruction

```text
Draft a programme paper from facts I supply. If the purpose, audience, core activities, schedule or approving authority is unclear, ask at most five questions and stop.

Brief: {{BRIEF}}
Participants and outcomes: {{PARTICIPANTS_OUTCOMES}}
Schedule/venue: {{SCHEDULE_VENUE}}
Team/governance: {{GOVERNANCE}}
Approved budget or limit: {{BUDGET}}
Risks/constraints: {{RISKS}}
Organisational format: {{FORMAT}}

Structure the background, rationale, objectives, outcomes, scope, delivery, schedule, responsibilities, financial estimate, risks, monitoring and approvals required. Do not invent prices, bank details, sponsors, approvals, indicators or policies. Use [CONFIRMATION REQUIRED] for gaps and separate assumptions from facts.
```

### Worked example

#### Sample input

Synthetic programme: a one-day AI-literacy workshop for 40 participants. Approved spending ceiling: RM8,000. Venue, facilitator and catering require quotations; none has been received. Purpose: build practical and responsible AI use.

#### Sample output

**1. Purpose**
This paper seeks consideration for a one-day AI-literacy workshop for 40 participants, focused on practical use, output review and responsible information handling.

**2. Objectives**

1. Enable participants to explain at least three responsible-AI principles.
2. Enable participants to complete one workflow exercise using synthetic or de-identified data.
3. Produce an individual action plan for post-programme review.

**3. Proposed delivery**

- Date/venue: `[CONFIRMATION REQUIRED]`
- Participants: 40
- Duration: one day
- Method: demonstration, guided practice, application task and action reflection

**4. Financial estimate**

| Item                  |                     Estimate | Basis/status                                |
| --------------------- | ---------------------------: | ------------------------------------------- |
| Venue and equipment   |       `[QUOTATION REQUIRED]` | Owner: Secretariat                          |
| Facilitator           |       `[QUOTATION REQUIRED]` | Owner: Programme Coordinator                |
| Catering              |       `[QUOTATION REQUIRED]` | Owner: Secretariat                          |
| Participant materials | `[ESTIMATE TO BE CONFIRMED]` | Based on 40 participants                    |
| **Maximum total**     |    **Not more than RM8,000** | Approved ceiling; not a final cost estimate |

**5. Approval required**
Approval of the programme concept and permission to obtain quotations. No spending commitment is made until quotations, supplier selection and financial authority are confirmed.

### Quality check

- Rationale, objectives, activities and outcomes align.
- Schedule, responsibilities and resource needs are consistent.
- Unverified figures remain placeholders and totals are recalculated.
- Risks, controls, owners and required approvals are stated.

### Limitations and responsible use

The draft is not official approval, a financial commitment or procurement advice. An officer must verify format, finance, safety and policy.
