---
title: "Kickoff Deck Draft — Old Dominion University"
status: draft
tags: [dra, setup, kickoff-deck]
created: 2026-06-02
---

# ODU DRA — Kickoff Deck Draft (Outline)

> [!NOTE]
> Slide-by-slide **content outline** (not design) for the ODU kickoff, following the Data
> Foundation Advantage arc (`references/data-foundation-discovery.md` §1, §7). Each slide:
> title · bullet content (tailored to ODU where research allows) · a speaker note / why.
> Build the actual slides from ODU's existing kickoff deck (`18ZEq4…`) — this refines and
> focuses the content.

---

### Slide 1 — Title
- **Old Dominion University × Salesforce — Data Readiness Assessment**
- Kickoff · `[date]` · DRA Architect: Werner Watschke
- *Speaker note:* Keep it about ODU's mission, not our logo. One line: "a working session to connect your vision to a real data foundation."

### Slide 2 — Why we're here (outcomes, not technology)
- Reflect ODU's own language: **"One Monarch Nation"** — a unified, real-time, 360° student experience.
- ODU's stated goals: grow online/global enrollment, lift retention (→82% target), graduation (→57%), R1 ambitions.
- *Speaker note:* Lead with their published goals (from deep research / strategic plan). Earn the room by showing we did our homework before touching a single product name.

### Slide 3 — The tension: aspiration vs. today's reality
- ODU is **"Salesforce First"** (OMNI mandate) — but the authoritative student data lives in **Banner** and moves in **batches**.
- Layer the pressures: the **EVMS/health-sciences merger** (+1,440 students, a second institution's systems), **SCHEV outcomes-based funding**, and rising **AI/agent** expectations.
- *Speaker note:* This is the "create tension before the solution" slide (reference §7). Don't resolve it yet — let them feel the gap between the One-Monarch vision and batch reality.

### Slide 4 — Trapped data, distinct demands
- ODU's data is spread across **Banner (SIS), Canvas (LMS), Salesforce (3 orgs), Snowflake/analytics, health-sciences systems**.
- Demands on it: reporting, AI/agents, business-user access, the student experience.
- *Speaker note:* The classic Data Foundation left/right whiteboard, populated with ODU's actual systems. Ask: "what did we miss?" — engagement over narration.okay 

### Slide 5 — The Data Foundation: Unlock → Trust → Activate
- **Unlock** (Connect/Integrate/Understand) → **Trust** (Validate/Protect/Unify) → **Activate** (Decide/Orchestrate/Act).
- Where each tool plays: **Informatica** (bulk, governance, MDM), **MuleSoft** (real-time APIs, orchestration), **Data 360** (zero-copy, identity, semantic), **Tableau** (decide).
- *Speaker note:* This directly answers ODU's standing question — *which tool, when?* The "swim lanes" they've been asking for. Frame as capabilities first, products second.

### Slide 6 — The DRA: Business First, Technology Second
- The flow: **Business outcome → data challenges → capabilities required → solutions.**
- What the DRA assesses (nine capabilities, scored) and what it produces (current/target architecture, prioritized roadmap, business case).
- *Speaker note:* Set expectations that this is a diagnostic, not a pitch — and that the customer co-owns the output.

### Slide 7 — Target use case: "What's the status of my application?"
- A student asks once and gets a real, live answer spanning **application, transcripts, FAFSA, financial aid** — powered by real-time **Banner ↔ Salesforce** data.
- Why this one: high student-experience impact, concrete, and it exercises exactly the integration gap we need to solve first.
- *Speaker note:* This is ODU's own articulated use case (kickoff recording + agenda). Anchoring on it makes the whole assessment tangible. Confirm it's still the priority.

### Slide 8 — Alignment & outcomes (the decision gate)
- Confirm the focus area and define **"home run" outcomes** in ODU's words.
- Confirm sponsorship (Kirk), the internal champion/POC (Sai), and the working team.
- *Speaker note:* Don't leave kickoff without an explicit yes on scope + a definition of success. (Note for architect: as of research, Kirk's final go/no-go was still pending — use this slide to land it.)

### Slide 9 — How it works & what we'll ask of you
- Survey → remote interviews → half-day working session → executive readout.
- Time commitment by group (keep it light); timeline (~4-week target); logistics.
- *Speaker note:* Directly addresses Brian's #1 concern — clarity on weekly time commitment by stakeholder group. Be concrete and reassuring.

### Slide 10 — Next steps
- Survey goes out `[date]`; interviews scheduled by Sai + `[Casey]`; working session `[target]`; readout `[target]`.
- One ask today: confirm scope + name any missing stakeholders.
- *Speaker note:* End on momentum and a single, easy commitment.

---

## Tailoring used (for the architect)
- **ODU language/goals:** "One Monarch Nation", enrollment/retention/graduation targets, R1 — from deep research + kickoff deck.
- **Real systems:** Banner, Canvas, 3 Salesforce orgs, Snowflake, health-sciences systems.
- **Locked use case:** real-time application-status agent (kickoff recording, agenda).
- **Tool swim lanes:** Informatica/MuleSoft/Data 360/Tableau mapping (Data Foundation reference + kickoff deck slide 7).
- **Known concerns surfaced:** Brian's time-commitment worry (slide 9); Kirk's pending go/no-go (slide 8); MuleSoft-vs-Informatica ambiguity (slide 5).

## Thin spots to firm up before kickoff
- Confirm kickoff **date/time** and the **business stakeholders** beyond the IT/data core (the agenda doc named Doug Brown, Morgan Morrison, Ashley Miller — confirm).
- Confirm Kirk's **go/no-go** so slide 8 can be a confirmation rather than an ask.
