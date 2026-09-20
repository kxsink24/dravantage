---
title: "Roadmap — Department of Veterans Affairs"
wiki_page: "07"
status: in-progress
tags: [dra, roadmap, crawl-walk-run, fedramp, mulesoft, agentforce, phased]
sources: [inputs/customer-docs/2026-06-17-va-vrm-all-apps-hlad, inputs/interviews/2026-07-21-va-ccc-architecture, inputs/interviews/2026-07-28-va-ccc-architecture, inputs/research/2026-08-03-benioff-linkedin-va-missionforce]
last_analyzed: 2026-08-03
---

# Roadmap

> [!NOTE]
> This roadmap is grounded in Fernando Gonzalez's HLAD (June 17, 2026), the phasing discussion from the Jul 21 and Jul 28 working sessions, and the FedRAMP constraints confirmed across multiple sessions. The phases are named "Crawl / Walk / Run" in the DRA framework and map to Fernando's "Phase 1 / Phase 2 / Future State" framing from the working sessions.

**Maps to:** DRA Report Section 5 — Phased Roadmap
**Reads from:** [[02-data-barriers]], [[04-data-value-chain]], [[06-target-state-architecture]]
**Drives output:** Roadmap slide, business case framing

---

## Roadmap Sequencing Principles

The VA's barrier profile drives the sequencing:

- **Blind Spot is High** and must be resolved first. Until MuleSoft is the mandatory integration backbone and the Reusable System API registry exists, every SI that arrives will build point-to-point integrations that recreate silos on Salesforce instead of eliminating them from Dynamics.
- **Trust Gap is High** and runs in parallel with Crawl. DTC governance reform cannot wait until Phase 2 — without provisioned tools and published patterns, the Crawl phase infrastructure cannot be validated and the Aug 24 architecture commitment cannot be delivered with confidence.
- **Time Trap is Medium** and addressed in Walk. Streaming integration, Data Cloud calculated insights, and real-time Data Cloud activation are Walk-phase work — they depend on the foundation (MuleSoft System APIs, Data Cloud identity layer) being operational first.
- **AI (Orchestrate) is Run.** Agentforce is Phase 3 in Fernando's framing ("you don't get this day one"). DTC must provision access, FedRAMP High certification must cover the required capabilities, and the Data Cloud grounding layer must be operational — none of which are true today.

**Golden thread:** You can't orchestrate with AI you don't trust. You can't trust data you can't connect. Connect first.

---

## Crawl Phase — Foundation

**Timeframe:** Now → Q4 2027 (CY calendar)
**Theme:** Build the integration and data foundation that the entire CCC program depends on
**Barriers addressed:** Blind Spot (primary), Trust Gap (parallel governance track)
**Capabilities targeted:** Integrate 2→3, Connect 1→2, Protect 2→3, Unify 1→2

> [!NOTE]
> The August 24, 2026 architecture deliverable is the Crawl phase kick-off artifact. The readout to Mark Ennis is not the end of Crawl — it is the governance mandate that authorizes Crawl to start. Until the architecture is locked in the RFx, no SI can be held to these patterns.

### Initiatives

| Initiative | What it is | Why it's first | Salesforce Capability | Success Measure |
|---|---|---|---|---|
| MuleSoft System API Registry — Phase 1 | Build and publish the 15 Reusable System APIs from the HLAD in Anypoint Exchange; enforce via Flex Gateway; DLP + PII masking live | Without this, SIs build point-to-point integrations that bypass the foundation. This is the Blind Spot fix. | MuleSoft Anypoint + Flex Gateway + Anypoint Exchange | All 8 VRM apps route backend calls through registered APIs; zero direct app-to-backend calls |
| RFx Architecture Requirement | Embed MuleSoft reuse mandate and integration patterns in the CCC RFx solicitation | SI governance must be a contractual requirement, not a suggestion. Without it, the architecture can't be enforced. | — (governance artifact, not a Salesforce product) | RFx includes mandatory MuleSoft patterns; SIs bid against the architecture |
| DTC Governance Playbook | Publish pre-approved integration patterns, fast-track path for registered API usage, Agentforce provisioning request resolution | DTC is the #1 Trust Gap blocker. This isn't technology — it's organizational. Must start immediately. | Anypoint Exchange (published patterns) | Agentforce provisioned; new API registrations processed in <30 days (vs. 6+ months today) |
| Service Cloud Deployment — NCCs | Deploy Service Cloud for National Contact Centers (25,000 users first wave): AVA, UDO, CommCare cases migrated from D365; Omni-Channel Routing live; Knowledge base established | First contact center migration wave. Validates the architecture before local contact centers begin. | Service Cloud + Omni-Channel Routing | NCC agents on SF; Dynamics retired for NCC scope; case routing operational |
| Genesys CCaaS Integration | Deploy Genesys Cloud CX; Salesforce Open CTI live; voice/IVR channels operational; Cisco Finesse retired | Genesys is the unified omnichannel platform. Must be operational for NCC go-live. | Genesys CX + Service Cloud Voice (Open CTI) | Genesys handling NCC call volume; Cisco Finesse decommissioned for NCC |
| Data Cloud — Initial Deployment | Data Cloud operational: MPI-E identity resolution, VA Profile sync, PATS-R + AVA merge, initial unified veteran profile | Data Cloud is the center of gravity in Fernando's HLAD. Initial deployment establishes identity resolution — the foundation for everything else. | Data Cloud (Unified Veteran Profile, identity resolution) | Unified veteran profile available for NCC agent workspace; identity resolution across MPI-E and NCC app scope |

### Dependencies

- Mark Ennis Aug 24 readout approved by leadership → architecture embedded in RFx
- DTC Agentforce access issue escalated and resolved (DTC governance reform is a Crawl prerequisite, not a Walk item)
- SFGCP-E org provisioned on FedRAMP High tier (confirm current org tier with Salesforce team)
- VAEC MAG (VEIS Platform Bridge) connection to MuleSoft CloudHub 2.0 established

### Risks

- **DTC provisioning delay:** If DTC doesn't resolve the Agentforce access issue, Crawl phase validation is limited — the team cannot test the agentic AI patterns they are building toward. Escalate to Mark Ennis and Rob Orifici.
- **SI RFx influence window:** If the architecture isn't embedded in the RFx before SIs are selected, the governance mandate has no teeth. Aug 24 is the hard deadline.
- **FedRAMP High tier confirmation:** The HLAD targets FedRAMP High; previous session discussions assumed Moderate. Feature availability may differ. Confirm with Salesforce PS team before committing to Crawl deliverables.
- **VistA → Cerner migration overlap:** Health system integrations being built against VistA may need to be rebuilt against Cerner. Design MuleSoft FHIR R4 API to abstract the transition.

---

## Walk Phase — Intelligence

**Timeframe:** Q1 2028 → Q4 2028
**Theme:** Activate the data foundation with analytics, identity unification, and initial AI capabilities
**Barriers addressed:** Time Trap (primary), Trust Gap (continued)
**Capabilities targeted:** Unify 2→3, Decide 1→2, Connect 2→3, Validate 1→2, Orchestrate 1→2
**Prerequisite:** Crawl complete — MuleSoft System API registry operational, NCC Service Cloud live, Data Cloud initial deployment done

### Initiatives

| Initiative | What it is | Why it's next | Salesforce Capability | Success Measure |
|---|---|---|---|---|
| Data Cloud — Full Identity Unification | Expand Data Cloud identity resolution to full VA scope: VBMS benefits, HUD-VASH, ESR enrollment, PATS-R, HDR health. Complete Unified Veteran Profile 360°. | NCC agents need health + benefits in one view. This requires VBMS and health records unified in Data Cloud — not just NCC scope. | Data Cloud (full identity resolution, FHIR R4 ingestion, VBMS sync) | Single veteran profile spans health + benefits + contact history; cross-line agent view operational |
| Agentforce Deployment — Phase 1 Agents | Deploy first-wave Agentforce agents: AI Agent Assist (agent workspace), Inquiry Routing AI, Claims & Appeals AI, Veteran Self-Service. FedRAMP High certification confirmed. DTC provisioned. | AI that is grounded in the unified veteran profile, not fragmented Dynamics data. The GIGO risk is resolved because the foundation now exists. | Agentforce (Agent Assist, Routing AI, Claims AI, Self-Service AI) | AI-assisted case routing live; agent handle time reduced; self-service deflection measurable |
| VetHome + Member Services Migration | Migrate Health Cloud applications (VetHome/HUD-VASH, Member Services, WVCC) from Dynamics | Second migration wave. Health Cloud depends on Data Cloud FHIR R4 and HUD-VASH being operational (Crawl). | Health Cloud + Data Cloud (FHIR R4, SDOH, HUD-VASH sync) | Health Cloud apps live; D365 VetHome/MS/WVCC retired |
| MuleSoft System APIs — Benefits + Health | Build remaining System APIs: VBMS, BGS, VHIE/DTCC, HDR streaming, VCL Crisis Line, PCMM, NCA | Unlocks Walk-phase Agentforce agents that need benefits and health data in real-time. | MuleSoft Anypoint (VBMS SOAP/REST, HDR streaming, FHIR R4) | All 15 HLAD System APIs operational; all 8 app integrations routed through registry |
| CRM Analytics — Supervisor Dashboards | Deploy contact center supervisor dashboards: wait times, resolution rates, CSAT by line of business | Replaces 8 separate Dynamics reports with one view. Enables data-driven staffing and routing decisions. | CRM Analytics + Data Cloud segmentation | Supervisors have single dashboard; Dynamics reports retired |
| Agentforce Voice (pending FedRAMP) | Deploy AI-assisted voice routing via Genesys CX — real-time agent assist, call summarization, intent detection | Requires Agentforce Voice on GovCloud (Q1 FY27 internal target). Walk phase start date contingent on FedRAMP availability. | Agentforce Voice + Genesys CX Open CTI | Voice AI routing live; call summarization operational; CSAT improvement measurable |

### Dependencies

- FedRAMP High certification for Agentforce Voice (Q1 FY27 internal target — must confirm before committing Walk date)
- Data Cloud full identity resolution operational (Crawl deliverable)
- DTC has provisioned Agentforce (Crawl deliverable)
- Local contact center migration planning underway

### Risks

- **FedRAMP Voice lag:** Agentforce Voice GovCloud availability is the gating item for Walk-phase AI in the contact center. If Q1 FY27 slips, Walk-phase AI is limited to non-voice channels (chat, email, messaging).
- **Data quality issues post-unification:** When VBMS and health records are unified in Data Cloud, duplicate and inconsistent veteran records will surface. A data quality and remediation process must be designed before agents rely on unified profiles.
- **SI execution risk:** Walk phase coincides with SI onboarding for broader migration waves. SI adherence to MuleSoft patterns (established in Crawl) must be monitored actively. Any SI building direct integrations must be escalated immediately.

---

## Run Phase — Agentic Operations

**Timeframe:** 2029 and beyond
**Theme:** Full agentic AI across all channels and all 8 migrated apps; MCP-enabled autonomous agent operations
**Barriers addressed:** All barriers resolved at this point
**Capabilities targeted:** Orchestrate 2→3, Act 2→3, Decide 2→3
**Prerequisite:** Walk complete — Data Cloud full 360° profile operational, Agentforce Phase 1 agents live and validated, all 8 apps migrated from Dynamics

### Initiatives

| Initiative | What it is | What it unlocks | Salesforce Capability | Success Measure |
|---|---|---|---|---|
| MuleSoft MCP Server + A2A Protocol | Deploy MCP Server support in MuleSoft; Agentforce agents dynamically discover and invoke registered APIs via Model Context Protocol | Agents can connect to any VA backend system with a registered API without hardcoded integrations. The registry becomes the agent's interface to the VA. | MuleSoft Agentic AI (MCP, A2A, AI Chain API) | Agentforce agents invoke MuleSoft APIs autonomously; no per-integration hardcoding required |
| Specialist Agent Deployment | Deploy remaining Agentforce agents: Housing AI Agent (HUD-VASH), Health/Scheduling AI (PATS-R + EAS), WVCC Care Agent, CDCE-P Community Care AI | Full 8-app agentic coverage. Veteran self-service and agent assist across every line of business. | Agentforce (Housing, Health, WVCC, CDCE-P agents) | All 8 app lines have AI-assisted routing and veteran self-service; agent-assisted case creation automated |
| Experience Cloud — Full Portal Migration | All 6 veteran-facing portals live on Experience Cloud; all Power Pages retired | Complete retirement of the D365/Power platform. Veterans interact with VA through Salesforce-powered portals. | Experience Cloud (ask.va.gov, VetHome, va.gov, cdcportal, womenshealth, MSP/MHV) | All Power Pages decommissioned; unified veteran portal experience live |
| Marketing Cloud Omnichannel | Deploy remaining Marketing Cloud channels (SMS, mass messaging) pending FedRAMP authorization | Proactive outreach to veterans (appointment reminders, benefit enrollment notifications, crisis support follow-up) across all approved channels. | Marketing Cloud (email live; SMS + mass messaging pending FedRAMP) | Proactive outreach operational; VA Notify replaced for approved channels |
| Full Local Contact Center Migration | Remaining local contact centers migrate onto Service Cloud + Genesys + Agentforce | All 80,000 contact center users on unified platform. | Service Cloud + Genesys CX + Agentforce | All Dynamics contact center instances retired; full CCC program complete |

### Dependencies

- MCP Server support in MuleSoft Anypoint available on FedRAMP High (confirm timeline with Salesforce/MuleSoft product)
- Marketing Cloud SMS FedRAMP authorization confirmed
- All 8 app migrations from Walk phase complete
- VEIS Platform Bridge steady-state operations established

### Risks

- **Scope expansion:** As each contact center migrates, new use cases and VA backend systems will surface that aren't in the current HLAD. The MuleSoft registry governance model must be designed to absorb new APIs without creating exceptions.
- **MCP maturity:** A2A Protocol and MCP Server support in MuleSoft are relatively new capabilities (confirmed in HLAD but not yet widely deployed at scale). Early adopter risk; requires close coordination with Salesforce/MuleSoft engineering.

---

## Roadmap Summary Table

| Phase | Theme | Key Initiatives | Timeline | Primary Barrier Addressed |
|---|---|---|---|---|
| **Crawl** | Build the foundation | MuleSoft System API Registry; DTC Governance Playbook; RFx Architecture Requirement; NCC Service Cloud + Genesys; Data Cloud initial deployment | Now → Q4 2027 | Blind Spot + Trust Gap |
| **Walk** | Activate the data | Full Data Cloud 360° identity; Agentforce Phase 1 agents; VetHome + MS + WVCC migration; Supervisor Analytics; Agentforce Voice (FedRAMP-gated) | Q1 2028 → Q4 2028 | Time Trap + Trust Gap |
| **Run** | Full agentic operations | MCP + A2A agentic AI; all 8 specialist agents; all 6 portals on Experience Cloud; local CC migration complete; Marketing Cloud omnichannel | 2029+ | All barriers resolved |

---

## Business Case Anchor Points

### Quantitative Anchors (Sources: SAM.gov RFI, VA Budget Submissions, Gemini Research, Benioff LinkedIn)

- **$1.6 billion** — Agentic Enterprise License Agreement under the **Missionforce** platform (Agentforce + Slack + Data 360 + MuleSoft + Tableau). This is the contractual foundation for the entire program.
- **467,000 VA employees** — full Missionforce ELA scope across all of VA (VHA, VBA, NCA, administration). The 80K contact center users are the CCC program subset; the architecture patterns scale to the full workforce. Source: [[inputs/research/2026-08-03-benioff-linkedin-va-missionforce]].
- **28 days → minutes** — appointment confirmation time. VA's publicly stated target for scheduling workflow transformation. CEO-attributed, publicly committed, and directly tied to Agentforce + MuleSoft deployment. Use this as the headline Walk-phase KPI in readout materials. Source: [[inputs/research/2026-08-03-benioff-linkedin-va-missionforce]].
- **60 million+ annual calls** across the VA contact center network — the volume this architecture must handle at scale.
- **280+ decentralized call center entities** → 1 unified architecture. The consolidation scope is not incremental — it is a full platform replacement.
- **72.7% baseline First Call Resolution** → **100% target FCR** — the primary operational KPI from the RFI. The architecture must eliminate the callback and handoff patterns that drive the 27.3% failure rate.
- **25 legacy systems per VBA agent** (UDO desktop) — the "swivel chair" problem that inflates Average Handle Time. Unified Service Cloud console + Data Cloud grounding eliminates this.
- **56,000 transactions per second** — combined VistA + CDW peak throughput. Direct polling by 280+ nodes is unsustainable; MuleSoft event-streaming + caching is the architectural solution.
- **110 million monthly API transactions** — current VA Lighthouse API Gateway volume; the integration layer already handles this scale.
- **~10% MuleSoft utilization today** — the gap between the asset VA owns and the enterprise backbone Fernando's architecture requires.
- **6+ months DTC Agentforce blockage** — the governance debt that must be resolved before Phase 3 AI can begin.

### Qualitative Anchors

- **RFI confirmed Salesforce as CCC technology** (July 27, 2026). The architecture deliverable by Aug 24 is the leverage point that locks this in before SIs are selected.
- **Fernando's mandate:** "Build it once and then it's just a matter as these contact centers come over." The Crawl phase foundation is the difference between a 3-year migration that accelerates each wave and a 10-year program where each contact center is its own data problem.
- **Enterprise Council** (Deputy Secretary Dr. Lawrence) must approve vendor selection. The architecture must be credible at the statutory level — FedRAMP High, DoD IL4, VAEC MAG hybrid, not a commercial cloud promise.
- **Competing against Microsoft.** The existing Dynamics ecosystem creates a default renewal path. The architecture deliverable must make the data and AI differentiation concrete: Microsoft's path is 8 more years of Dynamics; Salesforce's path is consolidation, a unified veteran record, and AI-enabled contact center by 2028.

---

## Official VA RFI Migration Plan (Cross-Reference)

> [!NOTE]
> The VA's public RFI (SAM.gov) specifies a 4-phase, 24-month official migration plan. The DRA Crawl/Walk/Run roadmap above is aligned to this official plan. Source: [[inputs/research/2026-08-03-gemini-va-ccc-deep-research]].

| VA Official Phase | Window | Core Milestones | DRA Phase Mapping |
|---|---|---|---|
| Phase 1: Foundation & Data Readiness | Months 1–6 | Wrap VistA, Cerner, VBMS, VA Profile in MuleSoft API layer; configure Data Cloud + Master Person Index | **Crawl** |
| Phase 2: Omnichannel Core & Pilot | Months 7–12 | Deploy Salesforce Service Console across primary VBA + VHA pilot nodes; CTI integration with Cisco/Avaya; connect eGain KMS | **Crawl → Walk** |
| Phase 3: Agentforce & AI Guardrails | Months 13–18 | Deploy Agentforce natural language intent routing + self-service appointment scheduling; Marketing Cloud proactive campaigns | **Walk** |
| Phase 4: Full Consolidation & Cutover | Months 19–24 | Complete migration of 280+ call centers; decommission legacy UDO/Dynamics nodes; achieve 100% target FCR | **Run** |

**Key official KPIs from RFI:**
- Immediate call answering
- Predictive caller journeys (pre-retrieved context before agent picks up)
- Self-service appointment scheduling
- Natural language intent routing (replaces touch-tone IVR)
- **100% First Call Resolution** (baseline: 72.7%)

---

## What This Roadmap Is Not

- **This is not the full CCC program plan.** The CCC program includes procurement, workforce change management, training, and local contact center transition plans — none of which are in scope for the DRA architecture deliverable.
- **This is not a commitment on Agentforce Voice date.** Agentforce Voice GovCloud availability is FedRAMP-gated. "Q1 FY27" is an internal Salesforce target, not a contractual commitment. The roadmap shows it in Walk phase but must be qualified with "subject to FedRAMP High authorization."
- **This is not a scope for all VA IT.** The 8 VRM apps in the HLAD are the VRM program scope. There are likely additional Dynamics applications across VA that are not in this scope. The architecture pattern is designed to be extensible, but the roadmap covers only the CCC/VRM consolidation.
- **This roadmap does not include SI cost estimates.** The DRA provides the architecture; SI cost estimation requires a separate scoping engagement after the RFx is released.
