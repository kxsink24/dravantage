---
title: "Appendix — Small Business Administration"
wiki_page: "08"
status: in-progress
tags: [dra, appendix, scores, stakeholders]
sources: ["[[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]", "[[inputs/interviews/2026-07-06-national-ombudsman-natalie]]", "[[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]", "[[inputs/interviews/2026-05-XX-morris]]", "[[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]", "[[inputs/research/2026-07-06-gemini-capture]]", "[[inputs/research/2026-07-07-claude-capture]]"]
last_analyzed: 2026-07-08
---

# Appendix

> [!NOTE]
> Analysis now incorporates five interviews plus two deep research documents. Validate score lowered from 2 to 1 based on external audit findings. Protect confidence upgraded from Medium to High. Sponsorship confirmed for Caldwell. All scores and confidence levels reflect Run 3 (2026-07-08) synthesis.

**Maps to:** DRA Report Appendix — Data Assessment Rating, stakeholder list, methodology notes  
**Used by:** `dra-presentation-police`, `dra-generate-output`

---

## Data Assessment Rating Scorecard

| Pillar | Capability | Score (1–3) | Confidence | Evidence Summary | Primary Sources |
|---|---:|---:|---|---|---|
| UNLOCK | Connect | 1 | High | Data exists across UCP, CAFS, ULP, E-Tran, PIM, GPTS, iCAP, SBIC Web, CSH, NOCMS, Eventbrite, SAM.gov, IRS, Census, FEMA, and other sources. No unified borrower identity across 7A/disaster/microloan/SBIC. SBIC and 7A systems siloed. Lender Match disconnected from E-Tran. Contracts data not in UCP. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] |
| UNLOCK | Integrate | 1 | High | Annual review workbooks cannot API-connect. 1502 process is manual monthly batch. Underwriting centers use async callbacks with no real-time visibility. SBIC Web legacy with no modern integration. MuleSoft emerging for straight-through processing but limited scope. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] |
| UNLOCK | Understand | 1 | High | Certification categories, NAICS codes, business identities, external directories require SME interpretation. ULP branding confusion (ULP/my SBA/lending.sba.gov). No aggregation of complaint data by regulation. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] |
| TRUST | Unify | 1 | High | UEI/EIN/owner/subsidiary/certification/loan/event/disaster/assistance identities not resolved. Same person across 7A/disaster/microloan/SBIC cannot be linked. Fraud detection siloed by program. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] |
| TRUST | Validate | 1 | High | UCP authoritative for certifications (positive). 1502 achieves 99.9% compliance (positive). BUT: KPMG PIIA audit (May 2026) — SBA non-compliant; failed risk assessments, root-cause reporting, PPP review procedures. OIG disaster audit — 12/28 files lacked required photos; 1/28 had repair estimates. External audit findings override interview-based partial positives. Score lowered from 2 to 1. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] [[inputs/research/2026-07-06-gemini-capture]] |
| TRUST | Protect | 1 | High | Sensitive data in SharePoint, tax/IRS/owner/loan/disaster/complaint data exists. IG Act protections for NOCMS. Octa SSO "caused quite the kerfuffle." CLS being replaced by Okta. FISMA IAM at Level 2 (regression); 9/10 domains below OMB baseline. ICAM Governance Board active but controls below minimum effective baseline. IRS §6103 as structural legal constraint. | [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] [[inputs/research/2026-07-06-gemini-capture]] |
| ACTIVATE | Decide | 2 | High | DART, LLMS, Tableau, ArcGIS, workbooks support analysis but manually assembled. Lender Match cannot measure conversion metrics. SBIC portfolio monitoring is manual ("dream of having systems"). Straight-through processing is instant automated decision-making (50% of cases). | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] |
| ACTIVATE | Orchestrate | 1 | High | Workflows are manual or post-hoc. Underwriting workflow has no real-time visibility. Payment workflow breaks when loan status changes. Straight-through processing orchestrates multiple APIs but limited to narrow use case. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] |
| ACTIVATE | Act | 1 | High | Insights do not flow into staff tools. Lender Match doesn't trigger guarantee application. iCAP Salesforce modernization in progress. Straight-through processing enables instant decision (50% of cases). Risk-based annual reviews blocked by data gaps. | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] |

**Integration Health Score:** 33 / 100  
*Formula: average of Connect + Integrate + Understand (all scored 1), multiplied by 33 = 1.0 × 33 = 33*

**AI Readiness Score:** 37 / 100  
*Formula: average of all 9 capabilities (1+1+1+1+1+1+2+1+1 = 10 / 9 = 1.11) × 33 = 36.7, rounded to 37. Validate lowered from 2 to 1 in Run 3; score is numerically similar but now more defensible against external audit findings.*

**Three Barriers:**

| Barrier | Severity | Confidence | Key Evidence |
|---|---|---|---|
| Blind Spot | High | High | No unified borrower identity across 7A/disaster/microloan/SBIC (fraud risk on $54B portfolio). SBIC and 7A systems siloed. NOCMS cannot access lending systems (40-75 unnecessary letters/week). Lender Match disconnected from E-Tran. Contracts data not in UCP. GSA 5-year delay for veterans certifications. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] |
| Time Trap | High | High | Monthly 1502 batch (30-day lag). SBIC Web "100s of thousands/year to patch." UCP rebuilt 4 times in 8 years. GSA 5-year delay. National Ombudsman 40-75 manual letters/week, 30-40 manual signatures/day, volume increased 751 cases in 2026 vs 751 over 2-3 years. Manual certification reviews (50% still manual after straight-through). [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] |
| Trust Gap | Medium | High | GSA "worst at government to government customer service." FPDS-NG constant changes. USA Spending insufficient. Third-party API quality for straight-through. Async underwriting callback fragility. Power BI vs NOCMS discrepancies (499 vs 521 cases). PIIA non-compliance (failed risk assessments, root-cause reporting, PPP review procedures — KPMG May 2026). Disaster OIG audit (12/28 files lacked required photos; 1/28 had repair estimates). FISMA IAM Level 2 regression. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] [[inputs/research/2026-07-06-gemini-capture]] |

---

## Stakeholder Registry

| Name | Title | Organization | Persona | DRA Role | Interviewed | Survey | Org62 Contact ID |
|---|---|---|---|---|---|---|---|
| Hartley Caldwell | CIO + Chief AI Officer (CAIO) | SBA | IT Leader + Business Sponsor | Sponsor — **Confirmed** | No | Unknown | 003ed00000Ea0RGAAZ |
| Doug Robertson | Deputy CIO / CTO (career, appointed Sept 2023) | SBA | IT Leader | Sponsor (Deputy) | No | Unknown | 0033y00002Rjeg0AAB |
| Anna Maria Calcagno | CDO, Director Office of Strategic Management & Enterprise Integrity | SBA | Data Leader | Stakeholder | No | Unknown | — |
| Nathan Davis | CFO + Chief Risk Officer | SBA | Business / Risk | Stakeholder | No | Unknown | — |
| Mike Post | Acting CISO | SBA | IT / Security | Stakeholder | No | Unknown | — |
| Thomas Kimsey | AA, Office of Capital Access | SBA | Business | Stakeholder | No | Unknown | — |
| Chris Stallings | AA, Office of Disaster Recovery and Resilience | SBA | Business | Stakeholder | No | Unknown | — |
| Ryan Lambert | AA, Office of Government Contracting and Business Development | SBA | Business | Stakeholder | No | Unknown | — |
| Ryan Pella | Product Manager / OCIO facilitator | SBA | Business Worker / IT liaison | Interviewee | Yes | Unknown | 003ed00000AsNedAAF |
| Christopher Allen | Certifications / UCP SME | SBA | Business Worker | Interviewee | Yes | Unknown | — |
| Thomas Rogers | Size / contracting / market research SME | SBA | Business Worker / Data Worker | Interviewee | Yes | Unknown | — |
| Alisa Sheard | Size determination / COC / certification-process SME | SBA | Business Worker / Data Worker | Interviewee | Yes | Unknown | — |
| Shivani Dubey | Field / certification / assistance-program SME | SBA | Business Worker | Interviewee | Yes | Unknown | — |
| George Murray | Field office / 8(a) annual review SME | SBA | Business Worker | Interviewee | Yes | Unknown | — |
| Timothy Baughman | Disaster / ODRR / DART analytics SME | SBA | Data Worker / IT Worker | Interviewee | Yes | Unknown | — |
| Khem Sharma | Participant; limited substantive transcript content | SBA | Unknown | Interviewee | Yes | Unknown | — |
| Werner Watschke | Global Data Strategy / DRA facilitator | Salesforce | Architect | Architect | n/a | n/a | — |

---

## Interview Log

| Date | Stakeholder | Module | Status | Vault Note | Recording | Transcript |
|---|---|---|---|---|---|---|
| 2026-05-07 | Internal SBA SMEs — SBO persona discussion | Module 2 / Module 3 hybrid | Processed | [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] | — | `inputs/interviews/Small Business Owner Persona Data discussion (1).docx` |

---

## Survey Summary

| Metric | Value |
|---|---|
| Total respondents | Not available in current input |
| Persona breakdown | Not available; transcript contains internal SMEs only |
| Avg AI Foundation Confidence (Q11) | Not available |
| Avg C360 Maturity (Q2) | Not available |
| Most selected Use Cases (Q13) | Not available |
| Lowest-scoring module | Not available |
| Highest-variance question | Not available |

---

## Analysis Run Log

| Date | Input processed | Wiki pages updated | Score changes | Run by |
|---|---|---|---|---|
| 2026-06-08 | `Small Business Owner Persona Data discussion (1).docx` → [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] | 01, 02, 03, 04, 05, 08, Index, 00 Activity Log | Initial provisional scores: Connect 1, Integrate 1, Understand 1, Unify 1, Validate 2, Protect ?, Decide 2, Orchestrate 1, Act 1. Barriers: Blind Spot High, Time Trap High, Trust Gap Medium. | pi / dra-analyze-input |
| 2026-07-06 | [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-national-ombudsman-natalie]] (reprocessed) | 02, 04, 05, 08 | Confidence upgraded to High for Connect, Integrate, Understand, Unify, Validate, Orchestrate, Act. Protect scored as 1 (was ?). All scores remain same except Protect. Barriers: Blind Spot High → High (confidence upgrade), Time Trap High → High (confidence upgrade), Trust Gap Medium → Medium (confidence upgrade). Added 15+ new systems to inventory. | Claude Code / agent synthesis |
| 2026-07-08 | [[inputs/research/2026-07-06-gemini-capture]] [[inputs/research/2026-07-07-claude-capture]] | 01, 02, 04, 05, 08 | **Validate 2 → 1** (PIIA non-compliance + disaster OIG audit override interview-based assessment). Protect confidence Medium → High (FISMA evidence adds third independent source). Sponsorship confidence Low-Medium → Medium-High (Caldwell confirmed). | Claude Code / dra-analyze-input |

### Run 3 — 2026-07-08 (Research Analysis)

- **Inputs processed:** 2 deep research documents (Gemini deep research 2026-07-06; Claude workflow 2026-07-07)
- **Pages updated:** 01, 02, 04, 05, 08
- **Key changes:**
  - 01: Sponsorship upgraded to confirmed; compelling event reframed around 67% budget cut + dual compliance failure (PIIA + FISMA); Caldwell/Calcagno/Davis/Lambert/Stallings/Kimsey/Post named as stakeholders; mandates section expanded (EO 14179, H.R. 8881, PIIA, FISMA, IRS MoU Oct 2027); Caldwell's confirmed vision (straight-through, fraud detection, contact center consolidation) added to Magic Wand
  - 02: Research corroborates all three barriers; PIIA audit explicitly names lack of unified DB as root cause of Blind Spot; IRS §6103 legal constraint and 8(a) mass suspension added to Time Trap; PIIA + disaster OIG + FISMA IAM regression added to Trust Gap evidence; Validate score note cross-referenced to 04
  - 04: Validate score lowered from 2 → 1 (PIIA non-compliance + disaster OIG audit override interview-based assessment; full rationale documented); MuleSoft Government Cloud noted as existing integration platform in Integrate section (score stays 1; upgrade path is extension, not greenfield); FISMA evidence added to Protect (confidence upgraded Medium → High)
  - 05: Oracle ERP ($7.99M June 2026 contract), DLAP, data.sba.gov, datahub.certify.sba.gov added to system inventory; confirmed Salesforce deployment details documented (GovCloud Plus, PSS, Experience Cloud/FSC, Data Cloud FedRAMP High); IRS §6103 structural legal constraint documented in integration landscape; MuleSoft Government Cloud confirmed as existing iPaaS; Data Cloud FedRAMP High authorization noted as architectural advantage
  - 08: Scorecard updated (Validate 2→1, Protect confidence Medium→High); stakeholder registry expanded with Calcagno, Davis, Post, Kimsey, Stallings, Lambert; Caldwell title updated to CIO + CAIO; Three Barriers table updated; AI Readiness Score formula corrected
- **Confidence changes:** 01 sponsorship Low-Medium → Medium-High; 04 Protect confidence Medium → High
- **Score changes:** Validate 2 → 1 (external audit evidence overrides internal interview; AI Readiness Score remains ~37 — now calculated as 36.7 from raw formula rather than rounded down from 40.3)
- **Gaps remaining:** No direct interview with CIO Caldwell, CDO Calcagno, or CFO Davis; 06-target-state and 07-roadmap still draft; IRS MoU renewal (Oct 2027) not yet built into roadmap; VetCert backlog cleared (2,700 applications) not yet reflected in personas page

---

## Methodology Notes

- **Non-standard engagement:** SBA is being used as a realistic testbed for `dra-analyze-input`. The readout/DRA overview existed before this Vault workspace, and kickoff metadata may be missing or retrospective.
- **Input type caveat:** The processed transcript is an internal SBA SME proxy discussion about the Small Business Owner persona. It is not a direct interview with an external small business owner.
- **Confidence cap:** Because run 1 is based on a single transcript, no capability or barrier should be marked High confidence yet, even when multiple speakers in the transcript corroborate a pattern.
- **Protect unscored:** The transcript shows sensitive data and access constraints but does not provide enough detail about current access controls, policy enforcement, lineage, auditability, or AI guardrails.
- **Coverage gaps:** Direct sponsor voice, direct SBO voice, security/governance owner input, and system-owner validation are still needed before final deliverable generation.
