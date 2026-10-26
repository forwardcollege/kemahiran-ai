---
schema_version: 1
id: prompt-official-letter-001
type: llm_prompt
status: approved
slug: { ms: draf-surat-rasmi, en: draft-formal-official-letter }
title: { ms: Draf Surat Rasmi, en: Draft a Formal Official Letter }
summary:
  ms: Sediakan draf surat rasmi Bahasa Melayu daripada fakta, tujuan, penerima dan tindakan yang telah disahkan tanpa meneka rujukan atau kelulusan.
  en: Prepare a formal Malay-language letter from verified facts, purpose, recipient and action without guessing references or approvals.
audiences: [education_officers_jpn, professionals]
use_cases: [writing_documents, administration, communication]
sectors: [education, public_service, cross_sector]
categories: [official_correspondence]
tags: [official_letter, formal_malay, government_correspondence]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Lulus ujian Gemini Auto bagi surat sintetik lengkap, input wajib tidak lengkap dan gerbang privasi; semakan editorial surat rasmi masih diperlukan.",
        en: "Passed Gemini Auto tests for a complete synthetic letter, missing required input and the privacy gate; official-correspondence editorial review remains required.",
      }
difficulty: beginner
intended_output: formal_official_letter
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Kandungan asal Forward College (Malaysia).,
      en: Original Forward College (Malaysia) content.,
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
featured: true
search_aliases:
  ms: [surat kerajaan, surat formal, surat permohonan rasmi]
  en: [official correspondence, formal letter, government letter]
llm_prompt:
  variables:
    - id: recipient
      token: "{{RECIPIENT}}"
      label: { ms: Penerima dan alamat, en: Recipient and address }
      required: true
      example:
        { ms: Pengarah dan alamat jabatan, en: Director and department address }
    - id: purpose_facts
      token: "{{PURPOSE_FACTS}}"
      label: { ms: Tujuan dan fakta, en: Purpose and facts }
      required: true
      example:
        {
          ms: Permohonan serta tarikh berkaitan,
          en: Request and relevant dates,
        }
    - id: requested_action
      token: "{{REQUESTED_ACTION}}"
      label: { ms: Tindakan yang dimohon, en: Requested action }
      required: true
      example:
        { ms: Pertimbangan dan maklum balas, en: Consideration and response }
    - id: reference_details
      token: "{{REFERENCE_DETAILS}}"
      label:
        { ms: Rujukan dan tarikh disahkan, en: Verified references and dates }
      required: false
      example: { ms: Rujukan fail yang sah, en: Valid file reference }
    - id: attachments_signatory
      token: "{{ATTACHMENTS_SIGNATORY}}"
      label: { ms: Lampiran dan penandatangan, en: Attachments and signatory }
      required: false
      example:
        {
          ms: Senarai lampiran dan jawatan penandatangan,
          en: Attachment list and signatory role,
        }
    - id: organisation_requirements
      token: "{{ORGANISATION_REQUIREMENTS}}"
      label:
        {
          ms: Keperluan format organisasi,
          en: Organisational format requirements,
        }
      required: false
      example: { ms: Frasa dan susunan wajib, en: Required wording and layout }
  expected_output:
    ms: Draf surat rasmi dengan penanda jelas bagi rujukan, tarikh atau kelulusan yang belum disahkan.
    en: A formal letter draft with clear markers for unverified references, dates or approvals.
  recommended_capabilities: [instruction_following, structured_output]
  sample_included: true
  reference_inputs:
    - id: organisation_correspondence_guide
      type: template_or_style_guide
      required: false
      supply_mode: runtime
      sensitive: false
      description:
        ms: Templat surat, kepala surat, frasa wajib atau panduan gaya organisasi.
        en: Organisational letter template, letterhead, required wording or style guide.
  limitations:
    ms:
      [
        Semak format dan frasa wajib organisasi.,
        Jangan cipta nombor rujukan atau kuasa kelulusan.,
        Dapatkan tandatangan pegawai berkuasa.,
      ]
    en:
      [
        Verify organisational format and required wording.,
        Do not invent references or approval authority.,
        Obtain an authorised signatory.,
      ]
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Pilihan:** Templat surat, kepala surat, frasa wajib atau panduan gaya organisasi.

### Pemboleh ubah

- `{{RECIPIENT}}` — Penerima dan alamat **(Wajib)**.
- `{{PURPOSE_FACTS}}` — Tujuan dan fakta **(Wajib)**.
- `{{REQUESTED_ACTION}}` — Tindakan yang dimohon **(Wajib)**.
- `{{REFERENCE_DETAILS}}` — Rujukan dan tarikh disahkan **(Pilihan)**.
- `{{ATTACHMENTS_SIGNATORY}}` — Lampiran dan penandatangan **(Pilihan)**.
- `{{ORGANISATION_REQUIREMENTS}}` — Keperluan format organisasi **(Pilihan)**.

### Prompt lengkap

```text
Anda ialah pembantu penulisan surat rasmi Bahasa Melayu untuk organisasi Malaysia.

Penerima: {{RECIPIENT}}
Rujukan dan tarikh disahkan: {{REFERENCE_DETAILS}}
Tujuan dan fakta: {{PURPOSE_FACTS}}
Tindakan yang dimohon/tarikh akhir: {{REQUESTED_ACTION}}
Lampiran dan penandatangan: {{ATTACHMENTS_SIGNATORY}}
Format atau frasa wajib organisasi: {{ORGANISATION_REQUIREMENTS}}

Semak dahulu bahawa penerima, tujuan/fakta dan tindakan yang dimohon telah diberikan. Jika mana-mana input wajib itu tiada, jangan draf surat; senaraikan maksimum lima maklumat yang diperlukan dan tunggu jawapan. Jika lengkap, sediakan draf surat rasmi dengan perkara/tajuk yang tepat, pembukaan, perenggan bernombor jika sesuai, permohonan atau tindakan yang jelas, penutup dan senarai lampiran. Gunakan bahasa profesional, terus dan sopan.

Gunakan hanya fakta yang diberikan. Jangan mencipta nombor rujukan, nama pegawai, dasar, kelulusan, tarikh, lampiran atau kuasa menandatangani. Tandakan maklumat pilihan yang tiada sebagai `[PERLU PENGESAHAN]` hanya apabila medan itu diperlukan dalam struktur surat. Jangan tambah baris salinan edaran (`s.k.`/`cc`), alamat pengirim, klasifikasi keselamatan, slogan atau frasa wajib jika input atau format organisasi tidak memerlukannya. Jika input masih mengandungi nombor pengenalan, maklumat kes disiplin/kesihatan, butiran hubungan peribadi atau maklumat sulit yang tidak diperlukan, jangan ulang atau proses butiran itu; minta versi yang telah dinyahkenal pasti melalui saluran yang diluluskan. Selepas surat, senaraikan semakan sebelum tandatangan: fakta, rujukan, penerima, lampiran, klasifikasi, kuasa penandatangan dan format organisasi.
```

### Hasil dijangka

Draf surat rasmi dengan penanda jelas bagi rujukan, tarikh atau kelulusan yang belum disahkan.

### Contoh penggunaan

#### Contoh input

Penerima: Pegawai Pendidikan Daerah. Tujuan: memohon penggunaan dewan bagi bengkel pada 12 November. Fakta: 80 peserta dan jadual dilampirkan. Tindakan: pengesahan bertulis sebelum 30 Oktober. Nombor rujukan belum diberikan.

#### Contoh hasil

Draf surat menggunakan Bahasa Melayu rasmi, menandakan nombor rujukan sebagai belum disahkan dan meninggalkan tandatangan kepada pegawai yang diberi kuasa.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Semak format dan frasa wajib organisasi.
- Jangan cipta nombor rujukan atau kuasa kelulusan.
- Dapatkan tandatangan pegawai berkuasa.

Draf ini tidak mengesahkan kuasa, kelulusan atau pematuhan undang-undang. Semak tatacara organisasi, kerahsiaan, frasa wajib dan kuasa penandatangan sebelum dikeluarkan.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Optional:** Organisational letter template, letterhead, required wording or style guide.

### Variables

- `{{RECIPIENT}}` — Recipient and address **(Required)**.
- `{{PURPOSE_FACTS}}` — Purpose and facts **(Required)**.
- `{{REQUESTED_ACTION}}` — Requested action **(Required)**.
- `{{REFERENCE_DETAILS}}` — Verified references and dates **(Optional)**.
- `{{ATTACHMENTS_SIGNATORY}}` — Attachments and signatory **(Optional)**.
- `{{ORGANISATION_REQUIREMENTS}}` — Organisational format requirements **(Optional)**.

### Complete prompt

```text
You are an official-correspondence writing assistant for a Malaysian organisation. Draft the letter in formal Bahasa Melayu unless I request English.

Recipient: {{RECIPIENT}}
Verified references and dates: {{REFERENCE_DETAILS}}
Purpose and facts: {{PURPOSE_FACTS}}
Requested action/deadline: {{REQUESTED_ACTION}}
Attachments and signatory: {{ATTACHMENTS_SIGNATORY}}
Required organisational format or wording: {{ORGANISATION_REQUIREMENTS}}

First verify that the recipient, purpose/facts and requested action have been supplied. If any required input is missing, do not draft the letter; list no more than five required details and wait for the answer. When complete, prepare a formal letter with an accurate subject, opening, numbered paragraphs where suitable, a clear request or action, closing and attachment list. Use direct, respectful professional language.

Use only supplied facts. Do not invent references, officers, policies, approvals, dates, attachments or signing authority. Mark missing optional information `[CONFIRMATION REQUIRED]` only when that field is required by the letter structure. Do not add a copy-distribution (`s.k.`/`cc`) line, sender address, security classification, slogan or mandatory wording unless the inputs or organisational format require it. If the input still contains unnecessary identity numbers, disciplinary/health case information, personal contact details or confidential material, do not repeat or process those details; request a de-identified version through an approved channel. After the letter, list pre-signature checks covering facts, references, recipient, attachments, classification, signing authority and house format.
```

### Expected output

A formal letter draft with clear markers for unverified references, dates or approvals.

### Worked example

#### Sample input

Recipient: District Education Officer. Purpose: request use of a hall for a workshop on 12 November. Facts: 80 participants and an attached schedule. Action: written confirmation by 30 October. No reference number has been issued.

#### Sample output

The draft uses formal language, marks the reference number as unconfirmed and leaves sign-off to an authorised officer.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Verify organisational format and required wording.
- Do not invent references or approval authority.
- Obtain an authorised signatory.

The draft does not establish authority, approval or legal compliance. Verify house procedures, confidentiality, mandatory wording and signing authority before issue.
