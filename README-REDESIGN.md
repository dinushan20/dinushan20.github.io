# Dinushan Meeriyagalla — editorial portfolio redesign

This folder is a complete static portfolio website. It is designed for GitHub Pages and uses regular HTML, CSS, and JavaScript. No build tools or npm dependencies are required.

## What changed

- Completely redesigned homepage: editorial headline, original portrait, selected work, counters, research areas, background, academic writing, six colleague recommendations, and contact call-to-action.
- Black-and-white design system with **square corners throughout**: restrained rules, whitespace, and typographic hierarchy.
- Updated shared navigation and footer on all eight pages.
- Unified styling for thesis/research project pages, writing pages, and the CV page, while retaining the original content, images, diagrams, videos, document downloads, and URLs.
- Responsive desktop/tablet/mobile layouts; accessible mobile navigation; keyboard Escape to close menu; visible focus styles; reduced-motion support.
- Count-up animations for homepage statistics, plus restrained project hover and scroll reveal effects.
- Compressed homepage project previews to WebP; untouched original assets are preserved for detailed pages.
- Updated an outdated description of the thesis data-collection status to reflect reporting the C3/VAMPIRE Chair condition; this **does not claim a completed five-condition comparison**.

## Editing

- `index.html` — homepage text and layout
- `redesign.css` — the new design system and page restyling
- `style.css` — retained existing component styles for the more detailed pages
- `script.js` — animations and mobile navigation
- `cv.html`, `project-*.html`, `writing-*.html` — individual pages
- `assets/` — original images, diagrams, video, downloadable PDFs, and four optimized homepage thumbnails in `assets/optimized/`

**Important:** To keep project-detail figures, videos, and CV PDFs working, upload the **entire folder contents**, not just `index.html`.

## Publish to GitHub Pages

1. Back up your current repository before replacing files.
2. Extract the ZIP. Put **its top-level contents** (including `index.html`, `style.css`, `redesign.css`, `script.js`, and `assets/`) in the root of your `dinushan20.github.io` repository.
3. Commit/push and allow GitHub Pages to deploy.
4. Hard-refresh the page (Cmd/Ctrl+Shift+R) and check CV downloads and internal project links.

You can also preview locally by running `python3 -m http.server 8000` in this directory and visiting `http://localhost:8000`.

## Publication checklist — please verify before deploying

- **Statistics:** `04` selected research projects, `03` participant-based studies, and `02+` years in industry are editorial counts based on the portfolio material and prior study information, not independently audited institutional metrics. Confirm them and change them in `index.html` if needed. The visible digits and `data-count` values must agree.
- **Thesis:** Check the revised C3-condition description against your final manuscript. The new summary makes clear that the broader continuum was planned and only C3 has reported data.
- **CV dates:** Several older entries say "Present"; review and update any positions that have ended. Also replace the academic/industry CV PDF files if you've revised your CV since making this ZIP.
- **Public image rights:** Existing images and AI-generated illustration disclosures remain; verify any external assets and research participant images are approved for portfolio use.
- **Fonts:** The site requests DM Sans and Manrope from Google Fonts and has local system-font fallbacks.

No live repository was modified by creating this deliverable.
