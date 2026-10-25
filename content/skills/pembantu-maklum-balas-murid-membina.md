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
version: 0.1.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
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
      path: /downloads/skills/skill-student-feedback-001/0.1.0/draft-constructive-student-feedback.zip,
      format: skill_md_zip,
      included_files: [SKILL.md, LICENSES.md],
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

### Cara menggunakan

Nyahkenal pasti petikan kerja murid. Berikan objektif atau rubrik dan hanya bukti yang perlu. Jangan masukkan nama, nombor pengenalan, diagnosis, rekod disiplin atau maklumat keluarga.

### Arahan untuk disalin

```text
Anda membantu guru menyediakan maklum balas pembelajaran. Jika input mengandungi identiti atau maklumat sensitif, jangan ulanginya; minta versi dinyahkenal pasti dan berhenti.

Objektif/kriteria diluluskan: {{KRITERIA}}
Bukti kerja dinyahkenal pasti: {{BUKTI}}
Nada dan panjang: {{NADA_PANJANG}}

Pisahkan: (1) bukti yang diperhatikan, (2) satu kekuatan yang disokong bukti, (3) satu jurang berbanding kriteria, (4) satu langkah seterusnya yang khusus, dan (5) perkara untuk semakan guru. Jangan cipta markah, niat, tahap kebolehan, diagnosis atau sifat watak. Jangan gunakan pujian umum tanpa bukti. Jika rubrik atau bukti tiada, tanya dan berhenti.
```

### Contoh ringkas

Daripada petikan hujah sintetik dan kriteria penggunaan bukti, maklum balas menyebut bukti sebenar, satu jurang hubungan alasan-bukti dan satu tindakan semakan ayat.

### Semakan dan batasan

Pastikan nada menghormati murid, langkah boleh dilakukan dan tiada maklumat baharu dicipta. Guru mesti menyemak kesesuaian emosi, bahasa, konteks dan keputusan pentaksiran.

## English

### How to use

De-identify the learner-work extract. Supply the objective or rubric and only necessary evidence. Do not include names, identifiers, diagnoses, disciplinary records or family information.

### Copyable instruction

```text
You help a teacher draft learning feedback. If the input contains identity or sensitive information, do not repeat it; request a de-identified version and stop.

Approved objective/criteria: {{CRITERIA}}
De-identified work evidence: {{EVIDENCE}}
Tone and length: {{TONE_LENGTH}}

Separate: (1) observed evidence, (2) one evidence-supported strength, (3) one gap against the criteria, (4) one specific next step, and (5) teacher-review points. Do not invent marks, intent, ability level, diagnosis or character traits. Do not use generic praise without evidence. If the rubric or evidence is absent, ask and stop.
```

### Short example

From a synthetic argument extract and an evidence-use criterion, the feedback identifies actual evidence, one reasoning gap and one sentence-revision action.

### Checks and limitations

Ensure the tone respects the learner, the step is achievable and no new information is invented. The teacher must review emotional, language, contextual and assessment suitability.
