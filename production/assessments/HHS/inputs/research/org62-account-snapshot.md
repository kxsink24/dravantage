---
title: "org62 Account Snapshot — Old Dominion University"
status: in-progress
tags: [dra, inputs, research, org62]
source: "org62 — Account 0013000000RWuoRAAT (Old Dominion University (Main))"
collected: 2026-06-01
---

# org62 Account Snapshot

> [!NOTE]
> Raw capture of ODU's commercial relationship from org62. Source material for `dra-analyze-input` — not analysis. Do not hand-edit; re-run `dra-research` to refresh.

## Account resolution

org62 has **many** "Old Dominion" records (subsidiaries, duplicates, and several "Main N" variants). The canonical record for this engagement is the one the DRA opportunity links to:

- **Old Dominion University (Main)** — `0013000000RWuoRAAT`
  - Norfolk, VA · Education · `http://odu.edu` · NumberOfEmployees 3,240
  - This is the account referenced by the engagement's `Opportunity_Id_Org62__c`.

> [!WARNING]
> Duplicate / do-not-use records exist and should be avoided in any write-back:
> `Old Dominion University (Duplicate - DO NOT USE)` (g9bsC…), plus "Main 2/3/4/5" variants and several stub records (NumberOfEmployees = 1, null billing). Use **(Main) `0013000000RWuoRAAT`** as the source of truth.

## Linked DRA opportunity

| Field | Value |
|---|---|
| Name | MS ODU Additional Flows and Private Space |
| Id | 006ed00000N3TwHAAV |
| Account | Old Dominion University (Main) |
| Stage | **Dead - Lost** |
| Close Date | 2026-05-26 |
| Amount | $46,375 |

> [!NOTE]
> The opportunity the engagement points to is **Dead - Lost** (closed 2026-05-26 — the same day Brian came back on board per Slack). Raw fact for analysis: the original MuleSoft "additional flows" deal that may have seeded this DRA did not close. Flag for `dra-analyze-input` to interpret (is the DRA the recovery play?).

## Opportunity history — Old Dominion University (Main), last ~3 yrs (most recent 25)

| Name | Stage | Close | Amount |
|---|---|---|---|
| Old Dominion University Renewal 1575 Tableau | 01 Initiate (open) | 2029-08-20 | $245,400 |
| ODU (Main) Renewal Price Uplift: Touchless Renewal Automation Only | Dead - No Opportunity | 2029-08-20 | $22,086 |
| Old Dominion University Renewal 2 SFA | 01 Initiate (open) | 2029-07-14 | $5,100,000 |
| MC-ODU-International Messaging-WhatsApp #RA | 05 - Negotiating $$ & Mutual Plan (open) | 2026-07-15 | $15,000 |
| SELA SKU Test | Dead - No Opportunity | 2026-05-31 | $0 |
| ODU (Main) - Online Sales - Your Account App - Chapi | Dead - Webstore | 2026-05-31 | — |
| ODU-YR2 SELA Calibration-Fixes/Potential Net New | Dead - No Opportunity | 2026-05-31 | — |
| **MS ODU Additional Flows and Private Space** | **Dead - Lost** | 2026-05-26 | $46,375 |
| ODU (Main)-BRE001-…-Oishiq Nandy | 03 - Registered (training) | 2026-05-20 | $0 |
| ODU (Main)-SDC301-…-Stacey Rhodes | 03 - Registered (training) | 2026-05-06 | $0 |
| (multiple training/cancelled-class rows: SDC/AFS/ARC course regs) | various | 2026-03 → 2026-07 | $0 |
| TEST - SELA Swaps YR1 | Dead - No Opportunity | 2026-04-15 | $0 |
| ODU, Transportation and Parking Services | Dead - No Opportunity | 2026-04-14 | — |

## Raw observations (facts, not conclusions)

- **Active renewals on the books:** large **SFA renewal ($5.1M, FY29)** and **Tableau renewal ($245K, FY29)** both at "01 Initiate". An open **WhatsApp / Marketing Cloud international-messaging** deal ($15K, negotiating, 7/15) — corroborates the Slack/agenda mention of WhatsApp activation for international student outreach.
- **Several "Online Sales — Your Account App — Chapi" rows are Dead - Webstore** (recurring across months).
- **Heavy training/enablement footprint** — many SDC/AFS/ARC/BRE course-registration "opportunities" (Matt Newton, Troy Gleason, others attending). Indicates active product adoption / upskilling already underway.
- **Installed products implied by renewals:** Sales Cloud (SFA), Tableau, Marketing Cloud. (Confirm exact entitlements in a later pass — not all visible from opp names.)
- **The DRA-linked opp is closed-lost** ($46K MuleSoft additional flows).

> [!NOTE]
> Gaps: account team composition, installed-product entitlement detail, and open support cases were not pulled in this run (resolve in a follow-up org62 query if needed for the current-state page). NumberOfEmployees on (Main) = 3,240; other variants list 4,390 — reconcile if a precise figure is needed.
