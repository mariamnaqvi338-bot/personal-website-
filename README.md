# Syeda Mariam Naqvi

My personal corner of the internet: photographs, reflections, research, graphic work, and a little about the person behind them.

**[Visit the website](https://personal-site-pi-ten-71.vercel.app/)**

## Inside

- **About Me** — a personal introduction.
- **Graphics & Postcards** — a growing archive of graphic work and my former postcard business, **mbymariam**.
- **Reflections** — thirteen essays and poems, each with its own reading page.
- **Photography** — selected photographs, with links to my VSCO account and portfolio.
- **CV** — education, experience, projects, technical skills, and activities, with a downloadable PDF.
- **Projects** — selected research and analytical work.
- **Contact** — email and profile links.

The design uses a warm paper background, serif typography, and a restrained editorial layout.

## Running locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

To check and build the production version:

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Updating the website

| What to update | Where to find it |
| --- | --- |
| About Me and postcard collection | `src/content/portfolio.ts` |
| Full reflections and their order | `src/content/reflections.ts` |
| Experience, projects, profile links, and photography entries | `src/content/site.ts` |
| Page layouts and navigation | `src/main.tsx` |
| Fonts, colours, spacing, and responsive layout | `src/style.css` |
| Gallery image files | `public/photos/` |
| Portrait | `public/portrait.png` |
| Downloadable CV | `public/Mariam-Naqvi-CV.pdf` |

### Adding a reflection

Add an entry to `src/content/reflections.ts` with a unique `slug`, `title`, optional `subtitle`, short `excerpt`, and full `body`. It will appear automatically in the numbered archive and at `/reflections/your-slug`.

Use a blank line between paragraphs and a single line break for poetry. Italic and bold emphasis and image Markdown are supported. Publication dates are intentionally omitted. **Clean Slate** stays first in the collection.

### Adding photographs or postcard designs

Save original image files under `public/photos/` or `public/graphics/`, then add their paths and descriptive alt text to the matching content array. Gallery tiles preserve image proportions and load lazily. Keep personal location metadata out of images if you do not want it published.

### Replacing the CV

Replace `public/Mariam-Naqvi-CV.pdf`, keeping the filename unchanged. The existing download link will then serve the updated file after deployment. Review the PDF for private information before uploading; the current public copy omits the private phone number.

## Deployment

The website is hosted on **Vercel**, connected to this private GitHub repository. Pushes to the connected production branch trigger a deployment.

- Framework: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

`vercel.json` supports direct links to individual pages. The optional GitHub Pages workflow is manual-only and is separate from Vercel hosting.

## Built with

React, TypeScript, Vite, and CSS. Fonts are Cormorant Garamond and IBM Plex Mono, loaded from Google Fonts under the SIL Open Font License, with system fallbacks.

Some reflection images are hosted on Substack. If an image cannot load, the page provides a link to it. These can be replaced with locally hosted files later.

---

© Syeda Mariam Naqvi. All rights reserved. Please do not reuse writing, photographs, or designs without permission.
