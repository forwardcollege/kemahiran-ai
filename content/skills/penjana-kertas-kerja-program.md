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
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.1.1
created_at: "2026-10-25"
updated_at: "2026-10-25"
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
      path: /downloads/skills/skill-programme-paper-001/0.1.1/draft-programme-paper.zip,
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

### Langkah

Sediakan tujuan, masalah, peserta sasaran, hasil, tarikh, lokasi, aktiviti, pasukan, bajet diluluskan dan risiko. Jika format organisasi diberi, gunakan strukturnya sahaja—templat bukan bukti fakta program.

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

### Contoh dan semakan

Contoh sintetik: bengkel literasi AI sehari untuk 40 peserta dengan had perbelanjaan tetapi sebut harga belum diterima. Pastikan angka belum sah kekal sebagai tempat letak, jumlah konsisten dan pemilik tindakan dinyatakan.

### Batasan

Draf bukan kelulusan rasmi, komitmen kewangan atau nasihat perolehan. Pegawai mesti menyemak format, kewangan, keselamatan dan dasar.

## English

### Steps

Prepare the purpose, problem, audience, outcomes, dates, venue, activities, team, approved budget and risks. An organisational template supplies structure only; it is not evidence of programme facts.

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

### Example and checks

Synthetic example: a one-day AI-literacy workshop for 40 participants with a spending limit but no quotations. Keep unverified figures as placeholders, reconcile totals and name action owners.

### Limitations

The draft is not official approval, a financial commitment or procurement advice. An officer must verify format, finance, safety and policy.
