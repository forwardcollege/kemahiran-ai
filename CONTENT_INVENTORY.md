# Kemahiran.AI — Approved MVP Content Inventory

Status: Approved by product owner  
Scope: 36 original resources  
Last updated: 2026-10-25

## Approval record

- **Decision:** All 36 proposed resource concepts are approved without changes.
- **Approved by:** Product owner
- **Approved on:** 2026-10-25
- **Approval scope:** The catalogue mix, working titles, intended outcomes, audiences and recommended anchor-batch selection.
- **Publication status:** All 36 completed records received accountable Forward College internal approval from Howie Chang on 2026-10-25. This is not public-release approval: outstanding licence, tool-test and publication gates remain in force.

## Purpose

This inventory defines the approved launch catalogue before full resource writing begins. It covers all 36 resources across AI Skills, LLM Prompts, Image Prompts and Video Prompts.

The planning IDs (`S01`, `P01`, `I01`, `V01`) remain temporary authoring references. Permanent resource IDs, slugs and detailed metadata will be assigned during content production.

Catalogue approval authorises production, but does not make an entry tested or publishable. Each resource must still pass the editorial, localisation, responsible-use and model-testing workflow defined in `PROJECT.md` and `PLANS.md`.

## Meaning of approval

All entries are approved as resource concepts. Titles and descriptions remain working bilingual editorial copy and may be refined during authoring without changing the approved purpose of a resource. A material change to the outcome, audience or scope should be returned to the product owner for review.

## Selection principles

- Skills are multi-step workflows with preparation, instructions, examples and quality checks.
- LLM Prompts are narrower tasks that users can normally complete in one prompt interaction.
- Visual prompts are preview-led collections, not isolated prompt fragments.
- Related Skill/Prompt pairs are intentional only where a simple prompt and a fuller workflow serve meaningfully different needs.
- High-risk workflows are included only where a clear human-review step can be built into the resource.
- The catalogue favours frequent Malaysian education, public-sector and SME workflows over generic novelty prompts.

## Catalogue summary

| Library                  |  Count |
| ------------------------ | -----: |
| AI Skills                |     12 |
| LLM Prompts              |     14 |
| Image Prompt collections |      7 |
| Video Prompt collections |      3 |
| **Total**                | **36** |

## A. AI Skills — 12 multi-step workflows

### Education — 5

| ID  | Working title                                                                                    | Outcome-focused description                                                                                                                                                                                                                                                                     | Primary audience                 | Additional review                 |
| --- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| S01 | **Penjana Rancangan Pengajaran Harian** (_Daily Lesson Plan Generator_)                          | Guides a teacher from learning objectives and class context to a structured RPH draft, differentiated activities, formative assessment and a final teacher verification checklist. It must not invent DSKP references and remains useful as copyable instructions without package installation. | Teachers and educators           | Curriculum, privacy               |
| S02 | **Pereka Aktiviti Pembelajaran Berasaskan DSKP** (_DSKP-Aligned Learning Activity Designer_)     | Turns a teacher-supplied DSKP extract into several realistic classroom activity options, with timing, materials, learner participation, differentiation and evidence of learning. It focuses on activity design rather than producing a complete RPH.                                           | Teachers and educators           | Curriculum, accessibility         |
| S03 | **Pembina Kuiz, Lembaran Kerja dan Skema Jawapan** (_Quiz, Worksheet and Answer-Scheme Builder_) | Produces an age-appropriate assessment set from teacher-provided content, then checks coverage, difficulty balance, answer quality and ambiguity before formatting a student version and answer scheme.                                                                                         | Teachers and educators           | Curriculum, assessment            |
| S04 | **Pembantu Pembinaan dan Penyelarasan Rubrik** (_Rubric Design and Moderation Assistant_)        | Helps educators define criteria and performance levels, generate a usable rubric, test it against sample responses and revise unclear descriptors for more consistent marking. It supports professional judgement and does not automate final grading.                                          | Teachers, lecturers and trainers | Assessment specialist, fairness   |
| S05 | **Pembantu Maklum Balas Murid yang Membina** (_Constructive Student Feedback Assistant_)         | Converts de-identified evidence from student work and an approved rubric into specific, encouraging feedback, next steps and teacher review prompts while avoiding unsupported claims about ability or character.                                                                               | Teachers and educators           | Privacy, safeguarding, assessment |

### Education administration and public sector — 4

| ID  | Working title                                                                           | Outcome-focused description                                                                                                                                                                                                                        | Primary audience                                      | Additional review                          |
| --- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| S06 | **Pembantu Penyediaan Minit Mesyuarat Formal** (_Formal Meeting Minutes Assistant_)     | Guides an authorised secretariat through de-identifying notes, identifying decisions and actions, drafting formal Malaysian-style minutes, flagging gaps and completing a verification checklist before circulation.                               | Education officers, JPN and public sector             | Official-document practice, privacy        |
| S07 | **Penganalisis Pekeliling dan Dokumen Dasar** (_Circular and Policy Document Analyser_) | Produces a traceable briefing from an official document: purpose, affected groups, obligations, deadlines, actions and unresolved questions, with page or section references and a strict rule against inventing policy meaning.                   | Education officers, JPN and public sector             | Policy/subject specialist, confidentiality |
| S08 | **Penjana Kertas Kerja Program** (_Programme Paper Generator_)                          | Takes programme goals, audience, schedule, resources and constraints through a structured workflow to create a formal kertas kerja draft containing rationale, objectives, activities, governance, budget placeholders, risks and approval checks. | Education officers, public sector and programme teams | Official format, finance placeholders      |
| S09 | **Pembina Laporan Aktiviti dan Impak** (_Activity and Outcome Report Builder_)          | Organises verified programme evidence into an activity report covering delivery, participation, outputs, outcomes, issues, lessons and follow-up actions while separating observed facts from interpretation.                                      | Education officers, public sector and programme teams | Evidence quality, privacy                  |

### SMEs and professionals — 3

| ID  | Working title                                                                                | Outcome-focused description                                                                                                                                                                                                   | Primary audience                      | Additional review                   |
| --- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------- |
| S10 | **Pembina Cadangan Perniagaan** (_Business Proposal Builder_)                                | Guides an SME or professional from a client brief to a persuasive proposal with problem framing, proposed approach, deliverables, timeline, pricing placeholders, assumptions, risks and a final consistency review.          | SMEs, entrepreneurs and professionals | Commercial claims, pricing review   |
| S11 | **Pembina Laporan Pengurusan Berasaskan Data** (_Data-Informed Management Report Builder_)   | Converts a verified table and operational notes into a management report with defined metrics, comparisons, notable movements, caveats and recommended actions, without inventing causes or presenting estimates as facts.    | SME managers and professionals        | Data quality, financial sensitivity |
| S12 | **Pembina Panduan Respons Khidmat Pelanggan** (_Customer-Service Response Playbook Builder_) | Helps a team turn policies, service standards and common scenarios into an approved response playbook with tone guidance, reusable patterns, escalation rules and quality checks across email, messaging and social channels. | SMEs, entrepreneurs and service teams | Privacy, consumer claims, brand     |

## B. LLM Prompts — 14 focused copy-and-use prompts

### Education — 5

| ID  | Working title                                                                                            | Outcome-focused description                                                                                                                                                        | Primary audience                   | Additional review        |
| --- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------ |
| P01 | **Tulis Objektif Pembelajaran dan Kriteria Kejayaan** (_Write Learning Objectives and Success Criteria_) | Converts a teacher-provided topic or DSKP extract into observable learning objectives and student-friendly success criteria, with unclear assumptions explicitly flagged.          | Teachers and educators             | Curriculum               |
| P02 | **Jana Soalan KBAT dengan Panduan Jawapan** (_Generate Higher-Order Questions with Answer Guidance_)     | Creates a balanced set of higher-order questions from supplied teaching content, including intended thinking level, indicative answers and a quick ambiguity check.                | Teachers and educators             | Curriculum, assessment   |
| P03 | **Pelbagaikan Aktiviti Mengikut Keperluan Murid** (_Differentiate an Activity for Learner Needs_)        | Adapts one existing classroom activity into practical support, core and extension versions while preserving the same learning objective.                                           | Teachers and educators             | Inclusion, accessibility |
| P04 | **Draf Mesej kepada Ibu Bapa atau Penjaga** (_Draft a Parent or Guardian Message_)                       | Produces a concise, respectful message about an event, reminder, general progress matter or required action, using neutral language and excluding unnecessary student information. | Teachers and school administrators | Privacy, safeguarding    |
| P05 | **Refleksi Selepas Pengajaran** (_Post-Lesson Reflection_)                                               | Turns a teacher’s brief observations into a structured reflection covering evidence of learning, what worked, barriers and one realistic adjustment for the next lesson.           | Teachers and educators             | Standard editorial       |

### Education administration and public sector — 5

| ID  | Working title                                                                                                   | Outcome-focused description                                                                                                                                                                  | Primary audience                               | Additional review             |
| --- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------- |
| P06 | **Draf Surat Rasmi** (_Draft a Formal Official Letter_)                                                         | Produces a formal Bahasa Melayu letter from verified facts, purpose, recipient and requested action, while marking missing references, dates or approvals instead of guessing them.          | Education officers, JPN and public sector      | Official-document practice    |
| P07 | **Ringkaskan Pekeliling kepada Tindakan Utama** (_Summarise a Circular into Key Actions_)                       | Converts a supplied circular or policy excerpt into a short summary of purpose, affected parties, required actions, deadlines and questions requiring clarification, with source references. | Education officers, JPN and public sector      | Policy/subject specialist     |
| P08 | **Ekstrak Keputusan dan Tindakan daripada Nota Mesyuarat** (_Extract Decisions and Actions from Meeting Notes_) | Turns de-identified notes into an action register containing the decision, action, owner, deadline and unresolved information; it does not attempt to create full formal minutes.            | Administrators and secretariats                | Privacy, factual verification |
| P09 | **Tulis Objektif, Hasil dan Petunjuk Program** (_Write Programme Objectives, Outcomes and Indicators_)          | Converts a programme idea into distinct objectives, intended outcomes and measurable indicators while identifying indicators that are not realistically measurable with available evidence.  | Programme officers and managers                | Monitoring/evaluation         |
| P10 | **Sediakan Nota Taklimat Pengurusan** (_Prepare a Management Briefing Note_)                                    | Structures verified information into a one-page briefing with issue, context, implications, options, recommendation and decisions required.                                                  | Education officers, public sector and managers | Organisational sensitivity    |

### SMEs and professionals — 4

| ID  | Working title                                                                                              | Outcome-focused description                                                                                                                                                  | Primary audience                        | Additional review                    |
| --- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------ |
| P11 | **Balas Pertanyaan atau Aduan Pelanggan** (_Respond to a Customer Enquiry or Complaint_)                   | Drafts an empathetic, policy-aligned customer reply that acknowledges the issue, explains the next action and avoids promises the organisation has not authorised.           | SMEs, entrepreneurs and service teams   | Privacy, consumer claims             |
| P12 | **Rancang Kalendar Kandungan Media Sosial** (_Plan a Social-Media Content Calendar_)                       | Produces a practical multi-week content calendar from campaign goals, audience, channels and capacity, with themes, formats, calls to action and realistic production notes. | SMEs, entrepreneurs and marketing teams | Brand and claims review              |
| P13 | **Analisis Ringkas Prestasi Jualan** (_Analyse Sales Performance_)                                         | Examines a user-supplied sales table to identify verified comparisons, segments and anomalies, then separates evidence from hypotheses and lists follow-up questions.        | SME owners, sales teams and managers    | Data quality, commercial sensitivity |
| P14 | **Sediakan Kemas Kini Pengurusan Mingguan atau Bulanan** (_Prepare a Weekly or Monthly Management Update_) | Converts team notes and verified metrics into a concise update covering progress, risks, decisions needed, next steps and owners in a consistent management format.          | Managers and professionals              | Organisational sensitivity           |

## C. Image Prompt Collections — 7 visual-first resources

Each entry is a collection with a representative preview, editable variables, generator notes and several related prompt variations.

| ID  | Working title                                                                                             | Outcome-focused description                                                                                                                                                                                            | Primary audience/use                | Additional review                     |
| --- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- |
| I01 | **Ilustrasi Pendidikan dalam Konteks Malaysia** (_Educational Illustrations in Malaysian Contexts_)       | Creates clear, age-appropriate illustrations for concepts, worksheets and classroom materials using recognisably Malaysian environments without relying on cultural stereotypes or unnecessary text generation.        | Teachers; classroom materials       | Education, cultural representation    |
| I02 | **Visual Bilik Darjah dan Latihan yang Autentik** (_Authentic Classroom and Training Visuals_)            | Produces documentary-style scenes of Malaysian learning and professional-training environments for course pages, reports and workshop materials, with guidance on diverse and credible representation.                 | Educators and training teams        | Privacy cues, cultural representation |
| I03 | **Imej Utama untuk Pembentangan dan Pitch Deck** (_Presentation and Pitch-Deck Hero Images_)              | Generates clean, presentation-ready hero images and conceptual visuals with deliberate copy space, controlled palettes and variants for education, public-sector and SME narratives.                                   | Officers, SMEs and professionals    | Brand, factual symbolism              |
| I04 | **Poster Program dan Acara** (_Programme and Event Posters_)                                              | Creates flexible poster key visuals for workshops, school programmes, community events and professional initiatives, leaving typography and official details for a design tool.                                        | Education, public sector and SMEs   | Brand, cultural representation        |
| I05 | **Infografik dan Visualisasi Data Berpandukan Fakta** (_Evidence-Grounded Infographics and Data Visuals_) | Provides prompt structures for infographic layouts based only on supplied facts or verified data, with clear hierarchy and an explicit workflow for adding accurate labels outside the generator when necessary.       | Officers, educators and managers    | Data accuracy, accessibility          |
| I06 | **Kempen Visual Media Sosial** (_Social-Media Visual Campaigns_)                                          | Builds a coherent family of social visuals—announcement, educational tip, reminder and call to action—from one campaign concept while maintaining brand consistency across common aspect ratios.                       | SMEs, programme teams and marketers | Brand, claims, representation         |
| I07 | **Fotografi Produk untuk SME** (_Product Photography for SMEs_)                                           | Creates commercially useful product-image concepts including clean catalogue, lifestyle and promotional compositions, with lighting, surface, lens and exclusion guidance for common Malaysian SME product categories. | SMEs and entrepreneurs              | Product accuracy, advertising claims  |

## D. Video Prompt Collections — 3 visual-first resources

| ID  | Working title                                                                                                 | Outcome-focused description                                                                                                                                                                                         | Primary audience/use                        | Additional review                        |
| --- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| V01 | **Video Promosi Ringkas untuk Program dan Acara** (_Short Programme and Event Promotion Videos_)              | Provides 10–20 second prompt sequences for announcing a programme, showing its intended experience and ending with clean space for verified event details added during editing.                                     | Education and public-sector programme teams | Brand, representation, factual claims    |
| V02 | **Video Promosi Produk untuk SME** (_Short Product Promotion Videos for SMEs_)                                | Creates short product-focused sequences with controlled camera movement, lighting, action, pacing and end-frame composition for social advertising without inventing product features or results.                   | SMEs and entrepreneurs                      | Product accuracy, advertising claims     |
| V03 | **Video Penerangan Mikro untuk Pendidikan dan Latihan** (_Micro-Explainer Videos for Education and Training_) | Produces short visual sequences for explaining one concept or process through simple shots, overlays planned for post-production and accessible pacing rather than relying on generated text or narration accuracy. | Teachers, trainers and communications teams | Education, accessibility, factual review |

## Intentional relationships and overlap boundaries

| Related resources   | Boundary                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| S01 and P01/P03/P05 | S01 is an end-to-end RPH workflow; the prompts solve individual planning or reflection tasks.                           |
| S03 and P02         | S03 produces and checks a complete assessment set; P02 creates a focused set of KBAT questions.                         |
| S05 and P04         | S05 creates feedback from learning evidence; P04 drafts a communication message and must not infer student performance. |
| S06 and P08         | S06 creates verified formal minutes; P08 extracts only an action register.                                              |
| S07 and P07         | S07 is a traceable analysis workflow; P07 produces a concise action summary from a supplied document.                   |
| S08 and P09         | S08 produces a complete programme paper; P09 focuses only on objectives, outcomes and indicators.                       |
| S11 and P13/P14     | S11 produces a fuller management report; P13 analyses one sales table and P14 formats a recurring update.               |
| S12 and P11         | S12 creates an organisational playbook; P11 drafts one response under an existing policy.                               |

## Production sequence used

The catalogue began with an **anchor batch of 10** that tested every content type and primary audience:

1. S01 — RPH Generator
2. S06 — Formal Meeting Minutes Assistant
3. S10 — Business Proposal Builder
4. P04 — Parent or Guardian Message
5. P06 — Formal Official Letter
6. P11 — Customer Enquiry or Complaint Response
7. I01 — Malaysian Educational Illustrations
8. I04 — Programme and Event Posters
9. I07 — SME Product Photography
10. V01 — Programme and Event Promotion Videos

The anchor batch was reviewed for tone, depth, localisation, visual quality, safety guidance and testing evidence. Six education-planning and assessment resources followed. After the user approved proceeding without small batches, the final 20 resources were drafted together using those established patterns. Resource-level review and publication gates remain independent for every item.

## Approval gate

**Inventory gate status: Cleared on 2026-10-25.**

- [x] The product owner has reviewed all 36 entries.
- [x] Every entry is approved.
- [x] The 36-resource mix and audience balance are accepted.
- [ ] Specialist reviewers are identified for education, public-sector and sensitive-data resources.
- [x] The 10-resource anchor-batch selection is confirmed.
- [x] Ten bilingual anchor-batch records have been drafted in Markdown.
- [x] The anchor batch has been reviewed and approved as the production pattern for the remaining catalogue; individual publication gates remain open.

Production note: all 36 approved concepts now have completed bilingual records and received accountable Forward College internal approval from Howie Chang on 2026-10-25. The first post-anchor education batch was tested in Gemini Auto on 2026-10-25: S02 and P02 are `tested`, while S03, P01, P03 and P05 are `limited`. The remaining text resources retain `expected` Gemini compatibility where behavioural testing could not be completed. Four new Image collections have original ChatGPT Image previews, and two Video collections have still storyboards only. There are 12 source-only Skill packages and 12 matching versioned internal-preview ZIP artifacts. The catalogue is structurally ready for application integration. Licence confirmation, outstanding tool tests and public publication approval remain pending; see `docs/content-review/catalogue-build-readiness.md` and `docs/content-review/full-catalogue-completion.md`.
