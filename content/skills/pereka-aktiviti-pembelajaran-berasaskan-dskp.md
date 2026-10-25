---
schema_version: 1
id: skill-dskp-activity-001
type: skill
status: approved
slug:
  {
    ms: pereka-aktiviti-pembelajaran-berasaskan-dskp,
    en: dskp-aligned-learning-activity-designer,
  }
title:
  {
    ms: Pereka Aktiviti Pembelajaran Berasaskan DSKP,
    en: DSKP-Aligned Learning Activity Designer,
  }
summary:
  ms: Tukar petikan DSKP yang disahkan kepada beberapa pilihan aktiviti kelas yang realistik, berbeza dan boleh dinilai tanpa mencipta standard kurikulum.
  en: Turn a verified DSKP extract into several realistic, differentiated and assessable classroom activity options without inventing curriculum standards.
audiences: [teachers_educators]
use_cases: [teaching_learning]
sectors: [education]
categories: [learning_activity_design]
tags: [dskp, classroom_activity, differentiation, formative_assessment]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto v0.2.0 dengan petikan dan bahan sintetik lulus bagi kesetiaan sumber, senarai bahan tertutup, kekangan peralatan serta berhenti apabila sumber atau konteks tiada; semakan guru terhadap kebolehlaksanaan aktiviti tetap diperlukan.",
        en: "A Gemini Auto v0.2.0 test with synthetic source and materials passed source fidelity, closed-material, equipment-constraint and missing-source or context stop checks; teacher review of activity feasibility remains required.",
      }
difficulty: intermediate
intended_output: classroom_activity_options
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Kandungan asal Forward College.,
      en: Original Forward College content.,
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
version: 0.2.1
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids:
  [
    skill-rph-001,
    prompt-learning-objectives-001,
    prompt-differentiated-activity-001,
  ]
featured: false
search_aliases:
  ms: [aktiviti dskp, idea aktiviti kelas, aktiviti pengajaran]
  en: [dskp activity, classroom activity ideas, lesson activity]
skill:
  estimated_minutes: 15
  outcome:
    ms: Tiga pilihan aktiviti dengan masa, bahan, penyertaan murid, bukti pembelajaran dan semakan guru.
    en: Three activity options with timing, materials, learner participation, evidence of learning and teacher checks.
  prerequisites:
    ms:
      [
        PDF atau petikan DSKP rasmi yang boleh dikenal pasti,
        Konteks umum kelas tanpa data peribadi,
        Masa dan bahan yang tersedia,
      ]
    en:
      [
        Identifiable official DSKP PDF or extract,
        General class context without personal data,
        Available time and materials,
      ]
  required_inputs:
    - id: curriculum_source
      label: { ms: PDF atau petikan DSKP, en: DSKP PDF or extract }
      required: true
    - id: target_standard
      label: { ms: Standard sasaran, en: Target standard }
      required: true
    - id: class_constraints
      label:
        {
          ms: "Konteks, masa dan bahan kelas",
          en: "Class context, time and materials",
        }
      required: true
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-dskp-activity-001/0.2.1/design-dskp-aligned-activities.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
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
          {
            ms: DSKP rasmi yang sepadan dengan mata pelajaran dan tahap.,
            en: Official DSKP matching the subject and level.,
          }
    runtime_inputs:
      - { id: class_context, type: structured_input, sensitive: false }
      - { id: available_resources, type: structured_input, sensitive: false }
    missing_reference_behavior: stop_and_request_source
  limitations:
    ms:
      [
        Aktiviti mesti disemak oleh guru.,
        Jangan masukkan data murid.,
        Jangan cipta atau menggabungkan standard DSKP.,
      ]
    en:
      [
        Activities require teacher review.,
        Do not include student data.,
        Do not invent or combine DSKP standards.,
      ]
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Tiga pilihan aktiviti untuk standard DSKP yang sama: satu pilihan asas, satu pilihan kolaboratif dan satu pilihan alternatif bagi kekangan masa atau sumber. Setiap pilihan menyatakan tempoh, bahan, langkah, penyertaan murid, bukti pembelajaran dan risiko pelaksanaan.

### Sebelum bermula

Lampirkan PDF atau petikan DSKP rasmi yang boleh dikenal pasti. Nyatakan standard sasaran, tahap, masa, konteks umum kelas, bahan yang tersedia dan keperluan aksesibiliti. Jangan sertakan nama, diagnosis atau rekod individu murid.

### Langkah penggunaan

1. Minta AI mengenal pasti dokumen, kod dan pernyataan standard daripada sumber.
2. Sahkan standard sasaran sebelum aktiviti direka.
3. Berikan masa, bahan dan kekangan kelas sebagai senarai tertutup.
4. Bandingkan pilihan berdasarkan bukti pembelajaran, bukan sekadar daya tarikan.
5. Pilih dan ubah suai satu aktiviti selepas semakan keselamatan dan kebolehlaksanaan.

### Arahan untuk disalin

```text
Anda ialah pembantu reka bentuk aktiviti pembelajaran untuk guru di Malaysia. Gunakan hanya PDF atau petikan DSKP yang saya berikan.

Input:
- Sumber DSKP: {{SUMBER_DSKP}}
- Mata pelajaran dan tahap: {{MATA_PELAJARAN_DAN_TAHAP}}
- Standard sasaran: {{STANDARD_SASARAN}}
- Tempoh tersedia: {{TEMPOH}}
- Konteks umum kelas tanpa data pengenalan: {{KONTEKS_KELAS}}
- Bahan dan kemudahan yang tersedia: {{BAHAN_TERSEDIA}}
- Keperluan aksesibiliti atau keselamatan: {{KEPERLUAN}}

Sebelum mereka bentuk aktiviti, nyatakan tajuk dokumen, pihak penerbit, edisi jika diketahui, kod dan pernyataan standard serta lokasi sumber. Minta saya mengesahkannya. Jika sumber tidak sepadan, tidak boleh dibaca atau standard tidak dapat dikenal pasti, berhenti. Jangan mencipta, menggabungkan atau meluaskan standard.

Selepas pengesahan, hasilkan tiga pilihan aktiviti yang berbeza tetapi menyokong standard yang sama. Bagi setiap pilihan, berikan objektif boleh diperhatikan, tempoh, urutan langkah, tindakan guru, tindakan murid, bahan, bentuk penyertaan, bukti pembelajaran, sokongan atau pengayaan pilihan, risiko dan semakan guru.

Anggap masa, bahan dan kemudahan sebagai had tertutup. Jangan tambah aplikasi, peranti, cetakan atau bahan yang tidak diberi. Jangan melabel murid sebagai lemah, sederhana atau tinggi. Jangan mencipta maklumat peribadi, diagnosis atau andaian tentang kebolehan. Akhiri dengan jadual perbandingan kebolehlaksanaan dan senarai semak guru yang tidak ditanda.

Perkataan seperti menulis, mencatat, melengkapkan lembaran, menggunakan kad, merujuk panduan bergambar atau merekod pada papan putih memerlukan bahan yang sepadan. Jangan gunakannya jika kertas, alat tulis, lembaran, kad atau papan putih tidak berada dalam senarai. Jika bukti bertulis diperlukan tetapi medium tidak diberi, nyatakan `Medium rekod belum disahkan` dan tunggu keputusan guru. Jangan menukar bahan terhad kepada stesen yang mustahil dilaksanakan serentak.
```

### Contoh ringkas

Input sintetik: Sains Tingkatan 1, standard yang disahkan tentang ketumpatan, 40 minit, penimbang, silinder penyukat, air dan tiga objek selamat. Hasil sepatutnya membandingkan demonstrasi berpandu, siasatan kumpulan kecil dan analisis data yang diberikan tanpa menambah bahan lain.

### Batasan dan penggunaan bertanggungjawab

AI tidak mengetahui keadaan sebenar kelas atau prosedur keselamatan sekolah. Guru mesti menyemak standard, arahan, masa, bahan, aksesibiliti dan risiko sebelum digunakan. Jika specialist review belum diperoleh, sahkan semua rujukan dengan DSKP semasa.

### Pakej kemahiran

Pakej draf mengandungi arahan generik sahaja dan tidak membundel PDF DSKP. Semua fungsi utama boleh digunakan dengan menyalin arahan di atas dan melampirkan sumber sendiri.

## English

### What you will get

Three activity options for the same DSKP standard: a core option, a collaborative option and an alternative for time or resource constraints. Each states timing, materials, steps, learner participation, evidence of learning and implementation risks.

### Before you begin

Attach an identifiable official DSKP PDF or extract. State the target standard, level, time, general class context, available materials and accessibility needs. Do not include names, diagnoses or individual learner records.

### How to use it

1. Ask the AI to identify the document, code and standard wording from the source.
2. Confirm the target standard before activity design.
3. Supply time, materials and class constraints as a closed list.
4. Compare options by learning evidence, not novelty alone.
5. Select and adapt one activity after safety and feasibility review.

### Copyable instruction

```text
You are a learning-activity design assistant for a teacher in Malaysia. Use only the DSKP PDF or extract I provide.

Inputs:
- DSKP source: {{DSKP_SOURCE}}
- Subject and level: {{SUBJECT_AND_LEVEL}}
- Target standard: {{TARGET_STANDARD}}
- Available time: {{DURATION}}
- General class context without identifying data: {{CLASS_CONTEXT}}
- Available materials and facilities: {{AVAILABLE_RESOURCES}}
- Accessibility or safety needs: {{NEEDS}}

Before designing activities, state the document title, issuing authority, edition when known, standard code and wording, and source location. Ask me to confirm them. If the source does not match, is unreadable or does not identify the standard, stop. Do not invent, combine or broaden standards.

After confirmation, produce three distinct activity options supporting the same standard. For each, provide an observable objective, duration, sequence, teacher actions, learner actions, materials, participation format, evidence of learning, optional support or extension, risks and teacher checks.

Treat time, materials and facilities as closed constraints. Do not add apps, devices, printing or materials that were not supplied. Do not label learners as weak, average or high. Do not invent personal information, diagnoses or ability assumptions. Finish with a feasibility comparison and an unchecked teacher checklist.

Words such as write, record, complete a worksheet, use cards, consult a picture guide or copy from a whiteboard imply matching materials. Do not use them when paper, writing tools, worksheets, cards or a whiteboard are absent from the list. When written evidence is needed but no medium was supplied, state `Recording medium not confirmed` and wait for the teacher. Do not turn limited equipment into stations that cannot operate concurrently.
```

### Short example

Synthetic input: Form 1 Science, a confirmed density standard, 40 minutes, a scale, measuring cylinder, water and three safe objects. The result should compare a guided demonstration, small-group investigation and supplied-data analysis without adding materials.

### Limitations and responsible use

AI does not know the real classroom or school safety procedures. The teacher must verify the standard, instructions, timing, materials, accessibility and risks. Where specialist review was not obtained, verify all references against the current DSKP.

### Skill package

The draft package contains generic instructions only and does not bundle a DSKP PDF. The complete workflow remains usable by copying the instruction above and attaching your own source.
