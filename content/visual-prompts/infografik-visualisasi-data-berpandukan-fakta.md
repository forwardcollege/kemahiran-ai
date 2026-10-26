---
schema_version: 1
id: visual-evidence-infographic-001
type: visual_prompt
status: approved
slug:
  {
    ms: infografik-dan-visualisasi-data-berpandukan-fakta,
    en: evidence-grounded-infographics-and-data-visuals,
  }
title:
  {
    ms: Infografik dan Visualisasi Data Berpandukan Fakta,
    en: Evidence-Grounded Infographics and Data Visuals,
  }
summary:
  {
    ms: "Rancang susun atur infografik hanya daripada fakta atau data disahkan, dengan teks akhir ditambah di luar penjana.",
    en: "Plan infographic layouts only from verified facts or data, with final text added outside the generator.",
  }
audiences: [teachers_educators, education_officers_jpn, professionals]
use_cases: [visual_content, data_analysis, communication]
sectors: [education, public_service, cross_sector]
categories: [evidence_infographics]
tags: [infographic, data_visualisation, evidence, accessibility]
tools:
  [
    {
      id: chatgpt_image,
      compatibility: tested,
      tested_on: "2026-10-25",
      notes:
        {
          ms: Satu templat infografik sintetik tanpa teks dijana dan diperiksa; angka dan label sebenar mesti ditambah secara manual.,
          en: One synthetic text-free infographic template was generated and inspected; actual numbers and labels must be added manually.,
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
intended_output: evidence_grounded_infographic_layout
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
    last_reviewed: "2026-10-26",
    next_review_due: "2027-04-26",
  }
version: 0.3.0
created_at: "2026-10-25"
updated_at: "2026-10-26"
related_ids: [skill-activity-report-001, skill-management-report-001]
featured: false
search_aliases:
  {
    ms: [infografik data, visual fakta, carta program],
    en: [data infographic, fact visual, programme chart],
  }
visual_prompt:
  media_type: image
  intended_applications: [report_summary, presentation, social_card]
  generators:
    [
      { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" },
      { id: gemini_image, compatibility: expected, tested_on: null },
    ]
  preview:
    src: /media/resources/visual-evidence-infographic-001/programme-results-layout-v1.webp
    width: 1122
    height: 1402
    alt:
      {
        ms: "Susun atur infografik sintetik tanpa teks dengan kad angka, carta bar dan ruang sumber yang jelas.",
        en: "Synthetic text-free infographic layout with number cards, a bar chart and clear source area.",
      }
    provenance:
      {
        kind: original_generated,
        creator: Forward College,
        tool: ChatGPT Image,
        generated_on: "2026-10-25",
      }
  styles: [clean_information_design, accessible_editorial]
  subjects: [programme_results, verified_data]
  aspect_ratios: ["4:5", "16:9"]
  output_formats: [infographic_layout, report_visual]
  variables:
    - {
        id: facts,
        token: "{{FAKTA_DATA}}",
        token_en: "{{VERIFIED_DATA}}",
        label: { ms: Fakta atau data disahkan, en: Verified facts or data },
        required: true,
      }
    - {
        id: hierarchy,
        token: "{{HIERARKI}}",
        token_en: "{{HIERARCHY}}",
        label: { ms: Hierarki mesej, en: Message hierarchy },
        required: true,
      }
    - {
        id: palette,
        token: "{{PALET}}",
        token_en: "{{PALETTE}}",
        label: { ms: Palet warna, en: Colour palette },
        required: true,
      }
  reference_assets:
    [
      {
        id: verified_data,
        type: verified_dataset,
        required: true,
        supply_mode: runtime,
        sensitive: false,
        usage:
          {
            ms: Sumber tunggal bagi semua nombor dan perbandingan.,
            en: Sole source for every number and comparison.,
          },
      },
    ]
  image_metadata:
    {
      subject: blank_infographic_framework,
      environment: flat_design_canvas,
      composition: clear_hierarchy_with_chart_placeholders,
      viewing_angle: front_on,
      lighting: flat_even,
      palette: [high_contrast, colour_blind_safe],
      camera_lens: not_applicable,
      visual_style: clean_information_design,
      exclusions:
        [
          generated_text,
          invented_numbers,
          decorative_pie_charts,
          inaccessible_contrast,
          logos,
        ],
    }
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Rancang susun atur infografik hanya daripada fakta atau data disahkan, dengan teks akhir ditambah di luar penjana.

### Sebelum menjana

Sediakan bahan rujukan berikut sebelum menjana:

- **Wajib:** Sumber tunggal bagi semua nombor dan perbandingan.

Tentukan nisbah aspek dan tempat penggunaan akhir. Tambah teks, data dan logo sebenar dalam alat reka bentuk selepas visual disemak.

### Pemboleh ubah

- `{{FAKTA_DATA}}` — Fakta atau data disahkan **(Wajib)**.
- `{{HIERARKI}}` — Hierarki mesej **(Wajib)**.
- `{{PALET}}` — Palet warna **(Wajib)**.

### Prompt koleksi

#### Prompt utama

```text
Reka susun atur infografik 4:5 tanpa teks berdasarkan hierarki {{HIERARKI}} untuk data {{FAKTA_DATA}}. Wujudkan kawasan tajuk kosong, tiga kad angka kosong, satu kawasan carta yang sepadan dengan jenis perbandingan, ruang nota kaedah dan ruang sumber. Gunakan grid jelas, palet {{PALET}} berkontras tinggi dan petunjuk bentuk selain warna. Jangan jana perkataan, angka, logo atau ikon fakta khusus. Jangan cipta data, skala atau perbandingan. Hasilkan templat visual yang akan diisi dengan teks dan carta tepat dalam alat reka bentuk.
```

### Cadangan penggunaan

1. Pilih satu prompt dan gantikan semua pemboleh ubah berdasarkan brief yang disahkan.
2. Jana beberapa draf tanpa teks atau logo rasmi.
3. Pilih draf yang paling tepat, kemudian semak fakta, representasi dan kecacatan visual.
4. Tambah salinan, data, logo dan butiran rasmi dalam alat reka bentuk yang boleh diakses.

### Semakan hasil

- Subjek, persekitaran, palet dan nisbah aspek sepadan dengan brief.
- Tiada teks tidak terbaca, logo palsu, fakta rekaan atau tuntutan yang tidak disahkan.
- Wajah, tubuh, objek dan konteks Malaysia kelihatan munasabah serta tidak stereotaip.
- Komposisi mempunyai fokus jelas dan ruang yang cukup untuk salinan pascapenghasilan.
- Kontras, saiz teks yang akan ditambah dan teks alternatif dirancang untuk penggunaan akhir.

### Batasan dan penggunaan bertanggungjawab

Pilih jenis carta berdasarkan soalan dan data sebelum penjanaan. Masukkan angka, label, sumber dan teks alternatif secara manual; semak kontras dan jangan gunakan warna sahaja untuk membezakan siri.

## English

### What this collection is for

Plan infographic layouts only from verified facts or data, with final text added outside the generator.

### Before generating

Prepare the following reference materials before generating:

- **Required:** Sole source for every number and comparison.

Decide the aspect ratio and final use. Add genuine text, data and logos in a design tool after reviewing the visual.

### Variables

- `{{VERIFIED_DATA}}` — Verified facts or data **(Required)**.
- `{{HIERARCHY}}` — Message hierarchy **(Required)**.
- `{{PALETTE}}` — Colour palette **(Required)**.

### Collection prompts

#### Main prompt

```text
Design a text-free 4:5 infographic layout using {{HIERARCHY}} for {{VERIFIED_DATA}}. Include a blank title area, three empty number cards, one chart area appropriate to the comparison type, a methodology-note area and a source area. Use a clear grid, high-contrast {{PALETTE}} and shape cues in addition to colour. Generate no words, numbers, logos or fact-specific icons. Do not invent data, scales or comparisons. Produce a visual template to be populated with accurate text and charts in a design tool.
```

### Suggested workflow

1. Choose one prompt and replace every variable using the verified brief.
2. Generate several drafts without official text or logos.
3. Select the most accurate draft, then check facts, representation and visual defects.
4. Add copy, data, logos and official details in an accessible design tool.

### Output checks

- The subject, environment, palette and aspect ratio match the brief.
- There is no illegible text, fake logo, invented fact or unverified claim.
- Faces, bodies, objects and the Malaysian context are plausible and non-stereotyped.
- The composition has a clear focus and enough space for post-produced copy.
- Contrast, eventual text size and alternative text are planned for the final use.

### Limitations and responsible use

Choose the chart type from the question and data before generation. Add numbers, labels, sources and alt text manually; check contrast and never distinguish series by colour alone.
