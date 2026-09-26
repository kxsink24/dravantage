---
title: "Strategic Alignment — Department of Veterans Affairs"
wiki_page: "01"
status: in-progress
tags: [dra, strategic-alignment]
sources: [inputs/interviews/2026-07-02, inputs/interviews/2026-07-08, inputs/interviews/2026-07-09, inputs/interviews/2026-07-16, inputs/interviews/2026-07-21, inputs/interviews/2026-07-23, inputs/interviews/2026-07-28, slack-C0B34EGEH55, slack-C09S86YPAS2, inputs/research/2026-08-03-gemini-va-ccc-deep-research, inputs/research/2026-08-03-benioff-linkedin-va-missionforce]
last_analyzed: 2026-08-03
---

# Strategic Alignment

> [!NOTE]
> Populated from 7 technical working session transcripts (Jul 2 – Jul 28, 2026) and two Slack channels. **No formal business stakeholder interviews have occurred yet.** Strategic themes are inferred primarily from VA OIT voices (Fernando Gonzalez, Mathew Magesh). Confidence is Medium until Julie Fulmer, Brian Mahlum, and Rob Orifici are interviewed.

**Maps to:** DRA Report Section 1 — Vision & Case for Change
**Drives output:** [[06-target-state-architecture]], [[07-roadmap]]

---

## Mission and Mandate

The Department of Veterans Affairs exists to serve those who served — providing healthcare, benefits, and services to America's 9 million+ enrolled veterans and their families. The VA is the second-largest federal department by budget and one of the most operationally complex, running parallel IT tracks across VHA (Veterans Health Administration), VBA (Veterans Benefits Administration), and NCA (National Cemetery Administration).

**Active mandate driving this engagement:** VA leadership is executing a Consolidated Contact Center (CCC) program — one of the largest contact center consolidation initiatives in US federal government history. The program consolidates **60 million+ annual calls** across **280+ decentralized, siloed call center entities** and approximately **80,000 contact center users** across all VA business lines onto a single platform. It is governed by the **Enterprise Contact Center Council (ECCC)**, with an RFx procurement solicitation in active preparation. The CCC is a statutory-level initiative — not a discretionary IT project — and is tied to the VA's veteran experience modernization obligations. VA has established 1-800-MyVA411 (1-800-698-2411) as the unified front-door entry point.

**Contract size:** A **$1.6 billion Agentic Enterprise License Agreement** under the **Missionforce** platform with Salesforce is the commercial foundation for this program. Missionforce is the official Salesforce brand for this engagement — bundling Agentforce, Slack, Data 360, MuleSoft, and Tableau into one trusted government foundation. Marc Benioff publicly announced the VA partnership (LinkedIn, ~Jul 27, 2026), framing it as empowering **467,000 VA employees** to transform how care and services are delivered. Source: [[inputs/research/2026-08-03-benioff-linkedin-va-missionforce]].

> [!NOTE]
> **80,000 vs. 467,000:** The CCC program scope is ~80,000 contact center users being migrated from 280+ nodes. The full Missionforce ELA covers all 467,000 VA employees enterprise-wide. The CCC is the highest-visibility first deployment within the broader enterprise agreement.

**Compliance constraints:** All technology must meet **FedRAMP High + DoD IL4** authorization (per Fernando Gonzalez's HLAD — this is a stricter tier than previously assumed in working sessions). For VHA / Health Cloud scope, the platform is also explicitly **HIPAA-ready** (per Benioff announcement). This gates the availability of specific Salesforce features (e.g., Agentforce Voice not yet on GovCloud; Marketing Cloud SMS/mass messaging FedRAMP authorization pending; commercial feature parity may be 12–18 months behind GA).

---

## Strategic Priorities (12–24 month horizon)

- **Consolidated Contact Center (CCC):** Consolidate ~80,000 VA contact center agents across VHA, VBA, and all orgs onto a unified Salesforce platform integrated with Genesys CCaaS via MuleSoft. National Contact Centers (25,000 users) go first; local contact centers follow in subsequent phases. — *Source: Slack #va-contact-center-consolidation-oppty, multiple sessions*
- **Data and Integration Foundation (build-once):** Establish MuleSoft as the enterprise integration backbone and Data Cloud 360 as the unified veteran data layer *before* System Integrators onboard. Fernando Gonzalez is "fighting this every single day" — the risk is SIs defaulting to siloed CRM implementations that bypass the data foundation entirely. — *Source: [[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- **Unified Veteran Record:** Enable a single, reconciled view of each veteran across health, benefits, and service records, resolving identity across currently fragmented systems (VistA, Cerner, Dynamics, Salesforce Health Connect). — *Source: [[inputs/interviews/2026-07-02-va-ccc-architecture]]*
- **AI/Agentforce Deployment:** Deploy Agentforce for veteran-facing self-service and agent-assisted employee workflows, across omnichannel (voice via Genesys, email, chat, SMS). Agentforce is explicitly phase 2+ — dependent on the data and integration foundation being in place first. — *Source: [[inputs/interviews/2026-07-16-va-ccc-architecture]], [[inputs/interviews/2026-07-23-va-ccc-architecture]]*
- **RFx Architecture Influence:** Deliver the execution-ready Data & Integration architecture document by Aug 24, 2026 to be incorporated into the RFx solicitation — forcing incoming System Integrators to bid against the Salesforce/MuleSoft/Data Cloud architecture design. — *Source: Slack #va-ccc-architecture-planning, 2026-08-02*

---

## Compelling Event

VA is racing a hard deadline of **August 24, 2026** to deliver a complete, execution-ready Data & Integration architecture package (MuleSoft + Data Cloud 360 + Genesys integration layer) that will be embedded directly into the CCC RFx solicitation. Salesforce was specifically named in the July 27 RFI as the consolidation technology of choice. Delivering by 8/24 forces incoming SIs to bid against the Salesforce architecture design rather than propose alternatives — making this the leverage point for the entire program.

**Scale of what's at stake:** The official VA RFI (SAM.gov) specifies a **24-month execution window** to migrate **280+ call centers** handling **60 million+ calls per year**. The First Call Resolution baseline is **72.7%** and the target is **100%**. This is not a pilot — it is the full CCC program.

**Competitive context:** Competing against Microsoft. The existing Dynamics 365 ecosystem (8 named VRM apps, Cisco Finesse, D365 OmniChannel, Power Pages, Power Apps, Power Automate, Power BI, KingswaySoft, Dataverse) creates a natural Microsoft renewal path. The architecture deliverable must make the data and AI differentiation concrete — and must be embedded in the RFx before SIs are selected so it becomes a contractual requirement rather than a preference.

**Governance approvals required:** Enterprise Contact Center Council (ECCC) alignment; Deputy Secretary Dr. Paul R. Lawrence (performing delegable CIO duties) IT approval; NAII red-teaming clearance before Agentforce autonomous agents go live for veteran voice interactions.

---

## Magic Wand Responses

*No formal magic wand question has been asked of VA business stakeholders yet. The following are inferred from technical session conversations.*

**Fernando Gonzalez (VA OIT Technical Lead):**
> "We are going to build a solid data foundation so that we build it once and then it's just a matter as these contact centers come over. It's not going to be a data problem now; it's just connecting the new contact center into this strong data foundation that's already been built."
— *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

> "Without the middleware of Mulesoft and integrating to all of this VA systems, it doesn't matter how many front ends you have, you're not going to get any data. So to me...the heart of this thing is that integration layer that ties to the rest of the VA."
— *[[inputs/interviews/2026-07-02-va-ccc-architecture]]*

> [!NOTE]
> Formal magic wand responses are needed from: Julie Fulmer (Business Sponsor), Brian Mahlum (Business stakeholder), Rob Orifici (OIT Executive). Their answers will likely differ significantly from the OIT technical track — leaders want strategic outcomes (veteran experience, cost per contact), not architecture certainty.

---

## Sponsorship

| Role | Person | Title | Status |
|---|---|---|---|
| Business Sponsor | Julie Fulmer | Executive in Charge, Consolidated Contact Center (oversees VHA, VBA, all CCC orgs) | suspected — not yet interviewed |
| IT Sponsor | Mark Ennis | Program Lead Manager, OIT | confirmed — actively engaged with Salesforce team |
| Funding Sponsor | Rob Orifici | OIT Executive | suspected — aligned on ELA and CCC licensing needs |

> [!WARNING]
> **Sponsorship gap:** The Business Sponsor (Julie Fulmer) and Funding Sponsor (Rob Orifici) have not been formally interviewed. Mark Ennis is confirmed as the IT execution owner but is process-driven and not the budget authority. The three-legged stool is only one leg in. This is a risk to the DRA's credibility with executive audiences — recommendations that don't have Julie Fulmer's fingerprints on them may not land.
