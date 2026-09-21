# DRA: Small Business Administration

This folder contains the Data Readiness Assessment for **Small Business Administration**, a Salesforce Global Public Sector (GPS) engagement.

## Context

- **Customer:** Small Business Administration
- **Codename:** SBA-OneSBA
- **GPS Segment:** Federal
- **Engagement Type:** Data Readiness Assessment
- **Primary SE/Architect:** Werner Watschke
- **DRAVantage Record:** DRA-0002
- **Drive Folder:** https://docs.google.com/presentation/d/16f6fDrm5TdC2bxzamd8gFWRcwf5EaM9PEZWnNl1qK_c/edit *(primary linked deck; root Drive folder not yet linked)*
- **Primary Slack Channel:** #sba-h1fy27-execbizreview
- **Related Slack Channels:** #sba-data-readiness-assessment
- **Status:** In Progress

## Special Context for Agents

> [!IMPORTANT]
> This is a non-standard DRA workspace. The SBA DRA / executive-readout work was already substantially completed before this Vault folder was created. Bryan is using this engagement as a realistic test case to build out and validate the `dra-analyze-input` skill.
>
> Expect sequencing oddities: `Kickoff_Date__c` may be blank, a readout / DRA overview presentation already exists, and some inputs may appear post-hoc rather than in the normal `dra-research → dra-kickoff → kickoff → dra-analyze-input` order. Do **not** treat those facts as evidence that the engagement is broken. Instead, use the existing deck, Slack channel, action-items sheet, and linked artifacts as source material / regression targets for analysis-skill development.

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
├── inputs/                           ← all raw and structured inputs
│   ├── README.md
│   ├── research/                     ← raw dra-research outputs (Slack, org62, Workspace, Gemini)
│   ├── interviews/                   ← one structured note per interview
│   ├── survey/                       ← aggregated survey responses
│   └── customer-docs/                ← summaries of customer-provided materials
├── outputs/                          ← durable deliverable packages and local HTML staging
│   └── README.md
└── delivery/                         ← publication handoff and delivery records
    ├── README.md
    └── experience-cloud/             ← placeholder until Salesforce publication is ready
        └── README.md
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
- **`dra-generate-output`** reads pages `01`–`08` and creates one package per deliverable under `outputs/<deliverable-slug>/`
- **`dra-deck`** renders the approved outline to `outputs/<deliverable-slug>/index.html`, the self-contained local staging artifact
- **`delivery/experience-cloud/README.md`** documents the future Salesforce staging/publication handoff; it is not an uploader or publication receipt

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
