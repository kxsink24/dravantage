# DRA: The Financial Conduct Authority

This folder contains the Data Readiness Assessment for **The Financial Conduct Authority**, a Salesforce Global Public Sector (GPS) engagement.

## Context

- **Customer:** The Financial Conduct Authority
- **Codename:** FCA-Data-Foundations
- **GPS Segment:** Federal
- **Engagement Type:** Data Readiness Assessment
- **Primary SE/Architect:** Josh Adams
- **DRAVantage Record:** DRA-0117
- **Drive Folder:** TBD — set in DRAVantage
- **Primary Slack Channel:** [#the-financial-conduct-authority](https://salesforce.enterprise.slack.com/archives/C08EVRN6152)
- **Status:** In Progress

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
