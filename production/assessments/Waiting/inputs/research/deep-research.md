---
title: "Deep Research — The Financial Conduct Authority"
tags: [dra, inputs, research, deep-research]
created: 2026-09-16
status: draft
source: web-search-manual
---

> [!NOTE]
> This file was generated **without** the `deep-research` skill and **without** a general `WebSearch` tool — neither was available this session. Coverage below comes from a small number of manual `WebFetch` calls against known/guessed public URLs (Wikipedia, fca.org.uk). Several targeted fca.org.uk URL guesses (strategy page, business plan page, "what we do" page) returned 404 and were not recoverable without search. Every claim below is cited to the specific URL it came from. Anything not covered is called out explicitly in "Coverage gaps" rather than inferred. Treat this as a partial pass — re-run with the `deep-research` skill or a working `WebSearch`/Gemini Deep Research tool (see `gemini-deep-research-prompt.md`) for full 8-point coverage.

## Sources fetched

1. https://en.wikipedia.org/wiki/Financial_Conduct_Authority — fetched successfully.
2. https://www.fca.org.uk/news — fetched successfully.
3. https://www.fca.org.uk/about/how-we-operate/our-strategy — 404
4. https://www.fca.org.uk/publications/corporate-documents/our-strategy-2025-30 — 404
5. https://www.fca.org.uk/about/what-we-do — 404
6. https://www.fca.org.uk/publications/corporate-documents/our-strategy — 404
7. https://www.fca.org.uk/publications/strategy/our-strategy-2025-30 — 404
8. https://www.fca.org.uk/publications/corporate-documents/business-plan-2025-26 — 404

## 1. Org identity & structure

Source: [Wikipedia — Financial Conduct Authority](https://en.wikipedia.org/wiki/Financial_Conduct_Authority)

- The FCA is the conduct regulator for ~58,000 financial services firms and financial markets in the UK, and the prudential regulator for over 48,000 of those firms not supervised by the Prudential Regulation Authority (PRA).
- Established 1 April 2013, taking over conduct regulation from the former Financial Services Authority (FSA).
- Operating budget: £758.3 million for 2023/2024, funded by fees on regulated firms (not government funding).
- Chief Executive: Nikhil Rathi, reappointed April 2025 for a second term running through 2030.
- Chair: Ashley Alder, in post since 2023.
- The industries it regulates collectively employ ~2.2 million people and contribute an estimated £65.6 billion in tax annually (per the Wikipedia article's cited figures).

## 2. Strategic initiatives

**Coverage gap.** All direct attempts to reach the FCA's own strategy/business-plan pages (its 2025–2030 strategy document, business plan 2025/26, "what we do" overview) 404'd under manually guessed URLs. No `WebSearch` tool was available to locate the correct current URL. This point is **not confirmed via the public record in this pass** — do not infer FCA strategic priorities from Slack chatter alone; corroborate with a real fetch of the FCA's official strategy page in a follow-up run.

What can be said with a citation: the FCA's own `/news` page (fetched 2026-09-16) shows recent public leadership commentary on AI regulation, credit markets, fintech, pension technology, and financial crime as active topics of FCA speeches — see "Recent news," below — which is suggestive of ongoing strategic focus areas but is not the strategy document itself.

## 3. Regulatory environment

Source: [Wikipedia — Financial Conduct Authority](https://en.wikipedia.org/wiki/Financial_Conduct_Authority)

- The FCA regulates conduct across retail and wholesale financial services and is the prudential regulator for firms not covered by the PRA (i.e., most firms other than the largest banks/insurers).
- **Coverage gap**: no public-record confirmation this pass of the FCA's specific stance on agentic AI, AML modernization, or cyber/operational resilience beyond what Slack already surfaced internally (Slack signals are documented in `slack-history.md` and should not be treated as public-record corroboration).

## 4. Technology footprint

**Coverage gap — not found this pass.** No public source was reached that names the FCA's technology stack (Salesforce, Snowflake, MuleSoft, Informatica, cloud provider, Databricks, Tableau, Palantir, etc.). This would typically require case studies, procurement notices (Contracts Finder / Find a Tender), or vendor press releases — none of which were reachable without a working search tool. Internal Slack history (see `slack-history.md`) already surfaces several vendor names (Informatica, Palantir, Cloudera, Talend, Deloitte-delivered Einstein/Agentforce work) as **internal, not public-record**, signals — flagged there, not restated here as confirmed fact.

## 5. Recent news (last 12 months)

Source: [FCA News](https://www.fca.org.uk/news), fetched 2026-09-16

As of the fetch date, the FCA's news page showed:
- Multiple recent enforcement actions and firm bans (specific firms not itemized in this summary — see source page for current list).
- Firm liquidations reported among regulated entities.
- Consumer-facing initiatives: a Child Trust Fund maturity-reminder campaign, and a publicized study noting that young investors trust AI more than traditional media for financial information.
- Crypto-asset guidance activity.
- Leadership speeches on: AI regulation, credit markets, fintech, pension technology, and financial crime — titles/dates not captured in this pass (news page listing only; individual speech pages were not fetched).

Separately, Wikipedia's controversies section (independently useful as recent-history context, not strictly "last 12 months") documents:
- November 2024: an All-Party Parliamentary Group (APPG) report describing the FCA as "incompetent at best, dishonest at worst."
- February 2025: a supplementary APPG report reiterating criticism.
- The WealthTek case: an £81.4 million shortfall/fraud matter involving FCA supervisory failures.

## 6. Competitive / peer-regulator context

**Coverage gap — not found this pass.** No comparative material on peer regulators (e.g., PRA, Bank of England, EU/ESMA, US SEC/FINRA) or how the FCA's data/AI posture compares was reachable via the two successful fetches. Would need targeted search, not available this session.

## 7. Pain signals (public record)

Source: [Wikipedia — Financial Conduct Authority](https://en.wikipedia.org/wiki/Financial_Conduct_Authority)

- APPG's November 2024 and February 2025 reports are the strongest public pain signal: explicit parliamentary criticism of FCA competence and conduct.
- WealthTek: an £81.4M shortfall/fraud case surfaced as a supervisory-failure example — useful as an external, citable pain point (regulatory/oversight gap), distinct from and corroborating (not proving) the internal "audit finding / modernization debt" narrative referenced in Slack.

## 8. Cultural signals

**Coverage gap — not found this pass.** No leadership interview or "how decisions get made" material was reached. The only named leadership facts available are the CEO/Chair identities and tenure above (Wikipedia). No public interview content was fetched.

## Coverage summary (per skill's 8-point structure)

| # | Area | Status |
|---|------|--------|
| 1 | Org identity & structure | ✅ Covered (Wikipedia) |
| 2 | Strategic initiatives | ⚠️ Not confirmed — 404s on all direct attempts |
| 3 | Regulatory environment | ⚠️ Partial — general scope only, no AI/AML/cyber specifics |
| 4 | Technology footprint | ❌ Not found |
| 5 | Recent news (12mo) | ✅ Partial — news page fetched, but no per-item dates/depth |
| 6 | Competitive context | ❌ Not found |
| 7 | Pain signals | ✅ Covered (APPG reports, WealthTek) |
| 8 | Cultural signals | ❌ Not found |

**Recommendation:** re-run Step 4a with either the `deep-research` skill (if it becomes available) or the Gemini Deep Research web UI using `gemini-deep-research-prompt.md` — that will very likely close gaps #2, #4, #6, #8 which require actual search rather than URL-guessing.
