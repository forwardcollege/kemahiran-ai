# Business Proposal Skill — Gemini Pilot

Status: Gemini behavioural test passed; Forward College editorial approval pending  
Date: 2026-10-25  
Resource: `skill-business-proposal-001` / `draft-business-proposal`

## Purpose

Test whether the generic Skill produces a commercially coherent Bahasa Melayu proposal from synthetic inputs without inventing evidence, guarantees, scope, prices or legal terms.

## Synthetic complete fixture

All organisations and facts below are fictional.

- Client: Koperasi Maju
- Need: practical introductory AI literacy for 40 administrative employees with mixed experience
- Approach: two instructor-led half-day workshops, 20 participants per session
- Deliverables: two workshops; one PDF slide deck; one participant worksheet; one three-page post-programme summary
- Acceptance: workshops delivered to the agreed agenda; materials delivered two working days before the first session; summary delivered within five working days after the second session
- Schedule: Session 1 on 17 November 2026; Session 2 on 19 November 2026
- Supplier responsibilities: facilitator, digital materials and summary
- Client responsibilities: venue, projector, internet access, participant devices and verified attendance list
- Approved price: RM8,400 including all applicable taxes for this synthetic offer
- Payment terms: 50% upon purchase-order confirmation and 50% within 14 calendar days after delivery of the summary
- Exclusions: venue, catering, participant devices, printing and travel beyond 30 km
- Evidence supplied: the fictional supplier has delivered 12 corporate AI-literacy workshops since 2025; no client names or outcome figures may be claimed
- Desired tone: concise and professional

Expected invariants:

- exactly two workshops and 40 participants are retained;
- no additional deliverable or included service appears;
- RM8,400, tax treatment and the 50/50 payment schedule are reproduced accurately;
- exclusions remain outside the base scope;
- only the supplied experience statement appears;
- no productivity guarantee, named past client, testimonial, certification or legal term is invented; and
- the output is visibly a draft for commercial review with a consistency audit.

## Incomplete fixture

Provide only the need, audience and possible two-workshop approach. Omit approved deliverables, dates, price, tax and payment terms.

Expected result: ask no more than five critical questions and stop. Do not draft a full proposal or invent commercial terms.

## Evidence to record

- Gemini mode and execution date
- Complete-fixture output and invariant results
- Incomplete-fixture stop behaviour
- Unsupported claims, commitments, prices, terms or legal language
- Arithmetic and scope–schedule–price consistency
- Remediation and retest, if needed
- Forward College editorial decision by Howie Chang

## Run log

### Run 1 — Gemini Auto, 2026-10-25

Result: Partial pass; remediation required.

Passed:

- preserved the two workshops, 40 participants, supplied deliverables and dates;
- reproduced RM8,400, the supplied tax treatment and 50/50 payment schedule;
- kept exclusions outside the base scope;
- added no named past client, certification, legal term or unsupported numerical result; and
- retained the commercial-review label and consistency audit.

Issues found:

- invented `bersemuka`, `hands-on` delivery and an `experienced` facilitator;
- introduced productivity, ethics and effectiveness benefits that were not supplied;
- strengthened the experience statement with `berjaya`; and
- described the approved price as fair rather than merely checking consistency.

Remediation:

- prohibited unsupplied delivery modes, methods, facilitator attributes, benefits and value claims;
- prohibited unsupported commercial judgements; and
- required experience evidence to remain semantically neutral without promotional strengthening.

### Run 2 — Gemini Auto, 2026-10-25

Result: Partial pass; second remediation required.

The output removed the unsupported success adjective and price judgement, but it still inferred an in-person delivery mode from the client's venue/projector responsibilities and added an unsupplied improvement claim.

Remediation:

- clarified that client facilities do not establish delivery mode;
- prohibited `bersemuka`, `dalam talian` or `hibrid` when mode is absent;
- prohibited claims that the offer is tailored without supplied adaptation details; and
- added a standard-Bahasa-Melayu and unsupported-outcome audit.

### Run 3 — Gemini Auto, 2026-10-25

Result: Pass.

- preserved two workshops, 40 participants, the four supplied deliverable types and all dates;
- reproduced RM8,400, tax treatment and the 50/50 payment schedule accurately;
- kept every supplied exclusion outside the base scope;
- used only the supplied neutral experience statement;
- made no delivery-mode, method, certification, guarantee, named-client or outcome claim;
- checked the 50/50 arithmetic as RM4,200 plus RM4,200 without judging the price; and
- retained the commercial-review label and consistency audit.

### Incomplete fixture — Gemini Auto, 2026-10-25

Result: Pass.

Gemini asked five critical questions covering deliverables, schedule, price/currency, tax/payment and client responsibilities, then stopped without drafting a proposal or inventing commercial terms.

## Current decision

Gemini compatibility may be recorded as `tested` for this v0.2.0 draft. This is behavioural evidence, not publication approval. The record remains `status: draft`; Howie Chang's Forward College editorial review, licence confirmation and any package-release decision remain pending.
