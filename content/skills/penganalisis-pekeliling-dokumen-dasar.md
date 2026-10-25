---
schema_version: 1
id: skill-policy-analysis-001
type: skill
status: approved
slug:
  {
    ms: penganalisis-pekeliling-dan-dokumen-dasar,
    en: circular-and-policy-document-analyser,
  }
title:
  {
    ms: Penganalisis Pekeliling dan Dokumen Dasar,
    en: Circular and Policy Document Analyser,
  }
summary:
  {
    ms: "Hasilkan taklimat berjejak tentang tujuan, pihak terlibat, kewajipan, tarikh dan tindakan daripada dokumen rasmi yang dibekalkan.",
    en: "Produce a traceable briefing on purpose, affected parties, obligations, dates and actions from a supplied official document.",
  }
audiences: [education_officers_jpn, public_sector, professionals]
use_cases: [administration, research, writing_documents]
sectors: [education, public_service]
categories: [policy_analysis]
tags: [circular, policy, source_citation, action_brief]
tools:
  - id: gemini
    compatibility: expected
    tested_on: null
    notes:
      {
        ms: Ujian dokumen dan semakan pegawai diperlukan.,
        en: Document testing and officer review are required.,
      }
difficulty: advanced
intended_output: traceable_policy_briefing
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
version: 0.1.1
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [prompt-circular-actions-001]
featured: false
search_aliases:
  {
    ms: [analisis pekeliling, ringkasan dasar, tindakan pekeliling],
    en: [circular analysis, policy briefing, policy actions],
  }
skill:
  estimated_minutes: 25
  outcome:
    {
      ms: Taklimat berjejak dengan petikan lokasi dan soalan belum selesai.,
      en: A traceable briefing with source locations and unresolved questions.,
    }
  prerequisites:
    {
      ms: [Dokumen rasmi yang sah, Skop organisasi dan tujuan analisis],
      en:
        [
          Authoritative official document,
          Organisational scope and analysis purpose,
        ],
    }
  required_inputs:
    - {
        id: official_document,
        label: { ms: Dokumen rasmi, en: Official document },
        required: true,
      }
    - {
        id: organisational_scope,
        label: { ms: Skop organisasi, en: Organisational scope },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-policy-analysis-001/0.1.1/analyse-circular-policy-document.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    requirement: required
    persistent_references:
      - {
          id: official_document,
          type: official_document,
          supplied_by: user,
          required: true,
          sensitive: false,
          description:
            {
              ms: Pekeliling atau dasar rasmi yang dianalisis.,
              en: Official circular or policy being analysed.,
            },
        }
    runtime_inputs:
      [{ id: organisational_context, type: structured_input, sensitive: true }]
    missing_reference_behavior: stop_and_request_source
  limitations:
    {
      ms:
        [
          Bukan nasihat undang-undang atau tafsiran muktamad.,
          Sahkan dengan pemilik dasar.,
        ],
      en:
        [
          Not legal advice or definitive interpretation.,
          Verify with the policy owner.,
        ],
    }
---

## Bahasa Melayu

### Langkah penggunaan

1. Gunakan dokumen rasmi yang lengkap dan dibenarkan organisasi.
2. Nyatakan tujuan, unit terlibat dan keputusan yang perlu disokong.
3. Kenal pasti versi, tarikh kuat kuasa dan dokumen yang diganti jika dinyatakan.
4. Ekstrak setiap tuntutan bersama halaman atau seksyen.
5. Bezakan teks dokumen, tafsiran tentatif dan soalan untuk pemilik dasar.

### Arahan untuk disalin

```text
Analisis hanya dokumen rasmi yang saya lampirkan. Jika dokumen tiada, tidak lengkap, tidak boleh dibaca atau versinya tidak jelas, berhenti dan minta sumber yang betul.

Tujuan analisis: {{TUJUAN}}
Skop organisasi: {{SKOP}}
Tarikh rujukan: {{TARIKH}}

Hasilkan: identiti dokumen; tujuan; pihak terlibat; kewajipan dan larangan; tarikh atau tempoh; tindakan mengikut keutamaan; implikasi operasi yang jelas daripada teks; soalan belum selesai; dan jadual tuntutan dengan halaman/seksyen. Petik secara ringkas dan parafrasa selebihnya. Jangan mereka maksud, tarikh, kuasa, pengecualian atau hubungan dengan dasar lain. Labelkan inferens [TAFSIRAN — SAHKAN DENGAN PEMILIK DASAR].
```

### Contoh dan semakan

Contoh sintetik: pekeliling tiga halaman tentang tarikh penghantaran laporan. Semak setiap tarikh, pihak dan tindakan terhadap lokasi sumber; jangan anggap unit yang tidak disebut turut terpakai.

### Batasan

AI boleh tersalah membaca jadual, pindaan atau rujukan silang. Pegawai bertanggungjawab menyemak dokumen terkini dan mendapatkan pengesahan pihak berkuasa.

## English

### Workflow

1. Use a complete authoritative document permitted by the organisation.
2. State the purpose, affected unit and decision being supported.
3. Identify version, effective date and superseded material when stated.
4. Extract every claim with page or section location.
5. Separate document text, tentative interpretation and policy-owner questions.

### Copyable instruction

```text
Analyse only the official document I attach. If it is missing, incomplete, unreadable or its version is unclear, stop and request the correct source.

Analysis purpose: {{PURPOSE}}
Organisational scope: {{SCOPE}}
Reference date: {{DATE}}

Provide: document identity; purpose; affected parties; obligations and prohibitions; dates or periods; prioritised actions; operational implications clearly supported by the text; unresolved questions; and a claim table with page/section locations. Quote briefly and paraphrase the rest. Do not invent meaning, dates, authority, exceptions or links to other policies. Mark inference [INTERPRETATION — VERIFY WITH POLICY OWNER].
```

### Example and checks

Synthetic example: a three-page circular about report-submission dates. Verify every date, party and action against its source location; do not assume an unmentioned unit is covered.

### Limitations

AI may misread tables, amendments or cross-references. An authorised officer must verify the current source and obtain confirmation from the responsible authority.
