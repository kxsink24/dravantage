# DRA: Department of Veterans Affairs — Consolidated Contact Center

This folder contains the Data Readiness Assessment for **the Department of Veterans Affairs (VA)**, a Salesforce Global Public Sector (GPS) Federal engagement.

## Context

- **Customer:** Department of Veterans Affairs
- **Codename:** VA-CCC
- **GPS Segment:** Federal
- **Engagement Type:** Data Readiness Assessment
- **Primary SE/Architect:** Werner Watschke (wwatschke@salesforce.com)
- **DRAVantage Record:** DRA-0004
- **Drive Folder:** https://drive.google.com/drive/folders/1ivh2jeUkS9xMAJF02KzXe_bYaRhhkVoe
- **Primary Slack Channel:** #va-ccc-architecture-planning (C0B34EGEH55)
- **Secondary Slack Channel:** #va-contact-center-consolidation-oppty (C09S86YPAS2)
- **Status:** In Progress

## Engagement Context

This DRA is embedded in an active competitive procurement. The VA is consolidating ~80,000 contact center users onto Salesforce (Service Cloud Voice + Genesys CCaaS + MuleSoft + Data Cloud 360) under the Consolidated Contact Center (CCC) program. Salesforce was specifically named in the RFI as the consolidation technology. Competing against Microsoft. Architecture deliverable due 2026-08-24 must be baked into the RFx solicitation to force SIs to bid against the Salesforce design.

Key VA stakeholders:
- **Julie Fulmer** — Executive in charge of CCC (oversees VHA, VBA, all CCC orgs) — Business Sponsor
- **Mark Ennis** — Program Lead Manager (PLM), OIT — primary technical decision owner
- **Brian Mahlum** — VA business stakeholder, runs Friday working sessions
- **Rob Orifici** — OIT Executive, aligned on ELA and CCC strategy
- **Fernando** — OIT Technical Lead, running the Genesys POC
- **Dr. Lawrence** — Deputy Secretary / Enterprise Council Lead (final vendor selection authority)

Key Salesforce stakeholders:
- **Liz Bodell** — Account Executive / engagement lead (lbodell@salesforce.com)
- **Jack Bonifant** — SE Lead (jbonifant@salesforce.com)
- **Michael Moore** — Account Leader (mmoore@salesforce.com)
- **Brian Coughlin** — Technical SE / architecture (bcoughlin@salesforce.com)
- **Andy Cather** — SE / Genesys integration (acather@salesforce.com)
- **Werner Watschke** — Data & AI SE / DRA Architect (wwatschke@salesforce.com)

## Folder Structure

```
assessments/<customer>/
├── CLAUDE.md                         ← you are here
├── Index.md                          ← engagement home page
├── 01-strategic-alignment.md         ← mission, mandates, compelling event, sponsorship
├── 02-data-barriers.md               ← Blind Spot / Time Trap / Trust Gap
├── 03-personas.md                    ← People Leader / Business User / IT per-persona notes
├── 04-data-value-chain.md            ← Unlock / Trust / Activate scoring with evidence
├── 05-current-state-architecture.md  ← system inventory, integration landscape, 5-layer mapping
├── 06-target-state-architecture.md   ← capability gap analysis, Salesforce positioning
├── 07-roadmap.md                     ← Crawl / Walk / Run phased plan
├── 08-appendix.md                    ← scorecard, stakeholder registry, analysis run log
├── setup/                            ← pre-kickoff artifacts (survey draft, emails, deck draft)
│   └── README.md
└── inputs/                           ← all raw and structured inputs
    ├── README.md
    ├── research/                     ← raw dra-research outputs (Slack, org62, Workspace, Gemini)
    ├── interviews/                   ← one structured note per interview
    ├── survey/                       ← aggregated survey responses
    └── customer-docs/                ← summaries of customer-provided materials
```

The **wiki schema** (what each wiki page covers, what sections it contains, how it maps to the DRA report template) is defined in [`DRAVantage-Org/docs/06-wiki-schema.md`](../../../../DRAVantage-Org/docs/06-wiki-schema.md).

## Skill Workflow

```
dra-intake → dra-env-setup → dra-research → dra-kickoff → [kickoff meeting] → dra-analyze-input (repeating) → dra-presentation-police → dra-generate-output
```

- **`dra-env-setup`** creates this folder from the template and populates this CLAUDE.md
- **`dra-research`** populates `inputs/research/`
- **`dra-kickoff`** populates `setup/`
- **`dra-analyze-input`** populates `inputs/interviews/`, `inputs/survey/`, `inputs/customer-docs/`, and updates pages `01`–`08`
- **`dra-generate-output`** reads pages `01`–`08` to produce customer deliverables

## Writing Format

This vault uses Obsidian-flavored Markdown. Follow these conventions in all documents you create or edit:

- **Internal links:** Use `[[Note Title]]` or `[[Note Title|Display Text]]` — not standard `[text](path.md)` links
- **Frontmatter:** Include YAML frontmatter at the top of every document:
  ```yaml
  ---
  title:
  tags: []
  created: YYYY-MM-DD
  status: draft
  ---
  ```
  Allowed `status` values: `draft` · `in-progress` · `under-review` · `delivered` · `archived`
- **Callouts:** Use Obsidian callout syntax:
  ```
  > [!NOTE]
  > Content here
  > [!WARNING]
  > Content here
  ```
- **Headings:** Use `#` H1 for document title only. All section headings start at `##`.
- **No trailing HTML:** Do not use raw HTML tags in documents.

## Behavioral Guidance

- Work only within this subfolder unless explicitly told otherwise.
- Always include YAML frontmatter when creating new documents.
- When editing existing documents, preserve existing frontmatter — only modify fields explicitly requested.
- **Never reference content from another customer's folder.** Customer isolation is enforced by `dra-presentation-police` at output time, but applies during editing and analysis too.
- Do not delete or overwrite files without confirming with the user first.
- When in doubt about what a wiki page should contain, consult `DRAVantage-Org/docs/06-wiki-schema.md`.
