---
title: "Customer Documents — The Financial Conduct Authority"
status: draft
tags: [dra, inputs, customer-docs]
---

# Customer Documents

Summaries of documents provided by the customer or found via research — strategic plans, architecture diagrams, annual reports, prior assessments, grant proposals, accreditation documents.

`dra-analyze-input` creates one summary file per document.

## File naming

`<doc-name-kebab-case>.md`

## Per-document summary structure

Each file contains:

- **Frontmatter:** document title, source (customer-provided vs. public), date of document, date added to vault
- **Summary:** 3–5 sentence overview of what the document is and its relevance to the DRA
- **Key extracts:** specific passages, data points, or commitments that are directly relevant to wiki pages
- **Wiki pages updated:** which pages cite content from this document

## What to include

Include documents that contain:
- Strategic priorities, mandates, or goals that anchor [[01-strategic-alignment]]
- System inventory or architecture information that informs [[05-current-state-architecture]]
- Data governance policies or standards that score [[04-data-value-chain]] capabilities
- Any published readiness assessments, audits, or self-assessments the customer has already done

Do not include documents that are purely operational (meeting minutes, routine correspondence) unless they contain a specific finding worth citing.
