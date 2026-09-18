---
title: "Kickoff Deck Draft — The Financial Conduct Authority"
tags: [dra, setup, deck]
created: 2026-09-17
status: draft
---

# Kickoff Deck Draft — The Financial Conduct Authority

> [!NOTE]
> Slide-by-slide outline only — this stays in `setup/` as a planning artifact. A rendered version only goes to `outputs/kickoff-deck/index.html` via `dra-deck` after the architect approves this outline. Arc follows the `dra-kickoff` skill's standard sequence: title/partnership → strategic vision & compelling event → data foundation framing/tension → DRA framework & this engagement → target use case → alignment & outcomes decision gate → next steps & logistics.

## Slide 1 — Title / Partnership

**Title:** Data Readiness Assessment — The Financial Conduct Authority
**Bullets:**
- Salesforce × FCA — Data Readiness Assessment kickoff
- 25 September 2026
- Sponsors: Debbie Gupta (Director, Regulatory Excellence), Dominic Hastings (CPO), Lauren Dixon (CDO)

**Speaker note / why:** Standard cover slide establishing this as a partnership exercise, not a sales pitch — naming the three sponsors by title signals this has real executive backing, which matters given the competitive stakes on this account.

---

## Slide 2 — Strategic Vision & Compelling Event

**Title:** Why now
**Bullets:**
- FCA's 2030 agenda and the Transform Org decision are setting direction for the next phase of the platform
- A competitive Data Foundations evaluation is underway against an entrenched Palantir AML proof-of-concept
- A tech-options paper is expected in the Sept/Oct 2026 window; the current IPU contract has an anniversary point in early September
- This DRA is the SI-grade audit (~£1–1.5M scope, delivered independently) feeding that decision

**Speaker note / why:** This slide states the compelling event almost verbatim from `DRA_Engagement__c.Compelling_Event__c` — the DRA exists specifically to support the platform-vs-displacement argument ahead of a real, dated decision. Naming Palantir directly in front of sponsors is appropriate (they've already used this framing internally per Slack); it would not be appropriate in a written customer email (see `email-templates.md` sender note) but is standard for a live kickoff room with sponsors present.
**⚠️ Thin spot:** The exact IPU contract date and the precision of "Sept/Oct 2026" both come from internal Slack chatter, not a confirmed contractual or public source — present as "our understanding is," inviting the room to correct it live rather than asserting it as fact.

---

## Slide 3 — Data Foundation Framing / Tension

**Title:** What "data readiness" means for FCA
**Bullets:**
- Unlock — can data move between systems (Informatica, Data360, RCMS, Case Management tooling) without manual work?
- Trust — can you rely on that data being accurate, secure, and unified across records?
- Activate — can decisions and actions happen on top of that data, including agentic AI?
- Tension: FCA's Agentforce estate upgrade and AI ambitions are only as strong as the foundation underneath them

**Speaker note / why:** This is the framework's central teaching moment — per `data-foundation-discovery.md`, discovery must proceed Unlock → Trust → Activate, and the deck should teach this to the room before diving into FCA specifics, not assume it's understood. Naming Informatica/Data360/RCMS/Case Management here (rather than generic examples) keeps the framing concrete instead of abstract.

---

## Slide 4 — DRA Framework & This Engagement

**Title:** How this assessment runs
**Bullets:**
- Survey (this week) → synthesis → stakeholder interviews → readout and roadmap
- 14 confirmed interviewees across business and technical roles at FCA, plus SI/ISV reviewers (Deloitte, Informatica, Blind Institute of Technology) at the review stage
- Business stakeholders first, technical discovery second and scoped by what business says
- Output: a Crawl/Walk/Run roadmap and business case, not a product pitch

**Speaker note / why:** Directly enforces the two operating principles from the parent DRAVantage `CLAUDE.md` — business-outcomes-before-technical-discovery, and explaining the why. Also distinguishes this DRA from a standard AE-led Data Foundation Discovery Workshop, which the room may have seen before — worth stating explicitly since FCA's account team has run adjacent activities (per the 360-opportunity history in `org62-account-snapshot.md`).

---

## Slide 5 — Target Use Case

**Title:** What we're anchoring on
**Bullets:**
- Primary: entity resolution and unified case/firm data as the foundation for AML detection and response — the direct point of comparison with the Palantir PoC
- Secondary: RCMS rebuild and the broader Data Foundations/MDM (Informatica) initiative as the platform this use case depends on
- The assessment will test whether FCA's current data foundation can support this use case today, and what's missing if not

**Speaker note / why:** This is the editorial call for "the" target use case — chosen because it maps directly onto `Compelling_Event__c` (the reason this DRA exists) rather than the broader, less-decision-relevant RCMS or MDM initiatives, which are framed here as supporting infrastructure rather than the headline use case. This keeps the survey (Q11, Q13 — Unify/Orchestrate) and the deck pointed at the same target.
**⚠️ Thin spot:** This use-case choice hasn't been explicitly validated with sponsors yet — flag it as a proposed anchor for the room to confirm or redirect live, not a settled fact.
**⏳ Pending customer input (2026-09-18):** FCA has committed to sending Salesforce an official use case. When it arrives, treat it as authoritative and supersede this slide's entity-resolution/AML anchor if it differs — also re-check `survey-draft.md` Q11/Q13 weighting and `email-templates.md` framing for consistency with whatever FCA sends. Don't deliver this slide as-is if FCA's use case has landed by kickoff.

---

## Slide 6 — Alignment & Outcomes Decision Gate

**Title:** What we need from you
**Bullets:**
- Confirm the target use case above is the right anchor (or redirect us)
- Confirm the interviewee list and help us close the gaps on 6 unconfirmed contacts
- Agree timing for survey close and interview scheduling
- Sponsor check-in: does the Sept/Oct tech-options timeline still hold?

**Speaker note / why:** This is the explicit decision gate the framework calls for before proceeding past kickoff — get sponsor sign-off on scope and logistics live, rather than assuming silence means agreement. The "6 unconfirmed contacts" line turns an internal data gap (Andrew Higgs, Edmund Towers, Faisal, Jason Baker, Julius B, Nick Eden-Russe) into a concrete ask the sponsors can resolve in the room.

---

## Slide 7 — Next Steps & Logistics

**Title:** What happens next
**Bullets:**
- Survey sent to confirmed interviewees this week (see `email-templates.md`, Template 2)
- Interviews scheduled over the following [X] weeks
- Synthesis and readout date to follow — `Target_Readout_Date__c` is currently unset on the engagement record and needs to be agreed today
- Primary channel for ongoing coordination: `#the-financial-conduct-authority`

**Speaker note / why:** Closing logistics slide; flags that `Target_Readout_Date__c` is genuinely blank on the live DRAVantage record (not a placeholder oversight) — this should be set as an output of the kickoff meeting itself, not left for later.

---

## Overall gaps to flag before this deck is finalized

- No Google Slides/Docs source material has been read into this outline (`workspace-inventory.md` — both known Drive resources are still auth-walled), so this outline is built entirely from Slack, org62, and the live DRAVantage record. Cross-check against the "FCA Data Foundations 14th July 2026" master deck once Workspace access is restored — it may already contain sponsor-agreed use-case language that should supersede Slide 5's editorial call.
- Slides 2 and 5 both carry explicit ⚠️ thin-spot flags above — both should be delivered as "our understanding, please correct us" rather than assertions.
- `deep-research.md` gaps (strategic initiatives, technology footprint, competitive context, cultural signals — all public-record gaps) mean this deck leans almost entirely on internal Slack signal for anything FCA-specific beyond the live DRAVantage record fields. That's appropriate for an internal kickoff (the room already has this context) but would not be appropriate to reuse as-is in an external-facing deliverable without corroboration.
