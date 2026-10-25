---
schema_version: 1
id: visual-event-poster-001
type: visual_prompt
status: approved
slug: { ms: poster-program-dan-acara, en: programme-and-event-posters }
title: { ms: Poster Program dan Acara, en: Programme and Event Posters }
summary:
  ms: Cipta visual utama poster yang fleksibel untuk bengkel, program sekolah, acara komuniti dan inisiatif profesional dengan ruang tipografi yang jelas.
  en: Create flexible poster key visuals for workshops, school programmes, community events and professional initiatives with clear typography space.
audiences:
  [teachers_educators, education_officers_jpn, sme_entrepreneurs, professionals]
use_cases: [visual_content, communication, marketing]
sectors: [education, public_service, sme_business, cross_sector]
categories: [event_visuals]
tags: [poster, programme, event, key_visual]
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
        ms: Variasi fotografi dan grafik sintetik dihasilkan tanpa teks atau logo dan diluluskan secara dalaman; butiran acara serta identiti jenama masih perlu ditambah dan disemak di luar penjana.,
        en: Synthetic photography and graphic variants were generated without text or logos and internally approved; event details and brand identity must still be added and checked outside the generator.,
      }
difficulty: beginner
intended_output: event_poster_key_visual
languages: [ms, en]
author: { name: Forward College, url: null }
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
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [visual-event-video-001]
featured: true
search_aliases:
  ms: [poster acara, poster bengkel, visual program]
  en: [event poster, workshop poster, programme visual]
visual_prompt:
  media_type: image
  intended_applications: [event_poster, social_media, presentation]
  generators:
    - { id: gemini_image, compatibility: expected, tested_on: null }
    - { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" }
    - { id: adobe_firefly, compatibility: expected, tested_on: null }
  preview:
    src: /media/resources/visual-event-poster-001/editorial-training-v1.webp
    width: 1122
    height: 1402
    alt:
      ms: Visual poster sintetik menegak dengan empat pendidik dewasa berbincang di bahagian bawah kanan dan ruang tajuk kosong di bahagian kiri atas.
      en: Synthetic vertical poster visual with four adult educators collaborating in the lower right and blank title space in the upper left.
    provenance:
      kind: original_generated
      creator: Forward College
      tool: ChatGPT Image
      generated_on: "2026-10-25"
  styles: [modern_editorial, optimistic_documentary]
  subjects: [malaysian_community, education_event, professional_event]
  aspect_ratios: ["4:5", "1:1", "16:9"]
  output_formats: [social_post, print_poster, presentation_cover]
  variables:
    - id: programme_theme
      token: "{{PROGRAMME_THEME}}"
      label: { ms: Tema program, en: Programme theme }
      required: true
    - id: location_context
      token: "{{LOCATION_CONTEXT}}"
      label: { ms: Konteks lokasi, en: Location context }
      required: true
    - id: participants_or_symbol
      token: "{{PARTICIPANTS_OR_SYMBOL}}"
      label: { ms: Peserta atau simbol utama, en: Main participants or symbol }
      required: true
    - id: brand_colours
      token: "{{BRAND_COLOURS}}"
      label: { ms: Warna jenama, en: Brand colours }
      required: false
    - id: aspect_ratio
      token: "{{ASPECT_RATIO}}"
      label: { ms: Nisbah aspek, en: Aspect ratio }
      required: true
  reference_assets:
    - id: brand_guide
      type: brand_guide
      required: false
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Gunakan untuk warna dan gaya sahaja; tambah logo sebenar selepas penjanaan.
        en: Use for colours and style only; add genuine logos after generation.
    - id: verified_event_brief
      type: event_brief
      required: true
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Sumber bagi tema, peserta, lokasi dan pengalaman program yang sebenar.
        en: Source for the programme's actual theme, participants, location and experience.
  image_metadata:
    subject: relevant_programme_participants_or_symbolic_scene
    environment: contemporary_malaysian_venue
    composition: clear_key_visual_with_copy_space
    viewing_angle: eye_level
    lighting: soft_natural_or_controlled_studio
    palette: [warm_neutral, brand_accent]
    camera_lens: natural_35mm_editorial_perspective
    visual_style: polished_editorial
    exclusions:
      [
        generated_text,
        unauthorised_logos,
        incorrect_emblems,
        cultural_stereotypes,
        distorted_anatomy,
      ]
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Hasilkan visual utama tanpa teks untuk poster program. Tambah tajuk, tarikh, tempat, logo dan butiran rasmi kemudian dalam alat reka bentuk; cara ini lebih tepat dan memudahkan semakan jenama.

### Pemboleh ubah

- `{{PROGRAMME_THEME}}` — tema, contohnya pembangunan guru atau literasi digital.
- `{{LOCATION_CONTEXT}}` — lokasi Malaysia yang realistik.
- `{{PARTICIPANTS_OR_SYMBOL}}` — peserta atau metafora visual yang relevan.
- `{{BRAND_COLOURS}}` — maksimum dua warna aksen yang diluluskan.
- `{{ASPECT_RATIO}}` — 4:5, 1:1 atau 16:9.

### Prompt 1 — fotografi editorial

```text
Cipta visual utama poster {{ASPECT_RATIO}} untuk program {{PROGRAMME_THEME}} di {{LOCATION_CONTEXT}}. Paparkan {{PARTICIPANTS_OR_SYMBOL}} dalam adegan Malaysia kontemporari yang realistik, inklusif dan tidak stereotaip. Gaya fotografi editorial profesional, perspektif 35mm aras mata, ekspresi semula jadi, cahaya lembut dan palet neutral dengan aksen {{BRAND_COLOURS}}.

Susun subjek pada sepertiga bawah atau kanan dan tinggalkan ruang negatif yang benar-benar bersih untuk tajuk dan butiran acara. Imej mesti masih jelas sebagai lakaran kecil. Jangan hasilkan teks, tarikh, logo, bendera atau lambang rasmi. Elakkan tangan cacat, wajah berulang, peserta pendua, suasana pelancongan generik dan pakaian yang tidak sesuai konteks.
```

### Prompt 2 — visual grafik tanpa manusia

```text
Cipta komposisi grafik editorial {{ASPECT_RATIO}} untuk {{PROGRAMME_THEME}} menggunakan bentuk geometri, objek simbolik yang relevan dan lapisan warna {{BRAND_COLOURS}}. Reka hierarki visual yang jelas dengan satu fokus utama dan ruang kosong besar untuk tipografi. Gaya moden, dipercayai dan sesuai untuk organisasi Malaysia. Tiada manusia, teks, huruf, logo, bendera, lambang atau ikon berhak cipta.
```

### Cadangan penggunaan

1. Pilih sama ada fotografi atau grafik berdasarkan nada program.
2. Jana beberapa variasi tanpa teks dan logo.
3. Semak representasi, anatomi, objek dan ruang teks.
4. Tambah butiran rasmi serta logo sebenar dalam alat reka bentuk.
5. Semak tarikh, masa, lokasi, aksesibiliti dan kelulusan jenama.

### Batasan dan penggunaan bertanggungjawab

Orang janaan bukan peserta sebenar. Jangan gambarkan mereka sebagai penerima manfaat sebenar. Logo perlu ditambah daripada fail rasmi; jangan minta model mereka-reka atau membina semula logo.

## English

### Intended use

Create a text-free key visual for a programme poster. Add the title, date, venue, logos and official details later in a design tool for greater accuracy and easier brand review.

### Variables

- `{{PROGRAMME_THEME}}` — such as teacher development or digital literacy.
- `{{LOCATION_CONTEXT}}` — a realistic Malaysian location.
- `{{PARTICIPANTS_OR_SYMBOL}}` — relevant participants or visual metaphor.
- `{{BRAND_COLOURS}}` — no more than two approved accent colours.
- `{{ASPECT_RATIO}}` — 4:5, 1:1 or 16:9.

### Prompt 1 — editorial photography

```text
Create an {{ASPECT_RATIO}} poster key visual for a {{PROGRAMME_THEME}} programme in {{LOCATION_CONTEXT}}. Show {{PARTICIPANTS_OR_SYMBOL}} in a realistic, inclusive and non-stereotyped contemporary Malaysian scene. Use professional editorial photography, a natural eye-level 35mm perspective, natural expressions, soft light and a neutral palette with {{BRAND_COLOURS}} accents.

Place the subject in the lower or right third and preserve genuinely clean negative space for the event title and details. The image must remain clear as a thumbnail. Do not generate text, dates, logos, flags or official emblems. Avoid distorted hands, repeated faces, duplicate participants, generic tourism imagery and contextually unsuitable clothing.
```

### Prompt 2 — people-free graphic visual

```text
Create an {{ASPECT_RATIO}} editorial graphic composition for {{PROGRAMME_THEME}} using geometric shapes, relevant symbolic objects and layers of {{BRAND_COLOURS}}. Establish a clear visual hierarchy with one focal point and generous blank space for typography. Keep it modern, credible and suitable for a Malaysian organisation. No people, text, letters, logos, flags, emblems or copyrighted icons.
```

### Suggested workflow

1. Choose photography or graphics according to programme tone.
2. Generate several variations without text or logos.
3. Check representation, anatomy, objects and copy space.
4. Add official details and genuine logo files in a design tool.
5. Verify date, time, venue, accessibility and brand approval.

### Limitations and responsible use

Generated people are not real participants. Do not present them as actual beneficiaries. Add logos from approved source files; never ask the model to invent or reconstruct one.
