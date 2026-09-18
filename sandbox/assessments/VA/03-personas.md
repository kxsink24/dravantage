---
title: "Personas — Department of Veterans Affairs"
wiki_page: "03"
status: in-progress
tags: [dra, personas, stakeholders]
sources: [inputs/interviews/2026-07-02, inputs/interviews/2026-07-16, inputs/interviews/2026-07-21, inputs/interviews/2026-07-23, inputs/interviews/2026-07-28, inputs/research/2026-08-03-gemini-va-ccc-deep-research]
last_analyzed: 2026-08-03
---

# Personas

> [!NOTE]
> All 7 transcripts are technical working sessions between the Salesforce SE team and VA OIT (Fernando Gonzalez, Mathew Magesh). **No formal business stakeholder or Data Leader interviews have occurred.** Business Leader, Business Worker, and Data Leader personas are based on contextual inference and Slack signals — not direct discovery interviews. Confidence is noted for each.

**Maps to:** DRA Report Section 3 — Target State Experience
**Drives output:** [[06-target-state-architecture]], readout deck stakeholder slides

---

## Executive Stakeholder Registry (Public Record — from Gemini Research)

> [!NOTE]
> The following executive stakeholders were identified in public VA sources (VA.gov, RFI filings, federal tech media) via Gemini deep research. These are the decision-makers above the working-session level. None have been formally interviewed for this DRA. Source: [[inputs/research/2026-08-03-gemini-va-ccc-deep-research]].

| Executive | Title | Org | Strategic Focus |
|---|---|---|---|
| Douglas A. Collins | Secretary of Veterans Affairs | Executive Leadership | Agency modernization mandate; budget execution; veteran experience |
| Dr. Lynda C. Davis | Chief Veterans Experience Officer | Veterans Experience Office | Department-wide CX framework; VSignals feedback; customer service policy |
| Barbara C. Morton | Deputy Chief Veterans Experience Officer | Veterans Experience Office | CX tools operationalization; journey mapping; interagency scaling |
| Katie Cravens | Executive Director, Multi-Channel Technology | VEO Directorate | Multi-channel contact technology; telephony integration; digital channels |
| Jennifer Purdy | Executive Director, CX Tools & Implementation | VEO Directorate | Build/test/deploy CX tools; employee enablement solutions |
| Denise Kitts | Executive Director, Enterprise Measurement & Design | VEO Directorate | VSignals survey architecture; predictive analytics; CX measurement |
| Paul R. Lawrence | Deputy Secretary / Acting CIO | Office of Information & Technology | IT infrastructure; cybersecurity; software acquisition; cloud operations |
| Gary Shatswell | Nominated Asst. Secretary for IT & CIO | Office of Information & Technology | Digitally native processes; AI guardrails; cloud modernization |
| Zachary Schwartz | Principal Deputy Asst. Secretary | Office of Information & Technology | Enterprise IT execution; engineering resources; contractor integration |

> [!WARNING]
> **Readout audience gap:** The Aug 24 readout is scoped to Mark Ennis (OIT Program Lead). The actual program decision-makers are Dr. Lynda C. Davis (Chief VEO) and Paul R. Lawrence (Acting CIO). The VEO directorate (Katie Cravens — Multi-Channel Technology; Jennifer Purdy — CX Tools) owns the operational requirements that the architecture must satisfy. Recommendations that don't connect to VEO priorities may not land at the executive level.

---

## Business Leader

*Julie Fulmer (CCC Executive), Brian Mahlum (VA business stakeholder), Dr. Lawrence (Enterprise Council), Dr. Lynda C. Davis (Chief VEO), Rob Orifici (OIT Executive)*

### Current State Pain Points

> [!WARNING]
> **Not yet interviewed.** The following is inferred from OIT team descriptions of leadership behavior and Slack channel context. Direct quotes from business leaders are not available.

- Leadership expects AI-powered contact center capabilities to be available immediately upon contract award — Fernando describes this as a recurring communication challenge across multiple stakeholders. The "flip a switch" expectation is an active pain point the OIT team manages constantly.
- The Enterprise Council (Dr. Lawrence, Dep. Sec. level) must approve the final vendor selection for CCC — this is a high-stakes, politically visible decision. The council is described as prioritizing consensus between business and IT before moving forward.
- Rob Orifici (OIT Executive) has been actively aligning ELA licensing needs with Mark Ennis to ensure CCC product needs are included in the enterprise agreement — suggesting the current licensing state is fragmented and unclear.
- The program has been operating under a competitive evaluation (Salesforce vs. Microsoft) that creates uncertainty about architecture investment prior to formal award.

### Desired Outcomes (Target State Wins)

- A single executive dashboard showing veteran contact center performance across all lines of business — one number for wait times, resolution rates, and veteran satisfaction, not 14 separate Dynamics reports.
- Confidence that AI capabilities will arrive on a defined, defensible timeline — not as a perpetual future-state promise.
- Architecture that forces incoming SIs into a defined playbook, reducing program risk and preventing the "mish-mash of different pipes" outcome Fernando describes as the default without governance.

### Relevant Quotes

> "We're trying to show people and explain it. And in some cases we're trying to sell them the idea... The easier it is to explain, the easier they'll sign the check." — Fernando Gonzalez (describing leadership communication), *[[inputs/interviews/2026-07-21-va-ccc-architecture]]*

### Confidence Level

**Low** — based on 0 direct interviews; inferred from OIT team descriptions. **Julie Fulmer and Brian Mahlum interviews are high priority before the readout.**

---

## Business Worker

*VA contact center agents (VHA, VBA lines), claims processors, benefits counselors*

### Current State Pain Points

> [!WARNING]
> **Not yet interviewed.** No direct worker interviews have occurred. The following is inferred from system architecture discussions.

- Contact center agents currently navigate multiple systems — at minimum Dynamics (for their program line) and potentially separate health record systems — to answer a single veteran's question. There is no unified agent workspace.
- Disability benefits agents work entirely in Dynamics. Health benefits agents work in VA Health Connect (Salesforce HealthCloud). These two groups cannot see each other's data.
- There are ~80,000 contact center users across VA. The scale of daily friction multiplied across this population represents enormous operational cost — but no specific productivity metrics have been surfaced in the sessions reviewed.

### Desired Outcomes (Target State Wins)

- A single Salesforce agent workspace showing the full veteran profile — health enrollment, benefits status, open cases, prior contact history — without switching applications.
- AI-generated case summaries and suggested responses that reduce handle time and help newer agents match the performance of experienced ones.
- Omnichannel routing (voice via Genesys, email, chat) that brings the veteran's context to the agent before they pick up the call.

### Confidence Level

**Low** — based on 0 direct interviews. **Worker-level discovery is the largest gap in the current assessment.** Recommend a focused Module 2 session with 2–3 contact center supervisors and frontline agents before the readout.

---

## IT Leader

*Mark Ennis (PLM, OIT), Rob Orifici (OIT Executive), Fernando Gonzalez (OIT Technical Lead)*

### Current State Pain Points

- MuleSoft exists but is not used as an enterprise strategy — Fernando describes using only 10% of its potential, with no centralized registry, no documented patterns, and no reuse mandate. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- DTC governance creates structural delays: 6+ months to provision Agentforce access, no published roadmap for SIs. The team doing the architecture cannot move at the pace the program demands. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- FedRAMP compliance gates create a 12–18 month lag between commercial Salesforce feature availability and GovCloud availability. Agentforce Voice — the capability required for real-time AI in the contact center — is not yet on GovCloud. — *Slack #va-contact-center-consolidation-oppty*
- The program is operating in a competitive evaluation environment (Salesforce vs. Microsoft), which creates architecture uncertainty — SI partners cannot fully commit to an architecture until the contract is formally awarded.

### Desired Outcomes (Target State Wins)

- MuleSoft repositioned as the mandatory enterprise integration backbone — every SI follows the same patterns, uses the same registry, and does not build point-to-point integrations.
- DTC governance reformed from a bottleneck into an enabler — defined patterns, faster provisioning, published playbook for SIs.
- A phased architecture that is defensible to the Enterprise Council — phases mapped to realistic FedRAMP availability dates, not commercial roadmap promises.

### Discovery Questions (from deck)

- *What is your approach to maintaining a unified integration strategy across your applications and programs?*
- *How are you currently handling data quality and governance to ensure your enterprise data is secure, compliant, and acting as a single source of truth?*
- *In what ways is your strategy supporting your mission, and what obstacles do you foresee regarding the AI imperative?*

### Relevant Quotes

> "If DTC is not going to give out the access to these things or have the tool ready and have governance in place before we can give any access, this is not going to go anywhere. We need to establish the right way so that SIs have one way to do it and they have to follow that defined pattern." — Fernando Gonzalez, *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*

> "A lot of people think it's flip a switch. I'm going to guess that even way up high some people think you guys can just come in and flip a switch and that's not going to be the case, right?...because of governance, funding, political alignment...laws that we have to adhere to." — Fernando Gonzalez, *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*

### Confidence Level

**High** — based on 7 sessions with Fernando Gonzalez and Mathew Magesh (VA OIT). This is the best-documented persona in the assessment.

---

## IT Worker

*Mathew Magesh (VA OIT), Fernando Gonzalez (VA OIT), VA integration engineers*

### Current State Pain Points

- No centralized API registry — integration engineers have no authoritative reference for what APIs exist, what they do, or how to connect to them. Each project rediscovers and re-builds. — *[[inputs/interviews/2026-07-28-va-ccc-architecture]]*
- Dynamics application decomposition is an active work item (Mathew Magesh working on it) — but there are 14 applications to document, each with its own data model and integration pattern. — *[[inputs/interviews/2026-07-16-va-ccc-architecture]]*
- Access provisioning is slow — working sessions repeatedly reference delays getting tools, environments, or access that the team needs to make progress. — *all sessions*
- The Galaxy portal (architecture visualization) is a manual artifact maintained by the team — it is not generated from system metadata or integrated with any configuration management database. — *[[inputs/interviews/2026-07-08-va-ccc-architecture]], [[inputs/interviews/2026-07-09-va-ccc-architecture]]*

### Desired Outcomes (Target State Wins)

- A MuleSoft API registry where integration patterns are documented, discoverable, and reusable — so the next project starts with existing APIs rather than rebuilding from scratch.
- Defined SI integration patterns that incoming vendors must follow — reducing the burden of policing architecture compliance after the fact.
- Agentforce and Data Cloud provisioned and accessible — so the team can actually build and validate the architecture they are designing.

### Relevant Quotes

> "It also derisks the entire implementation because it's not like you're going to do a big bang. You're going to do this in stages. So you build that foundation and then you can pick and choose which ones you're going to move over." — Fernando Gonzalez, *[[inputs/interviews/2026-07-09-va-ccc-architecture]]*

### Confidence Level

**High** — Fernando Gonzalez and Mathew Magesh are both IT Worker / IT Leader hybrids; their detailed technical perspective is well-documented across all 7 sessions.

---

## Data Leader

*No identified CDO, CDAO, or Chief AI Officer role at VA for this engagement.*

### Current State Pain Points

- Data governance authority appears to be split between DTC (access/provisioning governance) and individual program OIT teams (data model ownership). There is no single-threaded data governance owner identified in any session.
- FedRAMP AI governance requirements are real and enforced, but they operate as a compliance gate rather than a strategic data governance function.
- No data catalog, lineage tracking, or data quality program is mentioned in any session.

### Confidence Level

**Low** — no Data Leader identified or interviewed. **Recommend asking Fernando or Mark Ennis who owns data governance and data quality at the enterprise level before the readout.**

**Sub-type present:** Unknown — likely distributed between DTC (Protect/compliance) and individual program owners (Validate/quality). No CDAO or CDO role identified.

---

## Data Worker

*VA data engineers, integration engineers (unnamed in sessions)*

### Current State Pain Points

- Not interviewed. Inferred: the same fragmented integration landscape that IT Workers navigate creates pipeline maintenance burden for data engineers — inherited integrations, no lineage, no quality monitoring.

### Confidence Level

**Low** — no direct interviews. This persona may be effectively combined with IT Worker at VA.

---

## Persona Gaps

| Gap | Impact | Recommended Action |
|---|---|---|
| **Business Leaders not interviewed** (Julie Fulmer, Brian Mahlum) | Business outcomes framing is thin; readout may not resonate with executives | Schedule 30-min session with Julie Fulmer before Aug 24 readout |
| **Business Workers not interviewed** | No worker-level pain points; cannot quantify operational friction | 2–3 contact center supervisors/agents; Module 2 format |
| **Data Leader not identified** | Governance recommendations lack an owner to hand them to | Ask Fernando/Mark Ennis who owns enterprise data governance |
| **Data Workers not interviewed** | Pipeline/quality dimension missing | Can be combined with IT Worker follow-up |

> [!WARNING]
> The Aug 24 readout is for Mark Ennis — an IT Leader. But the audience that needs to approve the program budget and direction is the Enterprise Council (Business Leaders). The current assessment gives strong coverage for an IT-audience readout but needs the Business Leader and Business Worker dimensions filled in before the deliverable can speak to executive sponsors.
