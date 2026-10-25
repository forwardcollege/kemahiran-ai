---
schema_version: 1
id: skill-rph-001
type: skill
status: approved
slug:
  ms: penjana-rancangan-pengajaran-harian
  en: daily-lesson-plan-generator
title:
  ms: Penjana Rancangan Pengajaran Harian
  en: Daily Lesson Plan Generator
summary:
  ms: Bina draf RPH yang menyelaraskan objektif, aktiviti, pentaksiran formatif dan pembezaan berdasarkan konteks sebenar kelas.
  en: Build a lesson-plan draft aligning objectives, activities, formative assessment and differentiation with the real classroom context.
audiences: [teachers_educators]
use_cases: [teaching_learning, writing_documents]
sectors: [education]
categories: [lesson_planning]
tags: [rph, dskp, formative_assessment, differentiation]
tools:
  - id: gemini
    compatibility: limited
    tested_on: "2026-10-25"
    notes:
      ms: Ujian tingkah laku v0.4.0 dalam Gemini Auto lulus bagi pengesahan sumber, input wajib, standard sasaran tepat, keselamatan mata, senarai bahan tertutup dan pembezaan tanpa label. Keserasian kekal terhad kerana isu editorial kecil dalam hasil alat masih memerlukan semakan pengguna.
      en: A v0.4.0 behavioural test in Gemini Auto passed source confirmation, required-input, exact-target-standard, eye-safety, closed-material and non-labelling differentiation checks. Compatibility remains limited because minor editorial issues in tool output still require user review.
difficulty: beginner
intended_output: daily_lesson_plan
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
  status: internal_approved
  organisation: Forward College
  editorial_reviewer: Howie Chang
  specialist_review_status: not_obtained
  specialist_reviewer: null
  last_reviewed: "2026-10-25"
  next_review_due: "2027-04-25"
version: 0.4.2
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [prompt-parent-message-001, visual-education-001]
featured: true
search_aliases:
  ms: [rancangan mengajar, rancangan pelajaran harian, aktiviti dskp]
  en: [lesson planning, daily teaching plan, classroom plan]
skill:
  estimated_minutes: 20
  outcome:
    ms: Draf RPH lengkap yang boleh disemak dan disesuaikan oleh guru.
    en: A complete lesson-plan draft for the teacher to review and adapt.
  prerequisites:
    ms:
      [
        PDF DSKP rasmi atau petikan yang boleh dikenal pasti,
        Konteks umum murid tanpa data pengenalan,
        Tempoh dan sumber tersedia,
      ]
    en:
      [
        Official DSKP PDF or identifiable extract,
        General learner context without identifying data,
        Duration and available resources,
      ]
  required_inputs:
    - id: curriculum_source
      label:
        { ms: PDF atau petikan DSKP rasmi, en: Official DSKP PDF or extract }
      required: true
    - id: subject_level
      label: { ms: Mata pelajaran dan tahap, en: Subject and level }
      required: true
    - id: objective_dskp
      label: { ms: Objektif atau petikan DSKP, en: Objective or DSKP extract }
      required: true
    - id: learner_context
      label: { ms: Konteks murid, en: Learner context }
      required: true
    - id: duration_resources
      label: { ms: Tempoh dan sumber, en: Duration and resources }
      required: true
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-rph-001/0.4.2/generate-dskp-grounded-rph.zip,
      format: skill_md_zip,
      included_files:
        [
          README.md,
          SKILL.md,
          LICENSES.md,
          references/knowledge-setup.md,
          references/source-manifest.template.yml,
          references/example-dskp-extract.md,
          references/sample-input-output.md,
        ],
    }
  knowledge:
    requirement: required
    persistent_references:
      - id: curriculum_source
        type: official_document
        supplied_by: user
        required: true
        sensitive: false
        description:
          ms: PDF DSKP rasmi yang sepadan dengan mata pelajaran, tahun atau tingkatan dan edisi kurikulum.
          en: Official DSKP PDF matching the subject, year or form and curriculum edition.
    runtime_inputs:
      - id: class_context
        type: structured_input
        sensitive: false
      - id: school_rph_format
        type: template
        sensitive: false
    missing_reference_behavior: stop_and_request_source
  limitations:
    ms:
      [
        Semua cadangan perlu disemak oleh guru.,
        Jangan masukkan maklumat pengenalan murid.,
        Jangan benarkan AI mencipta rujukan DSKP.,
      ]
    en:
      [
        All suggestions require teacher review.,
        Do not include identifying student information.,
        Do not allow AI to invent DSKP references.,
      ]
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf RPH yang menghubungkan objektif pembelajaran, kriteria kejayaan, langkah pengajaran, pentaksiran formatif dan pembezaan. Kemahiran ini membantu penyediaan draf; guru kekal bertanggungjawab terhadap ketepatan kurikulum, keselamatan dan kesesuaian kelas.

### Sebelum bermula

Sediakan PDF DSKP rasmi yang sepadan dengan mata pelajaran dan tahun atau tingkatan. Jika PDF tidak boleh diberikan, sediakan petikan yang menyatakan tajuk dokumen, edisi, Standard Kandungan dan Standard Pembelajaran. Sediakan juga tempoh, konteks umum murid, sumber tersedia serta format RPH sekolah jika diwajibkan. Buang nama murid, keputusan individu dan maklumat yang boleh mengenal pasti seseorang.

### Langkah penggunaan

1. Tambahkan PDF DSKP kepada Skill atau lampirkan PDF dalam perbualan Gemini.
2. Nyatakan mata pelajaran, tahun atau tingkatan, topik dan edisi jika diketahui.
3. Minta Gemini mengenal pasti Standard Kandungan dan Standard Pembelajaran beserta seksyen, halaman bercetak dan halaman pemapar PDF jika nombornya berbeza.
4. Sahkan rujukan tersebut sebelum meminta draf RPH.
5. Lengkapkan konteks kelas, tempoh, sumber dan format sekolah.
6. Semak masa, keselamatan, kebolehlaksanaan, pembezaan dan kesetiaan kepada sumber.
7. Edit sendiri sebelum menyimpan atau berkongsi RPH.

### Arahan untuk disalin

```text
Anda ialah pembantu perancangan pengajaran untuk guru di Malaysia. Bantu saya menyediakan draf Rancangan Pengajaran Harian (RPH), bukan keputusan pedagogi muktamad.

Sumber kurikulum:
- Gunakan PDF atau petikan DSKP yang dilampirkan sebagai sumber utama.
- Tajuk/edisi dokumen jika diketahui: {{SUMBER_DSKP}}

Input:
- Mata pelajaran dan tahap: {{MATA_PELAJARAN_DAN_TAHAP}}
- Objektif pembelajaran atau petikan DSKP yang saya berikan: {{OBJEKTIF_DSKP}}
- Tempoh: {{TEMPOH_MINIT}} minit
- Konteks umum murid tanpa data pengenalan: {{KONTEKS_MURID}}
- Sumber dan kemudahan: {{SUMBER}}
- Format wajib sekolah, jika ada: {{FORMAT_RPH}}

Sebelum menghasilkan draf:
1. Kenal pasti tajuk, pihak penerbit, edisi atau tarikh penerbitan dokumen DSKP yang sepadan dengan mata pelajaran dan tahap.
2. Petik Standard Kandungan dan Standard Pembelajaran yang relevan. Sahkan kod, pernyataan dan nota sokongan datang daripada baris jadual yang sama. Nyatakan seksyen dan, jika berbeza, kedua-dua halaman bercetak serta halaman pemapar PDF.
   Jika saya menyatakan standard sasaran yang tepat, jangan tambah standard berjiran sebagai sasaran atau sokongan melainkan saya memintanya.
3. Minta saya mengesahkan pilihan tersebut.
4. Jika sumber yang sepadan tiada, tidak boleh dibaca atau bercanggah, berhenti dan minta sumber yang betul. Jangan mencipta Standard Kandungan, Standard Pembelajaran atau nombor rujukan DSKP.
5. Selepas sumber disahkan, tanya maksimum lima soalan ringkas jika input kelas penting masih tiada.
6. Jangan menganggap tempoh, saiz kelas, konteks murid, kemudahan atau bahan. Jika mana-mana maklumat ini tiada, berhenti dan minta maklumat tersebut sebelum menghasilkan draf.

Hasilkan:
1. objektif pembelajaran yang boleh diperhatikan;
2. kriteria kejayaan;
3. jadual langkah pengajaran dengan masa, tindakan guru dan tindakan murid;
4. pentaksiran formatif dan bukti pembelajaran;
5. pembezaan yang praktikal;
6. bahan, persediaan dan langkah keselamatan;
7. ruang refleksi guru; dan
8. senarai semak pengesahan.

Pastikan jumlah masa realistik. Tandakan `[PERLU SEMAKAN GURU]` pada andaian atau perkara yang memerlukan keputusan profesional. Akhiri dengan lima semakan kritikal yang patut dibuat oleh guru.

Anggap kemudahan dan bahan yang saya sahkan sebagai senarai tertutup untuk semua seksyen, termasuk aktiviti, pentaksiran, pembezaan, persediaan dan refleksi. Setiap bahan nyata atau tersirat mesti datang daripada senarai itu; jangan tambah kad, lembaran kerja, buku nota, kertas, pen, papan putih, telefon, lampu, aplikasi atau bahan lazim lain. Kata kerja seperti menulis, merekod, menanda, melukis, melengkapkan lembaran atau menyusun kad memerlukan bahan dan tidak boleh digunakan jika bahan itu belum disahkan. Gantikan dengan respons lisan, menunjuk pada rajah bercetak yang disahkan, paparan kelas melalui projektor atau penggunaan pembaris. Jika bahan tambahan benar-benar diperlukan, senaraikan di bawah `Cadangan bahan tambahan — belum diluluskan` dan tunggu persetujuan saya; jangan rujuk bahan itu dalam pelan semasa. Semak semua seksyen sebelum menjawab. Jangan arahkan murid menyuluh cahaya ke mata orang lain atau menjalankan ujian pupil tanpa protokol keselamatan yang diluluskan. Nyatakan pembezaan sebagai sokongan atau pengayaan pilihan tanpa melabel murid sebagai lemah, sederhana atau tinggi. Biarkan senarai semak akhir tidak ditanda untuk disahkan oleh guru.
```

### Contoh penggunaan

#### Contoh input

```text
Mata pelajaran dan tahap: Sains, Tahun 5
Objektif: Murid menerangkan tiga keadaan jirim dan memberi contoh harian
Tempoh: 60 minit
Konteks murid: 30 murid, tahap penguasaan bercampur
Sumber: Ais, cawan lutsinar, projektor dan lembaran kerja
Format RPH: Jadual masa, aktiviti, catatan
```

#### Contoh hasil

| Masa     | Aktiviti                                                           | Bukti pembelajaran                    |
| -------- | ------------------------------------------------------------------ | ------------------------------------- |
| 5 minit  | Murid memerhati ais dan meramal perubahan                          | Respons lisan awal                    |
| 35 minit | Pemerhatian berpandu dan pengelasan contoh pepejal, cecair dan gas | Jadual pengelasan kumpulan            |
| 15 minit | Soalan semak kefahaman dan pembetulan konsep                       | Tiga jawapan individu                 |
| 5 minit  | Rumusan dan tiket keluar                                           | Satu contoh bagi setiap keadaan jirim |

`[PERLU SEMAKAN GURU]` Pastikan aktiviti ais mematuhi prosedur keselamatan sekolah dan sesuai dengan kemudahan kelas.

### Semakan kualiti

- Semua rujukan kurikulum datang daripada DSKP yang dikenal pasti dan disahkan.
- Tajuk dokumen, pihak penerbit, Standard Kandungan, Standard Pembelajaran dan lokasi sumber dinyatakan; halaman bercetak dan halaman pemapar PDF dibezakan jika perlu.
- Kod, pernyataan standard dan nota sokongan disahkan datang daripada baris jadual yang betul.
- Aktiviti dan pentaksiran menyokong objektif yang sama.
- Jumlah masa, bahan dan langkah keselamatan munasabah.
- Tiada tempoh, saiz kelas, bahan atau kemudahan direka apabila input tersebut tidak diberi.
- Setiap bahan dalam aktiviti dan jadual sepadan dengan senarai bahan yang disahkan; tambahan dipisahkan sebagai cadangan belum diluluskan.
- Aktiviti tidak melibatkan cahaya yang diarahkan ke mata tanpa protokol keselamatan yang diluluskan.
- Pembezaan tidak melabel murid sebagai lemah, sederhana atau tinggi.
- Pembezaan boleh dilaksanakan tanpa melabel murid.
- Tiada data peribadi murid.

### Batasan dan penggunaan bertanggungjawab

AI boleh menghasilkan aktiviti yang tidak tepat, tidak selamat atau tidak sesuai dengan kelas. Jangan salin terus tanpa semakan. Kemahiran ini tidak menilai murid dan tidak menggantikan pertimbangan profesional guru.

## English

### What you will get

A lesson-plan draft connecting learning objectives, success criteria, lesson stages, formative assessment and differentiation. This Skill supports drafting; the teacher remains responsible for curriculum accuracy, safety and classroom suitability.

### Before you begin

Prepare an official DSKP PDF matching the subject and year or form. If the PDF cannot be supplied, provide an extract identifying the document title, edition, Content Standard and Learning Standard. Also prepare the duration, general learner context, available resources and any required school format. Remove student names, individual results and identifying information.

### How to use it

1. Add the DSKP PDF to the Skill or attach it in the Gemini conversation.
2. State the subject, year or form, topic and edition when known.
3. Ask Gemini to identify the Content Standard and Learning Standard with the section, printed page and PDF viewer page when those page numbers differ.
4. Confirm those references before requesting the lesson-plan draft.
5. Complete the class context, duration, resources and school format.
6. Check timing, safety, feasibility, differentiation and source fidelity.
7. Edit the plan yourself before saving or sharing it.

### Copyable instruction

```text
You are a lesson-planning assistant supporting a teacher in Malaysia. Help me prepare a Daily Lesson Plan draft, not a final pedagogical decision.

Curriculum source:
- Use the attached DSKP PDF or extract as the primary source.
- Document title/edition when known: {{DSKP_SOURCE}}

Inputs:
- Subject and level: {{SUBJECT_AND_LEVEL}}
- Learning objective or DSKP extract supplied by me: {{OBJECTIVE_DSKP}}
- Duration: {{DURATION_MINUTES}} minutes
- General learner context without identifying data: {{LEARNER_CONTEXT}}
- Resources and facilities: {{RESOURCES}}
- Required school format, if any: {{LESSON_PLAN_FORMAT}}

Before drafting:
1. Identify the title, issuing authority, edition or publication date of the DSKP document matching the subject and level.
2. Extract the relevant Content Standard and Learning Standard. Confirm that the code, wording and supporting note come from the same table row. State the section and, when different, both the printed page and PDF viewer page.
   If I name an exact target standard, do not add an adjacent standard as a target or supporting standard unless I request it.
3. Ask me to confirm the selection.
4. If a matching source is missing, unreadable or conflicting, stop and request the correct source. Do not invent Content Standards, Learning Standards or DSKP reference numbers.
5. After source confirmation, ask no more than five concise questions if essential class information is still missing.
6. Do not assume the duration, class size, learner context, facilities or materials. If any of these are missing, stop and request them before drafting.

Provide:
1. observable learning objectives;
2. success criteria;
3. a lesson-stage table with timing, teacher actions and learner actions;
4. formative assessment and evidence of learning;
5. practical differentiation;
6. materials, preparation and safety steps;
7. a teacher-reflection space; and
8. a verification checklist.

Keep the total timing realistic. Mark assumptions or professional decisions as `[TEACHER REVIEW REQUIRED]`. End with five critical checks for the teacher.

Treat the facilities and materials I confirm as a closed allowlist across every section, including activities, assessment, differentiation, preparation and reflection. Every explicit or implied item must come from that list; do not add cards, worksheets, notebooks, paper, pens, whiteboards, phones, lights, apps or other common materials. Verbs such as write, record, mark, draw, complete a worksheet or arrange cards require materials and may not be used unless those materials are confirmed. Replace them with oral responses, pointing to a confirmed printed diagram, whole-class projection or use of the ruler. If an additional item is genuinely needed, list it under `Proposed additional material — not approved` and wait for my approval; do not reference it in the current plan. Audit every section before responding. Do not instruct learners to shine a light into another person's eyes or conduct a pupil-response activity without an approved safety protocol. Express differentiation as optional supports or extensions without labelling learners as low, medium or high. Leave the final checklist unchecked for the teacher to verify.
```

### Worked example

#### Sample input

```text
Subject and level: Science, Year 5
Objective: Learners explain the three states of matter and give everyday examples
Duration: 60 minutes
Learner context: 30 learners with mixed attainment
Resources: Ice, clear cups, projector and worksheet
Format: Timing, activity and notes table
```

#### Sample output

| Time       | Activity                                     | Evidence of learning       |
| ---------- | -------------------------------------------- | -------------------------- |
| 5 minutes  | Observe ice and predict change               | Initial oral responses     |
| 35 minutes | Guided observation and classification        | Group classification table |
| 15 minutes | Check questions and misconception correction | Three individual answers   |
| 5 minutes  | Summary and exit ticket                      | One example for each state |

`[TEACHER REVIEW REQUIRED]` Confirm the ice activity follows school safety procedures and suits the available facilities.

### Quality check

- Every curriculum reference came from the identified and confirmed DSKP source.
- The document title, Content Standard, Learning Standard and source location are stated.
- Activities and assessment support the same objective.
- Timing, materials and safety steps are realistic.
- Differentiation is practical and does not label learners.
- No personal student information is included.

### Limitations and responsible use

AI may produce inaccurate, unsafe or unsuitable activities. Do not use the draft without review. This Skill does not assess learners and does not replace professional teaching judgement.
