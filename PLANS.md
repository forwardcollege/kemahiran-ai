# Kemahiran.AI — Phased Implementation Plan

Status: Phase 1 complete; Phase 2 catalogue-first direction approved
Last updated: 2026-10-26

This plan turns the product definition in `PROJECT.md` into reviewable phases. The user approved the 36-resource catalogue and authorised Phase 1 and an initial Phase 2 coded preview on 2026-10-25. Phase 2 will first deliver a reviewable vertical slice before the full discovery interface is expanded. Later implementation phases still require their own approval.

## Guiding delivery rules

- Keep the site usable at the end of each implementation phase.
- Validate architecture early with a small number of representative resources before producing the full catalogue.
- Treat content, accessibility, authentication and security as product work, not launch clean-up.
- Use content-only changes to prove that new resources do not require application-code changes.
- Record evidence against acceptance criteria before marking a phase complete.

## Proposed MVP catalogue

Target: **36 original resources**.

The item-level proposal and approval gate are defined in `CONTENT_INVENTORY.md`. The inventory must be approved before Phase 5 resource writing begins.

| Library       |  Count | Suggested distribution                                                      |
| ------------- | -----: | --------------------------------------------------------------------------- |
| AI Skills     |     12 | 5 education, 4 public sector/education officers, 3 SME/professional         |
| LLM Prompts   |     14 | 5 education, 5 public sector/education officers, 4 SME/professional         |
| Image Prompts |      7 | education visuals, presentations, posters, social media and product imagery |
| Video Prompts |      3 | programme promotion, SME product promotion and short educational explainers |
| **Total**     | **36** | Rebalance only if editorial quality or audience coverage requires it        |

Initial resource selection should prioritise frequent, repeatable workflows and avoid sensitive/high-stakes topics until the review process is proven.

## Phase 0 — Decisions, ownership and repository readiness

### Goal

Resolve decisions that affect public identity, accounts, publishing and operational ownership.

### Work

- Review and approve `PROJECT.md`, `AGENTS.md`, `PLANS.md` and the schema examples.
- Confirm Kemahiran.AI as the product name.
- Register or confirm control of `kemahiran.ai` and any defensive domains.
- Complete an appropriate name/trademark search.
- Confirm Vercel or Railway as the initial web host.
- Confirm public catalogue access with sign-in required only for personal actions.
- Choose the default licence for original resources and downloadable packages.
- Record Howie Chang as the accountable Forward College internal reviewer. Record specialist reviewers only when available.
- Identify the production email sender/domain for magic links.
- Supply approved Forward College/Forward Labs logos, colours, type guidance and usage rules.
- Initialise the GitHub repository and branch protections when authorised.

### Acceptance criteria

- [x] Planning documents are approved or have an explicit list of requested revisions.
- [x] Product name and primary domain are confirmed.
- [x] Hosting decision and account-access policy are recorded.
- [x] Content and package licence policy is recorded.
- [x] Forward College is recorded as the internal review organisation and Howie Chang is the accountable internal reviewer.
- [ ] Brand assets are available or an interim visual direction is approved.
- [x] No unresolved decision blocks Phase 1 architecture.

## Phase 1 — Application foundation and content pipeline

### Goal

Create the smallest production-shaped foundation that can validate and render one example of each content type.

### Work

- Initialise current stable Next.js App Router, TypeScript and pnpm.
- Add Tailwind CSS and shadcn/ui; establish custom design tokens without finalising every page.
- Establish locale-aware routing with Malay as the default.
- Implement the shared/type-specific Zod content schemas.
- Implement Markdown parsing for fixed `## Bahasa Melayu` and `## English` sections.
- Create controlled taxonomy and bilingual search-alias files.
- Add build-time validation for IDs, slugs, relationships, dates, assets and publication requirements.
- Render the three example records through simple detail routes.
- Add CI for formatting, lint, type check, tests, validation and production build.
- Create `.env.example`; do not configure production secrets.

### Acceptance criteria

- [x] The project installs reproducibly from the lockfile.
- [x] One Skill, one LLM Prompt and one visual-prompt example pass validation and render.
- [x] Invalid type-specific metadata fails with an actionable error.
- [x] Duplicate IDs/slugs and broken related IDs fail validation.
- [x] Malay is served by default and the English counterpart maps through the same resource ID.
- [x] Adding a valid fourth Markdown record requires no application-code change.
- [x] Raw/unsafe HTML is not rendered from content.
- [x] CI and a local production build pass.

**Implementation evidence (2026-10-25):** The lockfile install and complete local `pnpm check` passed on Node.js 22. The validator loaded all 36 records (12 Skills, 14 LLM Prompts and 10 visual collections). Automated tests cover type-specific failures, bilingual-section structure, duplicate IDs and slugs, broken relationships, publication gating and unsafe HTML removal. Local HTTP smoke tests returned 200 for representative Skill, LLM Prompt and visual routes; `/` redirects to `/ms`, and paired Skill routes render `ms-MY` and `en-MY` from the same record. GitHub Actions CI run `40163210030` completed successfully against commit `2fc29ec` in the Forward College repository.

## Phase 2 — Design system, navigation and discovery

### Goal

Deliver the public catalogue experience, with the three libraries clearly differentiated and one consistent bilingual discovery system.

### Work

The approved first step is a coded vertical slice containing the responsive shell, homepage direction, representative resource cards, a sample discovery/filter treatment and one library index. Stop for product-owner review before applying the direction across every Phase 2 page.

**Preview checkpoint (2026-10-25):** Howie Chang selected the second catalogue-first design option: a dark library rail, immediate search and filtering, and dense text-led resource rows. The approved rules are recorded in [DESIGN.md](DESIGN.md). The revised vertical slice passed visual QA, responsive browser checks, formatting, lint, TypeScript, unit tests, content validation and a production build; evidence is recorded in [design-qa.md](design-qa.md). Full Phase 2 acceptance criteria remain open until discovery is completed across the planned scope.

**Navigation refinement (2026-10-26):** The locale homepage is the all-resources catalogue with the real total count. The rail no longer duplicates discovery through a separate Explore group, and no editor's-choice treatment is shown until a genuine editorial selection exists.

**Styling and icon refinement (2026-10-26):** The approved catalogue structure now uses the DESIGN.md palette, Inter and JetBrains Mono roles, 8px control geometry, restrained motion and Phosphor interface icons. The pass preserved the existing information architecture and responsive grids and passed desktop, tablet and mobile browser checks. Phase 2 remains open for complete discovery behavior and acceptance coverage.

**Audience-filter refinement (2026-10-26):** The prominent audience control is labelled **Untuk siapa / For whom** and contains person-oriented groups. Public service remains available as a separate sector facet instead of duplicating Education Officers and JPN in the quick-filter row.

**Bilingual-tag refinement (2026-10-26):** Visible resource tags resolve from a controlled bilingual taxonomy rather than a partial interface lookup. Stable tag IDs remain in Markdown, while validation requires Malay and English labels and blocks unknown tag IDs.

- Apply the approved Forward College theme to shadcn components.
- Build responsive header, mobile navigation, footer and language switcher.
- Build the catalogue-first homepage with immediate cross-library search and browsing across all resources; keep explanatory content contextual rather than using a marketing hero.
- Build outcome-focused resource cards with clear content-type treatments.
- Build focused library indexes; use the all-resources homepage for cross-library discovery.
- Generate a bilingual search index from published Markdown.
- Implement cross-library search, synonyms, facets, sorting and empty states.
- Persist locale choice and preserve search/filter context where reasonable.
- Use URL query parameters for shareable discovery state.
- Add pagination or progressive loading suitable for the initial catalogue.

### Acceptance criteria

- [ ] Users can distinguish all three libraries from cards and landing pages without opening a resource.
- [ ] Searching `minit mesyuarat` and `meeting minutes` returns the same intended record set.
- [ ] Shared filters work across libraries; visual-only filters appear only where relevant.
- [ ] Image and Video can be switched/filtered independently.
- [ ] Search and filter controls are keyboard and screen-reader operable.
- [ ] Locale choice persists and active filter/search context is not unexpectedly lost.
- [ ] Core pages work at 320px width, tablet and desktop layouts.
- [ ] Empty, loading and no-results states provide clear recovery actions.

## Phase 3 — Resource detail experiences

### Goal

Make each library immediately useful through a purpose-built detail experience.

**AI Skill checkpoint (2026-10-26):** Howie Chang approved local implementation of the AI Skill detail experience before work on the other Phase 3 templates. The approved direction provides two public paths on every Skill page: copy the complete instruction for immediate use, or download the existing versioned ZIP and upload it through Gemini Customize → Skills → Create → Upload. The interface must use Gemini Skills terminology rather than Gems and retain a copy-to-chat fallback for accounts where Skills is not yet available. Stop for local product-owner review before pushing or deploying this checkpoint.

**Local implementation evidence (2026-10-26):** The shared bilingual Skill action panel is data-driven across all 12 Skill records. Copy behaviour, accessible status feedback, English/Malay switching, a versioned download response and 390px/desktop layouts were checked locally. All 12 new patch-version ZIPs place `SKILL.md` at the archive root and their source-package guides use Gemini Skills terminology. Formatting, lint, TypeScript, 9 unit/content tests, validation of all 36 records and a webpack production build pass. Howie Chang approved the local visual review on 2026-10-26.

**Skill guide consistency checkpoint (2026-10-26):** The product owner approved one predictable seven-section information architecture for all 12 bilingual Skill guides while allowing example depth to vary by workflow. Repeated package prose moves to the shared action panel. GFM table rendering, semantic headers and keyboard-scrollable mobile overflow are required for structured examples such as meeting minutes and RPH.

**Local consistency evidence (2026-10-26):** All 12 Malay and English Skill guides now pass the required seven-section contract. Meeting-minutes and RPH examples render as real tables with column-header semantics and a focusable horizontal-scroll region on narrow screens. Formatting, lint, TypeScript, 11 tests, validation of all 36 resources and a webpack production build pass. Howie Chang approved the local review on 2026-10-26; push and deployment remain separate external actions.

### Work

- Build the AI Skill template: outcome, audience, prerequisites, steps, examples, copy and optional package download.
- Build the LLM Prompt template: instructions, variables, complete prompt, expected output, examples and limitations.
- Build the visual collection template: preview-led layout, Image/Video metadata, individual prompts, variables and exclusions.
- Implement accessible copy feedback and fallback behaviour.
- Implement versioned package download paths and package metadata.
- Implement explicit related resources with taxonomy fallback.
- Add provenance, licence, version and last-reviewed displays.
- Add canonical metadata, `hreflang`, Open Graph data, sitemap and structured metadata.

### Acceptance criteria

- [ ] Every template presents the required type-specific fields without forcing irrelevant fields.
- [ ] A user can copy the principal content in one action and receives accessible feedback.
- [ ] Skills remain useful without downloading a package.
- [ ] Package links are versioned, valid and restricted to approved paths.
- [ ] Visual previews have meaningful bilingual alt text and retain useful mobile proportions.
- [ ] Switching language stays on the same underlying resource.
- [ ] Related resources never point to drafts or missing records.
- [ ] Metadata includes correct canonical and locale alternates.

## Phase 4 — Supabase authentication and personal features

### Goal

Add secure, low-friction accounts without putting the public catalogue behind a login wall.

### Work

- Create separate local/development and production Supabase configurations when authorised.
- Add Supabase SSR integration with supported PKCE flow.
- Configure Google OAuth with minimal identity scopes.
- Configure branded email magic links and strict redirect allowlists.
- Add sign-in, callback, sign-out and error/recovery experiences in both languages.
- Create versioned migrations for `user_preferences`, `favourites` and `resource_requests`.
- Enable and test RLS for every table.
- Require sign-in when saving a favourite or submitting an attributable request, then return to the initiating page.
- Build favourites and request-a-resource pages.
- Add account-data deletion/request-deletion route and privacy copy.
- Add rate limits/bot controls appropriate to the deployment.

### Acceptance criteria

- [ ] A new user can create an account through Google without a separate registration form.
- [ ] A new user can create an account by clicking a one-time email magic link.
- [ ] Redirects return the user only to allowlisted application URLs.
- [ ] Sign-in returns the user to the initiating resource/action.
- [ ] Favourites persist across sessions/devices for the same account.
- [ ] One user cannot read or mutate another user’s rows under direct database/API testing.
- [ ] Service-role credentials are absent from client bundles and logs.
- [ ] Catalogue discovery, reading and copying still work while signed out.
- [ ] Users can sign out and access the documented account-deletion path.
- [ ] Auth and request forms provide accessible, non-enumerating feedback.

## Phase 5 — Initial catalogue production

### Goal

Publish a deliberately small, tested and balanced set of 36 original resources.

**Current evidence:** All 36 approved concepts now have bilingual Markdown records: 12 Skills, 14 LLM Prompts, 7 Image collections and 3 Video collections. Howie Chang approved all 36 records on behalf of Forward College on 2026-10-25; each record is now `status: approved` with `review.status: internal_approved`. Twelve source-only Skill packages and their matching versioned ZIP artifacts have been created and structurally verified. A non-developer authoring guide documents additions and revisions. Original resource content and Skill packages are licensed under CC BY 4.0, while application code uses MIT. Existing tool evidence remains deliberately conservative: some records are `tested` or `limited`, while later text records and all video-generator claims remain `expected` pending behavioural testing. Outstanding tool tests and publication approval remain open. Specialist review is optional and its absence is disclosed where relevant.

### Work

- Use the approved `CONTENT_INVENTORY.md` as the controlled scope for content production.
- Assign content owners and accountable Forward College internal reviewers; record specialist reviewers when available.
- Produce and review the 10-resource anchor batch before scaling its patterns to the remaining catalogue.
- Produce Malay-first drafts and reviewed English variants.
- Create original examples and visual previews.
- Test each resource with at least one named compatible tool.
- Conduct accountable internal review for every resource. For official documents, policy/circular analysis, assessments, safeguarding and sensitive workflows, record whether specialist review was completed and display the internal-review-only disclosure when it was not obtained.
- Record limitations, provenance, licence, version and review dates.
- Create and inspect downloadable Skill packages where appropriate.
- Verify taxonomy balance and related-resource links.
- Publish in reviewable batches rather than one bulk import.

### Acceptance criteria

- [x] Every proposed inventory entry has an explicit owner decision.
- [x] The anchor batch is approved for pattern expansion before production expands to the remaining resources; publication approval remains separate.
- [ ] Exactly 30–40 approved resources are ready for launch; the working target is 36.
- [x] All three libraries and all primary audiences have meaningful coverage.
- [ ] Every published record has reviewed Malay and English content.
- [x] Every compatibility claim has a tool-test record or explicit qualification.
- [x] Every resource has accountable Forward College internal approval from a named person or role; higher-risk resources disclose when specialist review was not obtained.
- [ ] Every preview and included file has recorded provenance and redistribution rights.
- [x] No sample contains identifiable real student, employee, customer or government data.
- [x] A content-only contributor can add a resource by following repository documentation.

## Phase 6 — Quality, security and launch readiness

### Goal

Verify that the complete MVP is safe, accessible, understandable and operationally supportable.

### Work

- Test critical journeys in both languages across mobile and desktop viewports.
- Conduct keyboard, screen-reader, zoom/reflow, contrast and reduced-motion checks.
- Review authentication redirects, cookies, RLS, input validation and rate limits.
- Run dependency, secret and downloadable-package scans.
- Review privacy, retention, account deletion, terms, copyright and attribution copy.
- Test metadata, sitemap, locale alternates, redirects and custom-domain behaviour.
- Validate performance and image delivery on representative Malaysian mobile connections.
- Configure monitoring, error reporting and minimal privacy-conscious analytics if approved.
- Document content publishing, rollback, review expiry and incident response.
- Run moderated usability checks with representatives of at least two primary audiences.

### Acceptance criteria

- [ ] No critical or high-severity security findings remain open.
- [ ] No known WCAG 2.2 AA blocker remains in a critical journey.
- [ ] Critical journeys pass in current supported browsers and representative mobile sizes.
- [ ] Content validation, tests and production build pass from a clean checkout.
- [ ] Custom-domain HTTPS, redirects and authentication callbacks work in production.
- [ ] Privacy/copyright/licensing approvals are recorded.
- [ ] Monitoring and rollback procedures are documented and tested.
- [ ] Usability participants can explain Skill versus Prompt and complete search, copy and language-switch tasks without assistance.
- [ ] Product owner gives explicit launch approval.

## Post-MVP candidates

Consider only after launch evidence supports them:

- Git-based editorial UI for non-Git contributors
- Reviewer dashboard and scheduled review reminders
- Organisation/team favourites or collections
- Privacy-preserving popularity ranking
- Additional authentication providers
- Supabase Storage for a larger media catalogue
- Hosted search service for a materially larger catalogue
- Community suggestions with private editorial intake, not direct publishing
- Training-course links and cohort-specific collections
- Public API or machine-readable catalogue feeds
- Additional Malaysian languages

These are not implied by MVP approval.

## Decision log

| Date       | Decision                                                                                                                                                        | Status                            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 2026-10-21 | Use Kemahiran.AI as the working product name and `kemahiran.ai` as the intended primary domain                                                                  | Proposed; domain purchase pending |
| 2026-10-21 | Build fresh rather than fork Zaz-OS/skills-library                                                                                                              | Proposed                          |
| 2026-10-21 | Use Markdown/Git as the catalogue source of truth                                                                                                               | Proposed                          |
| 2026-10-21 | Use Supabase Auth/Postgres for Google, magic links and personal data only                                                                                       | Proposed                          |
| 2026-10-21 | Recommend Vercel while retaining Railway portability                                                                                                            | Proposed                          |
| 2026-10-21 | Keep public catalogue access open; require login for personal actions                                                                                           | Proposed                          |
| 2026-10-25 | Approve all 36 MVP resource concepts and the recommended 10-resource anchor-batch selection                                                                     | Approved                          |
| 2026-10-25 | Use generic customisable Skills with explicit persistent-reference, runtime-input and missing-source rules                                                      | Approved                          |
| 2026-10-25 | Use Forward College as the internal review organisation and Howie Chang as the accountable MVP reviewer; specialist review remains optional and disclosed       | Approved                          |
| 2026-10-25 | Approve all 36 completed resource records for application integration and begin Phase 1; publication, licensing and outstanding tool-test gates remain separate | Approved                          |
| 2026-10-25 | Approve the 10-resource anchor batch as the pattern for producing the remaining catalogue; this is not publication approval                                     | Approved                          |
| 2026-10-25 | Use one bilingual Skill package with a Malay-first `README.md` and an English operational `SKILL.md` that defaults output to Bahasa Melayu                      | Approved                          |
| 2026-10-25 | Use Forward College exclusively for institutional and original-content provenance                                                                               | Approved                          |
| 2026-10-25 | Begin Phase 2 with a coded vertical slice and stop for product-owner review before scaling the complete interface                                               | Approved                          |
| 2026-10-26 | Confirm `kemahiran.ai` with Cloudflare DNS, Vercel hosting, public catalogue access and apex-domain canonicalisation                                            | Approved                          |
| 2026-10-26 | License original resources and Skill packages under CC BY 4.0 and application code under MIT; use Forward College (Malaysia) in licence attribution             | Approved                          |
