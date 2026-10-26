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
author: { name: Forward College, url: null }
curator: { name: Forward College }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Koleksi prompt asal; dua aset pratonton sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026.,
      en: Original prompt collection; two synthetic preview assets were generated with ChatGPT Image on 25 October 2026.,
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
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
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
      creator: Forward College
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

### Sebelum menjana

Sediakan bahan rujukan berikut sebelum menjana:

- **Pilihan:** Diperlukan apabila visual membuat tuntutan fakta atau menerangkan kandungan kurikulum khusus.

Tentukan nisbah aspek dan tempat penggunaan akhir. Tambah teks, data dan logo sebenar dalam alat reka bentuk selepas visual disemak.

### Pemboleh ubah

- `{{CONCEPT}}` — Konsep pembelajaran **(Wajib)**.
- `{{LEARNER_LEVEL}}` — Tahap murid **(Wajib)**.
- `{{SETTING}}` — Konteks Malaysia **(Wajib)**.
- `{{STYLE}}` — Gaya ilustrasi **(Wajib)**.
- `{{ASPECT_RATIO}}` — Nisbah aspek **(Wajib)**.

### Prompt koleksi

#### Prompt 1 — ilustrasi konsep

```text
Cipta ilustrasi pendidikan {{ASPECT_RATIO}} untuk murid {{LEARNER_LEVEL}} yang menerangkan {{CONCEPT}} melalui satu adegan yang jelas di {{SETTING}}.

Gunakan gaya {{STYLE}} yang kemas, bentuk mudah dibaca, kontras jelas dan jumlah objek yang terkawal. Tunjukkan hubungan atau urutan konsep secara visual tanpa teks panjang. Jika label diperlukan, tinggalkan ruang kosong untuk guru menambah label kemudian. Pastikan pakaian, seni bina, tumbuhan dan objek sesuai dengan konteks Malaysia secara semula jadi tanpa stereotaip.

Elakkan logo, lambang rasmi, bendera, teks janaan, wajah selebriti, watak berhak cipta, anatomi cacat, objek pendua, latar berserabut dan unsur yang tidak berkaitan dengan objektif pembelajaran.
```

#### Prompt 2 — visual lembaran kerja

```text
Cipta satu set empat ilustrasi kecil yang konsisten untuk lembaran kerja {{LEARNER_LEVEL}} tentang {{CONCEPT}}. Setiap panel mempunyai satu subjek utama, latar putih atau sangat ringkas, garisan bersih, kontras tinggi dan ruang di bawah untuk label guru. Gunakan konteks objek harian yang munasabah di Malaysia. Tiada teks, nombor, logo atau bingkai hiasan.
```

### Cadangan penggunaan

1. Jana tanpa teks akhir.
2. Semak ketepatan konsep dengan bahan kurikulum.
3. Semak tubuh, objek, pakaian, lokasi dan unsur budaya.
4. Tambah label dalam alat reka bentuk yang boleh diakses.
5. Sediakan teks alternatif yang menerangkan fungsi pembelajaran visual.

### Semakan hasil

- Subjek, persekitaran, palet dan nisbah aspek sepadan dengan brief.
- Tiada teks tidak terbaca, logo palsu, fakta rekaan atau tuntutan yang tidak disahkan.
- Wajah, tubuh, objek dan konteks Malaysia kelihatan munasabah serta tidak stereotaip.
- Komposisi mempunyai fokus jelas dan ruang yang cukup untuk salinan pascapenghasilan.
- Kontras, saiz teks yang akan ditambah dan teks alternatif dirancang untuk penggunaan akhir.

### Batasan dan penggunaan bertanggungjawab

Ilustrasi janaan boleh mengandungi kesilapan fakta atau stereotaip. Jangan gunakan imej rekaan sebagai bukti sejarah atau saintifik. Elakkan menghasilkan wajah murid sebenar dan jangan memuat naik foto murid tanpa kebenaran serta asas pemprosesan yang sesuai.

## English

### What this collection is for

Use this collection for concept visuals, worksheets and teaching slides. It suits a clear single learning focus rather than a text-heavy poster. For diagrams or visuals explaining curriculum facts, attach the relevant subject source or DSKP extract. Verify factual accuracy and cultural representation before use.

### Before generating

Prepare the following reference materials before generating:

- **Optional:** Needed when the visual makes factual claims or explains specific curriculum content.

Decide the aspect ratio and final use. Add genuine text, data and logos in a design tool after reviewing the visual.

### Variables

- `{{CONCEPT}}` — Learning concept **(Required)**.
- `{{LEARNER_LEVEL}}` — Learner level **(Required)**.
- `{{SETTING}}` — Malaysian setting **(Required)**.
- `{{STYLE}}` — Illustration style **(Required)**.
- `{{ASPECT_RATIO}}` — Aspect ratio **(Required)**.

### Collection prompts

#### Prompt 1 — concept illustration

```text
Create an {{ASPECT_RATIO}} educational illustration for {{LEARNER_LEVEL}} learners explaining {{CONCEPT}} through one clear scene in {{SETTING}}.

Use a clean {{STYLE}} style, readable shapes, clear contrast and a controlled number of objects. Show the concept’s relationship or sequence visually without long text. If labels are needed, preserve blank space so the teacher can add them later. Depict clothing, architecture, plants and objects appropriate to contemporary Malaysia without stereotypes.

Avoid logos, official emblems, flags, generated text, celebrity likenesses, copyrighted characters, distorted anatomy, duplicate objects, clutter and elements unrelated to the learning objective.
```

#### Prompt 2 — worksheet visual set

```text
Create a consistent set of four small illustrations for a {{LEARNER_LEVEL}} worksheet about {{CONCEPT}}. Give each panel one main subject, a white or minimal background, clean outlines, high contrast and space below for a teacher-added label. Use plausible everyday Malaysian objects and settings. No text, numbers, logos or decorative frames.
```

### Suggested workflow

1. Generate without final text.
2. Check concept accuracy against curriculum materials.
3. Review anatomy, objects, clothing, location and cultural details.
4. Add labels in an accessible design tool.
5. Provide alternative text explaining the visual’s learning function.

### Output checks

- The subject, environment, palette and aspect ratio match the brief.
- There is no illegible text, fake logo, invented fact or unverified claim.
- Faces, bodies, objects and the Malaysian context are plausible and non-stereotyped.
- The composition has a clear focus and enough space for post-produced copy.
- Contrast, eventual text size and alternative text are planned for the final use.

### Limitations and responsible use

Generated illustrations may contain factual errors or stereotypes. Do not use a fictional image as historical or scientific evidence. Avoid generating identifiable real learners, and never upload student photographs without proper permission and a valid processing basis.
