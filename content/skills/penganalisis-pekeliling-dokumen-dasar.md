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
audiences: [education_officers_jpn, professionals]
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
      path: /downloads/skills/skill-policy-analysis-001/0.2.0/analyse-circular-policy-document.zip,
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

### Hasil yang anda akan peroleh

Ringkasan bersumber yang menerangkan tujuan dokumen, pihak terlibat, kewajipan, larangan, tarikh, tindakan, implikasi operasi dan perkara yang masih memerlukan pengesahan.

### Sebelum bermula

Sediakan dokumen rasmi yang lengkap dan dibenarkan organisasi. Nyatakan tujuan analisis, unit terlibat, tarikh rujukan dan keputusan yang perlu disokong. Pastikan versi, tarikh kuat kuasa dan dokumen yang diganti dapat dikenal pasti jika dinyatakan.

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

### Contoh penggunaan

#### Contoh input

Pekeliling sintetik tiga halaman. Halaman 2 menyatakan semua ketua unit operasi perlu menghantar laporan pelaksanaan sebelum 15 November melalui urus setia. Unit Pentadbiran tidak disebut. Halaman 3 menyatakan format laporan terdapat dalam Lampiran A, tetapi lampiran itu tidak dibekalkan.

#### Contoh hasil

**Rumusan eksekutif**
Pekeliling mewajibkan **ketua unit operasi** menghantar laporan pelaksanaan kepada urus setia sebelum **15 November**. Ia tidak menyatakan secara jelas bahawa Unit Pentadbiran termasuk dalam skop tersebut. Format wajib dirujuk kepada Lampiran A, yang belum tersedia.

| Keperluan/tindakan                         | Pihak                    | Tarikh               | Sumber             | Tahap kepastian                        |
| ------------------------------------------ | ------------------------ | -------------------- | ------------------ | -------------------------------------- |
| Sediakan dan hantar laporan pelaksanaan    | Ketua unit operasi       | 15 November          | Halaman 2          | Jelas dalam dokumen                    |
| Gunakan format Lampiran A                  | Ketua unit operasi       | Sebelum penghantaran | Halaman 3          | Keperluan jelas; format tidak tersedia |
| Sahkan sama ada Unit Pentadbiran tertakluk | Pemilik dasar/urus setia | `[TIDAK DINYATAKAN]` | Unit tidak disebut | Memerlukan pengesahan                  |

**Jurang dan risiko:** Jangan mengarahkan Unit Pentadbiran menghantar laporan sebagai kewajipan berdasarkan petikan ini sahaja. Dapatkan dokumen penuh, Lampiran A dan pengesahan skop daripada pemilik dasar. Semak nombor versi serta sebarang pindaan sebelum tindakan diluluskan.

### Semakan kualiti

- Identiti, versi dan tarikh kuat kuasa dokumen dinyatakan.
- Setiap tarikh, kewajipan dan tindakan mempunyai halaman atau seksyen sumber.
- Petikan dokumen, parafrasa dan tafsiran tentatif dibezakan.
- Pengecualian atau hubungan dengan dasar lain tidak direka.

### Batasan dan penggunaan bertanggungjawab

AI boleh tersalah membaca jadual, pindaan atau rujukan silang. Pegawai bertanggungjawab menyemak dokumen terkini dan mendapatkan pengesahan pihak berkuasa.

## English

### What you will get

A source-grounded summary covering the document purpose, affected parties, obligations, prohibitions, dates, actions, operational implications and items still requiring confirmation.

### Before you begin

Prepare a complete authoritative document permitted by the organisation. State the analysis purpose, affected unit, reference date and decision being supported. Confirm its version, effective date and superseded material where stated.

### How to use it

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

### Worked example

#### Sample input

A synthetic three-page circular. Page 2 states that all heads of operational units must submit an implementation report through the secretariat by 15 November. The Administration Unit is not mentioned. Page 3 says the report format appears in Appendix A, but the appendix is not supplied.

#### Sample output

**Executive summary**
The circular requires **heads of operational units** to submit an implementation report to the secretariat by **15 November**. It does not explicitly state that the Administration Unit is within scope. The mandatory format is referenced in Appendix A, which is not available.

| Requirement/action                          | Party                      | Date              | Source                | Confidence                            |
| ------------------------------------------- | -------------------------- | ----------------- | --------------------- | ------------------------------------- |
| Prepare and submit an implementation report | Heads of operational units | 15 November       | Page 2                | Clear in the document                 |
| Use the Appendix A format                   | Heads of operational units | Before submission | Page 3                | Requirement clear; format unavailable |
| Confirm whether Administration is in scope  | Policy owner/secretariat   | `[NOT STATED]`    | Unit is not mentioned | Confirmation required                 |

**Gaps and risks:** Do not direct Administration to submit a report as a mandatory requirement based on this extract alone. Obtain the complete document, Appendix A and a scope confirmation from the policy owner. Check the version number and any amendments before action is approved.

### Quality check

- Document identity, version and effective date are stated.
- Every date, obligation and action has a page or section source.
- Document text, paraphrase and tentative interpretation are separated.
- Exceptions or relationships with other policies are not invented.

### Limitations and responsible use

AI may misread tables, amendments or cross-references. An authorised officer must verify the current source and obtain confirmation from the responsible authority.
