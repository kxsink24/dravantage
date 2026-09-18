---
title: "Data Value Chain — Department of Veterans Affairs"
wiki_page: "04"
status: in-progress
tags: [dra, data-value-chain, scoring, unlock, trust, activate]
sources: [inputs/interviews/2026-07-02, inputs/interviews/2026-07-08, inputs/interviews/2026-07-09, inputs/interviews/2026-07-16, inputs/interviews/2026-07-21, inputs/interviews/2026-07-23, inputs/interviews/2026-07-28]
last_analyzed: 2026-08-03
---

# Data Value Chain

> [!NOTE]
> Scored from 7 technical working session transcripts. No formal survey data and no business stakeholder interviews yet. Scores reflect the IT/OIT view — business-layer scoring (Decide, Act) should be revisited once business persona interviews occur. Every score is defended with evidence below.

**Maps to:** DRA Report Appendix — Data Assessment Rating scorecard + Solution Design framing
**Drives output:** [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]]

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
**Confidence:** High

*Real-time data flow across systems.*

**Evidence:**
- MuleSoft AnyPoint is deployed at VA but utilized for approximately 10% of its potential scope. The vast majority of VA system integrations are either absent or point-to-point. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- 14 separate Dynamics applications operate without cross-application data flow. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- Data Cloud 360 is not yet operational as a unified data layer — streaming/federated connections are future state. — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- VistA transitioning to Cerner, but integration between Cerner and Salesforce/MuleSoft is not yet established. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

**What score 3 looks like for VA:** MuleSoft as the enterprise integration backbone connecting all VA systems of record (VistA/Cerner, Dynamics, VBMS, backend benefits systems) to Data Cloud 360 via API-led connectivity, with event-driven real-time sync for contact center use cases and Zero Copy / federated access for analytics.

---

### Integrate

**Score:** 2
**Confidence:** Medium

*Managed integration layer — APIs, connectors, legacy bridges.*

**Evidence:**
- MuleSoft AnyPoint *exists* at VA, which is a score-2 signal — this is not a greenfield. The platform is deployed and understood by the OIT team. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- VA Health Connect (Salesforce HealthCloud) is connected to VA backend systems via MuleSoft — a live, functioning integration. — *[[inputs/interviews/2026-07-08-va-ccc-architecture]]*
- However, integration is not governed as an enterprise strategy. Projects integrate point-to-point or through MuleSoft ad hoc. No centralized API registry or reuse mandate exists yet. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- The Lighthouse project provides external-facing VA developer APIs but is described as external-only — not the internal integration governance layer needed. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

**What score 3 looks like for VA:** MuleSoft as a centralized API registry with documented APIs, reuse policies, and Model Context Protocol (MCP) agent discovery. SIs required to use the registry rather than build point-to-point. DTC governance patterns published and enforced.

---

### Understand

**Score:** 1
**Confidence:** Medium

*Semantic models, data dictionaries, shared definitions.*

**Evidence:**
- No evidence of a VA enterprise data dictionary, semantic model, or shared business glossary across the sessions reviewed. — *all sessions*
- Team discussions about architecture framing reveal that even internal VA stakeholders struggle to describe what each system does in consistent terms — the architecture diagram effort is in part an exercise in making the architecture *understandable* for the first time. — *[[inputs/interviews/2026-07-08-va-ccc-architecture]], [[inputs/interviews/2026-07-09-va-ccc-architecture]]*
- Fernando's concern about SIs building workarounds reflects a deeper problem: there is no documented, authoritative picture of the data model that SIs would be expected to comply with. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

**What score 3 looks like for VA:** A governed semantic model for veteran data (identity, benefits eligibility, healthcare enrollment, contact history) documented in a data catalog accessible to SIs, with MuleSoft API definitions aligned to that model.

---

## TRUST Pillar

### Unify

**Score:** 1
**Confidence:** High

*Single identity resolution across systems.*

**Evidence:**
- Veteran identity is fragmented across VistA/Cerner (healthcare), Dynamics (benefits/disability), Salesforce Health Connect, and backend VA systems. No unified veteran profile exists today. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- Disability benefits and health benefits are in separate systems with no cross-system identity link visible at the application layer. — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- The unified veteran record is a stated goal of the Data Cloud 360 deployment — it is future state, not current state. — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- Multiple disability exam contractors operate with different workflows and no unified view of the exam provider ecosystem. — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*

**What score 3 looks like for VA:** Data Cloud 360 with identity resolution across VistA/Cerner, Dynamics, and Salesforce — a unified veteran profile accessible to any contact center agent regardless of which line of business they support.

---

### Validate

**Score:** 1
**Confidence:** Medium

*Data quality monitoring, lineage, cataloging.*

**Evidence:**
- No mention of a data quality program, data catalog, or lineage tracking in any session. — *all sessions*
- The team's primary concern is getting the architecture built and visible to stakeholders — data quality as a discipline is not yet on the active agenda. — *all sessions*
- Fernando's "foundation-first" advocacy implicitly acknowledges that quality will be an issue once data starts flowing — but no quality monitoring infrastructure is in place to catch problems. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

**What score 3 looks like for VA:** Automated data quality monitoring on the MuleSoft integration layer (schema validation, completeness checks) and Data Cloud calculated insights that surface data anomalies in veteran profiles before they reach contact center agents.

---

### Protect

**Score:** 2
**Confidence:** Medium

*Data governance, privacy compliance, policy enforcement.*

**Evidence:**
- FedRAMP Moderate compliance is active and enforced — all technology must meet FedRAMP authorization before deployment. This is a functioning governance mechanism. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]], Slack*
- DTC (Digital Transformation Center) acts as the access governance authority — all system access, tool provisioning, and pattern approval routes through DTC. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- However, DTC governance is described as a bottleneck rather than an enabler — 6+ months to grant Agentforce access, no published roadmap for SIs. Governance exists but does not scale. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- Galaxy portal (the architecture reference tool) uses shared credentials — basic access control, not domain-based. Moving to VA.gov domain-based access is a planned improvement. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

**What score 3 looks like for VA:** DTC governance patterns published and automated — SIs follow a defined playbook rather than waiting months for individual approvals. AI agent access controls enforced at the MuleSoft API gateway layer, ensuring agents only access data they're authorized to see.

---

## ACTIVATE Pillar

### Decide

**Score:** 1
**Confidence:** Low — no business stakeholder interviews yet

*Analytics, predictions, data-driven decision-making.*

**Evidence:**
- No evidence of self-service analytics, predictive modeling, or data-driven decision workflows in any session reviewed. — *all sessions*
- Current focus is architectural foundation — decisions are being made based on architecture judgment, not data-driven program analytics. — *all sessions*

**What score 3 looks like for VA:** Contact center supervisors using Data Cloud dashboards to make real-time staffing, routing, and escalation decisions. Program managers using calculated insights to predict claim volumes and allocate resources before backlogs form.

---

### Orchestrate

**Score:** 1
**Confidence:** High

*Event-driven automation, agents, data-triggered workflows.*

**Evidence:**
- Agentforce has not been provisioned for VA. DTC has blocked access for 6+ months. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- Agentforce Voice (required for AI-assisted real-time call routing) is not yet available on GovCloud. — *Slack #va-contact-center-consolidation-oppty*
- The team is building toward an agentic architecture but nothing is operational today. Fernando explicitly: *"You don't get this on day one."* — *[[inputs/interviews/2026-07-21-va-ccc-architecture]]*

**What score 3 looks like for VA:** Agentforce agents deployed across voice (Genesys), email, and chat, orchestrating API calls via MuleSoft, surfacing unified veteran context from Data Cloud, and escalating to human agents with full context. Long-term: agents that dynamically discover and invoke APIs from the MuleSoft registry via MCP.

---

### Act

**Score:** 1
**Confidence:** Medium

*Insights reach frontline workers embedded in their tools.*

**Evidence:**
- Contact center agents currently work across multiple systems to answer veteran questions — no unified agent workspace with embedded data insights exists yet. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- The Salesforce/Genesys integration (Service Cloud Voice + Genesys CCaaS) is the target state for the agent workspace — not yet deployed. — *Slack #va-contact-center-consolidation-oppty*

**What score 3 looks like for VA:** A single Salesforce agent workspace where contact center agents see the unified veteran profile, AI-generated case summaries, suggested next actions from Agentforce, and real-time data from all VA systems of record — without switching applications.

---

## Scorecard Summary

| Pillar | Capability | Score | Confidence |
|---|---|---|---|
| UNLOCK | Connect | 1 | High |
| UNLOCK | Integrate | 2 | Medium |
| UNLOCK | Understand | 1 | Medium |
| TRUST | Unify | 1 | High |
| TRUST | Validate | 1 | Medium |
| TRUST | Protect | 2 | Medium |
| ACTIVATE | Decide | 1 | Low |
| ACTIVATE | Orchestrate | 1 | High |
| ACTIVATE | Act | 1 | Medium |

**Integration Health Score** (Connect + Integrate + Understand avg × 33): **44 / 100**
**AI Readiness Score** (all 9 capabilities avg × 33): **37 / 100**

---

## Score Pattern Analysis

VA's pattern is **"Crawl: API-led + Zero Copy foundation; defer AI."**

Connect=1, Integrate=2, Understand=1 places VA in early Unlock. The MuleSoft deployment at 2 is the only above-floor score — and it's the right asset to build from. Protect=2 (FedRAMP compliance) is a genuine foundation, but DTC governance needs to shift from gatekeeper to enabler.

The critical risk is the **GIGO zone**: VA leadership is expecting Agentforce (Orchestrate=1) but the data layer that would ground agents in accurate veteran context (Unify=1, Validate=1) doesn't exist yet. If SIs arrive and start building Salesforce applications before the MuleSoft foundation is established, the architecture will lock in a new generation of silos — and AI will be trained on fragmented, non-unified data.

**Roadmap implication:** Phase 1 must be non-negotiably foundation work — MuleSoft as enterprise registry, DTC governance patterns, phased API integration. Data Cloud 360 operational in Phase 2. Agentforce deployment in Phase 3, after unified veteran profiles are available and validated.
