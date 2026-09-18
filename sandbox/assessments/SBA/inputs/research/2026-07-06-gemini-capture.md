---
title: "Research Capture — Gemini Deep Research (2026-07-06)"
type: research-capture
source_file: "[[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]"
created: 2026-07-08
status: in-progress
tags: [dra, research, gemini, sba]
---

# Research Capture — Gemini Deep Research

Append-only structured note distilling key DRA-relevant findings from `2026-07-06-SBA-Deep-Research-Gemini.md`. This is external/public research — treat as corroborating evidence for interview signals and as the primary source for strategic context, executive stakeholders, and technology stack details not covered in interviews.

---

## Strategic Context & Compelling Event

- **67% budget cut:** FY 2027 discretionary budget request is $329M — a 67% reduction from FY 2026 enacted level. S&E account cut to $260M. SCORE and Community Navigator Pilot eliminated. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **Administration shift:** Kelly Loeffler administration explicitly prioritizing fraud prevention, regulatory compliance, and administrative rightsizing — away from social-equity expansion. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **OneSBA forced by budget:** Budget cut *requires* automation of data architectures to compensate for workforce reduction — this is the core compelling event. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **8(a) crisis:** December 2025 order required 4,300 active 8(a) firms to submit 3 years of financials to root out shell companies. SBA suspended 1,091 firms (25%) in January 2026 because it could not process the volume before the compliance deadline. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **VetCert backlog cleared:** 2,700 VetCert applications had accumulated when staff were diverted to minority-preference certifications under previous administration. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## Executive Stakeholders (Sponsorship)

| Name | Title | Relevance |
|---|---|---|
| Kelly Loeffler | Administrator | Sets fraud/compliance priority direction |
| Hartley Caldwell | CIO + Chief AI Officer (CAIO), appointed May 2025 | Chairs BTIC (final authority over all tech investments); fintech/retail banking background; known to want straight-through processing |
| Douglas Robertson | Deputy CIO | Career track; CTO appointed Sept 2023 |
| Anna Maria Calcagno | CDO + Director, Office of Strategic Management & Enterprise Integrity | Evidence Act compliance, data policy |
| Nathan Davis | CFO + Chief Risk Officer | Financial risk oversight; Core Member of ICAM Governance Board |
| Mike Post | Acting CISO | Core Member of ICAM Governance Board |
| Thomas Kimsey | AA, Office of Capital Access | 7A/504/disaster loans program owner |
| Chris Stallings | AA, Office of Disaster Recovery and Resilience | Disaster program owner |
| Ryan Lambert | AA, Office of Government Contracting and Business Development | Certifications/contracting program owner |

> [!NOTE]
> Hartley Caldwell is confirmed business sponsor (Werner stated DRA is running for him). His fintech background and straight-through processing vision aligns directly with what GCBD interview confirmed is in flight. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## Technology Stack (Confirmed)

| System | Details |
|---|---|
| **MySBA / SBA Digital Platform** | Salesforce GovCloud Plus on isolated AWS GovCloud (US) |
| **MySBA Certifications** | Salesforce Public Sector Solutions (PSS); interfaces SAM.gov API + legacy Certify database |
| **MySBA Loan Portal** | Experience Cloud / Financial Services Cloud; backend is CAFS; at lending.sba.gov |
| **Small Business Search (SBS)** | Platform App Services; replaced legacy DSBS |
| **MuleSoft Government Cloud** | Primary iPaaS; FedRAMP Moderate ATO; connects Salesforce to Oracle + CAFS |
| **Oracle E-Business Suite** | Central ERP; $7.99M 5-year support contract awarded June 2026 to CSS Federal via GSA 8(a) STARS III |
| **CAFS (Capital Access Financial System)** | Core database of record for all loan portfolios; application ingestion, payment histories, document tracking |
| **Salesforce Data Cloud** | On AWS GovCloud; FedRAMP High baseline; available for identity resolution + zero-copy + federated data spaces |
| **UCP (Unified Certification Platform)** | Python/Django (confirmed by GCBD interview) — same as MySBA Certifications (public name) |
| **DLAP (Disaster Loan Application Portal)** | Disaster applications; CAFS backend |

---

## Legal / Structural Constraint: IRS Section 6103

- SBA is **legally blocked** from accessing IRS tax records directly without explicit per-transaction applicant consent (Section 6103(c) of Internal Revenue Code). [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Current system requires physical tax request forms (4506-T / 4506-C) with manual signature verification by both SBA and IRS personnel — creates constant backlog risk. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- During COVID EIDL ($360B, 3.7M loans), IRS backlogs became so severe SBA bypassed validation — subsequent audits found ~50% of EIDL files lacked verifiable tax documents. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **IRS MoU renewal deadline: October 31, 2027** — procurement window for digital consent capture. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- GAO report (GAO-26-107682) specifically recommends more efficient IRS data sharing for disaster loans. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## Compliance Failures (PIIA + FISMA)

### Payment Integrity Information Act (PIIA) — Non-Compliant
- KPMG audit, May 2026: SBA **non-compliant** with federal improper payment reporting mandates. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Failed to perform or document risk assessments for all applicable programs. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Failed to publish accurate root causes and tolerable error rates for Section 1112 payments and disaster loans. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Lacked adequate review procedures for PPP loan guaranty purchase samples. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **Root cause explicitly stated:** Lack of a unified, enterprise-wide database prevents identifying improper payments before disbursement. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

### FISMA — Below Baseline in 9 of 10 Domains
- FY 2025 FISMA evaluation (independent auditors, May 2026): SBA fell below OMB baseline for effective controls. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **Only Level 5 domain:** Incident Response.
- **Zero domains** at Level 4 (Managed and Measurable) — the minimum effective baseline.
- **Level 2 (regression):** Identity and Access Management, Risk and Asset Management, Configuration Management, Supply Chain Risk Management.
- ICAM Governance Board: chaired by CIO Caldwell; CFO Davis + CISO Post as Core Members; CDO Calcagno as Advisory. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## AI Posture

- **Agency-wide AI pause since March 2025** — all general AI deployments paused for compliance review. Still in effect as of mid-2026. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **First public AI inventory:** March 2026 (2 months late) — only 7 use cases, all early-stage. Down from 21 internal use cases in 2024, most of which were decommissioned/paused/never deployed. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- **Exempted pilots:**
  - Lending Fraud Detection Pilot (ML against lending datasets)
  - IT Operations / Cybersecurity Pilots (June, Sept, Dec 2025)
- **SBA Artificial Intelligence Utilization Act (H.R. 8881)** — pending legislation requiring annual congressional reporting on AI use; metadata standards, data lineage, explainability frameworks will be required. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- CIO Caldwell is also Chief AI Officer (CAIO) — single decision-maker for both IT and AI investments. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## Disaster Loan Loss Verification Failure

- OIG Desktop Loss Verification audit (FY 2025): reviewed 28 approved disaster assistance files. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- 12 of 28 files **completely lacked required damage photographs**. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Only 1 of 28 files contained contractor repair estimates, repair receipts, or insurance reports. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Loss verifiers' comments minimal and did not support conclusions. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]
- Root cause: 2023 transition to new loan processing management platform **weakened and eliminated critical internal controls**. [[inputs/research/2026-07-06-SBA-Deep-Research-Gemini]]

---

## Peer Benchmarks

| Agency | Data Integration | AI Maturity | Key Result |
|---|---|---|---|
| SSA | High — automated Death Master File sharing with Treasury | Highly mature | $109M improper payments prevented/recovered in 2024 |
| OPM | High — Federal HR 2.0 consolidation | High | Government-wide human capital unification |
| DHS | High — unclassified data-sharing with law enforcement | High — M-25-21 compliant inventory | AI systems in managed high-impact deployment |
| **SBA** | **Low** — manual IRS verification, document-dependent | **Developing** — AI pause; 7 use cases | **Non-compliant** PIIA; below FISMA baseline in 9/10 domains |

---

## Capability Signals from Research

| Capability | Signal | Direction |
|---|---|---|
| **Connect** | IRS legally blocked without consent workflow; CAFS + Oracle + SAM + FEMA all separate | Reinforces score 1 |
| **Integrate** | MuleSoft Government Cloud is *in place* with FedRAMP Moderate ATO — foundation exists | Score 1 but with a credible upgrade path; MuleSoft is the integration platform |
| **Understand** | No enterprise semantic layer evidenced; CIO digital strategy dated 2012 | Reinforces score 1 |
| **Unify** | PIIA non-compliance explicitly caused by lack of unified enterprise-wide database; COVID EIDL duplicate/fraud risk | Reinforces score 1; most critical gap per audit |
| **Validate** | PIIA non-compliance; disaster files missing photos + estimates; PPP review inadequate | Validate score should move to 1 (not 2) — current controls failing audits |
| **Protect** | FISMA IAM is Level 2 (regression); Octa rollout caused kerfuffle; ICAM Board active but controls weak | Reinforces score 1 |
| **Decide** | PEER registry + 42 datasets + Evidence Plans show analytics culture; but PIIA root cause is lack of unified DB | Score 2 with caveats; analytics exist but built on broken data foundation |
| **Orchestrate** | AI pause; exempted pilots only; no workflow orchestration evidenced at scale | Reinforces score 1 |
| **Act** | Lending Fraud Detection Pilot is in progress; 8(a) straight-through processing in flight | Score 1 but clear near-term pathway emerging |
