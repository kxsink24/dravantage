---
title: "VA CCC Architecture — Jul 8 Working Session"
date: 2026-07-08
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, diagram, foundation-first, health-connect]
---

# VA CCC Architecture — Jul 8 Working Session

## Session Context

Follow-up to the Jul 2 circular layout decision. This session focused on fleshing out the static vs. dynamic diagram distinction and confirming what's in the inner ring (VA systems of record connected to MuleSoft). VA Health Connect's existing MuleSoft connection was confirmed as the live reference implementation and proof point.

---

## Key Themes

### Static vs. Dynamic Diagram

The team discussed two presentation modes for the architecture:
- **Static diagram** — a clean, finalized architecture reference suitable for documents and slides
- **Dynamic/interactive diagram** — a layered or clickable version that reveals detail on demand, suitable for live executive presentations

The decision: produce both. The static version is the "leave-behind" for the RFx. The dynamic/interactive version is the vehicle for the Aug 24 readout to Mark Ennis — allowing the team to walk through each layer in sequence without overwhelming the audience with detail upfront.

### Foundation-First Messaging

Fernando restated and sharpened the foundation-first architecture philosophy. Key insight: the diagram must show that the data foundation is not an add-on or a future option — it is the prerequisite for everything else.

> "Without that data layer, none of this works. We need to make that box bigger, not the CRM box."

This shaped the framing decision: in the circular diagram, the "MuleSoft + Data Cloud + VA systems of record" cluster is the *large* center, and the Salesforce application layer is the *outer* ring — reversing the intuitive visual weight where people expect Salesforce to dominate.

### VA Health Connect as Reference Architecture

The team confirmed that VA Health Connect (Salesforce HealthCloud) is already connected to VA backend systems via MuleSoft. This is:
1. **Proof the architecture works** — MuleSoft can connect VA backend systems to Salesforce; we've done it at VA before
2. **The template for the CCC pattern** — every CCC application migration should follow the same integration pattern

This became a recurring argument in subsequent sessions: the answer to "why MuleSoft?" is "because that's how Health Connect works, and it works."

### Integration Complexity

Fernando emphasized that the integration layer is not simple plumbing — VA backend systems are mission-critical, complex, and fragmented. Connecting them requires API design, security review, FedRAMP compliance, and DTC approval for each new integration. This is the work that takes time and must happen before SIs arrive.

---

## Structured Findings

### Architecture

- Static and dynamic diagram versions both planned
- MuleSoft center confirmed; inner ring = VA systems of record; outer ring = Salesforce apps
- VA Health Connect connected via MuleSoft — this is the live proof of concept

### Key Messages Locked In

- "The foundation is the prerequisite, not an option"
- "We built this before at VA — Health Connect is the reference implementation"
- "Make the data box bigger, not the CRM box"

### Systems Confirmed This Session

- VA Health Connect — live, MuleSoft-connected (confirmed)
- MuleSoft AnyPoint — FedRAMP compliant, deployed, underutilized
- VA backend systems — mission-critical; each requires API design + DTC approval to connect

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Blind Spot | "Make the box bigger" — leadership doesn't see the data foundation as the critical path |
| Time Trap | Each new MuleSoft integration requires DTC approval — adds time to every API connection |
| Value Chain: Integrate | Score 2 confirmed — Health Connect integration is live and mature; rest is point-to-point or absent |
| Value Chain: Connect | Score 1 — Health Connect is the only real-time data connection; everything else is isolated |

---

## Action Items

- Build out diagram layers in detail (inner ring system identification)
- Prepare "foundation-first" narrative for executive slide deck
- Confirm list of VA backend systems for Phase 1 API integration
