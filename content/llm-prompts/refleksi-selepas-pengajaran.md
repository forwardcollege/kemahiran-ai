---
schema_version: 1
id: prompt-post-lesson-reflection-001
type: llm_prompt
status: approved
slug: { ms: refleksi-selepas-pengajaran, en: post-lesson-reflection }
title: { ms: Refleksi Selepas Pengajaran, en: Post-Lesson Reflection }
summary:
  ms: Susun pemerhatian guru kepada refleksi berasaskan bukti tentang pembelajaran, kekuatan, halangan dan satu pelarasan realistik.
  en: Structure teacher observations into an evidence-based reflection on learning, strengths, barriers and one realistic adjustment.
audiences: [teachers_educators]
use_cases: [teaching_learning, writing_documents]
sectors: [education]
categories: [teaching_reflection]
tags: [reflection, evidence_of_learning, lesson_improvement]
tools:
  - id: gemini
    compatibility: limited
    tested_on: "2026-10-25"
    notes:
      {
        ms: "Ujian Gemini Auto hingga v0.5.0 memisahkan bukti daripada tafsiran, mengelakkan sebab pasti dan bahan atau kaedah baharu, serta mengenal pasti input hilang. Keserasian kekal terhad kerana kepatuhan berhenti dan kelengkapan respons gabungan berubah antara larian.",
        en: "Gemini Auto tests through v0.5.0 separated evidence from interpretation, avoided certain causation and new materials or methods, and detected missing input. Compatibility remains limited because stop-rule compliance and combined-response completeness varied between runs.",
      }
difficulty: beginner
intended_output: post_lesson_reflection
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
    specialist_review_status: not_required,
    specialist_reviewer: null,
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.7.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [skill-rph-001, prompt-learning-objectives-001]
featured: false
search_aliases:
  {
    ms: [refleksi guru, refleksi rph, selepas mengajar],
    en: [teacher reflection, lesson reflection, after teaching],
  }
llm_prompt:
  variables:
    - {
        id: objective,
        token: "{{OBJEKTIF}}",
        token_en: "{{OBJECTIVE}}",
        label: { ms: Objektif pembelajaran, en: Learning objective },
        required: true,
      }
    - {
        id: observations,
        token: "{{PEMERHATIAN}}",
        token_en: "{{OBSERVATIONS}}",
        label:
          {
            ms: Pemerhatian tanpa data pengenalan,
            en: De-identified observations,
          },
        required: true,
      }
    - {
        id: evidence,
        token: "{{BUKTI}}",
        token_en: "{{EVIDENCE}}",
        label: { ms: Bukti pembelajaran, en: Learning evidence },
        required: true,
      }
    - {
        id: constraints,
        token: "{{KEKANGAN}}",
        token_en: "{{CONSTRAINTS}}",
        label: { ms: Kekangan yang diketahui, en: Known constraints },
        required: false,
      }
  expected_output:
    {
      ms: "Refleksi ringkas dengan fakta, tafsiran tentatif dan satu pelarasan seterusnya.",
      en: "A concise reflection separating facts, tentative interpretation and one next adjustment.",
    }
  recommended_capabilities: [instruction_following]
  sample_included: true
  reference_inputs: []
  limitations:
    {
      ms: [Jangan masukkan identiti murid atau membuat diagnosis.],
      en: [Do not include learner identities or make diagnoses.],
    }
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Sediakan semua input wajib dan nyahkenal pasti maklumat sensitif yang tidak diperlukan.
2. Gantikan setiap pemboleh ubah dalam prompt. Jangan biarkan AI mengisi fakta, dasar atau rujukan yang tiada.
3. Salin prompt lengkap, tampalkan ke dalam model pilihan anda dan lampirkan bahan rujukan yang dibenarkan.
4. Semak hasil menggunakan senarai semakan di bawah sebelum menggunakannya.

### Pemboleh ubah

- `{{OBJEKTIF}}` — Objektif pembelajaran **(Wajib)**.
- `{{PEMERHATIAN}}` — Pemerhatian tanpa data pengenalan **(Wajib)**.
- `{{BUKTI}}` — Bukti pembelajaran **(Wajib)**.
- `{{KEKANGAN}}` — Kekangan yang diketahui **(Pilihan)**.

### Prompt lengkap

```text
Objektif pembelajaran: {{OBJEKTIF}}
Pemerhatian selepas pengajaran tanpa nama atau maklumat pengenalan: {{PEMERHATIAN}}
Bukti pembelajaran yang tersedia: {{BUKTI}}
Kekangan yang diketahui: {{KEKANGAN}}

Jika objektif, pemerhatian atau bukti tiada, minta maklumat itu dan berhenti. Peraturan berhenti ini mengatasi permintaan untuk jawapan lengkap atau lima bahagian: jangan tulis rangka refleksi, hipotesis atau pelarasan bagi kes yang tidak lengkap. Jangan cipta peratus, bilangan murid, hasil atau sebab. Jangan membuat diagnosis, menilai watak atau menyalahkan murid.

Tulis refleksi ringkas dengan lima bahagian:
1. bukti objektif yang diperhatikan;
2. perkara yang nampaknya menyokong pembelajaran;
3. halangan atau jurang, dinyatakan sebagai pemerhatian;
4. tafsiran tentatif yang jelas dilabel sebagai hipotesis; dan
5. satu pelarasan khusus dan realistik untuk pelajaran seterusnya serta bukti yang akan diperhatikan.

Gunakan bahasa profesional dan neutral. Tandakan jurang maklumat `[PERLU MAKLUMAT]` dan keputusan guru `[PERLU SEMAKAN GURU]`.

Pelarasan mesti menggunakan kaedah dan bahan yang telah disebut. Jangan tambah lembaran kerja, gambar, alat, aplikasi atau sumber baharu; jika tambahan mungkin membantu, asingkan sebagai `Cadangan belum disahkan` dan minta persetujuan. Jangan kaitkan satu sebab dengan pemerhatian secara tunggal. Jika hipotesis berguna, berikan sekurang-kurangnya dua penjelasan alternatif yang munasabah dan nyatakan bukti lanjut yang diperlukan untuk membezakannya.

Setiap hipotesis mesti menggunakan bahasa kemungkinan seperti `mungkin`, `boleh jadi` atau `belum dapat dipastikan`; jangan gunakan `disebabkan`, `menyebabkan` atau rumusan sebab-akibat. Hipotesis hanya boleh merumuskan semula pemerhatian, bukti dan kekangan yang diberi; jangan tambah nama konsep, salah faham, tingkah laku atau keadaan yang tidak terdapat dalam input. Jika bukti tidak menyokong dua hipotesis khusus, nyatakan dua batas tafsiran terhadap bukti sedia ada dan tandakan `[HIPOTESIS MEMERLUKAN MAKLUMAT]`.

Jika input tidak menamakan kaedah yang boleh diubah, jangan reka perbincangan pasangan, soal jawab, demonstrasi atau strategi lain. Bahagian kelima tetap wajib diisi dengan `[PELARASAN PERLU DIPILIH GURU]`, kekangan yang perlu dipatuhi dan permintaan kepada guru untuk memilih kaedah sedia ada. Bukti susulan boleh menerangkan perkara yang perlu diperhatikan, tetapi jangan menetapkan kaedah pengumpulan baharu tanpa kebenaran. Sebelum tamat, semak bahawa kelima-lima bahagian mempunyai kandungan.
```

### Hasil dijangka

Refleksi ringkas dengan fakta, tafsiran tentatif dan satu pelarasan seterusnya.

### Contoh penggunaan

#### Contoh input

Objektif: murid menerangkan dua sebab hakisan. Pemerhatian: ramai mengenal pasti contoh tetapi alasan tidak merujuk bukti. Bukti: respons lisan dan tiga contoh anonim.

#### Contoh hasil

**Pemerhatian berasaskan bukti**
Dalam respons lisan dan tiga contoh anonim, kebanyakan murid dapat menamakan contoh hakisan. Namun, penjelasan mereka belum menghubungkan contoh itu dengan bukti tentang pergerakan air, angin atau perubahan permukaan.

**Tafsiran tentatif**
Murid mungkin mengenali istilah dan contoh tetapi belum mempunyai rangka ayat untuk menghubungkan sebab, proses dan bukti. Ini ialah hipotesis pengajaran, bukan kesimpulan tentang kebolehan murid.

**Pelarasan pelajaran seterusnya**
Mulakan dengan satu contoh bergambar dan modelkan ayat: “Hakisan berlaku apabila ___; buktinya ialah ___.” Kemudian minta murid membandingkan dua contoh dan menandakan bahagian ayat yang menyatakan sebab serta bukti.

**Bukti untuk dikumpulkan**
Gunakan tiket keluar dua ayat. Kejayaan awal: sekurang-kurangnya satu sebab yang munasabah dan satu bukti yang berkaitan. Semak respons secara anonim untuk menentukan sama ada pemodelan perlu diulang.

### Semakan kualiti

- Semua pemboleh ubah wajib telah diganti dan tiada token `{{...}}` tertinggal.
- Hasil mengikuti format yang diminta dan sepadan dengan hasil dijangka.
- Semua fakta, angka, nama dan tarikh boleh dijejak kepada input atau sumber yang diberikan.
- Andaian, jurang dan ketidakpastian ditandakan dengan jelas; tiada rujukan atau kelulusan direka-reka.
- Pemilik kerja telah menyemak privasi, nada dan tindakan sebelum hasil digunakan atau dihantar.

### Batasan dan penggunaan bertanggungjawab

- Jangan masukkan identiti murid atau membuat diagnosis.

Refleksi ini menyusun bukti yang diberi sahaja. Ia tidak membuktikan punca, keberkesanan guru atau kebolehan murid.

## English

### How to use this prompt

1. Prepare every required input and de-identify sensitive information that is not needed.
2. Replace every variable in the prompt. Do not let the AI fill in missing facts, policies or references.
3. Copy the complete prompt, paste it into your chosen model and attach any authorised reference material.
4. Review the result with the checklist below before using it.

### Variables

- `{{OBJECTIVE}}` — Learning objective **(Required)**.
- `{{OBSERVATIONS}}` — De-identified observations **(Required)**.
- `{{EVIDENCE}}` — Learning evidence **(Required)**.
- `{{CONSTRAINTS}}` — Known constraints **(Optional)**.

### Complete prompt

```text
Learning objective: {{OBJECTIVE}}
Post-lesson observations without names or identifying information: {{OBSERVATIONS}}
Available learning evidence: {{EVIDENCE}}
Known constraints: {{CONSTRAINTS}}

If the objective, observations or evidence is missing, request it and stop. This stop rule overrides a request for a complete or five-part answer: do not write a reflection scaffold, hypothesis or adjustment for an incomplete case. Do not invent percentages, learner counts, outcomes or causes. Do not diagnose, judge character or blame learners.

Write a concise reflection with five sections:
1. objective evidence observed;
2. what appeared to support learning;
3. barriers or gaps stated as observations;
4. tentative interpretation explicitly labelled as a hypothesis; and
5. one specific realistic adjustment for the next lesson and the evidence to observe.

Use professional neutral language. Mark information gaps `[INFORMATION NEEDED]` and teacher decisions `[TEACHER REVIEW REQUIRED]`.

The adjustment must use methods and materials already mentioned. Do not add worksheets, images, tools, apps or new resources; when an addition may help, separate it as `Unconfirmed suggestion` and request approval. Do not link an observation to one cause. When a hypothesis is useful, give at least two plausible alternative explanations and state what further evidence would distinguish them.

Every hypothesis must use possibility language such as `may`, `might` or `cannot yet be determined`; do not use causal wording such as `because of`, `caused by` or `resulted from`. A hypothesis may only restate the supplied observations, evidence and constraints; do not add a concept name, misconception, behaviour or condition absent from the input. If the evidence does not support two specific hypotheses, state two interpretation limits of the available evidence and mark `[HYPOTHESIS NEEDS INFORMATION]`.

If the input does not name an adjustable method, do not invent pair discussion, questioning, demonstration or another strategy. The fifth section must still contain `[ADJUSTMENT TO BE CHOSEN BY TEACHER]`, the constraints to preserve and a request for the teacher to select an existing method. Follow-up evidence may describe what should be observed, but must not prescribe a new collection method without permission. Before finishing, check that all five sections contain content.
```

### Expected output

A concise reflection separating facts, tentative interpretation and one next adjustment.

### Worked example

#### Sample input

Objective: learners explain two causes of erosion. Observation: many identify examples but their reasoning does not cite evidence. Evidence: oral responses and three anonymous examples.

#### Sample output

**Evidence-based observation**
Across oral responses and three anonymous examples, most learners could name examples of erosion. Their explanations did not yet connect those examples to evidence about moving water, wind or surface change.

**Tentative interpretation**
Learners may recognise the terms and examples but lack a sentence structure that connects cause, process and evidence. This is a teaching hypothesis, not a conclusion about learner ability.

**Next-lesson adjustment**
Begin with one visual example and model the sentence: “Erosion happens when ___; the evidence is ___.” Learners then compare two examples and mark the clause that states the cause and the clause that supplies evidence.

**Evidence to collect**
Use a two-sentence exit ticket. Initial success criterion: at least one plausible cause and one relevant piece of evidence. Review responses anonymously to decide whether the modelling should be repeated.

### Quality check

- Every required variable has been replaced and no `{{...}}` token remains.
- The response follows the requested format and matches the expected output.
- Every fact, figure, name and date is traceable to the supplied input or source.
- Assumptions, gaps and uncertainties are clearly labelled; no reference or approval is invented.
- The work owner has reviewed privacy, tone and actions before the result is used or sent.

### Limitations and responsible use

- Do not include learner identities or make diagnoses.

This reflection organises supplied evidence only. It does not prove causation, teacher effectiveness or learner ability.
