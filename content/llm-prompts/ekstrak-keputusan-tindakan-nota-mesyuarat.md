---
schema_version: 1
id: prompt-meeting-actions-001
type: llm_prompt
status: approved
slug:
  {
    ms: ekstrak-keputusan-dan-tindakan-daripada-nota-mesyuarat,
    en: extract-decisions-and-actions-from-meeting-notes,
  }
title:
  {
    ms: Ekstrak Keputusan dan Tindakan daripada Nota Mesyuarat,
    en: Extract Decisions and Actions from Meeting Notes,
  }
summary:
  {
    ms: Tukar nota dinyahkenal pasti kepada daftar keputusan dan tindakan tanpa menghasilkan minit penuh atau meneka pemilik/tarikh.,
    en: Turn de-identified notes into a decision and action register without drafting full minutes or guessing owners/dates.,
  }
audiences: [education_officers_jpn, public_sector, professionals]
use_cases: [administration, productivity]
sectors: [education, public_service, cross_sector]
categories: [meeting_actions]
tags: [meeting_actions, decisions, action_register]
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
intended_output: meeting_action_register
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
related_ids: [skill-meeting-minutes-001]
featured: false
search_aliases:
  {
    ms: [daftar tindakan, keputusan mesyuarat, action item],
    en: [action register, meeting decisions, action items],
  }
llm_prompt:
  variables:
    - {
        id: notes,
        token: "{{NOTA}}",
        token_en: "{{NOTES}}",
        label: { ms: Nota dinyahkenal pasti, en: De-identified notes },
        required: true,
      }
  expected_output:
    { ms: Daftar keputusan dan tindakan., en: Decision and action register. }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs:
    [
      {
        id: meeting_notes,
        type: meeting_notes,
        required: true,
        supply_mode: runtime,
        sensitive: true,
        description:
          {
            ms: Nota mesyuarat yang telah dinyahkenal pasti.,
            en: De-identified meeting notes.,
          },
      },
    ]
  limitations: { ms: [Bukan minit rasmi.], en: [Not official minutes.] }
---

## Bahasa Melayu

### Prompt lengkap

```text
Ekstrak hanya keputusan dan tindakan daripada nota dinyahkenal pasti ini: {{NOTA}}

Jika nota tiada, berhenti dan minta nota. Jika nota mengandungi data peribadi atau sulit yang tidak perlu, jangan ulang; minta versi disunting. Hasilkan jadual: topik, keputusan yang dinyatakan, tindakan, pemilik, tarikh sasaran, status maklumat dan petikan bukti ringkas. Gunakan [PERLU PENGESAHAN] apabila keputusan, pemilik atau tarikh tidak jelas. Jangan menukar cadangan kepada keputusan, perbincangan kepada komitmen, atau meneka individu. Senaraikan konflik dan perkara belum selesai selepas jadual.
```

### Contoh dan batasan

Nota sintetik “cadangan akan dibawa kepada pengarah” bukan keputusan yang diluluskan. Daftar ini mesti disahkan oleh pengerusi atau urus setia.

## English

### Complete prompt

```text
Extract only decisions and actions from these de-identified notes: {{NOTES}}

If notes are missing, stop and request them. If they contain unnecessary personal or confidential data, do not repeat it; request a redacted version. Produce a table: topic, stated decision, action, owner, target date, information status and short evidence extract. Use [CONFIRMATION REQUIRED] when a decision, owner or date is unclear. Do not turn a proposal into a decision, discussion into a commitment, or guess a person. List conflicts and unresolved items after the table.
```

### Example and limitations

The synthetic note “proposal will be taken to the director” is not an approved decision. The chair or secretariat must verify this register.
