---
title: "Data Value Chain — Hawaii State Department of Health (DOH)"
wiki_page: "04"
status: in-progress
tags: [dra, scores, unlock, trust, activate]
sources:
  - [[inputs/interviews/2026-08-10-team-sync]]
  - [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
last_analyzed: 2026-08-13
---

# Data Value Chain

**Maps to:** DRA Report Appendix — Data Assessment Rating

> [!WARNING]
> Scores below are provisional hypotheses from one internal team transcript and one public-research briefing. They are intentionally low-confidence and are not written back to the DRAVantage score fields yet.

## Scoring Rubric

- **1 — Foundational gap:** capability is absent, fragmented, or blocked by a material ownership/governance issue.
- **2 — Inconsistent:** some capability exists, but coverage, quality, ownership, or repeatability is uneven.
- **3 — Scaled:** capability is governed, repeatable, measurable, and connected to outcomes.
- **? — Insufficient evidence:** do not score until customer-side evidence exists.

## UNLOCK

### Connect — **1 / 3**

**Confidence:** Low  
**Evidence:** The briefing describes multiple clinical, claims, ERP, referral, analytics, and provider data domains, while the internal team could not yet agree on a single actionable data/use-case path. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] [[inputs/interviews/2026-08-10-team-sync]]  
**What score 3 would look like:** The first RHTP outcome has named source systems, permitted data flows, owners, access rules, and measurable delivery milestones.

### Integrate — **1 / 3**

**Confidence:** Low  
**Evidence:** The public briefing cites a federated multi-vendor environment and historical IDAP delivery friction; the internal team is deliberately avoiding a broad rearchitecture until the accountable outcome is known. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] [[inputs/interviews/2026-08-10-team-sync]]  
**What score 3 would look like:** A bounded pilot has observable interfaces, explicit system-of-record boundaries, and a repeatable path for cross-agency/provider handoffs.

### Understand — **1 / 3**

**Confidence:** Low  
**Evidence:** The team wants visibility into rural-health hotspots and citizen outcomes, but the public briefing and internal discussion both show unresolved questions about ownership, definitions, and the right audience for analytics. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]  
**What score 3 would look like:** Leaders and operators share business definitions, trusted measures, and role-appropriate views for the first selected outcome.

## TRUST

### Unify — **? / 3**

**Confidence:** Low  
**Evidence:** The briefing references identity matching and a potential golden-record/data-foundation direction, but does not establish the current master-data model or customer-approved target. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]  
**What score 3 would look like:** The selected domain has an agreed identity/mastering approach, stewardship, survivorship rules, and downstream propagation.

### Validate — **? / 3**

**Confidence:** Low  
**Evidence:** The briefing cites data-quality, delayed definitions, provider manual entry, and IDAP governance concerns, but does not provide a current quality baseline for the selected RHTP use case. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]  
**What score 3 would look like:** The pilot has measurable quality rules, lineage, issue ownership, and a repeatable exception process.

### Protect — **1 / 3**

**Confidence:** Medium-low  
**Evidence:** PII, clinical-data ownership, privacy, security, HIPAA/MARS-E, consent, and liability concerns are repeatedly identified as constraints. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]  
**What score 3 would look like:** The first use case has explicit data classification, access/consent rules, role-based controls, auditability, and an agreed operating owner.

## ACTIVATE

### Decide — **1 / 3**

**Confidence:** Low  
**Evidence:** The internal team wants hotspot and rural-health visibility but has not yet selected the executive decision, metric, or accountable owner that the information should support. [[inputs/interviews/2026-08-10-team-sync]]  
**What score 3 would look like:** A named leader receives trusted, timely measures tied to a decision and can see whether the intervention changed the outcome.

### Orchestrate — **1 / 3**

**Confidence:** Low  
**Evidence:** The research briefing proposes grants, provider-readiness, referral, and governance workflows across agencies and partners; the internal discussion identifies unresolved handoffs and ownership. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] [[inputs/interviews/2026-08-10-team-sync]]  
**What score 3 would look like:** The first workflow has explicit triggers, handoffs, exception paths, human accountability, and measurable cycle-time improvement.

### Act — **? / 3**

**Confidence:** Low  
**Evidence:** The team discussed possible grants, analytics, Slack, and Marketing Cloud demonstrations, but no customer-approved operational action or agent boundary is established. [[inputs/interviews/2026-08-10-team-sync]]  
**What score 3 would look like:** A governed operator can act on a decision signal, escalate exceptions, and measure outcome impact without crossing data-use or accountability boundaries.

## Scorecard Summary

| Pillar | Capability | Provisional score | Confidence | Primary evidence |
|---|---|---:|---|---|
| UNLOCK | Connect | 1 | Low | [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] |
| UNLOCK | Integrate | 1 | Low | [[inputs/interviews/2026-08-10-team-sync]] |
| UNLOCK | Understand | 1 | Low | [[inputs/interviews/2026-08-10-team-sync]] |
| TRUST | Unify | ? | Low | [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] |
| TRUST | Validate | ? | Low | [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] |
| TRUST | Protect | 1 | Medium-low | [[inputs/interviews/2026-08-10-team-sync]] |
| ACTIVATE | Decide | 1 | Low | [[inputs/interviews/2026-08-10-team-sync]] |
| ACTIVATE | Orchestrate | 1 | Low | [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]] |
| ACTIVATE | Act | ? | Low | [[inputs/interviews/2026-08-10-team-sync]] |

## Score Pattern Analysis

The provisional pattern is not “the state lacks data.” It is that data, governance, ownership, and action are not yet aligned around one bounded outcome. The safest sequence is therefore: define the first business outcome and sponsor, map permitted data and accountability, prove one workflow, then expand toward clinical/claims analytics and broader activation. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Org write-back:** Skipped. Too many capabilities remain `?` or low-confidence, and the evidence is not yet customer-validated.
