---
title: "Strategic Alignment — Small Business Administration"
wiki_page: "01"
status: in-progress
tags: [dra, strategic-alignment]
sources: ["[[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]", "[[inputs/research/2026-07-06-gemini-capture]]", "[[inputs/research/2026-07-07-claude-capture]]"]
last_analyzed: 2026-07-08
---

# Strategic Alignment

> [!NOTE]
> Run 1 was based on one internal SBA SME discussion (provisional). Run 3 (2026-07-08) integrates two deep research documents that dramatically strengthen strategic context, executive sponsorship, and compelling event framing. Caldwell is now a confirmed sponsor with a documented vision. The compelling event is now anchored in two external audit findings (PIIA non-compliance, FISMA regression) and a 67% budget cut.

**Maps to:** DRA Report Section 1 — Vision & Case for Change  
**Drives output:** [[06-target-state-architecture]], [[07-roadmap]]

---

## Mission and Mandate

SBA is the only cabinet-level federal agency fully dedicated to small business, delivering four service areas: Access to Capital, Entrepreneurial Development, Government Contracting (23% prime contract goal), and Advocacy. [[inputs/research/2026-07-07-claude-capture]]

The DRA is running under the Kelly Loeffler administration (assumed office February 20, 2025), which has pivoted priorities toward fraud prevention, regulatory compliance, and administrative rightsizing — away from social-equity expansion. [[inputs/research/2026-07-06-gemini-capture]]

Internally, the desired operating model is **OneSBA** / **digital-first**: staff should see and use data across program offices rather than re-discovering it from siloed systems. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

Active mandates / operating pressures:

- **OneSBA / digital-first model:** Werner Watschke frames the DRA as moving toward "one SBA" and a "digital first bank model," with silos broken down and manual handling reduced. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Enterprise data objective:** Ryan Pella frames the OCIO objective as incorporating data sets across the enterprise and breaking down program-office information silos. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **67% budget cut forces automation:** FY 2027 discretionary budget request is $329M — a 67% reduction from FY 2026 enacted level. OneSBA automation is now required to compensate for workforce reduction, not just desired. [[inputs/research/2026-07-06-gemini-capture]]
- **PIIA compliance mandate:** KPMG May 2026 audit found SBA non-compliant with federal improper payment reporting. Root cause explicitly: lack of a unified, enterprise-wide database. [[inputs/research/2026-07-06-gemini-capture]]
- **FISMA compliance mandate:** FY 2025 FISMA evaluation found SBA below OMB effective-controls baseline in 9 of 10 domains. [[inputs/research/2026-07-06-gemini-capture]]
- **EO 14179 / OMB M-25-21 AI governance:** AI inventory published March 2026 (2 months late); agency-wide AI pause since March 2025 for compliance review. [[inputs/research/2026-07-06-gemini-capture]]
- **SBA Artificial Intelligence Utilization Act (H.R. 8881):** Pending legislation requiring annual congressional AI reporting; when enacted, will mandate metadata standards, data lineage, and explainability frameworks. [[inputs/research/2026-07-06-gemini-capture]]
- **Program integrity and eligibility validation:** UCP, SAM.gov, size determination, certificate-of-competency, contract data, UEI/EIN, and IRS/SAM access all appear as data needed to validate business status, eligibility, and program participation. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Disaster preparedness and response:** DART and ODRR need historical, geographic, IRS, Census, FEMA, ULP, and field data to prepare communities and answer congressional / White House reporting needs. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

## Strategic Priorities (12–24 month horizon)

- **Create a unified SBO profile across SBA touchpoints.** SBA staff want to understand certifications, loans, disaster interactions, event attendance, training, assistance, size/COC matters, and contract signals as part of one business/owner profile. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Reduce manual, spreadsheet-driven operations.** The 8(a) annual review workflow currently relies on blank Excel workbooks, manual transcription, formulas, letters, and RPA consolidation for thousands of portfolio reviews. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Eliminate waste, fraud, and abuse.** Loeffler administration's explicit priority. The December 2025 8(a) financial-documents order resulted in 1,091 firm suspensions (25% of the active portfolio) because SBA lacked the data processing capacity to review 4,300 financial packages before the compliance deadline — a direct cost of missing automation. [[inputs/research/2026-07-06-gemini-capture]]
- **Automate certification processing (straight-through processing).** 8(a) mass suspension crisis exposed dependence on manual processing at scale. GCBD straight-through processing launched June 9 for veteran certifications but covers only ~50% of cases; expansion across certification types is the roadmap target. [[inputs/research/2026-07-06-gemini-capture]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Address PIIA non-compliance.** KPMG audit explicitly names lack of a unified enterprise database as root cause. A unified data foundation is not a technology upgrade — it is the remediation plan for a documented compliance failure. [[inputs/research/2026-07-06-gemini-capture]]
- **Bring FISMA IAM back to Level 4.** Identity and Access Management regressed to Level 2. ICAM Governance Board is active (chaired by Caldwell; Davis and Post as Core Members; Calcagno as Advisory), but controls are below the minimum effective baseline. [[inputs/research/2026-07-06-gemini-capture]]
- **IRS MoU renewal October 31, 2027 as procurement window.** Current physical 4506-T/4506-C consent workflow is legally required under IRS §6103. The MoU renewal is the natural procurement window for a digital consent capture solution that would enable straight-through IRS verification for lending programs. [[inputs/research/2026-07-06-gemini-capture]]
- **Improve field-office and program-office readiness.** Staff prepare for visits and initiatives by checking CAFS, Small Business Search, SAM.gov, state registries, USAspending, Eventbrite, grant-program data, and other sources manually. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Strengthen disaster analytics and proactive outreach.** DART wants better integrated data to project disaster impacts, prepare businesses before events, support congressional inquiries, and report to leadership. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- **Enable external data access where appropriate.** SAM.gov, IRS, Census, FEMA, Treasury, and other external data sources are valuable but currently constrained/manual in ways that slow cross-program analysis. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

## Compelling Event

Two converging external pressures — not internal preference — make a unified data foundation unavoidable:

**1. 67% budget cut forces automation.** FY 2027 discretionary request ($329M) eliminates SCORE and Community Navigator Pilot and cuts S&E to $260M. SBA must deliver equivalent service levels with a materially smaller workforce. Automation of data-intensive workflows (certifications, annual reviews, lending, disaster) is the only way to close that gap. Manual processing at scale is no longer financially viable. [[inputs/research/2026-07-06-gemini-capture]]

**2. Dual compliance failures mandate a unified data foundation.** KPMG's May 2026 PIIA audit found SBA non-compliant with improper payment reporting and explicitly named "lack of a unified, enterprise-wide database" as the root cause. In the same period, FY 2025 FISMA evaluation found SBA below OMB baseline in 9 of 10 domains, with IAM regressed to Level 2. These are not aspirational improvement areas — they are documented failures with remediation obligations. A unified data foundation is the remediation plan, not a separate modernization initiative. [[inputs/research/2026-07-06-gemini-capture]]

The internal operational pressure (OneSBA / digital-first, unified SBO profile) still holds. The research elevates it from a strategic desire to an external mandate with audit findings and a hard budget reality behind it. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

## Magic Wand Responses

> [!NOTE]
> The facilitator did not ask a literal "magic wand" question in the SME session, but the discussion captures target-state wishes in operational language. CIO Caldwell's confirmed vision — from public record and research — is added below as an executive-level desired outcome.

| Persona | Desired future state from the discussion | Evidence |
|---|---|---|
| CIO / Sponsor (Caldwell) | **Instant decisions** (straight-through processing) across lending and certification programs. **Automated fraud detection** using ML against lending datasets. **Consolidated contact centers** through the Salesforce Services effort. Single decision-maker for IT and AI investments (Caldwell is also CAIO). | [[inputs/research/2026-07-06-gemini-capture]] |
| Business Worker | See all SBA touchpoints for a business — certifications, size/COC matters, assistance programs, events, loans, disaster interactions, and field-office engagement — without checking every system separately. | Alisa Sheard describes size/COC as another part of the business profile; Shivani Dubey wants training/assistance interactions to tell the full story of what a company received from SBA. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] |
| Data Worker | Pull relevant public/federal datasets such as SAM.gov, IRS, Census, and FEMA into a governed analytical view rather than performing manual searches and one-off extracts. | Timothy Baughman says automated access to SAM/IRS/Census-style data would "help dramatically" for cross-program analysis. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] |
| IT / Integration Worker | Replace blank workbooks, RPA consolidation, and manual handoffs with API-connected systems and a back-end interconnection that feeds unified profiles and analytics. | Shivani Dubey says the worksheet cannot API-connect to anything; Timothy Baughman calls for back-end interconnection across stovepiped data. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] |

## Sponsorship

| Role | Person | Title | Status | Notes |
|---|---|---|---|---|
| Business + IT Sponsor | Hartley Caldwell | CIO + Chief AI Officer (CAIO), appointed May 2025 | **Confirmed** | Werner states DRA is running for Caldwell. Research confirms: chairs BTIC (final authority over all tech investments); fintech/retail banking background; publicly associated with straight-through processing and fraud detection goals. Single decision-maker for IT and AI investments. [[inputs/research/2026-07-06-gemini-capture]] |
| Data Policy | Anna Maria Calcagno | CDO, Director of Office of Strategic Management & Enterprise Integrity | Confirmed — role known | Evidence Act compliance, data policy. Advisory member of ICAM Governance Board. [[inputs/research/2026-07-06-gemini-capture]] |
| Financial Risk | Nathan Davis | CFO + Chief Risk Officer | Confirmed — role known | Financial risk oversight. Core member of ICAM Governance Board. [[inputs/research/2026-07-06-gemini-capture]] |
| Security | Mike Post | Acting CISO | Confirmed — role known | Core member of ICAM Governance Board. [[inputs/research/2026-07-06-gemini-capture]] |
| Lending Programs | Thomas Kimsey | AA, Office of Capital Access | Confirmed — role known | 7(a)/504/disaster loans program owner. [[inputs/research/2026-07-06-gemini-capture]] |
| Disaster Programs | Chris Stallings | AA, Office of Disaster Recovery and Resilience | Confirmed — role known | Disaster program owner. [[inputs/research/2026-07-06-gemini-capture]] |
| Certifications / Contracting | Ryan Lambert | AA, Office of Government Contracting and Business Development | Confirmed — role known | Certifications and contracting program owner. [[inputs/research/2026-07-06-gemini-capture]] |
| Final Investment Authority | BTIC | Business Technology Investment Council | Confirmed | Caldwell chairs; all significant tech investments require BTIC approval. [[inputs/research/2026-07-06-gemini-capture]] |
| IT Sponsor (Deputy) | Douglas Robertson | Deputy CIO / CTO (career, appointed Sept 2023) | Confirmed — role known | [[inputs/research/2026-07-06-gemini-capture]] |

> [!NOTE]
> Stakeholder names Kimsey, Stallings, and Lambert are added from research. Caldwell, Robertson, and Davis were in the DRAVantage registry already. Calcagno and Post are net new. No direct interview with Caldwell, Calcagno, or Davis has occurred yet.

## Confidence and Gaps

**Confidence:** Medium–High (upgraded from Low–Medium). Caldwell as sponsor is confirmed by research, not just inferred. Compelling event is now anchored in external audit findings with explicit root-cause language that points to a unified data foundation. Strategic priorities align across operational interviews and research.

**Remaining gaps:** No direct interview with Caldwell, Calcagno, or Davis. 06-target-state and 07-roadmap are still draft. IRS MoU renewal (Oct 2027) is not yet built into the roadmap. Funding authority and investment approval process not fully documented.
