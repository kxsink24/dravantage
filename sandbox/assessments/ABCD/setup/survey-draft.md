---
title: "Discovery Survey Draft — BCLC"
created: 2026-06-24
status: published
published_date: 2026-06-25
tags: [dra, survey, bclc, kickoff]
form_live_url: "https://forms.gle/9oWo9wnWHpabUn9t7"
form_edit_url: "https://docs.google.com/forms/d/1q3Hd8GcNRn7JCaP8NGhgWWTHR4DgnvzHgsAWv4FdnlQ/edit"
---
# Data Readiness Assessment — Discovery Survey (PUBLISHED)

> [!SUCCESS] Published as a Google Form on 2026-06-25 (attributed, not anonymous). Re-published after correcting QBR → September go-lives framing.
> - **Live / share:** https://forms.gle/9oWo9wnWHpabUn9t7
> - **Edit:** https://docs.google.com/forms/d/1q3Hd8GcNRn7JCaP8NGhgWWTHR4DgnvzHgsAWv4FdnlQ/edit
> - **Generator:** [[setup/bclc-survey-google-form.gs]]
> - ~~Retired (pre-fix) form: https://forms.gle/GBY4xrTK4rn6f4sE8~~ — do not distribute; close/delete in Google Forms.

## Introduction

Thank you for participating in BCLC's Data Readiness Assessment. This survey helps us understand your current data landscape and priorities as you prepare for the September 2026 convergence — the simultaneous go-live of your new Melco gaming platform, modernized Intralot lottery network, Rewards & Incentives program, and Future Anthem real-time promotions.

Your responses will shape our July 13 kickoff discussion with Mark Goldberg and inform the roadmap we deliver ahead of your September 2026 platform launches. The survey takes approximately 15 minutes to complete.

All responses are confidential and will be aggregated for analysis.

---

## Questions

### Question 1 — Compelling Event / Strategic Outcomes
**Question:** What are the top 3 data-related outcomes that must be achieved before your September 2026 platform go-lives to support BCLC's launches and regulatory mandate?

**Response Type:** Open text (short answer)

**Maps to Capability:** Cross-cutting (Act / Decide)

**Why this question:** Reveals leadership's prioritization between compliance, commercial activation, and operational stability during the convergence window.

**BCLC-specific framing:** Directly references their known September 2026 go-live deadline and the platform convergence. Surfaces whether Cullen Report compliance or loyalty program launch is the primary driver.

---

### Question 2 — Profile Unification Readiness
**Question:** On a scale of 1-5, how confident are you that BCLC can achieve a unified, real-time 360-degree player view across PlayNow.com, casino floor (Everi/Melco), and retail lottery terminals by September 2026?

1 = Not confident — foundational gaps remain  
3 = Moderately confident — some integration work needed  
5 = Very confident — architecture is ready

**Response Type:** 1-5 scale with optional comment

**Maps to Capability:** Unify (Trust pillar)

**Why this question:** Tests whether stakeholders understand the complexity of the Infosphere→Data360 transition and the cross-system identity resolution challenge.

**BCLC-specific framing:** Uses their exact compliance language ("360-degree player view") and names their three operational channels and known systems.

---

### Question 3 — Real-Time Data Latency
**Question:** Today, when a high-value player makes a $9,500 cash buy-in at a casino floor (just below the $10,000 reporting threshold), how quickly does that transaction appear in systems used by your AML and Safer Play teams?

- Real-time (under 1 minute)
- Near real-time (1-15 minutes)
- Batch processing (hourly or daily)
- Don't know
- Varies by location/system

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Connect / Integrate (Unlock pillar)

**Why this question:** Uncovers the batch vs. streaming latency gap that creates compliance blind spots. The $9,500 example tests awareness of "structuring" detection needs.

**BCLC-specific framing:** Uses a dollar amount just below BCLC's actual $10,000 source-of-funds threshold. Names their actual operational units (AML, Safer Play).

---

### Question 4 — Data Silos and Swivel-Chairing
**Question:** How often do your teams manually reconcile or re-enter player data across systems (e.g., matching Everi casino transactions to PlayNow.com accounts, or exporting Data360 segments to Future Anthem)?

- Daily / multiple times per day
- Weekly
- Monthly
- Rarely / never — systems are integrated
- Don't know

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Orchestrate (Activate pillar)

**Why this question:** Quantifies the "relay race" failure mode and labor cost of manual workarounds. Reveals whether teams know about the orchestration gap.

**BCLC-specific framing:** Names their actual systems (Everi, PlayNow.com, Data360, Future Anthem) to make the question concrete and credible.

---

### Question 5 — Infosphere MDM Transition Plan
**Question:** What is the biggest risk in replacing IBM InfoSphere MDM with Salesforce Data360 while simultaneously launching Melco and Intralot platforms in September?

**Response Type:** Open text (short answer)

**Maps to Capability:** Unify (Trust pillar)

**Why this question:** Surfaces whether teams recognize the convergence risk or assume platform vendors will "just work" together. Tests for architectural awareness vs. wishful thinking.

**BCLC-specific framing:** Names the legacy system (InfoSphere MDM), the replacement (Data360), and the exact platforms launching concurrently.

---

### Question 6 — Agentforce Readiness
**Question:** BCLC is piloting Agentforce for terminal diagnostics and high-value player concierge. What is the biggest barrier to deploying these agents in production by Q4 2026?

- Data quality / incomplete player profiles
- Real-time integration gaps (agents can't access live system data)
- Trust / governance (agents can't write back to systems of record)
- Operational capacity (no team to handle agent escalations)
- Don't know / not familiar with Agentforce
- Other (please specify)

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Act (Activate pillar)

**Why this question:** Tests whether teams understand that agentic AI requires grounded, real-time data activation — not just chatbots on stale databases.

**BCLC-specific framing:** References their actual Agentforce use cases (terminal diagnostics, concierge) and their Q4 deployment timeline.

---

### Question 7 — Data Quality and Governance
**Question:** On a scale of 1-5, how would you rate the quality and completeness of player identity data (e.g., verified name, address, source of funds) across all channels today?

1 = Poor — significant gaps, duplicates, or missing fields  
3 = Fair — usable but requires manual cleanup  
5 = Excellent — clean, complete, and audit-ready

**Response Type:** 1-5 scale with optional comment

**Maps to Capability:** Validate (Trust pillar)

**Why this question:** Measures data quality maturity and whether teams acknowledge the gap described in May 26 meeting ("data quality is more of an ambition than an actual process").

**BCLC-specific framing:** References the specific compliance fields mandated by Cullen Report (name, address, source of funds).

---

### Question 8 — Streaming Data Ingestion
**Question:** Can your current data architecture ingest and process streaming events (e.g., real-time slot spins, mobile app location changes, live wagers) fast enough to trigger immediate actions like promotional offers or responsible gaming interventions?

- Yes — we have real-time streaming in production
- Partially — we have streaming for some channels, not all
- No — we rely on batch ETL and scheduled jobs
- Don't know
- Planned for future

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Connect (Unlock pillar)

**Why this question:** Tests whether teams understand the architectural gap between batch InfoSphere MDM and real-time Data360 activation layer.

**BCLC-specific framing:** Uses gaming-specific event examples (slot spins, mobile location, live wagers) tied to their Future Anthem personalization and Safer Play mandates.

---

### Question 9 — Regulatory Compliance Confidence
**Question:** How confident are you that BCLC's current data systems can detect and report suspicious transaction patterns (e.g., "structuring" below $10K thresholds) across all channels in time to meet FINTRAC filing deadlines?

1 = Not confident — we have blind spots  
3 = Moderately confident — detection works but has delays  
5 = Very confident — real-time detection across all systems

**Response Type:** 1-5 scale with optional comment

**Maps to Capability:** Protect / Validate (Trust pillar)

**Why this question:** Directly addresses the FINTRAC penalty and Cullen Report mandate. Tests whether teams acknowledge the compliance risk revealed in the August 2025 penalty and February 2025 audit.

**BCLC-specific framing:** References their exact $10K threshold, FINTRAC reporting entity, and the "structuring" pattern cited in Ghotaymi court case.

---

### Question 10 — Loyalty Program Data Requirements
**Question:** The new Rewards & Incentives program aims to increase registered player rates from 53% to 64% by FY27/28. What is the biggest data challenge preventing higher registration rates today?

- Players don't see value (promotion/offer relevance is poor)
- Registration process is too complex or requires too much data
- Can't track play across channels (online, casino, lottery) in one account
- Privacy concerns / players don't trust how we use data
- Don't know
- Other (please specify)

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Decide / Act (Activate pillar)

**Why this question:** Surfaces whether the registration barrier is a UX issue, a data unification issue, or a trust/personalization issue. Tests strategic clarity.

**BCLC-specific framing:** Uses their exact FY27/28 target (53%→64%) and references the Rewards & Incentives rebrand from Encore Rewards.

---

### Question 11 — Slalom CDP Pause — Lessons Learned
**Question:** BCLC previously paused CDP profile unification work with Slalom. What was the primary reason for the pause, and what needs to be in place before resuming?

**Response Type:** Open text (short answer)

**Maps to Capability:** Unify (Trust pillar)

**Why this question:** Reveals organizational memory of the Slalom pause. Tests whether stakeholders attribute it to Salesforce product instability, BCLC internal readiness, or integration complexity.

**BCLC-specific framing:** Names Slalom and the CDP project explicitly. Invites honest retrospective to avoid repeating blockers.

---

### Question 12 — Data Team Operating Model
**Question:** Who is the single-threaded leader accountable for delivering the unified 360-degree player view by your September 2026 go-lives?

**Response Type:** Open text (name and title, or "unclear")

**Maps to Capability:** Cross-cutting (People & operating model)

**Why this question:** Tests whether BCLC has clear DRI (Directly Responsible Individual) accountability or diffused ownership across IT, Marketing, Compliance.

**BCLC-specific framing:** Uses their Cullen mandate language ("360-degree player view") and their actual deadline (September 2026 go-lives).

---

### Question 13 — Integration Layer (MuleSoft / API Strategy)
**Question:** BCLC discontinued MuleSoft. What integration platform or pattern is being used to connect Melco, Intralot, Everi, Data360, and Future Anthem?

- Direct API integrations (point-to-point)
- Salesforce native connectors (e.g., Data360 streaming, MuleSoft Anypoint if reinstated)
- Custom middleware / ESB
- Vendor-provided batch ETL
- Don't know
- Other (please specify)

**Response Type:** Multiple choice with optional comment

**Maps to Capability:** Integrate (Unlock pillar)

**Why this question:** Critical architectural unknown. MuleSoft discontinuation creates integration risk during the convergence. Tests whether a replacement pattern exists.

**BCLC-specific framing:** Names MuleSoft discontinuation and lists all five systems that need orchestration.

---

### Question 14 — Future State Vision
**Question:** In your ideal future state (18-24 months from now), what does "winning with data" look like for BCLC? Describe one concrete use case or outcome.

**Response Type:** Open text (short answer)

**Maps to Capability:** Cross-cutting (Decide / Act)

**Why this question:** Open-ended aspirational question to uncover what stakeholders value most: compliance, personalization, operational efficiency, or innovation.

**BCLC-specific framing:** Uses 18-24 month horizon (post-September stabilization) and invites stakeholders to define success in their own terms.

---

### Question 15 — Prioritization for Kickoff Discussion
**Question:** If you could only address one data capability gap in our July 13 kickoff meeting with Mark Goldberg, which would it be?

- Real-time data integration across all platforms
- Profile unification and identity resolution
- Data quality and governance
- Regulatory compliance automation
- AI/Agentforce readiness and activation
- Other (please specify)

**Response Type:** Multiple choice (single answer)

**Maps to Capability:** Cross-cutting (prioritization signal)

**Why this question:** Forces prioritization. Reveals whether stakeholders align on the critical path or have competing priorities.

**BCLC-specific framing:** References the actual kickoff date and executive sponsor (Mark Goldberg).

---

## Survey Distribution Instructions

1. **Timing:** Send survey within 48 hours of kickoff meeting confirmation (target: by June 28)
2. **Deadline:** Responses due by July 9 (4 days before kickoff to allow aggregation)
3. **Distribution List:** Account team to provide — include:
   - Mark Goldberg (CIO/CDO)
   - Marie-Noëlle Savoie (Chief Marketing & Social Purpose Officer)
   - Kevin deBruyckere (Chief Compliance Officer)
   - Data360 implementation leads
   - Marketing Cloud / loyalty program leads
   - IT architecture / integration leads
4. **Tool:** Google Forms or Salesforce Surveys (account team preference)
5. **Follow-up:** Send reminder on July 6 if response rate < 50%

---

## Coverage Summary

**Unlock (Connect/Integrate):** Questions 3, 8, 13 — streaming ingestion, latency, integration patterns  
**Trust (Validate/Protect/Unify):** Questions 2, 5, 7, 9, 11 — profile unification, InfoSphere transition, data quality, compliance detection  
**Activate (Decide/Orchestrate/Act):** Questions 4, 6, 10, 14 — manual workarounds, Agentforce readiness, loyalty activation, future vision  
**Cross-cutting:** Questions 1, 12, 15 — compelling event, accountability, prioritization

**Weighting:** Heavy on Unlock and Trust (10/15 questions) given Infosphere→Data360 migration and Cullen compliance mandate.
