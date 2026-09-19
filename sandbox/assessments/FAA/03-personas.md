---
title: "Personas — Small Business Administration"
wiki_page: "03"
status: in-progress
tags: [dra, personas, stakeholders]
sources: ["[[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]", "[[inputs/interviews/2026-07-06-national-ombudsman-natalie]]"]
last_analyzed: 2026-07-06
---

# Personas

> [!NOTE]
> Run 1 is based on an internal SME discussion about the Small Business Owner persona. It is **not** a direct external SBO interview. The strongest coverage is for SBA staff who serve, analyze, or prepare for SBO interactions.

**Maps to:** DRA Report Section 3 — Target State Experience  
**Drives output:** [[06-target-state-architecture]], readout deck stakeholder slides

---

## Why Personas Matter in the DRA

The DRA is not just a technical assessment — it's a case for change. Every recommendation needs to land with a specific person who has a specific job to do. Personas translate architecture decisions into human outcomes: "This is what a unified SBO profile means for the field-office specialist who currently checks CAFS, SAM.gov, Small Business Search, and Eventbrite before a single business visit." Without that translation, the recommendation is an abstraction.

### The Six Personas

| Persona             | Typical Titles                               | Primary Concern                                               | Interview Module    |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------- | ------------------- |
| **Business Leader** | VP, Director, Program Manager                | Strategic outcomes, mission delivery, board-level reporting   | Module 1            |
| **Business Worker** | Analyst, Case Worker, Counselor, Field Staff | Operational speed, data access, daily workflow friction       | Module 2            |
| **IT Leader**       | CIO, CTO, Enterprise Architect               | System stability, legacy modernization, AI readiness at scale | Module 1 / Module 3 |
| **IT Worker**       | Developer, Integration Engineer, Sys Admin   | Integration burden, API management, keeping systems running   | Module 3            |
| **Data Leader**     | CDO, CDAO, CISO, Chief AI /m                 | Data governance, lineage, trust, compliance, responsible AI   | Module 1 / Module 3 |
| **Data Worker**     | Data Engineer, DBA, IR Analyst, Data Steward | Data quality, pipeline maintenance, reporting burden          | Module 3            |

---

## Business Leader

*Leaders accountable for mission outcomes, program performance, preparedness, customer experience, and executive / congressional reporting.*

### Current State Pain Points

- Leaders need a OneSBA view of the small business owner, but the underlying information is fragmented across program systems and public/federal sources. Ryan Pella frames the objective as breaking down enterprise information silos. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster leadership, congressional inquiries, and White House reporting require timely projections and business-impact analysis, but DART must combine ULP, historical data, FEMA, Census, IRS, ArcGIS, field reports, and other sources manually. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Program leaders cannot easily tell the full story of what SBA has provided to a business — events, assistance, certifications, loans, size/COC work, and disaster interactions are not visible as one timeline. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Desired Outcomes (Target State Wins)

- A unified, leadership-ready view of businesses, owners, programs, touchpoints, and assistance outcomes.
- Faster disaster and program-impact reporting with fewer manual data calls.
- Ability to show how SBA services compound across the lifecycle of a business.

### Relevant Quotes

- "Within the OCIO office, we're working to document these different personas so we can start moving into the next phase... breaking down the different information silos that we have." — Ryan Pella [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "All this information then is given up to the administrator and ultimately goes up to the White House as far as reporting out on what the projections are, what our timelines are, what the business impacts are." — Timothy Baughman [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Confidence Level

**Low–Medium** — leadership outcomes are strongly implied, but the source is an SME session rather than an executive sponsor interview.

---

## Business Worker

*Field office staff, certification/program staff, business development specialists, disaster program staff, National Ombudsman staff, and other SBA employees whose daily work requires context about a business or owner.*

### Current State Pain Points

- Field and program staff must check multiple systems to prepare for a business interaction: CAFS for loan products, SAM.gov / Small Business Search for certifications and NAICS/geography, USAspending, Secretary of State databases, state contractor registries, Eventbrite, grant-program data, and program-specific systems. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Size determinations and certificate-of-competency processes are manual and SharePoint-based, so those interactions are not visible in the broader business profile. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- The 8(a) annual review process relies on a blank Excel workbook, manual transcription, formulas, and PDF letter generation. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Event attendance and technical-assistance participation are difficult to tie back to MySBA Customers, especially when attendees do not yet have businesses or organizational accounts. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman staff manually sign 30-40 letters per day (29 internal), spending significant time on process management rather than strategic oversight. NOCMS cannot access SBA lending systems to verify loan status, creating 40-75 unnecessary verification letters per week for EIDL loan charge-offs. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- National Ombudsman cannot aggregate complaint data by regulation or agency, preventing pattern detection and proactive policy feedback. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

### Desired Outcomes (Target State Wins)

- Staff can open one profile and see the full SBA relationship: certifications, loans, assistance, events, disaster interactions, size/COC matters, field-office notes, and training participation.
- Annual reviews and similar workflows pull data from source systems automatically rather than relying on blank workbooks and manual entry.
- Staff can personalize outreach and recommendations because they know what SBA has already provided to the business.
- National Ombudsman workflows integrate with SBA lending systems to auto-verify loan/charge-off status, eliminating 40-75 manual letters per week and freeing leadership capacity for strategic work. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- Complaint data is aggregated by regulation and agency to identify patterns, systemic issues, and opportunities for proactive policy improvement. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

### Relevant Quotes

- "We don't have a system of record for our size program or the certificate of competency program. It's still a manual process." — Alisa Sheard [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "It's the current spreadsheet. Again, it's out of necessity because we don't have a system to be able to capture it." — George Murray [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "If somebody was in the system... this company has done the following thing. So this kind of gives you a more complete picture." — Shivani Dubey [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "Why do I have to sign every letter?" — Natalie [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- "If there was a way to link our system... that would eliminate us sending them probably 40 to 75 letters a week." — Natalie [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- "We have no way to aggregate the data around what regulations are... coming in more than once." — Natalie [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

### Confidence Level

**Medium-High** — this persona has strong coverage across multiple SMEs and operational leaders, with specific volume metrics and workflow details.

---

## IT Leader

*CIO, CTO, enterprise architecture, and OCIO leadership accountable for creating the OneSBA data foundation without destabilizing mission systems.*

### Current State Pain Points

- The OneSBA / digital-first vision depends on incorporating enterprise datasets, but many sources are program-specific, manual, or external. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Current state includes multiple Salesforce and non-Salesforce systems, Dynamics Customer Service Hub, SharePoint archives, Excel workbooks, ULP, CAFS, UCP, SVOG, and external public/federal data sources. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Some desired data access requires MOUs or external data-sharing patterns, especially for IRS and bulk/public data sources. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Desired Outcomes (Target State Wins)

- API-led data access across core SBA systems and governed external datasets.
- A shared SBO identity spine that lets systems remain systems of record while contributing to an enterprise profile.
- A composable architecture that supports analytics, proactive outreach, and agentic experiences without creating a new silo.

### Relevant Quotes

- "It's really moving to that one SBA, that digital first bank model... breaking down those silos, making sure that everyone has the access to the data they need." — Werner Watschke [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "If there's anything that we can do for data ingestion or sharing of data with those programs so that we actually have full automated search capabilities, it would help dramatically." — Timothy Baughman [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Confidence Level

**Low–Medium** — OCIO framing is present through Ryan Pella and the DRA framing, but the CIO/CTO did not directly participate in this transcript.

---

## IT Worker

*Integration engineers, platform admins, application owners, and system stewards responsible for connecting systems and maintaining current workflows.*

### Current State Pain Points

- Key workflows are not API-connected: the 8(a) annual review worksheet starts blank each time and is consolidated afterward by RPA. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Customer Service Hub is a Dynamics environment that routes contacts to program systems; the transcript does not confirm a closed feedback loop from program resolution back into CSH. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster teams combine multiple data sources and tools — ULP, historical DCMS, ArcGIS, Tableau, FEMA, IRS, Census, staff field reports — with limited back-end interconnection. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Desired Outcomes (Target State Wins)

- Reusable APIs / connectors for UCP, CAFS, ULP, CSH, SVOG, Eventbrite, and external data sources.
- Event and workflow integration that removes post-hoc workbook/RPA consolidation.
- Clear integration patterns for sensitive external datasets, including MOU-governed access where needed.

### Relevant Quotes

- "The burden in the short term is that we've got that data worksheet is blank every time. So we're not able to API connect to anything." — Shivani Dubey [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "Right now we're still stovepiped a lot of the times, so having a back-end interconnection... will help us... understand who the individuals are that are going to be impacted by disaster." — Timothy Baughman [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Confidence Level

**Medium** — the transcript contains strong integration and system-flow evidence, though not always from the owning technical teams.

---

## Data Leader

*Data governance / data strategy / data policy leaders accountable for quality, lineage, sensitive data, and trusted use of internal and external data.*

### Current State Pain Points

- SBA must reconcile multiple identifiers and data authorities: UCP as certification system of record, SAM.gov self-certification, Small Business Search, UEI, EIN, subsidiaries, contract data, and public/external sources. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Sensitive data exists in the process: tax information, owner/relationship information, IRS data, disaster data, loan data, and SharePoint-stored documentation. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- External data access may require governance/MOU patterns before it can be automated at enterprise scale. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Desired Outcomes (Target State Wins)

- Authoritative-source rules for when to use UCP, SAM.gov, SBS, CAFS, ULP, IRS, Census, and program systems.
- Governed identity resolution across UEI, EIN, business owner, business entity, subsidiaries, certifications, loans, assistance, and events.
- Data-sharing patterns that preserve privacy and policy controls while enabling analytics and automation.

### Relevant Quotes

- "UCP certifications... is the single source of truth. It is the system of record for all certifications." — Christopher Allen [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "As long as we have an approach for it, data for the sake of having data, it always just becomes more data." — Alisa Sheard [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Confidence Level

**Low** — governance themes are present, but no dedicated CDO/CISO/CAIO voice is represented.  
**Sub-type present:** Unknown / inferred data-governance need.

---

## Data Worker

*Analysts, reporting teams, DART, field analysts, and staff who assemble data for reporting, projections, eligibility, or program-impact analysis.*

### Current State Pain Points

- DART gathers data from ULP, historical disaster systems, IRS, Census, FEMA, ArcGIS, Tableau, staff reports, and public data to support disaster projections and reporting. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster teams duplicate data-gathering effort across offices and divisions, creating overlapping counts and inefficient analysis. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Analysts and staff want cross-program search/analysis across SAM.gov, IRS, Census, and SBA systems, but current access is constrained and manual. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- NAICS alone is too broad for market-research and capability analysis; external directories may have more granular data but are not linked to SBA. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Desired Outcomes (Target State Wins)

- A centralized, governed analytical repository / access layer that can combine SBA, public, and federal datasets for cross-program analysis.
- Business impact and disaster projections that are faster, repeatable, and less dependent on one-off manual searches.
- Better semantic understanding of business capability beyond broad NAICS codes.

### Relevant Quotes

- "They're basically duplicating the efforts... We'll have the same information from four or five different people, all basically counting the same thing." — Timothy Baughman [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "We don't really have a good way to pull. All we have is that a small business says they work under a certain NAICS code. We have no more data than that." — Thomas Rogers [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- "A centralized repository would be great." — Timothy Baughman [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

### Confidence Level

**Medium** — DART and field/data-analysis needs are discussed in detail, though more technical owner interviews would improve confidence.

---

---

## Customer Journeys

> [!NOTE]
> The following journeys are drawn from SBA's own target-state articulation in the *SBA Executive Business Review — June 17, 2026* deck (slides 19–20). They are not interview-derived; they represent SBA's internal vision of what a unified citizen profile enables. Use these in the final presentation to show the customer their own language reflected back through the DRA lens.

---

### Journey 1 — Jackson: Small Business Owner (SDVOSB, Veteran Entrepreneur)

**Profile:** Jackson owns Valor Cybersecurity and holds an active SDVOSB certification. He interacts with SBA across multiple programs and channels over time.

**Scenario A — Proactive Veteran Loan Outreach**

| Step | What happens | What enables it |
|---|---|---|
| 1 | SBA identifies Jackson as eligible for Express Loan special terms for veterans | Marketing Cloud + unified citizen profile (cert status, loan standing) |
| 2 | Jackson receives a proactive text with loan offer details | MC triggered proactive outreach on customer-preferred channel |
| 3 | Jackson texts back with questions | Agentforce Service Agent replies in-channel |
| 4 | Jackson requests a callback | Single Front Door routing schedules the call |
| 5 | Marcus (VBOC) calls Jackson with full context pre-loaded | Unified profile surfaces cert status, loan standing, and program eligibility |
| 6 | Jackson completes his loan application with Marcus's guidance | — |
| 7 | Jackson receives a text with a secure link and reference number to check application status | Agentforce triggers automated status notification |

**Scenario B — Disaster Response (Hurricane)**

| Step | What happens | What enables it |
|---|---|---|
| 1 | A hurricane causes flooding at Jackson's data center | — |
| 2 | Jackson receives a proactive SBA text about disaster loan options | MC triggered proactive outreach; journey swaps to "Disaster Recovery" track automatically |
| 3 | Jackson calls the SBA number in his phone | Agentforce Voice answers and intelligently routes the call |
| 4 | Jackson is routed to Sarah in the Disaster Response Call Center | Single Front Door routing — no hold, no repeat |
| 5 | Sarah sees Jackson's full profile on screen pop (no re-introduction needed) | Unified citizen profile; SBA's unified profile means Jackson does not repeat or re-enter information |
| 6 | Jackson completes his disaster loan application with Sarah | Salesforce Contact Center; MuleSoft integrates in real time with SBA and other agency systems |
| 7 | Jackson receives updates on relief efforts and local recovery resources | MC journey management: standard growth/grant emails paused; disaster recovery messaging only |

**Why this matters for the DRA:** Jackson's journey is the clearest proof point for the Unified Citizen Profile value proposition. Today, each of these interactions — VBOC, disaster assistance, loan origination — touches a different system with no shared identity. The data readiness work directly unblocks this journey.

---

### Journey 2 — Marcus & Sarah: SBA Employees

**Profile:** Marcus is a counselor at a Veteran Business Outreach Center (VBOC). Sarah works in the Disaster Response Contact Center. Both serve small business owners but operate in separate programs with separate workflows.

**Marcus — Proactive Veteran Outreach (VBOC Counselor)**

| Step | What happens | What enables it |
|---|---|---|
| 1 | Marketing Cloud identifies all vet-owned businesses eligible for Express Loan special terms | Unified citizen profile + MC segmentation — Marcus does not manually prospect |
| 2 | SBA sends automated outreach to the eligible segment | MC sends communication to all eligible businesses on preferred channel |
| 3 | Marcus receives a scheduled appointment with Jackson | Calendar/appointment scheduling via Agentforce |
| 4 | Marcus opens the call with full context: loan standing, SDVOSB cert status, program terms | Unified citizen profile surfaces everything before the call begins |
| 5 | Marcus uses Agentforce during the call to answer Jackson's questions | Agentforce Employee Agent as a real-time assist tool |
| 6 | Jackson's application is submitted with complete information | — |

**Why this matters for the DRA:** Marcus's current state is manual list-pulling and one-off outreach. The data foundation — specifically identity resolution across UCP, CAFS, and ULP — is the prerequisite for the MC segmentation that makes proactive outreach possible at scale.

**Sarah — Disaster Response (Contact Center Agent)**

| Step | What happens | What enables it |
|---|---|---|
| 1 | Incoming call from Jackson arrives at the disaster contact center | Agentforce Voice routes the call intelligently |
| 2 | Jackson's profile pops automatically based on his phone number | Screen pop from unified citizen profile — no manual lookup |
| 3 | Sarah helps Jackson understand the disaster process and application steps | Salesforce Contact Center; full program context visible |
| 4 | Sarah finalizes and submits the disaster application | MuleSoft routes all data in real time to SBA and other agency systems (FEMA, Treasury, etc.) |
| 5 | If needed, Sarah can transfer to another center without loss of context | Contact Center transfer with persistent profile |

**Why this matters for the DRA:** Sarah's current pain is that disaster systems are fragmented — DART, ULP, FEMA, ArcGIS, field reports. The unified profile means Sarah handles the interaction rather than hunting for data. MuleSoft's role connecting downstream systems (SBA + other agencies) is the technical through-line to the Data Strategy Recommendation on the API-led integration backbone.

---

## Persona Gaps

| Persona | Gap | Why it matters | Recommended follow-up |
|---|---|---|---|
| External Small Business Owner | Not directly interviewed. The session is an internal proxy conversation about SBO needs. | The readout can describe how SBA staff serve SBOs, but should avoid claiming direct SBO sentiment. | Add a direct SBO journey artifact, survey, or customer-facing journey map if available. |
| Business Leader | Sponsor/executive voice is indirect. | Strategic alignment and funding case need direct sponsor language. | Review Hartley / Doug exec-review notes or interview sponsor(s). |
| Data Leader | No dedicated governance/security/data executive participated. | Protect, lineage, authority, and policy questions remain low-confidence. | Interview data governance/security owner or review governance documentation. |
| IT Worker | Systems are discussed, but not all system owners are present. | Integration score and current-state diagram need validation from platform owners. | Validate UCP, CAFS, ULP, CSH, SVOG, and MySBA integration patterns with architects/admins. |
