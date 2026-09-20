---
title: "Workspace Inventory — The Financial Conduct Authority"
tags: [dra, inputs, research, drive]
created: 2026-09-16
status: draft
---

# Workspace Inventory — The Financial Conduct Authority

> Raw extraction — do not edit. Re-run `dra-research` to refresh.

## ⚠️ Blocked — Google Workspace not available this session

No Google Workspace MCP tool was connected in this session (`docs_search` / `list_drive_items` / `get_drive_file_content` are not in the available toolset). Per the research directive for this run, no bridge or workaround was attempted, and **no document contents have been fabricated or inferred** below — only what's on record in DRAVantage is listed, explicitly marked as unread.

Additionally, the engagement's own Drive folder pointer is unset: `DRA_Engagement__c.Drive_Folder_URL__c` is null on the live record (`DRA-0117` / `a05g700000BDbtIAAT`) — this has been a known, flagged gap since the 2026-09-16 `dra-env-setup` run (see `00-activity-log.md`). Even with Google Workspace connectivity, there is currently no root folder to crawl.

## Known resources — not read

Two `DRA_Drive_Resource__c` records exist on the engagement, both auth-walled and unread in every session to date (per `00-activity-log.md`'s 2026-09-16 reconciliation entry):

### FCA DRA source deck (primary)
- **Type:** File (Google Slides, per URL pattern)
- **URL:** https://docs.google.com/presentation/d/1h2MVLMAP5zr9pUY4TwXdiPPwrCMDN3-yIgiYrAcY8lQ/edit
- **Folder type:** Customer Strategy Docs
- **Primary:** Yes
- **Status:** Not read — no Google Workspace connectivity this session.
- **Cross-reference (not a substitute for reading it):** this same URL was shared in the secondary Slack channel (`#fca-data-foundations`, Stephane Pajon, 2026-07-10, ts `1783682781.748509`) as "the master deck" for the 14 July 2026 SIC workshop agenda — titled "FCA Data Foundations 14th July 2026." That Slack context describes the deck's purpose but is not a substitute for reading its actual slide content.

### FCA DRA source doc
- **Type:** File (Google Doc, per URL pattern)
- **URL:** https://docs.google.com/document/d/1FRUG7UU_9py5svP5BMn4nKISkPLJa-ZZcZ2rlhoPXU4/edit
- **Folder type:** Customer Strategy Docs
- **Primary:** No
- **Status:** Not read — no Google Workspace connectivity this session.

## Drive structure

Unknown — cannot be determined without Google Workspace connectivity and a resolved `Drive_Folder_URL__c`.

## Recommendation

1. **Grant/restore Google Workspace MCP access** for this environment, then re-run `dra-research` (or just Step 3 of it) to index the two known resources plus anything else reachable from the Drive folder once it's set.
2. **Set `Drive_Folder_URL__c`** on `DRA-0117` — per `Index.md` and `CLAUDE.md`, this is still "TBD — set in DRAVantage." Ask Josh Adams (AE) or whoever owns the engagement's Drive folder for the link.
3. Three additional Drive links referenced in the intake dry-run (`FCA Account Planning FY27`, `FCA QAP`, `FCA Intact/ESS Security Assessment + Security Playback Notes`) still have no captured URL and no `DRA_Drive_Resource__c` record — chase these from Josh Adams if they're still relevant.
4. The Slack transcripts (see `slack-history.md`) surfaced several additional Google Docs/Slides/Sheets shared inline in both channels (e.g., "FCA New Bid — A Connected, Governed, and AI-Ready FCA," "FCA Mule capabilities answer sheet," the 14 July SIC session's Gemini notes doc) that are **not** currently captured as `DRA_Drive_Resource__c` records. Once Workspace access is restored, consider promoting the most substantive of these to formal Drive resources rather than leaving them as one-off Slack links.
