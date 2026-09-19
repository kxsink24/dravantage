---
title: "SBA Executive Readout — Deliverable Brief"
status: under-review
tags: [dra, output, deck, executive-readout, brief]
created: 2026-08-26
---

# SBA Executive Readout — Deliverable Brief

## Output Type

11-slide HTML/SPWA executive readout generated from the SBA DRA Vault wiki. This is a test candidate for the output-generation and deck-rendering workflow, not a customer-published artifact.

## Audience

- SBA executive sponsor and technology leadership
- Program, data, security, and architecture leaders
- Salesforce account and DRA teams reviewing the assessment

The current evidence includes strong operational and research coverage but no direct interview with the CIO, CDO, or CFO. The readout therefore frames target-state decisions as validation items rather than settled commitments.

## Desired Decision

Align on the first foundation moves to validate: establish a governed small-business-owner identity spine, extend API-led integration across the highest-value program systems, and sequence trust controls before scaling proactive automation and agentic experiences.

## One-Sentence Thesis

SBA's OneSBA ambition is constrained less by a lack of data than by fragmented identity, disconnected program workflows, manual verification, and controls that are not consistently trusted; the highest-leverage path is to Unlock the data foundation, strengthen Trust in parallel, and Activate only where the evidence and guardrails support it.

## Proof Objects

1. **Unified identity gap:** SBA cannot reliably link the same borrower, business, or owner across 7A, disaster, microloan, and SBIC programs, limiting cross-program exposure and fraud visibility. [[../../02-data-barriers|Data Barriers]]
2. **Manual verification burden:** National Ombudsman sends 40–75 manual verification letters per week and staff sign 30–40 letters per day because case and lending context is not connected. [[../../02-data-barriers|Data Barriers]]
3. **Readiness score pattern:** Integration Health is 33/100 and AI Readiness is 37/100; all Unlock and Trust capabilities score 1, with Decide the only Activate capability scoring 2. [[../../04-data-value-chain|Data Value Chain]] [[../../08-appendix|Appendix]]
4. **External control pressure:** PIIA non-compliance, disaster documentation failures, and FISMA IAM regression make data trust and governance an operating requirement, not a later enhancement. [[../../01-strategic-alignment|Strategic Alignment]] [[../../04-data-value-chain|Data Value Chain]]
5. **Positive foundation signal:** MuleSoft Government Cloud is already deployed for selected integration and straight-through-processing use cases, so the path is coverage extension rather than a greenfield platform decision. [[../../04-data-value-chain|Data Value Chain]] [[../../05-current-state-architecture|Current State Architecture]]

## Deck Personality

- Executive-readable, evidence-led, and direct
- Mission and operating pressure first; Salesforce capabilities second
- Purpose-built for a federal data-strategy conversation
- Uses a small number of visual patterns instead of a long corporate appendix
- Treats the target architecture and roadmap as drafts requiring sponsor and system-owner validation

## Visual Direction

- **Primary slide archetypes:** `title-hero`, `mission-cards`, `evidence-scorecard`, `unified-profile`, `architecture-layers`, `roadmap-timeline`
- **Secondary slide archetypes:** `progress-cards`, `journey`, `recommendation-grid`, `section-divider`
- **Kinetic Authority elements to carry through:** deep navy/electric-blue hierarchy, cyan connection accents, bright blue-white tonal surfaces, restrained rounded containers, thin outlines, subtle data rails, and one dominant message per slide
- **Approved logos / imagery:** none for this test; use text and CSS-native diagrams only. Do not introduce the SBA logo, Salesforce mascot, sample-deck screenshots, or sample customer imagery without engagement-specific approval and asset review.

## Constraints

- Use only `assessments/SBA/` evidence for claims.
- `06-target-state-architecture.md` and `07-roadmap.md` remain draft; target-state and sequencing language must be marked as direction to validate.
- No sample-output customer content, PII, financial examples, customer logos, or inherited corporate appendix content.
- No external network dependencies in the rendered HTML.
- No architect-only notes on visible slides.
- Keep every slide within the 100vh/no-scroll invariant.

## Recommended Length

11 slides for a 15–20 minute executive discussion, with detailed architecture and system inventory reserved for a later appendix package.
