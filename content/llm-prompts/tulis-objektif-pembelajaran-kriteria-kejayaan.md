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
    specialist_review_status: not_obtained,
    specialist_reviewer: null,
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.6.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
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

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Pilihan:** Wajib jika pengguna menuntut penjajaran DSKP rasmi.

### Pemboleh ubah

- `{{SUMBER}}` — Topik atau petikan DSKP **(Wajib)**.
- `{{TAHAP_MURID}}` — Tahap murid **(Wajib)**.
- `{{TEMPOH}}` — Tempoh pembelajaran **(Wajib)**.
- `{{BUKTI}}` — Bukti pembelajaran yang sesuai **(Pilihan)**.

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

### Hasil dijangka

Objektif boleh diperhatikan, kriteria kejayaan mesra murid dan semakan penjajaran.

### Contoh penggunaan

#### Contoh input

Topik: perubahan keadaan jirim; Tahun 5; 60 minit; bukti melalui penerangan lisan dan pengelasan contoh. Tiada petikan DSKP dilampirkan.

#### Contoh hasil

**Status penjajaran:** Cadangan generik berdasarkan topik dan bukti yang diberikan. **Bukan penjajaran DSKP** kerana petikan standard rasmi tidak dilampirkan.

| Objektif pembelajaran                                                                                                                                               | Kriteria kejayaan “Saya boleh…”                                                                                 | Bukti pembelajaran                                      | Semakan guru                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Pada akhir pelajaran, murid dapat mengelaskan sekurang-kurangnya enam contoh kepada pepejal, cecair atau gas serta menerangkan satu ciri bagi setiap keadaan jirim. | Saya boleh mengelaskan sekurang-kurangnya 5 daripada 6 contoh dengan betul dan menerangkan ciri yang digunakan. | Kad pengelasan individu dan penerangan lisan ringkas.   | Adakah pengelasan menggunakan ciri keadaan jirim, bukan sekadar hafalan contoh? |
| Murid dapat menerangkan satu perubahan keadaan jirim menggunakan urutan keadaan asal → proses → keadaan akhir.                                                      | Saya boleh menerangkan contoh seperti ais → peleburan → air dengan istilah yang tepat.                          | Respons dua ayat atau rajah berlabel pada tiket keluar. | Adakah proses dan arah perubahan dinyatakan dengan tepat?                       |

**Cadangan aliran 60 minit:** 8 minit pencungkil idea, 15 minit demonstrasi dan perbincangan, 20 minit pengelasan, 12 minit penerangan berpasangan, 5 minit tiket keluar.

**Sebelum digunakan:** Guru perlu membandingkan istilah, skop dan tahap dengan DSKP Tahun 5 yang sedang berkuat kuasa.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Sahkan semua rujukan DSKP dengan sumber rasmi semasa.
- Objektif janaan memerlukan pertimbangan guru.

Kata kerja yang kelihatan boleh disalah tafsir jika bukti tidak jelas. Guru mesti menyemak standard, tahap, masa dan konteks kelas.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Optional:** Required when the user claims official DSKP alignment.

### Variables

- `{{SOURCE}}` — Topic or DSKP extract **(Required)**.
- `{{LEARNER_LEVEL}}` — Learner level **(Required)**.
- `{{DURATION}}` — Learning duration **(Required)**.
- `{{EVIDENCE}}` — Suitable learning evidence **(Optional)**.

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

### Expected output

Observable objectives, learner-friendly success criteria and an alignment check.

### Worked example

#### Sample input

Topic: changes in states of matter; Year 5; 60 minutes; evidence through oral explanation and classifying examples. No DSKP extract is attached.

#### Sample output

**Alignment status:** A generic suggestion based on the supplied topic and evidence. **Not DSKP-aligned** because no official standards extract was attached.

| Learning objective                                                                                                                       | “I can…” success criterion                                                        | Evidence of learning                                     | Teacher check                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| By the end of the lesson, learners can classify at least six examples as solids, liquids or gases and explain one feature of each state. | I can classify at least 5 of 6 examples correctly and explain the feature I used. | Individual sorting cards and a short oral explanation.   | Does the classification use properties of states of matter rather than memorised examples alone? |
| Learners can explain one change of state using the sequence original state → process → final state.                                      | I can explain an example such as ice → melting → water using accurate terms.      | A two-sentence response or labelled exit-ticket diagram. | Are the process and direction of change stated accurately?                                       |

**Suggested 60-minute flow:** 8-minute prior-knowledge check, 15-minute demonstration and discussion, 20-minute classification task, 12-minute paired explanation, 5-minute exit ticket.

**Before use:** The teacher must compare the terminology, scope and level with the current Year 5 DSKP.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Verify every DSKP reference against the current official source.
- Generated objectives require teacher judgement.

Apparently observable verbs can still be ambiguous when evidence is unclear. The teacher must verify the standard, level, timing and class context.
