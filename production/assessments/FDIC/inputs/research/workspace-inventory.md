---
title: "Workspace Inventory — Old Dominion University"
status: in-progress
tags: [dra, inputs, research, workspace]
source: "Google Drive resources linked to DRA-0001"
collected: 2026-06-01
---

# Workspace Inventory

> [!NOTE]
> Per-doc index of Google Drive resources linked to the engagement, with factual summaries. Source material for `dra-analyze-input` — not analysis. Do not hand-edit; re-run `dra-research` to refresh.

## Documents linked on the engagement record

### 1. ODU Executive Roadmap Session (May 11, 2026): Consultative Agenda
- **Type:** Google Doc · `1D83B8-t8ajbSlx9jW7s3hNQIF9ULLp48230n7bcQPhk`
- **Folder type:** Customer Strategy Docs · **Read in full ✓**
- **What it is:** The internal working agenda + DRA plan for the 5/11 kickoff. Far richer than an agenda — it's the team's consolidated pre-kickoff thinking.
- **Key content captured:**
  - **Objective:** partner with ODU leadership to connect institutional vision to a modern data strategy; co-create a roadmap toward a "future-ready, 'Agentic' university."
  - **Attendees (ODU):** Jimmy Patel (Dir. BI & Data Analytics / Interim Exec Dir, Enterprise Systems), Kirk Dewyea (CIO), Lisa Handy (AVP Data & Analytics), Matt Newton (AVP), Brian Easton (Mgr, Unified Comms & Collaboration), Sai Ratnakar Nidumolu (BI Developer).
  - **Internal talking points:** Business outcomes vs. product features; persona-centric processes; an *internal-only* note that there is **integration-team resistance to new tooling** and skepticism about migrating Informatica APIs → MuleSoft without addressing root pain.
  - **Potential data pain areas (with Slack thread citations):** fragmented integration landscape (MuleSoft vs. Informatica, no swim lanes, overstretched team); data silos limiting student success (**3 disconnected Salesforce orgs**, no unified student profile, **fraudulent application surge** needing real-time identity data); marketing analytics on manual spreadsheets (Excel→MCI, no campaign-to-enrollment attribution, WhatsApp not activated); no unified data governance (no catalog, no ownership model); platform overages & licensing risk (**124% file storage, 3,715% NBA overage**, OmniStudio license gap).
  - **4 candidate use cases:** (a) Student Success early intervention (Canvas LMS + Banner SIS + Salesforce → Data Cloud unified student profile + Agentforce risk monitoring); (b) Marketing & Enrollment (unify engagement w/ enrollment outcomes in Tableau, activate WhatsApp via MCE); (c) Integrated Campus / One-Stop + HR expansion (bi-directional data across R&A, Student Success, Advancement, HR orgs); (d) Data Governance (Informatica catalog + lineage → Data Cloud single source of truth).
  - **DRA Plan specifics:** Focus areas = frictionless student experience via automation + greater data maturity with **real-time Banner (SIS) ↔ CRM integration**. Expanded stakeholder list incl. Nikki Hodge (Enterprise Architect), CISO Kate Rhodes / Matt Thomas, business unit Doug Brown / Morgan Morrison / Ashley Miller. Salesforce DRA team: Werner (Global Data Strategy), Hannah Katinas (Informatica SE), David Egts (Field CTO, MuleSoft).
  - **Deliverables ODU expects:** clarity on which tool (MuleSoft vs Informatica) for which workload; future-state data architecture; prioritized roadmap (Cloud for Good input); student-experience impact mapping.
  - **Deeper focus areas (verbatim from ODU):** application-status assistant with deep integration (transcripts, FAFSA, financial aid); current static website chatbot they want to upgrade to a GPT-style feature; financial-aid paperwork navigation; real-time data for academic advisors (registration, holds); **Informatica API performance problems** on the homegrown "Monarch portal" — they need **sub-second APIs** for real-time data to homegrown apps.

### 2. ODU - Data Readiness Assessment Kickoff (deck)
- **Type:** Google Slides · `18ZEq4ET2RnbmjoyUApnwkoSh37neXE9npeXeGSwA5Us`
- **Folder type:** Customer Strategy Docs (marked Primary) · **Reviewed (125 slides; key slides captured)**
- **What it is:** The 5/11 customer-facing kickoff deck. Also the URL stored on the engagement's `Drive_Folder_URL__c`.
- **Key content captured:**
  - **Slide 4 — Partnership Summary:** vision to establish a **"One Monarch Nation"** platform; modernize digital capabilities, empower staff, unify the student journey; ambitious goals — **double ODU Global Enrollment, increase Undergraduate Retention, boost Graduation Rates**. Three pillars: Elevate the Student Experience / Achieve Operational Excellence / Ensure Scalable & Sustainable Growth.
  - **Slide 5 — One Monarch Nation:** CRM/Marketing team wants a comprehensive real-time view of the student; need roadmap alignment given the **Informatica acquisition**; need to understand the "why" behind using both Data Foundations products; data silos across ODU; fragmented integration landscape (MuleSoft + Informatica with no clear use-case direction); wants Salesforce guidance to maximize investment + executive alignment on Data Foundations.
  - **Slide 7 — Higher Education Data + AI Architecture (reference architecture):** layers = Backend Systems (SIS, LMS, Case Mgmt, Advancement, Ticketing/POS, Intranet, Agreement Mgmt, Finance/ERP); Integration (MuleSoft, Informatica — application integration, real-time connectivity, process orchestration, data integration, data governance, MDM, ELT); Data/Intelligence (Data Lake, Data360, identity resolution, segmentation & activation, semantic layer, data spaces); Experiences (BI/Analytics, agents: Recruiting Concierge, Student Success, Alumni Experience, Career Counselor).
  - **Slides 8–11 — DRA framing:** "Mission Ready Blueprint"; **Business First, Technology Second** assessment (Business Outcome/Use Case → Data Challenges → Capabilities Required → Solutions/Technology); the **Data Value Chain** (Unlock / Trust / Activate) with assessment areas: Connect (streaming, batch, real-time, zero copy), Integrate (APIs, apps, legacy), and analytics/predictions/personalization/segmentation under Activate.

## Other referenced docs (seen in Slack, not yet linked on the engagement record)

These were shared in-channel but are not (yet) `DRA_Drive_Resource__c` records — flag for the Architect to link:
- **DRA Survey Template** — doc `1iIjfFMRFMj4yVL3VxepepQnHxK7oZ3bvYYY4ytNM4BI` (David Egts, 5/19)
- **Gemini call notes** — docs `1No3O5tMn5n32d66joVYZaNm4rYKgGyALxg5EpA5BT0E`, `1SiWwRnUao7kiMp2I3WoOImjL2CssymBRBq15nk2bEYs` (5/19)
- **Gemini notes (Brian 1:1)** — doc `17AGH2kaPmlL9MVGrR_yuWxwNW_Pd255FOgsurLOkFU4` (5/26)
- **Current-state workbook (Amit)** — doc `18jL9saDRleRtO1m5KuCFBvLulrzlBd6lk9faW9YMPyE`
- **Shared Drive folder** for consolidating notes/recordings — `1vXyJciGwE6WN0NcTUx3Om1BocewLKGrl`

> [!NOTE]
> Gap: the survey, Gemini notes, and current-state workbook above are high-value inputs that aren't linked on the engagement yet. Recommend the Architect add them as `DRA_Drive_Resource__c` records and re-run research so they're captured. The Gemini interview/call notes in particular will feed `dra-analyze-input` once interviews begin.
