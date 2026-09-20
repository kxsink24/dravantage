---
title: "Kickoff Email Templates — The Financial Conduct Authority"
tags: [dra, setup, email]
created: 2026-09-17
status: draft
---

# Kickoff Email Templates — The Financial Conduct Authority

> [!WARNING]
> **Drafts, not sends.** Nothing in this file has been distributed. Names/titles/emails marked `[confirm]` come from stakeholders with no `Org62_Contact_Id__c` match on `DRA_Stakeholder__c` — do not send to them until Josh Adams confirms a real contact record. No person appears in this file who is not already a stakeholder record on DRA-0117.

## Template 1 — Kickoff invitation (Sponsors)

**To:** Debbie Gupta (debbie.gupta@fca.org.uk), Dominic Hastings (dominic.hastings@fca.org.uk), Lauren Dixon (lauren.dixon@fca.org.uk)
**Cc:** Josh Adams (joshadams@salesforce.com)
**Subject:** FCA Data Readiness Assessment — Kickoff, 25 September 2026

> Debbie, Dominic, Lauren —
>
> Thank you for sponsoring the Data Readiness Assessment (DRA) we're kicking off with FCA on **25 September 2026**. This is the structured audit we discussed as the evidence base for the platform-versus-displacement decision ahead of the 2030 agenda and the Transform Org call — an independent look at FCA's current data foundation (across connectivity, quality, security, and AI-readiness) that will directly inform the tech-options paper.
>
> In the kickoff session we'll walk through:
> - The DRA framework and what "data readiness" means in FCA's context specifically
> - The target use case this assessment will anchor on
> - What we need from your teams over the following weeks (a short survey, then a small number of stakeholder interviews)
> - Timeline and what you'll receive at the end
>
> A short survey will go out to the interview list shortly after kickoff — we'll ask your teams to complete it before their individual sessions so we can go deeper, faster, in the live conversations.
>
> Looking forward to it.
>
> [Architect name], Salesforce

**Notes for sender:**
- All three sponsors are org62-confirmed with real emails — safe to send as-is once reviewed.
- Kickoff date (2026-09-25) pulled from `DRA_Engagement__c.Kickoff_Date__c` on the live record — verify it hasn't moved before sending.
- Deliberately does not name Palantir directly in a written sponsor email — the competitive context is real (per `Compelling_Event__c`) but should stay verbal/internal unless the sponsors have already used that language with us in writing (Slack history shows this framing has been discussed internally, not necessarily in a form appropriate to put in a customer-facing email without checking with Josh Adams first).

---

## Template 2 — Survey distribution (Interviewees)

**To:** the confirmed interviewee list below. **Hold** on the `[confirm]` names until Josh Adams verifies contact details.

Confirmed (org62-matched):
Aman Sapra (aman.sapra@fca.org.uk), Catherine Coady (catherine.coady@fca.org.uk), Glenn Redemann (glenn.redemann@fca.org.uk), Gurdeep Sembhi (gurdeepsingh.sembhi@fca.org.uk), Hannah Lipscombe-Mitchell (hannah.lipscombe@fca.org.uk), Ian Hersey (ian.hersey@fca.org.uk), Jagpal Jheeta (jagpal.jheeta@fca.org.uk), James Symon (james.symon@fca.org.uk), Johan Ahipeaud (johan.ahipeaud@fca.org.uk), Mayesta Ewer (mayesta.ewer@fca.org.uk), Paul Rice (paul.rice@fca.org.uk), Penelope Forsyth (penelope.forsyth@fca.org.uk), Seema Dhokia (seema.dhokia2@fca.org.uk), Steve Hall (steve.hall2@fca.org.uk)

`[confirm]` — no org62 match, no email on file, do not send until verified:
Andrew Higgs (Data Governance Team Lead), Edmund Towers (Head of AI Product Delivery), Faisal (Data Team Contact, surname unknown), Jason Baker (Interim Chief Architect), Julius B (Informatica contact, surname unknown), Nick Eden-Russe (Technical Contact)

**Subject:** Quick survey ahead of your DRA conversation — 10 minutes

> Hi [First Name] —
>
> As part of the Data Readiness Assessment kicking off on 25 September, we'd like to hear from you directly before your interview slot. The attached/linked survey takes about 10 minutes and covers how data flows (and sometimes doesn't) across the systems you use day to day — things like Informatica, Data360, RCMS, and Case Management tooling.
>
> There are no wrong answers here — we're looking for your honest, specific experience, including where things don't work well. That's exactly what makes the follow-up conversation useful.
>
> Please complete it by [date — set relative to your interview scheduling], and thank you in advance.
>
> [Architect name], Salesforce

**Notes for sender:**
- System names in the body (Informatica, Data360, RCMS, Case Management tooling) are drawn straight from the survey draft's coverage — keeps framing consistent between the invite and the instrument itself.
- The `[confirm]` block intentionally omits emails — nothing has been fabricated per the stakeholder record's own "(unconfirmed - not in org62)" flags.

---

## Template 3 — Interview confirmation (individual)

**To:** [interviewee — pick from confirmed list above]
**Subject:** Confirming your DRA interview — [date/time]

> Hi [First Name] —
>
> Confirming our conversation on [date/time] as part of FCA's Data Readiness Assessment. This will be a working conversation, not a formal interview — we'll start from your survey answers and go deeper on 2–3 of the issues that matter most to your team, including what they actually cost you in time or risk.
>
> No prep needed beyond the survey you've already completed. If a system or process comes to mind between now and then that you think we should know about, jot it down — we'd rather hear it than not.
>
> See you then.
>
> [Architect name], Salesforce

**Notes for sender:**
- Generic by design — one template covers all 14 confirmed interviewees; personalize `[First Name]`/`[date/time]` per send.
- Reviewer-role stakeholders (Deloitte's Nadia/Preeti/Victor/Hannah, Blind Institute of Technology's Mike Hess/Ertay Shashko, Informatica's Mark Winters, and Jessica Rusu as FCA's own CDIIO) are **not** on the interviewee distribution — they're `Role_in_DRA__c = Reviewer` on the stakeholder record, a different engagement touchpoint (draft/output review), not a discovery interview. No reviewer-specific email template was requested or drafted here; flag to the architect if reviewer outreach is needed separately.
