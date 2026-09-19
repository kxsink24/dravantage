---
title: "VA CCC Architecture — Jul 2 Working Session"
date: 2026-07-02
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, mulesoft, circular-diagram]
---

# VA CCC Architecture — Jul 2 Working Session

## Session Context

First session in the architecture series. Focus was on the overall CCC architecture diagram structure and MuleSoft's role. Fernando and Mathew provided the VA OIT perspective on how the architecture should be framed. The team worked through whether to use a circular vs. layered diagram layout to represent the technology stack.

---

## Key Themes

### MuleSoft as Central Nervous System

Fernando established the core architecture philosophy: MuleSoft AnyPoint is the center of everything, not Salesforce. The CRM surface is the *output* that business users see, but the real foundation is the integration and data layer beneath it.

> "Without the middleware of Mulesoft and integrating to all of this VA systems, it doesn't matter how many front ends you have, you're not going to get any data. So to me...the heart of this thing is that integration layer that ties to the rest of the VA."

This was the governing principle for all subsequent architecture sessions. Every diagram decision and framing choice was grounded in making MuleSoft's role visible and defensible.

### Circular Layout Decision

The team discussed two layout options:
- **Layered / horizontal stack** — traditional enterprise architecture style; familiar but implies hierarchy that could suggest MuleSoft is a "middle tier" rather than a foundation
- **Circular / orbital** — MuleSoft at center, VA systems of record as inner ring, Salesforce applications as outer ring

Fernando and the team landed on **circular**. Rationale: the circular layout visually communicates that MuleSoft is the hub that everything else connects through — not just one layer in a stack. This framing is also more compelling for executive audiences who aren't reading architecture diagrams in detail.

### 14 Dynamics Applications

Fernando confirmed that VA currently operates approximately 14 separate Dynamics CRM applications across different business lines — disability, benefits, and other VHA/VBA programs. These are isolated applications with no shared data model or cross-application visibility. The CCC consolidation will migrate these onto Salesforce, but the data foundation must be built first.

### Stakeholders Can't See the Foundation

Fernando identified a key communication challenge: VA stakeholders understand the CRM because that's the visible surface. They don't understand or value the integration and data foundation beneath it. The architecture presentation must make the foundation visible — if leadership only sees "Salesforce + Genesys," they will miss why MuleSoft matters.

> "People understand the CRM because that's what they see... people don't understand the rest of the internal workings."

---

## Structured Findings

### Architecture

- **Circular diagram** confirmed as preferred layout
- MuleSoft at center; VA systems of record (inner ring); Salesforce applications (outer ring); Genesys/omnichannel at outer edge
- VA Health Connect (Salesforce HealthCloud) already connected to VA backend systems via MuleSoft — this is the live reference implementation

### Systems Identified

- MuleSoft AnyPoint Platform (exists, underutilized)
- VA Health Connect / Salesforce HealthCloud (live)
- Dynamics x14 apps (target for consolidation)
- VistA / Cerner (health records; migration in progress)
- Backend VA systems (benefits, VBMS, unspecified)
- Genesys CX Cloud (planned; CCaaS integration)

### Risks Identified

- SIs will arrive and default to building scoped Salesforce apps without connecting to the data foundation
- Leadership will see the CRM layer and not ask about the integration layer
- Without the data layer, any AI use case (Agentforce) will be querying fragmented, disconnected data

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Blind Spot | 14 Dynamics apps = 14 siloed veteran data stores; MuleSoft at ~10% utilization |
| Trust Gap | Leadership doesn't see the foundation; they may not fund or prioritize it |
| Value Chain: Connect | Score 1 — no real-time data flow across systems |
| Value Chain: Integrate | Score 2 — MuleSoft exists and has one live integration (Health Connect) |
| Value Chain: Unify | Score 1 — no unified veteran identity across Dynamics, VistA, Salesforce |

---

## Action Items from Session

- Continue architecture diagram development (next session Jul 8)
- Determine how to frame "foundation" vs. "CRM" for leadership audiences
- Begin identifying which VA backend systems need MuleSoft APIs in Phase 1
