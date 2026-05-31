---
name: axali.me architecture decisions
description: Locked architectural choices for the axali.me personal site + AI agent project. Reference before suggesting any infra, stack, or storage changes.
type: project
originSessionId: e7506d00-9290-483c-a5ce-0636162240c1
---
axali.me is Ax's personal site — a bio/portfolio plus a RAG-backed AI agent grounded in his corpus.

**Locked decisions (2026-05-13):**

- **Hosting:** Single VPS, self-hosted everything on one box. Likely Hetzner CCX23 (4 dedicated vCPU, 16GB RAM, ~$30/mo). Ax owns axali.me already.
- **Reverse proxy:** Caddy with auto-SSL for axali.me.
- **Site stack:** Next.js (App Router). Deployed as a Node service on the same box.
- **LLM:** Self-hosted via Ollama. Starting model: Qwen 2.5 7B Instruct (CPU-inference friendly). Architecture lets us swap to bigger models later without changing the rest.
- **Embeddings:** BGE-small-en, runs locally on CPU.
- **Vector store:** SQLite + sqlite-vec extension. No Postgres — single-author corpus doesn't justify it. The whole DB is one file, trivial to back up.
- **Corpus storage:** Markdown files in the repo under /content/. Build-time pipeline chunks → embeds → writes to SQLite.
- **Substack:** Daily cron pulls RSS, new posts auto-flow into corpus.
- **Booking:** Google Calendar Appointment Schedules (native, free with Workspace). Embedded as iframe. Multiple schedules for consults / workshops / talks.
- **Aesthetic direction:** Not yet locked — three mockups delivered (Editorial / Playful / Product). Awaiting Ax's pick.

**Why:** Ax wants a personal site that doubles as a hosted product. Self-hosting everything keeps recurring cost low, preserves privacy of the corpus, and avoids per-token bills. Single-box deployment is acceptable because traffic is low (single-author bio) and gives him full control.

**How to apply:** When building anything for this project, default to these choices. If a request implies a change (e.g., "let's move to Postgres" or "let's use OpenAI's API"), flag the tradeoff explicitly and confirm before doing it.

**Workflow for corpus building:** Ax dictates into voice memos / Whisper offline, pastes transcripts into chat. Claude synthesizes into the right markdown file in /content/. Per-project intakes follow a protocol: Ax provides existing materials → Claude generates project-specific interview questions → Ax dictates answers → Claude writes the knowledge card.
