---
title: "SBA Data Strategy Readout — Presentation Outline"
status: draft
tags: [dra, output, deck, outline]
created: 2026-07-08
---

# SBA Data Strategy Readout — Presentation Outline

> [!IMPORTANT]
> Build gate: do not render `index.html` until Bryan approves this outline or provides edits. This file is the grilled story spine for the generated HTML/SPWA deck.

## Format

HTML/SPWA deck, Salesforce / DRAVantage branded, 14-slide main narrative with optional appendix expansion later.

## Audience

SBA executive, OCIO, program, architecture, and data leaders. Secondary audience is the Salesforce / DRAVantage team validating generated DRA output quality.

## Core Thesis

SBA's OneSBA and Citizen 360 ambitions are blocked less by lack of program data than by fragmented identity, disconnected systems, manual verification loops, and uneven trust controls. The highest-leverage path is a governed data foundation that unifies borrower and business context across programs before scaling AI and automation.

## Desired Outcome

The audience should leave aligned on three points:

1. The most urgent data problem is not a single application gap; it is the missing enterprise identity and integration spine.
2. The roadmap should start with Unlock — API-led integration, unified borrower identity, and high-value system connectivity — while designing Trust controls in parallel.
3. Activate use cases like proactive outreach, agentic service, straight-through processing, and fraud defense should scale only where the underlying profile and governance are ready.

## Proposed Slide Outline

### Slide 1 — Citizen 360 Data Strategy

**Job:** Title / framing slide.

Visible message:
- Small Business Administration
- Data Readiness Assessment readout
- Building the data foundation for OneSBA, Citizen 360, and trusted automation

Speaker intent:
- Position this as a data-strategy readout, not a generic product pitch.

### Slide 2 — The executive message

**Job:** State the thesis early.

Visible message:
- SBA has rich program data, but it is not yet organized around one trusted view of the borrower, business, and owner.
- That gap creates three barriers: data cannot be seen, arrives too late, or is not trusted enough to automate.
- The path forward is a sequenced data foundation: Unlock first, Trust in parallel, Activate with guardrails.

### Slide 3 — What the DRA synthesized

**Job:** Establish credibility and evidence base.

Visible message:
- Five interview inputs across certifications, lending, investment programs, National Ombudsman, and cross-program SMEs.
- System inventory across UCP, CAFS, ULP, E-Tran, PIM, GPTS, iCAP, SBIC Web, CSH, NOCMS, Eventbrite, SAM.gov, IRS, Census, FEMA, and other sources.
- DRA scorecard across Unlock, Trust, Activate.
- Two existing customer-facing deck patterns used as quality references.

### Slide 4 — The OneSBA data problem

**Job:** Convert the current state into a simple mental model.

Visible message:
- SBA does not lack data; SBA lacks a governed enterprise spine for identity, integration, and meaning.
- Program systems each know part of the relationship.
- Staff and leaders still assemble the full picture through manual lookup, spreadsheets, letters, and SME interpretation.

Suggested visual:
- Fragmented islands feeding an empty / incomplete unified profile silhouette.

### Slide 5 — Three barriers blocking the mission

**Job:** Introduce Blind Spot, Time Trap, Trust Gap.

Visible message:
- **Blind Spot — High:** the same borrower / business cannot be reliably seen across programs.
- **Time Trap — High:** staff recover context through slow, manual, after-the-fact work.
- **Trust Gap — Medium:** source authority, identity matching, and external data quality still require human judgment.

Suggested visual:
- Three-card barrier row with severity badges.

### Slide 6 — The highest-impact blind spot: unified borrower identity

**Job:** Make the abstract barrier concrete.

Visible message:
- 7A, disaster, microloan, and SBIC programs cannot reliably determine when they are dealing with the same borrower, business, or owner.
- That limits total exposure calculation, fraud detection, proactive service, and cross-program visibility.
- The identity spine is the foundation for Citizen 360.

Evidence anchors:
- No unified borrower identity across loan programs.
- SBIC and 7A systems siloed despite fraud risk and $54B SBIC portfolio exposure.

### Slide 7 — The operational cost: manual verification loops

**Job:** Show why this matters to workers and leaders.

Visible message:
- National Ombudsman sends 40–75 manual verification letters per week because NOCMS cannot access lending systems.
- Leaders sign 30–40 letters per day, with case volume rising sharply.
- Annual reviews, 1502 reporting, contract validation, and field prep repeat the same pattern: data exists, but not at the point of work.

Suggested visual:
- Manual loop diagram: request → letter/email → wait → verify → rekey → report.

### Slide 8 — Data foundation scorecard

**Job:** Quantify readiness without overcomplicating.

Visible message:
- Integration Health: **33 / 100**
- AI Readiness: **37 / 100**
- Unlock scores are all 1: Connect, Integrate, Understand.
- Positive signals exist, but they are pockets rather than enterprise foundation.

Suggested visual:
- Unlock / Trust / Activate score strip with nine capabilities and 1–3 scores.

### Slide 9 — Positive signal: straight-through processing proves the pattern

**Job:** Avoid doom; show SBA can modernize when data is connected.

Visible message:
- Certification straight-through processing shows what is possible when APIs, validation sources, and workflow orchestration come together.
- The initial pattern integrates VA, lien, incarceration, and program data for instant decisions in eligible cases.
- The opportunity is to extend that pattern across the highest-value workflows.

### Slide 10 — Target state: governed Citizen 360 profile

**Job:** Show the north star.

Visible message:
- One governed profile connects business, owner, borrower, certifications, loans, assistance, events, disaster interactions, complaints, contracts, and partner data.
- Systems remain systems of record; the profile becomes the system of context.
- Staff, analytics, and agents act from the same trusted relationship view.

Suggested visual:
- Unified profile at center with key rings / identifiers around it.

### Slide 11 — Target architecture: API-led, zero-copy-aware, trust-first

**Job:** Translate north star into architecture.

Visible message:
- **Experience / action layer:** SBA Hub, contact center, portals, staff workflows, Agentforce.
- **Integration layer:** MuleSoft / API-led access across program systems and external sources.
- **Data foundation:** Data 360 profile, identity resolution, governed activation, zero-copy where appropriate.
- **System of intelligence:** Snowflake / analytics / Tableau for historical, forensic, and portfolio intelligence.

Suggested visual:
- Four-layer architecture, not a product logo soup.

### Slide 12 — Recommended sequence: Crawl, Walk, Run

**Job:** Give the roadmap.

Visible message:
- **Crawl:** connect priority systems and define the unified borrower / SBO identity spine.
- **Walk:** establish source authority, lineage, governance, and validation for high-risk identifiers and data domains.
- **Run:** scale proactive service, fraud defense, automated decisions, and agentic workflows on governed data.

Suggested visual:
- Roadmap timeline with Unlock → Trust → Activate accents.

### Slide 13 — First moves that create measurable value

**Job:** Make the roadmap actionable.

Visible message:
- NOCMS ↔ lending integration to reduce 40–75 manual verification letters/week.
- Cross-program borrower identity for 7A / disaster / microloan / SBIC exposure and fraud detection.
- Contracts data into UCP to enable risk-based certification reviews.
- 1502 modernization from monthly batch toward more timely portfolio visibility.
- Lender Match ↔ E-Tran loop to measure conversion and program effectiveness.

### Slide 14 — Executive ask

**Job:** Close with a decision path.

Visible message:
- Align on unified borrower / SBO identity as the organizing principle.
- Prioritize 2–3 high-value integration use cases for the first phase.
- Assign data owners for source authority, identity matching, and governance.
- Use early wins to validate the foundation before scaling AI and automation.

## Optional Appendix Slides

These should be added only if the deck needs a deeper readout mode:

1. Full system inventory.
2. Full Data Value Chain scorecard.
3. Interview/source coverage.
4. Barrier evidence table.
5. Capability gap table.
6. Architecture detail / product capability map.

## Riskiest Claims To Grill

- The roadmap sequence is synthesized from existing evidence, but [[06-target-state-architecture]] and [[07-roadmap]] are not fully populated yet.
- Executive sponsor voice is indirect; if this becomes a final customer readout, sponsor language should be validated.
- Target architecture should be checked against the existing SBA DRA Overview deck and any Lucidchart architecture diagrams before final publish.

## Approval Question

Does this 14-slide spine feel like the right first HTML/SPWA deck to build, or should the deck be shorter and more executive, closer to 8–10 slides?
