---
title: "Data Barriers — Old Dominion University"
wiki_page: "02"
status: in-progress
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources: ["[[2026-05-11-kickoff]]", "[[gemini-deep-research]]", "[[slack-history]]", "[[workspace-inventory]]"]
last_analyzed: 2026-06-02
---

# Data Barriers

> [!NOTE]
> Run 1 (kickoff recording + deep research + research sweep). Severities below are written to
> `DRA_Engagement__c`. Pre-discovery confidence — these will firm up with interviews and the survey.

**Maps to:** DRA Report Section 2 — Three Barriers
**Drives output:** [[07-roadmap]], executive summary framing

---

## The Three-Barrier Framework

- **Blind Spot** — Data exists but can't be seen (siloed systems, manual/missing integration).
- **Time Trap** — Data is accessible but late (batch pipelines, refresh lag).
- **Trust Gap** — Data is accessible and timely but not believed (inconsistent definitions, no lineage/MDM).

The barriers compound; the roadmap addresses the highest-severity first.

---

## Blind Spot

**Severity:** High
**Confidence:** Medium — based on 3 sources (kickoff recording, deep research, agenda doc)

### Evidence
- Student data spread across **Banner (SIS), Canvas (LMS), three separate Salesforce orgs, Snowflake/analytics, and now health-sciences systems** with no unified student profile. [[2026-05-11-kickoff]] [[workspace-inventory]]
- "Salesforce First" (OMNI) is the mandate, but **Banner remains the authoritative system of record** — the unified view the CRM/marketing team wants doesn't exist today. [[gemini-deep-research]] [[2026-05-11-kickoff]]
- Pre-kickoff agenda explicitly names "data silos across campus systems" and "lack of a unified Student 360" as core gaps. [[workspace-inventory]]

### Impact on the Customer
Directly blocks the One Monarch Nation 360° student experience and the student-success interventions ODU needs to hit its retention (82%) and graduation (57%) targets — advisors and agents can't act on a full picture they can't assemble. [[gemini-deep-research]]

### Root Cause Hypothesis
No real-time integration layer between the SIS (Banner) and the Salesforce estate; three disconnected Salesforce orgs; the EVMS merger added a second institution's systems before the first was unified.

---

## Time Trap

**Severity:** High
**Confidence:** Medium — based on 2 sources (kickoff recording, agenda doc)

### Evidence
- Authoritative student data lives in Banner and **moves in batches**; real-time agents would be acting on "yesterday's bulk data snapshots." [[2026-05-11-kickoff]]
- ODU reports **Informatica API performance problems** on the homegrown Monarch portal — they need **sub-second APIs** for real-time data to student-facing apps. [[workspace-inventory]]
- The entire locked use case ("what's the status of my application?") is fundamentally a **real-time** requirement the current batch pattern can't satisfy. [[2026-05-11-kickoff]]

### Impact on the Customer
The flagship student-experience use case is impossible on the current latency profile; advisors lack real-time registration/hold data at the moment of action. Latency is the single most directly-named technical barrier.

### Root Cause Hypothesis
Batch-oriented Banner↔Salesforce integration and under-performing APIs on the homegrown portal; no event-driven/real-time integration tier.

---

## Trust Gap

**Severity:** Medium
**Confidence:** Low — based on 2 sources, no interviews/survey yet

### Evidence
- Lisa Handy (AVP Data & Analytics) flagged **data inconsistencies** as a pain point for the analytic environment at kickoff. [[2026-05-11-kickoff]]
- Jimmy Patel raised that **business-process differences** (e.g. multiple addresses in Banner vs. Salesforce) require documented data-exchange rules — a governance/MDM signal. [[2026-05-11-kickoff]]
- Pre-kickoff agenda names "no unified data governance — no data catalog, no ownership model." [[workspace-inventory]]

### Impact on the Customer
Inconsistent definitions and no MDM/identity resolution undermine confidence in analytics and would propagate bad data into any agent built on top — the GIGO risk for ODU's AI ambitions.

### Root Cause Hypothesis
No data catalog / ownership model; no master-data or identity-resolution layer across the three Salesforce orgs + Banner + health-sciences systems.

---

## Barrier Interaction

The **Blind Spot and Time Trap compound directly**: even where data exists, it arrives too late to power the real-time student experience ODU has committed to. The **Trust Gap sits underneath** — unifying and validating data is a prerequisite before any agent can safely act, or ODU risks building its flagship AI use case on inconsistent data (GIGO). Sequencing implication: address Unlock (connect + real-time integration) and the Trust foundation **before** activating agents. [[2026-05-11-kickoff]]

---

## Barrier Summary Table

| Barrier | Severity | Primary Evidence | Root Cause | Report Section |
|---|---|---|---|---|
| Blind Spot | High | 3 disconnected SF orgs + Banner + LMS, no unified Student 360 | No real-time SIS↔CRM integration; siloed orgs | Section 2 |
| Time Trap | High | Batch Banner data; sub-second API gap on Monarch portal | Batch integration, under-performing APIs, no event tier | Section 2 |
| Trust Gap | Medium | Analytic data inconsistencies; no catalog/MDM | No governance/ownership model or identity resolution | Section 2 |
