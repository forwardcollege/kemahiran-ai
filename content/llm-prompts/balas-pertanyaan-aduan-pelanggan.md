---
schema_version: 1
id: prompt-customer-response-001
type: llm_prompt
status: approved
slug:
  {
    ms: balas-pertanyaan-atau-aduan-pelanggan,
    en: respond-to-customer-enquiry-or-complaint,
  }
title:
  {
    ms: Balas Pertanyaan atau Aduan Pelanggan,
    en: Respond to a Customer Enquiry or Complaint,
  }
summary:
  ms: Draf jawapan empati yang mengakui isu, menerangkan tindakan seterusnya dan mematuhi dasar tanpa membuat janji yang tidak diluluskan.
  en: Draft an empathetic reply that acknowledges the issue, explains the next action and follows policy without unauthorised promises.
audiences: [sme_entrepreneurs, professionals]
use_cases: [communication, administration]
sectors: [sme_business, cross_sector]
categories: [customer_service]
tags: [customer_enquiry, complaint, service_recovery, policy]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Lulus ujian Gemini Auto bagi respons biasa, dasar tidak tersedia dan eskalasi keselamatan/undang-undang selepas pembetulan sempadan tindakan.",
        en: "Passed Gemini Auto tests for a normal response, unavailable policy and safety/legal escalation after action-boundary remediation.",
      }
difficulty: beginner
intended_output: customer_service_response
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
    specialist_review_status: not_required,
    specialist_reviewer: null,
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.4.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids:
  [
    skill-business-proposal-001,
    skill-customer-service-playbook-001,
    visual-product-photo-001,
  ]
featured: true
search_aliases:
  ms: [jawapan pelanggan, balas aduan, khidmat pelanggan]
  en: [complaint reply, customer support response, service recovery]
llm_prompt:
  variables:
    - id: customer_message
      token: "{{CUSTOMER_MESSAGE}}"
      label:
        {
          ms: Mesej pelanggan yang dinyahkenal pasti,
          en: De-identified customer message,
        }
      required: true
      example:
        {
          ms: Ringkasan isu dan hasil yang diminta,
          en: Issue summary and requested outcome,
        }
    - id: verified_facts
      token: "{{VERIFIED_FACTS}}"
      label: { ms: Fakta yang disahkan, en: Verified facts }
      required: true
      example:
        {
          ms: Status pesanan dan rekod komunikasi,
          en: Order status and communication record,
        }
    - id: policy_options
      token: "{{POLICY_OPTIONS}}"
      label:
        {
          ms: Dasar dan pilihan yang dibenarkan,
          en: Policy and authorised options,
        }
      required: true
      example:
        {
          ms: Pilihan bayaran balik atau eskalasi,
          en: Refund or escalation options,
        }
    - id: next_step_owner
      token: "{{NEXT_STEP_OWNER}}"
      label:
        {
          ms: "Tindakan, pemilik dan tempoh",
          en: "Action, owner and timeframe",
        }
      required: true
      example:
        {
          ms: Pasukan operasi memberi kemas kini dalam satu hari bekerja,
          en: Operations team to update within one working day,
        }
    - id: tone_channel
      token: "{{TONE_CHANNEL}}"
      label: { ms: Nada dan saluran, en: Tone and channel }
      required: false
      example:
        { ms: E-mel empati dan profesional, en: Empathetic professional email }
  expected_output:
    ms: Jawapan pelanggan yang empati, tepat dan mempunyai tindakan seterusnya yang jelas.
    en: An accurate, empathetic customer response with a clear next action.
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs:
    - id: approved_customer_service_policy
      type: policy
      required: true
      supply_mode: runtime
      sensitive: false
      description:
        ms: Dasar dan pilihan penyelesaian yang diluluskan bagi isu tersebut.
        en: Approved policy and resolution options for the issue.
  limitations:
    ms:
      [
        Jangan menjanjikan bayaran balik atau pampasan tanpa kuasa.,
        Lindungi data pelanggan.,
        Eskalasi isu keselamatan atau undang-undang.,
      ]
    en:
      [
        Do not promise refunds or compensation without authority.,
        Protect customer data.,
        Escalate safety or legal issues.,
      ]
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Wajib:** Dasar dan pilihan penyelesaian yang diluluskan bagi isu tersebut.

### Pemboleh ubah

- `{{CUSTOMER_MESSAGE}}` — Mesej pelanggan yang dinyahkenal pasti **(Wajib)**.
- `{{VERIFIED_FACTS}}` — Fakta yang disahkan **(Wajib)**.
- `{{POLICY_OPTIONS}}` — Dasar dan pilihan yang dibenarkan **(Wajib)**.
- `{{NEXT_STEP_OWNER}}` — Tindakan, pemilik dan tempoh **(Wajib)**.
- `{{TONE_CHANNEL}}` — Nada dan saluran **(Pilihan)**.

### Prompt lengkap

```text
Anda ialah pembantu khidmat pelanggan untuk sebuah organisasi di Malaysia. Sediakan draf jawapan yang empati, tepat dan selaras dengan dasar.

Mesej pelanggan yang dinyahkenal pasti: {{CUSTOMER_MESSAGE}}
Fakta yang disahkan: {{VERIFIED_FACTS}}
Dasar dan pilihan yang dibenarkan: {{POLICY_OPTIONS}}
Tindakan seterusnya, pemilik dan tempoh: {{NEXT_STEP_OWNER}}
Nada dan saluran: {{TONE_CHANNEL}}

Hasilkan jawapan yang:
1. mengakui pengalaman dan isu tanpa mengaku liabiliti yang belum ditentukan;
2. merumuskan isu secara neutral;
3. menerangkan hanya fakta yang disahkan;
4. menyatakan tindakan seterusnya, pemilik dan jangka masa tepat seperti diberikan tanpa menambah kaedah pelaksanaan;
5. menawarkan hanya pilihan yang dibenarkan; dan
6. menutup dengan saluran susulan yang jelas.

Jika dasar atau pilihan yang dibenarkan tidak diberikan, jangan cadangkan penyelesaian; hasilkan pengakuan penerimaan ringkas dan nyatakan bahawa eskalasi manusia diperlukan. Jangan menyalahkan pelanggan atau pekerja. Jangan mencipta sebab, dasar, status, bayaran balik, pampasan atau jaminan. Jangan tambah cara pasukan akan menjalankan tindakan (contohnya menghubungi kurier) jika cara itu tidak diberikan. Jangan tambah syarat, sebab atau pencetus bagi semakan bayaran balik/pampasan; nyatakan hanya bahawa semakan berasingan diperlukan jika itu sahaja yang dibenarkan. Bezakan cadangan daripada tindakan yang telah berlaku: jangan tulis kes `telah dieskalasi`, `telah ditandakan`, `telah direkodkan`, `telah diserahkan` atau setara melainkan rekod mengesahkannya. Tandakan jurang sebagai `[PERLU SEMAKAN]`. Jika isu melibatkan keselamatan, ancaman, diskriminasi, data peribadi, tindakan undang-undang atau media, cadangkan eskalasi manusia dan jangan cuba menyelesaikannya sendiri. Jika laluan, pemilik atau prosedur eskalasi tidak diberikan, gunakan `[PERLU ESKALASI MANUSIA]`; jangan cipta pasukan pengurusan/keselamatan/undang-undang, saluran atau arahan penyimpanan rekod.
```

### Hasil dijangka

Jawapan pelanggan yang empati, tepat dan mempunyai tindakan seterusnya yang jelas.

### Contoh penggunaan

#### Contoh input

Pelanggan melaporkan pesanan sintetik lewat dua hari. Fakta disahkan: bungkusan masih dalam transit. Dasar membenarkan kemas kini penghantaran tetapi tiada pampasan automatik. Pasukan khidmat pelanggan memiliki tindakan susulan dalam satu hari bekerja.

#### Contoh hasil

Salam sejahtera,

Terima kasih kerana memaklumkan kepada kami. Kami mohon maaf atas kelewatan pesanan anda. Berdasarkan semakan terkini, bungkusan tersebut masih dalam transit dan belum ditandakan sebagai dihantar.

Pasukan khidmat pelanggan akan mendapatkan kemas kini daripada penyedia penghantaran dan menghubungi anda semula dalam tempoh **satu hari bekerja**. Pada peringkat ini, kami belum dapat mengesahkan tarikh serahan baharu atau sebarang pampasan kerana kedua-duanya tertakluk pada hasil semakan dan dasar yang berkuat kuasa.

Jika anda mempunyai maklumat penghantaran tambahan yang berkaitan, sila balas melalui saluran rasmi ini. Terima kasih atas kesabaran anda.

**Catatan dalaman:** Pemilik susulan — Pasukan Khidmat Pelanggan. Tempoh — satu hari bekerja. Jangan tutup aduan sehingga kemas kini penghantaran disahkan.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Jangan menjanjikan bayaran balik atau pampasan tanpa kuasa.
- Lindungi data pelanggan.
- Eskalasi isu keselamatan atau undang-undang.

Semak fakta, dasar, nada dan kuasa sebelum menghantar. Jangan masukkan nombor kad, kata laluan, dokumen pengenalan atau data pelanggan lain yang tidak diperlukan.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Required:** Approved policy and resolution options for the issue.

### Variables

- `{{CUSTOMER_MESSAGE}}` — De-identified customer message **(Required)**.
- `{{VERIFIED_FACTS}}` — Verified facts **(Required)**.
- `{{POLICY_OPTIONS}}` — Policy and authorised options **(Required)**.
- `{{NEXT_STEP_OWNER}}` — Action, owner and timeframe **(Required)**.
- `{{TONE_CHANNEL}}` — Tone and channel **(Optional)**.

### Complete prompt

```text
You are a customer-service writing assistant for a Malaysian organisation. Prepare an empathetic, accurate and policy-aligned draft response.

De-identified customer message: {{CUSTOMER_MESSAGE}}
Verified facts: {{VERIFIED_FACTS}}
Policy and authorised options: {{POLICY_OPTIONS}}
Next action, owner and timeframe: {{NEXT_STEP_OWNER}}
Tone and channel: {{TONE_CHANNEL}}

Write a response that:
1. acknowledges the experience and issue without admitting undetermined liability;
2. summarises the issue neutrally;
3. explains only verified facts;
4. states the next action, owner and timeframe exactly as supplied without adding an implementation method;
5. offers only authorised options; and
6. closes with a clear follow-up channel.

If policy or authorised options are not supplied, do not propose a resolution; produce a short acknowledgement and state that human escalation is required. Do not blame the customer or staff. Do not invent causes, policies, status, refunds, compensation or guarantees. Do not add how a team will perform an action (for example, contacting a courier) unless that method is supplied. Do not add a condition, reason or trigger for a refund/compensation review; state only that separate review is required when that is the full authorised position. Distinguish a recommendation from a completed action: do not say the case `has been escalated`, `has been flagged`, `has been recorded`, `has been handed over` or equivalent unless the records confirm it. Mark gaps `[REVIEW REQUIRED]`. If the issue concerns safety, threats, discrimination, personal data, legal action or media, recommend human escalation and do not attempt to resolve it yourself. When no escalation route, owner or procedure is supplied, use `[HUMAN ESCALATION REQUIRED]`; do not invent a management/security/legal team, channel or record-retention instruction.
```

### Expected output

An accurate, empathetic customer response with a clear next action.

### Worked example

#### Sample input

A customer reports that a synthetic order is two days late. Verified fact: the parcel is still in transit. Policy permits a delivery update but no automatic compensation. Customer service owns the follow-up within one working day.

#### Sample output

Hello,

Thank you for bringing this to our attention. We are sorry that your order is late. Our latest verified update shows that the parcel is still in transit and has not been marked as delivered.

The customer service team will request an update from the delivery provider and contact you again within **one working day**. At this stage, we cannot confirm a revised delivery date or any compensation because both depend on the review outcome and the applicable policy.

If you have any additional relevant delivery information, please reply through this official channel. Thank you for your patience.

**Internal note:** Follow-up owner — Customer Service. Timeframe — one working day. Do not close the enquiry until the delivery update is verified.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Do not promise refunds or compensation without authority.
- Protect customer data.
- Escalate safety or legal issues.

Verify facts, policy, tone and authority before sending. Never enter card numbers, passwords, identity documents or unnecessary customer data.
