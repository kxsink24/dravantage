---
title: "SBA Data Strategy Readout Output"
status: draft
tags: [dra, output, deck, spwa]
created: 2026-07-08
---

# SBA Data Strategy Readout Output

This folder contains the working output package for an HTML/SPWA DRA deck generated from the SBA Vault wiki.

## Files

| File / Folder | Purpose |
|---|---|
| `deliverable-brief.md` | Audience, thesis, proof objects, and output constraints. |
| `presentation-outline.md` | Slide-by-slide approved story spine. Build gate: do not render `index.html` until this is approved. |
| `source-notes.md` | Mapping from slide claims to Vault evidence. |
| `index.html` | Rendered HTML/SPWA deck. Created after outline approval. |
| `assets/` | Local images or diagrams used by the deck. |
| `qa/` | Mechanical QA report and screenshots. |
| `options/` | Optional layout boards for hard slides. |

## Build Gate

Do not build the visible deck until the presentation outline is approved. This follows the presentation-builder workflow: brief → grilled outline → approved outline → render → QA → presentation police → publish.
