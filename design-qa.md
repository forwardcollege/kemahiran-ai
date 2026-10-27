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

- **P3:** Replace the temporary typographic `K.` mark and add a favicon when approved Forward College/Kemahiran.AI brand assets are supplied.
- **P3:** Add the complete shareable URL state for client filters during the remaining Phase 2 discovery work.
- **P3:** Add automated browser accessibility coverage when the Phase 2 Playwright suite is introduced.

## Implementation checklist

- [x] Catalogue-first desktop shell matches the selected direction.
- [x] Text-led resource rows use real repository content.
- [x] Search, audience filters, sorting, advanced filter and favourite state respond.
- [x] Mobile navigation and 390px reflow are usable.
- [x] Formatting, lint, TypeScript, unit tests, content validation and production build pass.

final result: passed

---

# Design QA — About page

Date: 2026-10-27
Route/state: `/ms/about` and `/en/about`, signed out, approved catalogue content visible in navigation
Source visual truth: live reference `https://www.superr.ai/our-story` captured as `/private/tmp/kemahiran-about-source-top.png` and `/private/tmp/superr-strip-smooth-reference-matched.png`
Implementation screenshots: `/private/tmp/kemahiran-about-desktop-top-v2.png`, `/private/tmp/kemahiran-about-shadow-removed.png`, `/private/tmp/kemahiran-about-mobile-ms-top.png`, `/private/tmp/kemahiran-about-mobile-ms-strip.png`, `/private/tmp/kemahiran-about-mobile-en-top.png` and `/private/tmp/kemahiran-about-mobile-en-strip.png`
Combined comparison: `/private/tmp/kemahiran-superr-smooth-shadow-comparison.png`

## Capture normalisation

- The final focused desktop comparison uses source and implementation captures from the in-app browser at the same viewport and interaction state. Both inputs are 1265 × 712 pixels at device pixel ratio 1 and are stacked in one 1265 × 1424 comparison image.
- Mobile Malay and English captures use an exact 390 × 900 CSS viewport and device pixel ratio 1 through Chrome DevTools Protocol. The screenshot pixels are also 390 × 900.
- At 390px, `innerWidth`, document `clientWidth` and document `scrollWidth` all equal 390px in both languages. No horizontal document overflow is present.

## Full-view comparison evidence

The implementation preserves the reference's main editorial structure: a narrow narrative column, generous warm-white negative space, a single image intervention between story sections and a restrained typographic sign-off. Kemahiran.AI retains its approved application navigation, Inter type system and stronger headline weight rather than reproducing Superr's brand identity.

Intentional product differences from the reference:

- The persistent Kemahiran.AI library navigation remains visible on desktop because the About page lives inside the approved Phase 2 application shell.
- The headline uses the product's existing bold sans-serif hierarchy instead of Superr's serif display face.
- The image strip contains five original Kemahiran.AI workshop illustrations. At a given viewport, only the centred panel and neighbouring portions are visible; progressively more is revealed as the browser widens.

## Focused-region comparison evidence

The image strip was compared separately because border weight, aspect ratio, shadow and responsive cropping are the defining visual details. The implementation matches the reference pattern with consistent 8:5 frames, a warm mat, dark double-edge treatment, slight per-panel rotation, one crisp offset shadow, horizontal clipping and unframed page whitespace around the strip. All five source assets are 1600 × 1000 pixels. The centred stage image keeps the Malaysian flag visible on its pole.

## Required fidelity surfaces

- **Fonts and typography:** Inter remains consistent with the existing Kemahiran.AI design system. The large, compact headline and readable 1.82 body line height produce a clear editorial hierarchy in Malay and English without truncation.
- **Spacing and layout rhythm:** The narrative column is capped at 47rem, paragraphs keep consistent spacing and the full-width strip creates the same text–image–text rhythm as the reference. Mobile reflows to one column while the centre image remains dominant.
- **Colours and visual tokens:** Warm ivory, deep navy and cobalt reuse approved site tokens. The image mat is a slightly warmer ivory, with dark borders and a single neutral offset shadow that mirrors the reference without imitating its brand colours.
- **Image quality and asset fidelity:** Five generated illustrations were derived from user-supplied workshop photographs and normalised to 1600 × 1000. Third-party logos and readable presentation text were removed or abstracted. Alternative text is localized and describes the workshop context. Media provenance and the pre-publication release check are recorded in `docs/media/about-page.md`.
- **Copy and content:** The approved bilingual story is present in full, including responsible AI, Forward College's employment focus, subsidies, the RM3,200 starting-salary statement and Howie Chang's CEO/Co-Founder sign-off. The body contains only one intentional Forward College call-to-action link at its closing note.

## Comparison history

### Initial comparison

- No actionable P0, P1 or P2 mismatch was found. The navigation shell and product typography are intentional system-level differences, while the story rhythm and image treatment follow the source closely.
- One browser warning identified an unconfigured custom Next Image quality. `images.qualities` now includes 88, and a fresh production-preview tab reports no console warnings or errors.

### Iteration 2 — carousel fidelity and interaction

- User review identified that the original rotations were too subtle, the panels sat too close together, the copy-to-strip spacing was too generous and the strip did not expose enough of the remaining story images.
- Panel angles were strengthened to a varied `-4.2deg` to `+4.3deg` pattern, horizontal gaps were widened and the vertical margin/padding around the strip was reduced. The resulting rhythm follows the reference more closely while keeping every frame at the same 8:5 ratio.
- The strip now uses native horizontal overflow for touch and trackpad interaction, mouse pointer dragging and left/right keyboard controls. Three rendered cycles create a seamless manual loop, while duplicate cycles are hidden from assistive technology so the accessible list still contains only the five unique photographs.
- The centred stage photograph remains the initial focus and retains the Malaysian flag. After seven right-arrow advances—more than one full set—the nearest frame remained inside the middle cycle, confirming that the carousel wrapped instead of reaching an endpoint.
- A 390 × 900 touch-emulation check moved the Malay strip from `scrollLeft: 2327` to `scrollLeft: 2659`. The document width remained exactly 390px, confirming swipe interaction without page-level horizontal overflow.
- The browser annotation requesting a larger desktop wordmark was handled proportionally inside the existing sidebar brand area; the compact mobile header remains unchanged.

### Iteration 3 — seamless transform loop and Superr-style momentum

- User testing revealed that the native-scroll implementation visibly jumped back at its cycle boundary and felt stepped because scroll snapping competed with dragging.
- Inspection of the live Superr implementation confirmed its defining mechanics: a transformed track rather than native horizontal scrolling, seven repeated image groups, no snap points, zero drag elasticity, release momentum and position normalisation only after the glide finishes.
- The strip was rebuilt around the same interaction model. It now drags a GPU-transformed seven-cycle track, follows the pointer directly, continues with eased release momentum and normalises to an equivalent middle-cycle position only after motion settles. The repeated content makes that transform reset visually indistinguishable from uninterrupted movement.
- A matched desktop drag showed continuous transform updates through release (`-6335px`, `-6677px`, `-7069px`, `-7519px`, `-8011px`, `-8314px`) before the equivalent-cycle normalisation to `-5895px`. Repeated left and right drags remained in the safe middle cycles without exposing an endpoint.
- The exact 390 × 900 touch check also showed continued momentum after release in both languages. Malay moved from `-3988px` to `-4828px` during momentum before normalising to an equivalent `-3656px` position; the document width remained 390px with no page-level horizontal overflow.
- Duplicate cycles remain hidden from assistive technology, leaving only five unique localized images in the accessibility tree. Arrow-key navigation uses the same smooth transform path, while reduced-motion users receive an immediate equivalent position change.

### Iteration 4 — shadow simplification

- User review identified a second faint blurred shadow behind the crisp photo shadow. The CSS confirmed two separate shadow layers.
- The blurred layer was removed on desktop and mobile while preserving the crisp offset shadow, border, warm mat and rotations. The production browser now reports one computed shadow only: `10.4px 12px 0px` with no blur radius.
- The final matched 1265 × 712 comparison is saved as `/private/tmp/kemahiran-superr-smooth-shadow-comparison.png`; no actionable frame-treatment mismatch remains.

## Interaction and browser checks

- Malay and English routes render with reciprocal metadata and localized copy.
- The desktop language control navigates from `/ms/about` to `/en/about` and back while retaining the About route.
- The About item is active in desktop navigation and available in the footer.
- Mobile navigation, locale control, heading hierarchy and central image crop remain visible at 390 × 900.
- Mouse dragging, release momentum, seamless normalisation, bidirectional repetition and exact-width mobile touch dragging were verified on the final transform implementation.
- A fresh production page was inspected after the final build. Previously captured development-only Fast Refresh entries were excluded from the production result; the rendered production page itself introduced no warnings or errors.

## Findings

No actionable P0, P1 or P2 mismatch remains.

## Follow-up polish

- **P3:** Confirm any required participant, venue and event permissions before public deployment, as recorded in the media provenance note.

## Implementation checklist

- [x] Bilingual About routes and metadata are present.
- [x] One continuous five-image strip uses consistent 1600 × 1000 assets across seven visual cycles and repeats seamlessly without duplicating accessible content.
- [x] CSS supplies the border, warm mat, rotations and one crisp offset shadow with no faint blur layer.
- [x] Malay and English desktop and 390px mobile layouts were inspected.
- [x] Touch, keyboard loop, language switching, navigation state and localized alternative text were verified.
- [x] Formatting, lint, TypeScript, unit tests, content validation and production build pass.

final result: passed

---

# Design QA — Responsive header lockup and mobile menu spacing

Date: 2026-10-27
Route/state: `/ms/about`, signed out, mobile/tablet header closed and menu open
Source visual truth: `/private/tmp/footer-logo-source.png` (the existing footer lockup rendered by the local application)
Implementation screenshot: `/private/tmp/mobile-header-after.png`
Open-menu screenshot: `/private/tmp/mobile-menu-after.png`
Combined comparison: `/private/tmp/logo-lockup-comparison.png`

## Capture normalisation

- Source and implementation images are both 616 × 760 px captures from the Codex in-app browser.
- CSS capture size is 616 × 760 px at device scale factor 1; no density normalisation was required.
- The source footer and implementation header were captured in the same browser, route, locale and signed-out state.

## Full-view comparison evidence

The combined comparison places the mobile/tablet header beside the rendered footer lockup. Both use a 24px magic-wand icon, an 8px icon-to-wordmark gap and a 20px, 900-weight wordmark. Their background and surrounding controls intentionally differ because the header and footer are separate page regions.

## Focused-region comparison evidence

The logo lockups are clearly readable in the combined comparison, so a smaller crop was unnecessary. The open-menu screenshot separately confirms a 20px gap between the active About item and the account/language control group.

## Findings and comparison history

- **Resolved P2 — header lockup proportions differed from the footer.** The mobile/tablet header previously used a 35.2px mark container, a 10.4px gap and a 16.32px wordmark. It now uses the footer's exact 24px icon, 8px gap, 20px wordmark and tight letter spacing. Post-fix evidence: `/private/tmp/logo-lockup-comparison.png`.
- **Resolved P2 — account controls touched the final navigation item.** A 20px group gap now separates navigation from account actions. Post-fix evidence: `/private/tmp/mobile-menu-after.png`.
- **Fonts and typography:** the same Inter family, 900 weight, 20px size and tight tracking are used in both lockups.
- **Spacing and layout rhythm:** icon size and gap are matched; the menu grouping is distinct without altering navigation density.
- **Colours and visual tokens:** existing foreground and primary tokens remain unchanged for the light header and dark footer contexts.
- **Image quality and asset fidelity:** both lockups continue to use the same Phosphor magic-wand vector icon; no replacement asset was introduced.
- **Copy and content:** `Kemahiran.AI`, locale controls and navigation labels are unchanged.
- **Desktop:** no desktop-sidebar selector or desktop lockup rule was modified.

## Implementation checklist

- [x] Match mobile/tablet header lockup to footer sizing and spacing.
- [x] Add separation above mobile account and language controls.
- [x] Preserve the desktop sidebar lockup.
- [x] Verify closed-header and open-menu states in the in-app browser.
- [x] Pass formatting, linting, TypeScript, 27 tests and production build.

## Follow-up polish

No remaining P3 item was identified for this scoped change.

final result: passed
