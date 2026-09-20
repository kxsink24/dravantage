---
title: "Activity Log — The Financial Conduct Authority"
wiki_page: "00"
status: in-progress
tags: [dra, activity-log, heartbeat]
last_synced: 2026-09-16
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
| 2026-03-17 | Interview | Jagpal Jheeta (CPO) intro | — | Slack channel context | happened | 2026-07-13 |
| 2026-03-17 | Interview | Jason Baker (Interim Chief Architect) | — | Slack channel context | happened | 2026-07-13 |
| 2026-04-27 | Interview | Lauren Dixon (CDO) intro | — | Slack channel context | happened | 2026-07-13 |
| 2026-05-20 | Interview | Lauren Dixon (CDO) follow-up | — | — | planned | 2026-07-13 |
| 2026-06-03 | Milestone | Data Foundations deep-dive / target readout | — | — | planned | 2026-07-13 |
| 2026-06-11 | Interview | Steve Hall | — | — | planned | 2026-07-13 |
| 2026-07-01 | Interview | Johan (new COO) | — | Slack channel context | happened | 2026-07-13 |
| 2026-07-08 | Working Session | Blind Institute of Technology accessibility call | — | Slack recap by Chris Dowlen | happened | 2026-07-13 |

## Environment

## 2026-07-13 — dra-env-setup (dry-run mode, no DRAVantage writes)

- Vault folder: created from template
- Files newly created: all template files copied to `assessments/FCA-Data-Foundations/`
- Files preserved (existing): none
- Frontmatter refreshed in: `Index.md`, `00-activity-log.md`, `01`–`08` pages, `setup/README.md`, `inputs/**/README.md`
- Drive folder: not set (blocked — no DRAVantage record; two source Google Docs are auth-walled)
- Primary Slack channel: verified — `#the-financial-conduct-authority` (C08EVRN6152)
- Required fields (Codename, Account, GPS Segment, AE): ✅ all present in the intake extract
- Warning fields still missing: `Drive_Folder_URL__c`, `Account_Executive__c` as DRAVantage User (Josh Adams needs a DRAVantage User record), full FCA emails for Jason Baker / Andrew Higgs / Julius / Nick Eden-Russe / Faisal
- **Bootstrap gap:** `dra-intake` writes to DRAVantage were skipped. Seed data is in `../setup/FCA-intake-dryrun.md` — replay before running `dra-research`, `dra-kickoff`, or downstream skills that query DRAVantage.

## 2026-09-16 — dra-env-setup (live run — bootstrap gap closed)

- `dra-intake` ran for real this cycle and committed live DRAVantage records: `DRA_Engagement__c` (`DRA-0117` / `a05g700000BDbtIAAT`), 9 `DRA_Stakeholder__c` records, 1 `DRA_Slack_Channel__c` record.
- Vault folder: already existed (from the 2026-07-13 dry-run pass) — topped up, not recreated. No template files were missing.
- Files newly created: none.
- Files preserved (existing): all — pages 01–08 still template-default (no `dra-analyze-input` content yet), so only frontmatter/body fields tied to live DRAVantage data were touched.
- Frontmatter refreshed in: `Index.md` (`kickoff_date` 2026-03-10→2026-09-25, `target_readout_date` 2026-06-03→TBD), `00-activity-log.md` (`last_synced`).
- Other substitutions: `CLAUDE.md` and `Index.md` — "DRAVantage Record" TBD → `DRA-0117`; Index.md body table Kickoff/Target Readout Date rows aligned to live record.
- Drive folder: ⚠️ still not set (`Drive_Folder_URL__c` is null on the live record) — `dra-research` will be blocked on Drive input until this is filled in.
- Primary Slack channel: ✅ verified live — `#the-financial-conduct-authority` (C08EVRN6152) responded with a real, current (2026-09-11) message via `slack_read_channel`.
- Required fields (Codename, Account, GPS Segment, Account_Executive__c): ✅ all present on the live record.
- Warning fields still empty: `Target_Readout_Date__c`, `Drive_Folder_URL__c`.
- **Note on `Account_Executive__c`:** the 2026-07-13 dry-run flagged this as blocked ("needs a DRAVantage User record") — that's now resolved differently than expected: the live field is a lookup to `DRA_Stakeholder__c`, not `User`, and is already set to the Josh Adams stakeholder record.
- **⚠️ Stakeholder/seed-data gap vs. `../setup/FCA-intake-dryrun.md`:** the dry-run doc drafted a much larger seed set — 18 FCA-side + 12 Salesforce-side + 7 SI-partner stakeholders, 7 `DRA_Interview__c` stubs, 2 secondary Slack channels, and 2 `DRA_Drive_Resource__c` records — but the live intake that actually ran only committed 9 stakeholders (Josh Adams + 8 customer/SI), 1 primary Slack channel, and no interviews/Drive resources. The live record's `Compelling_Event__c`/`Strategic_Initiatives__c` narrative (Palantir AML compete, 2030 agenda, Transform Org) also differs from — and per the 2026-09-11 Slack signal, is more current than — the dry-run's July narrative (Own Archive retirement, RegEx/RCMS, Motor Finance Redress). The dry-run's anchor opportunity (`006ed00000aTJvNAAW`) also differs from the live record's (`006ed00000QP04MAAT`). Recommend the architect review `../setup/FCA-intake-dryrun.md` against the live record and decide whether to backfill any of the additional stakeholders/interviews before `dra-research` runs — don't assume the smaller live set is exhaustive.
- **⚠️ Account link gap (carried over, unresolved):** `Account.Org62_Account_Id__c` on the DRAVantage Account record is still null — blocked by an FLS restriction on the integration user's profile, not yet resolved. Needs an admin decision (grant field access vs. rely on an automated promotion/sync path suggested by `Promoted_At__c`/`Promoted_By__c`/`Vault_Migration_Status__c` fields discovered on `DRA_Engagement__c`).

## 2026-09-16 — dry-run reconciliation (same day, following env-setup)

Reconciled `../setup/FCA-intake-dryrun.md` against the live record per architect decision. Backfilled the gap rather than leaving it for later.

- **23 additional `DRA_Stakeholder__c` records created** (stakeholder count now 32, up from 9):
  - 12 FCA-side, org62-matched: Debbie Gupta, Dominic Hastings, Ian Hersey, Penelope Forsyth, Mayesta Ewer, Paul Rice, Gurdeep Sembhi, Glenn Redemann, Hannah Lipscombe-Mitchell, Catherine Coady, Aman Sapra, Seema Dhokia.
  - 4 FCA-side, no org62 match (title/role only, flagged "unconfirmed"): Andrew Higgs, Julius B, Nick Eden-Russe, Faisal.
  - 7 SI-partner Reviewers: Nadia, Preeti, Victor, Hannah (Deloitte); Mike Hess, Ertay Shashko (Blind Institute of Technology); Mark Winters (Informatica).
- **2 secondary `DRA_Slack_Channel__c` records added** (`Primary__c=false`, `Channel_Type__c=Other`): FCA Case Management Vision (C0AEQ756YDA), FCA x Salesforce Exec Alignment (C0ANBMS4DNX).
- **2 `DRA_Drive_Resource__c` records added** (both still auth-walled, not yet read): FCA DRA source deck (Slides, primary), FCA DRA source doc (Doc).
- **Deliberately excluded — not created:** the dry-run's 11 "Salesforce-side" people (account team AEs/SEs — Thomas O'Neill, Jon Bland, Simon Collinson, Maribel Pinilla, Chris Dowlen, Sylvain Naltchayan, Rima Mukherjee, Murray Grubb Jnr, Matthew Rochard, Dipesh Bhoola, Damian Ondore). These are the internal account team, not DRA assessment participants — recording them as `DRA_Stakeholder__c` (a schema meant for interview/survey/sponsor/reviewer participants) would misuse the object. Josh Adams remains the sole Salesforce-side stakeholder, as Account Executive.
- **Not reconciled — still open:**
  - 3 Drive links from the dry-run have no URL captured (`FCA Account Planning FY27`, `FCA QAP`, `FCA Intact/ESS Security Assessment + Security Playback Notes`) — can't create `DRA_Drive_Resource__c` without a URL; chase these from Josh Adams if needed.
  - No `DRA_Interview__c` stubs created. The dry-run's 7-row interview list maps onto rows already tracked informally in this log's Activity Log table above (`happened` state) — creating formal `DRA_Interview__c` records for those same events is a separate decision tied to the still-open question of whether those `happened` rows are genuine DRA discovery interviews or pre-kickoff intro/relationship calls (flagged in an earlier session, not yet resolved). Resolve that classification question before formalizing interview records, to avoid baking in a wrong distinction.
  - Anchor opportunity and `Compelling_Event__c`/`Strategic_Initiatives__c` were **not** changed — the live record's values (Palantir-compete/2030-agenda narrative, opportunity `006ed00000QP04MAAT`) are more current than the dry-run's July draft and were independently corroborated by a live 2026-09-11 Slack read during this reconciliation. The dry-run's version is superseded, not authoritative.
  - `Account.Org62_Account_Id__c` FLS block — still unresolved (see entry above).

> Append rows in chronological order. State transitions in place — don't duplicate rows.
> When `state` changes to `analyzed`, link the artifact to the structured note it produced (e.g., `[[inputs/interviews/2026-05-22-cdo-jane-doe]]`).

---

## 2026-09-16 — dra-research

Ran the pre-kickoff research sweep. Google Workspace MCP was **not connected this session** — no bridge attempted, no document contents fabricated, per explicit directive.

- **Slack:** 3 channels in scope. `#the-financial-conduct-authority` (C08EVRN6152) and `#fca-data-foundations` (C0ANBMS4DNX) read in full, including all threads, start to most recent message (2026-09-10). `FCA Case Management Vision` (C0AEQ756YDA) — ⚠️ blocked, private channel this session's Slack connection cannot access; recommend adding the DRAVantage bot or requesting an export. Also discovered an untracked, pre-dating, out-of-scope account-related channel via search (`#rfx-4oct-financial-conduct-authority-fca-rfi`, C07PR9YMJ4C) — flagged, not read.
- **org62 snapshot:** Account, 360 opportunities (3-yr), 25 account-team rows, 50 tasks + 50 events (6-mo), 100 cases (12-mo), 100 OpportunityLineItem rows (renewal-signal proxy). `Asset` sObject not supported in this org (`INVALID_TYPE`) — documented as unavailable, not faked. Resolved which of 6 duplicate "Financial Conduct Authority" Account records is canonical (`0013000000LzN0fAAF`) by cross-referencing the two opportunity Ids cited in the live DRAVantage record's narrative fields.
- **Workspace inventory:** ⚠️ blocked. `Drive_Folder_URL__c` is null on the live record; 2 known `DRA_Drive_Resource__c` links documented as "not read"; no Workspace MCP tool connected this session.
- **Deep research:** `deep-research` skill and `WebSearch` tool both unavailable this session. Fell back to manual `WebFetch` against known/guessed public URLs (`source: web-search-manual`). Covered org identity, recent news, and public pain signals (APPG reports, WealthTek) with citations; strategic initiatives, technology footprint, competitive context, and cultural signals could **not** be confirmed via the public record this pass (all direct fca.org.uk strategy/business-plan URL guesses 404'd) — flagged explicitly rather than inferred.
- **Gemini Deep Research prompt:** generated (`gemini-deep-research-prompt.md`) to close the above gaps via the Gemini web UI.
- **Files created:** `slack-history.md`, `org62-account-snapshot.md`, `workspace-inventory.md`, `deep-research.md`, `gemini-deep-research-prompt.md` — all new (only a template `README.md` existed in `inputs/research/` beforehand, so no versioning/rename was triggered).

**Open gaps carried forward:** `Account.Org62_Account_Id__c` still unset on the DRAVantage Account record (now that the correct org62 Id is known, an admin can set it once the FLS block clears); Google Workspace access still needed before `workspace-inventory.md` can be completed; FCA Case Management Vision Slack channel still inaccessible; deep-research strategic/tech-footprint/competitive/cultural gaps need a re-run with real search.

---

## 2026-09-17 — dra-kickoff

Ran pre-kickoff content generation. Proceeded without a Gemini Deep Research second pass (`gemini-deep-research.md` does not exist yet — only `gemini-deep-research-prompt.md`); leaned on `slack-history.md` and the live `DRA_Engagement__c`/`DRA_Stakeholder__c` records as primary sources instead, per architect decision to kick off now rather than wait.

- **Read:** `../references/data-foundation-discovery.md` in full (framework cited, not re-derived); all four `inputs/research/*.md` files; re-queried `DRA_Engagement__c` (`DRA-0117`) and all 32 `DRA_Stakeholder__c` records live for current titles/emails/roles rather than reusing stale context.
- **Files created:** `setup/survey-draft.md` (16 questions across all 9 Unlock/Trust/Activate capabilities plus 2 cross-cutting — magic wand, compelling-event urgency — each annotated with capability, rationale, and FCA-specific framing), `setup/email-templates.md` (3 templates: sponsor invitation, survey distribution, interview confirmation — real names/emails for the 17 org62-confirmed stakeholders, `[confirm]` markers and no fabricated contact info for the 6 unconfirmed), `setup/kickoff-deck-draft.md` (7-slide outline: title → strategic vision/compelling event → data foundation framing → DRA framework → target use case → alignment/decision gate → next steps, each with speaker notes and explicit ⚠️ thin-spot flags).
- **Editorial call made (documented, not yet sponsor-validated):** target use case anchored on entity resolution/unified case-and-firm data for AML detection — chosen because it maps directly to `Compelling_Event__c` (the Palantir AML PoC) rather than the broader RCMS rebuild or Data Foundations/MDM initiatives, which are framed as supporting infrastructure. Flagged on deck Slide 5 as proposed, pending sponsor confirmation at kickoff.
- **Index.md:** Setup Artifacts section already linked all three files (from template) — no edit needed.
- **Gaps flagged in the artifacts themselves (not resolved here):** no Gemini Deep Research pass yet; both known Drive resources (source deck, source doc) still auth-walled and unread, so nothing from FCA's own "FCA Data Foundations 14th July 2026" master deck could be cross-checked against Slide 5's use-case call; 6 stakeholders remain unconfirmed contacts (Andrew Higgs, Edmund Towers, Faisal, Jason Baker, Julius B, Nick Eden-Russe) and are excluded from the email distribution list until Josh Adams verifies them; `Target_Readout_Date__c` still unset on the live record — deck Slide 7 flags this as something to resolve in the kickoff meeting itself.

**Open gaps carried forward:** run Gemini Deep Research (`gemini-deep-research-prompt.md`) to close the strategic-initiatives/tech-footprint/competitive/cultural gaps before the readout stage; restore Google Workspace access and read both known Drive resources, especially the 14 July master deck, to validate or correct the target-use-case call on deck Slide 5; chase the 6 unconfirmed stakeholder contacts; set `Target_Readout_Date__c` at or after the kickoff meeting.

---

## 2026-09-18 — pending customer input (no skill run)

- Architect confirmed FCA is sending Salesforce an official use case (channel/timing not yet known). Flagged as `⏳ Pending customer input` on `setup/kickoff-deck-draft.md` Slide 5, which currently anchors on an editorial (not sponsor-confirmed) entity-resolution/AML use case.
- **When it lands:** treat FCA's use case as authoritative over the current Slide 5 anchor; re-check `setup/survey-draft.md` Q11/Q13 (Unify/Orchestrate) weighting and `setup/email-templates.md` framing for consistency; update this log with an `analyzed` entry once incorporated.
- Also attempted to close the Google Workspace gap this session per a "connected to Google Workspace" report from the architect — probe found no Google Workspace/Drive MCP tool registered in this session's tool catalog at all (not an auth failure, just absent). No files touched. Still needs a session restart or plugin-config check before `workspace-inventory.md` can be completed.

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
