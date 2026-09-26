---
title: "Email Templates — Old Dominion University"
status: draft
tags: [dra, setup, email]
created: 2026-06-02
---

# ODU DRA — Email Templates (Draft)

> [!NOTE]
> Working drafts for the architect to refine and send — not auto-sent. Framing is pre-filled
> from the engagement record and research (compelling event, sponsor, locked use case).
> `[confirm]` marks anything research didn't fully nail down. Tone: executive, specific,
> outcome-first.

---

## 1. Kickoff invitation

**To:** Kirk Dewyea (CIO, sponsor); Jimmy Patel; Matt Newton; Brian Easton; Sai Nidumolu; Lisa Handy; + business stakeholders `[confirm]`
**Cc:** Justin Dolan, Matt Springett (account team); Cloud for Good (Noah Hunter, Josh Kidd)
**Subject:** ODU Data Readiness Assessment — Kickoff & What to Expect

Hi all,

Building on our planning conversations, we're excited to formally kick off the **Old Dominion University Data Readiness Assessment (DRA)**. The goal is simple: connect ODU's "One Monarch Nation" vision to a modern, real-time data foundation — and leave you with a clear, prioritized roadmap to get there.

**Why now:** ODU has committed to a Salesforce-first foundation, but the authoritative student data still lives in Banner and moves in batches. As you integrate the health-sciences programs and push toward your enrollment, retention, and graduation goals, the gap between that aspiration and real-time reality is the thing worth closing first — starting with the use case you flagged: *a student being able to ask "what's the status of my application?" and get a real, live answer.*

**What the DRA produces:**
- A current- and target-state data architecture (where MuleSoft, Informatica, and Data 360 each fit — clear swim lanes)
- A prioritized **Crawl / Walk / Run** roadmap anchored on that first use case
- A view of where you stand across the nine data capabilities, and the business case for moving

**What we'll ask of your team** (it's not a heavy lift):
- Attend the kickoff (~60 min)
- Complete a short discovery survey (~10 min)
- Join a focused interview (30–60 min each, remote)
- A half-day working session, then an executive readout

**Kickoff:** `[date/time — confirm]`. Agenda to follow. Sai is coordinating scheduling on the ODU side; `[Casey Smith]` on ours.

Looking forward to it,
Werner Watschke
*Salesforce — Global Data Strategy (DRA Architect)*

---

## 2. Survey distribution

**To:** Confirmed survey respondents
**Subject:** 10 minutes that shape the ODU Data Readiness Assessment

Hi `[name]`,

Thanks again for the kickoff. As discussed, the next step is a short **discovery survey** — about 10 minutes — that helps us walk into our interviews already understanding ODU's environment, so we spend that time on your priorities rather than on background.

Your answers feed directly into how we assess ODU across data **access (Unlock)**, **trust**, and **activation** — and they sharpen the questions we bring to the working sessions. Candid answers are far more useful than "right" ones; where you're not sure, say so — that's a finding too.

**Please complete it by `[deadline — give the SE ≥3 business days to synthesize before interviews]`:** `[survey link]`

If anyone else on your team should weigh in, forward it along or let me know.

Thank you,
Werner

---

## 3. Interview confirmation

**To:** `[interviewee]`
**Subject:** ODU DRA — your discovery session `[date/time]`

Hi `[name]`,

Confirming our DRA discovery session: **`[date/time]`, `[duration — 30–60 min]`, `[Zoom/Meet link]`.**

We'll focus on your part of the data picture — `[1 line tailored to their role, e.g. "how integrations move between Banner and Salesforce today and where the friction is" for Sai/Brian; "where the analytic environment gives inconsistent answers" for Lisa]` — and what good would look like for you.

No prep needed; come as you are. **With your okay, we'll record the session** so we can stay present in the conversation and capture details accurately — just let me know if you'd prefer we don't.

Thanks,
Werner

> [!NOTE]
> Role-tailoring cues for the interview-confirmation one-liner:
> - **Sai Nidumolu / Brian Easton / Josh Kidd** → Banner↔Salesforce integration, real-time APIs, MuleSoft vs. Informatica swim lanes
> - **Lisa Handy** → analytic data consistency, governance, reporting confidence
> - **Matt Newton** → CRM architecture, the application-status experience
> - **Jimmy Patel** → enterprise systems, MDM, business-rule/data-governance decisions
> - **Kirk Dewyea** → outcomes, sponsorship, the "why now"
