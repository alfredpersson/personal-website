---
title: Case Studies
description: AI engineering case studies by Alfred Persson. Real projects demonstrating retrieval pipelines, failure handling, and user-facing AI features.
---

# Case Studies

Real projects showing how I think about AI product engineering. The focus is on behaviour design, failure handling, evaluation, and what it takes to go from demo to production.

<div class="grid cards" markdown>

-   [Integrated vs Chat AI Feature](integrated-vs-chat-demo.md)

    ---

    A B2B SaaS-shaped lead enrichment feature built two ways, with the same model and the same eval set. The integrated build uses a strict tool schema, extended thinking, and a per-claim grounding rule. The chat build uses a task-describing system prompt and nothing else. The scorecard measures the architectural gap and surfaces a dated regression-and-fix incident. Live demo, 73-item eval, Sonnet 4.6, Modal + Neon + Next.js.

-   [RAG Support Assistant](rag-support-assistant.md)

    ---

    A customer support RAG pipeline built around what happens when the AI *can't* answer confidently. The design goal isn't maximum retrieval accuracy. It's making sure every failure mode has a specific, intentional response path. Five-category classification, confidence gates, self-critique, and human escalation routing. Built with OpenAI, ChromaDB, FastAPI, and a custom chat widget.

</div>
