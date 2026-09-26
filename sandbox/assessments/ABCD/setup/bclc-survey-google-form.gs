/**
 * BCLC Data Readiness Assessment — Discovery Survey
 * One-click Google Form generator (Apps Script).
 *
 * HOW TO USE:
 *   1. Go to https://script.google.com  → New project
 *   2. Delete the placeholder code, paste THIS entire file
 *   3. Click Run ▶ (select createBclcSurvey). Authorize when prompted.
 *   4. Open Executions / View > Logs — the live URL and edit URL are printed there.
 *
 * Source of truth: setup/survey-draft.md (15 questions). Responses are
 * ATTRIBUTED (not anonymous): respondent name + role are captured up front
 * (role drives persona-level scoring downstream). Google auto email-collect is
 * OFF so respondents do NOT need a Google account to submit.
 */
function createBclcSurvey() {
  var form = FormApp.create('BCLC — Data Readiness Assessment Discovery Survey');

  form.setDescription(
    "Thank you for participating in BCLC's Data Readiness Assessment. This survey helps us " +
    "understand your current data landscape and priorities as you prepare for the September 2026 " +
    "convergence — the simultaneous go-live of your new Melco gaming platform, modernized Intralot " +
    "lottery network, Rewards & Incentives program, and Future Anthem real-time promotions.\n\n" +
    "Your responses will shape our July 13 kickoff discussion with Mark Goldberg and inform the " +
    "roadmap we deliver ahead of your September 2026 platform launches. The survey takes " +
    "approximately 15 minutes.\n\n" +
    "Your responses are attributed to you so we can follow up directly and tailor the kickoff " +
    "and interview discussions to your perspective."
  );

  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(true);

  // --- About you (attribution + persona) ---
  form.addSectionHeaderItem().setTitle('About you');

  form.addTextItem()
    .setTitle('Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Role / title')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Which best describes your role? (used to group responses for analysis)')
    .setChoiceValues(['Business Leader (VP / Director / Program lead)',
      'Business Worker (analyst / floor / retail / support / AML investigator)',
      'IT Leader (CIO / CTO / Enterprise Architect)',
      'IT Worker (developer / integration engineer / admin)',
      'Data Leader (CDO / CISO / Compliance / Safer Play)',
      'Data Worker (data engineer / DBA / data steward)'])
    .showOtherOption(true)
    .setRequired(true);

  // Helper: optional free-text comment after scale/MC questions that request one
  function comment(label) {
    form.addParagraphTextItem().setTitle(label).setRequired(false);
  }

  // Q1 — Compelling Event / Strategic Outcomes (open) — Cross-cutting (Act/Decide)
  form.addParagraphTextItem()
    .setTitle('1. What are the top 3 data-related outcomes that must be achieved before your ' +
      'September 2026 platform go-lives to support BCLC\u2019s platform launches and regulatory mandate?')
    .setRequired(true);

  // Q2 — Profile Unification Readiness (1-5 scale) — Unify (Trust)
  form.addScaleItem()
    .setTitle('2. How confident are you that BCLC can achieve a unified, real-time 360-degree ' +
      'player view across PlayNow.com, casino floor (Everi/Melco), and retail lottery terminals ' +
      'by September 2026?')
    .setHelpText('1 = Not confident (foundational gaps remain) · 3 = Moderately confident ' +
      '(some integration work needed) · 5 = Very confident (architecture is ready)')
    .setBounds(1, 5)
    .setLabels('Not confident', 'Very confident')
    .setRequired(true);
  comment('2a. Additional context (optional)');

  // Q3 — Real-Time Data Latency (MC) — Connect/Integrate (Unlock)
  form.addMultipleChoiceItem()
    .setTitle('3. Today, when a high-value player makes a $9,500 cash buy-in at a casino floor ' +
      '(just below the $10,000 reporting threshold), how quickly does that transaction appear in ' +
      'systems used by your AML and Safer Play teams?')
    .setChoiceValues(['Real-time (under 1 minute)', 'Near real-time (1\u201315 minutes)',
      'Batch processing (hourly or daily)', 'Don\u2019t know', 'Varies by location/system'])
    .setRequired(true);
  comment('3a. Additional context (optional)');

  // Q4 — Data Silos / Swivel-Chairing (MC) — Orchestrate (Activate)
  form.addMultipleChoiceItem()
    .setTitle('4. How often do your teams manually reconcile or re-enter player data across ' +
      'systems (e.g., matching Everi casino transactions to PlayNow.com accounts, or exporting ' +
      'Data360 segments to Future Anthem)?')
    .setChoiceValues(['Daily / multiple times per day', 'Weekly', 'Monthly',
      'Rarely / never \u2014 systems are integrated', 'Don\u2019t know'])
    .setRequired(true);
  comment('4a. Additional context (optional)');

  // Q5 — InfoSphere MDM Transition Plan (open) — Unify (Trust)
  form.addParagraphTextItem()
    .setTitle('5. What is the biggest risk in replacing IBM InfoSphere MDM with Salesforce ' +
      'Data360 while simultaneously launching Melco and Intralot platforms in September?')
    .setRequired(true);

  // Q6 — Agentforce Readiness (MC + Other) — Act (Activate)
  form.addMultipleChoiceItem()
    .setTitle('6. BCLC is piloting Agentforce for terminal diagnostics and high-value player ' +
      'concierge. What is the biggest barrier to deploying these agents in production by Q4 2026?')
    .setChoiceValues(['Data quality / incomplete player profiles',
      'Real-time integration gaps (agents can\u2019t access live system data)',
      'Trust / governance (agents can\u2019t write back to systems of record)',
      'Operational capacity (no team to handle agent escalations)',
      'Don\u2019t know / not familiar with Agentforce'])
    .showOtherOption(true)
    .setRequired(true);
  comment('6a. Additional context (optional)');

  // Q7 — Data Quality & Governance (1-5 scale) — Validate (Trust)
  form.addScaleItem()
    .setTitle('7. How would you rate the quality and completeness of player identity data ' +
      '(e.g., verified name, address, source of funds) across all channels today?')
    .setHelpText('1 = Poor (significant gaps, duplicates, or missing fields) · 3 = Fair ' +
      '(usable but requires manual cleanup) · 5 = Excellent (clean, complete, audit-ready)')
    .setBounds(1, 5)
    .setLabels('Poor', 'Excellent')
    .setRequired(true);
  comment('7a. Additional context (optional)');

  // Q8 — Streaming Data Ingestion (MC) — Connect (Unlock)
  form.addMultipleChoiceItem()
    .setTitle('8. Can your current data architecture ingest and process streaming events ' +
      '(e.g., real-time slot spins, mobile app location changes, live wagers) fast enough to ' +
      'trigger immediate actions like promotional offers or responsible gaming interventions?')
    .setChoiceValues(['Yes \u2014 we have real-time streaming in production',
      'Partially \u2014 we have streaming for some channels, not all',
      'No \u2014 we rely on batch ETL and scheduled jobs', 'Don\u2019t know',
      'Planned for future'])
    .setRequired(true);
  comment('8a. Additional context (optional)');

  // Q9 — Regulatory Compliance Confidence (1-5 scale) — Protect/Validate (Trust)
  form.addScaleItem()
    .setTitle('9. How confident are you that BCLC\u2019s current data systems can detect and ' +
      'report suspicious transaction patterns (e.g., "structuring" below $10K thresholds) across ' +
      'all channels in time to meet FINTRAC filing deadlines?')
    .setHelpText('1 = Not confident (we have blind spots) · 3 = Moderately confident (detection ' +
      'works but has delays) · 5 = Very confident (real-time detection across all systems)')
    .setBounds(1, 5)
    .setLabels('Not confident', 'Very confident')
    .setRequired(true);
  comment('9a. Additional context (optional)');

  // Q10 — Loyalty Program Data Requirements (MC + Other) — Decide/Act (Activate)
  form.addMultipleChoiceItem()
    .setTitle('10. The new Rewards & Incentives program aims to increase registered player rates ' +
      'from 53% to 64% by FY27/28. What is the biggest data challenge preventing higher ' +
      'registration rates today?')
    .setChoiceValues(['Players don\u2019t see value (promotion/offer relevance is poor)',
      'Registration process is too complex or requires too much data',
      'Can\u2019t track play across channels (online, casino, lottery) in one account',
      'Privacy concerns / players don\u2019t trust how we use data', 'Don\u2019t know'])
    .showOtherOption(true)
    .setRequired(true);
  comment('10a. Additional context (optional)');

  // Q11 — Slalom CDP Pause (open) — Unify (Trust)
  form.addParagraphTextItem()
    .setTitle('11. BCLC previously paused CDP profile unification work with Slalom. What was the ' +
      'primary reason for the pause, and what needs to be in place before resuming?')
    .setRequired(true);

  // Q12 — Data Team Operating Model (open) — People & operating model
  form.addParagraphTextItem()
    .setTitle('12. Who is the single-threaded leader accountable for delivering the unified ' +
      '360-degree player view by your September 2026 go-lives? (Name and title, or "unclear")')
    .setRequired(true);

  // Q13 — Integration Layer / MuleSoft (MC + Other) — Integrate (Unlock)
  form.addMultipleChoiceItem()
    .setTitle('13. BCLC discontinued MuleSoft. What integration platform or pattern is being ' +
      'used to connect Melco, Intralot, Everi, Data360, and Future Anthem?')
    .setChoiceValues(['Direct API integrations (point-to-point)',
      'Salesforce native connectors (e.g., Data360 streaming, MuleSoft Anypoint if reinstated)',
      'Custom middleware / ESB', 'Vendor-provided batch ETL', 'Don\u2019t know'])
    .showOtherOption(true)
    .setRequired(true);
  comment('13a. Additional context (optional)');

  // Q14 — Future State Vision (open) — Cross-cutting (Decide/Act)
  form.addParagraphTextItem()
    .setTitle('14. In your ideal future state (18\u201324 months from now), what does "winning ' +
      'with data" look like for BCLC? Describe one concrete use case or outcome.')
    .setRequired(true);

  // Q15 — Prioritization for Kickoff (MC single + Other) — Cross-cutting
  form.addMultipleChoiceItem()
    .setTitle('15. If you could only address one data capability gap in our July 13 kickoff ' +
      'meeting with Mark Goldberg, which would it be?')
    .setChoiceValues(['Real-time data integration across all platforms',
      'Profile unification and identity resolution', 'Data quality and governance',
      'Regulatory compliance automation', 'AI/Agentforce readiness and activation'])
    .showOtherOption(true)
    .setRequired(true);

  Logger.log('✅ BCLC survey created.');
  Logger.log('LIVE (responder) URL: ' + form.getPublishedUrl());
  Logger.log('SHORT URL:            ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('EDIT URL:             ' + form.getEditUrl());
}
