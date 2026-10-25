# Phase 2 coded preview

Status: Option 2 approved, implemented and verified
Branch: `phase-2-design-preview`  
Date: 2026-10-26

## Purpose

This preview is the visual and interaction checkpoint before the complete Phase 2 interface is expanded. It is deliberately a vertical slice, not a finished website.

## Approved visual direction

The direction is **catalogue-first editorial utility**:

- a dark persistent library rail on desktop and compact mobile navigation;
- an all-resources homepage that exposes the full catalogue count before the three focused libraries;
- immediate search, filtering and resource access rather than a marketing hero;
- dense text-led rows for Skills and LLM Prompts without mandatory decorative imagery;
- Inter-led deep ink typography with JetBrains Mono metadata, vivid green for Skills, indigo for LLM Prompts and amber for visual resources;
- warm off-white surfaces, precise rules and restrained elevation; and
- Phosphor interface icons with meaningful regular, bold and filled states; and
- Forward College endorsement without a redundant ownership byline in the rail.

The durable design rules are maintained in the repository-root [DESIGN.md](../../DESIGN.md). Final brand assets may refine the identity without reversing the approved catalogue-first structure.

## Included in this checkpoint

- responsive navigation rail/mobile header and compact footer;
- Malay-first all-resources catalogue as the homepage;
- clearly differentiated treatments for AI Skills, LLM Prompts and Image & Video Prompts;
- functional library search, audience filtering, sorting and a sample advanced filter;
- text-led library index pages; and
- representative desktop and compact-screen behaviour.

The 2026-10-26 styling pass applied the approved navy/blue/indigo palette, Inter and JetBrains Mono font roles, 8px control geometry, restrained reveal motion and the Phosphor-only icon system. It preserved the approved shell, catalogue grids, information hierarchy and shadcn/ui component foundation.

The separate Explore rail group and editor's-choice banner were removed after product-owner review because they duplicated the collection model and implied recommendations that had not yet been curated.

## Intentionally deferred

- cross-library search, the final full facet set and pagination;
- persistent locale and filter state;
- active-navigation states and complete mobile-menu behaviour testing;
- final accessibility audit and Playwright coverage;
- favourites, authentication and resource requests;
- redesigned resource-detail templates; and
- final logo and favicon assets.

## Approval record

Howie Chang selected Option 2 on 2026-10-25. Expand only the approved catalogue-first direction during Phase 2; material changes to the shell, hierarchy or resource-list pattern require another review checkpoint.
