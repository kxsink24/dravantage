---
title: "Discovery Survey Draft — Old Dominion University"
status: draft
tags: [dra, setup, survey]
created: 2026-06-02
---

# ODU Data Readiness — Discovery Survey (Draft)

> [!NOTE]
> **Live Google Form built from this draft (2026-06-02):**
> [Edit](https://docs.google.com/forms/d/18DHiqNvqb54kkStMBQbOSUdM1msl8Js9TPcAj2uts4o/edit) ·
> [Respond](https://docs.google.com/forms/d/e/1FAIpQLSdFg1p1TN5nzE7PPMDDFhJjzNBjEc0qIUqp9a-QkvvelFaYoQ/viewform)
> In the shared "Data Foundations Data Readiness Assessment" Drive folder; tracked in the org as a Survey `DRA_Drive_Resource__c`. The form holds the **respondent-facing** questions only — the capability/why annotations below stay here for the architect.

> [!NOTE]
> Tailored ~14-question survey for the ODU DRA, grounded in the Data Foundation
> Unlock/Trust/Activate framework (see `references/data-foundation-discovery.md`). Each
> question is annotated with the **capability** it measures and **why** it's here — those
> annotations are for the architect, not the respondent. Weighted toward **Unlock** and
> **Activate**, where ODU's research shows the most pain (real-time Banner↔Salesforce
> integration for application-status agents). Send via Google Forms; `dra-analyze-input`
> clusters responses by capability and feeds the live 3-deep-dive.

## How to read the annotations
- **Capability:** which of the nine (Connect/Integrate/Understand · Validate/Protect/Unify · Decide/Orchestrate/Act).
- **Why:** what the response distribution tells us about ODU's maturity.
- **Tailoring:** the ODU-specific framing used and where it came from.

---

## Section A — Outcomes & Compelling Event (business first)

**Q1. In one sentence, what would "One Monarch Nation" feel like to a student if the data foundation behind it worked perfectly two years from now?**
*(Open text)*
- **Capability:** Cross-cutting (outcome anchor) · **Why:** Opens on vision, not technology — frames the whole survey around the student-experience outcome ODU itself articulated. The spread of answers shows how aligned leadership vs. practitioners are on the "north star."
- **Tailoring:** Uses ODU's own "One Monarch Nation" language (kickoff deck, slide 4).

**Q2. What is driving the urgency to act on your data foundation *now*, rather than in 12–18 months?** *(Multi-select: EVMS/health-sciences integration · enrollment/retention targets · SCHEV performance funding · Informatica/MuleSoft direction · AI/agent initiatives · other)*
- **Capability:** Cross-cutting (compelling event) · **Why:** Tests whether the urgency we inferred from research (OMNI "Salesforce First" vs. Banner reality, EVMS merger, SCHEV funding) is shared and which factor respondents feel most. Divergence here is itself a finding.
- **Tailoring:** Options pulled directly from the deep-research compelling-event synthesis.

---

## Section B — UNLOCK (Connect / Integrate / Understand)

**Q3. How does student data move from Banner (SIS) into Salesforce today?** *(Real-time API · scheduled batch · manual export/import · it largely doesn't · not sure)*
- **Capability:** Connect · **Why:** The single highest-leverage question — the locked use case (real-time application-status agent) lives or dies on this. "Batch/manual" = the core gap; "not sure" across roles = a visibility problem.
- **Tailoring:** Names Banner explicitly (kickoff recording: Banner→Salesforce re-engineering is the agreed focus).

**Q4. When a record changes in Banner, how reliably does that change reach the systems and people who need it?** *(1 = rarely/slowly … 5 = reliably in real time)*
- **Capability:** Connect · **Why:** Measures change-propagation reliability — the gap between "Salesforce First" aspiration and batch reality. Low scores quantify the Time-Trap barrier.

**Q5. How is integration handled across your environment today?** *(Centralized platform — MuleSoft/Informatica with clear swim lanes · both tools but unclear which to use when · point-to-point/custom · mostly manual · not sure)*
- **Capability:** Integrate · **Why:** Directly tests the MuleSoft-vs-Informatica ambiguity that recurs across every ODU source. "Both, unclear" confirms the central tension the DRA must resolve.
- **Tailoring:** From the recurring MuleSoft/Informatica "no clear swim lanes" theme (Slack, agenda, kickoff).

**Q6. Rate the performance of your current integrations for real-time, student-facing needs (e.g., the Monarch portal).** *(1 = far too slow … 5 = sub-second where needed)*
- **Capability:** Integrate · **Why:** Quantifies the Informatica API-latency pain Sai raised (sub-second APIs needed for homegrown apps). Low scores tie the technical symptom to the student-experience outcome.
- **Tailoring:** Names the Monarch portal (agenda doc, "deeper focus areas").

**Q7. Which teams need data that lives outside their primary system but can't easily get it today?** *(Open text)*
- **Capability:** Understand · **Why:** Surfaces where federated/zero-copy access would help and which lines of business are underserved — and reveals stakeholders we haven't interviewed.

**Q8. How ready is your data foundation to deploy AI agents confidently against live data?** *(1 = not started … 5 = production-ready)*
- **Capability:** Understand (AI readiness) · **Why:** The activate-side anchor. Gap between this and Q1's ambition is the headline "AI readiness" story for the readout.

---

## Section C — TRUST (Validate / Protect / Unify)

**Q9. When two teams pull the same student metric, how often do they get the same answer?** *(1 = frequently disagree … 5 = always consistent)*
- **Capability:** Validate · **Why:** Lisa Handy flagged data inconsistency in the analytic environment; this quantifies it and exposes Trust-Gap severity. Variance by respondent group = a perception gap worth probing.
- **Tailoring:** From Lisa Handy's kickoff comment on analytic data inconsistencies.

**Q10. Do you have a data catalog, defined data ownership, and lineage you can trust for audit/compliance (incl. SACSCOC / SCHEV reporting)?** *(Yes, mature · partial · no/ad hoc · not sure)*
- **Capability:** Validate/Protect · **Why:** Tests governance maturity against ODU's real reporting obligations (SACSCOC QEP data demands, SCHEV outcomes metrics). "No/ad hoc" against hard mandates is a strong compelling-event amplifier.
- **Tailoring:** References SACSCOC/SCHEV from deep research.

**Q11. Do duplicate or fragmented student/constituent records affect your ability to deliver a connected experience?** *(1 = constant problem … 5 = single trusted view)*
- **Capability:** Unify · **Why:** Tests for MDM/identity-resolution need — sharpened by the EVMS merger adding 1,440+ students and a second institution's records. Low scores justify the Unify investment.
- **Tailoring:** EVMS merger context from deep research.

**Q12. How is sensitive data governed as you integrate new programs (e.g., the EVMS/health-sciences systems) into the platform?** *(Strong central policy · evolving · inconsistent · not sure)*
- **Capability:** Protect · **Why:** Health-sciences data raises the governance bar; tests whether protection keeps pace with the merger's data consolidation.

---

## Section D — ACTIVATE (Decide / Orchestrate / Act)

**Q13. For the "what's the status of my application?" experience, can a student get an accurate, real-time answer today — across application, transcripts, FAFSA, and financial aid?** *(Yes end-to-end · partially · no, manual/static · not sure)*
- **Capability:** Decide/Act · **Why:** Tests the exact locked use case against today's reality. The gap between "no/static" and the desired agent is the MVP the roadmap will sequence first.
- **Tailoring:** The application-status agent + transcripts/FAFSA/financial-aid detail (agenda doc "deeper focus areas", Slack).

**Q14. When a cross-team process hands off (e.g., enrollment → advising → financial aid), where does the "baton" most often drop, and what's the manual workaround?** *(Open text)*
- **Capability:** Orchestrate · **Why:** The 3-deep-dive seed for the workshop — surfaces the highest-cost swivel-chair work and lets us attach a business cost (labor, melt risk) to an orchestration gap.

---

## Closing

**Q15. Who else should we be talking to, and what's the one question you hope this assessment answers?** *(Open text)*
- **Capability:** Cross-cutting · **Why:** Catches missing stakeholders and surfaces each respondent's personal definition of success — gold for the readout and for interview scheduling.

---

## Coverage summary (for the architect)

| Pillar | Questions | Weighting rationale |
|---|---|---|
| Outcomes/Compelling event | Q1, Q2 | Lead with business outcomes (DRA principle) |
| Unlock | Q3–Q8 (6) | **Heaviest** — the locked use case is a real-time integration problem |
| Trust | Q9–Q12 (4) | Governance/MDM pressure from EVMS + SACSCOC/SCHEV |
| Activate | Q13–Q14 (2) | Tied directly to the application-status agent MVP |
| Closing | Q15 | Stakeholder + success-definition catch-all |

**Gaps to firm up before sending:** confirm the exact survey audience (which of Kirk/Jimmy/
Matt/Brian/Sai/Lisa + business stakeholders), and decide whether to split into role-specific
versions (leaders get Q1–Q2 + outcome items; practitioners get the full technical set).
