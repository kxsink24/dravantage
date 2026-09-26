---
title: "Appendix — British Columbia Lottery Corporation"
wiki_page: "08"
status: in-progress
tags: [dra, appendix, scores, stakeholders]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/org62-account-snapshot]]"
  - "[[inputs/research/slack-history]]"
last_analyzed: 2026-06-25
---

# Appendix

> [!NOTE]
> Populated by `dra-analyze-input`. **Pre-kickoff run (2026-06-25)** — scores and severities are research-based and provisional; no interviews or survey yet.

**Maps to:** DRA Report Appendix
**Used by:** `dra-presentation-police` (citation audit), `dra-generate-output`

---

## Data Assessment Rating Scorecard

| Pillar | Capability | Score (1–3) | Evidence Summary | Source |
|---|---|---|---|---|
| UNLOCK | Connect | 1 | Batch InfoSphere; no streaming; S3 staging | [[inputs/research/deep-research]] |
| UNLOCK | Integrate | 1 | MuleSoft removed; point-to-point; legacy middleware | [[inputs/research/slack-history]] |
| UNLOCK | Understand | 1 | No semantic layer; definitions informal | [[inputs/research/workspace-inventory]] |
| TRUST | Unify | 1 | 4 siloed channels; rigid MDM; CDP paused; duplicates | [[inputs/research/deep-research]] |
| TRUST | Validate | 1 | DQ "ambition not process"; FINTRAC failures | [[inputs/research/workspace-inventory]] |
| TRUST | Protect | 1 | Governance in CMO; penalty; consent rules unset | [[inputs/research/deep-research]] |
| ACTIVATE | Decide | 2 | Marketing Cloud + Future Anthem ML exist | [[inputs/research/deep-research]] |
| ACTIVATE | Orchestrate | 1 | No event-driven layer; manual handoffs | [[inputs/research/deep-research]] |
| ACTIVATE | Act | 2 | Live MC personalization; Agentforce pilots | [[inputs/research/workspace-inventory]] |

**Integration Health Score:** 33 / 100  *(avg of Connect+Integrate+Understand = 1.0 × 33)*
**AI Readiness Score:** 40 / 100  *(avg of all 9 = 1.22 × 33)*

**Three Barriers:**

| Barrier | Severity | Primary Source |
|---|---|---|
| Blind Spot | High | [[inputs/research/deep-research]] |
| Time Trap | High | [[inputs/research/deep-research]] |
| Trust Gap | High | [[inputs/research/workspace-inventory]] |

---

## Stakeholder Registry

| Name | Title | Organization | Persona | DRA Role | Interviewed | Survey | Org62 Contact ID |
|---|---|---|---|---|---|---|---|
| Mark Goldberg | CIO & VP Business Technology (acting CDO) | BCLC | IT Leader / Data Leader | Sponsor (IT/Data) | No | No | — |
| Marie-Noëlle Savoie | Interim Chief Social Purpose Officer & VP Marketing | BCLC | Business Leader | Sponsor (Business, suspected) | No | No | — |
| Kevin deBruyckere | Interim Chief Compliance Officer & VP Safer Play | BCLC | Data Leader (Compliance) | Key Stakeholder | No | No | — |
| Patrick Davis | President & CEO | BCLC | Business Leader | Exec Champion (suspected) | No | No | — |
| Alan Kerr | CFO & VP Finance | BCLC | Business Leader | Funding Sponsor (unknown) | No | No | — |
| Dan Beebe | COO | BCLC | Business Leader | Stakeholder | No | No | — |
| Patrick Miner | SE Architect | Salesforce | — | DRA Lead Architect | — | — | — |
| Robert Lindsley | DRA execution lead | Salesforce | — | DRA Lead | — | — | — |
| Werner Watschke | DRA Lead | Salesforce | — | DRA Team | — | — | — |
| Cameron Tait | Named Account Executive | Salesforce | — | Account Owner | — | — | — |
| Michael Blundon | Marketing Cloud AE | Salesforce | — | Account Team | — | — | — |
| Katie Holley | Data Foundations AE | Salesforce | — | Account Team | — | — | — |
| Sarfaraz Malek | Integration / MuleSoft | Salesforce | — | DRA Team | — | — | — |
| Sissi Shi | — | Salesforce | — | DRA Team | — | — | — |
| Bert Li | Success Architect (Data Cloud) | Salesforce | — | Account Team | — | — | — |
| Slalom Consulting | SI partner (CDP / profile unification) | Slalom | — | Implementation Partner | — | — | — |

> [!NOTE]
> Customer-side stakeholders are identified from research; **org62 Contact IDs not yet linked** and **no individual has been interviewed**. Confirm names, titles, and add a customer-side interviewee list at kickoff.

---

## Interview Log

| Date | Stakeholder | Module | Status | Vault Note | Recording | Transcript |
|---|---|---|---|---|---|---|
| 2026-07-13 | TBD (kickoff group) | Kickoff | Planned | — | — | — |

*No interviews completed as of 2026-06-25.*

---

## Survey Summary

| Metric | Value |
|---|---|
| Total respondents | 0 — survey not yet distributed |
| Persona breakdown | — |
| Avg AI Foundation Confidence (Q11) | — |
| Avg C360 Maturity (Q2) | — |
| Most selected Use Cases (Q13) | — |
| Lowest-scoring module | — |
| Highest-variance question | — |

---

## Analysis Run Log

| Date | Input processed | Wiki pages updated | Score changes | Run by |
|---|---|---|---|---|
| 2026-06-25 | deep-research, workspace-inventory, slack-history, org62-account-snapshot (all `dra-research` desk research) | 01, 02, 03, 04, 05, 06, 07, 08, Index | Initial scores set: all UNLOCK+TRUST = 1; Decide = 2, Orchestrate = 1, Act = 2. Severities: Blind Spot / Time Trap / Trust Gap all **High**. IHS 33, AIR 40. | dra-analyze-input |

---

## Methodology Notes

- **Pre-kickoff desk-research-only run.** No customer interviews or survey responses exist (kickoff is 2026-07-13). All findings derive from Gemini deep research (43 sources), the May 26 2026 Gemini kickoff-call notes, Slack history, and org62. **Confidence is Low–Medium throughout.**
- **Severities written to the org at High** despite Medium confidence because each barrier is corroborated by ≥2 independent desk sources *and* by external regulatory fact (FINTRAC penalty, Cullen findings). They should be re-confirmed, not re-derived, at kickoff.
- **Activate scores (Decide 2 / Act 2) are the least certain** — they reflect *capability presence* (Marketing Cloud, Future Anthem, Agentforce pilots) on an unverified foundation, which is the GIGO pattern, not validated maturity.
- **Key unknowns gating confidence:** Melco real-time streaming, Everi write-back, FIPPA/residency constraints, the cause of the Slalom CDP pause, and Safer Play's operational capacity. These are the technical-interview priorities.
- **Persona findings are entirely inferred** — zero interviews. Do not present any persona as customer-validated in the readout until Module 1/2/3 conversations land.
