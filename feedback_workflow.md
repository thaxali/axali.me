---
name: Ax's working preferences on axali.me
description: How Ax wants to iterate on this project — sequencing, fidelity expectations, what to push back on. Apply to all build decisions on axali.me.
type: feedback
originSessionId: e7506d00-9290-483c-a5ce-0636162240c1
---
**Frontend first, then backend.** Prototype the experience in HTML/CSS/JS before standing up Next.js / Ollama / SQLite infrastructure. Ax wants to nail the UX shape before committing to engineering scaffolding.

**Why:** Building backend before frontend locks in choices about routes, data shapes, and chunk boundaries that should follow from the UX, not lead it.

**How to apply:** When in doubt about whether to start coding the real app or extend the prototype, default to extending the prototype. Only move to Next.js scaffolding once the UX questions (chat surface, takeover behavior, panel system, booking flow) are settled.

**Calibration signals so far:**
- Found the full-screen agent chat "too dominant" — preferred a smaller, side-panel treatment that preserves context of the page behind.
- Wants the landing page to function as a hub, all primary directions visible without overwhelming. Chose 4 doors over 5; trusts the agent to handle "Connect" rather than surfacing it explicitly.
- Reuses content from his existing studio89.design rather than re-writing — port and refine, don't recreate.
