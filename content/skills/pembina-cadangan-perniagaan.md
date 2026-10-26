---
schema_version: 1
id: skill-business-proposal-001
type: skill
status: approved
slug: { ms: pembina-cadangan-perniagaan, en: business-proposal-builder }
title: { ms: Pembina Cadangan Perniagaan, en: Business Proposal Builder }
summary:
  ms: Bina draf cadangan perniagaan yang menghubungkan keperluan pelanggan dengan pendekatan, hasil kerja, jadual, andaian dan harga yang perlu disahkan.
  en: Build a business-proposal draft connecting client needs with the approach, deliverables, schedule, assumptions and pricing for verification.
audiences: [sme_entrepreneurs, professionals]
use_cases: [writing_documents, marketing]
sectors: [sme_business, cross_sector]
categories: [business_proposals]
tags: [proposal, client_brief, scope, pricing]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: Lulus ujian Gemini Auto dengan brief sintetik lengkap dan ujian input komersial tidak lengkap selepas pembetulan sempadan tuntutan.,
        en: Passed Gemini Auto testing with a complete synthetic brief and an incomplete-commercial-input test after claim-boundary remediation.,
      }
difficulty: beginner
intended_output: business_proposal
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
    specialist_review_status: not_required,
    specialist_reviewer: null,
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [prompt-customer-response-001, visual-product-photo-001]
featured: true
search_aliases:
  ms: [kertas cadangan, proposal pelanggan, sebut harga projek]
  en: [client proposal, project proposal, scope of work]
skill:
  estimated_minutes: 30
  outcome:
    ms: Draf cadangan pelanggan yang jelas, konsisten dan sedia untuk semakan komersial.
    en: A clear, consistent client proposal ready for commercial review.
  prerequisites:
    ms:
      [
        Brief pelanggan,
        Skop dan hasil kerja,
        Jadual dan harga dalaman yang telah disemak,
      ]
    en:
      [
        Client brief,
        Scope and deliverables,
        Internally reviewed schedule and pricing,
      ]
  required_inputs:
    - id: client_need
      label: { ms: Keperluan pelanggan, en: Client need }
      required: true
    - id: offer
      label: { ms: Pendekatan dan hasil kerja, en: Approach and deliverables }
      required: true
    - id: commercial_terms
      label:
        { ms: Jadual dan terma komersial, en: Schedule and commercial terms }
      required: true
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-business-proposal-001/0.3.0/draft-business-proposal.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    requirement: optional
    persistent_references:
      - id: organisation_capability_pack
        type: approved_company_information
        supplied_by: organisation
        required: false
        sensitive: false
        description:
          ms: Profil, perkhidmatan, bukti pengalaman dan terma standard yang diluluskan.
          en: Approved profile, services, experience evidence and standard terms.
      - id: proposal_template
        type: template
        supplied_by: organisation
        required: false
        sensitive: false
        description:
          ms: Struktur dan gaya cadangan yang diluluskan.
          en: Approved proposal structure and style.
    runtime_inputs:
      - id: client_brief
        type: client_information
        sensitive: true
      - id: approved_pricing
        type: commercial_information
        sensitive: true
    missing_reference_behavior: continue_with_explicit_warning
  limitations:
    ms:
      [
        Jangan cipta bukti,
        testimoni atau hasil.,
        Harga dan terma mesti disahkan manusia.,
        Semakan undang-undang mungkin diperlukan.,
      ]
    en:
      [
        Do not invent evidence,
        testimonials or results.,
        Pricing and terms require human verification.,
        Legal review may be required.,
      ]
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf cadangan perniagaan berorientasikan pelanggan yang menerangkan masalah, pendekatan, skop, hasil kerja, jadual, harga, andaian, pengecualian dan langkah seterusnya tanpa mencipta tuntutan.

### Sebelum bermula

Sediakan brief pelanggan, objektif, pihak berkepentingan, skop, hasil kerja, jadual, harga yang telah diluluskan secara dalaman, terma pembayaran dan bukti pengalaman yang benar. Untuk penggunaan berulang, profil syarikat, katalog perkhidmatan, bukti pengalaman, terma standard dan templat cadangan yang diluluskan boleh menjadi rujukan kekal Skill. Brief pelanggan dan harga khusus kekal sebagai input satu tugasan dan tidak boleh dibundel ke dalam pakej awam. Gunakan nama samaran jika brief mengandungi maklumat sulit.

### Langkah penggunaan

1. Ringkaskan keperluan pelanggan dan tandakan perkara yang belum pasti.
2. Masukkan tawaran sebenar, bukan kemampuan yang diandaikan AI.
3. Jana rangka dahulu dan semak skop sebelum draf penuh.
4. Semak nombor, tarikh, harga, cukai, hak milik dan terma pembayaran.
5. Semak konsistensi antara skop, jadual dan harga.
6. Dapatkan kelulusan komersial atau undang-undang jika perlu.

### Arahan untuk disalin

```text
Anda ialah pembantu penulisan cadangan perniagaan untuk sebuah SME di Malaysia. Tulis dengan jelas, meyakinkan dan jujur. Jangan mencipta pengalaman, data, testimoni, harga, komitmen, cara penyampaian, kaedah, kelayakan fasilitator, manfaat atau hasil.

Input:
- Pelanggan dan konteks: {{KONTEKS_PELANGGAN}}
- Masalah/objektif: {{KEPERLUAN}}
- Pendekatan dicadangkan: {{PENDEKATAN}}
- Skop dan hasil kerja: {{HASIL_KERJA}}
- Jadual dan pencapaian: {{JADUAL}}
- Harga, cukai dan terma pembayaran yang diluluskan: {{TERMA_KOMERSIAL}}
- Bukti pengalaman yang boleh disahkan: {{BUKTI}}
- Nada dan had panjang: {{NADA_PANJANG}}

Mula dengan senarai maksimum lima jurang kritikal. Jika jurang menjejaskan skop, jadual, harga, cukai, bayaran atau terma, tunggu jawapan saya dan jangan hasilkan cadangan penuh. Jangan anggap program bersemuka, dalam talian atau hibrid berdasarkan kemudahan yang disediakan pelanggan. Jangan dakwa tawaran disesuaikan atau meningkatkan produktiviti kecuali input menyokongnya. Kemudian hasilkan:
1. ringkasan eksekutif;
2. pemahaman tentang keperluan pelanggan;
3. pendekatan dan nilai yang relevan;
4. skop, hasil kerja dan kriteria penerimaan;
5. jadual dan tanggungjawab kedua-dua pihak;
6. yuran dan terma;
7. andaian, pengecualian dan risiko;
8. bukti pengalaman yang diberikan sahaja; dan
9. langkah seterusnya.

Gunakan `[PERLU DISAHKAN]` hanya untuk butiran bukan kritikal yang tidak mengubah tawaran komersial. Akhiri dengan audit konsistensi skop-jadual-harga dan senarai tuntutan yang memerlukan bukti. Audit ketepatan dan aritmetik; jangan menilai harga sebagai berpatutan, kompetitif atau mengikut pasaran tanpa bukti.
```

### Contoh penggunaan

#### Contoh input

Input sintetik: sebuah syarikat latihan diminta menjalankan dua bengkel literasi AI untuk 40 peserta, termasuk modul dan laporan ringkas. Harga belum diluluskan.

#### Contoh hasil

**Ringkasan cadangan**
Cadangan ini merangkumi dua bengkel literasi AI untuk 40 peserta bagi membina kefahaman penggunaan AI yang bertanggungjawab dan memberi latihan amali menggunakan senario kerja yang diluluskan. Pelaksanaan dicadangkan dalam dua sesi supaya peserta boleh mencuba kaedah pertama sebelum mengikuti sesi lanjutan.

| Komponen        | Skop dan hasil serahan                                                                                    | Tanggungjawab                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Bengkel 1       | Pengenalan, penggunaan bertanggungjawab dan latihan membina arahan; satu set slaid dan lembaran aktiviti. | Penyedia: fasilitasi dan bahan. Pelanggan: sahkan profil peserta serta tempat/peralatan.    |
| Bengkel 2       | Aplikasi kepada dua aliran kerja pelanggan dan semakan hasil; lembaran kerja tindakan susulan.            | Penyedia: fasilitasi dan rumusan. Pelanggan: bekalkan senario yang telah dinyahkenal pasti. |
| Laporan ringkas | Kehadiran, aktiviti yang diselesaikan, maklum balas agregat dan tindakan susulan yang dicadangkan.        | Pelanggan mengesahkan siapa yang menerima laporan.                                          |

**Jadual cadangan:** Tarikh dan tempoh setiap sesi — `[PERLU DISAHKAN]`.
**Yuran profesional:** `[PERLU DISAHKAN SELEPAS SKOP, LOKASI DAN KEPERLUAN LOGISTIK DIPERSETUJUI]`.
**Tidak termasuk:** perjalanan, sewaan tempat, peralatan peserta dan pembangunan sistem tersuai kecuali dinyatakan secara bertulis.

**Andaian utama:** maksimum 40 peserta; bahan pelanggan diterima sekurang-kurangnya lima hari bekerja sebelum bengkel; semua data latihan telah dinyahkenal pasti.

### Semakan kualiti

- Keperluan pelanggan dan penyelesaian berkait secara langsung.
- Skop, hasil kerja, jadual dan harga konsisten.
- Semua tuntutan disokong bukti yang diberikan.
- Andaian dan perkara di luar skop jelas.
- Terma komersial telah disahkan pihak berkuasa dalaman.

### Batasan dan penggunaan bertanggungjawab

Ini bukan nasihat undang-undang, kewangan atau cukai. Jangan masukkan data sulit pelanggan ke alat yang tidak diluluskan. Manusia mesti mengesahkan semua komitmen, angka dan terma sebelum cadangan dihantar.

## English

### What you will get

A client-focused proposal draft covering the problem, approach, scope, deliverables, schedule, price, assumptions, exclusions and next steps without invented claims.

### Before you begin

Prepare the client brief, objectives, stakeholders, scope, deliverables, schedule, internally approved pricing, payment terms and truthful evidence of experience. For repeated use, approved company information, service catalogue, experience evidence, standard terms and a proposal template may be persistent Skill references. Client briefs and deal-specific pricing remain single-task inputs and must not be bundled into a public package. Use placeholders if the brief contains confidential information.

### How to use it

1. Summarise the client need and flag uncertainties.
2. Supply the actual offer rather than asking AI to assume capabilities.
3. Generate and review an outline before requesting the full draft.
4. Verify numbers, dates, pricing, tax, ownership and payment terms.
5. Check consistency across scope, schedule and price.
6. Obtain commercial or legal approval when required.

### Copyable instruction

```text
You are a business-proposal writing assistant for a Malaysian SME. Write clearly, persuasively and honestly. Do not invent experience, data, testimonials, prices, commitments, delivery modes, methods, facilitator credentials, benefits or outcomes.

Inputs:
- Client and context: {{CLIENT_CONTEXT}}
- Problem/objective: {{NEED}}
- Proposed approach: {{APPROACH}}
- Scope and deliverables: {{DELIVERABLES}}
- Schedule and milestones: {{SCHEDULE}}
- Approved price, tax and payment terms: {{COMMERCIAL_TERMS}}
- Verifiable experience: {{EVIDENCE}}
- Tone and length: {{TONE_LENGTH}}

Begin with no more than five critical gaps. If a gap affects scope, schedule, price, tax, payment or terms, wait for my answer and do not draft the full proposal. Do not infer in-person, online or hybrid delivery from facilities supplied by the client. Do not claim that the offer is customised or improves productivity unless the inputs support it. Then provide:
1. executive summary;
2. understanding of the client need;
3. relevant approach and value;
4. scope, deliverables and acceptance criteria;
5. schedule and responsibilities of both parties;
6. fees and terms;
7. assumptions, exclusions and risks;
8. only the evidence supplied; and
9. next steps.

Use `[CONFIRMATION REQUIRED]` only for non-critical details that do not change the commercial offer. End with a scope-schedule-price consistency audit and a list of claims requiring evidence. Audit accuracy and arithmetic; do not judge the price as fair, competitive or market-standard without evidence.
```

### Worked example

#### Sample input

Synthetic input: a training company is asked to run two AI-literacy workshops for 40 participants, including modules and a short report. Pricing is not approved.

#### Sample output

**Proposal summary**
This proposal covers two AI-literacy workshops for 40 participants, designed to build responsible-use understanding and provide hands-on practice with approved workplace scenarios. The two-session structure allows participants to try the initial method before attending the follow-up workshop.

| Component    | Scope and deliverable                                                                                  | Responsibility                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Workshop 1   | Foundations, responsible use and instruction-building practice; one slide deck and activity worksheet. | Provider: facilitation and materials. Client: confirm participant profile and venue/equipment. |
| Workshop 2   | Application to two client workflows and output review; follow-up action worksheet.                     | Provider: facilitation and summary. Client: supply de-identified scenarios.                    |
| Short report | Attendance, completed activities, aggregate feedback and recommended follow-up actions.                | Client confirms authorised report recipients.                                                  |

**Proposed schedule:** Date and duration of each session — `[CONFIRMATION REQUIRED]`.
**Professional fee:** `[TO BE CONFIRMED AFTER SCOPE, LOCATION AND LOGISTICS ARE AGREED]`.
**Exclusions:** travel, venue hire, participant equipment and custom system development unless agreed in writing.

**Key assumptions:** no more than 40 participants; client material received at least five working days before delivery; all training data is de-identified.

### Quality check

- Client needs map directly to the solution.
- Scope, deliverables, schedule and price are consistent.
- Every claim is supported by supplied evidence.
- Assumptions and exclusions are explicit.
- Commercial terms have been approved internally.

### Limitations and responsible use

This is not legal, financial or tax advice. Do not enter confidential client data into an unapproved tool. A human must verify every commitment, number and term before sending the proposal.
