# CLAUDE.md

Guidance for working in this repository.

## Project

A single-file web app — a production calculator for the game **Satisfactory**. It has
two modes:

- **Target Output** — pick an item and a target rate; it resolves the full production
  chain backwards (machines, raw resources, power, byproducts).
- **Machine Builder** — build factories forward by adding machines/recipes; it reports
  net inputs/outputs across multiple factories.

State is serialized into the URL hash, so calculations are shareable/bookmarkable.

## Stack

- Vanilla JavaScript (ES6), CSS, and HTML — **all inline in `index.html`**.
- No framework, no bundler, no npm, no dependencies.

## Run

- Open `index.html` directly in a browser, **or**
- Serve locally: `python3 -m http.server` then visit the printed URL.

## Build / Test

There is **no** build step, test suite, or linter. Keep it that way — the zero-tooling,
single-file design is intentional (simple, portable, zero friction).

## Structure

Everything lives in `index.html`. Key sections:

- **Game data** — `ITEMS`, `BUILDINGS`, `RECIPES`, defined via the `R(...)` (recipe) and
  `io(...)` (item/amount) helpers.
- **`initData()`** — builds lookup maps (`IMAP`, `RMAP`, `BY_OUT`, `BY_IN`, `BMAP`,
  `BY_BLDG`).
- **State** — a single global object `S`.
- **Calc engines** — `resolveChain` / `flattenChain` (Target mode), `calcBuilder`
  (Builder mode).
- **Renderers** — `renderBrowser`, `renderPlannerBar`, `renderTree`, `renderResults`.
- **URL state** — `saveURL` / `loadURL`.

## Conventions

- Single global state `S`; mutate it, then call the relevant `render*()` for a full
  re-render. No immutable patterns, no framework reactivity.
- All production rates are normalized to **per minute** (`/min`).
- Recipes are curated against the **Satisfactory wiki** — validate any recipe additions
  or edits against the wiki before committing.
- Alternate recipes use `isAlternate=true` and show a ★ in the UI.
- Theme via CSS custom properties at `:root`; no hardcoded colors, no external CSS/CDNs.
- Keep everything in the single `index.html` file.

## When changing calculations

Any change that affects calculation state must also update `saveURL()` and `loadURL()`,
or shared/bookmarked URLs will break.
