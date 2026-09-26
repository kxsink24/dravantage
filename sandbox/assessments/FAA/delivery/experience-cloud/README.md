---
title: "Experience Cloud Publication — Small Business Administration"
status: in-progress
tags: [dra, delivery, experience-cloud]
---

# Experience Cloud Publication

> [!WARNING]
> Placeholder only. The Experience Cloud staging and publication workflow is under construction. Do not treat this file as an upload command, a publication receipt, or proof that a customer can access a deliverable.

## Intended input

The future publisher will consume the approved, self-contained artifact at:

```text
../../outputs/<deliverable-slug>/index.html
```

From the engagement root, the same artifact is:

```text
outputs/<deliverable-slug>/index.html
```

Do not copy the HTML into this placeholder directory. Keeping one canonical artifact prevents the Vault copy and the eventual Salesforce File from drifting.

## Intended contract

1. Confirm the package passed mechanical QA and `dra-presentation-police`.
2. Validate customer isolation, unresolved placeholders, file type, size, and external-resource rules.
3. Upload the artifact to Salesforce as an internal preview.
4. Return an internal preview reference without making the file customer-visible.
5. Require an explicit authorized publication action.
6. Record the published version, access scope, timestamp, and rollback reference.

The exact API, metadata, permission, and file-sharing implementation belongs to the Experience Cloud delivery project. Until that implementation is released, this page is documentation only.

## Safe interim action

Preview the HTML locally from its output package and record any review or QA evidence under:

```text
outputs/<deliverable-slug>/qa/
```
