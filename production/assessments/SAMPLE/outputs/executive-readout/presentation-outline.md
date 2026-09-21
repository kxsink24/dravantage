---
title: "SBA Executive Readout — Presentation Outline"
status: under-review
tags: [dra, output, deck, outline, executive-readout]
created: 2026-08-26
---

# SBA Executive Readout — Presentation Outline

> [!IMPORTANT]
> This is a test outline generated from the SBA Vault wiki using the sanitized Werner sample-output patterns. Target-state and roadmap language is intentionally framed as direction to validate because pages 06 and 07 remain draft.

## Format

HTML/SPWA executive readout, 11-slide main narrative, no customer logo or external imagery in this test. Visual system: DRAVantage Salesforce brand plus Kinetic Authority bridge.

## Audience

SBA executive sponsor and technology leadership, program/data/security leaders, and the Salesforce DRA team reviewing the output workflow.

## Core Thesis

SBA's OneSBA ambition is constrained less by a lack of data than by fragmented identity, disconnected program workflows, manual verification, and controls that are not consistently trusted. The highest-leverage path is to Unlock the data foundation, strengthen Trust in parallel, and Activate only where the evidence and guardrails support it.

## Slide outline

### Slide 1 — OneSBA data foundation

**Archetype:** `title-hero`

**Job:** Establish the customer, purpose, and why-now frame.

**Visible message:**
- Small Business Administration
- Executive data readiness readout
- Building the foundation for OneSBA, trusted automation, and a unified small-business-owner view
- August 2026 test render

**Suggested visual:** Deep-blue hero with cyan data rails, nodes, and a restrained geometric profile motif. No customer logo or mascot.

**Evidence anchors:** [[../../01-strategic-alignment|Strategic Alignment]]

**Speaker intent:** This is a DRA readout, not a product catalog.

### Slide 2 — The executive message

**Archetype:** `mission-cards`

**Job:** State the thesis early and tie it to mission pressure.

**Visible message:**
- SBA has rich program data, but it is not yet organized around one trusted view of the business and owner.
- The gap shows up as a Blind Spot, a Time Trap, and a Trust Gap.
- A 67% FY2027 discretionary budget reduction increases the need to automate without weakening controls.
- Recommended sequence: Unlock first, Trust in parallel, Activate with guardrails.

**Suggested visual:** Three horizontal cards for mission pressure, operating reality, and sequence, with cyan reserved for the recommended path.

**Evidence anchors:** [[../../01-strategic-alignment|Strategic Alignment]] [[../../02-data-barriers|Data Barriers]] [[../../04-data-value-chain|Data Value Chain]]

**Speaker intent:** Connect the strategy to external pressure before discussing platforms.

### Slide 3 — What the DRA synthesized

**Archetype:** `evidence-scorecard`

**Job:** Establish the evidence base and make the scoring transparent.

**Visible message:**
- Five interview inputs across certifications, lending, investment programs, National Ombudsman, and cross-program SMEs.
- Two research inputs strengthened strategic, compliance, and sponsorship context.
- Integration Health: **33 / 100**.
- AI Readiness: **37 / 100**.
- Most Unlock and Trust capabilities score 1; Decide is the only Activate capability scoring 2.

**Suggested visual:** Two large score tiles above a compact nine-capability strip; use blue-white tonal surfaces and thin outlines.

**Evidence anchors:** [[../../00-activity-log|Activity Log]] [[../../04-data-value-chain|Data Value Chain]] [[../../08-appendix|Appendix]]

**Speaker intent:** The scores are a directional synthesis, not a substitute for system-owner validation.

### Slide 4 — Three barriers block the mission

**Archetype:** `evidence-scorecard`

**Job:** Make the DRA diagnosis memorable.

**Visible message:**
- **Blind Spot — High:** program systems hold partial views that cannot be connected reliably.
- **Time Trap — High:** staff recover context through spreadsheets, letters, manual searches, and batch cycles.
- **Trust Gap — Medium:** source authority, matching, documentation, and control effectiveness require human judgment.
- The barriers reinforce each other: missing context creates manual work, and uncertain context limits automation.

**Suggested visual:** Three large cards with severity markers and a thin connector line showing Blind Spot → Time Trap → Trust Gap.

**Evidence anchors:** [[../../02-data-barriers|Data Barriers]] [[../../08-appendix|Appendix]]

**Speaker intent:** Use the barrier interaction to explain why isolated point solutions will underperform.

### Slide 5 — The highest-leverage gap is identity

**Archetype:** `unified-profile`

**Job:** Turn the abstract data problem into a clear architectural focal point.

**Visible message:**
- Today, 7A, disaster, microloan, SBIC, certifications, assistance, events, and complaints remain fragmented across program systems.
- SBA cannot reliably determine when the same borrower, business, or owner appears across programs.
- A governed SBO profile would connect identifiers, authoritative sources, program history, and consent-aware context.
- That profile is the prerequisite for cross-program exposure, fraud visibility, personalized service, and agent-ready decisions.

**Suggested visual:** Central “Governed SBO profile” circle with surrounding system chips; left side labeled “fragmented sources,” right side labeled “decisions and service.”

**Evidence anchors:** [[../../02-data-barriers|Data Barriers]] [[../../03-personas|Personas]] [[../../04-data-value-chain|Data Value Chain]]

**Speaker intent:** Preserve systems of record; the recommendation is an identity and context spine, not a claim that one system replaces every program system.

### Slide 6 — Manual loops consume capacity

**Archetype:** `progress-cards`

**Job:** Show the operational cost of the current state.

**Visible message:**
- **40–75** manual verification letters per week from National Ombudsman to SBA.
- **30–40** letters signed per day by National Ombudsman staff.
- **3,600–3,800** firms in an annual review process supported by manual workbook entry and RPA consolidation.
- **Monthly 1502** lender reporting creates a recurring batch cycle and data-latency problem.

**Suggested visual:** Four equal cards with one large signal, one short explanation, and a small “reported in assessment evidence” label.

**Evidence anchors:** [[../../02-data-barriers|Data Barriers]] [[../../03-personas|Personas]]

**Speaker intent:** These are workload and latency signals, not a calculated ROI claim.

### Slide 7 — Target-state direction to validate

**Archetype:** `architecture-layers`

**Job:** Introduce the target-state shape without overstating draft architecture as final.

**Visible message:**
- **System of action:** staff, agents, contact center, field, certification, lending, and disaster workflows.
- **Unified context:** governed SBO identity, source authority, consent, quality, and policy signals.
- **Integration backbone:** extend the existing MuleSoft Government Cloud foundation through reusable APIs and events.
- **Domain sources:** UCP, CAFS, ULP, E-Tran, PIM, GPTS, iCAP, NOCMS, SBIC replacement, Eventbrite, and permitted external data.

**Suggested visual:** Four horizontal layers with thin connectors, clear source-of-record boundaries, and a visible “direction to validate” badge.

**Evidence anchors:** [[../../01-strategic-alignment|Strategic Alignment]] [[../../04-data-value-chain|Data Value Chain]] [[../../05-current-state-architecture|Current State Architecture]] [[../../06-target-state-architecture|Target State Architecture]]

**Speaker intent:** Treat this as an architecture conversation starter; page 06 is still draft.

### Slide 8 — Six foundation moves to validate

**Archetype:** `recommendation-grid`

**Job:** Convert the diagnosis into a small, decision-ready set of moves.

**Visible message:**
1. **API-led backbone** — extend managed integration across the highest-value workflows.
2. **Unified SBO identity** — resolve person, business, owner, UEI, EIN, and program identifiers.
3. **Governed source authority** — define which source is trusted for each decision.
4. **Operational/analytical split** — align fast operational context with deeper historical analysis.
5. **Cross-program risk signals** — connect lending, investment, certification, and disaster context for fraud and exposure review.
6. **Workflow activation** — move validated insights into staff, contact center, outreach, and agent workflows.

**Suggested visual:** Six numbered cards in a 3×2 grid; each card has one action, one rationale, and a blue/cyan accent rail.

**Evidence anchors:** [[../../02-data-barriers|Data Barriers]] [[../../04-data-value-chain|Data Value Chain]] [[../../05-current-state-architecture|Current State Architecture]]

**Speaker intent:** These are proposed validation topics, not approved program commitments.

### Slide 9 — Illustrative unified-profile journey

**Archetype:** `journey`

**Job:** Show how the foundation changes an end-to-end experience.

**Visible message:**
- A small-business owner receives relevant outreach based on permitted program context.
- The owner responds through a preferred channel without repeating their history.
- A service or field employee sees the relevant profile, certification, loan, and assistance context.
- A guided workflow routes the next action to the right program and preserves context.
- Sensitive data and statutory consent boundaries remain explicit throughout the journey.

**Suggested visual:** Five ordered moments across owner, employee, profile, and workflow lanes. Label the journey “illustrative target state.”

**Evidence anchors:** [[../../03-personas|Personas]] [[../../05-current-state-architecture|Current State Architecture]]

**Speaker intent:** Use the journey to connect identity and integration work to human outcomes; do not present it as a currently deployed capability.

### Slide 10 — Draft Crawl / Walk / Run sequence

**Archetype:** `roadmap-timeline`

**Job:** Sequence the foundation work and expose what still needs validation.

**Visible message:**
- **Crawl — Unlock:** prioritize identity, API coverage, source boundaries, and one high-value manual loop.
- **Walk — Trust:** add quality, lineage, consent, IAM, documentation controls, and cross-program matching.
- **Run — Activate:** expand proactive outreach, fraud signals, decision support, and agentic workflows where controls are proven.
- Timing, owners, dependencies, and success measures require sponsor and system-owner confirmation.

**Suggested visual:** Three connected bands with a small “draft sequence” label; show Trust as a parallel workstream rather than a strictly delayed phase.

**Evidence anchors:** [[../../04-data-value-chain|Data Value Chain]] [[../../07-roadmap|Roadmap]]

**Speaker intent:** The roadmap page is draft; use this slide to invite sequencing decisions.

### Slide 11 — Decisions before the final blueprint

**Archetype:** `section-divider`

**Job:** End with concrete validation asks and a next step.

**Visible message:**
- Confirm the first workflow and the system owners who can validate its identity, integration, and control requirements.
- Confirm the target-state boundary between Salesforce/Data Cloud, MuleSoft, analytical platforms, and program systems of record.
- Confirm the roadmap window, including the IRS §6103 consent constraint and October 2027 MoU renewal.
- Next step: convert the validated direction into the target-state architecture and sponsor-approved Crawl / Walk / Run plan.

**Suggested visual:** Deep-blue closing panel with three decision cards and one cyan “next step” rail.

**Evidence anchors:** [[../../01-strategic-alignment|Strategic Alignment]] [[../../06-target-state-architecture|Target State Architecture]] [[../../07-roadmap|Roadmap]]

**Speaker intent:** The ask is validation and ownership, not immediate approval of every product or architectural detail.

## Risks to call out during review

- Pages 06 and 07 are still draft, so the architecture and roadmap must not be represented as final.
- Several metrics are assessment-reported and need validation before external delivery.
- The sample decks contain much denser diagrams and customer-specific material than this HTML output should reproduce.
- Customer logo, imagery, and sample-deck assets are intentionally excluded from this test render.

## Approval question

Does this 11-slide executive readout provide the right test of the new output-generation flow, or should the next iteration expand the architecture appendix and roadmap detail after pages 06 and 07 are completed?
