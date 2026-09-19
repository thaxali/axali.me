# AGENTS.md

Shared instructions for every coding agent (Claude Code, Codex) working in this repo.
`CLAUDE.md` imports this file, so edit rules here only.

## Work Protocol (applies to every agent, every session)

1. Start from a Linear issue. This repo's work lives in team THE STUDIO (prefix AX),
   project "axali.me". If the user names no issue, ask for one or create it before
   changing files.
2. Branch = the issue's Linear branch name (e.g. `ax/ax-40-homepage-hero`).
   One issue, one branch, one PR. Never commit directly to `main`.
3. One writer per issue. If another agent owns the branch, review only.
4. Before ending a session, comment on the Linear issue:
   Done / Not done / Next step. Then push.
5. Finished = PR merged into `main`. After merge, delete the branch
   (and its worktree, if one was created).

## Project notes

- Static site served at axali.me (see `CNAME`, `.nojekyll`). `main` is what is live,
  so anything merged is published.
- THIS REPO IS PUBLIC and its root is served live at axali.me. Never add notes,
  plans, research, interview material, or prototypes here. Only files the site serves.
- Private project notes live next door in `../axali.me-notes/` (not published).
  `../axali.me-notes/MEMORY.md` is the index of project decisions; read it before
  design or architecture work, and the files it links for detail. Write new notes there.
- `.design-twice/` holds settled design decisions. It is gitignored (local only).
  Do not re-ask questions answered there, and never `git add -f` it.
- Working preference: frontend prototype first, then backend. Port copy and images
  from studio89.design rather than recreating them.
