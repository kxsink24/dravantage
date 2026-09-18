---
title: "org62 Account Snapshot — The Financial Conduct Authority"
tags: [dra, inputs, research, org62]
created: 2026-09-16
status: draft
---

# org62 Account Snapshot — The Financial Conduct Authority

> Raw extraction from org62 — do not edit. Re-run `dra-research` to refresh.

## Account resolution note

The DRAVantage engagement record's `Account.Org62_Account_Id__c` field is null (a known, unresolved FLS-blocked gap — see `00-activity-log.md`, 2026-09-16 entries). Org62 has **five** Account records named "Financial Conduct Authority" or a close variant, all owned by Josh Adams:

| Account Id | Name | Billing City | 3-yr Opps |
|---|---|---|---|
| `0013000000LzN0fAAF` | THE FINANCIAL CONDUCT AUTHORITY | London | 360 (canonical — see below) |
| `0013y00001fLXYUAA4` | Financial Conduct Authority | London | 18 |
| `001ed00001UmIgsAAF` | Financial Conduct Authority | London | 2 (incl. a 2027-08-13 renewal opp) |
| `0013000001GWmefAAD` | Financial Conduct Authority | London | 5 (all pre-2020, dormant) |
| `001ed000001mcLoAAI` | Financial Conduct Authority | Stratford | 0 |
| `0013000001GXQWrAAP` | AUTOMERGEDUPLICATE_Financial Conduct Authority - Complaints | — | — (merge artifact, excluded) |

**Selected canonical record: `0013000000LzN0fAAF`** ("THE FINANCIAL CONDUCT AUTHORITY"). This is the account that owns both opportunities named on the live DRAVantage engagement record's narrative fields — `006ed00000QP04MAAT` ("INFA - Financial Conduct Authority MDM") and `006ed00000Q8URlAAN` ("UK - FCA - Agentforce for Service Roll-Out - T1") — and has real `AnnualRevenue` ($918,904,264) and `NumberOfEmployees` (3,500) populated, plus the full 3-year opportunity history. The other four are legacy/duplicate/dormant records. **Recommend:** update `Account.Org62_Account_Id__c` on the DRAVantage record to `0013000000LzN0fAAF` once the FLS block is resolved, and consider flagging the duplicates for account-merge cleanup in org62 (out of scope for this DRA).

## Account record

This is the unfiltered record; analysis happens later.


| Field | Value |
|---|---|
| Id | 0013000000LzN0fAAF |
| Name | THE FINANCIAL CONDUCT AUTHORITY |
| Billing City | London |
| Billing State | London |
| Billing Country | GB |
| Industry | Public Sector |
| Annual Revenue | 918904264 |
| Number of Employees | 3500 |
| Website | www.fca.org.uk |
| Owner | Josh Adams |
| Owner Email | joshadams@salesforce.com |
| Owner Title | Named Account Executive |

## Opportunity history (last 3 years)

This is the unfiltered list — analysis happens later. 360 opportunities, `CloseDate >= LAST_N_YEARS:3`, sorted by close date descending. Includes both won/closed and open/dead opportunities across all products (Slack, Tableau, MuleSoft, Informatica/IDMC, core Sales/Service Cloud, Agentforce, Copado ISV, etc.) — this account has an unusually high opportunity count reflecting many small line-item/add-on transactions (e.g., individual Atamis Ltd add-ons) alongside the larger strategic deals.

| Id | Name | Stage | Close Date | Amount | Type | Owner | Won | Closed | Lead Source |
|---|---|---|---|---|---|---|---|---|---|
| 006ed00000H9gZJAAZ | THE FINANCIAL CONDUCT AUTHORITY Renewal 3361 Call Center, 35 | 01 Initiate | 2030-07-20 | 5032087.44713213 | Renewal | Noreen Cullen | False | False |  |
| 006ed00000fDhcEAAS | UK - FCA - Agentforce - Communications - (+15EE)+15 - (BDR)  | 02 - Determining Problem, Impact, Ideal | 2028-01-28 | 79200 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000gwFT7AAM | UK - FCA - Agentforce - PS - (+14E) (BDR) - #MULTI27 | 02 - Determining Problem, Impact, Ideal | 2027-12-24 | 94080 | Add-On Business | Josh Adams | False | False | EBR Generated |
| 006ed00000bfqTbAAI | UK - FCA - Agentforce for Service Roll-Out - T4 #UKIBIG | 01 - Identifying an Opportunity | 2027-12-23 | 518400 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000BSYgLAAX | THE FINANCIAL CONDUCT AUTHORITY Renewal 6475 Own Legacy | 01 Initiate | 2027-12-19 | 139838.4 | Renewal | Alex Slyozberg | False | False |  |
| 006ed00000cOQJdAAO | UK - FCA - Strategic Platform Transformation - A1E Public Se | 01 - Identifying an Opportunity | 2027-11-26 | 0 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000Xb1F4AAJ | UK - FCA - Agentforce for Service Roll-Out - T2 #UKIBIG | 03 - Validating Benefits & Value | 2027-10-22 | 576000 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000Zi9mbAAB | THE FINANCIAL CONDUCT AUTHORITY Renewal 9557 Tableau | 01 Initiate | 2027-10-16 | 862923.7273014 | Renewal | Noreen Cullen | False | False |  |
| 006ed00000jhyNBAAY | UK - FCA - Transform Org - Agentforce - Expansion - (+86E)+8 | 02 - Determining Problem, Impact, Ideal | 2027-09-30 | 560000 | Add-On Business | Josh Adams | False | False | Website |
| 006ed00000bKCpJAAW | UK - FCA - Agentforce 1 Edition - Estate Upgrade | 02 - Determining Problem, Impact, Ideal | 2027-09-24 | 702500 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000jEmsTAAS | THE FINANCIAL CONDUCT AUTHORITY Renewal 16 Platform, 17 Supp | 01 Initiate | 2027-08-27 | 4867.2 | Renewal | Noreen Cullen | False | False | Website |
| 006ed00000ZRYELAA5 | UK - FCA - Agentforce for Service Roll-Out - T0 #UKIBIG | 03 - Validating Benefits & Value | 2027-07-31 | 561600 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000PJwecAAD | UK- TAB - Financial Conduct Authority - #Tab plus | 02 - Determining Problem, Impact, Ideal | 2027-07-20 | 205440 | Renewal | Josh Adams | False | False |  |
| 006ed00000fCbx5AAC | UK - FCA - Slack - (+180EE) - (BDR) #MULTI27 | 02 - Determining Problem, Impact, Ideal | 2027-07-15 | 77760 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000cOJBhAAO | UK - FCA - RCMS Phase 2 - CSG | 02 - Scoping | 2027-07-14 | 3000000 | SOW | Joe Deasy | False | False | AE |
| 006ed00000QP04MAAT | INFA - Financial Conduct Authority MDM | 01 - Identifying an Opportunity | 2027-06-30 | 467796.86388982 | Add-On Business | MURRAY GRUBB JNR | False | False |  |
| 0063y000018dcg3AAA | UK - FCA (Direct) - Regulatory Solutions Studio - 1 Year Acc | 01 - Discovery | 2027-05-28 | 450000 | Order Form | Joe Deasy | False | False | AE |
| 006ed00000iPVTtAAO | THE FINANCIAL CONDUCT AUTHORITY - Extension - Core - FY27 -  | 01 - Identifying an Opportunity | 2027-05-15 | 0 | Renewal | Joe Deasy | False | False | Other |
| 006ed00000iPKewAAG | THE FINANCIAL CONDUCT AUTHORITY - Extension - Core - FY27 -  | 03 - Initial Proposal | 2027-05-15 | 1284380 | Order Form | Joe Deasy | False | False | Other |
| 006ed00000Uk6h4AAB | UK - FCA - Marketing Cloud - Phase 1 - Pilot | 02 - Determining Problem, Impact, Ideal | 2027-04-15 | 115296 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000RdpG1AAJ | UK - FCA - Agentforce - Firm Handbook Agent | 02 - Determining Problem, Impact, Ideal | 2027-03-18 | 100000 | Add-On Business | Josh Adams | False | False |  |
| 006ed00000WXhGfAAL | UK - FCA (Direct) - Marketing Cloud - (+8)8EE - {BDR} - #MAR | 02 - Determining Problem, Impact, Ideal | 2027-03-04 | 115200 | Add-On Business | Josh Adams | False | False | EBR Generated |
| 006ed00000gwFrJAAU | UK - MS - FCA - Citizen journey integration - Mulesoft - (+3 | 02 - Determining Problem, Impact, Ideal | 2027-02-26 | 100800 | Add-On Business | MURRAY GRUBB JNR | False | False | EBR Generated |
| 006ed00000dblccAAA | UK - SLK - Whistleblower Email to Case - (100) - Enterprise  | 01 - Identifying an Opportunity | 2027-02-23 | 43000 | New Business | Damian Ondore | False | False |  |
| 006ed00000ZLIYrAAP | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 2027-01-31 | 114301.37036992 | Add-On Business | Thomas O'Neill | False | False | EBR Generated |
| 006ed00000cLCWYAA4 | UK - FCA - RCMS - Transformation Delivery | 02 - Scoping | 2027-01-11 | 1500000 | SOW | Joe Deasy | False | False | AE |
| 006ed00000PBhL0AAL | UK - FCA - Einstein for Service 30(190) Phase 2 for CMO #KYC | 04 - Confirming Value With Power | 2026-12-16 | 100000 | Swap | Thomas O'Neill | False | False |  |
| 006ed00000gALSnAAO | UK - FCA - Platform enhancements - Page Views #KYC #PLATFORM | 02 - Determining Problem, Impact, Ideal | 2026-12-15 | 29416.8 | Add-On Business | Thomas O'Neill | False | False |  |
| 006ed00000iiaMbAAI | UK - TAB - FCA - Resource blocks Phase 2 #ANALYTICS | 01 - Identifying an Opportunity | 2026-12-01 | 0 | Add-On Business | Thomas O'Neill | False | False |  |
| 006ed00000a301xAAA | THE FINANCIAL CONDUCT AUTHORITY Renewals Off Cycle Forecasti | 01 Initiate | 2026-10-16 | 0 | Off-Cycle Ramp Down | Noreen Cullen | False | False |  |
| 006ed00000juGjJAAU | UK -TAB THE FINANCIAL CONDUCT AUTHORITY - 100 E courtesy- Se | 01 - Identifying an Opportunity | 2026-10-11 |  | Courtesy | Rima Mukherjee | False | False |  |
| 006ed00000aGsyzAAC | UK - FCA - Agentforce Vibes User license x 50 #KYC #AGENTFOR | Dead - Lost | 2026-09-08 | 7200 | Add-On Business | Thomas O'Neill | False | True |  |
| 006ed00000Q8URlAAN | UK - FCA - Agentforce for Service Roll-Out - T1 #UKIBIG | Dead - No Decision | 2026-09-08 | 979200 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000i8K3RAAU | UK - TAB - FCA - Add-on Resource blocks (+10) #ANALYTICS #Pu | 08 - Closed | 2026-09-07 | 22176 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000jZcmrAAC | THE FINANCIAL CONDUCT AUTHORITY-TTD201-2026-11-04-Virtual -R | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000jZdMLAA0 | THE FINANCIAL CONDUCT AUTHORITY-TTP101-2026-12-16-Virtual -R | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000jZewjAAC | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-10-15-Virtual -R | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000jZfWDAA0 | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-10-15-Virtual -P | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000jZfxdAAC | THE FINANCIAL CONDUCT AUTHORITY-TTD201-2026-11-04-Virtual -P | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000jZgIbAAK | THE FINANCIAL CONDUCT AUTHORITY-TTP101-2026-12-16-Virtual -P | 03 - Registered | 2026-09-04 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000a942rAAA | UK - MS - FCA - Mulesoft - (3LP) - (BDR) #INTEGRATION | Dead - Duplicate | 2026-09-01 | 100800 | Add-On Business | MURRAY GRUBB JNR | False | True | Third Party Event |
| 006ed00000hxjWcAAI | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2026-08-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000ienjrAAA | THE FINANCIAL CONDUCT AUTHORITY Phoenix Renewal | 01 - Identifying an Opportunity | 2026-08-29 | 0 | New Business | Noreen Cullen | False | False |  |
| 006ed00000gwgQ7AAI | THE FINANCIAL CONDUCT AUTHORITY Insight Renewal | 01 - Identifying an Opportunity | 2026-08-28 | 4867.2 | New Business | Noreen Cullen | False | False |  |
| 006ed00000QOmfhAAD | INFA - Financial Conduct Authority IPU Expansion 00097036 Am | 08 - Closed | 2026-08-28 | 85194.00204227 | Add-On Business | MURRAY GRUBB JNR | True | True |  |
| 006ed00000JmcmQAAR | THE FINANCIAL CONDUCT AUTHORITY Renewal 4 Platform, 5 Suppor | 05 Closed | 2026-08-27 | 1190.59 | Renewal | Noreen Cullen | True | True | Website |
| 006ed00000eH2rBAAS | UK - FCA - Heroku Renewal - (+10)+10 Dynos (BDR) #PLATFORM | 08 - Closed | 2026-08-26 | 3676.56 | Renewal | Thomas O'Neill | True | True | Website |
| 006ed00000iw5Z3AAI | THE FINANCIAL CONDUCT AUTHORITY-TTP101-2026-10-22-Virtual -P | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000iw8wjAAA | THE FINANCIAL CONDUCT AUTHORITY-TTD201-2026-10-12-Virtual -P | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000ivx5GAAQ | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-09-30-Virtual -P | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000iwBJVAA2 | THE FINANCIAL CONDUCT AUTHORITY-TTD201-2026-10-12-Virtual -R | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000iw8VKAAY | THE FINANCIAL CONDUCT AUTHORITY-TTP101-2026-10-22-Virtual -R | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000iw5h7AAA | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-09-30-Virtual -R | 06 - Cancelled - Attendee | 2026-08-24 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000YP3bpAAD | UK - FCA - Project Irwell Phase 2 ACCD #KYC | 01 - Identifying an Opportunity | 2026-08-19 | 43200 | Add-On Business | Thomas O'Neill | False | False |  |
| 006ed00000WY0CsAAL | UK - TAB - FCA - Tab Ent cloud-Private connect #KYC | 08 - Closed | 2026-08-18 | 32777.14285714 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000aTJvNAAW | UK - FCA - RCMS Design & Foundation Build (via BOS2) - CSG | 06 - Project Booked | 2026-08-11 | 1284380 | Order Form | Joe Deasy | True | True | AE |
| 006ed00000gQK2wAAG | UK - FCA - (Quoting Opp) RCMS Design & Foundation Build - CS | 08 - Closed | 2026-08-07 | 0 | New Business | Joe Deasy | True | True |  |
| 006ed00000e1GTVAA2 | UK - FCA (via Softcat) - Tab Migration Change Order - (OF vi | 06 - Project Booked | 2026-07-29 | 136565 | SOW | Joe Deasy | True | True | AE |
| 006ed00000H4l4zAAB | THE FINANCIAL CONDUCT AUTHORITY - Core - Extension - FY26 -  | 01 - Identifying an Opportunity | 2026-07-24 | 0 | Renewal | Joe Deasy | False | False | Other |
| 006ed00000H43X1AAJ | UK - FCA (Direct) - Advisory - 1 Year Account Based CTO Rene | Dead - Lost | 2026-07-20 | 416221 | Order Form | Joe Deasy | False | True | Other |
| 006ed00000f7XKcAAM | UK - FCA - Platform enhancements - Storage allocation #KYC | 08 - Closed | 2026-07-17 | 76395.36 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000KsVZbAAN | UK - FCA - Backup | Dead - No Decision | 2026-07-16 | 0 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000209N7AAI | UK - FCA - Shield - Platform Enhancements #platform | Dead - Lost | 2026-07-07 | 160000 | Swap | Josh Adams | False | True |  |
| 006ed00000dJtaDAAS | THE FINANCIAL CONDUCT AUTHORITY Renewals Off Cycle Forecasti | 05 Closed | 2026-06-29 | 807904.32 | Off-Cycle Restructure/Cancellation | Noreen Cullen | True | True |  |
| 006ed00000W4F2rAAF | UK - FCA - DE Courtesy 2 #KYC | Dead - No Decision | 2026-06-28 | 0 | New Business | Thomas O'Neill | False | True |  |
| 0063y000017M5ZDAA0 | UK - FCA (via Deloitte) - RCMS Innovation as a Service RFP - | 06 - Project Booked | 2026-06-26 | 0 | SOW | Joe Deasy | True | True | AE |
| 006ed00000fPFVhAAO | UK - FCA (via Deloitte) - RCMS Innovation as a Service RFP - | Dead - Lost | 2026-06-26 | 450000 | SOW | Joe Deasy | False | True | AE |
| 006ed00000aFVWbAAO | UK - MS - FCA - Data 360 - (11 CDC) - (BDR) | Dead - Duplicate | 2026-06-11 | 79200 | Add-On Business | MURRAY GRUBB JNR | False | True | Third Party Event |
| 006ed00000J6C0LAAV | UK - FCA - MC/DC - Motor Finance Compensation - CHILD | Dead - No Decision | 2026-06-02 | 148220.8 | Add-On Business | Josh Adams | False | True |  |
| 006ed000004UrZFAA0 | UK - FCA - 2943 PS Einstein1 Swap from PSFA - #AI | Dead - Duplicate | 2026-06-02 | 875079.246396 | Swap | Josh Adams | False | True |  |
| 006ed00000bz36vAAA | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2026-05-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000d8mIkAAI | Financial Conduct Authority_AppOmni Inc_Initial_05/29/2026 | 08 - Closed | 2026-05-29 | 1294.272 | New Business | Josh Adams | True | True |  |
| 006ed00000bzB4TAAU | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Tableau - Early | 01 - Identifying an Opportunity | 2026-05-22 | 802404.32 | New Business | Diego Filpo | False | False |  |
| 006ed00000N0xJ0AAJ | UK - TAB -  THE FINANCIAL CONDUCT AUTHORITY #CRMA to TAB+ | Dead - No Decision | 2026-05-20 | 28304.76 | Swap | Rima Mukherjee | False | True | AE |
| 006ed00000LNvZNAA1 | UK - FCA - Einstein for Service (+800) 2nd phase #AI #UKIBIG | Dead - Duplicate | 2026-05-13 | 240000 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000a4lwTAAQ | THE FINANCIAL CONDUCT AUTHORITY-AGT403-2026-05-20-Virtual -V | 10 - Dead/No Decision | 2026-04-28 | 0 | Workshop | LMS Integration | False | True | Web/Marketing |
| 006ed00000aafsjAAA | THE FINANCIAL CONDUCT AUTHORITY-AGT403-2026-05-20-Virtual -V | 07 - No Show | 2026-04-28 | 0 | Workshop | Ashley McDonough | True | True | Web/Marketing |
| 006ed00000VPp3uAAD | UK - FCA - Flex Credits #KYC | Dead - No Decision | 2026-04-23 | 4536.93875883 | Add-On Business | Thomas O'Neill | False | True |  |
| 006ed00000a4lurAAA | THE FINANCIAL CONDUCT AUTHORITY-ASC004-2026-05-22-Virtual -V | 07 - No Show | 2026-04-22 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed000003JiejAAC | THE FINANCIAL CONDUCT AUTHORITY Renewal 6333 Tableau | 05 Closed | 2026-04-19 | 791503.2 | Renewal | Noreen Cullen | True | True |  |
| 006ed00000QhZTNAA3 | UK - TAB - FCA - Tableau migration to cloud #KYC #ANALYTICS | 08 - Closed | 2026-04-17 | 9801.12 | Renewal | Thomas O'Neill | True | True |  |
| 006ed00000ZGSc5AAH | THE FINANCIAL CONDUCT AUTHORITY-CRT101-2026-07-02-Virtual -V | 07 - No Show | 2026-04-13 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000ZGWvpAAH | THE FINANCIAL CONDUCT AUTHORITY-ADX201-2026-05-11-Virtual -V | 04 - Attended | 2026-04-13 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000UVQbGAAX | UK - FCA - Digital Engagement - Project Irwell #KYC #ENGAGE | 08 - Closed | 2026-04-09 | 40901.35743035 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000PBtyrAAD | UK - FCA - Private Connect for SupHub LLM #KYC | Dead - No Decision | 2026-04-08 | 48000 | Add-On Business | Thomas O'Neill | False | True |  |
| 006ed00000VZmeDAAT | UK - FCA - Storage Uplift #KYC | 08 - Closed | 2026-04-07 | 19.75 | Swap | Thomas O'Neill | True | True |  |
| 006ed00000BYMRBAA5 | THE FINANCIAL CONDUCT AUTHORITY Renewal 209260 Own Legacy | 05 Closed | 2026-04-05 | 134954.96 | Renewal | Natasha Patrikiou | True | True |  |
| 006ed00000XqoH3AAJ | THE FINANCIAL CONDUCT AUTHORITY-ASC001-2026-04-08-Virtual -V | 07 - No Show | 2026-03-26 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000XqffCAAR | THE FINANCIAL CONDUCT AUTHORITY-AGT405-2026-04-02-Virtual -V | 04 - Attended | 2026-03-26 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000XqktNAAR | THE FINANCIAL CONDUCT AUTHORITY-AGT403-2026-04-22-Virtual -V | 06 - Cancelled - Attendee | 2026-03-26 | 0 | Workshop | LMS Integration | False | True | Web/Marketing |
| 006ed00000Xj0C9AAJ | THE FINANCIAL CONDUCT AUTHORITY-AGT402-2026-04-21-Virtual -V | 04 - Attended | 2026-03-25 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000Xj3LJAAZ | THE FINANCIAL CONDUCT AUTHORITY-ASC004-2026-04-14-Virtual -V | 07 - No Show | 2026-03-25 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000XaObtAAF | THE FINANCIAL CONDUCT AUTHORITY-AGT401-2026-04-20-Virtual -V | 04 - Attended | 2026-03-24 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000XaMVFAA3 | THE FINANCIAL CONDUCT AUTHORITY-AFS009-2026-03-26-Virtual -V | 04 - Attended | 2026-03-24 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000RF5B7AAL | THE FINANCIAL CONDUCT AUTHORITY-AFS301-2026-03-18-Virtual -C | 12 - Cancelled - Waitlist Batch | 2026-03-18 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000X2DpNAAV | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-04-20-Virtual -M | 04 - Attended | 2026-03-17 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000WXZSoAAP | THE FINANCIAL CONDUCT AUTHORITY-AGT401-2026-03-23-Virtual -C | 04 - Attended | 2026-03-11 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000WXKLiAAP | THE FINANCIAL CONDUCT AUTHORITY-AFS009-2026-03-26-Virtual -C | 06 - Cancelled - Attendee | 2026-03-11 | 0 | Workshop | LMS Integration | False | True | Web/Marketing |
| 006ed00000WXcldAAD | THE FINANCIAL CONDUCT AUTHORITY-AGT405-2026-03-20-Virtual -C | 04 - Attended | 2026-03-11 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000WZYafAAH | THE FINANCIAL CONDUCT AUTHORITY-AGT401-2026-03-23-Virtual -A | 04 - Attended | 2026-03-11 | 0 | Workshop | LMS Integration | True | True | Web/Marketing |
| 006ed00000SbPFSAA3 | UK - FCA - D360 Innovation Pilot Expansion | Dead - No Decision | 2026-03-10 | 80000 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000LNtcQAAT | UK - FCA - Einstein for Service x 600, Phase 1 Authorisation | Dead - No Decision | 2026-03-10 | 300000 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000W0iEjAAJ | UK - FCA - DE Courtesy #KYC | 08 - Closed | 2026-03-10 | 0 | Courtesy | Thomas O'Neill | True | True |  |
| 006ed00000GkNRpAAN | UK - FCA (via Softcat) - Tableau Server to Cloud Migration P | Dead - Lost | 2026-03-02 | 59592 | SOW | David O'Farrell | False | True | AE |
| 006ed00000Kwry5AAB | UK - FCA - Own Early Renewal (Currency change) #KYC | 08 - Closed | 2026-03-01 | 35112.48 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000UQVgRAAX | THE FINANCIAL CONDUCT AUTHORITY-TTP101-2026-03-12-Virtual -C | 04 - Attended | 2026-02-12 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000UL5mcAAD | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-02-19-Virtual -C | 04 - Attended | 2026-02-11 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000KWed7AAD | [Sig SKU on LO] THE FINANCIAL CONDUCT AUTHORITY - Signature  | 01 - Identifying an Opportunity | 2026-01-21 | 177484.8 | Success Plan | Martin Cowton | False | False | Auto Created SO |
| 006ed00000QmLBFAA3 | THE FINANCIAL CONDUCT AUTHORITY-CRT101-2026-01-14-Virtual -l | 12 - Cancelled - Waitlist Batch | 2026-01-14 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000EWjJhAAL | UK - FCA -  Innovation Stream - Data Cloud Sandbox Credits # | Dead - Lost | 2026-01-14 | 85000 | Add-On Business | STEPHEN DONNELLY | False | True |  |
| 006ed00000RmxMRAAZ | UK-TAB-THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - Nove | 08 - Closed | 2026-01-14 | 39744 | Add-On Business | Josh Adams | True | True |  |
| 006ed00000Rat6TAAR | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 2026-01-09 | 289687.52 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000PzzRbAAJ | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-12-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000H9gcXAAR | THE FINANCIAL CONDUCT AUTHORITY Renewal 20 Call Center, 17 T | Dead Attrition | 2025-12-20 | 0 | Renewal | Noreen Cullen | True | True |  |
| 006ed00000PY7v8AAD | UK - FCA - Data Cloud renewal #KYC | 08 - Closed | 2025-12-19 | 4810.47272727 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000Ca7TtAAJ | UK - FCA - CMO EfS Swap #KYC | 08 - Closed | 2025-12-19 | 13869.9024 | Swap | Thomas O'Neill | True | True |  |
| 006ed00000PTqpdAAD | UK-TAB-THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - Nove | Dead - Duplicate | 2025-12-18 | 39744 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000QhfFRAAZ | THE FINANCIAL CONDUCT AUTHORITY-TTD101-2026-01-26-Virtual -C | 06 - Cancelled - Attendee | 2025-12-17 | 0 | Public | LMS Integration | False | True | Web/Marketing |
| 006ed00000GjNSIAA3 | UK - FCA (via Softcat) - Tableau Server to Cloud Migration P | 06 - Project Booked | 2025-12-16 | 253560 | SOW | David O'Farrell | True | True | AE |
| 0063y00001AP36zAAD | UK - FCA - Innovation Stream - Roll-Out #datacloud #AI #TAB+ | Dead - Lost | 2025-12-09 | 80000 | Add-On Business | Josh Adams | False | True | CSM |
| 006ed00000IotJtAAJ | UK - FCA - Motor Finance Compensation Scheme - Pilot | Dead - No Decision | 2025-11-25 | 120000 | Add-On Business | Josh Adams | False | True |  |
| 006ed000007yUVRAA2 | UK - FCA (Direct) - Advisory - Ongoing Remediation Services  | Dead - Lost | 2025-11-13 | 0 | Order Form | David O'Farrell | False | True | AE |
| 0063y000017phogAAA | UK - FCA (Direct) - RCMS - Regulatory Excellence Programme - | Dead - Lost | 2025-11-13 | 0 | SOW | David O'Farrell | False | True | AE |
| 006ed00000JFOYYAA5 | UK - FCA - 18 x Survey Response Pack #KYC | 08 - Closed | 2025-11-11 | 3789.47368421 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000KgJE1AAN | UK - FCA - File Storage x 38 #KYC | 08 - Closed | 2025-11-04 | 531.67 | Swap | Thomas O'Neill | True | True |  |
| 006ed00000MGsXdAAL | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-10-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000NogObAAJ | THE FINANCIAL CONDUCT AUTHORITY-TTD301-2025-12-01-Virtual -O | 07 - No Show | 2025-10-31 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000A2rYlAAJ | OWN - Financial Conduct Authority Accelerate/Data Mask and S | Dead - No Decision | 2025-10-24 | 0 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000FOjWPAA1 | UK-TAB-FCA - Move to cloud iACV #BTP | Dead - No Decision | 2025-10-07 | 111029.6 | Renewal | Josh Adams | False | True |  |
| 006ed00000KjdkrAAB | UK - FCA - Storage Courtesy | 08 - Closed | 2025-09-24 | 0 | Courtesy | Josh Adams | True | True |  |
| 0063y000017vpqTAAQ | UK - FCA - Einstein for Service (+800) 2nd phase #AI | Dead - Duplicate | 2025-09-23 | 480000 | Add-On Business | Josh Adams | False | True |  |
| 0063y000019RoD9AAK | UK - FCA - Einstein for Service x 600, Phase 1 Authorisation | Dead - Duplicate | 2025-09-23 | 360000 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000AcN5uAAF | UK -TAB -FCA - Innovation team - #TAB+ | Dead - Duplicate | 2025-09-22 | 181440 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000BK3gAAAT | UK - FCA - Data Cloud Sandbox Credits #data #AI | Dead - Duplicate | 2025-09-22 | 250000 | Add-On Business | Josh Adams | False | True |  |
| 0063y00001AjRlMAAV | UK - FCA - 150+ PSFA #ADDON FY26 #PSS | Dead - Duplicate | 2025-09-22 | 138300 | Add-On Business | Josh Adams | False | True |  |
| 006ed00000H57wjAAB | [SPS AI rec] SO THE FINANCIAL CONDUCT AUTHORITY - Cloud - Si | Dead - Duplicate | 2025-09-02 | 0 | Success Plan | Martin Cowton | False | True |  |
| 006ed000006R56bAAC | UK - FCA - Heroku - +3 Dynos [SDR] #CASE | 08 - Closed | 2025-08-28 | 1190.592 | New Business | Thomas O'Neill | True | True | Website |
| 006ed00000BWfJSAA1 | UK-TAB-FCA - Innovation Stream - Innovation POC-#TAB+ | Dead - Lost | 2025-08-20 | 153600 | New Business | Josh Adams | False | True |  |
| 006ed000009sqFlAAI | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - No Decision | 2025-08-20 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed000009aLFGAA2 | UK - MS - FCA - Agentforce Service Agent - Feb 25 #Agentforc | Dead - No Opportunity | 2025-08-19 | 110000 | New Business | MURRAY GRUBB JNR | False | True |  |
| 006ed000004IUOjAAO | UK - FCA - Innovation Stream - Agentforce Service Agent #Age | Dead - Lost | 2025-08-19 | 96000 | Add-On Business | Josh Adams | False | True |  |
| 0063y000018rgSPAAY | UK - MC - Financial Conduct Authority - NB - Data Cloud for  | Dead - No Decision | 2025-08-15 | 150000 | Add-On Business | STEPHEN DONNELLY | False | True |  |
| 006ed00000IDXi9AAH | UK - FCA - PSS - Data Storage Swap #KYC | 08 - Closed | 2025-08-15 | 1399.11 | Swap | Thomas O'Neill | True | True |  |
| 006ed00000HWIRRAA5 | TAB - THE FINANCIAL CONDUCT AUTHORITY - Tab+ Add-on | 08 - Closed | 2025-08-06 | 0 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000HUrWXAA1 | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-07-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000G6fQfAAJ | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-07-31 |  | Add-On Business | Jon Bland | False | True |  |
| 006ed00000GknfdAAB | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-07-31 |  | Add-On Business | Josh Adams | False | True |  |
| 006ed00000IInRJAA1 | Financial Conduct Authority - Signature Success 2025 | 08 - Closed | 2025-07-31 | 393549.96 | Add-On Business | Josh Adams | True | True |  |
| 0063y00001Aj4joAAB | UK - FCA - Swap 200 x Einstein for Service (Classic) to Eins | 08 - Closed | 2025-07-30 | 89506.87968 | Swap | Thomas O'Neill | True | True |  |
| 006ed00000CiF1FAAV | UK - Financial Conduct Authority - Agentforce | Dead - No Opportunity | 2025-07-30 |  | Add-On Business | Youssef Echehamta | False | True | Partner Referral |
| 006ed00000HUx2TAAT | UK - FCA - Courtesy Storage #courtesy | 08 - Closed | 2025-07-25 | 0 | Courtesy | Thomas O'Neill | True | True |  |
| 006ed000008bl4zAAA | UK - FCA - Einstein for Service Courtesy #AI | Dead - Lost | 2025-07-24 | 0 | Courtesy | Thomas O'Neill | False | True |  |
| 006ed0000090tnKAAQ | UK - FCA - Salesforce Foundations for Innovation Forum #KYC | Dead - Lost | 2025-07-24 | 0 | Add-On Business | Thomas O'Neill | False | True |  |
| 006ed0000090gLRAAY | UK - FCA - Salesforce Foundations #KYC | Dead - Lost | 2025-07-24 | 0 | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y000017mInxAAE | THE FINANCIAL CONDUCT AUTHORITY Renewal 3358 Call Center, 62 | 05 Closed | 2025-07-20 | 4202678.05 | Renewal | Noreen Cullen | True | True |  |
| 006ed000004oAzbAAE | UK - FCA - 3.5% Renewal Uptick + Signature Success Shadow Op | Dead - No Opportunity | 2025-07-20 | 428228.5 | Add-On Business | Josh Adams | False | True |  |
| 0063y00001AnpnXAAR | SO: FCA - Signature Success - Core - Shadow | 08 - Closed | 2025-07-20 | 396152.27 | Success Plan | Martin Cowton | True | True |  |
| 006ed00000DzaIQAAZ | THE FINANCIAL CONDUCT AUTHORITY Direct Renewal | 08 - Closed | 2025-07-17 | 68506.2462766 | New Business | Josh Adams | True | True |  |
| 006ed00000HuGt7AAF | UK - TAB - FCA - 3CP + 5VP | 08 - Closed | 2025-07-17 | 5184 | Add-On Business | Aaron Fitzgerald(KS) | True | True |  |
| 0063y000018d9TNAAY | UK - FCA (Direct) - Licence Renewal Attach - Advisory - Acco | 06 - Project Booked | 2025-07-17 | 416221.2 | Order Form | David O'Farrell | True | True | AE |
| 006ed00000GAiY1AAL | UK - FCA - Renewal Uplift ECS Shadow oppty #KYC | 08 - Closed | 2025-07-17 | 38165.84 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000FCYF0AAP | UK - FCA - Innovation Forum Licenses for phase 2 #KYC | 08 - Closed | 2025-07-17 | 20683.3566 | New Business | Thomas O'Neill | True | True |  |
| 006ed00000F5YBhAAN | UK - FCA (Direct) - Licence Renewal Attach - Advisory - Acco | 08 - Closed | 2025-07-16 | 0 | New Business | David O'Farrell | True | True | AE |
| 006ed00000F7HUvAAN | UK - TAB - Softcat - FCA - (+3 Creators & +20 Viewers) Table | Dead - Duplicate | 2025-07-08 | 3880.8 | Add-On Business | Aaron Fitzgerald(KS) | False | True |  |
| 006ed00000ExQODAA3 | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-06-30 |  | Add-On Business | Jon Bland | False | True |  |
| 006ed00000FWBu9AAH | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-06-30 |  | Add-On Business | Jon Bland | False | True |  |
| 006ed00000FVtsPAAT | UK - FCA - Storage Courtesy | 08 - Closed | 2025-06-24 | 0 | Courtesy | Thomas O'Neill | True | True |  |
| 006ed00000FPEqLAAX | TAB - Softcat - FCA - Tab Next add-on | 08 - Closed | 2025-06-23 | 0 | Add-On Business | Jon Bland | True | True |  |
| 006ed0000050HsPAAU | UK-TAB -FCA - Tableau #Agentforce | Dead - No Decision | 2025-06-20 | 0 | New Business | Jon Bland | False | True |  |
| 006ed0000035jpBAAQ | UK - FCA (via TBD) - Innovation Forum RFP - Partner Support  | Dead - Lost | 2025-06-12 | 500000 | SOW | David O'Farrell | False | True | AE |
| 006ed00000C3gJxAAJ | UK - FCA - CRMA 36(15) #KYC | 08 - Closed | 2025-06-06 | 41580 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed000008MuwbAAC | OWN - Financial Conduct Authority - 23 Unl | Dead - No Decision | 2025-06-04 | 828 | Add-On Business | Jon Bland | False | True |  |
| 006ed000004MrGHAA0 | UK - FCA - Einstein 1 - Auths use case #AI | Dead - Lost | 2025-06-03 | 81000 | New Business | Thomas O'Neill | False | True |  |
| 006ed000005IC7uAAG | UK - MS - FCA - Mule for Data Architecture | Dead - Lost | 2025-06-02 | 150000 | New Business | MURRAY GRUBB JNR | False | True | AE |
| 006ed00000C0vqcAAB | UK - TAB -THE FINANCIAL CONDUCT AUTHORITY - Innovation POC | 08 - Closed | 2025-06-02 | 5184 | Add-On Business | Shanzay Nishtar(KS) | True | True |  |
| 006ed00000DdR2TAAV | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-05-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed00000E7oPpAAJ | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-05-31 |  | Add-On Business | Jon Bland | False | True |  |
| 006ed000006MdIcAAK | UK - FCA (via SoftCat) - INTACT Org - Advisory - Remediation | Dead - Lost | 2025-05-12 | 0 | Order Form | David O'Farrell | False | True | AE |
| 006ed00000A2vfZAAR | THE FINANCIAL CONDUCT AUTHORITY Renewal 1 Platform, 1 Org Pe | Dead Attrition | 2025-05-05 | 0 | Renewal | Noreen Cullen | True | True |  |
| 006ed000006bHw6AAE | Quoting oppty for FCA Intact Remediation SEH | Dead - No Decision | 2025-05-01 | 0 | New Business | Patrick Knight | False | True |  |
| 006ed00000BP9hhAAD | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-04-30 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed00000CEGxFAAX | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-04-30 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed00000AXsLhAAL | THE FINANCIAL CONDUCT AUTHORITY - 2025-04-05 - Renewal - Own | Dead - Duplicate | 2025-04-28 | 0 | Renewal | Natasha Patrikiou | False | True |  |
| 006ed00000CMvf3AAD | THE FINANCIAL CONDUCT AUTHORITY-AFS201-2025-06-16-London GB- | 04 - Attended | 2025-04-24 | 0 | Public | LMS Integration | True | True | Web/Marketing |
| 006ed00000CIZQDAA5 | UK - FCA - DC Provision #$0 | 08 - Closed | 2025-04-23 | 0 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed0000063MVBAA2 | UK - FCA - Data Cloud - Sandbox for Innovation #KYC | 08 - Closed | 2025-04-22 | 21714.36 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed00000BnWAMAA3 | THE FINANCIAL CONDUCT AUTHORITY - Salesforce CTO Sales Play  | Dead - Lost | 2025-04-22 | 517752 | Order Form | David O'Farrell | False | True | Services GTM |
| 006ed000009PBskAAG | THE FINANCIAL CONDUCT AUTHORITY Renewal 5 Call Center, 10 Sa | Dead Attrition | 2025-04-20 | 0 | Renewal | Noreen Cullen | True | True |  |
| 006ed00000AXsyRAAT | THE FINANCIAL CONDUCT AUTHORITY - 2025-04-05 - New Business  | 01 - Identifying an Opportunity | 2025-04-05 | 0 | New Business | Natasha Patrikiou | False | False |  |
| 006ed00000BSXtxAAH | THE FINANCIAL CONDUCT AUTHORITY Renewal 209214 Own Legacy | 05 Closed | 2025-04-05 | 133299 | Renewal | Natasha Patrikiou | True | True |  |
| 006ed000008kPbVAAU | OWN - Financial Conduct Authority 23 UNL (Do not invoice/inv | 08 - Closed | 2025-03-28 | 828 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed000008DU6vAAG | UK - FCA - July 5% Renewal Uptick (worst case) Shadow opp #r | Dead - Duplicate | 2025-03-12 | 150000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000009e0CEAAY | UK - FCA - Data Cloud SB for EfS Short Term #KYC | 08 - Closed | 2025-03-06 | 460.8 | New Business | Thomas O'Neill | True | True |  |
| 006ed000008lbNhAAI | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-02-28 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000007nJWvAAM | UK - MS - FCA - Agentforce Service Agent #Agentforce | Dead - Duplicate | 2025-02-26 | 0 | New Business | MURRAY GRUBB JNR | False | True |  |
| 006ed000008lWuHAAU | UK - FCA - Short term Einstein for Service x 5 (AI) #AI #KYC | 08 - Closed | 2025-02-21 | 4563.72 | New Business | Thomas O'Neill | True | True |  |
| 006ed000006i7rxAAA | UK - TAB - Softcat - FCA- Non Production Server | 08 - Closed | 2025-02-14 | 12196.8 | Add-On Business | Shanzay Nishtar(KS) | True | True |  |
| 006ed000006vmdxAAA | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2025-01-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000017M5ZSAA0 | UK - FCA (Direct) - RCMS - Case Management Optimisation RFP  | Dead - Lost | 2025-01-24 | 0 | Order Form | David O'Farrell | False | True | AE |
| 0063y000017M5ZrAAK | UK - FCA (Direct) - RCMS - Case Management Optimisation RFP  | Dead - Lost | 2025-01-24 | 0 | SOW | David O'Farrell | False | True | AE |
| 0063y000017M5a1AAC | UK - FCA (Direct) - RCMS - Case Management Optimisation RFP  | Dead - Lost | 2025-01-24 | 0 | SOW | David O'Farrell | False | True | AE |
| 0063y000017M5ZhAAK | UK - FCA (Direct) - RCMS - Case Management Optimisation RFP  | Dead - Lost | 2025-01-24 | 0 | Order Form | David O'Farrell | False | True | AE |
| 006ed000006xnNtAAI | SO - THE FINANCIAL CONDUCT AUTHORITY - SignatureW2W - Signat | Dead - Duplicate | 2025-01-14 | 0 | Success Plan | Martin Cowton | False | True |  |
| 006ed0000040I7WAAU | UK -TAB -THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - Oc | Dead - Lost | 2025-01-07 | 80640 | Add-On Business | Rima Mukherjee | False | True |  |
| 006ed000000z3VdAAI | UK - FCA - 4(6) CRMA #ANALYTICS #KYC | 08 - Closed | 2024-12-23 | 4752 | Add-On Business | Thomas O'Neill | True | True |  |
| 006ed000005wOzxAAE | OWN - Financial Conduct Authority Archive Cross Sell 3237 +  | 08 - Closed | 2024-12-20 | 139838.4 | New Business | Kati Rantala(JB) | True | True |  |
| 006ed000005VBAnAAO | UK - FCA - Own Data Archive - SHADOW OPP #OWN #platform | Dead - Duplicate | 2024-12-10 | 142560 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000004wRLhAAM | UK - FCA - 4 x CRMA - #analytics | 01 - Identifying an Opportunity | 2024-12-01 | 0 | Add-On Business | Josh Adams | False | False |  |
| 006ed000005IFlhAAG | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2024-11-30 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000002wtCgAAI | UK - FCA - 200 PSS Einstein 1 (swap from PSFA, SCV, Einstein | 01 - Identifying an Opportunity | 2024-11-26 | 204439.6632 | Swap | Josh Adams | False | False |  |
| 006ed000003lB4lAAE | UK - FCA (Direct) - Innovation Forum RFP - AI + Data Cloud E | Dead - Lost | 2024-11-15 | 0 | SOW | David O'Farrell | False | True | AE |
| 0063y000019EJG5AAO | UK - FCA- CRMA ( with service cloud Einstein) #analytics | Dead - No Decision | 2024-11-12 | 95040 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y00001AjS5MAAV | UK - FCA-  300 x CRMA  - Phase 2 Authorisations #analytics | Dead - No Decision | 2024-11-12 | 190080 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000002oTQfAAM | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2024-10-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000003LRebAAG | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2024-10-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 006ed000001jcDRAAY | UK - FCA - Data Cloud 3-month PoC OTV #Data Cloud | 01 - Identifying an Opportunity | 2024-10-30 | 34560 | New Business | STEPHEN DONNELLY | False | False |  |
| 0063y00001AjUQMAA3 | UK - FCA - Full Copy Sandbox only #Platform | 08 - Closed | 2024-10-29 | 348298.70148 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 006ed00000208ajAAA | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - 12 Septembe | 01 - Identifying an Opportunity | 2024-10-12 |  | Add-On Business | Josh Adams | False | False |  |
| 0063y00001AqCv4AAF | FCA - Signature Success - Tableau | 08 - Closed | 2024-10-11 | 23012.78 | Success Plan | Martin Cowton | True | True |  |
| 0063y00001Ad6xPAAR | UK - TAB -FCA - Enterprise sku #Q3SPIFFsignature | 08 - Closed | 2024-10-09 | 197252.39 | New Business | Rima Mukherjee | True | True |  |
| 006ed000001nkh3AAA | THE FINANCIAL CONDUCT AUTHORITY Renewal 12462 Tableau | 05 Closed | 2024-10-09 | 661618.3 | Renewal | Yasmin Igné | True | True |  |
| 006ed000002aPzfAAE | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2024-09-30 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000017UmufAAC | THE FINANCIAL CONDUCT AUTHORITY Renewal 6231 Tableau | 05 Closed | 2024-09-09 | 661618.32 | Renewal | Yasmin Igné | True | True |  |
| 0063y000018gAmlAAE | UK - FCA - PSFA swap to Integration User licences #KYC | Dead - No Decision | 2024-09-04 | 0 | Swap | Thomas O'Neill | False | True |  |
| 0063y00001BH7c2AAD | UK - FCA - Platform 25(47) + CRMA 2(2) #KYC | 08 - Closed | 2024-08-28 | 9265.7648 | Swap | Thomas O'Neill | True | True |  |
| 0063y000019yJmMAAU | FCA #EMPGTM TC ISV - CloudCrossing (PDFButler) | Dead - Lost | 2024-08-27 | 5000 | New Business | Tony Crowhurst | False | True |  |
| 0063y000018w9VJAAY | UK - FCA (via TBC) - Phase 0 - Strategic Planning & Discover | Dead - No Opportunity | 2024-08-27 | 0 | New Business | David O'Farrell | False | True |  |
| 0063y000018g3weAAA | UK - FCA - PSS 25 #ADDON | Dead - Lost | 2024-08-13 | 26384.23 | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y000019Wim5AAC | THE FINANCIAL CONDUCT AUTHORITY Renewal 2 Analytics Cloud | Dead Attrition | 2024-07-31 | 0 | Renewal | Noreen Cullen | True | True |  |
| 0063y0000183sZMAAY | UK - FCA - $0 Service GPT SKU (8000 Credits) #AI | Dead - No Decision | 2024-07-24 | 0 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000019X8TdAAK | THE FINANCIAL CONDUCT AUTHORITY Renewal 10 Sandbox, 10 Call  | Dead Attrition | 2024-07-20 | 0 | Renewal | Noreen Cullen | True | True |  |
| 0063y00001ANV93AAH | UK - FCA  - Service Einstein and GPT for CMO #AI | Dead - Duplicate | 2024-07-16 | 150000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000019ZPCWAA4 | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - January 17, | Dead - No Decision | 2024-07-09 |  | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y000018RkePAAS | UK - FCA - Child Oppty - ECS Split #ADDON | Dead - OEM | 2024-06-18 | 170000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000018gAhbAAE | UK - FCA - Einstein for Service Promo 10 #AI | 08 - Closed | 2024-05-21 | 0 | New Business | Thomas O'Neill | True | True |  |
| 0063y000019dhQ1AAI | UK - FCA -  addon +2(2) CRMA #ANALYTICS #KYC | 08 - Closed | 2024-04-30 | 2376 | New Business | Thomas O'Neill | True | True |  |
| 0063y000018SDEEAA4 | FCA #EMPGTM ISV TC - Copado | Dead - Duplicate | 2024-04-18 | 18800 | New Business | Anna Pitcher | False | True |  |
| 0063y000019zbqKAAQ | UK-TABCRM - FCA -Dreamforce use cases | 01 - Identifying an Opportunity | 2024-04-18 | 150000 | New Business | Rima Mukherjee | False | False |  |
| 0063y000017tkskAAA | UK - FCA (Direct) - SP - Service Cloud Voice Implementation  | Dead - Lost | 2024-04-16 | 569323.6 | SOW | David O'Farrell | False | True | Other |
| 0063y0000183SzDAAU | UK - FCA - 150+ PSFA #ADDON | Dead - No Decision | 2024-04-16 | 138300 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000018wJzoAAE | UK - FCA (Direct) - SP - Tableau Server to Tableau Cloud Mig | Dead - Lost | 2024-04-15 | 75783.04 | SOW | David O'Farrell | False | True | AE |
| 0063y000019uqyGAAQ | UK - FCA (via SoftCat) - TX Services - Service Cloud Voice I | 06 - Project Booked | 2024-04-12 | 95703 | SOW | David O'Farrell | True | True | Other |
| 0063y000019FLkgAAG | UK - TAB - THE FINANCIAL CONDUCT AUTHORITY - Cloud | Dead - No Decision | 2024-04-12 | 316217.88 | Renewal | Rima Mukherjee | False | True |  |
| 0063y00001Aj3ipAAB | UK - FCA - 2 x Einstein for Service - POC SupHub - GenAI - # | 01 - Identifying an Opportunity | 2024-04-08 | 0 | Courtesy | Josh Adams | False | False |  |
| 0063y00001Aj94DAAR | UK - FCA - 3 x Einstein for Service, 3 Month Pilot #AI | 01 - Identifying an Opportunity | 2024-04-02 | 2472.552 | New Business | Josh Adams | False | False |  |
| 0063y00001APXwqAAH | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2024-03-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000019ZPClAAO | UK - FCA - 30000 - EinsteinGPT- Supervision Hub #AI | Dead - Duplicate | 2024-03-26 | 89250 | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y00001AP1NPAA1 | UK - FCA - Intact Courtesy Partial Copy SB to support Hyperf | 08 - Closed | 2024-03-11 | 0 | Courtesy | Kati Rantala(JB) | True | True |  |
| 0063y000017w18fAAA | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - 19 October  | Dead - No Decision | 2024-02-28 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000017wBTJAA2 | UK - FCA - EinsteinGPT for Supervision Hub #AI | Dead - Duplicate | 2024-02-27 | 120000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000017vBglAAE | UK - FCA - Signature Success #Signature #ADDON | Dead - No Decision | 2024-02-15 | 293500 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000018QE4UAAW | FCA - Transformation Programme: Loose Coupling | 01 - Identifying an Opportunity | 2024-02-09 | 37692.672 | New Business | Billy Meboroh-Collinson | False | False |  |
| 0063y000017w19TAAQ | UK - FCA - ECI 200 Test | 01 - Identifying an Opportunity | 2024-02-05 | 0 | Add-On Business | Josh Adams | False | False |  |
| 0063y000019Dw5FAAS | UK - FCA - Intact FC & PC Sandboxes to support Hyperforce Mi | 08 - Closed | 2024-02-01 | 0 | Courtesy | Kati Rantala(JB) | True | True |  |
| 0063y000018q3GvAAI | UK - FCA - ISV DevOps PNR -  ISV Shadow Oppty | Dead - Duplicate | 2024-02-01 | 13000 | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y00001AOC8fAAH | The Financial Conduct Authority_Copado Limited_Initial_01/31 | 08 - Closed | 2024-01-31 | 17777.4192 | New Business | Thomas O'Neill | True | True |  |
| 0063y0000199gdfAAA | UK - FCA (via SoftCat) - TX Services - Service Cloud Voice I | 06 - Project Booked | 2024-01-05 | 44938.8 | SOW | David O'Farrell | True | True | Services Delivery |
| 0063y00001ANLRkAAP | UK - FCA - 150+ PSFA, 11+ Lightning Platform Starter for new | 08 - Closed | 2024-01-04 | 161285.946 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 0060M000014t4n3QAA | FCA (Financial Conduct Authority)_Enablement_Renewal Shadow | Dead - No Decision | 2023-12-28 | 500 | New Business | Ute Lorenzen | False | True | CSM |
| 0063y000017qu9HAAQ | UK - FCA - Intact - Second FC Sandbox | Dead - OEM | 2023-12-19 | 100000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y0000184nByAAI | UK - MS - FCA - Data Regulator 2.0 | Dead - No Decision | 2023-12-16 | 164999 | New Business | David Pugsley | False | True |  |
| 0063y000018qR1GAAU | UK - MC - Financial Conduct Authority - NB - Engagement POC  | Dead - No Decision | 2023-12-05 | 100000 | New Business | Lachlan Mills(BT) | False | True |  |
| 0063y00001A9EIDAA3 | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2023-11-30 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000018ryKeAAI | UK - TAB - FCA -Data cloud starter for Tableau | Dead - No Decision | 2023-11-29 | 109000 | New Business | Rima Mukherjee | False | True |  |
| 0063y000019jAb4AAE | UK - FCA (via SoftCat) - TX Services - Service Cloud Voice I | 06 - Project Booked | 2023-11-27 | 19972.8 | SOW | David O'Farrell | True | True | AE |
| 0063y000017l7KUAAY | UK - FCA VLT Business Rules Engine on PSA-A 10M events per a | Dead - No Decision | 2023-11-16 | 80000 | Add-On Business | Thomas O'Neill | False | True |  |
| 0063y00001A7wBAAAZ | THE FINANCIAL CONDUCT AUTHORITY - Online Sales - Your Accoun | Dead - Webstore | 2023-10-31 |  | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000019BsybAAC | FCA - OMS335 - Sept TBC - Ross Dixon | 10 - Dead/No Decision | 2023-10-26 | 0 | Public | Keith Halliday | False | True | TAE Prospecting |
| 0063y000019BsxnAAC | FCA - OMS335 - Sept TBC - Hafsa Patel | 10 - Dead/No Decision | 2023-10-26 | 0 | Public | Keith Halliday | False | True | TAE Prospecting |
| 0063y000019BsxxAAC | FCA - OMS335 - Sept TBC - Umor Ahmed | 10 - Dead/No Decision | 2023-10-26 | 0 | Public | Keith Halliday | False | True | TAE Prospecting |
| 0063y000019BsyMAAS | FCA - OMS335 - Sept TBC - Reanne Roban | 10 - Dead/No Decision | 2023-10-26 | 0 | Public | Keith Halliday | False | True | TAE Prospecting |
| 0063y0000196T19AAE | FD - FCA - Architect Training Plans - VTC's - 2023 | Dead - Duplicate | 2023-10-24 | 20000 | New Business | Keith Halliday(DM) | False | True | Success Partner |
| 0063y0000184nBtAAI | FCA - Cog Support System | 01 - Identifying an Opportunity | 2023-10-20 | 164999 | New Business | Andrea Fernandez | False | False |  |
| 0063y000017w18uAAA | UK - FCA - ECI 200 Users | Dead - No Opportunity | 2023-10-19 | 0 | New Business | Kati Rantala(JB) | False | True |  |
| 0063y000018tAjPAAU | UK - FCA - Public Sector Solutions Community (Form) - FINS V | Dead - No Decision | 2023-10-09 | 100000 | Add-On Business | Kati Rantala(JB) | False | True | AE |
| 0063y000018wLWRAA2 | UK - FCA (Direct) - Project Services - ESS Remediation Progr | Dead - Lost | 2023-10-04 | 500000 | SOW | David O'Farrell | False | True | AE |
| 0063y000016Tc8VAAS | UK - FCA - Service Voice Cloud (+160), Service Cloud Einstei | 08 - Closed | 2023-10-01 | 122880 | Add-On Business | Kati Rantala(JB) | True | True | Salesforce AE |
| 0063y000018vcu2AAA | UK - FCA - Security Center #Platform #ADDON | Dead - No Decision | 2023-09-27 | 100000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000018ibbKAAQ | UK - FCA - Enablement (in-app guidance) #enablement | Dead - No Decision | 2023-09-26 | 100000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000018pkMmAAI | UK - FCA (Direct) - Framework Agreement - Digital Services F | 06 - Project Booked | 2023-09-21 | 0 | SOW | David O'Farrell | True | True | Self Generated |
| 0063y000018OQnlAAG | UK-FCA - TAB -SOFTCAT - Advanced Management | Dead - OEM | 2023-09-12 | 63241.155 | Add-On Business | Nicholas Wills | False | True |  |
| 0063y000018q4tEAAQ | UK - FCA - OwnBackup ISV PNR - ISV Shadow Opp | Dead - OEM | 2023-09-11 | 2700 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000018w9TrAAI | UK - FCA (via SoftCat) - Project Services - Service Cloud Vo | Dead - Lost | 2023-09-08 | 100000 | SOW | David O'Farrell | False | True | Other |
| 0063y000018Fim9AAC | THE FINANCIAL CONDUCT AUTHORITY Renewal 81 Call Center, 40 S | 05 Closed | 2023-09-08 | 38973.7 | Renewal | Noreen Cullen | True | True |  |
| 0063y000017uyTVAAY | UK - FCA - Intact - PSS Foundation Advanced Q3 Add-On (+50 U | Dead - Lost | 2023-09-06 | 50000 | Add-On Business | Scott Lauder | False | True |  |
| 0063y000019RnWZAA0 | UK - FCA - SCV 40, Service Cloud Einstein 40 Renewal #contac | 08 - Closed | 2023-09-06 | 18370.3 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 0063y000019Rms0AAC | UK - FCA - PSFA (+100), Lightning Platform Starter (+11), 10 | 08 - Closed | 2023-09-06 | 165269.292 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 0063y0000191tKCAAY | UK - FCA (via SoftCat) - TX Services - Service Cloud Voice I | 06 - Project Booked | 2023-09-06 | 257982 | SOW | David O'Farrell | True | True | Other |
| 0063y000019q7WqAAI | UK -TAB - FCA Tab Display | Dead - Lost | 2023-09-05 | 62390.4 | New Business | Rima Mukherjee | False | True |  |
| 0063y000019mzSeAAI | UK - TAB - FCA Premium support | Dead - Lost | 2023-09-05 | 44176.68 | Swap | Scott Lauder | False | True |  |
| 0063y000018w9UQAAY | UK - FCA (via SoftCat) - Tableau - Service Cloud Voice Imple | Dead - Lost | 2023-08-18 | 25000 | SOW | David O'Farrell | False | True | Other |
| 0063y000019q7WpAAI | UK - TAB - FCA online | Dead - Duplicate | 2023-08-17 | 200000 | Add-On Business | Rima Mukherjee | False | True |  |
| 0063y000019Rn9fAAC | UK - FCA - CRMA Plus Courtesy to Support SCV project #analyt | 08 - Closed | 2023-08-09 | 0 | Courtesy | Kati Rantala(JB) | True | True |  |
| 0063y000018dcgSAAQ | UK - FCA (via Cognizant) - Assurance Services - FCA OmniStud | Dead - Lost | 2023-08-02 | 100000 | SOW | David O'Farrell | False | True | AE |
| 0063y0000183OouAAE | UK - FCA - Business Rules Engine - Calls 1M #CX | Dead - No Decision | 2023-08-01 | 100000 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y0000185ANRAA2 | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 Financ | Dead - Lost | 2023-07-25 | 150000 | SOW | David O'Farrell | False | True | AE |
| 0063y000018IDn8AAG | THE FINANCIAL CONDUCT AUTHORITY Renewals Off Cycle Forecasti | 05 Closed | 2023-07-20 | 0 | Off-Cycle Non Coterminous Order | Selena Manno | True | True |  |
| 0063y000018ea4rAAA | THE FINANCIAL CONDUCT AUTHORITY NCO EXT | 08 - Closed | 2023-07-18 | 0 | Add-On Business | Selena Manno | True | True |  |
| 0063y000018q3H5AAI | UK - FCA - ISV Testing Tool PNR | Dead - Lost | 2023-07-03 | 8000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000019Bsy2AAC | FCA - OMS335 - August 28 - Levi Choutan | 10 - Dead/No Decision | 2023-06-28 | 0 | Public | Keith Halliday | False | True | TAE Prospecting |
| 0063y000018dFUnAAM | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 ICM Ad | Dead - Lost | 2023-06-28 | 0 | SOW | Jon McClure | False | True | Other |
| 0063y000018XQGUAA4 | THE FINANCIAL CONDUCT AUTHORITY Renewal 2692 Sandbox | Dead - Duplicate | 2023-06-19 | 442690.1856 | Renewal | Noreen Cullen | False | True |  |
| 0063y000018Qs9rAAC | FCA #EMPGTM ISV TC | Dead - Lost | 2023-06-14 |  | New Business | Tony Crowhurst | False | True | Partner |
| 0063y000018puDDAAY | dummy | 01 - Identifying an Opportunity | 2023-06-14 | 96506.4604608 | New Business | Thomas O'Neill | False | False |  |
| 0063y000019V556AAC | UK - FCA - Sandbox 1 Month Courtesy | 08 - Closed | 2023-06-13 | 0 | Courtesy | Kati Rantala(JB) | True | True |  |
| 0063y000018Q4K7AAK | FCA - Automation | Dead - Lost | 2023-06-13 | 50000 | New Business | Andrea Fernandez | False | True |  |
| 0063y000019QacOAAS | UK - FCA - DPS FCA Framework #FW - Onboarding | 01 - Identifying an Opportunity | 2023-06-06 | 0 | New Business | Sara Cleger | False | False |  |
| 0063y000019DeFrAAK | FD - FCA - Omnistudio Training FY24 - PW - TBC | 10 - Dead/No Decision | 2023-05-31 | 20625 | Private Workshop | Keith Halliday | False | True | TAE Prospecting |
| 0063y0000187zRkAAI | UK - FCA - Workforce Management #HR | 01 - Identifying an Opportunity | 2023-05-31 | 128000 | Add-On Business | Josh Adams | False | False |  |
| 0063y000017WTKHAA4 | FCA - Salesforce Platform  2.0 | Dead - No Decision | 2023-05-24 | 45600 | New Business | Billy Meboroh-Collinson(JS) | False | True |  |
| 0063y000018CZuAAAW | UK - TAB - FCA Financial register | Dead - No Decision | 2023-05-19 | 100000 | New Business | Rima Mukherjee | False | True |  |
| 0063y000018RyaZAAS | UK - FCA - Partial Copy Sandbox, +150 PSFA, 10 x 10GB Data S | 01 - Identifying an Opportunity | 2023-05-19 | 289692.4364 | Add-On Business | Thomas O'Neill | False | False |  |
| 0063y000018iep8AAA | UK - FCA - Partial Copy Sandbox, +150 PSFA, 10 x 10GB Data S | 08 - Closed | 2023-05-19 | 300404.6564 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 0063y000018RzZrAAK | UK - ECS Split (Child Oppty) - FCA - PSFA (+150 UE) #ADDON | 08 - Closed | 2023-05-18 | 89275.7764 | Add-On Business | Nicholas Wills(CP) | True | True |  |
| 0063y000017WJDtAAO | FCA - Anti-Money Laundering | Dead - No Decision | 2023-05-17 | 50000 | New Business | David Hughes | False | True |  |
| 0063y000016YHOfAAO | FCA - Org Remediation | Dead - No Decision | 2023-05-17 | 88040 | New Business | David Hughes | False | True |  |
| 0063y000017Jd6VAAS | FCA - Prevention of Harm | Dead - No Decision | 2023-05-17 | 92856 | New Business | David Hughes | False | True |  |
| 0063y000018AoqmAAC | FCA - Next Best Action | Dead - No Decision | 2023-05-17 | 100000 | New Business | David Hughes | False | True |  |
| 0063y000017WbeFAAS | FCA - APP | Dead - No Decision | 2023-05-17 | 75000 | New Business | David Hughes | False | True |  |
| 0063y000018RxPBAA0 | UK - FCA - Partial Copy Sandbox, +150 PSFA, 10 x 10GB Data S | Dead - Duplicate | 2023-05-15 | 289692.4364 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000017urbcAAA | UK - FCA - Intact - Mobile Publisher | Dead - No Decision | 2023-05-11 | 39000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000018ddfVAAQ | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 ICM ad | Dead - Lost | 2023-05-09 | 5000 | SOW | David O'Farrell | False | True | Services Delivery |
| 0063y000018RQqIAAW | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - April 5, 20 | 01 - Identifying an Opportunity | 2023-05-05 |  | Add-On Business | Thomas O'Neill | False | False |  |
| 0063y0000183HpmAAE | UK - FCA test opp ignore | 01 - Identifying an Opportunity | 2023-05-01 | 0 | Add-On Business | Josh Adams | False | False |  |
| 0063y000018csbdAAA | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 SMR Sc | 06 - Project Booked | 2023-04-28 | 39945.6 | SOW | David O'Farrell | True | True | Other |
| 0063y0000183Il2AAE | UK - FCA - Partial Sandbox, 150 PSFA, 10GB Data Storage, Fil | 01 - Identifying an Opportunity | 2023-04-28 | 351508.2113 | Add-On Business | Josh Adams | False | False |  |
| 0063y000017tmClAAI | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 March  | 06 - Project Booked | 2023-04-28 | 164853.5 | SOW | David O'Farrell | True | True | Other |
| 0063y000018d9PQAAY | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 New  S | 06 - Project Booked | 2023-04-28 | 58254 | SOW | David O'Farrell | True | True | Other |
| 0063y0000184nBoAAI | FCA - Cog File-Based Connector | Dead - Lost | 2023-04-27 | 164999 | New Business | Andrea Fernandez | False | True |  |
| 0063y000018i8JqAAI | UK - FCA - Shield - #shield | 01 - Identifying an Opportunity | 2023-04-27 | 380000 | Add-On Business | Josh Adams | False | False |  |
| 0063y000017uhUMAAY | UK - FCA - Intact - PSS Foundation Advanced Add-On (+150 UE) | Dead - Duplicate | 2023-04-26 | 152049.2409 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000018QtNpAAK | UK - FCA - Intact - Data Storage 10GB (+10) +24 UE | Dead - Duplicate | 2023-04-25 | 80958 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000017M5YAAA0 | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 Year 1 | 06 - Project Booked | 2023-04-17 | 0 | SOW | David O'Farrell | True | True | AE |
| 0063y000018d9SAAAY | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 HCD Li | Dead - Lost | 2023-04-17 | 1340000 | SOW | David O'Farrell | False | True | AE |
| 0063y000017php0AAA | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 Digita | Dead - Lost | 2023-04-17 | 766285.89 | SOW | David O'Farrell | False | True | Services Delivery |
| 0063y000017uQXAAA2 | Financial Conduct Authority Crush #UKIGTM TC | Dead - No Opportunity | 2023-04-13 | 3000 | New Business | Tony Crowhurst | False | True |  |
| 0063y000016ToooAAC | FCA - Einstein (160) | Dead - No Decision | 2023-04-12 | 160000 | Add-On Business | Kati Rantala(JB) | False | True | Salesforce AE |
| 0060M000013pVsRQAU | FCA Analytics - Analytics Plus [BDR] | Dead - No Decision | 2023-04-12 | 144000 | New Business | Kati Rantala(JB) | False | True |  |
| 0063y000017vDDvAAM | UK - FCA - MIAW functionality ($0 order form) | 08 - Closed | 2023-03-27 | 0 | Add-On Business | Kati Rantala(JB) | True | True |  |
| 0063y000018vcxVAAQ | UK - FCA - Full Copy Sandbox 3 months(OTV value £110K) #Sand | 08 - Closed | 2023-03-20 | 110672.5456 | New Business | Kati Rantala(JB) | True | True |  |
| 0063y000018ik1RAAQ | UK - FCA - SCV, Einstein Insights, Service Cloud Einstein &  | Dead - Duplicate | 2023-03-15 | 485500 | Add-On Business | Kati Rantala(JB) | False | True |  |
| 0063y000016RTZBAA4 | TAB - Softcat - Financial Conduct Authority - Lee Stone - 27 | Dead - Duplicate | 2023-03-15 | 34400 | New Business | Rima Mukherjee | False | True |  |
| 0063y000017qcFaAAI | Dummy TEST | 01 - Identifying an Opportunity | 2023-03-13 | 0 | Add-On Business | Thomas O'Neill | False | False |  |
| 0063y000017v9TyAAI | UK - FCA - FC Sandbox 1 month courtesy | 08 - Closed | 2023-03-10 | 0 | Courtesy | Kati Rantala(JB) | True | True |  |
| 0063y000017qHJAAA2 | UK - FCA - Customer Community Login Overages | Dead - No Decision | 2023-03-09 | 20000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000017qnFmAAI | UK - FCA - Intact - PSS Foundation Advanced Add-On (+50 UE)  | Dead - Duplicate | 2023-03-09 | 50295.96 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000017JZ6XAAW | UK - FCA - Financial Services Register - SF Content Manageme | Dead - Lost | 2023-03-09 | 41574.64068 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y0000187EYtAAM | UK - FCA - CHILD OPP - Signature Success #ADDON | Dead - Duplicate | 2023-03-08 | 293500 | Add-On Business | Kati Rantala | False | True |  |
| 0063y000017eBjwAAE | THE FINANCIAL CONDUCT AUTHORITY Renewal 12 Call Center, 12 O | Dead Attrition | 2023-02-28 | 0 | Renewal | Abigail Hazel Antwi | True | True |  |
| 0063y000018AyY0AAK | THE FINANCIAL CONDUCT AUTHORITY Renewal 12 Call Center, 12 O | 1 - Identifying an Opportunity | 2023-02-28 | 1977.02 | Add-On Business | Josh Adams | False | False |  |
| 0063y000017uyFOAAY | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - January 24, | 01 - Identifying an Opportunity | 2023-02-23 | 153832.7691 | Add-On Business | Thomas O'Neill | False | False |  |
| 0063y000018G3UBAA0 | UK - FCA (via Softcat) - Expert Services - Tableau Technical | 06 - Project Booked | 2023-02-21 | 18874.8 | SOW | David O'Farrell | True | True | AE |
| 0063y000018356FAAQ | UK - FCA - Intact - 30 day courtesy FC Sandbox | 08 - Closed | 2023-02-14 | 0 | Courtesy | Nicholas Wills(CP) | True | True |  |
| 0063y000017iXrDAAU | UK - FCA (via SoftCat) - TX Services - DUIE Bulk Interventio | Dead - Lost | 2023-01-30 | 250000 | SOW | David O'Farrell | False | True | Services Delivery |
| 0063y000018MzreAAC | UK - FCA - Public Sector Solutions - Omnistudio #FINS VLT -  | 08 - Closed | 2023-01-27 | 368728.41592 | Swap | Kati Rantala(JB) | True | True |  |
| 0063y000017iXrCAAU | UK - FCA (via SoftCat) - TX Services - Omnistudio SMR Iterat | Dead - Lost | 2023-01-23 | 200000 | SOW | David O'Farrell | False | True | Services Delivery |
| 0063y000018ozfvAAA | UK - FCA (via SoftCat) - TX Services - Salesforce 2.0 CO for | Dead - Lost | 2023-01-23 | 48089 | SOW | David O'Farrell | False | True | Services Delivery |
| 0063y000018Oph0AAC | UK -FCA -Tab - enterprise | 08 - Closed | 2023-01-18 | 122640 | Add-On Business | Rima Mukherjee | True | True |  |
| 0063y000017ukwTAAQ | UK - FCA - Organic License Growth - Service Cloud (+100) | Dead - Duplicate | 2023-01-17 | 100000 | Add-On Business | Nicholas Wills(CP) | False | True |  |
| 0063y000018FE4AAAW | THE FINANCIAL CONDUCT AUTHORITY - Quick Add-on - December 14 | 01 - Identifying an Opportunity | 2023-01-13 | 0 | Courtesy | Billy Meboroh-Collinson | False | False |  |

## Account team

This is the unfiltered list — analysis happens later.

| Name | Title | Email | Role |
|---|---|---|---|
| Waqqas Awan | Customer Success Manager | wawan@salesforce.com | Customer Success Manager |
| STEPHEN DONNELLY | Account Executive, Marketing Cloud | stephen.donnelly@salesforce.com | Marketing Cloud AE |
| David O'Farrell | Account Partner Director | dofarrell@salesforce.com | CSG Account Partner |
| Edward Armishaw | Cloud Account Executive | earmishaw@salesforce.com | Agentforce AE |
| Saeed Ahmed | Senior Solution Engineer - Data Cloud / AI Consumption Lead | saeed.ahmed@salesforce.com | Agentforce and Data Cloud Consumption Seller |
| Thomas O'Neill | Senior Prime ECS Account Executive | thomas.oneill@salesforce.com | ECS |
| Noreen Cullen | Senior Renewals Manager | ncullen@salesforce.com | CSG Renewals Mgr |
| Lachlan Mills | Cloud Account Executive | lachlan.mills@salesforce.com | Data Cloud AE |
| Cagdas Ordu | RVP, Services Delivery UK&I | cordu@salesforce.com | Services Lead Role |
| Asmaa Zekri | Cloud Account Executive | azekri@salesforce.com | Partner Cloud AE |
| Neil Brehony | Premier seller | nbrehony@salesforce.com | CSG Premier Success Sales |
| Rima Mukherjee | Account Executive, Tableau Specialist | rima.mukherjee@salesforce.com | Analytics Specialist AE |
| Matthew Rochard | Informatica Account Executive | mrochard@salesforce.com | INFA AE |
| Thomas Huxtable | Platform & Security Specialist | thuxtable@salesforce.com | Platform and Security AE |
| Jonathan Toms | Customer Success Manager | jtoms@salesforce.com | Inactive |
| Sylvain Naltchayan | Principal, Account SE | snaltchayan@salesforce.com | Account SE |
| MURRAY GRUBB JNR | MuleSoft Senior Account Executive - Central Gov | mgrubbjnr@salesforce.com | Data Foundations AE |
| Josh Adams | Named Account Executive | joshadams@salesforce.com | Salesperson |
| Binda Sewak | Alliances - Partner Account Director | bsewak@salesforce.com | Alliances Partner Sales |
| Damian Ondore | Account Executive, Slack | dondore@salesforce.com | Slack AE |
| Mark Breen | Cloud Account Executive | markbreen@salesforce.com | Employee Service AE |
| Chris Dowlen | Customer Success Manager, Senior Manager | cdowlen@salesforce.com | Customer Success Manager Lead |
| Rachael Ross | Business Development Rep | rachael.ross@salesforce.com | BDR |
| Chris Lawlor | Senior Business Development Rep | chris.lawlor@salesforce.com | INFA BDM |
| Minerva ElMasry | Signature Success, Sales Executive | minerva.elmasry@salesforce.com | CSG Signature Success Sales |

## Installed products / asset inventory

⚠️ **Not available.** The `Asset` sObject is not supported/enabled in org62 for this query (`INVALID_TYPE` error on `SELECT ... FROM Asset`). This may mean org62 tracks installed-product inventory via a different mechanism (e.g., `OpportunityLineItem` on closed-won opportunities, or a custom object) rather than the standard `Asset` object. See "Renewal dates / subscription signals" below, which uses `OpportunityLineItem` as a proxy.

## Recent activity (Tasks, Events) — last 6 months

This is the unfiltered list — analysis happens later.

### Tasks

| Subject | Date | Status | Owner | Description |
|---|---|---|---|---|
| CNM | 2026-09-16 | Completed | Rachael Ross |  |
| CNM | 2026-09-16 | Completed | Rachael Ross |  |
| CLVM | 2026-09-16 | Completed | Rachael Ross |  |
| CLVM | 2026-09-16 | Completed | Rachael Ross |  |
| CLVM | 2026-09-16 | Completed | Rachael Ross |  |
| CNM | 2026-09-16 | Completed | Rachael Ross |  |
| CC | 2026-09-16 | Completed | Rachael Ross | RR 16/9:

Invited Pat to World Tour. Accepted invite and would like  me to send on any suggested talks or demos he sho |
| CNM | 2026-09-15 | Completed | Rachael Ross |  |
| CC | 2026-09-15 | Completed | Rachael Ross | RR 15/9:

Spoke re Kick Off in Tower. Excited to see what is on offer and keen to see more on Bobbi. Has her concerns  |
| CNM | 2026-09-15 | Completed | Rachael Ross |  |
| CC | 2026-09-15 | Completed | Rachael Ross | RR 15/9:

Invited to WT. Accepted invite and form filled out accordingly, looking forward to seeing what will come out |
| CLVM | 2026-09-15 | Completed | Rachael Ross |  |
| CNM | 2026-09-15 | Completed | Rachael Ross |  |
| CLVM | 2026-09-15 | Completed | Rachael Ross |  |
| CC | 2026-09-15 | Completed | Rachael Ross | RR 15/8:

Discussed Bobbi for FCA - he said he has heard a lot but interested and keen to see more about the safety ra |
| CNM | 2026-09-15 | Completed | Rachael Ross |  |
| CLVM | 2026-09-15 | Completed | Rachael Ross |  |
| CNM | 2026-09-15 | Completed | Rachael Ross |  |
| CC | 2026-09-15 | Completed | Rachael Ross | RR 15/9: 

Invited to WT, unsure if he can attend but has asked me check who is going from his team and let him know  |
| CLVM | 2026-09-15 | Completed | Rachael Ross |  |
| CLVM | 2026-09-15 | Completed | Rachael Ross |  |
| Email: Thank you for contacting Salesforce Billing Department | 2026-09-14 | Completed | salesforce.com Customer Support | Additional To: fca-accounts@salesforce.com
CC: 
BCC: 
Attachment: 

Subject: Thank you for contacting Salesforce Billing |
| CSG Email: Agentforce Welcome | 2026-09-12 | Completed | ExactTarget | Get to know Agentforce |
| Email: Re: Check-in with Salesforce? | 2026-09-11 | Completed | Josh Adams | To: claire.graham@fca.org.uk; amanda.myers@fca.org.uk
CC: 
BCC: 
Attachment: --none--

Subject: Re: Check-in with Salesf |
| Thank you email | 2026-09-11 | Completed | Rachael Ross | RR 11/9:

Josh to send Follow up email and RR will link once sent |
| Email: Re: Check-in with Salesforce? | 2026-09-11 | Completed | Josh Adams | To: claire.graham@fca.org.uk; amanda.myers@fca.org.uk
CC: 
BCC: 
Attachment: --none--

Subject: Re: Check-in with Salesf |
| Email: Salesforce Monthly Usage Summary | 2026-09-10 | Completed | Entitlement Notification API - DO NOT TOUCH | To: accountspayable@fca.org.uk
CC: joshadams@salesforce.com
BCC: 
Attachment: --none--

Subject: Salesforce Monthly Usag |
| AE Meeting | 2026-09-09 | Completed | Rachael Ross | RR 9/9:

Attendees:
Jon Bland 
Josh Adams
Ed Towers
Faisal Ahmed 

Meeting summary:
Ed Towers is new in role he |
| CNM | 2026-09-08 | Completed | Rachael Ross |  |
| CLVM | 2026-09-08 | Completed | Rachael Ross |  |
| CC | 2026-09-08 | Completed | Rachael Ross | RR 8/9:

Victoria has signed up to WT. She has no questions ahead of the day as she attends all WT. Potentially will m |
| CNM | 2026-09-08 | Completed | Rachael Ross |  |
| CC | 2026-09-08 | Completed | Rachael Ross | RR 8/9:

Following yesterdays call, Adam gas confirmed that he is able to attend WT. Form has been filled out accordin |
| CLVM | 2026-09-07 | Completed | Rachael Ross |  |
| CNM | 2026-09-07 | Completed | Rachael Ross |  |
| CLVM | 2026-09-07 | Completed | Rachael Ross |  |
| CLVM | 2026-09-07 | Completed | Rachael Ross |  |
| CNM | 2026-09-07 | Completed | Rachael Ross |  |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Invited to WT, accepted and form filled out. As the fCA are no longer attending Dreamforce he is keen to see  |
| CNM | 2026-09-07 | Completed | Rachael Ross |  |
| CLVM | 2026-09-07 | Completed | Rachael Ross |  |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Shared WT invite, confirmed attendence and form filled out |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Invited Aoife to WT, she is not 100% if she is available so has asked me to email her across the invite and s |
| CNM | 2026-09-07 | Completed | Rachael Ross |  |
| CLVM | 2026-09-07 | Completed | Rachael Ross |  |
| CNM | 2026-09-07 | Completed | Rachael Ross |  |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Invited to WT, Unable to attend as he is on leave that week, he has asked me to share a recording of the Keyn |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Invited to WT, accepted & form filled in. keen to see more on Claudeforce following session today on FCA/Clau |
| CC | 2026-09-07 | Completed | Rachael Ross | RR 7/9:

Invited to WT, not sure if he is away that week or not but he will check his diary and call me back if so.
R |
| AE Meeting | 2026-09-07 | Completed | Rachael Ross | RR 8/9:

Attendees:
Faisal Ahmed
Rachael Ross
Josh Adams
Chandra Shetty
Sylvain Naltchayan
Andrew Lyons
Ian Her |

### Events

| Subject | Start | End | Owner | Description |
|---|---|---|---|---|
| Quarterly FCA/Salesforce Product Roadmap Forum | 2027-12-01T13:00:00.000+0000 | 2027-12-01T17:00:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| Quarterly FCA/Salesforce Product Roadmap Forum | 2027-12-01T13:00:00.000+0000 | 2027-12-01T17:00:00.000+0000 | Jon Bland | Please accept this series, any clashes can be rescheduled
______________________________________________________________ |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Nicholas Wills | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Thomas O'Neill | *** 17/08 – Please use this invite and delete the other one ***

AGENDA

  1.  Minutes and actions
  2.  Burning platfor |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Jon Bland | 10/09/2025: New series created to update attendees.  Please note, meetings may use Copilot.

AGENDA

  1.  Minutes and a |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Jon Bland | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-10-18T14:00:00.000+0000 | 2027-10-18T15:00:00.000+0000 | Jon Bland | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Roadmap - Huddle | 2027-10-06T08:00:00.000+0000 | 2027-10-06T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA/Salesforce Account leads call | 2027-09-30T15:00:00.000+0000 | 2027-09-30T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA / Salesforce - Roadmap Cadence | 2027-09-29T08:30:00.000+0000 | 2027-09-29T09:00:00.000+0000 | Jakub Szelągowski | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-29T08:30:00.000+0000 | 2027-09-29T09:00:00.000+0000 | Sylvain Naltchayan | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-29T08:30:00.000+0000 | 2027-09-29T09:00:00.000+0000 | Josh Adams | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-29T08:30:00.000+0000 | 2027-09-29T09:00:00.000+0000 | Thomas O'Neill | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA/Salesforce Roadmap - Huddle | 2027-09-29T08:00:00.000+0000 | 2027-09-29T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FW: Salesforce Review | 2027-09-28T13:00:00.000+0000 | 2027-09-28T13:45:00.000+0000 | Jon Bland | -----Original Appointment-----
From: Rupel Shah On Behalf Of Jagpal Jheeta
Sent: 21 September 2023 08:08
To: Jagpal Jhee |
| FCA/Salesforce Account leads call | 2027-09-23T15:00:00.000+0000 | 2027-09-23T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| Fortnightly call w/ Salesforce/FCA : To discuss Signature Engagements to align strategic goals and priorities going forward | 2027-09-22T11:00:00.000+0000 | 2027-09-22T11:30:00.000+0000 | Rima Mukherjee | ________________________________________________________________________________
Microsoft Teams meeting
Join: https://t |
| FCA/Salesforce Roadmap - Huddle | 2027-09-22T08:00:00.000+0000 | 2027-09-22T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Thomas O'Neill | *** 17/08 – Please use this invite and delete the other one ***

AGENDA

  1.  Minutes and actions
  2.  Burning platfor |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Nicholas Wills | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Jon Bland | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Jon Bland | ________________________________________________________________________________
Microsoft Teams meeting
Join on your co |
| FCA/Salesforce Monthly Appraisal Board | 2027-09-20T14:00:00.000+0000 | 2027-09-20T15:00:00.000+0000 | Jon Bland | 10/09/2025: New series created to update attendees.  Please note, meetings may use Copilot.

AGENDA

  1.  Minutes and a |
| FCA/Salesforce Account leads call | 2027-09-16T15:00:00.000+0000 | 2027-09-16T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA / Salesforce - Roadmap Cadence | 2027-09-15T08:30:00.000+0000 | 2027-09-15T09:00:00.000+0000 | Jakub Szelągowski | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-15T08:30:00.000+0000 | 2027-09-15T09:00:00.000+0000 | Thomas O'Neill | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-15T08:30:00.000+0000 | 2027-09-15T09:00:00.000+0000 | Sylvain Naltchayan | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-15T08:30:00.000+0000 | 2027-09-15T09:00:00.000+0000 | Josh Adams | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA/Salesforce Roadmap - Huddle | 2027-09-15T08:00:00.000+0000 | 2027-09-15T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA/Salesforce Account leads call | 2027-09-09T15:00:00.000+0000 | 2027-09-09T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| Fortnightly call w/ Salesforce/FCA : To discuss Signature Engagements to align strategic goals and priorities going forward | 2027-09-08T11:00:00.000+0000 | 2027-09-08T11:30:00.000+0000 | Rima Mukherjee | ________________________________________________________________________________
Microsoft Teams meeting
Join: https://t |
| FCA/Salesforce Roadmap - Huddle | 2027-09-08T08:00:00.000+0000 | 2027-09-08T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA/Salesforce Account leads call | 2027-09-02T15:00:00.000+0000 | 2027-09-02T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| Quarterly FCA/Salesforce Product Roadmap Forum | 2027-09-01T12:00:00.000+0000 | 2027-09-01T16:00:00.000+0000 | Jon Bland | Please accept this series, any clashes can be rescheduled
______________________________________________________________ |
| Quarterly FCA/Salesforce Product Roadmap Forum | 2027-09-01T12:00:00.000+0000 | 2027-09-01T16:00:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA / Salesforce - Roadmap Cadence | 2027-09-01T08:30:00.000+0000 | 2027-09-01T09:00:00.000+0000 | Josh Adams | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-01T08:30:00.000+0000 | 2027-09-01T09:00:00.000+0000 | Thomas O'Neill | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-01T08:30:00.000+0000 | 2027-09-01T09:00:00.000+0000 | Jakub Szelągowski | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA / Salesforce - Roadmap Cadence | 2027-09-01T08:30:00.000+0000 | 2027-09-01T09:00:00.000+0000 | Sylvain Naltchayan | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |
| FCA/Salesforce Roadmap - Huddle | 2027-09-01T08:00:00.000+0000 | 2027-09-01T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FW: Salesforce Review | 2027-08-31T13:00:00.000+0000 | 2027-08-31T13:45:00.000+0000 | Jon Bland | -----Original Appointment-----
From: Rupel Shah On Behalf Of Jagpal Jheeta
Sent: 21 September 2023 08:08
To: Jagpal Jhee |
| FCA/Salesforce Account leads call | 2027-08-26T15:00:00.000+0000 | 2027-08-26T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| Fortnightly call w/ Salesforce/FCA : To discuss Signature Engagements to align strategic goals and priorities going forward | 2027-08-25T11:00:00.000+0000 | 2027-08-25T11:30:00.000+0000 | Rima Mukherjee | ________________________________________________________________________________
Microsoft Teams meeting
Join: https://t |
| FCA/Salesforce Roadmap - Huddle | 2027-08-25T08:00:00.000+0000 | 2027-08-25T08:15:00.000+0000 | Kati Rantala | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA/Salesforce Account leads call | 2027-08-19T15:00:00.000+0000 | 2027-08-19T15:30:00.000+0000 | Thomas O'Neill | ________________________________________________________________________________
Microsoft Teams Need help?<https://aka. |
| FCA / Salesforce - Roadmap Cadence | 2027-08-18T08:30:00.000+0000 | 2027-08-18T09:00:00.000+0000 | Josh Adams | Hi All, 

Putting in this time to maintain alignment on all things Salesforce. This will be closely focused on the Roadm |

## Case history (last 12 months)

This is the unfiltered list — analysis happens later. 100 cases returned (query limit), `CreatedDate >= LAST_N_MONTHS:12`, sorted by created date descending — note this may not be the full set if case volume exceeds 100 in the trailing 12 months; treat as a representative sample, not exhaustive.

| Case # | Subject | Status | Priority | Type | Created | Closed | Reason |
|---|---|---|---|---|---|---|---|
| 68341067 | [PROACTIVE MONITORING NOTIFICATION: CRITICAL] - THE FINANCIAL CONDUCT AUTHORITY - 00Db0000000K8yP - Connection Pool Errors | Pending Customer Approval | Normal |  | 2026-09-16T10:38:26.000+0000 |  | Proactive Monitoring |
| 68322333 | Transaction Security Policies affect external and internal users | Waiting on Customer | Normal |  | 2026-09-15T09:23:01.000+0000 |  | Unassigned |
| 68314166 | Purchase Order PO-00016949 | Closed - Resolved | Normal | Billing Inquiry | 2026-09-14T17:01:27.000+0000 | 2026-09-14T23:50:35.000+0000 |  |
| 68311828 | The winter’27 release update “Defer Sharing Calculations for Bulk Unified Employee License Updates | Closed - Resolved | Normal |  | 2026-09-14T14:21:05.000+0000 | 2026-09-16T11:57:17.000+0000 | Unassigned |
| 68311268 | Spring ’27 Release Update – Asynchronous Sharing Recalculation Impact Assessment | Waiting on Customer | Normal |  | 2026-09-14T13:43:37.000+0000 |  | Unassigned |
| 68311063 | Winter ’27 Release – Impact Assessment for Enhanced CMS Workspace Changes | Closed - Resolved | Normal |  | 2026-09-14T13:28:25.000+0000 | 2026-09-16T13:48:13.000+0000 | Unassigned |
| 68310587 |  | Completed | Normal |  | 2026-09-14T12:46:37.000+0000 | 2026-09-15T10:37:10.000+0000 | Courtesy Quote |
| 68310278 | Transaction Security Policies | Waiting on Customer | Normal |  | 2026-09-14T12:10:15.000+0000 |  | Unassigned |
| 68308495 | Clarification Required: GraphQL API Guest User Access in Our Orgs | Waiting on Customer | Normal |  | 2026-09-14T08:30:39.000+0000 |  | Unassigned |
| 68296240 | Request for Guidance on SLDS 2 / Cosmos Theme Production Readiness and Impact Assessment | Working | Normal |  | 2026-09-11T16:00:32.000+0000 |  | Unassigned |
| 68295193 | Clarification Required – Winter'27 Release items 'Security Enhancements May Require Users to Reset Passwords' | Waiting on Customer | Normal |  | 2026-09-11T14:40:07.000+0000 |  | Unassigned |
| 68294040 | Impact Assessment – New Email-Based Login Experience | Waiting on Customer | Normal |  | 2026-09-11T13:13:53.000+0000 |  | Unassigned |
| 68292699 | Courtsey quote for FCA  Tableau Article | Closed - Resolved | Normal |  | 2026-09-11T10:34:26.000+0000 | 2026-09-14T12:39:33.000+0000 | Quote Support |
| 68292056 | 50 CREATOR TRIAL LICENSES FOR FCA for 2 months | Waiting on Sales | Normal |  | 2026-09-11T09:19:28.000+0000 |  | Quote Support |
| 68291383 | Web Console - Slowness and Performance Issues | Waiting on Customer | Normal |  | 2026-09-11T08:20:14.000+0000 |  | Unassigned |
| 68283566 | Tableau Prep 2026 — Slow publish/migration of flows to Tableau Cloud when replacing data sources | Working | Normal |  | 2026-09-10T16:19:41.000+0000 |  | Unassigned |
| 68283551 | Tableau Prep 2026 — Master flow (~40 combined flows) opens blank/uneditable | Waiting on Customer | Normal |  | 2026-09-10T16:18:32.000+0000 |  | Unassigned |
| 68283512 | Tableau Prep Builder 2026.2 — Calculation editor rejects input after switching applications | Working | Normal |  | 2026-09-10T16:16:15.000+0000 |  | Unassigned |
| 68282856 | Guidance required to asses the field | Waiting on Customer | Normal |  | 2026-09-10T15:37:22.000+0000 |  | Unassigned |
| 68281740 | Winter ’27 Impact Assessment – AI Agents for Service Cloud Enhancements | Pending Customer Approval | Normal |  | 2026-09-10T14:28:24.000+0000 |  | Unassigned |
| 68281136 | Winter ’27 Impact Assessment – Multi-Intent Detection for Article Recommendations | Waiting on Customer | Normal |  | 2026-09-10T13:55:05.000+0000 |  | Unassigned |
| 68202204 | Countersignature Request | Closed - Resolved | Normal |  | 2026-09-09T14:56:25.000+0000 | 2026-09-09T16:46:08.000+0000 | Countersignature Request |
| 68195234 | Phishing resistant MFA limitations and queries | Working | Normal |  | 2026-09-09T13:34:15.000+0000 |  | Unassigned |
| 68186146 | Salesforce Archive App – Licensing & Sandbox Provisioning Clarification | Pending Customer Approval | Normal |  | 2026-09-09T11:48:55.000+0000 |  | Unassigned |
| 68038286 | RE: PONUK2002834 & PONUK2062309 | Closed - Duplicate | Normal | Billing Inquiry | 2026-09-08T13:27:12.000+0000 | 2026-09-08T18:11:28.000+0000 |  |
| 68021508 | High RAM Utilization on Tableau Server Primary Node | Working | Normal |  | 2026-09-08T11:16:07.000+0000 |  | Unassigned |
| 68018119 | Additional resource blocks | Closed - Resolved | Normal |  | 2026-09-08T10:48:18.000+0000 | 2026-09-08T15:11:35.000+0000 | Manual Provisioning |
| 68003151 | Softcat plc: Purchase Order #PONUK2066503 | Closed - Resolved | Normal | Billing Inquiry | 2026-09-08T08:45:22.000+0000 | 2026-09-09T08:22:17.000+0000 |  |
| 68002793 | Softcat plc: Purchase Order #PONUK2066503 | Closed | Normal |  | 2026-09-08T08:42:16.000+0000 | 2026-09-08T10:41:01.000+0000 | Quote Support |
| 67868491 | LLM Open Connector — Unbounded Retry Storm on HTTP 500 Responses Exhausts Downstream Rate Limits | Closed - Resolved | Normal |  | 2026-09-07T08:58:17.000+0000 | 2026-09-16T14:17:42.000+0000 | Unassigned |
| 67726788 | Subject: Clarification Required – Winter'27 Release items 'Security Enhancements May Require Users to Reset Passwords' | Closed - Resolved | Normal |  | 2026-09-04T16:25:20.000+0000 | 2026-09-11T15:32:27.000+0000 | Unassigned |
| 67723722 | Agentforce IT Service Features and Prerequisites - Winter ’27 Release | Closed - Resolved | Normal |  | 2026-09-04T12:54:47.000+0000 | 2026-09-08T13:48:05.000+0000 | Unassigned |
| 67723390 | Web Console - Slowness and Performance Issues | Closed - Resolved | Normal |  | 2026-09-04T12:22:51.000+0000 | 2026-09-11T08:22:49.000+0000 | Unassigned |
| 67722525 | Service Degardation Impact | Closed - Resolved | Normal |  | 2026-09-04T10:53:38.000+0000 | 2026-09-09T09:14:44.000+0000 | Unassigned |
| 67710989 | Winter ’27 – Salesforce Functions Retirement Impact | Closed - Resolved | Normal |  | 2026-09-03T16:12:10.000+0000 | 2026-09-04T10:50:22.000+0000 | Unassigned |
| 67709243 | Winter ’27 Release – Clarification Required: Control Navigation Items in Lightning Console Apps | Closed - Resolved | Normal |  | 2026-09-03T14:41:23.000+0000 | 2026-09-08T11:13:10.000+0000 | Unassigned |
| 67708963 | Impact Assessment – LWS Change to window.open() in Aura Components – Winter '27 | Closed - Resolved | Normal |  | 2026-09-03T14:26:23.000+0000 | 2026-09-15T09:58:46.000+0000 | Unassigned |
| 67708620 | Assessment Required – Winter'27  release iteam 'Get the Latest LWC Changes with LWC API Version 68.0' | Closed - Resolved | Normal |  | 2026-09-03T14:08:20.000+0000 | 2026-09-08T11:13:07.000+0000 | Unassigned |
| 67706239 | [Clone of 474453863] Tableau Cloud Private Connect - MySQL SSL/secure transport connection error | Closed - Resolved | Normal |  | 2026-09-03T10:57:22.000+0000 | 2026-09-04T11:34:22.000+0000 | Unassigned |
| 67705553 | Winter'27 Cosmos Theme - Production Enablement and Impact | Closed - Resolved | Normal |  | 2026-09-03T09:52:10.000+0000 | 2026-09-10T08:54:40.000+0000 | Unassigned |
| 67704149 | Winter ’27 – Confirm Impact of Trialforce Email-Sending Domain Verification | Closed - Resolved | Normal |  | 2026-09-03T08:14:09.000+0000 | 2026-09-03T12:51:19.000+0000 | Unassigned |
| 67704084 | Winter ’27 – Migrate Packaged and Distributed Connected Apps to External Client Apps | Closed - Resolved | Normal |  | 2026-09-03T08:08:57.000+0000 | 2026-09-07T11:00:56.000+0000 | Unassigned |
| 67690138 | Reporting Limitation: Identify Cases Where Latest Case Note Activity Was Modified More Than 28 Days Ago | Closed - Resolved | Normal |  | 2026-09-02T11:40:45.000+0000 | 2026-09-04T13:25:44.000+0000 | Unassigned |
| 67688956 | TABSVC Backup File is not being generated, only ServerSettings and Logs is being generated. | Closed - Resolved | Normal |  | 2026-09-02T10:11:34.000+0000 | 2026-09-03T14:43:34.000+0000 | Unassigned |
| 67684174 | Industry: Proactive Outreach - General | Closed | Normal |  | 2026-09-02T03:26:01.000+0000 | 2026-09-14T13:48:46.000+0000 | Accelerator Delivery |
| 67675111 | Name Fields Truncated in Compact Layouts After Preview Sandbox | Closed - Resolved | Normal |  | 2026-09-01T15:53:19.000+0000 | 2026-09-10T09:06:53.000+0000 | Unassigned |
| 67674649 | Service: Guardian Security Enhancements | Call/Meeting Scheduled | Normal |  | 2026-09-01T15:30:16.000+0000 |  | Accelerator Delivery |
| 67672460 | Issue with OmniStudio FlexCard colors  after Salesforce platform update | Closed - Resolved | Normal |  | 2026-09-01T13:40:58.000+0000 | 2026-09-09T17:50:53.000+0000 | Unassigned |
| 67670464 | Email to Case creates duplicate Cases | Closed - Resolved | Normal |  | 2026-09-01T10:58:20.000+0000 | 2026-09-15T07:34:39.000+0000 | Unassigned |
| 67628702 | Winter ’27 – OAuth User-Agent and Hybrid User-Agent Flows Retirement | Closed - Resolved | Normal |  | 2026-08-28T14:26:55.000+0000 | 2026-09-02T09:02:19.000+0000 | Unassigned |
| 67625866 | Winter ’27 -Specify Which Email Domains Require Address Verification | Closed - Resolved | Normal |  | 2026-08-28T10:19:32.000+0000 | 2026-09-03T10:34:32.000+0000 | Unassigned |
| 67615676 | Clarification on “Replace Instanced URLs in API Traffic” Release Item | Closed - Resolved | Normal |  | 2026-08-27T15:45:28.000+0000 | 2026-08-28T13:56:03.000+0000 | Unassigned |
| 67608202 | Estimated Credit Memo for this early renewal Q-11689949 | Closed - Resolved | Normal |  | 2026-08-27T05:59:18.000+0000 | 2026-08-27T09:56:42.000+0000 | Billing |
| 67597863 | Opportunity Support  Split Shell Opportunity | Closed - Resolved | Normal |  | 2026-08-26T14:56:38.000+0000 | 2026-08-26T18:42:07.000+0000 | Opportunity Support |
| 67594819 | Winter ’27 – Named Credentials Support for Custom CA Certificates | Closed - Resolved | Normal |  | 2026-08-26T11:34:20.000+0000 | 2026-09-01T11:38:08.000+0000 | Unassigned |
| 67594115 | Bytes Plc: Purchase Order #PO_3050583_SAL09B | Closed | Normal |  | 2026-08-26T10:20:44.000+0000 | 2026-08-26T10:52:16.000+0000 | Quote Support |
| 67575223 | Missing EU-West-1 (Ireland) Region in Tableau Cloud Private Connect Settings | Closed - Resolved | Normal |  | 2026-08-25T12:20:55.000+0000 | 2026-09-03T11:22:07.000+0000 | Unassigned |
| 67556812 | Winter ’27 – Migrate Packaged and Distributed Connected Apps to External Client Apps | Closed - Resolved | Normal |  | 2026-08-24T09:56:24.000+0000 | 2026-08-27T14:33:36.000+0000 | Unassigned |
| 67555995 | Winter ’27- Restrict the OAuth 2.0 Device Flow to Local External Client App | Closed - Resolved | Normal |  | 2026-08-24T08:48:47.000+0000 | 2026-08-26T09:00:11.000+0000 | Unassigned |
| 67540807 | Backup & Recover Next - License and Access Confirmation for Impact Assessment | Closed - Resolved | Normal |  | 2026-08-21T15:15:08.000+0000 | 2026-08-25T10:52:43.000+0000 | Unassigned |
| 67540127 | Data Detect Winter ’27 Enhancements – License Applicability for Our Orgs | Closed - Resolved | Normal |  | 2026-08-21T14:24:56.000+0000 | 2026-08-28T15:48:44.000+0000 | Unassigned |
| 67537678 | Request to Increase Global Picklist Limit | Closed - Resolved | Normal |  | 2026-08-21T10:49:38.000+0000 | 2026-08-21T16:45:26.000+0000 | Unassigned |
| 67527524 | Salesforce – Required Identity Verification for Email Address Changes | Closed - Resolved | Normal |  | 2026-08-20T16:27:22.000+0000 | 2026-08-24T14:57:11.000+0000 | Unassigned |
| 67526901 | Payment Remittance Advice | Closed - Resolved | Normal | Billing Inquiry | 2026-08-20T15:52:49.000+0000 | 2026-08-20T16:00:21.000+0000 |  |
| 67526612 | Experience Cloud Site Showing "Site is Temporarily Unavailable" for User | Closed - Resolved | Normal |  | 2026-08-20T15:35:22.000+0000 | 2026-09-01T16:00:34.000+0000 | Unassigned |
| 67505517 | I need help creating a replication of another quote | Closed - Resolved | Normal |  | 2026-08-19T08:18:34.000+0000 | 2026-08-19T10:16:32.000+0000 | Quote Support |
| 67505186 | RE: Salesforce Invoice 38872511, THE FINANCIAL CONDUCT AUTHORITY | Closed - Resolved | Normal | Billing Inquiry | 2026-08-19T07:46:39.000+0000 | 2026-08-19T08:27:12.000+0000 |  |
| 67493464 | Omniscript Navigation issue | Closed - Resolved | Normal |  | 2026-08-18T13:03:02.000+0000 | 2026-09-01T06:46:48.000+0000 | Unassigned |
| 67491721 | Please add phase out sku | Closed - Resolved | Normal |  | 2026-08-18T10:12:37.000+0000 | 2026-08-18T10:28:36.000+0000 | Quote Support |
| 67491484 | please create quote. | Closed - Resolved | Normal |  | 2026-08-18T09:50:49.000+0000 | 2026-08-18T10:41:42.000+0000 | Quote Support |
| 67482734 | Cases Not Getting Closed Automatically - Request to Check Logs | Closed - Resolved | Normal |  | 2026-08-17T18:27:20.000+0000 | 2026-08-21T10:14:55.000+0000 | Unassigned |
| 67475014 | Want to understand how the ideaexchange consider any idea | Closed - Resolved | Normal |  | 2026-08-17T09:43:58.000+0000 | 2026-08-17T12:12:34.000+0000 | Unassigned |
| 67474876 | PONUK2040370 | Closed - Resolved | Normal | Billing Inquiry | 2026-08-17T09:35:04.000+0000 | 2026-08-17T11:05:47.000+0000 |  |
| 67458514 | Softcat plc: Purchase Order #PONUK2040370 | Closed | Normal |  | 2026-08-14T15:14:56.000+0000 | 2026-08-14T16:19:06.000+0000 | Quote Support |
| 67455436 | RE: Salesforce Invoice 38821413, THE FINANCIAL CONDUCT AUTHORITY - PO-00016607 | Closed - Resolved | Normal | Billing Inquiry | 2026-08-14T11:24:24.000+0000 | 2026-08-14T15:30:49.000+0000 |  |
| 67438369 | Request for Guidance: Updating Auto Number Field Starting Value Referenced in Active Flows | Closed - Resolved | Normal |  | 2026-08-13T10:20:15.000+0000 | 2026-08-13T11:21:15.000+0000 | Unassigned |
| 67437355 | Clarification on Salesforce Features Accessible Through tbid.digital.salesforce.com Connected App | Closed - Resolved | Normal |  | 2026-08-13T08:49:56.000+0000 | 2026-08-14T13:01:08.000+0000 | Unassigned |
| 67425661 | Payment Remittance Advice | Closed - Resolved | Normal | Billing Inquiry | 2026-08-12T16:26:47.000+0000 | 2026-08-13T18:16:17.000+0000 |  |
| 67425354 | Payment Remittance Advice | Closed - Resolved | Normal | Billing Inquiry | 2026-08-12T16:08:31.000+0000 | 2026-08-13T19:52:06.000+0000 |  |
| 67397547 | flow test queries | Closed - Resolved | Normal |  | 2026-08-12T09:46:58.000+0000 | 2026-08-26T13:25:34.000+0000 | Unassigned |
| 67397267 | Customer Community login user sessions are not terminated after admin password reset despite Session Setting being enabled | Closed - Resolved | Normal |  | 2026-08-12T09:23:43.000+0000 | 2026-08-13T10:08:43.000+0000 | Unassigned |
| 67380036 | Custom settings in Git repository | Closed - Resolved | Normal |  | 2026-08-11T13:20:20.000+0000 | 2026-08-13T10:37:08.000+0000 | Unassigned |
| 67378218 | the field in the record type is not visible what could be the reason | Closed - Resolved | Normal |  | 2026-08-11T10:58:32.000+0000 | 2026-08-11T14:47:32.000+0000 | Unassigned |
| 67377127 | No Bridge data on Admin Insights | Closed - Resolved | Normal |  | 2026-08-11T09:23:31.000+0000 | 2026-08-25T09:13:35.000+0000 | Unassigned |
| 67366416 | Slow running flow on Cloud | Closed - Resolved | Normal |  | 2026-08-10T15:54:34.000+0000 | 2026-08-13T08:53:46.000+0000 | Unassigned |
| 67362892 | QA Complete - Awaiting OM Review | Closed - Resolved | Normal |  | 2026-08-10T12:00:29.000+0000 | 2026-08-11T09:35:46.000+0000 |  |
| 67362462 | Page View usage Calculation queries. | Closed - Resolved | Normal |  | 2026-08-10T11:19:09.000+0000 | 2026-09-11T15:14:02.000+0000 | Unassigned |
| 67360028 | Winter '27 Impact Assessment – OAuth 2.0 Username-Password Flow Retirement | Closed - Resolved | Normal |  | 2026-08-10T07:50:34.000+0000 | 2026-08-10T13:19:10.000+0000 | Unassigned |
| 67325810 | Purchase Order PO-00016607 | Closed - Resolved | Normal | Billing Inquiry | 2026-08-06T17:03:26.000+0000 | 2026-08-07T00:25:20.000+0000 |  |
| 67323179 | Fwd: Tableau Resource Blocks | Closed | Normal |  | 2026-08-06T14:45:26.000+0000 | 2026-08-12T08:49:43.000+0000 | Quote Support |
| 67319520 | Meetings Scheduled via Case Appearing as Outstanding Tasks in Teams | Closed - Resolved | Normal |  | 2026-08-06T11:35:48.000+0000 | 2026-08-13T10:09:56.000+0000 | Unassigned |
| 67308253 | Unable to retrieve Report Schedule and Last Run details via SOQL | Closed - Resolved | Normal |  | 2026-08-05T19:21:52.000+0000 | 2026-08-11T15:33:46.000+0000 | Unassigned |
| 67301628 | record type field deletion | Closed - Resolved | Normal |  | 2026-08-05T13:38:40.000+0000 | 2026-08-10T07:59:31.000+0000 | Unassigned |
| 67298940 | Hi, We used to get permission reports to our email Ids every week as soon as the weekly back up is complete. This week we did not receive it and we also run manual permissions but still we did not get the report in the email. api user is api.user.backup@f | Closed - Resolved | Normal |  | 2026-08-05T10:18:01.000+0000 | 2026-08-12T07:07:15.000+0000 | Unassigned |
| 67298769 | Query on Historical User Session/Login Retention and Monthly Login Reporting - Tableau Server 2024.2.2 | Closed - Resolved | Normal |  | 2026-08-05T10:04:36.000+0000 | 2026-08-05T14:15:00.000+0000 | Unassigned |
| 67298521 | what does object transation field means | Closed - Resolved | Normal |  | 2026-08-05T09:44:12.000+0000 | 2026-08-07T12:30:48.000+0000 | Unassigned |
| 67283551 | Monitoring Case for Sandbox login issue due to security enforcemnt. | Closed - Resolved | Normal |  | 2026-08-04T14:29:24.000+0000 | 2026-09-09T16:56:41.000+0000 | Unassigned |
| 67281469 | Review Required – Winter ’27 Accessibility Enhancements #472449325 | Closed - Resolved | Normal |  | 2026-08-04T12:40:50.000+0000 | 2026-08-17T10:56:43.000+0000 | Unassigned |
| 67281286 | Impact Assessment for Winter ’27 Accessibility Enhancements | Closed - Resolved | Normal |  | 2026-08-04T12:29:21.000+0000 | 2026-08-04T13:15:21.000+0000 | Unassigned |
| 67215398 | Reports and report type , dashboard | Closed - Resolved | Normal |  | 2026-07-31T11:17:42.000+0000 | 2026-08-07T12:33:16.000+0000 | Unassigned |

## Account-related Slack channels

Beyond the three channels already tracked on the DRAVantage engagement record (`#the-financial-conduct-authority`, `#fca-data-foundations`, `FCA Case Management Vision`), a `slack_search_channels` sweep for "fca financial conduct authority" surfaced one additional, untracked channel:

| Channel | Id | Created | Type | Notes |
|---|---|---|---|---|
| #rfx-4oct-financial-conduct-authority-fca-rfi | C07PR9YMJ4C | 2024-09-30 | public | Auto-created by the "RFx Assignment Workflow" bot for an RFI response — predates this DRA and the current Data Foundations engagement by ~18 months. Likely contains historical RFI/procurement context, not current DRA discussion. Not read as part of this run (out of scope for the primary DRA channels) — flagging for the architect's awareness only.

## Renewal dates / subscription signals

The `Asset` object is unavailable (see above), so this uses `OpportunityLineItem` on the canonical account's opportunities as a proxy for install-base/renewal signal. 100 line items returned (query limit), sorted by `ServiceDate` descending. This is the unfiltered list — analysis happens later. Cross-reference against `Opportunity.StageName` in the same table: closed-won line items with a `ServiceDate` roughly one year in the past are the most likely near-term renewal candidates.

| Product | Opportunity | Stage | Qty | Unit Price | Total Price | Service Date |
|---|---|---|---|---|---|---|
| Signature Success - Tableau - Fee | UK - TAB - FCA - Add-on Resource blocks (+10) #ANA | 08 - Closed | 10 | 369.6 | 3696 | 2026-10-17 |
| Signature Success - Tableau | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 1 | 0 | 0 | 2026-10-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 2775 | 28.896 | 80186.4 | 2026-10-10 |
| Signature Success - Tableau | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 1 | 0 | 0 | 2026-10-10 |
| Tableau Cloud - Enterprise Explorer | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 20 | 403.2 | 8064 | 2026-10-10 |
| Tableau Cloud - Enterprise Creator | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 370 | 684.48 | 253257.6 | 2026-10-10 |
| Tableau Cloud - Enterprise Viewer | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 2775 | 144.48 | 400932 | 2026-10-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 370 | 136.896 | 50651.52 | 2026-10-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 20 | 80.64 | 1612.8 | 2026-10-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 20 | 80.64 | 1612.8 | 2026-10-10 |
| Tableau Cloud - Enterprise Creator | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 370 | 684.48 | 253257.6 | 2026-10-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 370 | 136.896 | 50651.52 | 2026-10-10 |
| Tableau Cloud - Enterprise Explorer | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 20 | 403.2 | 8064 | 2026-10-10 |
| Tableau Cloud - Enterprise Viewer | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 2775 | 144.48 | 400932 | 2026-10-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 2775 | 28.896 | 80186.4 | 2026-10-10 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 2858 | 47.7 | 136326.6 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 100 | 20.976 | 2097.6 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 47 | 12 | 564 | 2026-10-01 |
| Signature Success - Salesforce Platform - Add On Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 1 | 14936.52 | 14936.52 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 50 | 31.2 | 1560 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 5 | 667.314 | 3336.57 | 2026-10-01 |
| Salesforce Data Mask - Consumption - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 53 | 2.61818184 | 138.76363752 | 2026-10-01 |
| Salesforce Data Seeding | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 1 | 0 | 0 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 29 | 4.8 | 139.2 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 160 | 31.2 | 4992 | 2026-10-01 |
| Salesforce Data Mask | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 1 | 0 | 0 | 2026-10-01 |
| Salesforce Data Mask - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 1 | 0 | 0 | 2026-10-01 |
| Salesforce Data Mask - Consumption - Fee | UK - FCA - Data Mask & Seed  - (+1SP) - (BDR) | 02 - Determining Problem, Impact, Ideal | 45 | 4.66926072 | 210.1167324 | 2026-10-01 |
| Premier Success Plan - Heroku | THE FINANCIAL CONDUCT AUTHORITY Renewal 4 Platform | 05 Closed | 1 | 0 | 0 | 2026-08-28 |
| Heroku - 1 Dyno Unit (Per Month) | THE FINANCIAL CONDUCT AUTHORITY Renewal 4 Platform | 05 Closed | 16 | 234 | 3744 | 2026-08-28 |
| Premier Success Plan - Heroku - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 4 Platform | 05 Closed | 16 | 70.2 | 1123.2 | 2026-08-28 |
| Heroku - 1 Dyno Unit (Per Month) | THE FINANCIAL CONDUCT AUTHORITY Insight Renewal | 01 - Identifying an Opportunity | 16 | 234 | 3744 | 2026-08-28 |
| Premier Success Plan - Heroku | THE FINANCIAL CONDUCT AUTHORITY Insight Renewal | 01 - Identifying an Opportunity | 1 | 0 | 0 | 2026-08-28 |
| Premier Success Plan - Heroku - Fee | THE FINANCIAL CONDUCT AUTHORITY Insight Renewal | 01 - Identifying an Opportunity | 16 | 70.2 | 1123.2 | 2026-08-28 |
| Tableau Cloud - Private Connect Endpoint | UK - TAB - FCA - Tab Ent cloud-Private connect #KY | 08 - Closed | 4 | 480 | 1920 | 2026-08-17 |
| Tableau Cloud - Private Connect Data Processed (1024 GB) | UK - TAB - FCA - Tab Ent cloud-Private connect #KY | 08 - Closed | 36 | 857.14285714 | 30857.14285714 | 2026-08-17 |
| Salesforce Architect - SP | UK - FCA - (Quoting Opp) RCMS Design & Foundation  | 08 - Closed | 1 | 0 | 0 | 2026-08-14 |
| Salesforce Expertise Hours - SP | UK - FCA - (Quoting Opp) RCMS Design & Foundation  | 08 - Closed | 250 | 0 | 0 | 2026-08-14 |
| Salesforce Expertise Hours - SP | UK - FCA - (Quoting Opp) RCMS Design & Foundation  | 08 - Closed | 3806 | 0 | 0 | 2026-08-14 |
| Salesforce Expertise Hours (Global Delivery Center) - SP | UK - FCA - (Quoting Opp) RCMS Design & Foundation  | 08 - Closed | 1280 | 0 | 0 | 2026-08-14 |
| Tableau Cloud - Data Mgmt - Resource Block | UK - TAB - FCA - Add-on Resource blocks (+10) #ANA | 08 - Closed | 10 | 1848 | 18480 | 2026-08-07 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Add-on Resource blocks (+10) #ANA | 08 - Closed | 10 | 369.6 | 3696 | 2026-08-07 |
| Data Storage (10GB) | UK - FCA - Platform enhancements - Storage allocat | 08 - Closed | 8 | 5911.92 | 47295.36 | 2026-07-22 |
| File Storage (10GB) | UK - FCA - Platform enhancements - Storage allocat | 08 - Closed | 97 | 300 | 29100 | 2026-07-22 |
| Public Communities Page Views (1 million/month) - Unlimited Edition | UK - FCA - Platform enhancements - Page Views #KYC | 02 - Determining Problem, Impact, Ideal | 1 | 29416.8 | 29416.8 | 2026-07-22 |
| Tableau - Enterprise Subscription Plan - Viewer (Server) (Restricted Use) | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 2775 | 0 | 0 | 2026-05-10 |
| Tableau Cloud - Enterprise Viewer | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 2775 | 144.48 | 400932 | 2026-05-10 |
| Tableau - Enterprise Subscription Plan - Explorer (Server) (Restricted Use) | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 20 | 0 | 0 | 2026-05-10 |
| Tableau Cloud - Enterprise Creator | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 370 | 684.48 | 253257.6 | 2026-05-10 |
| Tableau - Enterprise Subscription Plan - Creator (Server) (Restricted Use) | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 370 | 0 | 0 | 2026-05-10 |
| Tableau - Non-Production (Server) | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 1 | 7700 | 7700 | 2026-05-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 20 | 80.64 | 1612.8 | 2026-05-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 2775 | 28.896 | 80186.4 | 2026-05-10 |
| Tableau Cloud - Enterprise Explorer | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 20 | 403.2 | 8064 | 2026-05-10 |
| Signature Success - Tableau | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 1 | 0 | 0 | 2026-05-10 |
| Signature Success - Tableau - Fee | THE FINANCIAL CONDUCT AUTHORITY Renewal 9497 Table | 01 - Identifying an Opportunity | 370 | 136.896 | 50651.52 | 2026-05-10 |
| Tableau - Non-Production (Server) | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 1 | 6600 | 6600 | 2026-04-10 |
| Tableau Cloud - Enterprise Creator | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 370 | 684.48 | 253257.6 | 2026-04-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 370 | 136.896 | 50651.52 | 2026-04-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 20 | 80.64 | 1612.8 | 2026-04-10 |
| Signature Success - Tableau - Fee | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 2775 | 28.896 | 80186.4 | 2026-04-10 |
| Signature Success - Tableau | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 1 | 0 | 0 | 2026-04-10 |
| Tableau Cloud - Enterprise Viewer | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 2775 | 144.48 | 400932 | 2026-04-10 |
| Tableau - Enterprise Subscription Plan - Creator (Server) (Restricted Use) | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 370 | 0 | 0 | 2026-04-10 |
| Tableau - Enterprise Subscription Plan - Explorer (Server) (Restricted Use) | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 20 | 0 | 0 | 2026-04-10 |
| Tableau Cloud - Enterprise Explorer | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 20 | 403.2 | 8064 | 2026-04-10 |
| Tableau - Enterprise Subscription Plan - Viewer (Server) (Restricted Use) | UK - TAB - FCA - Tableau migration to cloud #KYC # | 08 - Closed | 2775 | 0 | 0 | 2026-04-10 |
| Sandbox (Partial Copy) - Fee | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 40 | 46.2 | 1848 | 2026-04-09 |
| Signature Success - Salesforce Platform - Add On Fee | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 1 | 3255.12 | 3255.12 | 2026-04-09 |
| Sandbox (Full Copy) - Fee | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 40 | 81.18 | 3247.2 | 2026-04-09 |
| Flex Credits (100k) | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 45 | 93.38521401 | 4202.33463035 | 2026-04-09 |
| Agentforce Contact Center Digital - Unlimited Edition | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 40 | 660 | 26400 | 2026-04-09 |
| Event Monitoring - Fee - LP1 | UK - FCA - Digital Engagement - Project Irwell #KY | 08 - Closed | 40 | 48.71757 | 1948.7028 | 2026-04-09 |
| Public Sector Foundation - Advanced - Unlimited Edition-LP1 | UK - FCA - Storage Uplift #KYC | 08 - Closed | -37 | 0 | 0 | 2026-04-07 |
| Data Storage (10GB) | UK - FCA - Storage Uplift #KYC | 08 - Closed | 3 | 5911.92 | 17735.76 | 2026-04-07 |
| Event Monitoring - Fee - LP1 | UK - FCA - Storage Uplift #KYC | 08 - Closed | -37 | 0 | 0 | 2026-04-07 |
| File Storage (10GB) | UK - FCA - Storage Uplift #KYC | 08 - Closed | 90 | 300 | 27000 | 2026-04-07 |
| Sandbox (Full Copy) - Fee | UK - FCA - Storage Uplift #KYC | 08 - Closed | -37 | 0 | 0 | 2026-04-07 |
| Sandbox (Partial Copy) - Fee | UK - FCA - Storage Uplift #KYC | 08 - Closed | -37 | 0 | 0 | 2026-04-07 |
| Salesforce Backup & Recover (1 GB) | THE FINANCIAL CONDUCT AUTHORITY Renewal 209260 Own | 05 Closed | 1877 | 71.88 | 134918.76 | 2026-04-06 |
| Change Data Capture | UK - FCA - Own Early Renewal (Currency change) #KY | 08 - Closed | 1 | 0 | 0 | 2026-04-06 |
| Backup & Recover Continuous Data Protection - (5 Objects) | UK - FCA - Own Early Renewal (Currency change) #KY | 08 - Closed | 1 | 33600 | 33600 | 2026-04-06 |
| Salesforce Backup & Recover (1 GB) | UK - FCA - Own Early Renewal (Currency change) #KY | 08 - Closed | 1877 | 54.6 | 102484.2 | 2026-04-06 |
| Agentforce Contact Center Digital - Unlimited Edition | UK - FCA - DE Courtesy #KYC | 08 - Closed | 40 | 0 | 0 | 2026-03-10 |
| Signature Success - Salesforce Platform - Add On Fee | UK - FCA - Flex Credits #KYC | Dead - No Decision | 1 | 412.44 | 412.44 | 2026-03-10 |
| Flex Credits (100k) | UK - FCA - Flex Credits #KYC | Dead - No Decision | 45 | 91.65552797 | 4124.49875883 | 2026-03-10 |
| Signature Success - Tableau - Fee | UK-TAB-THE FINANCIAL CONDUCT AUTHORITY - Quick Add | 08 - Closed | 50 | 132.48 | 6624 | 2026-02-10 |
| Tableau - Enterprise Subscription Plan - Creator (Server) | UK-TAB-THE FINANCIAL CONDUCT AUTHORITY - Quick Add | 08 - Closed | 50 | 662.4 | 33120 | 2026-02-10 |
| Signature Success - Tableau - Fee | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 20 | 80.64 | 1612.8 | 2026-01-10 |
| Signature Success - Tableau - Fee | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 2775 | 28.896 | 80186.4 | 2026-01-10 |
| Tableau Cloud - Enterprise Creator | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 1000 | 500 | 500000 | 2026-01-10 |
| Signature Success - Tableau | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 1 | 0 | 0 | 2026-01-10 |
| Tableau - Enterprise Subscription Plan - Viewer (Server) (Restricted Use) | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 2775 | 0 | 0 | 2026-01-10 |
| Tableau - Non-Production (Server) | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 1 | 0 | 0 | 2026-01-10 |
| Signature Success - Tableau - Fee | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 20 | 0 | 0 | 2026-01-10 |
| Signature Success - Tableau - Fee | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 2775 | 0 | 0 | 2026-01-10 |
| Signature Success - Tableau - Fee | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 1 | 0 | 0 | 2026-01-10 |
| Signature Success - Tableau | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 1 | 0 | 0 | 2026-01-10 |
| Tableau Cloud - Enterprise Explorer | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 20 | 403.2 | 8064 | 2026-01-10 |
| Tableau - Enterprise Subscription Plan - Explorer (Server) (Restricted Use) | UK- TAB - FCA - Tab Next Expansion | Dead - Duplicate | 20 | 0 | 0 | 2026-01-10 |
