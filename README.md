# 2026 Election · The Daily Northwestern

A responsive election homepage with the original Daily header and footer, a poster frame, hero and collapsible race grid. Election illustration and race information remain placeholders.

## Development

Use Node.js 22.23.4+ and npm. A compatible Node runtime is also retained as a development dependency.

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

The static build is written to `dist/`.

## Structure

- `src/pages/index.astro`: composes the shared branding and election components.
- `src/data/election.js`: headline, subtitle, live coverage link, illustration path/alt text, blurb, section headings and cards.
- `src/components/election/`: reusable hero, link, blurb, race section and race card components.
- `src/styles/election.scss`: election-only layout, responsive rules, palette and font variables.
- `src/layouts/Layout.astro`: document metadata, fonts and global styles.
- `src/components/`: shared Daily header and footer. Footer credits are optional.
- `src/styles/global.scss`: resets, layout, accessibility, Georgia and Daily purple (`#501e4c`).
- `src/styles/_brand.scss`: existing header/footer styling and mobile behavior.
- `src/lib/content.js`: safe inline formatting and base-aware asset URL helpers.
- `src/assets/`: future assets processed by Astro.
- `public/assets/`: future assets served unchanged.
- `public/images/` and `public/favicon.png`: retained Daily branding.

Daily header/footer styles, wordmarks and fonts originated in [new-ryan-field](https://github.com/dailynorthwestern/new-ryan-field), source commit `b1de477874bb8e3494aea675179321829e476c40`. The Adobe font stylesheet remains in the shared layout to preserve branding typography.

## Hosting

No deployment URL is configured. Astro uses static output and `/` as the default base. Set an explicit base for subdirectory hosting:

```sh
BASE_PATH=/2026-election/ npm run build
BASE_PATH=/2026-election/ npm run preview
```

Build and preview must use the same base. Choose the actual host and URL before adding Astro's `site` setting. Upload the contents of `dist/` to that host at the matching base path.

The GitHub workflow is manual and builds an artifact only; it does not publish the site.

## Editing the election homepage

Change page content in `src/data/election.js`. Set `liveCoverage.url` to the published coverage link; its current fragment is a temporary self-link. Set `hero.image` to an image in `public/` (for example `/assets/election-illustration.webp`) and supply `hero.imageAlt`. Leaving the path empty shows the labeled placeholder. Race cards accept a unique `id` and optional `label`; blank labels leave the visible card empty.

Edit the `--election-*` color tokens and `--font-election-*` font stacks in `src/styles/election.scss`. Oswald Bold and Inter are loaded from Google Fonts in `src/pages/index.astro` with system fallbacks. These substitute fonts apply only within the election page; Georgia and Daily branding remain available through global styles.

Race accordions use native `details`/`summary`, start expanded and work with a keyboard without JavaScript.

## Reported Stories

Edit `src/data/reportedStories.js` to add or replace articles. Each entry accepts `id`, `title`, `author`, `authorUrl`, `date`, optional `dateISO`, `url`, `image` and `imageAlt`. Empty URLs render as non-link placeholders; a published story's entire card links to its article.

`ReportedStories.astro` groups entries in batches of six: the first three across the top row, then three across the bottom row. Further groups extend horizontally in one shared scroller. Desktop arrow buttons advance a group; on mobile they advance one column. Touch gestures, the scrollbar, keyboard arrows on the focused scroller and Tab navigation are also supported. New styling is isolated in `src/styles/reported-stories.scss`; the election hero stylesheet remains unchanged.

## Shared content width

The `.election-content-container` class in `src/styles/election.scss` uses `--election-content-width`: 60% above 1024px, 86% from 768–1024px, and full width minus 40px below 768px. Hero content, Federal Races and Reported Stories share these boundaries. The headline and decorative frame remain outside this container.

## Federal and State race features

Edit `src/data/races.js` for all six races: `title` changes a race title; `image` and `imageAlt` configure the illustration; `flourishId` accepts a numeric visualization ID, or `flourishUrl` accepts a published Flourish visualization/embed URL; `description` changes the explanatory text; `layout` selects `image-left` or `image-right`. Local illustrations belong in `public/assets/` and use `/assets/filename.webp` paths.

The reusable feature layout is in `src/components/election/RaceFeature.astro`, with styling in `src/styles/race-features.scss`. `FlourishEmbed.astro` uses Flourish's official iframe endpoint, provides an accessible title and lazy loading, and renders a labeled placeholder when no ID/URL is configured. It loads no Flourish embed script. Check the published visualization at mobile and desktop sizes when adding real charts.

All three major pill headings share `src/components/election/SectionHeading.astro`, including its scoped styles. Page order is hero, Reported Stories, Federal Races, State Races, footer.

## Hero race dropdowns

`src/components/election/RaceDropdown.astro` supplies the two native, independently expandable hero menus. Their names and anchor targets come from `src/data/races.js` and point to the existing race heading IDs. Both start collapsed and work without JavaScript; a small enhancement synchronizes `aria-expanded`. Supported browsers animate expansion, with reduced-motion preferences respected.
