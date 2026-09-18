---
title: "SBA Delivered Deck Examples"
source: "Salesforce / Google Slides"
document_date: 2026-06
date_added: 2026-07-08
status: in-progress
tags: [dra, inputs, customer-docs, deliverable-examples, generated-deliverables]
---

# SBA Delivered Deck Examples

> [!IMPORTANT]
> These are customer-specific, real engagement artifacts. Keep this inventory scoped to the SBA assessment folder. Use it as a regression/reference target for `dra-generate-output` design only when working on this engagement or when Bryan explicitly asks to use SBA as a skill-building fixture.

## Purpose

Bryan identified two already-delivered SBA decks that should serve two roles:

1. **DRAVantage asset tracking** — the decks are logged against the SBA DRA engagement as delivered artifacts.
2. **Generated-deliverable reference material** — the decks show the shape, sequencing, and quality bar the future `dra-generate-output` skill should aim for.

The original Google Slides remain the source of truth. Do not duplicate the full customer deck content into generic skill repositories unless explicitly approved.

## DRAVantage Asset Records

Engagement: `DRA-0002` / `SBA-OneSBA` / Salesforce Id `a05g7000005XKM9AAO`

| Deck | DRAVantage object | Record Id | Type | Status | Delivered date |
|---|---|---:|---|---|---|
| SBA - Executive Business Review - June 17, 2026 | `DRA_Deliverable__c` | `a03g700000MlHDdAAN` | Readout Deck | Delivered | 2026-06-17 |
| SBA - DRA Overview / Citizen 360 Data Strategy | `DRA_Deliverable__c` | `a03g700000MlHGrAAN` | Solution Design & Architecture | Delivered | 2026-06-18 |
| SBA - Executive Business Review - June 17, 2026 | `DRA_Drive_Resource__c` | `a04g7000001tKojAAE` | Drive file / Deliverables | — | — |
| SBA - DRA Overview | `DRA_Drive_Resource__c` | `a04g7000001O0RJAA0` | Drive file / Customer Strategy Docs / Primary | — | — |

## Source Decks

### 1. SBA - Executive Business Review - June 17, 2026

- Google Slides: [SBA - Executive Business Review - June 17, 2026](https://docs.google.com/presentation/d/1Zc9UDBaKMG1UYo-jzpCZiRvaRCtPUMX9S3_bRYAGi-o/edit?slide=id.g3eb900c5524_4_9749#slide=id.g3eb900c5524_4_9749)
- Google presentation Id: `1Zc9UDBaKMG1UYo-jzpCZiRvaRCtPUMX9S3_bRYAGi-o`
- Slide count: 38
- Anchor slide supplied by Bryan: `g3eb900c5524_4_9749` — Unified Citizen Profile example
- Role in deliverable design: executive readout / business review deck that blends DRA findings with progress, architecture, roadmap, outcomes, and account-team context.

Recommended section pattern to learn from:

| Approx. slides | Section | Why it matters for generated deliverables |
|---|---|---|
| 1–6 | Executive framing, agenda, key impact areas | Opens with business priorities before technical solution detail. |
| 7–9 | Prior/current architectural vision and progress | Shows before/after progression; useful for `current-state → target-state` narrative. |
| 11–12 | Progress results and license consumption | Connects roadmap to measurable adoption/progress. |
| 14–16 | Agentforce evolution, agentic enterprise architecture, DRA overview | Bridges product POV and DRA methodology. |
| 17–20 | Unified Citizen Profile and future journey | Demonstrates a concrete target-state experience instead of abstract architecture only. |
| 22–23 | Roadmap and KPIs | Converts the narrative into sequence and measurable business outcomes. |
| 25–38 | Appendix / supporting materials | Keeps detailed team, priority, license, and system context available without overloading the main story. |

### 2. SBA - DRA Overview / Citizen 360 Data Strategy

- Google Slides: [SBA - DRA Overview](https://docs.google.com/presentation/d/16f6fDrm5TdC2bxzamd8gFWRcwf5EaM9PEZWnNl1qK_c/edit?slide=id.g3ccf2565fc5_547_641#slide=id.g3ccf2565fc5_547_641)
- Google presentation Id: `16f6fDrm5TdC2bxzamd8gFWRcwf5EaM9PEZWnNl1qK_c`
- Slide count: 36
- Anchor slide supplied by Bryan: `g3ccf2565fc5_547_641` — Citizen 360 Data Strategy title slide
- Role in deliverable design: DRA methodology and data-strategy overview deck focused on findings, recommendations, target journeys, architecture diagrams, and appendix system inventory.

Recommended section pattern to learn from:

| Approx. slides | Section | Why it matters for generated deliverables |
|---|---|---|
| 1–2 | Title and agenda | Clear promise: DRA overview, recommendations, journeys, architecture, appendix. |
| 3–8 | DRA overview, vision, discovery, mission categories | Establishes the case for change and shows the customer-specific discovery basis. |
| 9–19 | Data strategy recommendations and architecture building blocks | Turns findings into a coherent target-state strategy. |
| 20–22 | Customer and employee journeys | Shows how data foundation investments change real experiences. |
| 23–26 | Architecture diagrams | Provides logical, current-state, and future-state architecture anchors. |
| 27–35 | Documented systems appendix | Preserves source/system evidence behind the recommendations. |
| 36 | Thank you | Simple close. |

## `dra-generate-output` Design Notes

Use these decks to pressure-test the future generator against the following capabilities:

- **Narrative spine:** Generated outputs should move from mission/business priorities → data barriers → target experience → architecture → roadmap → business outcomes.
- **Dual deliverable modes:** The generator likely needs at least two output styles:
  - **Executive readout / business review** — concise, outcome-heavy, progress-aware, and stakeholder-friendly.
  - **DRA data-strategy overview** — methodology-forward, evidence-backed, with detailed architecture and appendix support.
- **Wiki mapping:** The likely source mapping is:
  - [[01-strategic-alignment]] → vision, mission categories, key priorities, compelling event.
  - [[02-data-barriers]] → friction narrative and case for change.
  - [[03-personas]] + [[04-data-value-chain]] → customer/employee journeys and DRA methodology evidence.
  - [[05-current-state-architecture]] → system inventory and current-state diagrams.
  - [[06-target-state-architecture]] → unified profile, API-led integration, Data 360, Snowflake/zero-copy, target-state diagrams.
  - [[07-roadmap]] → crawl/walk/run plan, milestones, KPI progression.
  - [[08-appendix]] → scorecard, stakeholders, source/system inventory.
- **Evidence discipline:** Keep appendix/source inventory available, but do not make the executive flow feel like raw notes pasted into slides.
- **Customer isolation:** These decks are reference targets, not generic content. The generator must never leak SBA-specific systems, names, examples, metrics, or URLs into another customer deliverable.

## Retrieval Notes

- Google Workspace MCP successfully read presentation metadata and slide outlines for both decks on 2026-07-08.
- Direct PPTX export through the Google Drive API failed for both decks with `exportSizeLimitExceeded`; the Google Slides URLs remain the practical source of truth for now.
- If binary fixtures are needed later, export manually from Google Slides or split/export smaller sections.
