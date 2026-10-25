---
schema_version: 1
id: prompt-circular-actions-001
type: llm_prompt
status: approved
slug:
  {
    ms: ringkaskan-pekeliling-kepada-tindakan-utama,
    en: summarise-a-circular-into-key-actions,
  }
title:
  {
    ms: Ringkaskan Pekeliling kepada Tindakan Utama,
    en: Summarise a Circular into Key Actions,
  }
summary:
  {
    ms: "Tukar petikan pekeliling kepada tujuan, pihak terlibat, tindakan, tarikh dan soalan penjelasan dengan rujukan sumber.",
    en: "Turn a circular extract into purpose, affected parties, actions, dates and clarification questions with source references.",
  }
audiences: [education_officers_jpn, public_sector, professionals]
use_cases: [administration, writing_documents]
sectors: [education, public_service]
categories: [circular_summaries]
tags: [circular, key_actions, deadlines, source_reference]
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
intended_output: circular_action_summary
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
related_ids: [skill-policy-analysis-001]
featured: false
search_aliases:
  {
    ms: [ringkasan pekeliling, tindakan utama dasar],
    en: [circular summary, policy key actions],
  }
llm_prompt:
  variables:
    - {
        id: source,
        token: "{{PEKELILING}}",
        token_en: "{{CIRCULAR}}",
        label: { ms: Petikan atau dokumen, en: Extract or document },
        required: true,
      }
    - {
        id: audience,
        token: "{{UNIT_SASARAN}}",
        token_en: "{{TARGET_UNIT}}",
        label: { ms: Unit sasaran, en: Target unit },
        required: true,
      }
  expected_output:
    {
      ms: Ringkasan tindakan dengan lokasi sumber.,
      en: Action summary with source locations.,
    }
  recommended_capabilities: [long_context, instruction_following]
  sample_included: true
  reference_inputs:
    [
      {
        id: circular,
        type: official_document,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        description:
          {
            ms: Pekeliling rasmi yang diringkaskan.,
            en: Official circular being summarised.,
          },
      },
    ]
  limitations:
    {
      ms: [Sahkan terhadap dokumen rasmi terkini.],
      en: [Verify against the current official document.],
    }
---

## Bahasa Melayu

### Cara menggunakan

Lampirkan pekeliling lengkap atau petikan yang mempunyai nombor halaman/seksyen. Nyatakan unit yang perlu bertindak.

### Prompt lengkap

```text
Gunakan hanya pekeliling berikut: {{PEKELILING}}
Unit/kumpulan sasaran: {{UNIT_SASARAN}}

Jika sumber tiada, tidak boleh dibaca atau tarikh/versi tidak jelas, minta sumber yang betul dan berhenti. Ringkaskan: tujuan; pihak yang dinyatakan; tindakan wajib; tarikh/tempoh; dokumen atau bukti yang perlu disediakan; dan soalan yang memerlukan penjelasan. Sertakan halaman/seksyen bagi setiap perkara. Jangan mereka maksud, skop, pengecualian atau tarikh. Bezakan petikan sumber daripada tafsiran dan tandakan tafsiran [SAHKAN DENGAN PEMILIK DASAR]. Akhiri dengan senarai semak tindakan ringkas.
```

### Contoh dan batasan

Petikan sintetik dengan tarikh penghantaran menghasilkan jadual tindakan, bukannya nasihat undang-undang. Pegawai mesti menyemak keseluruhan dokumen dan pindaan terkini.

## English

### How to use

Attach the complete circular or an extract with page/section references and name the unit expected to act.

### Complete prompt

```text
Use only this circular: {{CIRCULAR}}
Target unit/group: {{TARGET_UNIT}}

If the source is absent, unreadable or its date/version is unclear, request the correct source and stop. Summarise: purpose; named parties; required actions; dates/periods; required documents or evidence; and questions needing clarification. Give a page/section for every point. Do not invent meaning, scope, exceptions or dates. Separate source statements from interpretation and mark interpretation [VERIFY WITH POLICY OWNER]. Finish with a concise action checklist.
```

### Example and limitations

A synthetic extract containing a submission date produces an action table, not legal advice. An officer must check the full document and current amendments.
