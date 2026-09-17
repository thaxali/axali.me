# Eval plan — axali.me Studio rebrand + Studies gallery

## Definition of Done per phase

**Phase 1 (Milk + Veggies)**
- [ ] Color tokens reconciled to exact Studio values (light + dark), including dark-mode anchor swap to #FF5021.
- [ ] Typography swapped to Nacelle / Newsreader / IBM Plex Mono (pending font files from Ax) with correct role mapping (names/says/measures) and the documented type scale.
- [ ] Landing page rebuilt on-brand, full-breadth positioning preserved (no content cut).
- [ ] "Products and systems" index renamed/restructured into "Studies" with `Study NNN` numbering + tag system (Product Design / Research / Accessibility / Side Projects / etc.).
- [ ] 6 flagship studies (Seena Labs, Dytective, The Studio, Apple Vision Pro, Amazon/Bilt, 3rd Brain) have full case-study depth under the new template.
- [ ] Site reviewed by Ax via preview before push to live repo/domain.

**Phase 2 (Bread + Protein + Cake)**
- [ ] Remaining ~17 existing project entries migrated into the Studies numbering.
- [ ] New side-project entries added (nanoCal, nanoPad, etc.).
- [ ] Shareable curated-view links working (e.g. a "Product Design" filtered URL).
- [ ] One delight layer shipped (illustration or motion per study).

## Evaluation method
- Manual visual review by Ax via a preview link/local build before anything is pushed to the live repo.
- Spot-check color tokens against `ax-colour-tokens.css`/`.json` once available.
- Cross-browser/mobile check before final push (site is public-facing, mobile matters for recruiters).

## Storage / tracking
- This repo (`thaxali/axali.me`), in `.design-twice/`, alongside the existing root-level dated `.md` convention already used in this project.

## Problems log convention
- Append dated entries to `PROBLEMS-LOG.md` in this folder as issues surface; don't fix silently mid-build without noting what was found.
