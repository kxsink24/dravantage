---
title: "Slack History — The Financial Conduct Authority"
tags: [dra, inputs, research, slack]
created: 2026-09-16
status: draft
---

# Slack History — The Financial Conduct Authority

> Raw extraction — do not edit. Re-run `dra-research` to refresh.

## Channels covered

- **#the-financial-conduct-authority** (primary, `C08EVRN6152`) — 143 top-level messages, 58 threads with replies, covering 2025-02-24 to 2026-09-11.
- **#fca-data-foundations** (`C0ANBMS4DNX`, originally `fca-informatica` → `fca-informatica-working-group` → `fca-data-foundations`) — full history read end-to-end, channel creation 2026-03-24 through 2026-09-10 (no threads present in this channel — all activity is top-level).
- **FCA Case Management Vision** (`C0AEQ756YDA`) — ⚠️ **not read**. This channel is `Private__c` per DRAVantage's `DRA_Slack_Channel__c` record, and the connected Slack MCP session does not have membership/visibility into it (`slack_search_channels` cannot resolve it, and attempts to read it directly return no access). Per a message inside the primary channel (Josh Adams, 2026-03-11, ts `1771241024.906089`): this channel was originally opened hoping the FCA could join and collaborate in real time, but Slack is blocked on the FCA's side, and the channel's privacy setting can no longer be changed. **Recommend:** ask Josh Adams (or another current member) to either add the DRAVantage Slack integration/bot to the channel, or export/share its history directly.

## Organized summary

### Stakeholders mentioned

- **Josh Adams** (Salesforce AE, FCA account owner) — active throughout both channels from channel creation to present; drives cadence, meeting scheduling, cross-team coordination, cheerleads wins, brokers exec connects.
- **Stephane Pajon** (Salesforce SE, DRA architect — this session's user) — appears from 2026-03-24 (secondary channel creation) through 2026-09-10; positioned early as the person who "prepares content ready to describe and set expectations for the DRA process" (Alex Clift, 2026-07-09); explains the DRA framing to the account team ("A DRA is not something we do to them, we do it with them," 2026-07-09); declines the 3 June SIC slot due to a conflict; covered by Corrado de Candia for the 14 July SIC workshop.
- **Rachel Colby** (Salesforce, DRA/account team) — very active in the secondary channel; drove the 14 July SIC workshop logistics and deck; on 2026-09-10 reports "she's up for DRA" and a 4:30pm quicksync with a not-yet-named female stakeholder (likely Lauren Dixon) — the most recent, most active DRA-scheduling signal in either channel.
- **Richard Cole** — EMEA DRA lead, joins the 2026-09-10 quicksync call with Rachel Colby and Stephane Pajon.
- **Dipesh Bhoola** — EMEA DRA lead; asks Josh Adams "which opp should we be using for the DRA activity?" (2026-05-25 thread); explains DRA vs. ORA distinction is implied but not explicit — see Lachlan Mills note below.
- **Lauren Dixon (CDO)** — FCA's primary sponsor for Data Foundations; repeatedly described as "keen to partner... and sponsor more engagements going forward"; declined one meeting invite (2026-07-22) then re-engaged; her team supplied the AI-Assisted Records Management requirements list (13 Aug); her reply triggered the 2026-09-10 DRA quicksync.
- **Andrew Heggs / Andrew Higgs** (name appears both ways across the two channels — likely the same person, FCA data governance lead) — repeatedly chased for meetings; owns MDM/Talend conversations; struggling to move data governance from manual spreadsheet import to a "scan the source" approach (per Murray Grubb Jnr's Informatica intro recap).
- **Julius B / Julius Bwesigye** — FCA-side Informatica relationship owner; post-migration hypercare focus; change freeze in effect during a quality-component testing cycle; supposed to arrange a "regular cadence" (chased twice, 8 Aug and again).
- **Jagpal Jheeta (CPO)** — common denominator across security/compliance/retention concerns (Slack retention & FOI), and cited by Ed Towers as a shared connection across FCA leadership.
- **Jessica Rusu** — cited in the Palantir Treasury Select Committee testimony thread and in Ed Towers' "concentration risk" framing (exec reviews go through her and Johan).
- **Johan** (new COO) — took over as Business System Owner for INTACT; focused on MDM/business-process-discovery scanning; met by Simon Collinson re: NewCo vs. debt remediation and agentic-tech risk appetite.
- **Ed Towers** (Head of AI Product Delivery, Regtech & Advanced Analytics) — major intro meeting 9 Sept 2026; owns Project Libra (Authorisations AI, AWS LLM → Caseflow) and is a stakeholder in the AML PoC replacement/headless debate; raises Salesforce "concentration risk"/"bottleneck risk" (James Symon's team).
- **Greg Smith, Prabhu, Amanda Annandale** — own AML architecture decision-making; Amanda's Enterprise Architecture team has limited visibility into the existing Salesforce portfolio.
- **Matthew Doyle (EA)** — co-authoring, with Greg Smith, a "technology options paper" for enterprise-level intelligence capability (Data360 vs. continuing with Palantir), going to TDA in Sept 2026 and EFDC in Oct 2026 (Maribel Pinilla, 2026-09-03).
- **Faisal Ahmed** — cited by Ed Towers re: a Claude Code session as a Salesforce value-add example.
- **Steve Hall** — customer panelist for a Salesforce Signature webinar on Agent AVA; flagged some post-Deloitte-POC-session "nervousness," read internally as healthy delivery scepticism rather than a Salesforce-specific concern.
- **Chris Dowlen, Sylvain Naltchayan, Maribel Pinilla, Vaibhav Krishna Kumar** — Salesforce CSM/SE bench running day-to-day support, Case Management Vision build, and the Agentforce Vibes/Data Privacy Opt-out/Cloudflare Turnstile workstreams.
- **Murray Grubb Jnr, Matthew Rochard, Rachael Ross, Jeff Pratt, Steve Holyer** — MuleSoft/Informatica/Data Foundations account team; own the IPU contract, the 14 July SIC workshop content, and produced the "FCA New Bid — A Connected, Governed, and AI-Ready FCA" and "Regulator2030" future-state slides.
- **Colin Payne, Emma Krygier, Emma Mattingley, Helen Packard, Krishna (Enterprise Architect), Toby Whitlock** — Innovation/Marketing/Events business-process stakeholders; run ~45 people via Excel/SharePoint; explicitly evaluated "Monday CRM" before Salesforce (cost concerns cited, unclear which product's cost).
- **James Symon** — owns core INTACT/Salesforce technical delivery; repeatedly cited as the "bottleneck"/"concentration risk" reference point by Ed Towers and others.

### Decisions captured

- **2026-03-24** — Secondary Slack channel created (`fca-informatica`), immediate actions assigned: Paul Pitman to run an Ian Currie handover, Josh Adams to stand up the channel, joint email intros to Ian's stakeholders, Murray Grubb Jnr to invite Paul P to an Agile dinner and align on BDR/outreach strategy.
- **2026-07-09/14** — Full workshop agenda for the 14 July SIC session finalized: Voice of Customer (Stephane) → Agentic Enterprise/Data Foundations case study (Steve/Jeff) → current-use-case value review (Jeff/Stephane/Josh) → short/mid/long-term actions → next steps/cadence.
- **2026-07-14** — SIC workshop delivered; Rachel Colby's readout: "Lauren is really keen to partner with us on DF, and sponsor more engagements going forward (our no.1 objective)" and the near-term Q3 Informatica deal materially advanced.
- **2026-07-17** — IPU contract facts formally communicated to FCA: 3-year term (3 Sept 2025–2 Sept 2028), Flex IPU additions only at the Sept 3 anniversary, 34.03% discount, no active price hold — used to push FCA toward committing wider scope now rather than "drip feeding."
- **2026-08-08** — Matthew Rochard's holiday handover assigns six workstream owners (WS1 Level Setting, WS2 Business Outcomes, WS3 Data Best Practice, WS4 Stakeholder Dashboards, WS6 MDM & Talend) — WS5 is not mentioned in the transcript, a possible gap.
- **2026-09-03** — Maribel Pinilla flags that FCA Strategy & Architecture is drafting a technology-options paper comparing Data360 against continuing with the Palantir PoC for enterprise intelligence/Golden Record/semantic search — timeline: TDA in Sept, EFDC in Oct 2026.
- **2026-09-10** — Rachel Colby, Richard Cole, and Stephane Pajon hold a DRA quicksync with an FCA stakeholder (name not stated in-channel, contextually likely Lauren Dixon) following her positive reply — described as "she's up for DRA." This is the most current, most concrete DRA-scheduling signal across both channels.

### Open questions / unresolved threads

- Who is the "she" in the 2026-09-10 "she's up for DRA" exchange? Not named explicitly in either channel — cross-reference against DRAVantage stakeholder records or ask Rachel Colby/Richard Cole/Stephane Pajon directly.
- WS5 is missing from the six-workstream list in Matthew Rochard's 2026-08-08 handover — worth confirming whether it exists and was simply omitted, or was folded into another workstream.
- The AML replacement-vs-headless decision (Ed Towers thread, 9 Sept) is explicitly described as "all options... being considered" — no resolution captured in either channel as of the most recent read.
- FCA Case Management Vision channel (`C0AEQ756YDA`) remains unread — see blocker above; several open threads referenced only by title there (Manager Summit recap, RegEx checkpoint) could not be verified against source.
- Whether the `happened`-state rows in `00-activity-log.md` (Jagpal Jheeta CPO intro, Jason Baker intro, Lauren Dixon intro, Johan intro) are genuine DRA discovery interviews or pre-kickoff relationship calls is still unresolved per that log's own note — this Slack read did not resolve it either; the closest evidence is Alex Clift's 2026-07-09 message describing Stephane Pajon's role as explaining "what a DRA is" ahead of, not during, those meetings, which leans toward "pre-kickoff relationship calls."

### Compelling-event signals

- **Palantir AML PoC** — 12-week proof of concept, won via standard competitive procurement, FCA remains data controller, isolated UK-sovereign S3 bucket, SC-cleared staff only, CLOUD Act does not apply, data destroyed post-PoC (per Rima Mukherjee's Treasury Select Committee summary, corroborated by Ed Towers' 9 Sept meeting notes). This is a more precise, citable version of the current `Compelling_Event__c` text on the live DRAVantage record ("entrenched Palantir AML proof-of-concept") — recommend refining the field to reflect the 12-week/procurement/data-controller specifics.
- **IPU contract anniversary (3 Sept 2026)** — Flex IPU additions gate to this date; FCA was pushed to commit wider scope ahead of it. Renewal-adjacent budget cycle worth flagging against `Target_Readout_Date__c` once set.
- **Enterprise intelligence technology-options paper** (Data360 vs. Palantir continuation) — going to TDA (Sept) and EFDC (Oct 2026) — a live decision window that a DRA readout landing before EFDC could directly influence.
- **AI-Assisted Records Management requirements** (from Lauren's team via Julius, 13 Aug) — explicitly flagged as exceeding core Informatica capability, requiring "complementary technologies" — an open door for Data Foundations/Salesforce positioning.
- **FCA confirmed NOT licensed for Salesforce Shield** (Chris Dowlen asking, Josh Adams confirming, primary channel) — flagged internally as "a key opportunity for us this year."
- **Cloudera data lake replacement, DQ improvement, Talend replacement** — Pete Ardley's off-the-record FCA priority intel (primary channel), all within a 1–2 year horizon; Cognizant is the incumbent data partner (contacted by Matthew Rochard).

### Links shared

- Google Slides — "FCA New Bid. A Connected, Governed, and AI-Ready FCA" (Regulator2030 future-state deck), Murray Grubb Jnr, 2026-08-14.
- Google Sheet — "FCA Mule capabilities answer sheet," Murray Grubb Jnr, 2026-08-14.
- Google Sheet — "Copy of Use_Case_Catalogue Informatica copy" (AI-Assisted Records Management requirements from Lauren's team), Jeff Pratt, 2026-08-13.
- Google Slides — "MuleSoft + Informatica First-Call Deck," Matthew Rochard, 2026-07-09.
- Google Slides — "FCA Data Foundations 14th July 2026" (SIC workshop master deck), Stephane Pajon/Matthew Rochard thread, 2026-07-10.
- Google Doc — "14 09:36 BST - Notes by Gemini" (SIC workshop transcript/notes), Josh Adams, 2026-07-14.
- Google Slides — "FCA_150726_Informatica Advantage Data Foundations," Steve Holyer, 2026-07-13.
- YouTube — webinar video (unstructured-data-processing related), Murray Grubb Jnr, 2026-07-27.
- Google Slides — FCA Agentforce Marketing POV (260311b), referenced by Sylvain Naltchayan re: the Innovation/Marketing/Events meeting, primary channel.
- Salesforce help article — help.salesforce.com/000393054 (go-live monitoring reference), shared by Vaibhav Krishna Kumar, primary channel.
- Salesforce Platform API limits cheatsheet — shared by Maribel Pinilla re: FCA bandwidth/page-view threshold query, primary channel.
- Public record — fca.org.uk/consumers/car-finance-complaints (Agent AVA public go-live), primary channel.
- Public record — UK Parliament Treasury Select Committee transcript (Palantir testimony, Jessica Rusu/Nikhil Rathi/Steve Smart), referenced by Rima Mukherjee, primary channel.

### Strategic-initiative signals

- **Regulator2030** — FCA's named future-state vision program; Data Foundations positioning explicitly ties into it (Murray Grubb Jnr's slide deck).
- **Project Libra** — Authorisations AI Delivery Team's AWS-hosted LLM for document analysis feeding into Caseflow for Senior Manager Regime application risk screening (Ed Towers, Maribel Pinilla).
- **Case Management Vision / RegEx program** — Regulatory Case Management rebuild; Deloitte-led proof of concept completed with a write-up in progress as of the most recent primary-channel read; targeting WCAG AA accessibility, 400+ post-Lightning-migration defects identified.
- **Transform Org / greenfield Org strategy** — FCA is weighing whether the AML use case runs in the existing INTACT org, a new greenfield Salesforce org (potentially ahead of the broader Transform programme), or a non-Salesforce front-end with INTACT as system of record.
- **Data360 enterprise intelligence evaluation** — see compelling-event signals above; Golden Record and semantic search are the stated capability targets.
- **Innovation/Marketing/Events CRM gap** — ~45-person org (Colin Payne/Emma Krygier) currently on Excel/SharePoint, evaluated Monday CRM, now in a "vision exercise" conversation with Salesforce re: CRM/Tableau/Marketing Cloud fit.
- **DSF transition (Cognizant → Mastech)** — mentioned in Simon Collinson's Chennai-visit update (secondary channel context carried from primary), tied to product strategy and the RCMS (Regulatory Case Management System) work.

## Raw transcript (appendix)

> The raw transcripts below are faithful extractions from `slack_read_channel` and `slack_read_thread` calls made during this research run. Slack `@mentions` are rendered as `@Display Name` (resolved from the raw `<@USERID|Display Name>` markup) for readability; user IDs are preserved in the message-author line. Thread replies for the primary channel are grouped in a separate subsection below the top-level transcript, keyed by parent message timestamp, rather than interleaved inline, given the volume of threads in this channel.

### #the-financial-conduct-authority (primary, C08EVRN6152) — top-level messages, chronological

*143 messages, 2025-02-24 to 2026-09-11. Full text below is drawn verbatim from the merged/deduplicated `slack_read_channel` pagination sweep.*

```
=== Message from Slackbot (USLACKBOT) at 2025-02-24 19:24:57 GMT === 
Message TS: 1740425097.032159
<@USLACKBOT|Slackbot> has joined the channel

=== Message from Kati Rantala <krantala@salesforce.com> (U01FTPUQDST) at 2025-02-24 19:24:57 GMT === 
Message TS: 1740425097.190379
<@U01FTPUQDST|Kati Rantala> has joined the channel

=== Message from Slackbot (USLACKBOT) at 2025-02-24 19:24:57 GMT === 
Message TS: 1740425097.274139
*Welcome to your new* :sparkles: *Salesforce channel* :sparkles:

This channel is tied to your account record in Org62, giving your team one place to align on strategy, track key updates, utilize agents, and collaborate-right where work happens. With FY'26 kicking off, now's the time to sync with your team, get clear on your accounts, and start planning your next moves!

=== Message from Claudia Caroccia <claudia.caroccia@salesforce.com> (U02Q0GNMZHU) at 2025-02-24 19:24:57 GMT === 
Message TS: 1740425097.850539
<@U02Q0GNMZHU|Claudia Caroccia> has joined the channel

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2025-02-24 19:24:57 GMT === 
Message TS: 1740425097.948129
<@U01H981JRDX|Rima Mukherjee> has joined the channel

=== Message from Dan Cattini <dcattini@salesforce.com> (U02CX88DUER) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.030499
<@U02CX88DUER|Dan Cattini> has joined the channel

=== Message from Caner Ipek <cipek@salesforce.com> (U01G1CL7DF0) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.114279
<@U01G1CL7DF0|Caner Ipek> has joined the channel

=== Message from Cagdas Cihan Ordu <cordu@salesforce.com> (U01GE9K4FJ8) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.218369
<@U01GE9K4FJ8|Cagdas Cihan Ordu> has joined the channel

=== Message from Josh Shiewitz <jshiewitz@salesforce.com> (U01G8MRPSSF) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.307729
<@U01G8MRPSSF|Josh Shiewitz> has joined the channel

=== Message from Martin Cowton <mcowton@salesforce.com> (WF9DPRYBE) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.387259
<@WF9DPRYBE|Martin Cowton> has joined the channel

=== Message from Stephen Donnelly <stephen.donnelly@salesforce.com> (U01ESLQ2FBP) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.467219
<@U01ESLQ2FBP|Stephen Donnelly> has joined the channel

=== Message from Tom O'Neill <thomas.oneill@salesforce.com> (U01FU44QDUP) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.602289
<@U01FU44QDUP|Tom O'Neill> has joined the channel

=== Message from Rawad Fakhry <rfakhry@salesforce.com> (U01G8QPPZ8S) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.760929
<@U01G8QPPZ8S|Rawad Fakhry> has joined the channel

=== Message from Noreen Cullen <ncullen@salesforce.com> (U01GMD9RLAV) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.885539
<@U01GMD9RLAV|Noreen Cullen> has joined the channel

=== Message from Daniel Walsh <daniel.walsh@salesforce.com> (U025E5CDM6C) at 2025-02-24 19:24:58 GMT === 
Message TS: 1740425098.966449
<@U025E5CDM6C|Daniel Walsh> has joined the channel

=== Message from Binda Sewak <bsewak@salesforce.com> (U06AG8D0C10) at 2025-02-24 19:24:59 GMT === 
Message TS: 1740425099.071099
<@U06AG8D0C10|Binda Sewak> has joined the channel

=== Message from John Yeo <john.yeo@salesforce.com> (U01KPDQ8916) at 2025-02-24 19:24:59 GMT === 
Message TS: 1740425099.159929
<@U01KPDQ8916|John Yeo> has joined the channel

=== Message from Sarah Hamilton <sarah.hamilton@salesforce.com> (WFB1NFTB8) at 2025-02-24 19:24:59 GMT === 
Message TS: 1740425099.254559
<@WFB1NFTB8|Sarah Hamilton> has joined the channel

=== Message from Jon Patterson <jonny.patterson@salesforce.com> (U029YS5SGKE) at 2025-02-24 19:24:59 GMT === 
Message TS: 1740425099.358509
<@U029YS5SGKE|Jon Patterson> has joined the channel

=== Message from Submit Account plan for this account for Approval by March 14th  (B08HL2G8XE0) at 2025-03-12 22:11:25 GMT === 
Message TS: 1741817485.535709
It's time to complete sales planning for your FY26 territory for this account.

>  You are required to complete Account planning in Org62 based on the FY26 requirements. Please submit for approval by *Friday, March 14* to allow your manager time to review and approve by *Friday, March 21*. 
Go here for more information:
- Account Planning User Guide & FAQ
- Account Planning canvas
- #account-planning-support

=== Message from Francis Clauson <fclauson@salesforce.com> (U01G52VMZEH) at 2025-09-25 12:57:27 BST === 
Message TS: 1758801447.723849
<@U038JMVKGBB|Josh Adams> <@U01JF0ZG4CX|Sylvain Naltchayan> 
F09H2GS6ELE
I am tasked with getting an update status on the Agent implementation at this client - could you please put an update on this Slack list as to where we are and when you can expect it to go live
1 - update the adoption blocker column
2 - update he next steps
3 - update the next action date
4 - put a note in the notes section as to what the next actions are

Please at mention me here when you have made you update
Thread: 5 replies (latest: 2025-09-29 10:36:42 BST)
Reactions: eyes (1)
Files: Consumption_Adoption (ID: F09H2GS6ELE, application/vnd.slack-docs, 2.5 KB)

=== Message from Nils Koop <nkoop@salesforce.com> (U01GEV1NDHS) at 2025-09-29 16:17:42 BST === 
Message TS: 1759159062.821369
Hi <@U038JMVKGBB|Josh Adams> <@U01G8EKKN9Y|George Griffin>,  <@U02R8HL4FPS|Aman Chhabra> from our GDC has been added to the FCA with immediate effect to cover the next 2 weeks until <@U07EKQCE5DX|Vaibhav Krishna Kumar> will return from his paternity leave. Would you be able to add Aman to the respective calls with FCA <@U02PVJUJYL9|Jonathan Toms> had scheduled? Any questions, please let me know. Thank you
Thread: 1 replies (latest: 2025-09-29 22:16:27 BST)
Reactions: +1 (1), +1::skin-tone-3 (1)

=== Message from Chris Pannell <cpannell@salesforce.com> (U01GE9KF0TE) at 2026-01-22 10:16:59 GMT === 
Message TS: 1769077019.025509
<@U038JMVKGBB|Josh Adams> <@U08SVT0AXDJ|Damian Ondore> SC tells me that Jagpal mentioned that they are looking into slack but that he had concerns around retention of history and FOIs- whilst my immediate reaction is "what on earth is being said behind the scenes that you are concerned about it?!?" ... I know that within msft teams its standard practice in most orgs to wipe down chat history after 7-14 days for this exact reason.

This tends to be the reason why engineering teams need to have slack outside of teams for retention of knowledge...

Are we aware of this / working on it?

<@U01G8F4AASW|Jon Bland> I wonder if its worth an introduction for me to Jagpal OR if its worth you speaking with Jagpal and finding out who I am best to meet with to explore it further rather than talk product / solution- as this is policy is driven by risk-aversion and underpinned by cultural problems- but the net result being that internal knowledge [the fuel of AI] is being deleted... which in turn removes to power of things like slackbot and creating internal agents...
Thread: 13 replies (latest: 2026-01-23 15:55:50 GMT)
Reactions: eyes (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-13 10:52:12 GMT === 
Message TS: 1770979932.275449
<@U01FU44QDUP|Tom O'Neill> <@U061STVMSK0|Murray Grubb Jnr> <@U01ESLQ2FBP|Stephen Donnelly> <@U08SVT0AXDJ|Damian Ondore> <@WFB1NAQVC|David O'Farrell> we are now using this channel for everything related to FCA... I have moved our actions canvas over
Reactions: +1 (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-13 10:56:08 GMT === 
Message TS: 1770980168.029889
Hi team, quick overview of the very exciting visioning work that is kicking off at FCA. I would love to get representation from the entire the 360 suite - tight turnaround! <@U01HYKY7HFF|Maribel Pinilla> will be leading this with <@U02RD5RN134|Jim Douglas> in <@U01JF0ZG4CX|Sylvain Naltchayan>'s absence
Files: Case Management Vision - Follow Up & Next Steps (ID: F0AET1D5Q6S, text/html, 19.4 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-13 14:21:26 GMT === 
Message TS: 1770992486.278249
<@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> - I would like to present on Slack / Tableau at the FCA & Salesforce Quarterly Roadmap session on 4th March... the audience is Head of Departments from across the FCA so a great oppty to pitch in our solutions

• Slack - future of work with SlackOS - how Slack is more than just a IM tool but also a way we orchestrate and action work. I think this could be a piece of thought leadership rather than a FCA demo - <@U08SVT0AXDJ|Damian Ondore> - do we have anyone that can lead this, <@U01GE9KF0TE|Chris Pannell> maybe?
• Tab - FCA Salesforce team are keen to understand what moving to Cloud means for them - embedded analytics into the SFDC platform, then great oppty to showcase Tab Plus/Next features too. <@U01H981JRDX|Rima Mukherjee> - would this be something that you and Dipesh could potentially support?

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-02-13 14:28:00 GMT === 
Message TS: 1770992880.199629
Yeah, I think Chris would be a good shout for that. I also ask around. I don't think I know all the SMEs who tend to do speaking events for us
Reactions: thread (1)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-02-13 15:31:02 GMT === 
Message TS: 1770996662.280419
Absolutely . <@US3RV8154|Dipesh Bhoola> and I would love to drum it in again  the value of Tableau Pulse and Plus and teh value of joining the two together
Reactions: thread (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-16 11:23:44 GMT === 
Message TS: 1771241024.906089
<@U01FU44QDUP|Tom O'Neill> <@U061STVMSK0|Murray Grubb Jnr> <@U01ESLQ2FBP|Stephen Donnelly> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U0A715JAUSV|Rachael Ross> as discussed on the Friday call we have a very exciting opportunity to showcase our vision for Case Management at the FCA. Myself, <@U01HYKY7HFF|Maribel Pinilla> and <@U02RD5RN134|Jim Douglas> (in the absence of <@U01JF0ZG4CX|Sylvain Naltchayan>) are leading this initiative and this is a great chance for us to finally show FCA the connected power of our platform(s) and technology.

We will use <#C0AEQ756YDA> as the channel to discuss activities and share progress so I will add you all in to that channel. While <@U01HYKY7HFF|Maribel Pinilla> and <@U02RD5RN134|Jim Douglas> have a good knowledge of our portfolio I will need you all to step up and make sure your products are well represented and fulfilling their potential :muscle: Maribel knows the business process and will be owning the overall solution.

Let me know if any issues ! P.S. Apologies the channel is set to Private. I originally set it up so the FCA could potentially join and we could collaborate in real-time however Slack is blocked on their side :smile: Can't change the permissions
Thread: 1 replies (latest: 2026-02-19 14:10:39 GMT)
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-02-16 11:25:10 GMT === 
Message TS: 1771241110.285829
Good news. As discussed <@U02KREQAW2W|Christopher Foster> and I presented on exactly this to Student Loans and could do a reskin to showcase it for FCA 
Reactions: raised_hands (1), +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-19 14:12:29 GMT === 
Message TS: 1771510349.781989
<@U01GE9KF0TE|Chris Pannell> <@U01ESLQ2FBP|Stephen Donnelly> - appreciate you are both off this week but FCA are keen to meet to talk through our approach to Marketing, initially around Events Management but also a great oppty to show our more holistic approach to Marketing Cloud.

I have got a placeholder in for 11th March, all morning, I will send a placeholder now so let's talk next week about suitability and scope

cc: <@U01G8F4AASW|Jon Bland> <@U01FU44QDUP|Tom O'Neill>
Thread: 4 replies (latest: 2026-02-24 10:59:22 GMT)
Reactions: loveitt (2)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-02-19 15:26:32 GMT === 
Message TS: 1771514792.336419
<@U038JMVKGBB|Josh Adams> <@U01FU44QDUP|Tom O'Neill> I just had an intro call with a Catherine Coady (<mailto:Catherine.Coady@fca.org.uk|Catherine.Coady@fca.org.uk>) a FCA HR senior manager . She is building a digital roadmap for HR. Their main tool is Workday and she is keen to discuss emerging thinking on SF Agentforce and Workday, and what is our HR features in that space.
I thought it would be useful for you to know and maybe connect with her and continue the conversation?
Thread: 1 replies (latest: 2026-02-19 15:29:19 GMT)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-02-20 18:29:06 GMT === 
Message TS: 1771612146.381179
<@U038JMVKGBB|Josh Adams> As we discussed earlier, here a bit more information about Authorisations AI Delivery Team (Project Libra).
They are planning or using (I'm not sure the project status) to help identify risks in Senior Manager Regime and other applications upon submission. Since Authorisations is moving to Gateway forms I guess AI tech may be related.

Hannah Lipscombe-Mitchell (<mailto:hannah.lipscombe@fca.org.uk|hannah.lipscombe@fca.org.uk>) is the head of Authorisations department.
Glenn Redemann (<mailto:glenn.redemann@fca.org.uk|glenn.redemann@fca.org.uk>) is the manager of the AI Delivery Team.
Thread: 1 replies (latest: 2026-02-23 09:27:31 GMT)
Reactions: +1 (1), raised_hands (1)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-02-24 09:37:50 GMT === 
Message TS: 1771925870.231959
Good morning <@U038JMVKGBB|Josh Adams> <@U01FU44QDUP|Tom O'Neill>. I received an email from Seema Dhokia. She is a Product owner in the CCRM Team working in the HSI project(I haven't heard about this project before). She asked me about differences in the Digital Engagement Licenses they're looking to procure. Is this in your radar? Also she asked me for assistance in scaling SF, apparently the project will increase calls and cases.
Is that something <@U09KM7QHDDW|Chris Dowlen> you can assist?
Please advise. :thankyou_:
Thread: 2 replies (latest: 2026-02-24 09:58:31 GMT)
Reactions: raised_hands (1)

=== Message from Chris Pannell <cpannell@salesforce.com> (U01GE9KF0TE) at 2026-02-24 10:54:18 GMT === 
Message TS: 1771930458.710989
<@U038JMVKGBB|Josh Adams> did we make any progress on connecting with Siobhan Sheridan to meet with <@U01G90Z4BNX|Nathalie Scardino> week of march 9th?

<@U01G8F4AASW|Jon Bland> <@U08SVT0AXDJ|Damian Ondore>
Thread: 5 replies (latest: 2026-02-24 12:52:49 GMT)

=== Message from Request Dispatch <botuser-T7T5PNK3P-A0AC8R6J2KV@slack-bots.com> (U0AFB3J5LBC) at 2026-02-25 01:37:14 GMT === 
Message TS: 1771983434.281389
This channel is not linked to a Salesforce record. I'll be leaving now. Please add me to a Salesforce-linked channel to use my features.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-26 11:51:59 GMT === 
Message TS: 1772106719.881069
<@U0A715JAUSV|Rachael Ross> - good to chat earlier! As discussed I will get you an updated stakeholder/divisional map for FCA and key themes and use cases across each of these so you have some talking points and potential product directions. Let's work with <@U01FU44QDUP|Tom O'Neill> to come up with a FCA-specific qualification criteria for Stage 2 opptys that we mutually agree on
Thread: 3 replies (latest: 2026-02-26 16:59:49 GMT)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-02-27 13:19:44 GMT === 
Message TS: 1772198384.966839
FYI - FCA AI Features pilot is now LIVE in Production :party:

Thanks so much for all of your help and support <@U01HYKY7HFF|Maribel Pinilla> and <@U09KM7QHDDW|Chris Dowlen>

We will all be supporting the account and programme to ensure that adoption is positively received which will be a key factor in rolling out from 40 to 3000 users! :fire:
Reactions: +1 (1), agent-27 (4), +1::skin-tone-2 (1)
Files: image.png (ID: F0AJE08J42U, image/png, 131.9 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-03 08:45:00 GMT === 
Message TS: 1772527500.445779
<@U01FU44QDUP|Tom O'Neill> <@U061STVMSK0|Murray Grubb Jnr> <@U01ESLQ2FBP|Stephen Donnelly> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U0A715JAUSV|Rachael Ross>

:alert: FYI - FCA Account Planning Homework :alert:

<https://docs.google.com/presentation/d/1tSIZTfK61_F3QM0tjwTnK0VtMfzJgvwBUNnwnZCST6E/edit?usp=sharing>

We have our account planning session next Tuesday 10th March. In advance of the session I have put down a few thoughts on the proposed agenda and what I would like to see each of you present and discuss in the session - please see link above.

I will formulate this into a more structured agenda with timings in the coming days but please review slide 1 for context and then make a copy and complete your versions of slide 2 and 3 for each of your respective roles, we can then merge this into the main pack I am working on in the background. Please shout if you have any questions :strong: Pls feel free to give me a suitable emoji reaction on this to let me know you've seen and acknowledged this!

cc: <@U01G8F4AASW|Jon Bland>
Reactions: eyes (3), tomjingo (1), heart_eyes (1)
Files: FCA Account Planning FY27 (ID: F0AJ2ME4LCD, application/vnd.google-apps.presentation, 0 Bytes)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-03 11:16:34 GMT === 
Message TS: 1772536594.732739
Project Irwell platform scalability conversation: sizing from Steve <@U01FU44QDUP|Tom O'Neill> <@U01HYKY7HFF|Maribel Pinilla> <@U09KM7QHDDW|Chris Dowlen>. Let's add any further notes in :thread:
Reactions: +1::skin-tone-4 (1), +1::skin-tone-2 (1), +1 (1)
Files: image.png (ID: F0AJ13GAMDH, image/png, 372.8 KB)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-03-03 11:26:08 GMT === 
Message TS: 1772537168.138789
20th March

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-03-03 11:27:51 GMT === 
Message TS: 1772537271.695709
this is one of those secret squirrel... it is also mentioned in James's email

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-03 13:38:49 GMT === 
Message TS: 1772545129.191049
<@U01JF0ZG4CX|Sylvain Naltchayan> - Steve H confirmed that the 'BYOLLM via https' discussion has currently been deprioritised by Project Irwell (Motor Finance chatbot) which will take up most bandwidth until the end of March. Let's pick up with him in April
Thread: 1 replies (latest: 2026-03-03 16:34:18 GMT)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-03-03 16:37:16 GMT === 
Message TS: 1772555836.989119
Hi team (<@U038JMVKGBB|Josh Adams>)
Hi team
An update following this am's Deloitte meeting.
Participants: Nadia, Preeti (Delivery Lead Deloitte), Victor
• They went live this week with one use case (yay) - 37 out of 50 users - last 13 should go live this week
    ◦ It all went very well, users are overall positive - group chat is very busy
    ◦ There is however an *issue (which needs investigating)* - with the 'draft with einstein' functionality for the case resolution field. The users click an 'einstein ai' button next to the case resolution field - this triggers a flow (from the prompt)- which opens an 'agentforce looking-like' window on the side which creates the summary which users can still edit... and with which users can still interact with once the summary has been created. A user did this - asking more questions... and this is when the issue happens - it started creating hallucinations. So ... need to find a way round this! 
• Has the tender come out yet for innovation work?
    ◦ No
• Have they thought any more about bringing in a CTO from us as part of the bid?
    ◦  First time Nadia, Preeti heard about that. They will check with Hannah
<@U09KM7QHDDW|Chris Dowlen> <@U07EKQCE5DX|Vaibhav Krishna Kumar> - making you aware to see if we can collaborate on this - whether to involved product teams too!
Thread: 5 replies (latest: 2026-03-04 08:47:50 GMT)
Reactions: +1 (1), raised_hands (1), raised_hands::skin-tone-2 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-05 09:24:17 GMT === 
Message TS: 1772702657.205259
<@U0A715JAUSV|Rachael Ross> <@U01FU44QDUP|Tom O'Neill> - let's explore ITSM for FCA...! Try and find who runs that team. I am 99% sure they use SNow so will be interesting to see when that contract expires
Thread: 1 replies (latest: 2026-03-05 09:29:37 GMT)
Reactions: +1 (1), muley (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-05 09:40:51 GMT === 
Message TS: 1772703651.648679
:fca::fire: :heart: FCA 360 Appreciation Post :heart: :fire: :fca:

Hi <!channel>,

Just a quick note to say thank you from me for two important meetings yesterday with the FCA. There has been a lot of work and coordination across these two sessions and I am really happy with how they have gone:

1. Case Management Vision - Exec Check In
    ◦ <@U01HYKY7HFF|Maribel Pinilla> and <@U01JF0ZG4CX|Sylvain Naltchayan> delivered a brilliant demo and walk-through of the case management vision work that has been built in the last 2 weeks.
    ◦ The feedback received was really positive - quotes from our two Director sponsors...
        ▪︎ Debbie: "this is absolutely fantastic, the best demo I have ever seen from Salesforce and I love how ambitious and intuitive it is - absolutely spot on. I love it"
        ▪︎ Jagpal: "this looks very rich and compelling"
    ◦ There is a huge amount of work still do over the next three weeks as we have committed to having the bulk of the work complete by the end of March. <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01HYKY7HFF|Maribel Pinilla> I want this to be our priority please as this has become very high profile with Simon C's eyes on it
    ◦ Next steps:
        ▪︎ <@U01HYKY7HFF|Maribel Pinilla> <@U01JF0ZG4CX|Sylvain Naltchayan> - let's get the regular check in scheduled with the FCA/Salesforce working group for progress updates and feedback
        ▪︎ <@U01HYKY7HFF|Maribel Pinilla> <@U01JF0ZG4CX|Sylvain Naltchayan> let's also get a review session in with the 360 team to see how we can seed in some of the 360 products into this journey - there was considerable interest in including Tableau Next and Slack, and need to see if we can show how any integrations underpinned by Mule/Informatica
2.  Quarterly Roadmap Forum
    ◦ A revamped format where we take the lead on innovation and thought-leadership, we showcased four topics to senior FCA stakeholders. This is a marked change from the old format where we focussed on release notes and technical incremental enhancements. We had great feedback and made good introductions for our 360 team with new sets of stakeholders that we can follow-up with, build some pipe and (hopefully) close some business!
    ◦ Key follow-ups (not exhaustive):
        ▪︎ Damian - Slack with Ian Hersey
        ▪︎ Rima - Tableau Next with Ian Hersey, James Symon, Penny Forsyth
        ▪︎ Josh/Tom - Showcasing Agent Bobbi to execs and Jo-Anne/Steve in SupHub
    ◦ Thank you to our presenters and attendees... <@U08SVT0AXDJ|Damian Ondore> <@U01HYKY7HFF|Maribel Pinilla> <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01H981JRDX|Rima Mukherjee> <@US3RV8154|Dipesh Bhoola> <@U01G1D75W22|Emily Hill> <@U01G8F4AASW|Jon Bland> <@U061STVMSK0|Murray Grubb Jnr> 

Thread: 7 replies (latest: 2026-03-12 09:47:27 GMT)
Reactions: clapping1 (7), raised_hands::skin-tone-2 (1), fire (3), raised_hands (2), hearts (1), sun (1), balloons (1), clapping-inclusive (1), muley (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-06 16:59:11 GMT === 
Message TS: 1772816351.579529
<@U01FU44QDUP|Tom O'Neill> <@U061STVMSK0|Murray Grubb Jnr> <@U01ESLQ2FBP|Stephen Donnelly> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U0A715JAUSV|Rachael Ross>

Hi team, sorry to come with bad news but a gentle reminder on this task in prep for Tuesday !! I'm sure you have all completed it already and you're ready to go :wink:

Just need to talk through your two slides for 10-15 mins each then we can have more of a conversation about any support you need from other members of the team or our execs.

Have a great weekend and see you all soon!
Reactions: +1 (2), muley (1)
Forwarded message from Josh Adams (https://salesforce.enterprise.slack.com/archives/C08EVRN6152/p1772527500445779) — use slack_read_thread or slack_read_channel to read the original message

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-10 09:29:17 GMT === 
Message TS: 1773134957.848469
Morning all, today is the day - Account Planning!

Thanks to <@U01FU44QDUP|Tom O'Neill> <@U01H981JRDX|Rima Mukherjee> <@U0A715JAUSV|Rachael Ross> for getting your slides in the pack.

<@U061STVMSK0|Murray Grubb Jnr> <@U01ESLQ2FBP|Stephen Donnelly> <@U08SVT0AXDJ|Damian Ondore> would be great to get your slides in the main pack before the session this afternoon. Look forward to seeing/speaking to you all later.
Reactions: +1 (2)

=== Message from Tom O'Neill <thomas.oneill@salesforce.com> (U01FU44QDUP) at 2026-03-10 14:02:30 GMT === 
Message TS: 1773151350.120179
<@U08SVT0AXDJ|Damian Ondore> - as per discussion

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-03-10 14:14:28 GMT === 
Message TS: 1773152068.421899
set the channel description: This is the primary channel for communications for members of the account team for The Financial Conduct Authority.

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-03-10 14:14:50 GMT === 
Message TS: 1773152090.351079
set the channel topic: Account Communications and Alignment

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-03-10 15:02:39 GMT === 
Message TS: 1773154959.139539
Oh, thx <@U01FU44QDUP|Tom O'Neill>

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-11 16:15:38 GMT === 
Message TS: 1773245738.322899
<@U01H981JRDX|Rima Mukherjee> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U01ESLQ2FBP|Stephen Donnelly> <@U01FU44QDUP|Tom O'Neill>

Apologies, we should've covered this yesterday... more on that later... but can I ask you to fill out your view on initial QAP for FCA please? Indicative for now... we can refine/review as things build out :slightly_smiling_face:

<https://docs.google.com/presentation/d/1t9MHbTmOoTD2vGJ78Qp5fcoiovvH8OGxFJX27ScVIJM/edit?usp=sharing>

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-11 16:32:47 GMT === 
Message TS: 1773246767.004069
<!channel>

:fca: :cash: *FY27 Account Planning* :cash::fca: 

Thanks to the team that attended FCA Account Planning yesterday - it was great to hear from you all and I hope you found the broader account context and strategy useful when thinking about how we approach this year.

Deck <https://docs.google.com/presentation/d/1tSIZTfK61_F3QM0tjwTnK0VtMfzJgvwBUNnwnZCST6E/edit?usp=sharing|here> - annotated account plan also included in-line and linked in the 360 Actions Tracker canvas.

It was also really good to see some of the thought behind the business plans - I suggest that we track progress against these in our Friday calls. Please work with <@U0A715JAUSV|Rachael Ross> to ensure she is enabled on how to help execute your outreach. Always keen to help unblock and fill in knowledge if useful and helpful, and remember let's put any key updates in this main channel so we can share knowledge and move forward together :strong:
Reactions: thankyouuu (2), raised_hands (1), raised_hands::skin-tone-5 (1)
Files: FCA Account Planning FY27 (ID: F0AJ2ME4LCD, application/vnd.google-apps.presentation, 0 Bytes)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-12 10:07:45 GMT === 
Message TS: 1773310065.177269
<@U01HYKY7HFF|Maribel Pinilla> <@U01JF0ZG4CX|Sylvain Naltchayan> - I will not be on the Case Mgmt Vision session today as I already had my Nuffield Health Assessment booked today, apologies! Keep us updated on here as to how it goes :slightly_smiling_face: :fingers_crossed:
Thread: 1 replies (latest: 2026-03-12 10:12:11 GMT)
Reactions: +1::skin-tone-2 (1)

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-03-12 10:59:44 GMT === 
Message TS: 1773313184.653889
<@U038JMVKGBB|Josh Adams> and <@U01H981JRDX|Rima Mukherjee> does it make sense to add a Specialist Forecast for Tab Next related Tab Next in the opp *<https://org62.lightning.force.com/lightning/r/Opportunity/006ed00000Q8URlAAN/view|UK - FCA - Agentforce for Service Roll-Out - T1>*<https://org62.lightning.force.com/lightning/r/Opportunity/006ed00000Q8URlAAN/view| >?

This is in relation to the *FCA Case Management Vision* I'm working with Sylvain and Maribel on
Thread: 1 replies (latest: 2026-03-12 12:29:37 GMT)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-03-12 11:09:06 GMT === 
Message TS: 1773313746.120749
The SFR automatically appears once we add Tab products on it. I will add Tab next on the product list . <@U038JMVKGBB|Josh Adams> are you ok with that? It is a multi cloud opp, so best to keep it together
Reactions: +1 (2), thread (1)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-03-12 13:53:11 GMT === 
Message TS: 1773323591.573789
Hi <@U038JMVKGBB|Josh Adams> , <@U01FU44QDUP|Tom O'Neill> , What comes with Agentforce for service is very limited and it will be great to land with Tabnext licenses unmetered with it. Happy to discuss as we progress with microsite.
Thread: 1 replies (latest: 2026-03-12 14:47:22 GMT)
Reactions: +1 (1), raised_hands (1)
Files: image.png (ID: F0AGJHCC8VB, image/png, 1.2 MB)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-03-12 17:48:14 GMT === 
Message TS: 1773337694.803049
Hi team
Update from this am's checkpoint re. Case Management Vision (FCA: Penny, Caryl, Pat O'R, Paul Rice, Paul W .... SF: Maribel, Sylvain)
Maribel took them through progress (positive reaction), and got some more feedback.

• Demo progress:
    ◦ Case Experience - refining
    ◦ Slack collaboration - in progress
    ◦ AI - 'what is my focus for today' - in progress 
    ◦ Queues assignment and notification to supervisor -
    ◦ MI - Dipesh is working on that
• Microsite
    ◦ Created first draft
    ◦ Gathering content
    ◦ FCA liked the idea their LT did a 30sec video (will it happen?) 
    ◦ Paper from Salesforce Futures - reached out to Futures team - nothing specific on future of case management - but still investigating. 
    ◦ <@U038JMVKGBB|Josh Adams> - can we work together on thinking about relevant customer stories (doesn't need to be Pub Sec of course)

Thread: 9 replies (latest: 2026-03-16 10:45:25 GMT)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-13 10:26:48 GMT === 
Message TS: 1773397608.587999
<@U01H981JRDX|Rima Mukherjee> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U01ESLQ2FBP|Stephen Donnelly> <@U01FU44QDUP|Tom O'Neill> <@U0A715JAUSV|Rachael Ross> <@U01JF0ZG4CX|Sylvain Naltchayan>

I have added a summarisation of your 90 day business plans we discussed in Acct Planning on Tuesday to the Canvas and have refreshed the format slightly.

No need to update with key progress for this week as I have only just done it now. Key things for our 11am call moving forward is basically calling out key progress / blockers in achieving your 90 day business plans, or whether we are pivoting our approach in the business plan (that is ok, things change!).

We need to try and be strict to keep it to only a few mins each then take anything else offline that warrants further discussion so there is time and space for everyone... I will try and stop waffling!

Cheers

<https://salesforce.enterprise.slack.com/docs/T01G0063H29/F0AF7TL5WC9>
Reactions: +1 (1), thankyouuu (1)
Files: 360_Tracker (ID: F0AF7TL5WC9, application/vnd.slack-docs, 6.4 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-13 11:31:33 GMT === 
Message TS: 1773401493.352609
<@U01H981JRDX|Rima Mukherjee> <@U08SVT0AXDJ|Damian Ondore> <@U01H981JRDX|Rima Mukherjee> <@U01ESLQ2FBP|Stephen Donnelly> <@U01FU44QDUP|Tom O'Neill> <@U0A715JAUSV|Rachael Ross> <@U01JF0ZG4CX|Sylvain Naltchayan>

Please put your invitees in this thread. <@U0A715JAUSV|Rachael Ross>  - perhaps for each of our segments you can include the respective 'contact owners' in cc so we can follow up next week if needed.... e.g. my list cc me, Rima's list cc her etc etc...
Thread: 11 replies (latest: 2026-03-13 16:13:33 GMT)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-03-16 14:23:03 GMT === 
Message TS: 1773670983.801779
Hi <@U038JMVKGBB|Josh Adams> - Very quick question - Are FCA licensed for Shield? Asking to ascertain if they may have access to event monitoring
Thread: 1 replies (latest: 2026-03-16 14:26:45 GMT)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-18 10:49:53 GMT === 
Message TS: 1773830993.700419
Hi all,

:alert: :spotlight-1::fca: Update from the bi-annual FCA-Salesforce Strategic Review yesterday at FCA HQ in Stratford. :fca: :spotlight-1::alert:

Purpose: Executive check-in to discuss health of the relationship, key priorities/updates and what to focus on next.

SF attendees: <@U038JMVKGBB|Josh Adams> <@U01G8F4AASW|Jon Bland> <@U01G8R2NXB4|Simon Collinson> <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01HYKY7HFF|Maribel Pinilla> <@W011GHC2ZPX|Richard Cole>
FCA attendees:
• Jagpal Jheeta - Chief Product Officer
• James Symon - Head of Department, Digital Systems, DTI
• Penny Forsyth - Head of Department, Regulatory Excellence, EMO
• Dominic Hastings, Chief Procurement Officer
• Jason Baker -  Interim Chief Architect, Strategy and Architecture
• Mayesta Ewer - Head of Department, Intelligence and Digital, DTI
• Ian Hersey - Senior Manager (Interim), Case & Regulatory Risk Management, DTI
The meeting was positive - the FCA were overall happy with the state of the relationship and the way we are working together, they feel we are moving towards a productive, strategic relationship, especially through initiatives like Case Management vision, strategic licensing conversations for Agentforce/AI and then bring together our broader ecosystem with Informatica, Tableau and Core.

I will attach the deck and the meeting notes when they come through from the FCA.

Key notes/actions for the 360 - let's pick up and discuss on Friday.
• <@U01H981JRDX|Rima Mukherjee> -  we discussed that there is a possibility of early renewing the Tab contract and moving it to direct. FCA are going to explore this but certainly one to consider in conversations. There is a desire to bring this into the maiN Salesforce contract
• <@U061STVMSK0|Murray Grubb Jnr> - there was a high level presentation by <@W011GHC2ZPX|Richard Cole> on our view on Data Foundations - Jason Baker and team are interested to hear more, and there was a view that we should be doing some proper discovery here to then present back a combined POV of how our entire ecosystem could provide value to the FCA. The FCA recognised that previously the supplier governance has just been focussed on Core Case Management, but with our growing product set we should be presenting a broader FCA-specific POV about Data Foundations to a wide range of FCA stakeholders... let's follow up and kick off this engagement please... I am happy intro, but we will also need to discuss with the INFA team internally.
• Discussed how we secure a true Advisory presence across the multiple Salesforce workstreams at FCA. <@U01HYKY7HFF|Maribel Pinilla> <@WFB1NAQVC|David O'Farrell> let's work on providing a POV here... we must have v good examples from our larger commercial customers that are heavy users of our Advisory teams alongside SI delivery teams.  Dominic Hastings and Jagpal happy to broker the conversation internally to see what they can do here given we cannot transact on DSF...
• re: GenAI issue last week, <@U01JF0ZG4CX|Sylvain Naltchayan> can you work to propose this three way meeting between Deloitte, SF and FCA to facilitate the lessons learned issue. Shall we see if we can bring in a AI SME from our side that can help bring some examples of lessons learned from other customers too...? Perhaps something we can host in the Tower on our side
• Jason Baker also confirmed as the PoC for our ITSM play... <@U038JMVKGBB|Josh Adams> will take the lead on this with him and <@U01FU44QDUP|Tom O'Neill> when he is back from PTO, keen to showcase our recent win with TVP
• Post Quantum Computing - agreed <@U038JMVKGBB|Josh Adams> will pick up with Product group
• Study tour to San Francisco - agreed <@U038JMVKGBB|Josh Adams> will discuss internally and present proposal back to FCA Execs
Reactions: thankyou-2 (5), yes (2), muley (1), eyes (1), datarockstar (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-03-19 10:21:34 GMT === 
Message TS: 1773915694.848859
Great work indeed guys. I met with <@U01H981JRDX|Rima Mukherjee> yesterday and we were fleshing out our Data Foundations GTM and had already highlighted FCA for a Data Outcomes Workshop so this is great news. As we are meeting with Olly Segar tomorrow Josh this could be a great starting point for us to pick up and run with
Thread: 1 replies (latest: 2026-03-20 11:03:38 GMT)
Reactions: +1 (2), raised_hands (1)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-03-20 13:18:16 GMT === 
Message TS: 1774012696.983509
We had 6 use cases meeting this week and it was great to hear how they use our tool , how critical it was . Hi <@U9KRV0A91|Waqqas Awan>, Great work and detailed capture and methodical as always . Let's call it : Data stories at FCA event ( June tbc) and activities under it .
1. Talking to customers , understanding data stories
2. We choose Top 5 to share like we did at @slc
3. Launch of Data community( and that way we bring the Salesforce teams into the fold , <@US3RV8154|Dipesh Bhoola> bringing in the case management team too)
Our goal is two fold -Grow it wall to wall
• Strategic motion to move to Tab+
• Tab next adoption and plays <@U038JMVKGBB|Josh Adams> looking forward to having a successful Data Day early June in FCA, that will give us pace to achieve our goal for 2027.
Notebook for the Tableau Day discussions we've had this week: <https://notebooklm.google.com/notebook/0def3856-da53-4874-8925-afb891ab1cbe>
Reactions: +1 (1)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-03-23 10:57:59 GMT === 
Message TS: 1774263479.316589
Hello team
have you seen this?
<https://www.computing.co.uk/news/2026/government/uk-financial-watchdog-taps-palantir-for-data-analysis>
Thread: 4 replies (latest: 2026-03-24 11:03:03 GMT)
Reactions: eyes (2), no (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-23 14:41:47 GMT === 
Message TS: 1774276907.810319
Notes from <@U07EKQCE5DX|Vaibhav Krishna Kumar> from Security playback... great work <@U07EKQCE5DX|Vaibhav Krishna Kumar>!

_------_

_As discussed, I connected with the success guide, <@U02J48UD6BV|Yann Heisel>, and "Shield" is one of the recommendations in this readout; he would emphasise it during the readout._
_Here are the links for the readout deck FYR:_
• _*<https://docs.google.com/presentation/d/1LzcXwvydZI2oVBVF1BPC-RQUQ5LMl7OczKICbJIOLF4/edit?usp=sharing|FCA Intact>*_
• _*<https://docs.google.com/presentation/d/1qlZUElc0neapP5WIBmyoTR-dEHgT0cS1ZlZvAFFWz-0/edit?usp=sharing|FCA ESS>*_
• _Playback notes: <https://docs.google.com/document/d/11aGtorr7D8uEzvKkrXdkNqB2LwBSdhmkl6ayxgGERsc/edit?usp=sharing>_
Reactions: raised_hands::skin-tone-2 (1)
Files: 20 14:00 GMT - Notes by Gemini (ID: F0AN5SVJETX, application/vnd.google-apps.document, 216.5 KB), INTACT- Use & Optimize: Security Maturity Assessment- Financial (ID: F0ANCSY4JR2, application/vnd.google-apps.presentation, 209.0 KB), ESS - Use & Optimize: Security Maturity Assessment- Financial (ID: F0AN5QAAD53, application/vnd.google-apps.presentation, 209.0 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-23 15:22:43 GMT === 
Message TS: 1774279363.074749
<@U01H981JRDX|Rima Mukherjee> do you have any news/updates on Insights Hub at FCA? We have just been on a call and it is has come up that there is going to be some natural synergies between what Insights Hub are doing what the core Salesforce platform and the RegEx programme. Let me know !

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-03-23 15:30:30 GMT === 
Message TS: 1774279830.278929
Hi <@U038JMVKGBB|Josh Adams> no updates recently. Alex Atkinson shared with us csix months ago and we wanted deeper dive session,
Thread: 1 replies (latest: 2026-03-24 11:28:19 GMT)
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-24 14:10:27 GMT === 
Message TS: 1774361427.766049
<@U0AACSB611A|Paul Pitman> <@U0AFZ7JHY6S|Ian Currie> - adding you to the main FCA channel with all of the 360 team.

I have also set up <#C0ANBMS4DNX> to take any relevant points offline as necessary.

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-03-24 14:29:13 GMT === 
Message TS: 1774362553.418309
FCA version of Palantir trial
<https://www.linkedin.com/pulse/harnessing-technology-strengthen-uks-defences-against-ian-phoenix-5ekpe?utm_source=share&amp;utm_medium=member_ios&amp;utm_campaign=share_via|https://www.linkedin.com/pulse/harnessing-technology-strengthen-uks-defences-against-ian-phoenix-5ekpe?utm_source=share&utm_medium=member_ios&utm_campaign=share_via>
Reactions: eyes (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-24 16:09:24 GMT === 
Message TS: 1774368564.937489
:fca: :raised_hands: Appreciation Post :raised_hands: :fca:

Special appreciation to the brilliant <@U01HYKY7HFF|Maribel Pinilla> for leading a superb Case Management Vision demo this morning to key, senior FCA stakeholders that are running their RegEx programme! RegEx is the flagship programme at the FCA this year that aims to make the FCA a smarter regulator.

Maribel has done some great work with the wider 360 team (including but not limited to <@US3RV8154|Dipesh Bhoola>, <@U01JF0ZG4CX|Sylvain Naltchayan> and others) in putting together an inspirational vision of what the art of the possible could be for case management at the FCA. This is a full fat agentic-first OS, utilising Slack, Tableau Next and Agentforce on top of a PSS core and can be powered by Mulesoft and Informatica behind the scenes :open_mouth:

This not only includes a killer demo prototype in a sandbox, but also a high quality microsite and accompanying business process and change management slides - the quality of which would take our consulting partbners many weeks with many resources to replicate. All of this has been achieved in around 4 weeks start to finish, while Maribel has also been operating as a full time CTO on the account.

Such is the impact of this initiative, senior FCA stakeholders are already reaching out to see if they can mobilise support from us on making this vision a reality, which is something we have not seen for many months!

Thanks for everything you do <@U01HYKY7HFF|Maribel Pinilla>, it is brilliant to have you as part of our team and we all appreciate your dedication and passion for making a difference at the FCA. We will share the assets and microsite here (and more widely) with the team in due course.

cc: <@U01G8F4AASW|Jon Bland> <@U01FU2QDFST|Patrick Knight> <@U01G8R2NXB4|Simon Collinson>
Thread: 3 replies (latest: 2026-03-24 17:02:31 GMT)
Reactions: agent-27 (5), lovethis_left (3), celebrate1 (2), muscle (1), sun (1), balloons (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-25 11:59:11 GMT === 
Message TS: 1774439951.265809
<@U09KM7QHDDW|Chris Dowlen> - can you take a look at Seema's email re: readiness for Irwell please? Not sure if you are back in today or <@U02PVJUJYL9|Jonathan Toms> is covering. Thanks !
Thread: 6 replies (latest: 2026-03-25 15:57:59 GMT)

=== Message from Christopher Foster <christopher.foster@salesforce.com> (U02KREQAW2W) at 2026-03-26 09:25:48 GMT === 
Message TS: 1774517148.891679
Have people seen this:

<https://www.linkedin.com/posts/financialcrime_fca-palantir-financialcrime-share-7442501657135009792-tpby?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAADkt45EB4ssYjOH6qjt5JFcokyAZzph6WWE&utm_campaign=copy_link|https://www.linkedin.com/posts/financialcrime_fca-palantir-financialcrime-share-7442501657135009792-tpby?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAADkt45EB4ssYjOH6qjt5JFcokyAZzph6WWE&utm_campaign=copy_link> 
Reactions: +1 (3), up_arrow (1), point_up_2 (1), eyes (3)

=== Message from Paul Pitman <ppitman@salesforce.com> (U0AACSB611A) at 2026-03-26 16:45:39 GMT === 
Message TS: 1774543539.558919
news to me. Interesting!

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-30 11:22:07 BST === 
Message TS: 1774866127.157539
:horn:  <https://www.bbc.co.uk/news/articles/c9vlm2ggrwlo> FCA as the number 2 news story on BBC News this morning. They will be supporting this initiative with a Salesforce-powered Chatbot on their website to handle the initial FAQs from consumers and escalate:agentforce: :einstei: Not quite Agentforce but nearly :wink:
Reactions: heart (2), +1 (2)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-03-30 11:32:06 BST === 
Message TS: 1774866726.098089
They wil definitely need Data Quality then!
Reactions: raised_hands (1), +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-31 12:40:59 BST === 
Message TS: 1774957259.646239
Hi all, updates from my monthly call with James Symon below:

• James nervous about Debbie's enthusiasm on RCMS vision and trying to put the brakes on... says we need to be very careful and that there needs to be a lot of internal alignment before we take anything forward (shock!). I was empathetic to his points in the call but we need to make sure we do not let James completely kill this off. I think there is a PoV we can put forward through ProServ that shows how this can be done without completely stopping BAU Salesforce on Intact. cc: <@U01HYKY7HFF|Maribel Pinilla> 
• GenAI incident - pleased to hear issue is fixed, interested in lessons learned session that we offered to facilitate - <@U01JF0ZG4CX|Sylvain Naltchayan> leading on our response with inputs on product
• Agreed I will have a convo with Ian regarding three major commercial events we see from a Core perspective - AfS rollout, Shield and Maribel renewal - to see if we can package up together. Also asked me to check with Phil to see if they can early renew Tab & Informatica contracts if that's a way of releasing trapped value in reseller mark up. FYI <@U01H981JRDX|Rima Mukherjee> <@U01VCLKP8QN|Matthew Rochard> on the Tab / Informatica components
Reactions: thank-yo3 (1), shock (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-07 09:13:30 BST === 
Message TS: 1775549610.689339
<!channel> Agent AVA is live as of this morning, see bottom right of this page - <https://www.fca.org.uk/consumers/car-finance-complaints>

This uses our technology to answer FAQs about the FCA's Motor Finance Redress Scheme which was/is one of the top news stories in the UK over the past few months.

Very simple use case initially but something of a first for the FCA, they have never used anything like this before that is public facing! Let's hope this is the springboard they use to build out capability across different use cases :agentforce:
Thread: 1 replies (latest: 2026-04-07 15:18:13 BST)
Reactions: raised_hands (4), raised_hands::skin-tone-2 (3)

=== Message from Simon Collinson <scollinson@salesforce.com> (U01G8R2NXB4) at 2026-04-07 09:15:14 BST === 
Message TS: 1775549714.107969
Please may you share this on the gps Uki group?
Thread: 1 replies (latest: 2026-04-07 09:18:39 BST)
Reactions: +1 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-04-07 09:25:18 BST === 
Message TS: 1775550318.378339
Thats awesome Josh.  Looking forward to the W/S tomorrow
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-14 09:37:50 BST === 
Message TS: 1776155870.782569
<@U01VCLKP8QN|Matthew Rochard> <@U061STVMSK0|Murray Grubb Jnr> - I have just sent an email intro out to Lauren Dixon (Chief Data Officer) as per the workshop actions last week, please can you stay close to any replies and work to get something set up with Lauren ASAP as she will be the key decision maker for all things Informatica :infomatica:  Let's go !

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-04-14 09:39:04 BST === 
Message TS: 1776155944.069049
Great news Josh. I connected with her on LinkedIn and sent an intro on my invite. She will definitely be a key person for the wider Data Foundation’s play
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-04-21 15:04:39 BST === 
Message TS: 1776780279.043339
• Summary of meeting with Julius. *Introductions and Roles:* The meeting served as introductions between Julius B of the FCA and the recently realigned Salesforce/Informatica team: Matthew Rochard (responsible for government agencies for Informatica), Murray Grubb Jnr (Heads the Data Foundations team and is aligned to regulators), and Rachael Ross (Client Strategist). Julius B confirmed that Informatica's new Customer Success Manager is Mark Winters.<https://support.google.com/meet/answer/16024610|1>
• *FCA Project Status and Challenge:* The FCA is currently in a post-migration, hypercare phase, having completed a rapid migration to the new platform (Idmc). Julius B stated his primary focus for the next three months is to drive user adoption, noting that the quick change and the quality component of the migration still being in testing has led to a "change freeze". The data governance team (led by Andrew Higgs) is struggling to transition from manually importing data via spreadsheets to the new "scan the source" approach.
• *Data Assessment Proposal:* Josh Adams proposed a free Data Assessment framework—a value-add exercise involving SMEs—to analyze the FCA's data landscape, tooling, and strategy. The output is an agnostic report that helps plot a path to mature the data environment and aid in gaining executive buy-in. Julius B showed interest and will involve Andrew Higgs.
• *Collaboration and Governance:* Josh also proposed defining a clear tripartite working relationship with partner Agile. Additionally, he suggested a cross-pollination learning session to bring together FCA executives (Lauren, Ian) and Salesforce/Informatica execs (Jack Powell, James Simon) to align governance, as both products are now from the same vendor.
• *Contract Management:* Matthew Rochard emphasized the need to set up a regular cadence to manage the ongoing project and ensure the FCA is maximizing value from their unusual, flexible IPU contract model.
• *Professional Services (PS) Options:* Julius B inquired about procurement options for professional services. Matthew Rochard confirmed that Informatica PS can be bought via a transaction partner or directly on the new G Cloud later this year. Murray Grubb Jnr stated the *BOS 2* framework covers all Salesforce entities for professional services and licensing.
• *Support for Exploitation:* Matthew Rochard mentioned the availability of the "Resident Architects Program," a service bought via Professional Service Units (PSUs), to tap into specific skills across the Informatica space. He also suggested supporting user adoption through a blueprint for webinars, similar to what was done with the Cabinet Office, to manage the cultural change.
*Next Steps:* The team agreed to schedule a follow-up meeting in Stratford (FCA office) or Liverpool Street (Salesforce/Informatica office) to work out an agenda focusing on user adoption, the Data Assessment, and potential future support.
Thread: 1 replies (latest: 2026-04-22 09:09:24 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-24 14:18:44 BST === 
Message TS: 1777036724.986539
<!channel>

:agentforce: :q1-: :fca: Hi team, thought I'd post a bit of a wrap up on Q1 given I am off next week.:fca::q1-:  :agentforce:

Firstly, a massive thank you for all of your contribution and efforts in Q1 - I feel that our 360 team working on the FCA is very much firing and we have a well-oiled machine functioning! :speedo: . That is absolutely due to your participation and attendance at things like Account Planning, FCA Roadmap Sessions, Weekly 360 Account Calls, so I am very grateful for all of your support! Hopefully you all enjoy working as part of the team and can see some big wins to go after this year and next.

We closed c.$110k in Q1 across the team which is a little light, but about what we were expecting. On a brighter note, we have a substantial number of mature opptys left for the rest of the FY; Wall-to-wall Agentforce, Shield, Informatica expansion,  CTO Renewal, Marketing Cloud and more... not to mention that small little conversation about completely re-platforming their legacy stack onto a brand new agentic Salesforce org... all very exciting! :agentforce:

Lots of work required to progress these and take them down but I have every faith that we will be able to do that with the right amount of perseverance, dedication to the customer's objectives and focus. Let's do this! :strong:

I hope you all enjoy your break from me next week :slightly_smiling_face: If you get time then please take a look at your Business Plans in the F0AF7TL5WC9 and reflect on how you felt Q1 went - no need to provide any updates on there, but it will hopefully help us set our Q2 goals together when I am back from PTO.

Look forward to catching up on all the great work when I get back. Enjoy the weekend whenever it comes :heart:

Josh
Thread: 2 replies (latest: 2026-04-24 15:41:28 BST)
Reactions: enjoy2 (5), letsgo3 (2), muley (1), sun (2)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-04-27 14:31:55 BST === 
Message TS: 1777296715.389129
:fyi-100: <@U038JMVKGBB|Josh Adams> <@U01FU44QDUP|Tom O'Neill> FCA has approx 60 developers locally and 40 offshore

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-04-27 17:07:01 BST === 
Message TS: 1777306021.080529
<@U01VCLKP8QN|Matthew Rochard> and I just had a great meeting with Lauren Dixon the head of data. So many threads to pull on but there was a real desire to work with us more intensely and creatively. 

She wants to sponsor a showcase day where we will present the new Data Foundations capabilities and perform the Operational and Data Readiness workshops. 

She is going to go back through Faisal with dates and who she wants there along with the same from Debbie Guptas team. 

She absolutely saw the value though I'm not just unlocking the data but making it useable. Requested more info on the visualisation piece from the Tableau suite and also reconfirmed their data lake is up for renewal in under a year so this could also be worth exploring as part of the same conversations and planning. 

Really exciting opportunities to showcase how much more we can do for the wider team within the FCA

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-04-28 09:20:56 BST === 
Message TS: 1777364456.725339
Great timing... I'm training on the Data Readiness Assessment and was thinking that the FCA could be a good candidate
Reactions: +1 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-04-28 10:54:50 BST === 
Message TS: 1777370090.240979
Thanks Dipesh.  A lot of the requirements from Lauren's perspective were around the current Informatica platform extensing from the integrations they are doing to Catalog, Cleansing, Quality and Governance so i think any data workshop will also need a Infa SE working with you.
Reactions: +1 (2)

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-04-28 18:41:10 BST === 
Message TS: 1777398070.819489
ok, I'll schedule some time to discuss approach

=== Message from Jon Bland <jbland@salesforce.com> (U01G8F4AASW) at 2026-04-29 06:55:54 BST === 
Message TS: 1777442154.682069
<@U01FU44QDUP|Tom O'Neill> - in the absence of <@U038JMVKGBB|Josh Adams> this week, worth you being aware of the response from Jessica Rusu, CDIO at FCA to Simon's note last week (this came in yesterday evening).  Perhaps worth you pulling together an initial response with the help of <@U01JF0ZG4CX|Sylvain Naltchayan> and <@U01HYKY7HFF|Maribel Pinilla> (perhaps spin up a canvas). We can then discuss in the Friday call. Thx
Thread: 1 replies (latest: 2026-04-29 07:48:45 BST)
Reactions: eyes (1), +1::skin-tone-4 (1), +1::skin-tone-2 (1)
Files: image.png (ID: F0B1CMH0L9E, image/png, 121.5 KB)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-01 09:33:13 BST === 
Message TS: 1777624393.062769
I have gone back with some times when I can see gaps in the diary for Murray, Dipesh, Jeff Pratt and myself for the follow up with Lauren. Lets see what they come back and we can then make a decision on virtual or in person or both.  Keen to keep the momentum going.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-01 09:33:48 BST === 
Message TS: 1777624428.674669
I have added <@U0ADPCTAQ59|Jeff Pratt> to the channel as he has been our lead SE on FCA

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-01 10:37:53 BST === 
Message TS: 1777628273.984739
Follow up to above.  We have 2 dates in the diary for Lauren at FCA:
20th May 9.00am - Suggest we use this to bring her up to speed on the Informatica platform as she requested.  A deeper dive into their requirements and Planning for the next session
3rd June 2.00pm - 5.00pm - Deeper dive W/S at SF Tower with wider teams.  This is where we can do the data readiness W/S and showcase Murray described.

Its a good thing she is prepared to give us her time. I will set up a planning call where we can thrash out the agenda based everyones knowledge of the account early next week.
Reactions: +1 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-01 10:56:53 BST === 
Message TS: 1777629413.985519
How do I book a big room in SF Tower?
Thread: 3 replies (latest: 2026-05-06 15:23:24 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-06 10:29:50 BST === 
Message TS: 1778059790.180119
<@U09KM7QHDDW|Chris Dowlen> <@U01JF0ZG4CX|Sylvain Naltchayan> - re: the mail thread with James S / Paul R about data opt-in, I think we are in a a good position as their flags are set to Opt Out and that flag hasn't changed in the last month. They have asked confirmation that the flag was always set to Opt Out by default with PSS, so I presume we will have to ask Product for confirmation of this? Can one of you own this to resolution so we can get it closed off please? Thank you !

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-05-06 10:34:22 BST === 
Message TS: 1778060062.279959
Hi <@U038JMVKGBB|Josh Adams>, happy to own this. I have given instructions to Paul Rice to engage our Data Privacy team this morning to ask the question. They will respond to him directly and should be able to confirm whether Opt Out was set from the get-go
Thread: 1 replies (latest: 2026-05-06 10:57:27 BST)
Reactions: +1::skin-tone-3 (1), +1 (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-06 13:44:23 BST === 
Message TS: 1778071463.287729
<@U061STVMSK0|Murray Grubb Jnr> <@U01VCLKP8QN|Matthew Rochard> Hi chaps, hope you're well. Just returning back from PTO yday - sounds like some decent progress with Lauren - great work !

Spoke to <@W011GHC2ZPX|Richard Cole> <@U037SKB6C4E|Stephane Pajon> earlier about a Data Readiness Assessment - was this discussed with Lauren? I am trying to get Jason Baker (Chief Architect) into that session with Lauren too so we can speak about the DRA in that meeting if helpful.

Let us know what the next steps with Lauren are and how we can fold into DRA initiative...

cc: <@US3RV8154|Dipesh Bhoola>
Thread: 1 replies (latest: 2026-05-06 16:17:55 BST)
Reactions: thanks7 (1)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-05-06 14:34:31 BST === 
Message TS: 1778074471.300219
And @Mayesta was keen to understand how they can get value from both Informatica and Tableau as they have both.
Reactions: +1 (1), nice (1)

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-05-06 15:26:29 BST === 
Message TS: 1778077589.944609
Should we look to use a SIC room for the 3rd June?
```3rd June 2.00pm - 5.00pm - Deeper dive W/S at SF Tower with wider teams. This is where we can do the data readiness W/S and showcase Murray described.```
Thread: 4 replies (latest: 2026-05-07 14:09:32 BST)
Reactions: +1 (1), muley (1)

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-05-07 13:31:15 BST === 
Message TS: 1778157075.127559
Hi, just got out of the home office briefing lasted 30 minutes longer than I expected. I’m aware that I need to catch up with you, Josh after a busy couple of weeks of events and being away on PTO.
Thread: 3 replies (latest: 2026-05-07 16:41:46 BST)

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-05-07 13:31:25 BST === 
Message TS: 1778157085.222909
Apologies for missing today

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-07 15:48:17 BST === 
Message TS: 1778165297.582059
Actions from weekly account call - thanks all:

• Data Foundations
    ◦ <@U061STVMSK0|Murray Grubb Jnr> <@U01VCLKP8QN|Matthew Rochard> get brief and agenda out to Lauren/Faisal ASAP on plans and intentions for 20/05 and 03/06. Great work on this, very exciting ! Can we also look to get the nice big meeting rooms booked for the 03/06 to ensure we have enough space (should we need it !)
    ◦ Liaise with <@US3RV8154|Dipesh Bhoola> <@U037SKB6C4E|Stephane Pajon> and INFA SE on prep for session
    ◦ <@U01VCLKP8QN|Matthew Rochard> to set up internal briefing/planning call
• Tab
    ◦ <@U01H981JRDX|Rima Mukherjee> <@U01FU44QDUP|Tom O'Neill> work to resolve outstanding Tab billing queries
• BDR
    ◦ <@U0A715JAUSV|Rachael Ross> - work with <@U01FU44QDUP|Tom O'Neill> <@U01H981JRDX|Rima Mukherjee> on upcoming campaigns to drive across FCA and Ofcom...
        ▪︎ Steve Hall - Contact Centre
        ▪︎ TBC - ITSM at FCA
        ▪︎ Ofcom - lots of unchartered territory... !

Thread: 6 replies (latest: 2026-05-08 11:23:47 BST)
Reactions: raised_hands (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-08 08:13:00 BST === 
Message TS: 1778224380.227769
Brilliant <@U09KM7QHDDW|Chris Dowlen> , good work ! Keep us posted on here when confirmed ! 
Reactions: +1 (1)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-05-08 12:26:37 BST === 
Message TS: 1778239597.213469
Hi all, please find below a quick update of  active work streams I have in motion at the FCA:

*1.* :robot_face: *Agent AVA — Signature Webinar / Customer Reference*
•  Steve Hall (FCA) has confirmed he'll join the upcoming Salesforce Signature webinar as a customer panellist. Date confirmed, 11th June - customer registration here: <https://salesforce.zoom.us/webinar/register/WN_9JPjNJf0S66ewxrEfRwvhg#/registration>
*2.* :lock: *Data Privacy Opt-Out (James Symon / Paul Rice)*
• *Progress:* FCA queried whether their data opt-out flag was set to Opt-Out by default from the outset with PSS. Gave Paul instructions to engage our Data Privacy team to field. Also have raised an internal SCCT case as a contingency.
• *Next steps:* Awaiting confirmation from Paul RE: Data Privacy team and the internal SCCT case.
*3.* :robot_face: *Agentforce Vibes — LLM Model Selection (Paul Rice / Karen Fidelak)*
• *Progress:* Paul raised there is no way to select LLM in Agentforce Vibes. Raised an SCCT and engaged Karen Fidelak (Senior Director, Product Management, Agentforce Vibes) to understand whether this is by design.
• *Next steps:* Awaiting definitive confirmation from Karen
*4.* :shield: *Cloudflare Turnstile / Google CAPTCHA — Aman Sapra & Gurdeep Sembhi (FCA)*
• *Progress:* Aman Sapra (FCA, reporting to Gurdeep) wants to explore replacing Google reCAPTCHA with Cloudflare Turnstile on their Salesforce environment (specifically for AVA). Looking to align a Success Architect, however have caveatted that custom config will likely fall outside of Success Architect scope
• *Next steps:* Raise a request for a Success Architect to determine if within scope.
Thread: 21 replies (latest: 2026-05-13 09:54:41 BST)
Reactions: +1 (2), raised_hands (1), raised_hands::skin-tone-5 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-11 17:54:43 BST === 
Message TS: 1778518483.884429
All, email summary sent to James S this afternoon based on our meeting on Friday afternoon.
Reactions: thank-yo3 (2)
Files: Catch up from Friday call (ID: F0B34BDCTQR, text/html, 12.4 KB)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-12 17:05:26 BST === 
Message TS: 1778601926.772979
FYI I have been contacted by Cognizant today on FCA.  They are an incumbent data partner.  I wil do the call and report back.
Thread: 1 replies (latest: 2026-05-13 09:55:17 BST)
Reactions: eyes (2)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-05-13 14:26:21 BST === 
Message TS: 1778678781.384629
Hi all - Need some help with an FCA query/concern around page views and bandwidth threshold limits. FCA have observed very high usage of the register, particularly the register API and they're worried that the volume they are seeing is going to start hitting some of our threshold limits. This carries a contractual implication in that we can terminate service immediately and without notice in certain cases. FCA have asked if we can share a report with them that details the contractual threshold limits for page views and bandwidth so they can cross reference with what they are observing their side. Does such a report exist? Or any mention of the limits within our agreement paperwork? Grateful of any help/advice/support! Thanks in advance :blush:
Thread: 1 replies (latest: 2026-05-13 15:02:09 BST)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-05-13 16:50:58 BST === 
Message TS: 1778687458.440459
<@U09KM7QHDDW|Chris Dowlen>
To re-iterate... re. the Signature webinar!
Agent AVA is *NOT* (repeat *NOT*) a real agent (not using Agentforce!).

:robot_face: *Agent AVA — Signature Webinar / Customer Reference*
•  Steve Hall (FCA) has confirmed he'll join the upcoming Salesforce Signature webinar as a customer panellist. Date confirmed, 11th June - customer registration here: <https://salesforce.zoom.us/webinar/register/WN_9JPjNJf0S66ewxrEfRwvhg#/registration>

Thread: 1 replies (latest: 2026-05-13 18:48:09 BST)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-05-13 17:00:21 BST === 
Message TS: 1778688021.443809
<@U038JMVKGBB|Josh Adams> <@U09KM7QHDDW|Chris Dowlen> <@U01JF0ZG4CX|Sylvain Naltchayan> Mythos from Gartner. Happy reading!:grinning:
Reactions: will-read (2)
Files: First_Take_With_Cla_853958_ndx.pdf (ID: F0B3NKY2H97, application/pdf, 267.0 KB)

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-05-14 11:39:05 BST === 
Message TS: 1778755145.958089
<@U01H981JRDX|Rima Mukherjee> who would be best to address this Tableau issue at FCA?

A friend of mine the in the Insurance industry, mentioned that the chart on this page does not filter with the filter selections

<https://www.fca.org.uk/data/complaints-data/redress-paid>
Thread: 4 replies (latest: 2026-05-14 13:27:54 BST)

=== Message from Joe Deasy <jdeasy@salesforce.com> (U053CR5T75Z) at 2026-05-15 17:11:35 BST === 
Message TS: 1778861495.773759
Hey <@U038JMVKGBB|Josh Adams> just flagging as was looking through CTO paperwork from last FY, whilst it is no auto-renewable i realised they have the 'Customer shall notify Salesforce atleast 90 days" language, something we should gently start using to look to drive focus.

<@U01HYKY7HFF|Maribel Pinilla> I see the great weekly summary document you share, thank you for that, please can i ask whether you spend time chatting this through with the FCA team or is it agreed to be a share and they review async? I have zero doubt over the extreme value they're getting from yourself Maribel, alongside that we clearly need to articulate the why. i.e. this is everything Maribel has helped the FCA achieve but from August 14th, this is everything you'll no longer have the expertise supporting you with. Could you pls make a start on creating a 1 pager / document that articulates the latter?

Happy to connect on this early next week. Thanks
Thread: 1 replies (latest: 2026-05-18 08:36:15 BST)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-05-20 15:18:41 BST === 
Message TS: 1779286721.740169
<@U038JMVKGBB|Josh Adams> <@U01FU44QDUP|Tom O'Neill> - Just pinged you both a mail to flag a potential Slack lead over at the FCA, which I have referred to <@U08SVT0AXDJ|Damian Ondore>. I don't believe an oppty exists for this yet but happy to create one if needed.
Thread: 1 replies (latest: 2026-05-20 15:19:40 BST)
Reactions: heart (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-21 15:51:23 BST === 
Message TS: 1779375083.214379
Great session with the FCA data team today guys. Next steps as agreed is for us to have a call tomorrow and bring all the SE's together to broaden out our message for the showcase day on the 3rd. Full Data accessibility, Data Quality, Fully integrated with event driven capability and access to real time analytics is the suite we need to show. Stages are as is vs desired state and what additional value the integrated ecosystem will allow them to unlock≥
Reactions: eyes (2), +1 (1), raised_hands (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-06-01 13:53:04 BST === 
Message TS: 1780318384.983119
Meeting has been pushed to July.  Not a bad thing as it gives us a proper timescale to understand more about FCA priorities and build a better session. In the meantime I will continue to explore some of the more tactical plays to drive the IPU consumption, ready for an uplift before Sept.
Thread: 3 replies (latest: 2026-06-01 17:14:13 BST)
Reactions: +1 (2)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-06-01 13:53:44 BST === 
Message TS: 1780318424.032919
I had a call with Cognizant today.  They are keen to work with us on the account at a more strategic level.
Reactions: +1 (1)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-06-01 16:54:00 BST === 
Message TS: 1780329240.444859
:star2: *Huge shoutout to our very own Felix Kroppenstedt for helping the FCA!*

We recently wrapped up a Signature Success Architect engagement with the FCA and I just have to take a moment to recognise the truly exceptional work Felix delivered.

The FCA came to us with a genuinely complex challenge. Enabling secure, auditable internal communication between restricted departments within their Salesforce org (INTACT). This is the kind of problem that a third-party consultancy would typically charge thousands of pounds to even begin assessing. Felix handled it end-to-end, with the kind of depth and care that makes Salesforce Customer Success genuinely special.

Here's what Felix produced:

• *A comprehensive architectural assessment* covering four distinct options, from native Chatter through to a fully custom communication object. Each evaluated against the FCA's specific security constraints, compliance obligations, and operational scenarios
• *A clear, well-reasoned recommendation* (Option 4 — Custom Communication Object + Chatter Record Feed Hub) - architecturally elegant, storage-efficient, and future-proof
• *A custom 20-page output and recommendations document*, written entirely bespoke for the FCA, giving them everything they need to make a truly informed decision on where to move next
*The business value this has unlocked for FCA is significant:*

• :white_check_mark: *Cost avoidance* — this calibre of architectural assessment would typically command a substantial third-party consultancy fee. FCA received it as part of their Signature Success investment, at zero additional cost
• :white_check_mark: *Reduced compliance risk* — Felix's recommended solution provides a robust, auditable cross-department communication trail, directly addressing FCA's regulatory obligations around record-keeping and data governance
• :white_check_mark: *Faster, more informed decision-making* — rather than facing an ambiguous technology choice, the FCA now has a clear and prioritised recommendation they can take straight to their architecture and compliance teams
• :white_check_mark: *Protected platform investment* — by steering the FCA away from high-maintenance, fragile approaches (like E2C customisation) and towards a stable, future-proof architecture, Felix has helped protect the long-term integrity and maintainability of their Salesforce org
• :white_check_mark: *Productivity gains on the horizon* — the recommended solution eliminates the manual workarounds FCA teams currently rely on for cross-department communication, reducing operational overhead and the risk of human error in a highly regulated environment
• :white_check_mark: *Empowered to self-serve* — the depth and clarity of Felix's documentation means the FCA's own technical teams can confidently drive the proof of concept forward, without needing to re-engage external resource to interpret the findings
> What sets this engagement apart isn't just the quality of the output, it's the thinking behind it. Felix took a requirement the FCA framed as an email routing problem and saw it for what it really was: a need for secure, traceable, cross-boundary communication. That instinct to look beyond the stated ask and solve the right problem is what great architecture is all about and it's exactly what makes our Signature Success Architect team so valuable.
> 
> Felix, this is a brilliant piece of work. The FCA are in a far stronger position because of the time and expertise you invested. Thank you! :raised_hands:
> 
> <@U01G85GE50S|Felix Kroppenstedt> <@U01FTCSMX8X|Darren Sabey> <@U01G8EKKN9Y|George Griffin> 

Thread: 1 replies (latest: 2026-06-02 06:29:28 BST)
Reactions: raised_hands (2), clapping1 (1), balloons (1), thankyou_ (1)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-06-02 13:21:23 BST === 
Message TS: 1780402883.341779
As an FYI, the FCA have temporarily paused agent AVA for reasons completely unrelated to Salesforce/technology - more relating to the answers it can provide consumers given challenges regarding the Scheme itself. You can read the detail on the challenges here:  <https://www.fca.org.uk/news/statements/fca-statement-legal-challenges-motor-finance-scheme>
Reactions: +1::skin-tone-2 (2), eyes (2), +1 (2), thank-you-1 (1)

=== Message from Jonathan Toms <jtoms@salesforce.com> (U02PVJUJYL9) at 2026-06-05 10:04:27 BST === 
Message TS: 1780650267.305519
<@U038JMVKGBB|Josh Adams> <@U01FU44QDUP|Tom O'Neill> <@U09KM7QHDDW|Chris Dowlen>

Nick Eden-Russe has just escalated a case to me. I have CC'd you all in my response. I've gone back to support and requested we pull in the product team to review. Next steps will to most likely setup a call with the customer. Will keep you updated.
Thread: 11 replies (latest: 2026-06-08 11:20:53 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-05 11:36:15 BST === 
Message TS: 1780655775.474169
Actions from weekly call:
• <@U061STVMSK0|Murray Grubb Jnr> 
    ◦ Set up weekly planning cadence with key internal stakeholders for Data Foundations deep dive session in July - Murray to lead narrative and poitioning given role as DF lead, cc <@U01VCLKP8QN|Matthew Rochard>.
    ◦ Get a prep call in with Lauren Dixon 3 weeks out from the July session to playback initial view on agenda, attendees etc
    ◦ Follow up on WT attendance for IFNA stakeholders - <@U0A715JAUSV|Rachael Ross> can support when back on Monday
• <@U08SVT0AXDJ|Damian Ondore> 
    ◦ Work to get session in with FCA to showcase Slack & Case Mgmt - target for end of June - 1 hour probably sufficient
    ◦ Damian to then brief Gary for prep and readiness !
Thread: 4 replies (latest: 2026-06-05 16:58:00 BST)
Reactions: +1 (2), muley (1)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-07-01 16:14:18 BST === 
Message TS: 1782918858.846059
Hi <!here>
We should all turn up to this team!
Reactions: absolutely確実に (2), raised_hands (3), raised_hands::skin-tone-2 (2), +1 (1)
Forwarded message from Binda Sewak: :ibelong-big: *iBelong: The Power of Unapologetic Authenticity with Jagpal Jheeta, Chief Product Officer, Director at the Financial Conduct Authority* :ibelong-big:

Most of us spend our careers trying desperately to blend in, only to realise that our greatest leadership asset is our ability to stand out. What happens when you stop hiding who you are, embrace your heritage, and lead with ultimate authenticity?

*About the Session:* This isn't a generic corporate career talk or a basic religious studies lesson. It is a raw, dual-perspective conversation on how religious identity intersects with corporate leadership.

We will be joined by *Jagpal Jheeta*, Chief Product Officer at the Financial Conduct Authority (FCA). As a prominent technology leader of Panjabi-Sikh heritage and executive co-sponsor of the FCA’s Faith Network, Jagpal is a visible champion for diversity, inclusion, and mentorship.

*Why This Matters Now:* True inclusion requires open dialogue during challenging times. F...

=== Message from Simon Collinson <scollinson@salesforce.com> (U01G8R2NXB4) at 2026-07-02 08:35:12 BST === 
Message TS: 1782977712.428689
Very good meeting with Johan the new COO yesterday, whats clear to me is that 2 things are strongly being considred
1. NewCo vs debt remediation for INtact
2. NEw TOM to be introduced which will necessitate a more agile and aI driven technology. Potential risk of removing SF from AI layers and process layers if we lose the architectural argument.
I'll let Jon Bland leave more comprehensive notes, but we will need to engage well
Key follow up action is to arrange a technical architecture meeting and roadmap session for Johan
Thread: 1 replies (latest: 2026-07-02 13:32:37 BST)
Reactions: eyes (4), raised_hands (2)

=== Message from Vaibhav Krishna Kumar <vaibhavkrishna.kumar@salesforce.com> (U07EKQCE5DX) at 2026-07-02 18:00:13 BST === 
Message TS: 1783011613.634119
Hi <@U038JMVKGBB|Josh Adams>,
In our bi-weekly meeting this week, Gurdeep (from FCA) shared feedback with us on several security enforcements over the last couple of months.
I have raised the feedback with the security team. FYI, here is the link (where I have shared the feedback in detail): <https://salesforce-internal.slack.com/archives/C01PR9SCPJ5/p1782904742489289|https://salesforce-internal.slack.com/archives/C01PR9SCPJ5/p1782904742489289>
Just wanted to keep you posted on this discussion.
Thread: 1 replies (latest: 2026-07-03 10:55:11 BST)

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-07-09 14:24:36 BST === 
Message TS: 1783603476.841279
*FCA – Accessibility Call with Blind Institute of Technology | 8 July 2026*

We held an introductory call today with FCA stakeholders across Case & Risk, Market Oversight, and Supervision & Enforcement, joined by Mike Hess (Founder, Blind Institute of Technology) and his Senior Salesforce Project Lead, Ertay Shashko. FCA has been on an accessibility journey for four years — post-Lightning migration they identified over 400 defects and spent 18 months reaching WCAG Level A. Their two highly complex Salesforce orgs (Intact & ESS) now have a clear target of WCAG Level AA, driven by internal staff usability and positioned as a recruitment and retention differentiator for ~3,000 users.

The key message from BIT was that automated testing only catches 30–50% of accessibility errors and misses usability issues entirely — manual testing by native assistive technology users is non-negotiable. FCA's own internal accessibility expert (who is partially blind) has already challenged the quality of automated testing. BIT also stressed the importance of embedding accessibility early in the development cycle — catching issues at design stage is a 5-minute fix; catching them at UAT is a project risk. Their advice for FCA's upcoming Regulatory Case Management rebuild: use standard out-of-the-box Salesforce components and the new Cosmos UI to avoid the custom "div soup" that caused the majority of their existing defects.

*Key outputs:* FCA has committed to standard components + Cosmos UI for the platform rebuild, with manual AT user testing as the primary testing method. BIT — recognised as one of only two global Salesforce accessibility experts — are well-positioned to support FCA's journey. Next step is to explore a formal engagement with BIT across dev team education, pre-UAT testing, and AppExchange package reviews.

<@U038JMVKGBB|Josh Adams> <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01HYKY7HFF|Maribel Pinilla> <@U07EKQCE5DX|Vaibhav Krishna Kumar>
Thread: 5 replies (latest: 2026-07-09 16:01:27 BST)
Reactions: +1::skin-tone-2 (1), +1 (2), raised_hands::skin-tone-2 (1), raised_hands (1)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-07-13 14:12:43 BST === 
Message TS: 1783948363.315849
<@U038JMVKGBB|Josh Adams> <@U09KM7QHDDW|Chris Dowlen> <@U01FU44QDUP|Tom O'Neill> <@U01JF0ZG4CX|Sylvain Naltchayan> I've been invited to a FCA meeting about Own Archive. It seems the FCA team has done a technical spike/PoC to validate the tool and its archiving capabilities. I was wondering if we supported them in any way
Reactions: +1::skin-tone-3 (1)

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-07-13 14:30:14 BST === 
Message TS: 1783949414.123499
:fyi-100:<@U01FU44QDUP|Tom O'Neill> for the roadmap session, Ian might bring what does mean for them that "Salesforce is retiring *Own Archive (Managed Package)* and *Archive Console*. As of *May 4, 2026*, these products are no longer renewable. We’re moving to a *native archiving solution* to provide better scalability, visibility, and ongoing innovation."

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-07-16 12:17:12 BST === 
Message TS: 1784200632.627069
hi <@U01JF0ZG4CX|Sylvain Naltchayan> <@U038JMVKGBB|Josh Adams> I will join online to the roadmap session today.
Thread: 1 replies (latest: 2026-07-16 12:49:10 BST)
Reactions: +1 (1), thankyou_ (1)

=== Message from Chris Pannell <cpannell@salesforce.com> (U01GE9KF0TE) at 2026-07-23 09:19:13 BST === 
Message TS: 1784794753.889649
FCA working with Anthrioic. This opens the door nicely to a slack conversation <@U038JMVKGBB|Josh Adams> <@U08SVT0AXDJ|Damian Ondore> 
Reactions: +1::skin-tone-5 (1), 100 (1), raised_hands (1)
Files: IMG_0004.jpg (ID: F0BK5VBAUTF, image/jpeg, 490.1 KB)

=== Message from Damian Ondore <dondore@salesforce.com> (U08SVT0AXDJ) at 2026-07-23 09:37:43 BST === 
Message TS: 1784795863.251609
We’ll see more of this. It’s the same story as at the home office.. both FCA and home office will now have a challenge in balancing to can spend in CoPilot, in GitHub and Anthropic. 


i’ve put together some slides and Josh is looking for some time for us with Ian Hersey to discuss their token management strategy and the role Slack can play in this
Thread: 1 replies (latest: 2026-07-23 11:17:10 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-28 18:46:43 BST === 
Message TS: 1785260803.842079
FYI <@U01ESLQ2FBP|Stephen Donnelly> can we get all over this please ? Could be our chance to influence thinking. Not sure if this has come from Emma’s team or someone else, but completely crazy to consider Monday CRM :rolling_on_the_floor_laughing:
Thread: 3 replies (latest: 2026-07-30 13:13:02 BST)
Forwarded message from Maribel Pinilla: <@U038JMVKGBB> <@U01JF0ZG4CX> Heads up... I had a meeting today with Krishna (Enterprise Architect). He is writing an option paper for CRM capabilities related to Marketing based on demand from business units(Innovation Service, Marketing &amp; Events, Internationals).
I told him they should evaluate Marketing Cloud, and he said that apparently it was done in the past and it was expensive, so they are considering Monday CRM as option. :face-slap:
We agreed to have a follow up call to understand the business needs and map to Salesforce capabilities so they can understand how they fit not only for the marketing capabilities but also for the CRM capabilities and include that in the paper so they make an informed decision.

Who is the best person to invite to that session?

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-07-29 10:44:20 BST === 
Message TS: 1785318260.750009
Adding <@WJ4A8MJNP|Saeed Ahmed>, FCA's aligned consumption lead - welcome Saeed to the FCA internal team channel

=== Message from Chris Dowlen <cdowlen@salesforce.com> (U09KM7QHDDW) at 2026-07-29 10:45:29 BST === 
Message TS: 1785318329.213519
I just had a really good conversation with Uday Sher and Paul Rice. They have excellent quality onboarding documentation (in SharePoint) for new starters to get to grips with understanding their org structures. This would be ripe for pointing an Agentforce agent at. Is anybody aware of other customers doing similar? <@WJ4A8MJNP|Saeed Ahmed> <@U01HYKY7HFF|Maribel Pinilla> <@U01JF0ZG4CX|Sylvain Naltchayan>
Reactions: eyes (1)

=== Message from Simon Collinson <scollinson@salesforce.com> (U01G8R2NXB4) at 2026-07-31 14:13:16 BST === 
Message TS: 1785503596.725399
*Wednesday Session Debrief*
• Overall positive reception from the exec group
    ◦ Sri stayed on and was enthusiastic; met with Jagpal afterward, also very positive
    ◦ Jessica texted Simon directly: “great to see the progress and maturity that had come from the business”
    ◦ Johan already responded about the meetup and is setting up with Haley
• Jessica’s AI focus noted as a potential friction point in group settings
    ◦ Her deep dive into AI protocol was turning Sri and Johan off
    ◦ Plan: arrange dedicated one-to-one time with Paul when he’s next across
• Cadence going forward: exec connects at beginning, middle, and end of Transform
    ◦ Aim to bring Johan and Jessica together as ex-co sponsors of the “Smarter Regulator” pillar
*Innovation Day: Format and Ambition*
• Provisional September date; Simran coordinating diaries
• Format: three partners, half-day session, one hour each to present against a curated FCA problem/opportunity statement
    ◦ No procurement precursor; purely “art of the possible”
    ◦ Partners: Salesforce confirmed as one; Intellect AI another; third TBC
• Focus area: Authorisations and Supervision Hub (Sree’s remit)
    ◦ Sree’s challenge: SLT averaging 15+ years at FCA, limited capacity to think differently
    ◦ Ambition: “how do I do what I do today with half the team?”
• Jagpal getting a name from Sree’s team today (director or head) to lead on curating the problem statement
• Strong steer to “think big”: not just improving today’s processes, but reimagining how the FCA regulates
    ◦ Agentic enterprise framing: proactive intelligence gathering vs. reactive data collection from firms
    ◦ Reimagine contact centre, auths, supervision hub in 2030-2035
*Salesforce’s Contribution*
• Simon offered the London AI Centre as a venue: purpose-built for AI visioning
• Suggested framing: “what does life in auths look like in five years?” from a user perspective, not a tech one
• Demo ideas: Salesforce behind Claude via Slack bot; headless Claude for ideation
    ◦ Reference: Paul Rice built a pre-application sports service on public docs in half a day using Claude
• Jon suggested involving someone from Jonzure’s (President of AI Technology) organisation to facilitate a properly transformative engagement
*SSG Three-Way Call*
• Jagpal to set up a three-way with SSG, Cynozure, and Salesforce
    ◦ Include: James, Josh (if available), Lou Ashbrook (Health business lead, plugged into Sopra Steria), Tony Alder (Industry Partner Manager, Sopra Steria focus)
    ◦ Jagpal on holiday from next week; James available throughout; targeting early September start
    ◦ Josh on paternity leave but semi-available given workload
*Next Steps*
• *Set up SSG three-way call including James, Josh, Lou Ashbrook, and Tony Alder* (Jagpal)Targeting before Jagpal's holiday next week; if not, early September.
• *Get name of Sree's director or head leading the Innovation Day problem statement* (Jagpal)Jagpal to receive this from Sree before she goes on holiday today.
• *Reach out to Jonzure's organisation for a senior AI facilitator for the Innovation Day* (Jon)Jon Gauss or Jon Day flagged as potential contacts to engage.
• *Arrange one-to-one between Jessica and Paul for next visit* (Simon)Jessica keen on AI detail; better handled separately than in the group session.
• *Connect with the other two Innovation Day partners ahead of September*Explore how Salesforce, Intellect AI, and the third partner can complement rather than duplicate.

Thread: 1 replies (latest: 2026-08-10 09:31:33 BST)
Reactions: eyes (1), thank-yo3 (3), ok_hand::skin-tone-3 (1), heart (1)

=== Message from Ed Armishaw <earmishaw@salesforce.com> (U01GLPRMT9P) at 2026-08-10 09:31:33 BST === 
Message TS: 1786350693.432419
Team catching up after holiday - more than happy to lean in here & help especially around the innovation day, and how agentic can support. Who's got the tiller whilst Josh is on pat leave?

=== Message from Simon Collinson <scollinson@salesforce.com> (U01G8R2NXB4) at 2026-08-28 12:01:03 BST === 
Message TS: 1787914863.849629
*Upcoming Sessions and AI-Native Delivery*
• Paul Tatum session on 7th September: follow-up to the Portatum SIC at World Tour
    ◦ Ian, James, Paul Felt, Paul Rice, Andy Lions attending; Debbie and Jagpal to be added
    ◦ Jon to send through the deck in advance
• Salesforce internal session on 9th September, led by Andy White
    ◦ Andy led Salesforce’s own org transformation decision (new org vs. evolving existing estate)
    ◦ Both Jagpal and Debbie invited
• AI-native delivery: two recent deployments (Finaster and Capeter) cut delivery time by 60%
    ◦ 16-month projects reduced to 5 months
    ◦ Relevant to FCA’s org strategy question: rebuild vs. configure, and total investment scale
    ◦ Requires daily engagement from the client team, not a passive “wait and review” model
*Chennai Visit (12–15 September)*
• Jagpal, Debbie, and Dominic travelling; Josh also going (Jon to confirm travel is booked)
    ◦ Pat Knight (PS counterpart) introduced to Dominic and James; asked to consider attending
• Draft agenda being finalised by Jagpal and Debbie next week; top-level themes:
    a. DSF transition: Cognizant to Mastech for DevSecOps
    b. Overarching product strategy
    c. Case management and RCMS positioning
    d. Three-way SSG/Salesforce/FCA leadership session on best practices and pace
• Goal: leave the SSG team feeling backed by both FCA and Salesforce, proud of the work
• Jagpal also visiting Mastech’s Chennai office while there; Debbie and Dominic likely joining
• Mastech context: won a DSF award in December 2025, transitioned a digital build team in Leeds; ~50–60 UK staff onboarded with strong results; Gareth Rickets (ex-Jon’s team) now their UK Alliances Manager
*Discovery, POC, and Stakeholder Sentiment*
• Discovery phase: team in place, right people running sessions; Sri confirmed and energised
• Innovation Day on 28th September: planning underway, team asked to accelerate prep
• Strategic review on 29th September (10–12): needs planning; Jon to loop in Josh on return from pat leave
• Deloitte-led case management POC: complete; write-up and validation of next steps in progress
    ◦ Some elements ready to roll out; others on hold pending discovery findings
    ◦ Jagpal to chase the write-up; open to sharing with Simon for use with other government clients
    ◦ Simon offered Salesforce Business Value Specialists to help build out the business case
• Steve Hall flagged as having some nervousness post-session (via Shuri)
    ◦ Consensus: likely reflects healthy delivery scepticism, not Salesforce-specific concern
    ◦ Jon to pick up with Josh next week; agreed not to let it drop
• Johan: no feedback yet; Jagpal to check in next time they speak
• Jessica: positive but measured; sees it as something she doesn’t need to worry about
• Leeds Innovation Day: Simon planning to host in Leeds in late October/early November
    ◦ Aim to involve FCA’s Leeds-based dev team and recognise their contribution
*Next Steps*
• *Add Debbie and Jagpal to the 7th September Paul Tatum session* (Jon)Send the deck through in advance so they can review the content.
• *Confirm Josh's Chennai travel and brief Pat Knight on the trip* (Jon)Prices rising; Pat to also consider the tri-party session planned for end of October.
• *Finalise Chennai agenda with Debbie* (Jagpal)Draft to be circulated next week covering DSF transition, product strategy, RCMS, and the three-way leadership session.
• *Chase the Deloitte POC write-up and share with Simon* (Jagpal)Expected within weeks; Simon can use it with HMG clients to demonstrate real AI benefits.
• *Follow up on Steve Hall's concerns* (Jon)Pick up with Josh on return from pat leave; address openly rather than letting it drift.
• *Send Leeds Innovation Day dates to Jagpal and Debbie* (Simon)Late October/early November; aim to include FCA's Leeds dev team.

Thread: 2 replies (latest: 2026-08-28 12:15:21 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-04 13:35:11 BST === 
Message TS: 1788525311.976159
<@U01HYKY7HFF|Maribel Pinilla> <@U09KM7QHDDW|Chris Dowlen> <@U08SVT0AXDJ|Damian Ondore> <@U053CR5T75Z|Joe Deasy> <@U061STVMSK0|Murray Grubb Jnr> <@U0A715JAUSV|Rachael Ross> <@U01H981JRDX|Rima Mukherjee> <@U01G8F4AASW|Jon Bland> <@U01ESLQ2FBP|Stephen Donnelly> <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01FU44QDUP|Tom O'Neill> <@U01VCLKP8QN|Matthew Rochard> <@U01HYKY7HFF|Maribel Pinilla>

*FCA 360 - Weekly Team Meeting*
Fri, 04 Sept 26 · <mailto:rima.mukherjee@salesforce.com|rima.mukherjee@salesforce.com>, <mailto:stephen.donnelly@salesforce.com|stephen.donnelly@salesforce.com>, <mailto:jbland@salesforce.com|jbland@salesforce.com>, <mailto:mgrubbjnr@salesforce.com|mgrubbjnr@salesforce.com>, <mailto:dondore@salesforce.com|dondore@salesforce.com>, <mailto:rachael.ross@salesforce.com|rachael.ross@salesforce.com>, <mailto:jdeasy@salesforce.com|jdeasy@salesforce.com>, <mailto:mrochard@salesforce.com|mrochard@salesforce.com>

*FCA Account: Momentum and Strategy*
• Agentforce One Edition licensing close to signing: 50 seats, ~120k ACV, 11-month term
    ◦ Gives FCA access to Slack, Tableau, and Data Cloud
    ◦ Need to verify what’s included from the Data Foundations portfolio in Agentforce
• Services discovery kicked off (1.6M signed in early August); need to find a way to synthesize intel from the 20-person on-site team back to the account team
    ◦ Possible: brief standing update slot in this weekly call
• Tableau migration going well; data day booked for 20th November (auditorium, hundreds of attendees)
    ◦ Concern raised: it’s a Friday, queried whether FCA staff come in
    ◦ Goal: showcase Tableau Next use cases and build appetite for renewal
• FCA Salesforce contract growing fast (35M to 60M); need to address reseller-to-direct migration impact with them soon
• Recent commercial wins: services extension (~100-120k), Private Connect (45k), resource blocks (~20k) incoming
• Murray’s blueprint approach (aligned to FCA’s 2030 agenda) back in play after Informatica deal closed (86k)
    ◦ Target: 3-5M in next 12-18 months; 20M+ account spend over two years
    ◦ Regroup Monday 4:30 with Rachael, Murray’s boss, and Matt (pre-sales)
    ◦ Plan: unified vision messaging for Rachael’s campaign, Maribel’s technical conversations, and each product team
• Rachel to stay close to Lauren (Chief Data Officer) relationship; strong cadence built in Q3
    ◦ No near-term Informatica opportunity but potential next fiscal
*Contentful Acquisition and Upcoming Sessions*
• Salesforce acquiring Contentful (headless CMS, API-first content management)
    ◦ Relevant for FCA: agents serving precise regulatory content to staff and customers
    ◦ Flagged as a strong talking point for the Emma outreach; Steve to share wording and context
    ◦ To clarify: how Contentful differs from existing suite (not integration-focused, purely content structuring for LLM querying)
• Agent licensing note: Advanced edition recommended over Unlimited for FCA given agent interaction charging and agent identity registration requirements
• Monday: Salesforce Cloud session with Chandra (how Salesforce engineers use Claude internally)
    ◦ Pro Serve session and Salesforce-on-Salesforce session with Andy White both rescheduled
• Legal: final contract version sent to Phil; expected to sign today or tomorrow
*Next Steps*
• *Drop Emma a note to re-engage* (Josh)Include Contentful acquisition as a talking point; also brief her on the services discovery transformation project as a hook.
• *Reach out to Maribel for intel on Krishna*Maribel is back from leave this week and may be able to broker a conversation with Krishna and provide context on why Emma's engagement has gone cold.
• *Check Data Foundations portfolio inclusion in Agentforce*Confirm what, if anything, from the Data Foundations portfolio is included in the Agentforce One Edition deal.
• *Regroup on FCA blueprint and engagement plan (Monday 4:30)*Murray, Rachael, Murray's boss, and Matt from pre-sales to align on the 2030-agenda vision approach and campaign messaging.
• *Review Agentforce Advanced vs. Unlimited for FCA* (Josh)Rima flagged Advanced is now recommended given agent interaction charging and identity registration requirements.
Chat with meeting transcript: <https://notes.granola.ai/t/192fc303-f110-4417-a070-758adaf5add8-00demib2|notes.granola.ai/t/192fc303-f11…>

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-09 13:51:53 BST === 
Message TS: 1788958313.118919
Hi team, fascinating catch-up with <https://www.linkedin.com/in/edmund-towers-33657182/?skipRedirect=true|Ed Towers>, new(ish) into role Head of AI Product Delivery. Ed sits under Jagpal and his remit is not solely limited to Salesforce tech. In fact, he actively looks at non-Salesforce tech given the FCA already have a huge army under James S focussed on Salesforce.

The meeting was very collaborative and well natured - the AI transcript has captured some of the points below as quite direct. Ed is massively keen to collaborate with us moving forward, in particular around our Headless capabilities and how the FCA continue to use Salesforce as the core of their operating system without necessarily using our GUI or front-end on Salesforce business applications built by James' team.

Also see notes on AML, Data360 etc - I am going to propose we run a lengthy session for Ed's team and the Strategy &  Architecture team on...
• Overview/enablement of the Salesforce platform as if they were a new customer - current crop of FCA enterprise architects do not have working knowledge of Salesforce or what is possible, outside of case management
• Overview of the FCA Salesforce estate - Core, Tab, INFA, D360 - what the FCA are currently using and what can be taken advantage of immediately
• Deep dives into specific topics (to then follow up with separately - e.g. Headless, D360, Data Foundations
FYI: <@U01JF0ZG4CX|Sylvain Naltchayan> <@U02GULRS77D|Jakub Szelagowski> <@U01HYKY7HFF|Maribel Pinilla> <@U01G8F4AASW|Jon Bland> <@U01FU44QDUP|Tom O'Neill> <@U0A715JAUSV|Rachael Ross> <@U061STVMSK0|Murray Grubb Jnr> <@U01H981JRDX|Rima Mukherjee> <@U01VCLKP8QN|Matthew Rochard> <@U01G8F4AASW|Jon Bland>

-------

MEETING NOTES IN THREAD... :thread:
Thread: 10 replies (latest: 2026-09-10 10:03:18 BST)
Reactions: muley (1), clapping1 (4), clapping-inclusive (2), heart (3), tomjingo (2), platform-love (2), eyes (2), balloons (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-10 11:30:32 BST === 
Message TS: 1789036232.905549
Re: AML: we are getting some time in to discuss with Ed - will keep you posted...
Reactions: raised_hands::skin-tone-2 (1), raised_hands (2)
Files: image.png (ID: F0C0EGCRM2T, image/png, 233.6 KB)

=== Message from Joe Deasy <jdeasy@salesforce.com> (U053CR5T75Z) at 2026-09-11 14:57:52 BST === 
Message TS: 1789135072.193009
<@U08SVT0AXDJ|Damian Ondore> <@U038JMVKGBB|Josh Adams> as discussed just now
Thread: 2 replies (latest: 2026-09-11 15:09:43 BST)
Reactions: eyes (1)
Forwarded message from Carolina Almeida: [September 8th, 2026 9:26 AM] calmeida: Screenshot 2026-09-08 at 09.26.07.png

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-09-11 15:05:30 BST === 
Message TS: 1789135530.676739
Palantir information -
1.Treasury select committee notes <https://committees.parliament.uk/oralevidence/17396/html/|committees.parliament.uk/oralevidence/17396/html>
2.<https://www.computing.co.uk/news/2026/government/uk-financial-watchdog-taps-palantir-for-data-analysis|computing.co.uk/news/2026/government/uk-financial-watchdog-taps-palantir-for-data-analysis>
3.<https://www.linkedin.com/pulse/harnessing-technology-strengthen-uks-defences-against-ian-phoenix-5ekpe/|linkedin.com/pulse/harnessing-technology-strengthen-uks-defences-against-ian-phoenix…>
Thread: 3 replies (latest: 2026-09-11 15:17:33 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-11 15:10:33 BST === 
Message TS: 1789135833.046999
Thanks <@U01H981JRDX|Rima Mukherjee>, great intel as ever. I asked Claude to summarise that rather lengthy transcript - it is Friday after all :smile:  - see below:

_*Palantir section (Q595–Q611, panel 2)*_
_Yuan Yang opened by referencing a Guardian report claiming the FCA had officially announced Palantir would "work across all FCA datasets." Jessica Rusu flatly denied this._
_Key points from Rusu, Rathi, and Steve Smart:_
• _*Scope*: It's a 12-week proof of concept (PoC) for anti-money-laundering data processing — not a live production system._
• _*Procurement*: Won through a standard competitive public procurement process with multiple bidders; Rusu said the FCA has no visibility into or influence over who wins during scoring ("a completely blind process")._
• _*Data access*: Palantir only sees records pushed into the PoC's controlled infrastructure — not "all" FCA datasets. Data used includes entity resolution (linking individuals/firms/addresses), fraud network identification, and the FCA's 20,000+ social media data sources used to spot bad actors._
• _*Control*: FCA remains the data controller at all times; Palantir is a data processor only. No access to underlying intelligence beyond the PoC. Data sits in its own isolated S3 bucket — no linking across other UK government departments' Palantir deployments._
• _*Sovereignty/security*: Data held in a UK sovereign cloud, contractually restricted to SC-cleared staff only. CLOUD Act does not apply, per Rusu. Confirmed data destruction at the end of the PoC._
• _*Oversight*: FCA has architectural control over the PoC, plus standard data compliance certifications, Official Secrets Act obligations, and in-house supplier management/audit teams._
• _*"Why Palantir?" pushback* (John Glen): Rathi and Smart defended it on merit — it was the best-scoring eligible bidder, and the FCA wants "best-in-class tools" to keep pace with increasingly agile criminals. Rathi acknowledged the broader concern about Palantir/big tech becoming near-ubiquitous across UK government (NHS, MOD, police already use it — ~20% of Palantir's staff are UK-based, ~10 years operating across 13 police forces and the MOD per Rusu/Glen) but framed exclusion as a quality trade-off: "we would have a lower-quality proof of concept relative to the winning bidder."_
• _Rusu added the FCA separately does "sovereign architecture" work with No.10 and others on domestic cloud/AI/supercomputing capability, positioning this as parallel to, not instead of, using vendors like Palantir._
• 
_Net effect: the FCA pushed back hard on the "all datasets" framing and leaned on procurement neutrality and technical controls to defend the deal, while committee members (especially Yang and Glen) kept pressing on transparency, vendor concentration risk, and whether "best in class" really justifies picking an increasingly dominant government supplier._
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-11 15:11:18 BST === 
Message TS: 1789135878.751399
^^ We can use the AML connect with Ed Towers as a way to dig into Palantir too, as looks like they may be doing AML Data Processing for that initiative

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-11 15:15:00 BST === 
Message TS: 1789136100.722539
*Notes from today - thanks for your time and have a good weekend!*

<@U01HYKY7HFF|Maribel Pinilla> <@U09KM7QHDDW|Chris Dowlen> <@U08SVT0AXDJ|Damian Ondore> <@U053CR5T75Z|Joe Deasy> <@U061STVMSK0|Murray Grubb Jnr> <@U0A715JAUSV|Rachael Ross> <@U01H981JRDX|Rima Mukherjee> <@U01G8F4AASW|Jon Bland> <@U01ESLQ2FBP|Stephen Donnelly> <@U01JF0ZG4CX|Sylvain Naltchayan> <@U01FU44QDUP|Tom O'Neill> <@U01VCLKP8QN|Matthew Rochard>



*FCA 360 - Weekly Team Meeting*
Fri, 11 Sept 26 · <mailto:rima.mukherjee@salesforce.com|rima.mukherjee@salesforce.com>, <mailto:thomas.oneill@salesforce.com|thomas.oneill@salesforce.com>, <mailto:stephen.donnelly@salesforce.com|stephen.donnelly@salesforce.com>, <mailto:jbland@salesforce.com|jbland@salesforce.com>, <mailto:snaltchayan@salesforce.com|snaltchayan@salesforce.com>, <mailto:mgrubbjnr@salesforce.com|mgrubbjnr@salesforce.com>, <mailto:dondore@salesforce.com|dondore@salesforce.com>, <mailto:cdowlen@salesforce.com|cdowlen@salesforce.com>, <mailto:rachael.ross@salesforce.com|rachael.ross@salesforce.com>, <mailto:jdeasy@salesforce.com|jdeasy@salesforce.com>, <mailto:mrochard@salesforce.com|mrochard@salesforce.com>

*FCA Engagement and CRM Follow-up*
• Steve chasing Krishna for update on Colin/Emma interest in CRM
• Josh to forward message to Amanda and Claire asking for engagement
• Tom flagged as potential alternative face for the relationship (“send the handsome young man in”)
*Palantir Compete Strategy*
• Palantir flagged as significant threat across public sector
    ◦ Data interrogator (not integrator): combines data querying, synthetic data, and cleansing post-ingestion
    ◦ Does not complement other vendors; tends to displace and entrench
    ◦ PwC public sector sales director closely linked to Palantir, drives referrals
• Known to have run a 3-month pilot at FCA; unclear if still active
• Ongoing costs exponentially higher than Salesforce stack, but hard to displace once in
• Action: use organic networks to gather intel
    ◦ Rima into Colin/Maesta, Matt via Informatica contacts, others via Lauren/Julius
    ◦ Josh to ask Faisal for objective view as supply manager
    ◦ Ed Towers (new FCA contact) flagged as someone to probe
*Data Foundation and DRA*
• Data Readiness Assessment (DRA) explained by Murray
    ◦ Audits what data FCA has, where it is, accessibility, quality, duplication, silo issues
    ◦ Outputs a RAG-style risk score and recommended remediation plan
    ◦ Value prop: would cost FCA $1M-$1.5M with an SI; Salesforce can offer it
    ◦ Rachel had a call with Stefan last night on this; update pending
• Josh wants a dedicated weekly Data Foundation sync
    ◦ Murray to lead; Rima, Steve, and Lockie to be included
    ◦ Goal: structured plan for engaging Lauren’s team, clear opportunity pipeline for current and next year
    ◦ Josh to join as peer, bringing core/services/Tableau context
*Services Kickoff, Licenses, and Slack Discovery*
• Services project kicks off Monday at the Tower
    ◦ ~35-36 FCA attendees; Debbie not coming, Jagpal attending briefly
    ◦ Cupcakes ordered (Joe collecting Sunday)
    ◦ Sylvain to deliver Bobby overview at 10:15 Monday (confirmed today, short notice)
    ◦ Maribel to join weekly 360 call going forward to feed intel back to account team
• Agentforce One Edition licenses signed: $120K ACV, PO pending
    ◦ Gives FCA access to Slack and Tableau Next
    ◦ Comp recognition unclear across team (~4% on a small number)
    ◦ Opportunity to non-salesy introduce SEs to show value of provisioned environment
    ◦ FCA not attending Dreamforce due to project kickoff timing
• Slack usage discovery: Joe found ~260 FCA users already on Slack (<http://fca.org.uk|fca.org.uk> domain)
    ◦ AML team also has an org
    ◦ FCA previously said they “can’t use Slack”; these are shadow accounts
    ◦ Risk: don’t surface this to Debbie directly, could get accounts shut down
    ◦ Damian to pursue dev/ITSM use case with names from Joe’s list
    ◦ Josh to message Faisal about ITSM ownership (likely Sopra Steria)
• Tableau $0 invoice still unsigned; licenses at risk from 10th October when quoting mechanism changes
    ◦ Rima flagged to Phil; Josh to follow up with Phil today
• Tom: Seema call progressing a ~$30K opportunity; plan to land quickly then replicate on Intact
    ◦ Josh flagged: reopen Datamask and Seed conversation with Rachel on Intel now licenses are signed
• World Tour: 9 FCA sign-ups; Innovation Day registration link not yet available but dates blocked in calendars
    ◦ Informatica World Tour merging with MuleSoft AI Connect in November; Lewis Hall (BDR, public sector) to coordinate
*Next Steps*
• *Forward message to Amanda and Claire asking for engagement* (Josh)Stuck for ideas after no response from Colin/Emma; nothing to lose.
• *Gather Palantir intel via team networks*Rima (Colin/Maesta), Matt (Informatica), others (Lauren/Julius); report back next week.
• *Ask Faisal for high-level view on Palantir activity* (Josh)As supply manager, he should be able to name who is running it and at what scope.
• *Set up weekly Data Foundation sync* (Murray)Murray to lead; include Rima, Steve, Lockie. Josh to join as peer.
• *Connect on Slack user list and dev outreach* (Joe, Damian)Joe to share names; Damian to set up meetings with dev/ITSM users already on Slack.
• *Message Faisal about ITSM ownership* (Josh)Determine whether Sopra Steria manages IT support tickets and who the right contact is.
• *Chase Phil on unsigned Tableau $0 invoice* (Josh)Licenses expire 10th October when quoting mechanism changes; Rima has already opened the channel.
• *Reopen Datamask and Seed conversation with Rachel* (Tom)Now that Agentforce licenses are as good as signed, timing is right.
Chat with meeting transcript: <https://notes.granola.ai/t/c25181d8-8a41-4237-9e34-2b433fc2d3db-00demib2|notes.granola.ai/t/c25181d8-8a4…>


```

### #the-financial-conduct-authority (primary, C08EVRN6152) — thread replies

### Thread replies — #the-financial-conduct-authority (C08EVRN6152)

> 58 top-level messages in the merged transcript above had replies. Full thread content follows, ordered by parent timestamp.

---

**Thread on 1740425097 area / early channel setup** — n/a (no threads before 1758801447)

---

**Parent 1758801447.723849** (Francis Clauson — Agent implementation status request, F09H2GS6ELE Slack list):
> Josh Adams: Thanks Francis, will get this completed today - apologies I was out yesterday at an event
> Francis Clauson: Josh chasing 🙂
> Josh Adams: Francis just requested access to the list... Not showing with my permissions at the moment!
> Josh Adams: (blank)
> Josh Adams: Francis now done between me and Sylvain. Thanks Sylvain!

---

**Parent 1759159062.821369** (Nils Koop — Aman Chhabra covering for Vaibhav during paternity leave, GDC coverage):
> Josh Adams: Thanks Nils, let me add Aman Chhabra to our thread that we spun up earlier so we can get coverage sorted!

---

**Parent 1769077019.025509** (Chris Pannell — Jagpal/FCA concerns re: Slack retention & FOI (Freedom of Information) requests):
> Francis Clauson: retention was mentioned and wiping down is ok - but NOT IF THERE is an active FOI in progress. So I think he was looking for guidance in this space. I have a bit of experience in both the FOI and AIE space - so let me know if you want to loop me in for some domain knowledge.
> Damian Ondore: We have a strong story on retention control, and on auditing and I'm sure if the use case is strong enough, we can lean on other Salesforce clouds (such as OwnBackup) for retention requirements outside of Slack's scope and for indexing and search.
> Damian Ondore: I can dig around and try to get a sense of who, lower down the chain, might care about this and be working on this. We'll discuss Josh and the team doing our 360 tomorrow. Chris if you could join up the ownership dots from Jagpal and maybe get an intro to a Problem Owner. We have previously flagged up "Slack for comms auditing" as a likely strong use case for the FCA, given their role and types of activity, but we aren't directly addressing the problem with them yet.
> Chris Pannell: Thanks Francis & Damian. I want to get to the _why_ more than the how. I know that HMRC operates the same model with teams, and suspect it's pretty standard across all of government. I did some research on this a while back, refreshed it and popped it into this canvas.
> Josh Adams: Thanks Chris, I am certainly keen that we can raise these points to alleviate some concerns re: retention and why it is an issue but think there is a lot more selling to be done on the outcomes and benefits Slack delivers to the FCA. I am happy to help facilitate this with Jagpal and his team so they are then informed, but they are a long way off seeing the value at the moment, and still have the mindset this is a Teams IM compete (which is a non starter in their eyes). Will work with Damian about how we get something set up, then would be great for you to join that session and build the rapport with Jagpal et al. Jon Bland — FYI above, as we have been talking about Slack @ FCA for the past few days.
> Chris Pannell: Josh — a good opportunity for us, on the week of March 9th we have Nathalie Scardino our President and Chief People Officer visiting, and she is keen to join slack specific conversations. She has a great narrative around our customer zero employee success story, which weaves slack nicely into the story. I think she could be a great person for us to connect with Jagpal, and ideally Siobhán Sheridan — who is the chief people officer and interim COO — do we know her?
> Josh Adams: They bloody love an exec connect from the US so let's try and sort that out. I think we should try and tee up a conversation for you and Jagpal that I can facilitate as a brief so he can get Siobhan briefed and prepped.
> Josh Adams: As I said, Jagpal needs some selling done to him about the value and use cases of Slack still, so we need to get that done with him before he's willing to intro us up into Siobhan, but my gut tells me that they will jump at the opportunity to meet Nathalie.
> Josh Adams: Thoughts Chris?
> Chris Pannell: Nice nice nice! The Nathalie meet can be way broader than slack for sure. There are multiple uses, so it wouldn't be a one size fits all I would assume. Feels like we probably need to hop onto a meet as a collective to whizz through this all, and the steps needed before we engage Jagpal. I wonder also, if we should look at UK commercial customers who we could introduce to Jagpal around their use of slack.
> Josh Adams: Yes, love it! I think the POV needs more work. Damian would you like to set something up for me, you, Chris and Jon B so we can be clear on what we need before engaging FCA Execs? Need to get together sooner rather than later as diaries will fill up for both Jagpal and then eventually Nathalie Scardino and Siobhan.
> Damian Ondore: Sounds good. All for aligning our line of attack!
> Chris Pannell: Apparently Nathalie Scardino's team are very excited about the prospect of her meeting with Siobhan btw 😄

---

**Parent 1771241024.906089** (Josh Adams — Case Management channel intro, private channel note re: FCA Slack blocked):
> Josh Adams: We will use #FCA-Case-Management-Vision (C0AEQ756YDA) as the channel to discuss activities and share progress so I will add you all in to that channel. While Maribel Pinilla and Jim Douglas have a good knowledge of our portfolio I will need you all to step up and make sure your products are well represented and fulfilling their potential 💪 Maribel knows the business process and will be owning the overall solution. P.S. Apologies the channel is set to Private. I originally set it up so the FCA could potentially join and we could collaborate in real-time however Slack is blocked on their side 😄 Can't change the permissions.
> Josh Adams: All, further update on this: Maribel Pinilla and Jim Douglas have got the business process nailed down now - they are now going to build the majority of the journey in a sandbox and then I have asked them to present it back to the 360 team so we can suggest how we can enhance the showcase to make sure we are putting our best foot forward in terms of technology and art of the possible. Maribel and Jim will get the session set up at some point next week 👍

---

**Parent 1771510349.781989** (Josh Adams — FCA marketing/events session, 11 March placeholder):
> Stephen Donnelly: Hey Josh many thanks for arranging this. Did Emma manage to share any further context on her plans, aspirations, challenges etc. This will really help us to make the session valuable for her and drive a solid opp for us.
> Josh Adams: I was going to check the date works for you both...? Assume it does so will go back and confirm! I am going to get in a pre-call with Emma ASAP to discuss the session and how we suggest we structure it. From my notes before she has a current pain point around Events Management but is keen to understand what good looks like from a Marketing perspective and I think we need to show her what the art of the possible is for her to work towards over time, as they are lacking quite a lot of tooling there at the moment. Emma is clever and ambitious so I am hoping that we can get her excited about what is possible with our platform and she can take it forward to get sponsorship.
> Josh Adams: Please feel free to forward over to any of your colleagues too Stephen, SEs etc...
> Josh Adams: FYI - room booked for 11th March, updated invite.

---

**Parent 1771514792.336419** (Jon Bland — Sylvain to draft response to Jessica Rusu's note back to Simon Collinson):
> Sylvain Naltchayan: Thanks for sharing Jon. All topics James has been asking about in the last week or so. Will look into it further.

---

**Parent 1771612146.381179** (Josh Adams — Authorisations AI Delivery Team / Project Libra intel from Maribel):
> Maribel Pinilla: As we discussed earlier, here a bit more information about Authorisations AI Delivery Team (Project Libra). They are planning or using (I'm not sure the project status) to help identify risks in Senior Manager Regime and other applications upon submission. Since Authorisations is moving to Gateway forms I guess AI tech may be related. Hannah Lipscombe-Mitchell (hannah.lipscombe@fca.org.uk) is the head of Authorisations department. Glenn Redemann (glenn.redemann@fca.org.uk) is the manager of the AI Delivery Team.
> Josh Adams: Thanks Maribel, great intel! Jon Bland has a relationship with Hannah so let me discuss with him. We previously discussed (at a very high level) helping Hannah's Auths team with some AI use cases but the conversation never progressed... Great work as always!

---

**Parent 1771925870.231959** (Josh Adams — recap of intro meeting with Julius B (Informatica), Matthew Rochard, Murray Grubb Jnr, Rachael Ross):
> Murray Grubb Jnr: Summary of meeting with Julius. Introductions and Roles: introductions between Julius B of the FCA and the recently realigned Salesforce/Informatica team: Matthew Rochard (government agencies for Informatica), Murray Grubb Jnr (heads Data Foundations team, aligned to regulators), Rachael Ross (Client Strategist). Julius B confirmed Informatica's new Customer Success Manager is Mark Winters. FCA Project Status: FCA in post-migration hypercare phase after rapid migration to IDMC; Julius's focus for next 3 months is user adoption; quick change + quality component still in testing led to a "change freeze." Data governance team (led by Andrew Higgs) struggling to move from manual spreadsheet import to "scan the source" approach. Data Assessment Proposal: Josh Adams proposed a free Data Assessment framework — value-add exercise with SMEs to analyze FCA's data landscape/tooling/strategy, output an agnostic report to plot a path to mature the data environment and aid executive buy-in. Julius interested, will involve Andrew Higgs. Collaboration/Governance: Josh proposed a tripartite working relationship with partner Agile, plus a cross-pollination learning session bringing together FCA execs (Lauren, Ian) and Salesforce/Informatica execs (Jack Powell, James Simon) to align governance since both products now from same vendor. Contract Management: Matthew emphasized a regular cadence to manage the project given the FCA's unusual, flexible IPU contract model. PS Options: Informatica PS can be bought via a transaction partner or directly on new G Cloud later this year; Murray noted BOS 2 framework covers all Salesforce entities for PS/licensing. Support for Exploitation: "Resident Architects Program" (via PSUs) available; suggested user-adoption webinar blueprint similar to Cabinet Office. Next Steps: follow-up meeting in Stratford or Liverpool Street to work out an agenda on user adoption, Data Assessment, and future support.
> Josh Adams: Thank you Murray that is great! Good meeting.

---

**Parent 1772106719.881069** (Josh Adams — stakeholder/divisional map for Rachael Ross, FCA Stage 2 opp qualification criteria):
> Rachael Ross: Sounds good Josh! Thanks a mil.
> Josh Adams: Rachael — let's use that qualification we mentioned in Jon's team meeting this afternoon; compelling event, proposed business value etc etc... no need to reinvent the wheel!
> Rachael Ross: Yes absolutely 🙌

---

**Parent 1772545129.191049** (Maribel Pinilla — Data Assessment / DRA discussion re: Lauren, Jason Baker Chief Architect):
> Josh Adams: Hi chaps, hope you're well. Just returning back from PTO yday - sounds like some decent progress with Lauren - great work! Spoke to Richard Cole / Stephane Pajon earlier about a Data Readiness Assessment - was this discussed with Lauren? I am trying to get Jason Baker (Chief Architect) into that session with Lauren too so we can speak about the DRA in that meeting if helpful. Let us know what the next steps with Lauren are and how we can fold into DRA initiative... cc: Dipesh Bhoola.
> Josh Adams: Good news - Jason Baker is IN for the meeting with Lauren on 20/03. This is shaping up to be a key meeting - let's align on content, owners etc!

---

**Parent 1772555836.989119** (Dipesh Bhoola — SIC room for 3rd June, "data readiness W/S and showcase Murray described"):
> Josh Adams: Yes please, can we get that requested ASAP!
> Dipesh Bhoola: think an AE needs to sort out.
> Josh Adams: Cool - let me do it.
> Stephane Pajon: I won't be available on the 3rd June unfortunately. I am already booked, sorry.

---

**Parent 1772702657.205259** (Damian Ondore — briefing after PTO/home office event):
> Josh Adams: Let me know when you're free to catch up. I am in the office tomorrow for the event, else we can speak next week.
> Damian Ondore: Same.
> Damian Ondore: Tomorrow is good.

---

**Parent 1772703651.648679** (Josh Adams — "FCA 360 Appreciation Post," Case Management Vision Exec Check-In + Quarterly Roadmap Forum, quotes from Debbie Gupta/Jagpal Jheeta):
> Rima Mukherjee: Hi Josh, from our presentation followup from last week, do we have an inroad into Emma Mattingly/Helen Packard as highlighted by Debbie? I want to reach out asap as Debbie mentioned it will be crucial to show it to them for regulatory excellence / operational MI. fyi Dipesh Bhoola.
> Josh Adams: Rima — I will reach out to Helen now and see if we can get some time. Good shout.
> Josh Adams: Rima do we know it was definitely Emma M? I can't find her details anywhere!
> Rima Mukherjee: I just heard it virtually, you all were in the room, I might have got the name wrong, worth checking with them … as per my notes she is responsible for operational excellence.
> Rima Mukherjee: [LinkedIn link] Josh, I think Debbie was referring to her (Emma Mattingley). I can reach out.
> Josh Adams: Great, yep let's reach out.
> Josh Adams: Good find, I couldn't manage to find her. See if Rachael can reach out and find her email.

---

**Parent 1773310065.177269** (Sylvain Naltchayan — Case Management Vision checkpoint update with Penny/Caryl/Pat O'R/Paul Rice/Paul W):
> Josh Adams: Thank you for the update Sylvain and great work from you and Maribel 🙌. Sounds like a few critical areas are still in progress (to be expected) so look forward to working with the team on these, they have the ability to be really powerful! Re: microsite, it is imperative their LT do a video/voiceover, that will massively help with sponsorship and onwards conversations. Re: SF Futures - noted, it may not be case mgmt specific, but more about how they see the future of work and how this naturally fits with what FCA are trying to achieve. Thanks for reaching out Sylvain. Re: other success stories, absolutely, let's do it - I am keen we use both PubSec and FS examples as that's a natural link to their work. I have some contacts in the FS space from my previous role at Salesforce so I will reach out too 👍 Let's track this as something we're working on. cc: Jon Bland FYI for Strategic Review meeting next Tues if it comes up.
> Sylvain Naltchayan: and for information (esp. Maribel Pinilla).
> Rima Mukherjee: Hi Sylvain, this is agent efficiency dashboard - [Tableau Exchange link]. FYI Dipesh Bhoola.
> Sylvain Naltchayan: thanks... is this Agentforce Analytics then?
> Dipesh Bhoola: Its Tableau Classic dashboard accelerator which can be used to measure efficiency of AI Agents. I believe there is (or soon to be) a similar Tableau Next version of this.
> Rima Mukherjee: Hi Sylvain here you go - Slide 4 on: [Google Slides link]. FYI Dipesh Bhoola.
> Dipesh Bhoola: Maribel Pinilla and Sylvain Naltchayan — here's part of the content for Case Management Vision with Tableau Next. Dashboard and Agents cover Supervision Cases: Risk Drivers, Types of Harm, Risk Score, SLA Compliance and FOS; tbd - Analytics Agent (not enabled on Demo Org); tbd - analysis on Tasks within Action Lists.
> Maribel Pinilla: Josh Adams / Sylvain Naltchayan — Video: I asked Penny in the MS Teams channel about it. I will let you know when she replies. Microsite: It seems Highspot will be EOL April 2026. Maybe we can create an Experience Page in their sandbox as an alternative, but we will lose the engagement data. Would that be okay?
> Maribel Pinilla: Penny said, they will discuss with D&J on Wed.

---

**Parent 1773313184.653889** (Josh Adams — invitee list requests for account team, per-segment):
> Rachael Ross: perfect will do.
> Josh Adams: Jon Bland / Sylvain Naltchayan have you got any details for the actual event too...?
> Josh Adams: Rachael Ross — Old list/format that I used with Dan - the other team members can add to this list or provide separately. I added the tracker columns, feel free to use them or not! [Google Sheet link]
> Rachael Ross: Thanks josh will do re cc & tracker.
> Stephen Donnelly: Hey Josh Rachael, I've added Emma, Claire and Amanda to the spreadsheet.
> Josh Adams: Sylvain Naltchayan tells me the event is called Innovation Global Government Forum, 24 & 25 March.
> Rachael Ross: I will draft an email and send it in here first.
> Sylvain Naltchayan: might be worth checking with Sarka Tran - if there's been comms drafted already for this?
> Sylvain Naltchayan: slide 24? [Google Slides link]
> Rachael Ross: Invites have been sent out to everyone on the sheet and you are cc'd accordingly!
> Rachael Ross: I have left the draft email for FCA & Ofcom on the sheet if anyone is looking to send out any more next week 😊

---

**Parent 1773323591.573789** (Josh Adams — Appreciation post for Maribel Pinilla's RegEx Case Management Vision demo):
> Patrick Knight: Love this! Amazing work Maribel Pinilla and thank you for sharing Josh! cc Ming Liu, Gregory Scarrott.
> Rima Mukherjee: Absolutely phenomenal work Maribel Pinilla, Dipesh Bhoola and Sylvain Naltchayan. You legends make it so easy to demonstrate the value and vision. Couldn't thank you enough 🙌🎉
> Maribel Pinilla: Thank you so much for the kind words, I really appreciate it ❤️. I really enjoy working on this piece of work and it is a real team effort. I'm lucky to work with such a great team and individuals Sylvain Naltchayan, Dipesh Bhoola, Jim Douglas and learn from them.

---

**Parent 1773337694.803049** (this is the RegEx Working Group checkpoint referenced in the Q1 wrap-up as [4]) — duplicate reference to 1773310065 checkpoint content above.

---

**Parent 1773401493.352609** (Josh Adams — Rima Mukherjee Tableau issue report on fca.org.uk redress-paid page filter bug):
> Josh Adams: 👀
> Josh Adams: Waqqas Awan?
> Waqqas Awan: Dipesh Bhoola I can ask the team at FCA.
> Dipesh Bhoola: thanks Waqqas, I've joined in the email trail with Colin.

---

**Parent 1773670983.801779** (Josh Adams — Deloitte go-live update, Einstein hallucination bug):
> Josh Adams: Great intel Sylvain, thank you for sharing 🔥 Keep me posted with anything I can do to help Chris Dowlen, Vaibhav Krishna Kumar.
> Chris Dowlen: Hi Sylvain, just playing Slack catchup. Can we advise the team to get a support case raised to report the hallucination issue as soon as possible? We can then monitor and track progress this end.
> Chris Dowlen: Happy to be looped into an existing thread to suggest this to Nadia / Preeti.
> Josh Adams: Good thinking Chris.
> Sylvain Naltchayan: Hi Chris — Do you mind suggesting that directly in the deloitte/sf channel?

---

**Parent 1773915694.848859** (Josh Adams — ITSM exploration for FCA, likely ServiceNow incumbent):
> Rachael Ross: will do!

---

**Parent 1774263479.316589** (Rima Mukherjee — Palantir competitive intel, Treasury Select Committee links):
> Josh Adams: Thanks Rima, great intel as ever. I asked Claude to summarise that rather lengthy transcript - it is Friday after all 😄 — see below: Palantir section (Q595–Q611, panel 2): Yuan Yang opened by referencing a Guardian report claiming the FCA had officially announced Palantir would "work across all FCA datasets." Jessica Rusu flatly denied this. Key points from Rusu, Rathi, and Steve Smart: Scope: 12-week proof of concept (PoC) for anti-money-laundering data processing — not a live production system. Procurement: Won through a standard competitive public procurement process with multiple bidders; Rusu said the FCA has no visibility into or influence over who wins during scoring ("a completely blind process"). Data access: Palantir only sees records pushed into the PoC's controlled infrastructure — not "all" FCA datasets; data used includes entity resolution, fraud network identification, and 20,000+ social media data sources used to spot bad actors. Control: FCA remains data controller at all times; Palantir is a data processor only; data sits in its own isolated S3 bucket — no linking across other UK government departments' Palantir deployments. Sovereignty/security: data held in a UK sovereign cloud, contractually restricted to SC-cleared staff only; CLOUD Act does not apply per Rusu; confirmed data destruction at end of PoC. Oversight: FCA has architectural control over the PoC, plus standard data compliance certifications, Official Secrets Act obligations, in-house supplier management/audit teams. "Why Palantir?" pushback (John Glen): Rathi and Smart defended it on merit — best-scoring eligible bidder; FCA wants "best-in-class tools" to keep pace with increasingly agile criminals; Rathi acknowledged the broader concern about Palantir/big tech becoming near-ubiquitous across UK government (NHS, MOD, police already use it — ~20% of Palantir's staff UK-based, ~10 years operating across 13 police forces and the MOD per Rusu/Glen) but framed exclusion as a quality trade-off: "we would have a lower-quality proof of concept relative to the winning bidder." Rusu added the FCA separately does "sovereign architecture" work with No.10 and others on domestic cloud/AI/supercomputing capability, positioning this as parallel to, not instead of, using vendors like Palantir. Net effect: the FCA pushed back hard on the "all datasets" framing and leaned on procurement neutrality and technical controls to defend the deal, while committee members (especially Yang and Glen) kept pressing on transparency, vendor concentration risk, and whether "best in class" really justifies picking an increasingly dominant government supplier.
> Rima Mukherjee: But 3 months have passed, we need to find out if they are still sniffing around 😅
> Josh Adams: For sure!!

---

**Parent 1774279830.278929** (Chris Dowlen — Blind Institute of Technology accessibility call, 8 July 2026 recap):
> Sylvain Naltchayan: Thanks Chris Dowlen. Did they mention which WCAG (AA) they are targeting? 2.2?
> Josh Adams: Great notes, thank you for sharing Chris Dowlen.
> Sylvain Naltchayan: so do we want to add this as an item in roadmap we think?
> Josh Adams: I'm not sure what there is to show, unless BIT want to come and talk about it in the session? One to test with FCA...
> Sylvain Naltchayan: that's what I was thinking...!

---

**Parent 1774368564.937489** (Josh Adams — Case Management Vision RegEx Manager Summit recap, Debbie Gupta 18-24 month ambition quote):
> Stephane Pajon: <@U037SKB6C4E> I won't be available on the 3rd June unfortunately. (cross-reference — see 1772555836 for original)

---

**Parent 1774439951.265809** (Jonathan Toms — Nick Eden-Russe escalated a support case; covering for Chris Dowlen on PTO):
> Vaibhav Krishna Kumar: Hey Jonathan Toms, Chris Dowlen is on PTO today. Can you please add me to the thread? To see if we need to support them from a CSM standpoint.
> Jonathan Toms: Hey Vaibhav will do.
> Josh Adams: Thanks JT! Appreciate you covering while Chris Dowlen is out 💪 if there's a possibility of kicking off any of the threads you mentioned in your reply that would be great, then Chris and Vaibhav can pick up from there.
> Jonathan Toms: Josh will do. Vaibhav case [org62 case link 473587263].
> Vaibhav Krishna Kumar: I met Sahithi Dhanekula (support engineer) yesterday and advised her to check on the possibility of an exception (to get an extension/delay for this update). She checked with the security & product team; however, it's a hard "NO" for the exception. Regarding the other questions Nick reached out about, the support team is working to find the responses. I am following up with them.
> Josh Adams: Hi Chris Dowlen Vaibhav Krishna Kumar - let me know once you guys have had a chance to connect on some of the support issues that FCA raised on Friday and we have a response plan back to Ian & co.
> Vaibhav Krishna Kumar: Hey Josh, the support team is connecting with the client "Merlin Deporal V" at 10:30 AM today. Would keep you posted.
> Chris Dowlen: Hi Josh, just playing catch up from PTO. I'm catching up with Vaibhav to get up to speed. We will aim to sync up later to provide a response plan back to Ian and co.
> Josh Adams: Great, thank you both - appreciate the update.
> Vaibhav Krishna Kumar: (updates re: meeting timing)
> Vaibhav Krishna Kumar: Josh / Chris Dowlen — summary of the 10:30AM meeting: discussion focused on Salesforce behavioural changes regarding email verification and device activation for external users. Device Activation and Email Verification: activation codes depend on specific checkbox statuses, email verification independent of those settings; security teams working to ensure activation codes triggered to updated email addresses. Administrative Bypass: sysadmins can bypass email verification for external users by updating email addresses directly; does not apply to internal users. External User Verification: new external users get verification links, can also use password reset feature to verify email while setting password; existing external users updating email addresses require a valid login session. Scope Limitations: new email verification requirements limited to user records, don't apply to non-user entities like Chatter or Email-to-Case. Credential Requirements: verification requires credentials for the specific record being modified, even with shared mailboxes. Detailed meeting notes linked. Sahithi Dhanekula scheduling a follow-up meeting for 12 noon.

---

**Parent 1775549610.689339** (Josh Adams — Agent AVA goes live announcement, fca.org.uk/consumers/car-finance-complaints):
> Dipesh Bhoola: (reaction, no text)

---

**Parent 1775549714.107969** (Simon Collinson — share on gps UKI group):
> Josh Adams: Yep will do!

---

**Parent 1776780279.043339** (Maribel Pinilla — Julius Bwesigye Data Assessment / Informatica intro meeting recap):
> Sylvain Naltchayan: Thanks for sharing Jon. All topics James has been asking about in the last week or so. Will look into it further.
(Note: content of this thread is the Data Assessment/Julius B meeting recap already captured under 1771925870 — Slack appears to have surfaced overlapping content on re-fetch.)

---

**Parent 1777036724.986539** (Josh Adams — Q1 FY27 wrap-up, full Slackbot-generated deep dive, closed ~£110k):
> Murray Grubb Jnr: Great summary. The wider Data Foundations for the replatform project will be a game changer for them and us.
*(Full Q1 recap content — Agentforce pilot, Account Planning session, Case Mgmt Vision RegEx programme milestones, FCA-Salesforce Bi-Annual Strategic Review 17 Mar, Shield discovery, Agent AVA go-live, Data Foundations/Informatica intro to Lauren Dixon, Tableau Data Day planning, Partnership Anniversary exec engagement, Palantir competitive intel, Project Irwell Phase 2 — see Organized Summary above for extracted signals.)*

---

**Parent 1777442154.682069** (Jon Bland — Jessica Rusu response to Simon Collinson's note, tasked to Sylvain/Maribel):
> Sylvain Naltchayan: Thanks for sharing Jon. All topics James has been asking about in the last week or so. Will look into it further.

---

**Parent 1777629413.985519** (Matthew Rochard — "How do I book a big room in SF Tower?"):
> Waqqas Awan: When creating a meeting in Google Calendar, under room type select London and see what shows up as available.
> Dipesh Bhoola: Matthew Rochard let me know if you need help with this.

---

**Parent 1778060062.279959** (Chris Dowlen — data privacy opt-out question, Paul Rice engaging Data Privacy team):
> Josh Adams: Nice work, thank you Chris Dowlen!

---

**Parent 1778071463.287729** (Josh Adams — DRA discussed with Jason Baker, Lauren Dixon meeting on 20/03):
(duplicate content of 1772545129 — Slack resurfaced same thread on re-fetch)

---

**Parent 1778077589.944609** (Dipesh Bhoola — SIC room booking for 3rd June deeper-dive workshop):
(duplicate content of 1772555836 — Slack resurfaced same thread on re-fetch)

---

**Parent 1778157075.127559** (Damian Ondore — home office briefing ran long):
(duplicate content of 1772702657 — Slack resurfaced same thread on re-fetch)

---

**Parent 1778165297.582059** (Chris Dowlen — Seema Dhokia / Irwell readiness, Vaibhav go-live monitoring case):
> Vaibhav Krishna Kumar: Hi Josh, we shared some of the details with Seema last week. I am trying to find out if there is an external-facing document for this.
> Josh Adams: Thanks Vaibhav, yes external facing document would be very helpful.
> Vaibhav Krishna Kumar: we do not have a comprehensive information on this.
> Vaibhav Krishna Kumar: However, I found an article which mentions this - [help.salesforce.com article 000393054].
> Vaibhav Krishna Kumar: Josh — I am raising a case for Go-live monitoring and will share this link with Seema as well shortly.
> Josh Adams: Ok cool, thanks Vaibhav.

---

**Parent 1778239597.213469** (Matthew Rochard — Cognizant contacted re: FCA, incumbent data partner):
> Josh Adams: Nice work Matthew Rochard - let us know what they say!

---

**Parent 1778601926.772979** (Chris Dowlen — FCA bandwidth/page-view threshold limits query, contractual termination risk):
> Maribel Pinilla: Hi Chris, do you know the API volumetrics? here some info about that. [Salesforce Platform API limits cheatsheet link]

---

**Parent 1778678781.384629** (Sylvain Naltchayan — Agent AVA NOT a real Agentforce agent, Signature webinar caveat):
> Chris Dowlen: Hi Sylvain understood and have briefed Mariella Brodersen who is the webinar organiser. We will caveat this in the initial intro.

---

**Parent 1778687458.440459** (Joe Deasy — CTO paperwork, 90-day notice clause, Maribel's weekly summary cadence):
> Maribel Pinilla: Good morning Joe Deasy, I shared the report every week and they review it offline. Additionally I have bi-weekly meetings with James and Penny delegates (Caryl & Paul F.) to adjust priorities, focus, etc, and every 6 weeks I have a catch up with Jagpal, James and Ian to share progress, key topics and get direction about priorities and focus. In the last one we agreed to have a session to update the CTO Value Map and start to think to wrap up requirements (regardless if later is a renewal). Today I'm in their offices for a workshop, but tomorrow I can put some time to this. I will book a slot for us & Josh to discuss.

---

**Parent 1778755145.958089** (Chris Dowlen — Steve Hall confirms Signature webinar panellist slot, Data Privacy Opt-Out, Agentforce Vibes LLM selection, Cloudflare Turnstile):
*(Full 4-topic update: Agent AVA Signature webinar; Data Privacy Opt-Out — James Symon/Paul Rice; Agentforce Vibes LLM model selection — Paul Rice/Karen Fidelak; Cloudflare Turnstile/Google CAPTCHA — Aman Sapra & Gurdeep Sembhi.)*
> Josh Adams: Cheers Chris, appreciate the update - very helpful! Couple of thoughts/points: 1. Let's make sure we check internally that this is not a true Agentforce use case at this stage, and confirm the customer is also onboard. 2. Thanks - FYI Sylvain. 3. Sylvain also working on this - let's make sure we have a clear RACI on who is doing what and how we message back to the customer. I will leave that to the two of you to determine. 4. You may want to also point them in the direction of Cloudflare for implementation advice if we can't help.
> Chris Dowlen: Josh — one more update, apologies for missing this. Regarding the FCA concerns around Anthropic Claude Mythos, Matthew Friend (Senior Director, Security and Compliance Customer Trust) has offered to have a 30-minute confidence call with the customer. More than happy to arrange an internal call for us to sync up with Matthew first. No comms on this shared with FCA as understand we will be holding a wider internal discussion on this topic in the coming days to put a plan in place to respond to Ian's mail.
> Josh Adams: Oh great! I need to chat with someone about that internally to prep for the session - can we set up a Slack DM with Sylvain and Matthew please? That will be great.
> Chris Dowlen: Will do, no problem.
> Sylvain Naltchayan: Hi Chris — thanks a lot for this update. 1. Yes, i agree we need to be very careful here... (And maybe this story has gone a little too far...!) ... Agent AVA is not Agentforce... that is my understanding. 2. thanks. 3. Let's await Karen's response.
> Sylvain Naltchayan: Chris — could you add one thing in your conversation with Karen Fidelak please for confirmation: Paul Rice is also claiming that they 'have no way to monitor Vibes token usage.' Could you ask her please?
> Chris Dowlen: Just looped you Sylvain.
> Maribel Pinilla: Hi Chris — about the LLM model selection, I was in the office today with Paul R. and I saw he still has the 'old Pro' model, so he is not able to select the LLM. My understanding is that someone in Salesforce did something but it seems is not reflected in FCA.
> Sylvain Naltchayan: (troubleshooting thread — Mahesh Kodli in help-agentforce-vibes clarified this is default free-tier behavior; unclear if paid tier resolves it)
> Chris Dowlen: I don't think we have provided access to the paid version as such. More that we have lifted the usage limit he was experiencing prior, resulting in knockout of the service for developers. I have arranged for Karen Fidelak to jump on a call with Paul this afternoon.
> Maribel Pinilla: okay... I think Paul understood that we provided access to the paid version. He showed me yesterday and his screen displayed "Pro." That is probably the reason he can't change LLM right?
> Sylvain Naltchayan: Yes, hopefully Karen can knock this one down... maybe they don't have the pro version... or the 'old pro version'.
> Chris Dowlen: 🤞

---

**Parent 1778861495.773759** (Dipesh Bhoola — Tableau redress-paid page filter bug, potential Slack lead referred to Damian):
(duplicate content of 1773401493/Slack-lead thread — Slack resurfaced same conversation on re-fetch)
> Chris Dowlen: Josh Adams / Tom O'Neill - just pinged you both a mail to flag a potential Slack lead over at the FCA, which I have referred to Damian Ondore. I don't believe an opportunity exists for this yet but happy to create one if needed.
> Josh Adams: Sweet, thanks Chris, good work! just replied back to your email. Damian Ondore look forward to working on this with you.

---

**Parent 1779286721.740169** (Matthew Rochard — Data Foundations meeting postponed to July):
> Josh Adams: Great thanks for the update Matthew Rochard - let's get some weekly calls in between now and July to ensure we get everything organised and assigned out to owners 💪
> Matthew Rochard: I agree Josh. We can work on the data angle with the contacts we have. What would be really good is if we could get more detail on the business user demands and where that focus should be. I think we need to start to bring the two together to make our approach more compelling.
> Josh Adams: Absolutely. I have put an update in #fca-data-foundations (C0ANBMS4DNX) as that was where the bulk of the discussion was last week.

---

**Parent 1780318384.983119** (Chris Dowlen — Felix Kroppenstedt Signature Success Architect shoutout, INTACT cross-department comms architecture):
*(20-page architectural assessment for secure comms between restricted INTACT departments — 4 options evaluated, Option 4 (Custom Communication Object + Chatter Record Feed Hub) recommended; cost avoidance, reduced compliance risk, faster decision-making, protected platform investment cited as business value.)*
> Nils Koop: This is great Chris! And lovely summary of the good work by Felix. Very well done 👏

---

**Parent 1780329240.444859** (Simon Collinson — Johan (new COO) meeting recap, NewCo vs. debt remediation for INTACT, new TOM/agentic tech risk):
> Josh Adams: Great, thanks Simon Collinson. Catching up with Jon Bland shortly where we'll get a plan together. Sounds like a very positive session so let's use this as a springboard to nail that architectural argument.

---

**Parent 1780650267.305519** (Josh Adams — weekly account call actions: Data Foundations, Tab, BDR):
> Stephane Pajon: Matthew Rochard would you be able to request the INFA SE on our behalf as SEs cannot request INFA SEs 🙂 it has to be the AE. Thank you 🙏
> Matthew Rochard: Of course.
> Chris Dowlen: Just a quick update my side - Steve Hall has confirmed his participation in our upcoming Signature webinar to celebrate AI success - Steve is going to be on the customer panel with a 10-minute slot to run through project AVA - Date TBC but likely to be early June, will keep you posted.
> Josh Adams: Brilliant Chris Dowlen, good work! Keep us posted on here when confirmed!
> Dipesh Bhoola: Josh Adams which opp should we be using for the DRA activity?
> Josh Adams: Murray Grubb Jnr / Matthew Rochard can you advise please? Will need to be on a Data Foundations oppty.

---

**Parent 1780655775.474169** (Chris Dowlen — active workstream update: Agent AVA webinar, Data Privacy Opt-Out, Agentforce Vibes LLM, Cloudflare Turnstile):
*(duplicate/expanded version of the 1778755145 thread — same 4-topic update and Claude Mythos confidence-call subthread.)*

---

**Parent 1782977712.428689** (Vaibhav Krishna Kumar — Gurdeep security-enforcement feedback relayed from bi-weekly meeting):
> Sylvain Naltchayan: Thanks Vaibhav. This is the sort of things you will need to cover at the quarterly roadmap session on 16/7 Chris Dowlen.

---

**Parent 1783011613.634119** (Maribel Pinilla — joining roadmap session online):
> Josh Adams: Cool, sounds good Maribel Pinilla!

---

**Parent 1783603476.841279** (Ed Towers — Head of AI Product Delivery, deep intro on headless architecture, Project Libra, AML PoC, concentration/bottleneck risk):
*(Full meeting notes: Ed Towers' 3 frontline priority areas — Authorisations/Project Libra, AML PoC, Supervision digital/AI vision; headless architecture pitch addressing concentration risk and James's team bottleneck; Project Libra as working proof point; Greg Smith and Prabhu own AML architecture decisions; Amanda Annandale's EA team has limited Salesforce portfolio visibility; Faisal Ahmed cited the Claude Code session on Monday as a value-add example; Jagpal flagged as common denominator, exec reviews with Johan and Jessica Rusu; broader perception challenge — Salesforce viewed by some as an aggressive sales org.)*
> Maribel Pinilla: Thanks Josh! very insightful!... One comment about Ed's perception challenge, I think the overview of Salesforce capabilities (applied to Regulatory case management and potentially applied to AML as well) hopefully helps them with that. We need to be careful to not use Headless as an "escape from INTACT" because that might overcomplicate things.
> Sylvain Naltchayan: Thanks for sharing Josh - some interesting insights indeed. do we have any more details about the AML workstream?
> Rima Mukherjee: Many thanks Josh, great insight. On the authorisation piece, LLM-based document analysis running on AWS, results surface back into Caseflow to guide officers through assessments; actively exploring where it goes next, do they need context on that data? let's discuss. Great inroad for us.
> Murray Grubb Jnr: I did a lot of the AML and KYC stuff at Pega replacing Finergo so may be able to help too Josh.
> Josh Adams: I think we need to get a handle on the AML use case; in short the FCA are going to become the overall regulator for money laundering. They are thinking about what this means for them and how they should do it... e.g. do they: 1. Use existing INTACT org, 2. Use a new greenfield org (e.g. what we are creating in Transform programme), 3. Use non-Salesforce solution as front-end that then links back into INTACT as the master of data. All options are being considered!
> Rima Mukherjee: The banks have AML use cases already, may be lean on our huge banking customers to learn how they tackle it and refine for the regulator.
> Maribel Pinilla: About AML I supported a piece of work about the Org strategy, I have some context of what they are doing. On the table to have their own greenfield Org if transform is not going ahead. Actually due to timings, they might start the New Org before transform.
> Ed Armishaw: Love this Josh - please let Lachlan Mills & I know how we can help with that follow up session, especially on headless. If nothing else I often find 2 Ed's are better than 1. 😂

---

**Parent 1784200632.627069** (unknown — see thread reply below on Data360/enterprise intelligence topic — actually corresponds to secondary channel cross-post):
> (see #fca-data-foundations channel dump — Maribel Pinilla's note on Data360/Palantir PoC and Matthew Doyle/Greg Smith/Amanda Annandale technology options paper)

---

**Parent 1784795863.251609** (Damian Ondore — Home Office/FCA CoPilot, GitHub, Anthropic token management strategy):
> Chris Pannell: I would also find more info and stories on: How Anthropic uses slack; How Claude operates in slack as a multi-player; Claude tag in slack; then the tokenomics side of things. We also have the Salesforce customer zero stuff on this too.

---

**Parent 1785260803.842079** (Josh Adams — "Monday CRM" competitive alert, Krishna/FCA Enterprise Architect meeting on Innovation/Marketing/Events business processes):
> Stephen Donnelly: Thanks Josh! Awesome work Maribel Pinilla! Great opp to influence the thinking as you point out. Please do include me on this!!
> Maribel Pinilla: Stephen Donnelly, Josh Adams, Sylvain Naltchayan — Notes from the meeting with Krishna this morning (FCA Enterprise Architect) and Toby Whitlock (Colin Payne's team) to understand the Innovation, Marketing & Events, Communications Business Processes and needs. What I heard: across multiple teams (~45 people) led by Colin Payne and Emma Krygier, contact/Account/Firm and other stakeholder management is being handled through Excel spreadsheets and SharePoint. They are looking for CRM and Marketing capabilities (they believe INTACT is a "database for regulated firms"). Main focus of these teams are non-regulated firms, although they interact with regulated firms as well. Fragmented and Siloed Data: stakeholder/firm/contact/engagement/event data scattered across spreadsheets and SharePoint, preventing a unified view. INTACT: they think INTACT can't cover unregulated contacts, event management, or marketing — they capture info in case notes for regulated firms. Marketing & Engagement: strong interest in marketing capabilities, newsletters, emails, segmentation, targeted comms, engagement tracking. Monday CRM: exploring other platforms for calendar, email integration, lead management — the Salesforce route wasn't pursued due to costs (unclear if INTACT costs, Marketing Cloud, or other). Opportunity: existing Salesforce investment already covers a significant proportion of requirements (lead mgmt, opportunity mgmt, email integration); another vision exercise opportunity to demonstrate CRM/Tableau and Marketing Cloud relevant components. Next immediate action: meeting with James Symon the next morning (led by Krishna, supported by Stephen/Josh/Sylvain/Maribel) to get his view on FCA's CRM estate and alignment with Colin Payne's/Emma Krygier's teams.
> Sylvain Naltchayan: that was the deck from March this year! [FCA Agentforce Marketing POV 260311b — Google Slides link]

---

**Parent 1785503596.725399** (Simon Collinson — Wednesday Session Debrief, Innovation Day planning, Sri/Jagpal/Johan/Jessica exec reactions):
*(Full debrief: positive exec reception; Jessica's AI focus as friction point; provisional September Innovation Day — 3 partners, half-day, Authorisations/Supervision Hub focus (Sree's remit); SSG three-way call with Cynozure/Sopra Steria planned; London AI Centre offered as venue.)*
> Ed Armishaw: Team catching up after holiday - more than happy to lean in here & help especially around the innovation day, and how agentic can support. Who's got the tiller whilst Josh is on pat leave?

---

**Parent 1787914863.849629** (Simon Collinson — Upcoming sessions, Chennai visit 12-15 Sept, Deloitte POC write-up, AI-native delivery case studies):
*(Paul Tatum session 7 Sept; Salesforce internal org-transformation session 9 Sept (Andy White); AI-native delivery — Finaster/Capeter deployments cut delivery time 60%, 16-month projects to 5 months; Chennai visit — Jagpal/Debbie/Dominic/Josh, DSF transition Cognizant→Mastech, product strategy, case management/RCMS, SSG leadership session; Deloitte-led case management POC complete, write-up in progress; Steve Hall flagged some post-session nervousness — read as healthy delivery scepticism, not Salesforce-specific concern; Leeds Innovation Day planned late Oct/early Nov.)*
> Jon Bland: Thanks Simon. Josh Adams / Tom O'Neill - let's go through this in the FCA STW call early next week and I can provide additional context where required.
> Josh Adams: Thanks Simon Collinson Jon Bland. Thanks Jon, let's catch up Tuesday post BH.

---

**Parent 1788958313.118919** (Joe Deasy — item shared "as discussed just now" with Damian Ondore/Josh Adams):
> Josh Adams: Unreal find this Mr Joe Deasy, bravo 👏!
> Joe Deasy: I did try 🤖 but didn't work for me, bon chance ❤️

---

**Parent 1789135072.193009 / 1789135530.676739** (Simon Collinson — request to share update on "gps UKI" internal group):
> Josh Adams: Yep will do!


### #fca-data-foundations (secondary, C0ANBMS4DNX) — full history, chronological (newest first, as returned by `slack_read_channel`)

*Full history, channel creation 2026-03-24 to most recent message 2026-09-10. No threads present in this channel — all messages are top-level. Returned newest-first by the tool; oldest message (channel creation) is at the bottom of the second block.*

```
Channel: #fca-data-foundations (C0ANBMS4DNX) — page 1 (2026-09-10 back to 2026-07-09)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-09-10 15:10:04 BST ===
Message TS: 1789049404.197729
@Stephane Pajon and I are speaking to her today at 4.30pm for quicksync on DRA
Reactions: +1::skin-tone-2 (1), +1 (2), datafoundation (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-09-10 15:08:49 BST ===
Message TS: 1789049329.663549
I forwarded the email on, did you see it?
Reactions: +1 (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-09-10 15:08:37 BST ===
Message TS: 1789049317.607589
she's up for DRA

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-09-10 15:08:32 BST ===
Message TS: 1789049312.657239
Hi - yes - good response

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-09-10 15:07:58 BST ===
Message TS: 1789049278.908139
Hi @Rachel Colby @Richard Cole @Stephane Pajon,
Did you manage to get hold of each other earlier in the week following Lauren's reply. ?
Let me know next steps and if I can help move things forward.
cc: @Murray Grubb Jnr @Matthew Rochard

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-09-04 08:25:20 BST ===
Message TS: 1788506720.530239
Sounds interesting, espicially the Golden Record piece. That is very much our wheel house.

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-09-03 14:57:13 BST ===
Message TS: 1788443833.986009
Hi @Josh Adams @Matthew Rochard
Just a quick heads-up. I was contacted this morning about a technology options paper that the FCA Strategy & Architecture (Matthew Doyle(EA) - Greg Smith- Amanda Annandale Organisation) is working on.
FCA is looking for enterprise-level Intelligence capability, and is considering Data360 as an option, which is great. (They're currently doing a PoC with Palantier.)
I'm not sure if anyone from this team has been involved or has any additional context on the broader requirements.
From what I heard in the session they are looking for Golden Record and semantic search.
I asked Matthew to share the capability and outcomes they're looking for, so we can support them so they can make a properly informed decision.
The paper will go TDA in Sep and EFDC in Oct.
I'll keep you posted if I hear anything else.
Thread: 8 replies (latest: 2026-09-11 08:44:45 BST)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-08-14 12:20:14 BST ===
Message TS: 1786706414.118579
Here is a google sheet that I have worked on with Gemini etc to break out certain parts into how and why Mule, IDP etc against individual parts [docs.google.com/document/1Q-RSqXX7Cjwbjhy8xvp02wDT8IJ5V2qa0_6ijHJehdU]
Files: FCA Mule capabilities answer sheet (Google Doc, 159.6 KB)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-08-14 12:06:58 BST ===
Message TS: 1786705618.998419
Hi all,
I have built out some slides that address several of these requirements and showcase Mule, IDP, Informatica and Tableau acting in unison to give a suitable technical capability for the FCA. This also plays into some of the future state thinking of Regulator2030 that we went through last month [FCA New Bid. A Connected, Governed, and AI-Ready FCA — Google Slides]
Files: FCA New Bid. A Connected, Governed, and AI-Ready FCA (Google Slides, 198.0 KB)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-08-14 09:46:54 BST ===
Message TS: 1786697214.779619
You know as much as I know. (well, I left out the bit where some requirements weren't included due to security)
Let's have a think about what the requirements are asking for and see what story we think we have. Plus what questions/clarifications we have and we'll then.
(oops, forgot to hit send last night)
Reactions: +1 (1), +1::skin-tone-3 (1)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-08-13 16:48:01 BST ===
Message TS: 1786636081.518549
Thank you for sharing @Jeff Pratt
Do you know how they put these requirements together? Who provided input into these?

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-08-13 16:11:53 BST ===
Message TS: 1786633913.175519
That was my thinking, but also some other related things. I'll catch up with Bruno and see what we come up with

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-08-13 16:09:05 BST ===
Message TS: 1786633745.223699
Hi @Jeff Pratt - from my quick scan, I see immediate potential for IDP Mulesoft, though I'd defer to @Bruno Rhodes Costa, can you take a look pls? there may be others
Reactions: muley (1)

=== Message from Bruno Rhodes Costa <bruno.costa@salesforce.com> (U032U1YE2KG) at 2026-08-13 16:07:32 BST ===
Message TS: 1786633652.272589
@Bruno Rhodes Costa has joined the channel

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-08-13 14:32:51 BST ===
Message TS: 1786627971.745289
@channel
Received a list of requirements from Lauren (via Julius) for AI Assisted Records Management. Their comment when sending was:
"Our working assumption is there appears to be overlap with Informatica capabilities in areas such as classification, metadata management, data discovery, data quality, lineage, etc,,. However, a number of the AI-assisted use cases appear to go beyond core Informatica functionality and would likely require complementary technologies."
When I look, there is nothing short term that IDMC would cover, and even mid term with some enhancements to our new unstructured document scanning, only 1 or 2 lines in this.
But... I think there are (many?) things DF/broader could help with on document processing and agentic processes. Who could have a look and chat with me on this? Once we formulate how much fit there is, we can coordinate initial reply that sets up next steps.
[Copy of Use_Case_Catalogue Informatica copy — Google Sheet]
Reactions: +1 (1)
Files: Copy of Use_Case_Catalogue Informatica copy (Google Sheet, 248.7 KB)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-08-08 07:38:09 BST ===
Message TS: 1786171089.137239
• As noted above Jeff has been doing his pieces of work on WS1 Level Setting. I believe this is all about current state, making sure they are using the platform effectively. I believe over the next month he will be able to advise on future opps as he continues to get under the covers. So let him work his magic.
• WS2 Business Outcomes - @Rachel Colby if not already done can you reach out to Lauren and Andrew Heggs to get a place holder in the diary. If we could go for Sept once everyone is back that would be good.
• WS3 - Data Best Practice - I have sent an email to try and kick this off but had no response. @Steve Holyer you were copied on this (email to Andrew Heggs on 4th August). Can you follow this up?
• WS4 - Stakeholder Dashboards - In the chat in this channel and a thread with Sylvain I see that @Jeff Pratt has referenced this so see it is progressing and as we get further into DQ this will help drive the Tableau set up.
• WS6 - MDM & Talend - @Steve Holyer and @Jeff Pratt Can you follow through on this whilst I am away. Andrew Heggs was getting input from James Symon on the MDM front. Lets just aim for a place holder to discuss. In regards to the Talend piece we just need to get a discussion on what they are doing and position that they already use integration capability with IDMC to try and stop procurement getting hold of this. I believe this is where we will see some growth. I would position with Andrew Heggs that they could purchase more IPU's before 3rd Sept to cover this. This will then be a separate budget from the 1200 but hopefully a further uplift for Q3.
The only other action was that Julius was supposed to be arranging a regular cadence. @Rachel Colby now he is back from holiday would you mind chasing him up for this.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-08-08 07:23:11 BST ===
Message TS: 1786170191.510069
Hello all. I am creating a canvas for all my holiday hand over notes however just a quick few things:
• In regard the Q2 order for 1200 IPU's this is with Agile. Olly Segger is the main contact there. The variation form has been finalised and agreed by both parties and so it is with procurement. Julius has been on leave so Olly will follow up next week. My colleague Erika Carroll will handle the paperwork side at our end. Please note as have seen people showing big numbers. As this is a reduced amount of IPU's this is now $85,184. There wil be scope for more growth but this will take special Deal Strategy and pricing sign off due to the way that flex IPU's are structured. But I can handle this when I am back. However before this deal is signed it is worth @Jeff Pratt re-running numbers based on al the amazing discovery work he has been doing with them over the last 2 weeks.

=== Message from Mark Winters <mark.winters@salesforce.com> (U0AA52N62D9) at 2026-08-05 11:56:32 BST ===
Message TS: 1785927392.598609
@Mark Winters has joined the channel

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-29 09:40:34 BST ===
Message TS: 1785314434.066779
FYI - the deep dive into what FCA has built/done is happening Friday morning. It will be me and Shivam, the CSA for FCA. I'll then work on documenting all the aspects and a draft roadmap to moving them forward
Thread: 2 replies (latest: 2026-08-05 12:13:42 BST)
Reactions: +1 (1), +1::skin-tone-3 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-29 09:35:54 BST ===
Message TS: 1785314154.617639
Thanks for the heads up, Matthew.
They will be interested in the conversations that we are already having, including:
• How can FCA best exploit our relationship with Informatica to ensure we have the right data foundations to unlock automation/AI to the benefit of achieving the FCA strategy, faster.
• They will likely be interested to know about the work to create a joint FCA/Informatica roadmap to further utilise new functionality Informatica is releasing. They may ask your views on whether there is functionality we are not yet utilising that would accelerate the FCA strategy.
• There will be interest from Jagpal and Johan on how we can leverage Informatica in SalesForce to support Master Data Management and business process discovery. Does the Informatica suite have the capability to automatically scan SF (or other repositories) to capture business processes? Johan is particularly focused on this as he has taken over as the Business System Owner for INTACT and asked me this question yesterday
• Jessica is particularly focused on topics such as resilience – operational and cyber and our strategy for agentic AI
Let me know if you want more detail or a chat before the session.
Thread: 1 replies (latest: 2026-07-29 12:58:02 BST)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-29 09:35:50 BST ===
Message TS: 1785314150.954829
From Lauren

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-28 13:06:22 BST ===
Message TS: 1785240382.784709
Ok thats cool. Its worth checking in with Lauren to let her know that meeting is happening. She will want to make sure we are positioning correctly. Can you let me know who you are meeting?
Thread: 3 replies (latest: 2026-07-28 14:22:32 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-27 21:31:15 BST ===
Message TS: 1785184275.893759
Hi all, apologies I couldn't make the call earlier today re: Data Foundations at the FCA. Hope it went well. @Matthew Rochard let's chat through any support you need from me or the wider account team on next steps. We have a meeting with key members from FCA ExCo on Wednesday so I will reference the fact we are doing some good work in this space with Lauren's team

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-27 17:01:36 BST ===
Message TS: 1785168096.610959
Regarding unstructured, I think we need to see what Andrew's use case is - it might be that it's bulk categorisation/classification of unstructured content to align with what we do in Catalogue on Structured. And have that all in one place. There is some of that today in CDGC and more on the way.

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-27 17:01:24 BST ===
Message TS: 1785168084.013299
This is the link to the Webinar video

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-27 17:01:04 BST ===
Message TS: 1785168064.001329
[youtube.com/watch?v=4hgd7flnXn8]

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-27 17:00:41 BST ===
Message TS: 1785168041.723089
does anyone want to make any changes to the deck before I PDF it and sent across?

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-27 16:59:59 BST ===
Message TS: 1785167999.497659
Very good session

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-27 16:59:13 BST ===
Message TS: 1785167953.185769
Hi @here how do we feel that went?

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-27 16:32:39 BST ===
Message TS: 1785166359.845629
The roadmap review?

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-27 16:24:59 BST ===
Message TS: 1785165899.846879
@Jeff Pratt Please Involve Mark in this review .. the CSMs I know won't get all of it, but need to be linked in

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-27 16:12:12 BST ===
Message TS: 1785165132.295809
@Rachel Colby

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-27 16:12:07 BST ===
Message TS: 1785165127.544609
Microsoft Teams meeting — Join: [teams.microsoft.com/meet/373196964644289]

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-27 15:49:42 BST ===
Message TS: 1785163782.510999
@Josh Adams are you happy with flow?

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-27 15:45:41 BST ===
Message TS: 1785163541.940259
let me know if anything missing? happy with owners of the workstreams?

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-27 15:45:26 BST ===
Message TS: 1785163526.100059
@here for the call at 4pm - I've pulled together simple slides to guide the conversation here: [Google Slides link]

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-22 12:58:38 BST ===
Message TS: 1784721518.308969
ok

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-22 12:48:26 BST ===
Message TS: 1784720906.802479
Andrew Heggs and Lauren declined, so I am trying to re-org with their EA's

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-22 12:43:31 BST ===
Message TS: 1784720611.366509
@here what happened to our call at 5pm today with FCA, disappeared?

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-21 14:38:38 BST ===
Message TS: 1784641118.450909
Andrew.Heggs@fca.org.uk
Reactions: heart (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-21 14:14:06 BST ===
Message TS: 1784639646.223529
anyone have Andrew Heggs email ? please

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-17 07:25:12 BST ===
Message TS: 1784269512.393479
Ok, I have gone back to FCA on additional IPU's now. Some basic facts they need to be aware of:
1. Contract Term & Expansion Rules
• Contract Term: 3rd September 2025 to 2nd September 2028 (3-year term).
• Additional Flex IPUs can only be added on or backdated to the contract anniversary date (3rd September).
• The next upcoming anniversary is 3rd September 2026. Any IPUs added at this time will align with the September 3rd billing cycle.
2. Commercials & Pricing (Transacted via Agile Solutions)
• Sales Discount: 34.03%
• Price Hold: None. There is no active price hold on this contract.
So there idea of drip feeding does not work, as they need to agree what they will need ready for the anniversary of the contract. I have also told them that as there is no price hold I have managed to secure same rate of discount for Q3 as it spans the anniversary, So hopefully they will engage on a wider scope now.
Thread: 1 replies (latest: 2026-07-17 08:37:16 BST)
Reactions: +1 (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-15 16:15:35 BST ===
Message TS: 1784128535.056309
FYI - good to see Lauren still engaging and mentioning deep-dives @Matthew Rochard @Rachel Colby @Murray Grubb Jnr - exciting times ahead I hope!
Reactions: celebrate (1), +1 (1)
Files: image.png (56.3 KB)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-14 17:37:13 BST ===
Message TS: 1784047033.928689
@Stephane Pajon there is definite interest in the DRA by the way, we need to educate them on what it is, inputs needed and outcomes, can we work on a briefing doc or similar to share with them pls?
Thread: 2 replies (latest: 2026-07-14 17:58:13 BST)
Reactions: eyes (1), yes (1), raised_hands::skin-tone-2 (1), raised_hands (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-14 17:34:03 BST ===
Message TS: 1784046843.357999
@here Just a quick note to say, well done to all for a fabulous job today! :clapping_all: @Jeff Pratt @Steve Holyer @Corrado de Candia @Matthew Rochard I think you were a mighty combination, the content and approach was spot on! You did a brilliant job of getting deep into the DQ/DG/INFA specific interests of the audience (per their request), whilst also introducing the wider Data Foundations suite. I spoke to the FCA lot during lunch, feedback was resoundingly positive. Most importantly, Lauren is really keen to partner with us on DF, and sponsor more engagements going forward (our no.1 objective). And we've materially moved forward our near-term Q3 INFA deal. And brilliant work @Matthew Rochard as I saw you've already got the invite out for our follow up next week! What more can we ask for? I know a lot of work went into preparing today's content - many thanks, you nailed it!
Thread: 1 replies (latest: 2026-07-15 08:12:00 BST)
Reactions: awesome-spin (3), raised_hands (1), superman-batman (1), clap-blob (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-14 14:56:03 BST ===
Message TS: 1784037363.436749
@here notes and transcript from this morning here. Thank for all of your efforts and work for today's session, I think it went very well:
[Google Doc link — 14 09:36 BST Notes by Gemini]
Reactions: clapping_all (2)
Files: 14 09:36 BST - Notes by Gemini (Google Doc, 225.1 KB)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-14 14:51:38 BST ===
Message TS: 1784037098.965929
Hi Alex
Sorry, am on train, heading back north.
Will try to catch you tomorrow morning
Reactions: +1 (1)

=== Message from Alex Clift <aclift@salesforce.com> (U9S8XVADU) at 2026-07-14 14:12:53 BST ===
Message TS: 1784034773.853939
Hi @Jeff Pratt I'm hearing about one of the outcomes from the FCA session - interest in a 'Data Quality Monitoring Dashboard' - I'm here in the Tower today, do you have a few mins to discuss before the end of the day?
FYI @Rachel Colby @Matthew Rochard

=== Message from Jenny James <jenniferjames@salesforce.com> (U0AACU3GTNY) at 2026-07-14 13:31:03 BST ===
Message TS: 1784032263.840819
Hope its all going well

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-14 08:38:12 BST ===
Message TS: 1784014692.789259
There's going to be a lot of us in the room, who's leading, @Steve Holyer?

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-14 08:34:38 BST ===
Message TS: 1784014478.771969
Let's do this Team! Remember that we want this to be the start of on going engagement to influence and position our full stack DF capabilities, FCA is a DF big bet for larger, strategic partnership to match Core and enable their AI roadmap
Reactions: +1 (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-14 08:23:52 BST ===
Message TS: 1784013832.611329
I was going to head up to the SIC around 0845, currently on 32
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-14 08:06:13 BST ===
Message TS: 1784012773.247469
@channel looking forward to today. To confirm we are hosting the first set of FCA folk from 0930 on floor 37 (SIC floor) for a 10am prompt start.
We have a back up room all day in 27-01 which we may use for the afternoon session where the FCA folk are hosting an offsite in our offices. TBC as to whether we will use floor 27 or 37 for the afternoon
Reactions: +1 (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-14 07:47:29 BST ===
Message TS: 1784011649.847489
@here what time are we starting this morning?

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-13 12:54:19 BST ===
Message TS: 1783943659.027159
If we get to it, I can do the 3 minutes we'll have available to start the D360/MDM discussion
Reactions: white_check_mark (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-13 12:51:54 BST ===
Message TS: 1783943514.740739
@Jenny James I don't know what Matt had planned for you... we will be positioning MDM In the wider context, but we have short windows for all the items.. I only have 15 mins... imagine that

=== Message from Jenny James <jenniferjames@salesforce.com> (U0AACU3GTNY) at 2026-07-13 11:04:05 BST ===
Message TS: 1783937045.565009
@Matthew Rochard @Steve Holyer I need to be in another meeting 12-2. I can't find an agenda with times for this meeting so let me know when/if you need me

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-13 10:39:21 BST ===
Message TS: 1783935561.138779
Good morning team, @Corrado de Candia is going to cover for me tomorrow on the Data Foundation / MuleSoft/DRA side. Could he please be added to the SIC list? Thank you

=== Message from Corrado de Candia <cdecandia@salesforce.com> (U03N5FZKA4V) at 2026-07-13 10:35:22 BST ===
Message TS: 1783935322.958429
@Corrado de Candia has joined the channel

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-13 10:05:44 BST ===
Message TS: 1783933544.221989
[FCA_150726_Informatica Advantage Data Foundations — Google Slides link]

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-13 10:05:29 BST ===
Message TS: 1783933529.882289
Murry / Josh - Can you update titles on the intro slide ... pretty please

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-13 09:55:36 BST ===
Message TS: 1783932936.571189
Steve, Jeff and I probs need to be there throughout. I think we need to be careful about people coming and going as there is a lot to get through in a shortened time. We need to keep disruption to a minimum. Let me finalise timings.
Reactions: +1 (1)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-10 15:37:12 BST ===
Message TS: 1783694232.556229
I'm definitely there

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-10 14:33:00 BST ===
Message TS: 1783690380.580279
and who drops in

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-10 14:32:57 BST ===
Message TS: 1783690377.941079
Agreed ! will wait for @Matthew Rochard confirmed agenda then we can determine who is there

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 14:05:48 BST ===
Message TS: 1783688748.405409
I suggest we drop in and out as required and have a core element... depending on space
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-10 14:01:31 BST ===
Message TS: 1783688491.855149
Stefan and I from mule side. Rachel will also be available
Reactions: +1 (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 14:00:35 BST ===
Message TS: 1783688435.822759
Informatica Roadmap and its planned for 1030.. we can't shift it as its the only time I could get PM

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 14:00:10 BST ===
Message TS: 1783688410.896089
I have the roadmap slides now.. I wil add..

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-10 13:38:51 BST ===
Message TS: 1783687131.680259
@Murray Grubb Jnr @Matthew Rochard - can I also confirm our internal attendees for the session? Need to confirm with SIC team. We are a bit space limited given there have so many attendees, so let's be quite strict on who absolutely needs to be there
Thread: 4 replies (latest: 2026-07-13 16:32:54 BST)
Reactions: this1 (2)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-10 12:33:55 BST ===
Message TS: 1783683235.991339
the product roadmap

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-10 12:32:09 BST ===
Message TS: 1783683129.708419
Yes roadmap is at around 10:30 correct? Do you mean product roadmap of FCA's roadmap, sorry?

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-10 12:27:17 BST ===
Message TS: 1783682837.710539
we need to fit roadmap into that, though probably is what will cover part of how they get more out of what they have

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-10 12:26:21 BST ===
Message TS: 1783682781.748509
Thank you for confirming all this. So what does the final agenda look like for the session? Is it what Matthew put here:
• Voice of the Customer - FCA Challenges, Priorities and Roadmap - Facilitated by Stephane
• The Agentic Enterprise and the Data Foundations that supports it including case study - Led by Steve and Jeff, supported by Stephane where required
• Current use cases. FCA's Original ask - "how do we get more out of what we are currently invested in and ensure we are getting best value?" -Led by Jeff on Infa side. Stephane for Tab? Josh for SF?
• Agreement on Short-Mid-Long Term Actions & Priorities - General discussion but led by Jeff and Stephane
• Next Steps and Cadence - All
If so, who is updating the master deck? Is this the master: [Google Slides link — FCA Data Foundations 14th July 2026]
Thread: 1 replies (latest: 2026-07-10 18:54:15 BST)
Files: FCA Data Foundations 14th July 2026 (Google Slides)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 11:45:00 BST ===
Message TS: 1783680300.056339
it looks like Julius is in the morning Jeff, but not the afternoon...

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-10 11:23:14 BST ===
Message TS: 1783678994.285779
Yes. We need to do that. My gut is 1200 is an underestimate. I also want to test if they want to look at an MDM use case as a proof of concept.
Reactions: +1 (1)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-10 11:01:44 BST ===
Message TS: 1783677704.434239
I'll be there until end of day, so if Julius is free to stay on, then we can talk then with him.

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:59:29 BST ===
Message TS: 1783677569.154159
@Matthew Rochard Jeff you and I need to sit with Julius, I am not sure the morning session is the right time or place to go through IPUs... maybe we can get him to stay a bit longer ? I am happy to reach out to him, but let me know how you want to handle it

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:58:28 BST ===
Message TS: 1783677508.408009
sounds like plan

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-10 10:45:58 BST ===
Message TS: 1783676758.682539
Ok let me try and move the SIC slot slightly earlier - it is currently 10.00-16.00, will see if we can start at 09.30 so we can do 09.30-12.30 with the morning squad

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:40:50 BST ===
Message TS: 1783676450.725029
so first set are morning, 2nd set are afternoon...
Reactions: +1 (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:40:38 BST ===
Message TS: 1783676438.519659
OK - think its this
Files: image.png (166.9 KB)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:33:28 BST ===
Message TS: 1783676008.604049
Hi Murry - Thats ok .. but which is which ? We need time with Julius... is the who is in which session in a deck or channel somewhere ?

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-10 10:27:54 BST ===
Message TS: 1783675674.579539
Hi Murray
The afternoon people are only joining for the afternoon session and not the morning.
The morning people are only coming for the morning unless they are part of the FCA away day on the list in the afternoon as well as the morning, , if not they will leave when the afternoon session starts.
If not clear, give me a call today.
Thanks
Lauren

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-10 10:27:40 BST ===
Message TS: 1783675660.189269
She has confirmed though that the rest are only in for the morning.

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-10 10:26:21 BST ===
Message TS: 1783675581.108899
Good morning all, @Josh Adams and I contacted Lauren and Julius yesterday to confirm if we have them for only the morning or the whole day just without the people in the separate afternoon meeting they are having at the tower. Lauren has just confirmed the afternoon people are only in for their session
Thread: 5 replies (latest: 2026-07-10 13:30:01 BST)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-10 10:18:26 BST ===
Message TS: 1783675106.294559
@Murray Grubb Jnr is there an invite for the FCA team, what are the times?

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-07-10 10:08:44 BST ===
Message TS: 1783674524.630829
Hi All - I built a deck as a starter for Infa Team to use.. but just want to check .. do we have a master ? ....

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-10 10:03:55 BST ===
Message TS: 1783674235.721359
Any updates on the times for the meeting please. I am off today but will join the run through later.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-09 17:21:11 BST ===
Message TS: 1783614071.844579
@Jeff Pratt @Steve Holyer @Stephane Pajon In case you have not seen these slides *MuleSoft + Informatica First-Call Deck | [Link]* Refined joint narrative for your MuleSoft + Informatica conversations, aligned to our latest combined positioning.
Reactions: +1::skin-tone-2 (1), thankyou_ (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-09 17:17:11 BST ===
Message TS: 1783613831.848189
Let me know if you think its the right order. Its set up to give us some context up front, then show them what they could achieve, what they need to do to go from where they are now and then get commitments for immediate and future business. Then agree an overall cadence to keep everything on track.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-09 17:15:25 BST ===
Message TS: 1783613725.396939
Hi, so I have kept the agenda basic so it gives us the flex within the sessions should we need to pivot on any points. I can not do the timings until its clarified how long we have. @Josh Adams can you cover any SF use cases on point 3
• Voice of the Customer - FCA Challenges, Priorities and Roadmap - Facilitated by Stephane
• The Agentic Enterprise and the Data Foundations that supports it including case study - Led by Steve and Jeff, supported by Stephane where required
• Current use cases. FCA's Original ask - "how do we get more out of what we are currently invested in and ensure we are getting best value?" -Led by Jeff on Infa side. Stephane for Tab? Josh for SF?
• Agreement on Short-Mid-Long Term Actions & Priorities - General discussion but led by Jeff and Stephane
• Next Steps and Cadence - All
From an Informatica viewpoint we need to have a section on Roadmap. We will have someone from Product Management who is permitted to take them through this. This demonstrates how FCA investment can evolve. This will have to be slotted in once we are aware of timings.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 14:59:44 BST ===
Message TS: 1783605584.830269
@channel - Ok - had a good internal alignment call - two main updates:
• @Murray Grubb Jnr @Josh Adams confirm with Lauren about how long her team are planning to stay and whether or not they are using our offices for an internal meeting in the afternoon
• @Matthew Rochard coordinate and confirm the agenda & content for session, incl. speakers/attendees from our side
    ◦ Matt - once agenda confirmed please can you share with me/Murray and we can reply back to the thread we have from Lauren
I will sort out guest registration and catering for the first session.
Reactions: thankyou_ (1)

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-07-09 13:32:49 BST ===
Message TS: 1783600369.840699
and have we confirmed who from our side must be there?

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 13:31:30 BST ===
Message TS: 1783600290.948269
attendee list from Lauren here. The main attendees are all in her team, Data Product Owners, Data Stewards, Data Governance Managers. I have asked @Murray Grubb Jnr to clarify the second set of names as I am not clear what they are referring to for this meeting
Files: image.png (178.8 KB)

=== Message from Alex Clift <aclift@salesforce.com> (U9S8XVADU) at 2026-07-09 13:30:41 BST ===
Message TS: 1783600241.656819
Quick update and a small alteration after SEs aligned on this today. Instead of @Dipesh Bhoola it will be @Stephane Pajon who prepares content ready to describe and set expectations for the DRA process.

=== Message from Alex Clift <aclift@salesforce.com> (U9S8XVADU) at 2026-07-09 13:23:20 BST ===
Message TS: 1783599800.698649
@Alex Clift has joined the channel

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-09 12:28:45 BST ===
Message TS: 1783596525.422769
Could you please share the list @Josh Adams, along with what their role is? When you can. I am keen to understand who will be there and what they want out of the session on Tuesday. I am also keen to explain and position what a DRA is, but I need the right people there to get that commitment from them. A DRA is not something we do to them, we do it with them, and we need them to commit time to it. I was thinking about explaining what a DRA is and the kind of commitment if there is time to do that.
Thread: 7 replies (latest: 2026-07-09 13:31:30 BST)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 12:21:06 BST ===
Message TS: 1783596066.683709
Not sure what is happening with that second list of people or when that is for... do you know?

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 12:20:10 BST ===
Message TS: 1783596010.375849
I will get them registered with reception and SIC floor
Reactions: raised_hands (1)

```

```
Channel: #fca-data-foundations (C0ANBMS4DNX)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 12:20:01 BST === 
Message TS: 1783596001.038399
As if by magic... 4 mins ago Lauren just replied with attendees... !

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 12:18:37 BST === 
Message TS: 1783595917.123759
Once in agreement I am keen that we get tge agenda sent across to the customer to get them aligned (and excited!) and set expectations for the session.

<@U061STVMSK0|Murray Grubb Jnr> anything back from Lauren et al.? If not can you call her/her EA/Julius etc. and get the attendee names absolutely confirmed.  We need the exact names to get people registered with reception, and also need to share a note about logistics on the day, room names.

If <@U01VCLKP8QN|Matthew Rochard> is taking lead on agenda that is fine, but let's work to get the comms out ASAP so we can prepare a good session for them

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-09 12:16:51 BST === 
Message TS: 1783595811.135359
Can we make sure we use SF/DF logos on the slide ware pls

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-09 12:16:15 BST === 
Message TS: 1783595775.286589
<@U01VCLKP8QN|Matthew Rochard> sounds good, I am happy with that, and also agree with <@UNLA7KSDA|Rachel Colby> about seeding in broader DF ecosytem... but sounds like we are covered on that anyway given how you're going to approach this

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-09 10:14:39 BST === 
Message TS: 1783588479.297499
<@U01VCLKP8QN|Matthew Rochard> this makes sense given the attendees and conversation we had on Monday with Lauren, Julius et al - BUT I definitely want to make sure this positions first the overall Data Foundations ecosystem, a critical suite of capabilities that should be used in combination to enable FCA's AI/modernisation agendas. That's the reason for INFA coming into SF ecosystem - SF is now a data and AI company, not CRM only. <@U0AASNXHWN5|Steve Holyer> <@U0ADPCTAQ59|Jeff Pratt> are you ok with that? as a first session, we have to land the combined data toolkit message for larger, medium term opportunity
Thread: 1 replies (latest: 2026-07-09 10:17:29 BST)
Reactions: +1 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-09 10:05:38 BST === 
Message TS: 1783587938.302459
In addition I know Steve and Jeff are working on slides related to the above.
Thread: 4 replies (latest: 2026-07-09 10:09:19 BST)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-09 10:00:21 BST === 
Message TS: 1783587621.076609
Hi all,  Following some calls Jeff, Steve and I have had with FCA this week we need to ensure some critical points are in the agenda.  It looks like the majority of people attending from the FCA side are people currently involved in the Informatica projects.  They have also now shared their roadmap of where they are looking for the rest of the year.  This is what will drive immediate new business for us and expand us into new projects within FCA.  So our recommended approach would be:

• Voice of the Customer.  Let them explain their challenges, what they are looking for and how it relates to wider mission of FCA
• Then Steve H, Jeff and Stephane to cover Why Informatica & Salesforce?  How we are creating the new Agentic Enterprise Landscape.  Go through that Agentic Enterprise Architecture.  We can then link MDM into D360 etc
• Then from this we talk about what they are using from SF and Infa currently so we can discuss and let them see how this knits together.  Note this was the original ask - "how do we get more out of what we are currently invested in and ensure we are getting best value?"
• From an Informatica viewpoint we need to have a section on Roadmap.  We will have someone from Product Management who is permitted to take them through this.  This demonstrates how their investment they have made can evolve.
At the end we will need a separate session with Julius etc to go through their current consumption and what they will need to meet their next 12 month challenges.  Jeff has done work on this.  See below you will see a lot in yellow which is only just starting and a load in white which is new.

Sorry this is a ll a bit rough and ready but we believe the points above are critical parts in order to drive towards opportunity based outcomes.
Reactions: thankyou_ (2)
Files: image.png (ID: F0BH149RDME, image/png, 95.9 KB)

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-08 16:57:30 BST === 
Message TS: 1783526250.098739
I have put two meeting in the diary, one tomorrow afternoon at 13:30 and one on Friday afternoon at 14:30 to synch up. Cheers.

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-08 16:39:42 BST === 
Message TS: 1783525182.631819
Can we grab time tomorrow and Friday then <@U0ADPCTAQ59|Jeff Pratt> 

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-08 16:25:44 BST === 
Message TS: 1783524344.275579
I'll be traveling Monday afternoon

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-07-08 15:49:08 BST === 
Message TS: 1783522148.218419
Hello team. <@U061STVMSK0|Murray Grubb Jnr> has just gone over the slide deck <https://docs.google.com/presentation/d/1h2MVLMAP5zr9pUY4TwXdiPPwrCMDN3-yIgiYrAcY8lQ/edit?slide=id.g3ce4ac4ef83_3_0#slide=id.g3ce4ac4ef83_3_0|docs.google.com/presentation/d/1h2MVLMAP5zr…/edit?slide=id.g3ce4ac4ef83_3_0#slide=id.g3ce4ac4ef83_3_0> that he created ahead of next Tuesday's session with the FCA. <@U0ADPCTAQ59|Jeff Pratt> and <@U0AASNXHWN5|Steve Holyer>, do you also have a brief rfom Matthew about what your involvement is going to be during the day? Mine is to relate the technical capabilities that we have across Data Foundation (at a high level) to the aspirational icture that Murray is going to paint. I don't know if Matthew had any specific asks from either a DF of INFA perspective. Should we have a couple of Dry Run / Alignment sessions between now and Tuesday? Maybe one on Friday afternoon and one on Monday afternoon if at all possible? P.S. I will also attach the transcript of the conversation when it is ready.
<https://docs.google.com/document/d/1ahfjB1T673t_jZM9_YD53P4sWjorhpS3GOMaKeQZScU/edit?tab=t.bvxdzs3v3io5#heading=h.w3n01423bvoo|FCA 14/07 – 2026/07/08 15:00 BST – Notes by Gemini>
Reactions: muley (1)
Files: FCA Data Foundations 14th July 2026 (ID: F0BE344GLBX, application/vnd.google-apps.presentation, 0 Bytes), 08 15:00 BST – Notes by Gemini (ID: F0BFJ1GHRUP, application/vnd.google-apps.document, 215.8 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-08 09:51:19 BST === 
Message TS: 1783500679.589279
Thanks <@U061STVMSK0|Murray Grubb Jnr>
Reactions: muley (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-07 17:50:28 BST === 
Message TS: 1783443028.371359
Email chaser sent to Lauren, I will update as soon as I hear back.
Reactions: +1 (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-07 17:08:45 BST === 
Message TS: 1783440525.149529
<@U061STVMSK0|Murray Grubb Jnr> can you confirm this ASAP pls - we need to get this nailed down, content agreed and a dry run before next week.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-07 11:46:37 BST === 
Message TS: 1783421197.937779
<@U061STVMSK0|Murray Grubb Jnr> can you follow up with Lauren, Andrew, Julius on getting the confirmed attendee list for next week please? Then we can go back and reply with the agenda and logistics for the day.

Let us know when you have the re-cut agenda ready based on yesterday's conversation.

cc: <@UNLA7KSDA|Rachel Colby> <@U0AASNXHWN5|Steve Holyer> <@U01VCLKP8QN|Matthew Rochard> <@U0ADPCTAQ59|Jeff Pratt>

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-06 17:55:53 BST === 
Message TS: 1783356953.126889
All, notes attached <https://docs.google.com/document/d/1hj3-vtP6IFdRzO2eMVgHY0WDdFqZy8_DvBRLDPHqEis/edit?tab=t.ipzyg4lxq041#heading=h.cp1gnjpruvbu|docs.google.com/document/d/1hj3-vtP6IFd…/edit?tab=t.ipzyg4lxq041#heading=h.cp1gnjpruvbu>
Files: 06 15:30 BST - Notes by Gemini (ID: F0BF9L5LQH1, application/vnd.google-apps.document, 227.1 KB)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-06 12:52:45 BST === 
Message TS: 1783338765.402989
Sorry if I am being a bit basic but I want to close business this year.  See you at 3.30.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-06 12:51:54 BST === 
Message TS: 1783338714.013859
Part of me says we need to go back to basics and show them the entire DF and SF pitch (appreciate its only 4 months old).  This secures our position and then we focus on how we grow and enhance this with them to 1. Meet next 12 month demands  2. Displace Competitors 3. Grow them into new areas e.g. MDM and Agents 4. Ultimately how this ties into business objectives.
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-06 12:50:54 BST === 
Message TS: 1783338654.124599
On the informatica stuff for the timeline I agree i just didnt know what that is

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-06 12:50:14 BST === 
Message TS: 1783338614.875059
We have a call at 330 today and this is exactly the sort of thing I want to go through and we can also give you the insight from this mornings call which gave a greater understanding
Reactions: +1 (1)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-06 12:49:38 BST === 
Message TS: 1783338578.030209
Slide 4 needs to also include the Informatica Existing use cases. So we should get clarity on what those are.

Slide 5 Needs Informatica engagements in the timeline

Slide 17 has Mulesoft as part of Digital Backbone of FCA 2.0, but none of our Informatica foundational value add

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-07-06 12:48:59 BST === 
Message TS: 1783338539.261529
Hi <@U061STVMSK0|Murray Grubb Jnr> - I have been through your deck and discussed with some of the people from our side. There is some great stuff in this and it is probably right in terms of ambition for FCA.  However I think there is a balance; their original ask from the first call was how do they take advantage of what they have now, get the max value out of it and use this as a foundation to meet their desired outcomes. I am not sure we know what their desired outcomes are yet.  On some of the slides:

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-07-06 10:23:56 BST === 
Message TS: 1783329836.175039
:+1:

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-06 10:22:47 BST === 
Message TS: 1783329767.857929
<!channel> - notes from very positive call with Lauren Dixon (CDO), Julius B and Andrew H, prepping for SIC next week:

<@U061STVMSK0|Murray Grubb Jnr> is owning and driving this session so will be reaching out with confirmed agenda, assigning content ownership and checking progress. <@UNLA7KSDA|Rachel Colby> and I will be supporting too. Shaping up to be a great, productive session so we will need a big push this week to be ready.

Notes - planning call:

• Likely moving away from existing platform (Cloudera) as part of a major strategic shift
• FCA data estate spans markets regulatory data, customer data, and third-party/purchased data
    ◦ Legacy data not designed for machine standardisation or validation at source
    ◦ New data continuously ingested via third-party sharing agreements and purchased datasets
• Growing demand for self-serve, plain-language querying across the full estate, regardless of team or sector lens
• Key organisational goal: break down supervision silos so all teams see the same data on a given firm
    ◦ Currently different teams hold different views depending on their sector lens
    ◦ Transparency and consistency of data view is a core ambition
• FCA’s unique position: holds both individual firm-level and aggregate market-wide data
    ◦ Creates both significant opportunity and heightened governance responsibility
    ◦ CEO is pushing to go bold on AI exploitation of this data
• Four strategic pillars driving prioritisation: financial crime, competitive markets/growth, smarter regulation, and consumer outcomes
    ◦ Everything should map back to one of these four pillars
    ◦ Financial crime is the most prominent: early intervention, real-time event triggers, prevention before the crime occurs
    ◦ “Regulation at the speed of the market” is the framing concept
*Session Goals and Priorities (14th July)*
• Two key themes from Julius and Andrew:
    ◦ *Exploitation*: metadata scanning, data lineage, DQ profiling, critical data element identification
    ◦ *Visibility*: making the catalog the go-to place and demonstrating a handle on the full data estate
        ▪︎ Andrew’s recovered point: Visibility = Data Marketplace, and how FCA can exploit this as fully as possible
        ▪︎ Goal is for the catalog to be the single, trusted front door to the data estate
• Preferred approach: go wide and shallow first
    ◦ Scan everything and run high-level DQ profiling across the estate
    ◦ Use that baseline to decide where to go deeper, guided by critical data element identification
    ◦ Avoid going deep on everything; prioritisation is key
• AI: exploring CLAIRE and other variants; want to understand where AI plays a bigger role going forward
    ◦ Currently in early experimentation; keen to understand the roadmap and best practice
• MDM roadmap: Lauren keen to understand Salesforce’s direction and intentions around MDM
• Automation by default: Julius emphasised making lineage and scanning as automated as possible
    ◦ Moving away from manual, resource-intensive approaches that cannot scale
    ◦ Efficiency gains are a core part of the value case to the board
• Lauren’s board-level asks:
    ◦ Demonstrate ROI on tooling investment already made
    ◦ Provide ongoing assurance that FCA knows what is in its data estate
    ◦ Understand what best-in-class looks like for organizations at FCA’s scale and context
    ◦ 
• Salesforce framing: holistic ecosystem view, not product-by-product selling
    ◦ What would an ecosystem enable the FCA to do differently?
    ◦ What would the market expect the FCA to do differently?
• Attendees: mix of Andrew’s team, Julius’s team, and the data lake team; Lauren to send full list
    ◦ Two rooms booked; deep technical and data focus confirmed
    ◦ Whether to include business-side data owners and stewards still to be decided offline
    ◦ Many in the data team have worked as analysts within the FCA business, so both sides of the lifecycle are represented
*Engagement Model and Next Steps*
• This session is foundations-setting, not a one-off annual event
    ◦ Explicitly not a “one session and done” model; ongoing investment from Salesforce confirmed
    ◦ Rachel (RVP, Data Foundations) present to reinforce Salesforce’s commitment to the partnership
• Goal: agree a 6-month engagement plan by end of the day
    ◦ May include specific workshops, business owner involvement, steward network engagement, and targeted deep-dives
• FCA is ahead of many customers: already using tooling with a reasonably mature operating model
    ◦ Many organizations haven’t even taken the first step toward Informatica; FCA has an operating model to build from
    ◦ Should enable a well-structured, fast-follow series of sessions and activities
• Potential talking points/sections for the session - <@U061STVMSK0|Murray Grubb Jnr> let's see how these can potentially fit into existing agenda or if we need to adapt slightly
    a. Introductions and summary of Salesforce/FCA relationship to date
    b. Level-set on existing capabilities and how they should be used
    c. How to drive maximum value and automation by default - laying the foundations to be AI-ready and scalable
    d. Examples from public sector, financial services, and wider enterprise
    e. Sense-check of FCA’s tooling roadmap (Andrew and Julius; ~30-minute slot)
    f. Agree the 6-month engagement plan and next steps - what does good look like in 6 months time? What should we have achieved?
• Andrew and Julius may ask Salesforce to sense-check their tooling roadmap during the session
    ◦ Some sequencing changes may be recommended; certain items may be brought forward
    ◦ FCA to share indicative roadmap draft before the 14th so Salesforce can review in advance
*Action Items:*
• *Send attendee list to Salesforce (Lauren)* 
    ◦ Mix of Andrew's, Julius's, and data lake teams; confirm numbers ahead of the 14th July session.
• *Share draft tooling roadmap before the session (Julius, Andrew)* 
    ◦ Allows Salesforce to review ahead of the sense-check slot rather than going in cold.
• *Send outline agenda to Lauren for red-lining (Murray)* 
    ◦ Include housekeeping, logistics, confirmed timings, and arrival details for the 14th July.
• *Decide whether to include business-side data owners or stewards in the session* 
    ◦ FCA to consider offline whether their involvement would add value at the level of conversation planned.

Reactions: thankyou_ (2), datafoundation2 (2), muley (1), balloons (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-03 16:22:25 BST === 
Message TS: 1783092145.169979
All, please have a look at the slide deck. I have updated my viewpoints, I have gone through it with <@W011GHC2ZPX|Richard Cole> and <@U01VCLKP8QN|Matthew Rochard> so far. I want everyone to put their slides into this deck and add in any of the bits they want to add in from a showcase perspective. Remember this is our time to shine!

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-03 14:11:48 BST === 
Message TS: 1783084308.484629
apologies if missed it
Thread: 1 replies (latest: 2026-07-04 09:09:29 BST)

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-07-03 14:11:42 BST === 
Message TS: 1783084302.051059
where are we on audience details?

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-03 14:05:48 BST === 
Message TS: 1783083948.870489
This is great news. We still need to book another room for their 2 people that need to excuse themselves for a call in the afternoon.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-07-03 13:59:29 BST === 
Message TS: 1783083569.126399
Good news <@U061STVMSK0|Murray Grubb Jnr> - we now have SIC floor 37 confirmed, room Uluru, 10am-16.00pm on the day
Reactions: ok_hand::skin-tone-3 (1)
Forwarded message from David Obute (https://salesforce-internal.slack.com/archives/C06KN6ZB1TP/p1783082191613979?thread_ts=1783080180.442639&cid=C06KN6ZB1TP) — use slack_read_thread or slack_read_channel to read the original message

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-03 09:24:28 BST === 
Message TS: 1783067068.145289
Morning <@U01H981JRDX|Rima Mukherjee> The plan is absolutely to showcase an over arching vision of what the Salesforce ecosystem collectively could offer for a regulator of the future approach
Reactions: +1 (1)

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-07-03 09:23:26 BST === 
Message TS: 1783067006.446489
Hi <@U061STVMSK0|Murray Grubb Jnr> <@U038JMVKGBB|Josh Adams> , as we are planning to keep it DRA focused, it will be good to also share what the final art of the possible might look like and how they can drive more value. 

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-07-02 17:47:42 BST === 
Message TS: 1783010862.592259
All, how are you getting on with your parts of the presentation for the upcoming event? <@U038JMVKGBB|Josh Adams> and I caught up earlier and were prepping for Mondays call with Lauren so want to make sure we are all on track. Please reach out to Josh, Matt and I if you have any questions or concerns about your area
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-30 16:18:43 BST === 
Message TS: 1782832723.473529
FCA planning for July Event

Jun 30, 2026

<mailto:joshadams@salesforce.com|Josh Adams> <mailto:rcolby@salesforce.com|Rachel Colby> <mailto:snaltchayan@salesforce.com|Sylvain Naltchayan> <mailto:mgrubbjnr@salesforce.com|Murray Grubb Jnr> <mailto:mrochard@salesforce.com|Matthew Rochard> <mailto:jeffrey.pratt@salesforce.com|Jeff Pratt> <mailto:sholyer@salesforce.com|Steve Holyer> <mailto:dbhoola@salesforce.com|Dipesh Bhoola> <mailto:spajon@salesforce.com|Stephane Pajon> <mailto:a.davey@salesforce.com|Andrew Davey>

Meeting strategy planning centered on aligning organizational vision for future data capabilities with client strategic goals.

*Meeting Agenda and Strategic Direction*
• Strategy shifted toward "Art of Desire" framework to prioritize vision and future state over current technical constraints.
• Objective defined as transitioning customer regulation from reactive to proactive, autonomous, and self-service models.
• Plan finalized to include 15-minute recap of historical relationship and current platform footprint to establish credibility.
*Logistics and Venue Planning*
• Session currently planned for full day, pending final agenda and attendee confirmation from client on Monday.
• Preference identified to host meeting in AI or Innovation center instead of standard office room on floor 27.
*Next steps*
• [Murray Grubb Jnr] Book Meeting Room: Reserve an additional room for the upcoming customer meeting.
• [Josh Adams] Contact AWS: Message the AWS account executive to gather insights on their recent session with the customer.
• [Josh Adams] Research Venue: Investigate the availability and booking process for the AI or Innovation center for the customer session.
• [Dipesh Bhoola] Prepare Content: Develop content regarding the Data Readiness Assessment for the upcoming customer meeting.
• [Jeff Pratt] Analyze Strategy: Review customer strategy documents to identify links between organizational goals and solution capabilities.


_You should review Gemini's notes to make sure they're accurate. <https://support.google.com/meet/answer/14754931|Get tips and learn how Gemini takes notes>_
_How is the quality of *these specific notes?*_ _<https://google.qualtrics.com/jfe/form/SV_9LA8am18LIWCYx8?confid=SlqTt8ye4kIHzT_HCHR-DxIUOAIIigIgABgDCA&isGoogler=no|Take a short survey> to let us know your feedback, including how helpful the notes were for your needs._
Thread: 1 replies (latest: 2026-07-09 13:30:41 BST)
Reactions: +1 (2)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-30 16:07:51 BST === 
Message TS: 1782832071.316329
<https://docs.google.com/presentation/d/1h2MVLMAP5zr9pUY4TwXdiPPwrCMDN3-yIgiYrAcY8lQ/edit?usp=sharing|docs.google.com/presentation/d/1h2MVLMAP5zr…/edit?usp=sharing>
Files: FCA Data Foundations 14th July 2026 (ID: F0BE344GLBX, application/vnd.google-apps.presentation, 0 Bytes)

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-06-29 19:40:45 BST === 
Message TS: 1782758445.392539
Hi Matthew,
 
Lauren is in Washington at the moment but I do have this flagged in her inbox.
 
Kind regards,
Tahera

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-06-29 19:40:39 BST === 
Message TS: 1782758439.078129
Not from Tahera today;


=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-29 15:01:39 BST === 
Message TS: 1782741699.120799
Email sent to Lauren asking about proposed agenda and attendee list. Will update as and when she replies

=== Message from Slackbot (USLACKBOT) at 2026-06-29 14:11:37 BST === 
Message TS: 1782738697.057989
Rachel Colby made updates to a canvas tab: F0B98RVAGMC

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-06-25 10:51:46 BST === 
Message TS: 1782381106.638439
I have emailed Laurens EA.  She is raising it with her.
Thread: 1 replies (latest: 2026-06-25 12:54:37 BST)
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-23 14:17:12 BST === 
Message TS: 1782220632.638399
23/06 Summary:

• Still no interaction from Lauren following Murray's message on agenda and attendees which is hampering the ability to plan for the workshop
• Action: <@U01VCLKP8QN|Matthew Rochard> to email Lauren to try and understand thoughts on agenda, what is most useful for Lauren in achieving her objectives, attendees, so we can best prepare. Copy in me and <mailto:Faisal.Ahmed@fca.org.uk|Faisal.Ahmed@fca.org.uk> (Supplier Manager) who can chase up and investigate on our behalf
• Action: JA to discuss with <@UNLA7KSDA|Rachel Colby> when back from PTO about engaging with Lauren and opening up a line of communication
Reactions: +1 (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-16 14:53:09 BST === 
Message TS: 1781617989.309019
<https://docs.google.com/document/d/1UCEn5b9dS8Sn4TkHteDZGFSBAiDu45aBaCnD9CDqaOU/edit?tab=t.xgjo7gax8w6c|docs.google.com/document/d/1UCEn5b9dS8S…/edit?tab=t.xgjo7gax8w6c>
Files: 16 14:00 BST - Notes by Gemini (ID: F0BAZL4U7U1, application/vnd.google-apps.document, 178.9 KB)

=== Message from Slackbot (USLACKBOT) at 2026-06-16 14:22:53 BST === 
Message TS: 1781616173.742389
Rachel Colby made updates to a canvas tab: F0B98RVAGMC

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-15 17:01:39 BST === 
Message TS: 1781539299.870249
FYI we just received this from Olly at Agile about Lauren Dixon

*Olly Segger*
16:04 (56 minutes ago)





to Josh, me, Matthew, Joyce



Hi All,

I just wanted to share some great news for Agile. Lauren Dixon, the CDO from FCA has agreed to be a panel guest at an event we are sponsoring with an organisation called Scottish Financial Enterprises, in Edinburgh on 19th August.

This was a request we made via their Speaker Request process. This is 'hot off the press' and I will share further details about the event in due course.

Base on some of your interactions with Lauren, I thought this was important information for you to be aware of.

Kind Regards
Olly

Ol*ly Segger*

A*ccount Director*

*Agile (GB) Ltd*
*M: 07521 430351*
*E: <mailto:oliver.segger@agile.co.uk|oliver.segger@agile.co.uk>*
*W: <http://www.agile.co.uk|www.agile.co.uk>*

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-11 11:33:27 BST === 
Message TS: 1781174007.664159
<!here>  FYI, Murray and I have worked on the email to Lauren and the planning canvas I have pulled together above to confirm attendees and to test our suggested agenda - <@U061STVMSK0|Murray Grubb Jnr> to send out and handle comms with Lauren while I am out on PTO next week

=== Message from Jenny James <jenniferjames@salesforce.com> (U0AACU3GTNY) at 2026-06-10 18:17:35 BST === 
Message TS: 1781111855.745359
Just FYI, we held a hands on MDM workshop today and it was attended by Monoj Dey, who is Cognizant but working at FCA currently (and <@U01VCLKP8QN|Matthew Rochard> will remember him as he was on the MDM project at Cambridge university press last year)
Thread: 2 replies (latest: 2026-06-24 12:45:00 BST)
Reactions: +1 (2)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-10 12:37:56 BST === 
Message TS: 1781091476.507859
I have also updated the main canvas that <@UNLA7KSDA|Rachel Colby> shared yesterday: F0B98RVAGMC

It's got some good context, aims and principles for the day and what we need to test with Lauren ASAP in terms of agenda - remember this is HER day, not ours. Otherwise we risk presenting content in a vacuum for 6 hours which is not helpful for anyone
Files: FCA_Data_Foundations_Workshop_Planning (ID: F0B98RVAGMC, application/vnd.slack-docs, 11.4 KB)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-10 12:37:10 BST === 
Message TS: 1781091430.078299
Thanks <@U061STVMSK0|Murray Grubb Jnr>

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-10 12:21:31 BST === 
Message TS: 1781090491.607579
All, I have created this proposed agenda and discussion points for the event in July. I would welcome any feedback or additions. <https://docs.google.com/document/d/1FRUG7UU_9py5svP5BMn4nKISkPLJa-ZZcZ2rlhoPXU4/edit?tab=t.0|docs.google.com/document/d/1FRUG7UU_9py…/edit?tab=t.0>
Files: Proposed Executive Meeting Agenda: FCA × Salesforce (ID: F0B9KDFRSGJ, application/vnd.google-apps.document, 119.9 KB)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-06-09 14:50:23 BST === 
Message TS: 1781013023.661419
<https://docs.google.com/document/d/1J3JPgtedQUWJ4wf7sUevToCx0FNUPX0xdzwghCu0L9U/edit?tab=t.b3j7w8j78m9n|docs.google.com/document/d/1J3JPgtedQUW…/edit?tab=t.b3j7w8j78m9n>
Files: 09 14:00 BST - Notes by Gemini (ID: F0BA500FK6U, application/vnd.google-apps.document, 5.4 KB)

=== Message from Slackbot (USLACKBOT) at 2026-06-09 14:38:09 BST === 
Message TS: 1781012289.204529
Rachel Colby made updates to a canvas tab: F0B98RVAGMC
Reactions: clapping-inclusive (1)

=== Message from Slackbot (USLACKBOT) at 2026-06-02 15:24:04 BST === 
Message TS: 1780410244.583759
Dipesh Bhoola made updates to a canvas tab: F0B7P679T6J

=== Message from Maribel Pinilla <mpinillamartin@salesforce.com> (U01HYKY7HFF) at 2026-06-02 14:50:14 BST === 
Message TS: 1780408214.939589
<@U01HYKY7HFF|Maribel Pinilla> has joined the channel

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-06-02 14:49:58 BST === 
Message TS: 1780408198.594159
<@U01JF0ZG4CX|Sylvain Naltchayan>, <@U0ADPCTAQ59|Jeff Pratt> , <@U01HYKY7HFF|Maribel Pinilla> and I met today to share our respective knowledge of FCA.
<@U037SKB6C4E|Stephane Pajon> is currently away

*Summary*
*Current Infrastructure and AI*
Discussions covered the existing Supervision Hub architecture and current utilization of AI tools like Einstein for Service. The team explored the potential for a separate organization to manage Regulatory Excellence.

*Data Architecture and Strategy*
Participants examined integrating Informatica with existing Salesforce and cloud environments to improve data governance. MuleSoft was identified as a strategic option for managing API and middleware requirements.

*Workshop Preparation and Planning*
The team aligned on the July 14th workshop agenda focused on conducting a data readiness assessment. Stakeholder mapping will clarify key internal relationships and roles for future engagement.

Next steps
• [Jeff Pratt] Verify Data Architecture: Investigate if the Amazon RDS Oracle setup has changed and determine its integration status with Redshift.
• [Jeff Pratt] Gather Team Names: Compile a list of all team members working under Lauren Dixon.
• [Sylvain Naltchayan] Invite Participant: Add Maribel Pinilla to the July 14 session calendar invitation.
• [Sylvain Naltchayan] Update Stakeholder map: Add Lauren and others at FCA related to Informatica. 
• [The group] Perform Readiness Assessment: Propose an approach for the data readiness assessment to stakeholders. Support Artificial Intelligence capabilities as part of the data foundation review.
• DRA next step - Developing the opportunity hypothesis and getting customer alignment on scope and success
Reactions: done-3 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-06-01 14:30:21 BST === 
Message TS: 1780320621.826029
<!here> <@U01VCLKP8QN|Matthew Rochard> has confirmed the data foundations meeting has been postponed... <https://salesforce-internal.slack.com/archives/C08EVRN6152/p1780318384983119|https://salesforce-internal.slack.com/archives/C08EVRN6152/p1780318384983119>
Forwarded message from Matthew Rochard (https://salesforce-internal.slack.com/archives/C08EVRN6152/p1780318384983119) — use slack_read_thread or slack_read_channel to read the original message

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-28 10:30:32 BST === 
Message TS: 1779960632.736569
<@U061STVMSK0|Murray Grubb Jnr> - FCA supplier mgr has confirmed Lauren is away this week and not back til 01/06... shall we see if her EA can you time with her on Monday to align urgently for Weds' session - failing that we will likely need to postpone

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-05-27 15:03:40 BST === 
Message TS: 1779890620.911359
Hi <!here> as agreed on our call earlier, we want to use our next meeting as an education on Data Foundations and land the relevance to FCA then get commitment to ORA or DRA as next step.
Key action:
<@U061STVMSK0|Murray Grubb Jnr> will reach out to Lauren today with following _proposed_ agenda  (thanks <@U0AASNXHWN5|Steve Holyer>), ask for feedback as we can adapt as needed and also confirm if Weds 3rd is happening. If not, to confirm next nearest date.

*Modern Data Foundations for Trusted Data in Financial Supervision*
_Modernising a regulatory operating model isn't just about moving workflows or data to the cloud. If you automate a broken data process, you just run into compliance and operational errors faster. This session delivers the blueprint for solid data foundations, showcasing how *Informatica and Salesforce* combine to accelerate supervisory velocity, maximize public value, and safely unlock the true power of Data and AI._
*Key Topics:*
• *The Imperative: Asset or Operational Risk?* In financial supervision, fragmented data is a systemic risk; unified data is a regulatory asset. We will focus on why a solid data foundation is non-negotiable to transform disconnected regulatory returns and market feeds into a high-velocity powerhouse for supervisory intelligence.
• *The Salesforce Engagement Core:* A data foundation is only as valuable as the actions it powers. Discover how a unified data fabric fuels *Salesforce CRM and Agentic AI*, giving supervisory teams a single, 360-degree view of firms and markets to drive proactive, real-time engagement.
• *The Art of the Possible (Governance as a Scale Enabler):* Showcasing global best practices where robust data governance acts as an accelerator. See how automated data lineage provides the absolute "proof of truth" required for transparent oversight—turning data governance into a launchpad for active, trusted analytics across your Salesforce ecosystem.
• *The "Hallucination Hedge" for RegTech:* The FCA cannot safely scale automated market surveillance or Salesforce AI Agents on a foundation of poor-quality data. Learn how trusted, contextual data foundations eliminate the "hallucination gap," ensuring supervisory insights and automated checks are bulletproof and completely explainable.
• *Investing in the DRA Framework:* To turn this vision into reality, we intend to invest heavily in providing FCA with a *Data Readiness Assessment (DRA)* as a core initiative. This strategic investment is designed to ensure the framework is highly actionable, reusable, and purposefully built to be directly useful for the FCA’s long-term modernisation goals.

Thread: 5 replies (latest: 2026-05-29 13:22:48 BST)
Reactions: eyes (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-26 17:52:42 BST === 
Message TS: 1779814362.533649
Thanks <@UNLA7KSDA|Rachel Colby>, sounds good - speak to you all tomorrow

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-05-26 17:30:50 BST === 
Message TS: 1779813050.322139
<!here> I'll put a call in tomorrow to agree the agenda for 3rd June and who should support from our side
Reactions: +1 (1)

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-05-26 16:39:57 BST === 
Message TS: 1779809997.127669
to confirm I'm available on the 3rd June.

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-26 16:38:00 BST === 
Message TS: 1779809880.827999
I thought we discussed on a call last week and agreed that this was pre all the readiness assesments but we would use some of the scope to plan the meeting.  <@U061STVMSK0|Murray Grubb Jnr> was going to check with Lauren who is attending from FCA and then Jeff and other SE's would plan the session.  I am on holiday so can not coordinate but can we stick to what was discussed.  This seems to have changed from Friday.
Thread: 4 replies (latest: 2026-05-26 17:47:54 BST)

=== Message from Richard Cole <richard.cole@salesforce.com> (W011GHC2ZPX) at 2026-05-26 16:18:48 BST === 
Message TS: 1779808728.993649
A few points from my side-

*Data Readiness Assessment* - as they're a strategic customer and are the the process of reviewing their data and integration landscape, we agreed that they would be a good candidate for e Data Readiness Assessment. My understanding is that this is something we'd mention and offer to them next week, and I'd also follow up on the thread with Jason at FCA. <@U037SKB6C4E|Stephane Pajon> would lead on this, supported by <@US3RV8154|Dipesh Bhoola> as our two EMEA DRA leads.

*Next week's meeting -* we do not have any  of my SEs (including me) available due to holidays - the date of 3rd June has been agreed with the customer without checking availability on our side.  If he's available and happy to do it, I've seen <@U0AASNXHWN5|Steve Holyer> do a great end to end Data Foundations pitch which I think would work well for this session.

Happy to jump on the planning call, feel free to put some time in my diary.

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-26 15:13:28 BST === 
Message TS: 1779804808.024229
Stephane is not available on the 3rd so perhaps <@W011GHC2ZPX|Richard Cole> can cover. As for this session Josh I think you, me, the SEs and Locky would be best 
Thread: 3 replies (latest: 2026-05-26 16:28:05 BST)

=== Message from Lachlan Mills <lachlan.mills@salesforce.com> (U01G1QAA6CE) at 2026-05-26 13:50:21 BST === 
Message TS: 1779799821.554989
There is a specific qualification process for the DRA, <@U037SKB6C4E|Stephane Pajon> is leading it for EMEA in Foster's absence and <@W011GHC2ZPX|Richard Cole> can help 

The ORA is separate and ideally is run pre the DRA. DRA takes 2-3 hours on site and gives you outcomes and use case, DRA focuses on the data situation underpinning the intended objectives and use cases 
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-26 13:45:16 BST === 
Message TS: 1779799516.855239
<@U061STVMSK0|Murray Grubb Jnr> who do we need on this internal planning meeting? Give me the names and I will get it scheduled

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-05-26 13:28:08 BST === 
Message TS: 1779798488.906809
I'm afraid I'm out of play for rest of day - tomorrow is pretty open for me.  I would definitely like to get more info on what a DRA is/does

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-26 13:23:57 BST === 
Message TS: 1779798237.520299
As for call today, I am available for the rest of the day

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-26 13:23:42 BST === 
Message TS: 1779798222.595419
<@U0ADPCTAQ59|Jeff Pratt> No list has been shared as yet but they did say that it would be shared this week.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-26 13:22:43 BST === 
Message TS: 1779798163.066749
Complete agree, thank you <@U061STVMSK0|Murray Grubb Jnr>. Can we look to get a call in today/tomorrow to discuss further please with the relevant people on our side to get planning.

Few things from my side;
• Invite admins - I can see the invite for next Weds in the tower, but can't see any FCA on there apart from Tahera Sultana - is that correct or have we got another invite out? Need to understand who is coming so we best tailor content to their objectives/aspirations
• Agenda - need to have this nailed down asap and agree on what will be most impactful. Agree with Murray that our primary focus should be to:
    ◦ educate the FCA on the importance of solid data foundations
    ◦ give them a view of best practice/show them the art of the possible, and to 
    ◦ tee up the DRA as a key initiative that we will invest it to be useful for them

Reactions: muley (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-26 12:59:52 BST === 
Message TS: 1779796792.842479
Hello <!channel> I have just been speaking with <@U038JMVKGBB|Josh Adams>  discussing our plans for the session on the 3rd. We obviously want to make sure that we cover off the wider Data Foundations landscape and run through why we want to do the DRA and ORA. I think we all need to jump on a call as soon as is possible to flesh out the agenda to garner the most from the day and to avoid getting caught out on the day of keeping the conversation to shallow and not getting the wider roadmap out of it.
Thread: 2 replies (latest: 2026-05-26 13:22:43 BST)

=== Message from Lachlan Mills <lachlan.mills@salesforce.com> (U01G1QAA6CE) at 2026-05-26 12:51:26 BST === 
Message TS: 1779796286.475139
<@U01G1QAA6CE|Lachlan Mills> has joined the channel

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-05-22 16:24:34 BST === 
Message TS: 1779463474.220429
meeting scheduled, please provide opp link we SE can use to time
Thread: 1 replies (latest: 2026-05-25 15:59:00 BST)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-05-22 16:17:49 BST === 
Message TS: 1779463069.800419
Just had a call with <@US3RV8154|Dipesh Bhoola> and <@U01H981JRDX|Rima Mukherjee> about building out our Showcase session as the pre curser to the DRA and OOA workshops as the next step. Dipesh will set up a slot next week with <@U037SKB6C4E|Stephane Pajon> <@U01JF0ZG4CX|Sylvain Naltchayan> and <@U0ADPCTAQ59|Jeff Pratt> to plan out what our future state could look like for them.

=== Message from Sylvain Naltchayan <snaltchayan@salesforce.com> (U01JF0ZG4CX) at 2026-05-22 16:16:33 BST === 
Message TS: 1779462993.978089
<@U01JF0ZG4CX|Sylvain Naltchayan> has joined the channel

=== Message from Jon Bland <jbland@salesforce.com> (U01G8F4AASW) at 2026-05-22 12:29:36 BST === 
Message TS: 1779449376.329749
<@U01G8F4AASW|Jon Bland> has joined the channel

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-22 12:29:15 BST === 
Message TS: 1779449355.600909
As a follow-on to my previous message, I had an interesting call with Pete Ardley at 5pm last night - he called my mobile out of the blue. He was on our call yesterday but very silent... Key bullet points below - all of this is *OFF THE RECORD(!):*

• Pete used to own the data lake... sitting under Mayesta Ewer, his team has now been completely restructured. Lauren is now owning the data lake.
• FCA execs have decided to now have a clear demarcation between ownership of data lake, and ownership of applications that consume data lake and act on it (e.g. Tableau et al), as they have been concerned that the data going into the lake is too loose and not always verified.
• He also advised on a lot of red herrings in our first meeting re: Tableau - Tableau is NOT owned by anyone on our call yesterday, those decisions will sit with Mayesta, who <@U01H981JRDX|Rima Mukherjee> knows and has a relationship with.
• As such, his guidance is that a big focus on Tableau as part of this workshop is a little bit of wasted effort; absolutely we should mention it but do not double down on it given the decision makers are not currently in the room
• *Here is the juicy bit - Pete confirmed the FCA's main priorities over next 1-2 years are:*
    ◦ Replace data lake - Cloudera (current DL) is up for renewal next year and there is ambition to move away from it if possible
    ◦ Enhancing/improving Data Quality & Data Consistency
    ◦ Replacing Talend (that is linked to the point Andrew H raised in the meeting about other case studies).
    ◦ So... let's work out how we can weave the above into our workshop 
• Pete's coaching is therefore that we focus the upcoming workshop on holistic data foundations strategy - how do the FCA get the right data strategy and foundations in place so that they can bolt on any consuming service on the top - that is the focus of the team we are engaging with.
• I do not know our position on data lake(s) or what we recommend here, but I see big opportunities across data quality and consistency, and the Talend replacement at a minimum.
• We should therefore absolutely focus our session on 'art of the possible' with a strong data foundation, and how that could interact with Salesforce as their case management record system, Tableau as BI etc., but let's not get distracted by this being a Tableau focused session.
• Once we have a draft of the session agenda/outline in more detail we absolutely need to test this with Lauren/Andrew H to get their support and buy-in.

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-22 12:25:36 BST === 
Message TS: 1779449136.204379
Hi all, think we have a couple of things in play here (keep me honest <@U01VCLKP8QN|Matthew Rochard> <@U061STVMSK0|Murray Grubb Jnr>...)
• Follow up meeting with FCA hosted in SF Tower to deep dive and show a Data Foundations art of the possible - I received some unofficial coaching on that (see next post) from a contact at the FCA
    ◦ Let me know if you need anything from me on this - I know Lauren committed to confirming numbers back with us ASAP. Once we have this we should sort out catering and potentially arrange drinks afterwards, GEM request pending.
• DRA - have we formally proposed this to the FCA or is this our intention as a follow up from the first workshop in June?
Reactions: +1 (1)

=== Message from Rachel Colby <rcolby@salesforce.com> (UNLA7KSDA) at 2026-05-22 12:19:28 BST === 
Message TS: 1779448768.343119
<@UNLA7KSDA|Rachel Colby> has joined the channel

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-21 16:09:19 BST === 
Message TS: 1779376159.321329
I have also added <@U0AACU3GTNY|Jenny James> as an MDM specialist
Reactions: +1 (1)

=== Message from Jenny James <jenniferjames@salesforce.com> (U0AACU3GTNY) at 2026-05-21 16:09:01 BST === 
Message TS: 1779376141.864719
<@U0AACU3GTNY|Jenny James> has joined the channel

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-21 16:08:19 BST === 
Message TS: 1779376099.805869
Hi. We have had a really good call today with FCA prior to workshop on 3rd of June.  I believe the content for the W/S should be led from the SE's.  So I have added <@U0ADPCTAQ59|Jeff Pratt> and <@U0AASNXHWN5|Steve Holyer> (Platform Specialist).   I will set up a call for the SE's to set up a framework for the W/S leading from Data Foundations up. I am timing out before I go on holidays but Jeff has notes from the call.  Watch this space for call whilst I am away.
Reactions: +1 (1), raised_hands (1)

=== Message from Steve Holyer <sholyer@salesforce.com> (U0AASNXHWN5) at 2026-05-21 16:04:40 BST === 
Message TS: 1779375880.775139
<@U0AASNXHWN5|Steve Holyer> has joined the channel

=== Message from Jeff Pratt <jeffrey.pratt@salesforce.com> (U0ADPCTAQ59) at 2026-05-21 16:04:25 BST === 
Message TS: 1779375865.481219
<@U0ADPCTAQ59|Jeff Pratt> has joined the channel

=== Message from Rima Dahiwal <rdahiwal@salesforce.com> (U01T4H5KEJJ) at 2026-05-21 16:03:45 BST === 
Message TS: 1779375825.141829
<@U01T4H5KEJJ|Rima Dahiwal> has joined the channel

=== Message from Rima Mukherjee <rima.mukherjee@salesforce.com> (U01H981JRDX) at 2026-05-21 16:03:42 BST === 
Message TS: 1779375822.678169
<@U01H981JRDX|Rima Mukherjee> has joined the channel

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-18 15:06:49 BST === 
Message TS: 1779113209.253379
All good <@U01VCLKP8QN|Matthew Rochard>, they are presenting their AI POCs they have built for the FCA on Salesforce

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-05-18 14:36:37 BST === 
Message TS: 1779111397.937019
Not sure anyone from side has seen an invite to this *The Deloitte team from FCA are presenting the lunch and learn this week:* Thurs 12:15 presentation start (lunch from noon)

Assuming we are not needed

=== Message from Richard Cole <richard.cole@salesforce.com> (W011GHC2ZPX) at 2026-05-06 13:42:31 BST === 
Message TS: 1778071351.411119
<@W011GHC2ZPX|Richard Cole> has joined the channel

=== Message from Stephane Pajon <spajon@salesforce.com> (U037SKB6C4E) at 2026-05-06 13:42:05 BST === 
Message TS: 1778071325.433219
<@U037SKB6C4E|Stephane Pajon> has joined the channel

=== Message from Dipesh Bhoola <dbhoola@salesforce.com> (US3RV8154) at 2026-05-06 13:41:51 BST === 
Message TS: 1778071311.605989
<@US3RV8154|Dipesh Bhoola> has joined the channel

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-05-06 13:41:27 BST === 
Message TS: 1778071287.731539
has renamed the channel from "fca-informatica-working-group" to "fca-data-foundations"

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-04-13 07:38:17 BST === 
Message TS: 1776062297.058909
<https://www.informatica.com/magic-quadrant-mdm.html>

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-08 08:02:00 BST === 
Message TS: 1775631720.395319
<@U061STVMSK0|Murray Grubb Jnr> just pinged an email to the Agile guys saying they are all registered with reception etc. I mentioned that you will send over a few bullet points on the bits we want to cover so would be great if you could send that over when ready. I'm just on the way to the office atm so will speak to you both when we all get in shortly. Cheers !

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-07 10:07:31 BST === 
Message TS: 1775552851.464199
Nice - sounds good. If you guys could have a think and consolidate a list of a few bullet points to send to Agile that would be good. Stakeholder mapping is a key activity for tomorrow as we are all going in a bit blind at the moment given Ian C is no longer supporting the account

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-04-07 09:57:44 BST === 
Message TS: 1775552264.838259
All sounds good. I think from my perspective we want to talk about why Mule and Informatica together enhances the FCAs capabilities and Agile becomes more cemented in the account
Reactions: +1 (1), raised_hands (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-07 09:56:16 BST === 
Message TS: 1775552176.996929
<@U061STVMSK0|Murray Grubb Jnr> <@U01VCLKP8QN|Matthew Rochard> - we have the workshop with the Agile team tomorrow, couple of things spring to mind...
• Logistics and room booking - I have booked the room for the afternoon in the Tower and will pre-register our guests
• FCA opening and context - happy to provide a macro view of what we are doing on the account more broadly
• Agenda for the meeting - can keep this fairly fluid and informal but would be good to have a think about the point you want to cover with the Agile team given they are on the ground delivering the INFA cloud migration project at the moment. Would be good to get some bullet points over to the Agile attendees today so they can do a bit of prep; I'm thinking stakeholder mapping, mapping out power/budget, timelines, natural next steps, where they are looking to expand etc... <@U061STVMSK0|Murray Grubb Jnr> <@U01VCLKP8QN|Matthew Rochard> can I leave this with you action today please?
• Dinner and drinks - thanks for booking <@U061STVMSK0|Murray Grubb Jnr>, we may want to give Rachel and Jon a heads up on expenses coming :smile: 
Thoughts?
Reactions: clapping-inclusive (1)

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-04-02 12:23:33 BST === 
Message TS: 1775129013.851999
Sounds good Josh. I'm available all next week onwards to meet him 
Reactions: +1 (1), raised_hands (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-02 12:21:43 BST === 
Message TS: 1775128903.420469
I will keep you copied in to the email as I have met Julius before, then would be good to try and get some momentum. I would like to get them along to the Data Foundations events coming up too... Rachael (BDR) can help with that

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-04-02 12:21:00 BST === 
Message TS: 1775128860.323669
<@U01VCLKP8QN|Matthew Rochard> <@U061STVMSK0|Murray Grubb Jnr> with Ian now out for a while I suggest that I get an email out to Julius (Ian's main stakeholder at the FCA) to get some time in the diary for an initial meet and so we can start planning some outreach with Julius team to understand their broader priorities as well as current plans to up IPU usage

=== Message from Paul Pitman <ppitman@salesforce.com> (U0AACSB611A) at 2026-03-27 13:24:24 GMT === 
Message TS: 1774617864.293479
Hi All, just FYI, steve H is arranging the temp sw keys for IDQ (data quality) to extend their IDQ to compelte the migration that Agile is doing. contact Steve H. FCA is aware
Reactions: +1 (1)

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-27 10:20:10 GMT === 
Message TS: 1774606810.307259
<@U01VCLKP8QN|Matthew Rochard> - Murray and I were due to catch up with <@U0AFZ7JHY6S|Ian Currie> at 12.30pm today to go over Informatica footprint at the FCA - let me know if you are free at that time, or suggest we reschedule to a time when you are free and we discuss together. Cheers
---PAGINATION---
There are more messages available. To view the next page, use cursor: `bmV4dF90czoxNzc0NjA2NzY2NjAxMDU5`


=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-27 10:19:26 GMT ===
Message TS: 1774606766.601059
Team - I have been informed that @Paul Pitman is no longer aligned to FCA :) I understand it will be @Matthew Rochard...

=== Message from Matthew Rochard <mrochard@salesforce.com> (U01VCLKP8QN) at 2026-03-27 10:19:11 GMT ===
Message TS: 1774606751.574769
@Matthew Rochard has joined the channel

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-03-26 15:43:33 GMT ===
Message TS: 1774539813.439169
I have lots of slots tomorrow if that works for you both

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-25 11:41:44 GMT ===
Message TS: 1774438904.875859
I can't see your diaries, will propose another time and see if it works

=== Message from Ian Currie <icurrie@salesforce.com> (U0AFZ7JHY6S) at 2026-03-25 09:52:06 GMT ===
Message TS: 1774432326.924019
whenever we do have a call, we can chat quickly about when you want me to intro you all into my contacts there

=== Message from Ian Currie <icurrie@salesforce.com> (U0AFZ7JHY6S) at 2026-03-25 09:51:29 GMT ===
Message TS: 1774432289.643499
I actually have a customer call clash tomorrow at 3.30 Josh, can we find another time?

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-25 09:13:31 GMT ===
Message TS: 1774430011.563549
@Paul Pitman @Ian Currie @Murray Grubb Jnr - BTW - i have a standing call with Ian C next scheduled for tomorrow at 3.30pm (we remove this call in due course). Should we all jump on at that time to catch up on the initial steps of the above? Let me know

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-24 15:38:31 GMT ===
Message TS: 1774366711.395579
@channel Gents, immediate actions from our call earlier today:
• @Paul Pitman to discuss getting in a deep-dive handover session with @Ian Currie in terms of projects, stakeholders, value being delivered etc - shall we do this in person ASAP?
• @Josh Adams set up Slack channel (done, here) and add Paul to main FCA channel
• @Paul Pitman / @Ian Currie / @Josh Adams - email intros into Ian's working stakeholders introducing us and getting meetings set up to re-do discovery activities. Who is going to own this?
• @Murray Grubb Jnr invite Paul P to dinner with Agile team in April
• @Murray Grubb Jnr work with Rachael on BDR/outreach strategy for Informatica/Mule

=== Message from Murray Grubb Jnr <mgrubbjnr@salesforce.com> (U061STVMSK0) at 2026-03-24 14:09:15 GMT ===
Message TS: 1774361355.085419
@Murray Grubb Jnr has joined the channel

=== Message from Ian Currie <icurrie@salesforce.com> (U0AFZ7JHY6S) at 2026-03-24 14:09:14 GMT ===
Message TS: 1774361354.972159
@Ian Currie has joined the channel

=== Message from Paul Pitman <ppitman@salesforce.com> (U0AACSB611A) at 2026-03-24 14:09:14 GMT ===
Message TS: 1774361354.864669
@Paul Pitman has joined the channel

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-24 14:08:59 GMT ===
Message TS: 1774361339.711209
has renamed the channel from "fca-informatica" to "fca-informatica-working-group"

=== Message from Josh Adams <joshadams@salesforce.com> (U038JMVKGBB) at 2026-03-24 14:08:38 GMT ===
Message TS: 1774361318.688589
@Josh Adams has joined the channel

=== CHANNEL CREATED 2026-03-24 — end of history ===

```

### FCA Case Management Vision (C0AEQ756YDA)

⚠️ **Blocked — not read.** See "Channels covered" above for details. No raw transcript available for this channel in this research run.
