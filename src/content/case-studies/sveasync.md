---
title: "SveaSync: multi-tenant AI assistant platform"
problem: "Small hospitality businesses answer the same guest questions all day. Staffing for it costs more than it returns, and a bot that answers wrongly in the business's name loses customers."
role: "Sole architect and engineer"
decisions:
  - decision: "to route risky conversations to a human with a traffic-light escalation protocol"
    because: "an assistant answering in the company's name cannot afford a confident wrong answer"
    measuredBy: "routing correctness: the share of conversations that end in the right place, with the assistant or with a person"
  - decision: "to convert every production error into a permanent CI test case"
    because: "prompt and model changes silently reintroduce old failures otherwise"
    measuredBy: "recurrence of known failures: a failure that has a test must not appear again in a later release"
  - decision: "to isolate tenants with schema-per-tenant Postgres"
    because: "one business's data must never surface in another business's answers, and each business's data has to be exportable as a unit"
    measuredBy: "a business's complete dataset exports as one schema"
headlineNumber: "In production since July 2026"
status: live
order: 2
---

SveaSync is an AI assistant managed service for small hospitality and events businesses, run with my co-founder and deliberately time-boxed ahead of our move to Stockholm. I architected and built the platform end to end; the assistant has been live at [sveasync.com](https://sveasync.com) since July 2026.

The assistant answers guest questions in the business's website chat, with WhatsApp as an add-on channel through 360dialog in Coexistence mode: the business owns its number and Meta Business Portfolio and keeps using WhatsApp normally alongside the assistant, so it is never locked out of its own customer channel.

Quality is handled as a system. Incoming messages pass risk classification and deterministic guardrails before anything reaches a model, and conversations the system is not confident about escalate to a human under a traffic-light protocol. When something goes wrong in production, the error becomes a permanent CI test case, so the same failure cannot ship twice. The assistant also discloses that it is an AI in its greeting, which is EU AI Act transparency compliance running in production.

A business keeps its details in a Google Sheet the assistant syncs from automatically. The owner edits in a tool they already know, so the routine "please update this on the bot" request never has to happen. The handover model is build-and-own: a perpetual non-transferable license, so a business can keep running its own system if the company closes.
