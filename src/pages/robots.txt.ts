import type { APIRoute } from 'astro';

const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';

export const GET: APIRoute = () =>
  new Response(
    noindex
      ? 'User-agent: *\nAllow: /\n'
      : 'User-agent: *\nAllow: /\nDisallow: /thanks/\n\nSitemap: https://www.skippysroofracks.co.uk/sitemap-index.xml\n',
    { headers: { 'Content-Type': 'text/plain' } },
  );
