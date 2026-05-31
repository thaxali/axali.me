# axali.me Design Direction Notes: Loved References

```yaml
project: axali.me
type: design_direction
status: working
created: 2026-05-23
visibility: private
sensitivity: none
source:
  - current design review session
  - design_reference_portfolio_scan_2026-05-23.md
  - direct CSS/markup inspection of referenced sites
```

## User Direction

Ax's reactions:

- Loved the Mike Matas reference, especially the composed portrait + compact proof.
- Loved LoveFrom's vibe.
- Loved Kenneth Kuh's design aesthetic.
- Wants a gallery of work for the MVP with just thumbnail + abstract.
- Goal is breadth, not depth, because axali.me is not a portfolio. It is a public profile meant to communicate value fast and make Ax easy to grasp.
- Maddie Simens and Zach Johnston's simplicity are goals.
- Garrett Olinger and Bradley Haynes are not the direction.

## Strategic Translation

The MVP should not become a conventional case-study portfolio. It should be a designed public profile / dossier with:

- fast identity
- highly curated proof
- broad work gallery
- short abstracts
- minimal explanation per item
- confident typography
- strong information architecture
- no full case-study depth unless later requested

The closest synthesis:

> Mike Matas composition + LoveFrom restraint + Kenneth Kuh archive/gallery logic + Maddie/Zach simplicity.

## Reference 1: Mike Matas

URL: https://classic.mikematas.com/

## What Ax Loved

- Dark, cinematic presentation.
- One large portrait does a lot of trust work.
- Bio is compact but proof-heavy.
- Work list appears inline inside the bio, not as a portfolio grid.
- Personal detail at the end makes him human without oversharing.

## Color Scheme

Observed:

- Page background: deep charcoal / near-black, `#141518`.
- Card/image area: dark photographic tones.
- Text: white with reduced opacity.
- Links: white, underlined by browser/default link styling or simple treatment.
- Side nav: white with opacity states.

Design quality:

- Not pure black. The slightly softened charcoal makes the page feel quieter and more photographic.
- Text is not bright white everywhere; the opacity creates depth.

Ax translation:

- A dark intro panel could work if paired with a strong portrait.
- Use reduced-opacity white for secondary copy.
- Avoid loud accent colors in the hero.

## Layout

Observed:

- Browser-centered composition.
- Fixed-size central "card" around 820px wide.
- Large portrait image fills the card.
- Bio text overlays / sits on the right side of the image.
- Left-side vertical nav with uppercase labels.
- The page feels like a single object floating in space.

Ax translation:

- MVP hero could be a composed object: portrait + compact canonical bio + proof links.
- Left rail or small side labels could work for anchors.
- The page should feel intentionally composed, not like a normal SaaS landing page.

## Typography

Observed:

- Helvetica Neue stack.
- Light body weight.
- Small body copy around 14px / 19px.
- Uppercase nav.
- Minimal weight contrast.

Ax translation:

- Use restrained neo-grotesk for the factual layer.
- Keep body copy compact and precise.
- Use typographic scale sparingly; too many giant headings would break the Matas/LoveFrom restraint.

## Reference 2: LoveFrom

URL: https://www.lovefrom.com/

## What Ax Loved

- The vibe: extreme restraint, confidence, quiet.
- It feels expensive and intentional without showing much.
- It lets type, whitespace, and interaction carry the brand.

## Color Scheme

Observed:

- Background: `#FAFAFA`.
- Primary text: `#000000`.
- Link hover/focus: black at reduced opacity.
- No decorative palette.

Design quality:

- The near-white background is warmer and softer than pure white.
- The palette is binary: black, near-white, opacity.

Ax translation:

- Use a near-white base for the main dossier.
- Keep most of the site monochrome.
- Add at most one accent, and only where it earns its place.

## Layout

Observed:

- Centered wordmark.
- Full-viewport composition.
- Info panel exists, but the first impression is radically minimal.
- The page is about presence more than content density.

Ax translation:

- Use this restraint in the opening, but do not copy the low-information model.
- Ax needs a dossier; LoveFrom alone would be too withholding.
- The first screen should be calm and confident, not content-crammed.

## Typography

Observed:

- Custom LoveFrom serif.
- Huge responsive wordmark type.
- Italic links.
- Serif gives luxury, warmth, and human craft.

Ax translation:

- Consider pairing a refined serif for thesis/statement moments with a neo-grotesk for proof.
- A serif wordmark or editorial statement could make "Everything is Designed" feel more authored.

## Reference 3: Kenneth Kuh

URL: https://kennethkuh.info/

## What Ax Loved

- Great design aesthetic.
- Dense archive/gallery structure.
- Work breadth is visible fast.
- Project entries can carry image + title + short category/status.
- Confidential/WIP labels do not feel awkward.

## Color Scheme

Observed:

- Background: white, `#FFFFFF`.
- Primary text: black, `#000000`.
- Main text opacity variants: `rgba(0,0,0,0.85)`, `rgba(0,0,0,0.7)`, `rgba(0,0,0,0.6)`.
- Muted grey labels: `#B7B7B7`.
- Accent hover / active outline: green around `#0FCE83` / `rgb(14,207,130)`.

Design quality:

- Mostly monochrome, with a single sharp green accent.
- Lines/rules are black and thin but confident.
- Grey labels create hierarchy without extra decoration.

Ax translation:

- A tiny accent color could be used for active links, status tags, or citation marks.
- The work gallery should use muted labels: `AI`, `Research`, `Product`, `Workshop`, `Confidential`, `Current`.
- We can use thumbnail + abstract cards without making them feel like marketing cards.

## Layout

Observed:

- Left fixed/overlay navigation panel.
- Content/gallery area uses grid columns.
- A prominent text list can coexist with image galleries.
- Horizontal rules divide work entries.
- Dense, archive-like work list.
- Mobile has a green bottom nav strip.

Ax translation:

- MVP can use a left rail or top rail for identity/navigation.
- Work gallery should be an archive, not a case-study grid.
- Each work item: thumbnail, title, 1-2 line abstract, proof tag, maybe "what this proves."
- Use thin rules and tight spacing to make breadth scannable.

## Typography

Observed:

- Neue Haas Grotesk for large headings / project list.
- Monument Grotesk Variable for bodycopy / smaller system text.
- Small labels around 1.0-1.2rem.
- H2 around 2.2rem with tight 1.1 line-height and slight positive letter spacing.
- Work list typography is big enough to scan but not decorative.

Ax translation:

- A grotesk system fits the factual/proof layer.
- Use one body/system face and one display/editorial face at most.
- Project titles should be crisp and prominent; abstracts should stay quiet.

## Reference 4: Maddie Simens

URL: https://maddie.ai/

## What Ax Loved

- Simplicity as a goal.
- Tiny amount of content, but it orients immediately.
- Current role + previous roles create enough credibility.

## Color Scheme

Observed day mode:

- Background: `#F6F6F7`.
- Primary text: `#403E43`.
- Secondary grey: `#9F9EA1`.
- Underline hover grey: `#8A898C`.

Observed night mode:

- Background: `#221F26`.
- Primary text: `#FFFFFF`.
- Body text: `#C8C8C9`.
- Secondary grey: `#8A898C`.

Design quality:

- Slight purple-brown undertone in the dark mode.
- Light mode is soft grey, not white.
- Typography carries the page; no images needed.

Ax translation:

- The page can be text-only and still feel designed.
- A soft off-white or warm near-black palette would fit.
- Role history can be a quiet credibility stack.

## Layout

Observed:

- Skeleton grid.
- Max-width container around 704px.
- Large top margin on desktop.
- Offset columns create asymmetry.
- Current identity first, then "previously" section.
- 48px rhythm between content chunks.

Ax translation:

- We can use asymmetry without complexity.
- A single-column mobile-first page with offset desktop modules would feel right.
- Keep spacing rhythmic: 24 / 48 / 96 / 120px.

## Typography

Observed:

- Neue Haas Grotesk regular and medium.
- Body: 16px / 24px.
- H1: 20px / 28px, medium.
- H2: 16px / 24px, medium.
- H4: 12px / 20px, uppercase, letter-spaced 1.5px.

Ax translation:

- The MVP should not be over-typographed.
- Small, precise type can feel more premium than huge portfolio headings.
- Uppercase micro-labels can work for section labels like `KNOWN FOR`, `SELECTED WORK`, `CURRENTLY`, `AVAILABLE FOR`.

## Reference 5: Zach Johnston

URL: https://zachjohnston.com/

## What Ax Loved

- Simplicity as a goal.
- One statement, one credential stack, one row of icons/links.
- Almost no friction.

## Color Scheme

Observed:

- Background: `#FAFAFA`.
- Primary text: `#000000`.
- Secondary text: `#616161`.
- Accent: red, `#FF0000`, used for name.

Design quality:

- One accent, used once.
- Near-white background.
- Grey body text keeps the page calm.

Ax translation:

- A single accent could work if disciplined.
- If using Ax's existing red signature language, keep it sparse.
- The page should be linkable and instantly digestible.

## Layout

Observed:

- Centered narrow column.
- Container max-width around 508px.
- 24px padding.
- Body vertically centered / distributed.
- Tiny social/link footer.
- Icon row around 36px icons.

Ax translation:

- Use a narrow canonical intro block at the top.
- Do not let the first screen sprawl.
- The proof/gallery can expand later down the page.

## Typography

Observed:

- Instrument Sans.
- H1 regular, small-ish, red.
- H2 40px, tight, black.
- Body grey, line-height around 1.4.
- Letter spacing around 0.01em / -0.01em.

Ax translation:

- Instrument Sans-like grotesk could work if not too generic.
- Use clear difference between identity line and body copy.
- Avoid too many weights.

## References Explicitly De-Prioritized

## Garrett Olinger

Why not it:

- Too generic / too close to a standard minimal portfolio.
- Does not add enough distinctive structure for Ax's public-profile problem.

Keep:

- sparse navigation
- compactness

Drop:

- overall vibe as primary direction

## Bradley Haynes

Why not it:

- Too case-study / consulting portfolio.
- Too much "portfolio project" energy for an MVP that should show breadth and value fast.

Keep:

- clarity of project abstracts
- problem/outcome thinking, but only in miniature

Drop:

- case-study-first architecture
- conventional selected-work portfolio feel

## Emerging axali.me Visual Direction

## Palette Direction

Base:

- near-white: `#FAFAFA` or `#F6F6F7`
- primary black: `#000000` or softened charcoal
- body grey: `#616161` / `rgba(0,0,0,0.6-0.7)`
- muted label grey: `#9F9EA1` or `#B7B7B7`

Dark module option:

- charcoal: `#141518` or `#221F26`
- white: `#FFFFFF`
- body grey: `#C8C8C9`
- secondary grey: `#8A898C`

Accent options:

- disciplined red, if continuing Ax signature / Zach-like accent energy
- Kenneth green `#0FCE83` only if the site wants a sharp contemporary design-system signal
- avoid using both red and green prominently in the MVP

Recommendation:

> Main page near-white and black. One dark portrait/proof module inspired by Mike Matas. One disciplined accent at most.

## Layout Direction

Core:

- single page
- top intro very sparse
- designed infobox / canonical facts
- compact lead summary
- gallery of work as breadth proof
- each work item: thumbnail + title + abstract + tag
- no full case studies in MVP

Borrow:

- Mike: portrait + compact proof text as composed object
- LoveFrom: calm first impression and radical restraint
- Kenneth: archive/gallery system, thin rules, compact labels
- Maddie: asymmetric grid and quiet role history
- Zach: narrow intro column and single-accent confidence

Avoid:

- conventional portfolio cards with big rounded rectangles
- multiple loud sections competing
- logo-wall-first proof
- persona-picker homepage
- case-study depth before breadth

## Typography Direction

Likely system:

- primary grotesk: Neue Haas Grotesk / Helvetica Neue / Instrument Sans-like
- optional editorial serif: LoveFrom-inspired serif moment for "Everything is Designed" or thesis block
- micro-labels: uppercase, 12px-ish, letter-spaced
- body: 15-17px, line-height 1.45-1.6
- project titles: crisp, 24-36px depending layout

Principles:

- minimal font count
- restrained weights
- no oversized hero typography unless the line is truly iconic
- let spacing, alignment, and contrast do the work

## Work Gallery MVP Direction

Purpose:

- show breadth fast
- make Ax's value easy to grasp
- avoid portfolio-depth trap

Card/unit structure:

```text
[thumbnail]
Project / Institution
1-2 sentence abstract.
Tags: AI / HCI / Product / Research / Accessibility / Workshop / Founder / Confidential
What this proves: optional short phrase
```

Possible layout:

- desktop: 2 or 3 column gallery, but not decorative card-heavy
- mobile: single-column stacked
- project image ratio consistent
- thin dividers or simple whitespace instead of heavy card chrome
- abstracts should be terse and canonical

## MVP North Star

The page should feel:

- simple like Maddie and Zach
- restrained like LoveFrom
- proof-rich like Mike
- archive-smart like Kenneth
- unmistakably Ax

It should not feel:

- like a product designer job-search portfolio
- like a consulting case-study site
- like a startup landing page
- like a maximalist personal brand page

