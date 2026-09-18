---
title: "VA CCC Architecture — Jul 16 Working Session"
date: 2026-07-16
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, fedramp, mulesoft-utilization, expectation-management, presentation-model]
---

# VA CCC Architecture — Jul 16 Working Session

## Session Context

Focus shifted to presentation strategy and stakeholder expectation management. Fernando raised several concerns about how the architecture story would land with leadership — particularly around AI expectations and MuleSoft's value proposition. Also surfaced: FedRAMP constraints on AI features.

---

## Key Themes

### 3-Pass Presentation Model

The team finalized the 3-pass structure for the Aug 24 readout presentation:
1. **Mission and outcomes** — start with what VA is trying to achieve for veterans; anchor everything in the mission
2. **Current state + barriers** — honest assessment of what's not working, with specificity (the three barriers framework)
3. **Target state + roadmap** — what the architecture achieves and how to get there, phased realistically

Fernando's guidance: don't lead with technology. Lead with the mission. Then explain why the current state isn't delivering on the mission. Then show how the architecture fixes that. This is the executive-facing sequence.

### The "Flip a Switch" Problem

Fernando surfaced a significant stakeholder communication risk: VA leadership at multiple levels believes AI capabilities will be available immediately — a "flip a switch" expectation. Fernando:

> "A lot of people think it's flip a switch. I'm going to guess that even way up high some people think you guys can just come in and flip a switch and that's not going to be the case, right?...because of governance, funding, political alignment...laws that we have to adhere to."

This is a Trust Gap manifestation: leaders' expectations about capability timelines are not calibrated to the actual FedRAMP + DTC + architecture prerequisites. Setting realistic expectations without deflating confidence is the communication challenge.

### MuleSoft "We Already Have It" Problem

Fernando raised a related stakeholder challenge: leadership's reaction to "MuleSoft is the foundation" will often be "we already have MuleSoft, so why are you making such a big deal about it?" Fernando:

> "If you say, 'Well, we already have MuleSoft.' Then they're going to be like, 'Well, then why are you making such a big deal about it?'"

The answer the team developed: having MuleSoft installed is not the same as using it as an enterprise integration strategy. VA has the tool but uses only ~10% of its potential. The message is not "buy MuleSoft" — it is "govern MuleSoft as the mandatory integration backbone and use it enterprise-wide."

This distinction — owned vs. governed vs. utilized — became a core framing point for the DRA findings.

### FedRAMP AI Constraints Confirmed

FedRAMP Moderate authorization gates the availability of specific Salesforce AI features on GovCloud:
- **Agentforce Voice** — not yet available on GovCloud; internal target Q1 FY27
- **Marketing Cloud SMS/mass messaging** — FedRAMP authorization pending
- **Einstein features** — some available, some not; checklist required before committing to timelines

This means the architecture's AI layer (Orchestrate capability) cannot go live on day one — regardless of how well the foundation is built. The phased roadmap must account for FedRAMP feature availability, not just technical readiness.

---

## Structured Findings

### Stakeholder Communication

- "Flip a switch" expectation documented; expectation management required in every presentation
- "We already have MuleSoft" objection anticipated; response prepared (utilization vs. governance vs. ownership)
- 3-pass presentation structure locked in for Aug 24

### FedRAMP Gate

- Agentforce Voice: NOT yet on GovCloud; Q1 FY27 target
- Marketing Cloud SMS: FedRAMP pending
- Commercial feature parity: 12–18 month lag behind GA features

### MuleSoft Utilization Framing

- ~10% utilization confirmed by Fernando
- "We have it" ≠ "We use it as an enterprise strategy"
- Key metric: how many VA systems of record have published APIs in the MuleSoft registry? (Currently: VA Health Connect only)

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Trust Gap | "Flip a switch" expectation = leadership trust gap on timelines; requires proactive expectation management |
| Trust Gap | MuleSoft "already have it" = governance trust gap; utilization vs. ownership framing needed |
| Value Chain: Protect | FedRAMP compliance is real but creates 12–18 month feature lag; Score 2 (compliance exists, not sufficient for AI) |
| Value Chain: Orchestrate | Agentforce Voice not GovCloud-available; Score 1 confirmed |
| Strategic Alignment | Compelling event is real (Aug 24 deadline) but AI delivery dates must be FedRAMP-qualified |

---

## Action Items

- Build FedRAMP feature availability matrix into roadmap
- Prepare stakeholder-facing "realistic timeline" framing — what you get in Phase 1, Phase 2, Phase 3
- Quantify MuleSoft utilization gap for architecture deck
