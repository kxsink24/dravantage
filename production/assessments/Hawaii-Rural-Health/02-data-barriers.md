---
title: "Data Barriers — Hawaii State Department of Health (DOH)"
wiki_page: "02"
status: in-progress
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources:
  - [[inputs/interviews/2026-08-10-team-sync]]
  - [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
last_analyzed: 2026-08-13
---

# Data Barriers

**Maps to:** DRA Report Section 2 — Three Barriers  
**Drives output:** [[07-roadmap]], executive-summary framing

> [!WARNING]
> These are provisional hypotheses. The transcript is an internal team discussion and the research briefing is a public-record synthesis; customer interviews are still required before final severity is written to DRAVantage.

## The Three-Barrier Framework

- **Blind Spot** — Data exists but cannot be seen or brought into a shared decision context.
- **Time Trap** — Data or decisions arrive too late to act effectively.
- **Trust Gap** — Data is available but governance, quality, ownership, or lineage prevents confident use.

## Blind Spot

**Severity:** High hypothesis  
**Confidence:** Low — based on 2 sources, neither a direct customer interview

### Evidence

- The internal team described multiple competing RHTP perspectives and uncertainty about who should own the data, provide analytics, or execute clinical/population-health action. [[inputs/interviews/2026-08-10-team-sync]]
- The public briefing describes a federated landscape across SHPDA, DOH, Med-QUEST, HHIE, ETS, providers, UH, and CBOs, with unclear operating boundaries for grants, claims, clinical exchange, and provider readiness. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
- The document identifies gaps in current knowledge of the DOH grants-management footprint, RHTP sub-award mechanisms, MSO ownership, and incumbent systems. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

### 3 Deep Dive: symptom → consequence → impact

- **Symptom:** Multiple agencies and ecosystem partners appear to hold different parts of the RHTP outcome and data picture.
- **Consequence:** The team cannot confidently select the first accountable buyer, operating owner, data owner, or use case.
- **Business impact:** Funding, procurement, provider-readiness, and executive decisions may continue without one shared view of what should happen first.

### Root Cause Hypothesis

A federated operating model with overlapping policy, funding, clinical exchange, claims analytics, and provider-delivery responsibilities has not yet been translated into explicit decision rights for the first RHTP outcome. This must be validated with customer-side leaders. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

## Time Trap

**Severity:** High hypothesis  
**Confidence:** Low — historical public evidence plus internal team signal; current-state timing requires validation

### Evidence

- The internal team described roughly a year of broad messaging without movement, current analysis paralysis, and a need to select a focused story quickly. [[inputs/interviews/2026-08-10-team-sync]]
- The internal team referenced a short window to produce an executive video and an October funding/RFP context. [[inputs/interviews/2026-08-10-team-sync]]
- The public briefing cites historical IDAP/APCD schedule delays, delayed data definitions, multiple vendors, and weak baseline/change-control practices. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
- HHIE and provider interoperability signals in the briefing suggest manual work and adoption friction that can delay operational action. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

### 3 Deep Dive: symptom → consequence → impact

- **Symptom:** Planning, governance, data definitions, and program choices take too long to converge.
- **Consequence:** RHTP teams spend time reconciling scope and ownership instead of moving a bounded pilot or compliance workflow forward.
- **Business impact:** Delayed sub-award deployment, provider-readiness support, reporting, or AHEAD preparation may reduce the value of the funding window.

### Root Cause Hypothesis

Historical multi-vendor coordination friction, delayed definitions, and an over-broad transformation narrative may be consuming the decision bandwidth needed for a small first release. Current timing and ownership must be confirmed. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] [[inputs/interviews/2026-08-10-team-sync]]

## Trust Gap

**Severity:** High hypothesis  
**Confidence:** Medium-low — repeated across public research and internal discussion, but not customer-validated

### Evidence

- The internal team described reluctance to own PII or clinical data, concerns about governance and liability, and the need to show privacy, security, and role-based access without forcing state ownership of all data. [[inputs/interviews/2026-08-10-team-sync]]
- The public briefing identifies privacy, HIPAA/MARS-E, data-sharing boundaries, identity matching, quality, governance, and vendor accountability as central constraints. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
- The briefing cites historical IDAP execution friction involving unclear roles, delayed business rules, multiple work-management systems, and vendor coordination. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

### 3 Deep Dive: symptom → consequence → impact

- **Symptom:** Stakeholders are unsure who may own, access, govern, or act on sensitive clinical and claims data.
- **Consequence:** Potential use cases are narrowed or delayed before technical feasibility and measurable outcomes are agreed.
- **Business impact:** A technically attractive solution may fail to gain sponsorship, while providers, payers, agencies, and CBOs continue operating with fragmented trust and accountability.

### Root Cause Hypothesis

The trust problem is primarily an operating-model and accountability problem, not only a security-control problem. The first DRA work should define data ownership, stewardship, permitted uses, consent/security boundaries, and escalation paths before proposing a broad platform. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

## Barrier Interaction

The three hypotheses compound: unclear ownership creates a Blind Spot; governance and liability concerns make stakeholders reluctant to share or use data, creating a Trust Gap; and unresolved decisions plus historical delivery friction create a Time Trap. The first intervention should therefore be a bounded outcome with explicit sponsor, data owner, operating owner, and compliance evidence—not a generic data-platform program. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

## Barrier Summary Table

| Barrier | Provisional severity | Confidence | Primary evidence | Root cause hypothesis |
|---|---|---|---|---|
| Blind Spot | High | Low | Cross-agency ownership and use-case ambiguity | Federated responsibilities without explicit first-outcome decision rights |
| Time Trap | High | Low | Analysis paralysis, compressed RHTP timing, historical IDAP delays | Broad scope plus multi-vendor/definition friction |
| Trust Gap | High | Medium-low | PII, clinical-data liability, privacy, governance, and quality concerns | Unclear accountability and data-use boundaries |
