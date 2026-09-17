# axali.me — Studio rebrand + Studies gallery

## Session: 2026-09-16

### Phase 1 — Empathy
- **Audience/goal**: standing career-narrative site for recruiters across product design, head of product, and creative director roles — not narrowly optimized to pass one company's design-execution screen (this followed directly from evaluating Ax's fit for an Apple Senior Product Designer posting, where the gap was: strong HCI/design thinking, thin recent hands-on execution portfolio).
- **Landing page**: stays full-breadth. "Creative Scientist, many facets" positioning is intentional and should not be narrowed to a single-lane portfolio.
- **Flagship case studies (phase 1)**: Seena Labs, Dytective, The Studio (the identity system itself as proof of design-systems craft), Apple Vision Pro, Amazon/Bilt TPM work, 3rd Brain app.

### Phase 2/3 — Divergent solution space & fit
- Existing repo discovered mid-session: `github.com/thaxali/axali.me`, live via GitHub Pages (custom domain `axali.me` via CNAME, root `index.html` is the promoted live file — see `feedback_workflow.md`, `axalime_architecture.md`, `axalime_agent_ux.md`, `project_entry_expansion_2026-05-27.md` for the full prior project history from a May 2026 session, originSessionId e7506d00-9290-483c-a5ce-0636162240c1).
- **Contradiction surfaced & resolved**: the "Studies" gallery concept (numbered `Study NNN`, tagged, filterable) is functionally the same idea as the existing "Products and systems" expandable project index (23 entries already built into `index.html`, with one-line previews, expanded detail cards, source links, company↔project cross-highlighting). Decision: rename/restructure that existing index into the `Study NNN` system rather than building a parallel one.
- **AI agent/RAG chat layer** (side panel, Ollama/Qwen 2.5 7B, self-hosted VPS, sqlite-vec — see `axalime_architecture.md` / `axalime_agent_ux.md`): still wanted, but explicitly deferred to a later phase. This round of work is frontend/content only — no backend/VPS/LLM work.
- **Format decision**: full rebuild of the existing live repo/site (not a fresh Artifact, not a separate portfolio site) — apply the Studio design tokens (color, type, mark, motifs) on top of the existing structure, don't replace the underlying "4 doors" hub architecture without cause.
- **Naming**: Studies gallery shares ONE numbering system with EiD's "Study NNN" build-series numbering (per Ax's prior "The Study" masthead decision) — one archive, tags decide which curated views (e.g. a "Product Design" portfolio link) a study appears in.

### Phase 4 — Prioritization (Chef's Kitchen)
- **Phase 1 (Milk + Veggies)**: apply Studio design tokens site-wide; rebuild landing page on-brand (keep full-breadth positioning); ship Studies gallery using the existing project-index infrastructure, renamed/restructured to `Study NNN` + tags/filtering; the 6 confirmed flagship studies get full case-study treatment.
- **Phase 2 (Bread + Protein + Cake)**: backfill remaining projects (nanoCal, nanoPad, publications, workshops, the other ~17 existing entries) into the Studies numbering; add shareable curated-view links (e.g. a clean "Product Design" portfolio URL); one delight layer — illustration/motion per study using the existing illustration style (loose gestural watercolor-and-ink, one small orange mark accent).
- AI agent/RAG layer is a **future phase**, not in scope for phase 1 or 2 above.

### Phase 5 — Testing & iteration
- Ax reviews each phase via a preview before anything ships to the live repo/domain.
- Working notes tracked here in `.design-twice/`, alongside the repo (not just in personal memory), since this project already has its own on-disk history (`MEMORY.md` and the dated `.md` files at repo root) — this file supplements, doesn't replace, that convention.

## Findings from reconnaissance of the live repo (2026-09-16)
- `index.html` (root) is the live, promoted single-page site — 4,614 lines, deeply bespoke: every one of the 23 existing project entries has hand-tuned per-`data-product-id` CSS (detail-card layout, imagery, colors) rather than a generic template. A "full rebuild" needs to either (a) generalize this into a real template + data model, which is a bigger rewrite, or (b) keep the bespoke-per-entry pattern and extend it for new entries — TBD which, likely (a) given the goal is a maintainable growing archive.
- **Good news**: the site's accent color `--activity: #EC622C` already exactly matches the Studio anchor color (light mode). Dark mode does NOT yet swap it to the Studio's dark-mode anchor `#FF5021` — needs adding.
- Neutrals (`--paper: #FAFAFA`, `--ink: #111111`) are close to but not exactly the Studio ramp (`Paper #FBFBFE`, `Ink #101010`) — should be reconciled to exact tokens.
- Current font is Google-hosted "Roboto Flex" (variable font) — needs to be replaced with the Studio type system (Nacelle for display/UI, Newsreader for long-form body, IBM Plex Mono for data/metadata, "By Ax" for the ceremony/signature layer). **Blocker**: Nacelle and "By Ax" are custom font files that live in Ax's Google Drive ("The Studio"), not available from this cloud session — need Ax to supply the font files or connect that Drive folder before the typography pass can be exact (Newsreader and IBM Plex Mono are both on Google Fonts and don't block).
- The prior May-2026 architecture doc says "Aesthetic direction: not yet locked — three mockups delivered (Editorial/Playful/Product), awaiting Ax's pick" — but the live site clearly has since been designed and shipped (10 commits including "Publish single-page portfolio site" and "Promote site to root"), so that note is stale; the live site's current design (not the Studio system) is what's actually live today.

## Open items for Ax
1. Supply (or connect Google Drive access to) the Nacelle and "By Ax" font files so the typography pass can be exact rather than a fallback substitute.
2. Confirm whether the "Products and systems" index should be generalized into a real reusable template (recommended, since the archive is meant to keep growing) or kept as bespoke-per-entry CSS extended for new entries.
