---
title: "Retrieval ablation agent"
problem: "Planned for Q4: an agent that ablates retrieval pipeline components one at a time, because pipeline gains are otherwise unattributable."
role: "Sole builder (planned)"
decisions:
  - decision: "to deploy on AWS"
    because: "that is the stack gap this project exists to close"
    measuredBy: "the agent running end to end on AWS"
  - decision: "to ablate one component at a time against a fixed eval set"
    because: "attribution requires isolation"
    measuredBy: "per-component accuracy deltas"
  - decision: "to hand-build the agent loop"
    because: "the point is understanding, not shipping speed"
    measuredBy: "a loop with no framework dependency"
headlineNumber: "Reserved: Q4 2026"
status: reserved
order: 5
---

Reserved for Q4 2026.
