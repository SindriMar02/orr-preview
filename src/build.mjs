import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { COPY } from './content.mjs';
import { render, punchMark } from './template.mjs';

/* Preview builds are published under a real business's brand on a URL that is
   not theirs. They are marked noindex and their canonical points at the preview
   itself, so this can never be indexed as, or compete with, orr.is. */
const PREVIEW_ORIGIN = process.env.PREVIEW_ORIGIN || '';
const isPreview = Boolean(PREVIEW_ORIGIN);

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'en'), { recursive: true });

// static assets
await cp(join(root, 'public'), dist, { recursive: true });

// favicon: the bowl with the loose stone. Geometry only, no webfont.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="14" fill="#212432"/>
<circle cx="32" cy="32" r="21" fill="none" stroke="#F6F6F4" stroke-width="3"/>
<circle cx="37" cy="36" r="8.5" fill="#A8965C"/>
</svg>`;
await writeFile(join(dist, 'favicon.svg'), favicon);

const opts = { previewOrigin: PREVIEW_ORIGIN, noindex: isPreview };
await writeFile(join(dist, 'index.html'), render(COPY.is, { assetBase: '', ...opts }));
await writeFile(join(dist, 'en', 'index.html'), render(COPY.en, { assetBase: '../', ...opts }));
if (isPreview) await writeFile(join(dist, '.nojekyll'), '');

await writeFile(
  join(dist, 'robots.txt'),
  isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\nSitemap: https://orr.is/sitemap.xml\n'
);
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>https://orr.is/</loc>
    <xhtml:link rel="alternate" hreflang="is" href="https://orr.is/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://orr.is/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://orr.is/"/>
  </url>
  <url><loc>https://orr.is/en/</loc>
    <xhtml:link rel="alternate" hreflang="is" href="https://orr.is/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://orr.is/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://orr.is/"/>
  </url>
</urlset>
`
);

console.log(`built dist/index.html + dist/en/index.html${isPreview ? ' [preview: noindex, origin ' + PREVIEW_ORIGIN + ']' : ''}`);
void punchMark;
