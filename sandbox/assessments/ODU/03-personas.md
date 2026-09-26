---
title: "Personas — Old Dominion University"
wiki_page: "03"
status: in-progress
tags: [dra, personas, stakeholders]
sources: ["[[2026-05-11-kickoff]]"]
last_analyzed: 2026-06-03
---

# Personas

> [!NOTE]
> Run 2 (5/11 kickoff/alignment recording only). These are **archetype** syntheses from a group
> session — **not** dedicated Module 1/2/3 discovery interviews — so every persona is **Low
> confidence** and two personas (Business Worker, Data Worker) are **unrepresented**. Quotes are
> attributed with transcript timestamps and cite [[2026-05-11-kickoff]].

**Maps to:** DRA Report Section 3 — Target State Experience (the "day in the life" and stakeholder impact framing)  
**Drives output:** [[06-target-state-architecture]] (who benefits from what), readout deck stakeholder slides

---

## Why Personas Matter in the DRA

The DRA is not just a technical assessment — it's a case for change. Every recommendation needs to land with a specific person who has a specific job to do. Personas translate architecture decisions into human outcomes: "This is what real-time Banner↔Salesforce integration means for the enrollment counselor who currently can't tell a student their application status." Without that translation, the recommendation is an abstraction.

An organization may have multiple stakeholders who fit each persona. The goal is to capture the *archetype* — the pattern that represents what this type of person experiences at this customer — not a per-individual profile.

### The Six Personas

| Persona | Typical Titles | Primary Concern | Interview Module |
|---|---|---|---|
| **Business Leader** | VP, Director, Program Manager | Strategic outcomes, mission delivery, board-level reporting | Module 1 |
| **Business Worker** | Analyst, Case Worker, Counselor, Field Staff | Operational speed, data access, daily workflow friction | Module 2 |
| **IT Leader** | CIO, CTO, Enterprise Architect | System stability, legacy modernization, AI readiness at scale | Module 1 / Module 3 |
| **IT Worker** | Developer, Integration Engineer, Sys Admin | Integration burden, API management, keeping systems running | Module 3 |
| **Data Leader** | CDO, CDAO, CISO, Chief AI Officer | Data governance, lineage, trust, compliance, responsible AI | Module 1 / Module 3 |
| **Data Worker** | Data Engineer, DBA, IR Analyst, Data Steward | Data quality, pipeline maintenance, reporting burden | Module 3 |

> [!NOTE]
> In GPS organizations, the **Data Leader** persona may be a combined CDAO (Chief Data & AI Officer), a standalone CDO, a CISO focused on compliance and access, or a Chief AI Officer focused on responsible AI and agent grounding. Note which variant is present — the discovery questions and target state wins differ meaningfully across these sub-types.

> [!IMPORTANT]
> **Persona-label reconciliation:** the [[08-appendix]] stakeholder registry currently labels some
> individuals differently than this archetype synthesis (e.g. Brian Easton → *IT Leader/Sponsor* in
> the registry vs. *Business Leader* here; Sai Nidumolu → *Data Worker* in the registry vs. *IT
> Worker* here). ODU leaders wear multiple hats, which is normal for mid-size higher-ed IT. Attribution
> below is by the archetype each person's kickoff statements best evidence. Reconcile the registry
> labels during Module 1–3 scheduling.

---

## Business Leader

*VPs, Directors, and Program Managers who make strategic and resource decisions and are accountable for mission outcomes. At ODU this archetype showed up as the digital/student-experience strategy voice.*

### Current State Pain Points

- **Manual, friction-heavy student touchpoints consume staff capacity.** Staff spend time on low-value manual tasks instead of high-impact student interactions. *(3 Deep Dive: symptom — manual student-facing processes; consequence — staff bandwidth tied up in routine work; impact — a slower, more fragmented student experience that works against ODU's retention (~82%) and graduation (~57%) targets carried in [[02-data-barriers]].)* [[2026-05-11-kickoff]]
- **The "One Monarch Nation" 360° student experience can't be delivered today** because student data is siloed across Banner, the LMS, three Salesforce orgs, and analytics — the **Blind Spot** barrier felt at the strategic level. [[2026-05-11-kickoff]]
- **The EVMS merger adds organizational and data complexity** that leadership wants pulled into the CRM under a Salesforce-first model. [[2026-05-11-kickoff]]

### Desired Outcomes (Target State Wins)

- A **frictionless, increasingly automated student experience** where staff are freed for high-impact interactions.
- The **Salesforce-first "One Monarch Nation"** realized, with **enrollment / application-status agents** as the first visible proof point.
- EVMS-merger processes brought cleanly into the CRM rather than spawning new silos.

### Discovery Questions (from deck)

- *How often is your leadership team making critical business decisions based on fragmented, outdated, or conflicting data?*
- *What overarching priorities or challenges around data and IT modernization are top of mind for you and your leadership this year?*
- *What are the primary constraints — tools, funding, or other factors — limiting your team's progress?*

### Relevant Quotes

- **Brian Easton (15:27):** the ultimate goal is a frictionless student experience — moving manual tasks toward automation so staff focus on high-impact interactions. [[2026-05-11-kickoff]]
- **Brian Easton (11:56):** ODU commitment to a **Salesforce-first strategy**, including bringing **EVMS-merger** processes into the CRM. [[2026-05-11-kickoff]]
- **Matt Newton & Brian Easton (45:15):** focus on **enrollment agents** (financial aid / process-assistant agents) as a potential POC. [[2026-05-11-kickoff]]

### Confidence Level

**Low** — based on a group kickoff/alignment session (2 contributing voices: Brian Easton, Matt Newton), no Module 1 interview yet.

---

## Business Worker

*Analysts, enrollment counselors, advisors, financial-aid staff, admissions — the frontline people whose daily job requires student data they can't easily get or trust.*

### Current State Pain Points

- **Not represented in the kickoff.** No frontline enrollment/advising/financial-aid staff were in the room — yet this is the persona the flagship **enrollment / application-status agent is being designed to serve.** Their day-in-the-life friction (juggling Banner + Salesforce + portal, telling a student "I can't see your status right now") is currently **inferred from leadership and integration voices, not heard directly.**

### Desired Outcomes (Target State Wins)

- *To be captured in a Module 2 interview.* Hypothesized from the locked use case: real-time application/registration status at the moment of a student conversation, without swivel-chairing between systems.

### Discovery Questions (from deck)

- *Are you finding that your staff is currently able to get the right information they need at the right time?*
- *Do you have a lot of systems you need to go to in order to pull data?*
- *Do you often work with stale or old data?*
- *Are there a lot of repetitive tasks you spend time on today?*
- *How many of your processes are still paper/document intensive?*
- *Is there any data you would love to have access to that you don't today?*

### Relevant Quotes

- *None — persona absent from the kickoff. **Flagged as a coverage gap below.***

### Confidence Level

**None** — no direct representation. **A Module 2 interview with at least one enrollment/advising staff member is the single most important gap to close before the readout** (the POC is built for this persona).

---

## IT Leader

*CIOs, CTOs, and Enterprise Architects who own technology strategy and are accountable for system stability, security, and AI readiness at scale.*

### Current State Pain Points

- **Post-acquisition tooling ambiguity (MuleSoft vs. Informatica).** Leadership lacks a clear standard for which platform serves which workload. *(3 Deep Dive: symptom — no defined tool swim lanes; consequence — integrations get built ad hoc and inconsistently, and modernization decisions stall pending clarity; impact — wasted/duplicated platform spend and the risk of creating new silos under a "Salesforce-first" banner.)* [[2026-05-11-kickoff]]
- **Low data-integration maturity across third-party vendor apps**, with a stated need to standardize processes campus-wide. [[2026-05-11-kickoff]]
- **System-of-record tension:** Banner remains authoritative while the mandate is Salesforce-first — the architecture has to honor both. [[2026-05-11-kickoff]]

### Desired Outcomes (Target State Wins)

- A **clear, documented integration strategy with defined swim lanes** — Informatica for bulk/MDM/system-of-record, MuleSoft for real-time API/application integration, Data 360 as the system of reference for student signals.
- **Higher integration maturity and standardized processes** across vendor apps, with an AI-ready foundation underneath.

### Discovery Questions (from deck)

- *When your leadership asks for a cross-departmental report, how much manual data cleanup is required before they can trust the numbers?* (CIO)
- *Is your current AI strategy built on moving data into new silos (copying), or are you looking at Zero-Copy architectures to ground your agents in real-time enterprise data?* (CTO)
- *What is your approach to maintaining a unified integration strategy across your applications/programs?*
- *In what ways is your strategy supporting your mission, and what obstacles do you foresee regarding the AI imperative?*
- *How are you currently handling data quality and governance to ensure your enterprise data is secure, compliant, and acting as a single source of truth?*

### Relevant Quotes

- **Jimmy Patel (09:48):** Enterprise Systems had been moving toward Informatica for manual file transfers; wants guidance on whether to continue or revisit MuleSoft for specific use cases. [[2026-05-11-kickoff]]
- **(13:18):** primary objective is to increase data-integration maturity and standardize processes across third-party vendor apps. [[2026-05-11-kickoff]]

### Confidence Level

**Low** — Kirk Dewyea (CIO, confirmed exec sponsor per [[slack-history]]) was present but contributed little on the record; most IT-Leader signal came from Jimmy Patel (Interim Exec Dir, Enterprise Systems). **A dedicated Module 1 CIO interview is needed.**

---

## IT Worker

*Developers, integration engineers, and architects who build and maintain the integrations, APIs, and infrastructure. At ODU this archetype was the most technically detailed voice in the room.*

### Current State Pain Points

- **No clear guidance on which tool to use for which workload**, so the integration team can't standardize. *(3 Deep Dive: symptom — tool ambiguity; consequence — each integration is approached ad hoc, increasing brittle point-to-point work; impact — maintenance burden grows and real-time delivery keeps slipping.)* [[2026-05-11-kickoff]]
- **Informatica API latency on the homegrown Monarch portal** — the team needs **sub-second APIs** to serve real-time student data. *(3 Deep Dive: symptom — slow APIs; consequence — the student-facing portal can't return real-time results; impact — the flagship real-time use case is technically blocked on today's stack.)* [[2026-05-11-kickoff]] (latency detail corroborated in [[02-data-barriers]] / agenda)
- **No data observability** for monitoring data quality across the SIS↔CRM flow. [[2026-05-11-kickoff]]

### Desired Outcomes (Target State Wins)

- **Defined tool swim lanes** (Informatica bulk/MDM; MuleSoft real-time APIs/orchestration; Data 360 zero-copy signals).
- **Data observability** for quality, **performant real-time SIS↔CRM integration**, and readiness for future SaaS-based integrations.

### Discovery Questions (from deck)

- *How would you describe your go-to integration strategy, and how is it helping you achieve your mission?*
- *Do you have a common integration strategy across projects, or does each project start from scratch?*
- *Do you get a lot of demand for real-time data? How do you handle it?*
- *What are the impacts to your processes if a system needs to be upgraded or replaced?*
- *How easily can you scale as new systems are onboarded?*
- *How much API development or management does your team do? Do you have a centralized means of documenting and monitoring your APIs?*

### Relevant Quotes

- **Sai Nidumolu (17:27):** wants greater maturity — **data observability** for quality, **real-time SIS↔CRM integration**, and prep for future SaaS-based integrations. [[2026-05-11-kickoff]]
- **Sai Nidumolu (08:18 / 10:49):** the team needs clarity on which tool for which workload; observes Informatica preferred for bulk data, MuleSoft better for API connectivity. [[2026-05-11-kickoff]]

### Confidence Level

**Low–Medium** — Sai Nidumolu (Mgr, Cloud Enablement & Integration) was the clearest and most detailed technical voice, but this was still a group session, not a structured Module 3 interview.

---

## Data Leader

*CDO, CDAO, CISO, Chief AI Officer — whoever owns data governance, quality, privacy compliance, and the responsible use of AI. At ODU the represented sub-type is Data & Analytics leadership (CDAO-leaning).*

> [!NOTE]
> **Sub-type present:** Data & Analytics leadership (CDO/CDAO-leaning) — Lisa Handy (AVP Data &
> Analytics) and Jimmy Patel (Dir BI & Data Analytics). **No CISO or Chief AI Officer voice yet** —
> a notable gap given the EVMS **health-sciences** data joining the platform and the agentic ambition.

### Current State Pain Points

- **Data inconsistencies undermine the analytic environment.** *(3 Deep Dive: symptom — inconsistent data across systems; consequence — analysts reconcile manually and can't fully trust reports; impact — decisions made on questionable data, and a direct GIGO risk for any agent built on top — the **Trust Gap** in [[02-data-barriers]].)* [[2026-05-11-kickoff]]
- **Business-process / business-rule mismatches** (e.g. multiple addresses in Banner vs. Salesforce) have no documented data-exchange rules — a governance/MDM gap that tooling alone can't fix. [[2026-05-11-kickoff]]
- **Unresolved MDM architecture question:** where the golden record lives (Informatica MDM, system of record) vs. the system of reference for student signals (Data 360). [[2026-05-11-kickoff]]

### Desired Outcomes (Target State Wins)

- **Trusted, consistent data** with documented business rules for cross-system exchange.
- A clear **MDM / identity-resolution architecture** (Informatica golden record + Data 360 reference signals) so analytics and agents reason on one student truth.
- Governance that **enables** AI rather than blocking it.

### Discovery Questions (from deck)

- *How much of your team's time is spent maintaining connections between legacy systems versus building new AI-driven services?* (CDO)
- *How are you currently managing and monitoring access to data in your organization?*
- *As you look at deploying AI agents, how are you ensuring that these agents only see the data they are authorized to access?* (CISO)
- *If an AI-driven decision is challenged by a constituent or an auditor, what is your current process for tracing that output back to its original source?* (CDO/CISO)

### Relevant Quotes

- **Lisa Handy (44:17):** data inconsistencies are a pain point for the analytic environment. [[2026-05-11-kickoff]]
- **Jimmy Patel (52:19):** technical tools can't solve business-process differences (e.g. multiple addresses in Banner vs. Salesforce); ODU must document business decisions/rules for data exchange during the engagement. [[2026-05-11-kickoff]]
- **Jimmy Patel (30:38):** asked how Informatica MDM relates to Data 360 → framed as golden record (Informatica) vs. system of reference for signals (Data 360). [[2026-05-11-kickoff]]

### Confidence Level

**Low** — two contributing voices in a group session, no dedicated interview.  
**Sub-type present:** Data & Analytics (CDO/CDAO-leaning). **CISO and Chief AI Officer not represented** — prioritize given health-sciences data + agent guardrails.

---

## Data Worker

*Data engineers, DBAs, IR analysts, data stewards — the practitioners who build pipelines, maintain data quality, run reports, and live the day-to-day data reality.*

### Current State Pain Points

- **Under-represented.** Sai Nidumolu is a BI Developer by background, but in the kickoff spoke almost entirely as an **integration engineer** (captured under *IT Worker* above). No dedicated data-engineering / IR-analyst / data-steward voice described pipeline maintenance, deduplication burden, or "report-factory" load. The downstream effects of the Trust Gap on this persona are currently **inferred from the Data Leader's account, not heard from a practitioner.**

### Desired Outcomes (Target State Wins)

- *To be captured in a Module 3 data interview.* Hypothesized: pipelines they can trust, duplicates resolved, time reclaimed from manual report running.

### Discovery Questions (from deck)

- *How frequently do you encounter issues with stale, siloed, or duplicative data in your decision-making processes?*
- *What type of data would provide the most transformative value to your team's operations?*
- *How are you managing the ontology and metadata across your disparate systems to ensure AI agents understand the intent behind the data they process?*
- *What challenges has your organization faced when trying to make unstructured information — legacy case notes, PDF records — accessible and readable for modern AI automation tools?*

### Relevant Quotes

- *None specific to the data-practitioner archetype — see Sai Nidumolu under **IT Worker**.*

### Confidence Level

**Very Low** — effectively unrepresented as a distinct archetype. Confirm in a Module 3 data interview.

---

## Persona Gaps

Coverage from a single group kickoff is necessarily asymmetric. Gaps that materially limit what the readout can claim:

- **Business Worker — entirely absent (highest-priority gap).** No frontline enrollment / advising / financial-aid staff were present, yet the **flagship enrollment / application-status agent is built for this persona.** Without a Module 2 interview, the "day in the life" target-state wins are assumptions, not evidence. **Recommend a targeted follow-up before the readout.**
- **Data Worker — under-represented.** The data-engineering / IR-analyst / steward voice on quality, pipelines, and dedupe burden is missing (Sai spoke as an integration engineer). Schedule a Module 3 data interview.
- **IT Leader — thin on the CIO.** Kirk Dewyea (CIO, exec sponsor) was present but largely silent on record; IT-Leader findings lean on Jimmy Patel. A dedicated Module 1 CIO conversation is needed to ground the strategic narrative the readout will open with.
- **Data Leader sub-types — only Data & Analytics represented.** No **CISO** (especially relevant with EVMS **health-sciences** data and agent access control) and no **Chief AI Officer** (responsible-AI / agent grounding). Identify who owns these and interview them.
- **Registry reconciliation.** Align [[08-appendix]] stakeholder persona labels with the archetype attributions above (notably Brian Easton and Sai Nidumolu) during scheduling.
