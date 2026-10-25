---
schema_version: 1
id: visual-presentation-hero-001
type: visual_prompt
status: approved
slug:
  {
    ms: imej-utama-untuk-pembentangan-dan-pitch-deck,
    en: presentation-and-pitch-deck-hero-images,
  }
title:
  {
    ms: Imej Utama untuk Pembentangan dan Pitch Deck,
    en: Presentation and Pitch-Deck Hero Images,
  }
summary:
  {
    ms: "Jana imej konsep bersih dengan ruang salinan untuk slaid pendidikan, sektor awam dan perniagaan.",
    en: "Generate clean conceptual images with copy space for education, public-sector and business slides.",
  }
audiences:
  [education_officers_jpn, public_sector, sme_entrepreneurs, professionals]
use_cases: [visual_content, communication]
sectors: [education, public_service, sme_business, cross_sector]
categories: [presentation_visuals]
tags: [presentation, pitch_deck, hero_image, copy_space]
tools:
  [
    {
      id: chatgpt_image,
      compatibility: tested,
      tested_on: "2026-10-25",
      notes:
        {
          ms: Satu pratonton konsep sintetik asal dijana dan diperiksa.,
          en: One original synthetic concept preview was generated and inspected.,
        },
    },
    {
      id: gemini_image,
      compatibility: expected,
      tested_on: null,
      notes: { ms: Belum diuji., en: Not tested. },
    },
  ]
difficulty: beginner
intended_output: presentation_hero_image
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: Koleksi asal; pratonton sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026.,
        en: Original collection; synthetic preview generated with ChatGPT Image on 25 October 2026.,
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
related_ids: [visual-training-scene-001, visual-event-poster-001]
featured: false
search_aliases:
  {
    ms: [gambar slaid, visual pitch deck, imej tajuk],
    en: [slide image, pitch deck visual, presentation hero],
  }
visual_prompt:
  media_type: image
  intended_applications: [presentation_cover, section_divider, pitch_deck]
  generators:
    [
      { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" },
      { id: gemini_image, compatibility: expected, tested_on: null },
    ]
  preview:
    src: /media/resources/visual-presentation-hero-001/digital-collaboration-v1.webp
    width: 1536
    height: 1024
    alt:
      {
        ms: Visual konsep sintetik kerjasama digital dengan objek abstrak di kanan dan ruang tajuk kosong di kiri.,
        en: Synthetic digital-collaboration concept with abstract objects on the right and blank title space on the left.,
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [minimal_editorial, refined_conceptual]
  subjects: [digital_collaboration, growth, public_value]
  aspect_ratios: ["16:9", "3:2"]
  output_formats: [slide_cover, section_divider]
  variables:
    - {
        id: concept,
        token: "{{KONSEP}}",
        token_en: "{{CONCEPT}}",
        label: { ms: Konsep utama, en: Core concept },
        required: true,
      }
    - {
        id: palette,
        token: "{{PALET}}",
        token_en: "{{PALETTE}}",
        label: { ms: Palet diluluskan, en: Approved palette },
        required: true,
      }
    - {
        id: copy_side,
        token: "{{RUANG_TEKS}}",
        token_en: "{{COPY_SPACE_SIDE}}",
        label: { ms: Sisi ruang teks, en: Copy-space side },
        required: true,
      }
  reference_assets: []
  image_metadata:
    {
      subject: abstract_conceptual_metaphor,
      environment: clean_studio_space,
      composition: subject_cluster_opposite_copy_space,
      viewing_angle: slightly_elevated,
      lighting: soft_directional,
      palette: [approved_brand_palette],
      camera_lens: normal_perspective,
      visual_style: polished_editorial_3d_collage,
      exclusions:
        [text, logos, flags, official_emblems, misleading_symbols, clutter],
    }
  video_metadata: null
---

## Bahasa Melayu

```text
Cipta visual utama mendatar 16:9 untuk slaid tentang {{KONSEP}}. Gunakan metafora visual yang mudah dan tidak membuat tuntutan fakta: bentuk berlapis, laluan atau objek kerja neutral yang menunjukkan hubungan dan kemajuan. Gaya kolaj editorial 3D yang kemas, cahaya lembut, palet {{PALET}}. Letakkan kelompok visual bertentangan dengan {{RUANG_TEKS}} dan biarkan sekurang-kurangnya 40% ruang negatif bersih. Tiada teks, nombor, logo, bendera, lambang rasmi, graf palsu atau simbol budaya stereotaip.
```

Tambah tajuk, data dan logo sebenar dalam perisian slaid. Semak bahawa metafora tidak menyampaikan kejayaan atau skala yang belum dibuktikan.

## English

```text
Create a 16:9 landscape hero visual for a slide about {{CONCEPT}}. Use a simple visual metaphor that makes no factual claim: layered forms, pathways or neutral work objects suggesting connection and progress. Use a refined editorial 3D-collage style, soft lighting and {{PALETTE}}. Place the visual cluster opposite {{COPY_SPACE_SIDE}} and preserve at least 40% clean negative space. No text, numbers, logos, flags, official emblems, fake charts or stereotyped cultural symbols.
```

Add the actual title, data and logo in presentation software. Check that the metaphor does not imply unproven success or scale.
