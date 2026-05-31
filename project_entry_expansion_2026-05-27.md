# axali.me project entry expansion

Date: 2026-05-27

## What changed

The `single-page-v1` prototype now treats the Products and systems column as an expandable project index, not just a list of shipped work. Each project has:

- a compact one-line preview for hover and quick scanning
- a full expanded description for intentional reading
- source links where a credible public handle exists, including press, Microsoft Research, ACM/DOI, and journal links
- company/project relationship metadata so dwelling or opening a company can highlight related projects, and opening a project can highlight the related company

## Source documents consulted

- `Dr-AxAli-full-Product.pdf`
- `Dr. Abdullah Ax Ali CV - Sep 2025.pdf`
- `My career.pdf`
- existing axali.me extraction notes from `source_extraction_companies_products_2026-05-23.md`

## Project entries created

- Seena Labs' AI Ambient Ethnographer
- 3rd Brain: AI Organizer
- Bilt Dining Program
- Bilt Wallet
- Bilt x Lyft Rewards Integrations
- Bilt x point.me Flight Search
- Amazon Low-Price Bundling Program
- Amazon Bundle Tracker and Promo Surfaces
- Itau Mobile Loan App
- FDA Approval Research Platform
- EV Charging Platform Prototype
- Apple Vision Pro Multimodal Input Interaction
- Distributed Interaction Design: Designing Technologies in the Age of Social Distancing
- I am Iron Man: Designing VR Gestures Using Priming with Sci-Fi Movies
- Anachronism by Design: Reimagining the Desktop Set of Icons
- Crowdlicit: A Two-Sided System for Running Remote Co-Design Sessions
- Crowdsensus: ML Approach for Large-Scale Qualitative Data Analysis
- Dytective: A Game to Detect Dyslexia
- Prototype to Evaluate How Searchers with Dyslexia Search the Web
- ML-Based Self-Adapting Accessible Interfaces
- Mobile Gesture Authentication System
- Sequential Gestural Passcodes Using Google Glass
- Insterpreter

## Design decision

The index now supports two reading modes:

1. Passing attention: a visitor hovers and sees a small card with a one-line summary.
2. Intentional attention: a visitor clicks the project entry or selects Learn more, and the card expands into a larger centered detail surface.

This keeps the page quiet and scannable while allowing deeper proof when a high-agency opportunity-maker shows interest in a specific work thread.

## Verification

Static verification found:

- 23 product/system entries
- 0 missing previews
- 0 missing expanded descriptions
- 13 detail links across press, publication, and research sources
- script syntax passes via `new Function(script)`

The in-app browser refused to reload the current `file://` URL under its URL policy, so visual verification should be done by manually refreshing the currently open file or by serving the prototype over a local HTTP preview in a future pass.
