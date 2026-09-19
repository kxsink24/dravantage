---
title: "National Ombudsman Interview — Natalie"
date: 2026-07-06
type: interview
source_file: "transcript-summary-provided"
status: captured
personas: [Business Worker, Data Worker, IT Worker]
tags: [dra, interview, sba, national-ombudsman, nocms, process-automation]
---

# National Ombudsman Interview — Natalie

> [!NOTE]
> This interview captures the National Ombudsman's operational view of the complaint-handling process, focusing on the NOCMS (National Ombudsman Case Management System) and the manual processes surrounding federal agency enforcement complaint management.

## Source

- **Interview subject:** Natalie (National Ombudsman Office)
- **Date:** 2026-07-06
- **Context:** Discovery interview for SBA Data Readiness Assessment
- **Focus area:** National Ombudsman complaint intake, case management, and agency coordination process

## Participants / Speakers Observed

| Name | Role | Persona signal |
|---|---|---|
| Natalie | National Ombudsman (leadership/operational role) | Business Worker / Business Leader |

## Executive Summary

The National Ombudsman serves as an intermediary for small businesses filing complaints about federal agency enforcement actions. The process flow is: small business receives enforcement notice → files complaint via NOCMS portal → Ombudsman sends to agency → agency responds in 30 days → Ombudsman relays response to business.

The dominant pain points are **volume-driven manual processes** (40-75 letters per week, mostly related to SBA EIDL loan charge-offs) and **lack of integration** with SBA lending systems. The Ombudsman must manually verify loan status and cannot aggregate complaint data by regulation, creating both a **Time Trap** and a **Blind Spot**. NOCMS itself is aging Cold Fusion infrastructure with performance issues ("level two" system).

The interview reveals a high-volume, high-manual-effort process with clear opportunities for integration, automation, and data aggregation.

## Key Systems and Data Sources Mentioned

| System / Source | What it holds or does | Current-state signal |
|---|---|---|
| NOCMS (National Ombudsman Case Management System) | Cold Fusion application; external-facing portal for complaint intake and case tracking | Aging system; "level two" performance; no integration with SBA lending |
| SBA lending systems (ULP/CAFS implied) | Loan status, charge-off status, Treasury referral data | Not integrated with NOCMS; requires manual verification |
| Power BI | Reporting layer on NOCMS data | Data discrepancies between NOCMS and Power BI (e.g., 499 vs 521 cases) |
| Inspector General (IG) protected data | Complaint data is protected under IG Act | One-way data flow: can receive but not share |

## Evidence Captured by Barrier

### Blind Spot — data exists but cannot be seen or connected

- **No integration with SBA lending systems:** "Right now, we have no way of talking to the lending part of this organization." The Ombudsman cannot verify loan status, charge-off timing, or Treasury referral without manual outreach.
- **Cannot aggregate by regulation:** "We have no way to aggregate the data around what regulations are... coming in more than once." Prevents pattern analysis and proactive policy feedback.
- **Data discrepancies between systems:** Power BI shows different case counts than NOCMS (499 vs 521), indicating either data-quality issues or incomplete visibility into what's actually in the system.

### Time Trap — manual, repetitive, high-volume work

- **40-75 letters per week** to SBA alone, mostly EIDL loan charge-offs to Treasury: "If there was a way to link our system... that would eliminate us sending them probably 40 to 75 letters a week."
- **Manual letter signing:** "Why do I have to sign every letter?" Natalie signs 30-40 letters per day, 29 of them internal correspondence.
- **Volume increasing dramatically:** "2026... 751 cases. If you look back in previous reports, they didn't receive 751 cases over two or three years." The manual process is not scaling with demand.
- **30-day agency response turnaround** creates time pressure but no workflow automation to track, escalate, or aggregate responses.

### Trust Gap — data exists but quality/consistency is questioned

- **Power BI vs NOCMS discrepancies:** "The system will say 499. The power BI say 521. What's happening here?" Trust in reporting is undermined when two views of the same data don't match.
- **Manual verification required:** Because there's no system-to-system integration, staff must manually verify loan details, creating both delay and risk of error.

## 3 Deep Dive Findings

| Surface issue | Operational consequence | Business impact | Capability mapping |
|---|---|---|---|
| NOCMS cannot access SBA lending system data | Ombudsman must manually verify loan status, charge-off date, and Treasury referral for every EIDL complaint | 40-75 unnecessary letters per week; delays response to small businesses; staff time consumed by manual verification | Connect, Integrate, Unify |
| No aggregation capability by regulation or complaint type | Cannot identify patterns, repeat offenders, or systemic issues | Misses opportunity to provide feedback to agencies on problematic regulations or enforcement patterns; reactive instead of proactive | Understand, Decide, Act |
| Manual letter signing for 30-40 letters/day | Ombudsman's time is consumed by process management rather than strategic oversight | Leadership capacity is tied up in operational tasks; scales poorly as volume increases | Orchestrate, Act |
| NOCMS performance is poor ("level two") and built on aging Cold Fusion | System slowness compounds manual-process burden; likely limits future capability enhancements | Staff frustration; risk of system failure under increasing load; harder to modernize or integrate | Protect, Integrate |
| Power BI and NOCMS show different case counts | Reporting is not trusted; discrepancies suggest data-quality or ETL issues | Leadership cannot rely on metrics for resource planning or performance reporting | Validate, Decide |

## Capability Signals

| Capability | Signal from transcript | Provisional implication |
|---|---|---|
| Connect | NOCMS is isolated from SBA lending systems; no API or integration to verify loan/charge-off status | Low maturity; strongest need is bi-directional integration with ULP/CAFS |
| Integrate | No system-to-system automation; manual letter generation and verification loops | Low maturity; workflow orchestration and data-sharing APIs are absent |
| Understand | Cannot aggregate by regulation or complaint category | Low maturity; semantic model for complaint taxonomy, regulation mapping, and pattern analysis is needed |
| Unify | NOCMS holds complaint data; lending systems hold loan data; no unified view of the small business across systems | Low maturity; identity resolution across complaint, loan, and business records is missing |
| Validate | Data discrepancies between NOCMS and Power BI undermine trust in reporting | Low maturity; data quality, lineage, and reconciliation processes are weak |
| Protect | IG Act protections create one-way data flow (can receive, cannot share) | Medium maturity; governance controls exist but may limit reciprocal integration patterns |
| Decide | No analytics or aggregation beyond Power BI dashboards; pattern detection is manual | Low maturity; opportunity for predictive models, complaint clustering, and regulatory impact analysis |
| Orchestrate | Manual 30-day response tracking; no automated escalation, routing, or workflow intelligence | Low maturity; case lifecycle is person-dependent rather than system-driven |
| Act | Letters are manually generated and signed; no intelligent triage, auto-response, or proactive notification | Low maturity; high opportunity for agentic workflows and automation |

## Verbatim Quote Bank

> "40 to 75 a week... I sign like 30 to 40 letters a day... 29 of them are internal." — Natalie, on manual letter volume

> "Why do I have to sign every letter?" — Natalie, questioning the manual signing process

> "If there was a way to link our system... that would eliminate us sending them probably 40 to 75 letters a week." — Natalie, on the impact of integration with SBA lending systems

> "Right now, we have no way of talking to the lending part of this organization." — Natalie, on lack of system integration

> "We have no way to aggregate the data around what regulations are... coming in more than once." — Natalie, on missing pattern-analysis capability

> "The system will say 499. The power BI say 521. What's happening here?" — Natalie, on data discrepancies

> "We didn't have to write those same letters... that would eliminate us sending them probably 40 to 75 letters a week." — Natalie, describing the benefit of integration

> "Performance is not good... it's a level two." — Natalie, on NOCMS system quality

> "2026... 751 cases. If you look back in previous reports, they didn't receive 751 cases over two or three years." — Natalie, on dramatic volume increase

## Persona Evidence

### Business Worker (Natalie as operational leader)

**Current State Pain Points:**
- Manually signs 30-40 letters per day, most of which are internal correspondence
- Must manually verify loan status for every EIDL complaint because NOCMS cannot access lending-system data
- Cannot aggregate complaints by regulation or type, limiting the ability to identify patterns or systemic issues
- NOCMS performance is poor, compounding the manual-process burden

**Desired Outcomes:**
- Integration with SBA lending systems to auto-verify loan/charge-off status and eliminate 40-75 weekly letters
- Automated letter generation and routing, removing manual signing bottleneck
- Aggregation and pattern-detection capability to identify repeat regulations and provide feedback to agencies
- Improved NOCMS performance and modern replacement architecture

**Quotes:**
- "Why do I have to sign every letter?"
- "If there was a way to link our system... that would eliminate us sending them probably 40 to 75 letters a week."

**Confidence Level:** High — Natalie provided clear, specific operational detail about daily/weekly volume, manual steps, and integration gaps.

### Data Worker (implied — staff managing NOCMS and Power BI reporting)

**Current State Pain Points:**
- Power BI reports show different case counts than NOCMS, indicating data-quality or ETL issues
- No semantic model or aggregation logic for complaint categorization or regulation mapping
- Volume is increasing dramatically (751 cases in 2026 vs 751 over 2-3 years historically), but reporting/analysis tools have not scaled

**Desired Outcomes:**
- Reconciled, trusted reporting between NOCMS and Power BI
- Complaint taxonomy and regulation-mapping model for pattern analysis
- Scalable analytics infrastructure to support increasing volume

**Quotes:**
- "The system will say 499. The power BI say 521. What's happening here?"

**Confidence Level:** Medium — Evidence is indirect (Natalie describing reporting issues), but signals are clear.

### IT Worker (implied — staff supporting NOCMS)

**Current State Pain Points:**
- NOCMS is aging Cold Fusion infrastructure with "level two" performance
- No integration with SBA lending systems (ULP/CAFS)
- IG Act data protections create one-way data-sharing constraints, complicating integration patterns

**Desired Outcomes:**
- Modernize or replace NOCMS with performant, API-enabled architecture
- Build governed integration with SBA lending systems that respects IG Act protections
- Enable workflow orchestration, automated routing, and intelligent triage

**Quotes:**
- "Performance is not good... it's a level two." — Natalie

**Confidence Level:** Low-Medium — IT worker voice is absent; system limitations are described by business user.

## Recommended Follow-Up

| Gap | Why it matters | Suggested action |
|---|---|---|
| NOCMS system owner / IT lead not interviewed | Current-state architecture, integration constraints, and modernization roadmap need technical validation | Interview NOCMS system owner and OCIO integration lead |
| IG Act data-protection constraints | One-way data flow may complicate reciprocal integration; governance model needs to be understood | Review IG Act data-sharing policy and consult SBA legal/privacy team |
| Power BI vs NOCMS data discrepancy | Trust Gap cannot be addressed without understanding root cause | Technical deep-dive on NOCMS → Power BI ETL and data-quality checks |
| EIDL loan charge-off process | Integration opportunity depends on understanding how lending systems track charge-offs and Treasury referrals | Interview ULP/CAFS system owner or lending-operations lead |
| National Ombudsman strategic priorities | Operational pain is clear, but strategic vision for the office's future role is not | Interview National Ombudsman (business leader framing) or review strategic plan |

## Systems Integration Hypothesis

**Current state:** NOCMS is an isolated Cold Fusion portal. Small businesses submit complaints; Ombudsman staff manually route them to agencies and track responses. When complaints involve SBA EIDL loans, staff must manually verify loan status with lending teams because there is no system-to-system connection.

**Desired state:** NOCMS (or its replacement) integrates with SBA lending systems (ULP/CAFS) via API to auto-verify loan status, charge-off date, and Treasury referral. Workflow orchestration automates letter generation, routing, and escalation. Complaint data is aggregated by regulation and agency, enabling pattern detection and proactive policy feedback.

**Capability gap:** Connect, Integrate, Orchestrate, Decide. The National Ombudsman operates in a Blind Spot (cannot see lending data) and Time Trap (manual verification and letter generation). Trust Gap is also present (Power BI discrepancies), but secondary to the integration and automation needs.

**Preliminary recommendation:** Include National Ombudsman / NOCMS in the SBA data-integration roadmap. Prioritize read-only API access from NOCMS to ULP/CAFS for loan verification (respecting IG Act protections), and explore workflow-automation opportunities (e.g., Salesforce Flow, OmniStudio, or intelligent document generation) to reduce manual letter burden.

---

## Analysis Metadata

- **Analyzed by:** Claude Code (DRA agent)
- **Analysis date:** 2026-07-06
- **Confidence level:** Medium-High (strong operational detail, limited technical/strategic voice)
- **Barrier severity:** Blind Spot (High), Time Trap (High), Trust Gap (Medium)
- **Recommended next steps:** Interview NOCMS system owner, ULP/CAFS integration lead, and validate IG Act data-protection constraints
