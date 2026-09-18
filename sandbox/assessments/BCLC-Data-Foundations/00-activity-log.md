---
title: "Activity Log — British Columbia Lottery Corporation"
wiki_page: "00"
status: in-progress
tags: [dra, activity-log, heartbeat]
last_synced: 2026-06-09
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
| 2026-06-25 | Analysis | Pre-kickoff desk-research analysis (4 research files → wiki 01–08) | — | [[inputs/research/deep-research]] | analyzed | 2026-06-25 |
| 2026-06-25 | Survey | Discovery survey published as Google Form (attributed; re-published after QBR→go-lives fix) | — | https://forms.gle/9oWo9wnWHpabUn9t7 | planned | 2026-06-25 |
| TBD (wk of Jun 29) | Pre-call | Sponsor pre-call w/ Mark Goldberg — validate kickoff deck + timeline; lock interview list. AE (Cameron Tait) setting up. | — | [[setup/pre-call-mark-goldberg]] | planned | 2026-06-25 |
| 2026-07-13 | Kickoff | DRA Kickoff Meeting | — | — | planned | 2026-06-09 |

> Append rows in chronological order. State transitions in place — don't duplicate rows.
> When `state` changes to `analyzed`, link the artifact to the structured note it produced (e.g., `[[inputs/interviews/2026-05-22-cdo-jane-doe]]`).

---

## Setup

### 2026-06-09 — dra-env-setup

- **Vault folder:** Created from template
- **Files newly created:** All template files (CLAUDE.md, Index.md, 00-activity-log.md, 01-08 wiki pages, inputs/, setup/)
- **Files preserved (existing):** None (new engagement)
- **Frontmatter refreshed in:** CLAUDE.md, Index.md, 00-activity-log.md, 01-08 wiki pages
- **Drive folder:** Not verified (Google Drive API not accessible via current MCP tools)
- **Primary Slack channel:** Registered in DRAVantage (#proj-bclc-dra-june2026, C0B9429ML30) — verification skipped due to rate limiting
- **Required fields:** ✅ All present (Codename, Account, GPS_Segment, AE, Kickoff_Date, Target_Readout_Date)
- **Warning fields missing:** None — all optional fields populated

### 2026-06-24 — Research assets linked

- **Secondary Slack channel added:** #bclc-account-internal (C07T0TVQB34, Channel_Type: Account) — 10+ years of internal account team history
- **Historical Drive folder added:** BCLC Account History (10yr Archive) — https://drive.google.com/drive/folders/1yXZBp2eqZ4ALP0hA3Y2mUCnTwZU0VntK
- **Total research sources:** 2 Slack channels, 5 Drive resources (1 root folder, 4 supporting docs/folders)
- **Ready for:** `dra-research` skill execution — will pull from both DRA project channel and decade of account context

## 2026-06-25 — dra-analyze-input (pre-kickoff desk research)

- **Inputs processed:** deep-research.md, workspace-inventory.md, slack-history.md, org62-account-snapshot.md (all existing `dra-research` outputs; no new interview/survey input)
- **Wiki pages updated:** 01 (strategic alignment), 02 (barriers), 03 (personas — inferred), 04 (value chain — scored), 05 (current state), 06 (target state — hypothesis), 07 (roadmap — hypothesis), 08 (appendix), Index
- **Scores set:** Connect/Integrate/Understand/Unify/Validate/Protect/Orchestrate = 1; Decide = 2; Act = 2. IHS = 33, AIR = 40.
- **Severities set:** Blind Spot / Time Trap / Trust Gap all **High** (Medium confidence)
- **Org write-back:** DRA-0003 (a05g7000005YIXVAA4) — severities + IHS 33 + AIR 40
- **Confidence:** Low–Medium throughout — zero customer interviews; validate at 2026-07-13 kickoff
- **Pattern:** GIGO risk zone (Unlock 1 / Trust 1 / shadow Activate 2)

## 2026-06-24 — dra-research

- **Slack channels read:** #proj-bclc-dra-june2026 (14 messages), #bclc-account-internal (96 messages, Jan-Jun 2026), total 110 messages
- **Org62 account snapshot pulled:** Account record, 20 account team members, 149 opportunities (last 3 years), 50 tasks, 50 events, 100 cases
- **Workspace docs indexed:** 5 Drive resources (2 documents fully read, 3 folder structures inventoried)
- **Anthropic deep research:** Previously completed 2026-06-10 (43 sources cited) — preserved as-is
- **Gemini prompt file:** Previously generated 2026-06-09 — preserved as-is
- **Files created:** slack-history.md, org62-account-snapshot.md, workspace-inventory.md
- **Files preserved from prior run:** deep-research.md (2026-06-10), gemini-deep-research-prompt.md (2026-06-09)

---

## Working Plan (auto-generated)

> [!NOTE]
> This section is rewritten by skills at the start of each session. It is NOT manually maintained.

**Pending analysis** (events in `happened` state, awaiting `dra-analyze-input`):
- _none_

**Upcoming this week** (events in `planned` state with date within 7 days):
- **Sponsor pre-call with Mark Goldberg** (date TBD, wk of Jun 29) — AE setting up; brief ready at [[setup/pre-call-mark-goldberg]]. Goal: validate deck + timeline, lock interviews. Hold *before* survey send (~Jun 28) if possible.
- **Survey distribution** (~Jun 28) — link live: https://forms.gle/9oWo9wnWHpabUn9t7

**Stale `planned` entries** (date is in the past but state never advanced — needs human triage):
- _none_

---

## Sequencing Reminders

The following ordering is enforced by skills, not by this log — but it's recorded here so the architect can sanity-check the agent's plan:

1. **Kickoff before interviews.** Don't analyze interviews until the kickoff has happened and scope is set.
2. **Business stakeholders before technical.** Interview business leaders/users first to anchor outcomes; technical/data interviews are scoped *by* what business said.
3. **Research before kickoff.** `dra-research` outputs feed the kickoff prep — the architect should walk in with context, not gather it during the kickoff.
