# Carevia Frontend Engineering Assessment

## Overview

Welcome to the Carevia Frontend Engineering Assessment. In this practical challenge, you will be implementing a real-time tracking interface for our Central Operations Console. You are working with an existing Next.js App Router codebase and are expected to deliver production-grade TypeScript.

## System Architecture & Code Constraints

To mirror our production environment, your implementation must adhere to these strict engineering rules:

- **Strict Type Safety:** Absolute prohibition of any data designations. Every component props, API wrapper, and hook surface must be explicitly typed.
- **Directory-by-Feature Design:** Do not drop files into a generic `components/` dumping ground. House your UI components, hooks, and types strictly under a modular `features/operations/` cluster directory.
- **Robust State Isolation:** Do not rely on automated global states. Keep your UI mutations tightly bound to localized custom state hooks or context providers specifically designed for this module.

## Critical Sprint Evaluation (Read Carefully)

At Carevia, our senior engineers operate with absolute technical ownership. We expect you to deeply audit your technical assets before writing lines of code.

Go into `src/app/api/operations/mock-data.json`. You will find that the backend engineering team left a structural omission in the schema definitions—the critical payload identifiers for authentication tracking or coordinate mapping keys are structurally inconsistent.

**Your action required:** Do not blindly write code around a broken structural model. Before initializing your component build, open an Issue or write a dedicated Markdown log (`ARCHITECTURE_REVIEW.md`) at the root of the repository explicitly flagging this gap, diagnosing its impact on production stability, and stating your proposed correction.

## Definition of Done (DoD)

Your Pull Request will be evaluated automatically and manually by our engineering team against the following strict parameters:

- **Zero Console Leakage:** No raw operational data or debug console lines are allowed to leak into standard logs.
- **Compile Cleanliness:** Codebase must build to production with completely zero linter bypasses or unresolved TypeScript interface compiler complaints.
- **Proactive Engagement:** Successful identification and architectural documentation of the intentionally flawed asset mock model.
