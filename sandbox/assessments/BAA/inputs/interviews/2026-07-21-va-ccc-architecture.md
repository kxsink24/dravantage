---
title: "VA CCC Architecture — Jul 21 Working Session"
date: 2026-07-21
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, roadmap, phased, orbital, fedramp, marketing-cloud]
---

# VA CCC Architecture — Jul 21 Working Session

## Session Context

Roadmap and phasing session. The team worked through the CCC deployment timeline, FedRAMP constraints on specific features, and the "Orbital" terminology for the phased roadmap. Fernando introduced the concept of "you don't get this day one" as the honest framing for the multi-year deployment sequence.

---

## Key Themes

### Phased Roadmap: 2027 / 2028 / Future

Fernando and the team structured the CCC architecture deployment into three phases:

**Phase 1 (2027 — CY calendar year)**
- MuleSoft as enterprise integration registry: published APIs for VA backend systems (starting with health and benefits)
- Data Cloud 360 operational: initial veteran identity resolution layer
- Service Cloud Voice deployed: contact center agent workspace live for National Contact Centers (25,000 users)
- Genesys CCaaS integrated via MuleSoft
- AI: limited to non-voice channels (Einstein where FedRAMP compliant); Agentforce Voice not yet available

**Phase 2 (2028)**
- Agentforce Voice deployed (pending Q1 FY27 GovCloud availability and DTC provisioning lead time)
- Expanded MuleSoft API registry covering additional VA backend systems
- Wider Data Cloud 360 adoption: benefits + disability benefit data unified
- Local contact centers beginning migration

**Future State (beyond 2028)**
- MCP-enabled AI agent discovery of MuleSoft APIs
- Full veteran identity unification across all VA systems of record
- Omnichannel AI assistance (voice, email, SMS, chat) fully operational

### "Orbital" Terminology

The team adopted "Orbital" as the internal shorthand for the phased deployment model. Each phase is an "orbit" — you're circling closer to the full target state, not trying to land on day one. This language was designed to resonate with Fernando's instinct for the phased, foundation-first approach.

### FedRAMP Marketing Cloud Gaps

The team surfaced specific Marketing Cloud FedRAMP limitations that affect the omnichannel strategy:
- **Email channel** — FedRAMP compliant; available now
- **SMS/mass messaging** — FedRAMP authorization pending; not available for deployment
- **Other channels** — status variable; must verify per channel before including in deployment plan

This means the omnichannel roadmap must be channel-specific: email can go in Phase 1; SMS cannot be committed until FedRAMP authorization is confirmed.

### "You Don't Get This Day One" Framing

Fernando provided the key phrase for expectation management in the executive presentation:

> "You don't get this on day one."

The context was explicit: when VA leadership asks "when will we have AI agents in our contact center?", the answer must be honest about the Phase 1 / Phase 2 / Phase 3 sequencing. Trying to oversell Day 1 AI capabilities — knowing DTC hasn't provisioned Agentforce, Agentforce Voice isn't on GovCloud, and the data foundation isn't built — creates a credibility problem when Day 1 arrives.

The architecture document's value is precisely that it makes this sequencing visible and defensible: Phase 1 is foundation work, and that's the right answer.

---

## Structured Findings

### Roadmap

| Phase | Year | Key Deliverables | AI Availability |
|---|---|---|---|
| Phase 1 | 2027 | MuleSoft API registry; Data Cloud 360 initial; Service Cloud Voice (NCCs); Genesys integration | Limited (non-voice Einstein only) |
| Phase 2 | 2028 | Agentforce Voice; expanded MuleSoft; local CC migration begins | Voice AI (pending FedRAMP Q1 FY27) |
| Future | 2029+ | MCP AI discovery; full veteran identity; omnichannel AI | Full |

### FedRAMP Channel Status

- Email: available now
- SMS: pending FedRAMP authorization — do not commit in Phase 1
- Agentforce Voice: not on GovCloud; internal target Q1 FY27

### Key Messaging

- "Orbital" = phased deployment model; each phase builds on the last
- "You don't get this day one" = honest expectation-setting; foundation is Phase 1
- Phase 1 success is measured by the foundation being operational, not by AI being live

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Trust Gap | "Day one" expectations require proactive management; the roadmap is the trust-building artifact |
| Value Chain: Protect | Marketing Cloud SMS FedRAMP gap must be reflected in roadmap; channel strategy is constrained |
| Value Chain: Orchestrate | Agentforce Voice Phase 2 at earliest; Score 1 current state confirmed |
| Strategic Alignment | Phase 1 = foundation; Aug 24 deliverable should be the Phase 1 architecture spec |

---

## Action Items

- Draft Phase 1 / Phase 2 / Future roadmap slide with explicit FedRAMP dates
- Build "you don't get this day one" framing into executive presentation opening
- Confirm Marketing Cloud FedRAMP channel status matrix with Salesforce product team
