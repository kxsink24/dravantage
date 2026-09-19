---
title: "VA CCC — Gemini Deep Research: Strategic Analysis & Target Reference Architecture"
date: 2026-08-03
engagement: VA-CCC
document_type: deep-research
source: Gemini (Google) — AI-synthesized from public sources (SAM.gov, VA.gov, HigherGov, GovInfo, news sources)
source_url: "https://gemini.google.com/share/d/1kssHo0IxHPWb2RWS18wFEbz-su7nlj7E"
status: analyzed
tags: [research, gemini, strategy, architecture, stakeholders, kpis, fedramp, agentforce, mulesoft, eccc]
---

# VA CCC — Gemini Deep Research: Strategic Analysis & Target Reference Architecture

> [!NOTE]
> AI-synthesized research from public sources: SAM.gov RFI filings, VA.gov budget submissions (FY2024, FY2025), 701(b) IT Modernization Plans, press releases, and federal technology media. Gemini research is corroborating/additive to Fernando Gonzalez's HLAD — where they conflict, the HLAD (primary source, from VA OIT) takes precedence. This research fills in the public-record layer: scale, KPIs, governance structure, contract framing, and named executive stakeholders not present in working session transcripts.

---

## Executive Summary (from research)

The VA is executing one of the largest contact center consolidation programs in US federal government history:
- **60 million+ annual calls** across the VA contact center network
- **280+ decentralized, siloed call center entities** being consolidated
- **400,000+ VA employees** affected by the organizational transformation
- **$1.6 billion Agentic Enterprise License Agreement** (Missionforce + Agentforce) with Salesforce
- **24-month execution window** per the RFI/PWS solicitation
- **100% First Call Resolution** as the target KPI (baseline: 72.7%)

---

## Executive Stakeholder Matrix (Full — from Gemini research)

| Executive | Title | Org Unit | Strategic Priority |
|---|---|---|---|
| Douglas A. Collins | Secretary of Veterans Affairs | Executive Leadership | Agency modernization mandate, budget execution, seamless veteran experiences |
| Dr. Lynda C. Davis | Chief Veterans Experience Officer | Veterans Experience Office | Department-wide CX framework, VSignals real-time feedback, customer service policy |
| Barbara C. Morton | Deputy Chief Veterans Experience Officer | Veterans Experience Office | CX tools operationalization, journey mapping, interagency experience scaling |
| Katie Cravens | Executive Director, Multi-Channel Technology | VEO Directorate | Multi-channel contact technology, telephony integration, digital contact channels |
| Jennifer Purdy | Executive Director, CX Tools & Implementation | VEO Directorate | Build/test/deploy CX tools and employee enablement solutions |
| Denise Kitts | Executive Director, Enterprise Measurement & Design | VEO Directorate | VSignals survey data architecture, predictive analytics, enterprise CX measurement |
| Paul R. Lawrence | Deputy Secretary / Performing Delegable Duties of CIO | Office of Information & Technology | IT infrastructure, cybersecurity, software acquisition, cloud operations |
| Gary Shatswell | Nominated Assistant Secretary for IT & CIO | Office of Information & Technology | Digitally native processes, AI guardrails, cloud modernization |
| Zachary Schwartz | Principal Deputy Assistant Secretary | Office of Information & Technology | Enterprise IT initiatives, engineering resources, contractor support integration |

---

## Governance Structure

- **Enterprise Contact Center Council (ECCC):** Primary governing body for the cross-administrative CCC transition. Synchronizes policy, technical standards, and agent operational protocols across VHA, VBA, and NCA/VEO. Mandates: enterprise-wide interoperability, standard phone greetings, warm-handoff protocols, centralized service recovery via Option 9 routing.
- **National Artificial Intelligence Institute (NAII):** AI governance authority; red-teaming and testing framework required before Agentforce autonomous agents go live.
- **VA Trustworthy AI Framework:** Governs AI deployment; prioritizes deterministic compliance over unscripted generative processing.

---

## Operational Baseline — Key Metrics

| Metric | Current Baseline | Target |
|---|---|---|
| Annual call volume | 60 million+ | — |
| Contact center nodes | 280+ siloed entities | 1 unified architecture |
| First Call Resolution | 72.7% | 100% |
| Legacy systems per agent (VBA) | Up to 25 (UDO queries) | 1 unified console |
| Backend peak throughput | 56,000 transactions per second (VistA + CDW combined) | Event-streaming + caching architecture |
| Monthly Lighthouse API transactions | 110 million | — |
| Program name (unified entry) | 1-800-MyVA411 (1-800-698-2411) | Retained as front door |

---

## Current State Technology Stack (Detailed — from research)

### CRM / Agent Desktop
- **Microsoft Dynamics 365 for Government:** Powers AskVA online inquiry portal and legacy messaging routing
- **Unified Desktop Optimization (UDO):** Custom VBA agent interface that queries and consolidates data from up to 25 disparate legacy systems. This is the agent "swivel chair" problem — the primary driver of high Average Handle Time.
- **Salesforce Service Recovery Platform:** Deployed in pockets for high-priority escalation handling (already a Salesforce footprint at VA)

### Telephony
- **Cisco Finesse:** Contact center voice platform (distributed across multiple sites)
- **Avaya ACD/IVR:** Automatic Call Distribution and Interactive Voice Response (in addition to Cisco — both present)
- **Calabrio ONE:** Workforce management and quality recording across select contact nodes

### Knowledge Management
- **eGain:** Knowledge management software across benefit lines to standardize agent answers. **Important for Agentforce:** eGain is the knowledge base that will power Retrieval-Augmented Generation (RAG) in Agentforce — agents generate answers exclusively from authenticated, version-controlled eGain knowledge base content.

### Integration
- **MuleSoft FSC Enterprise Service Bus 2.0:** Deployed within VA Enterprise Cloud Azure environment; enterprise message brokering
- **VA Lighthouse API Gateway / Digital Veterans Platform:** Primary open-API gateway; 110 million monthly API transactions; connects external applications and internal frontends to core backends

### Systems of Record
- **VistA / Cerner Millennium:** Clinical healthcare records (VistA migrating → Cerner)
- **VBMS:** Veterans Benefits Management System; disability claims adjudication
- **Corporate Data Warehouse (CDW):** Historical demographic and transactional data; 56,000 TPS peak with VistA combined
- **VA Profile:** Authoritative MDM service for contact preferences and identity (not just a database — it is the master data management authority)

### Current Performance Problems
- UDO requires agents to access up to 25 legacy applications for complex claim/healthcare inquiries → inflated Average Handle Time + error risk
- VistA + CDW process 56,000 TPS enterprise-wide — direct synchronous polling by 280+ call center nodes creates unsustainable backend load
- Changes to veteran contact info in local IVR/CRM fail to write back synchronously to VA Profile → persistent data decay and failed communications

---

## Target Architecture (Public Record Version — Gemini synthesis)

Confirms and expands the HLAD architecture:

**Data flow:**
1. Omni-Channel Ingress: 1-800-MyVA411, VA.gov, AskVA, VA Health and Benefits mobile app
2. Salesforce Service — Contact Center (Omni-Channel Desktop + CTI)
3. Agentforce/Missionforce (natural language intent processing) + Data 360 (unified veteran context) + Marketing Cloud (proactive journeys) + Tableau (real-time ops)
4. MuleSoft AnyPoint Platform (API gateway + integration)
5. VA Digital Veterans Platform / Lighthouse (FHIR profiles + legacy adapters)
6. Systems of Record: VistA/Cerner, VBMS/CDW, VA Profile

**Key additions vs. HLAD:**
- **Missionforce** explicitly named alongside Agentforce (the federal/government-specific agentic platform)
- **eGain as RAG knowledge source** — Agentforce generates answers from eGain KB, not from generative synthesis
- **Option 9 Service Recovery** — escalation routing to human specialist with full transcript
- **Universal Veteran Identifier** — the output of Data Cloud identity resolution; an immutable cross-system identifier assigned to each veteran in the unified profile
- **VSignals integration into Tableau** — real-time post-interaction sentiment data blended with operational metrics
- **Solid Start program** — Marketing Cloud outbound campaign for newly separated service members; first named use case for proactive veteran outreach

---

## Data Readiness Framework (from research)

End-to-end pipeline:
1. **Raw ingestion sources:** VistA, Cerner, VBMS, AskVA (Dynamics 365), Corporate Data Warehouse, VA Profile
2. **DRA layer:** Automated data profiling, quality anomaly detection, field-level PII/PHI encryption + masking, legacy schema → standard Salesforce object mapping
3. **MuleSoft streaming:** HL7 FHIR US Core profiles, Azure Service Bus event streaming
4. **Data Cloud (Data 360):** Master Person Index matching rules → Unified Veteran Profile; immutable Universal Veteran Identifier assigned
5. **Real-time access:** Service Console screen pops, Agentforce contextual memory grounding

**Identity harmonization challenge:** A single veteran may exist in multiple databases with slight PII variations (mismatched SSNs, alternative middle names, outdated addresses across local VistA instances vs. benefit records). Data Cloud must establish matching rules mapped directly to VA Profile as the authoritative MDM source.

**Privacy/compliance boundary:** All data paths must operate within FedRAMP High boundaries. Clinical records (HIPAA) and benefits data (Privacy Act) require strict Field-Level Encryption + Role-Based Access Controls within Data Cloud and Service Cloud.

---

## AI Framework and Guardrails (from research)

**Governing frameworks:**
- VA Trustworthy AI Framework
- National Artificial Intelligence Institute (NAII) directives
- GAO and NIST guidelines (auditability, Model Cards)

**Design principles:**
- Deterministic compliance over unscripted generative processing
- Generative AI restricted from synthesizing unscripted responses about benefits eligibility, claim approvals, or clinical guidance
- Answers generated exclusively from authenticated, version-controlled knowledge bases (eGain via RAG)
- Model Cards maintained for every Agentforce topic — operational parameters, training data provenance, functional boundaries

**Escalation logic:**
- Crisis/distress markers detected → immediate warm handoff to Veterans Crisis Line (988 Press 1), un-intercepted
- High-risk / complex disability claims → human specialist escalation with full transcript
- Intent confidence below threshold → Option 9 Service Recovery Specialist, full context passed
- Routine inquiries → Agentforce autonomous processing within bounded deterministic workflows

**Audit trail:**
- All AI model outputs, confidence scores, and execution paths logged in real time to Tableau + cloud audit trails
- Red-teaming by NAII required before Agentforce agents go live for voice interactions

---

## Official 4-Phase Migration Plan (from RFI/PWS — 24-month window)

| Phase | Window | Core Milestones |
|---|---|---|
| Phase 1: Foundation & Data Readiness | Months 1–6 | Wrap VistA, Cerner, VBMS, VA Profile in MuleSoft API layer; configure Data Cloud + Master Person Index matching rules |
| Phase 2: Omnichannel Core & Pilot | Months 7–12 | Deploy Salesforce Service Console across primary VBA and VHA pilot nodes; CTI integration with Cisco/Avaya; connect eGain KMS |
| Phase 3: Agentforce & AI Guardrails | Months 13–18 | Deploy Agentforce natural language intent routing + self-service appointment scheduling; Marketing Cloud proactive campaigns |
| Phase 4: Full Consolidation & Cutover | Months 19–24 | Complete migration of 280+ call centers; decommission legacy UDO/Dynamics nodes; achieve 100% target FCR |

---

## Open Architecture Questions (from research — for OIT/VEO discovery)

1. What synchronization patterns govern Master Person Index matching in Data Cloud to ensure bidirectional write-backs to VA Profile don't create transaction loops across legacy VistA instances?
2. What are the handoff protocols between existing Cisco Finesse/Avaya SIP trunking infrastructure and Salesforce Service — Contact Center routing during the 24-month transition?
3. What specific cache TTL parameters and event-streaming protocols are approved within VA Enterprise Cloud for streaming profile updates into Data Cloud (given 56K TPS backend load)?
4. What red-teaming methodologies will NAII require before authorizing Agentforce autonomous intent-routing for live veteran voice interactions?
5. What is the precise timeline for sunsetting Dynamics 365 AskVA and migrating historical case data to Salesforce Service Console?

---

## Source Citations (from Gemini research)

- SAM.gov: Call Center Consolidation Support — Department of Veterans Affairs RFI
- SAM.gov: DA10 — Contact Center Consolidation RFI PWS
- VA.gov: FY2024 Budget Submission Vol. 5 — IT Programs
- VA.gov: FY2025 Budget Submission
- VA.gov: 701(b) 5-Year IT Benefits Delivery Modernization Plan (2024 Addendum + 2023)
- VA.gov: VA Trustworthy AI Framework
- VA.gov: Intelligent Automation & Agentic AI (IAAI)
- VA.gov: 1-800-MyVA411 / Veterans Experience contact centers
- MeriTalk: Gary Shatswell VA CIO nomination
- NextGov/FCW: VA CIO history
- BusinessWire: US Department of Labor Agentforce deployment (federal reference)
- GovCIO Media: VA AI Strategy
- Carahsoft: AI Strategy
- ServiceToAmericaMedals.org: Barbara C. Morton profile
- Press1ForNick: Barbara Morton deputy CVO profile
