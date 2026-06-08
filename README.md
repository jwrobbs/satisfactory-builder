# Satisfactory Calculator

A production calculator for the game [Satisfactory](https://www.satisfactorygame.com/).
Plan factories, figure out exactly how many machines and raw resources you need, and see
power draw and byproducts — no install, no build, no dependencies.

**▶️ Live: [s-builder.joshuarobbs.com](https://s-builder.joshuarobbs.com/)**

Built for **Satisfactory 1.2**.

## Features

- **Target Output mode** — pick an item and a target rate (per minute); it works the
  whole production chain backwards: every intermediate recipe, machine counts, raw
  resource totals, power, and byproducts.
- **Machine Builder mode** — build factories forward by adding machines and recipes; see
  per-machine and total inputs/outputs across multiple factories, with miner tier (Mk.1–3)
  and node purity (impure/normal/pure) modeled.
- **Recipe cost multiplier** — model Satisfactory 1.2's recipe parts cost setting (0.25×–2×).
- **650+ recipes**, including alternate recipes (marked ★), 45+ buildings, and 100+ items.
- **Power tracking** per machine and totaled across the chain.
- **Shareable URLs** — your build is saved into the page URL, so you can bookmark it or
  send it to someone.
- **Zero dependencies** — runs entirely in your browser, works offline, no build step.

## Usage

Just open the live site: **[s-builder.joshuarobbs.com](https://s-builder.joshuarobbs.com/)**

To run it yourself, no build or install is needed. Either:

- Download the files (`index.html`, `styles.css`, `data.js` — keep them together) and
  open `index.html` in your browser, **or**
- Serve the folder locally and visit the printed address:
  ```bash
  python3 -m http.server
  ```

## How it works

Plain HTML/CSS/JS split across three files — `index.html` (markup + app logic),
`styles.css`, and `data.js` — with no framework or build step. The game data lives in
`data.js`, curated against the official Satisfactory wiki.

## Contributing

See [CLAUDE.md](CLAUDE.md) for project structure and conventions. The short version:
data in `data.js`, styles in `styles.css`, logic in `index.html`; no build tooling; and
validate recipe changes against the wiki.

## License

[MIT](LICENSE) © Josh Robbs
