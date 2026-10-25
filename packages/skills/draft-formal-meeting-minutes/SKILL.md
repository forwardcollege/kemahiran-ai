---
name: draft-formal-meeting-minutes
description: Creates formal Malaysian meeting-minutes drafts from user-supplied, de-identified notes. Use for secretariat drafting that must separate discussion, proposals, decisions and actions without inventing facts; do not use as final approval or as a substitute for the official record.
---

# Draft formal meeting minutes

Create a traceable draft for chair or secretariat verification. Write in Bahasa Melayu by default and use English when requested.

## Source and privacy gate

Require de-identified source notes. Treat an approved organisational template or style guide as optional reference knowledge, never as evidence of what occurred in the meeting.

- Use only facts stated in the supplied notes and verified meeting details.
- If source notes are absent, stop and request them.
- If the input appears to contain identity numbers, personal contact details, health or disciplinary information, confidential case details, credentials or classified material, do not repeat or process those details. Ask for a redacted version suitable for the organisation's approved AI tool.
- Never add meeting notes, attendance lists or confidential organisational documents to a reusable or public Skill package.

For optional template setup, read [references/template-setup.md](references/template-setup.md).

## Evidence rules

Classify each note before drafting:

- **Discussion:** information, concerns, options or views considered.
- **Proposal:** a suggested course of action that was not explicitly accepted.
- **Decision:** an outcome explicitly agreed, approved, decided or confirmed in the notes.
- **Action:** a task explicitly assigned or clearly requested.

Apply these rules strictly:

- A proposal, recommendation, intention, preference or discussion is not a decision.
- Silence or lack of objection is not agreement unless the notes explicitly say so.
- Keep conditions attached to decisions. Do not present a conditional decision as final.
- A decision is not automatically an action. Add it to the action register only when the notes explicitly assign or request implementation work.
- Record an action owner or due date only when explicitly supported. Otherwise use `[PERLU PENGESAHAN]` or `[CONFIRMATION REQUIRED]`.
- Record an action status only when explicitly stated. Otherwise omit the status field; do not assume `Belum Selesai`, `Dalam Tindakan` or any equivalent.
- Do not infer attendance from names or roles mentioned in discussion. Use only the verified attendance input.
- Do not invent agenda numbers. Preserve a number only when the source explicitly labels it as an agenda or item number. Numbering used merely to list notes, transcript segments or input fields is not agenda numbering. When agenda numbers are absent, use descriptive unnumbered headings or mark the order for confirmation.
- Surface contradictions, unclear wording and missing evidence in the verification list instead of resolving them from general knowledge.

## Inputs

Request or identify:

- organisation or committee;
- meeting title, date, time and venue;
- verified chair, secretariat and attendance;
- agenda or supplied item order;
- de-identified source notes;
- required organisational format, if any;
- confidentiality or distribution marking, if supplied; and
- output language.

Source notes are mandatory. Missing administrative details do not justify invention: continue only when a useful draft is possible and mark each gap for confirmation.

## Workflow

1. Check the privacy gate and source-note availability.
2. Separate verified meeting metadata from discussion content.
3. Build an evidence ledger classifying each source statement as discussion, proposal, decision, action or unclear.
4. Draft neutral minutes in the supplied agenda order.
5. Create an action register using only explicitly supported tasks. Include owners, due dates and statuses only when supported; mark a missing owner or due date for confirmation, and omit an unsupported status.
6. Compare every decision and action against the evidence ledger.
7. List every missing, ambiguous or contradictory item requiring confirmation.
8. Leave approval, circulation and final-record status to the chair or secretariat.

## Output

Use the approved organisational format when supplied. Otherwise provide:

1. a `DRAF UNTUK PENGESAHAN` / `DRAFT FOR VERIFICATION` heading;
2. meeting metadata and verified attendance;
3. agenda-ordered discussion, proposals, decisions and actions, using numbered headings only when agenda numbers are explicitly supplied;
4. a concise action register;
5. a verification list covering all marked gaps and conflicts; and
6. a closing note that the chair or secretariat must approve the final record.

Keep discussion summaries neutral and proportionate. Do not add policy, legal conclusions, commitments, praise, criticism or opinions about participants.

By default, the action register has only `No.`, `Action`, `Owner` and `Due date` columns (or their Bahasa Melayu equivalents). Add a `Status` column only when the source notes explicitly state at least one action status. Do not fill an unsupported status with a confirmation marker.

## Final audit

Before responding, verify that:

- every decision has explicit source support;
- every action exists in the source notes;
- decisions have not been converted into actions without an explicit assignment or request;
- conditions remain attached;
- owners and dates are sourced or marked for confirmation;
- action statuses are sourced or omitted;
- attendance comes only from the verified list;
- no agenda number appears unless the source explicitly identifies it as an agenda or item number;
- proposals are not presented as decisions; and
- the result remains visibly a draft.
