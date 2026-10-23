// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mangbrothers.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
