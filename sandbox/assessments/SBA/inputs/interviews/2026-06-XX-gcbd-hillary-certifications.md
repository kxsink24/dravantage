---
title: "GCBD Interview - Hillary on Certifications Systems"
date: 2026-06-XX
type: interview
interviewee: Hillary
department: GCBD (Government Contracting and Business Development)
focus: Certifications systems, straight-through processing, data integration
status: analyzed
personas: [Business Worker, IT Worker, Data Worker]
tags: [dra, interview, sba, gcbd, certifications, ucp, hubzone, straight-through-processing]
---

# GCBD Interview - Hillary on Certifications Systems

> [!NOTE]
> This interview focuses on the Government Contracting and Business Development (GCBD) division's certification systems and the upcoming straight-through processing initiative. Hillary provides detailed context on UCP (Unified Certification Platform), integration challenges with GSA/SAM.gov, and the technical architecture supporting certification decisions.

## Attendees

| Name | Role | Persona Signal |
|---|---|---|
| Hillary | GCBD / Certifications system owner | Business Worker / IT Worker / Data Worker |
| [Other attendees TBD] | | |

## Executive Summary

Hillary manages the certification ecosystem at SBA, spanning multiple business certifications (WOSB, VOSB/SDVOSB, HUBZone, 8(a)) across four primary systems: UCP (Unified Certification Platform), Small Business Search, HUBZone Map, and Octa for identity management. The interview reveals a critical inflection point: SBA is launching **straight-through processing** (due June 9) that will provide instant certification decisions for veteran-owned businesses using third-party data integrations.

The most significant pain point is **GSA's five-year delay** in adding veterans certifications to SAM.gov, forcing SBA to maintain parallel systems and preventing full contract-award integration. Hillary describes UCP being rebuilt "for the fourth time" while simultaneously implementing cutting-edge automation, highlighting the tension between technical debt and innovation pressure.

The straight-through processing initiative represents a **major capability leap** — moving from weeks-long manual reviews to instant decisions by integrating federal liens, incarceration status, VA verification APIs, and other third-party data sources. However, the lack of contracts data integration with GSA remains a foundational gap that limits risk-based annual reviews and program integrity workflows.

## Key Systems and Data Sources

| System / Source | What it holds or does | Current-state signal |
|---|---|---|
| **UCP (Unified Certification Platform)** | System of record for SBA certifications (WOSB, VOSB/SDVOSB, HUBZone, 8(a)) | Core certification platform at certifications.sba.gov; Python/Django stack; being rebuilt "for the fourth time" |
| **Small Business Search (SBS)** | Public search tool for certified businesses | Pulls from UCP + SAM.gov; public-facing directory |
| **HUBZone Map** | Geographic eligibility verification | Located at maps.certified.sba.gov; uses GIS/shapefile data for HUBZone determination |
| **Octa** | Identity management and SSO | Recently added for identity verification; "caused quite the kerfuffle" during rollout |
| **VA API** | Veteran status verification | Third-party integration for veteran-owned business verification |
| **ULP / Alecourt / MuleSoft APIs** | Straight-through processing data sources | Being integrated for automated decision-making; federal liens, incarceration status, etc. |
| **SAM.gov** | Entity registration and contract awards | **Critical integration gap**: "waiting five solid years for them to just add veterans certifications"; FPDS-NG now under SAM.gov umbrella with constant changes |
| **GSA contract data** | Federal contract awards by entity | Not available via API; "not the ideal time to start trying to get from them an API"; needed for risk-based annual reviews |
| **USA Spending** | Federal spending data | "Not sufficient... a lot of work for not much"; insufficient for certification program needs |

## Evidence Captured by Barrier

### Blind Spot — data exists but cannot be seen

- **Contracts data not in UCP**: Hillary notes contracts data is not integrated into UCP yet: "it's not the ideal time to start trying to get from them an API" — certification system cannot see contract performance or award history
- **GSA/SAM.gov integration failure**: Five-year delay in adding veterans certifications to SAM.gov means certified businesses are invisible in the primary federal procurement system
- **Third-party data silos**: Federal liens, incarceration status, VA verification, and other data sources exist but were not connected until the straight-through processing initiative
- **Risk-based review blind spots**: Without contracts data, SBA cannot perform effective risk-based annual reviews of certified firms

### Time Trap — data work is manual, repeated, or late

- **Manual certification reviews**: Before straight-through processing, all certifications required human review with week-long timelines; straight-through will "eliminate 50% of certs requiring human review"
- **Five-year GSA wait**: "waiting five solid years for them to just add veterans certifications in SAM.gov" — massive timeline delays for interagency data sharing
- **System rebuild churn**: UCP being rebuilt "for the fourth time" — "here I am eight years later, rebuilding the same system for the fourth time"
- **8(a) data call**: Described as "huge unplanned work" — ad-hoc data requests consume capacity
- **USA Spending effort**: "not sufficient... a lot of work for not much" — manual extraction provides insufficient value

### Trust Gap — data exists, but matching, quality, and authority are inconsistent

- **GSA relationship**: "GSA is probably the worst at government to government internal customer service" — trust and reliability issues with primary data partner
- **SAM.gov constant changes**: FPDS-NG merger under SAM.gov with "constant changes" creates instability
- **Third-party data validation**: Straight-through processing depends on federal liens, incarceration records, VA API — quality and timeliness of these sources will determine automation success
- **Contracts data reliability**: Without direct API access, any contracts data SBA obtains is second-hand and potentially stale

## 3-Level Deep Dive Findings

| Surface issue | Operational consequence | Business impact | Capability mapping |
|---|---|---|---|
| GSA has not added veterans certifications to SAM.gov after five years | Veteran-owned businesses cannot be reliably identified in the federal procurement system | Federal buyers cannot easily target veteran-owned small businesses; SBA certifications are invisible to procurement officers | **Connect**, **Integrate**, **Act** |
| Contracts data not integrated into UCP | Certification staff cannot see contract performance or awards when conducting reviews | Risk-based annual reviews are impossible; program integrity depends on manual lookups; fraud risk increases | **Connect**, **Unify**, **Validate** |
| UCP rebuilt "for the fourth time" | Technical debt and churn consume development capacity | Innovation (like straight-through processing) must be implemented on unstable foundation; staff frustrated ("just let me build some things") | **Orchestrate**, **Protect** (technical resilience) |
| Straight-through processing limited to sole proprietor/single-owner LLC initially | Complex ownership structures still require manual review | Only 50% of certifications automated; multi-owner businesses face continued delays | **Decide**, **Validate**, **Orchestrate** |
| No API access to GSA contract data | Any contracts analysis requires manual extraction or unreliable third-party sources | Cannot build proactive monitoring, risk scoring, or performance analytics for certified firms | **Connect**, **Integrate**, **Decide** |
| 8(a) data calls are huge unplanned work | Staff capacity diverted to ad-hoc reporting instead of program operations | Delays certification processing; reduces service quality; increases backlog | **Decide**, **Orchestrate** |

## Capability Signals

| Capability | Signal from transcript | Provisional implication |
|---|---|---|
| **Connect** | Multiple systems (UCP, SBS, HUBZone Map, Octa, VA API, ULP/Alecourt/MuleSoft) but GSA/SAM.gov integration blocked for five years | **Low-to-Medium maturity**; internal systems connected, but critical external partner (GSA) is blocker |
| **Integrate** | Straight-through processing integrates third-party APIs (VA, federal liens, incarceration); MuleSoft mentioned; but GSA contract API unavailable | **Medium maturity and improving**; modern API integration capability exists, but limited by partner availability |
| **Understand** | Certification types well-defined (WOSB, VOSB/SDVOSB, HUBZone, 8(a)); business logic clear enough to automate 50% of decisions | **Medium-to-High maturity**; business rules understood and codable, but complex ownership cases remain manual |
| **Unify** | UCP is system of record for certifications; Small Business Search aggregates UCP + SAM.gov; but contracts data not unified | **Medium maturity**; entity identity clear within certification domain, but cross-domain (contracts, awards) not unified |
| **Validate** | Straight-through processing validates veteran status, federal liens, incarceration via third-party APIs; Octa for identity | **Medium maturity and improving rapidly**; automated validation launching June 9 for limited scope |
| **Protect** | Octa integration "caused quite the kerfuffle"; identity verification added recently | **Insufficient evidence to score deeply**; identity management recognized as critical but rollout was painful |
| **Decide** | Straight-through processing represents instant automated decision-making: "I hit submit... instant decision on the screen" | **Low-to-Medium maturity; major improvement in progress**; moving from weeks to seconds for 50% of cases |
| **Orchestrate** | Straight-through processing workflow orchestrates multiple data sources for instant decision | **Medium maturity**; modern orchestration capability emerging, but limited to narrow use case initially |
| **Act** | Instant certification decision enables immediate program access; but lack of contracts data prevents proactive risk actions | **Medium maturity**; can act on certification decisions, but cannot act on performance/risk signals |

## Verbatim Quote Bank

> "GSA is probably the worst at government to government internal customer service... we've been waiting five solid years for them to just add veterans certifications in SAM.gov." — Hillary

> "here I am eight years later, rebuilding the same system for the fourth time" — Hillary, on UCP platform churn

> "I was like, just let me build some things" — Hillary, expressing frustration with rebuild cycle

> "it's not the ideal time to start trying to get from them an API" — Hillary, on GSA contract data integration timing

> "I hit submit, and I think, Oh, I'll probably hear in a week... And on the screen, it was an instant decision" — Hillary, describing straight-through processing user experience

> "[Straight-through processing will] eliminate 50% of certs requiring human review" — Hillary, on automation impact

> "USA Spending [is] not sufficient... a lot of work for not much" — Hillary, on alternative contracts data sources

> "8(a) data call was huge unplanned work" — Hillary, on ad-hoc reporting burden

> "[Octa SSO verification] caused quite the kerfuffle" — Hillary, on identity management rollout

> "FPDS-NG now under SAM.gov umbrella, constant changes" — Hillary, on GSA data instability

## Systems Architecture Notes

### UCP (Unified Certification Platform)
- **URL**: certifications.sba.gov (also referenced as "my SBA certifications")
- **Stack**: Python/Django
- **Status**: Being rebuilt "for the fourth time" — significant technical debt
- **Function**: System of record for WOSB, VOSB/SDVOSB, HUBZone, 8(a) certifications
- **Integration**: Feeds Small Business Search; integrates with Octa for SSO; connects to VA API for veteran verification

### Straight-Through Processing Initiative
- **Launch date**: June 9 [year not specified in provided content]
- **Scope**: Sole proprietor / single-owner LLC only initially
- **Impact**: Instant decisions; eliminates 50% of human reviews
- **Data sources**: VA API, federal liens, incarceration status, ULP/Alecourt/MuleSoft APIs
- **User experience**: Submit application → instant on-screen decision (vs. previous week-long wait)
- **Vision**: "Like bank loan approval" — immediate automated decision-making

### Integration Gaps
- **GSA/SAM.gov**: Five-year delay in adding veterans certifications; no contract data API available
- **FPDS-NG**: Now under SAM.gov; constant changes; unstable integration target
- **USA Spending**: Insufficient detail; high effort, low value

## Business Process Notes

### Certification Types Managed
1. **WOSB** — Women-Owned Small Business
2. **VOSB** — Veteran-Owned Small Business
3. **SDVOSB** — Service-Disabled Veteran-Owned Small Business
4. **HUBZone** — Historically Underutilized Business Zones
5. **8(a)** — Business Development Program

### Current Process (pre-straight-through)
- Submit certification application
- Human review required (weeks)
- Manual verification of eligibility criteria
- Decision communicated later

### Target Process (straight-through for veteran certs)
- Submit application
- Instant automated validation via APIs
- On-screen decision immediately
- Limited to simple ownership structures initially

### Annual Review Process (current gap)
- **Need**: Risk-based annual reviews of certified firms
- **Gap**: No contracts data integration
- **Workaround**: Manual lookups in SAM.gov, USA Spending (insufficient)
- **Impact**: Cannot proactively identify performance issues, fraud risk, or program violations

## Coverage Caveats

- Single interviewee (Hillary); represents GCBD certification systems perspective
- **Business Worker** coverage: Strong — describes day-to-day certification workflows, pain points, and process improvements
- **IT Worker** coverage: Medium-to-Strong — discusses technical architecture (Python/Django, APIs, MuleSoft), but may not represent full OCIO IT perspective
- **Data Worker** coverage: Medium — discusses data sources and integration, but analytics/reporting perspective less detailed
- **Business Leader** / **Data Leader** perspectives: Not represented
- Straight-through processing details are forward-looking (June 9 launch); actual performance and adoption not yet observable
- GSA perspective not represented — relationship described as problematic but one-sided view

## Recommended Follow-Up

1. **Contracts data integration**: Investigate alternative paths to GSA contract data if API unavailable (data sharing agreement, bulk file transfer, alternative sources)
2. **Straight-through processing expansion**: Document roadmap for expanding beyond sole proprietor/single-owner LLC to complex ownership structures
3. **UCP rebuild strategy**: Understand why four rebuilds in eight years; assess technical debt and platform stability risks
4. **GSA relationship**: Escalate five-year veterans certification delay; understand political/process blockers
5. **Risk-based annual reviews**: Define data requirements and decision logic for proactive monitoring of certified firms
6. **8(a) data call burden**: Identify recurring reporting needs and build automated dashboards to reduce ad-hoc requests

## DRA Implication Summary

**Primary Recommendation**: The straight-through processing initiative proves SBA has the technical capability and business logic clarity to implement modern API-driven automation. The **primary barrier** is not internal capability — it is **external partner integration**, specifically GSA/SAM.gov. A Salesforce Data Cloud + MuleSoft solution should:

1. **Prioritize GSA/SAM.gov integration** — escalate veterans certification and contracts data API access as a federal data-sharing priority
2. **Build internal automation first** — use straight-through processing as a blueprint for other certification types and business processes where SBA controls the data sources
3. **Create contracts data mart** — aggregate available sources (USA Spending, manual GSA extracts, third-party data) into a unified contracts view until GSA API is available
4. **Risk-based monitoring dashboard** — enable proactive annual reviews and fraud detection by unifying certifications + contracts + third-party signals
5. **Platform stability investment** — address UCP rebuild churn before adding more features; assess cloud-native modernization to break the rebuild cycle

**Capability gaps to address**:
- **Connect**: GSA/SAM.gov integration (external blocker; requires executive sponsorship)
- **Integrate**: Contracts data unification (can be solved with Data Cloud + MuleSoft)
- **Validate**: Expand third-party data validation beyond veterans to other certification types
- **Decide**: Build risk-scoring and proactive monitoring on unified certifications + contracts data
- **Orchestrate**: Generalize straight-through processing pattern to other certification workflows

**Quick win**: Hillary's team has proven they can build modern API integrations and instant decision workflows. Give them a stable platform and access to contracts data, and they can dramatically expand automation.
