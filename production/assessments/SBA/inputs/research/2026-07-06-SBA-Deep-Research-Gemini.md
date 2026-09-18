# Salesforce Data + AI Enterprise Strategy: SBA Data Readiness Assessment

## Business Context and Strategic Outcomes

### Mission-Critical Mandates and Strategic Redirections

The strategic posture of the U.S. Small Business Administration (SBA) has undergone a fundamental transformation, shifting away from social-equity programs and expanding direct-intervention services toward strict regulatory compliance, rigorous fraud prevention, and administrative rightsizing.1 The fiscal year (FY) 2027 Congressional Budget Justification reflects this redirection, requesting a discretionary budget of $329 million, which represents a 67 percent reduction from the FY 2026 enacted level.2 This budgetary constraint forces the agency to downsize its Salaries and Expenses (S&E) account to $260 million and eliminate several legacy entrepreneurial development initiatives, including the Service Corps of Retired Executives (SCORE) and the Community Navigator Pilot Program.2 Under the executive leadership of Administrator Kelly Loeffler, the agency has prioritized the elimination of waste, fraud, and abuse.1 The SBA has enacted policies to limit Small Disadvantaged Business (SDB) contracting goals to their statutory 5 percent cap and has initiated retroactively scoped audits targeting high-dollar, limited-competition contracts spanning fifteen years.1

To support domestic production under these tight fiscal conditions, the SBA has deployed the "Make Onshoring Great Again" portal to actively connect small businesses with verified domestic manufacturers.3 Additionally, the agency manages capital delivery through initiatives like the 7(a) Working Capital Pilot (WCP) program, launched in August 2024.4 This program provides monitored lines of credit of up to $5,000,000 to assist growing businesses.4 The transition to a smaller workforce and reduced operating budgets requires the SBA to automate its data architectures, transforming the front-end MySBA ecosystem into a highly integrated, automated platform.2

### Performance Measurement and Evaluation Frameworks

The SBA measures its mission performance through the Enterprise Learning Agenda (ELA) and Annual Evidence Plans, which align with the Foundations for Evidence-Based Policymaking Act of 2019.7 These evaluation plans are overseen by the Office of Performance, Planning, and the Chief Financial Officer.7 However, the foundational ELA research questions were established under the FY 2018–2022 Strategic Plan, which is now older than two years and must be flagged as potentially outdated for the current 2026 fiscal environment.8 Similarly, the SBA's broader digital strategy relies on a Chief Information Officer (CIO) directive dating back to 2012, which is highly outdated and fails to address the governance demands of modern data lakes and agentic artificial intelligence.9

To establish a clear baseline for the Data Readiness Assessment (DRA), the following table maps the SBA's core mission-critical programs to their primary performance metrics, underlying database systems, and verified data dependencies.

| **Mission-Critical Program** | **Primary Performance Metrics** | **Core Database Systems** | **Verified Data Dependencies & Inputs** |
| --- | --- | --- | --- |
| **7(a) Loan Program & Working Capital Pilot (WCP)** | Loan volume, default rates, and annual guaranty fee utilization.4 | Capital Access Financial System (CAFS); E-Tran.12 | 12-month operational histories, accounts receivable/payable agings, and annual business tax transcripts.4 |
| **Disaster Recovery & Resilience Loans** | Speed-to-disbursement, loss verification accuracy, and improper payment rates.14 | Disaster Loan Application Portal (DLAP); CAFS.15 | IRS tax request verification forms, field photographs, cost of repair estimates, and insurance reports.15 |
| **Government Contracting Certifications** | Processing backlogs, 8(a) participant audits, and Veteran certification counts.1 | MySBA Certifications; SAM.gov; Small Business Search (SBS).18 | Three years of auditable business financial statements, corporate registry records, and training modules.1 |

### Customer-Facing Pain Points and Operational Bottlenecks

Small businesses encounter severe administrative barriers when seeking capital or certification from the SBA.1 Operational bottlenecks within the disaster recovery loan framework are particularly acute.13 The SBA's transition to a new loan processing management platform in 2023 weakened and eliminated critical internal controls.15 A subsequent verification inspection conducted by the SBA Office of Inspector General (OIG) in FY 2025 reviewed 28 approved disaster assistance files.15 The audit revealed that 12 files completely lacked required damage photographs, and only a single file contained necessary contractor repair estimates, repair receipts, or insurance reports.15 The loss verifiers' comments were minimal and failed to support their conclusions, resulting in extended processing delays and high error rates.15

Furthermore, the manual processing of tax verification request forms (such as IRS Forms 4506-T and 4506-C) creates a significant paperwork backlog.13 Because the SBA lacks direct database access to tax transcripts, the manual verification of physical signatures by both SBA and IRS personnel delays the release of emergency recovery funds.13

In the government contracting sector, the lack of automated, data-driven verification tools has led to massive program disruptions.1 Following an order in December 2025 requiring all 4,300 active 8(a) firms to submit three years of financial records to root out shell companies, the SBA was forced to suspend 1,091 firms in January 2026—representing 25 percent of all program participants—because the agency could not process the volume of documents before the compliance deadline.1 This administrative logjam occurred shortly after the agency cleared a backlog of 2,700 Veteran Small Business Certification (VetCert) applications, which had accumulated when staff resources were diverted away from veteran programs to handle minority-preference certifications under previous administrative policies.1

### Executive Stakeholder Alignment Matrix

Navigating the SBA's technical modernization requires direct engagement with several key decision-makers across its complex organizational structure.9 Chief Information Officer Hartley Caldwell, appointed in May 2025, also serves as the Chief AI Officer (CAIO).9 Caldwell brings an extensive background in fintech, retail banking, and digital payments from the private sector, and he chairs the Business Technology Investment Council (BTIC), which holds final authority over all technology investments.22

The career-track leadership is supported by Deputy CIO Douglas Robertson; however, his CTO appointment occurred in September 2023, which is older than two years and must be flagged as potentially outdated, requiring verification of current duties.9

Data policy and Evidence Act compliance are led by Chief Data Officer Anna Maria Calcagno, who also serves as the Director of the Office of Strategic Management and Enterprise Integrity.9

Financial risk oversight is managed by Chief Financial Officer and Chief Risk Officer Nathan Davis.9

Operational program owners include Thomas Kimsey (Associate Administrator for the Office of Capital Access), Chris Stallings (Associate Administrator for the Office of Disaster Recovery and Resilience), and Ryan Lambert (Associate Administrator for the Office of Government Contracting and Business Development).11 These program directors manage the business units with the most immediate data integration challenges.11

## Data and AI Use Case Opportunities

### Inter-Agency Data Silos and Structural Bottlenecks

The primary structural bottleneck in the SBA's data ecosystem is the manual, document-dependent interface between the SBA and the IRS.13 Legally "hamstrung" by Section 6103 of the Internal Revenue Code, the SBA cannot access tax records directly without explicit applicant consent for each individual transaction.13 The current system relies on Section 6103(c), which forces applicants to complete physical tax request forms that must be manually verified by personnel at both agencies.13 This manual routing creates a constant risk of backlogs.13 During the peak of the COVID-19 Economic Injury Disaster Loan (EIDL) program, which processed 3.7 million loans totaling $360 billion, IRS backlogs became so severe that the SBA bypassed the validation queue and instructed applicants to submit their tax documents directly.13 This policy bypass compromised internal controls, as subsequent audits found that nearly half of the approved EIDL files lacked verifiable tax documents, or contained only error messages stating that tax records were completely unavailable.13

In addition, the SBA continues to struggle with compliance under the Payment Integrity Information Act of 2019.14 An independent audit conducted by KPMG in May 2026 determined that the SBA was non-compliant with federal improper payment reporting mandates.14 The auditors found that the SBA had failed to perform or document required risk assessments for all applicable programs.14 Furthermore, the agency failed to publish accurate root causes and tolerable error rates for Section 1112 payments and disaster loans.14 The SBA also lacked adequate review procedures to produce reliable sample results for verifying Paycheck Protection Program (PPP) loan guaranty purchases.14 The lack of a unified, enterprise-wide database prevents the agency from identifying improper payments before funds are disbursed.14

### AI Maturity, Governance, and the 2025 General Pause

The SBA's history of AI adoption has been undermined by poor documentation and high staff turnover, resulting in non-compliance with federal disclosure laws.24 Although required to publish an annual public inventory of its active, in-development, and decommissioned AI use cases under the Advancing American AI Act of 2022, the SBA failed to publish any inventory from 2021 through 2024.24 The agency did not release its first public AI inventory until March 2026—two months past the OMB deadline.25 This 2026 inventory listed only seven use cases, all in early-stage development.25 This represented a significant contraction from the 21 internal use cases tracked in 2024, which were subsequently decommissioned, paused, or never deployed.26

In response to these compliance gaps and shifting executive priorities under the new administration, the SBA implemented an agency-wide pause on all general AI deployments in March 2025.24 This pause was designed to allow the Data Governance Board and the AI Governance Council to review all machine learning applications for compliance with updated executive orders and federal security baselines.26 As of mid-2026, this pause remains in effect.24 However, the SBA authorized a specific exemption for seven pilot or pre-pilot projects to evaluate the security, performance, and mission value of targeted AI capabilities 24:

- [ ] **Lending Fraud Detection Pilot:** An analytical program launched to test machine learning algorithms against SBA lending datasets to identify and flag fraudulent transaction patterns.26
- [ ] **IT Operations and Cybersecurity Pilots:** Multi-phase pilots initiated in June, September, and December 2025 to evaluate predictive monitoring, continuous security logging, and automated threat detection within the Office of the CIO.26

## Technical Landscape and Enterprise Architecture

### Enterprise Technology Stack and Salesforce Footprint

The SBA's constituent-facing operations are built on the Salesforce platform, utilizing a unified portal known as MySBA (or the SBA Digital Platform).5 This platform operates in a secure, federal-grade Salesforce GovCloud Plus environment, which is deployed on isolated, dedicated AWS GovCloud (US) infrastructure.5 The MySBA architecture leverages single sign-on (SSO) to consolidate several historically siloed systems into a single entry point.18

These integrated portals include MySBA Certifications, the MySBA Loan Portal, and the Small Business Search (SBS), which replaced the legacy Dynamic Small Business Search (DSBS).16

The technical profile of the SBA's Salesforce implementation is detailed in the table below, contrasting front-end Salesforce portals with their legacy database interfaces.

| **Front-End Portal** | **Primary User Group** | **Host Environment** | **Core Salesforce Cloud / Managed Package** | **Legacy Database Interface** |
| --- | --- | --- | --- | --- |
| **MySBA Certifications** | Small businesses applying for 8(a), HUBZone, VetCert, and WOSB.18 | GovCloud Plus; Site.com domain.5 | Salesforce Public Sector Solutions (PSS).28 | SAM.gov API integration; Legacy Certify database.18 |
| **MySBA Loan Portal** | Disaster and commercial borrowers checking loan statuses and balances.16 | GovCloud Plus; lending.sba.gov.16 | Experience Cloud / Financial Services Cloud.5 | Capital Access Financial System (CAFS) backend database.12 |
| **Small Business Search (SBS)** | Federal procurement officers searching for active small business contractors.18 | GovCloud Plus.5 | Platform App Services.19 | Dynamic Small Business Search (DSBS) migrated database.19 |

The SBA's data architecture is structured around two primary backend systems:

- [ ] **Oracle E-Business Suite:** The central ERP database of record for financial transactions, ledgers, and agency-wide expenses.31 To maintain this critical infrastructure, the Office of the CIO awarded a 5-year, $7.99 million database support contract in June 2026 to Cyber Security Solutions, LLC under the GSA 8(a) STARS III vehicle.31
- [ ] **Capital Access Financial System (CAFS):** The core database of record for all commercial and disaster loan portfolios, managing application ingestion, payment histories, and loan document tracking.12 CAFS has been updated to enforce SSO for internal staff, while requiring external stakeholders to register verified emails to comply with updated security protocols.12

To evaluate modernization options, the SBA's Salesforce-centric architecture can be compared to standard federal deployment patterns, such as peer agency configurations running enterprise WordPress or Drupal CMS installations on Microsoft Azure.32 While those peer environments rely on Azure SQL Databases, Entra ID integration, and Microsoft Sentinel SIEM logging, the SBA's core architecture is built around AWS GovCloud, utilizing Salesforce Data Cloud and MuleSoft for integration.28

### Data Integration Architectures and Middleware

The SBA manages its data exchange through **MuleSoft Government Cloud**, a secure iPaaS deployment that has been granted a federal provisional Authority to Operate (ATO) at a Moderate impact level.34 MuleSoft is the primary integration engine connecting front-end Salesforce environments with legacy systems like Oracle and CAFS.28 This middleware architecture is further enhanced by **MuleSoft Direct**, which embeds industry-standard integration patterns and connectors natively inside Salesforce Industry Clouds (such as Financial Services Cloud), reducing the need for heavy custom code.30

To support advanced analytics and data unification, the SBA can leverage **Salesforce Data Cloud**, which is built on AWS GovCloud and authorized at the FedRAMP High baseline.28 Data Cloud is designed to transition agencies from manual, batch-based data integration to a real-time, federated data architecture through several key capabilities 35:

- [ ] **Zero-Copy Virtualization:** Enables the SBA to query external databases (such as Amazon S3, Azure SQL, or IBM watsonx.data) in-place without the risk, cost, and latency of traditional ETL pipelines.35
- [ ] **Identity Resolution matching:** Combines duplicate record clusters from CAFS, SAM.gov, and the Small Business Search into a single, unified "Customer 360" profile.35
- [ ] **Flow Integration Managed Package:** Captures and logs active system flow metrics directly into Data Cloud, giving administrators real-time visibility into process execution and bottlenecks.40
- [ ] **Federated Data Spaces:** Allows specific program offices (e.g., Disaster Recovery or Government Contracting) to maintain complete ownership of their data while sharing infrastructure within a unified enterprise Salesforce tenant.38

### FISMA Compliance Regressions and Security Posture

Any new database or data platform deployment at the SBA must address the significant security and compliance gaps identified in recent federal audits.14 The FY 2025 Federal Information Security Modernization Act (FISMA) evaluation, completed by independent auditors in May 2026, revealed that the SBA's overall information security program fell below the OMB baseline for effective controls.41 The audit evaluated the SBA across 10 security domains using a 5-level maturity model, where "Managed and Measurable" (Level 4) is the minimum baseline for effective security 41:

- [ ] **Level 5 (Optimized):** Incident Response (the only domain that exceeded the federal baseline).41
- [ ] **Level 4 (Managed and Measurable):** Zero domains achieved this baseline rating.41
- [ ] **Level 3 (Consistently Implemented):** Cybersecurity Governance, Data Protection and Privacy, and Security Training.41
- [ ] **Level 2 (Defined):** Cybersecurity Supply Chain Risk Management, Risk and Asset Management, Configuration Management, and Identity and Access Management (representing a programmatic regression from previous years).41

To address these regressions, SBA management has committed to implementing software-based automated risk management, centralizing core security policies, and deploying continuous monitoring tools.41

The SBA's Identity, Credential, and Access Management (ICAM) Governance Board coordinates these security efforts.9 The board is chaired by CIO Hartley Caldwell, with CFO Nathan Davis serving as Core Member, acting Chief Information Security Officer (CISO) Mike Post serving as Core Member, and CDO Anna Maria Calcagno serving as Advisory Member.9 Any Salesforce Data Cloud implementation must align with this ICAM framework to ensure strict, role-based access control.9

## Industry and Peer Context

### Federal Benchmarks and Cross-Agency Initiatives

The SBA can benchmark its data modernization and integration strategies against other federal agencies that have successfully navigated similar data-sharing and financial compliance challenges.43 The Social Security Administration (SSA), for example, partnered with the Department of the Treasury under the Ending Improper Payments to Deceased People Act to share its Death Master File database.45 This direct, automated data-sharing initiative identified, prevented, or recovered $109 million in improper payment errors in 2024 alone.45 This successful integration highlights the value of automated, inter-agency data sharing over manual verification processes.13

Additionally, the Office of Personnel Management (OPM) is currently leading a major consolidation of human capital systems through its **Federal HR 2.0** initiative.44 This program establishes a centralized, modern human capital system with unified platforms for hiring, performance management, and workforce analytics.44 It provides the federal government with a highly interoperable data ecosystem, reducing system duplication and improving data reliability.44

The Department of Homeland Security (DHS) has also established a benchmark for AI governance by publishing its unclassified 2025 AI Use Case Inventory in compliance with OMB M-25-21.43 The DHS inventory streamlines reporting by categorizing use cases by risk level and deployment stage, demonstrating a level of operational transparency and maturity that the SBA has struggled to achieve.24

The table below contrasts the SBA's current data sharing, AI maturity, and financial auditing baselines with these peer federal agencies.

| **Agency Name** | **Data Integration / Sharing Maturity** | **AI Governance and Inventory Status** | **Key Audit / Compliance Findings** |
| --- | --- | --- | --- |
| **Small Business Administration (SBA)** | **Low;** reliant on manual verification and paper consent forms for IRS tax transcript checks.13 | **Developing;** general AI pause in place since March 2025; first-ever public inventory delayed until March 2026.24 | **Non-compliant** with the Payment Integrity Information Act; fell below FISMA baselines in 9 of 10 security domains.14 |
| **Social Security Administration (SSA)** | **High;** permanent, automated database sharing of the Death Master File with the Treasury.45 | **Highly Mature;** split the CIO role into separate Customer Product and Core Business functions.46 | Successfully prevented or recovered **$109 million** in improper payments in 2024.45 |
| **Office of Personnel Management (OPM)** | **High;** leading the Federal HR 2.0 system consolidation for government-wide human capital data.44 | **High;** deploying target recruitment strategies to build a highly skilled technology and AI workforce.44 | Upgrading health insurance technology to verify enrollment integrity using dedicated tax-cut funding.44 |
| **Department of Homeland Security (DHS)** | **High;** unclassified data-sharing networks integrated with federal law enforcement partners.13 | **High;** publishes M-25-21 and OMB-compliant inventories, updating them periodically throughout the year.43 | Successfully transitioned unclassified AI systems into managed, high-impact deployment categories.43 |

### Socio-Political Constraints and Procurement Windows

Any technical solution proposed for the SBA must align with the agency's strict socio-political constraints and standard procurement timelines.1 From a political perspective, Kelly Loeffler's administration has taken direct action to dismantle diversity, equity, and inclusion (DEI) initiatives within the contracting portfolio.1 Specifically, the SBA ended the practice of approving 8(a) certifications based on unsubstantiated claims of discrimination, and has cut Small Disadvantaged Business goals back to the statutory 5 percent cap.1 Furthermore, the agency has launched retroactive audits of all high-dollar, limited-competition 8(a) contracts going back 15 years, following a Department of Justice investigation that uncovered a $550 million bribery scheme.1 Consequently, any proposed data or AI solution must prioritize compliance, auditability, fraud prevention, and waste elimination to secure executive sponsorship.1

From a procurement perspective, the SBA's technology acquisitions are heavily constrained by the requested 67 percent reduction in its discretionary budget for FY 2027.2 This budget cut requires any proposed system to demonstrate immediate cost savings and operational efficiencies.2 To streamline acquisitions, the SBA frequently utilizes established government-wide contracting vehicles.31

For example, the Office of the CIO's recent $7.99 million Oracle database support task order was competed and awarded via the **GSA 8(a) STARS III** contract vehicle.31 Proposed Salesforce implementations should leverage these existing vehicles or GSA Schedules to align with the SBA's compressed procurement timelines and budget realities.2

## Synthesis and Strategy Recommendations

### Executive Interview Discovery Question Sets

To gather the necessary business and technical requirements during the Data Readiness Assessment, the architect should utilize these targeted, role-specific discovery questions during stakeholder interviews:

- [ ] **To Chief Information Officer & Chief AI Officer Hartley Caldwell:**
  - [ ] *Question:* "How can we structure the security architecture of Salesforce Data Cloud to directly address the regressive findings in our 2025 FISMA audit—specifically within identity and access management, risk management, and continuous monitoring—to support your automated risk-mitigation goals?" 38
  - [ ] *Question:* "With the pending legislative requirements under the SBA Artificial Intelligence Utilization Act (H.R. 8881), what metadata standards, data lineage tracking, and explainability frameworks must our Salesforce AI engines provide to ensure compliance with annual congressional reporting mandates?" 27
- [ ] **To Chief Data Officer Anna Maria Calcagno:**
  - [ ] *Question:* "How can we leverage Salesforce Data Cloud's zero-copy architecture to query the Oracle E-Business Suite database in real-time, preventing the security risks of data replication while maintaining a single, compliant system of record?" 31
  - [ ] *Question:* "How can we utilize the identity resolution engine within Data Cloud to resolve the data quality and sampling errors flagged in our recent PIIA audit, specifically for Section 1112 payments and PPP loan guaranty purchases?" 14
- [ ] **To Chris Stallings (Associate Administrator, Disaster Recovery and Resilience) & Ryan Lambert (Associate Administrator, Government Contracting and Business Development):**
  - [ ] *Question:* "As we prepare for the IRS MoU renewal on October 31, 2027, how can we build a native, digital consent-capture workflow into the MySBA Portal to reduce manual signature verification and speed up disaster loan processing?" 13
  - [ ] *Question:* "To resolve the record-keeping failures flagged in the OIG Desktop Loss Verification audit, how can we use MySBA to enforce mandatory document and photo uploads before an application is submitted to loan verifiers?" 15

### Scoping Recommendations for Technical Deep-Dives

To ensure the technical discovery phase is highly targeted, the architect should focus on the following core areas:

- [ ] **Identity Resolution Rules:** Analyze the schema of CAFS, SAM.gov, and SBS to design match rules (e.g., matching business Tax IDs and CAGE codes) that can resolve duplicate profiles into a single Customer 360 record on GovCloud Plus.12
- [ ] **Document Parsing Pipelines:** Evaluate how Einstein Document AI can be integrated with the MySBA Certifications upload flow to automatically extract and parse financial metadata from tax forms and financial statements, flagging incomplete files before they enter the processing queue.1
- [ ] **Flow Logging and Credit Consumption:** Audit the "Salesforce Data Cloud - Flow Integration" managed package to estimate the credit consumption and billing impact of logging real-time flow metrics for high-volume transactions.40
- [ ] **FISMA-Aligned Access Controls:** Map Salesforce sharing rules, permission sets, and Data Spaces to the SBA's ICAM framework to ensure strict, role-based access control that addresses the 2025 FISMA audit findings.9

### High-Impact Use Cases

#### Automated Consent-Driven Tax Verification Integration

- [ ] **Target Business Outcome:** Eliminate the manual verification backlog for the Disaster Loan Program, reducing loan processing times from weeks to minutes while maintaining compliance under IRS Section 6103(c).13
- [ ] **Technical Architecture:** The borrower completes their application on the MySBA Portal (built on Experience Cloud inside GovCloud Plus).5 The portal natively captures the applicant's digital signature and consent.13 This event is ingested by Salesforce Data Cloud, which uses a secure MuleSoft API to transmit the consent token directly to the IRS database, triggering an automated tax transcript query.13

- [ ] **Security Guardrails:** All transaction logs and consent records are encrypted and stored within the SBA's FedRAMP High GovCloud boundary, supporting continuous security monitoring compliance under FISMA.28

#### Einstein-Assisted Certification Processing and Human-in-the-Loop Audit Engine

- [ ] **Target Business Outcome:** Accelerate 8(a) and VetCert application processing, preventing compliance backlogs while enforcing strict fraud-detection audits to root out shell companies.1
- [ ] **Technical Architecture:** Utilizing the MySBA Certifications portal, applicants upload required business financial statements.1 Salesforce Data Cloud ingests these files and associates the unstructured metadata with the contractor's profile, synced with SAM.gov via zero-copy federation.19 Einstein Document AI extracts key financial parameters, runs automated rule-checking against SBA program standards, and alerts program officers to missing documents.47
- [ ] **Security Guardrails:** To align with the SBA Artificial Intelligence Utilization Act (H.R. 8881), the system implements human-in-the-loop review.27 The AI drafts warning or missing-document notifications, but an SBA program analyst must review and approve the draft before dispatch, maintaining clear staff accountability.27

#### Continuous Compliance Monitoring and PIIA Fraud Prevention Dashboard

- [ ] **Target Business Outcome:** Bring the SBA into full compliance with the Payment Integrity Information Act of 2019 by continuously auditing loan files, preventing improper payments, and documenting precise root-cause analysis.14
- [ ] **Technical Architecture:** Salesforce Data Cloud utilizes zero-copy data virtualization to connect the front-end MySBA environment directly with the legacy Oracle E-Business Suite database and CAFS backend.31 By creating a single, federated data model, CRM Analytics runs real-time risk assessment algorithms against active loan portfolios.14
- [ ] **Security Guardrails:** The platform flags high-risk transactions—such as duplicate applications, missing damage photo verifications, or mismatching bank accounts—prior to loan disbursement, allowing the Office of Capital Access to prevent improper payments before they occur.14 All risk scoring and subsequent human overrides are permanently logged within an immutable, auditable system of record on GovCloud Plus, addressing the key findings of the 2025 KPMG audit.14

#### Works cited

- [ ] SBA Suspends Over 1,000 8(a) Firms from Program Following December Document Request | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/article/2026/01/28/sba-suspends-over-1000-8a-firms-program-following-december-document-request
- [ ] small business administration - Budget of the U.S. Government, accessed July 6, 2026, https://www.govinfo.gov/content/pkg/BUDGET-2027-BUD/pdf/BUDGET-2027-BUD-22.pdf
- [ ] Small Business Administration, accessed July 6, 2026, https://www.sba.gov/
- [ ] 7(a) Working Capital Pilot program | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/partners/lenders/7a-loan-program/7a-working-capital-pilot-program
- [ ] SBA Digital Platform - Login, accessed July 6, 2026, https://mysba--qaqc.sandbox.my.site.com/login?locale=us
- [ ] MySBA Home, accessed July 6, 2026, https://my.sba.gov/s/
- [ ] Annual Evidence Plan | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/document/report-annual-evidence-plan
- [ ] Performance | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/about-sba/organization/performance
- [ ] Digital SBA | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/about-sba/open-government/digital-sba
- [ ] Congressional Budget Justification and Annual Performance Report | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/document/report-congressional-budget-justification-annual-performance-report
- [ ] SBA leadership | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/about-sba/organization/sba-leadership
- [ ] Capital Access Financial System - SBA, accessed July 6, 2026, https://caweb.sba.gov/
- [ ] SBA-IRS data-sharing process for disaster loans needs better tech ..., accessed July 6, 2026, https://fedscoop.com/sba-irs-data-sharing-disaster-loan-program-gao-report/
- [ ] Independent Auditors' Report on SBA's Fiscal Year 2025 Compliance with the Payment Integrity Information Act of 2019 | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/document/report-26-09-independent-auditors-report-sbas-fiscal-year-2025-compliance-payment-integrity-information-act-2019
- [ ] SBA's Desktop Loss Verification Process | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/document/report-26-05-sbas-desktop-loss-verification-process
- [ ] Capital Access Financial System - SBA, accessed July 6, 2026, https://catweb2.sba.gov/
- [ ] GAO-26-107682, DISASTER ASSISTANCE: SBA Should Take Steps to Make Data Sharing with IRS More Efficient, accessed July 6, 2026, https://files.gao.gov/reports/GAO-26-107682/index.html
- [ ] SBA single sign-on logins | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/secure/login
- [ ] SBA account login and registration portals | U.S. Small Business Administration, accessed July 6, 2026, https://www.sba.gov/about-sba/open-government/about-sbagov-website/sba-account-login-registration-portals
- [ ] SBA Certify - Small Business Administration | SBA Certify - Small, accessed July 6, 2026, https://certify.sba.gov/
- [ ] SBA – MeriTalk, accessed July 6, 2026, https://www.meritalk.com/tag/sba/
- [ ] Hartley Caldwell | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/person/hartley-caldwell
- [ ] Office of the Chief Information Officer | U.S. Small Business Administration - SBA, accessed July 6, 2026, https://www.sba.gov/about-sba/sba-locations/headquarters-offices/office-chief-information-officer
- [ ] Artificial Intelligence: Uses and Risks for Small Business Contracting and Innovation Research | U.S. GAO, accessed July 6, 2026, https://www.gao.gov/products/gao-26-107828
- [ ] SBA Falls Short on Mandated AI Disclosure, GAO Warns - MeriTalk, accessed July 6, 2026, https://www.meritalk.com/articles/sba-falls-short-on-mandated-ai-disclosure-gao-warns/
- [ ] SBA behind the eightball on AI use case reporting, GAO finds - FedScoop, accessed July 6, 2026, https://fedscoop.com/small-business-administration-ai-use-cases-gao-report/
- [ ] House lawmakers seek more AI transparency from the SBA - FedScoop, accessed July 6, 2026, https://fedscoop.com/house-small-business-committee-sba-ai-bills/
- [ ] Government Cloud - Salesforce, accessed July 6, 2026, https://www.salesforce.com/government/cloud/
- [ ] Case Management Software for Government - Salesforce, accessed July 6, 2026, https://www.salesforce.com/government/case-management/
- [ ] MuleSoft Direct Feature Availability Across Salesforce Industry Clouds, accessed July 6, 2026, https://help.salesforce.com/s/articleView?id=005385412&language=en_US&type=1
- [ ] CSS Federal secures SBA Oracle E-Business Suite Database Support Services task, accessed July 6, 2026, https://orangeslices.ai/css-federal-secures-sba-oracle-e-business-suite-database-support-services-task/
- [ ] Managed Azure Operations for Government Microsoft Stacks - eWay Corp, accessed July 6, 2026, https://www.ewaycorp.com/platforms/azure/
- [ ] Government Cloud Available Products and Features - Salesforce Help, accessed July 6, 2026, https://help.salesforce.com/s/articleView?id=000396813&language=en_US&type=1
- [ ] MuleSoft Government Cloud - Salesforce Compliance Site, accessed July 6, 2026, https://compliance.salesforce.com/services/mulesoft-government-cloud
- [ ] Unlocking the Power of Salesforce Data Cloud in U.S. Federal Agencies, accessed July 6, 2026, https://belmarcloud.com/unlocking-the-power-of-salesforce-data-cloud-in-u-s-federal-agencies/
- [ ] FedRAMP - MuleSoft Government Cloud - Salesforce Compliance Site, accessed July 6, 2026, https://compliance.salesforce.com/documents/a006e00000xy6wWAAQ
- [ ] MuleSoft Government Cloud | FedRAMP Marketplace, accessed July 6, 2026, https://marketplace.fedramp.gov/products/FR1818161169/
- [ ] How Salesforce Data 360 Can Help With Federal Data Modernization | ICF, accessed July 6, 2026, https://www.icf.com/insights/analytics/salesforce-data-360-federal-modernization
- [ ] Integrating Salesforce Data Cloud - IBM, accessed July 6, 2026, https://www.ibm.com/docs/en/watsonxdata/saas?topic=integrations-salesforce
- [ ] Install the Salesforce Data Cloud - Flow Integration Managed Package, accessed July 6, 2026, https://help.salesforce.com/s/articleView?id=003876255&language=en_US&type=1
- [ ] Fiscal Year 2025 Federal Information Security Modernization Act - Oversight.gov, accessed July 6, 2026, https://www.oversight.gov/sites/default/files/documents/reports/2026-05/SBA%20OIG%20Report%2026-10%20-%20FY%202025%20Federal%20Information%20Security%20Modernization%20Act.pdf
- [ ] Fiscal Year 2025 Federal Information Security Modernization Act (FISMA) - SBA, accessed July 6, 2026, https://www.sba.gov/document/report-26-10-fiscal-year-2025-federal-information-security-modernization-act-fisma
- [ ] Artificial Intelligence Use Case Inventory | Homeland Security, accessed July 6, 2026, https://www.dhs.gov/ai/use-case-inventory
- [ ] FY 2027 Congressional Budget Justification - Executive Summary - OPM, accessed July 6, 2026, https://www.opm.gov/about-us/fy-2027-congressional-budget-justification/executive-summary/
- [ ] Fiscal Year 2027 Budget Request - Senate Appropriations Committee, accessed July 6, 2026, https://www.appropriations.senate.gov/download/brown-fy27
- [ ] The Federal CIO Tracker: Running List | GovCIO Media & Research, accessed July 6, 2026, https://govciomedia.com/federal-cio-tracker-running-list/
- [ ] Salesforce Agentforce for Government: The AI Layer That Is Redefining State and Local Service Delivery - Cloud For Good, accessed July 6, 2026, https://cloud4good.com/blog/salesforce-agentforce-for-government-the-ai-layer-that-is-redefining-state-and-local-service-delivery/
- [ ] GAO-26-107828, Artificial Intelligence: Uses and Risks for Small Business Contracting and Innovation Research, accessed July 6, 2026, https://www.gao.gov/assets/gao-26-107828.pdf
