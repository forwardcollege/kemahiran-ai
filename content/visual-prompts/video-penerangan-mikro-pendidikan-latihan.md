---
schema_version: 1
id: visual-micro-explainer-001
type: visual_prompt
status: approved
slug:
  {
    ms: video-penerangan-mikro-untuk-pendidikan-dan-latihan,
    en: micro-explainer-videos-for-education-and-training,
  }
title:
  {
    ms: Video Penerangan Mikro untuk Pendidikan dan Latihan,
    en: Micro-Explainer Videos for Education and Training,
  }
summary:
  {
    ms: "Rancang urutan visual pendek bagi satu konsep dengan sumber fakta, tempo mudah diikuti dan teks ditambah pascaproduksi.",
    en: "Plan a short visual sequence for one sourced concept with accessible pacing and post-produced text.",
  }
audiences: [teachers_educators, education_officers_jpn, professionals]
use_cases: [teaching_learning, visual_content, communication]
sectors: [education, cross_sector]
categories: [educational_explainers]
tags: [micro_explainer, education_video, training_video, storyboard]
tools:
  [
    {
      id: veo,
      compatibility: expected,
      tested_on: null,
      notes:
        {
          ms: Video sebenar belum diuji; pratonton ialah papan cerita imej.,
          en: Actual video is not yet tested; preview is an image storyboard.,
        },
    },
  ]
difficulty: intermediate
intended_output: educational_micro_explainer_video
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
    specialist_review_status: not_obtained,
    specialist_reviewer: null,
    last_reviewed: "2026-10-25",
    next_review_due: "2027-04-25",
  }
version: 0.2.0
created_at: "2026-10-25"
updated_at: "2026-10-25"
related_ids: [visual-education-001]
featured: false
search_aliases:
  {
    ms: [video pendidikan pendek, video konsep, penerangan visual],
    en: [short education video, concept video, visual explainer],
  }
visual_prompt:
  media_type: video
  intended_applications: [classroom_explainer, training_module]
  generators: [{ id: veo, compatibility: expected, tested_on: null }]
  preview:
    src: /media/resources/visual-micro-explainer-001/water-cycle-storyboard-v1.webp
    width: 1536
    height: 1024
    alt:
      {
        ms: Papan cerita sintetik empat peringkat kitaran air tanpa label teks.,
        en: Synthetic four-stage water-cycle storyboard without text labels.,
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [clear_educational_animation, calm_editorial]
  subjects: [single_sourced_concept]
  aspect_ratios: ["16:9", "9:16"]
  output_formats: [classroom_video, mobile_learning_clip]
  variables:
    - {
        id: concept,
        token: "{{KONSEP}}",
        token_en: "{{CONCEPT}}",
        label: { ms: Konsep disahkan, en: Verified concept },
        required: true,
      }
    - {
        id: sequence,
        token: "{{URUTAN}}",
        token_en: "{{SEQUENCE}}",
        label: { ms: Urutan fakta, en: Factual sequence },
        required: true,
      }
    - {
        id: audience,
        token: "{{AUDIENS}}",
        token_en: "{{AUDIENCE}}",
        label: { ms: Tahap audiens, en: Audience level },
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
        id: factual_source,
        type: curriculum_or_training_reference,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        usage:
          {
            ms: Sumber kebenaran bagi setiap peringkat.,
            en: Source of truth for every stage.,
          },
      },
    ]
  image_metadata: null
  video_metadata:
    {
      duration_seconds: 15,
      shot_type: simple_wide_and_detail,
      camera_movement: minimal_slow_pan,
      pacing: calm_accessible,
      transitions: gentle_cuts,
      audio_cues: [optional_neutral_ambient],
      emotional_tone: clear_and_curious,
    }
---

## Bahasa Melayu

```text
Cipta video penerangan 15 saat {{NISBAH_ASPEK}} untuk {{AUDIENS}} tentang {{KONSEP}}, berasaskan hanya urutan fakta {{URUTAN}}. Tunjukkan satu peringkat pada satu masa dengan komposisi jelas, gerakan minimum dan jeda yang cukup untuk sari kata ditambah kemudian. Kekalkan objek, skala dan arah proses konsisten. Jangan jana teks, nombor, suara, watak maskot, fakta tambahan atau hubungan sebab yang tidak dinyatakan. Elakkan potongan terlalu cepat, kerlipan, elemen hiasan mengelirukan dan perubahan bentuk antara syot. Akhiri dengan bingkai ringkasan visual kosong untuk label pascaproduksi.
```

Guru atau pakar kandungan mesti menyemak setiap bingkai terhadap sumber. Tambah narasi, sari kata dan penerangan alternatif selepas fakta diluluskan.

## English

```text
Create a 15-second {{ASPECT_RATIO}} explainer for {{AUDIENCE}} about {{CONCEPT}}, based only on the factual sequence {{SEQUENCE}}. Show one stage at a time with clear composition, minimal movement and enough pause for captions to be added later. Keep objects, scale and process direction consistent. Generate no text, numbers, voice, mascot, extra facts or unstated causal link. Avoid rapid cuts, flicker, misleading decoration and shape changes between shots. End with a blank visual-summary frame for post-produced labels.
```

A teacher or subject reviewer must compare every frame with the source. Add narration, captions and alternative description only after factual approval.
