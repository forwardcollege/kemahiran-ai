---
schema_version: 1
id: skill-customer-service-playbook-001
type: skill
status: approved
slug:
  {
    ms: pembina-panduan-respons-khidmat-pelanggan,
    en: customer-service-response-playbook-builder,
  }
title:
  {
    ms: Pembina Panduan Respons Khidmat Pelanggan,
    en: Customer-Service Response Playbook Builder,
  }
summary:
  {
    ms: "Tukar dasar dan standard perkhidmatan yang diluluskan kepada pola respons, had kuasa dan laluan eskalasi yang boleh diguna semula.",
    en: "Turn approved policies and service standards into reusable response patterns, authority limits and escalation paths.",
  }
audiences: [sme_entrepreneurs, professionals]
use_cases: [communication, productivity, administration]
sectors: [sme_business, cross_sector]
categories: [service_playbooks]
tags: [customer_service, playbook, escalation, policy]
tools:
  [
    {
      id: gemini,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Ujian senario dan semakan pemilik dasar diperlukan.,
          en: Scenario testing and policy-owner review are required.,
        },
    },
  ]
difficulty: intermediate
intended_output: customer_service_playbook
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward College }
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
related_ids: [prompt-customer-response-001]
featured: false
search_aliases:
  {
    ms: [skrip khidmat pelanggan, panduan respons, eskalasi pelanggan],
    en: [customer response guide, service scripts, escalation playbook],
  }
skill:
  estimated_minutes: 35
  outcome:
    {
      ms: Panduan respons yang terikat pada dasar dengan senario dan eskalasi.,
      en: A policy-bound response guide with scenarios and escalation.,
    }
  prerequisites:
    {
      ms:
        [
          Dasar perkhidmatan diluluskan,
          Saluran dan had kuasa,
          Senario lazim dinyahkenal pasti,
        ],
      en:
        [
          Approved service policies,
          Channels and authority limits,
          De-identified common scenarios,
        ],
    }
  required_inputs:
    - {
        id: policies,
        label: { ms: Dasar diluluskan, en: Approved policies },
        required: true,
      }
    - {
        id: escalation,
        label: { ms: Peraturan eskalasi, en: Escalation rules },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-customer-service-playbook-001/0.2.0/build-customer-service-playbook.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    {
      requirement: required,
      persistent_references:
        [
          {
            id: approved_service_policy,
            type: policy,
            supplied_by: organisation,
            required: true,
            sensitive: false,
            description:
              {
                ms: "Dasar pulangan, bayaran balik dan tahap perkhidmatan yang diluluskan.",
                en: "Approved return, refund and service-level policies.",
              },
          },
        ],
      runtime_inputs:
        [{ id: scenarios, type: deidentified_scenarios, sensitive: true }],
      missing_reference_behavior: stop_and_request_source,
    }
  limitations:
    {
      ms: [Bukan nasihat undang-undang., Pemilik dasar meluluskan panduan.],
      en: [Not legal advice., The policy owner approves the playbook.],
    }
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Panduan respons dengan prinsip, struktur mesej, pola boleh sunting, pencetus eskalasi dan senarai semak kualiti yang terikat kepada dasar serta had kuasa sebenar.

### Sebelum bermula

Sediakan dasar pulangan, bayaran balik, privasi dan eskalasi yang diluluskan, standard perkhidmatan, nada jenama, saluran serta had kuasa petugas. Gunakan senario pelanggan yang telah dinyahkenal pasti.

### Langkah penggunaan

1. Kenal pasti dasar dan had kuasa yang terpakai bagi setiap saluran.
2. Buang nama, nombor pesanan dan maklumat pelanggan yang tidak diperlukan.
3. Salin arahan di bawah dan lengkapkan senario contoh.
4. Uji pola terhadap kes biasa, kes sempadan dan kes yang memerlukan eskalasi.
5. Dapatkan kelulusan pemilik dasar sebelum panduan digunakan oleh pasukan.

### Arahan untuk disalin

```text
Bina panduan respons khidmat pelanggan menggunakan hanya dasar, standard, nada jenama dan had kuasa yang saya berikan. Jika dasar pulangan, bayaran balik, privasi atau eskalasi yang relevan tiada, senaraikan jurang dan berhenti; jangan cipta polisi.

Dasar diluluskan: {{DASAR}}
Saluran: {{SALURAN}}
Nada jenama: {{NADA}}
Had kuasa petugas: {{HAD_KUASA}}
Laluan eskalasi: {{ESKALASI}}
Senario dinyahkenal pasti: {{SENARIO}}

Hasilkan prinsip respons, struktur mesej, perkara wajib/dilarang, matriks senario, pola boleh sunting bagi setiap saluran, pencetus eskalasi dan senarai semak QA. Jangan menjanjikan pampasan, tarikh, hasil atau pengecualian yang tidak diluluskan. Jangan masukkan data pelanggan sebenar. Uji pola pada senario dan tandakan konflik dasar [PERLU PEMILIK DASAR].
```

### Contoh penggunaan

#### Contoh input

Kes sintetik: pelanggan melaporkan pesanan lewat dua hari. Status disahkan: masih dalam transit. Polisi hanya membenarkan siasatan penghantaran pada peringkat ini; tiada bayaran balik automatik. Pasukan khidmat pelanggan mesti memberi kemas kini dalam satu hari bekerja.

#### Contoh hasil

**Respons yang dicadangkan**

Salam sejahtera,

Kami mohon maaf kerana pesanan anda belum tiba seperti dijangka. Semakan terkini menunjukkan bungkusan masih dalam transit. Kami telah membuka siasatan dengan penyedia penghantaran dan pasukan kami akan memberi kemas kini dalam tempoh **satu hari bekerja**.

Pada peringkat ini kami belum dapat mengesahkan tarikh serahan baharu atau bayaran balik kerana perkara tersebut bergantung pada hasil siasatan dan polisi yang berkuat kuasa. Terima kasih atas kesabaran anda; kami akan menghubungi anda melalui saluran ini sebaik sahaja maklumat disahkan.

**Panduan keputusan dalaman**

- Jika bungkusan masih dalam transit dan dalam tempoh siasatan: kemas kini pelanggan dan kekalkan kes terbuka.
- Jika status tidak berubah selepas tempoh siasatan: eskalasi kepada pemilik polisi; jangan janji pampasan.
- Jika pelanggan berkongsi data pembayaran sensitif: hentikan perbualan pada saluran biasa dan arahkan kepada saluran selamat yang diluluskan.
- Rekod pemilik, masa kemas kini seterusnya dan fakta yang telah disahkan.

### Semakan kualiti

- Setiap respons mematuhi dasar dan had kuasa yang dinyatakan.
- Nada jelas dan empati tanpa mengakui liabiliti yang tidak disahkan.
- Janji, pampasan, tarikh dan pengecualian tidak direka.
- Pencetus serta laluan eskalasi dinyatakan dengan jelas.

### Batasan dan penggunaan bertanggungjawab

Panduan ini bukan nasihat undang-undang dan tidak menggantikan dasar organisasi. Pemilik dasar serta pasukan undang-undang atau pematuhan perlu menyemaknya apabila berkenaan. Jangan masukkan data pelanggan sebenar ke alat yang tidak diluluskan.

## English

### What you will get

A response playbook with principles, message structure, editable patterns, escalation triggers and a quality checklist constrained by real policies and authority limits.

### Before you begin

Prepare approved return, refund, privacy and escalation policies, service standards, brand tone, channels and agent-authority limits. Use de-identified customer scenarios.

### How to use it

1. Identify the applicable policies and authority limits for each channel.
2. Remove names, order numbers and unnecessary customer information.
3. Copy the instruction below and complete the sample scenarios.
4. Trial the patterns on common cases, boundary cases and escalation cases.
5. Obtain policy-owner approval before team use.

### Copyable instruction

```text
Build a customer-service response playbook using only the policies, service standards, brand tone and authority limits I supply. If a relevant return, refund, privacy or escalation policy is missing, list the gap and stop; do not invent policy.

Approved policies: {{POLICIES}}
Channels: {{CHANNELS}}
Brand tone: {{TONE}}
Agent authority limits: {{AUTHORITY}}
Escalation path: {{ESCALATION}}
De-identified scenarios: {{SCENARIOS}}

Provide response principles, message structure, required/prohibited content, a scenario matrix, editable patterns by channel, escalation triggers and a QA checklist. Do not promise compensation, dates, outcomes or exceptions without authority. Do not include real customer data. Trial patterns on the scenarios and mark policy conflicts [POLICY OWNER REQUIRED].
```

### Worked example

#### Sample input

Synthetic case: a customer reports that an order is two days late. Verified status: still in transit. Policy allows a delivery investigation at this stage but no automatic refund. Customer service must provide an update within one working day.

#### Sample output

**Suggested response**

Hello,

We are sorry that your order has not arrived as expected. Our latest check shows that the parcel is still in transit. We have opened an investigation with the delivery provider and our team will update you within **one working day**.

At this stage, we cannot confirm a revised delivery date or refund because those depend on the investigation outcome and the applicable policy. Thank you for your patience; we will contact you through this channel as soon as the information is verified.

**Internal decision guidance**

- If the parcel remains in transit and within the investigation window: update the customer and keep the case open.
- If status has not changed after the investigation window: escalate to the policy owner; do not promise compensation.
- If the customer shares sensitive payment data: stop the ordinary-channel exchange and direct them to an approved secure channel.
- Record the owner, next-update time and verified facts.

### Quality check

- Every response follows the stated policies and authority limits.
- The tone is clear and empathetic without admitting unverified liability.
- Promises, compensation, dates and exceptions are not invented.
- Escalation triggers and routes are explicit.

### Limitations and responsible use

This playbook is not legal advice and does not replace organisational policy. The policy owner and legal or compliance team should review it where relevant. Do not enter real customer data into an unapproved tool.
