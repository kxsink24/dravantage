# DRA: BYU

This folder contains the Data Readiness Assessment for **BYU**, a Salesforce Global Public Sector (GPS) engagement.

## Context

- **Customer:** BYU
- **Engagement Type:** Data Readiness Assessment
- **Primary SE/Architect:** Bryan Wise
- **Status:** In Progress

## Folder Purpose

All files in this folder are part of a single DRA deliverable. They are authored collaboratively — Claude Code generates and manipulates documents programmatically, and human users may edit directly in Obsidian.

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
- **Callouts:** Use Obsidian callout syntax for notes, warnings, and tips:
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
- When creating new documents, always include YAML frontmatter.
- When editing existing documents, preserve existing frontmatter — only modify fields explicitly requested.
- When in doubt about document structure, check existing files in this folder for conventions before creating something new.
- Do not delete or overwrite files without confirming with the user first.
