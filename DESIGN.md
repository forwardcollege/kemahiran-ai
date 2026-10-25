# Kemahiran.AI — Interface Design System

Status: Approved Phase 2 direction
Owner: Forward Labs
Institutional endorsement: Powered by Forward College
Last updated: 2026-10-26

## 1. Approved direction

Kemahiran.AI uses a **catalogue-first library interface**. The default page starts with all searchable resources rather than a marketing landing page or a single content type. Users should see the full catalogue size and be able to identify, filter and open a useful resource within the first viewport.

The approved direction is based on the second Phase 2 design option reviewed by Howie Chang on 2026-10-25:

- a persistent dark navigation rail on desktop;
- a compact mobile header and menu at smaller widths;
- an all-resources homepage followed by direct access to the three content libraries;
- a strong search field followed by audience and task filters;
- dense, text-led resource rows rather than promotional cards;
- a warm editorial visual language with precise borders, strong typography and limited accent colour.

This direction may borrow general product patterns from reference sites, but must not copy their proprietary assets, logos, wording or distinctive branded compositions.

### Styling reference adaptation

The styling system described in `continuous-data-platform-1-DESIGN.md` was approved as a reference on 2026-10-26. Kemahiran.AI adopts its disciplined colour roles, typographic clarity, compact radius system and restrained motion—not its product structure, dashboard composition or data-platform content.

This adaptation must preserve:

- the catalogue-first information architecture and page order in this document;
- the desktop rail, mobile header, responsive grids and dense resource rows;
- shadcn/ui as the component foundation;
- the three library-specific semantic treatments; and
- the existing accessibility and content boundaries.

Reference-specific directions concerning CTA-page composition, dashboards, charts, WebGL, particles or ambient data effects do not apply to Kemahiran.AI. The reference is visual inspiration, not a replacement specification.

## 2. Design principles

1. **The complete catalogue is the homepage.** Lead with all resources and the real total count; use the three libraries as focused views.
2. **Search and browse are primary actions.** Keep search, library switching and common filters visible near the top.
3. **Text resources are text-led.** Skills and LLM Prompts use typography, icons and metadata; they do not require decorative thumbnails.
4. **Visual resources remain visual where useful.** Image and Video Prompt detail pages require representative previews. Index pages may use compact previews selectively, but a preview must earn its space.
5. **Dense, not cramped.** Resource rows should support fast scanning while keeping readable type, 44px interactive targets and clear grouping.
6. **Malay first.** Malay is the default interface. The English version keeps the same identity, structure and resource context.
7. **Distinct libraries, one system.** Skills, LLM Prompts and visual prompts use different accent treatments without becoming separate products.
8. **Customised shadcn/ui.** Use shadcn primitives for behaviour and accessibility, then apply the tokens and composition in this document. Do not leave components looking like the default starter theme.

## 3. Page structure

### Desktop shell

- Navigation rail: approximately 248px wide, full viewport height and independently scrollable when needed.
- Main content: flexible width with 32–48px page padding depending on viewport.
- Rail groups: Collections, personal/utilitarian links, open-access note, sign-in and language control.
- The active destination must be indicated by text, icon treatment and surface—not colour alone.

### Mobile shell

- Replace the rail with a 68px sticky header.
- Provide product identity, language access and a full-screen menu.
- Keep search and filters immediately below the compact page introduction.
- Resource metadata may collapse, but title, summary, audience or difficulty, and favourite action must remain understandable.

### Catalogue page order

1. Short collection label, H1, one-sentence description and real resource count.
2. Search field with explicit action.
3. Common audience filters, sort and advanced-filter control.
4. Result heading, count and list controls.
5. Text-led resource rows.
6. Clear no-results recovery state.

Do not show an editor's-choice or recommendation treatment until Forward College has made and documented a real editorial selection.

## 4. Resource-row anatomy

Each row should communicate:

- sequence or index marker;
- content-type icon and label;
- outcome-focused title;
- concise summary;
- up to three useful tags;
- primary audience;
- supported or tested tools;
- difficulty;
- last-reviewed date; and
- favourite action.

The whole title is a link. Do not hide essential information behind hover. Focus, hover, selected and saved states must be visible and accessible.

## 5. Visual language

### Palette

- Canvas: warm ivory, not clinical white.
- Primary ink and navigation rail: deep navy anchored to `#0B1120`, with off-white text on dark surfaces.
- Universal interactive highlight: clear blue anchored to `#3B82F6` for links, focus treatments and selected details. Filled controls must use a tested foreground/background pair; do not assume white text passes on every blue shade.
- Strong selected or secondary interactive state: indigo anchored to `#4338CA`.
- Skills accent: vivid leaf/chartreuse green.
- LLM Prompt accent: indigo, visually separated from the universal blue through label, icon and context.
- Visual Prompt accent: warm amber.
- Muted colour family: slate inspired by `#94A3B8`. Use that lighter value on dark surfaces only; use a darker slate such as `#475569` for small text on the ivory canvas.
- Borders: cool light slate on the ivory canvas and `#27272A` or an equivalent tested dark-surface border in the rail.
- Footer: charcoal indigo anchored to `#171A2E`, visibly distinct from the navigation rail. Its wordmark repeats the standalone blue magic-wand mark and the same blue `.AI` treatment used in the header.
- Main content surfaces remain ivory or near-white. Do not convert the whole catalogue to the reference's dark colour mode.

Accent colours are semantic cues and must always be paired with a label or icon.

### Typography

- Use Inter as the primary display, body and interface family for consistent rendering across platforms.
- Use JetBrains Mono, or a metrically compatible monospace fallback, only for short labels, resource indices, dates, counters and compact technical metadata.
- Use a confident optical weight for headings while keeping Malay diacritics and longer bilingual strings clear.
- Body and interface text prioritise clarity at small sizes.
- Keep display headings within the existing responsive scale; do not import the reference's 64px marketing display size into catalogue pages.
- Avoid oversized display type that pushes search, filters or resources below the fold.

### Spacing and density

- Use an 8px base rhythm for spacing, with 16px as the common internal gap and 24px reserved for larger grouped surfaces.
- Retain the current 32–48px responsive page padding rather than the reference's 80px marketing-section spacing.
- Keep resource rows dense enough for scanning, with a minimum 44px interactive target wherever the row contains an action.
- Do not alter the approved grid, breakpoint or responsive stacking model merely to adopt the new visual treatment.

### Shape and elevation

- Standardise common cards and controls around an 8px radius. Use 12px only for larger grouped surfaces where the hierarchy benefits.
- Pills are reserved for filters, tags and compact statuses.
- Prefer borders, alignment and tonal surfaces over large drop shadows.
- Avoid cards nested inside cards and decorative UI shapes that do not convey meaning.

### Icons and imagery

- Use [Phosphor Icons](https://phosphoricons.com) exclusively for interface and product-action icons.
- Do not mix Phosphor with Lucide, Heroicons or another general interface-icon set. The Phase 2 preview was migrated to Phosphor on 2026-10-26; new interface code must not reintroduce Lucide or another general interface-icon set.
- Use one consistent Phosphor weight within a component family. Regular is the default; use a stronger or filled weight only when it communicates a selected, saved or otherwise meaningful state.
- Keep icon sizing and optical alignment consistent across navigation, filters, resource types and actions. Icon-only controls require an accessible name and must not rely on the icon alone to explain an unfamiliar action.
- This rule applies to interface iconography, not the Kemahiran.AI brand mark, licensed content imagery or resource preview assets.
- Do not create custom inline SVG interface icons or substitute emoji.
- Skills and LLM Prompt catalogue rows do not use decorative images.
- Visual Prompt previews must use original or licensed assets with bilingual alternative text and recorded provenance.

### Motion

Motion should make state changes and hierarchy easier to understand. It must not turn the library into a showcase for animation.

- Page introductions may use a restrained masked or opacity reveal of approximately 180–240ms with no more than 6–10px of movement.
- Resource rows may use a short initial stagger of approximately 20–30ms per visible row, capped so the sequence completes within roughly 240ms. Do not replay the entrance animation after every search keystroke or filter change.
- Buttons, chips, links and row states may transition colour, border and opacity over approximately 120–180ms.
- The mobile navigation may use a short fade or slide transition of approximately 160–220ms, provided focus management and dismissal remain reliable.
- Dense resource rows should not lift, scale or float on hover; use background, border or accent changes instead.
- Do not add continuous ambient motion, animated charts, particles, canvas, WebGL or Three.js effects to catalogue or resource pages.
- Under `prefers-reduced-motion: reduce`, remove non-essential transforms and staggered entrances while preserving immediate state feedback.

## 6. Component guidance

- Buttons, inputs, dialogs, menus, badges and form controls begin from shadcn/ui components.
- Search uses a large input/action group with a visible label for assistive technology.
- Filter chips use pressed-state semantics and remain horizontally scrollable on narrow screens.
- Advanced filters expose a labelled panel; they must not rely on a hover-only popover.
- Favourites announce pressed state. Account-backed persistence is Phase 4; the Phase 2 preview may use local interaction state.
- Sorting uses a native or accessible select pattern.
- Disabled future views must be clearly disabled and not appear interactive.

## 7. Accessibility and responsive requirements

- Target WCAG 2.2 AA.
- Maintain visible focus and at least 44×44px primary touch targets.
- Provide a skip link and correct heading order.
- Announce search result counts and empty states.
- Do not communicate resource type, difficulty or active state through colour alone.
- Test keyboard navigation, 200% zoom, reduced motion, 320px reflow and common tablet/desktop widths.
- Keep the mobile menu dismissible and prevent hidden navigation from receiving focus.

## 8. Content and interaction boundaries

- Public browsing, search and copying never require sign-in.
- Authentication is introduced only for personal actions defined in Phase 4.
- Search and filters should become shareable through URL query parameters during Phase 2 expansion.
- Catalogue additions continue to come from validated Markdown; UI code must not contain a manually maintained resource list.
- The default page displays real catalogue counts and metadata rather than invented popularity numbers.

## 9. Current checkpoint

The first coded vertical slice applies this system to the Malay-first AI Skills catalogue and reuses the same list treatment for library indexes. Full faceting, persistent query state, complete mobile-menu behaviour tests and cross-library search remain Phase 2 work and must not be represented as complete until acceptance evidence exists.

The 2026-10-26 styling-reference adaptation and Phosphor-only icon direction are applied to the running preview. The pass introduced the approved navy, blue, indigo, skill-green and visual-amber tokens; Inter and JetBrains Mono roles; 8px control geometry; restrained reveal motion; and Phosphor interface icons without changing the approved layout, information architecture, grids or shadcn/ui component foundation. Product-owner review remains the approval gate before the direction is treated as final.
