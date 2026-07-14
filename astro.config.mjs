import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.liongatepest.com',
  integrations: [tailwind()],
  output: 'static',
});
