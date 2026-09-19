---
title: "Data Value Chain — British Columbia Lottery Corporation"
wiki_page: "04"
status: in-progress
tags: [dra, data-value-chain, scoring, unlock, trust, activate]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/slack-history]]"
  - "[[inputs/research/org62-account-snapshot]]"
last_analyzed: 2026-06-25
---

# Data Value Chain

> [!NOTE]
> Capability scores feed `DRA_Engagement__c.Integration_Health_Score__c` and `AI_Readiness_Score__c`. **Pre-kickoff run (2026-06-25):** these are **provisional research-based scores** — no interviews or survey yet. Confidence is Low–Medium throughout; treat the scorecard as a hypothesis to validate, especially the Activate scores (where the customer's ambition outruns the evidence). Re-score after kickoff + interviews.

**Maps to:** DRA Report Appendix (Data Assessment Rating scorecard) + Solution Design framing
**Drives output:** [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]], executive scorecard slide

---

## Scoring Rubric

| Score | Meaning |
|---|---|
| 1 | Siloed / manual / heroic |
| 2 | Some modernization, partial coverage, inconsistent |
| 3 | Unified / automated / agentic — target state |
| ? | Insufficient evidence |

**Golden thread:** Activate cannot work without Trust; Trust cannot work without Unlock.

---

## UNLOCK Pillar

### Connect

**Score:** 1
**Confidence:** Medium

*Real-time movement of data across systems.*

**Evidence:**
- Core unification runs on **batch-oriented InfoSphere MDM** (DataStage scheduled ETL); profiles are static between batch windows. [[inputs/research/deep-research]]
- No real-time streaming layer exists between transactional platforms and the channels that need to act; an open kickoff question is whether **Melco even supports outbound real-time streaming APIs** vs. batch replication. [[inputs/research/deep-research]]
- AWS S3 used as intermediate staging — a copy-and-move pattern, not zero-copy/streaming. [[inputs/research/workspace-inventory]]

**What score 3 looks like for this customer:** Streaming ingestion of spins, wagers, deposits, and location events from Melco, Intralot, PlayNow, and Everi into Data 360 in near-real time, plus zero-copy access where data must stay in its system of record for FIPPA/residency reasons.

---

### Integrate

**Score:** 1
**Confidence:** Medium

*Managed integration layer — APIs, connectors, legacy bridges.*

**Evidence:**
- **MuleSoft was discontinued / "kicked out of the account two or three years ago"** — BCLC removed its enterprise integration platform, leaving no governed central integration layer. [[inputs/research/slack-history]] [[inputs/research/workspace-inventory]]
- Highly distributed hybrid of legacy on-prem systems, compliance databases, and cloud CRM with **operational silos** between them. [[inputs/research/deep-research]]
- Legacy integration relied on high-maintenance WebSphere / Cast Iron / DataStage middleware. [[inputs/research/deep-research]]

**What score 3 looks like for this customer:** A governed API / event layer (re-introduced integration platform or equivalent) connecting Melco, Intralot, Everi, PlayNow, and Kambi to Data 360, with documented contracts and the ability to write back (e.g. flag a high-risk patron in Everi).

---

### Understand

**Score:** 1
**Confidence:** Low

*Shared meaning — semantic models, glossaries, documented ownership.*

**Evidence:**
- No semantic layer or shared business-definition layer is evidenced; data-quality and meaning were managed informally ("an ambition, not a process"). [[inputs/research/workspace-inventory]]
- Identity-resolution rules defining what a "verified player" record means were **not yet settled** when the CDP work paused. [[inputs/research/deep-research]]

**What score 3 looks like for this customer:** A governed Data 360 semantic layer where "player," "session," "high-risk patron," and "verified account" have single agreed definitions usable by compliance, marketing, and AI agents. *(Low confidence — needs Module 3 / Data Leader interview.)*

---

## TRUST Pillar

### Unify

**Score:** 1
**Confidence:** Medium

*Single resolved identity across systems — MDM / identity resolution.*

**Evidence:**
- InfoSphere MDM produced a **rigid back-office golden record** that doesn't span real-time cross-channel play; the modern unification effort (Slalom CDP → Data 360) is **paused / not yet delivered**. [[inputs/research/deep-research]]
- Player identity is fragmented across four channels, including historically **anonymous retail cash** transactions. [[inputs/research/deep-research]]
- org62 shows duplicate-account and duplicate-record issues in the connected Salesforce estate. [[inputs/research/org62-account-snapshot]]

**What score 3 looks like for this customer:** Data 360 Identity Resolution producing one unified player profile across PlayNow, casino floor, retail, and loyalty — the literal "360-degree player view" the Cullen Report mandates.

---

### Validate

**Score:** 1
**Confidence:** Medium

*Active data-quality management — discovery, catalog, lineage, quality.*

**Evidence:**
- Data quality is **"more of an ambition than an actual process."** [[inputs/research/workspace-inventory]]
- FINTRAC penalty for un-filed STRs / undesignated patrons reflects incomplete, unreliable data feeding compliance. [[inputs/research/deep-research]]
- Recurring data-quality / duplicate / journey-failure cases in org62. [[inputs/research/org62-account-snapshot]]

**What score 3 looks like for this customer:** Automated data-quality monitoring and documented lineage so an AML report or a player-risk decision can be traced to trusted source data and defended to a regulator or in court (*Ghotaymi*).

---

### Protect

**Score:** 1
**Confidence:** Medium

*Governance, privacy, policy enforcement.*

**Evidence:**
- Governance was **historically owned by the CMO**, not a dedicated data/governance function. [[inputs/research/workspace-inventory]]
- Despite heavy obligations (FIPPA, AML, Cullen), execution gaps produced a regulatory penalty and an audit finding of undesignated high-risk patrons. [[inputs/research/deep-research]]
- Identity-resolution + consent rules (linking anonymous retail hashes to verified profiles under FIPPA) are an **open, unresolved design question**. [[inputs/research/deep-research]]

**What score 3 looks like for this customer:** Policy-based governance with consent management and access control (Salesforce Trust Layer + Data 360 governance) enforcing FIPPA and AML rules automatically, with auditable agent access.

---

## ACTIVATE Pillar

### Decide

**Score:** 2
**Confidence:** Low

*Insight for humans + agents.*

**Evidence:**
- BCLC runs **Marketing Cloud** at scale and has stood up the **AnthemXT hub with Future Anthem Amplifier AI** for ML-driven personalization — real analytics/decisioning capability exists. [[inputs/research/deep-research]] [[inputs/research/org62-account-snapshot]]
- But these decision engines are **starved of trusted, real-time, unified input** — the capability outruns its foundation. [[inputs/research/deep-research]]

**What score 3 looks like for this customer:** Calculated Insights and risk scores derived from a unified real-time profile that both marketers and AI agents reference — segmentation and risk decisioning on the same trusted data.

---

### Orchestrate

**Score:** 1
**Confidence:** Low

*Event-driven workflows / agent orchestration.*

**Evidence:**
- With MuleSoft removed and a batch core, there is **no evidenced event-driven orchestration** layer; handoffs across channels/compliance are manual. [[inputs/research/slack-history]] [[inputs/research/deep-research]]
- Real-time "pause the promo / trigger GameSense the moment risk appears" orchestration is a **stated need, not a current capability**. [[inputs/research/deep-research]]

**What score 3 looks like for this customer:** Event-driven orchestration that, on a streaming risk signal, instantly pauses marketing, fires a GameSense reminder, and writes a flag back to Everi — no human in the loop for the time-critical step.

---

### Act

**Score:** 2
**Confidence:** Low

*Insights/agents reach the people and systems that act.*

**Evidence:**
- Live **Marketing Cloud personalization** and **3 Agentforce pilot seats** show the customer is already activating on data and experimenting with agents (terminal diagnostics, high-value player concierge). [[inputs/research/workspace-inventory]] [[inputs/research/deep-research]]
- But these run on the unverified foundation — exactly the GIGO risk the kickoff call flagged ("don't build AI on an unstable foundation"). [[inputs/research/workspace-inventory]]

**What score 3 looks like for this customer:** Agentforce agents (terminal diagnostics, concierge, RG early-intervention) acting on the unified, governed, real-time profile, with seamless human escalation and auditable actions.

---

## Scorecard Summary

| Pillar | Capability | Score | Confidence |
|---|---|---|---|
| UNLOCK | Connect | 1 | Medium |
| UNLOCK | Integrate | 1 | Medium |
| UNLOCK | Understand | 1 | Low |
| TRUST | Unify | 1 | Medium |
| TRUST | Validate | 1 | Medium |
| TRUST | Protect | 1 | Medium |
| ACTIVATE | Decide | 2 | Low |
| ACTIVATE | Orchestrate | 1 | Low |
| ACTIVATE | Act | 2 | Low |

**Integration Health Score** (Connect + Integrate + Understand, avg × 33): **(1+1+1)/3 × 33 = 33**
**AI Readiness Score** (all 9, avg × 33): **(1+1+1+1+1+1+2+1+2)/9 × 33 = 1.22 × 33 ≈ 40**

## Score Pattern Analysis

BCLC matches the **"GIGO risk zone"** archetype: **Unlock = 1, Trust = 1, but shadow Activate = 2** (Marketing Cloud, Future Anthem ML, Agentforce pilots are live or imminent on top of an un-unlocked, un-trusted foundation).

This is the most dangerous pattern in the framework, and at BCLC the downside is not a bad marketing recommendation — it's a **missed AML report or an unsafe promotion to an at-risk player**. The September 2026 convergence will pile *more* Activate-layer demand (Future Anthem, Rewards, Agentforce) onto the weak foundation simultaneously.

**Roadmap implication (drives [[07-roadmap]]):** Resist the pull to lead with AI. Crawl = Connect + Integrate (streaming + re-established integration layer); Walk = Unify + Validate + Protect (Data 360 identity resolution, data quality, governed access aligned to FIPPA/AML); Run = safely activate the personalization and Agentforce ambitions on the now-trusted foundation. Position **Data 360 as the agile real-time activation layer, not a transactional database replacement** — InfoSphere's residual governance role and the new platforms remain systems of record. [[inputs/research/deep-research]]
