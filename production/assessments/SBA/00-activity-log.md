---
title: "Activity Log — Small Business Administration"
wiki_page: "00"
status: in-progress
tags: [dra, activity-log, heartbeat]
last_synced: null
---

# Activity Log

> [!NOTE]
> This is the **engagement heartbeat** — Claude's working memory for what's happened in this DRA, what hasn't, and what's been processed. Every skill checks this log before doing work, and updates it after. Humans rarely need to read it; it exists so the agent can answer "what should I work on next?" without re-deriving the answer every session.

**Maps to:** Internal-only. Not part of the customer deliverable. Mirrors (does not replace) Google Calendar.

---

## How This Log Works

Every DRA-related event passes through three states:

| State | Meaning |
|---|---|
| `planned` | Event is on the calendar but hasn't happened yet (or hasn't been confirmed to have happened). |
| `happened` | Event occurred. Recording / transcript / artifact may exist but hasn't been analyzed yet. |
| `analyzed` | `dra-analyze-input` (or another skill) has processed the artifact and updated the relevant wiki page(s). |

### Source of truth

- **Calendar** — the assigned SE/architect's Google Calendar is the source of truth for *what was scheduled*. The agent reads the calendar (filtered to DRA-related events) rather than asking the user to enter events twice.
- **This log** — the source of truth for *processing status*. The calendar doesn't know whether a recording has been analyzed; this log does.

### When this log is updated

- **`dra-env-setup`** seeds this file from the template.
- **Every skill that reads inputs or interacts with calendar events** (`dra-research`, `dra-kickoff`, `dra-analyze-input`, future skills) appends or updates rows here as part of its run.
- **A "heartbeat" check** at the start of any working session: scan the calendar for new DRA events, mark anything past the start time as `happened`, queue up unprocessed `happened` rows for analysis.

### What counts as a DRA-related activity

- Kickoff meeting
- Stakeholder interviews (per-persona, business-first then technical)
- Working sessions (architect + customer, architect + internal team)
- Survey send / close / debrief milestones
- Deep research milestones (research generated, research reviewed)
- Readout / draft review / final delivery
- Internal DRA syncs (e.g., DRAVantage team check-ins)

Don't log every meeting on the calendar — only those tagged or clearly tied to this engagement.

---

## Activity Log

| Date | Type | Description | Calendar Event ID | Artifact / Source | State | Last Updated |
|---|---|---|---|---|---|---|
| 2026-06-08 | Context note | SBA workspace created after the DRA/readout work was already substantially underway; use as a realistic testbed for `dra-analyze-input` rather than a normal greenfield DRA sequence. | — | [[Index]]; primary readout deck | happened | 2026-06-08 |
| 2026-05-07 | Interview | Internal SBA SME discussion about the Small Business Owner persona and OneSBA data landscape. | — | [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] | analyzed | 2026-06-08 |
| 2026-07-06 | Interview | National Ombudsman (Natalie) operational interview covering NOCMS, complaint management process, integration gaps with SBA lending systems. | — | [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] | analyzed | 2026-07-06 |
| 2026-07-08 | Deliverable reference | Logged the delivered SBA Executive Business Review and DRA Overview decks in DRAVantage and created a local reference note for future `dra-generate-output` skill design. | — | [[inputs/customer-docs/2026-06-sba-deliverable-deck-examples]] | analyzed | 2026-07-08 |

> Append rows in chronological order. State transitions in place — don't duplicate rows.
> When `state` changes to `analyzed`, link the artifact to the structured note it produced (e.g., `[[inputs/interviews/2026-05-22-cdo-jane-doe]]`).

---

## Working Plan (auto-generated)

> [!NOTE]
> This section is rewritten by skills at the start of each session. It is NOT manually maintained.

**Pending analysis** (events in `happened` state, awaiting `dra-analyze-input`):
- _none_

**Upcoming this week** (events in `planned` state with date within 7 days):
- _none_

**Stale `planned` entries** (date is in the past but state never advanced — needs human triage):
- _none_

---

## Sequencing Reminders

The following ordering is enforced by skills, not by this log — but it's recorded here so the architect can sanity-check the agent's plan:

1. **Kickoff before interviews.** Don't analyze interviews until the kickoff has happened and scope is set.
2. **Business stakeholders before technical.** Interview business leaders/users first to anchor outcomes; technical/data interviews are scoped *by* what business said.
3. **Research before kickoff.** `dra-research` outputs feed the kickoff prep — the architect should walk in with context, not gather it during the kickoff.
