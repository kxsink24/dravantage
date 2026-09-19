---
title: "Personas — Hawaii State Department of Health (DOH)"
wiki_page: "03"
status: in-progress
tags: [dra, personas]
sources:
  - [[inputs/interviews/2026-08-10-team-sync]]
  - [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
last_analyzed: 2026-08-13
---

# Personas

**Maps to:** DRA Report Section 3 — Target State Experience

> [!WARNING]
> Persona observations are currently inferred from an internal team conversation and public research. They are not substitutes for direct business, IT, data, provider, or CBO interviews.

## Why Personas Matter

RHTP appears to cross policy, funding, data, clinical exchange, provider, and community-delivery boundaries. A viable DRA must distinguish the person accountable for an outcome from the person who owns data, operates a workflow, or approves funding. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

## Business Leader

**Likely roles:** Governor-facing leadership, SHPDA administrator, DOH/RHTP program leadership  
**Current hypothesis:** Wants visible rural-health and health-equity outcomes, rapid movement, and a story that can authorize action without requiring a wholesale architecture decision. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** A small, measurable first move tied to RHTP funding, rural access, provider readiness, or grants/compliance visibility.  
**Discovery questions:** What outcome would justify a pilot? Who can authorize it? What must be visible to the Governor or legislature?  
**Confidence:** Low; direct customer-leader interview needed.

## Business Worker

**Likely roles:** RHTP grant administrator, program coordinator, provider-readiness coordinator, CBO/mobile-health operator  
**Current hypothesis:** Faces manual application, award, milestone, reporting, referral, and provider-coordination work. The research briefing specifically proposes grants lifecycle visibility and lightweight CBO/provider workflows. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** One operational view of work, deadlines, evidence, exceptions, and next actions without duplicate spreadsheet or portal entry.  
**Discovery questions:** Which handoffs fail? How much time is spent reconciling reports? What must be reported to CMS or program leadership?  
**Confidence:** Low; interview grant and provider operations.

## IT Leader

**Likely roles:** ETS leadership, DOH technology leadership, Med-QUEST/HAP leadership  
**Current hypothesis:** Must balance state standards, security, integration, sustainment, vendor accountability, and a federated department model. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** A bounded architecture with clear ownership, integration boundaries, security controls, and a credible path to sustainment.  
**Discovery questions:** Who approves architecture? Which state standards and ERP/API patterns are mandatory? What can be delivered without reopening IDAP scope?  
**Confidence:** Low; direct ETS/DOH/HAP interviews needed.

## IT Worker

**Likely roles:** Integration engineers, platform administrators, vendor delivery teams, HHIE technical operators  
**Current hypothesis:** Works across Health eNet, claims/APCD/IDAP, ERP, referral, analytics, and other departmental systems, with potential duplication and competing delivery tools. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** Stable interfaces, clear system-of-record boundaries, observable handoffs, and fewer manual reconciliations.  
**Discovery questions:** Which interfaces are authoritative? Where do data definitions or tickets get stuck? What integration can be tested in a bounded pilot?  
**Confidence:** Low; no direct technical interview yet.

## Data Leader

**Likely roles:** HAP/IDAP data governance, SHPDA data-policy leadership, HHIE data quality, privacy/security authorities  
**Current hypothesis:** Focuses on data ownership, identity, quality, lineage, privacy, consent, MARS-E/HIPAA controls, and cross-vendor stewardship. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** Explicit data domains, stewardship, permitted use, access policy, definitions, and evidence that sensitive data remains governed.  
**Discovery questions:** Who owns each data domain? Which quality rules and definitions are authoritative? How are access, consent, lineage, and exceptions approved?  
**Confidence:** Medium-low; the public briefing and internal sync converge on governance concerns, but customer validation is required.

## Data Worker

**Likely roles:** Data engineers, analysts, data stewards, researchers, reporting/compliance staff  
**Current hypothesis:** May spend time preparing data, reconciling definitions, handling manual entry/scanning, waiting on business rules, and producing compliance or analytics outputs. [[inputs/interviews/2026-08-10-team-sync]] [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]

**Desired outcome:** Reusable definitions, trusted source data, manageable quality workflows, and faster path from data to a decision or report.  
**Discovery questions:** Which definitions are disputed? Which reports require manual work? How long does an access or data-quality issue take to resolve?  
**Confidence:** Low; no direct data-worker interview yet.

## Persona Gaps

The DRA currently lacks direct evidence from:

- DOH/SHPDA grant and compliance operators
- Med-QUEST HAP/IDAP data and privacy owners
- ETS architecture and security
- HHIE technical/data-quality leadership
- Rural providers, FQHCs, hospitals, CBOs, and MSO/CIN operators
- The accountable funding decision-maker for the first RHTP pilot

These gaps prevent reliable persona scoring and should shape the next interview sequence: business/program leaders first, then data/IT owners, then provider/CBO operators. [[inputs/customer-docs/2026-08-13-hawaii-rhtp-executive-briefing]]
