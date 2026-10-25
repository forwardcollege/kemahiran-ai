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
author: { name: Forward Academy, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: Kandungan asal Forward Academy.,
        en: Original Forward Academy content.,
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
      path: /downloads/skills/skill-customer-service-playbook-001/0.1.0/build-customer-service-playbook.zip,
      format: skill_md_zip,
      included_files: [SKILL.md, LICENSES.md],
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

### Contoh dan batasan

Contoh sintetik: pesanan lewat dengan polisi hanya membenarkan siasatan penghantaran, bukan bayaran balik automatik. Panduan mesti mengakui isu tanpa membuat janji. Pemilik dasar dan pasukan undang-undang/pematuhan perlu menyemak jika berkenaan.

## English

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

### Example and limitations

Synthetic example: a late order where policy allows only a delivery investigation, not an automatic refund. The guide must acknowledge the issue without making a promise. The policy owner and legal/compliance team should review where relevant.
