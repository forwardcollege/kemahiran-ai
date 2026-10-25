---
schema_version: 1
id: visual-education-001
type: visual_prompt
status: approved
slug:
  {
    ms: ilustrasi-pendidikan-dalam-konteks-malaysia,
    en: educational-illustrations-in-malaysian-contexts,
  }
title:
  {
    ms: Ilustrasi Pendidikan dalam Konteks Malaysia,
    en: Educational Illustrations in Malaysian Contexts,
  }
summary:
  ms: Cipta ilustrasi yang jelas dan sesuai umur untuk konsep, lembaran kerja dan bahan kelas dalam persekitaran Malaysia yang tidak stereotaip.
  en: Create clear, age-appropriate illustrations for concepts, worksheets and classroom materials in non-stereotyped Malaysian settings.
audiences: [teachers_educators]
use_cases: [teaching_learning, visual_content]
sectors: [education]
categories: [educational_visuals]
tags: [classroom, worksheet, illustration, malaysia]
tools:
  - id: gemini_image
    compatibility: expected
    tested_on: null
    notes:
      {
        ms: Belum diuji; jangan anggap tingkah laku sama dengan alat lain.,
        en: Not tested; do not assume identical behaviour to other tools.,
      }
  - id: chatgpt_image
    compatibility: tested
    tested_on: "2026-10-25"
    notes:
      {
        ms: Dua pratonton sintetik dihasilkan dan diluluskan secara dalaman; pengguna masih perlu menyemak ketepatan fakta dan representasi bagi setiap hasil baharu.,
        en: Two synthetic previews were generated and internally approved; users must still check factual accuracy and representation in every new output.,
      }
difficulty: beginner
intended_output: educational_illustration
languages: [ms, en]
author: { name: Forward Academy, url: null }
curator: { name: Forward Labs }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Koleksi prompt asal; dua aset pratonton sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026.,
      en: Original prompt collection; two synthetic preview assets were generated with ChatGPT Image on 25 October 2026.,
    }
license:
  { id: pending, label: Licence to be confirmed before publication, url: null }
review:
  {
    status: internal_approved,
    organisation: Forward College,
    editorial_reviewer: Howie Chang,
    specialist_review_status: not_required,
    specialist_reviewer: null,
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids:
  [skill-rph-001, visual-training-scene-001, visual-micro-explainer-001]
featured: true
search_aliases:
  ms: [gambar lembaran kerja, ilustrasi kelas, visual pendidikan]
  en: [worksheet illustration, classroom visual, education graphic]
visual_prompt:
  media_type: image
  intended_applications: [classroom_material, worksheet, presentation]
  generators:
    - { id: gemini_image, compatibility: expected, tested_on: null }
    - { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" }
  preview:
    src: /media/resources/visual-education-001/concept-recycling-classroom-v1.webp
    width: 1672
    height: 941
    alt:
      ms: Ilustrasi sintetik empat murid mengasingkan kertas, tin dan botol plastik di dalam bilik darjah Malaysia dengan ruang tajuk kosong.
      en: Synthetic illustration of four learners sorting paper, cans and plastic bottles in a Malaysian classroom with blank title space.
    provenance:
      kind: original_generated
      creator: Forward Academy
      tool: ChatGPT Image
      generated_on: "2026-10-25"
  styles: [clean_editorial_illustration, flat_educational]
  subjects: [malaysian_classroom, curriculum_concept]
  aspect_ratios: ["16:9", "4:3", "1:1"]
  output_formats: [presentation_visual, worksheet_visual]
  variables:
    - id: concept
      token: "{{CONCEPT}}"
      label: { ms: Konsep pembelajaran, en: Learning concept }
      required: true
    - id: learner_level
      token: "{{LEARNER_LEVEL}}"
      label: { ms: Tahap murid, en: Learner level }
      required: true
    - id: setting
      token: "{{SETTING}}"
      label: { ms: Konteks Malaysia, en: Malaysian setting }
      required: true
    - id: style
      token: "{{STYLE}}"
      label: { ms: Gaya ilustrasi, en: Illustration style }
      required: true
    - id: aspect_ratio
      token: "{{ASPECT_RATIO}}"
      label: { ms: Nisbah aspek, en: Aspect ratio }
      required: true
  reference_assets:
    - id: factual_learning_source
      type: curriculum_or_subject_reference
      required: false
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Diperlukan apabila visual membuat tuntutan fakta atau menerangkan kandungan kurikulum khusus.
        en: Needed when the visual makes factual claims or explains specific curriculum content.
  image_metadata:
    subject: age_appropriate_learning_scene
    environment: contemporary_malaysian_context
    composition: clear_single_learning_focus
    viewing_angle: eye_level
    lighting: bright_soft_daylight
    palette: [clear_contrast, calm_colours]
    camera_lens: not_applicable_illustration
    visual_style: clean_educational_editorial
    exclusions:
      [
        illegible_text,
        cultural_stereotypes,
        incorrect_symbols,
        clutter,
        frightening_detail,
      ]
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Gunakan koleksi ini untuk visual konsep, lembaran kerja dan slaid pengajaran. Ia sesuai apabila guru memerlukan satu fokus visual yang jelas, bukan poster sarat teks. Untuk rajah atau visual yang menerangkan fakta kurikulum, lampirkan sumber mata pelajaran atau petikan DSKP yang berkaitan. Semak fakta dan representasi budaya sebelum digunakan.

### Pemboleh ubah

- `{{CONCEPT}}` — konsep atau situasi pembelajaran.
- `{{LEARNER_LEVEL}}` — contoh Tahun 3 atau Tingkatan 1.
- `{{SETTING}}` — lokasi Malaysia yang relevan, bukan hiasan rawak.
- `{{STYLE}}` — contoh ilustrasi rata, buku teks atau potongan kertas.
- `{{ASPECT_RATIO}}` — 16:9 untuk slaid, 4:3 atau 1:1 untuk lembaran kerja.

### Prompt 1 — ilustrasi konsep

```text
Cipta ilustrasi pendidikan {{ASPECT_RATIO}} untuk murid {{LEARNER_LEVEL}} yang menerangkan {{CONCEPT}} melalui satu adegan yang jelas di {{SETTING}}.

Gunakan gaya {{STYLE}} yang kemas, bentuk mudah dibaca, kontras jelas dan jumlah objek yang terkawal. Tunjukkan hubungan atau urutan konsep secara visual tanpa teks panjang. Jika label diperlukan, tinggalkan ruang kosong untuk guru menambah label kemudian. Pastikan pakaian, seni bina, tumbuhan dan objek sesuai dengan konteks Malaysia secara semula jadi tanpa stereotaip.

Elakkan logo, lambang rasmi, bendera, teks janaan, wajah selebriti, watak berhak cipta, anatomi cacat, objek pendua, latar berserabut dan unsur yang tidak berkaitan dengan objektif pembelajaran.
```

### Prompt 2 — visual lembaran kerja

```text
Cipta satu set empat ilustrasi kecil yang konsisten untuk lembaran kerja {{LEARNER_LEVEL}} tentang {{CONCEPT}}. Setiap panel mempunyai satu subjek utama, latar putih atau sangat ringkas, garisan bersih, kontras tinggi dan ruang di bawah untuk label guru. Gunakan konteks objek harian yang munasabah di Malaysia. Tiada teks, nombor, logo atau bingkai hiasan.
```

### Cadangan penggunaan

1. Jana tanpa teks akhir.
2. Semak ketepatan konsep dengan bahan kurikulum.
3. Semak tubuh, objek, pakaian, lokasi dan unsur budaya.
4. Tambah label dalam alat reka bentuk yang boleh diakses.
5. Sediakan teks alternatif yang menerangkan fungsi pembelajaran visual.

### Batasan dan penggunaan bertanggungjawab

Ilustrasi janaan boleh mengandungi kesilapan fakta atau stereotaip. Jangan gunakan imej rekaan sebagai bukti sejarah atau saintifik. Elakkan menghasilkan wajah murid sebenar dan jangan memuat naik foto murid tanpa kebenaran serta asas pemprosesan yang sesuai.

### Status pratonton

Dua pratonton sintetik telah dihasilkan dengan ChatGPT Image pada 25 Oktober 2026: satu ilustrasi konsep kitar semula dan satu set visual lembaran kerja penggunaan air. Pratonton ini ialah bukti ujian draf, bukan bahan yang telah diluluskan. Semakan manusia terhadap ketepatan pembelajaran, kesesuaian umur dan representasi masih diperlukan.

## English

### Intended use

Use this collection for concept visuals, worksheets and teaching slides. It suits a clear single learning focus rather than a text-heavy poster. For diagrams or visuals explaining curriculum facts, attach the relevant subject source or DSKP extract. Verify factual accuracy and cultural representation before use.

### Variables

- `{{CONCEPT}}` — learning concept or situation.
- `{{LEARNER_LEVEL}}` — for example Year 3 or Form 1.
- `{{SETTING}}` — a relevant Malaysian setting, not random decoration.
- `{{STYLE}}` — for example flat, textbook or paper-cut illustration.
- `{{ASPECT_RATIO}}` — 16:9 for slides, 4:3 or 1:1 for worksheets.

### Prompt 1 — concept illustration

```text
Create an {{ASPECT_RATIO}} educational illustration for {{LEARNER_LEVEL}} learners explaining {{CONCEPT}} through one clear scene in {{SETTING}}.

Use a clean {{STYLE}} style, readable shapes, clear contrast and a controlled number of objects. Show the concept’s relationship or sequence visually without long text. If labels are needed, preserve blank space so the teacher can add them later. Depict clothing, architecture, plants and objects appropriate to contemporary Malaysia without stereotypes.

Avoid logos, official emblems, flags, generated text, celebrity likenesses, copyrighted characters, distorted anatomy, duplicate objects, clutter and elements unrelated to the learning objective.
```

### Prompt 2 — worksheet visual set

```text
Create a consistent set of four small illustrations for a {{LEARNER_LEVEL}} worksheet about {{CONCEPT}}. Give each panel one main subject, a white or minimal background, clean outlines, high contrast and space below for a teacher-added label. Use plausible everyday Malaysian objects and settings. No text, numbers, logos or decorative frames.
```

### Suggested workflow

1. Generate without final text.
2. Check concept accuracy against curriculum materials.
3. Review anatomy, objects, clothing, location and cultural details.
4. Add labels in an accessible design tool.
5. Provide alternative text explaining the visual’s learning function.

### Limitations and responsible use

Generated illustrations may contain factual errors or stereotypes. Do not use a fictional image as historical or scientific evidence. Avoid generating identifiable real learners, and never upload student photographs without proper permission and a valid processing basis.

### Preview status

Two synthetic previews were generated with ChatGPT Image on 25 October 2026: a recycling concept illustration and a water-use worksheet set. They are draft test evidence, not approved materials. Human review of learning accuracy, age suitability and representation is still required.
