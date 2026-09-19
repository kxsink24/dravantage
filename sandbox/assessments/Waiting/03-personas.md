---
title: "Personas — The Financial Conduct Authority"
wiki_page: "03"
status: draft
tags: [dra, personas, stakeholders]
sources: []
last_analyzed: null
---

# Personas

> [!NOTE]
> Populated by `dra-analyze-input`. Each persona section is derived from interview transcripts and survey patterns. Quotes must cite their source file.

**Maps to:** DRA Report Section 3 — Target State Experience (the "day in the life" and stakeholder impact framing)  
**Drives output:** [[06-target-state-architecture]] (who benefits from what), readout deck stakeholder slides

---

## Why Personas Matter in the DRA

The DRA is not just a technical assessment — it's a case for change. Every recommendation needs to land with a specific person who has a specific job to do. Personas translate architecture decisions into human outcomes: "This is what Zero Copy means for the analyst who currently spends Monday morning running the same five reports." Without that translation, the recommendation is an abstraction.

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

---

## Business Leader

*VPs, Directors, and Program Managers who make strategic and resource decisions and are accountable for mission outcomes. They sign off on investments and present to boards or elected officials. They don't query databases — they need trustworthy answers fast.*

### Current State Pain Points

<!-- What is hard for them right now because data readiness is low? Focus on the business impact of the barriers, not the technical detail.
Key signals to listen for:
- Can't answer leadership/board questions without a multi-week analyst sprint
- Forecasts or projections are unreliable — too embarrassing to present with confidence
- AI initiatives have been attempted and failed due to bad data
- Decisions get made by intuition because data is too slow or too questionable to trust -->

### Desired Outcomes (Target State Wins)

<!-- What would they be able to do, decide, or report if the barriers were resolved? Keep it in their language — outcomes, not features.
Frame wins as: what they can show leadership, what they can commit to, what they can finally stop qualifying every time they present. -->

### Discovery Questions (from deck)

- *How often is your leadership team making critical business decisions based on fragmented, outdated, or conflicting data?*
- *What overarching priorities or challenges around data and IT modernization are top of mind for you and your leadership this year?*
- *What are the primary constraints — tools, funding, or other factors — limiting your team's progress?*

### Relevant Quotes

<!-- Verbatim quotes from Module 1 interviews. Cite source file for each. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona

---

## Business Worker

*Analysts, case workers, admissions counselors, advisors, grants managers, field staff — anyone whose daily job requires data they can't easily get or trust. They experience the barriers most concretely: too many systems, manual steps, stale data, no unified view of a constituent/student/case.*

### Current State Pain Points

<!-- Day-in-the-life friction: manual steps, workarounds, waiting on reports, duplicate data entry, inability to see a full picture of a constituent/case/record.
Key signals to listen for:
- "I have X tabs open every time I talk to a [customer/student/constituent]"
- Reconciling data between systems manually before they can act
- Relying on a colleague in IT or the Registrar's office to pull data that should be self-service
- Making decisions on gut because the data takes too long to get
- Re-entering the same data in multiple systems -->

### Desired Outcomes (Target State Wins)

<!-- What would change in their daily workflow? What manual steps go away? What could they finally see that they can't see today?
Frame wins as: time reclaimed, confidence in the data they work with, ability to act earlier. -->

### Discovery Questions (from deck)

- *Are you finding that your staff is currently able to get the right information they need at the right time?*
- *Do you have a lot of systems you need to go to in order to pull data?*
- *Do you often work with stale or old data?*
- *Are there a lot of repetitive tasks you spend time on today?*
- *How many of your processes are still paper/document intensive?*
- *Is there any data you would love to have access to that you don't today?*

### Relevant Quotes

<!-- Verbatim quotes from Module 2 interviews. Cite source file. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona

---

## IT Leader

*CIOs, CTOs, and Enterprise Architects. They own the technology strategy and are accountable for system stability, security, and making the infrastructure ready for AI at scale. They care about composability, avoiding vendor lock-in, and modernizing without disrupting the business.*

### Current State Pain Points

<!-- What strategic-level IT problems does this customer have?
Key signals to listen for:
- Legacy systems that can't be replaced but need to be integrated
- Point-to-point integrations that are brittle and expensive to maintain
- AI initiatives outpacing the data foundation beneath them
- Governance that is either too loose (data sprawl) or too tight (strategic paralysis)
- Budget and talent consumed by "keeping the lights on" vs. driving innovation -->

### Desired Outcomes (Target State Wins)

<!-- What does modernization look like for them? What does "AI-ready infrastructure" mean in their context?
CTO frame: Zero Copy, open standards, interoperability, avoiding new data silos while deploying agents.
CIO frame: Legacy modernization without disruption, trusted context for AI, composable architecture. -->

### Discovery Questions (from deck)

- *When your leadership asks for a cross-departmental report, how much manual data cleanup is required before they can trust the numbers?* (CIO)
- *Is your current AI strategy built on moving data into new silos (copying), or are you looking at Zero-Copy architectures to ground your agents in real-time enterprise data?* (CTO)
- *What is your approach to maintaining a unified integration strategy across your applications/programs?*
- *In what ways is your strategy supporting your mission, and what obstacles do you foresee regarding the AI imperative?*
- *How are you currently handling data quality and governance to ensure your enterprise data is secure, compliant, and acting as a single source of truth?*

### Relevant Quotes

<!-- Verbatim quotes from Module 1 or Module 3 interviews with CIO/CTO/EA. Cite source file. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona

---

## IT Worker

*Developers, integration engineers, sys admins, and architects — the people who build and maintain the integrations, APIs, and infrastructure. They know exactly where the bodies are buried. They're often the most candid interviewees because they live with the consequences of every architectural decision.*

### Current State Pain Points

<!-- The practitioner's view of the same problems IT Leaders describe at a strategic level.
Key signals to listen for:
- Inherited integrations that nobody fully understands or is afraid to touch
- Constant IT backlog — more integration requests than capacity to fulfill them
- "Keeping the lights on" consuming all capacity for innovation
- Manual processes that they know could be automated but haven't been prioritized
- Shadow IT stores that other teams built because official data access was too slow
- API sprawl with no centralized governance or documentation -->

### Desired Outcomes (Target State Wins)

<!-- What engineering work goes away? What does a well-governed integration platform mean for how they spend their time?
Frame wins as: time reclaimed from maintenance, ability to deliver new integrations faster, confidence that what they build is documented and durable. -->

### Discovery Questions (from deck)

- *How would you describe your go-to integration strategy, and how is it helping you achieve your mission?*
- *Do you have a common integration strategy across projects, or does each project start from scratch?*
- *Do you get a lot of demand for real-time data? How do you handle it?*
- *What are the impacts to your processes if a system needs to be upgraded or replaced?*
- *How easily can you scale as new systems are onboarded?*
- *Does your team get to focus on innovation, or are you mostly focused on keeping the lights on?*
- *How much API development or management does your team do? Do you have a centralized means of documenting and monitoring your APIs?*

### Relevant Quotes

<!-- Verbatim quotes from Module 3 interviews with developers/engineers/architects. Cite source file. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona

---

## Data Leader

*CDO, CDAO, CISO, Chief AI Officer — whoever owns data governance, data quality, privacy compliance, and the responsible use of AI. In GPS organizations this often collapses into a single CDAO role. Note which sub-type is present: their primary concern and discovery questions differ.*

> [!NOTE]
> **Sub-type matters:**
> - **CDO / CDAO** — focused on single source of truth, data lineage, governance vs. agility, and making data usable for AI. Key fear: flat files, inconsistent formats, data catalog gaps.
> - **CISO** — focused on knowing where sensitive data lives, who has access, and ensuring AI agents only see what they're authorized to see. Key fear: PII exposure to LLMs, unauthorized access.
> - **Chief AI Officer / AI Director** — focused on safe and responsible AI, grounding agents in trusted context, avoiding hallucinations. Key fear: AI that can't be audited or explained, legal and ethical exposure.

### Current State Pain Points

<!-- What governance, compliance, or data trust problems does this customer have at the leadership level?
Key signals to listen for:
- No single source of truth — multiple competing "official" numbers
- Data catalog exists on paper but not in practice
- Governance policies that create strategic paralysis (too restrictive) or data sprawl (too loose)
- Unstructured data (documents, case notes, PDFs) that AI can't reason on
- Inability to audit an AI decision back to its source data -->

### Desired Outcomes (Target State Wins)

<!-- What does "data we can trust" mean for this customer?
CDO/CDAO frame: single source of truth, documented lineage, governance that enables rather than blocks.
CISO frame: know where PII lives, control what agents can see, automated policy enforcement.
CAIO frame: AI grounded in trusted context, decisions that can be explained and audited. -->

### Discovery Questions (from deck)

- *How much of your team's time is spent maintaining connections between legacy systems versus building new AI-driven services?* (CDO)
- *How are you currently managing and monitoring access to data in your organization?*
- *As you look at deploying AI agents, how are you ensuring that these agents only see the data they are authorized to access?* (CISO)
- *Are your current AI projects effectively doing work — like filing forms or scheduling inspections — or are they limited to just answering basic questions?* (Chief AI Officer)
- *If an AI-driven decision is challenged by a constituent or an auditor, what is your current process for tracing that output back to its original source?* (CDO/CISO)

### Relevant Quotes

<!-- Verbatim quotes from interviews with CDO/CDAO/CISO/AI leadership. Cite source file. Note which sub-type the quote came from. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona  
**Sub-type present:** [ CDO / CDAO / CISO / Chief AI Officer / Combined / Unknown ]

---

## Data Worker

*Data engineers, DBAs, IR analysts, data stewards — the practitioners who build pipelines, maintain data quality, run reports, and manage the day-to-day reality of the data infrastructure. Like IT Workers, they're often the most candid interviewees and have the most detailed view of what's actually broken.*

### Current State Pain Points

<!-- The practitioner's view of the data layer.
Key signals to listen for:
- Inherited ETL jobs that nobody fully understands (or is afraid to touch)
- Duplicate records that are known but unresolved because fixing them requires a governance decision above their pay grade
- IR/analytics team functioning as a "report factory" with no time for actual analysis
- Data quality issues that originate upstream (in source systems) but land on them to fix
- Deduplication, master data reconciliation, or lineage work that's been on the roadmap for years but never prioritized
- Unstructured data (PDFs, scanned documents, case notes) that they can't make useful -->

### Desired Outcomes (Target State Wins)

<!-- What does a well-governed, well-integrated data platform mean for how they spend their time?
Frame wins as: pipelines they can trust, duplicates resolved, time reclaimed from report running, ability to actually do analysis instead of data preparation. -->

### Discovery Questions (from deck)

- *How frequently do you encounter issues with stale, siloed, or duplicative data in your decision-making processes?*
- *What type of data would provide the most transformative value to your team's operations?*
- *How are you managing the ontology and metadata across your disparate systems to ensure AI agents understand the intent behind the data they process?*
- *What challenges has your organization faced when trying to make unstructured information — legacy case notes, PDF records — accessible and readable for modern AI automation tools?*

### Relevant Quotes

<!-- Verbatim quotes from Module 3 interviews with data engineers/DBAs/IR analysts. Cite source file. -->

### Confidence Level

[ High / Medium / Low ] — based on N interviews / survey responses from this persona

---

## Persona Gaps

<!-- Note any personas that are under-represented in the interview and survey data. Coverage asymmetry matters for how strongly the readout can speak to each audience.

Common gaps in GPS DRAs:
- Business Worker is often survey-only (no Module 2 interview) — limits depth on operational pain points
- Data Leader is often absent if no CDO/CDAO role exists — note who owns governance instead
- Data Worker may be combined with IT Worker in smaller orgs — note if this is the case

For each gap, note: what's missing, what it limits in the assessment, and whether a targeted follow-up conversation is recommended before the readout. -->
