---
title: "Strategic Alignment — British Columbia Lottery Corporation"
wiki_page: "01"
status: in-progress
tags: [dra, strategic-alignment]
sources:
  - "[[inputs/research/deep-research]]"
  - "[[inputs/research/workspace-inventory]]"
  - "[[inputs/research/slack-history]]"
  - "[[inputs/research/org62-account-snapshot]]"
last_analyzed: 2026-06-25
---

# Strategic Alignment

> [!NOTE]
> Populated by `dra-analyze-input`. **Pre-kickoff run (2026-06-25):** all findings are drawn from desk research (Gemini deep research, the May 26 2026 Gemini kickoff-call notes, Slack, and org62) — **no customer interviews or survey responses exist yet**. Treat everything here as a research-grounded hypothesis to validate at the July 13 kickoff. Confidence is capped at Medium until customer voices confirm it.

**Maps to:** DRA Report Section 1 — Vision & Case for Change
**Drives output:** [[06-target-state-architecture]], [[07-roadmap]]

---

## Mission and Mandate

British Columbia Lottery Corporation (BCLC) is a provincial **Crown corporation** that conducts, manages, and operates commercial gambling, lottery, and sports betting across British Columbia, returning its net income to the Province to fund healthcare, education, and municipal infrastructure — operating under a stated social purpose "to generate win-wins for the greater good." It generated **$1.408B in net income** for the Province in FY2024/25 and distributed **$86.6M** to 33 host local governments. Its footprint spans 22 land-based casinos, two racecourse casinos, 12 community gaming centres, ~3,400 retail lottery outlets, and PlayNow.com (the province's single regulated digital channel), and it provides digital gambling/sports-betting platforms to Saskatchewan and Manitoba under contract. [[inputs/research/deep-research]]

**Active mandates governing how BCLC operates:**

- **Cullen Commission (2022)** — 101 formal recommendations following the inquiry into money laundering ("the Vancouver model"); mandates BCLC build a **"flawless 360-degree player view"** across all gaming channels (identity, transaction history, source of wealth, behavioral risk — online and on the casino floor). [[inputs/research/deep-research]]
- **FINTRAC / federal AML** — strict daily transaction-tracking and source-of-funds thresholds ($1,500 tracking / $3,000 ID verification / $10,000 source-of-funds declaration / $25,000 prize review). BCLC received a **$1.075M administrative monetary penalty in Aug 2025** for failing to file Suspicious Transaction Reports and apply enhanced due diligence; FINTRAC's 2025 regime adds immediate public naming and a proposed 40-fold increase in maximum fines (Bill C-2). [[inputs/research/deep-research]]
- **FIPPA** — B.C. Freedom of Information and Protection of Privacy Act governs all player personal data, location services, and any biometric/cross-channel tracking. [[inputs/research/deep-research]]
- **Gaming Control Act / IGCO** — as of April 13 2026 the new **Independent Gambling Control Office** is the sole independent regulator (replacing GPEB), with authority over gaming-worker registration and terminal-supplier approval. [[inputs/research/deep-research]]
- **B.C. Ministry of Finance procurement directive** — Crown corporations must prioritize Canadian / non-U.S. suppliers for new procurements, adding vendor-integration complexity to the platform modernization. [[inputs/research/deep-research]]
- **Legal precedent — _Ghotaymi v. BCLC_ (2026 BCSC 191)** — the BC Supreme Court confirmed BCLC may impose preventative play restrictions on a risk pattern (e.g. structuring below $10K) **without proof of laundering**, placing the operational burden on BCLC to detect those patterns **in real time, across systems**. [[inputs/research/deep-research]]

*Why this matters: BCLC's mandate makes a unified, real-time, governed player profile a **regulatory non-negotiable**, not a marketing nice-to-have. Any recommendation that strengthens the 360-degree player view advances both the compliance mandate and the commercial growth agenda simultaneously — that dual fit is the strongest lever in this engagement.*

## Strategic Priorities (12–24 month horizon)

- **The September 2026 platform convergence** — four major launches landing together: the **Melco** casino gaming management platform (cardless / mobile player tracking on the casino floor), the **modernized Intralot Lotos X Omni** lottery platform (~8,000 terminals / 3,400 retail locations, cloud Shared Services), the redesigned **Rewards & Incentives** loyalty program (replacing Encore Rewards), and **Future Anthem** real-time personalized promotions. [[inputs/research/deep-research]] [[inputs/research/slack-history]]
- **Profile unification / 360-degree player view** — reconcile player identity across four channels (online PlayNow, casino floor, retail lottery, loyalty) by **resuming the paused Slalom CDP project** on Salesforce **Data 360**, replacing legacy IBM InfoSphere MDM. [[inputs/research/deep-research]] [[inputs/research/workspace-inventory]]
- **Loyalty registration growth** — raise the share of the casino player base with an active rewards account from a **53% baseline → 64% (FY27/28) → 70% (FY28/29)**. [[inputs/research/deep-research]]
- **Real-time responsible gaming + AML** — detect escalating-risk behavior live (PGSI, GameSense reminders, BC Game Break self-exclusion) and surface high-risk AML patterns the Feb 2025 internal audit found were being missed. [[inputs/research/deep-research]]
- **Agentforce ambitions** — four candidate use cases already in discussion: retail **terminal diagnostics**, **high-value player concierge**, **integration-layer automation**, and **responsible-gaming early intervention**. [[inputs/research/deep-research]] [[inputs/research/workspace-inventory]]

## Compelling Event

**In September 2026 BCLC simultaneously goes live with four major platforms (Melco gaming, modernized Intralot lottery, Rewards & Incentives loyalty, and Future Anthem promotions) — each of which depends on a unified, real-time, governed player profile that does not exist today — while under active FINTRAC penalty pressure and a Cullen-Commission mandate to deliver a "flawless 360-degree player view." The DRA roadmap must be delivered ahead of those September 2026 go-lives so the data foundation is in place to support them.** [[inputs/research/deep-research]] [[inputs/research/slack-history]]

> [!NOTE]
> Internal-only: our DRA readout is timed to land before the Salesforce **September 22 QBR** with BCLC. That QBR is *our* cadence, not the customer's deadline — never frame the compelling event around it in customer-facing material. BCLC's real deadline is its own September platform launches.

*(Consistent with the existing `DRA_Engagement__c.Compelling_Event__c` value on DRA-0003.)*

## Magic Wand Responses

> [!WARNING]
> **No interview or survey data yet** — the kickoff is 2026-07-13. The items below are *inferred aspirations* from the February 2026 DF2U session and the May 26 2026 kickoff-call notes, not verbatim stakeholder responses. **Capture real magic-wand answers per persona at the kickoff and replace this section.**

- **(Inferred, IT/Data leadership)** A single real-time player profile that every channel and compliance unit can trust — so AML and responsible-gaming interventions happen *during* play, not in a next-day batch report. [[inputs/research/workspace-inventory]]
- **(Inferred, Marketing / Social Purpose)** Personalize promotions and loyalty in real time *without* pushing offers to a player who is showing risk signals. [[inputs/research/deep-research]]
- **(Inferred, executive)** Stop building AI initiatives on an unstable data foundation — "fix the foundation first" was an explicit concern raised in the kickoff call. [[inputs/research/workspace-inventory]]

## Sponsorship

The three-legged stool is **partially confirmed**: IT/Data leadership is strong and engaged; the business sponsor is identified; the funding leg is inferred and not yet confirmed.

| Role | Person | Title | Status |
|---|---|---|---|
| Business Sponsor | Marie-Noëlle Savoie | Interim Chief Social Purpose Officer & VP, Marketing (owns loyalty / rewards / customer outcome) | suspected — named as key stakeholder, not yet confirmed as sponsor |
| IT Sponsor | **Mark Goldberg** | CIO & VP, Business Technology (acting as Chief Data Officer) | **confirmed** — named primary executive sponsor; attends the Salesforce QBR + monthly cadence per org62 |
| Funding Sponsor | Alan Kerr (likely) | CFO & VP, Finance and Corporate Services | unknown — inferred from role; not evidenced in research |
| Executive Champion | Patrick Davis | President & CEO (20+ yrs tech/gaming, driving digital transformation) | suspected |
| Compliance Stakeholder | Kevin deBruyckere | Interim Chief Compliance Officer & VP, Safer Play & Enterprise Integrity | key stakeholder (AML / responsible gaming owner) |

Sources: [[inputs/research/workspace-inventory]] [[inputs/research/deep-research]] [[inputs/research/org62-account-snapshot]]

> [!NOTE]
> **Sponsorship gap to close at kickoff:** confirm Marie-Noëlle Savoie as the business outcome owner and identify the actual funding owner. Mark Goldberg is the clear single-threaded IT/Data sponsor and the right anchor for the readout.
