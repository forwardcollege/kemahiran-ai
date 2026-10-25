# Kemahiran.AI

Kemahiran.AI is Forward Labs’ Malay-first bilingual library of practical AI Skills, LLM prompts and visual-prompt collections for Malaysian educators, public-sector teams, SMEs and professionals. It is powered by Forward College.

## Current status

Phase 1 is in progress. The repository contains 36 internally approved resources and a production-shaped Next.js content pipeline. The records are not yet publicly published: licence selection, outstanding tool tests and the explicit publication gate remain open.

## Local development

Requirements: Node.js 22 or later and pnpm 12.15.0.

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`; the root redirects to the Malay route at `/ms`. Development mode shows approved resources for editorial preview. A normal production build exposes only records whose status is `published`.

## Adding or updating content

Catalogue records are ordinary Markdown files under `content/skills`, `content/llm-prompts` and `content/visual-prompts`. Every file contains shared bilingual YAML frontmatter followed by exactly one `## Bahasa Melayu` section and one `## English` section. No application-code edit is needed to add a valid resource.

Start with [the authoring guide](docs/content-authoring.md) and [the content schema](docs/content-schema.md). Then run:

```bash
pnpm content:validate
pnpm test
```

## Quality checks

```bash
pnpm check
```

This checks formatting, lint, TypeScript, tests, content validation and the production build. CI runs the same checks for pushes and pull requests.

## Repository documents

- `PROJECT.md` — approved product definition and architectural decisions
- `PLANS.md` — phased implementation plan and acceptance gates
- `AGENTS.md` — durable repository instructions
- `CONTENT_INVENTORY.md` — controlled 36-resource scope
- `docs/content-schema.md` — Markdown and frontmatter contract

## Secrets

Never commit `.env` files or credentials. `.env.example` contains names only. Supabase is planned for Phase 4 and is not required for the Phase 1 content pipeline.
