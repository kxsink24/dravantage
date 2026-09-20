---
title: "Inputs — Hawaii State Department of Health (DOH)"
status: draft
tags: [dra, inputs]
---

# Inputs

Raw and structured inputs for this DRA engagement. All content here is source material — nothing in this folder is customer-facing.

`dra-analyze-input` reads from this folder. `dra-presentation-police` audits citations in the wiki pages back to files here.

## Subfolders

| Folder | What goes here | Created by |
|---|---|---|
| `research/` | Raw outputs from `dra-research` — Slack history, org62 snapshot, Workspace inventory, Gemini deep research | `dra-research` |
| `interviews/` | Structured notes from each interview session, one file per interview | `dra-analyze-input` |
| `survey/` | Aggregated survey responses and per-question analysis | `dra-analyze-input` |
| `customer-docs/` | Summaries of documents the customer provided (strategy plans, architecture diagrams, etc.) | `dra-analyze-input` |

## Naming Conventions

- **Interview notes:** `YYYY-MM-DD-<stakeholder-lastname>.md`
- **Research files:** `slack-history.md`, `org62-account-snapshot.md`, `workspace-inventory.md`, `gemini-deep-research.md`
- **Survey:** `responses.md`
- **Customer docs:** `<doc-name-kebab-case>.md`

## Customer Isolation Rule

Files in this folder must never reference content from another customer's `assessments/` folder. The `dra-presentation-police` skill enforces this at output time; the DRA Architect is responsible for it during input collection.
