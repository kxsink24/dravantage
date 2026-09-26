---
title: "Target State Architecture — British Columbia Lottery Corporation"
wiki_page: "06"
status: in-progress
tags: [dra, architecture, target-state, salesforce]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/org62-account-snapshot]]"
last_analyzed: 2026-06-25
---

# Target State Architecture

> [!WARNING]
> **Pre-kickoff run (2026-06-25): this is a directional hypothesis, not a validated design.** It is grounded in the deep research (which already frames Data 360 as the activation layer) but depends on open technical questions — Melco streaming, Everi write-back, FIPPA residency, the residual role of InfoSphere. Confirm at the kickoff / technical interviews before treating any layer as final.

**Maps to:** DRA Report Section 4 (Solution Design & Architecture) — target state half
**Reads from:** [[04-data-value-chain]], [[05-current-state-architecture]], [[01-strategic-alignment]]

---

## Design Principles for This Customer

1. **Data 360 is the activation layer, not a transactional database replacement.** Melco, Intralot, Everi, PlayNow, and Kambi remain systems of record; Data 360 unifies and activates real-time context on top of them. Avoid recreating the rigid InfoSphere pattern. [[inputs/research/deep-research]]
2. **Unlock and Trust precede Activate — non-negotiable here.** Because the downside of GIGO is a missed AML report or an unsafe promotion, no AI/personalization initiative is scoped until the real-time profile is unified, quality-managed, and governed. [[inputs/research/deep-research]]
3. **Governance is regulatory, by design.** Identity resolution, consent, and access control must be engineered to FIPPA + FINTRAC + Cullen standards from day one — every unified field needs lineage defensible to the IGCO and in court (*Ghotaymi*). [[inputs/research/deep-research]]
4. **Canadian / residency-aware.** The B.C. procurement directive and FIPPA push toward Canadian cloud residency for player data — validate which Data 360 components can satisfy this. [[inputs/research/deep-research]]
5. **Re-establish a governed integration/event layer.** The MuleSoft removal left a gap; real-time write-back (e.g. flag a patron in Everi) needs an event/API layer, whether re-introduced MuleSoft or an equivalent. [[inputs/research/slack-history]]

---

## Layer 5 → Target: Data Foundation
**Recommended changes:** Stream channel events (PlayNow, Melco floor, Intralot retail, Kambi) into Data 360; use zero-copy where data must stay resident for FIPPA. Retire InfoSphere's *active* role, keeping only any required legal record. [[inputs/research/deep-research]]
**Salesforce role:** Data 360 data streams + zero-copy / native connectors as the unified real-time foundation.

## Layer 4 → Target: Connectivity, Security & Governance
**Recommended changes:** Stand up a governed API/event layer for system-to-system + real-time write-back; implement FIPPA/AML policy enforcement, consent, and access control with auditable lineage. [[inputs/research/deep-research]]
**Salesforce role:** Data 360 governance + Salesforce Trust Layer; integration/event platform (MuleSoft or equivalent) for orchestration and Everi write-back.

## Layer 3 → Target: Intelligence & Insights
**Recommended changes:** Build identity resolution to produce one player profile across four channels; Calculated Insights for risk scores + loyalty value on the unified profile, consumed by both marketers and agents. [[inputs/research/deep-research]]
**Salesforce role:** Data 360 Identity Resolution + Calculated Insights; Future Anthem and Tableau consume the trusted profile.

## Layer 2 → Target: Organizational Readiness
**Recommended changes:** Move data governance out of marketing into an accountable data/compliance function; define identity-resolution & consent rules; confirm Safer Play's capacity to action real-time alerts. [[inputs/research/workspace-inventory]] [[inputs/research/deep-research]]
**Salesforce role:** Enablement + governance operating model (advisory); Signature Success as the delivery vehicle.

## Layer 1 → Target: System of Action
**Recommended changes:** Activate the September ambitions *safely* — Rewards personalization, Future Anthem promos with risk-aware suppression, and the four Agentforce use cases — all on the unified, governed profile. [[inputs/research/deep-research]]
**Salesforce role:** Agentforce (terminal diagnostics, high-value concierge, RG early intervention, integration automation) + Marketing Cloud activation, grounded in Data 360.

---

## Target State Architecture Diagram

```mermaid
graph LR
    subgraph SoR["Systems of Record"]
        PN[PlayNow]
        ML[Melco floor]
        IL[Intralot retail]
        KB[Kambi]
        EV[Everi compliance]
    end

    subgraph Integ["Integration / Event Layer"]
        MULE[API + Event Layer<br/>real-time + write-back]
    end

    subgraph D360["Salesforce Data 360"]
        STR[Streaming ingest /<br/>zero-copy]
        IDR[Identity Resolution<br/>360° player view]
        GOV[Governance · Trust Layer<br/>FIPPA / AML / consent]
        CI[Calculated Insights<br/>risk + value]
    end

    subgraph Act["Activation"]
        MC[Marketing Cloud]
        FA[Future Anthem]
        AF[Agentforce agents]
    end

    PN & ML & IL & KB & EV --> MULE --> STR --> IDR --> CI
    GOV -. enforces .-> IDR
    CI --> MC & FA & AF
    AF -. write-back flag .-> MULE -. .-> EV
```

---

## Capability Gap Summary

| Capability | Current | Gap | Recommended Action | Salesforce Capability |
|---|---|---|---|---|
| Connect | 1 | No real-time ingest | Stream channel events into Data 360 | Data 360 data streams / zero-copy |
| Integrate | 1 | No central integration layer (post-MuleSoft) | Re-establish governed API/event layer + Everi write-back | MuleSoft / event platform |
| Understand | 1 | No semantic layer / definitions | Define player/session/risk semantics | Data 360 semantic layer |
| Unify | 1 | Fragmented across 4 channels | Identity Resolution → 360° player view | Data 360 Identity Resolution |
| Validate | 1 | DQ "ambition not process" | Automated DQ + lineage | Data 360 + Informatica DQ |
| Protect | 1 | Governance in CMO; gaps | FIPPA/AML policy enforcement, consent, access | Data 360 governance + Trust Layer |
| Decide | 2 | Insights starved of trusted input | Calculated Insights on unified profile | Data 360 + Tableau |
| Orchestrate | 1 | Manual handoffs | Event-driven risk/promo orchestration | MuleSoft + Agentforce |
| Act | 2 | Agents on unverified data | Ground agents on governed profile | Agentforce + Marketing Cloud |

---

## Open Architecture Questions

- [ ] Does Melco expose real-time outbound streaming APIs, or only batch replication? Routed direct to Data 360 or via Everi?
- [ ] Can Data 360 execute real-time **write-backs to Everi** to flag/restrict high-risk patrons?
- [ ] Which Data 360 components must run in **Canadian cloud nodes** for FIPPA / the procurement directive?
- [ ] What identity-resolution rules will BCLC authorize to link **anonymous retail hashes** to verified PlayNow profiles, and how is consent managed under FIPPA?
- [ ] What is **Safer Play / AML's operational capacity** to action real-time automated alerts?
- [ ] What blocked the original **Slalom CDP** project — are existing schemas/journey designs reusable?
