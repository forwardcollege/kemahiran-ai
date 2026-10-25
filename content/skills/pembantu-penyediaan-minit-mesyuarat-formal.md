---
schema_version: 1
id: skill-meeting-minutes-001
type: skill
status: approved
slug:
  {
    ms: pembantu-penyediaan-minit-mesyuarat-formal,
    en: formal-meeting-minutes-assistant,
  }
title:
  {
    ms: Pembantu Penyediaan Minit Mesyuarat Formal,
    en: Formal Meeting Minutes Assistant,
  }
summary:
  ms: Tukarkan nota yang telah dinyahkenal pasti kepada draf minit formal yang membezakan perbincangan, keputusan dan tindakan untuk pengesahan urus setia.
  en: Turn de-identified notes into formal draft minutes that distinguish discussion, decisions and actions for secretariat verification.
audiences: [education_officers_jpn, public_sector, professionals]
use_cases: [administration, writing_documents]
sectors: [education, public_service, cross_sector]
categories: [meeting_documentation]
tags: [meeting_minutes, decisions, action_register, formal_malay]
tools:
  - id: gemini
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: Lulus ujian Gemini Auto dengan nota sintetik lengkap serta sempadan tanpa nota dan privasi; semakan manusia masih diperlukan sebelum edaran minit.,
        en: Passed Gemini Auto testing with complete synthetic notes plus no-notes and privacy boundaries; human verification remains required before minutes are circulated.,
      }
difficulty: beginner
intended_output: formal_meeting_minutes
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
related_ids: [prompt-official-letter-001, prompt-meeting-actions-001]
featured: true
search_aliases:
  ms: [catatan mesyuarat, keputusan mesyuarat, daftar tindakan]
  en: [minutes of meeting, meeting notes, action register]
skill:
  estimated_minutes: 25
  outcome:
    ms: Draf minit formal dan daftar tindakan yang boleh disahkan oleh urus setia.
    en: Formal draft minutes and an action register for secretariat verification.
  prerequisites:
    ms:
      [
        Agenda dan butiran mesyuarat yang disahkan,
        Nota sumber yang dinyahkenal pasti,
        Format organisasi jika diwajibkan,
      ]
    en:
      [
        Verified agenda and meeting details,
        De-identified source notes,
        Required organisational format if applicable,
      ]
  required_inputs:
    - id: meeting_details
      label: { ms: Butiran mesyuarat, en: Meeting details }
      required: true
    - id: source_notes
      label: { ms: Nota sumber, en: Source notes }
      required: true
    - id: organisation_format
      label: { ms: Format organisasi, en: Organisational format }
      required: false
  instruction_copy_available: true
  package:
    {
      available: true,
      path: /downloads/skills/skill-meeting-minutes-001/0.2.1/draft-formal-meeting-minutes.zip,
      format: skill_md_zip,
      included_files:
        [README.md, SKILL.md, LICENSES.md, references/template-setup.md],
    }
  knowledge:
    requirement: optional
    persistent_references:
      - id: organisation_minutes_guide
        type: template_or_style_guide
        supplied_by: organisation
        required: false
        sensitive: false
        description:
          ms: Templat minit, istilah dan panduan gaya organisasi yang diluluskan.
          en: Approved organisational minutes template, terminology and style guide.
    runtime_inputs:
      - id: deidentified_meeting_notes
        type: source_notes
        sensitive: true
      - id: verified_attendance
        type: structured_input
        sensitive: true
    missing_reference_behavior: continue_with_explicit_warning
  limitations:
    ms:
      [
        Semua keputusan mesti disahkan dengan rekod rasmi.,
        Jangan masukkan maklumat terperingkat atau sensitif ke alat yang tidak diluluskan.,
        Pengerusi atau urus setia mesti meluluskan versi akhir.,
      ]
    en:
      [
        Every decision must be verified against the official record.,
        Do not enter classified or sensitive material into an unapproved tool.,
        The chair or secretariat must approve the final version.,
      ]
---

## Bahasa Melayu

### Hasil yang anda akan peroleh

Draf minit formal mengikut susunan agenda, keputusan yang boleh dijejak, tindakan susulan bersumber dan senarai perkara yang belum dapat disahkan.

### Sebelum bermula

Sediakan tajuk, tarikh, masa, tempat, pengerusi, kehadiran yang disahkan, agenda dan nota sumber. Jika digunakan berulang kali, organisasi boleh menambah templat minit atau panduan gaya yang diluluskan sebagai rujukan kekal Skill. Nota mesyuarat dan senarai kehadiran ialah input bagi satu tugasan sahaja dan tidak boleh dimasukkan ke dalam pakej awam. Nyahkenal pasti data peribadi yang tidak diperlukan dan jangan masukkan dokumen terperingkat atau maklumat kes sensitif ke perkhidmatan AI awam.

### Langkah penggunaan

1. Asingkan agenda, nota perbincangan, keputusan dan tindakan jika boleh.
2. Salin arahan di bawah dan masukkan nota yang telah dibersihkan.
3. Minta AI menandakan jurang, bukan mengisinya dengan andaian.
4. Bandingkan setiap keputusan dan tindakan dengan nota atau rakaman yang dibenarkan.
5. Sahkan nama, jawatan, tarikh serta tahap pengedaran.
6. Dapatkan kelulusan pengerusi atau urus setia sebelum edaran.

### Arahan untuk disalin

```text
Anda ialah pembantu urus setia yang menyediakan draf minit mesyuarat formal dalam Bahasa Melayu untuk organisasi Malaysia.

Butiran:
- Organisasi/Jawatankuasa: {{ORGANISASI}}
- Tajuk, tarikh, masa dan tempat: {{BUTIRAN_MESYUARAT}}
- Pengerusi dan kehadiran disahkan: {{KEHADIRAN}}
- Format wajib: {{FORMAT_ORGANISASI}}

Nota sumber yang telah dinyahkenal pasti:
{{NOTA_SUMBER}}

Gunakan hanya maklumat dalam input. Bezakan perbincangan, cadangan, keputusan dan tindakan. Cadangan bukan keputusan. Keputusan juga bukan tindakan secara automatik: masukkan tindakan hanya apabila nota menyatakan tugas yang diarahkan atau diminta dengan jelas. Bagi tindakan sebenar, jika pemilik atau tarikh tidak dinyatakan, tulis `[PERLU PENGESAHAN]`; jangan meneka. Jangan cipta status tindakan seperti `Belum Selesai`; abaikan medan status melainkan status dinyatakan dalam nota.

Hasilkan:
1. kepala minit dan senarai kehadiran;
2. item mengikut susunan agenda dengan ringkasan perbincangan neutral; gunakan nombor hanya jika input melabelkannya secara jelas sebagai nombor agenda atau item—nombor senarai nota bukan nombor agenda;
3. keputusan tepat seperti yang disokong nota;
4. tindakan yang disokong nota, bersama pemilik dan tarikh sasaran apabila tersedia;
5. hal-hal lain dan mesyuarat seterusnya jika dinyatakan;
6. daftar tindakan ringkas dengan lajur `No.`, `Tindakan`, `Pemilik` dan `Tarikh Akhir`; tambah lajur `Status` hanya jika nota menyatakan sekurang-kurangnya satu status tindakan; dan
7. senarai semua perkara yang perlu disahkan.

Kekalkan istilah rasmi. Jangan menambah dasar, komitmen atau pendapat tentang individu. Sebelum menjawab, semak bahawa tiada keputusan baharu dicipta, keputusan tidak ditukar menjadi tindakan tanpa arahan sumber, setiap tindakan mempunyai sumber, tiada status tindakan direka dan tiada nombor agenda digunakan melainkan sumber melabelkannya sebagai agenda atau item.
```

### Contoh input dan hasil ringkas

Input sintetik: “Agenda 2: Tarikh bengkel dicadang 12 November. Ahli bersetuju selepas dewan disahkan. Aina semak dewan sebelum 30 Oktober.”

Hasil yang sesuai:

| Agenda            | Keputusan                                              | Tindakan                 | Pemilik | Tarikh     |
| ----------------- | ------------------------------------------------------ | ------------------------ | ------- | ---------- |
| 2. Tarikh bengkel | Cadangan 12 November tertakluk kepada pengesahan dewan | Semak ketersediaan dewan | Aina    | 30 Oktober |

### Semakan kualiti

- Setiap keputusan disokong nota sumber.
- Perbincangan tidak ditulis sebagai keputusan.
- Nama, jawatan, tarikh dan tindakan telah disahkan.
- Jurang ditanda dengan jelas.
- Tahap kerahsiaan dan senarai penerima sesuai.

### Batasan dan penggunaan bertanggungjawab

AI tidak mengetahui apa yang benar-benar dipersetujui selain input yang diberikan. Jangan gunakan ringkasan AI sebagai rekod rasmi tanpa pengesahan manusia. Ikuti dasar organisasi bagi rakaman, penyimpanan dan penggunaan alat AI.

### Pakej kemahiran

Pakej boleh muat turun tersedia dan mengandungi panduan dwibahasa `README.md`, spesifikasi operasi `SKILL.md`, panduan templat dan manifest lesen. Arahan di atas juga boleh digunakan terus tanpa pemasangan.

## English

### What you will get

Formal draft minutes in agenda order, with traceable decisions, source-supported follow-up actions and a list of facts requiring confirmation.

### Before you begin

Prepare the verified title, date, time, venue, chair, attendance, agenda and source notes. For repeated use, an organisation may add its approved minutes template or style guide as persistent Skill knowledge. Meeting notes and attendance are single-task inputs and must never be included in a public package. De-identify unnecessary personal data and do not send classified material or sensitive case information to a public AI service.

### How to use it

1. Separate agenda items, discussion, decisions and actions where possible.
2. Copy the instruction below and insert the cleaned notes.
3. Require the AI to flag gaps instead of guessing.
4. Compare every decision and action against the notes or permitted recording.
5. Verify names, roles, dates and distribution classification.
6. Obtain chair or secretariat approval before circulation.

### Copyable instruction

```text
You are a secretariat assistant preparing formal draft meeting minutes for a Malaysian organisation.

Details:
- Organisation/Committee: {{ORGANISATION}}
- Title, date, time and venue: {{MEETING_DETAILS}}
- Verified chair and attendance: {{ATTENDANCE}}
- Required format: {{ORGANISATION_FORMAT}}

De-identified source notes:
{{SOURCE_NOTES}}

Use only the supplied information. Distinguish discussion, proposals, decisions and actions. A proposal is not a decision. A decision is also not automatically an action: include an action only when the notes explicitly assign or request a task. For a genuine action, write `[CONFIRMATION REQUIRED]` when its owner or due date is missing; do not guess. Do not invent action statuses such as `Not Started`; omit the status field unless the notes state it.

Provide:
1. minutes header and attendance;
2. items in the supplied agenda order with neutral discussion summaries; use a number only when the input explicitly labels it as an agenda or item number—note-list numbering is not agenda numbering;
3. decisions supported by the notes;
4. source-supported actions, with owners and target dates when available;
5. other matters and next meeting, when stated;
6. a concise action register with `No.`, `Action`, `Owner` and `Due date` columns; add a `Status` column only when the notes state at least one action status; and
7. every item requiring confirmation.

Preserve official terminology. Do not add policies, commitments or opinions about individuals. Before answering, verify that no new decision was invented, no decision became an action without source instruction, every action has a source, no action status was invented and no agenda number appears unless the source labels it as an agenda or item number.
```

### Short sample input and output

Synthetic input: “Item 2: Workshop proposed for 12 November. Members agreed subject to venue confirmation. Aina to check the hall by 30 October.”

| Item             | Decision                                            | Action                  | Owner | Due date   |
| ---------------- | --------------------------------------------------- | ----------------------- | ----- | ---------- |
| 2. Workshop date | Proposed 12 November, subject to venue confirmation | Check hall availability | Aina  | 30 October |

### Quality check

- Every decision is supported by the source notes.
- Discussion has not been rewritten as a decision.
- Names, roles, dates and actions are verified.
- Gaps are clearly marked.
- Confidentiality and distribution are appropriate.

### Limitations and responsible use

AI does not know what was actually agreed beyond the supplied input. Never treat an AI summary as the official record without human verification. Follow organisational policies for recording, retention and AI use.

### Skill package

A downloadable package is available with a bilingual `README.md`, the operational `SKILL.md` specification, template guidance and a licence manifest. The instruction above also works without installation.
