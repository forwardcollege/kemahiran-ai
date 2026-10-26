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
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
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
version: 0.5.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
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

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

Bahan rujukan:

- **Wajib:** Kandungan yang menjadi asas semua soalan dan jawapan.

### Pemboleh ubah

- `{{KANDUNGAN}}` — Kandungan sumber **(Wajib)**.
- `{{TAHAP}}` — Tahap murid **(Wajib)**.
- `{{BILANGAN}}` — Bilangan soalan **(Wajib)**.
- `{{FORMAT}}` — Format respons **(Wajib)**.

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

### Hasil dijangka

Set soalan KBAT, tujuan pemikiran, panduan jawapan dan audit item.

### Contoh penggunaan

#### Contoh input

Petikan sintetik Tingkatan 2 menyatakan bahawa sisa makanan kantin berkurang daripada 80 kg kepada 62 kg seminggu selepas kempen pengasingan sisa. Petikan tidak menerangkan sebab perubahan atau memberikan kumpulan perbandingan. Minta empat soalan respons pendek.

#### Contoh hasil

1. **Hitung pengurangan sisa makanan dalam kilogram dan peratus. Tunjukkan langkah anda.**
   _Panduan jawapan:_ Pengurangan = 80 − 62 = **18 kg**. Peratus pengurangan = 18 ÷ 80 × 100 = **22.5%**.

2. **Adakah data ini membuktikan bahawa kempen menyebabkan pengurangan tersebut? Jelaskan.**
   _Panduan jawapan:_ Tidak. Data menunjukkan perubahan selepas kempen tetapi tidak mengasingkan faktor lain seperti jumlah murid, menu atau cara timbangan. Jawapan perlu membezakan hubungan masa daripada sebab-akibat.

3. **Cadangkan dua maklumat tambahan yang akan menguatkan penilaian keberkesanan kempen.**
   _Panduan jawapan:_ Contohnya data beberapa minggu sebelum dan selepas kempen, jumlah hidangan, kaedah timbangan yang sama, atau data kantin perbandingan.

4. **Seorang murid berkata, “Kempen ini pasti berjaya kerana sisa berkurang.” Tulis semula hujah itu supaya lebih tepat.**
   _Panduan jawapan:_ “Sisa yang direkodkan berkurang 22.5% selepas kempen. Ini konsisten dengan kemungkinan kempen membantu, tetapi maklumat tambahan diperlukan sebelum kita membuat kesimpulan sebab-akibat.”

**Audit aras pemikiran:** Soalan 1 mengaplikasi; Soalan 2 menilai bukti; Soalan 3 mencipta cadangan siasatan; Soalan 4 menilai dan membina semula hujah.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Semak fakta
- aras dan kemungkinan jawapan alternatif.

Soalan yang menggunakan kata “mengapa” tidak semestinya KBAT. Guru mesti menyemak tuntutan aras, keterbukaan jawapan dan kesesuaian pemarkahan.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

Reference material:

- **Required:** Content grounding every question and answer.

### Variables

- `{{SOURCE_CONTENT}}` — Source content **(Required)**.
- `{{LEARNER_LEVEL}}` — Learner level **(Required)**.
- `{{QUESTION_COUNT}}` — Number of questions **(Required)**.
- `{{RESPONSE_FORMAT}}` — Response format **(Required)**.

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

### Expected output

A KBAT question set, thinking purpose, answer guidance and item audit.

### Worked example

#### Sample input

A synthetic Form 2 passage states that canteen food waste fell from 80 kg to 62 kg per week after a waste-separation campaign. It does not explain the cause or provide a comparison group. Request four short-response questions.

#### Sample output

1. **Calculate the reduction in food waste in kilograms and as a percentage. Show your working.**
   _Answer guidance:_ Reduction = 80 − 62 = **18 kg**. Percentage reduction = 18 ÷ 80 × 100 = **22.5%**.

2. **Does this information prove that the campaign caused the reduction? Explain.**
   _Answer guidance:_ No. The figures show a change after the campaign but do not isolate other factors such as student numbers, menus or weighing methods. The answer should distinguish timing from causation.

3. **Suggest two additional pieces of information that would strengthen an evaluation of the campaign.**
   _Answer guidance:_ Examples include several weeks of before-and-after data, meal counts, a consistent weighing method or data from a comparison canteen.

4. **A learner says, “The campaign definitely worked because waste decreased.” Rewrite the argument so it is more accurate.**
   _Answer guidance:_ “Recorded waste fell by 22.5% after the campaign. This is consistent with the campaign possibly helping, but more information is needed before drawing a causal conclusion.”

**Thinking-level audit:** Question 1 applies; Question 2 evaluates evidence; Question 3 creates an investigation proposal; Question 4 evaluates and reconstructs an argument.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Review facts
- level and plausible alternative answers.

A question containing “why” is not automatically higher order. The teacher must review thinking demand, acceptable variation and marking suitability.
