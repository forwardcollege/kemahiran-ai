---
schema_version: 1
id: prompt-learning-objectives-001
type: llm_prompt
status: approved
slug:
  {
    ms: tulis-objektif-pembelajaran-dan-kriteria-kejayaan,
    en: write-learning-objectives-and-success-criteria,
  }
title:
  {
    ms: Tulis Objektif Pembelajaran dan Kriteria Kejayaan,
    en: Write Learning Objectives and Success Criteria,
  }
summary:
  ms: Tukar topik atau petikan DSKP yang dibekalkan kepada objektif boleh diperhatikan dan kriteria kejayaan mesra murid tanpa mencipta penjajaran kurikulum.
  en: Turn a supplied topic or DSKP extract into observable objectives and learner-friendly success criteria without inventing curriculum alignment.
audiences: [teachers_educators]
use_cases: [teaching_learning]
sectors: [education]
categories: [learning_objectives]
tags: [learning_objective, success_criteria, dskp, lesson_planning]
tools:
  - id: gemini
    compatibility: limited
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto hingga v0.4.0 lulus pelabelan cadangan generik, penanda keadaan tidak ditetapkan, dua hingga empat kriteria bagi setiap objektif dan berhenti bagi tuntutan DSKP tanpa sumber. Keserasian kekal terhad kerana kelengkapan respons gabungan berubah antara larian.",
        en: "Gemini Auto tests through v0.4.0 passed generic-suggestion labelling, unset-condition markers, two to four criteria per objective and stopping for an unsourced DSKP claim. Compatibility remains limited because combined-response completeness varied between runs.",
      }
difficulty: beginner
intended_output: learning_objectives_and_success_criteria
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
version: 0.4.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [skill-rph-001, skill-dskp-activity-001]
featured: false
search_aliases:
  ms: [objektif pembelajaran, kriteria kejayaan, hasil pembelajaran]
  en: [learning objectives, success criteria, lesson outcomes]
llm_prompt:
  variables:
    - {
        id: source,
        token: "{{SUMBER}}",
        token_en: "{{SOURCE}}",
        label: { ms: Topik atau petikan DSKP, en: Topic or DSKP extract },
        required: true,
      }
    - {
        id: learner_level,
        token: "{{TAHAP_MURID}}",
        token_en: "{{LEARNER_LEVEL}}",
        label: { ms: Tahap murid, en: Learner level },
        required: true,
      }
    - {
        id: duration,
        token: "{{TEMPOH}}",
        token_en: "{{DURATION}}",
        label: { ms: Tempoh pembelajaran, en: Learning duration },
        required: true,
      }
    - {
        id: evidence,
        token: "{{BUKTI}}",
        token_en: "{{EVIDENCE}}",
        label:
          {
            ms: Bukti pembelajaran yang sesuai,
            en: Suitable learning evidence,
          },
        required: false,
      }
  expected_output:
    {
      ms: "Objektif boleh diperhatikan, kriteria kejayaan mesra murid dan semakan penjajaran.",
      en: "Observable objectives, learner-friendly success criteria and an alignment check.",
    }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs:
    - id: curriculum_extract
      type: official_document
      required: false
      supply_mode: runtime
      sensitive: false
      description:
        {
          ms: Wajib jika pengguna menuntut penjajaran DSKP rasmi.,
          en: Required when the user claims official DSKP alignment.,
        }
  limitations:
    ms:
      [
        Sahkan semua rujukan DSKP dengan sumber rasmi semasa.,
        Objektif janaan memerlukan pertimbangan guru.,
      ]
    en:
      [
        Verify every DSKP reference against the current official source.,
        Generated objectives require teacher judgement.,
      ]
---

## Bahasa Melayu

### Cara menggunakan prompt ini

Berikan topik atau petikan DSKP, tahap murid dan tempoh. Jika hanya topik diberikan, hasil mesti dilabel sebagai cadangan generik dan bukan penjajaran DSKP.

### Prompt lengkap

```text
Anda membantu guru menulis objektif pembelajaran dan kriteria kejayaan.

Input:
- Topik atau petikan sumber: {{SUMBER}}
- Tahap murid: {{TAHAP_MURID}}
- Tempoh: {{TEMPOH}}
- Bukti pembelajaran yang sesuai, jika ditetapkan: {{BUKTI}}

Jika pengguna meminta penjajaran DSKP tetapi petikan atau sumber rasmi tiada, berhenti dan minta sumber. Jangan cipta kod atau pernyataan standard. Jika hanya topik diberikan, nyatakan `Cadangan generik — belum disahkan dengan DSKP`.

Hasilkan dua atau tiga objektif yang boleh diperhatikan dan dicapai dalam tempoh diberi. Setiap objektif mesti menyatakan tindakan murid, kandungan atau keadaan, dan bukti minimum yang munasabah tanpa mereka angka ketepatan. Susun setiap objektif sebagai kumpulan berasingan, kemudian tulis dua hingga empat kriteria kejayaan khusus di bawah objektif itu. Setiap kriteria mesti bermula dengan `Saya boleh...`. Jangan gabungkan satu senarai kriteria untuk beberapa objektif dan jangan beri kurang daripada dua kriteria bagi mana-mana objektif.

Jangan cipta bilangan contoh, peratus ketepatan, nama proses khusus, bahan, aktiviti, susunan kumpulan atau cara merekod yang tidak diberikan. Jika ukuran minimum penting tetapi belum diberi, gunakan `[TENTUKAN BILANGAN/ARAS]` dan minta keputusan guru. Gunakan bukti yang dinyatakan pengguna tanpa menambah medium atau situasi baharu.

Jangan gunakan frasa seperti `melalui aktiviti`, `berdasarkan pemerhatian bahan` atau `aktiviti yang dijalankan` kecuali aktiviti atau bahan itu dinyatakan dalam input. Jika keadaan pelaksanaan tidak diberikan, tulis objektif tanpa keadaan itu dan tandakan `[KEADAAN BELUM DITETAPKAN]`. Kekalkan kata nama dan konsep pada aras umum yang sama seperti input; jangan menamakan subproses yang tidak dibekalkan.

Akhiri dengan semakan: kesetiaan kepada sumber, kebolehlihatan tindakan, kesesuaian tahap, kebolehlaksanaan masa dan bukti pembelajaran. Tandakan andaian `[PERLU SEMAKAN GURU]`. Jangan menilai murid sebenar atau mengandaikan kebolehan individu.
```

### Contoh input

Topik: perubahan keadaan jirim; Tahun 5; 60 minit; bukti melalui penerangan lisan dan pengelasan contoh.

### Hasil dijangka

Jadual ringkas objektif, kriteria `Saya boleh...`, bukti dan perkara untuk semakan guru.

### Batasan

Kata kerja yang kelihatan boleh disalah tafsir jika bukti tidak jelas. Guru mesti menyemak standard, tahap, masa dan konteks kelas.

## English

### How to use this prompt

Provide a topic or DSKP extract, learner level and duration. When only a topic is supplied, the result must be labelled generic rather than DSKP-aligned.

### Complete prompt

```text
You help a teacher write learning objectives and success criteria.

Inputs:
- Topic or source extract: {{SOURCE}}
- Learner level: {{LEARNER_LEVEL}}
- Duration: {{DURATION}}
- Suitable learning evidence, if specified: {{EVIDENCE}}

If DSKP alignment is requested but no official extract or source is supplied, stop and request it. Do not invent standard codes or wording. If only a topic is supplied, state `Generic suggestion — not verified against DSKP`.

Produce two or three observable objectives achievable within the supplied duration. Each objective must state the learner action, content or condition, and reasonable minimum evidence without inventing an accuracy percentage. Present each objective as a separate group, followed by two to four criteria specific to that objective. Every criterion must begin `I can...`. Do not merge one criteria list across several objectives and do not give fewer than two criteria for any objective.

Do not invent a number of examples, accuracy percentage, named process, material, activity, grouping arrangement or recording method that was not supplied. When a minimum measure matters but is absent, use `[SET NUMBER/LEVEL]` and ask for the teacher's decision. Use the evidence supplied by the user without adding a new medium or situation.

Do not use phrases such as `through an activity`, `based on observing materials` or `in the activity conducted` unless that activity or material appears in the input. When an implementation condition is absent, write the objective without it and mark `[CONDITION NOT SET]`. Keep nouns and concepts at the same general level as the input; do not name unsupplied subprocesses.

Finish with checks for source fidelity, observable action, level suitability, time feasibility and learning evidence. Mark assumptions `[TEACHER REVIEW REQUIRED]`. Do not assess real learners or assume individual ability.
```

### Sample input

Topic: changes of state; Year 5; 60 minutes; evidence through oral explanation and classifying examples.

### Expected output

A concise table of objectives, `I can...` criteria, evidence and teacher-review points.

### Limitations

Apparently observable verbs can still be ambiguous when evidence is unclear. The teacher must verify the standard, level, timing and class context.
