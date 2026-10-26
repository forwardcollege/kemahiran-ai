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
audiences: [education_officers_jpn, professionals]
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

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Wajib:** Nota mesyuarat yang telah dinyahkenal pasti.

### Pemboleh ubah

- `{{NOTA}}` — Nota dinyahkenal pasti **(Wajib)**.

### Prompt lengkap

```text
Ekstrak hanya keputusan dan tindakan daripada nota dinyahkenal pasti ini: {{NOTA}}

Jika nota tiada, berhenti dan minta nota. Jika nota mengandungi data peribadi atau sulit yang tidak perlu, jangan ulang; minta versi disunting. Hasilkan jadual: topik, keputusan yang dinyatakan, tindakan, pemilik, tarikh sasaran, status maklumat dan petikan bukti ringkas. Gunakan [PERLU PENGESAHAN] apabila keputusan, pemilik atau tarikh tidak jelas. Jangan menukar cadangan kepada keputusan, perbincangan kepada komitmen, atau meneka individu. Senaraikan konflik dan perkara belum selesai selepas jadual.
```

### Hasil dijangka

Daftar keputusan dan tindakan.

### Contoh penggunaan

#### Contoh input

Nota sintetik: Tarikh bengkel dicadangkan pada 12 November tertakluk pada pengesahan dewan. Aina akan menyemak ketersediaan dewan sebelum 30 Oktober.

#### Contoh hasil

| Item               | Klasifikasi | Keputusan atau tindakan                                                                  | Pemilik | Tarikh akhir | Status bukti            |
| ------------------ | ----------- | ---------------------------------------------------------------------------------------- | ------- | ------------ | ----------------------- |
| Tarikh bengkel     | Cadangan    | 12 November dicadangkan, tetapi belum diluluskan kerana tertakluk pada pengesahan dewan. | —       | —            | Belum menjadi keputusan |
| Ketersediaan dewan | Tindakan    | Semak dan sahkan ketersediaan dewan.                                                     | Aina    | 30 Oktober   | Disokong oleh nota      |

**Perkara yang belum dapat dipastikan:** Nota tidak menyatakan siapa yang mempunyai kuasa meluluskan tarikh bengkel atau bila keputusan akhir perlu dibuat.

**Soalan susulan:** Siapakah pemilik keputusan akhir bagi tarikh bengkel selepas status dewan disahkan?

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Bukan minit rasmi.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Required:** De-identified meeting notes.

### Variables

- `{{NOTES}}` — De-identified notes **(Required)**.

### Complete prompt

```text
Extract only decisions and actions from these de-identified notes: {{NOTES}}

If notes are missing, stop and request them. If they contain unnecessary personal or confidential data, do not repeat it; request a redacted version. Produce a table: topic, stated decision, action, owner, target date, information status and short evidence extract. Use [CONFIRMATION REQUIRED] when a decision, owner or date is unclear. Do not turn a proposal into a decision, discussion into a commitment, or guess a person. List conflicts and unresolved items after the table.
```

### Expected output

Decision and action register.

### Worked example

#### Sample input

Synthetic note: The workshop is proposed for 12 November, subject to venue confirmation. Aina will check venue availability by 30 October.

#### Sample output

| Item               | Classification | Decision or action                                                                 | Owner | Due date   | Evidence status       |
| ------------------ | -------------- | ---------------------------------------------------------------------------------- | ----- | ---------- | --------------------- |
| Workshop date      | Proposal       | 12 November is proposed but not approved because it depends on venue confirmation. | —     | —          | Not a decision yet    |
| Venue availability | Action         | Check and confirm whether the hall is available.                                   | Aina  | 30 October | Supported by the note |

**Unresolved matter:** The note does not identify who has authority to approve the workshop date or when the final decision must be made.

**Follow-up question:** Who owns the final decision on the workshop date after the venue status is confirmed?

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Not official minutes.
