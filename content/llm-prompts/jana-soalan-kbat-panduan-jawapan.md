---
schema_version: 1
id: prompt-kbat-questions-001
type: llm_prompt
status: approved
slug:
  {
    ms: jana-soalan-kbat-dengan-panduan-jawapan,
    en: generate-higher-order-questions-with-answer-guidance,
  }
title:
  {
    ms: Jana Soalan KBAT dengan Panduan Jawapan,
    en: Generate Higher-Order Questions with Answer Guidance,
  }
summary:
  ms: Cipta soalan pemikiran aras tinggi daripada kandungan yang diberikan, bersama panduan jawapan dan audit kekaburan.
  en: Create higher-order questions from supplied content, with answer guidance and an ambiguity audit.
audiences: [teachers_educators]
use_cases: [teaching_learning]
sectors: [education]
categories: [higher_order_questions]
tags: [kbat, higher_order_thinking, questions, answer_guidance]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto v0.3.0 lulus item lengkap berasingan, pengiraan terus tanpa dakwaan sebab, fokus pada batas bukti, audit berkalibrasi dan berhenti apabila sumber tiada; semakan guru terhadap aras KBAT masih diperlukan.",
        en: "A Gemini Auto v0.3.0 test passed separate complete items, direct calculation without causal claims, evidence-limit focus, calibrated audit language and stopping when the source is absent; teacher review of actual higher-order demand remains required.",
      }
difficulty: beginner
intended_output: higher_order_question_set
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
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [skill-assessment-set-001]
featured: false
search_aliases:
  {
    ms: [soalan kbat, soalan aras tinggi, panduan jawapan],
    en: [higher order questions, hots questions, answer guidance],
  }
llm_prompt:
  variables:
    - {
        id: source_content,
        token: "{{KANDUNGAN}}",
        token_en: "{{SOURCE_CONTENT}}",
        label: { ms: Kandungan sumber, en: Source content },
        required: true,
      }
    - {
        id: learner_level,
        token: "{{TAHAP}}",
        token_en: "{{LEARNER_LEVEL}}",
        label: { ms: Tahap murid, en: Learner level },
        required: true,
      }
    - {
        id: question_count,
        token: "{{BILANGAN}}",
        token_en: "{{QUESTION_COUNT}}",
        label: { ms: Bilangan soalan, en: Number of questions },
        required: true,
      }
    - {
        id: response_format,
        token: "{{FORMAT}}",
        token_en: "{{RESPONSE_FORMAT}}",
        label: { ms: Format respons, en: Response format },
        required: true,
      }
  expected_output:
    {
      ms: "Set soalan KBAT, tujuan pemikiran, panduan jawapan dan audit item.",
      en: "A KBAT question set, thinking purpose, answer guidance and item audit.",
    }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs:
    - {
        id: teaching_content,
        type: teaching_material,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        description:
          {
            ms: Kandungan yang menjadi asas semua soalan dan jawapan.,
            en: Content grounding every question and answer.,
          },
      }
  limitations:
    {
      ms: [Semak fakta, aras dan kemungkinan jawapan alternatif.],
      en: [Review facts, level and plausible alternative answers.],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

Lampirkan kandungan yang telah diajar. Prompt ini tidak patut digunakan untuk menghasilkan soalan daripada ingatan model sahaja.

### Prompt lengkap

```text
Gunakan hanya kandungan berikut untuk membina soalan KBAT: {{KANDUNGAN}}
Tahap murid: {{TAHAP}}
Bilangan soalan: {{BILANGAN}}
Format respons: {{FORMAT}}

Jika kandungan, tahap, bilangan atau format tiada, minta maklumat itu dan berhenti. Jangan tambah fakta daripada ingatan. Hasilkan agihan munasabah antara menganalisis, menilai dan mencipta; jangan menganggap label aras membuktikan kualiti soalan.

Bagi setiap soalan, berikan: soalan murid, tujuan pemikiran, bukti daripada sumber yang diperlukan, panduan jawapan, unsur yang boleh menerima variasi, dan kriteria ringkas. Elakkan soalan yang boleh dijawab hanya dengan menyalin satu ayat jika tujuan sebenar ialah KBAT.

Paparkan setiap soalan sebagai item lengkap yang berasingan; jangan gabungkan soalan di bawah satu tajuk `panduan jawapan`. Jangan minta murid menamakan sebab, faktor, contoh atau penyelesaian yang tidak terkandung dalam sumber. Pengiraan yang boleh diperoleh terus daripada nombor sumber dibenarkan, tetapi nyatakan langkahnya dan jangan menggunakannya untuk membuktikan sebab atau keberkesanan. Jika sumber menyatakan sebab tidak diketahui, soalan penilaian mesti menekankan batasan bukti dan maklumat tambahan yang diperlukan, bukan meminta spekulasi.

Audit semua item untuk bahasa sesuai tahap, petunjuk jawapan, kekaburan, lebih daripada satu tafsiran munasabah, fakta di luar sumber dan pertindihan. Baiki jika boleh; jika tidak, tandakan `[PERLU SEMAKAN GURU]`. Gunakan bahasa audit berkalibrasi seperti `tiada isu dikenal pasti dalam semakan ini`; jangan mendakwa `tiada kekaburan`, `tiada fakta luar` atau kualiti yang sempurna sebagai kepastian. Jangan hasilkan markah atau gred murid sebenar.
```

### Contoh input dan hasil dijangka

Petikan sintetik tentang perubahan jumlah pembaziran makanan yang tidak menerangkan sebab, Tingkatan 2, empat soalan respons pendek. Hasil merangkumi pengiraan terus, batas kesimpulan, maklumat tambahan yang diperlukan dan cara menilai bukti tanpa mereka sebab atau penyelesaian.

### Batasan

Soalan yang menggunakan kata “mengapa” tidak semestinya KBAT. Guru mesti menyemak tuntutan aras, keterbukaan jawapan dan kesesuaian pemarkahan.

## English

### How to use this prompt

Attach content that has been taught. This prompt should not generate questions from model memory alone.

### Complete prompt

```text
Use only the following content to build higher-order questions: {{SOURCE_CONTENT}}
Learner level: {{LEARNER_LEVEL}}
Number of questions: {{QUESTION_COUNT}}
Response format: {{RESPONSE_FORMAT}}

If the content, level, count or format is missing, request it and stop. Do not add facts from memory. Use a reasonable spread across analysis, evaluation and creation; do not treat a thinking-level label as proof of question quality.

For every question provide: the learner question, thinking purpose, required source evidence, indicative answer guidance, valid variation and brief criteria. Avoid questions answerable by copying one sentence when the intended demand is higher-order thinking.

Present every question as a complete separate item; do not group questions under an `answer guidance` heading. Do not ask learners to name causes, factors, examples or solutions absent from the source. Calculations directly derived from source numbers are allowed, but show the reasoning and never use them to prove causation or effectiveness. When the source says the cause is unknown, evaluation questions must focus on evidence limitations and what additional information is needed, not speculation.

Audit all items for level-appropriate language, answer clues, ambiguity, multiple reasonable interpretations, facts outside the source and duplication. Repair them when possible; otherwise mark `[TEACHER REVIEW REQUIRED]`. Use calibrated audit language such as `no issue identified in this review`; do not claim `no ambiguity`, `no outside facts` or perfect quality as certainty. Do not produce marks or grades for real learners.
```

### Sample input and expected output

A synthetic passage about a change in food-waste quantity that does not explain its cause, Form 2, four short-response questions. The output covers direct calculation, limits on conclusions, needed additional information and evaluation of evidence without inventing causes or solutions.

### Limitations

A question containing “why” is not automatically higher order. The teacher must review thinking demand, acceptable variation and marking suitability.
