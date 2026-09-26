---
title: "VA VRM All D365 Applications → Salesforce Agentforce Migration — HLAD"
date: 2026-06-17
engagement: VA-CCC
document_type: architecture-diagram
source: Fernando Gonzalez (VA OIT)
source_url: "file:///C:/Users/OITHOUMagesM/OneDrive - Department of Veterans Affairs/Desktop/VRM Architure/va_vrm_all_apps_All.html"
status: analyzed
tags: [customer-doc, hlad, architecture, vrm, mulesoft, agentforce, d365-migration]
---

# VA VRM All D365 Applications → Salesforce Agentforce Migration — HLAD

> [!NOTE]
> This is Fernando Gonzalez's (VA OIT) High Level Architecture Document (HLAD) for the full VRM (Veteran-facing applications) consolidation program. It represents the authoritative VA target state architecture as of June 17, 2026. This document is the primary source for the DRA target state architecture and roadmap. It goes significantly beyond what was discussed in working sessions — it names all 8 D365 apps, every VA backend system, and specific MuleSoft API patterns.

---

## Document Summary

**Title:** VA VRM — All D365 Applications → Salesforce Agentforce Migration  
**Subtitle:** AVA · UDO · CommCare · VetHome · PATS-R · Member Services · WVCC · CDCE-P → SFGCP-E (GCC) | VAEC MAG | FedRAMP High | MuleSoft Anypoint Central Integration  
**Platform:** Salesforce Government Cloud Plus Enterprise (SFGCP-E / GCC) — FedRAMP High, Hyperforce, Single Org  
**Integration Hub:** MuleSoft Anypoint Platform (VAEC MAG)  
**Contact Center:** Genesys Cloud CX  
**AI Layer:** Agentforce + Data Cloud

---

## The 8 D365 Applications Being Migrated

| App | Current Platform | Salesforce Target |
|---|---|---|
| AVA (Ask VA) | Dynamics 365 | Service Cloud — Cases + ask.va.gov (Experience Cloud) |
| UDO (Benefits) | Dynamics 365 | Service Cloud — Benefits Cases + va.gov Benefits portal |
| CommCare | Dynamics 365 | Service Cloud — CommCare Cases |
| VetHome (Housing) | Dynamics 365 | Health Cloud — Housing Care Plans + SDOH + HUD-VASH |
| PATS-R (Appointment Tracking) | Dynamics 365 | Service Cloud — PATS-R Appt Cases |
| Member Services | Dynamics 365 | Service Cloud + Health Cloud — Member Services |
| WVCC (Women Veterans CC) | Dynamics 365 | Service Cloud + Health Cloud — WVCC Cases |
| CDCE-P (Community Care) | Dynamics 365 | Service Cloud — CDCE-P Comm. Care + LiiS/Pay.gov |

**All retired:** D365 CRM (8 apps), Unified Service Desk, D365 OmniChannel, D365 Copilot, Power Pages, Power Apps, Power Automate, Power BI/Fusion BI, Dataverse (all), D365 Email, KingswaySoft, Cisco Finesse, Azure SQL ODS, Data Factory

---

## Architecture — 4 Column Layout

### Column 1: Users & Channels

**Veterans/Citizens:** Veterans, VA.gov, My HealtheVet (MHV), VSOs/Orgs, Beneficiaries  
**Agents/Staff:** Call Center Agents, Housing Workers, Health Staff, Field Support  
**Portals:** ask.va.gov, VetHome/P2S, va.gov (UDO), cdcportal.va.gov, womenshealth.va.gov, MSP/MHV Portal  
**Identity & Auth:** Okta/Login.gov, PIV/CAC, SiteMinder SSO, MPI-E Identity

### Column 2: Salesforce Gov Cloud Plus Enterprise (SFGCP-E / GCC) — FedRAMP High

**Genesys Cloud CX — Unified Omni-Channel** (replaces all Cisco Finesse, D365 OmniChannel, side-by-side CTI)  
- Voice/IVR, Chat/Messaging, SMS/MobilePush, Email Channel, Video/TeleMed, Genesys AI Bot, Genesys WFM, SF Open CTI

**Agentforce — Agentic AI** (replaces USD, D365 Copilot, Power Apps — all apps)  
- Agentforce Desktop, Einstein Copilot, Veteran Self-Service, AI Agent Assist, Claims & Appeals AI, Housing AI Agent, Health/Scheduling AI
- WVCC Care Agent, Inquiry Routing AI, Prompt Builder, Next-Best-Action, Data Cloud Grounding

**Service Cloud — All 8 D365 Apps Migrated (Single Org)**  
- AVA Inquiry → Cases, UDO Benefits Cases, CommCare Cases, PATS-R Appt Cases, Member Services, WVCC Cases, CDCE-P Comm. Care
- Omni-Channel Routing, Email-to-Case + AI, Entitlements/SLAs, Knowledge (Shared KB), SF Notifications, Messaging for Service

**Health Cloud (VetHome, Member Services, WVCC)**  
- Care Plans — Housing, FHIR R4 Model, SDOH, HUD-VASH Program, Care Team Management, MHV Bridge

**Experience Cloud (replaces all Power Pages)**  
- ask.va.gov, VetHome + P2S, va.gov Benefits, MSP + MHV, cdcportal.va.gov, womenshealth.va.gov

**Salesforce Data Cloud — Unified Veteran Data — Center of Gravity** (replaces all Dataverse, Azure SQL ODS, Data Factory)  
- Unified Veteran Profile 360°, Identity Resolution, MPI-E FHIR R4 Ingestion, HUD-VASH + VBMS Sync, ESR Enrollment Data, PATS-R + AVA Merge, Real-Time Segmentation, Agentforce Grounding, Summit Synapse ↔

**SF → MuleSoft Integration Patterns:**  
- REST/API: SF Flow → MuleSoft REST (sync lookups), Agentforce Action → MuleSoft real-time, Data Cloud Activation → enrichment API
- Event-Driven: Platform Events → MuleSoft Listener, Change Data Capture (CDC), SF Pub/Sub API (high-vol), Data Cloud → MuleSoft streaming, Genesys CTI Events → SF Case create
- Batch: Scheduled SF Flow → MuleSoft batch, Bulk API 2.0 → mass case migration

**Analytics:** CRM Analytics, Tableau, Einstein Discovery, Summit Connector  
**Shield + Platform:** Shield Encryption, FedRAMP/IL4, Event Monitoring, Salesforce Flow, SF Identity/SSO, App Builder/LWC

### Column 3: MuleSoft Anypoint Platform — Central Integration Hub (VAEC MAG)

**① API Gateway & Security Layer**  
Flex Gateway, API Manager, OAuth 2.0/mTLS/JWT, Key Vault Integration, DLP + PII Masking, FedRAMP/IL4 Controls, Rate Limiting

**② Reusable System APIs — Each Backend Called Once, Shared Across All 8 Apps**  
MPI Identity API, VA Profile API, FHIR/HDR API, VBMS Benefits API, BGS Gateway API, EAS/VAOS Sched API, ESR Enrollment API,  
IAM/SSOi Auth API, NPI Provider Index API, VCL Crisis Line API, VA Notify API, SharePoint Conn. API, LiiS + Pay.gov APIs, Summit/Synapse API

**③ Process APIs — Cross-App Orchestration & Business Logic**  
Claims Process API, Housing Process API, Scheduling API, Inquiry Process API, Care Process API, Enrollment API, Notification Orch API,  
Genesys Event API, ETL/Ingestion API, CDCE External API

**④ MuleSoft Agentic AI — Latest Capabilities**  
AI Chain API, MCP Server Support, A2A Protocol, Einstein AI Connector, Autonomous Agent Calls, Prompt Execution/RAG, AI-Driven API Routing,  
Data Cloud Ingest AI, Intelligent Error Healing, Flex Gateway AI Plugin, Anypoint Copilot, Azure OpenAI Connector

**⑤ VEIS Platform Bridge (VAEC MAG — Retained)**  
VEIS APIM Gateway, App Services/Microservices, Azure AD/EntraID, Key Vault (Secrets), Traffic Manager, Service Bus, Summit/Azure Synapse,  
Azure Data Lake, CXI Common Data, Reporting, Oracle Health/Cerner, LiiS/Pay.gov (VEIS), DTCC/VHIE Interop, Splunk SIEM, DAS/TIC/FW/TC

**MuleSoft → VA Backend Integration Patterns:**  
- Synchronous REST/SOAP: MuleSoft → MPI REST, VBMS SOAP/REST, EAS REST, FHIR R4 REST, VA Profile REST
- Event-Driven: MuleSoft → VEIS Service Bus, VA Notify (async), Azure Service Bus, VEIS Events → MuleSoft Listener
- Streaming: MuleSoft → HDR Streaming, Azure Data Lake ingest, DTCC/VHIE HL7 stream, MuleSoft → SF Pub/Sub push
- Batch/ETL: MuleSoft Batch → VBMS/VIERS nightly, ESR reconciliation, Summit Synapse, LiiS/Pay.gov monthly (CDCE-P)

**⑥ DevOps, Monitoring & Governance:** CloudHub 2.0 Runtime, Runtime Manager, Anypoint Monitoring, Anypoint Exchange, Anypoint Copilot, CI/CD Pipeline, API Analytics

### Column 4: VA Backend Systems of Record

**Identity & Person:**  
- MPI — Master Person Index (⚡ REST Sync, 📡 Event)
- VA Profile (⚡ REST Sync)
- IAM/SSOi (⚡ REST OAuth, 🔒 SAML)
- NPI Provider Index (⚡ REST Sync)

**Benefits Systems:**  
- VBMS — Veterans Benefits Management System (⚡ SOAP/REST, 🔄 Batch Nightly)
- VIERS (⚡ REST Sync, 🔄 Batch)
- BGS Gateway (⚡ REST, 📡 Async Msg)
- BVA/OIT Appeals (⚡ REST, 📡 Event-Driven)

**Health Systems:**  
- VistA — Health Records (⚡ HL7 v2/REST, 🔄 Batch Sync)
- HDR — Health Data Repository (⚡ REST, 🌊 Streaming)
- FHIR R4/DHP (⚡ FHIR REST, 🌊 Pub/Sub)
- VHIE/DTCC Interop (⚡ HL7 FHIR, 🌊 HL7 Stream)
- VCL Crisis Line (⚡ REST, 📡 Real-Time Alert)

**Scheduling Systems:**  
- EAS — Enterprise Appointment Service (⚡ REST, 📡 Async Callback)
- VAOS — Online Scheduling (⚡ REST Sync)
- PCMM — Care Management (⚡ REST, 🔄 Batch Sync)
- PATS-R — Appointment Tracking (⚡ REST, 🌊 Bidirectional)

**Enrollment & Programs:**  
- ESR — Enrollment System (⚡ REST, 🔄 Batch Recon)
- HUD-VASH Housing Program (⚡ REST, 🔄 Batch Sync)
- NCA Cemetery Admin (⚡ REST)

**Digital & Reporting:**  
- VA.gov/VDIF (⚡ REST, 📡 Webhook)
- VA Notify (📡 Async REST, 🌊 Push)
- CxDW Data Warehouse (🔄 Batch ETL)
- Summit/Synapse (🔄 Batch ETL, 🌊 Streaming)

**External Systems:**  
- LiiS (CDCE-P) (🔄 Monthly Batch)
- Pay.gov (CDCE-P) (⚡ REST, 🔄 Batch)
- Oracle Health/Cerner (⚡ FHIR REST, 🌊 HL7 Stream)
- DoD/OIG Network (⚡ REST/MQ, 🔄 Scheduled)

---

## Data Flow (End-to-End)

① Veterans/Agents → ② Genesys CX → ③ Agentforce AI → ④ SF Core + Data Cloud →→→ ⑤ MuleSoft Anypoint (Central Hub) →→→ ⑥ VEIS Platform → ⑦ VA Backend Systems ↩ Response

---

## Key Architecture Decisions in This Document

1. **FedRAMP High, not Moderate** — document specifies FedRAMP High + DoD IL4. This is a step up from what the DRA sessions assumed (FedRAMP Moderate). Significant implication for feature availability and compliance timeline.
2. **Single Salesforce Org** — all 8 apps consolidate into one SFGCP-E org. No multi-org. This is the "single org" architecture position.
3. **Data Cloud as Center of Gravity** — explicitly replaces all Dataverse, Azure SQL ODS, and Data Factory. Data Cloud is not an add-on; it is the data platform.
4. **VEIS Platform Bridge retained** — VAEC MAG is not retired; it is the bridge layer between MuleSoft and VA backend systems that require Azure AD, Key Vault, or Service Bus patterns. This is a hybrid cloud model (Salesforce GovCloud + Azure VAEC MAG).
5. **Agentforce replaces D365 Copilot and Power Apps across all 8 apps** — complete Dynamics AI platform retirement.
6. **Genesys replaces all Cisco Finesse and D365 OmniChannel** — unified contact center platform.
7. **MuleSoft Agentic AI capabilities** — MCP Server Support, A2A Protocol, and AI-Driven API Routing are explicitly in scope. This validates the MCP bridge concept discussed in the Jul 9 session.
8. **Reusable System APIs** — 15+ System APIs named, each called once and shared across all 8 apps. This is the "build the registry" mandate Fernando described.

---

## Gaps vs. DRA Working Session Assumptions

| Assumption from Sessions | HLAD Reality |
|---|---|
| FedRAMP Moderate | FedRAMP **High** + DoD IL4 — stricter compliance tier |
| 14 Dynamics apps | **8 named D365/VRM apps** specifically (may be subset of broader 14 Fernando referenced) |
| Vague "VA backend systems" | **30+ named VA backend systems** with specific integration patterns |
| MuleSoft registry concept | **Fully designed** — 15+ System APIs, 10+ Process APIs, all named |
| Data Cloud as future state | **Explicitly designated Center of Gravity**, replacing Dataverse + Azure SQL ODS + Data Factory |
| VEIS = to be retired | **VEIS Platform Bridge retained** as hybrid layer (VAEC MAG) |
| Agentforce as Phase 2+ | Architecture shows **Agentforce across all 8 apps** with specific agent names |
