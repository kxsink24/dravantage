---
title: "SBO Persona Internal SME Discussion"
date: 2026-05-07
type: interview
source_file: "Small Business Owner Persona Data discussion (1).docx"
source_slack: "https://salesforce.enterprise.slack.com/files/U03A8H30B6X/F0B4LTDFLJW/small_business_owner_persona_data_discussion__1_.docx"
status: captured
personas: [Business Worker, IT Worker, Data Worker]
tags: [dra, interview, sba, sbo-persona, internal-sme]
---

# SBO Persona Internal SME Discussion

> [!NOTE]
> This is an **internal SBA SME discussion about the Small Business Owner (SBO) persona**, not a direct interview with an external small business owner. Treat it as strong proxy evidence for how SBA teams understand and serve the SBO journey, while keeping persona confidence lower than it would be with direct SBO voice-of-customer input.

## Source

- **Original file:** `inputs/interviews/Small Business Owner Persona Data discussion (1).docx`
- **Meeting title:** Small Business Owner Persona Data discussion
- **Date/time:** 2026-05-07 16:00 UTC
- **Duration:** 59m 29s
- **Slack pointer:** `#sba-data-readiness-assessment` message `SBO Persona transcript`
- **Context:** Werner Watschke describes this as part of the DRA for Hartley Caldwell, focused on mapping systems and data flows for the small business owner persona and the OneSBA / digital-first model.

## Participants / Speakers Observed

| Name | Role in discussion | Persona signal |
|---|---|---|
| Ryan Pella | OCIO / facilitator; frames the enterprise data objective | Business Worker / IT liaison |
| Werner Watschke | Salesforce data strategy / DRA facilitator | Architect |
| Christopher Allen | Certifications / UCP context | Business Worker |
| Thomas Rogers | Size / contracting / market research context | Business Worker / Data Worker |
| Alisa Sheard | Size determination, COC, certification-process context | Business Worker / Data Worker |
| Shivani Dubey | Field / certification / assistance-program context | Business Worker |
| George Murray | Field office / 8(a) annual review / Eventbrite context | Business Worker |
| Timothy Baughman | Disaster / ODRR / DART / analytics context | Data Worker / IT Worker |
| Khem Sharma | Present; minimal substantive content in transcript | Unknown |

## Executive Summary

The discussion confirms that SBA's current small-business-owner view is fragmented across program systems, public/federal datasets, spreadsheets, SharePoint archives, Salesforce and non-Salesforce applications, and external portals. The strongest recurring theme is that staff can often find data eventually, but they must know which system to check, reconcile identifiers manually, and re-enter or repackage data into spreadsheets or downstream tools. This creates a high Blind Spot and high Time Trap for the OneSBA vision.

The target-state pull is equally clear: SBA wants a unified profile of the business and owner that shows program participation, certifications, loans, disaster interactions, training/events, contract/award signals, and assistance history. The transcript provides strong evidence for a Data 360 identity-resolution / SBO 360 profile, an API-led integration layer, and governed access to external datasets such as SAM.gov, IRS, Census, FEMA, Treasury, and USAspending.

## Key Systems and Data Sources Mentioned

| System / Source | What it holds or does | Current-state signal |
|---|---|---|
| UCP / MySBA Certifications | System of record for certifications | Central for certifications, but not all adjacent size/COC and contract-analysis data is integrated |
| SAM.gov | Entity registration, self-certification, contract data | Used for certification/contract lookup; trust-but-verify concerns and manual lookup patterns |
| Small Business Search / SBS | Public reference/search tool for certified businesses | Useful for searching by NAICS/geography, not a system of record |
| Size Determination / COC SharePoint folders | Size protest/formal determinations, certificate of competency documents | No system of record; manual document-heavy process |
| OFO CRM / MySBA Customers | Tracks engagements and completed reviews | Not sufficient for annual review analysis or full small-business touchpoint history |
| Annual Review Workbook | VBA/Excel workbook for 8(a) portfolio annual reviews | Spreadsheet became the operating system for thousands of reviews |
| RPA consolidation of workbooks | Consolidates annual review workbooks into master data pool | Automation exists, but compensates for lack of direct API/system integration |
| CAFS | Loan/financial-product lookup | Used by field staff before visits to understand loan history |
| ULP | Unified Lending Platform for disaster loans | Daily system for disaster program; includes business/nonprofit/homeowner/renter records and historical disaster-loan data |
| Historical DCMS / DCMS2 | Disaster loan history back to 2005 / earlier | Historical data source for disaster analysis |
| SVOG Salesforce org | Shuttered Venue Operators Grant system | Standalone Salesforce environment; COVID-era grant processing and recoupment |
| Customer Service Hub (Dynamics) | Contact center interactions across programs | Millions of contacts; routing/intake hub, but feedback loop and resolution status are unclear |
| DART | Disaster analytics/reporting team | Pulls broad data for projections and reporting |
| ArcGIS / Esri | Disaster geography and mapping | Provides structure/geographic data, not complete business information |
| Tableau | Analytics/reporting | Used by DART for disaster analytics |
| Eventbrite | Field office event registration/attendance | Attendee data is not connected back into MySBA Customers |
| 7J / Empower to Grow | Technical-assistance training programs | Assistance usage is not collectively visible in the business profile |
| USAspending | Federal spending by geography/industry | Used manually for context and analysis |
| Secretary of State databases | State-level business lookup | Manually used by field staff |
| IRS / Census / FEMA / Treasury / Pay.gov / USCIS | External/federal data sources | Valuable for analysis, fraud/program integrity, and disaster response, but access is constrained/manual |

## Evidence Captured by Barrier

### Blind Spot — data exists but cannot be seen as one SBO profile

- Ryan Pella frames the objective as "incorporating all of these different data sets across the enterprise" and "breaking down the different information silos" across program offices.
- Alisa Sheard describes size and certificate-of-competency interactions as additional SBA touchpoints that should become part of the business profile: "SBA has also worked with this business on a size related matter or certificate of competency matter. And so it just becomes a part of the profile of the business and their potential engagement with SBA."
- Timothy Baughman says disaster teams are still "stovepiped" and need back-end interconnection to understand who will be impacted by disasters.
- Shivani Dubey describes checking multiple systems before field interactions: CAFS, SAM.gov, Small Business Search, grant-program data, and other sources depending on the initiative.
- Eventbrite attendee lists and 7J/Empower to Grow participation do not flow into MySBA Customers, leaving SBA unable to tell a complete assistance-history story.

### Time Trap — data work is manual, repeated, or late

- George Murray says the Annual Review Workbook was developed "out of necessity" because there is no system to conduct 8(a) annual review analysis.
- George Murray describes staff opening a blank Excel workbook, transcribing firm-submitted data, running calculations, and generating feedback letters manually.
- Shivani Dubey says the annual-review worksheet is blank every time and cannot API-connect to anything; RPA is used afterward to consolidate workbooks into a master data pool.
- Timothy Baughman says IRS/SAM/Census-style access is manual or constrained: "We can't just export out large chunks of data" and manual access "slows everybody down."
- Disaster offices duplicate the same information several times across East/West offices and divisions.

### Trust Gap — data exists, but matching, quality, and authority are inconsistent

- Christopher Allen says UCP is the certification system of record, while Small Business Search is a public reference tool and SAM.gov self-certification creates a "trust but verify" situation.
- Alisa Sheard says UEI and EIN are both needed to connect contracts to SBA small-business records because subsidiaries and ownership structures complicate matching.
- Thomas Rogers says NAICS codes are too broad to understand actual capabilities; external directories have more granular business data but are not linked to SBA records.
- Timothy Baughman describes duplicated disaster/business information being captured by multiple people, creating overlapping counts of the same thing.

## 3 Deep Dive Findings

| Surface issue | Operational consequence | Business impact | Capability mapping |
|---|---|---|---|
| Size determination and COC data live in SharePoint, not a system of record | Staff cannot see those interactions as part of the broader business profile | SBA lacks a full touchpoint history for the businesses it serves | Connect, Unify, Act |
| Annual 8(a) reviews rely on blank Excel workbooks | Field staff manually transcribe data and consolidate outputs with RPA | Thousands of reviews consume staff time and delay insight into revenue/jobs/impact statistics | Integrate, Orchestrate, Decide |
| Eventbrite attendee data is not connected to MySBA Customers | Staff cannot easily see which trainings or events a business/person attended | SBA cannot tell a full assistance story or personalize follow-up | Connect, Unify, Act |
| Disaster analytics requires combining ULP/history, FEMA, IRS, Census, GIS, field reports, and other data | Teams gather and reconcile data manually and duplicate efforts across offices | Disaster readiness and congressional/White House reporting are slower and less complete | Connect, Decide, Orchestrate |
| SAM.gov, SBS, NAICS, UEI, EIN, and state databases each provide partial views of businesses | Staff must know where to search and how to interpret each identifier | SBA cannot reliably segment, target, or validate small businesses across programs | Understand, Validate, Unify |

## Capability Signals

| Capability | Signal from transcript | Provisional implication |
|---|---|---|
| Connect | Multiple data sources are useful but disconnected: UCP, CAFS, ULP, SVOG, SharePoint, Eventbrite, CSH, SAM.gov, IRS, Census, FEMA | Low maturity; strongest need is governed connectivity across internal and external sources |
| Integrate | Annual review data cannot API-connect; workbooks are consolidated by RPA; manual handoffs between systems | Low maturity; API-led integration is a primary foundation gap |
| Understand | NAICS is too broad; program meanings differ; small-business categories overlap and require SME explanation | Low maturity; needs shared semantic model for SBO, business, program, certification, assistance, and award data |
| Unify | UEI/EIN/entity/owner/subsidiary relationships complicate identity; event attendees may not have businesses yet | Low maturity; identity resolution/MDM is central |
| Validate | UCP is authoritative for certifications, but SAM.gov self-certification requires verification; contract data and eligibility checks need validation | Low-to-medium maturity; strong need for quality/lineage around external data |
| Protect | Tax records, IRS data, personal/owner information, and disaster data introduce sensitive-data constraints | Insufficient evidence to score deeply, but governance/security must be designed in |
| Decide | DART uses ArcGIS/Tableau and historical data for projections; annual-review workbooks produce impact statistics | Partial maturity; analytics exist but are fragmented and labor-intensive |
| Orchestrate | Staff want proactive notices and cross-program data access, but current workflows are manual | Low maturity; future state requires event-driven orchestration |
| Act | Desired actions include disaster awareness notices, field visit prep, personalized assistance history, and business recommendations | Low-to-medium maturity; action is possible only after profile/integration gaps are addressed |

## Verbatim Quote Bank

> "Within the OCIO office, we're working to document these different personas so we can start moving into the next phase, which is incorporating all of these different data sets across the enterprise with the overall strategic objective of breaking down the different information silos that we have." — Ryan Pella, 00:04

> "It's really moving to that one SBA, that digital first bank model, and getting that, breaking down those silos, making sure that everyone has the access to the data they need, trying to remove manual processes..." — Werner Watschke, 01:10

> "UCP certifications... is the single source of truth. It is the system of record for all certifications. The small business search feeds off of a combination of it and sam.gov." — Christopher Allen, 06:39

> "We don't have a system of record for our size program or the certificate of competency program. It's still a manual process." — Alisa Sheard, 08:59

> "Right now, it's in a Team SharePoint folder." — Alisa Sheard, 10:09

> "SBA has also worked with this business on a size related matter or certificate of competency matter. And so it just becomes a part of the profile of the business and their potential engagement with SBA." — Alisa Sheard, 11:39

> "As long as we have an approach for it, data for the sake of having data, it always just becomes more data." — Alisa Sheard, 18:38

> "We don't really have a good way to pull. All we have is that a small business says they work under a certain NAICS code. We have no more data than that." — Thomas Rogers, 18:57

> "It's the current spreadsheet. Again, it's out of necessity because we don't have a system to be able to capture it." — George Murray, 23:17

> "The burden in the short term is that we've got that data worksheet is blank every time. So we're not able to API connect to anything." — Shivani Dubey, 28:12

> "That contains not only homeowners and renters, but also businesses and nonprofits... historical from the old DCMS... back to 2005." — Timothy Baughman, 30:04

> "There is lots of valuable information in that system as far as entry points into the SBA." — Timothy Baughman, 34:59, on Customer Service Hub

> "Right now we're still stovepiped a lot of the times, so having a back-end interconnection... will help us be able to really understand who the individuals are that are going to be impacted by disaster." — Timothy Baughman, 37:16

> "They're basically duplicating the efforts... We'll have the same information from four or five different people, all basically counting the same thing." — Timothy Baughman, 47:39

> "If somebody was in the system that they've... had many frequent touch points with us, that's one more that would very much tell a story... this company has done the following thing." — Shivani Dubey, 52:51

> "If I can get the SAMS data and if I could get IRS data... if there's anything that we can do for data ingestion or sharing of data with those programs so that we actually have full automated search capabilities, it would help dramatically." — Timothy Baughman, 57:17

## Coverage Caveats

- This is one internal group discussion, not a statistically complete survey or direct SBO interview.
- Business Worker coverage is strong because field, program, certification, and disaster users describe their day-to-day workflows.
- IT/Data Worker coverage is medium because systems and data movement are discussed in detail, but the speakers are not necessarily the platform owners for every system.
- Business Leader, Data Leader, and direct external Small Business Owner perspectives remain underrepresented.
