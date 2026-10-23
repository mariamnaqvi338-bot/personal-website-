# Syeda Mariam Naqvi — personal portfolio

Seven separate pages: About Me, Graphics & Postcards, Reflections, Photography, CV, Projects, and Contact. The former /current-projects route redirects to /projects. Warm paper, serif typography, small monospaced labels, and editorial lists inspired by the supplied screenshots.

## Run

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and creates `dist/`. `npm run preview` serves the production build.

## Content

- `src/content/site.ts`: personal details, verified profile URLs, CV link, experience, research, skills, photography and personal quotations.
- `src/content/portfolio.ts`: About Me text, graphic work and current projects; re-exports the reflections collection.
- `src/content/reflections.ts`: the full writing archive. Entries use `slug`, `title`, optional `subtitle`, `excerpt`, and `body`. Keep the array order: Clean Slate is first. Do not add dates. Each entry gets `/reflections/slug`. Body supports paragraphs, line breaks, italic/bold emphasis, and image Markdown; HTML is rendered as text.
- Add original designs to `public/graphics/`, then add their path and alt text to the matching `graphicWork` entry's `images` array. No stock designs are used. mbymariam is identified as a former business.
- Add images to `public/photos/` and entries to `photography` in site.ts, or keep the existing external VSCO link.
- The supplied portrait is stored in `public/portrait.png` and configured in `personal.portrait`.

Awaiting content: further mbymariam business details and original postcard designs; additional current-project descriptions. All 13 supplied reflections have been added, without publication dates. The thesis is the only confirmed in-progress project, and its topic remains unconfirmed. Publication title is included without an invented publication URL.

## Hosting

Vercel: Vite preset, build `npm run build`, output `dist`. The included rewrite supports direct page links. Routes use BrowserRouter and assets use root paths; Vercel domain-root deployment is assumed. Existing CV PDF and exact user-provided profile URLs are preserved. Code can remain private. GitHub Pages workflow is manual-only and not used for Vercel production hosting.

Fonts: Cormorant Garamond and IBM Plex Mono via Google Fonts (SIL Open Font License), with local fallbacks. No backend or secrets required.

Writing images use the supplied Substack image assets, without duplicate image links or social engagement metadata. Network policy blocked local image downloads during setup; failed browser images display an explicit link fallback. Upload original image files to self-host them later.

Photography: 16 original JPEGs from the supplied ZIP are stored in public/photos and referenced in site.ts. Their aspect ratios, colours, and source image quality are preserved. Width/height metadata reserves layout space; tiles lazy-load and link to full images.

Page layouts use wider desktop gutters throughout. About Me has a portrait sidebar and continuous text, with no newspaper columns. Mobile stacks the content without horizontal scrolling.
