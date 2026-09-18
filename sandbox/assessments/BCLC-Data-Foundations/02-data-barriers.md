---
title: "Data Barriers — British Columbia Lottery Corporation"
wiki_page: "02"
status: in-progress
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/slack-history]]"
  - "[[inputs/research/org62-account-snapshot]]"
last_analyzed: 2026-06-25
---

# Data Barriers

> [!NOTE]
> Severity scores here feed `DRA_Engagement__c.Blind_Spot_Severity__c`, `Time_Trap_Severity__c`, `Trust_Gap_Severity__c`. **Pre-kickoff run (2026-06-25):** severities are assigned from desk research (multiple independent sources: Gemini deep research + May 26 kickoff notes + org62 case history), but **no customer interviews exist yet**, so confidence is held at **Medium**. Validate at the July 13 kickoff and during interviews.

**Maps to:** DRA Report Section 2 — Three Barriers
**Drives output:** [[07-roadmap]], executive summary framing

---

## The Three-Barrier Framework

- **Blind Spot** — Data exists but can't be seen. Systems are siloed, integration is manual or missing, and decisions get made without full context.
- **Time Trap** — Data is accessible but late. By the time information is available, the window for action has passed.
- **Trust Gap** — Data is accessible and timely but not believed. Inconsistent definitions, undocumented lineage, and unresolved conflicts undermine confidence.

For BCLC, **all three are present and reinforce each other**, and uniquely for a gaming Crown corporation they carry **regulatory and legal consequences**, not just operational cost.

---

## Blind Spot

**Severity:** High
**Confidence:** Medium — based on 3 desk-research sources; no customer interview yet

### Evidence

- Player data is fragmented across **four disconnected channels** — online (PlayNow), casino floor (Everi GMS / soon Melco), retail lottery (~8,000 terminals, historically anonymous cash), and loyalty — with no unified profile spanning them. [[inputs/research/deep-research]]
- The Cullen Commission explicitly found BCLC lacked a **"flawless 360-degree player view,"** making the blind spot a *named regulatory finding*, not just an internal complaint. [[inputs/research/deep-research]]
- A **Feb 2025 internal AML audit rated money-laundering controls 3.5/5**, citing **data gaps and high-risk patrons who were never designated** despite actively transacting on casino floors. [[inputs/research/deep-research]]
- Security/AML analysts have had to **manually search for transactional anomalies across disconnected databases** because the systems don't present a consolidated view. [[inputs/research/deep-research]]

### Impact on the Customer (3 Deep Dive)

1. **Symptom:** No single view of a player across online, floor, retail, and loyalty.
2. **Operational consequence:** Compliance staff manually reconcile activity across systems; high-risk patrons slip through undesignated; a player can structure transactions below thresholds in one channel without it being visible against their cross-channel behavior.
3. **Business impact:** A **$1.075M FINTRAC penalty already levied**, ongoing exposure to a regime with 40× higher maximum fines and public naming, and legal obligation (*Ghotaymi*) to detect risk patterns in real time. The blind spot directly blocks both the Cullen mandate and the September loyalty-growth goal. [[inputs/research/deep-research]]

### Root Cause Hypothesis

Legacy channel-siloed transaction systems were each procured for their own line of business; the one attempt at unification (IBM InfoSphere MDM) produced a rigid back-office golden record that never spanned real-time, cross-channel play. No connective tissue was built between the channels.

---

## Time Trap

**Severity:** High
**Confidence:** Medium — strong architectural evidence; pending customer confirmation of latency cost

### Evidence

- **IBM InfoSphere MDM is batch-oriented** (WebSphere, DB2, DataStage scheduled ETL) and "structurally unable to handle the fast-moving, high-velocity digital streams" of modern gaming; player profiles inside it remain **static between batch windows**. [[inputs/research/deep-research]]
- Real-time player-safety interventions and localized promotions are **blocked by the batch architecture** — the data arrives after the moment for action has passed. [[inputs/research/deep-research]]
- The legal standard from *Ghotaymi* and the responsible-gaming use cases (pause promo on risk signal, trigger GameSense, BC Game Break) **require sub-session latency** that the current stack cannot meet. [[inputs/research/deep-research]]
- Future Anthem's Amplifier AI personalization **depends on streaming events** (spins, wagers, deposit frequency, location) that the current foundation does not deliver. [[inputs/research/deep-research]]

### Impact on the Customer (3 Deep Dive)

1. **Symptom:** Player profiles and risk signals are only as fresh as the last batch run.
2. **Operational consequence:** A risk intervention or a personalized offer that should fire *during* a session fires the next day, or not at all; AML alerts are retrospective.
3. **Business impact:** Real-time responsible-gaming obligations can't be met, promotions can't be safely personalized at the moment of play, and the September Future Anthem launch is at risk of running on data that arrives too late to be safe or effective.

### Root Cause Hypothesis

The unification layer (InfoSphere MDM) was designed for slow-moving back-office reconciliation, not active engagement; there is no real-time streaming / activation layer between the transactional systems and the channels that need to act.

---

## Trust Gap

**Severity:** High
**Confidence:** Medium — multiple corroborating signals; pending customer confirmation

### Evidence

- The May 26 kickoff call stated **data quality is "more of an ambition than an actual process,"** and that **governance was historically managed by the CMO** rather than a data function. [[inputs/research/workspace-inventory]]
- **FINTRAC failures** (un-filed STRs, undesignated high-risk patrons) are themselves trust/quality failures — the data that should have triggered reports wasn't reliable or complete. [[inputs/research/deep-research]]
- org62 case history shows recurring **data-quality and duplication issues**: "Duplicate records sent to Marketing Cloud," "BCLC – multiple Duplicate accounts," contact-key/journey failures, and Data Cloud setup/data-action errors over Feb–Jun 2026. [[inputs/research/org62-account-snapshot]]
- The prior Slalom CDP / profile-unification effort was **paused**, partly waiting for a stable native engine and for identity-resolution rules to be defined against the strict Cullen verified-player definitions — i.e. the rules for what a *trusted* unified record means were not yet settled. [[inputs/research/deep-research]]

### Impact on the Customer (3 Deep Dive)

1. **Symptom:** No agreed single source of truth; duplicate / inconsistent player records; quality managed informally.
2. **Operational consequence:** Marketing journeys fail or mis-target; compliance can't fully trust that a player's record reflects their true cross-channel risk; teams re-verify data manually.
3. **Business impact:** Personalization and AI built on this data inherit the GIGO risk (see [[04-data-value-chain]]); regulators have already penalized the downstream effect; loyalty growth targets are undermined if records can't be trusted enough to act on.

### Root Cause Hypothesis

Governance ownership sat in marketing rather than a data office; there is no operative data-quality process, catalog, or identity-resolution ruleset — quality has been aspirational. The pending Data 360 identity-resolution design is the opportunity to fix this at the root.

---

## Barrier Interaction

The three barriers form a **compounding chain that is also the regulatory exposure**:

- The **Blind Spot** means BCLC can't see a player across channels;
- the **Time Trap** means even where data exists it's too late to act on during play;
- the **Trust Gap** means the unified record, once built, isn't yet reliable enough for compliance or AI to depend on.

Critically, BCLC is poised to layer **real-time AI/personalization (Future Anthem) and Agentforce** on top of this foundation in September 2026. Activating AI before Unlock and Trust are addressed is the classic **GIGO failure mode** — and here the failure isn't a bad recommendation, it's a missed AML report or an unsafe promotion to an at-risk player. **The roadmap must sequence Unlock → Trust before Activate.**

---

## Barrier Summary Table

| Barrier | Severity | Primary Evidence | Root Cause | Report Section |
|---|---|---|---|---|
| Blind Spot | **High** | 4 siloed channels; Cullen "no 360 view" finding; AML audit 3.5/5; manual anomaly searches | Channel-siloed legacy systems; no cross-channel connective tissue | §2 |
| Time Trap | **High** | Batch InfoSphere MDM; static profiles; real-time RG/AML & Future Anthem needs unmet | Unification layer built for batch reconciliation, not real-time activation | §2 |
| Trust Gap | **High** | "Data quality an ambition not a process"; FINTRAC failures; duplicate records in org62; paused CDP | Governance owned by CMO; no DQ process / catalog / identity-resolution rules | §2 |
