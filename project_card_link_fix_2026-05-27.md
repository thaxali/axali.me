# axali.me project card link fix

Date: 2026-05-27

## Issue

Ax noticed that links inside project descriptions appeared broken. The project URLs were still present and absolute, but the card interaction layer had grown complex: hover previews, dwell pinning, click-to-expand detail cards, close buttons, and document-level dismissal were all operating around the same nested card surface.

## Fix

The prototype now gives links inside initiative cards their own pointer layer and stops link pointer/click events from bubbling into the card pin/detail handlers. The handlers do not call `preventDefault`, so the browser can still follow the actual anchor.

## Verification

Static verification after the fix found:

- 23 product/system entries
- 15 project links
- 0 invalid href schemes
- script syntax passes via `new Function(script)`
