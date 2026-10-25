---
schema_version: 1
id: skill-activity-report-001
type: skill
status: approved
slug:
  {
    ms: pembina-laporan-aktiviti-dan-impak,
    en: activity-and-outcome-report-builder,
  }
title:
  {
    ms: Pembina Laporan Aktiviti dan Impak,
    en: Activity and Outcome Report Builder,
  }
summary:
  {
    ms: "Organisasikan bukti program kepada laporan yang memisahkan pelaksanaan, output, hasil, tafsiran dan tindakan susulan.",
    en: "Organise programme evidence into a report separating delivery, outputs, outcomes, interpretation and follow-up.",
  }
audiences: [education_officers_jpn, professionals]
use_cases: [writing_documents, administration, data_analysis]
sectors: [education, public_service, cross_sector]
categories: [outcome_reporting]
tags: [activity_report, outcome_report, evidence, impact]
tools:
  [
    {
      id: gemini,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Ujian bukti dan semakan pegawai diperlukan.,
          en: Evidence testing and officer review are required.,
        },
    },
  ]
difficulty: intermediate
intended_output: activity_outcome_report
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
related_ids: [skill-programme-paper-001, prompt-programme-outcomes-001]
featured: false
search_aliases:
  {
    ms: [laporan program, laporan hasil, laporan impak],
    en: [programme report, outcome report, impact report],
  }
skill:
  estimated_minutes: 25
  outcome:
    {
      ms: Laporan draf berasaskan bukti dengan batas tuntutan yang jelas.,
      en: An evidence-grounded report draft with clear claim limits.,
    }
  prerequisites:
    {
      ms: [Pelan program, Rekod pelaksanaan dan data disahkan],
      en: [Programme plan, Verified delivery records and data],
    }
  required_inputs:
    - {
        id: plan,
        label: { ms: Pelan dan sasaran, en: Plan and targets },
        required: true,
      }
    - {
        id: evidence,
        label: { ms: Bukti pelaksanaan, en: Delivery evidence },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-activity-report-001/0.1.1/build-activity-outcome-report.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    {
      requirement: optional,
      persistent_references: [],
      runtime_inputs:
        [{ id: programme_evidence, type: structured_input, sensitive: true }],
      missing_reference_behavior: stop_and_request_source,
    }
  limitations:
    {
      ms: [Korelasi tidak membuktikan impak., Nyahkenal pasti rekod peserta.],
      en:
        [Correlation does not prove impact., De-identify participant records.],
    }
---

## Bahasa Melayu

### Arahan untuk disalin

```text
Bina laporan aktiviti dan hasil menggunakan hanya pelan, rekod dan data yang saya berikan. Jika sasaran atau bukti pelaksanaan tiada, minta dan berhenti. Jangan ulang maklumat pengenalan peserta.

Pelan/sasaran: {{PELAN}}
Aktiviti sebenar: {{PELAKSANAAN}}
Data penyertaan dan output: {{DATA}}
Bukti hasil: {{BUKTI_HASIL}}
Isu dan susulan: {{ISU_SUSULAN}}

Pisahkan fakta pelaksanaan, output, hasil yang diperhatikan, tafsiran tentatif, batas data, isu, pelajaran dan tindakan susulan. Bandingkan sasaran dengan sebenar hanya apabila unit dan tempoh sepadan. Jangan mereka sebab, testimoni, bilangan, kadar, penjimatan atau impak. Label tuntutan yang belum disokong [BUKTI TIDAK MENCUKUPI]. Akhiri dengan jadual tindakan, pemilik, tarikh dan jurang pengesahan.
```

### Contoh, semakan dan batasan

Contoh sintetik: 38 daripada sasaran 40 hadir dan 30 borang maklum balas diterima. Jangan melaporkan 95% kepuasan tanpa bilangan respons yang sah atau mendakwa program menyebabkan perubahan jangka panjang. Pegawai mesti menyemak sumber, privasi dan semua tuntutan hasil.

## English

### Copyable instruction

```text
Build an activity and outcome report using only the plan, records and data I supply. If targets or delivery evidence are missing, request them and stop. Do not repeat participant-identifying information.

Plan/targets: {{PLAN}}
Actual delivery: {{DELIVERY}}
Participation and output data: {{DATA}}
Outcome evidence: {{OUTCOME_EVIDENCE}}
Issues and follow-up: {{ISSUES_FOLLOW_UP}}

Separate delivery facts, outputs, observed outcomes, tentative interpretation, data limits, issues, lessons and follow-up actions. Compare target with actual only when units and periods match. Do not invent causes, testimonials, counts, rates, savings or impact. Mark unsupported claims [INSUFFICIENT EVIDENCE]. Finish with an action table, owners, dates and confirmation gaps.
```

### Example, checks and limitations

Synthetic example: 38 of 40 targeted participants attended and 30 feedback forms were received. Do not report 95% satisfaction without a valid response count or claim long-term change was caused by the programme. An officer must verify sources, privacy and every outcome claim.
