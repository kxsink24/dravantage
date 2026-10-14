---
title: "Personas — British Columbia Lottery Corporation"
wiki_page: "03"
status: in-progress
tags: [dra, personas, stakeholders]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/org62-account-snapshot]]"
last_analyzed: 2026-06-25
---

# Personas

> [!WARNING]
> **Pre-kickoff run (2026-06-25): NO interviews or survey responses exist yet.** Every persona section below is *inferred from desk research* (roles, regulatory context, kickoff-call notes) — there are **no verbatim customer quotes**. Confidence is **Low across all personas**. The purpose here is to pre-populate the discovery so interviews start at depth; replace inferred pains with real quotes as interviews land (Module 1 business-first, then Module 3 technical).

**Maps to:** DRA Report Section 3 — Target State Experience
**Drives output:** [[06-target-state-architecture]], readout deck stakeholder slides

---

## Why Personas Matter in the DRA

Every recommendation must land with a specific person who has a specific job. For BCLC the personas carry an unusual weight: the same unified-profile gap that frustrates a marketer is, for a compliance analyst, a regulatory-penalty exposure. Tie each recommendation to both the commercial and the compliance persona.

### The Six Personas — known BCLC mapping

| Persona | BCLC individual(s) (inferred) | Interview Module |
|---|---|---|
| **Business Leader** | Marie-Noëlle Savoie (CSPO/VP Marketing), Patrick Davis (CEO), Dan Beebe (COO) | Module 1 |
| **Business Worker** | Casino floor / retail field staff, loyalty / customer-support agents | Module 2 |
| **IT Leader** | **Mark Goldberg** (CIO & VP Business Technology — primary sponsor) | Module 1 / 3 |
| **IT Worker** | BCLC "core devs", BT integration team, Slalom engineers | Module 3 |
| **Data Leader** | Mark Goldberg (acting CDO); **Kevin deBruyckere** (Chief Compliance / Safer Play — CISO/governance lens) | Module 1 / 3 |
| **Data Worker** | CDP / data team bringing iGaming model into Data 360 | Module 3 |

---

## Business Leader

*Marie-Noëlle Savoie (loyalty / rewards / social purpose), CEO Patrick Davis, COO Dan Beebe.*

### Current State Pain Points (inferred)
- Can't grow loyalty registration (53%→70% goal) without a trustworthy unified player view to personalize against. [[inputs/research/deep-research]]
- Board-level and regulator-facing reporting on AML / responsible gaming is undermined by fragmented data and a live FINTRAC penalty. [[inputs/research/deep-research]]
- Four platform launches converging in September with no unified data foundation beneath them — execution risk owned at the top. [[inputs/research/deep-research]]

### Desired Outcomes (Target State Wins)
- Hit loyalty-registration targets via safe, real-time personalization. Demonstrate to the IGCO/FINTRAC a defensible 360-degree player view. De-risk the September convergence.

### Discovery Questions (from deck)
- *How often is your leadership team making critical decisions based on fragmented, outdated, or conflicting data?*
- *What overarching data / modernization priorities are top of mind this year?*
- *What are the primary constraints — tools, funding, other — limiting progress?*

### Relevant Quotes
_None yet — capture at kickoff (Module 1)._

### Confidence Level
Low — 0 interviews; inferred from research.

---

## Business Worker

*Casino floor & retail staff, loyalty / customer-support agents, AML investigators.*

### Current State Pain Points (inferred)
- AML / security analysts **manually search disconnected databases** for transactional anomalies. [[inputs/research/deep-research]]
- No single view of a player during a session — risk and value signals are scattered across channels. [[inputs/research/deep-research]]
- Support agents reconcile player identity across systems before they can help. [[inputs/research/deep-research]]

### Desired Outcomes (Target State Wins)
- A unified player profile at their fingertips; risk alerts that surface automatically instead of requiring manual cross-system hunts; less swivel-chair reconciliation.

### Discovery Questions (from deck)
- *Are staff able to get the right information at the right time?*
- *How many systems do you go to in order to pull data?*
- *Do you often work with stale or old data? How many repetitive tasks?*

### Relevant Quotes
_None yet — Business Worker interviews (Module 2) not scheduled._

### Confidence Level
Low — 0 interviews.

---

## IT Leader

*Mark Goldberg — CIO & VP Business Technology, acting CDO, confirmed primary executive sponsor.*

### Current State Pain Points (inferred)
- Owns a fragmented, hybrid legacy estate (InfoSphere MDM, WebSphere/DB2/DataStage) with **no central integration platform since MuleSoft was removed**. [[inputs/research/deep-research]] [[inputs/research/slack-history]]
- Must land four platform go-lives in September without a unified, real-time data foundation. [[inputs/research/deep-research]]
- Explicitly concerned about **building AI on an unstable data foundation** ("fix the foundation first"). [[inputs/research/workspace-inventory]]

### Desired Outcomes (Target State Wins)
- A composable, real-time data layer (Data 360) that unifies channels without another rigid MDM; AI-ready infrastructure; modernization that de-risks rather than disrupts the September launches.

### Discovery Questions (from deck)
- *Is your AI strategy built on moving data into new silos, or zero-copy architectures that ground agents in real-time enterprise data?* (CTO)
- *How are you handling data quality & governance to act as a single source of truth?*
- *What's your approach to a unified integration strategy across applications?*

### Relevant Quotes
_None yet — Mark Goldberg is the priority Module 1 interview._

### Confidence Level
Low — 0 interviews, but role and stance well-evidenced in research.

---

## IT Worker

*BCLC core developers / BT integration team, Slalom engineers.*

### Current State Pain Points (inferred)
- Living with the integration gap left by MuleSoft's removal; point-to-point connections and legacy middleware. [[inputs/research/slack-history]] [[inputs/research/deep-research]]
- Working through Data Cloud setup, data-action, and provisioning issues (recurring org62 cases Feb–Jun 2026). [[inputs/research/org62-account-snapshot]]
- Uncertain integration paths for the new Melco / Intralot platforms. [[inputs/research/deep-research]]

### Desired Outcomes (Target State Wins)
- A governed API/event layer and native Data 360 connectors that reduce point-to-point maintenance and make new-platform onboarding repeatable.

### Discovery Questions (from deck)
- *Do you have a common integration strategy across projects, or does each start from scratch?*
- *How much real-time data demand do you get, and how do you handle it?*
- *Are you mostly keeping the lights on, or innovating?*

### Relevant Quotes
_None yet — Module 3 technical interview._

### Confidence Level
Low — 0 interviews.

---

## Data Leader

*Mark Goldberg (acting CDO) and Kevin deBruyckere (Chief Compliance Officer & VP Safer Play / Enterprise Integrity — the governance & risk lens).*

> [!NOTE]
> **Sub-types present (inferred):** a **CDO** lens (single source of truth, identity resolution, AI-ready data — Goldberg) **and** a strong **CISO/Compliance** lens (AML, FIPPA, who-can-see-what, auditable decisions — deBruyckere). BCLC is unusual in having the compliance Data-Leader lens be a *regulatory* mandate, not just best practice.

### Current State Pain Points (inferred)
- No single source of truth; governance historically owned by the CMO; data quality "an ambition, not a process." [[inputs/research/workspace-inventory]]
- FINTRAC penalty + audit finding of undesignated high-risk patrons = governance/quality failures with legal consequence. [[inputs/research/deep-research]]
- Must define identity-resolution and consent rules (linking anonymous retail to verified profiles) under FIPPA — currently unresolved. [[inputs/research/deep-research]]

### Desired Outcomes (Target State Wins)
- A governed, auditable 360-degree player view; automated FIPPA/AML policy enforcement; AI decisions traceable to trusted source data (defensible to IGCO/FINTRAC and in court per *Ghotaymi*).

### Discovery Questions (from deck)
- *How are you managing & monitoring access to data today?*
- *As you deploy AI agents, how do you ensure they only see data they're authorized to?* (CISO)
- *If an AI-driven decision is challenged by an auditor, how do you trace it to its source?*

### Relevant Quotes
_None yet — high-priority Module 1/3 interviews (Goldberg + deBruyckere or delegate)._

### Confidence Level
Low — 0 interviews.
**Sub-type present:** Combined (CDO + CISO/Compliance).

---

## Data Worker

*CDP / data engineering team bringing the iGaming data model into Data 360; Slalom data team.*

### Current State Pain Points (inferred)
- Resuming a previously paused CDP/profile-unification build; identity-resolution rules not yet settled. [[inputs/research/deep-research]] [[inputs/research/slack-history]]
- Duplicate records, journey-entry failures, batch reconciliation overhead. [[inputs/research/org62-account-snapshot]] [[inputs/research/deep-research]]
- Pressure to deliver a real-time event feed for Future Anthem on a batch foundation. [[inputs/research/deep-research]]

### Desired Outcomes (Target State Wins)
- Native Data 360 identity resolution and data-quality tooling that replaces brittle batch ETL and manual dedup; trusted pipelines feeding both compliance and personalization.

### Discovery Questions (from deck)
- *How frequently do you hit stale / siloed / duplicative data?*
- *How are you managing ontology & metadata so AI agents understand intent?*
- *What challenges in making unstructured / legacy data usable for AI?*

### Relevant Quotes
_None yet — Module 3._

### Confidence Level
Low — 0 interviews.

---

## Persona Gaps

**Every persona is currently research-inferred — zero interviews completed.** Coverage priorities for the kickoff and follow-up interviews:

1. **IT/Data Leader (Mark Goldberg)** — the confirmed sponsor and the single most important Module 1 conversation; anchors both IT and Data Leader personas.
2. **Compliance Data Leader (Kevin deBruyckere / Safer Play delegate)** — essential to validate the AML/FIPPA framing that makes the barriers regulatory, not just operational.
3. **Business Leader (Marie-Noëlle Savoie)** — to confirm the loyalty/personalization outcome ownership and the business sponsor leg.
4. **Business Worker (AML analyst + casino/retail staff)** — currently zero signal beyond inference; a Module 2 conversation would materially raise confidence on day-in-the-life pain.
5. **IT/Data Worker (core devs + Slalom)** — to confirm integration mechanics (Melco streaming, Everi write-back) that the scores in [[04-data-value-chain]] depend on.

Until these land, **no persona section should be treated as customer-validated** in the readout.
