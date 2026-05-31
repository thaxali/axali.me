---
name: feedback-memory-location
description: For axali.me, HQ is the canonical memory location and the auto-memory system path is a mirror. Write HQ first, then mirror.
metadata:
  type: feedback
---

For axali.me memory files, **`HQ/03-Professional/axali.me/` is canonical**. The auto-memory system path (`~/Library/Application Support/Claude/local-agent-mode-sessions/1cb5ff27-e7d9-4eb5-8ef6-192b691f0886/d230c02c-de98-4cc3-be86-462dc1f33cbc/spaces/9112a93d-fdab-4436-8166-4ad37e1945f9/memory/`) is a **mirror**.

**Why:** Ax moved the memory files into HQ so all HQ-aware agents (Cal in Cowork, Curie in Claude Code, Ada in Codex) can see project memory alongside the project files. The auto-memory framework still needs the system path to function, so we keep both — but HQ is the source of truth.

**How to apply:**
- When writing or updating any axali.me memory file (including MEMORY.md and any [[name]].md), write to the HQ path first.
- Then immediately mirror the same content to the system memory path so the auto-memory framework continues to load it on next session start.
- When reading, prefer HQ; if HQ is unavailable, fall back to the system path.
- If the two diverge, HQ wins — update the system path to match HQ, never the other way around.
- This applies only to axali.me memory. Other auto-memory (if any) still lives only at the system path unless Ax moves it.

See [[axalime_architecture]] and [[feedback_workflow]] for the surrounding project context.
