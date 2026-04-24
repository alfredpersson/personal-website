---
title: Case Studies
description: AI engineering case studies by Alfred Persson. Real projects demonstrating retrieval pipelines, failure handling, and user-facing AI features.
---

# Case Studies

Real projects showing how I think about AI feature development. The focus is on failure handling, user experience, and what it takes to go from demo to production.

<div class="grid cards" markdown>

-   [RAG Support Assistant](rag-support-assistant.md)

    ---

    A customer support RAG pipeline built around what happens when the AI *can't* answer confidently. The design goal isn't maximum retrieval accuracy. It's making sure every failure mode has a specific, intentional response path. Five-category classification, confidence gates, self-critique, and human escalation routing. Built with OpenAI, ChromaDB, FastAPI, and a custom chat widget.

</div>
