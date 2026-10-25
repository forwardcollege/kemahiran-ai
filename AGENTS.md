# Repository Instructions for Kemahiran.AI

These instructions apply to the whole repository. A more specific `AGENTS.md` in a subdirectory may add constraints but must not weaken these rules.

## 1. Read before working

Before making changes:

1. Read this file completely.
2. Read `PROJECT.md` for product requirements and decisions.
3. Read `PLANS.md` for the current phase, acceptance criteria and approval gates.
4. Inspect the repository state and preserve unrelated user changes.

If documents disagree, stop and raise the conflict instead of silently choosing one.

## 2. Current phase boundary

The repository has completed **Phase 1 — application foundation and content pipeline**, including its first successful hosted CI run. The user approved beginning **Phase 2 — design system, navigation and discovery** on 2026-10-25.

- Phase 1 application source, tests, content validation and CI may be maintained or repaired.
- Build Phase 2 through an initial coded vertical slice for product-owner review before scaling the interface across the full catalogue.
- Do not configure cloud services, register domains, deploy anything or begin Phase 3 until the user explicitly approves that work.

After implementation begins, complete only the approved phase unless the request clearly expands the scope.

## 3. Product boundaries

- Product name: **Kemahiran.AI**
- Owner: **Forward Labs**
- Institutional endorsement: **Powered by Forward College**
- Bahasa Melayu is the default language.
- English is a linked language variant of the same resource, not a separate catalogue.
- The three first-class libraries are AI Skills, LLM Prompts, and Image & Video Prompts.
- Image and Video are separate filterable types inside the visual library.
- Public catalogue access must not require login unless `PROJECT.md` is explicitly changed and approved.

## 4. Technical boundaries

- Use the current stable Next.js App Router with TypeScript when implementation is approved.
- Use shadcn/ui as the primary component system and Tailwind CSS for styling.
- Do not add another general-purpose component library without approval.
- Public catalogue content lives in validated Markdown files in Git.
- Supabase is limited to authentication and user-owned operational data for the MVP.
- Do not migrate catalogue records into Supabase or add a CMS without approval.
- Keep the application deployable to both Vercel and a conventional Node.js host such as Railway.
- Avoid unnecessary provider-specific services and lock-in.
- Use pnpm and commit its lockfile once the project is initialised.
- Pin dependency versions through the lockfile and review major upgrades deliberately.

## 5. Content rules

- One resource has one immutable ID and one shared record.
- Do not create separate Malay and English records.
- Each resource Markdown file must contain both required language sections and shared bilingual frontmatter.
- Use only approved taxonomy IDs; do not invent near-duplicate categories casually.
- Slugs may be localised, but IDs never change after publication.
- Markdown additions must not require application-code edits.
- Published resources must include provenance, licence, version, last-reviewed date, reviewer/test metadata and limitations where relevant.
- Forward College is the default internal review organisation for the MVP, and Howie Chang is the default accountable internal reviewer. A resource still requires his conscious approval before publication; naming the reviewer is not evidence that review occurred.
- Specialist review is optional for the MVP. Never imply it occurred when it did not. Resources involving curriculum, official documents, assessment, safeguarding or other higher-risk workflows must disclose when specialist review was not obtained and remind users to verify against the current official source.
- Malay content is written and reviewed as the primary version. Do not publish raw machine translations.
- Use synthetic or redacted examples. Never commit student records, government documents, customer data, credentials or other confidential material.
- Do not bulk import, scrape or reproduce third-party prompt collections.
- Do not claim compatibility with a model that has not been tested or adequately qualified.

Follow `docs/content-schema.md` and begin from the examples in `docs/content-examples/`.

## 6. Copyright and downloadable packages

- Publish only original content or material with documented permission/licensing.
- Treat reference websites as product-pattern references, never content sources.
- Preserve attribution and licence notices for adapted open-source material.
- Confirm redistribution rights for every file in a downloadable Skill package.
- Every package must include a licence/attribution manifest.
- Do not package secrets, user data, unexpected executables or unnecessary dependencies.
- Version package filenames and keep them aligned with the resource version.

## 7. Authentication, privacy and database rules

- MVP sign-in methods are Google OAuth and email magic link through Supabase Auth.
- Do not add password authentication unless approved.
- Use the supported server-side Supabase integration and PKCE flow.
- Allowlist authentication redirects explicitly.
- Enable and test Row Level Security for every user-facing table.
- A user may access only their own preferences, favourites and resource requests.
- Never expose the Supabase service-role key or other privileged secrets to browser code.
- Minimise personal data and do not create public user profiles.
- Use generic magic-link responses to reduce email enumeration.
- Include an account deletion/request-deletion path before production launch.
- Database schema changes require versioned migrations and tests.

## 8. Accessibility and interface rules

- Target WCAG 2.2 AA.
- Build common controls from shadcn/ui where suitable, then customise them to the approved Forward College theme.
- All flows must work with keyboard-only navigation.
- Preserve visible focus, semantic labels, correct heading order and sufficient contrast.
- Do not communicate meaning through colour alone.
- Respect reduced-motion preferences.
- Announce copy success/failure accessibly.
- Provide meaningful bilingual alternative text for informative imagery.
- Test mobile layouts and reflow, not only desktop breakpoints.
- Never sacrifice legibility or navigation clarity for decorative effects.

## 9. Security rules

- Never commit `.env` files, tokens, API keys or service credentials.
- Maintain an `.env.example` with names and descriptions only.
- Disable or sanitise raw HTML in Markdown.
- Validate all content, form inputs, relationship IDs, asset paths and download paths.
- Treat frontmatter and Markdown as untrusted input during rendering.
- Protect state-changing actions from cross-site request forgery through the framework/auth-supported approach.
- Rate-limit abuse-prone forms and authentication email requests.
- Run secret and dependency checks before release.
- Do not log magic links, access tokens, email contents or unnecessary personal information.

## 10. Testing and completion

When implementation is present, changes are not complete until the relevant checks pass.

Expected checks should include:

- formatting and linting;
- TypeScript type checking;
- unit/integration tests;
- content-schema and internal-link validation;
- production build;
- Playwright coverage for critical journeys;
- automated accessibility checks; and
- focused manual checks in Malay and English at mobile and desktop sizes.

Critical journeys include search/filtering, locale switching, copy, Skill download, Google/magic-link authentication, favourites and resource requests.

Do not weaken a test or schema merely to make a failing check pass. Explain any check that cannot run and the remaining risk.

## 11. Working practices

- Use `rg`/`rg --files` for repository search.
- Use `apply_patch` for manual file edits.
- Make the smallest coherent change that satisfies the approved phase.
- Preserve user changes and avoid destructive Git commands.
- Do not refactor unrelated code during a scoped task.
- Document architectural decisions that alter `PROJECT.md` or phase assumptions.
- Update `PLANS.md` checkboxes/status only when acceptance evidence exists.
- Do not mark a phase complete because code was written; verify its acceptance criteria.

## 12. External actions

Creating cloud projects, changing DNS, sending email, publishing deployments, enabling paid services and altering production data require explicit user authorisation. Read-only research and local validation do not.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
