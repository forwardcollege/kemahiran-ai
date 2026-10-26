---
schema_version: 1
id: visual-training-scene-001
type: visual_prompt
status: approved
slug:
  {
    ms: visual-bilik-darjah-dan-latihan-yang-autentik,
    en: authentic-classroom-and-training-visuals,
  }
title:
  {
    ms: Visual Bilik Darjah dan Latihan yang Autentik,
    en: Authentic Classroom and Training Visuals,
  }
summary:
  {
    ms: "Cipta visual dokumentari persekitaran pembelajaran dan latihan Malaysia yang kredibel, pelbagai dan tidak stereotaip.",
    en: "Create credible, diverse and non-stereotyped documentary visuals of Malaysian learning and training environments.",
  }
audiences: [teachers_educators, education_officers_jpn, professionals]
use_cases: [visual_content, communication]
sectors: [education, public_service, cross_sector]
categories: [training_visuals]
tags: [classroom, training, malaysia, documentary]
tools:
  - {
      id: chatgpt_image,
      compatibility: tested,
      tested_on: "2026-10-25",
      notes:
        {
          ms: Satu pratonton bengkel sintetik asal dijana dan diperiksa; semakan representasi manusia masih diperlukan.,
          en: One original synthetic workshop preview was generated and inspected; human representation review remains required.,
        },
    }
  - {
      id: gemini_image,
      compatibility: expected,
      tested_on: null,
      notes: { ms: Belum diuji., en: Not tested. },
    }
difficulty: beginner
intended_output: authentic_learning_environment_visual
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: Koleksi prompt asal; pratonton sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026.,
        en: Original prompt collection; synthetic preview generated with ChatGPT Image on 25 October 2026.,
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
version: 0.4.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [visual-education-001, visual-presentation-hero-001]
featured: false
search_aliases:
  {
    ms: [gambar kelas Malaysia, foto latihan, visual bengkel],
    en: [Malaysian classroom photo, training photo, workshop visual],
  }
visual_prompt:
  media_type: image
  intended_applications: [course_page, training_report, workshop_material]
  generators:
    [
      { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" },
      { id: gemini_image, compatibility: expected, tested_on: null },
    ]
  preview:
    src: /media/resources/visual-training-scene-001/classroom-training-v1.webp
    width: 1536
    height: 1024
    alt:
      {
        ms: Adegan sintetik fasilitator dan peserta dewasa Malaysia berbincang di ruang latihan moden dengan cahaya semula jadi.,
        en: Synthetic scene of a facilitator and Malaysian adult participants discussing in a modern training room with natural light.,
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [optimistic_documentary, natural_editorial]
  subjects: [malaysian_training_room, collaborative_learning]
  aspect_ratios: ["3:2", "16:9", "4:5"]
  output_formats: [report_header, course_page, social_post]
  variables:
    - {
        id: audience,
        token: "{{AUDIENS}}",
        token_en: "{{AUDIENCE}}",
        label: { ms: Jenis peserta, en: Participant type },
        required: true,
      }
    - {
        id: activity,
        token: "{{AKTIVITI}}",
        token_en: "{{ACTIVITY}}",
        label: { ms: Aktiviti sebenar, en: Actual activity },
        required: true,
      }
    - {
        id: setting,
        token: "{{LOKASI}}",
        token_en: "{{SETTING}}",
        label: { ms: Lokasi Malaysia, en: Malaysian setting },
        required: true,
      }
    - {
        id: aspect_ratio,
        token: "{{NISBAH_ASPEK}}",
        token_en: "{{ASPECT_RATIO}}",
        label: { ms: Nisbah aspek, en: Aspect ratio },
        required: true,
      }
  reference_assets: []
  image_metadata:
    {
      subject: collaborative_learning,
      environment: contemporary_malaysian_training_space,
      composition: candid_small_group_with_copy_space,
      viewing_angle: eye_level,
      lighting: natural_window_light,
      palette: [warm_neutral, muted_blue],
      camera_lens: documentary_35mm,
      visual_style: natural_editorial_photography,
      exclusions:
        [
          logos,
          generated_text,
          staged_handshakes,
          distorted_hands,
          repeated_faces,
          cultural_stereotypes,
        ],
    }
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Cipta visual dokumentari persekitaran pembelajaran dan latihan Malaysia yang kredibel, pelbagai dan tidak stereotaip.

### Sebelum menjana

Tetapkan pemboleh ubah menggunakan maklumat yang telah disahkan. Jika hasil akan mewakili program, produk atau organisasi sebenar, sediakan brief dan aset yang anda berhak gunakan.

Tentukan nisbah aspek dan tempat penggunaan akhir. Tambah teks, data dan logo sebenar dalam alat reka bentuk selepas visual disemak.

### Pemboleh ubah

- `{{AUDIENS}}` — Jenis peserta **(Wajib)**.
- `{{AKTIVITI}}` — Aktiviti sebenar **(Wajib)**.
- `{{LOKASI}}` — Lokasi Malaysia **(Wajib)**.
- `{{NISBAH_ASPEK}}` — Nisbah aspek **(Wajib)**.

### Prompt koleksi

#### Prompt koleksi

```text
Hasilkan fotografi editorial semula jadi {{NISBAH_ASPEK}} di {{LOKASI}}. Paparkan kumpulan kecil {{AUDIENS}} Malaysia sedang melakukan {{AKTIVITI}} secara realistik. Perspektif dokumentari 35mm pada aras mata, cahaya tingkap lembut, ekspresi tumpuan semula jadi dan ruang negatif yang sesuai untuk tajuk laporan. Kepelbagaian yang munasabah tanpa stereotaip; pakaian dan ruang selaras dengan konteks. Tiada teks, logo, bendera atau lambang rasmi. Elakkan gaya stok korporat, pose bersalaman, peserta pendua, anatomi cacat dan peralatan yang tidak disebut.
```

### Cadangan penggunaan

1. Nyatakan jenis ruang sebenar—bilik darjah, bengkel pegawai atau latihan SME—berserta aktiviti, saiz kumpulan dan peralatan yang munasabah.
2. Gunakan rujukan ruang atau pakaian hanya jika anda mempunyai hak dan kebenaran; jangan muat naik foto murid atau peserta sebenar tanpa asas yang sah.
3. Jana beberapa draf tanpa teks atau logo, kemudian semak susun atur perabot, keselamatan, anatomi, interaksi dan kepelbagaian yang tidak stereotaip.
4. Pilih visual yang menunjukkan aktiviti yang boleh dipercayai, bukan sekadar peserta tersenyum menghadap kamera. Tandakan ia sebagai ilustrasi sintetik.
5. Tambah kapsyen, butiran rasmi dan teks alternatif dalam alat reka bentuk serta pastikan ia tidak didakwa sebagai dokumentasi acara sebenar.

### Semakan hasil

- Subjek, persekitaran, palet dan nisbah aspek sepadan dengan brief.
- Tiada teks tidak terbaca, logo palsu, fakta rekaan atau tuntutan yang tidak disahkan.
- Wajah, tubuh, objek dan konteks Malaysia kelihatan munasabah serta tidak stereotaip.
- Komposisi mempunyai fokus jelas dan ruang yang cukup untuk salinan pascapenghasilan.
- Kontras, saiz teks yang akan ditambah dan teks alternatif dirancang untuk penggunaan akhir.

### Batasan dan penggunaan bertanggungjawab

Variasikan antara bilik darjah guru, bengkel pegawai dan latihan SME dengan menukar pemboleh ubah sahaja. Gunakan visual sebagai ilustrasi sintetik, bukan bukti peserta atau acara sebenar.

## English

### What this collection is for

Create credible, diverse and non-stereotyped documentary visuals of Malaysian learning and training environments.

### Before generating

Set the variables using verified information. If the result will represent a real programme, product or organisation, prepare a brief and assets you are authorised to use.

Decide the aspect ratio and final use. Add genuine text, data and logos in a design tool after reviewing the visual.

### Variables

- `{{AUDIENCE}}` — Participant type **(Required)**.
- `{{ACTIVITY}}` — Actual activity **(Required)**.
- `{{SETTING}}` — Malaysian setting **(Required)**.
- `{{ASPECT_RATIO}}` — Aspect ratio **(Required)**.

### Collection prompts

#### Main prompt

```text
Create a natural editorial {{ASPECT_RATIO}} photograph in {{SETTING}}. Show a small group of Malaysian {{AUDIENCE}} taking part in {{ACTIVITY}} realistically. Use an eye-level documentary 35mm perspective, soft window light, natural focused expressions and practical negative space for a report heading. Represent credible diversity without stereotypes; keep clothing and room appropriate to context. No text, logos, flags or official emblems. Avoid corporate-stock handshakes, duplicated participants, malformed anatomy and equipment not named in the brief.
```

### Suggested workflow

1. Specify the real setting type—classroom, officer workshop or SME training—together with a plausible activity, group size and equipment.
2. Use room or clothing references only when you have rights and permission; do not upload photographs of real learners or participants without a valid basis.
3. Generate several drafts without text or logos, then review furniture layout, safety, anatomy, interaction and non-stereotyped diversity.
4. Select a visual that shows a credible activity rather than participants merely smiling at the camera. Label it as a synthetic illustration.
5. Add captions, official details and alternative text in a design tool, and never present it as documentation of a real event.

### Output checks

- The subject, environment, palette and aspect ratio match the brief.
- There is no illegible text, fake logo, invented fact or unverified claim.
- Faces, bodies, objects and the Malaysian context are plausible and non-stereotyped.
- The composition has a clear focus and enough space for post-produced copy.
- Contrast, eventual text size and alternative text are planned for the final use.

### Limitations and responsible use

Vary between a teacher classroom, officer workshop and SME training by changing variables only. Treat the image as synthetic illustration, not evidence of real participants or an actual event.
