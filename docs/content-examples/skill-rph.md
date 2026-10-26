---
schema_version: 1
id: skill-rph-001
type: skill
status: draft

slug:
  ms: penjana-rancangan-pengajaran-harian
  en: daily-lesson-plan-generator

title:
  ms: Penjana Rancangan Pengajaran Harian
  en: Daily Lesson Plan Generator

summary:
  ms: Hasilkan draf RPH yang tersusun berdasarkan objektif, tahap murid, tempoh pengajaran dan keperluan kelas sebenar.
  en: Produce a structured lesson-plan draft based on objectives, learner level, lesson duration and real classroom needs.

audiences:
  - teachers_educators
use_cases:
  - teaching_learning
sectors:
  - education
categories:
  - lesson_planning
tags:
  - rph
  - dskp
  - classroom_activity

tools:
  - id: chatgpt
    compatibility: expected
    tested_on: null
    notes:
      ms: Ujian formal diperlukan sebelum penerbitan.
      en: Formal testing is required before publication.
  - id: gemini
    compatibility: expected
    tested_on: null
    notes:
      ms: Ujian formal diperlukan sebelum penerbitan.
      en: Formal testing is required before publication.

difficulty: beginner
intended_output: lesson_plan
languages:
  - ms
  - en

author:
  name: Forward College
  url: null
curator:
  name: Forward College

provenance:
  kind: original
  source_urls: []
  notes:
    ms: Contoh skema kandungan asal untuk perancangan produk.
    en: Original content-schema example for product planning.

license:
  id: cc-by-4.0
  label: Creative Commons Attribution 4.0 International (CC BY 4.0)
  url: https://creativecommons.org/licenses/by/4.0/

review:
  status: pending
  organisation: Forward College
  editorial_reviewer: Howie Chang
  specialist_review_status: not_obtained
  specialist_reviewer: null
  last_reviewed: null
  next_review_due: null

version: 0.1.0
created_at: "2026-10-21"
updated_at: "2026-10-21"

related_ids:
  - prompt-quiz-001
featured: true

search_aliases:
  ms:
    - rancangan mengajar
    - rancangan pelajaran harian
    - aktiviti dskp
  en:
    - lesson planning
    - daily teaching plan
    - classroom plan

skill:
  estimated_minutes: 20
  outcome:
    ms: Draf RPH lengkap yang boleh disemak dan disesuaikan oleh guru.
    en: A complete lesson-plan draft for the teacher to review and adapt.
  prerequisites:
    ms:
      - Objektif pembelajaran atau petikan DSKP yang berkaitan
      - Maklumat tahap dan keperluan murid
      - Tempoh pengajaran
    en:
      - Relevant learning objectives or DSKP extract
      - Learner level and needs
      - Lesson duration
  required_inputs:
    - id: subject
      label:
        ms: Mata pelajaran
        en: Subject
      required: true
    - id: learning_objective
      label:
        ms: Objektif pembelajaran
        en: Learning objective
      required: true
    - id: learner_context
      label:
        ms: Konteks murid
        en: Learner context
      required: true
    - id: duration_minutes
      label:
        ms: Tempoh dalam minit
        en: Duration in minutes
      required: true
  instruction_copy_available: true
  package:
    available: true
    path: /downloads/skills/skill-rph-001/0.1.0/penjana-rph.zip
    format: skill_md_zip
    included_files:
      - README.md
      - SKILL.md
      - LICENSES.md
      - references/contoh-rph.md
  limitations:
    ms:
      - Semua cadangan perlu disemak oleh guru sebelum digunakan.
      - Jangan masukkan maklumat pengenalan murid.
    en:
      - All suggestions require teacher review before use.
      - Do not include personally identifying student information.
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Satu draf Rancangan Pengajaran Harian yang menghubungkan objektif pembelajaran, aktiviti, pentaksiran formatif dan langkah pembezaan. Draf ini ialah bahan sokongan dan bukan pengganti pertimbangan profesional guru.

### Sebelum bermula

Sediakan:

- mata pelajaran dan tahap atau tahun;
- objektif pembelajaran atau petikan DSKP yang berkaitan;
- tempoh kelas;
- bilangan dan keperluan umum murid; dan
- sumber yang tersedia di dalam kelas.

Padamkan nama murid atau sebarang maklumat yang boleh mengenal pasti individu.

### Langkah penggunaan

1. Isikan maklumat kelas menggunakan senarai di atas.
2. Salin arahan di bawah ke dalam alat AI yang diluluskan.
3. Jawab soalan penjelasan jika maklumat penting masih belum lengkap.
4. Semak keselarasan objektif, aktiviti dan pentaksiran.
5. Ubah suai aktiviti mengikut masa, kemudahan dan keperluan sebenar murid.
6. Simpan versi yang telah disemak mengikut tatacara sekolah anda.

### Arahan untuk disalin

```text
Anda ialah pembantu perancangan pengajaran untuk seorang guru di Malaysia.

Gunakan maklumat yang saya berikan untuk menyediakan draf Rancangan Pengajaran Harian dalam Bahasa Melayu. Jangan mereka-reka standard DSKP atau fakta yang tidak diberikan. Jika maklumat penting tiada, tanya soalan penjelasan yang ringkas sebelum menghasilkan draf.

Maklumat kelas:
- Mata pelajaran: {{MATA_PELAJARAN}}
- Tahun/Tingkatan: {{TAHAP}}
- Objektif atau petikan DSKP: {{OBJEKTIF_DSKP}}
- Tempoh: {{TEMPOH_MINIT}} minit
- Konteks murid: {{KONTEKS_MURID}}
- Sumber tersedia: {{SUMBER}}

Sediakan:
1. objektif pembelajaran yang boleh diperhatikan;
2. kriteria kejayaan;
3. langkah pengajaran dengan anggaran masa;
4. aktiviti permulaan, perkembangan dan penutup;
5. pentaksiran formatif;
6. cadangan pembezaan atau sokongan;
7. bahan yang diperlukan; dan
8. senarai semak guru untuk mengesahkan kesesuaian draf.

Gunakan jadual yang ringkas dan bahasa profesional. Tandakan dengan jelas sebarang andaian yang dibuat. Jangan masukkan data peribadi murid.
```

### Contoh input ringkas

```text
Mata pelajaran: Sains
Tahun/Tingkatan: Tahun 5
Objektif: Murid menerangkan tiga keadaan jirim dan memberi contoh harian
Tempoh: 60 minit
Konteks murid: 30 murid; campuran tahap penguasaan
Sumber: Ais, cawan lutsinar, projektor dan lembaran kerja
```

### Semakan kualiti

- Adakah setiap aktiviti menyokong objektif?
- Bolehkah pencapaian murid diperhatikan atau diukur?
- Adakah tempoh setiap langkah realistik?
- Adakah aktiviti selamat dan sesuai dengan konteks kelas?
- Adakah cadangan pembezaan praktikal?
- Adakah semua rujukan DSKP datang daripada sumber yang diberikan guru?

### Batasan dan penggunaan bertanggungjawab

AI mungkin menghasilkan aktiviti yang tidak selaras, tidak praktikal atau tidak tepat. Guru bertanggungjawab menyemak kandungan, keselamatan, kesesuaian budaya dan keselarasan kurikulum sebelum digunakan.

## English

### What you will get

A Daily Lesson Plan draft connecting learning objectives, activities, formative assessment and differentiation. It supports, but does not replace, the teacher’s professional judgement.

### Before you begin

Prepare:

- subject and year/form level;
- the relevant learning objective or DSKP extract;
- lesson duration;
- class size and general learner needs; and
- resources available in the classroom.

Remove student names and any information that could identify an individual.

### How to use it

1. Complete the class information listed above.
2. Copy the instruction below into an approved AI tool.
3. Answer any clarification questions if important information is missing.
4. Check alignment between objectives, activities and assessment.
5. Adapt the activities to the actual time, facilities and learner needs.
6. Save the reviewed version according to your school’s procedures.

### Copyable instruction

```text
You are a lesson-planning assistant supporting a teacher in Malaysia.

Use the information I provide to prepare a Daily Lesson Plan draft in English. Do not invent DSKP standards or facts that were not provided. If essential information is missing, ask concise clarification questions before producing the draft.

Class information:
- Subject: {{SUBJECT}}
- Year/Form: {{LEVEL}}
- Objective or DSKP extract: {{OBJECTIVE_DSKP}}
- Duration: {{DURATION_MINUTES}} minutes
- Learner context: {{LEARNER_CONTEXT}}
- Available resources: {{RESOURCES}}

Provide:
1. observable learning objectives;
2. success criteria;
3. lesson stages with estimated timing;
4. opening, development and closing activities;
5. formative assessment;
6. differentiation or support suggestions;
7. required materials; and
8. a teacher checklist for verifying the draft.

Use a concise table and professional language. Clearly label any assumption. Do not include personal student data.
```

### Short sample input

```text
Subject: Science
Year/Form: Year 5
Objective: Learners explain the three states of matter and give everyday examples
Duration: 60 minutes
Learner context: 30 learners with mixed attainment levels
Resources: Ice, clear cups, projector and worksheet
```

### Quality check

- Does every activity support the objective?
- Can learner achievement be observed or measured?
- Is the timing realistic?
- Are activities safe and suitable for the classroom context?
- Are differentiation suggestions practical?
- Did every DSKP reference come from material supplied by the teacher?

### Limitations and responsible use

AI may suggest activities that are misaligned, impractical or inaccurate. The teacher remains responsible for checking content, safety, cultural suitability and curriculum alignment before use.
