---
schema_version: 1
id: visual-social-campaign-001
type: visual_prompt
status: approved
slug: { ms: kempen-visual-media-sosial, en: social-media-visual-campaigns }
title: { ms: Kempen Visual Media Sosial, en: Social-Media Visual Campaigns }
summary:
  {
    ms: "Bina keluarga visual pengumuman, tip, peringatan dan tindakan dengan gaya jenama konsisten merentas format.",
    en: "Build a coherent family of announcement, tip, reminder and action visuals across formats.",
  }
audiences: [education_officers_jpn, sme_entrepreneurs, professionals]
use_cases: [visual_content, marketing, communication]
sectors: [education, public_service, sme_business, cross_sector]
categories: [social_media_visuals]
tags: [social_campaign, visual_system, brand_consistency]
tools:
  [
    {
      id: chatgpt_image,
      compatibility: tested,
      tested_on: "2026-10-25",
      notes:
        {
          ms: Satu helaian konsep empat jubin sintetik dijana dan diperiksa; konsistensi aset akhir masih perlu diuji satu demi satu.,
          en: One synthetic four-tile concept sheet was generated and inspected; final individual-asset consistency still requires testing.,
        },
    },
    {
      id: gemini_image,
      compatibility: expected,
      tested_on: null,
      notes: { ms: Belum diuji., en: Not tested. },
    },
  ]
difficulty: intermediate
intended_output: social_media_visual_family
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
related_ids: [prompt-social-calendar-001, visual-event-poster-001]
featured: false
search_aliases:
  {
    ms: [set visual media sosial, grafik kempen, templat sosial],
    en: [social visual set, campaign graphics, social templates],
  }
visual_prompt:
  media_type: image
  intended_applications: [social_campaign, announcement, reminder]
  generators:
    [
      { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" },
      { id: gemini_image, compatibility: expected, tested_on: null },
    ]
  preview:
    src: /media/resources/visual-social-campaign-001/sme-campaign-set-v1.webp
    width: 1254
    height: 1254
    alt:
      {
        ms: Set sintetik empat jubin media sosial tanpa teks dengan komposisi dan palet yang konsisten.,
        en: Synthetic four-tile text-free social-media set with consistent composition and palette.,
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [modular_editorial, brand_consistent]
  subjects: [campaign_theme, product_or_programme]
  aspect_ratios: ["1:1", "4:5", "9:16"]
  output_formats: [social_post, story, carousel]
  variables:
    - {
        id: theme,
        token: "{{TEMA}}",
        token_en: "{{THEME}}",
        label: { ms: Tema kempen, en: Campaign theme },
        required: true,
      }
    - {
        id: visual_subject,
        token: "{{SUBJEK}}",
        token_en: "{{SUBJECT}}",
        label: { ms: Subjek visual, en: Visual subject },
        required: true,
      }
    - {
        id: palette,
        token: "{{PALET_JENAMA}}",
        token_en: "{{BRAND_PALETTE}}",
        label: { ms: Palet jenama, en: Brand palette },
        required: true,
      }
  reference_assets:
    [
      {
        id: brand_guide,
        type: brand_guide,
        required: false,
        supply_mode: runtime,
        sensitive: false,
        usage:
          {
            ms: Gunakan gaya dan warna; tambah logo sebenar kemudian.,
            en: Use style and colours; add the real logo later.,
          },
      },
    ]
  image_metadata:
    {
      subject: coherent_campaign_tiles,
      environment: controlled_editorial_backgrounds,
      composition: four_distinct_templates_with_shared_system,
      viewing_angle: mixed_as_required,
      lighting: consistent_soft_light,
      palette: [approved_brand_palette],
      camera_lens: consistent_visual_language,
      visual_style: modular_editorial_campaign,
      exclusions: [text, logos, invented_claims, inconsistent_product, clutter],
    }
  video_metadata: null
---

## Bahasa Melayu

```text
Cipta helaian konsep 1:1 yang menunjukkan empat jubin visual tanpa teks untuk kempen {{TEMA}}: pengumuman, tip pendidikan, peringatan dan seruan tindakan. Gunakan subjek {{SUBJEK}}, palet {{PALET_JENAMA}}, grid, pencahayaan dan motif yang konsisten; bezakan setiap jubin melalui komposisi, bukan gaya rawak. Tinggalkan zon teks kosong yang praktikal. Tiada perkataan, angka, logo, testimoni atau tuntutan. Kekalkan produk, warna dan proporsi subjek konsisten; elakkan reka letak sesak dan elemen budaya stereotaip.
```

Jana aset akhir satu demi satu dalam nisbah yang diperlukan. Tambah salinan, CTA dan logo yang diluluskan dalam alat reka bentuk.

## English

```text
Create a 1:1 concept sheet showing four text-free visual tiles for a {{THEME}} campaign: announcement, educational tip, reminder and call to action. Use {{SUBJECT}}, {{BRAND_PALETTE}}, a shared grid, lighting and motif; distinguish each tile by composition rather than random style changes. Leave practical blank copy zones. No words, numbers, logos, testimonials or claims. Keep the product, colours and subject proportions consistent; avoid clutter and stereotyped cultural elements.
```

Generate final assets individually in each required ratio. Add approved copy, CTAs and logos in a design tool.
