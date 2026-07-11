# Repository Instructions

This is the student starter for AICU L14.

## Goal

Write the first executable tests for the existing ticketing behavior using Node.js built-in `node:test` and `node:assert/strict`.

## Product behavior

```txt
priority + sourceChannel -> urgencyLabel
```

`whatsapp` is invalid and must produce `400 VALIDATION_ERROR` with `fieldErrors.sourceChannel`.

## Workflow

- Use `pnpm` only.
- Put pure rule tests in `tests/unit`.
- Put HTTP behavior tests in `tests/api`.
- Keep each test focused on one observable behavior.
- Read test output before changing code.
- Follow `consegna.md` and stop at its boundaries.

## Boundaries

- Do not install Jest, Vitest, Cypress, Playwright, or other test frameworks.
- Do not add coverage, CI, snapshots, auth, notifications, analytics, or `DUPLICATE_TICKET`.
- Do not calculate `urgencyLabel` in the client.
- Do not read, create, or commit secrets, `.env` files, personal data, generated SQLite files, or local test output.
