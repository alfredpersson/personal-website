---
title: "obligations-agent: EU AI Act and GDPR obligations for one AI product"
problem: "A tool that takes the facts of one AI product from a short form and a few follow-up questions, and returns a memo with one row per obligation under the EU AI Act and the GDPR: the clause it comes from, what it means for that product, and one action. It is for engineers who know their system in detail and have no lawyer to ask."
role: "Sole builder"
decisions:
  - decision: "to ask with a form and fixed choices first, then let a model choose the follow-up questions inside limits set in code"
    because: "the user knows their system and does not know the law, so the questions have to come from a fact schema written from the regulation text"
    measuredBy: "the share of started intakes that reach a memo, and the share of 'not sure' answers per question"
  - decision: "to decide which regulations, roles and risk tiers apply with rules in code, not a model"
    because: "the same facts must always give the same result"
    measuredBy: "a benchmark of test products with known correct answers"
  - decision: "to quote and link the clause in the official text on every row of the memo"
    because: "a person who is not a lawyer has to be able to check each row"
    measuredBy: "the share of rows that users mark as disputed, and hand labels of the written meaning and action"
headlineNumber: "In progress"
status: reserved
order: 1
---

In progress. The brief and the specification are public at github.com/alfredpersson/obligations-agent.
