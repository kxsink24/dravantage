---
title: "Gemini Deep Research Prompt — The Financial Conduct Authority"
tags: [dra, inputs, research, deep-research, gemini]
created: 2026-09-16
status: draft
---

> [!NOTE]
> Paste the prompt below into the [Gemini Deep Research](https://gemini.google.com/) web UI (select the "Deep Research" mode before submitting). This gives a second, independently-sourced perspective to cross-check against `deep-research.md`, which this run had to produce via a manual `WebFetch` fallback (no `deep-research` skill or `WebSearch` tool was available in this session) and which left several coverage gaps — strategic initiatives, technology footprint, competitive context, and cultural signals were not confirmed via the public record. Once Gemini returns a report, save its output alongside this file (e.g. `deep-research-gemini.md`) and reconcile the two before moving to `dra-analyze-input`.

## Prompt to paste into Gemini Deep Research

```
Research the Financial Conduct Authority (FCA), the UK's conduct and prudential regulator for financial services firms, for a data and AI readiness assessment. This is for the GPS Federal / financial-regulator segment context. Cover the following eight areas, and for each one cite your sources with URLs. If something is unknown or unfindable, say so explicitly rather than inferring or speculating — stay grounded in the public record.

1. Org identity & structure — mission, size, budget, regulatory scope, leadership (CEO, Chair, senior executive team), organizational structure.
2. Strategic initiatives — current and upcoming published strategy (e.g. any "Strategy 2025-2030" or annual business plan), stated priorities, modernization or digital transformation programs, any explicit AI/data strategy.
3. Regulatory environment — the FCA's own regulatory remit and posture on AI/agentic AI, anti-money-laundering (AML), operational resilience, and cyber security, both as a regulator and as a regulated-adjacent public body itself.
4. Technology footprint — any public references (press releases, case studies, procurement notices, conference talks, job postings) to the FCA's technology vendors or platforms: Salesforce, Snowflake, MuleSoft, Informatica, AWS/Azure/GCP, Databricks, Tableau, Palantir, or similar.
5. Recent news (last 12 months) — significant announcements, leadership changes, enforcement actions, reports, or public statements, with dates.
6. Competitive / peer context — how the FCA compares to peer regulators (e.g. Bank of England/PRA, EU/ESMA, US SEC/FINRA) in terms of data and technology modernization, if such comparisons exist in the public record.
7. Pain signals — publicly documented criticism, audit findings, parliamentary reports, or incidents suggesting operational, data, or technology challenges (e.g. any APPG reports, National Audit Office findings, or high-profile supervisory failures).
8. Cultural signals — leadership interviews, public statements, or reporting that reveal how the organization makes decisions, its risk appetite, and its stance toward innovation/technology adoption.

Please provide inline citations for every factual claim.
```

## Known partial findings from this session's manual pass

(For cross-checking against Gemini's output — see `deep-research.md` for full detail and sources.)

- CEO Nikhil Rathi (reappointed April 2025 through 2030); Chair Ashley Alder (since 2023).
- FY2023/2024 operating budget: £758.3M; ~58,000 regulated firms; prudential regulator for 48,000+ firms not covered by the PRA.
- November 2024 and February 2025 APPG reports critical of FCA competence/conduct ("incompetent at best, dishonest at worst").
- WealthTek case: £81.4M shortfall/fraud, cited as a supervisory-failure example.
- FCA news page (fetched 2026-09-16) shows active leadership commentary on AI regulation, credit markets, fintech, pension technology, and financial crime — titles/dates not yet captured.
- Strategic-initiatives, technology-footprint, competitive-context, and cultural-signals areas were **not** confirmed via public sources this session — direct fetches to the FCA's own strategy/business-plan/what-we-do pages all 404'd under guessed URLs.
