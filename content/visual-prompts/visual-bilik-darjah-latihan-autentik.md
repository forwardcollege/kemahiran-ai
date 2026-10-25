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
audiences:
  [teachers_educators, education_officers_jpn, public_sector, professionals]
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
author: { name: Forward Academy, url: null }
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
        creator: Forward Academy,
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

### Prompt koleksi

```text
Hasilkan fotografi editorial semula jadi {{NISBAH_ASPEK}} di {{LOKASI}}. Paparkan kumpulan kecil {{AUDIENS}} Malaysia sedang melakukan {{AKTIVITI}} secara realistik. Perspektif dokumentari 35mm pada aras mata, cahaya tingkap lembut, ekspresi tumpuan semula jadi dan ruang negatif yang sesuai untuk tajuk laporan. Kepelbagaian yang munasabah tanpa stereotaip; pakaian dan ruang selaras dengan konteks. Tiada teks, logo, bendera atau lambang rasmi. Elakkan gaya stok korporat, pose bersalaman, peserta pendua, anatomi cacat dan peralatan yang tidak disebut.
```

Variasikan antara bilik darjah guru, bengkel pegawai dan latihan SME dengan menukar pemboleh ubah sahaja. Gunakan visual sebagai ilustrasi sintetik, bukan bukti peserta atau acara sebenar.

## English

### Collection prompt

```text
Create a natural editorial {{ASPECT_RATIO}} photograph in {{SETTING}}. Show a small group of Malaysian {{AUDIENCE}} taking part in {{ACTIVITY}} realistically. Use an eye-level documentary 35mm perspective, soft window light, natural focused expressions and practical negative space for a report heading. Represent credible diversity without stereotypes; keep clothing and room appropriate to context. No text, logos, flags or official emblems. Avoid corporate-stock handshakes, duplicated participants, malformed anatomy and equipment not named in the brief.
```

Vary between a teacher classroom, officer workshop and SME training by changing variables only. Treat the image as synthetic illustration, not evidence of real participants or an actual event.
