---
title: "Design Problem: Dwell-to-Pin Popovers"
created: 2026-05-24 00:17 EDT
agent: ada
visibility: public-candidate
sensitivity: none
project: axali.me
prototype: prototypes/single-page-v1/index.html
---

# Design Problem: Dwell-to-Pin Popovers

## Why This Was Worth Capturing

During the axali.me single-page prototype work, we hit a small but meaningful interaction problem: the site used hover popovers to explain linked initiatives like Seena Labs, Studio89 Design, and Everything is Designed.

The hover interaction felt elegant when the card was only informational. But once the card contained an interactive link, hover became fragile. A visitor could reveal the card, see the link, try to move the cursor into the card, and accidentally dismiss the very thing they were trying to use.

That made the interaction break its own promise: it invited exploration, then punished the reach.

## The Design Problem

The popover had to support three visitor states:

- Passing curiosity: "What is this?"
- Intentional inspection: "Let me read the card."
- Committed action: "I want to click the link inside."

Plain hover handled the first state, but not the second or third. Plain click-to-pin handled committed action, but it lacked an affordance. A visitor had no obvious reason to know that clicking the text would make the card sticky.

The deeper problem was not just technical. It was about intent detection. The interface needed to tell the difference between passing over something and meaning to stay with it.

## Ada's First Solution

My first solution was practical and conventional:

- Keep hover as a lightweight preview.
- Add a forgiving hover bridge between the trigger and the card so the popover would not vanish during the cursor move.
- Add a subtle plus sign to linked names so they looked openable.
- Make click pin the card.
- Add outside-click and Escape dismissal behavior.

This solved the mechanical usability problem. It made the interaction usable, accessible, and less brittle. But it still leaned on a hidden rule: click the name to keep the card open.

The plus sign helped, but it did not fully teach the behavior.

## Ax's Solution

Ax reframed the interaction around dwelling.

The idea:

- Hover should still work for quick passing previews.
- If the visitor dwells for about a second, the card should become sticky automatically.
- While dwelling is happening, the card should show feedback, like a subtle border shimmer.
- Once the card becomes sticky, a close button should animate in.

This is the better product idea because it maps the interaction to human intent:

- Passing over something means curiosity.
- Staying over something means interest.
- A pinned card means the system understood the visitor wants to engage.

The shimmer is important because it makes the invisible timer visible. It tells the visitor, "I see you staying here; I am about to hold this open for you."

The close button is also important because a pinned object needs an explicit exit. Once the system changes state on behalf of the visitor, it owes them control.

## Implemented Prototype Behavior

The current prototype now uses this interaction model:

- Hover reveals the popover as a temporary preview.
- Pointer dwell for about 1 second pins the popover.
- The border shimmers during the dwell period.
- A close button animates in after the card pins.
- Clicking the trigger still pins or unpins the card.
- Clicking outside or pressing Escape closes pinned cards.
- Closing a card suppresses immediate re-hover reopening until the pointer leaves and comes back.

## Design Principle

Good interaction design does not just expose information. It recognizes intent.

Hover is curiosity.

Dwell is attention.

Click is commitment.

The UI should not treat those as the same gesture.

## Substack Candidate

Working title options:

- Hover Is Curiosity. Dwell Is Intent.
- When a Hover Becomes a Door
- Designing for Dwell
- The Tiny Interaction That Taught My Website to Notice Intent

Potential thesis:

> A small popover bug on my personal website became a useful reminder that interaction design is often about giving software a better sense of human intent.

### Draft

I was working on my personal website tonight, the kind of small, quiet page that is supposed to explain who I am without turning me into a resume.

The design was intentionally simple: mostly text, lots of white space, a few links to the things I am building and writing. Some of those links had little hover cards. If you hovered on "Seena Labs," a small card explained what it was and gave you a link to visit the site.

It felt elegant for about five seconds.

Then the problem appeared.

The card had a link inside it. But as soon as you moved your cursor from the text toward the card, the hover state could disappear. The interface was saying, "Here is something you can click," while making the act of clicking it physically unstable.

That is one of my favorite kinds of design problem: tiny, almost embarrassing, and actually about something much bigger.

The first fix was mechanical. Make the hover area more forgiving. Add a small visual cue that the text can open something. Let a click pin the card. Let Escape or an outside click dismiss it.

That made it usable, but it still felt like the interface was hiding a rule. Why would a visitor know to click the label to keep the card open?

The better answer was dwell.

Hover should mean curiosity. If you pass over something, the site can give you a quick preview. But if you stay there for a second, that is a different signal. That is attention. So the card should become sticky automatically.

Now the interaction has three levels:

- Hover previews.
- Dwell pins.
- Click commits.

During the dwell, the card's border subtly shimmers, like the interface is taking a breath before holding the object open. Once it pins, a close button appears. The system made a decision on your behalf, so it owes you a clear way out.

This is the kind of thing I mean when I say everything is designed.

Not decorated. Not branded. Designed.

Every interaction is making a claim about what it thinks the human is trying to do. Sometimes the claim is wrong. Sometimes it treats curiosity as commitment, or attention as an accident, or motion as dismissal.

The work is to notice those mismatches and give the system a better model of the person using it.

That is what good interfaces do at every scale. They listen for intent.

