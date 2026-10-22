# Syeda Mariam Naqvi — personal website

React, TypeScript and Vite. Eight responsive pages, structured content, a keyboard-operated gallery, reading journal, writing filters, and a printable CV.

## Run locally

Node.js 22+ recommended (tested on Node 24).

```sh
npm ci
npm run dev
```

For production: `npm run build`, then `npm run preview`. The production files are in `dist/`.

## Edit content

All personal content lives in `src/content/site.ts`. Edit the exported arrays without changing page layouts:

- `personal`, `externalLinks`, `experience`, `projects`, `publications`, `skills`, `leadership`, `currently`.
- `photography`: `{src, title, caption, collection, alt, date?, location?}`. Put optimised image files in `public/photos/` and use `/photos/filename.webp`. Preserve their aspect ratios. Collections appear automatically; clicking opens a modal with Escape, arrow-key, previous and next controls.
- `books`: `{title, author, status, cover?, started?, finished?, subject?, rating?, reflection?, url?}`. Status must be `Currently reading`, `Recently read`, or `On my reading list`.
- `readingNotes`: `{title, book, text}`.
- `writing`: title, category, date, description, status, body and url. Leave unknown fields empty. Category filters update automatically.

The downloadable PDF at `public/Mariam-Naqvi-CV.pdf` is a copy of the supplied CV with the private phone number redacted. Keep the original private. Review future PDFs for private details before replacing it.

To add the portrait, save the actual uploaded image as `public/portrait.jpg` and set `personal.portrait` to `/portrait.jpg`. No stock or generated portrait is used. The current typographic composition is intentional.

## Remaining content

No invented content is included. Photography, books, reading notes, current updates, publication records and external profiles are empty until supplied. Supply:

- A downloadable portrait file (the inline chat image was not available as a workspace asset).
- Original portfolio photographs, alt text, captions and optional collection names.
- Books and any personal notes or reflections.
- Exact LinkedIn and optional creative/profile URLs.
- Publication status/link or approved full text for “Trapped by Honour”.
- Final thesis topic; datasets, methods and results for the education expenditure and R Shiny projects.

DAADRAS uses the verified CV description; Project SALAAM is not attributed because the CV does not confirm that association. No current initiative membership counts are claimed. Missing content appears as restrained empty states or accurately labelled work in progress; no sample books or photos appear publicly.

## Deploy

Deploy the repository on Netlify: build command `npm run build`, publish directory `dist`. The included `_redirects` file supports direct page URLs. Vercel is also supported by `vercel.json`: use the Vite framework preset. No backend, credentials, or environment variables are required. The site uses hash-based navigation and relative build asset paths, so it also works under GitHub Pages project paths without server rewrite rules. A GitHub Actions workflow builds and publishes on pushes to main. If GitHub blocks automatic Pages activation, select GitHub Actions under repository Settings → Pages → Build and deployment → Source, then rerun the publishing workflow.

Fonts use Google Fonts (DM Sans, SIL Open Font License; Libre Caslon Display, SIL Open Font License) with system fallbacks. For offline deployment, self-host licensed font files and replace the CSS import. The site remains usable when fonts cannot load.

## Validation

`npm run build` performs strict TypeScript checking and a production build. Browser smoke checks cover all routes, mobile menu, overflow, PDF download, writing filters, and gallery controls with temporary test images that are removed afterwards. No images or reading history have been fabricated for the live site.
