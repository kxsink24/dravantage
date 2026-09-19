---
title: "SBA Executive Readout — Experience Cloud Staging Receipt"
status: under-review
tags: [dra, delivery, experience-cloud, staging]
created: 2026-08-26
---

# SBA Executive Readout — Experience Cloud Staging Receipt

## Status

**Internal preview only.** This is a staging receipt for viewer development. It is not customer publication and does not grant customer access.

## Target

- Salesforce org: `DRAVantage`
- Engagement: `DRA-0002` / `SBA-OneSBA`
- Local source: `outputs/executive-readout/index.html`
- File type: HTML
- File size: 60,705 bytes
- SHA-256: `fb42e804663742ac7b0ae5697232150398609ce8390958fb25a65ce46b1407d2`

## Salesforce records

| Record | Id | Status |
|---|---|---|
| `DRA_Deliverable__c` | `a03g700000SrXx0AAF` | `Internal Review` |
| `DRA_Deliverable_Version__c` | `a0Bg700000HSEUUEA5` | `Internal Preview` |
| `ContentDocument` | `069g7000004gBO9AAM` | Salesforce File |
| `ContentVersion` | `068g7000004VJs5AAG` | `HTML`, `index.html` |

Version metadata:

- Version number: `1`
- Version key: `a05g7000005XKM9AAO:executive-readout:1`
- QA status: `Pending`
- `Customer_URL__c`: blank
- `Current_Published_Version_Id__c`: blank
- `Published_At__c`: blank

## File links

The upload created the internal preview link to the logical deliverable with viewer-level access and `InternalUsers` visibility. The other link is the standard owner link for the authenticated internal user. No customer-user links were created.

## Viewer handoff

The Experience Cloud viewer can use the staged `ContentDocument` / `ContentVersion` as fixture data. The customer-facing viewer must still enforce invitation authorization and should retrieve the HTML through the planned customer-safe presentation service rather than exposing raw version records or treating a file URL as authorization.
