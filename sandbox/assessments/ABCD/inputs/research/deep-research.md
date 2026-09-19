---
title: "Deep Research — British Columbia Lottery Corporation"
created: 2026-06-10
source: "Google Drive (Gemini Deep Research output)"
drive_url: "https://drive.google.com/file/d/19xOkxp8aZSv3b5fTYHVD1ciUy9iv2nJTpGgJPX8Gt-Y/view"
tags: [research, bclc, deep-research, gemini]
---

# Data Readiness Assessment Research Report: British Columbia Lottery Corporation

## Executive Summary

The British Columbia Lottery Corporation is facing a critical operational and technological convergence in September 2026.1 Under the leadership of President and Chief Executive Officer Patrick Davis, the Crown corporation is preparing to go live with a new casino gaming management platform, a modernized retail and digital lottery network, and a redesigned rewards program.1 This massive modernization campaign is taking place under intense regulatory scrutiny. In the wake of the 2022 Cullen Commission findings on money laundering and a subsequent $1.075 million administrative monetary penalty issued by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), BCLC must transition from a fragmented compliance model to an integrated, real-time, 360-degree player tracking architecture.4

This Data Readiness Assessment (DRA) evaluates the organization's preparation to transition its player data infrastructure from legacy systems to a unified, real-time activation layer. The assessment focuses on three core operational dimensions:

**Unlock:** Evaluating BCLC's capability to ingest and integrate high-velocity streaming data from disparate transactional platforms, including the upcoming Melco gaming system and modernized Intralot lottery terminals.1

**Trust:** Ensuring player profiles are accurate, secure, legally compliant, and governed in accordance with British Columbia's Freedom of Information and Protection of Privacy Act (FIPPA) and federal anti-money laundering (AML) mandates.8

**Activate:** Designing the real-time operational layer to support the new Rewards & Incentives loyalty program, Future Anthem's personalized promotions, and autonomous Agentforce AI applications.1

The primary findings of this assessment suggest that BCLC's major risk lies in the sheer volume of concurrent changes scheduled for September 2026.1 Simultaneously launching a new gaming platform, a new lottery platform, a new loyalty program, and replacing the legacy master data platform creates significant integration interdependencies.1 To mitigate this risk, the organization must utilize Salesforce Data 360—rebranded from Data Cloud—as an agile downstream activation layer rather than a direct transactional database replacement, ensuring core identity data is governed effectively while allowing real-time player safety and promotional activations to run in parallel.12

## Organizational Overview

The British Columbia Lottery Corporation was established to conduct, manage, and operate commercial gambling, lottery, and sports betting products across British Columbia, returning its net income to the provincial government to support healthcare, education, and municipal infrastructure.1 Operating under a corporate social purpose "to generate win-wins for the greater good," BCLC's commercial footprint spans 22 land-based casinos, two racecourse casinos, 12 community gaming centres, approximately 3,400 retail lottery outlets, and PlayNow.com, the province's single regulated digital gambling channel.1 Beyond British Columbia, BCLC operates under contract to provide digital gambling platforms and sports betting services to Saskatchewan and Manitoba.1

The administrative and operational scale of BCLC is managed across two primary locations: the corporate headquarters at 74 West Seymour Street in Kamloops, and a major regional office at 2940 Virtual Way in Vancouver.15 Financially, the corporation remains a vital driver of provincial revenue, generating $1.408 billion in net income for the Province of British Columbia in fiscal year 2024/25, with an additional $86.6 million distributed to 33 host local governments to fund community projects and cultural organizations.2

The executive team and board of directors maintain direct accountability for aligning technology acquisitions with provincial priorities and strict regulatory oversight:

- **Greg Moore (Board Chair):** Leads the board of directors, overseeing BCLC's strategic service plan, procurement guidelines, and alignment with the Minister Responsible.19
- **Patrick Davis (President & Chief Executive Officer):** Brings over twenty years of technology and gambling sector experience to guide BCLC's digital transformation, multi-channel play strategies, and social-purpose commitments.19
- **Mark Goldberg (Chief Information Officer & VP, Business Technology):** Directs the Business Technology division, managing the transactional systems, lottery validation terminals, cybersecurity infrastructure, and the core technology layers supporting casino floor operations.19
- **Kevin deBruyckere (Interim Chief Compliance Officer & VP, Safer Play & Enterprise Integrity):** Oversees corporate compliance, player health monitoring, investigations, physical security, anti-money laundering units, and privacy management.19
- **Marie-Noëlle Savoie (Interim Chief Social Purpose Officer & VP, Marketing):** Leads social responsibility initiatives, government relations, stakeholder engagement, brand marketing, customer support, and the organization's loyalty programming.19
- **Alan Kerr (Chief Financial Officer & VP, Finance and Corporate Services):** Manages procurement networks, corporate supply chains, financial tracking systems, and facility management.19
- **Dan Beebe (Chief Operating Officer):** Oversees day-to-day operations across physical casinos, retail lotteries, sports betting, and eGaming channels.19

BCLC operates in a rapidly evolving provincial regulatory environment. On April 13, 2026, the province's historical regulator, the Gaming Policy and Enforcement Branch (GPEB), officially transitioned to the Independent Gambling Control Office (IGCO).1 Operating under the Gaming Control Act, the IGCO acts as the sole independent regulator for all provincial gambling, horse racing, and charitable gaming, maintaining direct authority to register gaming workers, approve terminal suppliers, and enforce strict public safety and responsible gambling standards.8

## Regulatory and Compliance Context

The regulatory landscape for British Columbia's gaming sector was fundamentally reshaped by the 2022 final report of the Cullen Commission of Inquiry into Money Laundering.4 Initiated by the provincial government in 2019, the inquiry investigated the systemic flow of illicit cash through local casinos, a pattern historically referred to as the "Vancouver model" of money laundering.4 The inquiry concluded that transnational criminal organizations successfully laundered hundreds of millions of dollars by exploiting cash-based, high-limit table buy-ins, often utilizing unregistered VIP player accounts and underground banking networks to bypass transaction tracking systems.22

The Cullen Report issued 101 formal recommendations, mandating that the provincial government and BCLC build a "flawless 360-degree player view" across all gaming channels.4 In an AML context, a 360-degree player view requires BCLC to establish a continuous, audited record of a player's identity, physical and digital transaction history, source of wealth, and behavioral risk patterns across both online portals and physical casino floors.8 This requires migrating away from anonymous, paper-based cash tracking to verified, account-based play, matching the strict standards enforced on PlayNow.com, where all player accounts are fully verified using government-issued photo identification and credit history checks before access is granted.8

### Transaction Tracking and Compliance Thresholds

To enforce compliance, BCLC operates under strict daily transaction tracking, identity verification, and source-of-wealth validation thresholds mandated by both provincial directives and federal FINTRAC regulations:

| Threshold Limit (CAD) | Triggering Activity / Frequency | Compliance Action & Mandated Requirement |
|---|---|---|
| $1,500 | Accumulated daily transactions (as of June 2024) | Casino operators must continuously track play sessions and log all transactions. |
| $3,000 | Single-day buy-in or disbursement transactions | Mandatory verification of player identity using government-issued photo identification. |
| $10,000 | Single buy-in utilizing cash, bank drafts, or certified cheques | Mandatory execution of a formal Source of Funds Declaration; transactions lacking adequate documentation must be refused. |
| $25,000 | Player prize claims (threshold is $2,000 for retail lottery claims) | Claims are automatically held and reviewed by BCLC's Corporate Security and AML Units. |

Despite implementing transaction tracking software, BCLC continues to experience critical compliance challenges. In August 2025, FINTRAC issued a C$1.075 million administrative monetary penalty to BCLC for failing to file mandatory Suspicious Transaction Reports (STRs) and failing to apply enhanced due diligence to designated high-risk patrons.5 An internal audit completed in February 2025 evaluated BCLC's money laundering controls at a maturity level of only 3.5 out of 5, noting data gaps and a failure to designate several high-risk patrons who were actively transacting on casino floors.6

This risk is heightened by federal regulatory changes. In August 2025, FINTRAC revised its Administrative Monetary Penalties Policy and Supervisory Framework, eliminating the practice of sharing draft findings with organizations before issuing a penalty, introducing immediate public naming, and planning a 40-fold increase in maximum fines under the proposed Strong Borders Act (Bill C-2).5

The legal framework supporting BCLC's enforcement of preventative controls was clarified by the Supreme Court of British Columbia in the case Ghotaymi v. BCLC (2026 BCSC 191).25 The court ruled that BCLC does not require definitive proof of money laundering to impose "enhanced conditions" or play restrictions on a patron's account.25 If a player exhibits a clear risk pattern, such as "structuring" transactions repeatedly just below the $10,000 reporting threshold, BCLC is legally authorized to apply preventative conditions requiring a complete source of funds disclosure before allowing further play.25

The court confirmed that these measures are preventative risk-management tools rather than punitive accusations, placing the operational burden on BCLC to deploy technology capable of detecting these subtle behavioral patterns in real time across different systems.25

## Current State Architecture

BCLC's existing data and technology landscape consists of a highly distributed, hybrid architecture of legacy on-premise transaction systems, specialized compliance databases, and cloud-based CRM applications. This complex environment has created several operational silos, preventing the real-time profile unification required for an active player health and compliance framework.

### Known Systems and Existing Technology Footprint

The organization's core systems operate across distinct lines of business and transactional networks:

- **Salesforce Customer Relationship Management:** Deployed across Marketing, Business Technology, eGaming, Lottery, and the Customer Support Center, serving as the central application tool used by BCLC employees to manage player relationships and track service histories.26
- **Salesforce Chat (formerly Live Agent):** Integrated in 2017 on public-facing websites and PlayNow.com, capturing session-level chat transcripts, handling conversational AI routing, and executing pre-chat data collection.27
- **Talkdesk for Salesforce:** A cloud-based contact center platform integrated with BCLC's Salesforce CRM, utilizing AWS Polly to run real-time speech analytics and sentiment tracking while simplifying customer identity validation.28
- **Everi Compliance:** The core transactional transaction-monitoring and FINTRAC compliance reporting system deployed across all 22 land-based casinos.2 Everi tracks player buy-ins, manages Know Your Customer (KYC) documentation, and automates the filing of Large Cash Transaction Reports and Suspicious Transaction Reports.8
- **Lotos X Omni Ecosystem:** Provided by Bally's subsidiary Intralot, this cloud-based system replaced BCLC's legacy retail infrastructure, supporting approximately 8,000 terminals operating across 3,400 retail lottery locations.3
- **Kambi Turnkey Sportsbook Platform:** Selected in April 2026 via a joint procurement with the Atlantic Lottery Corporation to power sports betting operations across both digital and physical retail channels.29

### The Legacy Master Data Management Challenge

Historically, BCLC attempted to achieve profile unification by deploying IBM InfoSphere Master Data Management (MDM).13 While InfoSphere MDM succeeded in establishing a highly structured, rigid "golden record" of master player data, it was designed for slow-moving, back-office database reconciliation rather than active customer engagement.13 InfoSphere MDM requires complex, high-maintenance integration middleware, including WebSphere Application Server, DB2 databases, WebSphere Cast Iron Cloud Studio for data mapping, and InfoSphere DataStage to run scheduled batch-export ETL jobs.30

This batch-oriented architecture is structurally unable to handle the fast-moving, high-velocity digital streams of a modern gaming operation, such as online slot spins, digital sports wagers, or real-time location changes.9 Because data must be extracted, transformed, and loaded in scheduled batch windows, player profiles inside InfoSphere MDM remain static, creating a major barrier to real-time player safety interventions and localized promotions.3

Furthermore, historical technical debt continues to impact operations. BCLC analysts have previously struggled to utilize complex, multi-million dollar AML software programs, forcing security teams to manually search for transactional anomalies across disconnected databases.31

### Technology Comparison: Legacy MDM vs. Modern Data 360

To transition to an active, real-time data posture, BCLC is replacing InfoSphere MDM with Salesforce Data 360—the native customer data engine on the Salesforce platform:

| Architecture Component | Legacy IBM InfoSphere MDM | Salesforce Data 360 (formerly Data Cloud) |
|---|---|---|
| Primary System Purpose | Governs core identity records for legal and financial auditability. | Unifies real-time streaming customer context for instant activation. |
| Data Intake Paradigm | On-premise, batch-oriented ETL mapping and database syncs. | Real-time batch and streaming ingestion via native API connectors. |
| Schema Structure | Rigid database tables with strict relational constraints. | Flexible schema mapping to the Customer 360 Data Model. |
| Integration Pattern | High-maintenance WebSphere and DataStage middleware. | Bi-directional, zero-copy data virtualization and open APIs. |
| Downstream Activation | Static; limited to feeding back-end operational database layers. | Direct integration with Marketing Cloud, Service Cloud, and Agentforce. |
| Identity Resolution | Rigid survivorship rules to establish a single database record. | Dynamic identity rules mapping disparate data streams to unified profiles. |

## Strategic Initiatives Deep-Dive

To achieve its long-term goals and comply with the Cullen Commission mandates, BCLC is managing several major strategic initiatives scheduled to converge in September 2026.1 This convergence represents a major milestone for the organization, requiring a complete modernization of its player tracking and activation layers.

### Platform Modernization: Melco and Intralot

BCLC is executing two concurrent platform go-lives in September 2026:

- **The Melco Casino Gaming Platform:** Replaces the legacy land-based casino gaming management systems, enabling cardless play, mobile-app-driven player tracking, and modern slot machine interactions across all B.C. facilities.1 This transition will allow BCLC to monitor land-based play patterns with the same precision as its digital channels.1
- **Modernized Intralot Lottery Platform:** Expands BCLC's partnership with Bally's subsidiary Intralot Canada, deploying a fully integrated cloud-based Shared Services model.3 This platform supports end-to-end operational and technical support, cloud disaster recovery, and the launching of a modernized online lottery channel to digitize the physical retail network.3

These platform procurements are directly impacted by a protective provincial directive issued by the British Columbia Ministry of Finance.35 The directive requires BCLC and other Crown corporations to prioritize Canadian and non-U.S. suppliers for all new procurements (such as new physical slot machines), though standard system upgrades are excluded.35 This provincial policy adds vendor integration complexity, as BCLC must connect a highly fragmented, non-U.S. hardware landscape back to its core CRM and compliance networks, making flexible software integration layers like MuleSoft and Salesforce highly critical.26

### Customer Engagement and the Rewards Program

BCLC is launching a redesigned Rewards & Incentives loyalty program in fiscal year 2026/27 to replace the legacy Encore Rewards casino loyalty program.1 Historically, Encore Rewards offered players tiered benefits (Single, Double, Triple Diamond, and Elite status) based on standard gaming points earned across casinos and PlayNow.com.36

The primary business goal of the new loyalty program is to drive higher player registration rates.1 BCLC aims to increase the percentage of the casino player base that has an active rewards account from a 53% baseline to 64% in fiscal year 2027/28, and up to 70% in 2028/29.1

To support this loyalty engine, BCLC has established the AnthemXT AI & Data Innovation Hub in Vancouver in partnership with Future Anthem.11 Utilizing Future Anthem's Amplifier AI software, the AnthemXT team leverages real-time machine learning modules to personalize the player experience across lottery, casino, and sports betting channels.11

To operate safely, this personalization engine must ingest streaming player data, such as on-screen spins, wagers, deposit frequencies, and device location permissions, to immediately detect behavioral changes and prevent high-risk promotional outreach.9

### Data Cloud and Profile Unification

To power both compliance and personalization, BCLC is resuming the profile unification work originally designed in collaboration with Slalom Consulting.33 This project was paused during previous development cycles to align with the rapid evolution of Salesforce's CDP architecture, which transitioned from Customer 360 Audiences to Salesforce CDP, Genie, Data Cloud, and finally Data 360.12 This pause allowed BCLC to wait for a more stable, native data engine while aligning its identity resolution rules with the strict definitions of verified player tracking mandated by the Cullen Report.8

Profile unification requires BCLC to map and reconcile player data across four distinct operational channels:

1. **Online Play:** Verified, account-based transactions tracked on PlayNow.com.1
2. **Casino Floor Play:** In-casino table and slot sessions tracked via Everi GMS and the upcoming Melco platform.2
3. **Retail Lottery:** Historically anonymous cash transactions handled across 8,000 terminals.3
4. **Loyalty Members:** Account-based demographics, opt-in preferences, and tier statuses registered under the Rewards program.1

To reconcile these channels, BCLC is utilizing Salesforce Data 360's native Customer 360 Data Model.14 This standardized enterprise schema allows BCLC to map diverse transactional fields—such as credit card payment hashes, device location data, physical loyalty cards, and online accounts—into pre-configured objects (Individual, Account, Order, and Loyalty Member) without custom database programming.9

### AI and Agentforce Opportunities

The deployment of Salesforce Data 360 provides the grounded data foundation required to deploy autonomous, context-aware AI agents through the Agentforce platform.12 This technology offers several operational opportunities for BCLC:

- **Terminal Diagnostics Agent:** Monitors streaming system logs from the 8,000 retail lottery terminals managed under the Intralot Shared Services agreement.3 The agent can automatically detect printer jams, network drops, or software errors, dispatch local technicians, and send real-time troubleshooting steps directly to the retailer portal.38
- **High-Value Player Concierge:** Grounded in unified Data 360 profiles, this agent can provide automated, premium concierge support to Elite-tier loyalty members.36 It can automatically manage hotel discounts, dining reservations, and personalized tournament invitations through the Talkdesk contact center integration.28
- **Integration-Layer Automation Agents:** Automates data synchronization and mapping workflows between physical casino GMS logs, digital PlayNow databases, and core CRM layers, minimizing manual data stewardship overhead and accelerating regulatory audits.2
- **Responsible Gaming Early Intervention:** Tracks player behavioral events in real time, cross-referencing activity against the self-reported Problem Gambling Severity Index (PGSI).1 If a player's session length or wagering velocity indicates escalating risk, the agent can instantly pause promotional marketing, trigger on-screen GameSense safety reminders, or guide the player through the BC Game Break self-exclusion enrollment process.24

## Industry Benchmarks and Best Practices

State-owned lottery and gaming operators are increasingly migrating to cloud-based data architectures and unified CRM platforms to balance commercial growth with complex compliance mandates.

### Peer Organization Case Studies

Several provincial and international peer organizations have successfully modernized their data platforms, offering valuable lessons for BCLC's digital transformation:

- **Ontario Lottery and Gaming Corporation (OLG):** In January 2026, OLG deployed Brightstar Lottery's Sales Wizard salesforce automation tool across its retail network.40 Integrated directly with OLG's central transaction system, this cloud-based platform equips field sales representatives with real-time access to retail sales data, instant ticket inventory levels, and point-of-sale setups across Ontario.40 This shows the value of extending unified back-office and transactional data directly to field agents to drive retail optimization.
- **Atlantic Lottery Corporation (ALC):** In June 2025, ALC signed an eight-year technology agreement with IGT to deploy the cloud-based IntelligenEVO video lottery central system across Atlantic Canada.42 This next-generation platform utilizing game-to-system (G2S) open APIs optimizes real-time player data collection and analytics, enabling ALC to customize responsible gaming and marketing programs dynamically.42
- **Totalizator Sportowy (Poland):** In 2023, the Polish state lottery collaborated with IGT to migrate its entire iLottery system to a fully cloud-based ecosystem, becoming one of the first European lottery operators to achieve a completely cloud-integrated end-to-end system.3 The migration proved that complex, highly regulated lottery operations can achieve system availability, scalability, and improved player engagement in a cloud environment.3

### Strategic Lessons for BCLC

These peer implementations highlight several clear strategic best practices. Modernizing the player data layer is most successful when it is designed as an enterprise-wide initiative rather than a marketing-siloed project.14 OLG's deployment of Sales Wizard and ALC's IntelligenEVO integration demonstrate that real-time data access must serve compliance units, retail field staff, and customer-facing teams simultaneously.40

Furthermore, utilizing open API frameworks and cloud-native systems allows state-regulated operators to remain flexible, avoiding long-term vendor lock-in while adapting to changing provincial and federal compliance laws.3

## Open Questions

To prepare for the upcoming kickoff meeting on July 13 and ensure the Crawl/Walk/Run roadmap aligns with BCLC's technical reality prior to the September QBR, the consulting team must address several remaining architectural and organizational questions with BCLC stakeholders:

1. **Legacy Slalom Integration Documentation:** What specific technical architecture, field-mapping, or security blockers led to the pausing of the initial Slalom CDP project? Are there existing data schemas or journey designs that can be utilized directly in the Salesforce Data 360 profile unification phase?

2. **Melco Real-Time Streaming Capabilities:** Does the Melco gaming management platform support outbound, real-time streaming event APIs, or is it designed around batch database replication? Will Melco data feed directly into Salesforce Data 360, or will it be routed through an intermediate compliance layer like Everi?

3. **Everi Compliance Write-Back Mechanics:** How is the Everi transaction monitoring system integrated with BCLC's current data warehouse? Can Salesforce Data 360 execute real-time write-backs to Everi to automatically flag and restrict undesignated high-risk patrons discovered during cross-channel behavioral analysis?

4. **Ministry of Finance Procurement Directive Workarounds:** How does the provincial directive prioritizing Canadian and non-U.S. suppliers impact BCLC's planned technical architecture? Are there specific software, database, or host components within the Data 360 stack that must be housed in local Canadian cloud nodes to satisfy this mandate?

5. **Identity Resolution Rules and Retail Consent:** What explicit identity resolution matching rules will BCLC authorize to link anonymous retail lottery credit card transaction hashes with verified PlayNow.com profiles? How will BCLC manage player consent in accordance with FIPPA when using location services or biometric data to track cross-channel play?

6. **Safer Play Operational Handling Capacity:** Who will receive and action the real-time player risk alerts generated by the combination of Future Anthem's machine learning models and Salesforce Data 360? What is the current operational capacity of BCLC's internal Safer Play and AML units to handle real-time automated warnings?

---

## Works Cited

1. British Columbia Lottery Corporation 2026/27 - 2028/29 Service Plan, accessed June 9, 2026, https://www.bcbudget.gov.bc.ca/2026/sp/pdf/agency/bclc.pdf
2. British Columbia Lottery Corporation 2024/25 Annual Service Plan Report, accessed June 9, 2026, https://corporate.bclc.com/content/dam/bclccorporate/reports/annual-reports/2025/annual-service-plan-report-24-25.pdf
3. Cloud migration powers BCLC's lottery modernisation with Intralot, accessed June 9, 2026, https://sigma.world/news/canadas-bclc-pushes-digital-transformation-with-intralot/
4. Money laundering reports - Province of British Columbia - Gov.bc.ca, accessed June 9, 2026, https://www2.gov.bc.ca/gov/content/justice/anti-money-laundering/reports
5. FINTRAC's New AMP Regime in 2025: Record Penalties and Higher Stakes, accessed June 9, 2026, https://amlincubator.com/blog/fintracs-new-amp-regime-in-2025-record-penalties-and-higher-stakes
6. News articles from FOI - Canada FOI, accessed June 9, 2026, https://canadafoi.ca/news-articles-from-foi-2/
7. Bally's Intralot signs Shared Services deal with Canada's BCLC - Gaming Intelligence, accessed June 9, 2026, https://www.gamingintelligence.com/sectors/lottery-sectors/229186-ballys-intralot-signs-shared-services-deal-with-canadas-bclc/
8. BCLC's Anti-Money Laundering Commitment | BCLC, accessed June 9, 2026, https://corporate.bclc.com/our-business/security-and-anti-money-laundering/anti-money-laundering.html
9. Player Privacy Statement | BCLC, accessed June 9, 2026, https://corporate.bclc.com/privacy-statement/player-privacy-statement.html
10. Investigation Report F11-01 INVESTIGATION INTO A PRIVACY BREACH OF CUSTOMERS' PERSONAL INFORMATION BY THE BRITISH COLUMBIA LOT, accessed June 9, 2026, https://www.oipc.bc.ca/documents/investigation-reports/1175
11. About AnthemXT, accessed June 9, 2026, https://xt.futureanthem.com/
12. What Is Salesforce Data Cloud? Pricing & Alternatives - CDP.com, accessed June 9, 2026, https://cdp.com/articles/what-is-salesforce-data-cloud/
13. CDP vs. MDM: What Is the Difference and How Does Data Cloud Fit? - Salesforce Ben, accessed June 9, 2026, https://www.salesforceben.com/cdp-vs-mdm-what-is-the-difference-and-how-does-data360-fit/
14. Salesforce Data Cloud Is Now Data 360: A 2026 CDP Guide - scandiweb, accessed June 9, 2026, https://scandiweb.com/blog/ecommerce-cdp-what-is-salesforce-data-cloud/
15. 2024/2025 Year in Review - BCLC Corporate, accessed June 9, 2026, https://corporate.bclc.com/content/dam/bclccorporate/reports/community-impact-reports/2025/2024-25-bclc-year-in-review.pdf
16. British Columbia Lottery Corporation 2025/26 - 2027/28 Service Plan - BC Budget, accessed June 9, 2026, https://www.bcbudget.gov.bc.ca/2025/sp/pdf/agency/bclc.pdf
17. Corporate Overview - Casino Regina, accessed June 9, 2026, https://casinoregina.com/pub/2022-12-31-saskgaming-q3-results-for-public-posting-final.pdf
18. BCLC Records Request: G2E Asia 2018 | PDF | Macau | Privacy - Scribd, accessed June 9, 2026, https://www.scribd.com/document/386234945/18-076-Record-G2E-Asia-2018-pdf
19. British Columbia Lottery Corporation (BCLC) - Gaming Regulation, accessed June 9, 2026, https://www.gamingregulation.com/agency/canada/british-columbia/british-columbia-lottery-corporation/
20. Our Leadership - BCLC Corporate, accessed June 9, 2026, https://corporate.bclc.com/our-business/who-we-are/our-leadership.html
21. BCLC Board Minutes FY2025/26 Q1, accessed June 9, 2026, https://corporate.bclc.com/content/dam/bclccorporate/reports/accountability/2026/bclc-board-minutes-fy2025-26-q1.pdf
22. Exclusive: BCLC quartet embarked on a Macau junket, amid the Asian money laundering scandal at B.C. casinos - theBreaker - From the Breaker News., accessed June 9, 2026, https://thebreaker.news/news/bclc-macau-2018/
23. B.C. Lottery Corp. investigator complained that CEO ignored possible money laundering | Globalnews.ca, accessed June 9, 2026, https://globalnews.ca/news/7451511/lottery-corp-ceo-money-laundering/
24. Security Measures - BCLC Corporate, accessed June 9, 2026, https://corporate.bclc.com/our-business/security-and-anti-money-laundering/security-measures.html
25. Mortgage Services AML Guidance: Key Lessons from Ghotaymi v. BCLC (2026 BCSC 191), accessed June 9, 2026, https://www.privatelenderassociation.ca/mortgage-services-aml-guidance-key-lessons-from-ghotaymi-v-bclc-2026-bcsc-191/
26. Freedom of Information Response Letter and Records 20-001 - BCLC Corporate, accessed June 9, 2026, https://corporate.bclc.com/content/dam/bclccorporate/reports/foi-responses/2021/Freedom%20of%20Information%20Response%20Letter%20and%20Records%2020-001.pdf
27. British Columbia Lottery Corporation (BCLC) Technographics, Software Purchases, AI and Digital Transformation Initiatives - apps run the world, accessed June 9, 2026, https://www.appsruntheworld.com/customers-database/customers/view/british-columbia-lottery-corporation-bclc-canada
28. British Columbia Lottery Corporation - Customers Stories - Talkdesk, accessed June 9, 2026, https://www.talkdesk.com/customers/british-columbia-lottery-corporation/
29. Kambi Group plc to power multi-province Canadian sportsbook solution for Atlantic Lottery Corporation and British Columbia Lottery Corporation, accessed June 9, 2026, https://www.kambi.com/news-insights/multi-province-canadian-sportsbook-atlantic-lottery-corporation-british-columbia-lottery-corporation/
30. Requirements for MDM and Salesforce.com integration - IBM, accessed June 9, 2026, https://www.ibm.com/docs/en/imdm/14.0.0?topic=salesforcecom-requirements-mdm-integration
31. Sam Cooper | Vancouver Sun, accessed June 9, 2026, https://vancouversun.com/author/samcooperprov/
32. IBM InfoSphere Master Data Management, accessed June 9, 2026, https://www.ibm.com/products/ibm-infosphere-master-data-management
33. Salesforce Data Cloud | Slalom, accessed June 9, 2026, https://www.slalom.com/us/en/insights/ai-data-cloud
34. bclc.pdf - BC Budget, accessed June 9, 2026, https://www.bcbudget.gov.bc.ca/2013_june_update/sp/pdf/agency/bclc.pdf
35. Canadian provinces rejecting US gaming equipment amid tariff war, accessed June 9, 2026, https://www.canadiangamingbusiness.com/2025/03/11/provinces-rejecting-american-gaming-equipment/
36. Get Encore Rewards | Casinos BC, accessed June 9, 2026, https://www.casinosbc.com/get-encore-rewards.html
37. Life Sciences Cloud - Slalom, accessed June 9, 2026, https://www.slalom.com/us/en/who-we-are/partners/salesforce/life-sciences-cloud
38. Getting Started Guide - BCLC Retailer Hub, accessed June 9, 2026, https://www.bclcretailerhub.com/content/dam/retailerhub/retailer-information/operations/retailer-portal-getting-started-guide.pdf
39. Reports and Disclosures - BCLC Corporate, accessed June 9, 2026, https://corporate.bclc.com/our-business/reports---disclosures.html
40. OLG Targets Retail Growth with Brightstar - GGB Magazine, accessed June 9, 2026, https://ggbmagazine.com/articles/olg-targets-retail-sales-growth-with-brightstar-lottery/
41. Brightstar Lottery Delivers Industry-Leading Sales Force Automation Solution to Ontario Lottery and Gaming Corporation, accessed June 9, 2026, https://www.brightstarlottery.com/news-and-insights/news-releases/brightstar-lottery-delivers-industry-leading-sales-force-automation-solution-to-ontario-lottery-and-gaming-corporation
42. IGT and Atlantic Lottery sign eight-year video lottery central system technology agreement, accessed June 9, 2026, https://world-lotteries.org/insights/news/member-news/igt-and-atlantic-lottery-sign-eight-year-video-lottery-central-system-technology-agreement
43. Atlantic Lottery signs eight-year technology agreement with IGT - Gaming America, accessed June 9, 2026, https://gamingamerica.com/news/13458/atlantic-lottery-signs-eight-year-technology-agreement-with-igt
