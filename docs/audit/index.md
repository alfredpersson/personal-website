---
title: AI Feature Audit
description: A two-week diagnostic audit of your AI feature for €5,000. Five dimensions assessed, a prioritized roadmap, and a clear answer to what's holding back adoption.
keywords: AI feature audit, AI adoption, AI UX, AI product engineering, AI maturity assessment, B2B SaaS AI
author: Alfred Persson
---

# AI Feature Diagnostic Audit

Your AI feature shipped, but users aren't adopting it. The problem is rarely the model instructions.

A common response to low adoption is to iterate on the prompts or switch models. But the real blockers are usually elsewhere: the feature doesn't show up at the right moment, users can't tell when to trust it, or there's no data on whether it actually helps. Meanwhile, users are forming the habit of ignoring it.

[Book Free Intro Call :material-calendar:](https://calendly.com/alfred-persson/intro){ .md-button .md-button--primary }
[Email me directly :material-email-outline:](mailto:alfred@sveasync.com){ .md-button }

## Who this is for

Small to mid-sized B2B SaaS teams who have shipped an AI feature and aren't seeing the adoption or outcomes they expected. You need a feature in production and users who should be getting value from it but aren't. No dedicated AI team required.

Less of a fit if you haven't shipped yet, have less than a few weeks of usage data to analyze, or your AI is purely backend automation with no user-facing surface.

## What gets assessed

A two-week diagnostic across five dimensions using the [AI Feature Maturity Ladder](../framework/index.md).

<div class="grid cards" markdown>

-   :material-map-marker-path:{ .lg .middle } **Product-Journey Fit**

    ---

    Does the feature show up at the right moment, for the right user, solving a clear need? Or does it require users to go looking for it?

-   :material-shield-check:{ .lg .middle } **UX & Trust**

    ---

    Can users understand, trust, and act on the output? Do they know when to rely on it, and what to do when it's wrong?

-   :material-check-decagram:{ .lg .middle } **Output Quality**

    ---

    Are outputs accurate and consistent, even when inputs are messy or unexpected? How does it handle edge cases?

-   :material-chart-bar:{ .lg .middle } **Measurement & Feedback**

    ---

    Is quality tracked with real data, or based on assumptions that haven't been tested? Does the feature actually improve over time?

-   :material-cog:{ .lg .middle } **Ops & Ownership**

    ---

    Is there a clear owner and improvement process? Does the feature get proactive attention, or only reactive fixes?

</div>

A feature's true maturity is constrained by its weakest dimension. The audit finds that dimension and tells you what to do about it. For context on the kind of features I've built and measured against this framework, see the [RAG Support Assistant build](../case-studies/rag-support-assistant.md).

Assessment is grounded in expert heuristic review, hands-on use of the feature, and any user-side data you share (analytics, support patterns, complaints). Primary user research is out of scope.

## How it works

**Week 1: Evaluation**

- Kickoff call to align on scope
- Product walkthroughs as your users experience them
- Heuristic evaluation against Nielsen's usability heuristics and Microsoft's Human-AI Interaction Guidelines
- Prompt and pipeline architecture review
- Output quality assessment against Husain and Shankar's eval-driven development principles
- Mid-week async check-in with preliminary themes

**Week 2: Synthesis & Report**

- Maturity scoring across all five dimensions
- Detailed findings grouped by theme
- Prioritized advancement roadmap
- Report written so a VP of Product or CTO can read the executive summary on its own

**Delivery: Walkthrough**

- One-hour session covering key findings, the roadmap, and your questions

## What you get

- A maturity level assessment across all five dimensions, with evidence for each score
- Identification of the weakest dimension: where the feature will break first, even when other dimensions look fine
- A prioritized advancement roadmap: what to fix first, in what order, with effort estimates
- A written findings report you can share with your team, investors, or board
- A one-hour walkthrough session to discuss findings and answer questions

## What you'll need to provide

**Required:**

- A product login for the user role this feature is built for
- A guided walkthrough of how the feature is intended to work
- Async access during the audit to someone familiar with the AI feature (for follow-up questions)
- Signed mutual NDA and Data Processing Agreement before any systems access (templates provided)

**Helpful, not required:**

- Known failures or edge cases you've flagged (otherwise I work from what I encounter)
- Read access to feature analytics (otherwise findings on Measurement & Feedback rely on team Q&A and walkthroughs)
- Read access to the prompt repository (otherwise reviewed through team Q&A)
- Architecture documentation (otherwise the surrounding pipeline is inferred from direct testing and team Q&A)
- Existing evaluation data or production log samples (otherwise findings rely on direct testing and team Q&A)

Default scoping is non-PII. If your feature touches user data, we agree on what's in scope and what's redacted before kickoff.

## Pricing

**€5,000** for the two-week diagnostic audit.

I run one audit at a time. Typical kickoff is one to two weeks after the intro call.

## What happens after

The audit gives you a prioritized roadmap. Three ways to take it forward:

- **Your team takes it from here.** The report is written so your engineers can act on it directly. Findings are specific enough to turn into tickets without translation.
- **I advise while your team builds.** Part-time support to review implementations, answer questions, and keep the roadmap on track. Scoped and priced separately.
- **I implement it.** I embed with your team and execute the roadmap directly. Scoped and priced separately based on findings.

## Who runs the audit

<div class="bio-block" markdown>

![Alfred Persson](../assets/@alfredpersson.jpg){ .bio-photo alt="Portrait of Alfred Persson" }

<div class="bio-text" markdown>

I'm Alfred Persson, a freelance AI product engineer. I studied interaction technology and design at Umeå University, then spent five years building blockchain applications and infrastructure where reliability under unpredictable conditions wasn't optional. The AI focus came in the last stretch: building demos and RAG pipelines at ChromaWay on the platform's built-in LLM inference and vector database support, then Datalumina's six-week production AI program.

AI engineering hits the same core problem in a new domain: building systems that fail gracefully when you can't predict the inputs. I now apply that combination of production engineering and user-side thinking about trust, uncertainty, and workflow fit to AI features in B2B SaaS. The maturity ladder this audit uses is my synthesis of CMMI, Nielsen's heuristics, Microsoft's HAX guidelines, Google's PAIR work, and Husain/Shankar on eval-driven development. [More about me](../).

</div>

</div>

## How we work together

Fully remote from Mauritius, on EU working hours. GDPR data handling is covered by a standard Data Processing Agreement and EU Standard Contractual Clauses, with a Transfer Impact Assessment available on request. Findings stay confidential by default, and case-study publication requires your written approval.

## Let's talk about your feature

Book a free 30-minute intro call to discuss your feature, where adoption is stuck, and whether the audit fits. Helpful to bring adoption signals if you have them: usage metrics, user complaints, or support patterns. Not required.

[Book Free Intro Call :material-arrow-right:](https://calendly.com/alfred-persson/intro){ .md-button .md-button--primary }
[Email me directly :material-email-outline:](mailto:alfred@sveasync.com){ .md-button }
