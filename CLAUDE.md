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

React 19 + TypeScript + Vite 8 + Tailwind v4 (via `@tailwindcss/vite`, no `tailwind.config`). The React Compiler is on (babel `reactCompilerPreset` in `vite.config.ts`), so manual `useMemo`/`useCallback` are generally unnecessary. The README is unmodified Vite template boilerplate.

## Architecture

Single-page film/photo portfolio with no router. `App.tsx` stacks `Home`, `Work` (`#work`), and `Info` (`#info`) sections; navigation is anchor links with smooth scrolling.

**Content is data-driven.** All portfolio content lives in `src/data/`:
- `types.ts`: `Project` has exactly 3 `images` (the thumbnail row), plus optional `description`, `allImages` (stills gallery), and `videoUrl` (Vimeo or YouTube embed URL).
- `projects/*.ts`: one file per project, default-exporting a `Project`.
- `index.ts`: `PROJECTS` maps each `Category` ("Selected" | "Narrative" | "Photography") to an ordered project list. A project file does nothing until it is imported and listed here (e.g. `jd-airmax.ts` currently exists but is not listed).
- `photography.ts`: the Photography tab uses `PHOTOGRAPHY_PHOTOS` (not `PROJECTS.Photography`, which is empty). Each entry needs the original `width`/`height` for the layout in `PhotoGrid`.

**Images** are hosted on Dropbox shared links (`&raw=1`) and always wrapped with `wsrv()` from `src/lib/wsrv.ts`, which proxies through wsrv.nl for resizing and WebP output. New image URLs should follow the same pattern.

**Work page flow** (`src/pages/Work.tsx`): category tabs toggle visibility with `hidden` (all tabs stay mounted). Clicking a project opens one shared `Modal`. The modal shows `VideoPlayer` if `videoUrl` is set, otherwise `StillsGallery` with `allImages`. A project with neither is not clickable. `VideoPlayer` shows a thumbnail placeholder while the iframe loads: YouTube thumbnails come from the video ID, Vimeo thumbnails from the Vimeo oEmbed API.

**Modal timing**: `Modal` fades over `FADE_MS` (250ms) and locks body/html scroll while open. `Work.closeModal` clears the selected project after a matching 250ms timeout so content doesn't vanish mid-fade. Keep these in sync if you change one.

## Styling

Theme colors are Tailwind v4 `@theme` tokens in `src/index.css` (`site-bg`, `site-text`, `site-accent`, `site-border`, `site-muted`), used as classes like `text-site-muted`. A commented-out light palette sits next to the active dark one. Shared component classes (`.project-title`, `.header-btn`, mobile-nav animations, `.fade-in-scroll`) are defined in `@layer components` there. The site font is the self-hosted Helixa family in `public/fonts/`.
