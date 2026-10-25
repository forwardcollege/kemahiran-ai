---
schema_version: 1
id: visual-poster-001
type: visual_prompt
status: draft

slug:
  ms: poster-program-komuniti-malaysia
  en: malaysian-community-programme-poster

title:
  ms: Poster Program Komuniti Malaysia
  en: Malaysian Community Programme Poster

summary:
  ms: Cipta visual poster moden yang meraikan komuniti Malaysia dengan ruang teks yang jelas untuk butiran program.
  en: Create a modern poster visual celebrating Malaysian communities with clear text space for programme details.

audiences:
  - education_officers_jpn
  - sme_entrepreneurs
  - professionals
use_cases:
  - visual_content
  - communication
  - marketing
sectors:
  - education
  - public_service
  - cross_sector
categories:
  - event_visuals
tags:
  - community_programme
  - poster
  - malaysia

tools:
  - id: chatgpt_image
    compatibility: expected
    tested_on: null
    notes:
      ms: Ujian visual dan semakan representasi diperlukan.
      en: Visual testing and representation review are required.
  - id: adobe_firefly
    compatibility: expected
    tested_on: null
    notes:
      ms: Sintaks mungkin perlu disesuaikan mengikut penjana.
      en: Syntax may require adaptation for the generator.

difficulty: beginner
intended_output: event_poster_visual
languages:
  - ms
  - en

author:
  name: Forward College
  url: null
curator:
  name: Forward Labs

provenance:
  kind: original
  source_urls: []
  notes:
    ms: Contoh prompt asal; aset pratonton belum dihasilkan.
    en: Original prompt example; preview asset has not yet been produced.

license:
  id: pending
  label: Licence to be confirmed before publication
  url: null

review:
  status: pending
  organisation: Forward College
  editorial_reviewer: Howie Chang
  specialist_review_status: not_required
  specialist_reviewer: null
  last_reviewed: null
  next_review_due: null

version: 0.1.0
created_at: "2026-10-21"
updated_at: "2026-10-21"

related_ids:
  - visual-programme-video-001
featured: true

search_aliases:
  ms:
    - poster acara
    - visual program
    - poster komuniti
  en:
    - event poster
    - programme visual
    - community poster

visual_prompt:
  media_type: image
  intended_applications:
    - event_poster
    - social_media
  generators:
    - id: chatgpt_image
      compatibility: expected
      tested_on: null
    - id: adobe_firefly
      compatibility: expected
      tested_on: null
  preview:
    src: /media/resources/visual-poster-001/preview.webp
    width: 1600
    height: 2000
    alt:
      ms: Contoh visual poster menegak yang menampilkan komuniti Malaysia dalam suasana program pendidikan.
      en: Example vertical poster visual featuring a Malaysian community in an educational programme setting.
    provenance:
      kind: planned_original_generated
      creator: Forward College
      tool: null
      generated_on: null
  styles:
    - modern_editorial
    - optimistic_documentary
  subjects:
    - malaysian_community
    - education_event
  aspect_ratios:
    - "4:5"
    - "1:1"
  output_formats:
    - social_post
    - print_poster
  variables:
    - id: programme_theme
      token: "{{TEMA_PROGRAM}}"
      label:
        ms: Tema program
        en: Programme theme
      required: true
    - id: location_context
      token: "{{KONTEKS_LOKASI}}"
      label:
        ms: Konteks lokasi Malaysia
        en: Malaysian location context
      required: true
    - id: brand_colours
      token: "{{WARNA_JENAMA}}"
      label:
        ms: Warna jenama
        en: Brand colours
      required: false
  image_metadata:
    subject: diverse_malaysian_participants
    environment: contemporary_malaysian_community_venue
    composition: candid_group_with_clear_text_space
    viewing_angle: eye_level
    lighting: soft_natural_daylight
    palette:
      - warm_neutral
      - brand_accent
    camera_lens: natural_35mm_documentary_perspective
    visual_style: polished_editorial_photography
    exclusions:
      - illegible_text
      - distorted_hands
      - duplicated_people
      - cultural_stereotypes
      - incorrect_flags_or_emblems
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Gunakan prompt ini untuk menghasilkan visual utama bagi poster program pendidikan, komuniti atau pembangunan profesional. Tambah tajuk dan butiran acara menggunakan alat reka bentuk selepas visual dijana; jangan bergantung pada penjana imej untuk teks akhir yang tepat.

### Pemboleh ubah

- `{{TEMA_PROGRAM}}` — contohnya literasi digital, keusahawanan atau pembangunan guru.
- `{{KONTEKS_LOKASI}}` — contohnya dewan komuniti bandar, sekolah luar bandar atau ruang latihan moden di Malaysia.
- `{{WARNA_JENAMA}}` — satu atau dua warna aksen yang diluluskan.

### Prompt utama — format menegak 4:5

```text
Hasilkan fotografi editorial menegak 4:5 untuk visual utama poster bertemakan {{TEMA_PROGRAM}} di {{KONTEKS_LOKASI}}.

Paparkan sekumpulan kecil peserta dewasa Malaysia yang pelbagai sedang bekerjasama dalam aktiviti program yang realistik. Gunakan ekspresi semula jadi, pakaian yang sesuai dengan konteks dan persekitaran Malaysia kontemporari tanpa stereotaip budaya. Komposisi aras mata dengan perspektif dokumentari lensa 35mm, cahaya siang lembut dan tona mesra serta profesional.

Letakkan kumpulan pada bahagian bawah atau sisi bingkai dan sediakan ruang negatif yang bersih pada bahagian atas untuk tajuk poster. Gunakan palet neutral hangat dengan aksen {{WARNA_JENAMA}} pada elemen persekitaran yang munasabah. Hasil akhir perlu terasa diyakini, inklusif, praktikal dan sesuai untuk komunikasi organisasi di Malaysia.

Jangan hasilkan teks, logo, bendera atau lambang rasmi. Elakkan tangan cacat, wajah berulang, anggota tambahan, peserta pendua, suasana pelancongan generik, pakaian tidak sesuai dan representasi budaya yang stereotaip.
```

### Variasi format segi empat 1:1

```text
Gunakan konsep yang sama dalam komposisi 1:1. Kekalkan peserta di bahagian bawah dua pertiga bingkai dan tinggalkan ruang teks yang jelas di sebelah kiri. Pastikan subjek utama masih dapat dibaca apabila imej dipaparkan sebagai lakaran kecil media sosial.
```

### Cadangan penggunaan

1. Jana beberapa variasi tanpa teks.
2. Semak ketepatan latar, pakaian, tubuh, objek dan representasi komuniti.
3. Pilih imej yang mempunyai ruang teks paling praktikal.
4. Tambah tajuk, tarikh, logo dan butiran rasmi dalam alat reka bentuk.
5. Dapatkan kelulusan pihak komunikasi sebelum diterbitkan.

### Batasan dan penggunaan bertanggungjawab

Imej janaan tidak menggambarkan peserta sebenar. Jangan menampilkan individu rekaan sebagai penerima manfaat sebenar atau menggunakan lambang rasmi tanpa kebenaran. Semak dengan teliti unsur budaya, agama, pakaian dan konteks lokasi.

## English

### Intended use

Use this prompt to create a key visual for an education, community or professional-development programme poster. Add the event title and details in a design tool after generating the visual; do not rely on an image generator for accurate final typography.

### Variables

- `{{PROGRAMME_THEME}}` — for example digital literacy, entrepreneurship or teacher development.
- `{{LOCATION_CONTEXT}}` — for example an urban community hall, rural school or modern training space in Malaysia.
- `{{BRAND_COLOURS}}` — one or two approved accent colours.

### Main prompt — vertical 4:5 format

```text
Create a vertical 4:5 editorial photograph for the key visual of a {{PROGRAMME_THEME}} poster set in {{LOCATION_CONTEXT}}.

Show a small, diverse group of Malaysian adult participants collaborating in a realistic programme activity. Use natural expressions, context-appropriate clothing and a contemporary Malaysian environment without cultural stereotypes. Compose at eye level with a documentary 35mm perspective, soft natural daylight and a warm, professional tone.

Position the group in the lower or side portion of the frame and preserve clean negative space at the top for poster copy. Use a warm neutral palette with {{BRAND_COLOURS}} accents appearing naturally in the environment. The result should feel credible, inclusive, practical and suitable for Malaysian organisational communications.

Do not generate text, logos, flags or official emblems. Avoid distorted hands, repeated faces, extra limbs, duplicate participants, generic tourism imagery, unsuitable clothing and stereotyped cultural representation.
```

### Square 1:1 variation

```text
Use the same concept in a 1:1 composition. Keep participants within the lower two-thirds and leave clear copy space on the left. Ensure the main subject remains readable when displayed as a small social-media thumbnail.
```

### Suggested workflow

1. Generate several variations without text.
2. Check the setting, clothing, anatomy, objects and community representation.
3. Select the image with the most practical copy space.
4. Add the title, date, logos and official details in a design tool.
5. Obtain communications approval before publication.

### Limitations and responsible use

Generated people are not real programme participants. Do not present fictional people as actual beneficiaries or use official symbols without permission. Carefully review cultural, religious, clothing and location details.
