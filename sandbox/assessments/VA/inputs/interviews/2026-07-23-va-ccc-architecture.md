---
title: "VA CCC Architecture — Jul 23 Working Session"
date: 2026-07-23
engagement: VA-CCC
interview_type: technical-working-session
attendees:
  va: [Fernando Gonzalez, Mathew Magesh]
  salesforce: [Werner Watschke, Brian Coughlin, Andy Cather, Monish Venu, Ben Chun]
status: analyzed
tags: [interview, architecture, disability-benefits, dynamics, dtc, license-uncertainty, expectation-management]
---

# VA CCC Architecture — Jul 23 Working Session

## Session Context

This session surfaced the disability benefits use case (Dynamics today, could migrate to Salesforce) and addressed the contract/license uncertainty that was creating confusion about what VA actually had access to implement. Fernando raised repeated concerns about avoiding "sales pitch" framing and setting realistic expectations with Mark Ennis.

---

## Key Themes

### Disability Benefits Use Case

Fernando introduced the disability benefits use case — one of VA's largest and most complex CRM workflows, currently running entirely in Dynamics:

> "Disability benefits is an interesting one. It's very complex and to be honest with you, it's actually being done in Dynamics today... this is something that can be done with Salesforce, right?"

Key details:
- Disability benefits is in Dynamics; health benefits is in Salesforce HealthCloud — these two lines have no data visibility into each other
- Disability exam management involves multiple contractors (Lidos and others) who manage exam scheduling, results, and follow-up with no unified view
- This use case is a Phase 2+ migration — the data foundation and identity resolution layer (Data Cloud 360 with veteran identity across Dynamics + Salesforce) must exist first

This is a high-value use case for the architecture: a veteran contacting the contact center about both health and disability issues currently requires the agent to work in two completely different systems. The unified veteran profile in Data Cloud is the prerequisite for a single-screen view.

### License / Contract Uncertainty

Brian Coughlin raised the ELA contract ambiguity:

> "The hard part is that's the easy part... the buying part is straightforward, but then like is DTC willing to release it and all the other things that go into actually getting your hands on it."

The new license agreement was signed in June 2026, but the team cannot confirm:
- Which specific features are actually available to implement
- What DTC has approved for deployment
- What the timeline is from "license exists" to "team can actually use it"

This uncertainty affected the architecture planning — the team was designing around capabilities that may or may not be provisioned when needed.

### "No Sales Pitch" Coaching from Fernando

Fernando provided explicit coaching on presentation tone for the Mark Ennis readout:

> "I don't want to provide false expectations... I want our feedback to be about realistic expectations."

He specifically flagged that the architecture presentation should not look like a sales pitch. Mark Ennis is a process-driven IT Program Lead — he will reject framing that sounds like vendor promotion. The architecture must be presented as a technical deliverable that serves the program, not as a Salesforce marketing deck.

This shaped the output requirement: the Aug 24 readout must be engineering-quality, honest about constraints, and anchored in the VA mission — not capability-centric.

### DTC as "Log Jam"

Fernando used the term "log jam" to describe DTC's effect on the program:

> "If DTC is not going to give out the access to these things or have the tool ready and have governance in place before we can give any access, this is not going to go anywhere."

DTC has blocked Agentforce provisioning for 6+ months. The team is designing an architecture around a capability they cannot access or validate. This creates a fundamental governance problem: the architecture document cannot be a validated design if the tools haven't been provisioned.

---

## Structured Findings

### Use Cases

- **Disability benefits:** Dynamics today; Salesforce migration is Phase 2+; requires Data Cloud veteran identity resolution first
- **Disability exam contractors (Lidos + others):** Isolated; no unified exam provider view; Phase 2+ integration via MuleSoft
- **Cross-line agent view:** Health (Health Connect) + Benefits (Dynamics) — unified view requires Data Cloud 360

### Contract Status (as of Jul 23)

- New ELA signed June 2026
- Specific product availability: unconfirmed
- DTC provisioning timeline: unknown
- Team risk: designing architecture around features they cannot test

### Presentation Guidance (from Fernando)

- No sales pitch; no false expectations
- Engineering-quality output; honest about constraints
- Anchor in VA mission, not Salesforce capabilities

---

## DRA Implications

| Dimension | Finding |
|---|---|
| Blind Spot | Disability in Dynamics, health in Salesforce — no cross-line visibility; unified veteran profile is the missing foundation |
| Trust Gap | "DTC log jam" — governance bottleneck is preventing validation of the architecture; leadership may not know this is happening |
| Trust Gap | Contract uncertainty — June 2026 ELA signed but what's actually deployable is unclear |
| Value Chain: Unify | Score 1 confirmed — Dynamics disability data + Salesforce health data are completely separate |
| Value Chain: Protect | Score 2 confirmed — FedRAMP compliance exists but DTC governance doesn't scale to program pace |

---

## Action Items

- Build disability benefits use case into target state architecture (Data Cloud 360 unified veteran profile as prerequisite)
- Flag DTC provisioning timeline as a critical-path dependency in the roadmap
- Ensure readout deck is engineering-quality, not marketing-quality — run past Fernando before finalization
