---
title: "SveaSync: multi-tenant AI assistant platform"
problem: "Small hospitality businesses answer the same guest questions all day. Staffing for it costs more than it returns, and a bot that answers wrongly in the business's name loses customers."
role: "Co-founder and technical lead, sole architect and engineer"
decisions:
  - decision: "to route risky conversations to a human with a traffic-light escalation protocol"
    because: "an assistant answering in the company's name cannot afford a confident wrong answer"
    measuredBy: "routing correctness graded on logged conversations, instrumented from the first conversation"
  - decision: "to convert every production error into a permanent CI test case"
    because: "prompt and model changes silently reintroduce old failures otherwise"
    measuredBy: "recurrence of known failures, which the suite holds at zero across releases"
  - decision: "to isolate tenants with schema-per-tenant Postgres"
    because: "one client's data must never surface in another client's answers, and offboarding needs each client's data exportable as a unit"
    measuredBy: "handover: a client's complete dataset exports as one schema"
headlineNumber: "In production since July 2026"
status: live
order: 1
---

SveaSync is an AI assistant managed service for small hospitality and events businesses, run with my co-founder and deliberately time-boxed ahead of our move to Stockholm. I architected and built the platform end to end; the assistant has been live at [sveasync.com](https://sveasync.com) since July 2026.

The assistant answers guest questions in the business's website chat, with WhatsApp as an add-on channel through 360dialog in Coexistence mode: the client owns their number and Meta Business Portfolio and keeps using WhatsApp normally alongside the assistant, so they are never locked out of their own customer channel.

Quality is handled as a system. Incoming messages pass risk classification and deterministic guardrails before anything reaches a model, and conversations the system is not confident about escalate to a human under a traffic-light protocol. When something goes wrong in production, the error becomes a permanent CI test case, so the same failure cannot ship twice. The assistant also discloses that it is an AI in its greeting, which is EU AI Act transparency compliance running in production.

Clients keep their business details in a Google Sheet the assistant syncs from automatically. They edit in a tool they already know, so the routine "please update this on the bot" request never has to happen. The handover model is build-and-own: a perpetual non-transferable license, so winding the company down leaves each client running their own system, with support ending cleanly at handover. That exit was designed in from the start.
