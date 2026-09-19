---
title: "VA CCC Architecture — Jul 28 Working Session"
date: 2026-07-28
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, build-once, dtc, agentforce-blocked, mulesoft-registry, phased-api, pre-readout]
---

# VA CCC Architecture — Jul 28 Working Session

## Session Context

Pre-readout preparation session. This was the final working session before the Aug 24 Mark Ennis readout. Fernando laid out his strongest and most explicit articulation of the build-once philosophy, the SI governance risk, and the DTC Agentforce access problem. The session produced the clearest synthesis of the entire 7-session architecture work.

---

## Key Themes

### Build-Once Foundation Philosophy (Clearest Statement)

Fernando's most complete articulation of the build-once approach:

> "We are going to build a solid data foundation so that we build it once and then it's just a matter as these contact centers come over. It's not going to be a data problem now; it's just connecting the new contact center into this strong data foundation that's already been built."

The architecture deliverable's purpose is to make this vision concrete and defensible. The Aug 24 document isn't a slide deck — it's the technical specification that forces SIs to bid against a defined foundation-first architecture. Without it, SIs will propose their own architectures and the VA will end up with a patchwork of contact-center-specific implementations.

### SI Governance Risk (Daily Battle)

Fernando was explicit about the risk he manages every day:

> "If SIs come in and everybody is doing their own thing...then that defeats the purpose. We need to establish the right way so that SIs have one way to do it and they have to follow that defined pattern...I am fighting that every single day."

The risk is not hypothetical: without a defined integration pattern and MuleSoft registry that SIs are required to use, each SI will default to what they know — which typically means direct Salesforce-to-source-system integrations that bypass MuleSoft entirely. The VA ends up with a new generation of silos, now on top of Salesforce, rather than replacing the Dynamics silos.

The architecture document is the governance artifact that prevents this. It must be embedded in the RFx before SIs are selected, so it becomes a contractual requirement.

### DTC Agentforce Blockage (Named Explicitly)

Fernando named the DTC Agentforce access problem directly:

> "If DTC is not going to give out the access to these things or have the tool ready and have governance in place before we can give any access, this is not going to go anywhere."

Agentforce has been blocked for 6+ months. The new June 2026 ELA includes Agentforce, but DTC has not provisioned access. The team is designing an AI architecture for a tool they have never been able to use. This is not a vendor problem — it is a VA internal governance problem.

Implication for the readout: the architecture can credibly commit to an Agentforce-enabled target state, but the Phase 1 deliverable must be the governance reforms (DTC access, published patterns, SI playbook) rather than live AI capabilities.

### Phased API Strategy

Fernando articulated the API integration sequencing:

- **Phase 1 APIs:** VA Health Connect backend systems (already integrated via MuleSoft — extend the registry to document and govern what exists); Genesys CCaaS integration
- **Phase 2 APIs:** Benefits systems, VBMS, Dynamics migration APIs as contact centers migrate
- **Phase 3 APIs:** Full backend integration; MCP-enabled API discovery for agents

Each phase's API set is scoped to what the contact center migration wave needs. Phase 1 does not try to integrate every VA backend system — it integrates the ones the National Contact Centers need to go live.

### Galaxy Portal Access Model

Fernando mentioned that the Galaxy portal (the architecture visualization tool) currently uses shared credentials. The plan to move to VA.gov domain-based access is in progress — this is a Protect/governance improvement but also enables the architecture to be shared with SIs and program stakeholders without managing individual credentials.

### Lighthouse Scoping

The VA Lighthouse API program was clarified as external-only — it is VA's public developer API for building applications that connect to VA data from outside the VA network. It is not the internal integration governance layer the CCC program needs. The internal layer is MuleSoft.

---

## Structured Findings

### Architecture Decisions (Final Pre-Readout)

- **Build-once foundation** is the governing principle and must be the first slide of the readout
- **MuleSoft as mandatory enterprise backbone** — not optional, not an SI choice; embedded in RFx
- **Phased API integration** — Phase 1 = NCCs + Health Connect extension; Phase 2 = benefits systems
- **DTC governance reform** — must be named as a critical path dependency in Phase 1
- **Agentforce Phase 2+** — honest about DTC blocking; don't commit to Phase 1 AI

### Risk Flags for Readout

- DTC Agentforce access: 6+ months blocked; must be resolved before Phase 2 AI can begin
- SI governance: without required integration patterns, SIs will build silos — the architecture doc is the prevention
- FedRAMP AI lag: Agentforce Voice Q1 FY27 target; this is a hard constraint, not a planning assumption

### Key Quotes (Verbatim)

> "Without the middleware of Mulesoft and integrating to all of this VA systems, it doesn't matter how many front ends you have, you're not going to get any data."

> "We are going to build a solid data foundation so that we build it once and then it's just a matter as these contact centers come over."

> "I am fighting that every single day."

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Blind Spot | SI governance risk = new silos on Salesforce if no MuleSoft mandate; Fernando fighting this daily |
| Trust Gap | DTC 6+ month Agentforce block = architecture cannot be validated; governance is the blocker |
| Trust Gap | Leadership doesn't see the SI governance risk — it's the hidden architecture threat |
| Value Chain: Integrate | Score 2; path to Score 3 is through published API registry + mandatory SI pattern |
| Value Chain: Orchestrate | Score 1; Phase 2 at earliest; DTC is critical path |
| Strategic Alignment | Aug 24 document = governance artifact, not marketing; embed in RFx |

---

## Action Items

- Complete architecture document for Aug 24; embed in RFx solicitation language
- Define required integration patterns for SIs (what must route through MuleSoft, what's prohibited)
- Escalate DTC Agentforce access as a named risk in the readout; ask Mark Ennis for a resolution path
- Document Lighthouse as external-only; confirm internal API governance strategy
