---
schema_version: 1
id: prompt-parent-message-001
type: llm_prompt
status: approved
slug:
  { ms: draf-mesej-ibu-bapa-atau-penjaga, en: draft-parent-or-guardian-message }
title:
  {
    ms: Draf Mesej kepada Ibu Bapa atau Penjaga,
    en: Draft a Parent or Guardian Message,
  }
summary:
  ms: Hasilkan mesej yang ringkas, sopan dan jelas tentang acara, peringatan, perkara kemajuan umum atau tindakan yang diperlukan.
  en: Produce a concise, respectful message about an event, reminder, general progress matter or required action.
audiences: [teachers_educators]
use_cases: [communication, administration]
sectors: [education]
categories: [parent_communication]
tags: [parents, guardians, school_message, privacy]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Lulus ujian Gemini Auto bagi input lengkap, input wajib tidak lengkap dan sempadan siaran kumpulan sensitif selepas pembetulan gerbang input.",
        en: "Passed Gemini Auto tests for complete input, missing required input and a sensitive group-broadcast boundary after input-gate remediation.",
      }
difficulty: beginner
intended_output: parent_guardian_message
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward College }
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
version: 0.4.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [skill-rph-001]
featured: true
search_aliases:
  ms: [mesej waris, makluman ibu bapa, mesej sekolah]
  en: [parent notice, guardian message, school communication]
llm_prompt:
  variables:
    - id: purpose
      token: "{{PURPOSE}}"
      label: { ms: Tujuan mesej, en: Message purpose }
      required: true
      example:
        {
          ms: Peringatan menghantar borang kebenaran,
          en: Reminder to return a consent form,
        }
    - id: verified_facts
      token: "{{VERIFIED_FACTS}}"
      label: { ms: Fakta yang telah disahkan, en: Verified facts }
      required: true
      example:
        {
          ms: Tarikh akhir dan cara penghantaran,
          en: Deadline and submission method,
        }
    - id: requested_action
      token: "{{REQUESTED_ACTION}}"
      label: { ms: Tindakan yang diminta, en: Requested action }
      required: true
      example:
        {
          ms: Kembalikan borang sebelum tarikh akhir,
          en: Return the form before the deadline,
        }
    - id: contact_channel
      token: "{{CONTACT_CHANNEL}}"
      label: { ms: Saluran pertanyaan rasmi, en: Official enquiry channel }
      required: true
      example: { ms: Nombor pejabat sekolah, en: School office number }
    - id: tone
      token: "{{TONE}}"
      label: { ms: Nada mesej, en: Message tone }
      required: false
      example: { ms: Mesra dan profesional, en: Warm and professional }
  expected_output:
    ms: Satu mesej ringkas dengan tujuan, fakta, tindakan dan saluran pertanyaan yang jelas.
    en: A concise message with a clear purpose, facts, action and enquiry channel.
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs:
    - id: school_communication_policy
      type: policy_or_style_guide
      required: false
      supply_mode: runtime
      sensitive: false
      description:
        ms: Dasar komunikasi, frasa wajib atau panduan saluran sekolah.
        en: School communication policy, required wording or channel guidance.
  limitations:
    ms:
      [
        Jangan masukkan data murid yang tidak perlu.,
        Jangan membuat diagnosis atau dakwaan tentang murid.,
        Semak dasar komunikasi sekolah.,
      ]
    en:
      [
        Do not include unnecessary student data.,
        Do not diagnose or make unsupported claims about a learner.,
        Check school communication policy.,
      ]
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Pilihan:** Dasar komunikasi, frasa wajib atau panduan saluran sekolah.

### Pemboleh ubah

- `{{PURPOSE}}` — Tujuan mesej **(Wajib)**.
- `{{VERIFIED_FACTS}}` — Fakta yang telah disahkan **(Wajib)**.
- `{{REQUESTED_ACTION}}` — Tindakan yang diminta **(Wajib)**.
- `{{CONTACT_CHANNEL}}` — Saluran pertanyaan rasmi **(Wajib)**.
- `{{TONE}}` — Nada mesej **(Pilihan)**.

### Prompt lengkap

```text
Anda membantu seorang guru di Malaysia menyediakan mesej kepada ibu bapa atau penjaga.

Tujuan: {{PURPOSE}}
Fakta yang telah disahkan: {{VERIFIED_FACTS}}
Tindakan yang diminta dan tarikh akhir: {{REQUESTED_ACTION}}
Saluran pertanyaan rasmi: {{CONTACT_CHANNEL}}
Nada: {{TONE}}

Semak dahulu sama ada tujuan, fakta penting, tindakan/tarikh akhir dan saluran pertanyaan rasmi telah diberikan. Jika mana-mana input wajib itu tiada, jangan draf mesej atau versi ringkas; senaraikan maksimum lima maklumat yang diperlukan dan tunggu jawapan. Jika lengkap, tulis satu mesej Bahasa Melayu yang ringkas, sopan dan mudah dibaca pada telefon. Mulakan dengan sapaan umum, nyatakan tujuan, fakta penting, tindakan dan saluran pertanyaan.

Jangan mencipta fakta, menyalahkan sesiapa, membuat diagnosis, membincangkan prestasi individu secara terbuka atau memasukkan data murid yang tidak diperlukan. Jangan menambah jenis atau tujuan acara, penganjur, manfaat pendidikan, status pengedaran borang, akibat, tempat, masa atau butiran murid jika tidak diberikan. Jika penganjur tidak dinyatakan, jangan tulis `pihak sekolah akan mengadakan` atau ayat setara; gunakan tajuk neutral seperti `Makluman mengenai ...`. Kekalkan tindakan yang diminta secara tepat: arahan `kembalikan borang` tidak membenarkan tambahan `lengkapkan borang` atau langkah lain. Gunakan frasa neutral dan penanda sahaja bagi jurang. Jika input melibatkan maklumat kesihatan, disiplin, kebajikan atau prestasi seorang murid untuk siaran kumpulan, jangan draf siaran itu; nyatakan bahawa perkara tersebut memerlukan saluran peribadi sekolah yang diluluskan dan semakan manusia. Elakkan bahasa mengugut dan jargon. Berikan satu versi utama maksimum 120 patah perkataan dan satu versi sangat ringkas maksimum 50 patah perkataan.
```

### Hasil dijangka

Satu mesej ringkas dengan tujuan, fakta, tindakan dan saluran pertanyaan yang jelas.

### Contoh penggunaan

#### Contoh input

Tujuan: peringatan bengkel STEM. Fakta: 12 November, 2.00–4.00 petang, Makmal Sains. Tindakan: sahkan kehadiran sebelum 8 November. Saluran pertanyaan: nombor pejabat sekolah.

#### Contoh hasil

**Versi utama**

Salam sejahtera ibu bapa dan penjaga,

Ini ialah peringatan mengenai Bengkel STEM yang akan berlangsung pada **12 November, 2.00–4.00 petang di Makmal Sains**. Mohon sahkan kehadiran sebelum **8 November** supaya persediaan tempat dapat dibuat.

Untuk sebarang pertanyaan, sila hubungi nombor pejabat sekolah. Terima kasih atas kerjasama anda.

**Versi sangat ringkas**

Peringatan: Bengkel STEM berlangsung pada 12 November, 2.00–4.00 petang di Makmal Sains. Mohon sahkan kehadiran sebelum 8 November. Pertanyaan boleh diajukan melalui nombor pejabat sekolah. Terima kasih.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Jangan masukkan data murid yang tidak perlu.
- Jangan membuat diagnosis atau dakwaan tentang murid.
- Semak dasar komunikasi sekolah.

Jangan gunakan prompt ini untuk menyiarkan maklumat disiplin, kesihatan, kebajikan atau prestasi individu dalam kumpulan. Gunakan saluran peribadi yang diluluskan dan ikut prosedur perlindungan murid.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Optional:** School communication policy, required wording or channel guidance.

### Variables

- `{{PURPOSE}}` — Message purpose **(Required)**.
- `{{VERIFIED_FACTS}}` — Verified facts **(Required)**.
- `{{REQUESTED_ACTION}}` — Requested action **(Required)**.
- `{{CONTACT_CHANNEL}}` — Official enquiry channel **(Required)**.
- `{{TONE}}` — Message tone **(Optional)**.

### Complete prompt

```text
You are helping a teacher in Malaysia prepare a message for parents or guardians.

Purpose: {{PURPOSE}}
Verified facts: {{VERIFIED_FACTS}}
Requested action and deadline: {{REQUESTED_ACTION}}
Official enquiry channel: {{CONTACT_CHANNEL}}
Tone: {{TONE}}

First check that the purpose, essential facts, requested action/deadline and official enquiry channel have been supplied. If any required input is missing, do not draft either message version; list no more than five required details and wait for the answer. When complete, write one concise, respectful message in English that is easy to read on a phone. Begin with a general greeting, then state the purpose, essential facts, action and enquiry channel.

Do not invent facts, assign blame, make a diagnosis, discuss an individual learner’s performance publicly or include unnecessary student data. Do not add an event type or purpose, organiser, educational benefit, form-distribution status, consequence, venue, time or learner detail when it is not supplied. If the organiser is missing, do not write `the school will organise` or equivalent; use a neutral label such as `Notice about ...`. Preserve the requested action exactly: `return the form` does not authorise adding `complete the form` or another step. Use neutral wording and placeholders only for gaps. If the input concerns an individual learner's health, discipline, welfare or performance for a group broadcast, do not draft the broadcast; state that the matter requires an approved private school channel and human review. Avoid threatening language and jargon. Provide one main version of no more than 120 words and one very short version of no more than 50 words.
```

### Expected output

A concise message with a clear purpose, facts, action and enquiry channel.

### Worked example

#### Sample input

Purpose: STEM workshop reminder. Facts: 12 November, 2:00–4:00 p.m., Science Lab. Action: confirm attendance by 8 November. Enquiry channel: school office number.

#### Sample output

**Main version**

Hello parents and guardians,

This is a reminder about the STEM Workshop taking place on **12 November from 2:00–4:00 p.m. in the Science Lab**. Please confirm attendance by **8 November** so that venue arrangements can be completed.

For enquiries, please contact the school office number. Thank you for your cooperation.

**Very short version**

Reminder: The STEM Workshop will be held on 12 November, 2:00–4:00 p.m. in the Science Lab. Please confirm attendance by 8 November. Direct enquiries to the school office number. Thank you.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Do not include unnecessary student data.
- Do not diagnose or make unsupported claims about a learner.
- Check school communication policy.

Do not use this prompt to broadcast an individual learner’s disciplinary, health, welfare or performance information. Use an approved private channel and follow safeguarding procedures.
