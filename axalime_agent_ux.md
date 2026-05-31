---
name: axali.me agent UX patterns
description: UX decisions for the AI agent chat on axali.me — the conversational layer grounded in Ax's corpus. Reference before redesigning the chat surface.
type: project
originSessionId: e7506d00-9290-483c-a5ce-0636162240c1
---
**Surface:** Right-side panel (~560px wide) with a dimmed backdrop. Not full-screen. Not a floating widget. Sits in the same family as the other top-nav panels (Links / Media / Press / Workshops / Writings) but is the richest of them.

**Why side panel, not full-screen:** Tried full-screen first; Ax found it too dominant. Side panel preserves visual context of the page behind, reads as "I'm here when you need me, not in your face," and matches the existing panel system. Full-screen was overkill.

**Why not a floating bubble:** Intercom-style floating chat reads as customer support and feels bolted-on. The side panel still gives the agent enough room for citations + follow-up chips without crowding.

**Anatomy:**
- Header: agent identity (✦ mark + "Ax's agent" name + sub-line) on the left, online status pill + close button on the right
- Empty state: large Fraunces greeting + sub-explanation + 5 suggested starter prompts as chips
- Conversation: user turns right-aligned (rounded bubble), bot turns left-aligned (✦ author label + plain text)
- Bot turn footer: numbered inline citations <span class="cite">1</span> embedded in prose, source list below, follow-up chips below that
- Input: persistent at bottom with disclaimer "Local model · Qwen 2.5 7B · grounded in axali.me corpus"

**Streaming behavior:** Word-by-word with 18–44ms jitter between tokens. Brief 450ms "thinking" pause before stream starts (typing dots indicator). Cursor (blinking accent rectangle) at the streaming tip. This mimics real LLM streaming and matches user expectation set by ChatGPT / Claude.

**Citations:** Inline `<span class="cite">N</span>` references in prose, with a source list below the response. Each source is a link (Studio89, Substack post URL, project page). This is the trust mechanism — visitor can verify what the agent claims.

**Follow-ups:** Each bot response ends with 2–3 follow-up chips that route to other canned responses. These both extend the conversation and route visitors toward the right action (book a workshop, see a project, read an essay).

**Entry points:**
1. Talk door in hero (4th door) — primary path
2. "Talk to Ax →" button in top nav (sticky, accent-styled) — secondary path
3. (Future) Specific cards in the timeline might have a "Ask Ax about this →" link

**Future / not yet implemented:**
- Actual RAG against the SQLite + sqlite-vec corpus
- Ollama streaming integration via Next.js API route
- Conversation persistence (anonymous, per-session)
- Rate limiting / abuse prevention
- Cite-click behavior (click a citation → opens the source in a slide-out panel)
- "Email this conversation to Ax" if the visitor wants to follow up out-of-band

**How to apply:** When the agent is wired to real inference, preserve this UX. The streaming, citation, and follow-up patterns are core to the trust model. Don't replace this with a generic chat widget.
