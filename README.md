# Syeda Mariam Naqvi

A simple, single-page personal website with Home, selected research, CV, Background, Affiliations, and Contact Me sections. Academic layout with a blush introduction, plum links, Newsreader headings, and Public Sans body text. Built with React, TypeScript, and Vite.

## Run

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and generates the production site in `dist/`. `npm run preview` serves that build locally.

## Update

Edit the page in `src/main.tsx`, the content (including `links`, `selectedResearch`, and `personalNotes`) in `src/content/site.ts`, and styling in `src/style.css`. The CV download is `public/Mariam-Naqvi-CV.pdf`; the private phone number was removed from this copy. Content arrays for the earlier design are retained in the content file but are not displayed.

## Deploy

On Vercel, import the private GitHub repository and choose the Vite preset. Build command: `npm run build`. Output directory: `dist`. Pushes to the connected production branch trigger updates automatically. No secrets, backend, or environment variables are needed. The repository can stay private while the website is public.

GitHub Pages requires a supported plan for private repositories; the included Pages workflow does not overcome that restriction. It is manual-only so pushes do not trigger failing Pages deployments. Production hosting uses the separate Vercel Git integration.

Fonts are loaded from Google Fonts (Newsreader and Public Sans, SIL Open Font License), with system fallbacks.

The public CV link and profile URLs are the exact addresses supplied by Mariam. The bundled PDF remains available as a local copy. No publication URL was supplied for Trapped by Honour, so its title is plain text.
