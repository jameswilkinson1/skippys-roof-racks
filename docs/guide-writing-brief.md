# Guide writing brief: Skippy's Roof Racks

You are writing SEO guides for the **Guides** section of skippysroofracks.co.uk, built in Astro 7. Each guide is one MDX file in `src/content/guides/<slug>.mdx`.

## About the business (use only these facts)

- **Skippy's Roof Racks Ltd** is a family-run Thule specialist at Units 3 & 4 Tuddenham Hall, Grundisburgh Road, Tuddenham, Ipswich IP6 9DD (Suffolk). Run by Steve and Angela since 2012.
- **The only official Thule Service Centre in the UK** (the client's own claim; use this wording exactly). Thule's customer service regularly refers customers to them for repairs and spare parts.
- Authorised Thule dealer. Sells **new and used** Thule kit: roof boxes, roof bars, fitting kits, bike carriers, dog crates, child bike seats, strollers, water/winter sports carriers and spare parts. **Never say "refurbished".** Use "used", "ex-display" or "nearly new".
- Stock is sold through their eBay shop (100% positive feedback, 30,000+ ratings). Collection from Tuddenham, or UK delivery.
- **Free fitting with purchase** at their Tuddenham site, plus a demo of how to use the kit.
- **Roof box and roof bar hire** (Ipswich & Suffolk). **Never state hire prices.** Say "see our hire page for current prices".
- Repairs Thule bike carriers (EasyFold, VeloSpace, VeloCompact, ProRide etc.), roof box locks and hinges, and supplies keys and lock cylinders (N001–N250), including parts for discontinued products. Repairs can be done by post.
- Rated 5.0 on Google from 280+ reviews.
- Opening hours: Mon–Fri 8:30–16:00, Sat 9:00–12:00. Phone 01473 785810.

**Do NOT invent** prices, stock levels, staff anecdotes, customer stories, quotes, statistics or test results. You may quote these real Google reviews verbatim, attributed to the named reviewer:
- Ryan K: "We purchased a 595L waterproof roof luggage bag which carried 4 suitcases (one 75cm and 3 carry ons)."
- Jason Thomson: "They were very helpful, showing me how to fit it and making sure I was comfortable fitting it. Even showing me the best way to lift it onto the roof bars."
- Nick Cook: "There's nothing that the staff at Skippy's don't know about Thule roof bars."
- Matt Greenhalgh: "Just send your vehicle info and they suggest the correct part! Easy."
- Natalie Skyrme-Jones: "He talked me through the repair and what was needed and guided me to actually fix it myself."
- Peter Mellody: "I got a second hand like new set of roof bars and a roof box for almost half the price of buying new."

## Accuracy rules (important)

- **Verify every product spec** (litres, dimensions, max load, model names and generations) against thule.com (prefer `https://www.thule.com/en-gb/...`) or another reliable source using WebSearch/WebFetch. If you can't verify a number, give a range or leave it out. Don't guess.
- Current Thule roof box lines to cover: **Motion 3** (replaced Motion XT), **Force 3** (replaced Force XT), **Pulse 2**, plus older Motion XT / Force XT / Touring / Dynamic / Vector, which customers often buy used. Check current names and sizes.
- UK law and safety: check claims (Highway Code, insurance, MOT, roof load limits in the vehicle handbook). Keep advice general and tell readers to check their vehicle handbook and the product manual.
- Use UK English (litres, colour, tyre, metres). Metric first, imperial in brackets where helpful. Speeds in mph.

## Voice

Friendly, expert and practical, like Steve talking customers through it in the workshop. Short paragraphs. Answer the question in the first 2 sentences. No fluff, no "In today's fast-paced world". No emojis. Use "we" for Skippy's sparingly and naturally (e.g. "We see this a lot in the workshop" is fine; invented stories are not). Use sentence-case headings.

## File format (exact)

```mdx
---
title: "What size roof box do I need? A UK guide to litres"   # ≤ 65 chars, contains primary keyword
description: "..."              # meta description, 140–160 chars, includes primary keyword + benefit
pubDate: 2026-10-03
category: roof-boxes             # roof-boxes | roof-bars | bike-carriers | repairs-parts
image: ../../assets/images/site/yard-range-rover-roof-box.jpg   # use the image assigned to you below
imageAlt: "..."                  # describe the actual photo; don't claim a model you can't see
quickAnswer: "..."               # 2–3 sentence direct answer (featured-snippet style), plain text
cta: hire                        # hire | used-boxes | roof-bars | bike-carriers | repairs | fit-my-car | keys
faqs:                            # 3–5 extra questions not fully covered in the body, plain-text answers (1–3 sentences)
  - q: "..."
    a: "..."
related:                         # 2–3 slugs from the guide list below
  - what-fits-in-a-roof-box
keywords:                        # primary first, then 3–6 secondary (internal tracking only)
  - what size roof box do i need
---

Intro paragraph (no H1; the page template renders the title as H1)...

## Section heading

...
```

- Body: **900–1,500 words**, H2/H3 only, at least one **markdown table** where it helps, bullet lists where natural.
- Don't repeat the quickAnswer verbatim in the body intro.
- Don't put the FAQs in the body. They're rendered from frontmatter.
- Escape `<` and `{` in prose (MDX). Avoid raw HTML.

## MDX components (available without imports)

- `<CTABox type="hire" />`: a full-width call-to-action box. Types: `hire`, `used-boxes`, `roof-bars`, `bike-carriers`, `repairs`, `fit-my-car`, `keys`. Use **one** mid-article, after the section where it's most relevant. The template adds another at the end automatically.
- `<Callout type="tip" title="Steve's tip">Text…</Callout>`: types `tip` | `warning` | `info`. Use 1–2 per post, kept general (no invented anecdotes).

## Internal links (use real paths with trailing slash)

Every post must link to **at least 2 money pages** and **1–2 other guides**, with natural, descriptive anchor text (not "click here").

Money pages:
- `/roof-box-hire/`: roof box hire (Ipswich & Suffolk)
- `/roof-bar-hire/`: roof bar hire
- `/used-thule/`: used & ex-display Thule
- `/thule-roof-boxes/`: Thule roof boxes (new & used, on eBay)
- `/thule-roof-bars/`: Thule roof bars & fitting kits
- `/thule-bike-carriers/`: Thule bike carriers
- `/more-thule/`: dog crates, child bike seats, strollers, kayak & ski carriers
- `/fitting/`: free fitting with purchase
- `/thule-repairs/`: Thule repairs (official Thule Service Centre)
- `/thule-spare-parts/`: Thule spare parts, keys & locks
- `/which-roof-bars-fit-my-car/`: "tell us your car" form plus Thule's fit guide
- `/contact/`

Guides (slug → topic):
1. `what-size-roof-box-do-i-need`: litres explained, size by family/car
2. `what-fits-in-a-roof-box`: suitcases, pushchairs, skis, golf bags, camping kit
3. `how-many-suitcases-fit-in-a-roof-box`: suitcases per size, 320–600L+
4. `thule-motion-vs-force-vs-pulse`: Motion 3 vs Force 3 vs Pulse 2 (plus older XT)
5. `hire-or-buy-a-roof-box`: cost comparison, when used beats hire
6. `buying-a-used-thule-roof-box`: 10-point checklist
7. `roof-box-without-roof-rails`: roof types (normal, raised rails, flush rails, fixpoints)
8. `roof-box-speed-limit-fuel-uk-rules`: speed, fuel/range, insurance, roof load
9. `how-to-fit-a-thule-roof-box`: step by step, lifting safely, mounting systems
10. `how-to-pack-a-roof-box`: weight distribution, what goes up top, limits
11. `roof-boxes-for-electric-cars`: range impact, roof load, popular EVs
12. `which-thule-roof-bars`: WingBar Evo vs WingBar Edge vs ProBar vs SquareBar
13. `thule-fitting-kits-explained`: foot packs + kits, kit numbers
14. `towbar-vs-roof-vs-boot-bike-racks`: EasyFold, VeloSpace, Epos, ProRide, OutWay
15. `thule-bike-rack-repair-common-faults`: tilt pedal, locks, lights, straps
16. `lost-thule-roof-box-key`: finding the N-number, replacement keys and lock cylinders

## Assigned images (frontmatter `image`)

| Slug | image |
|---|---|
| what-size-roof-box-do-i-need | ../../assets/images/site/yard-range-rover-roof-box.jpg (grey Range Rover Sport with a black roof box, Suffolk yard) |
| what-fits-in-a-roof-box | ../../assets/images/site/roof-box-skis-inside.jpg (open roof box with skis inside) |
| how-many-suitcases-fit-in-a-roof-box | ../../assets/images/products/thule-pulse-2-xl.jpg (black Thule Pulse 2 roof box in showroom with fittings) |
| thule-motion-vs-force-vs-pulse | ../../assets/images/site/showroom-force-xt.jpg (matt black Thule Force XT in the showroom) |
| hire-or-buy-a-roof-box | ../../assets/images/site/yard-van-roof-box.jpg (orange MPV with black roof box outside the workshop) |
| buying-a-used-thule-roof-box | ../../assets/images/products/thule-force-3-small.jpg (grey Thule Force 3 with mounting hardware) |
| roof-box-without-roof-rails | ../../assets/images/site/vw-id-buzz-roof-bars.jpg (black VW ID. Buzz with black Thule roof bars) |
| roof-box-speed-limit-fuel-uk-rules | ../../assets/images/site/skoda-roof-box-mountains.jpg (white Skoda SUV with roof box, mountain valley) |
| how-to-fit-a-thule-roof-box | ../../assets/images/site/yard-lexus-roof-box.jpg (grey Lexus saloon with black roof box at the yard) |
| how-to-pack-a-roof-box | ../../assets/images/site/showroom-roof-box.jpg (black Thule roof box with mounting hardware in showroom) |
| roof-boxes-for-electric-cars | ../../assets/images/site/yard-mercedes-roof-box.jpg (grey Mercedes SUV with grey Thule roof box at the yard) |
| which-thule-roof-bars | ../../assets/images/site/wingbar-roof-bars.jpg (silver Thule WingBar Evo bars with instructions) |
| thule-fitting-kits-explained | ../../assets/images/products/thule-fitting-kit-6080.jpg (boxed Thule fitting kit 6080) |
| towbar-vs-roof-vs-boot-bike-racks | ../../assets/images/products/thule-994-outway.jpg (Thule OutWay boot-mounted carrier with two bikes) |
| thule-bike-rack-repair-common-faults | ../../assets/images/products/thule-velospace-xt-2.jpg (Thule VeloSpace XT 2 towbar carrier in showroom) |
| lost-thule-roof-box-key | ../../assets/images/products/thule-lock-set-n201-n250.jpg (two Thule lock cylinders with keys) |

## Rules for agents

- Only create or edit **your assigned files** in `src/content/guides/`. Don't touch any other file.
- Don't run `astro build`, `astro dev` or `npm install` (another process is building).
- Before finishing, re-read each file and check: valid YAML frontmatter (quote strings that contain colons), every link from the allowed list, word count in range, no invented facts, no "refurbished".
