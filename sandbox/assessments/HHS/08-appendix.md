---
title: "Appendix — Old Dominion University"
wiki_page: "08"
status: in-progress
tags: [dra, appendix, scores, stakeholders]
sources: ["[[2026-05-11-kickoff]]", "[[gemini-deep-research]]", "[[slack-history]]", "[[org62-account-snapshot]]", "[[workspace-inventory]]"]
last_analyzed: 2026-06-03
---

# Appendix

> [!NOTE]
> Populated by `dra-analyze-input`. Scorecard mirrors [[04-data-value-chain]].

**Maps to:** DRA Report Appendix — Data Assessment Rating, stakeholder list, methodology notes
**Used by:** `dra-presentation-police` (citation audit), `dra-generate-output` (scorecard and stakeholder list)

---

## Data Assessment Rating Scorecard

| Pillar | Capability | Score (1–3) | Evidence Summary | Source |
|---|---|---|---|---|
| UNLOCK | Connect | 1 | Batch Banner→SF, no real-time flow | [[2026-05-11-kickoff]] |
| UNLOCK | Integrate | 1 | MuleSoft/Informatica no swim lanes; sub-second API gap | [[2026-05-11-kickoff]] [[workspace-inventory]] |
| UNLOCK | Understand | ? | No direct evidence yet | [[workspace-inventory]] |
| TRUST | Unify | 1 | Banner/SF address mismatch; 3 SF orgs | [[2026-05-11-kickoff]] |
| TRUST | Validate | 1 | Analytic data inconsistencies; no catalog | [[2026-05-11-kickoff]] |
| TRUST | Protect | ? | Health-sciences raises bar; maturity unknown | [[gemini-deep-research]] |
| ACTIVATE | Decide | ? | Analytics footprint exists; maturity unknown | [[org62-account-snapshot]] |
| ACTIVATE | Orchestrate | 1 | Manual cross-team handoffs, no event tier | [[2026-05-11-kickoff]] |
| ACTIVATE | Act | ? | Target agent aspirational, not built | [[2026-05-11-kickoff]] |

**Integration Health Score:** 33 / 100 *(provisional — Understand unscored)*
**AI Readiness Score:** 33 / 100 *(provisional — 4 of 9 capabilities `?`)*

**Three Barriers:**

| Barrier | Severity | Primary Source |
|---|---|---|
| Blind Spot | High | [[2026-05-11-kickoff]] |
| Time Trap | High | [[2026-05-11-kickoff]] [[workspace-inventory]] |
| Trust Gap | Medium | [[2026-05-11-kickoff]] |

---

## Stakeholder Registry

| Name | Title | Organization | Persona | DRA Role | Interviewed | Survey | Org62 Contact ID |
|---|---|---|---|---|---|---|---|
| Kirk Dewyea | CIO | ODU | IT Leader | Interviewee (exec sponsor) | No | No | — |
| Jimmy Patel | Interim Exec Dir, Enterprise Systems | ODU | Data Leader | Interviewee | No | No | — |
| Matt Newton | AVP, Business Optimization & CRM Architect | ODU | Business Leader | Interviewee | No | No | — |
| Brian Easton | Exec Dir, Digital Solutions & Innovation | ODU | IT Leader | Sponsor | No | No | — |
| Sai Nidumolu | Mgr, Cloud Enablement & Integration (BI Dev) | ODU | Data Worker | Interviewee (ODU POC) | No | No | — |
| Lisa Handy | AVP, Data & Analytics | ODU | Data Leader | Interviewee | No | No | — |
| Noah Hunter | SI Partner | Cloud for Good | IT Worker | Reviewer | No | No | — |
| Josh Kidd | Integrations (covering Sai) | Cloud for Good | IT Worker | Reviewer | No | No | — |
| Werner Watschke | Global Data Strategy | Salesforce | — | Architect | — | — | — |

> Note: persona registry reflects current `DRA_Stakeholder__c` data. Jimmy Patel is not yet a
> stakeholder record (named in the kickoff agenda/recording) — add via `dra-intake` follow-up.

---

## Interview Log

| Date | Stakeholder | Module | Status | Vault Note | Recording | Transcript |
|---|---|---|---|---|---|---|
| 2026-05-11 | Group (kickoff) | Alignment (pre-discovery) | Processed | [[2026-05-11-kickoff]] | [Recording](https://drive.google.com/file/d/19YrRx9vVzHBk6DofwpQewV6neKjs9xHu/view) | [Transcript](https://docs.google.com/document/d/1SiWwRnUao7kiMp2I3WoOImjL2CssymBRBq15nk2bEYs/edit) |

> No Module 1/2/3 discovery interviews conducted yet.

---

## Survey Summary

*No survey responses collected yet. Form is built ([survey-draft](setup/survey-draft.md)); responses will populate [[inputs/survey/responses]].*

---

## Analysis Run Log

| Date | Input processed | Wiki pages updated | Score changes | Run by |
|---|---|---|---|---|
| 2026-06-02 | 5/11 kickoff recording [[2026-05-11-kickoff]] + deep research [[gemini-deep-research]] + research sweep | 01, 02, 04, 08; Index | Initial scores set: barriers Blind Spot=High, Time Trap=High, Trust Gap=Medium; capabilities 5×1 + 4×`?`; Integration Health 33, AI Readiness 33 (both provisional) | dra-analyze-input |
| 2026-06-03 | 5/11 kickoff recording [[2026-05-11-kickoff]] (persona pass — input already on disk, not re-captured) | 03, 08, Index | No score/severity changes (no new evidence). Populated all six personas as archetypes: Business Leader, IT Leader, IT Worker, Data Leader at Low confidence; Business Worker + Data Worker flagged unrepresented. No `Interviewed__c` flips (group session, not discovery). | dra-analyze-input |

---

## Methodology Notes

- **Pre-discovery run.** This analysis is based on a **group kickoff/alignment recording** plus
  desk research (deep research, Slack, org62, agenda doc) — **no Module 1/2/3 discovery interviews
  and no survey responses yet.** All findings are accordingly Low–Medium confidence.
- **No stakeholders marked Interviewed.** The 5/11 session was a group alignment meeting, not the
  structured discovery interviews; `DRA_Stakeholder__c.Interviewed__c` left `false` for everyone to
  avoid falsely signaling discovery is complete.
- **Four capabilities scored `?`** (Understand, Protect, Decide, Act) — insufficient evidence;
  resolve in discovery. Scores will be recomputed and confidence raised as interviews/survey land.
- **Org write-back is provisional** — both health/readiness scores (33) and the barrier severities
  reflect this single pre-discovery run and are expected to change.
- **Persona-label reconciliation pending (run 2).** [[03-personas]] attributes archetypes by the
  evidence each individual gave at kickoff, which differs from this registry's labels for Brian
  Easton (registry: IT Leader/Sponsor; personas: Business Leader) and Sai Nidumolu (registry: Data
  Worker; personas: IT Worker). Reconcile during Module 1–3 scheduling. **Business Worker and Data
  Worker remain unrepresented** — a Module 2 enrollment/advising interview is the top coverage gap
  to close before the readout (the POC agent serves that persona).
