# Design QA — Phase 2 catalogue-first vertical slice

Date: 2026-10-25
Route/state: `/ms`, signed out, AI Skills collection, default filters
Source visual truth: `/Users/howiechang/.codex/generated_images/01a15aac-4c6e-7d43-98e7-b0105252d8ba/exec-01602d43-731c-4c52-a1ad-82a5bcccde13.png`
Implementation screenshot: `/private/tmp/kemahiran-option2-final-desktop-v2.png`
Mobile implementation screenshot: `/private/tmp/kemahiran-option2-final-mobile-v2.png`
Full-view comparison: `/private/tmp/kemahiran-option2-final-comparison.png`
Focused comparison: `/private/tmp/kemahiran-option2-focused-comparison.png`

## Capture normalisation

- Source image: 1487 × 1058 px.
- Source was proportionally normalised to 1440 × 1024 px for desktop comparison.
- Desktop implementation: 1440 × 1024 CSS px at device scale factor 1.
- Mobile implementation: 390 × 900 CSS px at device scale factor 1.
- At the mobile capture, the document client and scroll widths were both 375px after the browser scrollbar was reserved; no horizontal document overflow was present.

## Full-view comparison evidence

The implementation preserves the selected design’s major composition: a 248px dark library rail, warm ivory main canvas, compact collection introduction and real count, immediate search and audience controls, a text-only editor-pick band, and dense metadata-led resource rows. Skills, LLM Prompts and visual prompts retain distinct accents without introducing mandatory thumbnails for text resources.

Intentional product differences from the generated concept:

- Counts use the real approved catalogue totals rather than invented 120/86/42 values.
- Upgrade and paid-plan controls were removed because payments are an MVP non-goal.
- Unimplemented Phase 4 account actions are shown as disabled rather than linking to broken routes.
- The list contains only AI Skills on the Skills view; the concept image mixed resource types for visual exploration.
- The language and sign-in controls live at the bottom of the navigation rail in this slice rather than a separate desktop utility bar.

## Focused-region comparison evidence

The focused search/filter/editor-pick/list comparison confirms that the implementation matches the reference hierarchy and density. Search remains the dominant control, filters form a compact second line, the featured band is subordinate to search, and resource metadata aligns in stable columns. The implementation uses slightly stronger body contrast and narrower search/result spacing to improve accessibility and keep more of the catalogue in the first viewport.

## Required fidelity surfaces

- **Fonts and typography:** Inter is used for display, body and interface text; JetBrains Mono is restricted to compact labels, indices, dates and counters. Heading weight, compact uppercase labels, readable body text and monospaced metadata form a clear hierarchy. No truncation affects essential titles.
- **Spacing and layout rhythm:** Desktop rail width, content margins, control height, editor-pick band and list density are materially aligned with the source. Mobile reflows to one usable column without document overflow.
- **Colours and visual tokens:** Deep navy, warm ivory, blue interaction states, chartreuse Skill accents, indigo Prompt accents and amber Visual accents match the approved direction. Semantic labels accompany all colour cues.
- **Image quality and asset fidelity:** The selected catalogue view contains no required resource photography or illustration. Standard interface and product-action symbols use Phosphor Icons throughout. The temporary typographic `K.` mark remains a prototype brand treatment pending approved brand assets.
- **Copy and content:** The implementation uses real Malay-first titles, summaries, audiences, tools, difficulty and review dates from the repository. Previously exposed English tag identifiers were replaced with Malay labels where shown.

## Comparison history

### Iteration 1

- **P2 — catalogue began too low in the viewport.** The first implementation added a redundant result heading and view switch not present in the selected concept.
- **Fix:** Removed the extra visible result header, tightened the introduction/search spacing and retained an accessible screen-reader result heading/count.
- **Post-fix evidence:** `/private/tmp/kemahiran-option2-comparison-v2.png` shows the first resource rows moving materially closer to the selected reference position.

- **P2 — Malay interface exposed English tag identifiers.** Early rows showed labels such as “Student Feedback” and “Meeting Minutes”.
- **Fix:** Added Malay display labels for visible Skill tags while retaining underlying stable taxonomy identifiers.
- **Post-fix evidence:** `/private/tmp/kemahiran-option2-final-desktop-v2.png` shows Malay labels such as “Minit mesyuarat”, “Keputusan” and “Maklum balas murid”.

### Iteration 2

- **P2 — mobile-width safety required explicit verification.** A reused Chrome screenshot session appeared clipped and did not reliably represent the actual layout.
- **Fix:** Added explicit root/shell width containment, captured through a clean CDP viewport, and measured client and scroll widths directly.
- **Post-fix evidence:** `/private/tmp/kemahiran-option2-final-mobile-v2.png` shows the language control, mobile menu, search, sort, filters, editor-pick band and resource rows within the viewport. The measured document client and scroll widths both equal 375px.

## Interaction and browser checks

- Mobile menu opens and exposes the full navigation rail content.
- Advanced-filter control changes `aria-expanded` to `true` and renders its labelled panel.
- Searching `rancangan` filters the list to one result: “Penjana Rancangan Pengajaran Harian”.
- Favourite control changes from `aria-pressed="false"` to `aria-pressed="true"`.
- Desktop and 390px mobile production-preview captures completed.
- No runtime exception was observed. Chrome logged only the missing favicon request; this is recorded below as P3 polish.

### Styling and Phosphor migration check — 2026-10-26

- The rebuilt `/ms` homepage was inspected at 1440 × 900 and 375 × 667 CSS pixels.
- The rebuilt `/en` homepage was inspected at 820 × 900 CSS pixels.
- The mobile navigation opened correctly, retained the full collection menu and used the Phosphor close state.
- The audience-chip overflow cue remained visible on mobile, and the approved catalogue structure and metadata columns remained intact.
- No Lucide imports remain in application source. The installed Phosphor React package is used through its server-rendering entry point.
- Captures: `/private/tmp/kemahiran-phosphor-desktop-ms.png`, `/private/tmp/kemahiran-phosphor-mobile-ms.png` and `/private/tmp/kemahiran-phosphor-tablet-en.png`.

## Findings

No actionable P0, P1 or P2 mismatch remains in the approved vertical slice.

## Follow-up polish

- **P3:** Replace the temporary typographic `K.` mark and add a favicon when approved Forward Labs/Kemahiran.AI brand assets are supplied.
- **P3:** Add the complete shareable URL state for client filters during the remaining Phase 2 discovery work.
- **P3:** Add automated browser accessibility coverage when the Phase 2 Playwright suite is introduced.

## Implementation checklist

- [x] Catalogue-first desktop shell matches the selected direction.
- [x] Text-led resource rows use real repository content.
- [x] Search, audience filters, sorting, advanced filter and favourite state respond.
- [x] Mobile navigation and 390px reflow are usable.
- [x] Formatting, lint, TypeScript, unit tests, content validation and production build pass.

final result: passed
