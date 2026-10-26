import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// @astrojs/sitemap writes sitemap-index.xml. robots.txt already points at
// /sitemap.xml, so copy the generated index to that URL after the build.
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        await copyFile(join(outDir, 'sitemap-index.xml'), join(outDir, 'sitemap.xml'));
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.liongatepest.com',
  redirects: {
    // Astro emits this as a 301. Vercel also redirects both slash forms in vercel.json.
    '/service-areas/burbank': {
      status: 301,
      destination: '/pest-control/burbank/',
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/lp/') && !page.includes('/service-areas/burbank'),
    }),
    sitemapXmlAlias(),
  ],
  output: 'static',
});
