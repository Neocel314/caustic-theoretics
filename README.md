# Caustic Theoretics

A typography-led Astro journal written under the pseudonym Neocel.

## Writing a post

Add a `.md` or `.mdx` file to `src/content/writing/`:

```yaml
---
title: Your title
date: 2026-09-07
category: essays
description: A short introduction to the piece.
tags: [Culture, Reading]
featured: false
draft: false
---

Your writing goes here.
```

Categories: `essays`, `notes`, `fragments`, or `projects`. The filename becomes the URL slug. For example, `a-new-thought.md` in category `notes` appears at `/notes/a-new-thought/`.

Posts automatically appear in their category, the complete archive, and the recent-writing list, newest first. Drafts are excluded from every public list and route. Dates use UTC consistently. MDX supports embedded markup and imported components.

The included seven posts are **original sample content supplied for the design**, not existing writing from Neocel. Replace or remove them before making the journal public. The About page lives in `src/pages/about.astro`.

The site is statically generated: after adding or editing writing, rebuild and deploy to update the hosted version.

## Development

- `npm install`
- `npm run dev -- --background`
- `npm run astro -- dev status`
- `npm run astro -- dev logs`
- `npm run astro -- dev stop`
- `npm run build` — outputs the complete static site to `dist/`.

## Design

Shared styling: `src/styles/global.css`. Shared name and navigation: `src/layouts/Layout.astro`.

The site uses the system Courier New monospace font, white text on black, and a single narrow reading area. No external fonts are loaded. No client JavaScript is required for navigation or reading. The layout includes mobile styles, visible keyboard focus, a skip link, reduced-motion support, and print styles.

Hosting settings are in `.openai/hosting.json`. The Astro `site` origin is configured in `astro.config.mjs`.



