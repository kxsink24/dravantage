---
title: "OII Interview — Tom Morris"
date: 2026-05-XX
type: interview
stakeholder: Tom Morris
role: Office of Innovation and Investment
module: Module 3
status: captured
personas: [IT Worker, Business Worker]
tags: [dra, interview, sba, oii, sbic, sbir, systems]
---

# OII Interview — Tom Morris

> [!NOTE]
> Office of Innovation and Investment manages SBIC (Small Business Investment Company) program and coordinates SBIR/STTR grant programs. This interview provides critical system inventory and pain points for investment-focused programs.

## Source

- **Interview date:** 2026-05-XX (exact date TBD)
- **Stakeholder:** Tom Morris
- **Role:** Office of Innovation and Investment
- **Module:** Module 3 — IT / Data Systems
- **Recording URL:** (pending)
- **Transcript URL:** (pending)

## Participants

| Name | Role | Persona signal |
|---|---|---|
| Tom Morris | OII, manages SBIC and SBIR/STTR programs | Business Worker / IT Worker |

## Executive Summary

The Office of Innovation and Investment manages two distinct programs: SBIC (Small Business Investment Company) and SBIR/STTR grants. SBIC is a $54B portfolio of 365 licensed funds where SBA provides guarantees (not direct loans) with average $7M investments. SBIR/STTR coordinates $5B+ in awards from 12 other federal agencies (DOD, NIH, NASA, etc.) — SBA coordinates but doesn't fund these grants.

**Critical pain point:** SBIC Web is a legacy system that Morris describes as a "major thorn in my side" and "spending 100s of thousands of dollars a year to patch" because service providers "no longer service a lot of that IT. It's too old." A Salesforce replacement is in progress.

**Key architectural gap:** Systems are siloed with no connection between SBIC and 7A loan systems to flag fraud across programs. Morris notes: "If somebody steals from an SBIC, it's like stealing from a federal bank. The penalties are draconian."

**Strategic quote:** "Please don't buy the cheapest system... just don't give me the cheapest one. We don't want AI for government."

## Program Context

### SBIC (Small Business Investment Company)
- **Portfolio:** $54B across 365 licensed funds
- **Investment model:** SBA provides guarantees on debentures (not direct loans)
- **Average investment:** $7M per fund
- **Reporting:** 1031 financing reports track every SBIC investment
- **Risk profile:** Federal-bank-level fraud penalties
- **System of record:** SBIC Web (legacy, being replaced by Salesforce)

### SBIR/STTR (Small Business Innovation Research / Technology Transfer)
- **Volume:** $5B+ in annual awards
- **Agencies:** 12 federal agencies (DOD, NIH, NASA, NSF, Energy, etc.)
- **SBA role:** Coordination and policy, not funding
- **Key constraint:** "We don't track that money. Our CFO is not responsible for that money"
- **System:** SBIR.gov (external-facing portal)

## Key Systems and Data Sources

| System / Source | What it holds or does | Current-state signal |
|---|---|---|
| SBIC Web | Legacy system of record for SBIC licensing, portfolio management | Critical pain point: "too old," service providers abandoning, "spending 100s of thousands of dollars a year to patch" |
| 1031 financing reports | Track every SBIC investment and portfolio company | Manual reporting burden, no automated analysis |
| Salesforce (SBIC replacement) | In progress: customization for SBIC program | Being deployed to replace SBIC Web |
| SBIR.gov | External portal for SBIR/STTR grant information | Managed by SBA but funds flow from other agencies |
| 7A loan systems | SBA loan tracking (separate from SBIC) | No integration with SBIC systems to detect cross-program fraud |

## Evidence Captured by Barrier

### Blind Spot — data exists but cannot be seen across programs

- **No cross-program fraud detection:** SBIC and 7A loan systems don't talk to each other. Morris states this prevents flagging entities that appear in multiple programs: "If somebody steals from an SBIC, it's like stealing from a federal bank. The penalties are draconian."
- **SBIR/STTR coordination gap:** SBA coordinates but doesn't track the $5B in awards from other agencies. "We don't track that money. Our CFO is not responsible for that money."
- **Siloed systems:** Morris explicitly states "many of the systems we do have are siloed. They don't talk to each other."

### Time Trap — data work is manual, repeated, or late

- **Legacy system maintenance burden:** SBIC Web requires "100s of thousands of dollars a year to patch" because it's too old for modern service providers.
- **Manual portfolio monitoring:** Morris describes the dream state: "We dream of having systems that can do this electronically that says, hey, the last three quarters, they're losing money" — indicating current state is manual.
- **1031 report analysis:** Investment tracking requires manual review rather than automated alerting.

### Trust Gap — data exists, but quality and authority are inconsistent

- **System age and reliability:** Service providers "no longer service a lot of that IT. It's too old" creates inherent reliability concerns.
- **Cross-program reconciliation:** Lack of integration between SBIC and 7A means no automated validation of entity participation across programs.

## 3 Deep Dive Findings

| Surface issue | Operational consequence | Business impact | Capability mapping |
|---|---|---|
| SBIC Web is legacy and unsupported | "Spending 100s of thousands of dollars a year to patch" an aging system; service providers abandoning | OII cannot modernize portfolio management, reporting is manual, risk of system failure | Integrate, Act, Orchestrate |
| No connection between SBIC and 7A loan systems | Cannot flag entities participating in multiple programs or detect cross-program fraud patterns | Fraud risk across $54B SBIC portfolio plus 7A loans; "stealing from a federal bank" penalties cannot be enforced proactively | Connect, Unify, Validate |
| No automated portfolio health monitoring | Staff must manually review quarterly financials; no system that "says, hey, the last three quarters, they're losing money" | Late detection of distressed investments in $54B portfolio; cannot proactively manage risk or intervene | Decide, Act, Orchestrate |
| Systems are siloed and don't communicate | SBIC, SBIR/STTR, 7A, and other SBA programs operate independently | Cannot see full picture of small business engagement across innovation/investment programs; duplicate efforts and missed opportunities | Connect, Understand, Unify |
| Marketing capability is limited | "Not very well... Congress and administration have never given us money to do mass marketing" | SBIC and SBIR/STTR programs are underutilized; small businesses don't know these options exist | Act, Orchestrate |

## Capability Signals

| Capability | Signal from transcript | Provisional implication |
|---|---|---|
| Connect | Systems are explicitly "siloed" and "don't talk to each other"; no integration between SBIC and 7A | Low maturity; foundational connectivity gap across investment programs |
| Integrate | SBIC Web is legacy with manual patching; Salesforce replacement in progress but not yet deployed | Low maturity; API-led integration is needed for modern portfolio management |
| Understand | No evidence of semantic challenges, but program complexity (guarantees vs loans, SBA-funded vs agency-funded grants) creates confusion | Medium maturity; programs are well-defined but externally complex |
| Unify | No ability to see entity participation across SBIC, 7A, and other programs | Low maturity; entity/business identity resolution needed for fraud detection and holistic view |
| Validate | 1031 reports track investments but no automated validation or cross-program reconciliation | Low maturity; manual validation only, no real-time quality checks |
| Protect | Federal-bank-level fraud penalties mentioned, but no evidence of data governance capability | Insufficient evidence; high stakes but unclear controls |
| Decide | Dream state includes automated alerting on portfolio trends ("last three quarters, they're losing money") | Low maturity; desired analytics exist as aspiration, not reality |
| Orchestrate | No automated workflows for portfolio monitoring, risk alerts, or cross-program coordination | Low maturity; entirely manual processes |
| Act | Marketing is resource-constrained; no proactive outreach or personalized engagement mentioned | Low maturity; limited ability to act on data or reach potential participants |

## Verbatim Quote Bank

> "SBIC Web... major thorn in my side" — Tom Morris

> "We're spending 100s of thousands of dollars a year to patch [SBIC Web]" — Tom Morris

> "Service providers no longer service a lot of that IT. It's too old." — Tom Morris, on SBIC Web

> "We don't track that money. Our CFO is not responsible for that money." — Tom Morris, on SBIR/STTR awards from other agencies

> "If somebody steals from an SBIC, it's like stealing from a federal bank. The penalties are draconian." — Tom Morris

> "Many of the systems we do have are siloed. They don't talk to each other." — Tom Morris

> "We dream of having systems that can do this electronically that says, hey, the last three quarters, they're losing money." — Tom Morris, on desired portfolio monitoring capability

> "Please don't buy the cheapest system... just don't give me the cheapest one. We don't want AI for government." — Tom Morris

> "Marketing is not very well... Congress and administration have never given us money to do mass marketing." — Tom Morris

## Program-Specific Details

### SBIC Portfolio Characteristics
- **365 licensed funds** actively managed
- **$54B total portfolio** value
- **$7M average investment** per fund
- **Guarantee model:** SBA guarantees debentures, not direct loans
- **Reporting requirement:** 1031 financing reports for every investment
- **Regulatory environment:** Federal-bank-level fraud penalties

### SBIR/STTR Characteristics
- **$5B+ annual awards** across federal government
- **12 participating agencies:** DOD, NIH, NASA, NSF, Energy, Agriculture, Commerce, DHS, DOT, EPA, Education, HHS
- **SBA role:** Coordination, policy, SBIR.gov portal management
- **Funding responsibility:** Each agency funds its own awards; SBA does not fund
- **Tracking limitation:** SBA coordinates but doesn't track the money

## Target State Signals

Morris explicitly describes desired capabilities:

1. **Automated portfolio health monitoring:** Systems that electronically flag distressed investments ("last three quarters, they're losing money")
2. **Cross-program fraud detection:** Integration between SBIC and 7A systems to identify entities across programs
3. **Modern system architecture:** Salesforce replacement for SBIC Web (in progress)
4. **Quality over cost:** "Please don't buy the cheapest system" — willingness to invest in proper solutions
5. **Enhanced marketing:** Implicit desire for better outreach capability (constrained by funding)

## Knowledge Gaps / Follow-Up Questions

- **Salesforce deployment timeline:** When will SBIC Salesforce customization go live?
- **1031 report automation:** What analysis is done on 1031 financing reports today? What's desired?
- **Cross-program entity matching:** Are UEI, EIN, or other identifiers available to link SBIC and 7A records?
- **SBIR.gov integration:** Does SBIR.gov data flow back into any SBA system, or is it purely external-facing?
- **Portfolio monitoring frequency:** How often are SBIC fund financials reviewed today? Quarterly? Annually?
- **Fraud detection capability:** What fraud-detection tools exist today, if any, for SBIC program?
- **Data governance:** Who owns SBIC data architecture and integration roadmap?

## Recommendations Signaled

1. **Accelerate SBIC Salesforce deployment** — legacy SBIC Web is a critical liability
2. **Establish cross-program entity resolution** — enable fraud detection across SBIC, 7A, and disaster programs
3. **Implement automated portfolio analytics** — proactive alerting on investment health trends
4. **API-led integration architecture** — break down silos between SBIC, SBIR/STTR, 7A, and other programs
5. **Data governance foundation** — establish data quality, lineage, and validation standards across investment programs

## Coverage Caveats

- This is a single interview with OII leadership; program staff and fund managers may have additional system/data perspectives
- IT Worker coverage is strong for system inventory and pain points
- Business Worker coverage is medium for program operations
- Data Worker perspective is limited; no deep data architecture or analytics discussion
- No Business Leader perspective on strategic vision or funding priorities
