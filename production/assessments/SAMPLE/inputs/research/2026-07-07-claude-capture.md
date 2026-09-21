---
title: "Research Capture — Claude Workflow Deep Research (2026-07-07)"
type: research-capture
source_file: "[[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]"
created: 2026-07-08
status: in-progress
tags: [dra, research, claude, sba]
---

# Research Capture — Claude Workflow Deep Research

Append-only structured note distilling key DRA-relevant findings from `2026-07-07-SBA-Deep-Research-Claude-Workflow.md`. This is public-sources-only research (94 agents, 2M tokens, 25-claim adversarial verification). Treat as baseline corroboration — it confirms what is publicly visible but explicitly flags internal operational details and Salesforce footprint as *critical discovery gaps* that interviews now address.

---

## What This Research Confirmed (High Confidence, Adversarially Verified)

- **Mission:** SBA is the only cabinet-level federal agency fully dedicated to small business. Three core services: counseling, capital, contracting expertise. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]
- **Four service areas with measurable goals:** Access to Capital (7a/504/microloans), Entrepreneurial Development (1,800+ counseling locations), Government Contracting (23% prime contract goal), Advocacy. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]
- **Evidence-based performance framework:** PEER registry (37+ evaluation reports), annual Evidence Plans, FY 2026 Evidence Capacity Assessment — data-driven decision culture confirmed. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]
- **AI Inventory:** Publicly disclosed per EO 14179 + OMB M-25-21 (not the rescinded EO 14110). Last updated March 2026. Confirms compliance posture but not AI strategy maturity. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]
- **Existing data infrastructure:** data.sba.gov (42 datasets, CKAN platform with API access), datahub.certify.sba.gov (interactive contracting analytics, React), procurement scorecards back to 2007. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]
- **Agency Financial Report:** FY 2025 published February 2026 — performance data systematically collected. [[inputs/research/2026-07-07-SBA-Deep-Research-Claude-Workflow]]

---

## What This Research Could NOT Find (Now Addressed by Interviews + Gemini Research)

The Claude workflow explicitly flagged these as critical discovery gaps — all now answered by interviews:

| Gap | Status After Interviews |
|---|---|
| Salesforce footprint | Confirmed: MySBA on GovCloud Plus, iCAP in pilot, SVOG standalone instance, GCBD UCP (Python/Django not Salesforce) |
| Customer-facing pain points | Confirmed across 5 interviews (see 02-data-barriers.md) |
| Data silos between programs | Confirmed: 7A/disaster/SBIC/certifications all isolated; no unified borrower identity |
| Cloud/GovCloud requirements | Confirmed: FedRAMP GovCloud Plus on AWS GovCloud; MuleSoft Government Cloud FedRAMP Moderate |
| AI strategy beyond compliance | Confirmed: AI pause since March 2025; 7 exempted pilots only; straight-through processing is the active AI-adjacent initiative |

---

## Refuted Claims — Do Not Use in Deliverables

Per adversarial verification (≥2/3 votes required to confirm):

- DCOI IT Strategic Plan from 2016-2021 is stale — **do not cite**
- Kelly Loeffler assumed office February 20, 2025 (not January 20)
- EO 14110 was rescinded — AI inventory now cites EO 14179 + OMB M-25-21
- "FedEx 2,000% ROI" Salesforce marketing claim — not independently verified
- Data Quality Plan — actually a narrow DATA Act compliance document, not a comprehensive data quality framework
- Weekly lending reports on performance page return 404 errors

---

## KPIs Surfaced (Use in Strategic Alignment)

- 23% federal prime contract dollar goal to small businesses
- 1,800+ counseling locations
- Loan volume, default rates, guaranty fee utilization across programs
- PEER registry: 37+ program evaluations
