---
title: "Kickoff Deck Draft — BCLC"
created: 2026-06-24
status: draft
tags: [dra, kickoff, deck, bclc]
---

# Data Readiness Assessment — Kickoff Deck Draft

**Customer:** British Columbia Lottery Corporation  
**Kickoff Date:** July 13, 2026  
**Audience:** Mark Goldberg (CIO/CDO), Marie-Noëlle Savoie (Chief Marketing & Social Purpose Officer), Kevin deBruyckere (Chief Compliance Officer), Data360/IT/Marketing leads

**Deck Duration:** 45 minutes presentation + 30 minutes discussion  
**Delivery Format:** Microsoft Teams (virtual) or in-person at BCLC Virtual Way / Kamloops HQ

---

## Slide 1: Title Slide

**Title:** Data Readiness Assessment  
**Subtitle:** Building the Foundation for BCLC's September Convergence

**Visual:** BCLC logo + Salesforce logo

**Presenter Notes:**
- Welcome and thank executive sponsor Mark Goldberg
- Acknowledge Marie-Noëlle (Marketing/Loyalty) and Kevin (Compliance) as key stakeholders
- Frame this as a partnership to align data architecture to BCLC's mission: "generate win-wins for the greater good"

---

## Slide 2: Your September Convergence

**Headline:** Four Major Launches. One Data Foundation.

**Visual:** Timeline diagram showing September 2026 convergence point

**Content:**
- **Melco Gaming Platform** — New casino gaming management system across 22 casinos
- **Intralot Lottery Modernization** — Cloud-based Lotos X Omni ecosystem, 8,000 terminals, 3,400 retail locations
- **Rewards & Incentives Program** — Redesigned loyalty to drive 53%→64% registration rate
- **Future Anthem Promotions** — Real-time personalization via Amplifier AI

**Call-out Box:**
"All four initiatives depend on unified, real-time player data. If the data foundation is fragmented, all four are at risk."

**Presenter Notes:**
- These launches aren't independent — they're interdependent
- Each requires streaming player data, identity resolution, and cross-channel orchestration
- This DRA ensures the data layer is ready to support all four simultaneously
- Acknowledge this is an ambitious timeline — our job is to help you de-risk it

---

## Slide 3: The Cullen Mandate

**Headline:** From Fragmented Compliance to Flawless 360-Degree Player View

**Visual:** Split-screen "before/after" diagram

**Left Side (Current State):**
- Siloed systems: Everi (casino), PlayNow.com (online), retail lottery (anonymous), InfoSphere MDM (batch)
- Manual reconciliation
- Delayed reporting
- Blind spots below $10K threshold

**Right Side (Future State):**
- Unified Data360 layer
- Real-time streaming ingestion
- Automatic detection of "structuring" patterns
- Single auditable profile across all channels

**Call-out Box:**
"The 2022 Cullen Commission Report mandated a 'flawless 360-degree player view.' The August 2025 FINTRAC penalty ($1.075M) showed the cost of fragmented compliance data."

**Presenter Notes:**
- This isn't just a tech upgrade — it's a regulatory mandate with legal and financial consequences
- FINTRAC eliminated the draft penalty review process; next penalty could be 40x larger under Bill C-2
- Supreme Court (Ghotaymi v. BCLC) confirmed BCLC can apply preventative controls based on behavioral patterns — but only if systems can detect them in real time
- Kevin's team (Compliance, Safer Play, AML) is critical to defining success here

---

## Slide 4: Trapped Data, Distinct Demands

**Headline:** Your Data Is Locked in Systems Built for Different Missions

**Visual:** Three-column table

| System | Primary Purpose | Data Challenge |
|--------|-----------------|----------------|
| **Everi (Casino)** | Transaction tracking, FINTRAC reporting | Batch exports; no streaming API to Data360 |
| **PlayNow.com** | Digital wagering, verified accounts | Real-time but siloed from physical casino/lottery |
| **Intralot (Retail Lottery)** | Terminal validation, anonymous cash sales | Limited identity data; cash transactions don't link to player profiles |
| **InfoSphere MDM** | Master data governance | Rigid schema, batch ETL, not designed for real-time activation |
| **Future Anthem** | AI-driven personalization | Requires streaming player events (spins, wagers) — currently not available |

**Call-out Box:**
"Each system was built to solve its own problem. None were designed to power a unified, real-time 360-degree view."

**Presenter Notes:**
- This is the "Trapped Data" dynamic from the Data Foundation framework
- Each system is excellent at its job, but they don't talk to each other in real time
- InfoSphere MDM was the first attempt to solve this — it established a "golden record" but can't activate it
- Data360 is the activation layer that connects these systems without replacing them

---

## Slide 5: Why This Matters — AI Needs Grounded Data

**Headline:** Agentforce Can't Operate on Fragmented, Stale Data

**Visual:** Diagram showing Agentforce agent trying to access data from multiple systems with delays and gaps

**Use Cases:**
1. **Terminal Diagnostics Agent** — Needs real-time logs from 8,000 Intralot terminals to detect printer jams, network drops
2. **High-Value Player Concierge** — Needs unified profile (casino play, online wagers, loyalty tier) to personalize offers
3. **Responsible Gaming Agent** — Needs streaming behavioral data to detect escalating risk and pause promotions instantly

**Call-out Box:**
"If your agents are grounded in stale, siloed data, they'll give wrong answers or miss critical events."

**Presenter Notes:**
- Agentforce is already in pilot at BCLC (3 enterprise seats)
- But agents are only as good as the data they're grounded in
- Terminal diagnostics agent can't diagnose a terminal if it only sees batch exports from yesterday
- Concierge agent can't personalize if it doesn't know the player just hit Elite tier at a casino floor two hours ago
- This DRA ensures the data layer is ready before you scale Agentforce beyond pilot

---

## Slide 6: The Data Foundation Framework

**Headline:** Three Pillars to Enable Your September Convergence

**Visual:** Three-pillar graphic (Unlock / Trust / Activate) with BCLC-specific capability mapping

**UNLOCK — Ingest and Integrate**
- **Connect:** Stream real-time events from Melco, Intralot, Everi, PlayNow.com
- **Integrate:** Orchestrate data flows without rebuilding every integration (post-MuleSoft discontinuation)

**TRUST — Govern and Unify**
- **Validate:** Ensure player identity, source-of-funds, transaction history are audit-ready
- **Protect:** Privacy (FIPPA), security (FINTRAC), and governance controls
- **Unify:** Resolve player identity across all channels (resume Slalom CDP work with Data360 stability)

**ACTIVATE — Decide and Act**
- **Decide:** Real-time insights for Safer Play alerts, promotional targeting, loyalty tier triggers
- **Orchestrate:** Automate the "relay race" between systems (no more swivel-chairing)
- **Act:** Enable Agentforce to execute actions (write back to Everi, trigger GameSense alerts)

**Presenter Notes:**
- This framework is the backbone of the DRA — we'll score BCLC on each capability
- Unlock is critical given your September convergence — you need streaming data, not batch
- Trust is mandated by Cullen Report and FINTRAC — can't compromise on this
- Activate is where the business value shows up — loyalty, personalization, AI

---

## Slide 7: Current State Architecture (Known Systems)

**Headline:** Your Data Landscape Today

**Visual:** System architecture diagram with five layers (sources, integration, storage, activation, experience)

**Layer 1 — Data Sources:**
- Everi GMS (casino transactions)
- PlayNow.com (digital wagering)
- Intralot Lotos X Omni (retail lottery)
- Future Anthem Amplifier AI (promotions)
- Salesforce CRM (customer service, marketing)

**Layer 2 — Integration:**
- [Gap noted: MuleSoft discontinued — what integration pattern is replacing it?]
- Batch ETL via InfoSphere DataStage
- AWS S3 intermediate staging

**Layer 3 — Storage / MDM:**
- IBM InfoSphere MDM (legacy — being replaced)
- Salesforce Data360 (new activation layer)

**Layer 4 — Activation:**
- Salesforce Marketing Cloud (email, SMS, journeys)
- Future Anthem (real-time promotions)
- Agentforce (pilot: terminal diagnostics, concierge)

**Layer 5 — Experience:**
- PlayNow.com
- Casino floor kiosks
- Retail lottery terminals
- Contact center (Talkdesk)

**Call-out Box:**
"Open Question: With MuleSoft discontinued, how are Melco and Intralot streaming data to Data360?"

**Presenter Notes:**
- This is our hypothesis architecture based on research
- We'll validate and refine this during interviews
- The MuleSoft discontinuation is a known risk — we need to understand the replacement integration strategy
- If there's no replacement, Data360 becomes even more critical as the native integration layer

---

## Slide 8: Target State Architecture (Data360-Centric)

**Headline:** A Real-Time Activation Layer on Top of Existing Systems

**Visual:** Simplified architecture showing Data360 as the hub

**Data360 as the Hub:**
- **Streaming Ingestion:** Melco, Intralot, PlayNow.com push events in real time
- **Batch Ingestion:** Everi, legacy systems push nightly reconciliation
- **Identity Resolution:** Customer 360 Data Model maps all sources to unified profiles
- **Activation:** Marketing Cloud, Agentforce, Future Anthem pull from Data360 in real time

**Key Principle:**
"Data360 doesn't replace your systems of record — it unifies and activates them."

**Presenter Notes:**
- This is a "headless 360" architecture — data is formatted for AI and real-time activation, not just human dashboards
- InfoSphere MDM remains the legal system of record for compliance audits (if needed), but Data360 is the operational activation layer
- Future Anthem and Agentforce read from Data360, not from five different databases
- This reduces integration complexity — new systems integrate once to Data360, not to every downstream consumer

---

## Slide 9: Profile Unification — Resume the Slalom Work

**Headline:** Picking Up Where You Left Off (With a Stable Foundation)

**Visual:** Timeline showing CDP evolution and BCLC pause

**Timeline:**
- **2021-2023:** Slalom CDP project initiated (Customer 360 Audiences → Salesforce CDP → Genie)
- **2023-2024:** Project paused due to rapid product evolution and naming changes
- **2024-2025:** Salesforce stabilizes on Data Cloud, then rebrands to Data360
- **2026:** BCLC resumes profile unification with stable Data360 architecture

**What's Different Now:**
- Data360 is production-ready with native Customer 360 Data Model
- Identity resolution rules are more flexible (fuzzy matching, probabilistic linking)
- Native connectors to Salesforce CRM, Marketing Cloud, Agentforce

**Call-out Box:**
"The pause wasn't a failure — it was smart. You waited for a stable platform. Now it's time to resume."

**Presenter Notes:**
- Acknowledge the frustration of the pause — product instability was real
- But BCLC made the right call to wait for architectural stability
- Data360 (formerly Data Cloud) is now the long-term platform — no more rebrands expected
- Slalom's prior work (field mappings, data models, segment logic) can be reused

---

## Slide 10: Identity Resolution Challenge

**Headline:** Four Channels, One Player — How Do You Link Them?

**Visual:** Venn diagram showing overlap and gaps between channels

**Channels:**
1. **PlayNow.com** — Verified identity (name, address, photo ID, credit check)
2. **Casino Floor (Everi/Melco)** — Loyalty card, credit card hash, sometimes anonymous cash
3. **Retail Lottery** — Mostly anonymous; credit card hash for large prizes
4. **Rewards Program** — Opt-in registration with email, phone, address

**Matching Rules (Open Questions for Interviews):**
- Email + phone number (high confidence)
- Credit card hash across channels (medium confidence, privacy constraints)
- Name + birthdate + postal code (fuzzy match, duplicate risk)
- Device fingerprint + location data (online only, requires consent)

**Call-out Box:**
"FIPPA and Cullen Report mandate consent and auditability. What identity resolution rules will BCLC authorize?"

**Presenter Notes:**
- This is the hardest technical and legal problem in the DRA
- Cullen Report demands 360-degree view, but FIPPA demands privacy and consent
- BCLC must decide which matching rules are acceptable
- Data360's probabilistic identity resolution can handle fuzzy matches, but BCLC must define confidence thresholds
- We'll workshop this during interviews with IT, Legal, and Compliance

---

## Slide 11: Real-Time vs. Batch — A Critical Trade-off

**Headline:** Compliance and Personalization Both Require Real-Time Data

**Visual:** Two-column comparison table

| Capability | Batch (Current State) | Real-Time (Target State) |
|------------|----------------------|---------------------------|
| **Detect "structuring" below $10K** | Detected in nightly audit (too late to intervene) | Detected within seconds; patron flagged before next transaction |
| **Safer Play intervention** | Player notified next login (could be hours or days) | On-screen GameSense prompt appears immediately |
| **Loyalty tier promotion** | Player sees new Elite benefits next day | Concierge agent congratulates player within 60 seconds |
| **Future Anthem personalization** | Batch segment export overnight | Streaming events trigger instant offer |

**Call-out Box:**
"If you can't act in real time, you can't protect players or delight them."

**Presenter Notes:**
- Batch processing is fine for back-office reconciliation and financial reporting
- But compliance (Cullen) and engagement (loyalty, personalization) both require real-time data
- The $9,500 cash buy-in example: if Everi only exports to InfoSphere MDM once a day, AML team can't intervene until tomorrow
- By then, the player has already structured $30K across three casinos
- Real-time streaming to Data360 closes this gap

---

## Slide 12: Agentforce Readiness — Three Blockers

**Headline:** Your Agents Are in Pilot — What's Stopping Production Scale?

**Visual:** Three-blocker diagram

**Blocker 1 — Data Quality / Completeness**
- Unified profiles are incomplete (missing loyalty tier, source-of-funds, play history)
- Agents give wrong answers or say "I don't have that information"

**Blocker 2 — Real-Time Integration Gaps**
- Agents can't access live system data (Everi, Melco, Intralot)
- By the time agents see data, it's stale

**Blocker 3 — Write-Back Governance**
- Agents can read data but can't write back to systems of record
- Can't auto-flag high-risk players in Everi or pause promotions in Future Anthem

**Call-out Box:**
"Agentforce is only as good as the data it's grounded in. Fix the foundation first."

**Presenter Notes:**
- BCLC has 3 Agentforce enterprise seats in pilot
- Terminal diagnostics and concierge use cases are excellent starting points
- But to scale beyond pilot, you need unified, real-time, write-enabled data
- This DRA defines the roadmap to remove these blockers

---

## Slide 13: What This Assessment Will Deliver

**Headline:** A Roadmap Aligned to Your September 2026 Launches

**Deliverables:**
1. **Capability Maturity Scorecard** — Where you are today across all 9 capabilities (Connect, Integrate, Understand, Validate, Protect, Unify, Decide, Orchestrate, Act)
2. **Prioritized Gap Analysis** — Which gaps are blockers for September convergence vs. long-term optimizations
3. **Crawl / Walk / Run Roadmap** — Phased plan with MVP (Crawl), scale (Walk), and optimize (Run) milestones
4. **Salesforce Positioning** — How Data360, Marketing Cloud, Agentforce, and MuleSoft (if reinstated) fit into your target architecture
5. **Business Case** — Labor cost of manual workarounds, compliance risk reduction, loyalty registration lift

**Timeline:**
- **July 13:** Kickoff (today)
- **July 14 - August 15:** Stakeholder interviews, technical deep dives, survey aggregation
- **August 16 - September 10:** Analysis, roadmap drafting, executive review
- **September 15:** Final readout delivery (ahead of your September 2026 go-lives)

**Presenter Notes:**
- This isn't a science project — it's a business-driven roadmap
- We'll align recommendations to your March 2027 Core renewal and April 2027 Marketing Cloud renewal
- Roadmap will prioritize what must be done before September convergence vs. what can wait

---

## Slide 14: The DRA Process — What to Expect

**Headline:** Four Weeks of Discovery, Two Weeks of Analysis, One Executive Readout

**Phase 1 — Discovery (July 14 - August 15):**
- 12-15 stakeholder interviews (60 min each)
- Survey aggregation and persona mapping
- Technical architecture validation (system integrations, data flows, latency measurements)

**Phase 2 — Analysis (August 16 - September 10):**
- Capability scoring (1-3 scale per the DRA rubric)
- Gap prioritization (High/Med/Low impact)
- Roadmap sequencing (Crawl/Walk/Run)
- Salesforce solution mapping

**Phase 3 — Readout (September 15):**
- Executive presentation to Mark Goldberg and leadership team
- Q&A and roadmap refinement
- Handoff to implementation teams

**Presenter Notes:**
- We'll adapt the schedule to BCLC's availability
- Interviews are confidential — individual responses won't be attributed unless requested
- We'll validate our hypothesis architecture during interviews (especially MuleSoft replacement strategy)

---

## Slide 15: Stakeholders We Need to Interview

**Headline:** Who We Need to Hear From

**Categories:**
1. **Executive Sponsors** (already confirmed):
   - Mark Goldberg (CIO/CDO)
   - Marie-Noëlle Savoie (Chief Marketing & Social Purpose Officer)
   - Kevin deBruyckere (Chief Compliance Officer)

2. **Data & IT Leaders** (please nominate):
   - Data360 implementation lead
   - IT architecture / integration lead
   - InfoSphere MDM admin (if still in role)

3. **Business Users** (please nominate):
   - Marketing Cloud / loyalty program lead
   - Safer Play / AML analyst (Kevin's team)
   - Contact center / customer service lead

4. **Platform Vendors** (if available):
   - Slalom (CDP project lead — lessons learned)
   - Future Anthem (AnthemXT hub lead)

**Presenter Notes:**
- We need 12-15 interviews total
- Ideally a mix of executive, technical, and frontline users
- Account team will coordinate scheduling via interview confirmation emails

---

## Slide 16: Open Questions for Today's Discussion

**Headline:** What We Need Your Help to Answer

**Questions:**
1. **MuleSoft Replacement:** With MuleSoft discontinued, what integration pattern is replacing it for Melco/Intralot streaming?
2. **Slalom Pause:** What were the primary blockers in the Slalom CDP project, and what needs to be different this time?
3. **Identity Resolution Rules:** What matching rules will BCLC authorize to link anonymous retail transactions to verified PlayNow.com profiles?
4. **Write-Back Permissions:** Can Data360 / Agentforce write back to Everi to flag high-risk players, or is it read-only?
5. **DRI Accountability:** Who is the single-threaded leader accountable for delivering the unified 360-degree player view by your September 2026 go-lives?
6. **Safer Play Capacity:** Does Kevin's team have operational capacity to handle real-time automated alerts from Data360/Future Anthem?

**Presenter Notes:**
- We don't expect answers to all questions today
- These are the big unknowns that will shape the roadmap
- We'll dig into these during interviews

---

## Slide 17: Success Criteria — What Does "Good" Look Like?

**Headline:** How Will We Know This DRA Succeeded?

**Success Metrics:**
1. **September Convergence:** All four platforms (Melco, Intralot, Rewards, Future Anthem) launch on schedule with real-time data flowing to Data360
2. **Cullen Compliance:** Unified 360-degree player view is audit-ready; "structuring" detection is real-time across all channels
3. **Loyalty Registration:** Clear path to 53%→64% registration rate via personalized offers and cross-channel play tracking
4. **Agentforce Scale:** Terminal diagnostics and concierge agents exit pilot and enter production by Q4 2026
5. **Labor Reduction:** Eliminate manual reconciliation and swivel-chairing — quantify hours saved per week
6. **FINTRAC Confidence:** Kevin's team can confidently file STRs and LCTRs with complete cross-channel data

**Presenter Notes:**
- These are the outcomes BCLC cares about — not just "implement Data360"
- We'll refine these during the kickoff and validate during interviews
- Roadmap will sequence initiatives to deliver these outcomes in priority order

---

## Slide 18: Next Steps

**Headline:** What Happens After Today

**Immediate (This Week):**
- Survey distribution (due July 9)
- Interview scheduling (Robert Lindsley coordinating)

**Discovery Phase (July 14 - August 15):**
- 12-15 stakeholder interviews
- Technical architecture validation
- Gap analysis and capability scoring

**Analysis Phase (August 16 - September 10):**
- Roadmap drafting (Crawl/Walk/Run)
- Business case and ROI modeling
- Executive review and refinement

**Readout (September 15):**
- Final presentation to Mark Goldberg and leadership
- Handoff to implementation teams
- Alignment to your September 2026 launches

**Presenter Notes:**
- We're on a tight timeline to deliver ahead of your September go-lives (internally, this also lands before our Sep 22 QBR — but lead with the customer's launches, not our cadence)
- Survey responses by July 9 are critical to staying on track
- Account team will coordinate all scheduling and logistics

---

## Slide 19: Thank You — Questions?

**Headline:** Let's Build the Foundation for BCLC's Next Chapter

**Visual:** BCLC mission statement: "Generate win-wins for the greater good"

**Closing Statement:**
"This DRA is about more than data — it's about enabling BCLC to fulfill its mission. Safer players, more engaging experiences, and flawless compliance. All grounded in a unified, real-time data foundation."

**Contact Information:**
- Patrick Miner (pminer@salesforce.com) — SE Architect, DRA Lead
- Cameron Tait (cameron.tait@salesforce.com) — Named Account Executive
- Robert Lindsley (rlindsley@salesforce.com) — DRA Execution Lead

**Presenter Notes:**
- Open the floor for questions
- Confirm survey distribution and interview scheduling
- Thank Mark Goldberg for his sponsorship
- Acknowledge the complexity of the September convergence and express confidence in partnership

---

## Appendix Slides (If Needed)

### A1: Data Foundation Advantage Framework (Detailed)
Full taxonomy of 9 capabilities with definitions and maturity levels.

### A2: Salesforce Data360 Overview
Product architecture, pricing, and competitive positioning vs. InfoSphere MDM.

### A3: Customer 360 Data Model
Pre-configured objects (Individual, Account, Order, Loyalty Member) and how they map to BCLC's channels.

### A4: Agentforce Architecture
How agents ground in Data360, use tools, and write back to systems of record.

### A5: Peer Examples
OLG (Sales Wizard), ALC (IntelligenEVO), Totalizator Sportowy (cloud lottery migration).

---

## Deck Formatting Notes

- **Branding:** Use Salesforce and BCLC co-branding on title slide
- **Color Scheme:** Salesforce blue (#0176D3) with BCLC green/gold accents (if available)
- **Fonts:** Salesforce Sans (or fallback to Arial if unavailable)
- **Visuals:** Use Salesforce-standard diagrams (3-pillar framework, 5-layer architecture) adapted to BCLC context
- **Page Numbers:** Include on all slides except title slide
- **Slide Count:** 19 main slides + 5 appendix = 24 total
