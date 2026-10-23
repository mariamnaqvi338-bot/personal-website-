# Syeda Mariam Naqvi — personal portfolio

Eight separate pages: About Me, Graphics & Postcards, Reflections, Photography, CV, Projects, Current Projects, and Contact. Warm paper, serif typography, small monospaced labels, and editorial lists inspired by the supplied screenshots.

## Run

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and creates `dist/`. `npm run preview` serves the production build.

## Content

- `src/content/site.ts`: personal details, verified profile URLs, CV link, experience, research, skills, photography and personal quotations.
- `src/content/portfolio.ts`: About Me text, graphic work, reflections and current projects.
- Add a reflection with `slug`, `title`, optional `date`, `excerpt`, and `paragraphs`. It appears in the archive and gets its own `/reflections/slug` reading page.
- Add original designs to `public/graphics/`, then add their path and alt text to the matching `graphicWork` entry's `images` array. No stock designs are used.
- Add images to `public/photos/` and entries to `photography` in site.ts, or keep the existing external VSCO link.
- A portrait file has not yet been provided as a downloadable asset. Set `personal.portrait` after adding the file to public.

Awaiting content: postcard business name/details and original designs; full reflection texts; additional current-project descriptions; portrait attachment. The thesis is the only confirmed in-progress project, and its topic remains unconfirmed. Publication title is included without an invented publication URL.

## Hosting

Vercel: Vite preset, build `npm run build`, output `dist`. The included rewrite supports direct page links. Routes use BrowserRouter and assets use root paths; Vercel domain-root deployment is assumed. Existing CV PDF and exact user-provided profile URLs are preserved. Code can remain private. GitHub Pages workflow is manual-only and not used for Vercel production hosting.

Fonts: Cormorant Garamond and IBM Plex Mono via Google Fonts (SIL Open Font License), with local fallbacks. No backend or secrets required.
