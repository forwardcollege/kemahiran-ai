# Kemahiran.AI — Product Definition

Status: Draft for review  
Owner: Forward Labs  
Institutional endorsement: Powered by Forward College, Malaysia  
Last updated: 2026-10-26

## 1. Product summary

Kemahiran.AI is a curated, Malay-first bilingual library of practical AI resources for Malaysian workplaces, education and public service.

The product is not a general prompt marketplace. Its advantage should come from useful Malaysian context, dependable human review, clear outcomes and immediate usability for non-technical users.

Working descriptor:

> Pustaka sumber AI praktikal untuk Malaysia  
> Practical AI resources for Malaysia

The catalogue contains three related but visibly distinct libraries:

1. **AI Skills** — reusable capabilities and multi-step workflows.
2. **LLM Prompts** — focused, ready-to-use prompts for language models.
3. **Image & Video Prompts** — visual-first prompt collections with previews.

## 2. Product name and domain

### Decision

- Product name: **Kemahiran.AI**
- Primary domain: `kemahiran.ai`, registered through Cloudflare on 2026-10-25
- Canonical URL: `https://kemahiran.ai`; `https://www.kemahiran.ai` redirects to the apex domain
- DNS provider: Cloudflare; domain email is not configured for the initial deployment
- Recommended defensive domains: `kemahiranai.com` and `kemahiranai.my`, redirected to the primary domain
- Brand attribution: **Kemahiran.AI by Forward Labs**
- Institutional line: **Powered by Forward College**
- Open-content attribution: **Kemahiran.AI by Forward Labs, powered by Forward College (Malaysia)**

“Kemahiran” describes the capability users gain from the whole product, not only the AI Skills library. The descriptor must appear prominently during launch so that the product is understood as a resource library rather than only a course platform.

### Naming constraints

- Do not use **MahirHub** as the primary name. It is less clearly associated with AI and sits close to other Malaysian “Mahir” initiatives.
- Do not rename the product or primary domain in implementation without updating this document and obtaining approval.
- Complete domain purchase and a MyIPO/trademark review before public launch. Domain availability checks are snapshots, not legal clearance.

## 3. Audiences and jobs to be done

### Primary audiences

- Teachers and educators
- Education officers, including JPN personnel
- Government and public-sector personnel
- SMEs and entrepreneurs
- Working professionals

### Secondary audience

- Students, where the resource is age-appropriate and does not encourage academic misconduct

### Core jobs to be done

Users should be able to:

- find a practical resource using Malay or English terminology;
- understand whether a Skill, LLM Prompt or visual prompt is appropriate;
- preview the expected outcome before using a resource;
- copy clear instructions or prompts with minimal editing;
- download a portable Skill package when one exists;
- understand limitations, privacy concerns and responsible-use requirements;
- save useful resources to their account; and
- return after training to reuse or discover related workflows.

## 4. Product principles

1. **Malay first, not Malay only.** Bahasa Melayu is the default interface and editorial starting point. English is a complete, linked variant of the same resource.
2. **Outcome before terminology.** Titles and summaries explain what users can accomplish.
3. **Localise, do not merely translate.** Examples, formats and conventions should match Malaysian educational and workplace contexts.
4. **Useful without technical installation.** Every Skill must have readable, copyable instructions even when a package is downloadable.
5. **Small and trustworthy beats large and generic.** Publication requires review and testing.
6. **Public knowledge, optional personalisation.** Catalogue pages remain publicly readable and copyable. Authentication is required for account-backed favourites and personal requests, not for basic discovery.
7. **Provenance is visible.** Users can tell whether material is original, adapted, contributed or externally referenced.
8. **Content changes do not require application-code changes.** Normal additions and revisions happen through validated content files.

## 5. Information architecture

### Primary navigation

Malay labels are shown by default, with equivalent English labels after switching language.

| Malay               | English               | Purpose                                       |
| ------------------- | --------------------- | --------------------------------------------- |
| Semua Sumber        | All Resources         | Full catalogue and cross-library discovery    |
| Kemahiran AI        | AI Skills             | Multi-step workflows and portable skills      |
| Prompt LLM          | LLM Prompts           | Copyable text prompts                         |
| Prompt Imej & Video | Image & Video Prompts | Visual-first collections                      |
| Kegemaran           | Favourites            | Account-backed saved resources                |
| Tentang             | About                 | Mission, editorial standards and Forward Labs |
| Mohon Sumber        | Request a Resource    | Structured resource request form              |

The Image and Video content types share one top-level library but must remain independently filterable and switchable.

### Catalogue-first homepage

The homepage is not a marketing landing page. It opens directly on the complete catalogue so users see all available resources and the real total count before choosing a focused library.

- Persistent access to the three clearly differentiated libraries
- Prominent bilingual cross-library search on the homepage, scoped to the selected library on focused index pages
- Browse by audience and desired outcome/use case
- Recently reviewed resources; editorial recommendations appear only after a real curated selection exists
- Dense outcome-focused rows for Skills and LLM Prompts without mandatory decorative images
- Visual previews reserved for Image and Video Prompt contexts where they materially aid selection
- Short explanatory guidance available from navigation and contextual help rather than blocking catalogue access

The approved interface direction and component rules are recorded in [DESIGN.md](DESIGN.md).

### URL structure

The locale prefix is explicit so pages are indexable and shareable. The root URL redirects to the saved locale or to Malay for a first visit.

```text
/
/ms
/en

/ms/skills
/en/skills
/ms/skills/{malay-slug}
/en/skills/{english-slug}

/ms/llm-prompts
/en/llm-prompts
/ms/llm-prompts/{malay-slug}
/en/llm-prompts/{english-slug}

/ms/visual-prompts
/en/visual-prompts
/ms/visual-prompts/{malay-slug}
/en/visual-prompts/{english-slug}

/ms/explore
/en/explore
/ms/favourites
/en/favourites
/ms/about
/en/about
/ms/request
/en/request

/ms/sign-in
/en/sign-in
/auth/callback
```

Each record has one immutable identifier and two mapped slugs. Switching language resolves the counterpart through that identifier, so users retain context.

SEO requirements include canonical URLs, `hreflang` alternates for `ms-MY` and `en-MY`, sitemap entries, Open Graph metadata and structured data appropriate to the page. Search and filter query state should use URLs where practical.

## 6. Discovery and search

### Shared facets

- Content type
- Audience
- Use case
- Sector
- Compatible tool or model
- Available language
- Difficulty
- Intended output
- Last reviewed

The prominent audience control is labelled **Untuk siapa / For whom** and uses person-oriented groups: Teachers and Educators, Education Officers and JPN, Professionals, and SMEs and Entrepreneurs. Public service remains a separate sector facet rather than appearing as a competing audience option. Student appears only when published resources explicitly target students.

### Visual-specific facets

- Image or Video
- Format
- Style
- Subject
- Aspect ratio
- Generator compatibility

### Search behaviour

- A generated client-side search index contains Malay and English titles, summaries, aliases, tags and taxonomy labels for every published record.
- Malay and English queries should return the same relevant underlying records.
- A curated synonym map connects terms such as `minit mesyuarat` and `meeting minutes`, rather than relying only on fuzzy matching.
- Search results display in the active locale.
- Search, facets and sorting work together and are keyboard accessible.
- MVP scale does not justify a hosted search service. Revisit this only when catalogue size or analytics demonstrate a need.

## 7. Recommended technical architecture

### Application

- **Framework:** Current stable Next.js with App Router and TypeScript, pinned at implementation time
- **UI:** shadcn/ui as the primary component system
- **Styling:** Tailwind CSS with a custom Forward College theme
- **Content rendering:** Markdown parsed through a controlled remark/rehype pipeline; raw HTML disabled unless explicitly sanitised
- **Content validation:** Zod schemas plus repository checks
- **Search:** A build-generated bilingual index with a small in-browser search library such as MiniSearch
- **Testing:** Unit and integration tests, Playwright browser tests, automated accessibility checks and content-schema validation
- **Package manager:** pnpm

Do not add a second general-purpose UI component library.

### Fresh build versus the Zaz-OS Skills Library

Use a **fresh implementation**.

The referenced Zaz-OS repository is MIT-licensed and provides useful patterns, but its implementation centres on an Astro skills catalogue, automated scraping/enrichment, MCP delivery and coding-agent packages. Kemahiran.AI needs three first-class content models, bilingual editorial content, account features and shadcn-based Next.js UI. Forking it would introduce more unrelated pipeline and migration work than reusable product value.

Permitted use of the reference:

- study catalogue, filter, dependency and copy patterns;
- independently implement suitable interaction patterns; and
- reuse code only after checking the exact file licence and preserving required attribution.

Do not copy its catalogue data, third-party skills or visual identity.

### Catalogue content

The Git repository is the source of truth for public catalogue records.

- One Markdown file represents one resource.
- Shared and type-specific metadata live in validated YAML frontmatter.
- The body contains one Malay section and one English section.
- Media and downloadable packages use stable paths tied to the immutable resource ID.
- A content-only pull request can add or update a resource and trigger a deployment.
- The catalogue is not duplicated into Supabase for MVP.

See [docs/content-schema.md](docs/content-schema.md), the examples in `docs/content-examples/`, and the contributor workflow in [docs/content-authoring.md](docs/content-authoring.md).

### Authentication and database

Use **Supabase Auth and Supabase Postgres**.

Authentication methods:

- Google OAuth
- No password authentication in the MVP
- First successful sign-in creates the account; a separate registration form is unnecessary
- Keep the account model provider-neutral so an evidence-based fallback can be added later without replacing user records

Public catalogue browsing, search and copying remain available without signing in. Sign-in is required to save server-backed favourites, manage account preferences and submit an attributable resource request.

Supabase stores user-owned operational data only:

```text
user_preferences
- user_id (uuid, primary key, references auth.users)
- preferred_locale (ms | en)
- created_at
- updated_at

favourites
- user_id (uuid, references auth.users)
- resource_id (text, references a Markdown record logically)
- created_at
- primary key (user_id, resource_id)

resource_requests
- id (uuid, primary key)
- user_id (uuid, references auth.users)
- title
- description
- audience
- desired_output
- status
- created_at
- updated_at
```

All exposed tables require Row Level Security. Users may read and change only their own rows. Administrative operations occur only in trusted server code. The Supabase service-role key must never reach browser code.

### Why Supabase is justified

The original local-storage-only approach is no longer sufficient because accounts must persist across devices. Supabase combines Google OAuth and a small relational store without requiring a custom authentication service. It is not used as a CMS, catalogue database or general backend abstraction.

### Hosting: Vercel and Railway

**Recommended MVP host: Vercel.**

Reasons:

- first-party operational path for Next.js features;
- low-friction Git previews for content and UI review;
- straightforward static generation, server rendering, image optimisation and custom domains;
- no separate application server or container configuration for this workload.

**Railway is a valid alternative**, especially if Forward Labs prefers one container-oriented platform for several services or already has Railway operations and billing. It can deploy Next.js and custom domains successfully. It is not the first recommendation because Kemahiran.AI does not require a persistent application server or an application-hosted database.

Portability requirements:

- keep core application behaviour compatible with a normal Node.js deployment;
- keep Supabase separate from the web host;
- avoid unnecessary Vercel-only data stores or proprietary workflow primitives; and
- document environment variables so deployment can move to Railway if organisational preference changes.

### Media and packages

- Store the small initial set of optimised preview images in the repository/public assets.
- Store downloadable Skill archives in versioned public paths for MVP.
- Keep reusable instructions in `SKILL.md`; keep persistent reference knowledge in clearly identified supporting files rather than embedding source documents into the instructions.
- Distinguish persistent references from task-specific inputs. Never bundle meeting notes, student work, client briefs, customer messages, current datasets or other user data into public packages.
- Generic Skills may require users to add their own authorised reference documents. Synthetic placeholders demonstrate setup but never satisfy a required source.
- Do not host generated video files in the MVP; use representative images or short, deliberately optimised previews only if approved.
- Reconsider Supabase Storage or another object store when media volume, upload workflows or deployment limits justify it.

## 8. Bilingual content model

Every resource has one shared identity with language variants inside the same record.

### Shared fields

- Schema version
- Stable ID
- Content type
- Review/publishing status
- Malay and English slugs
- Malay and English titles
- Malay and English summaries
- Audience IDs
- Use-case IDs
- Sector IDs
- Category and tag IDs
- Tool/model compatibility
- Difficulty
- Intended output
- Author/curator
- Provenance and source links
- Licence
- Review status and reviewer
- Version
- Created, updated and last-reviewed dates
- Related resource IDs
- Featured status
- Search aliases in both languages

### Type-specific Skill fields

- Outcome
- Prerequisites
- Estimated completion time
- Supported AI tools
- Required inputs
- Persistent-reference requirements, source ownership and missing-reference behaviour
- Task-specific runtime inputs and sensitivity classification
- Copyable instruction availability
- Package availability, path and included files
- Installation notes where relevant
- Limitations and responsible-use guidance

### Type-specific LLM Prompt fields

- Prompt variables/placeholders
- Expected output
- Compatibility notes
- Recommended model capabilities
- Optional sample input/output
- Runtime reference-input requirements
- Limitations and appropriate-use guidance

### Type-specific visual-prompt fields

- Image or Video designation
- Preview asset and bilingual alt text
- Intended application
- Generator compatibility
- Style and subject facets
- Aspect ratio/output format
- Editable variables
- Required or optional reference assets and their supply mode
- Attribution and asset provenance
- Image metadata where relevant: subject, environment, composition, angle, lighting, palette, camera/lens terms and exclusions
- Video metadata where relevant: action, sequence, camera movement, shot, duration, pacing, transitions, sound cues and emotional tone

### Language persistence

- The URL locale is the source of truth for the current page.
- Store the last choice in a first-party cookie for anonymous users.
- Store it additionally in `user_preferences` for signed-in users.
- Never create separate Malay and English records for the same resource.

## 9. MVP scope

### Included

1. Malay-first interface with persistent English switching
2. Three top-level content libraries
3. Cross-library bilingual search
4. Shared and library-specific filters
5. Featured and recently reviewed resources
6. Outcome-focused catalogue cards
7. Distinct detail templates for all three content types
8. One-click copying with accessible success/error feedback
9. Versioned Skill-package downloads where applicable
10. Optimised previews for visual prompts
11. Related-resource recommendations
12. Responsive, keyboard-accessible design
13. SEO metadata, sitemap and structured locale URLs
14. Visible provenance, licensing, version and review metadata
15. Markdown-based content workflow with automated validation
16. Supabase Google sign-in
17. Account-backed favourites
18. Authenticated request-a-resource form
19. Account sign-out and deletion/request-deletion path

### Initial catalogue target

Target **36 original resources**:

- 12 AI Skills
- 14 LLM Prompts
- 10 visual-prompt collections: 7 Image and 3 Video

The catalogue should cover teachers/educators, education/public-sector officers, and SMEs/professionals. High-risk or official-document workflows require additional subject-matter review.

The approved titles, outcomes, audience assignments and review flags are maintained in [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md). The product owner approved all 36 concepts and the 10-resource anchor-batch selection on 2026-10-25. All 36 bilingual records have been completed using the approved anchor pattern and received accountable internal approval from Howie Chang on behalf of Forward College on 2026-10-25. Publication remains subject to the outstanding testing, licence and publication gates in `PLANS.md`.

### Explicit non-goals

- Public marketplace
- User-submitted publishing
- Payments or subscriptions
- Password accounts or complex account profiles
- In-browser prompt execution
- AI chat interface
- Automatic bulk translation
- Bulk scraping or importing
- Publishing unreviewed third-party prompts
- Claims of universal model compatibility
- Separate Malay and English websites or databases
- Database-backed catalogue CMS
- Rich administrative dashboard
- Social/community features
- Native mobile applications
- Hosted generation or storage of user AI outputs

## 10. User experience requirements

### Resource cards

Every card communicates:

- the outcome;
- content type;
- intended audience or primary use case;
- language availability; and
- last-reviewed date.

### Resource pages

- Keep the primary copy/download action visible and keyboard accessible.
- Explain how to use the resource before presenting long content.
- Display expected outputs and limitations.
- Make provenance, version and review information easy to find.
- Show related resources from explicit editorial relationships first; use taxonomy similarity only as a fallback.
- Clearly distinguish a readable Skill from an optional downloadable package.

### Authentication

- Present one “Continue with Google” action for both first-time and returning users.
- Return users to the page/action that initiated sign-in.
- Explain why an account is needed at the point of action.
- Do not block public catalogue reading behind authentication.

## 11. Accessibility requirements

Target WCAG 2.2 AA.

- Full keyboard operation and visible focus states
- Semantic landmarks, headings and form labels
- Skip link and logical focus order
- Sufficient text and control contrast
- Touch targets appropriate for mobile use
- No information conveyed by colour alone
- Reduced-motion support
- Accessible filter drawers, tabs, dialogs and toasts
- Copy feedback announced through an appropriate live region
- Descriptive bilingual alternative text for meaningful preview images
- Empty alternative text for decorative images
- Captions/transcripts for any informative video or audio preview
- Screen-reader and keyboard checks on both language variants
- Zoom/reflow testing at 200% and narrow viewport widths

## 12. Security, privacy, copyright and licensing

### Security and privacy

- Use OAuth Authorization Code with PKCE through the supported Supabase/Next.js approach.
- Strictly allowlist production and local authentication redirect URLs.
- Store sessions in secure, HTTP-only cookies where supported by the chosen integration.
- Enable RLS before exposing any user table.
- Rate-limit resource requests and auth-triggering forms; add bot protection if abuse appears.
- Never collect prompt contents, student data or organisational documents.
- Minimise profile data; do not create public profiles.
- Provide a privacy notice, retention rules and an account-deletion process.
- Confirm current Malaysian personal-data obligations with appropriate legal review before launch.
- Keep secrets in environment management and provide only placeholder names in `.env.example`.
- Sanitise or reject unsafe Markdown/HTML and validate download paths.

### Copyright and licensing

- Application source code, tests, build scripts and configuration use the MIT License.
- Original catalogue resources, prompts, Skill packages, editorial documentation and original media use Creative Commons Attribution 4.0 International (CC BY 4.0), except where a resource or attribution manifest states otherwise.
- The preferred attribution is: “Kemahiran.AI by Forward Labs, powered by Forward College (Malaysia) — https://kemahiran.ai.” The location distinguishes the Malaysian institution from unrelated organisations with the same name.
- Brand names, logos and trade dress are excluded from the open-content licence. Third-party and user-supplied material retains its own rights and is not licensed merely because it is referenced by a resource.
- Publish only original, licensed or permissioned content.
- Do not reproduce protected prompt collections, assets or examples from reference products.
- Record provenance for every resource and preview asset.
- Preserve attribution and licence notices when adapting open-source work.
- Use synthetic/redacted example data; never expose real student, employee or government information.
- Verify redistribution rights for every file included in a Skill package.
- Scan downloadable archives for secrets, unexpected executables and unlicensed assets.
- Keep a licence/attribution manifest inside each downloadable package.
- Do not redistribute user-supplied reference documents or official source files unless explicit redistribution rights are recorded.

## 13. Editorial and publication workflow

### Status lifecycle

```text
draft → editorial_review → tool_test → Forward College internal approval → approved → published
```

Deprecated content remains addressable long enough to explain its replacement and preserve links.

Specialist review is a separately recorded optional step. It is not an MVP publication gate unless the product owner explicitly requires it for a particular resource.

### Required review

Every published resource must:

- be available in Bahasa Melayu;
- have a reviewed English variant for the bilingual MVP;
- have clear, outcome-focused titles and summaries;
- pass schema and link validation;
- be tested with at least one named supported tool;
- record the test date and reviewer;
- include limitations and responsible-use guidance where relevant;
- use consistent taxonomy values;
- record provenance, licence and attribution;
- display a visible last-reviewed date; and
- contain no sensitive real-world data.

Accountable Forward College internal review is mandatory for every published resource. The reviewing organisation alone is insufficient: a person or accountable role must consciously approve the record.

For official letters, circular/policy analysis, student assessment, safeguarding, personal data, legal/financial implications or organisationally sensitive workflows, record whether specialist review was completed. If it was not obtained, the public page must state that the resource received internal review only and instruct users to verify against the latest official source. Do not imply independent or specialist endorsement.

### Automated content checks

The build must fail for:

- invalid or missing schema fields;
- duplicate IDs or locale slugs;
- unknown taxonomy values;
- missing Malay or English sections for a published record;
- broken internal relationships;
- missing preview assets or alt text;
- impossible or future review dates;
- published records without attribution/licence/review data;
- download paths outside the approved package directory; or
- secrets detected in content or packages.

Warnings should cover stale review dates, untested compatibility claims and incomplete optional examples.

## 14. Success conditions

The MVP succeeds when a non-technical Malaysian user can:

- understand the difference between a Skill and a Prompt;
- find a useful Malay resource using Malay or English search terms;
- switch language without losing the current resource or filter context;
- filter by audience and desired outcome;
- copy a prompt or instruction confidently;
- download a Skill where supported;
- evaluate a visual prompt through a meaningful preview;
- discover a related resource;
- create an account using Google without a separate registration form;
- retrieve favourites on another device; and
- complete these tasks comfortably on a mobile device and with keyboard navigation.

Forward College succeeds when its team can add, revise, test and review resources through Markdown without duplicating shared bilingual metadata or editing application code.

## 15. Verified findings and assumptions

### Verified directly on 2026-10-21

- Skills Library exposes search, filters, copy-ready status, dependencies and categories: <https://skills-library.com>
- skills.sh presents Skills as reusable agent capabilities and supports package discovery: <https://www.skills.sh>
- Genspark uses job/role/output-oriented Skills discovery: <https://www.genspark.ai/skills>
- Zaz-OS/skills-library is MIT-licensed and uses an Astro site plus scraping/enrichment and MCP pipelines: <https://github.com/Zaz-OS/skills-library>
- Supabase documents Google OAuth with server-side PKCE flows: <https://supabase.com/docs/guides/auth/social-login/auth-google> and <https://supabase.com/docs/guides/auth/server-side>
- Supabase supports Postgres Row Level Security: <https://supabase.com/docs/guides/database/postgres/row-level-security>
- Both Vercel and Railway document Next.js deployments: <https://vercel.com/docs/frameworks/full-stack/nextjs> and <https://docs.railway.com/guides/nextjs>

### Based on the supplied product brief

- AI Black Magic interaction patterns were previously inspected through an authorised signed-in session. Its protected prompts and assets are not available for reuse.
- The initial audiences and content priorities reflect Forward College’s stated training ecosystem.

### Assumptions requiring confirmation before launch

- Public browsing remains available without login; accounts protect personalisation rather than catalogue access.
- Forward College is the default internal review organisation and Howie Chang is the accountable internal reviewer for MVP publication approvals. Specialist review is optional and its absence is disclosed where relevant.
- The visual identity and approved Forward College brand assets will be supplied before UI theming is finalised.

## 16. Open decisions

These decisions do not prevent architecture planning but must be resolved at the stated gate:

| Decision                         | Recommended default                                                          | Required by      |
| -------------------------------- | ---------------------------------------------------------------------------- | ---------------- |
| Domain purchase                  | `kemahiran.ai`; Cloudflare DNS; apex canonical                               | Confirmed        |
| Frontend host                    | Vercel, while retaining Railway portability                                  | Confirmed        |
| Catalogue access                 | Public; sign-in for personal actions                                         | Confirmed        |
| Default original-content licence | CC BY 4.0 for resources; MIT for application code                            | Confirmed        |
| Review ownership                 | Howie Chang for Forward College internal review; specialist status disclosed | Confirmed        |
| Analytics                        | Privacy-conscious, minimal events only                                       | Before launch QA |
