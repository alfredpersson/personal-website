---
title: "AI Feature Maturity Ladder"
problem: "AI feature adoption problems get treated as prompt problems. Usually something else is holding the feature back, and teams have no structured way to find it."
role: "Author. The framework is a synthesis; the dimension cuts and level rubric are my choices."
decisions:
  - decision: "to score five dimensions independently and let the weakest set the level"
    because: "a feature is constrained by its weakest dimension, not its average"
    measuredBy: "the min-rule stated explicitly in the published rubric"
  - decision: "to give every level both a user-visible signal and a team signal"
    because: "a feature can look adopted while being operationally fragile, and the reverse"
    measuredBy: "both signal columns present for all five levels"
  - decision: "to publish under CC BY-NC-SA and keep the canonical version at one URL"
    because: "a framework earns trust by being public, citable, and versioned in one place"
    measuredBy: "the framework page's revision history"
headlineNumber: "Five dimensions, five levels, weakest dimension sets the score"
status: live
order: 4
---

The Maturity Ladder is a diagnostic framework for user-facing AI products: five dimensions, five levels, and the weakest dimension sets the score. It exists because usage data kept showing adoption stalling for reasons that had nothing to do with the prompt.

The canonical version lives at [/framework/](/framework/), licensed CC BY-NC-SA. The [blog post](/blog/2026/03/25/the-ai-feature-maturity-ladder/) makes the argument for why the framework matters.
