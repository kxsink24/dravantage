---
title: "VA CCC Architecture — Jul 9 Working Session"
date: 2026-07-09
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, diagram, clickable, mcp, phased-migration]
---

# VA CCC Architecture — Jul 9 Working Session

## Session Context

Architecture diagram refinement session. The circular layout was being built out with layers, and the team began working on how to present the diagram to different audiences. Key decisions: clickable layer design for the interactive version, and the "foundational" label placement at 6 o'clock position to reinforce the foundation-first narrative.

---

## Key Themes

### Clickable Layer Design

For the interactive version of the architecture diagram, the team designed a click-through experience:
- **Default view:** The circular diagram showing all components at a high level — suitable for executive audiences
- **Click any layer:** Reveals detail for that component (e.g., clicking on MuleSoft reveals the API registry, integration patterns, system connections; clicking on Agentforce reveals the agent topology)
- **Presentation mode:** Designed for the Aug 24 Mark Ennis session — allows Werner to control pacing and depth based on the audience's questions

The "foundational" label was placed at the **6 o'clock position** at the base of the circular diagram. This placement communicates: the foundation is below everything else, it is what everything else rests on. It is not one option among many; it is the base.

### MCP Bridge Concept

Fernando and the team discussed the Model Context Protocol (MCP) as a future evolution of the MuleSoft integration pattern. In the target state, Agentforce agents could dynamically discover and invoke APIs from the MuleSoft registry via MCP — meaning the AI layer can connect to any VA system that has been published as an MCP-compatible API, without hardcoding every integration.

This was noted as a future-state concept (Phase 3+) but was important for the architecture framing: it shows MuleSoft as the foundation that enables agentic AI, not just traditional CRM integration.

### Phased Migration De-risks the Build

Fernando articulated why the phased migration approach is the right architecture strategy:

> "It also derisks the entire implementation because it's not like you're going to do a big bang. You're going to do this in stages. So you build that foundation and then you can pick and choose which ones you're going to move over."

This framing — build the data foundation once, then migrate contact centers onto it in stages — became a key talking point for the Aug 24 readout. Each migration wave is not a new data problem; it's a connection to an already-working foundation.

---

## Structured Findings

### Architecture Decisions

- Interactive/clickable diagram design finalized
- "Foundational" label at 6 o'clock — visual reinforcement of foundation-first philosophy
- 3-pass presentation model starting to form: (1) mission/outcomes, (2) current state + barriers, (3) target state + roadmap
- MCP bridge concept noted as Phase 3 future state

### Key Message Locked In

- "Build it once, connect each contact center in stages — it's not a data problem for wave 2 because the foundation is already there"
- MuleSoft + Data Cloud as the reusable foundation; Salesforce/Genesys as what connects to it

### Systems Discussion

- Genesys integration positioning clarified: Genesys provides CCaaS (voice/omnichannel), Salesforce provides the agent workspace and AI layer, MuleSoft routes data between them and to VA backend systems
- Agentforce = future state, dependent on MuleSoft API foundation being in place

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Blind Spot | "People don't understand the internal workings" — the clickable diagram is the fix |
| Value Chain: Orchestrate | MCP concept confirms Orchestrate is aspirational (Phase 3); Score 1 for current state |
| Value Chain: Integrate | MuleSoft + MCP future state = potential Score 3 if the registry is built |
| Strategic Alignment | Phased migration = foundation-first approach; architecture document is the governance artifact |

---

## Action Items

- Finalize interactive diagram with clickable layers
- Develop 3-pass presentation structure for Aug 24 readout
- Document MCP bridge concept as Phase 3 roadmap item
