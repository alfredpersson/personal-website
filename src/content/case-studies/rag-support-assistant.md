---
title: "RAG support assistant"
problem: "Placeholder problem statement pending Task 9 approved copy."
role: "Sole builder"
decisions:
  - decision: "to classify queries before retrieval"
    because: "not every question needs retrieval"
    measuredBy: "routing accuracy on a labeled set"
  - decision: "to gate answers on confidence"
    because: "a wrong answer costs more than an escalation"
    measuredBy: "escalation precision"
  - decision: "to add self-critique before responding"
    because: "faithfulness failures were the dominant error"
    measuredBy: "judge-scored faithfulness"
headlineNumber: "71% hit@5, 4.80/5 faithfulness across 7 experiments"
status: live
order: 3
---
Deep layer arrives in Task 9.
