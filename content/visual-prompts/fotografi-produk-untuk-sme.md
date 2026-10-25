---
schema_version: 1
id: visual-product-photo-001
type: visual_prompt
status: approved
slug: { ms: fotografi-produk-untuk-sme, en: product-photography-for-smes }
title: { ms: Fotografi Produk untuk SME, en: Product Photography for SMEs }
summary:
  ms: Cipta konsep imej katalog, gaya hidup dan promosi dengan pencahayaan serta komposisi terkawal tanpa mengubah ciri produk sebenar.
  en: Create catalogue, lifestyle and promotional image concepts with controlled lighting and composition without changing real product features.
audiences: [sme_entrepreneurs, professionals]
use_cases: [visual_content, marketing]
sectors: [sme_business]
categories: [product_marketing]
tags: [product_photo, catalogue, lifestyle, ecommerce]
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
        ms: Ujian menggunakan produk rujukan sintetik mengekalkan ciri utama dalam variasi katalog dan gaya hidup; ujian produk sebenar belum dijalankan.,
        en: A synthetic-reference test preserved the main features in catalogue and lifestyle variants; no real-product test has been performed.,
      }
difficulty: intermediate
intended_output: product_marketing_image
languages: [ms, en]
author: { name: Forward College, url: null }
curator: { name: Forward Labs }
provenance:
  kind: original
  source_urls: []
  notes:
    {
      ms: Koleksi prompt asal; satu rujukan produk sintetik dan dua aset pratonton dijana dengan ChatGPT Image pada 25 Oktober 2026.,
      en: Original prompt collection; one synthetic product reference and two preview assets were generated with ChatGPT Image on 25 October 2026.,
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
related_ids:
  [
    skill-business-proposal-001,
    prompt-customer-response-001,
    visual-product-video-001,
  ]
featured: true
search_aliases:
  ms: [gambar produk, foto katalog, visual jualan]
  en: [product photo, catalogue image, ecommerce photography]
visual_prompt:
  media_type: image
  intended_applications: [ecommerce, catalogue, social_media]
  generators:
    - { id: gemini_image, compatibility: expected, tested_on: null }
    - { id: chatgpt_image, compatibility: tested, tested_on: "2026-10-25" }
    - { id: adobe_firefly, compatibility: expected, tested_on: null }
  preview:
    src: /media/resources/visual-product-photo-001/catalogue-tumbler-v1.webp
    width: 1254
    height: 1254
    alt:
      ms: Foto katalog sintetik sebuah cawan seramik teal rekaan dengan jalur dasar warna pasir dan tanda bulan sabit krim.
      en: Synthetic catalogue photo of a fictional teal ceramic tumbler with a sand-coloured base band and cream crescent mark.
    provenance:
      kind: original_generated
      creator: Forward College
      tool: ChatGPT Image
      generated_on: "2026-10-25"
  styles: [clean_commercial, natural_lifestyle]
  subjects: [sme_product, packaged_goods, handmade_product]
  aspect_ratios: ["1:1", "4:5", "16:9"]
  output_formats: [catalogue_image, social_post, marketplace_listing]
  variables:
    - id: product
      token: "{{PRODUCT}}"
      label: { ms: Produk dan ciri tepat, en: Product and accurate features }
      required: true
    - id: setting
      token: "{{SETTING}}"
      label: { ms: Latar dan permukaan, en: Setting and surface }
      required: true
    - id: lighting
      token: "{{LIGHTING}}"
      label: { ms: Pencahayaan, en: Lighting }
      required: true
    - id: brand_palette
      token: "{{BRAND_PALETTE}}"
      label: { ms: Palet jenama, en: Brand palette }
      required: false
    - id: aspect_ratio
      token: "{{ASPECT_RATIO}}"
      label: { ms: Nisbah aspek, en: Aspect ratio }
      required: true
  reference_assets:
    - id: product_reference_images
      type: product_photographs
      required: true
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Foto produk sebenar yang pengguna berhak gunakan untuk mengawal bentuk, warna, label dan skala.
        en: Photographs of the real product that the user may lawfully use to constrain shape, colour, label and scale.
    - id: approved_product_information
      type: product_facts
      required: true
      supply_mode: runtime
      sensitive: false
      usage:
        ms: Ciri, kandungan, kuantiti dan tuntutan yang telah diluluskan.
        en: Approved features, contents, quantity and claims.
  image_metadata:
    subject: accurate_product_hero
    environment: controlled_studio_or_plausible_lifestyle
    composition: uncluttered_commercial_focus
    viewing_angle: product_appropriate
    lighting: soft_controlled_key_and_fill
    palette: [brand_neutral, product_complementary]
    camera_lens: natural_50mm_to_85mm_product_perspective
    visual_style: polished_commercial_photography
    exclusions:
      [
        altered_packaging,
        invented_claims,
        incorrect_ingredients,
        illegible_labels,
        misleading_scale,
        unauthorised_props,
      ]
  video_metadata: null
---

## Bahasa Melayu

### Kegunaan koleksi

Gunakan prompt ini untuk merancang atau menghasilkan konsep imej produk. Untuk imej yang akan mewakili produk sebenar, foto rujukan yang anda berhak gunakan dan maklumat produk yang diluluskan adalah wajib. Jika bahan tersebut tiada, gunakan hasil hanya sebagai papan mood generik dan jangan terbitkannya sebagai imej produk. Imej janaan tidak boleh mengubah kuantiti, ramuan, label, pensijilan atau prestasi produk.

### Pemboleh ubah

- `{{PRODUCT}}` — produk, bahan, warna, saiz dan ciri fizikal yang tepat.
- `{{SETTING}}` — permukaan dan latar yang munasabah.
- `{{LIGHTING}}` — contoh cahaya studio lembut atau cahaya pagi.
- `{{BRAND_PALETTE}}` — warna latar/prop yang diluluskan.
- `{{ASPECT_RATIO}}` — 1:1 katalog, 4:5 sosial atau 16:9 banner.

### Prompt 1 — katalog bersih

```text
Cipta fotografi produk komersial {{ASPECT_RATIO}} bagi {{PRODUCT}} pada {{SETTING}}. Kekalkan bentuk, warna, bahan, pembungkusan, label dan kuantiti seperti rujukan yang diberikan. Gunakan sudut tiga suku yang semula jadi, perspektif lensa 70mm, {{LIGHTING}}, bayang lembut dan latar bersih dalam palet {{BRAND_PALETTE}}. Produk ialah fokus tunggal, tajam dan berskala munasabah, dengan ruang selamat di sekeliling untuk potongan katalog.

Jangan ubah reka bentuk produk, cipta teks atau pensijilan, tambah ramuan, gandakan item, sembunyikan kecacatan penting atau menunjukkan hasil penggunaan yang tidak dapat dibuktikan. Elakkan pantulan terbakar, tepi cair, label tidak terbaca dan prop yang mengelirukan saiz.
```

### Prompt 2 — gaya hidup Malaysia

```text
Cipta foto gaya hidup {{ASPECT_RATIO}} yang menunjukkan {{PRODUCT}} digunakan secara munasabah di {{SETTING}} dalam konteks Malaysia kontemporari. Kekalkan produk sebagai subjek utama dan tepat kepada rujukan. Gunakan pencahayaan semula jadi, warna {{BRAND_PALETTE}}, prop minimum yang berkaitan dan tangan hanya jika anatomi jelas serta interaksi selamat. Jangan cipta manfaat, testimoni, keputusan sebelum/selepas atau tuntutan kesihatan.
```

### Cadangan penggunaan

1. Pastikan anda memiliki hak untuk menggunakan foto produk rujukan.
2. Nyatakan ciri yang tidak boleh berubah.
3. Bandingkan setiap hasil dengan produk sebenar dan label yang diluluskan.
4. Tambah teks harga, logo dan tuntutan hanya dalam reka bentuk akhir yang disemak.
5. Labelkan imej sebagai ilustrasi jika ia bukan foto tepat produk sebenar.

### Batasan dan penggunaan bertanggungjawab

Imej yang cantik tetapi tidak tepat boleh mengelirukan pelanggan. Jangan gunakan AI untuk mereka pensijilan, hasil kesihatan, saiz hidangan, warna produk atau aksesori yang tidak termasuk. Semak keperluan platform jualan dan undang-undang pengiklanan yang terpakai.

### Status pratonton

Satu produk rujukan sintetik dan dua pratonton telah dihasilkan dengan ChatGPT Image pada 25 Oktober 2026. Variasi katalog dan gaya hidup mengekalkan bentuk, glasir teal, jalur dasar warna pasir dan tanda bulan sabit produk rekaan. Ujian ini tidak membuktikan ketepatan bagi produk sebenar; pemilik produk masih perlu membandingkan setiap hasil dengan foto serta maklumat produk yang diluluskan.

## English

### Intended use

Use these prompts to plan or generate product-image concepts. For an image representing a real product, reference photographs you have the right to use and approved product information are required. If those materials are unavailable, use the result only as a generic mood board and do not publish it as a product image. Generated images must not alter quantity, ingredients, labels, certifications or product performance.

### Variables

- `{{PRODUCT}}` — accurate product, material, colour, size and physical features.
- `{{SETTING}}` — plausible surface and background.
- `{{LIGHTING}}` — such as soft studio light or morning daylight.
- `{{BRAND_PALETTE}}` — approved background/prop colours.
- `{{ASPECT_RATIO}}` — 1:1 catalogue, 4:5 social or 16:9 banner.

### Prompt 1 — clean catalogue

```text
Create an {{ASPECT_RATIO}} commercial product photograph of {{PRODUCT}} on {{SETTING}}. Preserve the shape, colour, material, packaging, label and quantity shown in the supplied reference. Use a natural three-quarter angle, 70mm lens perspective, {{LIGHTING}}, soft shadows and a clean background in {{BRAND_PALETTE}}. Keep the product as the single sharp focal point at a plausible scale, with safe crop space for a catalogue layout.

Do not redesign the product, invent text or certifications, add ingredients, duplicate items, hide material defects or show unsubstantiated usage results. Avoid blown reflections, melted edges, unreadable labels and props that misrepresent scale.
```

### Prompt 2 — Malaysian lifestyle

```text
Create an {{ASPECT_RATIO}} lifestyle photograph showing {{PRODUCT}} used plausibly in {{SETTING}} within a contemporary Malaysian context. Keep the product as the accurate main subject. Use natural lighting, {{BRAND_PALETTE}}, minimal relevant props and hands only when anatomy is clear and the interaction is safe. Do not invent benefits, testimonials, before-and-after results or health claims.
```

### Suggested workflow

1. Confirm you have rights to use the product reference photograph.
2. Specify features that must not change.
3. Compare every result with the real product and approved label.
4. Add price copy, logos and claims only in the reviewed final layout.
5. Label the image as an illustration when it is not an accurate photograph of the actual product.

### Limitations and responsible use

An attractive but inaccurate image can mislead customers. Do not use AI to invent certifications, health outcomes, serving sizes, product colours or included accessories. Verify applicable marketplace and advertising requirements.

### Preview status

A synthetic product reference and two previews were generated with ChatGPT Image on 25 October 2026. The catalogue and lifestyle variants preserved the fictional product's shape, teal glaze, sand-coloured base band and crescent mark. This does not establish fidelity for a real product; the owner must still compare every output with approved photographs and product information.
