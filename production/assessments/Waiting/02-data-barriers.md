---
title: "Data Barriers — The Financial Conduct Authority"
wiki_page: "02"
status: draft
tags: [dra, barriers, blind-spot, time-trap, trust-gap]
sources: []
last_analyzed: null
---

# Data Barriers

> [!NOTE]
> Populated by `dra-analyze-input`. Severity scores here feed directly into `DRA_Engagement__c` fields (`Blind_Spot_Severity__c`, `Time_Trap_Severity__c`, `Trust_Gap_Severity__c`). Every barrier claim must cite a source.

**Maps to:** DRA Report Section 2 — Three Barriers  
**Drives output:** [[07-roadmap]], executive summary framing

---

## The Three-Barrier Framework

The DRA framework diagnoses data problems through three patterns. Most organizations have all three; the severity and interaction of them determines the recommended sequence of interventions.

- **Blind Spot** — Data exists but can't be seen. Systems are siloed, integration is manual or missing, and decisions get made without full context.
- **Time Trap** — Data is accessible but late. By the time information is available, the window for action has passed. Batch pipelines, manual refresh cycles, and reporting lag are the symptoms.
- **Trust Gap** — Data is accessible and timely but not believed. Inconsistent definitions, undocumented lineage, and unresolved conflicts between systems undermine confidence in the numbers.

The barriers compound: a Trust Gap on top of a Time Trap is worse than either alone. The roadmap should address the highest-severity barrier first.

---

## Blind Spot

**Severity:** [ High / Medium / Low / Not Present ]  
**Confidence:** [ High / Medium / Low ] — based on N sources

### Evidence

<!-- List the specific observations, quotes, or data points that support this severity rating. Each bullet should cite a source file. Example:
- "We have 14 systems and none of them talk to each other" — CTO, 2026-05-10 interview [[inputs/interviews/2026-05-10-cto]]
- Survey Q5 (Integration Architecture): 8 of 12 respondents selected "Manual exports / no real-time sync" [[inputs/survey/responses]]
-->

### Impact on the Customer

<!-- What specific strategic priority or operational outcome does this barrier directly block? Connect the evidence to the mission. -->

### Root Cause Hypothesis

<!-- What's the structural reason this barrier exists? Budget, legacy systems, organizational ownership dispute, lack of API strategy? -->

---

## Time Trap

**Severity:** [ High / Medium / Low / Not Present ]  
**Confidence:** [ High / Medium / Low ] — based on N sources

### Evidence

<!-- Quotes, survey patterns, or architecture observations that show data latency problems. -->

### Impact on the Customer

<!-- What decisions are being made late, or not made at all, because the data arrives too slowly? -->

### Root Cause Hypothesis

<!-- Batch ETL? No streaming layer? Reporting runs off stale snapshots? Manual data preparation consuming analyst time? -->

---

## Trust Gap

**Severity:** [ High / Medium / Low / Not Present ]  
**Confidence:** [ High / Medium / Low ] — based on N sources

### Evidence

<!-- Quotes, survey patterns, or observations showing that data exists but isn't trusted. Contradictions between stakeholders about "the truth" are strong Trust Gap signals. -->

### Impact on the Customer

<!-- What does distrust in data cost the organization? Duplicate work? Decisions made by intuition instead of evidence? Inability to give customers a consistent view of themselves? -->

### Root Cause Hypothesis

<!-- No data catalog? Multiple MDM approaches that conflict? No lineage tracking? Governance that exists on paper but not in practice? -->

---

## Barrier Interaction

<!-- When two or more barriers are present at High/Medium severity, describe how they compound each other. Example: "The Blind Spot prevents the IT team from knowing what data they have; the Trust Gap means the data they do have isn't used even when it's found. Both must be addressed before AI initiatives have a viable data foundation." -->

---

## Barrier Summary Table

| Barrier | Severity | Primary Evidence | Root Cause | Report Section |
|---|---|---|---|---|
| Blind Spot | | | | |
| Time Trap | | | | |
| Trust Gap | | | | |
