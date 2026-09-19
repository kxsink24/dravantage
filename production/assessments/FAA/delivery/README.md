---
title: "Delivery — Small Business Administration"
status: in-progress
tags: [dra, delivery]
---

# Delivery

This folder is the SBA engagement's delivery boundary. It records how an approved package moves from the Vault into a customer-facing destination; it is not a second source of deliverable content.

## Current state

Experience Cloud publication is **not wired up yet**. Until the Salesforce staging publisher is ready, keep the self-contained artifact in `outputs/<deliverable-slug>/index.html` and preview it locally. No file in the Vault should be treated as customer-published merely because it exists here.

The legacy `dra-publish` skill may still be used for an explicitly requested existing GitHub Pages delivery. It is not the Experience Cloud publisher and should not be used to imply that a new Experience Cloud site has received the artifact.

## Future publication flow

```text
outputs/<slug>/index.html
  → QA + presentation-police approval
  → Salesforce staging upload
  → internal preview
  → explicit Publish to Customer
  → customer-visible Experience Cloud delivery
```

The implementation placeholder is [[delivery/experience-cloud/README|Experience Cloud publication]].

## Delivery rules

- Keep one canonical HTML artifact in `outputs/<deliverable-slug>/`; do not duplicate it here.
- Never place credentials, session URLs, or unapproved customer content in this folder.
- Do not record a customer-facing URL until the publication result has been verified.
- Preserve publication receipts, status notes, or rollback references here once the Experience Cloud workflow exists.
