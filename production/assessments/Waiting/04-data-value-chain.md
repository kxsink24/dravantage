---
title: "Data Value Chain — The Financial Conduct Authority"
wiki_page: "04"
status: draft
tags: [dra, data-value-chain, scoring, unlock, trust, activate]
sources: []
last_analyzed: null
---

# Data Value Chain

> [!NOTE]
> Populated by `dra-analyze-input`. Capability scores here feed into `DRA_Engagement__c.Integration_Health_Score__c` and `AI_Readiness_Score__c`. Every score must have at least one supporting evidence item with a source citation. Do not assign a score you cannot defend.

**Maps to:** DRA Report Appendix (Data Assessment Rating scorecard) + Solution Design framing  
**Drives output:** [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]], executive scorecard slide

---

## Scoring Rubric

| Score | Meaning |
|---|---|
| 1 | Siloed / manual / heroic — current state for most legacy environments |
| 2 | Some modernization, partial coverage, but inconsistent |
| 3 | Unified / automated / agentic — the target state |
| ? | Insufficient evidence to score — note what additional input is needed |

The "golden thread" logic: **Activate cannot work without Trust, and Trust cannot work without Unlock.** A customer with Activate scores of 2–3 but Unlock scores of 1 has built AI on a broken foundation — the GIGO risk zone. The roadmap must address capabilities in order.

---

## UNLOCK Pillar

*Can the organization access its data at all? Is it connected, integrated, and understood?*

### Connect

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether data can flow across systems in real time or near-real time — streaming, batch, Zero Copy. Score 1 = manual exports, FTP, or no integration. Score 3 = API-led, event-driven, Zero Copy in place.*

**Evidence:**
<!-- Bullet each observation with source citation. Include the stakeholder quote or survey pattern that supports the score. -->

**What score 3 looks like for this customer:**
<!-- Describe the target state in customer-specific terms. What systems would be connected? What would "data can flow" mean for their specific use cases? -->

---

### Integrate

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization has a managed integration layer — APIs, app connectors, legacy system bridges. Score 1 = point-to-point brittle connections or no integration at all. Score 3 = governed API strategy, standard connectors, legacy systems wrapped with modern interfaces.*

**Evidence:**

**What score 3 looks like for this customer:**

---

### Understand

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization understands what its data means — semantic models, business glossaries, documented data ownership. Score 1 = data meaning lives in individual analysts' heads. Score 3 = governed semantic layer, shared definitions, data literacy across teams.*

**Evidence:**

**What score 3 looks like for this customer:**

---

## TRUST Pillar

*Can the organization trust the data it has access to? Is it unified, validated, and protected?*

### Unify

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization can resolve a single identity across systems — master data management, identity resolution, unified customer/constituent/student profile. Score 1 = the same person has five different records in five systems. Score 3 = MDM or identity resolution in place, unified profile available.*

**Evidence:**

**What score 3 looks like for this customer:**

---

### Validate

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization actively manages data quality — discovery, cataloging, lineage, quality monitoring. Score 1 = no formal data quality program, issues discovered reactively. Score 3 = automated quality monitoring, documented lineage, data catalog actively maintained.*

**Evidence:**

**What score 3 looks like for this customer:**

---

### Protect

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization has data governance, privacy compliance, and policy enforcement in place. Score 1 = governance exists on paper but not in practice, or compliance is handled manually. Score 3 = automated policy enforcement, privacy by design, documented data governance with accountability.*

**Evidence:**

**What score 3 looks like for this customer:**

---

## ACTIVATE Pillar

*Can the organization act on its data to create outcomes? Can it decide, orchestrate, and act at scale?*

### Decide

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization uses data to make decisions — analytics, predictions, segmentation, ML. Score 1 = reports generated manually, decisions made by intuition. Score 3 = self-service analytics, predictive models in production, data-driven decision-making embedded in workflows.*

**Evidence:**

**What score 3 looks like for this customer:**

---

### Orchestrate

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether the organization can automate workflows triggered by data — events, agents, process automation. Score 1 = manual handoffs, no event-driven automation. Score 3 = agentic workflows, data-triggered orchestration, AI agents operating on live data.*

**Evidence:**

**What score 3 looks like for this customer:**

---

### Act

**Score:** [ 1 / 2 / 3 / ? ]  
**Confidence:** [ High / Medium / Low ]

*What it measures: Whether insights reach the people and systems that need to act on them — Customer 360, agent-assisted work, personalization at scale. Score 1 = insights stay in dashboards, don't reach frontline workers. Score 3 = agents, recommendations, and insights embedded in the tools frontline workers already use.*

**Evidence:**

**What score 3 looks like for this customer:**

---

## Scorecard Summary

| Pillar | Capability | Score | Confidence |
|---|---|---|---|
| UNLOCK | Connect | | |
| UNLOCK | Integrate | | |
| UNLOCK | Understand | | |
| TRUST | Unify | | |
| TRUST | Validate | | |
| TRUST | Protect | | |
| ACTIVATE | Decide | | |
| ACTIVATE | Orchestrate | | |
| ACTIVATE | Act | | |

**Integration Health Score** (Connect + Integrate + Understand, averaged × 33): —  
**AI Readiness Score** (all 9 capabilities, averaged × 33): —

## Score Pattern Analysis

<!-- After scoring, identify which pattern this customer matches from the known archetypes:

- All Unlock = 1, Activate = 1 → "Crawl: API-led + Zero Copy foundation; defer AI"
- Unlock = 2, Trust = 1, Activate = 1 → "Walk: MDM + identity resolution before any AI pilot"
- Unlock = 2–3, Trust = 2, Activate = 1 → "Run-ready foundation; activate via Agentforce + Action Layer"
- Unlock = 1, Activate = 2–3 (shadow AI) → "GIGO risk zone — pause AI pilots, fix the foundation"

Describe what the pattern means for the roadmap sequencing. -->
