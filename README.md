# Satisfactory Calculator

A production calculator for the game [Satisfactory](https://www.satisfactorygame.com/).
Plan factories, figure out exactly how many machines and raw resources you need, and see
power draw and byproducts — all in a single HTML file, no install required.

**▶️ Live: [s-builder.joshuarobbs.com](https://s-builder.joshuarobbs.com/)**

## Features

- **Target Output mode** — pick an item and a target rate (per minute); it works the
  whole production chain backwards: every intermediate recipe, machine counts, raw
  resource totals, power, and byproducts.
- **Machine Builder mode** — build factories forward by adding machines and recipes, and
  see net inputs/outputs across multiple factories.
- **650+ recipes**, including alternate recipes (marked ★), 45+ buildings, and 100+ items.
- **Power tracking** per machine and totaled across the chain.
- **Shareable URLs** — your build is saved into the page URL, so you can bookmark it or
  send it to someone.
- **Zero dependencies** — one file, runs entirely in your browser, works offline.

## Usage

Just open the live site: **[s-builder.joshuarobbs.com](https://s-builder.joshuarobbs.com/)**

To run it yourself, no build or install is needed. Either:

- Download `index.html` and open it in your browser, **or**
- Serve the folder locally and visit the printed address:
  ```bash
  python3 -m http.server
  ```

## How it works

The whole app is a single `index.html` — vanilla JavaScript, CSS, and HTML with no
framework or build step. Recipe and building data are embedded in the file and curated
against the official Satisfactory wiki.

## Contributing

See [CLAUDE.md](CLAUDE.md) for project structure and conventions. The short version:
keep everything in `index.html`, no build tooling, and validate recipe changes against
the wiki.

## License

[MIT](LICENSE) © Josh Robbs
