---
title: "Pre-Kickoff Survey Draft — The Financial Conduct Authority"
tags: [dra, setup, survey]
created: 2026-09-17
status: draft
---

# Pre-Kickoff Survey Draft — The Financial Conduct Authority

> [!NOTE]
> Drafted by `dra-kickoff`, grounded in the Unlock/Trust/Activate framework in [[../../../../../.claude/skills/dravantage/references/data-foundation-discovery|data-foundation-discovery.md]] §5 question banks. This is a **draft for architect review before distribution** — nothing here has been sent. Each question is annotated with the capability it scores, why it was selected for FCA specifically, and the customer-specific framing used. Weighting favors capabilities where `inputs/research/slack-history.md` shows concrete, named pain (Informatica/MDM, Palantir compete, Case Management defects, Shield licensing) over capabilities where only the (gap-flagged) `deep-research.md` speaks — see the confidence note at the end of each of those sections.

## Framing note for whoever sends this

FCA is running this DRA against the backdrop of a live competitive situation: an entrenched Palantir AML proof-of-concept, a 2030-agenda / Transform Org decision, and a tech-options paper due in the Sept/Oct 2026 window (per `Compelling_Event__c` on DRA-0117 and the Slack history). Survey respondents are FCA staff, not Salesforce staff — questions are written in plain operational language, not Salesforce product language, per the discovery framework's guidance to let respondents describe symptoms, not solutions.

---

## Unlock — Connect

**Q1. Which systems currently hold data your team needs day-to-day, and which of those can you get to without asking someone else for an export or a report?**
- *Capability:* Connect
- *Why included:* Directly tests the Unlock pillar's foundational question — can data move between systems without manual intervention — before asking about quality or usage.
- *FCA framing:* Slack history names Informatica, Cloudera, Talend, MuleSoft, and Data360 as systems currently in play (some flagged for replacement); this question surfaces which of those, or others, respondents actually touch, without presupposing the answer.

**Q2. Where does regulatory/case data currently live, and how many separate systems does a case worker need to check to get a full picture of one regulated firm?**
- *Capability:* Connect
- *Why included:* RCMS (Regulatory Case Management System) is a named strategic initiative on the live engagement record (`Strategic_Initiatives__c`) and the subject of the "RCMS rebuild"; this question grounds the Connect score in the system that matters most to the compelling event.
- *FCA framing:* Uses "regulated firm" language (FCA regulates ~58k firms per `deep-research.md` §1) rather than generic "customer."

## Unlock — Integrate

**Q3. When you need data from Informatica, Data360, or another team's system, how does it get to you today — a live feed, a scheduled batch, a manual export, or someone emailing you a spreadsheet?**
- *Capability:* Integrate
- *Why included:* Distinguishes real-time from batch from manual integration maturity, the core Integrate signal in the framework's question bank.
- *FCA framing:* Names Informatica and Data360 directly — both surfaced repeatedly in Slack as FCA's current MDM/data-integration tooling, including chatter about replacing Cloudera/Talend components. Naming them (rather than "your ETL tool") signals the survey was written for FCA, not copy-pasted.

**Q4. Have you or your team evaluated or discussed replacing any part of your current data integration stack (e.g., Cloudera, Talend) in the last 12 months? What prompted that conversation?**
- *Capability:* Integrate
- *Why included:* Directly probes the "Cloudera/Talend replacement chatter" pain signal from Slack — validates it broadly across respondents rather than relying on one Slack thread.
- *FCA framing:* Confidence note — this is grounded in internal Slack signal, not public record; deep-research.md explicitly could not confirm FCA's technology footprint (gap #4), so this question exists specifically to get that confirmation directly from stakeholders instead of assuming it.

## Unlock — Understand

**Q5. If you had to explain what a specific data field in your primary system actually means — where it comes from, how it's calculated, who owns it — could you do that yourself, or would you need to find someone else?**
- *Capability:* Understand
- *Why included:* Classic data-literacy/lineage probe from the framework's Understand question bank; tests whether tribal knowledge or documented lineage is the norm.
- *FCA framing:* Framed around "primary system" rather than a named product, since Understand gaps are typically cross-system and respondent-specific.

**Q6. Case Management Vision and related case-handling tools have had reported defects (e.g., RegEx issues). How much of your day-to-day work is affected by not trusting the data those tools surface?**
- *Capability:* Understand
- *Why included:* "Case Management Vision" and "RegEx defects" are named directly in the Slack history as a live pain point; this converts an internal complaint into a scored, cross-validated signal per the 3 Deep Dive Rule's "surface issue" stage — the live interview should then push into operational consequence and business impact.
- *FCA framing:* Names the actual tool and defect type FCA staff already use internally — a generic "do you trust your data" question would miss this specificity.

## Trust — Validate

**Q7. Think of the last time bad or incomplete data caused a real problem in your work (a wrong decision, a delay, a redo). What happened, and how long did it take to catch and fix?**
- *Capability:* Validate
- *Why included:* This is the framework's canonical "surface issue → operational consequence" opener — it's designed to generate raw material the architect will push further in the live 3 Deep Dive discussion, not to be fully answered on a survey.
- *FCA framing:* Left deliberately open (no system named) so it can surface anything — RCMS, Case Management Vision, or something not yet on the team's radar.

**Q8. Deloitte's recent Agentforce/Einstein delivery work has reportedly included a hallucination issue. Has AI-generated output (from any tool, not just Salesforce) ever given your team information you had to double-check or correct before acting on it?**
- *Capability:* Validate
- *Why included:* Directly tests the "Deloitte Einstein hallucination bug" signal from Slack — critical to surface before FCA commits further to any agentic AI roadmap, and directly relevant to the Agentforce estate upgrade named in `Strategic_Initiatives__c`.
- *FCA framing:* Names Deloitte and Agentforce/Einstein explicitly since this is a known, named incident inside FCA, not a hypothetical.

## Trust — Protect

**Q9. Salesforce Shield (field-level encryption, event monitoring, field audit trail) is not currently licensed on your org. Has the absence of that capability come up as a concern in any security review, audit, or compliance conversation you're aware of?**
- *Capability:* Protect
- *Why included:* "FCA not licensed for Shield" is a specific, named gap from the Slack history; as a financial regulator handling market-sensitive and firm-confidential data, this is a Protect-pillar question with real compliance stakes, not a generic "is your data secure" question.
- *FCA framing:* Named the specific Shield sub-capabilities so respondents outside the Salesforce team (most of this audience) understand exactly what's being asked about.

**Q10. Who currently decides which teams or individuals can see sensitive case or firm data — is that a documented policy, a system-enforced rule, or mostly informal/manager judgment?**
- *Capability:* Protect
- *Why included:* Access-governance question from the framework's Protect bank; especially load-bearing for a regulator whose own data (firm investigations, enforcement cases) is itself market-sensitive.
- *FCA framing:* Kept general because no specific FCA access-control failure was named in research — this question is testing, not assuming, a gap.

## Trust — Unify

**Q11. Can you reliably tell whether two records — say, two entries for the same regulated firm or the same case — refer to the same real-world entity, or does that require manual cross-checking?**
- *Capability:* Unify
- *Why included:* This is the single most strategically important question on the survey: entity resolution/golden-record capability is exactly what the Palantir AML PoC is being evaluated on (`Compelling_Event__c`), and Informatica/Data360 MDM is the named FCA-side answer to it. A weak Unify score here directly informs the platform-vs-displacement argument the DRA exists to support.
- *FCA framing:* Uses "regulated firm" and "case" — FCA's own entity types — rather than generic "customer/account."

## Activate — Decide

**Q12. When leadership needs a data-backed answer fast — for example, ahead of a board update or a parliamentary question — how long does it typically take to get a trustworthy number, and who has to be involved?**
- *Capability:* Decide
- *Why included:* Tests decision-support latency, the core Decide signal; explicitly ties to the APPG parliamentary scrutiny context noted in `deep-research.md` (Nov 2024/Feb 2025 reports), giving this question real stakes rather than being generic.
- *FCA framing:* References parliamentary questions specifically, since FCA (unlike most enterprise customers) answers to Parliament — a detail only available from the public-record research.

## Activate — Orchestrate

**Q13. If a new AML-related risk signal needed to trigger action across multiple teams (data, case management, supervision) today, would that happen automatically, or would someone have to notice it and manually route it?**
- *Capability:* Orchestrate
- *Why included:* Directly tied to the Palantir AML compete — orchestration across teams on a detected risk signal is exactly the kind of workflow the AML PoC is being evaluated against. Scoring this honestly is central to the platform-vs-displacement argument.
- *FCA framing:* Named AML explicitly given the compelling event; avoids generic "workflow automation" phrasing.

## Activate — Act

**Q14. Where are you currently using (or piloting) AI or automated agents to take action on your behalf — not just summarize or suggest, but actually do something? What's worked, and what hasn't?**
- *Capability:* Act
- *Why included:* Tests agentic-readiness directly, tied to the Agentforce estate upgrade strategic initiative and the Einstein hallucination incident (Q8) — this question checks whether that incident has chilled appetite for agentic action more broadly.
- *FCA framing:* Deliberately open to any AI tool, not just Salesforce, since Palantir's own AI/AML tooling is the competitive alternative being evaluated.

## Cross-cutting

**Q15. If you had a magic wand and could fix exactly one thing about how data works at FCA today — no budget or political constraints — what would you fix, and why that one thing?**
- *Capability:* Cross-pillar (informs prioritization across all nine)
- *Why included:* Standard DRA magic-wand question — surfaces the respondent's true priority unfiltered by what they think is "in scope," and is often the single most useful line for the roadmap's Crawl/Walk/Run sequencing.
- *FCA framing:* No FCA-specific framing needed — this question works precisely because it's open.

**Q16. The tech-options paper deciding FCA's platform direction is expected in the Sept/Oct 2026 window, and the current IPU contract has an anniversary/renewal point in early September. Does that timeline create urgency for your team specifically, or does it feel disconnected from your day-to-day work?**
- *Capability:* Cross-pillar (compelling event / urgency)
- *Why included:* Directly tests whether the compelling event (Palantir AML compete, Transform Org decision) that motivated this DRA at the sponsor level is actually felt at the working level — a gap between the two is itself an important finding for the roadmap and stakeholder-alignment sections.
- *FCA framing:* Names the IPU contract anniversary and the Sept/Oct 2026 tech-options paper directly from Slack — this level of specificity is only possible because of the Slack research; **confidence note:** the exact dates come from internal Slack chatter, not a confirmed public or contractual source, so treat responses as directional, not a hard deadline confirmation.

---

## Coverage summary

| Pillar | Capability | Questions | Primary source |
|---|---|---|---|
| Unlock | Connect | Q1, Q2 | Slack (Informatica/Cloudera/Talend/MuleSoft/Data360), live record (RCMS) |
| Unlock | Integrate | Q3, Q4 | Slack (Informatica, Data360, Cloudera/Talend replacement chatter) |
| Unlock | Understand | Q5, Q6 | Framework bank; Slack (Case Management Vision / RegEx defects) |
| Trust | Validate | Q7, Q8 | Framework bank; Slack (Deloitte Einstein hallucination bug) |
| Trust | Protect | Q9, Q10 | Slack (Shield not licensed); framework bank |
| Trust | Unify | Q11 | Live record `Compelling_Event__c` (Palantir AML), Slack (Informatica/Data360 MDM) |
| Activate | Decide | Q12 | deep-research.md (APPG/parliamentary scrutiny) |
| Activate | Orchestrate | Q13 | Live record `Compelling_Event__c` (AML) |
| Activate | Act | Q14 | Live record `Strategic_Initiatives__c` (Agentforce estate); Slack (Einstein bug) |
| Cross-cutting | Magic wand / urgency | Q15, Q16 | Standard framework + Slack (tech-options paper, IPU anniversary) |

**Weighting rationale:** Unify (Q11) and the two Activate-Orchestrate/AML questions carry the most strategic weight because they map directly onto the Palantir compete — the reason this DRA exists per `Compelling_Event__c`. Protect (Shield) and Validate (Einstein hallucination) are elevated above a "standard" survey's typical weighting because both are named, specific, already-surfaced internal pain points, not hypothetical risks.
