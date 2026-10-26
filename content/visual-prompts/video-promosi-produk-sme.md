---
schema_version: 1
id: visual-product-video-001
type: visual_prompt
status: approved
slug:
  {
    ms: video-promosi-produk-untuk-sme,
    en: short-product-promotion-videos-for-smes,
  }
title:
  {
    ms: Video Promosi Produk untuk SME,
    en: Short Product Promotion Videos for SMEs,
  }
summary:
  {
    ms: "Rancang video produk ringkas dengan pergerakan kamera, pencahayaan dan bingkai akhir yang terkawal tanpa mencipta ciri produk.",
    en: "Plan short product videos with controlled camera, lighting and end frames without inventing product features.",
  }
audiences: [sme_entrepreneurs, professionals]
use_cases: [visual_content, marketing]
sectors: [sme_business]
categories: [product_video]
tags: [product_video, sme, social_ad, storyboard]
tools:
  [
    {
      id: veo,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Video sebenar belum diuji; pratonton ialah papan cerita imej sintetik.,
          en: Actual video is not yet tested; the preview is a synthetic image storyboard.,
        },
    },
  ]
difficulty: intermediate
intended_output: short_product_promotion_video
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  {
    kind: original,
    source_urls: [],
    notes:
      {
        ms: "Koleksi asal; papan cerita sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026, bukan penjana video.",
        en: "Original collection; synthetic storyboard generated with ChatGPT Image on 25 October 2026, not a video generator.",
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
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [visual-product-photo-001]
featured: false
search_aliases:
  {
    ms: [video produk, video iklan SME, video jualan],
    en: [product video, SME ad video, product promotion],
  }
visual_prompt:
  media_type: video
  intended_applications: [social_ad, product_launch]
  generators: [{ id: veo, compatibility: expected, tested_on: null }]
  preview:
    src: /media/resources/visual-product-video-001/ceramic-mug-storyboard-v1.webp
    width: 2172
    height: 724
    alt:
      {
        ms: Papan cerita sintetik empat bingkai menunjukkan cawan seramik tanpa jenama dari syot utama hingga bingkai akhir kosong.,
        en: Synthetic four-frame storyboard showing an unbranded ceramic mug from hero shot to blank end frame.,
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [polished_product_film, natural_commercial]
  subjects: [verified_sme_product]
  aspect_ratios: ["9:16", "1:1", "16:9"]
  output_formats: [vertical_product_video, social_ad]
  variables:
    - {
        id: product,
        token: "{{PRODUK}}",
        token_en: "{{PRODUCT}}",
        label:
          {
            ms: Produk dan ciri visual disahkan,
            en: Product and verified visual features,
          },
        required: true,
      }
    - {
        id: use_action,
        token: "{{AKSI}}",
        token_en: "{{USE_ACTION}}",
        label: { ms: Aksi penggunaan dibenarkan, en: Permitted use action },
        required: true,
      }
    - {
        id: palette,
        token: "{{PALET}}",
        token_en: "{{PALETTE}}",
        label: { ms: Palet jenama, en: Brand palette },
        required: true,
      }
    - {
        id: aspect_ratio,
        token: "{{NISBAH_ASPEK}}",
        token_en: "{{ASPECT_RATIO}}",
        label: { ms: Nisbah aspek, en: Aspect ratio },
        required: true,
      }
  reference_assets:
    [
      {
        id: product_reference,
        type: product_image,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        usage:
          {
            ms: "Kekalkan bentuk, warna, label dan pembungkusan sebenar.",
            en: "Preserve actual shape, colour, label and packaging.",
          },
      },
    ]
  image_metadata: null
  video_metadata:
    {
      duration_seconds: 12,
      shot_type: product_macro_medium,
      camera_movement: slow_orbit_and_push,
      pacing: clean_confident,
      transitions: match_cuts,
      audio_cues: [soft_product_foley, optional_instrumental],
      emotional_tone: premium_and_credible,
    }
---

## Bahasa Melayu

### Kegunaan koleksi

Rancang video produk ringkas dengan pergerakan kamera, pencahayaan dan bingkai akhir yang terkawal tanpa mencipta ciri produk.

### Sebelum menjana

Sediakan bahan rujukan berikut sebelum menjana:

- **Wajib:** Kekalkan bentuk, warna, label dan pembungkusan sebenar.

Tentukan nisbah aspek, tempoh dan saluran penerbitan. Rancang untuk menambah teks, sari kata, logo dan audio yang diluluskan semasa penyuntingan.

### Pemboleh ubah

- `{{PRODUK}}` — Produk dan ciri visual disahkan **(Wajib)**.
- `{{AKSI}}` — Aksi penggunaan dibenarkan **(Wajib)**.
- `{{PALET}}` — Palet jenama **(Wajib)**.
- `{{NISBAH_ASPEK}}` — Nisbah aspek **(Wajib)**.

### Prompt koleksi

#### Prompt utama

```text
Cipta video produk {{NISBAH_ASPEK}} selama 12 saat menggunakan rujukan {{PRODUK}} sebagai sumber kebenaran visual. Kekalkan bentuk, warna, bahan, label dan proporsi; jangan tambah ciri atau tuntutan.

0–3 saat: syot utama statik dengan cahaya lembut. 3–7 saat: orbit perlahan menunjukkan dua sudut sebenar. 7–10 saat: aksi {{AKSI}} yang dibenarkan, tanpa mendakwa hasil. 10–12 saat: produk berhenti di kanan dengan ruang kosong di kiri untuk salinan yang akan ditambah kemudian. Palet {{PALET}}, kesinambungan penuh, tiada teks janaan, logo baharu, bahan tambahan, perubahan pembungkusan, tangan cacat, kerlipan atau objek melompat.
```

### Cadangan penggunaan

1. Pilih satu prompt dan gantikan semua pemboleh ubah berdasarkan brief yang disahkan.
2. Jana draf tanpa teks atau logo rasmi supaya visual boleh disemak terlebih dahulu.
3. Semak kesinambungan bingkai demi bingkai, kemudian jana semula bahagian yang bermasalah.
4. Tambah sari kata, audio berlesen, logo dan butiran disahkan semasa penyuntingan.

### Semakan hasil

- Subjek, persekitaran, palet dan nisbah aspek sepadan dengan brief.
- Tiada teks tidak terbaca, logo palsu, fakta rekaan atau tuntutan yang tidak disahkan.
- Wajah, tubuh, objek dan konteks Malaysia kelihatan munasabah serta tidak stereotaip.
- Tempoh, urutan, pergerakan kamera dan tempo konsisten dengan prompt.
- Kesinambungan wajah, pakaian, tangan, objek dan lokasi telah diperiksa bingkai demi bingkai.
- Sari kata boleh dibaca, audio berlesen dan versi tanpa bunyi masih boleh difahami.

### Batasan dan penggunaan bertanggungjawab

Semak setiap bingkai terhadap foto produk. Tambah harga, promosi dan tuntutan hanya selepas pengesahan manusia.

## English

### What this collection is for

Plan short product videos with controlled camera, lighting and end frames without inventing product features.

### Before generating

Prepare the following reference materials before generating:

- **Required:** Preserve actual shape, colour, label and packaging.

Decide the aspect ratio, duration and publishing channel. Plan to add approved text, captions, logos and audio during editing.

### Variables

- `{{PRODUCT}}` — Product and verified visual features **(Required)**.
- `{{USE_ACTION}}` — Permitted use action **(Required)**.
- `{{PALETTE}}` — Brand palette **(Required)**.
- `{{ASPECT_RATIO}}` — Aspect ratio **(Required)**.

### Collection prompts

#### Main prompt

```text
Create a 12-second {{ASPECT_RATIO}} product video using {{PRODUCT}} reference images as the visual source of truth. Preserve shape, colour, material, label and proportions; add no feature or claim.

0–3 seconds: static hero shot with soft light. 3–7 seconds: slow orbit showing two accurate angles. 7–10 seconds: permitted {{USE_ACTION}} without implying an outcome. 10–12 seconds: product settles on the right with blank space on the left for later copy. Use {{PALETTE}}, full continuity, no generated text, new logo, added ingredient, packaging change, malformed hands, flicker or jumping objects.
```

### Suggested workflow

1. Choose one prompt and replace every variable using the verified brief.
2. Generate a draft without official text or logos so the visuals can be reviewed first.
3. Review continuity frame by frame, then regenerate any problematic segment.
4. Add captions, licensed audio, logos and verified details during editing.

### Output checks

- The subject, environment, palette and aspect ratio match the brief.
- There is no illegible text, fake logo, invented fact or unverified claim.
- Faces, bodies, objects and the Malaysian context are plausible and non-stereotyped.
- Duration, sequence, camera movement and pacing are consistent with the prompt.
- Continuity of faces, clothing, hands, objects and location has been checked frame by frame.
- Captions are readable, audio is licensed and the muted version remains understandable.

### Limitations and responsible use

Check every frame against product photographs. Add price, promotion and claims only after human verification.
