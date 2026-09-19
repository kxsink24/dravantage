---
title: "Roadmap — British Columbia Lottery Corporation"
wiki_page: "07"
status: in-progress
tags: [dra, roadmap, crawl-walk-run]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
last_analyzed: 2026-06-25
---

# Roadmap

> [!WARNING]
> **Pre-kickoff run (2026-06-25): preliminary sequencing hypothesis only.** It follows the golden thread from the barrier severities in [[02-data-barriers]] and the scores in [[04-data-value-chain]], but timelines and initiative specifics are **not yet customer-validated** and must reckon with the fixed **September 2026 go-live constraint**. Treat as a strawman to pressure-test at the kickoff.

**Maps to:** DRA Report Section 5 (Phased Roadmap)
**Reads from:** [[02-data-barriers]], [[04-data-value-chain]], [[06-target-state-architecture]]

---

## Roadmap Sequencing Principles

1. **Unlock before Trust before Activate.** All three barriers are High; the foundation (Connect/Integrate, then Unify/Validate/Protect) must precede the September Activate launches.
2. **The September 2026 convergence is a fixed external constraint, not a phase the DRA controls.** The roadmap's job is to make the foundation safe *enough* for those launches and to stage the deeper work around them — not to delay them.
3. **Sequence by regulatory risk, then commercial value.** The 360-degree player view (Cullen/FINTRAC) and real-time risk detection (*Ghotaymi*) are the highest-severity, highest-consequence items.

---

## Crawl Phase
**Timeframe:** Now → ~Sept 2026 (aligned to go-lives)
**Theme:** Establish the real-time Connect + Integrate foundation and stand up the unified profile MVP.
**Barrier(s) addressed:** Blind Spot, Time Trap (begin)
**Capability scores targeted:** Connect 1→2, Integrate 1→2, Unify 1→2

### Initiatives
| Initiative | What it is | Why it's first | Salesforce capability | Success measure |
|---|---|---|---|---|
| Data 360 streaming ingest | Stream PlayNow / floor / retail events into Data 360 | Kills the Time Trap at the source | Data 360 data streams / zero-copy | Real-time events landing for ≥2 channels |
| Re-establish integration/event layer | Governed API/event layer + Everi write-back path | Fills the post-MuleSoft gap; enables write-back | MuleSoft / event platform | Bi-directional flow proven (incl. Everi flag) |
| 360° player view MVP | Resume Slalom CDP on Data 360 Identity Resolution | The Cullen mandate; unblocks everything | Data 360 Identity Resolution | Unified profile across online + floor |

### Dependencies
Mark Goldberg sponsorship confirmed; Slalom re-engaged; answers to the Melco-streaming and Everi-write-back open questions.

### Risks
September convergence consumes all IT capacity; Melco may not stream in real time; FIPPA residency constraints on Data 360 components.

---

## Walk Phase
**Timeframe:** ~Sept 2026 → +6–9 months
**Theme:** Make the unified profile *trusted* — quality, governance, and compliance enforcement.
**Barrier(s) addressed:** Trust Gap, Time Trap (complete)
**Prerequisite:** Crawl foundation live.

### Initiatives
| Initiative | What it is | Why it's next | Salesforce capability | Success measure |
|---|---|---|---|---|
| Data quality + lineage | Automated DQ monitoring & lineage | FINTRAC defensibility; ends "DQ as ambition" | Data 360 + Informatica DQ | Auditable lineage on player records |
| Governance to a data office | Move ownership out of marketing; FIPPA/AML policy enforcement, consent, access | Governance is regulatory here | Data 360 governance + Trust Layer | Policy-enforced access; consent managed |
| Risk-scoring Calculated Insights | Cross-channel risk + value scores on the profile | Powers real-time RG/AML | Data 360 Calculated Insights | Risk score available to compliance + marketing |

### Dependencies / Risks
Identity-resolution & consent rules ratified; Safer Play operational capacity to action alerts; organizational change to move governance ownership.

---

## Run Phase
**Timeframe:** +9 months onward
**Theme:** Safely activate personalization and Agentforce on the trusted foundation.
**Barrier(s) addressed:** none new — realizes the value once Unlock + Trust hold.
**Prerequisite:** Walk-phase Trust layer validated.

### Initiatives
| Initiative | What it is | What it unlocks | Salesforce capability | Success measure |
|---|---|---|---|---|
| Risk-aware personalization | Future Anthem + Marketing Cloud with risk suppression | Loyalty growth without unsafe promos | Marketing Cloud + Data 360 | Promo suppressed on risk signal; reg-target ↑ |
| Agentforce use cases | Terminal diagnostics, high-value concierge, RG early intervention, integration automation | Operational scale + real-time RG | Agentforce | ≥1 agent live on governed profile w/ audit |
| Real-time RG orchestration | Event-driven pause-promo / GameSense / Game Break | *Ghotaymi* real-time detection | MuleSoft + Agentforce | Sub-session intervention demonstrated |

### Dependencies / Risks
All Trust-layer work complete; agent guardrails & escalation defined; regulator comfort with automated decisions.

---

## Roadmap Summary Table

| Phase | Theme | Key Initiatives | Timeline | Primary Value |
|---|---|---|---|---|
| Crawl | Real-time foundation + profile MVP | Streaming ingest, integration layer, Identity Resolution MVP | Now → Sept 2026 | Kills Blind Spot/Time Trap; supports go-lives |
| Walk | Trusted, governed profile | DQ + lineage, governance, risk insights | Sept 2026 +6–9mo | FINTRAC/FIPPA defensibility |
| Run | Safe activation | Risk-aware personalization, Agentforce, RG orchestration | +9mo on | Loyalty growth + real-time RG/AML |

---

## Business Case Anchor Points

### Quantitative anchors
- **$1.075M FINTRAC penalty already paid**; new regime = up to **40× higher max fines** + public naming. [[inputs/research/deep-research]]
- Loyalty registration target **53% → 64% → 70%** depends on safe personalization. [[inputs/research/deep-research]]
- AML controls rated **3.5/5** with undesignated high-risk patrons. [[inputs/research/deep-research]]
- $1.408B net income to the Province — scale of the franchise being protected. [[inputs/research/deep-research]]

### Qualitative anchors
- Cullen Commission mandate for a "flawless 360-degree player view." [[inputs/research/deep-research]]
- *Ghotaymi v. BCLC* legal obligation to detect risk patterns in real time. [[inputs/research/deep-research]]
- "Fix the foundation before AI" — the sponsor's own stated principle. [[inputs/research/workspace-inventory]]

---

## What This Roadmap Is Not

- **Not a delay of the September go-lives** — those are fixed; the roadmap stages the foundation around them.
- **Not a replacement of the new transactional platforms** (Melco/Intralot/Kambi remain systems of record).
- **Not an AI-first plan** — Agentforce/personalization deliberately sit in Run, after Unlock + Trust.
- **Not validated** — every phase is a pre-kickoff hypothesis pending customer input.
