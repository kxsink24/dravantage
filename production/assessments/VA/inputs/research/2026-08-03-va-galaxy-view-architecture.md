---
title: "VA Galaxy View Architecture — Structured Extraction"
tags: [dra, research, architecture, galaxy-view, agentforce, mulesoft, data-cloud]
created: 2026-08-03
status: in-progress
sources: [https://storm-8dc9a734e7b33e.my.site.com/vacccarchitecture]
---

# VA Galaxy View Architecture — Structured Extraction

> [!NOTE]
> Extracted via live browser session (Playwright MCP) on 2026-08-03. URL: https://storm-8dc9a734e7b33e.my.site.com/vacccarchitecture. Credentials: viewer.vaccc@salesforce-demo.com. This is the publicly shared VA CCC architecture visualization built collaboratively between the Salesforce SE team and VA OIT. Three views captured: Galaxy (concentric circular), Layer Cake (horizontal layered), and the 15-step Use Case Data Flow. Screenshots saved to `/Users/wwatschke/Documents/Projects/DRAVantage/`.

---

## Overview

The Galaxy View is a Salesforce Experience Cloud site hosting the VA Consolidated Contact Center architecture visualization. It presents the same architecture in multiple formats for different audiences — circular (for executive storytelling), layered (for technical precision), and use-case driven (for procurement evidence). The site was built specifically to make the architecture explainable to VA leadership so the "easier it is to explain, the easier they'll sign the check" (Fernando Gonzalez).

**Three views available:**
- **Architecture (Galaxy View):** Concentric circular diagram — 6 layers, expandable descriptions per layer, logos visible
- **Layer Cake View:** Horizontal layered architecture — precise component inventory; 3 architecture evolution phases (Today, AI-augmented, Agentic future)
- **Use Case Data Flow:** 15-step animated flow — "James, Vietnam-era Veteran" disability benefits inquiry

**Additional pages (navigation):**
- **Blueprint** (`presentation.html`) — architecture narrative/pitch deck view
- **Day in the Life** (`dayinlife.html`) — Veteran journey walkthrough

---

## Galaxy View — 6-Layer Architecture

### Layer 1 (Innermost): VA Systems of Record

**Subtitle:** Authoritative source systems across all VA administrations

**Description:** The bedrock of VA data — 15+ authoritative backends spanning electronic health records, benefits management, identity, scheduling, and data warehousing. Every piece of Veteran information originates here and flows through MuleSoft System APIs into Salesforce.

**Systems shown:**
- VistA
- VBMS
- MPI
- HDR
- Cerner
- VA Profile
- VADS
- VAOS
- Summit

**Architecture significance:** This layer is the source; it does not communicate directly with Salesforce — everything flows through MuleSoft (Layer 2). The Galaxy View makes this separation visually explicit, which is the foundation-first messaging Fernando uses with leadership.

---

### Layer 2: MuleSoft Anypoint Platform

**Subtitle:** Central Nervous System — API-Led Integration & AI Governance

**Description:** MuleSoft is the integration backbone that connects every VA backend to Salesforce and governs every AI agent interaction. Three functional layers work in concert: the AI & API Gateway secures all agent and API traffic; Agent Fabric orchestrates autonomous workflows across administrations; Enterprise Integration replaces legacy point-to-point connections with reusable, governed APIs.

**Components shown in diagram:**
- AI Gateway
- Agent Fabric
- Enterprise Integration
- API Governance
- MCP Bridge

**Layer Cake equivalents:**
- AI & API Gateway (labeled MCP)
- Agent Governance (labeled MCP)
- Enterprise Integration (labeled MCP)

**Architecture significance:** MuleSoft is architecturally positioned *between* every layer — no Salesforce application or Agentforce agent communicates with a backend system except through MuleSoft. The MCP Bridge designation signals that MuleSoft's Model Context Protocol support is a first-class design element, not an afterthought.

---

### Layer 3: Data 360

**Subtitle:** System of Context — Unified Veteran Profile & Agentic Intelligence

**Description:** Data 360 transforms raw VA data into actionable intelligence. It stitches records from VHA, VBA, NCA, and DoD into a single governed Veteran identity — then segments, activates, and streams real-time context to every agent, AI model, and outreach channel.

**Components shown:**
- Data Unification — "Harmonizes scattered administration data into a single operational foundation"
- Identity Resolution — "Stitches multi-agency records into a single verified Veteran profile"
- Segmentation — "Categorizes Veterans by operational needs for intelligent interaction routing"
- Activation — "Streams real-time actionable insights directly to agents, AI and communication channels. Closes the analytics → action loop"
- Agentic Memory

**Also noted in diagram:** Databricks Zero Copy

**Architecture significance:** "Unified veteran profile · unstructured data · structured data · fewer API calls" — the Databricks Zero Copy designation means VA's existing Databricks Summit data warehouse (current analytics platform) does not need to be migrated; Data Cloud reads it in place via Zero Copy, eliminating a batch ETL migration path. This significantly de-risks the Data Cloud adoption timeline.

---

### Layer 4: Salesforce Unified Contact Center Platform

**Subtitle:** Agent Workspace · Agentic AI · Insights · Cloud Apps

**Description:** The unified engagement platform where agents work, AI operates, and analytics surface. Service Cloud provides the case management console and Omni-Channel routing; Agentforce delivers autonomous AI agents and guided workflows; Tableau surfaces operational and executive insights; Health Cloud and Public Sector Solutions add VA-specific clinical and benefits capabilities.

**Components shown:**
- Service Cloud
- Agentforce
- Tableau
- Health Cloud
- Public Sector Solutions
- Experience Cloud (also shown)
- Process Automation (also shown)

**Architecture significance:** This is the "single Salesforce org" design principle made visual — all cloud products co-exist in one platform, sharing the same Data Cloud unified profile below them.

---

### Layer 5: Agentforce Agents

**Subtitle:** Autonomous AI agents across every VA role

**Description:** Four specialised Agentforce agents operate across the VA contact center — each scoped to a distinct role. Together they automate routine work, surface real-time insights, and hand off to humans only when genuinely needed, reducing handling time and improving Veteran outcomes.

**The four named agents:**

| Agent | Role |
|---|---|
| **CC Agent** (Contact Center Agent) | Primary veteran-facing AI — handles inbound inquiries, routes, deflects where appropriate |
| **Supervisor Agent** | Supervisor-facing — surfaces real-time insights, flags at-risk cases, supports quality monitoring |
| **Veteran Agent** | Veteran self-service — autonomous interactions on VA.gov / Experience Cloud portals |
| **MSA Agent** | Medical Support Assistant agent — clinical contact center and scheduling workflows |

**Architecture significance:** These four agents map to the four primary VA contact center roles (agent, supervisor, self-service Veteran, and clinical scheduling). The MSA Agent is notable — it confirms that VA Health Connect (the existing HealthCloud deployment) is within the Agentforce scope, not just the VRM/VBA consolidation.

---

### Layer 6 (Outermost): Veteran Engagement Channels

**Subtitle:** Unified front door — every channel, one platform

**Description:** Every touchpoint Veterans use to reach VA — phone, web, chat, email, mobile, and forms — all handled on the Salesforce platform. Context follows the Veteran seamlessly across channel switches so they never repeat themselves, and Agentforce handles routine requests autonomously before routing to a live agent.

**Channels shown:**
- Phone (Inbound & outbound)
- Web Portal (VA.gov journeys)
- Chat (Web & in-app)
- Email (Async messaging)
- Mobile App (Mobile app)
- Form (Online intake)
- VA.gov (also shown in diagram)

**Architecture significance:** All channels are on the Salesforce platform — there is no separate channel layer managed by a different vendor. Genesys CX Cloud handles telephony (BYOC → BYOT Connector), but the context and routing logic lives in Salesforce. This is the "unified front door" that replaces the 280+ siloed call center nodes.

---

## 15-Step Use Case Data Flow

**Scenario:** James, a Vietnam-era Veteran, calls the VA Contact Center with a disability benefits inquiry.

**Purpose:** Demonstrates the end-to-end Agentforce + MuleSoft + Data Cloud flow for a high-value, high-volume use case — the type of call the CCC program targets for AI deflection/augmentation.

| Step | Title | Key Actions |
|---|---|---|
| 1 | Veteran Initiates Call | James dials toll-free; IVR receives; selects Benefits topic; placed in Omni-Channel queue. Data passing Layer 1: Caller ANI \| IVR Selection: Benefits \| Channel: Phone \| Timestamp: 14:03 ET |
| 2 | Agentforce Agent Answers & Prompts for ICN | AI agent answers; requests Identity Control Number (ICN) to verify identity |
| 3 | Agentforce → MuleSoft MCP Server: ICN Validation | Agentforce calls MuleSoft MCP Server via Model Context Protocol to validate ICN against VA identity systems |
| 4 | MPI Validates ICN — Identity Confirmed | Master Person Index (Layer 1) returns identity confirmation via MuleSoft System API |
| 5 | Agentforce Auto-Creates Case in Service Cloud | Case record automatically created in Service Cloud before human agent is ever involved |
| 6 | Agentforce Queries Data 360 for Benefits Context | Agentforce pulls Veteran's unified profile from Data Cloud — benefits status, prior claims, service history |
| 7 | Agentforce Shares Benefits Summary — Veteran Requests Human | AI provides benefits summary; James requests warm transfer to human specialist |
| 8 | Service Cloud Routes Warm Transfer to Specialist | Omni-Channel routing assigns call to appropriate specialist; context travels with the transfer |
| 9 | Data 360 Assembles Full Unified Veteran Profile | Data Cloud assembles complete profile before agent picks up — VHA + VBA + NCA + DoD records unified |
| 10 | MuleSoft Orchestrates Full Benefits Data Retrieval | MuleSoft Process API orchestrates calls to VBMS, BGS, VIERS, and other benefits backends in parallel |
| 11 | VA Systems Return Authoritative Benefits Data | All VA backend systems of record return their data payloads via MuleSoft System APIs |
| 12 | MuleSoft Consolidates & Returns Governed Payload | MuleSoft consolidates multi-system response into single governed payload; applies DLP/PII masking |
| 13 | Data 360 Enriches Profile & Surfaces PACT Act NBA | Data Cloud enriches profile with new data; surfaces Next Best Action — PACT Act eligibility alert |
| 14 | Agent Desktop Loaded — Agentforce Coaches in Real Time | Service Cloud console loaded with unified profile; Agentforce provides real-time coaching suggestions |
| 15 | Veteran Gets Answers — Case Resolved in 8 Minutes | Case resolved; FCR achieved; 8-minute handle time (vs. UDO baseline significantly higher) |

**Key data flow observations:**
- MCP (Model Context Protocol) is the named protocol for Agentforce-to-MuleSoft communication — this is a first-class architecture decision, not an exploration
- Identity resolution (ICN → MPI validation) happens *before* case creation — the data foundation precedes any CRM action
- PACT Act Next Best Action surfaces in step 13 — Data Cloud calculated insights driving proactive outreach during the interaction
- "8 minutes" is the target handle time — this is the FCR/AHT benchmark for the CCC program

---

## Layer Cake View — Component Inventory

**Title:** Veteran Front Door Contact Center Consolidation Architecture

**Architecture Phases (dropdown):**
- **Phase 1 · Today** — "Channels are consolidated on one platform. Reps drive interactions; APIs move data between systems."
- **Phase 2 · AI-augmented** — AI-assisted agents (not yet active)
- **Phase 3 · Agentic future** — Fully autonomous agents (not yet active)

> [!NOTE]
> The Layer Cake view explicitly shows 3 phases, with Phase 1 as "Today" — this aligns with the Crawl/Walk/Run phasing in [[07-roadmap]]. The architecture site itself signals that what's live now (Phase 1) is the channel consolidation; AI augmentation and agentic operations are forward-stated.

### 5 Mission Outcomes

1. Deliver a seamless, unified experience for every Veteran — across every channel
2. Resolve veteran inquiries faster with AI-assisted agents
3. Connect siloed VA systems into a single source of truth
4. Automate routine interactions so agents focus on complex needs
5. Give leadership real-time visibility into contact center performance

### Layer: Veteran Unified Communications

| Channel | Description |
|---|---|
| Phone | Inbound & outbound |
| Web Portal | VA.gov journeys |
| Form | Online intake |
| Chat | Web & in-app |
| App | Mobile app |
| Email | Async messaging |

**Genesys CX Cloud:** BYOC → BYOT Connector (telephony integration bridge to Salesforce)

### Layer: Unified Contact Center CRM (Salesforce)

**VA Contact Center Workspace:**

Service Cloud capabilities:
- Case Management Console (Support Agent Desktop)
- Omni-Channel Routing (Skill & presence-based)
- Unified Veteran Profile (360° view across systems)
- Knowledge Retrieval (Curated & AI-assisted)
- Case Records & Escalation (Track, resolve, refer)

Platform Ecosystem & Process Automation (labeled "Deterministic workflows · Coming soon"):
- Automation Suite — Flow · Approvals · Triggers
- Orchestration — Scheduled & event-driven
- AppExchange & AgentExchange — Salesforce enterprise "App Store" · COTS applications & tools · 3rd party AI agents

**Agentforce** (separate section between Service Cloud and Platform)

Complementary Salesforce Cloud Products:

| Product | Capabilities |
|---|---|
| Health Cloud | Provider Network Management (Directories, referrals & care coordination); Clinical Contact Center (Care team engagement & triage) |
| Public Sector Solutions | Benefits Eligibility & Management (Determine & administer entitlements); Claims Management & Processing (Intake, adjudication & resolution) |
| Marketing Cloud | Proactive Outreach (Campaigns & callbacks); Multi-Channel Orchestration & Engagement (Coordinated journeys across channels) |
| Experience Cloud | Page Builder (Drag-and-drop portal & site design); Identity / SSO (Secure sign-on & access management) |

### Layer: System of Context

**Salesforce Data 360:** "Unified veteran profile · unstructured data · structured data · fewer API calls"

| Capability | Description |
|---|---|
| Activation | Streams real-time actionable insights directly to agents, AI and communication channels |
| Segmentation | Categorizes Veterans by operational needs for intelligent interaction routing |
| Identity Resolution | Stitches multi-agency records into a single verified Veteran profile |
| Data Unification | Harmonizes scattered administration data into a single operational foundation |

**Tableau:** Insights & Analytics

### Layer: MuleSoft Anypoint Platform

**Title:** Central Nervous System · API-Led Integration

| Component | Description |
|---|---|
| AI & API Gateway (MCP) | Secures & governs AI agents and APIs |
| Agent Governance (MCP) | Policy, observability & trust for agentic AI |
| Enterprise Integration (MCP) | Process APIs orchestrate · System APIs unlock |

### Layer: VA Systems

**Databricks Summit:** ZERO-COPY to Data 360 — VA data warehouse (no ETL migration required)

**VA Backend Systems shown:**
HDR · VistA · EAS · VADS · VA Profile · VDIF · PATS-R · VBMS · Cerner · VIERS · MPI · PCMM · ESR · VAOS · BVA/OIT

---

## Architecture Implications for the DRA

### What the Galaxy View confirms or adds

| Finding | Source in Galaxy View | DRA Impact |
|---|---|---|
| **4 named Agentforce agents** (CC Agent, Supervisor Agent, Veteran Agent, MSA Agent) | Layer 5 — Agentforce Agents | More specific than the HLAD agent topology; MSA Agent confirms Health Connect scope is within CCC Agentforce plan |
| **Databricks Zero Copy** to Data 360 | Layer 3 description + Layer Cake VA Systems section | Eliminates batch ETL migration; Summit data available to Data Cloud without moving data. Reduces Data Cloud adoption timeline risk. |
| **MCP as named protocol** for Agentforce-MuleSoft communication | Layer 2 description + use case step 3 | MCP is the chosen A2A/agent communication protocol — not just a future possibility. Architecture decisions should treat MCP as required, not optional. |
| **PACT Act Next Best Action** | Use case step 13 | Specific NBA use case tied to VA legislative requirements — Data Cloud segmentation must include PACT Act eligibility logic |
| **Phase 1 = "Today"** framing | Layer Cake phase dropdown | The architecture site already shows Phase 1 as current state, confirming Crawl phase deliverables are live or imminent |
| **3-phase roadmap alignment** | Layer Cake phases: Today / AI-augmented / Agentic future | Direct alignment with [[07-roadmap]] Crawl/Walk/Run phasing |
| **Genesys BYOC → BYOT** designation | Layer Cake — Genesys layer | BYOT (Bring Your Own Telephony) is the specific Genesys integration pattern; confirms full Salesforce routing control |
| **"Agentic Memory"** as a Data 360 component | Layer 3 components | Persistent agent memory is an explicit architecture requirement — Data Cloud must support Agentforce session state |

### What remains an open question

- **Phase 2 and Phase 3 content** — the Layer Cake dropdown has AI-augmented and Agentic future phases; content was not extracted this session. Future architecture sessions should capture these.
- **Blueprint and Day in the Life pages** — not yet scraped; may contain narrative or procurement-relevant content.
- **Exact AHT baseline** — "8 minutes" is stated in the use case as the target; the current UDO-driven baseline is not specified in the Galaxy View.

---

## Source Information

- **URL:** https://storm-8dc9a734e7b33e.my.site.com/vacccarchitecture
- **Access method:** Salesforce Experience Cloud; auto-authenticated via session cookie
- **Extraction date:** 2026-08-03
- **Screenshots:** va-galaxy-home.png, va-galaxy-expanded.png, va-galaxy-dataflow.png, va-galaxy-layercake.png (saved to DRAVantage project root)
- **Footer note on site:** "Reference architecture · Salesforce for Veterans Affairs · Informed by comparable cross-industry contact center transformations."

**Relates to:** [[inputs/customer-docs/2026-06-17-va-vrm-all-apps-hlad]], [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]]
