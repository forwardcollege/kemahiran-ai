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
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
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

Masukkan tujuan, fakta yang telah disahkan, tindakan yang diminta, tarikh akhir, saluran pertanyaan dan nada. Jika ada, lampirkan atau tampalkan dasar komunikasi sekolah yang berkaitan. Gunakan maklumat minimum yang diperlukan. Untuk perkara individu, hantar melalui saluran sekolah yang diluluskan dan semak sendiri sebelum dihantar.

### Pemboleh ubah

- `{{PURPOSE}}` — sebab mesej dihantar.
- `{{VERIFIED_FACTS}}` — tarikh, masa, tempat atau maklumat lain yang telah disahkan.
- `{{REQUESTED_ACTION}}` — tindakan khusus dan tarikh akhir.
- `{{CONTACT_CHANNEL}}` — saluran rasmi untuk pertanyaan.
- `{{TONE}}` — contohnya mesra dan profesional.

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

### Contoh input dan output

Input: peringatan borang kebenaran lawatan perlu dipulangkan sebelum 6 November melalui guru kelas; pertanyaan melalui nombor pejabat sekolah.

Output ringkas: “Salam sejahtera ibu bapa/penjaga. Ini ialah peringatan untuk mengembalikan borang kebenaran lawatan kepada guru kelas sebelum 6 November. Jika anda mempunyai pertanyaan, sila hubungi pejabat sekolah melalui saluran rasmi. Terima kasih atas kerjasama.”

### Batasan dan penggunaan wajar

Jangan gunakan prompt ini untuk menyiarkan maklumat disiplin, kesihatan, kebajikan atau prestasi individu dalam kumpulan. Gunakan saluran peribadi yang diluluskan dan ikut prosedur perlindungan murid.

## English

### How to use this prompt

Provide the purpose, verified facts, requested action, deadline, enquiry channel and tone. When available, attach or paste the relevant school communication policy. Use only the minimum necessary information. For individual matters, use an approved school channel and review the message yourself before sending it.

### Variables

- `{{PURPOSE}}` — why the message is being sent.
- `{{VERIFIED_FACTS}}` — confirmed dates, times, locations or other details.
- `{{REQUESTED_ACTION}}` — the specific action and deadline.
- `{{CONTACT_CHANNEL}}` — official enquiry channel.
- `{{TONE}}` — for example warm and professional.

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

### Sample input and output

Input: reminder that the trip consent form must be returned to the class teacher by 6 November; enquiries through the school office number.

Short output: “Dear parents and guardians, this is a reminder to return the trip consent form to the class teacher by 6 November. For questions, please contact the school office through the official channel. Thank you for your cooperation.”

### Limitations and appropriate use

Do not use this prompt to broadcast an individual learner’s disciplinary, health, welfare or performance information. Use an approved private channel and follow safeguarding procedures.
