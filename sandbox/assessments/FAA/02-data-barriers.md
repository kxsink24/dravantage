---
title: "Data Barriers — Small Business Administration"
wiki_page: "02"
status: in-progress
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources: ["[[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]", "[[inputs/interviews/2026-07-06-national-ombudsman-natalie]]", "[[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]", "[[inputs/interviews/2026-05-XX-morris]]", "[[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]", "[[inputs/research/2026-07-06-gemini-capture]]"]
last_analyzed: 2026-07-08
---
# Data Barriers

> [!NOTE]
> Analysis is based on five interviews spanning certifications (GCBD), lending (7A loan systems), investment programs (OII/SBIC), National Ombudsman, and cross-program SME discussions. Barrier severities are now corroborated across multiple independent sources, with confidence upgraded to **High** for Blind Spot and Time Trap.

**Maps to:** DRA Report Section 2 — Three Barriers  
**Drives output:** [[07-roadmap]], executive summary framing

---

## The Three-Barrier Framework

The DRA framework diagnoses data problems through three patterns. Most organizations have all three; the severity and interaction of them determines the recommended sequence of interventions.

- **Blind Spot** — Data exists but can't be seen. Systems are siloed, integration is manual or missing, and decisions get made without full context.
- **Time Trap** — Data is accessible but late. By the time information is available, the window for action has passed. Batch pipelines, manual refresh cycles, and reporting lag are the symptoms.
- **Trust Gap** — Data is accessible and timely but not believed. Inconsistent definitions, undocumented lineage, and unresolved conflicts between systems undermine confidence in the numbers.

---

## Blind Spot

**Severity:** High  
**Confidence:** High — corroborated across 5 independent sources covering certifications, lending, investment, disaster, and National Ombudsman programs

### Evidence

- Ryan Pella frames the enterprise objective as "incorporating all of these different data sets across the enterprise" and "breaking down the different information silos" across SBA program offices. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Size determination and certificate-of-competency data are not in a system of record; Alisa Sheard says they are manual and stored in a Team SharePoint folder. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Staff must check different systems depending on the business question: CAFS for loan information, SAM.gov / Small Business Search for certification and NAICS/geography, USAspending, Secretary of State databases, Eventbrite, grant-program sources, and other program systems. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Eventbrite attendee data and 7J / Empower to Grow assistance participation are not connected back into MySBA Customers, limiting the ability to see the full assistance history of a business or owner. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster teams have useful data across ULP, historical DCMS, FEMA, Census, IRS, ArcGIS, Tableau, and field reports, but Timothy Baughman says teams are still "stovepiped" and need back-end interconnection to understand who will be impacted by disaster. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman (NOCMS) has no integration with SBA lending systems; cannot verify loan status, charge-off dates, or Treasury referrals without manual outreach: "Right now, we have no way of talking to the lending part of this organization." [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- National Ombudsman cannot aggregate complaint data by regulation or agency, preventing pattern detection: "We have no way to aggregate the data around what regulations are... coming in more than once." [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **No unified borrower identity across loan programs:** The same person borrowing through 7A, disaster, microloan, or SBIC programs cannot be linked. "We don't have that visibility into, you know, is this the same person or not? Is the same business or not?" This creates fraud risk: "Anytime fraud is involved, I would like to know if there was fraud in a 7A deal, and that deal is involved with any of our SBICs and vice versa." [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **No connection between SBIC and 7A loan systems:** Tom Morris describes siloed systems that prevent flagging entities across investment and lending programs. "Many of the systems we do have are siloed. They don't talk to each other." This prevents cross-program fraud detection where "stealing from an SBIC is like stealing from a federal bank." [[inputs/interviews/2026-05-XX-morris]]
- **Lender Match disconnected from guarantee process:** Lender Match helps borrowers find lenders but doesn't tie back to E-Tran loan application process. "It doesn't mandate that you go back into SBA and get a guarantee... the lender might just work completely off of SBA's books." SBA cannot measure program effectiveness or conversion rates. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **Contracts data not integrated into UCP:** Certification staff cannot see contract performance or awards when conducting reviews. "It's not the ideal time to start trying to get from them an API" for GSA contract data. Risk-based annual reviews are impossible without contracts visibility. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **GSA/SAM.gov integration failure for veteran certifications:** Five-year delay in adding veterans certifications to SAM.gov means certified businesses are invisible in the primary federal procurement system. "We've been waiting five solid years for them to just add veterans certifications in SAM.gov." [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

### Impact on the Customer

SBA cannot reliably answer "what do we know about this small business / owner?" from one place. That blocks the OneSBA vision because staff cannot see certifications, loans, disaster interactions, training participation, field-office engagement, size/COC matters, or contract signals as one profile. The direct business impact is slower service, weaker personalization, fragmented disaster preparedness, and incomplete program-impact reporting. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

For the National Ombudsman, the Blind Spot creates 40-75 unnecessary letters per week to manually verify EIDL loan charge-offs, and prevents the office from identifying systemic regulatory issues or repeat enforcement patterns. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

**Critical fraud and credit risk:** Without unified borrower identity, SBA cannot detect fraudulent actors operating across 7A, disaster, microloan, and SBIC programs, cannot calculate total borrower exposure (credit risk), and may unknowingly violate lending limits. This affects a $54B SBIC portfolio plus all lending programs. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]]

**Procurement opportunity loss:** Federal buyers cannot easily target veteran-owned small businesses because certifications are not in SAM.gov after five years, making SBA certifications invisible to procurement officers. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**Program integrity gap:** Certification staff cannot perform effective risk-based annual reviews or identify performance issues/fraud without contracts data integration. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

### External Audit Corroboration

Research adds two independent external findings that confirm and deepen the Blind Spot diagnosis:

- **PIIA non-compliance root cause:** KPMG's May 2026 audit of SBA's improper payment reporting explicitly states that "lack of a unified, enterprise-wide database prevents identifying improper payments before funds are disbursed." This is not an internal observation — it is an external auditor's finding, in writing, naming the absence of a unified data foundation as the specific mechanism of failure. [[inputs/research/2026-07-06-gemini-capture]]
- **COVID EIDL validation bypass:** During the $360B EIDL program (3.7M loans), IRS verification backlogs became so severe that SBA bypassed IRS validation entirely. Subsequent audits found approximately 50% of EIDL files lacked verifiable tax documents — a direct consequence of having no automated, integrated path to IRS data. [[inputs/research/2026-07-06-gemini-capture]]

### Root Cause Hypothesis

SBA's data is organized around program systems and historical missions rather than an enterprise SBO identity model. Key sources exist, but they are mastered by different systems with no shared profile, no universal key strategy that covers UEI/EIN/person/business/subsidiary relationships, and inconsistent integration into MySBA Customers or an enterprise data foundation. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] NOCMS is similarly isolated, with no API access to lending or program systems. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

The same borrower identity problem exists across all loan types (7A, disaster, microloans, SBIC), with E-Tran as the only common touchpoint but no entity resolution capability. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] External partner integration (GSA/SAM.gov) is blocked for years despite clear business need. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

The KPMG PIIA finding provides external validation: this is not an internal systems-complexity problem waiting for priority — it is an audited compliance failure with a named root cause that aligns directly with what interviews have documented. [[inputs/research/2026-07-06-gemini-capture]]

---

## Time Trap

**Severity:** High  
**Confidence:** High — corroborated across 5 sources with specific volume metrics and cost data

### Evidence

- The 8(a) Annual Review Workbook is a VBA/Excel tool created "out of necessity" because there is no system to conduct the review analysis. Staff manually transcribe data, run formulas, and generate feedback letters. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Shivani Dubey says the workbook is blank every time and "we're not able to API connect to anything," so an RPA bot consolidates the workbooks into a master after the fact. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- The annual review portfolio is approximately 3,600–3,800 firms, making spreadsheet-driven processing a large-scale operational burden rather than a one-off workaround. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Timothy Baughman says access to IRS/SAM/Census-style data is constrained/manual, and the inability to export or query larger data chunks "slows everybody down." [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster offices duplicate the same data-gathering effort across East/West offices and multiple divisions, resulting in the same information being captured by four or five people. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman staff manually sign 30-40 letters per day, with 29 of them being internal correspondence. The office sends 40-75 letters per week to SBA alone to manually verify EIDL loan charge-offs: "If there was a way to link our system... that would eliminate us sending them probably 40 to 75 letters a week." [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- National Ombudsman case volume has increased dramatically: 751 cases in 2026 vs 751 cases over 2-3 years historically. The manual process is not scaling with demand. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **Monthly 1502 reporting process:** Banks must manually upload portfolio status files every month. Previously experienced compliance issues; now "99.9% compliance" after enforcement. Monthly lag means data is always 30+ days old, creating blind spots between reporting periods. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **SBIC Web legacy maintenance burden:** Spending "100s of thousands of dollars a year to patch" a legacy SBIC system because service providers "no longer service a lot of that IT. It's too old." Significant engineering time spent on "keeping the lights on" instead of innovation. [[inputs/interviews/2026-05-XX-morris]]
- **Manual SBIC portfolio monitoring:** Tom Morris describes the dream state: "We dream of having systems that can do this electronically that says, hey, the last three quarters, they're losing money" — indicating current state is manual review of 365 licensed funds totaling $54B. [[inputs/interviews/2026-05-XX-morris]]
- **UCP rebuilt "for the fourth time":** Hillary describes being "eight years later, rebuilding the same system for the fourth time." Technical debt and churn consume development capacity: "I was like, just let me build some things." [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Five-year GSA integration delay:** "Waiting five solid years for them to just add veterans certifications in SAM.gov." Interagency data-sharing timeline delays block program effectiveness. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Manual certification reviews before straight-through:** All certifications required human review with week-long timelines before the June 9 straight-through processing launch (which will still only eliminate 50% of manual reviews). [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Manual IRS 4506-T/4506-C verification creates constant backlog risk.** Physical tax request forms with manual signature verification by both SBA and IRS personnel are legally required under IRS §6103(c) until a digital consent solution exists. This is a structural Time Trap, not a process inefficiency: the bottleneck is embedded in law. [[inputs/research/2026-07-06-gemini-capture]]
- **8(a) mass suspension from processing capacity failure.** December 2025 compliance order required 4,300 active 8(a) firms to submit 3 years of financial documents by deadline. SBA suspended 1,091 firms (25%) in January 2026 because it could not process the document volume before the deadline. The Time Trap directly caused compliance harm at scale. [[inputs/research/2026-07-06-gemini-capture]]
- **Disaster OIG audit documentation failure.** OIG Desktop Loss Verification audit of 28 approved disaster assistance files found: 12 of 28 lacked required damage photographs entirely; only 1 of 28 contained contractor repair estimates, receipts, or insurance reports. Root cause: 2023 transition to new loan processing management platform eliminated critical internal controls rather than replacing them. [[inputs/research/2026-07-06-gemini-capture]]

### Impact on the Customer

Operational staff spend time hunting, transcribing, reconciling, and consolidating data instead of advising small businesses, preparing communities, improving program delivery, or analyzing impact. The Time Trap also limits SBA's ability to respond rapidly to leadership, congressional, and White House questions about disaster impacts and program outcomes. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

For the National Ombudsman, leadership capacity is consumed by manual signing and verification loops instead of strategic oversight, policy feedback, and systemic issue resolution. The 40-75 weekly letters represent significant wasted staff time that could be eliminated with system integration. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

**Direct cost burden:** OII is spending hundreds of thousands annually just to patch SBIC Web, with opportunity cost of resources diverted from modernization and risk of system failure disrupting the SBIC program. [[inputs/interviews/2026-05-XX-morris]]

**Regulatory and compliance risk:** 30-day lag in 1502 lender reporting prevents timely oversight of loan portfolio health. Banks required manual enforcement to reach 99.9% compliance. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]

**Platform instability:** GCBD has rebuilt UCP four times in eight years, with straight-through processing innovations being implemented on unstable foundations. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

### Root Cause Hypothesis

Core business processes depend on manual workbooks, SharePoint archives, public-system searches, and post-hoc RPA consolidation because data sources are not API-connected into the workflow at the point of need. Automation exists in fragments, but it compensates for missing integration rather than removing the manual process. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] NOCMS letter generation and case management similarly lack workflow orchestration and system-to-system integration. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

Legacy systems (SBIC Web, UCP rebuilt multiple times) create technical debt that consumes capacity. Monthly batch processes (1502) persist when real-time integration is technically feasible. External partner delays (GSA 5-year wait) compound internal process inefficiencies. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]] [[inputs/interviews/2026-05-XX-morris]] [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

---

## Trust Gap

**Severity:** Medium  
**Confidence:** High — based on 5 interviews plus external audit findings (PIIA non-compliance + disaster OIG + FISMA regression) showing Validate is failing in practice, not just under-resourced

> [!NOTE]
> Research adds external audit evidence that strengthens the Trust Gap diagnosis. Validate score has been revised from 2 to 1 in [[04-data-value-chain]] based on these findings (see that page for full rationale). The Trust Gap remains Medium severity but is now better evidenced — current controls are not operating effectively, not merely "partial."

### Evidence

- Christopher Allen distinguishes UCP as the certification system of record, while Small Business Search is only a public reference tool and SAM.gov self-certification creates a "trust but verify" situation. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- UEI and EIN are both needed to connect contracts to small-business records because subsidiaries and ownership structures complicate matching. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Thomas Rogers says NAICS codes are too broad for understanding what firms actually do; external directories may be more granular but are not linked to SBA records. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Disaster teams duplicate information across offices and divisions, creating multiple counts of the same thing. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- Sensitive tax, ownership, IRS, disaster, and business documentation introduces governance and access questions, but the transcript does not fully describe lineage, catalog, or policy enforcement. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]
- National Ombudsman's Power BI reports show different case counts than NOCMS (e.g., 499 vs 521 cases), indicating data-quality or ETL issues: "The system will say 499. The power BI say 521. What's happening here?" [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- National Ombudsman must manually verify loan details because there is no system-to-system integration, creating both delay and risk of error. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]
- **GSA relationship and data reliability:** Hillary describes GSA as "probably the worst at government to government internal customer service." FPDS-NG now under SAM.gov with "constant changes" creates data instability. USA Spending described as "not sufficient... a lot of work for not much." [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Third-party data validation for straight-through processing:** Straight-through processing depends on federal liens, incarceration records, VA API — quality and timeliness of these sources will determine automation success. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]
- **Async callback fragility for underwriting:** E-Tran must wait for async callbacks from delegated/non-delegated underwriting centers operating on different technology stacks. API integration points are failure zones with no real-time visibility into underwriting queue status. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]
- **PIIA non-compliance: controls not operating effectively.** KPMG May 2026 audit found SBA failed to: (a) document risk assessments for applicable programs; (b) publish accurate root causes and tolerable error rates for Section 1112 payments and disaster loans; (c) maintain adequate PPP loan guaranty purchase review procedures. These are Validate failures at the enterprise level, not local data-quality issues. [[inputs/research/2026-07-06-gemini-capture]]
- **Disaster OIG: systematic documentation control failure.** 12 of 28 disaster files lacked required damage photographs; only 1 of 28 had repair estimates. Loss verifiers' comments did not support conclusions. These are Validate failures at the point of disbursement — SBA is approving assistance without the documentation that validates the claim. [[inputs/research/2026-07-06-gemini-capture]]
- **FISMA IAM regression to Level 2.** Identity and Access Management fell from a higher baseline to Level 2 (below OMB minimum). ICAM Governance Board is active but controls are not operating at the managed/measurable level. This strengthens the Trust Gap evidence: governance structures exist but are not consistently enforced. [[inputs/research/2026-07-06-gemini-capture]]

### Impact on the Customer

SBA staff can find data, but they still need SME judgment to decide which source is authoritative, how to match business identities, and whether public/external data is valid for program decisions. That limits straight-through processing, slows fraud/program-integrity checks, and makes it harder to ground agents or proactive recommendations in trusted context. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

For the National Ombudsman, reporting discrepancies undermine trust in metrics used for resource planning and performance reporting, and manual verification loops introduce risk of human error. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

**External partner data quality issues:** GSA/SAM.gov constant changes and poor service create instability. USA Spending insufficient for certification program needs. Third-party APIs for straight-through processing (liens, incarceration, VA verification) introduce new validation dependencies. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]]

**System integration fragility:** Underwriting center API callbacks create failure zones. Payment history fragmented when loan moves from ULP to GPTS. Manual verification required because automated cross-checks don't exist. [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]

### Root Cause Hypothesis

Trust issues appear to stem from partial identity resolution, multiple authoritative domains, public/self-certified data, broad business classifications, and insufficient enterprise metadata/lineage across program and external datasets. The problem is not simply bad data; it is lack of governed context explaining which data should be trusted for which decision. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]] NOCMS reporting discrepancies suggest ETL or data-quality issues between operational and analytical systems. [[inputs/interviews/2026-07-06-national-ombudsman-natalie]]

External partner relationships (GSA) compound internal data-quality challenges with service issues and constant system changes. Loose coupling patterns (async callbacks, batch uploads) create validation gaps. Third-party data sources add new trust dependencies without clear quality controls. [[inputs/interviews/2026-06-XX-gcbd-hillary-certifications]] [[inputs/interviews/2026-07-06-7a-loan-process-structured-findings]]

---

## Barrier Interaction

The **Blind Spot** is the dominant barrier: no single SBO profile connects certifications, loans, assistance, events, disaster history, size/COC matters, contract signals, and external data. The **Time Trap** compounds it because staff can often recover the missing context only through manual search, spreadsheet entry, SharePoint document hunting, and after-the-fact consolidation. The **Trust Gap** then limits automation: even if data is found, staff must still decide which source is authoritative, how to match identities, and whether a public/self-certified signal is reliable enough for program action. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

For roadmap sequencing, this points to **Unlock first**: connect the systems and define the SBO identity spine before scaling advanced analytics or agents. Trust work should run in parallel for the highest-risk identifiers and sensitive datasets. Activate use cases should be scoped narrowly until the profile and governance foundations are in place. [[inputs/interviews/2026-05-07-sbo-persona-internal-sme]]

---

## Barrier Summary Table

| Barrier | Severity | Primary Evidence | Root Cause | Report Section |
|---|---|---|---|---|
| Blind Spot | High | Size/COC in SharePoint; Eventbrite and 7J assistance not in MySBA Customers; UCP/CAFS/ULP/SVOG/CSH/SAM.gov all hold partial views; NOCMS cannot access lending systems; no regulation aggregation; no unified borrower identity across 7A/disaster/microloan/SBIC; SBIC and 7A systems siloed; Lender Match disconnected from E-Tran; contracts data not in UCP; GSA 5-year integration delay | Program-centered systems without enterprise SBO identity resolution; isolated case-management systems; no entity resolution across loan types; external partner integration blocked | Section 2 — Three Barriers |
| Time Trap | High | Annual Review Workbook manual entry; no API connection; RPA consolidation; manual IRS/SAM/Census lookup; duplicated disaster data gathering; National Ombudsman 40-75 manual letters/week; 30-40 manual signatures/day; monthly 1502 batch process; SBIC Web "100s of thousands/year" maintenance; UCP rebuilt 4 times in 8 years; GSA 5-year delay; manual certification reviews (50% still manual after straight-through); IRS §6103 legally-mandated physical 4506-T/4506-C workflow; 8(a) mass suspension (1,091 firms) from inability to process 4,300 financial packages; disaster OIG (12/28 files missing required photos, 1/28 had repair estimates) | Workflow automation compensates for missing data integration; manual verification loops scale poorly; legacy system technical debt; external partner delays; monthly batch when real-time is feasible; IRS §6103 is a structural legal constraint not a process choice | Section 2 — Three Barriers |
| Trust Gap | Medium | UCP vs SAM.gov/SBS authority distinctions; UEI/EIN/subsidiary matching; NAICS too broad; duplicate counts; NOCMS vs Power BI discrepancies (499 vs 521 cases); GSA "worst at government to government customer service"; constant FPDS-NG changes; USA Spending insufficient; third-party API quality for straight-through; async underwriting callback fragility; PIIA non-compliance (failed risk assessments, root-cause reporting, PPP review procedures); disaster OIG audit (systematic documentation control failure); FISMA IAM Level 2 regression | Multiple source authorities and weak semantic/lineage context; ETL/data-quality issues between operational and analytical systems; external audit findings confirm controls failing at enterprise and program levels — not merely partial; ICAM Governance Board active but below minimum baseline | Section 2 — Three Barriers |
