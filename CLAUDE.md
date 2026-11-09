# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` (or `make run`): Vite dev server
- `npm run build` (or `make build`): `tsc -b` type check, then `vite build` to `dist/`
- `npm run lint`: ESLint
- `npm run preview`: serve the built `dist/`

There is no test suite. Verify changes with `npm run build` and `npm run lint`.

## Deployment

Every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml` (Node 26, `npm ci && npm run build`, uploads `dist/`). Keep `@types/node` on the same major as the CI Node version. Vite `base` is `"/"`, so the site expects to be served from a domain root.

## Stack

React 19 + TypeScript + Vite 8 + Tailwind v4 (via `@tailwindcss/vite`, no `tailwind.config`). The React Compiler is on (babel `reactCompilerPreset` in `vite.config.ts`), so manual `useMemo`/`useCallback` are generally unnecessary.

## Architecture

Single-page film/photo portfolio with no router. `App.tsx` stacks `Home`, `Work` (`#work`), and `Info` (`#info`) sections; navigation is anchor links with smooth scrolling.

**Content is data-driven.** All portfolio content lives in `src/data/`:
- `types.ts`: `Project` has exactly 3 `images` (the thumbnail row), plus optional `description`, `allImages` (stills gallery), and `videoUrl` (Vimeo or YouTube embed URL).
- `projects/*.ts`: one file per project, default-exporting a `Project`.
- `index.ts`: `PROJECTS` maps each `Category` ("Selected" | "Narrative" | "Photography") to an ordered project list. A project file does nothing until it is imported and listed here (e.g. `jd-airmax.ts` currently exists but is not listed).
- `photography.ts`: the Photography tab uses `PHOTOGRAPHY_PHOTOS` (not `PROJECTS.Photography`, which is empty). Each entry needs the original `width`/`height` for the layout in `PhotoGrid`.

**Images** are hosted on Dropbox shared links (`&raw=1`) and always wrapped with `wsrv()` from `src/lib/wsrv.ts`, which proxies through wsrv.nl for resizing and WebP output. New image URLs should follow the same pattern.

**Work page flow** (`src/pages/Work.tsx`): category tabs toggle visibility with `hidden` (all tabs stay mounted). Clicking a project opens one shared `Modal`. The modal shows `VideoPlayer` if `videoUrl` is set, otherwise `StillsGallery` with `allImages`. A project with neither is not clickable. `VideoPlayer` shows a thumbnail placeholder while the iframe loads: YouTube thumbnails come from the video ID, Vimeo thumbnails from the Vimeo oEmbed API.

**Modal timing**: `Modal` fades over `FADE_MS` (250ms) and locks `<html>` scroll while open. Its children stay mounted through the fade-out, then unmount, so a closed modal holds no gallery state or key listeners. Callers just set `isOpen` false and leave their selection in place (don't clear it on close, or content vanishes mid-fade). Galleries inside are keyed by project/photo so each open starts fresh. The close button sits above the content, which is wrapped in `isolate` so its z-indexes can't cover it. `Modal` is a native `<dialog>` opened with `showModal()`, so the browser traps focus, makes the page inert and returns focus to the opener on `close()` (which runs after the fade). It needs a `label`. Escape is caught in `onCancel` so the fade still runs. Clickable cards focus themselves on click because Safari doesn't, so focus can come back to them.

## Adding content

**Film project:** create `src/data/projects/<slug>.ts`, then import it in `src/data/index.ts` and add it to `Selected` or `Narrative` (list order is site order).

```ts
import { wsrv } from "../../lib/wsrv";
import type { Project } from "../types";

const project: Project = {
  title: "My Project",
  images: [wsrv("..."), wsrv("..."), wsrv("...")], // exactly 3 thumbnails
  description: "Optional logline shown in the modal.",
  videoUrl: "https://player.vimeo.com/video/123456789?h=abc123&autoplay=1&title=0&byline=0&portrait=0",
  // or, for a stills gallery instead of a video:
  // allImages: [wsrv("..."), ...],
  // To reuse the thumbnails as the first stills, pull them into a `const images`
  // and write `allImages: [...images, ...]` (see burp.ts).
};

export default project;
```

**Photograph:** add `{ url, width, height }` to `RAW_PHOTOS` in `src/data/photography.ts`, using the original pixel dimensions. Get them with `curl -sL "<url>" -o /tmp/p.jpg && sips -g pixelWidth -g pixelHeight /tmp/p.jpg`.

**Showreel:** the home-page reel is the Vimeo `background=1` iframe in `src/pages/Home.tsx`. Swap the video ID there.

**Bio / SEO:** the bio text lives in `src/pages/Info.tsx`. `index.html` holds the meta description, Open Graph/Twitter tags and the JSON-LD `Person` block, so update those to match when the bio, clients or contact info change. `public/robots.txt` and `public/sitemap.xml` are static (bump `lastmod` on major content changes).

## Styling

Theme colors are Tailwind v4 `@theme` tokens in `src/index.css` (`site-bg`, `site-text`, `site-accent`, `site-border`, `site-muted`), used as classes like `text-site-muted`. A commented-out light palette sits next to the active dark one. Shared component classes (`.project-title`, `.header-btn`, `.fade-in-scroll`, `.focus-ring`) are defined in `@layer components` there. The site font is the self-hosted Helixa family in `public/fonts/`.
