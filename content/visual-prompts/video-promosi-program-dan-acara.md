---
schema_version: 1
id: visual-event-video-001
type: visual_prompt
status: approved
slug:
  {
    ms: video-promosi-ringkas-program-dan-acara,
    en: short-programme-and-event-promotion-videos,
  }
title:
  {
    ms: Video Promosi Ringkas untuk Program dan Acara,
    en: Short Programme and Event Promotion Videos,
  }
summary:
  ms: Rancang video 10–20 saat yang memperkenalkan program, menunjukkan pengalaman yang dimaksudkan dan menyediakan ruang akhir untuk butiran acara yang disahkan.
  en: Plan a 10–20 second video introducing a programme, showing its intended experience and ending with space for verified event details.
audiences: [teachers_educators, education_officers_jpn, professionals]
use_cases: [visual_content, communication, marketing]
sectors: [education, public_service, cross_sector]
categories: [promotional_video]
tags: [event_video, programme_promo, social_video, malaysia]
tools:
  - id: veo
    compatibility: expected
    tested_on: null
    notes:
      {
        ms: Ujian video sebenar belum dijalankan; hanya papan cerita dan bingkai utama sintetik dihasilkan dengan alat imej.,
        en: No actual video test has been performed; only a synthetic storyboard and key frame were produced with an image tool.,
      }
difficulty: intermediate
intended_output: short_event_promotion_video
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward College }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: "Koleksi prompt asal; papan cerita dan bingkai utama sintetik dijana dengan ChatGPT Image pada 25 Oktober 2026, bukan dengan penjana video.",
      en: "Original prompt collection; a synthetic storyboard and key frame were generated with ChatGPT Image on 25 October 2026, not with a video generator.",
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
related_ids: [visual-event-poster-001]
featured: true
search_aliases:
  ms: [video acara, video program, video promosi pendek]
  en: [event promo video, programme teaser, short promotional video]
visual_prompt:
  media_type: video
  intended_applications: [event_promotion, social_media]
  generators:
    - { id: veo, compatibility: expected, tested_on: null }
  preview:
    src: /media/resources/visual-event-video-001/montage-storyboard-v1.webp
    width: 1672
    height: 941
    alt:
      ms: Papan cerita sintetik empat bingkai bagi video program, daripada syot luas hingga bingkai akhir dengan ruang maklumat kosong.
      en: Synthetic four-frame programme-video storyboard, from a wide shot to an end frame with blank information space.
    provenance:
      kind: original_generated
      creator: Forward College
      tool: ChatGPT Image
      generated_on: "2026-10-25"
  styles: [optimistic_documentary, polished_social_video]
  subjects: [education_event, community_programme, professional_training]
  aspect_ratios: ["9:16", "16:9", "1:1"]
  output_formats: [vertical_social_video, landscape_promo]
  variables:
    - id: programme_theme
      token: "{{PROGRAMME_THEME}}"
      label: { ms: Tema program, en: Programme theme }
      required: true
    - id: participant_activity
      token: "{{PARTICIPANT_ACTIVITY}}"
      label: { ms: Aktiviti peserta, en: Participant activity }
      required: true
    - id: venue_context
      token: "{{VENUE_CONTEXT}}"
      label: { ms: Konteks lokasi, en: Venue context }
      required: true
    - id: audience
      token: "{{AUDIENCE}}"
      label: { ms: Peserta sasaran, en: Intended audience }
      required: true
    - id: aspect_ratio
      token: "{{ASPECT_RATIO}}"
      label: { ms: Nisbah aspek, en: Aspect ratio }
      required: true
    - id: brand_palette
      token: "{{BRAND_PALETTE}}"
      label: { ms: Palet jenama, en: Brand palette }
      required: false
  reference_assets:
    - id: verified_event_brief
      type: event_brief
      required: true
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Sumber bagi tema, peserta, lokasi, aktiviti dan pengalaman sebenar yang dirancang.
        en: Source for the actual planned theme, participants, venue, activities and experience.
    - id: brand_guide
      type: brand_guide
      required: false
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Gunakan untuk warna dan gaya; tambah logo sebenar semasa penyuntingan.
        en: Use for colours and style; add genuine logos during editing.
  image_metadata: null
  video_metadata:
    duration_seconds: 15
    shot_type: mixed_wide_medium_detail
    camera_movement: controlled_slow_push_and_gentle_tracking
    pacing: confident_and_clear
    transitions: clean_cuts
    audio_cues: [light_ambient_room_tone, optional_upbeat_instrumental]
    emotional_tone: optimistic_and_credible
---

## Bahasa Melayu

### Kegunaan koleksi

> **Pratonton contoh:** Imej di atas ialah papan cerita sintetik untuk menunjukkan struktur montaj. Ia bukan klip video janaan atau rakaman program sebenar.

Gunakan prompt ini untuk klip pengenalan 10–20 saat bagi program pendidikan, komuniti atau pembangunan profesional. Sediakan brief acara yang telah disahkan sebelum menjana supaya aktiviti, peserta dan lokasi tidak direka-reka. Jana visual tanpa teks acara; tambah tajuk, tarikh, logo, sari kata dan seruan tindakan dalam penyunting video menggunakan maklumat yang telah disahkan.

### Sebelum menjana

Sediakan bahan rujukan berikut sebelum menjana:

- **Wajib:** Sumber bagi tema, peserta, lokasi, aktiviti dan pengalaman sebenar yang dirancang.
- **Pilihan:** Gunakan untuk warna dan gaya; tambah logo sebenar semasa penyuntingan.

Tentukan nisbah aspek, tempoh dan saluran penerbitan. Rancang untuk menambah teks, sari kata, logo dan audio yang diluluskan semasa penyuntingan.

### Pemboleh ubah

- `{{PROGRAMME_THEME}}` — Tema program **(Wajib)**.
- `{{PARTICIPANT_ACTIVITY}}` — Aktiviti peserta **(Wajib)**.
- `{{VENUE_CONTEXT}}` — Konteks lokasi **(Wajib)**.
- `{{AUDIENCE}}` — Peserta sasaran **(Wajib)**.
- `{{ASPECT_RATIO}}` — Nisbah aspek **(Wajib)**.
- `{{BRAND_PALETTE}}` — Palet jenama **(Pilihan)**.

### Prompt koleksi

#### Prompt 1 — montaj 15 saat

```text
Cipta video promosi {{ASPECT_RATIO}} berdurasi 15 saat untuk program {{PROGRAMME_THEME}} yang ditujukan kepada {{AUDIENCE}} di {{VENUE_CONTEXT}}. Nada optimistik, profesional dan boleh dipercayai; konteks Malaysia kontemporari tanpa stereotaip.

Urutan:
- 0–3 saat: syot luas lokasi yang kemas, gerakan dolly masuk perlahan.
- 3–7 saat: syot sederhana peserta melakukan {{PARTICIPANT_ACTIVITY}} dengan interaksi semula jadi.
- 7–11 saat: dua syot dekat butiran bahan, tangan dan kerja kolaboratif; anatomi serta objek konsisten.
- 11–15 saat: syot penutup tenang dengan ruang negatif besar untuk tajuk, tarikh dan seruan tindakan yang akan ditambah kemudian.

Cahaya siang lembut, warna neutral dengan aksen {{BRAND_PALETTE}}, potongan bersih, gerakan kamera terkawal dan kesinambungan pakaian, ruang serta peserta. Tiada teks janaan, logo, bendera, lambang rasmi atau audio pertuturan. Jangan gambarkan hasil, kemudahan atau aktiviti yang tidak dirancang. Elakkan wajah berubah, anggota tambahan, objek melompat, gerakan laju, kerlipan dan stereotaip budaya.
```

#### Prompt 2 — klip pengumuman satu syot

```text
Cipta satu syot promosi {{ASPECT_RATIO}} selama 10 saat di {{VENUE_CONTEXT}}. Kamera bergerak perlahan dari bahan program di latar depan kepada kumpulan kecil {{AUDIENCE}} yang sedang {{PARTICIPANT_ACTIVITY}}, kemudian berhenti dengan ruang kosong di sebelah kiri untuk maklumat acara. Nada profesional, mesra dan realistik. Tiada teks, logo, pertuturan atau tuntutan hasil.
```

### Cadangan penggunaan

1. Pastikan adegan mencerminkan pengalaman yang benar-benar dirancang.
2. Jana klip tanpa teks, logo atau suara rasmi.
3. Semak kesinambungan wajah, tubuh, pakaian, objek dan lokasi bingkai demi bingkai.
4. Tambah butiran disahkan, logo sebenar, sari kata dan audio berlesen semasa penyuntingan.
5. Eksport versi bersari kata dan semak kebolehbacaan pada telefon.

### Semakan hasil

- Subjek, persekitaran, palet dan nisbah aspek sepadan dengan brief.
- Tiada teks tidak terbaca, logo palsu, fakta rekaan atau tuntutan yang tidak disahkan.
- Wajah, tubuh, objek dan konteks Malaysia kelihatan munasabah serta tidak stereotaip.
- Tempoh, urutan, pergerakan kamera dan tempo konsisten dengan prompt.
- Kesinambungan wajah, pakaian, tangan, objek dan lokasi telah diperiksa bingkai demi bingkai.
- Sari kata boleh dibaca, audio berlesen dan versi tanpa bunyi masih boleh difahami.

### Batasan dan penggunaan bertanggungjawab

Video janaan bukan rakaman program sebenar. Jangan persembahkannya sebagai dokumentasi peserta atau bukti hasil. Dapatkan hak bagi muzik, logo dan aset yang ditambah. Jangan gunakan rupa individu sebenar tanpa kebenaran.

## English

### What this collection is for

> **Representative preview:** The image above is a synthetic storyboard showing the montage structure. It is not a generated video clip or footage of a real programme.

Use these prompts for a 10–20 second introduction to an education, community or professional-development programme. Prepare a verified event brief before generation so that activities, participants and venues are not invented. Generate the visual without event text; add the verified title, date, logo, captions and call to action in a video editor.

### Before generating

Prepare the following reference materials before generating:

- **Required:** Source for the actual planned theme, participants, venue, activities and experience.
- **Optional:** Use for colours and style; add genuine logos during editing.

Decide the aspect ratio, duration and publishing channel. Plan to add approved text, captions, logos and audio during editing.

### Variables

- `{{PROGRAMME_THEME}}` — Programme theme **(Required)**.
- `{{PARTICIPANT_ACTIVITY}}` — Participant activity **(Required)**.
- `{{VENUE_CONTEXT}}` — Venue context **(Required)**.
- `{{AUDIENCE}}` — Intended audience **(Required)**.
- `{{ASPECT_RATIO}}` — Aspect ratio **(Required)**.
- `{{BRAND_PALETTE}}` — Brand palette **(Optional)**.

### Collection prompts

#### Prompt 1 — 15-second montage

```text
Create a 15-second {{ASPECT_RATIO}} promotional video for a {{PROGRAMME_THEME}} programme intended for {{AUDIENCE}} in {{VENUE_CONTEXT}}. Keep the tone optimistic, professional and credible in a contemporary Malaysian context without stereotypes.

Sequence:
- 0–3 seconds: clean wide establishing shot, slow controlled dolly in.
- 3–7 seconds: medium shot of participants naturally performing {{PARTICIPANT_ACTIVITY}}.
- 7–11 seconds: two detail shots of materials, hands and collaborative work with consistent anatomy and objects.
- 11–15 seconds: calm end frame with generous negative space for the title, date and call to action to be added later.

Use soft daylight, a neutral palette with {{BRAND_PALETTE}} accents, clean cuts, controlled camera movement and continuity of clothing, space and participants. No generated text, logos, flags, official emblems or spoken audio. Do not depict outcomes, facilities or activities that are not planned. Avoid changing faces, extra limbs, jumping objects, rapid movement, flicker and cultural stereotypes.
```

#### Prompt 2 — one-shot announcement clip

```text
Create one 10-second {{ASPECT_RATIO}} promotional shot in {{VENUE_CONTEXT}}. Move the camera slowly from programme materials in the foreground to a small group of {{AUDIENCE}} performing {{PARTICIPANT_ACTIVITY}}, then settle with blank space on the left for event information. Keep it professional, warm and realistic. No text, logos, speech or outcome claims.
```

### Suggested workflow

1. Ensure scenes reflect the experience actually planned.
2. Generate clips without text, logos or official voice-over.
3. Review faces, bodies, clothing, objects and location frame by frame for continuity.
4. Add verified details, genuine logos, captions and licensed audio during editing.
5. Export a captioned version and check readability on a phone.

### Output checks

- The subject, environment, palette and aspect ratio match the brief.
- There is no illegible text, fake logo, invented fact or unverified claim.
- Faces, bodies, objects and the Malaysian context are plausible and non-stereotyped.
- Duration, sequence, camera movement and pacing are consistent with the prompt.
- Continuity of faces, clothing, hands, objects and location has been checked frame by frame.
- Captions are readable, audio is licensed and the muted version remains understandable.

### Limitations and responsible use

Generated video is not footage of the real programme. Do not present it as participant documentation or evidence of outcomes. Secure rights for music, logos and added assets. Do not use a real person’s likeness without permission.
