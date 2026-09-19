---
title: "Data Barriers — Department of Veterans Affairs"
wiki_page: "02"
status: in-progress
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources: [inputs/interviews/2026-07-02, inputs/interviews/2026-07-08, inputs/interviews/2026-07-09, inputs/interviews/2026-07-16, inputs/interviews/2026-07-21, inputs/interviews/2026-07-23, inputs/interviews/2026-07-28]
last_analyzed: 2026-08-03
---

# Data Barriers

> [!NOTE]
> Derived from 7 technical working session transcripts (Jul 2 – Jul 28, 2026). No formal business stakeholder interviews have occurred. Barrier severity ratings are Medium confidence — the technical sessions reveal the IT view of the barriers clearly, but the business cost and user impact dimensions are not yet documented.

**Maps to:** DRA Report Section 2 — Three Barriers
**Drives output:** [[07-roadmap]], executive summary framing

---

## The Three-Barrier Framework

- **Blind Spot** — Data exists but can't be seen. Systems are siloed, integration is manual or missing.
- **Time Trap** — Data is accessible but late. Batch pipelines, stale snapshots, reporting lag.
- **Trust Gap** — Data is accessible and timely but not believed. Inconsistent definitions, governance gaps, conflicting systems. 

---

## Blind Spot

**Severity:** High
**Confidence:** High — confirmed across 6 of 7 sessions

### Evidence

- VA operates ~14 separate Dynamics CRM applications for different business lines (disability, benefits, etc.), none of which have a unified data model or cross-application visibility. Fernando Gonzalez confirmed these are being consolidated but the data foundation has not been built yet. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- Disability benefits are currently managed entirely in Dynamics with no Salesforce visibility. Fernando: *"Disability benefits is an interesting one. It's very complex and to be honest with you, it's actually being done in Dynamics today... this is something that can be done with Salesforce, right?"* — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- MuleSoft AnyPoint is deployed at VA but used for only approximately 10% of its potential scope. The vast majority of VA system integrations are either absent or point-to-point. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- VA stakeholders and incoming SIs default to building scoped, siloed applications "every single day" — Fernando's phrase — rather than connecting to a unified foundation. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- Veteran data is fragmented across VistA (transitioning to Cerner), Salesforce Health Connect, Dynamics, and multiple backend systems with no unified identity resolution in place. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- Stakeholders at leadership level lack visibility into the backend data architecture: *"People understand the CRM because that's what they see... people don't understand the rest of the internal workings."* — Fernando Gonzalez, *[[inputs/interviews/2026-07-09-va-ccc-architecture]]*

### Impact on the Customer

Without a unified data layer, each contact center migration becomes an isolated data problem rather than a connection into a shared foundation. The risk Fernando articulates clearly: SIs will arrive, get contracts scoped to individual applications, and build around the data layer rather than through it — creating a new generation of silos on top of Salesforce instead of replacing the Dynamics silos. The unified veteran record — essential for any AI-assisted contact center interaction — cannot exist until the Blind Spot is resolved.

### Root Cause Hypothesis

Decades of program-specific IT procurement in a large federal agency. Each VHA, VBA, and NCA program funded its own system, resulting in mission-specific applications with no enterprise data layer. MuleSoft exists but was deployed incrementally rather than as an enterprise strategy. The DTC (Digital Transformation Center) acts as a governance bottleneck rather than an enabler — its slow pace in granting access, establishing patterns, and publishing roadmaps means no one waits for the right foundation before building.

---

## Time Trap

**Severity:** Medium
**Confidence:** Medium — implied by architecture state, not directly confirmed by business users

### Evidence

- VA Health Connect (Salesforce HealthCloud) is connected to VA backend systems via MuleSoft, but the integration layer is described as existing infrastructure rather than a modern streaming capability — suggesting batch/periodic sync patterns are the norm. — *[[inputs/interviews/2026-07-08-va-ccc-architecture]]*
- The 14-to-1 Dynamics consolidation requires sequenced migration; until each contact center migrates, agents servicing those lines will continue working in legacy systems with no real-time data sharing. — *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- Data 360 / Data Cloud is planned but not yet operational as the unified veteran data layer — meaning unified profiles and calculated insights are a future state, not available now. — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- Agentforce Voice (the capability required for real-time AI-assisted contact center interactions) is not yet available on GovCloud. The internal target date is Q1 FY27 — meaning live AI-assisted routing and real-time agent assistance will not be available until late 2026 at earliest. — *Slack #va-contact-center-consolidation-oppty, 2026-03-09*

### Impact on the Customer

Contact center agents currently handling veteran interactions must navigate multiple systems in real time to answer questions — there is no single-screen unified view. Supervisors and program managers making staffing, routing, and capacity decisions do so with information that is not current. The phased migration plan means this condition will persist across lines until the data foundation is operational.

### Root Cause Hypothesis

The Time Trap is structural — a consequence of the same program-specific procurement history that created the Blind Spot. No streaming integration layer exists because no enterprise integration strategy was in place to require one. The phased migration plan, while pragmatically sound, extends the Time Trap by design until the foundation is built.

---

## Trust Gap

**Severity:** High
**Confidence:** High — surfaced consistently across governance and stakeholder expectation conversations

### Evidence

- DTC (Digital Transformation Center) has blocked Agentforce access for 6+ months despite active requests from the VA OIT team. Fernando: *"If DTC is not going to give out the access to these things or have the tool ready and have governance in place before we can give any access, this is not going to go anywhere."* — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- VA leadership has a documented pattern of expecting "flip a switch" AI deployment — Fernando: *"A lot of people think it's flip a switch. I'm going to guess that even way up high some people think you guys can just come in and flip a switch..."* This expectation mismatch is a Trust Gap at the organizational level: leadership does not trust the team's realistic timeline assessments. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- Contractual uncertainty: the new license agreement was signed in June 2026 but the team cannot confirm what is actually available to implement. *"The hard part is that's the easy part... the buying part is straightforward, but then like is DTC willing to release it and all the other things that go into actually getting your hands on it."* — Brian Coughlin, *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- Fernando repeatedly coached the team to avoid "sales pitch" framing and set realistic expectations: *"I don't want to provide false expectations... I want our feedback to be about realistic expectations."* — *[[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- VA leadership confusion about what MuleSoft adds if it "already exists": *"If you say, 'Well, we already have MuleSoft.' Then they're going to be like, 'Well, then why are you making such a big deal about it?'"* — Fernando Gonzalez, *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*

### Impact on the Customer

The Trust Gap operates on two levels simultaneously. At the **governance level**, DTC's gatekeeping prevents the team from building and validating with real tools — slowing delivery and creating uncertainty about what can actually be committed to in the architecture. At the **leadership level**, misaligned expectations about when AI capabilities will be available risk stakeholder disillusionment when Phase 1 delivers foundational infrastructure rather than intelligent agents. Both undermine the program's momentum.

### Root Cause Hypothesis

Institutional fragmentation of authority: the team doing the architecture work (Fernando, Mathew, and the Salesforce SE team) does not control procurement, licensing, or access — DTC does. When the governing body's incentives are risk-avoidance rather than delivery, trust in timelines and capabilities erodes. On the leadership side, the Trust Gap reflects years of technology promises that didn't deliver on schedule in a large federal agency — healthy skepticism that becomes a blocker when it prevents green-lighting the foundational work.

---

## Barrier Interaction

All three barriers are present and compounding. The sequence is:

1. The **Blind Spot** (fragmented data across 14+ systems) means there is no unified veteran record to ground AI interactions.
2. The **Time Trap** (no streaming integration, no live Data Cloud layer) means that even as systems are connected, the data won't be current enough for real-time AI use cases until the streaming architecture is in place.
3. The **Trust Gap** (DTC governance blocking access, leadership expecting instant AI) means the team cannot build, test, and demonstrate progress fast enough to maintain stakeholder confidence.

**The GIGO risk is real:** VA leadership is expecting Agentforce-powered contact center agents. But if the data foundation is skipped — SIs building Salesforce apps that connect directly to Dynamics workarounds rather than through MuleSoft — the AI layer will be querying fragmented, stale, non-unified data. Fernando names this risk explicitly in every session.

**Recommended sequence:** Address Blind Spot first (MuleSoft as enterprise registry, phased API integration, DTC governance patterns established). Time Trap second (Data Cloud 360 operational, streaming integration layer). Trust Gap is addressed in parallel through the architecture deliverable itself — making the foundation-first strategy visible and defensible to leadership before SIs arrive.

---

## Barrier Summary Table

| Barrier | Severity | Primary Evidence | Root Cause | Report Section |
|---|---|---|---|---|
| Blind Spot | **High** | 14 siloed Dynamics apps; MuleSoft at 10% utilization; no unified veteran identity; SIs default to CRM-first | Program-specific procurement history; no enterprise integration mandate; DTC gatekeeping | Section 2.1 |
| Time Trap | **Medium** | No live Data Cloud layer; Agentforce Voice not GovCloud-available; phased migration extends legacy conditions | No streaming integration strategy; legacy batch/ETL patterns; FedRAMP compliance lag | Section 2.2 |
| Trust Gap | **High** | DTC blocking Agentforce access 6+ months; leadership "flip a switch" expectation; contract uncertainty | Fragmented authority between delivery team and DTC; history of unmet technology promises | Section 2.3 |
