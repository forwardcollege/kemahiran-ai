---
schema_version: 1
id: prompt-differentiated-activity-001
type: llm_prompt
status: approved
slug:
  {
    ms: pelbagaikan-aktiviti-mengikut-keperluan-murid,
    en: differentiate-an-activity-for-learner-needs,
  }
title:
  {
    ms: Pelbagaikan Aktiviti Mengikut Keperluan Murid,
    en: Differentiate an Activity for Learner Needs,
  }
summary:
  ms: Ubah satu aktiviti sedia ada kepada sokongan, teras dan pengayaan yang mengekalkan objektif sama tanpa melabel murid.
  en: Adapt one existing activity into support, core and extension options that preserve the same objective without labelling learners.
audiences: [teachers_educators]
use_cases: [teaching_learning]
sectors: [education]
categories: [learning_differentiation]
tags: [differentiation, accessibility, support, extension]
tools:
  - id: gemini
    compatibility: limited
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto hingga v0.5.0 lulus gerbang privasi atau diagnosis dan menggunakan penanda bagi cara respons, bentuk penyertaan serta pemerhatian yang tidak ditetapkan. Keserasian kekal terhad kerana respons tiga pilihan terakhir tidak sentiasa lengkap dan larian awal menambah format atau bahan tersirat.",
        en: "Gemini Auto tests through v0.5.0 passed the privacy or diagnosis gate and used markers for unset response mode, participation format and observation focus. Compatibility remains limited because the final three-option response was not always complete and early runs added implicit formats or materials.",
      }
difficulty: beginner
intended_output: differentiated_activity_options
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
version: 0.5.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [skill-dskp-activity-001, skill-rph-001]
featured: false
search_aliases:
  {
    ms: [pembezaan aktiviti, sokongan murid, aktiviti pengayaan],
    en: [differentiate activity, learner support, extension activity],
  }
llm_prompt:
  variables:
    - {
        id: objective,
        token: "{{OBJEKTIF}}",
        token_en: "{{OBJECTIVE}}",
        label:
          { ms: Objektif yang mesti dikekalkan, en: Objective to preserve },
        required: true,
      }
    - {
        id: current_activity,
        token: "{{AKTIVITI_ASAL}}",
        token_en: "{{CURRENT_ACTIVITY}}",
        label: { ms: Aktiviti asal, en: Current activity },
        required: true,
      }
    - {
        id: learner_needs,
        token: "{{KEPERLUAN}}",
        token_en: "{{LEARNER_NEEDS}}",
        label:
          { ms: Halangan atau keperluan umum, en: General barriers or needs },
        required: true,
      }
    - {
        id: constraints,
        token: "{{KEKANGAN}}",
        token_en: "{{CONSTRAINTS}}",
        label: { ms: "Masa, bahan dan ruang", en: "Time, materials and space" },
        required: true,
      }
  expected_output:
    {
      ms: "Pilihan sokongan, teras dan pengayaan dengan objektif serta bukti yang sama.",
      en: "Support, core and extension options sharing the same objective and evidence.",
    }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms:
        [
          Jangan mendiagnosis atau melabel murid.,
          Guru menentukan kesesuaian sokongan.,
        ],
      en:
        [
          Do not diagnose or label learners.,
          The teacher determines support suitability.,
        ],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

Nyatakan objektif, aktiviti asal, halangan umum yang diperhatikan dan kekangan sebenar. Gunakan gambaran seperti “arahan panjang sukar diikuti”, bukan label kebolehan atau diagnosis individu.

### Prompt lengkap

```text
Objektif yang mesti dikekalkan: {{OBJEKTIF}}
Aktiviti asal: {{AKTIVITI_ASAL}}
Halangan atau keperluan umum yang diperhatikan tanpa nama/diagnosis: {{KEPERLUAN}}
Masa, bahan, ruang dan saiz kumpulan: {{KEKANGAN}}

Jika mana-mana input utama tiada, tanya dan berhenti. Cipta tiga cara melaksanakan aktiviti: sokongan pilihan, versi teras dan pengayaan pilihan. Ketiga-tiganya mesti mengejar objektif yang sama dan menghasilkan bukti pembelajaran yang setara; jangan menjadikan sokongan sebagai tugasan yang lebih rendah atau pengayaan sebagai kerja tambahan semata-mata.

Bagi setiap pilihan, nyatakan perubahan arahan, bentuk penyertaan, sokongan, bukti pembelajaran, masa/bahan dan perkara untuk diperhatikan guru. Gunakan hanya bahan yang diberikan. Jangan label murid sebagai lemah, sederhana, tinggi, malas atau bermasalah. Jangan mendiagnosis. Cadangkan pilihan secara fleksibel dan tandakan keputusan profesional `[PERLU SEMAKAN GURU]`.

Gunakan tiga tajuk berasingan: `Sokongan pilihan`, `Versi teras` dan `Pengayaan pilihan`. Di bawah setiap tajuk, nyatakan kesemua medan di atas dan terangkan bagaimana objektif serta aras bukti dikekalkan. Jangan jadikan sokongan dan pengayaan sebagai nota kecil di dalam versi teras. Kekalkan cara respons aktiviti asal kecuali pengguna membenarkan perubahan; jangan tambah jadual, grafik, penulisan atau bahan baharu secara tersirat.

Jika cara respons tidak dinyatakan dengan jelas, jangan pilih respons lisan, bertulis, visual atau digital; gunakan `[CARA RESPONS PERLU DITETAPKAN]` hanya pada medan `Cara respons` dalam ketiga-tiga pilihan. Penanda itu bukan alasan untuk mengosongkan pilihan. Setiap pilihan masih wajib menyatakan enam medan lengkap: `Perubahan arahan`, `Bentuk penyertaan`, `Sokongan`, `Cara respons`, `Bukti pembelajaran`, dan `Masa/bahan serta pemerhatian guru`. Sokongan boleh memecahkan arahan asal kepada langkah lebih pendek tanpa menukar medium, mengulang arahan asal atau memberi masa menunggu, tetapi jangan cipta senarai semak, kad panduan, contoh tambahan atau bahan sokongan. Pengayaan mesti memperdalam alasan bagi perbandingan yang sama menggunakan petikan yang sama; jangan tambah konsep, kelebihan/kekurangan, tugasan atau hasil baharu. Sebelum menjawab, audit setiap cadangan dan buang apa-apa kaedah, bahan, format respons atau tuntutan bukti yang tidak terdapat dalam input.

Jika bentuk penyertaan atau perkara khusus untuk pemerhatian guru tidak diberikan, gunakan `[BENTUK PENYERTAAN PERLU DITETAPKAN]` atau `[PEMERHATIAN GURU PERLU DITETAPKAN]`; jangan pilih individu, pasangan atau kumpulan. Kekalkan bilangan murid sebagai konteks sahaja. Jangan anggap projektor digunakan hanya kerana ia tersedia.
```

### Contoh

Objektif: membandingkan dua sumber tenaga; aktiviti asal: membaca petikan dan menerangkan perbezaan; halangan umum: arahan panjang; kekangan: 30 minit, petikan bercetak dan projektor sahaja.

### Batasan

Pembezaan memerlukan pengetahuan guru tentang konteks dan aksesibiliti. AI tidak boleh menentukan keperluan individu atau menggantikan pelan sokongan yang diluluskan.

## English

### How to use this prompt

State the objective, original activity, observed general barriers and real constraints. Use descriptions such as “long instructions are difficult to follow,” not ability labels or individual diagnoses.

### Complete prompt

```text
Objective that must be preserved: {{OBJECTIVE}}
Current activity: {{CURRENT_ACTIVITY}}
Observed general barriers or needs without names/diagnoses: {{LEARNER_NEEDS}}
Time, materials, space and group-size constraints: {{CONSTRAINTS}}

If a core input is missing, ask for it and stop. Create three ways to run the activity: optional support, core version and optional extension. All three must pursue the same objective and produce equivalent learning evidence; do not turn support into a lower-level task or extension into extra work alone.

For each option state instruction changes, participation format, support, learning evidence, time/materials and what the teacher should observe. Use only supplied materials. Do not label learners weak, average, high, lazy or problematic. Do not diagnose. Offer flexible choices and mark professional decisions `[TEACHER REVIEW REQUIRED]`.

Use three separate headings: `Optional support`, `Core version` and `Optional extension`. Under each heading include every field above and explain how the objective and evidence demand are preserved. Do not reduce support and extension to small notes inside the core version. Preserve the original response mode unless the user authorises a change; do not implicitly add a table, graphic, writing task or new material.

If the response mode is not explicit, do not choose oral, written, visual or digital response; use `[RESPONSE MODE TO BE SET]` only in the `Response mode` field of all three options. The marker is not a reason to leave an option empty. Every option must still contain six complete fields: `Instruction changes`, `Participation format`, `Support`, `Response mode`, `Learning evidence`, and `Time/materials and teacher observation`. Support may split the original instructions into shorter steps without changing medium, repeat the original instructions or provide wait time, but must not create a checklist, cue card, extra example or support material. Extension must deepen the reasoning for the same comparison using the same passage; do not add concepts, advantages/disadvantages, tasks or new outputs. Before answering, audit every proposal and remove any method, material, response format or evidence claim that is absent from the input.

If participation format or a specific teacher-observation focus is not supplied, use `[PARTICIPATION FORMAT TO BE SET]` or `[TEACHER OBSERVATION TO BE SET]`; do not choose individual, pair or group work. Keep learner count as context only. Do not assume the projector is used merely because it is available.
```

### Example

Objective: compare two energy sources; current activity: read a passage and explain differences; general barrier: long instructions; constraints: 30 minutes, printed passage and projector only.

### Limitations

Differentiation requires teacher knowledge of context and accessibility. AI cannot determine individual needs or replace an approved support plan.
