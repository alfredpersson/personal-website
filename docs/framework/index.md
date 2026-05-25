---
title: AI Feature Maturity Ladder
description: A 5-level framework for assessing user-facing AI products, scored across product fit, UX & trust, output quality, measurement, and ops.
keywords: AI feature maturity, AI maturity model, AI behaviour framework, AI evaluation, AI UX, RAG maturity, AI product engineering
author: Alfred Persson
canonical_url: https://www.alfredpersson.com/framework/
---

# AI Feature Maturity Ladder

A diagnostic framework for user-facing AI products, with five dimensions (Product-Journey Fit, UX & Trust, Output Quality, Measurement & Feedback, Ops & Ownership) each scored on a five-level scale. The point is to find the weakest dimension, because that's what will eventually constrain the product even when current usage looks fine.

This page is the reference. The [blog post](../blog/posts/ai-feature-maturity-ladder.md) makes the argument for why the framework matters, and the [audit](../audit/index.md) is the service that applies it.

## The five levels

Each level has both a user-visible signal and a team or ops signal. Both sides matter, because a feature that looks adopted can still be operationally fragile, and a well-run feature can still go unused.

| Level | Name | User signals | Team & ops signals |
| --- | --- | --- | --- |
| 1 | Experimental Add-On | Few users try it. The ones who do get unreliable outputs and rarely come back. | No measurement, no clear owner, prompts edited ad hoc. |
| 2 | Helpful Sidekick | Some users find it useful when inputs are simple, but most stick with the non-AI path on anything tricky. | Anecdotal quality signal. Basic logging, no eval set, no error analysis. |
| 3 | Integrated Co-Pilot | Use extends well beyond early adopters, though the manual path remains the default for many. | Eval set in place, errors analyzed, named owner, regression tracking. |
| 4 | Optimized Workflow Partner | Most of the user base reaches for it by default because outputs hold up on messy inputs. | Business metric tracked, live monitoring, guardrails versioned, incident response defined. |
| 5 | Strategic Growth Engine | Customers cite the feature as a reason they chose the product, and competitors haven't matched the experience. | Each dimension is quantitatively managed, with sustained improvement cadence quarter over quarter. |

## The five dimensions

A feature is at a given level only when it meets the criteria across all five dimensions. Level 3 output quality with Level 1 UX & Trust still reads as a Level 1 feature from the user's perspective. Level 4 adoption signals with Level 1 ops is one incident away from being pulled.

| Dimension | What it means | What it covers |
| --- | --- | --- |
| Product-Journey Fit | The feature shows up at the right moment for the right user, solves a clear need, and fits naturally into how work gets done. | Workflow placement, persona fit, JTBD clarity, discoverability |
| UX & Trust | Users can understand, trust, and act on the feature's output without friction or hand-holding. | Value clarity, expectation setting, confidence calibration, error recovery |
| Output Quality | The outputs are accurate, consistent, and reliable, even when inputs are messy or unexpected. | Hallucination control, edge case handling, output consistency, and (when retrieval is involved) context relevance and data freshness |
| Measurement & Feedback | Quality and outcomes are tracked with real data, not guessed, and the feature improves as a result. | Eval pipelines, error analysis, regression tracking, live monitoring, feedback loops |
| Ops & Ownership | The feature is reliable, someone is accountable for it, and there is a clear process for keeping it running and improving. | Latency, uptime, graceful degradation, guardrails, prompt and model versioning, incident response, risk ownership, improvement cadence |

Some dimensions overlap at the edges. Discoverability touches both Product-Journey Fit and UX & Trust, and guardrails touch both Output Quality and Ops & Ownership.

## How to read a score

Most teams overestimate their maturity level because the prompt and retrieval work outpaces the work that surrounds it. Prompts and retrieval can "work" in demos while users still can't find the feature, can't trust it, or can't easily apply its output in their workflow.

A feature's true maturity is its weakest dimension, because that's the dimension that will eventually constrain it. Strong adoption with weak Ops & Ownership is load-bearing on luck: it works until the next model change, the next incident, or the next security review reveals what's missing. Strong ops with weak Product-Journey Fit is a feature nobody uses, but at least it won't cause harm. Both are immature, in different ways and on different timelines.

This is also why "users are using it" doesn't equal "users are getting value from it." A well-positioned feature with unreliable outputs, friction-heavy UX, or no measurement can show usage and still not deliver outcomes, and each of those is a different gap with a different fix.

## Where it comes from

The ladder is a synthesis. The primary external sources are:

- **CMMI's five-level maturity structure**: the overall progression from ad-hoc to optimizing.
- **Nielsen's 10 Usability Heuristics and Microsoft's 18 Human-AI Interaction Guidelines (HAX Toolkit)**: the UX & Trust dimension, especially the "when wrong" interaction phase.
- **Google's People + AI Research (PAIR) Guidebook**: trust calibration and explainability patterns within UX & Trust.
- **Shreya Shankar's academic work on LLM eval (UC Berkeley) and Hamel Husain's writing on eval-driven development**: the Measurement & Feedback dimension, particularly error-analysis-driven eval set construction, criteria drift, and building custom LLM judges from observed failures rather than imagined ones.

The synthesis is mine. The dimension cuts and the level rubric are choices, not derivations from the sources.

## When this framework applies

The ladder is built for **user-facing AI products**, where the AI is part of how a real user gets their job done. The framework applies whether the AI is an optional layer in a product that already worked without it (B2B SaaS adding AI to existing products) or the AI is the workflow itself (AI-native products). The same five dimensions matter; the weighting shifts. In SaaS-add-on cases, early-stage maturity is usually capped by Product-Journey Fit or UX & Trust because the feature has to earn its use against an existing non-AI path. In AI-native cases, Output Quality and UX & Trust tend to bind first, because users can't fall back to a non-AI path when the AI behaves badly.

Not built for purely backend AI with no user-facing surface, or pure ML systems where there's no behaviour to design.

## How the audit applies it

Each dimension is scored independently, and the lowest score sets the feature's overall level. When a product has multiple AI features, each is scored separately. Shared infrastructure (evaluation pipelines, guardrail frameworks, monitoring, data governance) often sets a floor: a team rarely sustains a Level 4 feature on Level 1 infrastructure.

---

<div class="grid cards" markdown>

-   :material-magnify:{ .lg .middle } Want this applied to your feature?

    ---

    The [AI Feature Audit](../audit/index.md) scores your feature across all five dimensions and tells you where it will break first, even when current usage looks fine. Two-week diagnostic, written report, walkthrough session.

    [Book Free Intro Call :material-arrow-right:](https://calendly.com/alfred-persson/intro){ .md-button .md-button--primary }

</div>

<small>Framework licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Commercial use: alfred@sveasync.com.</small>
