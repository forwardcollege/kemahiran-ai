---
schema_version: 1
id: prompt-minutes-001
type: llm_prompt
status: draft

slug:
  ms: minit-mesyuarat-formal
  en: formal-meeting-minutes

title:
  ms: Sediakan Minit Mesyuarat Formal
  en: Prepare Formal Meeting Minutes

summary:
  ms: Tukarkan nota mesyuarat yang telah dinyahkenal pasti kepada draf minit formal dengan keputusan, tindakan dan pemilik tindakan yang jelas.
  en: Turn de-identified meeting notes into formal draft minutes with clear decisions, actions and action owners.

audiences:
  - education_officers_jpn
  - public_sector
  - professionals
use_cases:
  - administration
  - writing_documents
sectors:
  - education
  - public_service
  - cross_sector
categories:
  - meeting_documentation
tags:
  - meeting_minutes
  - action_items
  - formal_malay

tools:
  - id: chatgpt
    compatibility: expected
    tested_on: null
    notes:
      ms: Perlu diuji dengan nota contoh sintetik sebelum diterbitkan.
      en: Must be tested with synthetic sample notes before publication.
  - id: gemini
    compatibility: expected
    tested_on: null
    notes:
      ms: Perlu diuji dengan nota contoh sintetik sebelum diterbitkan.
      en: Must be tested with synthetic sample notes before publication.
  - id: claude
    compatibility: expected
    tested_on: null
    notes:
      ms: Perlu diuji dengan nota contoh sintetik sebelum diterbitkan.
      en: Must be tested with synthetic sample notes before publication.

difficulty: beginner
intended_output: formal_meeting_minutes
languages:
  - ms
  - en

author:
  name: Forward Academy
  url: null
curator:
  name: Forward Labs

provenance:
  kind: original
  source_urls: []
  notes:
    ms: Contoh skema kandungan asal untuk perancangan produk.
    en: Original content-schema example for product planning.

license:
  id: pending
  label: Licence to be confirmed before publication
  url: null

review:
  status: pending
  organisation: Forward College
  editorial_reviewer: Howie Chang
  specialist_review_status: not_obtained
  specialist_reviewer: null
  last_reviewed: null
  next_review_due: null

version: 0.1.0
created_at: "2026-10-21"
updated_at: "2026-10-21"

related_ids:
  - skill-meeting-minutes-001
featured: true

search_aliases:
  ms:
    - catatan mesyuarat
    - keputusan mesyuarat
    - tindakan susulan
  en:
    - meeting notes
    - minutes of meeting
    - action register

llm_prompt:
  variables:
    - id: organisation
      token: "{{NAMA_ORGANISASI}}"
      label:
        ms: Nama organisasi
        en: Organisation name
      required: true
      example:
        ms: Pejabat Pendidikan Daerah Contoh
        en: Example District Education Office
    - id: meeting_details
      token: "{{BUTIRAN_MESYUARAT}}"
      label:
        ms: Tarikh, masa, tempat dan pengerusi
        en: Date, time, venue and chair
      required: true
      example:
        ms: 15 Oktober 2026, 9.00 pagi, Bilik Mesyuarat Utama
        en: 15 October 2026, 9:00 a.m., Main Meeting Room
    - id: notes
      token: "{{NOTA_DINYAHKENAL_PASTI}}"
      label:
        ms: Nota mesyuarat yang telah dinyahkenal pasti
        en: De-identified meeting notes
      required: true
      example:
        ms: Agenda, perbincangan, keputusan dan tindakan ringkas
        en: Brief agenda, discussion, decision and action notes
  expected_output:
    ms: Draf minit mesyuarat formal dengan agenda, keputusan, tindakan, pemilik dan tarikh sasaran.
    en: Formal draft minutes with agenda items, decisions, actions, owners and target dates.
  recommended_capabilities:
    - long_context
    - instruction_following
    - structured_output
  sample_included: false
  limitations:
    ms:
      - Semak semua nama, keputusan dan tarikh dengan rekod rasmi.
      - Jangan hantar maklumat sulit kepada alat AI yang tidak diluluskan.
    en:
      - Verify every name, decision and date against the official record.
      - Do not send confidential information to an AI tool that is not approved.
---

## Bahasa Melayu

### Cara menggunakan prompt ini

1. Nyahkenal pasti nota dan keluarkan maklumat sulit yang tidak diperlukan.
2. Gantikan pemboleh ubah bertanda kurungan berganda.
3. Tampalkan prompt lengkap ke dalam alat AI yang diluluskan organisasi.
4. Semak draf dengan pengerusi atau urus setia sebelum diedarkan.

### Pemboleh ubah

- `{{NAMA_ORGANISASI}}` — nama penuh organisasi atau jawatankuasa.
- `{{BUTIRAN_MESYUARAT}}` — tarikh, masa, tempat, pengerusi dan kehadiran yang telah disahkan.
- `{{FORMAT_ORGANISASI}}` — susunan tajuk atau format wajib, jika ada.
- `{{NOTA_DINYAHKENAL_PASTI}}` — nota sumber yang telah dibersihkan daripada data sensitif yang tidak perlu.

### Prompt lengkap

```text
Peranan:
Anda ialah pembantu urus setia yang mahir menyediakan minit mesyuarat formal dalam Bahasa Melayu untuk organisasi di Malaysia.

Konteks:
- Organisasi/Jawatankuasa: {{NAMA_ORGANISASI}}
- Butiran mesyuarat: {{BUTIRAN_MESYUARAT}}
- Format wajib organisasi, jika ada: {{FORMAT_ORGANISASI}}

Sumber:
{{NOTA_DINYAHKENAL_PASTI}}

Tugas:
Sediakan draf minit mesyuarat yang tepat, ringkas dan formal berdasarkan nota sahaja.

Proses:
1. Kenal pasti agenda, perkara yang dibincangkan, keputusan dan tindakan.
2. Bezakan fakta dalam nota daripada maklumat yang tidak dinyatakan.
3. Jika nama, tarikh, keputusan atau pemilik tindakan tidak jelas, tandakan `[PERLU PENGESAHAN]`; jangan membuat andaian.
4. Gabungkan pengulangan tanpa mengubah maksud.
5. Gunakan bahasa pentadbiran yang jelas dan neutral.

Format output:
1. Tajuk mesyuarat
2. Tarikh, masa dan tempat
3. Pengerusi dan kehadiran
4. Agenda bernombor
5. Bagi setiap agenda:
   - Ringkasan perbincangan
   - Keputusan
   - Tindakan
   - Pegawai/pemilik tindakan
   - Tarikh sasaran
6. Hal-hal lain
7. Tarikh mesyuarat seterusnya, jika dinyatakan
8. Jadual ringkasan tindakan di bahagian akhir
9. Senarai perkara `[PERLU PENGESAHAN]`

Kekangan:
- Jangan mereka-reka maklumat.
- Jangan menambah dasar, pekeliling atau komitmen yang tiada dalam nota.
- Kekalkan nama dan istilah rasmi seperti yang diberikan.
- Jangan membuat kesimpulan tentang individu.

Semakan kualiti sebelum menjawab:
- Setiap keputusan mempunyai sumber dalam nota.
- Setiap tindakan mempunyai pemilik dan tarikh, atau ditanda untuk pengesahan.
- Nada formal dan konsisten.
- Tiada fakta baharu diperkenalkan.
```

### Hasil yang dijangka

Draf berstruktur yang mempercepat kerja urus setia. Ia masih perlu dibandingkan dengan nota sumber, rakaman yang dibenarkan dan keputusan pengerusi.

### Batasan dan penggunaan wajar

Jangan masukkan dokumen terperingkat, data peribadi, maklumat disiplin, butiran kes atau maklumat organisasi yang sensitif ke dalam perkhidmatan AI awam. Kelulusan manusia kekal wajib.

## English

### How to use this prompt

1. De-identify the notes and remove unnecessary confidential information.
2. Replace the variables shown in double braces.
3. Paste the complete prompt into an AI tool approved by your organisation.
4. Have the chair or secretariat verify the draft before circulation.

### Variables

- `{{ORGANISATION_NAME}}` — full organisation or committee name.
- `{{MEETING_DETAILS}}` — verified date, time, venue, chair and attendance.
- `{{ORGANISATION_FORMAT}}` — required headings or house format, if any.
- `{{DEIDENTIFIED_NOTES}}` — source notes cleared of unnecessary sensitive data.

### Complete prompt

```text
Role:
You are a secretariat assistant skilled in preparing formal meeting minutes for a Malaysian organisation.

Context:
- Organisation/Committee: {{ORGANISATION_NAME}}
- Meeting details: {{MEETING_DETAILS}}
- Required organisational format, if any: {{ORGANISATION_FORMAT}}

Source:
{{DEIDENTIFIED_NOTES}}

Task:
Prepare an accurate, concise and formal draft of the meeting minutes using only the supplied notes.

Process:
1. Identify agenda items, discussion points, decisions and actions.
2. Distinguish facts in the notes from information that was not provided.
3. If a name, date, decision or action owner is unclear, mark it `[CONFIRMATION REQUIRED]`; do not guess.
4. Consolidate repetition without changing meaning.
5. Use clear, neutral administrative language.

Required output:
1. Meeting title
2. Date, time and venue
3. Chair and attendance
4. Numbered agenda
5. For each agenda item:
   - Discussion summary
   - Decision
   - Action
   - Responsible officer/action owner
   - Target date
6. Any other business
7. Next meeting date, if stated
8. Consolidated action table at the end
9. List of all `[CONFIRMATION REQUIRED]` items

Constraints:
- Do not invent information.
- Do not add policies, circulars or commitments absent from the notes.
- Preserve official names and terms as supplied.
- Do not infer conclusions about individuals.

Quality checks before responding:
- Every decision is supported by the notes.
- Every action has an owner and date, or is marked for confirmation.
- Tone is formal and consistent.
- No new facts have been introduced.
```

### Expected output

A structured draft that reduces secretariat work. It must still be checked against the source notes, any permitted recording and the chair’s confirmed decisions.

### Limitations and appropriate use

Do not enter classified documents, personal data, disciplinary information, case details or sensitive organisational material into a public AI service. Human approval remains mandatory.
