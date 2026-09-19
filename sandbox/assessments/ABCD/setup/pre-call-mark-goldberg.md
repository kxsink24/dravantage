---
title: "Pre-Call Brief — Mark Goldberg (kickoff deck + timeline validation)"
created: 2026-06-25
status: planned
tags: [dra, bclc, pre-call, kickoff, validation]
attendees_sf: ["Patrick Miner (SE/Architect)", "Cameron Tait (AE — organizing)"]
attendee_customer: "Mark Goldberg (CIO & VP Business Technology, acting CDO — confirmed sponsor)"
target_window: "Week of June 29 — before the July 13 kickoff, ideally before the survey goes out (~June 28)"
duration: "30 min"
---

# Pre-Call Brief — Mark Goldberg

> **Purpose:** A short working session with our confirmed sponsor to *validate the kickoff before we run it* — confirm the framing lands, pressure-test the timeline against BCLC's real September calendar, and lock the stakeholder/interview list. Cameron (AE) is setting it up. This is internal prep; not a customer deliverable.

> [!IMPORTANT]
> Sequencing: schedule this **before the survey distribution (~June 28)** if possible, so Mark's input can shape both the survey send and the kickoff. At minimum, hold it well ahead of **July 13**.

---

## The 3 outcomes we need from this call

1. **Deck framing validated** — Mark agrees the narrative (September convergence → Cullen/AML mandate → foundation-before-AI) is right and lands with his peers, and tells us where to soften or sharpen.
2. **Timeline confirmed feasible** — the kickoff→interviews→readout plan survives contact with BCLC's actual go-live dates *and* his team's availability during a heavy go-live quarter.
3. **Stakeholder list locked** — we leave with named interviewees per persona and Mark's sponsorship to get them on calendars.

---

## A. Deck validation (walk the spine, not all 19 slides)

Show Mark the arc and get a yes/adjust on each. Reference: [[setup/kickoff-deck-draft]] / [[setup/kickoff-presentation.html]].

| Slide(s) | What to validate | Why it matters |
|---|---|---|
| 2 — September Convergence | Is this *the* compelling event in his words? Are all four launches (Melco, Intralot, Rewards & Incentives, Future Anthem) accurate and concurrent? | Whole deck hangs on this being his reality, not our guess |
| 3 — The Cullen Mandate | **Calibrate tone.** How directly can we reference the $1.075M FINTRAC penalty + the 3.5/5 AML audit in a customer room? | These are sensitive regulatory failures — Mark tells us how to frame without putting his peers on the defensive |
| 7 — Current State (known systems) | Is our system inventory right? Especially Everi↔Melco, Intralot, and **whether MuleSoft is truly gone / staying gone** | We assert specifics we got from research, not them — one wrong system name costs credibility |
| 8–11 — Data360-centric target, identity resolution, real-time vs batch | Does positioning Data 360 as the **activation layer (not a transactional/MDM replacement)** match his intent? | This is our core architectural thesis; confirm before we present it as theirs |
| 12 — Agentforce three blockers | Are terminal diagnostics / concierge / RG-intervention the right use cases, or has the pilot shifted? | Avoid presenting stale use cases to the team that owns them |
| 15 — Stakeholders to interview | Get real names + his buy-in to make them available (see section C) | The #1 execution risk is interview access during go-live crunch |
| 16 — Open questions | Which of the 6 open architecture questions can he answer now, and which need his team? | Lets us pre-load the kickoff and not burn the room on basics |

**Also flag for calibration (same class as the QBR fix):**
- Slide 13 presenter note still anchors the roadmap to *our* "March 2027 Core renewal / April 2027 MC renewal." Ask Mark if anchoring to renewals is fine internally or should be dropped from customer-facing talk — **the roadmap should be anchored to his September launches, not our commercial dates.** (Easy to remove if he'd find it off.)

---

## B. Timeline to pressure-test

Current plan in the deck:

| Milestone | Date |
|---|---|
| Kickoff | July 13 |
| Interviews + technical deep dives + survey aggregation | July 14 – Aug 15 |
| Analysis + roadmap drafting + exec review | Aug 16 – Sep 10 |
| Final readout | Sep 15 |

**The questions that actually decide whether this works:**

1. **When exactly are the September go-lives?** ⚠️ If they land **early/mid-September**, a **Sep 15 readout is too late** to inform the foundation ahead of them. We may need to (a) pull the readout earlier, (b) split into an interim "pre-go-live foundation checkpoint" + a full readout, or (c) explicitly reframe the DRA as informing the *post-launch* stabilization + next wave. **Get the real dates and decide the framing.**
2. **Will his team be available for ~3 interviews each in July–Aug** while they're heads-down on go-live prep? If not, which windows are realistic, and can he protect the time?
3. **Is July 13 firm**, and is it the right room (him + which peers)?
4. **Survey realism** — can his stakeholders complete the 15-question survey by ~July 9? Should he send the cover note to lend it weight?

---

## C. Stakeholder / interview list to lock

We have these from research — confirm names, titles, and that Mark will sponsor access:

- **Business Leader** — Marie-Noëlle Savoie (loyalty/rewards owner) → confirm she's the business sponsor.
- **Data Leader / Compliance** — Kevin deBruyckere (Safer Play / AML) or a delegate → essential for the regulatory framing.
- **IT / Data Workers** — the "core devs," CDP/Data 360 team, and Slalom leads who know Melco-streaming and Everi-write-back mechanics.
- **Funding** — who owns the budget line? (Alan Kerr / CFO suspected — confirm.)

**Ask:** "Who are the 5–6 people we should interview, and will you help us get them on calendars before mid-August?"

---

## D. Direct asks of Mark (close the call with these)

1. Confirm/adjust the compelling-event framing and the sensitive-topic tone (Cullen/FINTRAC).
2. Give us the **real September go-live dates** so we can fix the readout date.
3. Name the interviewees and sponsor access to them.
4. Agree to (or edit) the July 13 kickoff date + attendee list.
5. Optional: lend his name to the survey cover note.

---

## Risks if we skip this

- We present a deck built on research assumptions and get corrected live in front of his peers (credibility hit).
- A Sep 15 readout silently lands after go-live and the DRA misses its window.
- Interview access evaporates into the go-live crunch and the assessment runs thin (confidence stays Low — see [[08-appendix]] methodology notes).
