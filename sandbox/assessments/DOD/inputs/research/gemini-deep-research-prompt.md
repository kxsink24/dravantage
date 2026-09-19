---
title: "Gemini Deep Research Prompt — Hawaii State Department of Health (DOH)"
tags: [dra, inputs, research, prompt, gemini]
created: 2026-08-13
status: draft
---

# Gemini Deep Research Prompt — Hawaii State Department of Health (DOH)

## How to use

1. Open <https://gemini.google.com/>.
2. Select **Deep Research** mode.
3. Paste the prompt below.
4. Require source links for every material claim.
5. Save the resulting report in this folder as `gemini-deep-research.md`.

## Prompt

Build a comprehensive, public-record-only briefing for a Salesforce Data Readiness Assessment of the **Hawaii State Department of Health (DOH)** and its **Rural Health Transformation Program (RHTP)** work. The assessment codename is `Hawaii-Rural-Health`. Treat this as a SLED/public-sector engagement.

The internal team is trying to identify a focused, low-friction starting point rather than proposing a complete healthcare-data rearchitecture. Current internal signals point to rural-health outcomes, statewide health-data governance, the All-Payer Claims Database (APCD), the Hawaii Health Information Exchange (HHIE), clinical/claims data integration, grants and compliance management, provider coordination, and preparation for future RHTP/AHEAD-related work. These are hypotheses to validate, not established customer requirements.

Research the following:

1. **Organizational identity and mandate**
   - Hawaii DOH mission, statutory role, major health responsibilities, and relationship to SHPDA.
   - SHPDA's public mandate, leadership, programs, and relationship to RHTP.
   - Relevant state agencies, oversight bodies, public-health organizations, and healthcare ecosystem partners.

2. **Rural Health Transformation Program**
   - Hawaii's RHTP goals, funding structure, public timelines, procurements, grants, and stated outcomes.
   - Any public RHTP plans, notices, RFIs, RFPs, legislative materials, budget documents, or board/committee minutes.
   - Identify deadlines or funding-cycle events that could make a data-readiness assessment timely.

3. **Healthcare data and interoperability landscape**
   - Public information about Hawaii's APCD, HHIE, clinical data exchange, provider participation, payer participation, data-vault or data-warehouse arrangements, and relevant university or state data initiatives.
   - Publicly documented data gaps, missing populations, identity matching, data quality, interoperability, or data-sharing constraints.
   - Distinguish confirmed facts from internal hypotheses.

4. **Governance, privacy, and accountability**
   - Public laws, policies, governance structures, privacy requirements, consent requirements, cybersecurity obligations, and data-sharing agreements relevant to statewide health data.
   - Identify which organizations appear responsible for data ownership, stewardship, analytics, clinical action, grants administration, and public reporting.
   - Pay particular attention to whether the state is positioned as a data owner, data consumer, coordinator, funder, or policy authority.

5. **Strategic priorities and executive outcomes**
   - Public statements from the Governor, DOH, SHPDA, Medicaid, HHIE, rural-health leaders, and relevant committees.
   - Priorities involving rural communities, Native Hawaiian populations, homelessness, access to care, administrative burden, population health, infant mortality, value-based care, grants compliance, and health equity.
   - Find the outcomes that could anchor an executive story without leading with technology features.

6. **Technology and operating-model footprint**
   - Public references to Epic, HHIE, APCD platforms, Salesforce, Data Cloud, Health Cloud, MuleSoft, Informatica, Tableau, Marketing Cloud, Slack, cloud platforms, or other relevant systems.
   - Identify what is confirmed versus merely proposed or discussed by vendors.
   - Look for current integration patterns, data-sharing mechanisms, reporting workflows, and provider/state operating boundaries.

7. **Procurement and competitive context**
   - Recent and current Hawaii health, grants-management, data, analytics, interoperability, and rural-health procurements.
   - Named vendors, incumbent platforms, implementation partners, RFIs/RFPs, contract awards, and competitive alternatives.
   - Include Unite Us, Health Catalyst, Pacific Point, and any other publicly documented organizations only when supported by sources.

8. **Public pain signals and change readiness**
   - Audit findings, legislative testimony, public meeting minutes, news coverage, reports, procurement language, or public comments that reveal data, governance, staffing, administrative, or integration pain.
   - Signals about decision-making culture, accountability, stakeholder alignment, and the ability to execute cross-agency change.

9. **DRA implications**
   - Based only on cited public evidence, identify candidate business outcomes for a first focused discovery conversation.
   - Propose 3–5 possible low-friction starting use cases, ranked by evidence and feasibility. Examples may include grants/compliance visibility, rural-health hotspot reporting, provider coordination, APCD/clinical-claims analytics, or data-governance readiness—but do not assume any is correct.
   - For each candidate, state the likely business sponsor, data owner, operational owner, required data sources, governance risk, and measurable outcome.
   - Identify the customer-side stakeholders and persona gaps that must be validated before solution design.
   - Recommend the first 10 discovery questions, ordered business-outcomes-first and using the symptom → operational consequence → business impact approach.

## Evidence rules

- Cite every material claim with a direct source URL.
- Prefer official Hawaii government, DOH, SHPDA, Medicaid, HHIE, legislative, procurement, CMS, and public meeting sources.
- Use reputable news and research sources only as secondary evidence.
- Include publication date and access date for important sources.
- Separate **confirmed public facts**, **reasonable interpretations**, and **unknowns requiring customer validation**.
- Do not infer internal systems, vendor relationships, ownership, budgets, or requirements from Salesforce marketing material alone.
- Do not treat internal Slack statements as public facts.
- If a source is unavailable, contradictory, stale, or speculative, say so explicitly.
- Keep the report neutral and customer-centered; do not write a Salesforce product pitch.

## Deliverable format

Return:

1. Executive summary
2. Source-quality and confidence notes
3. Organizational and RHTP briefing
4. Data/interoperability landscape
5. Governance and accountability map
6. Strategic outcomes and compelling-event candidates
7. Procurement and competitive context
8. Candidate first-use-case shortlist
9. Stakeholder/persona map
10. Top discovery questions
11. Evidence gaps and validation plan
12. Full source list with URLs
