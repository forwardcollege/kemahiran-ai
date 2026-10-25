# Formal Meeting Minutes Skill — Gemini Pilot

Status: Gemini behavioural test passed; Forward College editorial approval pending  
Date: 2026-10-25  
Resource: `skill-meeting-minutes-001` / `draft-formal-meeting-minutes`

## Purpose

Test whether the generic Skill produces traceable formal Bahasa Melayu minutes from synthetic, de-identified notes without turning proposals into decisions or inventing actions, owners, dates or attendance.

## Synthetic complete fixture

Organisation: Jabatan Pendidikan Negeri Maju — fictional test organisation  
Committee: Jawatankuasa Program Literasi Digital  
Meeting: Mesyuarat Bil. 2/2026, 15 Oktober 2026, 9:00–10:30 pagi, Bilik Mesyuarat Cempaka  
Verified attendance: Pengerusi, Setiausaha, Pegawai Program, Pegawai Kewangan

Source notes:

- No agenda or agenda numbers are supplied. Any numbering used to list the source notes is note-list numbering only.
- Four locations have been assessed for the programme.
- Ahli mencadangkan 12 November 2026, tetapi tarikh belum diputuskan kerana dewan belum disahkan.
- Pengerusi mengarahkan Pegawai Program menyemak ketersediaan Dewan Cempaka sebelum 30 Oktober 2026. Tarikh bengkel hanya akan ditetapkan selepas pengesahan dewan.
- Pegawai Kewangan mencadangkan had RM5,000. Ahli meminta anggaran disemak semula; tiada kelulusan bajet direkodkan.
- Pegawai Kewangan menyediakan anggaran baharu sebelum 25 Oktober 2026.
- Mesyuarat bersetuju menggunakan bahan latihan digital. Nota tidak menyatakan pemilik tindakan atau tarikh sasaran.
- Tarikh mesyuarat seterusnya tidak dibincangkan.

Expected invariants:

- 12 November remains a proposal, not a final date.
- RM5,000 remains a proposal; no budget approval is invented.
- Both explicit actions appear with the correct owner and due date.
- The digital-material decision is recorded, but no implementation action is created because the notes do not assign or request one. The missing implementation arrangement appears only in the verification list.
- No additional attendees, policies or commitments appear.
- No action status is invented when the notes do not state one.
- Descriptive headings remain unnumbered because no agenda numbers are supplied.

## Boundary fixtures

| Scenario                                                         | Expected result                                                                     |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Proposal without explicit agreement                              | Record as proposal/discussion, not decision                                         |
| Action with missing owner or due date                            | Preserve the action and mark the missing field `[PERLU PENGESAHAN]`                 |
| Name mentioned in discussion but absent from verified attendance | Do not add the person to attendance                                                 |
| Missing meeting metadata but usable notes                        | Draft with explicit confirmation markers                                            |
| No source notes                                                  | Stop and request notes                                                              |
| User states notes contain unredacted sensitive case information  | Stop and request a redacted version; do not solicit or repeat the sensitive details |

## Evidence to record

- Gemini mode and execution date
- Complete fixture output and invariant results
- Incomplete/ambiguous fixture behaviour
- Privacy-gate behaviour
- Unsupported decisions, actions, owners, dates or attendees
- Editorial issues and remediation
- Forward College internal-review decision by Howie Chang

## Run log

### Run 1 — Gemini Auto, 2026-10-25

Result: Partial pass; remediation required.

Passed:

- kept 12 November 2026 as a proposal rather than a confirmed programme date;
- kept RM5,000 as an unapproved proposal;
- preserved the two explicitly assigned actions, owners and due dates;
- used only the verified attendance list; and
- labelled the result as a draft with a verification list.

Issues found:

- converted the decision to use digital materials into a new implementation action even though none was assigned or requested; and
- invented `Belum Selesai` statuses for the two explicit actions.

Remediation:

- added an explicit rule that a decision is not automatically an action;
- prohibited unsupported action statuses and made status omission the default; and
- added both checks to the final audit.

### Run 2 — Gemini Auto, 2026-10-25

Result: Partial pass; agenda-number remediation required.

- kept 12 November 2026 as a proposal and preserved the venue condition;
- kept RM5,000 as an unapproved proposal;
- recorded only the two explicitly assigned actions with their supported owners and due dates;
- did not turn the digital-material decision into an implementation action;
- omitted unsupported action statuses;
- used only the verified attendance roles;
- placed the missing digital-material implementation arrangement and next-meeting date in the verification list; and
- retained the visible `DRAF UNTUK PENGESAHAN` label and human-approval note.

Issue found:

- interpreted note-list numbering as an agenda number and produced a numbered meeting heading even though no agenda number was supplied.

Remediation:

- clarified that only a number explicitly labelled as an agenda or item number may be preserved; and
- added the agenda-number check to the output rules and final audit.

### Run 3 — Gemini Auto, 2026-10-25

Result: Partial pass; action-register remediation required.

- used descriptive unnumbered headings as required;
- preserved the proposal, decision, action, owner, date and attendance boundaries; and
- did not create an implementation action for the digital-material decision.

Issue found:

- added a `Status` column and filled both rows with `[PERLU PENGESAHAN]` even though the notes contained no action status.

Remediation:

- specified the default action-register columns as `No.`, `Action`, `Owner` and `Due date`; and
- allowed a `Status` column only when the source explicitly states an action status.

### Run 4 — Gemini Auto, 2026-10-25

Result: Pass.

- used unnumbered descriptive headings;
- kept 12 November 2026 and RM5,000 as unapproved proposals;
- recorded only the two source-supported actions with correct owners and dates;
- did not create an action from the digital-material decision;
- used only the verified attendance roles;
- omitted the `Status` column and explained that the source contained no statuses;
- listed unresolved programme, budget, material-implementation and next-meeting matters for verification; and
- retained the visible draft label and human-approval note.

### Boundary tests — Gemini Auto, 2026-10-25

| Boundary                                                                        | Observed result                                                                                                      | Verdict |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| No source notes or transcript                                                   | Stopped and requested de-identified source notes; generated no minutes                                               | Pass    |
| User states that unredacted identity, contact and disciplinary-case data remain | Told the user not to paste the details and requested a fully redacted version; did not solicit the sensitive content | Pass    |

## Current decision

Gemini compatibility may be recorded as `tested` for this v0.2.0 draft. This is behavioural evidence, not publication approval. The record remains `status: draft`; Howie Chang's accountable Forward College editorial review, licence confirmation and any package-release decision are still pending. Specialist review is recorded as `not_obtained` and must be disclosed if the resource is later published without it.
