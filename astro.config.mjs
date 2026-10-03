// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.skippysroofracks.co.uk',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/thanks/'),
    }),
  ],
  // Old WordPress URLs → new pages
  redirects: {
    '/get-a-quote': '/contact/',
    '/get-a-quote-2': '/contact/',
    '/sample-page': '/',
  },
});
