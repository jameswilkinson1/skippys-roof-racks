# Skippy's Roof Racks: website

A fast, static Astro site for Skippy's Roof Racks Ltd (Tuddenham, Ipswich). It isn't a shop. Products stay on eBay, and the site links to live, pre-filtered eBay searches, so there are **no products to maintain**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # serve the built site
```

## Where to edit things

| What | File |
|---|---|
| Phone, email, address, opening hours, WhatsApp, Thule claim | `src/data/site.ts` → `site` |
| **Hire prices, deposit, fleet sizes, what's included** | `src/data/site.ts` → `hire` (currently **placeholders**) |
| Hire terms page | `src/pages/roof-box-hire/terms.astro` (currently **placeholder** terms) |
| Google rating fallback numbers | `src/data/site.ts` → `site.google` |
| Hand-picked Google reviews (tagged per page) | `src/data/reviews.ts` |
| Menu | `src/data/site.ts` → `nav` |
| eBay category links | the `query` on each tile, built by `src/lib/ebay.ts` |
| Guides/blog posts | `src/content/guides/*.mdx` (see `docs/guide-writing-brief.md`) |
| Colours, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| Photos | `src/assets/images/` (`site/`, `products/`, `customers/`) |

### Adding a guide
Copy any file in `src/content/guides/`, change the frontmatter and write the body in Markdown. It's automatically added to `/guides/`, the sitemap, related-guide lists and the home page. In the text you can use `<CTABox type="hire" />` and `<Callout type="tip" title="…">…</Callout>`.

## Forms (hire, fit check, repairs, contact)
Forms post to [Web3Forms](https://web3forms.com) (free, no server). Create an access key with `info@skippysroofracks.co.uk` and paste it into `site.forms.accessKey`. **Until then, each form opens a pre-filled email to info@** so no enquiry is lost.

## Google reviews (live)
Reviews are static by default (hand-picked, in `src/data/reviews.ts`). To make the rating, review count and newest reviews update automatically:
1. Create a Google Maps Platform key with **Places API (New)** enabled.
2. Add `GOOGLE_PLACES_API_KEY` as an environment variable in your host (see `.env.example`).
3. Schedule a rebuild, e.g. a weekly Vercel Deploy Hook triggered by a cron service.

The key is only used at build time and is never sent to browsers. Place ID: `ChIJGTQXNCqf2UcRRfYaZdoSLLw`.

## Deploying
Built for Vercel (`vercel.json` adds proper 301s from the old WordPress URLs), but any static host works.
⚠️ When pointing `skippysroofracks.co.uk` at the new host, change **only** the A/CNAME records. Leave the **MX (email) records** alone.

## Before launch checklist
- [ ] Replace placeholder hire prices, fleet and terms; set `hire.pricesConfirmed = true`
- [ ] Add the Web3Forms access key and send a test enquiry from each form
- [ ] Confirm team names/roles on `/about/` (Steve, Angela, Isabel, Violet)
- [ ] Get permission for customer photos in `src/assets/images/customers/` (taken from Google reviews), or swap for your own
- [ ] Optional: add `GOOGLE_PLACES_API_KEY` for live reviews; set `site.whatsapp` to show WhatsApp buttons
- [ ] After launch: submit `/sitemap-index.xml` in Google Search Console, update the Google Business Profile website link, and claim the Thule dealer-locator listing (Locally.com) so it stops showing "Closed"

## Search engine indexing
The site is **noindex by default** (every page has `noindex, nofollow`), so preview/showcase deployments never appear in Google. At launch, set the environment variable `PUBLIC_SITE_LIVE=true` in Vercel (Production) and redeploy. That switches indexing on and adds the sitemap to `robots.txt`.
