---
title: "Deliverable Outputs — Small Business Administration"
status: in-progress
tags: [dra, outputs]
---

# Deliverable Outputs

This folder contains the durable, customer-isolated working packages produced from the SBA DRA wiki. It is the source-controlled handoff between analysis, presentation rendering, quality review, and future customer delivery.

## Package convention

Create one folder per deliverable:

```text
outputs/<deliverable-slug>/
├── README.md
├── deliverable-brief.md
├── presentation-outline.md
├── source-notes.md
├── index.html                 # self-contained local staging artifact
├── assets/
└── qa/
```

`dra-generate-output` creates the brief, source notes, outline, and package README. `dra-deck` creates or refreshes `index.html` after the outline is approved. QA and presentation-police evidence belongs in the same package.

## Local HTML staging

The rendered `index.html` is the canonical self-contained HTML artifact while the Experience Cloud publisher is being completed. Preview it locally from the package. Keep CSS, JavaScript, fonts, and images self-contained and free of external network dependencies.

Do not create a second copy under `delivery/`. The future Experience Cloud handoff will consume `outputs/<deliverable-slug>/index.html` from this package.

## Customer visibility

Files here are working deliverables until the package passes QA, presentation-police review, and an explicit delivery decision. A file in this folder is not automatically customer-visible.

Use [[../delivery/README|Delivery]] for the current publishing boundary and the Experience Cloud placeholder.
