---
title: "SBA Data Strategy Readout — Deliverable Brief"
status: draft
tags: [dra, output, deck, brief]
created: 2026-07-08
---

# SBA Data Strategy Readout — Deliverable Brief

## Output Type

HTML/SPWA deck for an SBA DRA data strategy readout. This is a generated DRA output candidate, not yet customer-delivered.

## Audience

Primary audience:
- SBA executive sponsors and modernization leaders
- OCIO / architecture / data leaders
- Program leaders across lending, certifications, investment, disaster, and Ombudsman functions

Secondary audience:
- Salesforce account team and DRA practitioners reviewing the quality of generated deliverables
- Future `dra-generate-output` skill builders using SBA as a realistic fixture

## Desired Decision

Align SBA stakeholders around a sequenced data foundation roadmap: start with unified borrower / small-business-owner identity and API-led integration, then build trust controls, then scale automation, analytics, and agentic experiences.

## One-Sentence Thesis

SBA's OneSBA and Citizen 360 ambitions are blocked less by lack of program data than by fragmented identity, disconnected systems, manual verification loops, and uneven trust controls; the highest-leverage path is a governed data foundation that unifies borrower and business context across programs before scaling AI and automation.

## Proof Objects

1. **Unified identity gap:** SBA cannot link the same borrower / business across 7A, disaster, microloan, and SBIC programs, creating fraud, exposure, and service blind spots. [[02-data-barriers]] [[04-data-value-chain]]
2. **Manual verification burden:** National Ombudsman sends 40–75 manual verification letters per week because NOCMS cannot access lending systems. [[02-data-barriers]]
3. **Disconnected operating systems:** Lender Match does not connect to E-Tran; contracts data is not in UCP; SBIC and 7A systems are siloed; 1502 remains monthly batch. [[02-data-barriers]] [[05-current-state-architecture]]
4. **Data foundation score pattern:** Unlock capabilities score 1 across Connect, Integrate, Understand; AI Readiness is 37/100. [[04-data-value-chain]] [[08-appendix]]
5. **Positive modernization signals:** Straight-through processing for certifications proves SBA can orchestrate modern API-driven decisions when the foundation is available. [[04-data-value-chain]]

## Deck Personality

- Executive-readable, but evidence-backed.
- Mission and operational outcomes first; technology second.
- Salesforce-branded, DRAVantage-styled, no generic AI design tropes.
- Uses the SBA example decks as quality references, not as content to copy.

## Constraints

- Must remain scoped to `assessments/SBA/` evidence.
- No customer logo unless explicitly approved.
- No external network dependencies in the rendered deck.
- No internal architect notes on visible slides.
- Any unsupported metric must be softened or moved to an evidence note.
- Rendered slides must fit 100vh with no scroll.

## Recommended Length

14–16 slides plus optional appendix slides. Main narrative should be presentable in 20–30 minutes.
