---
title: "Data Value Chain — Small Business Administration"
wiki_page: "04"
status: in-progress
tags: [dra, data-value-chain, scoring, unlock, trust, activate]
sources: ["[[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]", "[[inputs/interviews/2026-07-06-national-ombudsman-natalie]]", "[[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]", "[[inputs/interviews/2026-05-XX-morris]]", "[[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]", "[[inputs/research/2026-07-06-gemini-capture]]"]
last_analyzed: 2026-07-08
---

# Data Value Chain

> [!NOTE]
> Scores are based on five interviews plus two deep research documents (Run 3, 2026-07-08). Key change: Validate lowered from 2 to 1 based on two external audit findings that override the interview-based assessment. MuleSoft Government Cloud confirmed as existing integration platform (Integrate). FISMA evidence added to Protect (confidence upgraded to High). AI Readiness Score is numerically unchanged at ~37 but is now more defensible.

**Maps to:** DRA Report Appendix (Data Assessment Rating scorecard) + Solution Design framing  
**Drives output:** [[05-current-state-architecture]], [[06-target-state-architecture]], [[07-roadmap]], executive scorecard slide

---

## Scoring Rubric

| Score | Meaning |
|---|---|
| 1 | Siloed / manual / heroic — current state for most legacy environments |
| 2 | Some modernization, partial coverage, but inconsistent |
| 3 | Unified / automated / agentic — the target state |
| ? | Insufficient evidence to score — note what additional input is needed |

The "golden thread" logic: **Activate cannot work without Trust, and Trust cannot work without Unlock.** A customer with Activate scores of 2–3 but Unlock scores of 1 has built AI on a broken foundation — the GIGO risk zone. The roadmap must address capabilities in order.

---

## UNLOCK Pillar

### Connect

**Score:** 1  
**Confidence:** High

*What it measures: Whether data can flow across systems in real time or near-real time — streaming, batch, Zero Copy. Score 1 = manual exports, FTP, or no integration. Score 3 = API-led, event-driven, Zero Copy in place.*

**Evidence:**

- Size determination and COC data are held in SharePoint folders rather than connected to the SBO profile or certification systems. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Eventbrite attendance is not connected back to MySBA Customers, and 7J / Empower to Grow participation is not collectively visible. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- DART manually combines ULP, historical DCMS, FEMA, IRS, Census, ArcGIS, Tableau, and field data for disaster analytics. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- External data sources such as IRS, SAM.gov, Census, and FEMA are valuable but access is constrained/manual. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- NOCMS has no integration with SBA lending systems (ULP/CAFS); National Ombudsman cannot verify loan status, charge-off dates, or Treasury referrals without manual outreach. "Right now, we have no way of talking to the lending part of this organization." [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **Loan systems siloed by type:** Different loan types (7A guarantees, disaster loans, microloans, SBIC) processed in separate systems with different workflows. E-Tran is the only common touchpoint. "Disaster loans and guarantee loans... the common area is E-Tran... disaster loans life cycle is a lot different." [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **SBIC and 7A systems don't communicate:** Tom Morris states "many of the systems we do have are siloed. They don't talk to each other." Cannot flag entities that appear in both programs despite fraud risk. [[inputs/interviews/2026-05-XX-morris]]
- **Lender Match not connected to E-Tran:** Lender Match helps borrowers find lenders but doesn't tie back to loan application process. "It doesn't mandate that you go back into SBA and get a guarantee." No closed-loop tracking of match-to-guarantee conversion. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Contracts data not connected to UCP:** Certification staff cannot see contract performance. Hillary: "It's not the ideal time to start trying to get from them an API" for GSA contract data. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

Core systems and external datasets feed a governed SBO profile and analytical layer through reusable connectors, APIs, or zero-copy/federated access: UCP, CAFS, ULP, E-Tran, PIM, GPTS, iCAP, SBIC Web (replacement), CSH, SVOG, NOCMS, Eventbrite, SAM.gov, IRS, Census, FEMA, USAspending, and partner/resource data all become available at the point of need. Cross-program borrower identity enables 7A/disaster/microloan/SBIC visibility.

### Integrate

**Score:** 1  
**Confidence:** High

*What it measures: Whether the organization has a managed integration layer — APIs, app connectors, legacy system bridges. Score 1 = point-to-point brittle connections or no integration at all. Score 3 = governed API strategy, standard connectors, legacy systems wrapped with modern interfaces.*

**Evidence:**

- The 8(a) Annual Review Workbook starts blank each time and cannot API-connect to source data. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- RPA consolidates annual review workbooks after manual data entry, indicating automation is compensating for missing system integration. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Customer Service Hub routes inquiries to program systems, but the transcript does not confirm a resolved-loop integration back into CSH. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster offices duplicate information gathering across divisions because there is not a shared integrated data layer. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- NOCMS letter generation and case management are manual; no workflow orchestration or API integration with lending systems. National Ombudsman sends 40-75 manual verification letters per week that could be eliminated with system-to-system integration. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **1502 process is manual file upload:** Banks must manually upload monthly transaction summaries to E-Tran. Monthly batch creates 30-day lag. "Every month, banks send us feedback." [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Underwriting centers use async callbacks:** Delegated vs non-delegated underwriting done in separate processing centers. Results sent back to E-Tran via API callbacks with no real-time visibility into underwriting queue. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **SBIC Web has no modern integration:** Legacy system requires "100s of thousands of dollars a year to patch" because it's too old for modern service providers. Salesforce replacement in progress. [[inputs/interviews/2026-05-XX-morris]]
- **Straight-through processing integrates third-party APIs but limited scope:** GCBD launching straight-through processing integrates VA API, federal liens, incarceration, ULP/Alecourt/MuleSoft APIs. MuleSoft mentioned but limited to narrow use case initially (sole proprietor/single-owner LLC only). [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

A governed API-led integration backbone connects program systems and data domains so workflows like annual reviews, disaster readiness, field-office prep, event attendance, assistance history, National Ombudsman case management, 1502 reporting, underwriting, and portfolio monitoring can read/write through managed interfaces rather than spreadsheets, email, SharePoint, manual lookups, and batch file uploads. Legacy systems wrapped with modern APIs.

> [!NOTE]
> **MuleSoft Government Cloud is already in place.** Research confirms MuleSoft Government Cloud holds a FedRAMP Moderate ATO and is already the integration engine for iCAP (lender experience) and the straight-through processing automation. Score stays 1 because coverage is limited to narrow use cases — but the upgrade path is **not a greenfield build**. The integration platform exists; the work is extending its coverage. This is a significant positive signal for roadmap velocity. [[inputs/research/2026-07-06-gemini-capture]]

### Understand

**Score:** 1  
**Confidence:** High

*What it measures: Whether the organization understands what its data means — semantic models, business glossaries, documented data ownership. Score 1 = data meaning lives in individual analysts' heads. Score 3 = governed semantic layer, shared definitions, data literacy across teams.*

**Evidence:**

- The certification taxonomy requires SME explanation: UCP, SAM.gov self-certification, 8(a), SDB, VetCert, HUBZone, WOSB, generic small business, and related programs overlap in ways that are not obvious from system data alone. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Thomas Rogers says NAICS codes are too broad for understanding business capability and market research. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- External directories may have more granular business descriptions, but that data is not linked to SBA records or a shared semantic model. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman cannot aggregate complaint data by regulation or agency: "We have no way to aggregate the data around what regulations are... coming in more than once." This prevents pattern detection and limits the ability to provide systemic policy feedback. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **ULP branding confusion:** Multiple names for same systems (ULP, "my SBA", lending.sba.gov). "ULP and my SBA were for long time used synonymously... we are trying to make sure ULP is just disaster loans." Internal confusion about system scope and capabilities. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Certification types well-defined but complex ownership not codable yet:** Hillary describes straight-through processing business logic as clear enough to automate 50% of decisions, but complex ownership structures still require manual review. Business rules understood and codable for simple cases. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

SBA has a shared semantic model for business, owner, program, assistance, certification, award, event, disaster, lender, partner, federal-agency, complaint, regulation, enforcement, loan type, borrower identity, ownership structure, and system concepts so staff and agents can reason across systems without depending on individual SME memory. Clear glossary eliminates ULP/my SBA-style naming confusion.

---

## TRUST Pillar

### Unify

**Score:** 1  
**Confidence:** High

*What it measures: Whether the organization can resolve a single identity across systems — master data management, identity resolution, unified customer/constituent/student profile. Score 1 = the same person has five different records in five systems. Score 3 = MDM or identity resolution in place, unified profile available.*

**Evidence:**

- Multiple identifiers are required to connect business records: UEI, EIN, owners, subsidiaries, certifications, contracts, loans, program participation, and event attendees. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Event attendees may not yet have a business, making person-to-organization profile modeling difficult in MySBA Customers. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Size/COC, certifications, loans, disaster, events, 7J assistance, grants, and contract signals are not unified into one business profile. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **No cross-program borrower identity resolution:** "The same person as a borrower is in guarantee process... or disaster process... or micro loan... We don't have that visibility into, you know, is this the same person or not? Is the same business or not?" Cannot link borrowers across 7A, disaster, microloan, SBIC programs. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Fraud detection siloed by program:** "Anytime fraud is involved, I would like to know if there was fraud in a 7A deal, and that deal is involved with any of our SBICs and vice versa." Cannot detect patterns of fraudulent actors operating across programs. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **UEI and EIN both needed for contract matching:** Alisa Sheard notes both identifiers required because subsidiaries and ownership structures complicate matching. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

**What score 3 looks like for SBA:**

A unified SBO profile resolves person, business, owner, entity, UEI, EIN, subsidiary, certification, loan (across all types: 7A, disaster, microloan, SBIC), event, assistance, disaster, partner, and federal-contract identifiers into a governed profile usable by staff, analytics, and agents. Entity resolution enables fraud detection and total exposure calculation across all programs.

### Validate

**Score:** 1 *(lowered from 2 — see rationale below)*
**Confidence:** High

*What it measures: Whether the organization actively manages data quality — discovery, cataloging, lineage, quality monitoring. Score 1 = no formal data quality program, issues discovered reactively. Score 3 = automated quality monitoring, documented lineage, data catalog actively maintained.*

**Evidence:**

- UCP is explicitly identified as the system of record for certifications, which indicates some source authority is defined. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- SAM.gov self-certification creates a "trust but verify" situation, and Small Business Search is a reference tool rather than a system of record. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Prior certification processes used contract data to identify compliance concerns and continuing eligibility issues, but this capability may not have carried into UCP. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Duplicate disaster data collection across teams suggests inconsistent deduplication / quality controls in operational reporting. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman's Power BI reports show different case counts than NOCMS (499 vs 521), indicating ETL or data-quality issues: "The system will say 499. The power BI say 521. What's happening here?" [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **1502 process achieves 99.9% compliance:** "Previously some banks were not compliant and not sending data monthly. Now 99.9% compliance." Validation process exists for lender reporting, though monthly lag reduces data freshness. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Straight-through processing validates third-party data:** Instant automated validation via VA API, federal liens, incarceration status for veteran certifications launching June 9. Demonstrates capability to integrate and validate external data sources. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **GSA data quality issues:** "GSA is probably the worst at government to government internal customer service." FPDS-NG constant changes. USA Spending "not sufficient... a lot of work for not much." External partner data quality undermines validation efforts. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **PIIA non-compliance — controls not operating (external audit finding, May 2026):** KPMG audit found SBA: (a) failed to perform or document risk assessments for all applicable programs; (b) failed to publish accurate root causes and tolerable error rates for Section 1112 payments and disaster loans; (c) lacked adequate review procedures for PPP loan guaranty purchase samples. These are not aspirational gaps — they are documented failures in the Validate controls that federal law requires. [[inputs/research/2026-07-06-gemini-capture]]
- **Disaster OIG audit — systematic documentation failure (external audit finding, FY 2025):** Review of 28 approved disaster assistance files found 12 of 28 completely lacked required damage photographs, and only 1 of 28 contained contractor repair estimates, repair receipts, or insurance reports. Loss verifiers' comments "minimal and did not support conclusions." Root cause: 2023 platform transition eliminated critical internal controls. [[inputs/research/2026-07-06-gemini-capture]]

**Rationale for score 1 (lowered from 2):**

Interview-based evidence supported score 2 ("some modernization with partial coverage"): 1502 achieves 99.9% compliance, straight-through processing validates external APIs, UCP is authoritative for certifications. However, two independent external audit findings override this assessment:

1. KPMG PIIA audit (May 2026): SBA is non-compliant with federal improper payment reporting mandates. Failed risk assessments, inaccurate root-cause reporting, and inadequate review procedures are Validate failures at the enterprise level — not gaps in a partially working system.
2. OIG disaster audit (FY 2025): 43% of reviewed files lacked required documentation; only 4% had repair estimates. This is not a partial failure — it is a systematic absence of the documentation that validates disaster loan eligibility.

"Some modernization with partial coverage" (score 2) is not defensible when auditors are finding systematic control failures. Score 1 ("issues discovered reactively") is now supported by ≥3 independent sources. [[inputs/research/2026-07-06-gemini-capture]]

**What score 3 looks like for SBA:**

Source authority rules, lineage, quality checks, and validation workflows are documented and automated across UCP, SAM.gov, SBS, CAFS, ULP, E-Tran, PIM, CSH, NOCMS, event data, third-party APIs (VA, liens, incarceration), and external datasets so staff know which source to trust for each decision. PIIA risk assessments are automated and auditable. Disaster loan documentation requirements are enforced by system controls before disbursement, not discovered by OIG audit after the fact. ETL discrepancies are detected and resolved automatically.

### Protect

**Score:** 1  
**Confidence:** High *(upgraded from Medium — FISMA audit adds third independent source)*

*What it measures: Whether the organization has data governance, privacy compliance, and policy enforcement in place. Score 1 = governance exists on paper but not in practice, or compliance is handled manually. Score 3 = automated policy enforcement, privacy by design, documented data governance with accountability.*

**Evidence:**

- The transcript confirms sensitive data exists in the business-owner context: tax records, owner/family relationships, IRS data, disaster data, loan information, and documentation in SharePoint. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Timothy Baughman notes IRS data access is limited and may require an MOU or data-sharing mechanism. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman complaint data is protected under IG Act, creating a one-way data flow (can receive data, cannot share). This suggests governance controls exist, but may complicate reciprocal integration patterns. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **Octa identity management recently added:** "Octa SSO verification caused quite the kerfuffle" during rollout. Identity verification recognized as critical but implementation was painful, suggesting governance controls are being added reactively. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **CLS being replaced by Okta:** Homegrown identity/access management (CLS) is being replaced by commercial IdAM (Okta), indicating recognition of need for modern access controls. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **FISMA IAM regression to Level 2 (external audit finding, FY 2025):** Independent auditors found SBA below OMB baseline for effective controls in 9 of 10 FISMA domains. Identity and Access Management regressed to Level 2 — the only Level 5 domain is Incident Response. Risk and Asset Management, Configuration Management, and Supply Chain Risk Management also at Level 2. ICAM Governance Board is active (chaired by CIO Caldwell; CFO Davis + CISO Post as Core Members; CDO Calcagno Advisory) but controls are operating below the minimum managed/measurable level. [[inputs/research/2026-07-06-gemini-capture]]
- **IRS §6103 as a structural governance constraint:** SBA cannot access tax records without explicit per-transaction applicant consent. The physical 4506-T/4506-C workflow is legally mandated. This is not a governance failure but a legal boundary that shapes the entire identity/data-sharing protection model. [[inputs/research/2026-07-06-gemini-capture]]

**Rationale for score 1:**

Evidence shows governance and access controls are recognized as important (IG Act protections, IRS MOU requirements, Octa/Okta adoption, ICAM Governance Board), but implementations are below minimum effective baseline (FISMA Level 2 IAM) rather than mature. SharePoint-based document storage for sensitive size/COC data indicates access controls are not consistently enforced at the data layer. FISMA audit provides independent external confirmation of score 1 — governance structures exist on paper but are not operating at the level auditors require. [[inputs/research/2026-07-06-gemini-capture]]

**What score 3 looks like for SBA:**

Sensitive business, owner, tax, disaster, loan, complaint, and federal partner data is governed by role-based access, purpose-based policies, lineage, auditability, and agent-safe enforcement across operational and analytical layers. IAM at FISMA Level 4+ (Managed and Measurable). IG Act and other statutory protections are enforced through system-level controls. Identity management is modern and seamless. Data access is logged and auditable. IRS §6103 digital consent workflow eliminates physical 4506-T/4506-C process.

---

## ACTIVATE Pillar

### Decide

**Score:** 2  
**Confidence:** High

*What it measures: Whether the organization uses data to make decisions — analytics, predictions, segmentation, ML. Score 1 = reports generated manually, decisions made by intuition. Score 3 = self-service analytics, predictive models in production, data-driven decision-making embedded in workflows.*

**Evidence:**

- DART uses ArcGIS/Esri, Tableau, historical disaster data, FEMA, Census, IRS, and field inputs to build projections and reporting. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Annual review workbooks calculate ratios and recommendations for 8(a) firms and consolidate impact statistics such as revenue generated and jobs created. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- USAspending, Census, Small Business Search, and Secretary of State databases are used manually for analysis and field-prep context. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman tracks case volume and agency response patterns but cannot aggregate by regulation or complaint type, limiting pattern detection and policy feedback capability. Power BI provides some reporting, but data-quality issues undermine trust. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **LLMS portfolio risk analysis:** Loan and Lender Management System is Tableau-based and provides analyst-driven portfolio risk analysis and reporting. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Lender Match exists but no conversion metrics:** Lender Match tool recently modernized but cannot measure program effectiveness or ROI because no closed-loop tracking to E-Tran guarantee data. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **SBIC portfolio monitoring is manual:** Tom Morris describes dream state of automated monitoring: "We dream of having systems that can do this electronically that says, hey, the last three quarters, they're losing money." Desired analytics exist as aspiration, not reality. [[inputs/interviews/2026-05-XX-morris]]
- **Straight-through processing is instant automated decision-making:** Launching June 9 for veteran certifications. "I hit submit... instant decision on the screen." Instant decisions for 50% of cases based on API-validated data. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

Analytics and decision signals are embedded in staff workflows: disaster impact projections, 8(a) recommendations, market research, program-integrity flags, event targeting, assistance recommendations, complaint pattern detection, SBIC portfolio health alerts, Lender Match conversion optimization, and automated certification decisions (expanded beyond 50% of cases) are calculated from governed data and surfaced directly in the tools staff use.

### Orchestrate

**Score:** 1  
**Confidence:** High

*What it measures: Whether the organization can automate workflows triggered by data — events, agents, process automation. Score 1 = manual handoffs, no event-driven automation. Score 3 = agentic workflows, data-triggered orchestration, AI agents operating on live data.*

**Evidence:**

- Annual review processing is manual workbook entry plus RPA consolidation, not workflow orchestration from source systems. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- CSH routes inquiries to program teams, but the transcript does not confirm an automated closed-loop resolution flow. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster teams want proactive awareness notices and cross-program data access, but current data access remains manual/stovepiped. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman case management is entirely manual: 30-40 letters signed per day, 40-75 weekly verification letters to SBA, 30-day agency response tracking with no automated escalation or workflow intelligence. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **Underwriting workflow has no real-time visibility:** E-Tran must wait for async callbacks from underwriting centers. No real-time visibility into underwriting queue or status. Borrowers call asking for status; agents cannot see underwriting progress. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Payment workflow breaks when loan status changes:** Borrowers make payments through ULP for active loans (APIs to Treasury). Purchased/defaulted loans in GPTS have separate payment workflow. When loan moves from active to purchased, payment system changes. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Straight-through processing workflow orchestrates multiple data sources:** Launching June 9 for veteran certifications. Orchestrates VA API, federal liens, incarceration, ULP/Alecourt/MuleSoft APIs for instant decision. Modern orchestration capability emerging, but limited to narrow use case initially. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

Data changes and external events trigger orchestrated workflows: disaster-risk signals prompt proactive outreach, event attendance updates profiles, annual review data pre-populates, CSH interactions route and close the loop, National Ombudsman cases auto-verify loan status and escalate overdue responses, underwriting status is visible in real-time, payment workflows are seamless across loan status changes, and agents can safely coordinate across systems. Straight-through processing pattern expanded to other certification types and business processes.

### Act

**Score:** 1  
**Confidence:** High

*What it measures: Whether insights reach the people and systems that need to act on them — Customer 360, agent-assisted work, personalization at scale. Score 1 = insights stay in dashboards, don't reach frontline workers. Score 3 = agents, recommendations, and insights embedded in the tools frontline workers already use.*

**Evidence:**

- Staff want to use data to prepare for visits, understand business history, recommend training, support annual reviews, and prepare disaster outreach, but they still search and assemble context manually. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Eventbrite attendance and 7J assistance participation do not flow into the business profile, limiting personalized follow-up. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster awareness notices are a target-state idea, not a described current automated capability. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman manually generates and signs 30-40 letters per day with no intelligent triage, auto-response, or proactive notification capability. The office cannot act on complaint patterns because aggregation is not available. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **Lender Match doesn't trigger guarantee application:** Successful matches don't flow into E-Tran application process. Cannot measure or optimize program based on conversion data. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **iCAP Salesforce CRM modernization in progress:** New lender portal being piloted to replace lender experience. Modernization initiative underway but not yet operational. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Straight-through processing enables instant action:** Launching June 9. "I hit submit, and I think, Oh, I'll probably hear in a week... And on the screen, it was an instant decision." On-screen instant certification decision enables immediate program access. However, limited to 50% of cases initially. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Risk-based annual reviews blocked by data gaps:** Without contracts data, certification staff cannot perform effective risk-based annual reviews or proactively identify performance issues/fraud. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**What score 3 looks like for SBA:**

Frontline staff, program offices, contact center agents, field teams, disaster teams, lenders (via iCAP), and National Ombudsman receive recommendations, alerts, and next best actions based on the unified SBO profile and governed data foundation. Intelligent document generation, triage, pattern-based proactive outreach, instant certification decisions (expanded to 100% of cases), risk-based monitoring alerts, and Lender Match conversion triggers reduce manual workload and enable proactive service.

---

## Scorecard Summary

| Pillar | Capability | Score | Confidence |
|---|---|---:|---|
| UNLOCK | Connect | 1 | High |
| UNLOCK | Integrate | 1 | High |
| UNLOCK | Understand | 1 | High |
| TRUST | Unify | 1 | High |
| TRUST | Validate | 1 | High |
| TRUST | Protect | 1 | High |
| ACTIVATE | Decide | 2 | High |
| ACTIVATE | Orchestrate | 1 | High |
| ACTIVATE | Act | 1 | High |

**Integration Health Score** (Connect + Integrate + Understand, averaged × 33): **33 / 100**  
**AI Readiness Score** (all 9 capabilities, averaged × 33): **37 / 100**  
*Formula: ((1+1+1+1+1+1+2+1+1) / 9) × 33 = (10/9) × 33 = 1.11 × 33 = 36.7, rounded conservatively to 37*  
*Note: Validate lowered from 2 to 1 in this run. The score is numerically similar to the previous calculation (was ~40.3 rounded to 37) but is now more defensible — previously "rounded conservatively" from 40; now the raw calculation also lands at ~37 before rounding.*

## Score Pattern Analysis

SBA currently matches a **Crawl-first foundation pattern with pockets of analytical capability**. Unlock scores are all 1 because data exists in many systems (UCP, CAFS, ULP, E-Tran, PIM, GPTS, iCAP, SBIC Web, CSH, NOCMS, etc.) but is not consistently connected, integrated, or semantically understood. Trust is uniformly 1: Unify has no cross-program identity resolution; Validate is now 1 (not 2) based on external audit findings showing systematic control failures — PIIA non-compliance and disaster OIG findings override the partial positive signals from interviews; Protect is 1 with FISMA IAM at Level 2 and governance controls below minimum effective baseline. Activate has Decide at 2 (DART, LLMS, Tableau, ArcGIS analytics exist) but Orchestrate and Act remain at 1 because action still depends on manual assembly and program-specific workflows.

**Positive signal worth noting:** MuleSoft Government Cloud is already deployed with FedRAMP Moderate ATO as the integration engine. The path to score 3 on Integrate is an extension of an existing platform, not a greenfield build. [[inputs/research/2026-07-06-gemini-capture]]

**Critical gaps reinforced across all 5 interviews:**
- **No unified borrower identity** across 7A/disaster/microloan/SBIC creates fraud risk and prevents total exposure calculation
- **SBIC and 7A systems siloed** preventing cross-program fraud detection on $54B portfolio
- **NOCMS isolated** from lending systems, generating 40-75 unnecessary letters/week (volume increasing: 751 cases in 2026 vs 751 over 2-3 years historically)
- **Lender Match disconnected** from E-Tran, cannot measure program effectiveness
- **Contracts data not in UCP**, blocking risk-based annual reviews
- **GSA 5-year delay** blocking veterans certifications visibility in SAM.gov
- **Monthly 1502 batch** when real-time is technically feasible
- **SBIC Web legacy burden** consuming hundreds of thousands annually
- **UCP rebuilt 4 times in 8 years**, creating platform instability

**Positive signals:**
- **Straight-through processing launching June 9** demonstrates SBA can build modern API-driven automation when foundations are in place (VA API, liens, incarceration validation)
- **1502 process achieves 99.9% compliance** showing validation processes can work when enforced
- **iCAP Salesforce modernization in progress** for lender portal
- **MuleSoft mentioned** as integration layer for straight-through processing

**Roadmap implication:** start with unified borrower identity resolution and API-led/zero-copy access to the highest-value systems (UCP, CAFS, ULP, E-Tran, PIM, CSH, NOCMS, SBIC replacement, Eventbrite, SAM.gov/IRS/Census/FEMA where permitted). Straight-through processing proves the capability exists when data is integrated. Early wins: National Ombudsman lending integration (40-75 letters/week), 1502 real-time conversion (eliminate 30-day lag), cross-program fraud detection (7A/SBIC/disaster/microloan), contracts data into UCP (risk-based reviews). Then layer validation/lineage and policy enforcement. Agentic and proactive outreach use cases should be piloted only where the underlying profile, source authority, and guardrails are clear.
