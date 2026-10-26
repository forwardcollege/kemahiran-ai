---
schema_version: 1
id: skill-student-feedback-001
type: skill
status: approved
slug:
  {
    ms: pembantu-maklum-balas-murid-yang-membina,
    en: constructive-student-feedback-assistant,
  }
title:
  {
    ms: Pembantu Maklum Balas Murid yang Membina,
    en: Constructive Student Feedback Assistant,
  }
summary:
  {
    ms: "Tukar bukti kerja murid yang dinyahkenal pasti dan rubrik diluluskan kepada maklum balas khusus, menggalakkan dan boleh ditindak.",
    en: "Turn de-identified learner-work evidence and an approved rubric into specific, encouraging and actionable feedback.",
  }
audiences: [teachers_educators]
use_cases: [teaching_learning, communication]
sectors: [education]
categories: [student_feedback]
tags: [student_feedback, rubric, privacy, next_steps]
tools:
  - id: gemini
    compatibility: expected
    tested_on: null
    notes:
      {
        ms: Ujian privasi dan semakan guru diperlukan.,
        en: Privacy testing and teacher review are required.,
      }
difficulty: intermediate
intended_output: constructive_student_feedback
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
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [skill-rubric-001, prompt-parent-message-001]
featured: false
search_aliases:
  {
    ms: [komen kerja murid, maklum balas pentaksiran],
    en: [student work feedback, assessment feedback],
  }
skill:
  estimated_minutes: 15
  outcome:
    {
      ms: Maklum balas draf yang terikat pada bukti dan satu langkah seterusnya.,
      en: Evidence-bound draft feedback with one next step.,
    }
  prerequisites:
    {
      ms: [Hasil atau rubrik yang diluluskan, Bukti kerja tanpa identiti],
      en: [Approved outcome or rubric, De-identified work evidence],
    }
  required_inputs:
    - {
        id: criteria,
        label: { ms: Kriteria diluluskan, en: Approved criteria },
        required: true,
      }
    - {
        id: evidence,
        label:
          {
            ms: Bukti kerja dinyahkenal pasti,
            en: De-identified work evidence,
          },
        required: true,
      }
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-student-feedback-001/0.2.0/draft-constructive-student-feedback.zip,
      format: skill_md_zip,
      included_files: [README.md, SKILL.md, LICENSES.md],
    }
  knowledge:
    {
      requirement: optional,
      persistent_references: [],
      runtime_inputs:
        [
          {
            id: learner_work,
            type: deidentified_student_work,
            sensitive: true,
          },
        ],
      missing_reference_behavior: stop_and_request_source,
    }
  limitations:
    {
      ms:
        [
          Jangan masukkan identiti atau rekod murid.,
          Guru meluluskan maklum balas akhir.,
        ],
      en:
        [
          Do not include learner identity or records.,
          The teacher approves final feedback.,
        ],
    }
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf maklum balas yang membezakan bukti, kekuatan, jurang dan langkah seterusnya tanpa mereka markah atau membuat andaian tentang murid.

### Sebelum bermula

Nyahkenal pasti petikan kerja murid. Sediakan objektif atau rubrik yang diluluskan dan hanya bukti yang diperlukan. Jangan masukkan nama, nombor pengenalan, diagnosis, rekod disiplin atau maklumat keluarga.

### Langkah penggunaan

1. Semak bahawa semua bukti telah dinyahkenal pasti.
2. Berikan kriteria, petikan kerja, nada dan panjang yang dikehendaki.
3. Salin arahan di bawah dan lengkapkan pemboleh ubahnya.
4. Bandingkan setiap kenyataan dengan bukti sebenar dan kriteria.
5. Edit nada, langkah seterusnya dan keputusan pentaksiran sebelum digunakan.

### Arahan untuk disalin

```text
Anda membantu guru menyediakan maklum balas pembelajaran. Jika input mengandungi identiti atau maklumat sensitif, jangan ulanginya; minta versi dinyahkenal pasti dan berhenti.

Objektif/kriteria diluluskan: {{KRITERIA}}
Bukti kerja dinyahkenal pasti: {{BUKTI}}
Nada dan panjang: {{NADA_PANJANG}}

Pisahkan: (1) bukti yang diperhatikan, (2) satu kekuatan yang disokong bukti, (3) satu jurang berbanding kriteria, (4) satu langkah seterusnya yang khusus, dan (5) perkara untuk semakan guru. Jangan cipta markah, niat, tahap kebolehan, diagnosis atau sifat watak. Jangan gunakan pujian umum tanpa bukti. Jika rubrik atau bukti tiada, tanya dan berhenti.
```

### Contoh penggunaan

#### Contoh input

Petikan kerja sintetik: “Kempen kitar semula sekolah berjaya kerana tong kitar semula lebih penuh pada minggu kedua.” Kriteria: nyatakan tuntutan, gunakan bukti yang boleh diperiksa dan jelaskan bagaimana bukti menyokong tuntutan.

#### Contoh hasil

**Kekuatan yang dapat dilihat**
Anda telah menyatakan tuntutan yang jelas bahawa kempen kitar semula berjaya dan menggunakan pemerhatian khusus—tong lebih penuh pada minggu kedua—sebagai bukti awal.

**Bahagian yang perlu diperkukuh**
Bukti itu belum menunjukkan berapa banyak bahan dikitar semula atau sama ada peningkatan disebabkan kempen. Tong yang lebih penuh juga mungkin dipengaruhi oleh bilangan murid, jadual kutipan atau jenis bahan. Hubungan antara bukti dan tuntutan perlu diterangkan dengan lebih berhati-hati.

**Langkah seterusnya**
Semak ayat kesimpulan supaya sepadan dengan kekuatan bukti. Contohnya: “Tong kitar semula yang lebih penuh pada minggu kedua menunjukkan penyertaan mungkin meningkat, tetapi data berat atau jumlah bahan diperlukan untuk menilai kejayaan kempen.” Tambah satu data yang boleh diukur jika tersedia.

**Semakan guru:** Maklum balas ini tidak memberikan markah akhir dan tidak membuat andaian tentang usaha atau kebolehan murid.

### Semakan kualiti

- Kekuatan dan jurang disokong oleh bukti yang diberikan.
- Langkah seterusnya khusus dan boleh dilakukan.
- Nada menghormati murid dan tiada maklumat baharu dicipta.
- Tiada identiti atau maklumat sensitif murid dikekalkan.

### Batasan dan penggunaan bertanggungjawab

AI tidak memahami keseluruhan konteks murid atau kelas. Guru mesti menyemak kesesuaian emosi, bahasa, konteks dan keputusan pentaksiran serta meluluskan maklum balas akhir.

## English

### What you will get

A feedback draft that separates evidence, strengths, gaps and next steps without inventing marks or making assumptions about the learner.

### Before you begin

De-identify the learner-work extract. Supply the approved objective or rubric and only necessary evidence. Do not include names, identifiers, diagnoses, disciplinary records or family information.

### How to use it

1. Confirm that all evidence has been de-identified.
2. Supply the criteria, work extract, desired tone and length.
3. Copy the instruction below and complete its variables.
4. Check every statement against the actual evidence and criteria.
5. Edit the tone, next step and assessment decision before use.

### Copyable instruction

```text
You help a teacher draft learning feedback. If the input contains identity or sensitive information, do not repeat it; request a de-identified version and stop.

Approved objective/criteria: {{CRITERIA}}
De-identified work evidence: {{EVIDENCE}}
Tone and length: {{TONE_LENGTH}}

Separate: (1) observed evidence, (2) one evidence-supported strength, (3) one gap against the criteria, (4) one specific next step, and (5) teacher-review points. Do not invent marks, intent, ability level, diagnosis or character traits. Do not use generic praise without evidence. If the rubric or evidence is absent, ask and stop.
```

### Worked example

#### Sample input

Synthetic work extract: “The school recycling campaign succeeded because the recycling bins were fuller in the second week.” Criterion: state a claim, use checkable evidence and explain how the evidence supports the claim.

#### Sample output

**Visible strength**
You make a clear claim that the recycling campaign succeeded and use a specific observation—the fuller bins in the second week—as initial evidence.

**What needs strengthening**
The evidence does not yet show how much material was recycled or whether the campaign caused the increase. Fuller bins could also be affected by student numbers, collection timing or material type. The link between evidence and claim needs more cautious explanation.

**Next step**
Revise the conclusion so it matches the strength of the evidence. For example: “Fuller recycling bins in the second week suggest that participation may have increased, but weight or volume data is needed to evaluate the campaign’s success.” Add one measurable data point if available.

**Teacher check:** This feedback does not assign a final mark or infer the learner’s effort or ability.

### Quality check

- Strengths and gaps are supported by the supplied evidence.
- The next step is specific and achievable.
- The tone respects the learner and no new information is invented.
- No learner identity or sensitive information remains.

### Limitations and responsible use

AI does not understand the learner's full context or classroom circumstances. The teacher must review emotional, language, contextual and assessment suitability and approve the final feedback.
