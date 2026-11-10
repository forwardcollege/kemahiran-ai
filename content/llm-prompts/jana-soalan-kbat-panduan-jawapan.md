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
    last_reviewed: "2026-11-10",
    next_review_due: "2027-05-10",
  }
version: 0.6.0
created_at: "2026-10-25"
updated_at: "2026-11-10"
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

**`{{KANDUNGAN}}` — Kandungan sumber**

Sebuah sekolah merekodkan sisa makanan kantin selama empat minggu. Kantin menyediakan 1,000 hidangan setiap minggu dan menimbang sisa pada waktu yang sama menggunakan penimbang digital yang sama.

| Minggu | Keadaan                         | Sisa makanan | Bilangan hidangan |
| ------ | ------------------------------- | ------------ | ----------------- |
| 1      | Sebelum kempen                  | 80 kg        | 1,000             |
| 2      | Sebelum kempen                  | 78 kg        | 1,000             |
| 3      | Selepas kempen pengasingan sisa | 64 kg        | 1,000             |
| 4      | Selepas kempen pengasingan sisa | 62 kg        | 1,000             |

Kempen itu memperkenalkan tong berlabel dan poster yang mengingatkan murid supaya mengambil makanan yang mampu dihabiskan. Menu berbeza setiap minggu. Sekolah tidak mempunyai data daripada kantin perbandingan dan tidak merekod sebab murid meninggalkan makanan. Majlis perwakilan murid perlu mencadangkan langkah seterusnya.

**`{{TAHAP}}` — Tahap murid:** Tingkatan 2

**`{{BILANGAN}}` — Bilangan soalan:** 3

**`{{FORMAT}}` — Format respons:** Tiga soalan respons pendek yang lengkap—satu soalan menganalisis, satu menilai dan satu mencipta. Bagi setiap soalan, nyatakan tujuan pemikiran, bukti sumber yang diperlukan, panduan jawapan, variasi yang boleh diterima dan kriteria ringkas. Akhiri dengan audit item dan panduan guru.

#### Contoh hasil

1. **Menganalisis — Apakah pola yang anda lihat sebelum dan selepas kempen? Bandingkan purata sisa makanan bagi kedua-dua tempoh dan jelaskan satu kesimpulan yang disokong oleh data serta satu kesimpulan yang belum dapat dibuat.**
   - **Tujuan pemikiran:** Mengenal pasti pola, menghubungkan angka dan membezakan pemerhatian daripada sebab-akibat.
   - **Bukti sumber yang diperlukan:** Rekod 80 kg dan 78 kg sebelum kempen; 64 kg dan 62 kg selepas kempen; 1,000 hidangan setiap minggu.
   - **Panduan jawapan:** Purata sebelum kempen ialah (80 + 78) ÷ 2 = **79 kg** seminggu. Purata selepas kempen ialah (64 + 62) ÷ 2 = **63 kg** seminggu. Purata itu berkurang **16 kg**, iaitu kira-kira **20.3%**. Data menyokong kesimpulan bahawa sisa yang direkodkan lebih rendah dalam dua minggu selepas kempen. Data belum membuktikan bahawa kempen menyebabkan pengurangan itu.
   - **Variasi yang boleh diterima:** Murid boleh membandingkan setiap minggu, purata atau julat asalkan pengiraan tepat dan batas kesimpulan dinyatakan.
   - **Kriteria ringkas:** Pengiraan tepat; pola diterangkan menggunakan bukti; kesimpulan dan batas bukti dibezakan.

2. **Menilai — Majlis perwakilan murid berkata, “Kempen ini terbukti berkesan dan perlu diteruskan tanpa perubahan.” Sejauh manakah anda bersetuju? Gunakan sekurang-kurangnya dua kekuatan dan dua batasan bukti sebelum memberikan keputusan.**
   - **Tujuan pemikiran:** Menimbang kualiti bukti dan membina keputusan yang beralasan.
   - **Bukti sumber yang diperlukan:** Penurunan dalam kedua-dua minggu selepas kempen; bilangan hidangan, masa dan alat timbangan yang konsisten; menu yang berubah; tempoh empat minggu; ketiadaan kantin perbandingan dan sebab pembaziran.
   - **Panduan jawapan:** Bukti menyokong penerusan sementara kerana kedua-dua rekod selepas kempen lebih rendah, jumlah hidangan sama dan kaedah timbangan konsisten. Namun, hanya dua minggu direkodkan bagi setiap tempoh, menu berubah, tiada kantin perbandingan dan sebab makanan ditinggalkan tidak diketahui. Keputusan yang munasabah ialah meneruskan kempen sambil mengumpul bukti yang lebih kukuh, bukan mendakwa keberkesanannya telah terbukti atau mengekalkannya tanpa perubahan.
   - **Variasi yang boleh diterima:** Murid boleh bersetuju sebahagian, tidak bersetuju atau mencadangkan percubaan lanjut jika keputusan seimbang dengan bukti.
   - **Kriteria ringkas:** Sekurang-kurangnya dua kekuatan dan dua batasan yang tepat; keputusan jelas; alasan sepadan dengan bukti.

3. **Mencipta — Reka pelan susulan empat minggu untuk membantu majlis perwakilan murid menilai sama ada kempen menyumbang kepada pengurangan sisa. Nyatakan data yang akan dikumpul, cara membuat perbandingan yang adil, petunjuk kejayaan dan bagaimana dapatan akan digunakan.**
   - **Tujuan pemikiran:** Menggabungkan bukti dan batasan untuk menghasilkan pelan penyiasatan yang boleh dilaksanakan.
   - **Bukti sumber yang diperlukan:** Rutin timbangan sedia ada, bilangan hidangan, perubahan menu, ketiadaan perbandingan dan sebab makanan ditinggalkan.
   - **Panduan jawapan:** Pelan yang kukuh boleh meneruskan timbangan pada masa dan dengan alat yang sama, merekod jumlah hidangan dan jenis menu, serta mengumpul sebab pembaziran melalui pemerhatian atau tinjauan ringkas tanpa nama. Pelan juga boleh membandingkan trend dengan kantin yang serupa atau dengan tempoh asas yang lebih panjang. Petunjuk kejayaan perlu ditetapkan lebih awal, contohnya purata sisa bagi setiap 1,000 hidangan kekal lebih rendah daripada purata asas 79 kg. Selepas empat minggu, majlis boleh mengekalkan, mengubah atau menguji semula kempen berdasarkan pola dan batas data.
   - **Variasi yang boleh diterima:** Reka bentuk lain boleh diterima jika menangani sekurang-kurangnya dua jurang bukti, menjaga perbandingan yang adil dan tidak mendakwa sebab-akibat tanpa sokongan.
   - **Kriteria ringkas:** Pelan mempunyai langkah, ukuran, perbandingan dan petunjuk kejayaan yang jelas; pelan boleh dilaksanakan; keputusan dihubungkan dengan dapatan.

**Audit item**

- **Bahasa dan tahap:** Ayat dan pengiraan sesuai untuk Tingkatan 2; guru boleh menerangkan istilah `tempoh asas` jika istilah itu belum dipelajari.
- **Petunjuk jawapan:** Sumber memberikan bukti untuk dihuraikan tetapi tidak memberikan keputusan bagi pihak murid.
- **Kekaburan dan variasi:** Setiap item menyatakan bilangan bukti atau komponen yang diperlukan dan menerima lebih daripada satu jawapan yang beralasan.
- **Fakta luar sumber:** Tiada fakta luar diperlukan. Cadangan dalam Soalan 3 dinilai sebagai reka bentuk murid, bukan sebagai fakta yang telah berlaku.
- **Pertindihan:** Soalan 1 menghuraikan pola, Soalan 2 menimbang tuntutan dan Soalan 3 membina penyiasatan; tiada pertindihan tugas utama dikenal pasti dalam semakan ini.

**Panduan guru**

- Gunakan ketiga-tiga soalan secara berurutan: kenal pasti pola, nilai kekuatan tuntutan, kemudian bina penyiasatan yang menangani jurang bukti.
- Minta murid menandakan nombor atau ayat sumber yang menyokong setiap alasan. Susulan yang berguna termasuk “Bukti mana yang paling kuat?”, “Apakah penjelasan lain yang masih mungkin?” dan “Bagaimanakah pelan anda membuat perbandingan lebih adil?”.
- Jangan memberikan kredit penuh hanya untuk pengiraan yang betul. Nilai juga cara murid mentafsir pola, menghadkan tuntutan dan menghubungkan reka bentuk pelan kepada kelemahan bukti.
- Terima keputusan atau pelan alternatif apabila murid menyokongnya dengan sumber dan memenuhi kriteria. Bincangkan contoh jawapan hanya selepas murid mencuba supaya panduan tidak menjadi petunjuk jawapan.
- Semak tuntutan aras KBAT dan kesesuaian kriteria untuk kelas sebenar sebelum digunakan; semakan ini tidak menggantikan pertimbangan profesional guru.

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

**`{{SOURCE_CONTENT}}` — Source content**

A school recorded canteen food waste for four weeks. The canteen served 1,000 meals each week and weighed the waste at the same time using the same digital scale.

| Week | Condition                           | Food waste | Meals served |
| ---- | ----------------------------------- | ---------- | ------------ |
| 1    | Before the campaign                 | 80 kg      | 1,000        |
| 2    | Before the campaign                 | 78 kg      | 1,000        |
| 3    | After the waste-separation campaign | 64 kg      | 1,000        |
| 4    | After the waste-separation campaign | 62 kg      | 1,000        |

The campaign introduced labelled bins and posters reminding learners to take only as much food as they could finish. The menu differed each week. The school had no comparison canteen and did not record why learners left food. The student council must recommend the next step.

**`{{LEARNER_LEVEL}}` — Learner level:** Form 2

**`{{QUESTION_COUNT}}` — Number of questions:** 3

**`{{RESPONSE_FORMAT}}` — Response format:** Three complete short-response items—one analysing, one evaluating and one creating. For each item, state the thinking purpose, required source evidence, answer guidance, acceptable variation and brief criteria. End with an item audit and teacher guidance.

#### Sample output

1. **Analysing — What pattern do you see before and after the campaign? Compare the average food waste for the two periods, then explain one conclusion supported by the data and one conclusion that cannot yet be made.**
   - **Thinking purpose:** Identify a pattern, connect the figures and distinguish observation from causation.
   - **Required source evidence:** The pre-campaign records of 80 kg and 78 kg; the post-campaign records of 64 kg and 62 kg; 1,000 meals each week.
   - **Answer guidance:** The pre-campaign average is (80 + 78) ÷ 2 = **79 kg** per week. The post-campaign average is (64 + 62) ÷ 2 = **63 kg** per week. The average fell by **16 kg**, or about **20.3%**. The data support the conclusion that recorded waste was lower in the two weeks after the campaign. They do not prove that the campaign caused the reduction.
   - **Acceptable variation:** Learners may compare individual weeks, averages or ranges, provided that the calculations are accurate and the limit on the conclusion is stated.
   - **Brief criteria:** Accurate calculation; pattern explained with evidence; conclusion distinguished from the evidence limit.

2. **Evaluating — The student council says, “The campaign is proven to work and should continue unchanged.” To what extent do you agree? Use at least two strengths and two limitations of the evidence before reaching a judgement.**
   - **Thinking purpose:** Weigh the quality of evidence and form a reasoned judgement.
   - **Required source evidence:** The decrease in both post-campaign weeks; consistent meal counts, weighing time and scale; changing menus; the four-week duration; no comparison canteen or reasons for waste.
   - **Answer guidance:** The evidence supports continuing the campaign provisionally because both post-campaign records are lower, meal counts are equal and weighing is consistent. However, each period contains only two weeks, menus changed, there is no comparison canteen and the reasons for leaving food are unknown. A reasonable judgement is to continue while collecting stronger evidence, not to claim that effectiveness is proven or that no changes are needed.
   - **Acceptable variation:** Learners may partly agree, disagree or recommend a further trial if their judgement is balanced against the evidence.
   - **Brief criteria:** At least two accurate strengths and two accurate limitations; clear judgement; reasoning proportionate to the evidence.

3. **Creating — Design a four-week follow-up plan to help the student council judge whether the campaign contributed to reducing waste. State the data to collect, how to make a fair comparison, a success indicator and how the findings will be used.**
   - **Thinking purpose:** Combine evidence and limitations to produce a workable investigation plan.
   - **Required source evidence:** The existing weighing routine, meal counts, changing menus, missing comparison and missing reasons for waste.
   - **Answer guidance:** A strong plan could continue weighing at the same time with the same scale, record meals served and menu type, and gather reasons for waste through observation or a short anonymous survey. It could also compare the trend with a similar canteen or with a longer baseline period. A success indicator should be set in advance—for example, average waste per 1,000 meals remains below the 79 kg baseline average. After four weeks, the council could retain, adjust or retest the campaign according to the pattern and the limits of the data.
   - **Acceptable variation:** Other designs are acceptable if they address at least two evidence gaps, maintain a fair comparison and avoid unsupported causal claims.
   - **Brief criteria:** Clear steps, measures, comparison and success indicator; feasible plan; decision linked to findings.

**Item audit**

- **Language and level:** The wording and calculations are suitable for Form 2; the teacher can explain `baseline period` if learners have not met the term.
- **Answer clues:** The source provides evidence to interpret but does not make the judgement for the learner.
- **Ambiguity and variation:** Each item states the number of required evidence points or components and allows more than one reasoned answer.
- **Outside facts:** No outside fact is required. Suggestions in Question 3 are assessed as the learner’s design, not as facts that have already occurred.
- **Duplication:** Question 1 explains a pattern, Question 2 weighs a claim and Question 3 constructs an investigation; no duplication of the main task was identified in this review.

**Teacher guidance**

- Use the three questions in sequence: identify the pattern, evaluate the strength of the claim, then build an investigation that addresses evidence gaps.
- Ask learners to point to the number or sentence supporting each reason. Useful follow-ups include “Which evidence is strongest?”, “What other explanation remains possible?” and “How does your plan make the comparison fairer?”.
- Do not award full credit for a correct calculation alone. Also assess how learners interpret the pattern, limit the claim and connect the plan design to weaknesses in the evidence.
- Accept alternative judgements or plans when learners ground them in the source and meet the criteria. Discuss the sample guidance only after learners attempt the questions so that it does not become an answer clue.
- Review the claimed higher-order demand and adapt the criteria to the actual class before use; this audit does not replace the teacher’s professional judgement.

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
