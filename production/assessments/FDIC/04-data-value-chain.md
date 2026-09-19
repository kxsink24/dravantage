---
title: "Data Value Chain — Old Dominion University"
wiki_page: "04"
status: in-progress
tags: [dra, data-value-chain, scoring, unlock, trust, activate]
sources: ["[[2026-05-11-kickoff]]", "[[gemini-deep-research]]", "[[workspace-inventory]]", "[[slack-history]]", "[[org62-account-snapshot]]"]
last_analyzed: 2026-06-02
---

# Data Value Chain

> [!NOTE]
> Run 1 — provisional scores from the kickoff recording + research only. **No discovery interviews
> or survey yet**, so most scores are Low confidence and several Activate capabilities are `?`.
> Scores feed `Integration_Health_Score__c` and `AI_Readiness_Score__c`. Do not over-read these
> until Module 1–3 interviews land.

**Maps to:** DRA Report Appendix (scorecard) + Solution Design framing
**Drives output:** [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]]

---

## Scoring Rubric

| Score | Meaning |
|---|---|
| 1 | Siloed / manual / heroic |
| 2 | Some modernization, partial, inconsistent |
| 3 | Unified / automated / agentic (target) |
| ? | Insufficient evidence to score |

Golden thread: **Activate needs Trust needs Unlock.** Address capabilities in order.

---

## UNLOCK Pillar

### Connect
**Score:** 1 · **Confidence:** Medium
*Whether data flows across systems in real time.*
**Evidence:**
- Banner→Salesforce data moves in **batches**, not real time; the locked use case requires real-time and can't be met today. [[2026-05-11-kickoff]]
- Three disconnected Salesforce orgs + Banner + Canvas + health-sciences systems, no unified flow. [[workspace-inventory]]
**What score 3 looks like for ODU:** real-time/event-driven Banner↔Salesforce integration feeding a live Student 360; agents read current application/registration data on demand.

### Integrate
**Score:** 1 · **Confidence:** Medium
*Whether there's a managed integration layer (APIs, connectors).*
**Evidence:**
- MuleSoft and Informatica both present with **no clear swim lanes**; team unsure which to use when. [[2026-05-11-kickoff]] [[slack-history]]
- **Sub-second API performance problems** on the homegrown Monarch portal (Informatica APIs). [[workspace-inventory]]
**What score 3 looks like for ODU:** clear MuleSoft (real-time APIs/orchestration) vs. Informatica (bulk/MDM) delineation; performant, governed APIs powering student-facing apps.

### Understand
**Score:** ? · **Confidence:** Low
*Whether data meaning is shared (semantic models, glossaries, ownership).*
**Evidence:**
- Early governance signal (no catalog/ownership model per agenda), but no direct evidence on semantic models yet — needs discovery. [[workspace-inventory]]
**What score 3 looks like for ODU:** shared definitions/semantic layer across Banner, the SF orgs, and health-sciences data.

---

## TRUST Pillar

### Unify
**Score:** 1 · **Confidence:** Low
*Single identity across systems (MDM, identity resolution).*
**Evidence:**
- Multiple-address / business-rule mismatch between Banner and Salesforce raised at kickoff; three SF orgs imply fragmented identity. [[2026-05-11-kickoff]] [[workspace-inventory]]
**What score 3 looks like for ODU:** one resolved student identity across Banner, the SF orgs, and health-sciences systems.

### Validate
**Score:** 1 · **Confidence:** Low
*Active data-quality management (catalog, lineage, quality).*
**Evidence:**
- AVP Data & Analytics flagged **analytic data inconsistencies**; agenda notes "no data catalog." [[2026-05-11-kickoff]] [[workspace-inventory]]
**What score 3 looks like for ODU:** maintained catalog + lineage + quality monitoring trusted for SACSCOC/SCHEV reporting.

### Protect
**Score:** ? · **Confidence:** Low
*Governance, privacy, policy enforcement.*
**Evidence:**
- Heightened relevance with health-sciences (EVMS) data joining the platform, but no direct evidence on current governance maturity yet — needs discovery. [[gemini-deep-research]]
**What score 3 looks like for ODU:** automated policy enforcement spanning student + health-sciences data.

---

## ACTIVATE Pillar

### Decide
**Score:** ? · **Confidence:** Low
*Analytics/predictions driving decisions.*
**Evidence:** ODU has an analytics environment (Snowflake/Tableau footprint per org62 renewals), but its decision-making maturity isn't evidenced yet. [[org62-account-snapshot]]
**What score 3 looks like for ODU:** trusted self-service analytics + predictive student-success models.

### Orchestrate
**Score:** 1 · **Confidence:** Low
*Event/agent-driven workflow automation.*
**Evidence:** No event-driven tier today (batch integration); cross-team handoffs (enrollment→advising→financial aid) are manual. [[2026-05-11-kickoff]]
**What score 3 looks like for ODU:** event-triggered orchestration powering the application-status agent across systems.

### Act
**Score:** ? · **Confidence:** Low
*Insights/agents reaching frontline workflows.*
**Evidence:** The desired end state (a student-facing application-status agent) is aspirational, not yet built. [[2026-05-11-kickoff]]
**What score 3 looks like for ODU:** agents and real-time context embedded in student/advisor workflows.

---

## Scorecard Summary

| Pillar | Capability | Score | Confidence |
|---|---|---|---|
| UNLOCK | Connect | 1 | Medium |
| UNLOCK | Integrate | 1 | Medium |
| UNLOCK | Understand | ? | Low |
| TRUST | Unify | 1 | Low |
| TRUST | Validate | 1 | Low |
| TRUST | Protect | ? | Low |
| ACTIVATE | Decide | ? | Low |
| ACTIVATE | Orchestrate | 1 | Low |
| ACTIVATE | Act | ? | Low |

**Integration Health Score** (Connect + Integrate + Understand): Connect 1, Integrate 1, Understand `?`. With Understand unscored, provisional on the two scored = **33** (1.0 × 33). Recompute when Understand is scored.
**AI Readiness Score** (all 9): five scored at 1, four `?`. Provisional on scored = **33** (1.0 × 33). Recompute as `?` capabilities resolve.

## Score Pattern Analysis

ODU matches the **"Unlock = 1, Activate = 1 → Crawl: API-led + Zero Copy foundation; defer AI"**
archetype, with an important nuance: there is **shadow AI ambition** (the application-status agent)
running ahead of an Unlock score of 1 — the **GIGO risk zone**. The pattern says: build the real-time
integration + trust foundation **first**, then sequence the agent into Walk/Run. This drives
[[07-roadmap]] sequencing once discovery confirms the scores. [[2026-05-11-kickoff]]
